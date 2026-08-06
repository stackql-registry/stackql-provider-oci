// Mock OCI API server for the integration suite. Zero dependencies; serves
// real OCI wire shapes on one port (the version-date base paths keep the
// services' routes disjoint, mirroring the shared iaas host) and enforces
// the oci_signing_v1 contract:
//
//   - every request must carry Authorization: Signature version="1",
//     keyId="<tenancy>/<user>/<fingerprint>", algorithm="rsa-sha256"
//   - GET/DELETE must sign exactly `date (request-target) host`
//   - POST/PUT must sign the six-header set including x-content-sha256,
//     and the digest must match the actual body (else 400, so a
//     successful INSERT is itself the assertion - stackql core pattern)
//
// Every request is recorded; the runner reads GET /__log for assertions
// (parsed auth fields, query params, bodies) and POST /__reset clears it.
//
// Routes (wire shapes match the vendor specs):
//   GET    /20160918/compartments        bare array, compartmentId scope,
//                                        two-page opc-next-page traversal
//   GET    /20160918/vcns                bare array, compartmentId scope
//   POST   /20160918/vcns                create -> VCN object
//   GET    /20160918/vcns/{id}           VCN object
//   PUT    /20160918/vcns/{id}           update -> VCN object
//   DELETE /20160918/vcns/{id}           204 + opc-work-request-id
//   POST   /20160918/instances/{id}      instance action (query param
//                                        `action`) -> instance object
//   GET    /n/{ns}/b/{bucket}/o          ListObjects envelope with
//                                        nextStartWith body-token paging
//
// Usage: node tests/integration/mock_oci_server.mjs [--port 9915]

import http from 'http';
import crypto from 'crypto';
import { URL } from 'url';

const args = process.argv.slice(2);
const portIdx = args.indexOf('--port');
const PORT = portIdx !== -1 ? Number(args[portIdx + 1]) : 9915;

const GET_SIGNED_HEADERS = 'date (request-target) host';
const BODY_SIGNED_HEADERS = 'date (request-target) host content-length content-type x-content-sha256';

const requestLog = [];

function parseAuth(req) {
  const auth = req.headers.authorization || '';
  const fields = {};
  for (const m of auth.matchAll(/(\w+)="([^"]*)"/g)) {
    fields[m[1]] = m[2];
  }
  return {
    scheme: auth.split(' ')[0] || '',
    version: fields.version || '',
    algorithm: fields.algorithm || '',
    keyId: fields.keyId || '',
    signedHeaders: fields.headers || ''
  };
}

function json(res, code, body, headers = {}) {
  const payload = body === null ? '' : JSON.stringify(body);
  res.writeHead(code, { 'content-type': 'application/json', ...headers });
  res.end(payload);
}

function authFailure(res, reason) {
  json(res, 401, { code: 'NotAuthenticated', message: reason });
}

