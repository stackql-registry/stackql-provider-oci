// Deterministic operation classifier shared by build_inventory.mjs and
// map_operations.mjs. Encodes the mapping rules from CLAUDE.md step 2 as
// code (rules, never hand-edits). OCI operationIds are uniform across the
// tier-1 specs (List<Plural>, Get<Noun>, Create<Noun>, Update<Noun>,
// Delete<Noun>, Change<Noun>Compartment, action verbs), so classification is
// operationId-led with path context for exec resource naming.

import { CORE_TAG_TO_SERVICE } from './core_split.mjs';

// CamelCase -> snake_case, acronym-aware (IPSec, VCN, DRG, HSM, DbHome...)
export function toSnake(s) {
  return String(s)
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .toLowerCase();
}

// minimal pluralizer sufficient for OCI resource nouns; validation in the
// map step catches any resource-name collisions it produces
export function pluralize(snake) {
  if (/s$/.test(snake)) return snake; // already plural (or s-final): keys, vcns, dhcp_options
  if (/(?:x|z|ch|sh)$/.test(snake)) return `${snake}es`;
  if (/[^aeiou]y$/.test(snake)) return snake.replace(/y$/, 'ies');
  return `${snake}s`;
}

// skip rules, evaluated first; return a reason string or null
function skipReason({ indexKey, verb, opId, opTags }) {
  if (verb === 'head') {
    return 'HEAD metadata operation - no SQL projection';
  }
  if (indexKey === 'objectstorage' && ['GetObject', 'PutObject', 'UploadPart'].includes(opId)) {
    return 'object data plane (streaming body) - standing exclusion';
  }
  if (indexKey === 'streaming' && ['PutMessages', 'GetMessages', 'CreateCursor', 'CreateGroupCursor', 'ConsumerHeartbeat', 'ConsumerCommit'].includes(opId)) {
    return 'streaming message data plane - standing exclusion';
  }
  if (indexKey === 'monitoring' && opId === 'PostMetricData') {
    return 'metric ingestion data plane (separate telemetry-ingestion host)';
  }
  if (indexKey === 'key' && (opTags.includes('kmsManagement') || opTags.includes('kmsCrypto'))) {
    return 'per-vault dedicated endpoint (management/crypto host per vault) - not routable via a region server template';
  }
  return null;
}

// resource noun from the path: last non-parameter, non-action collection segment
function pathResource(pathKey) {
  const segs = pathKey.split('/').filter((s) => s && !s.startsWith('{') && !/^\d{8}$/.test(s));
  const actionsIdx = segs.indexOf('actions');
  const collection = actionsIdx > 0 ? segs[actionsIdx - 1] : segs[segs.length - 1];
  return collection ? pluralize(toSnake(collection)) : null;
}

/**
 * Classify one operation.
 * @returns {{ service, resource, methodName, sqlVerb, skipReason }}
 */
export function classifyOperation({ indexKey, catalogService, pathKey, verb, op }) {
  const opId = op.operationId || '';
  const opTags = op.tags || [];

  // proposed service: the core spec divides by tag, everything else is 1:1
  let service = catalogService;
  if (indexKey === 'iaas') {
    const tag = opTags.find((t) => CORE_TAG_TO_SERVICE[t]);
    if (!tag) {
      throw new Error(`iaas operation without a recognised core tag: ${opId} ${pathKey}`);
    }
    service = CORE_TAG_TO_SERVICE[tag];
  }

  const skip = skipReason({ indexKey, verb, opId, opTags });
  if (skip) {
    return { service, resource: '', methodName: '', sqlVerb: 'skip', skipReason: skip };
  }

  let m;
  if (verb === 'get' && (m = opId.match(/^List(.+)$/))) {
    return { service, resource: toSnake(m[1]), methodName: 'list', sqlVerb: 'select', skipReason: '' };
  }
  if (verb === 'get' && (m = opId.match(/^Get(.+)$/))) {
    return { service, resource: pluralize(toSnake(m[1])), methodName: 'get', sqlVerb: 'select', skipReason: '' };
  }
  if ((m = opId.match(/^Create(.+)$/))) {
    return { service, resource: pluralize(toSnake(m[1])), methodName: 'create', sqlVerb: 'insert', skipReason: '' };
  }
  if ((m = opId.match(/^Launch(.+)$/))) {
    return { service, resource: pluralize(toSnake(m[1])), methodName: 'launch', sqlVerb: 'insert', skipReason: '' };
  }
  if ((m = opId.match(/^Update(.+)$/))) {
    return { service, resource: pluralize(toSnake(m[1])), methodName: 'update', sqlVerb: 'update', skipReason: '' };
  }
  if (verb === 'delete' && (m = opId.match(/^Delete(.+)$/))) {
    return { service, resource: pluralize(toSnake(m[1])), methodName: 'delete', sqlVerb: 'delete', skipReason: '' };
  }
  if (verb === 'delete' && (m = opId.match(/^Terminate(.+)$/))) {
    return { service, resource: pluralize(toSnake(m[1])), methodName: 'terminate', sqlVerb: 'delete', skipReason: '' };
  }
  if (verb === 'delete' && (m = opId.match(/^Detach(.+)$/))) {
    return { service, resource: pathResource(pathKey) || pluralize(toSnake(m[1])), methodName: 'detach', sqlVerb: 'delete', skipReason: '' };
  }
  if ((m = opId.match(/^Attach(.+)$/))) {
    return { service, resource: pathResource(pathKey) || pluralize(toSnake(m[1])), methodName: 'attach', sqlVerb: 'insert', skipReason: '' };
  }
  if ((m = opId.match(/^Change(.+)Compartment$/))) {
    return { service, resource: pluralize(toSnake(m[1])), methodName: 'change_compartment', sqlVerb: 'exec', skipReason: '' };
  }
  // everything else is an action: EXEC named by the operation, resource from the path
  const resource = pathResource(pathKey);
  return {
    service,
    resource: resource || toSnake(opId),
    methodName: toSnake(opId),
    sqlVerb: 'exec',
    skipReason: ''
  };
}

const RESPONSE_VERBS = ['get', 'post', 'put', 'patch', 'delete', 'head'];

function derefParam(p, doc) {
  if (p && p.$ref && doc) {
    const m = p.$ref.match(/^#\/components\/parameters\/(.+)$/);
    if (m && doc.components?.parameters?.[m[1]]) return doc.components.parameters[m[1]];
  }
  return p;
}

export function operationFacts({ pathKey, pathItem, verb, op, doc }) {
  const params = [...(pathItem.parameters || []), ...(op.parameters || [])].map((p) => derefParam(p, doc));
  const queryNames = params.filter((p) => p.in === 'query').map((p) => p.name);
  const compartmentScoped = queryNames.includes('compartmentId');
  const paginated = queryNames.includes('page');
  const hasBody = !!op.requestBody;

  let responseShape = 'none';
  let workRequest = false;
  for (const [code, resp] of Object.entries(op.responses || {})) {
    if (!/^2\d\d$/.test(code)) continue;
    if (resp.headers && Object.keys(resp.headers).some((h) => h.toLowerCase() === 'opc-work-request-id')) {
      workRequest = true;
    }
    const schema = resp.content?.['application/json']?.schema;
    if (!schema) {
      if (responseShape === 'none' && resp.content) responseShape = 'scalar';
      continue;
    }
    if (schema.type === 'array') {
      responseShape = 'bare_array';
    } else if (schema.type === 'string' || schema.format === 'binary') {
      responseShape = 'scalar';
    } else {
      responseShape = 'object';
    }
  }
  return { compartmentScoped, paginated, hasBody, responseShape, workRequest };
}

export function eachOperation(doc, cb) {
  for (const [pathKey, pathItem] of Object.entries(doc.paths || {})) {
    for (const verb of RESPONSE_VERBS) {
      if (pathItem[verb]) cb({ pathKey, pathItem, verb, op: pathItem[verb] });
    }
  }
}