// signature-shape enforcement per verb class; returns false after responding
function enforceAuth(req, res, auth, body) {
  if (auth.scheme !== 'Signature' || auth.algorithm !== 'rsa-sha256') {
    authFailure(res, `bad auth scheme/algorithm: ${auth.scheme}/${auth.algorithm}`);
    return false;
  }
  // live OCI normalises the request line before reconstructing the signing
  // string, so a dangling "?" (empty query) invalidates the signature over
  // (request-target) - reject it the way live OCI does (found live: 401 on
  // every no-query body verb; any-sdk operation_store.go empty-query fix)
  if (req.url.endsWith('?')) {
    authFailure(res, 'request-target carries a dangling "?" (empty query string)');
    return false;
  }
  const wantsBodyHeaders = ['POST', 'PUT', 'PATCH'].includes(req.method);
  const expected = wantsBodyHeaders ? BODY_SIGNED_HEADERS : GET_SIGNED_HEADERS;
  if (auth.signedHeaders !== expected) {
    json(res, 400, { code: 'InvalidSignature', message: `unexpected signed headers: '${auth.signedHeaders}' (want '${expected}')` });
    return false;
  }
  if (wantsBodyHeaders) {
    const digest = crypto.createHash('sha256').update(body).digest('base64');
    if (req.headers['x-content-sha256'] !== digest) {
      json(res, 400, { code: 'InvalidSignature', message: 'x-content-sha256 mismatch' });
      return false;
    }
    // live OCI reconstructs the signing string from the received headers, so
    // a signed-but-absent (or mismatched) content-length fails verification
    // even when the digest is right - e.g. a chunked request body. Enforce
    // the same strictness here (found live: 401 NotAuthenticated on POST).
    if (req.headers['transfer-encoding']) {
      authFailure(res, `transfer-encoding '${req.headers['transfer-encoding']}' sent; OCI requires a concrete content-length`);
      return false;
    }
    if (req.headers['content-length'] !== String(Buffer.byteLength(body))) {
      authFailure(res, `content-length '${req.headers['content-length'] || '(absent)'}' does not match body length ${Buffer.byteLength(body)}`);
      return false;
    }
    if (!(req.headers['content-type'] || '').startsWith('application/json')) {
      authFailure(res, `content-type '${req.headers['content-type'] || '(absent)'}' not the signed application/json`);
      return false;
    }
  }
  return true;
}

const COMPARTMENTS_PAGE_1 = [
  { id: 'ocid1.compartment.oc1..aaaa', compartmentId: 'ocid1.tenancy.oc1..root', name: 'dev', description: 'dev compartment', lifecycleState: 'ACTIVE', timeCreated: '2025-01-01T00:00:00Z' },
  { id: 'ocid1.compartment.oc1..bbbb', compartmentId: 'ocid1.tenancy.oc1..root', name: 'test', description: 'test compartment', lifecycleState: 'ACTIVE', timeCreated: '2025-01-02T00:00:00Z' }
];
const COMPARTMENTS_PAGE_2 = [
  { id: 'ocid1.compartment.oc1..cccc', compartmentId: 'ocid1.tenancy.oc1..root', name: 'prod', description: 'prod compartment', lifecycleState: 'ACTIVE', timeCreated: '2025-01-03T00:00:00Z' }
];

const VCN = {
  id: 'ocid1.vcn.oc1..mock',
  compartmentId: 'ocid1.compartment.oc1..aaaa',
  cidrBlock: '10.99.0.0/24',
  cidrBlocks: ['10.99.0.0/24'],
  displayName: 'stackql-integration-vcn',
  lifecycleState: 'AVAILABLE',
  timeCreated: '2025-01-01T00:00:00Z'
};

const OBJECTS_PAGE_1 = { objects: [{ name: 'alpha.json', size: 10 }, { name: 'beta.json', size: 20 }], nextStartWith: 'gamma.json' };
const OBJECTS_PAGE_2 = { objects: [{ name: 'gamma.json', size: 30 }] };

function route(req, res, url, auth, body) {
  const q = url.searchParams;
  const p = url.pathname;

  // identity: two-page opc-next-page traversal, compartmentId scoped
  // (the identity spec's collection paths carry a trailing slash)
  if (req.method === 'GET' && (p === '/20160918/compartments' || p === '/20160918/compartments/')) {
    if (!q.get('compartmentId')) {
      return json(res, 400, { code: 'MissingParameter', message: 'compartmentId is required' });
    }
    if (q.get('page') === 'PAGE2TOKEN') {
      return json(res, 200, COMPARTMENTS_PAGE_2);
    }
    return json(res, 200, COMPARTMENTS_PAGE_1, { 'opc-next-page': 'PAGE2TOKEN' });
  }

  // network: VCN lifecycle
  if (req.method === 'GET' && p === '/20160918/vcns') {
    if (!q.get('compartmentId')) {
      return json(res, 400, { code: 'MissingParameter', message: 'compartmentId is required' });
    }
    return json(res, 200, [VCN]);
  }
  if (req.method === 'POST' && p === '/20160918/vcns') {
    if (process.env.MOCK_DEBUG_HEADERS) console.error('RAW_URL ' + req.url + '\nRAW_HEADERS ' + JSON.stringify(req.rawHeaders));
    let details = {};
    try {
      details = JSON.parse(body.toString() || '{}');
    } catch {
      return json(res, 400, { code: 'InvalidParameter', message: 'malformed body' });
    }
    if (!details.compartmentId || !details.cidrBlock) {
      return json(res, 400, { code: 'MissingParameter', message: 'compartmentId and cidrBlock are required in CreateVcnDetails' });
    }
    return json(res, 200, { ...VCN, ...details, lifecycleState: 'PROVISIONING' }, { 'opc-work-request-id': 'ocid1.coreservicesworkrequest.oc1..mock' });
  }
  let m = /^\/20160918\/vcns\/([^/]+)$/.exec(p);
  if (m) {
    if (req.method === 'GET') {
      return json(res, 200, { ...VCN, id: m[1] });
    }
    if (req.method === 'PUT') {
      let details = {};
      try {
        details = JSON.parse(body.toString() || '{}');
      } catch {
        return json(res, 400, { code: 'InvalidParameter', message: 'malformed body' });
      }
      return json(res, 200, { ...VCN, id: m[1], ...details });
    }
    if (req.method === 'DELETE') {
      res.writeHead(204, { 'opc-work-request-id': 'ocid1.coreservicesworkrequest.oc1..mockdelete' });
      return res.end();
    }
  }

  // compute: instance action EXEC
  m = /^\/20160918\/instances\/([^/]+)$/.exec(p);
  if (m && req.method === 'POST') {
    const action = q.get('action');
    if (!action) {
      return json(res, 400, { code: 'MissingParameter', message: 'action is required' });
    }
    return json(res, 200, {
      id: m[1],
      compartmentId: 'ocid1.compartment.oc1..aaaa',
      displayName: 'stackql-integration-instance',
      availabilityDomain: 'AD-1',
      shape: 'VM.Standard.E2.1.Micro',
      region: 'us-ashburn-1',
      lifecycleState: action === 'STOP' ? 'STOPPING' : 'STARTING',
      timeCreated: '2025-01-01T00:00:00Z'
    }, { 'opc-work-request-id': 'ocid1.coreservicesworkrequest.oc1..mockaction' });
  }

  // object storage: ListObjects with nextStartWith body-token paging
  m = /^\/n\/([^/]+)\/b\/([^/]+)\/o$/.exec(p);
  if (m && req.method === 'GET') {
    if (q.get('start') === 'gamma.json') {
      return json(res, 200, OBJECTS_PAGE_2);
    }
    return json(res, 200, OBJECTS_PAGE_1);
  }

  json(res, 404, { code: 'NotFound', message: `no mock route for ${req.method} ${p}` });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);

  // control plane
  if (url.pathname === '/__log') {
    return json(res, 200, requestLog);
  }
  if (url.pathname === '/__reset') {
    requestLog.length = 0;
    return json(res, 200, { ok: true });
  }
  if (url.pathname === '/__health') {
    return json(res, 200, { ok: true });
  }

  const chunks = [];
  req.on('data', (c) => chunks.push(c));
  req.on('end', () => {
    const body = Buffer.concat(chunks);
    const auth = parseAuth(req);
    requestLog.push({
      method: req.method,
      path: url.pathname,
      query: Object.fromEntries(url.searchParams.entries()),
      auth,
      contentType: req.headers['content-type'] || '',
      body: body.length > 0 ? body.toString() : ''
    });
    if (!enforceAuth(req, res, auth, body)) {
      return;
    }
    route(req, res, url, auth, body);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`mock OCI server listening on 127.0.0.1:${PORT}`);
});
