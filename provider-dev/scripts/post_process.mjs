// Post-processes the generated provider (provider-dev/openapi/src/oci) with
// the deterministic facts the generator cannot know:
//
// 1. servers - per-service regional endpoints from spec_catalog.csv
//    (host_template + version-date base path), replacing the meaningless
//    vendor placeholder hosts. The {region} variable defaults to
//    us-ashburn-1 and resolves from OCI_REGION via x-stackQL-envVar
//    (WHERE-supplied value -> env var -> default; any-sdk v0.5.4-alpha01).
//
// 2. pagination - service-level x-stackQL-config for the OCI convention
//    (`page` request query parameter, `opc-next-page` response header),
//    emitted only for services where at least one operation actually
//    paginates that way. Operations that paginate differently (object
//    storage ListObjects/ListObjectVersions: `start` query parameter,
//    `nextStartWith` body token) get method-level overrides, which win
//    over the service default per any-sdk config inheritance.
//
// 3. snake_case surface - `snake_case_aliases: true` on the provider config
//    (snake_case column names in SELECT/DESCRIBE output) and
//    `request.nativeCasing: camel` on every method (snake_case WHERE and
//    INSERT keys resolve against the camelCase wire parameters and body
//    attributes; the wire casing itself is untouched). Both are any-sdk
//    v0.5.4-alpha01 primitives; a snake alias never clobbers a real wire
//    name of the same spelling.
//
// 4. queryParamPushdown - method-level, derived from each operation's
//    declared query parameters (any-sdk's top/select pushdowns are
//    dialect-agnostic; filter/orderBy render OData syntax only, which OCI
//    does not speak, so WHERE pushdown remains ordinary query-parameter
//    mapping):
//      - top: SQL LIMIT -> the `limit` query parameter, clamped to the
//        parameter's declared maximum (1000 when the spec is silent)
//      - select: SQL projection -> a `fields` query parameter whose schema
//        enumerates field names (object storage ListObjects); the enum is
//        the supportedColumns allowlist and the engine's all-or-nothing
//        rule keeps it inert anywhere the projection is not fully covered
//
// Everything is derived from the catalog and the specs themselves - no
// hand-edits. Validates and fails without writing on any violation.
//
// Usage: node provider-dev/scripts/post_process.mjs [--provider-dir DIR]

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { REPO_ROOT, CONFIG_DIR, loadCatalog } from './lib/catalog.mjs';

const DEFAULT_PROVIDER_DIR = path.join(REPO_ROOT, 'provider-dev', 'openapi', 'src', 'oci', 'v00.00.00000');
const REGION_DEFAULT = 'us-ashburn-1';
const REGION_ENV_VAR = 'OCI_REGION';

const HEADER_PAGINATION = {
  requestToken: { key: 'page', location: 'query' },
  responseToken: { key: 'opc-next-page', location: 'header' }
};

const START_PAGINATION = {
  requestToken: { key: 'start', location: 'query' },
  responseToken: { key: 'nextStartWith', location: 'body' }
};

// Core services share the iaas catalog entry; the kms/vault/secrets family
// and logging keep their own index keys (mirrors service_names.json).
function loadServiceToCatalogEntry() {
  const serviceNames = JSON.parse(fs.readFileSync(path.join(CONFIG_DIR, 'service_names.json'), 'utf8'));
  const catalog = loadCatalog();
  const byIndexKey = Object.fromEntries(catalog.map((e) => [e.index_key, e]));
  const map = {};
  for (const [k, v] of Object.entries(serviceNames)) {
    if (k.startsWith('__')) continue;
    const indexKey = k.split(':')[0];
    if (!byIndexKey[indexKey]) {
      throw new Error(`service_names.json key ${k} has no catalog entry (index_key ${indexKey})`);
    }
    map[v] = byIndexKey[indexKey];
  }
  return map;
}

// Multi-host catalog entries (semicolon-separated) resolve deterministically:
// drop ingestion-only hosts (telemetry-ingestion serves only the skipped
// PostMetricData), then prefer the .oci. form the API docs lead with
// (usage lists both usageapi hosts) - both rules recorded in NOTES.md #4.
function resolveHostTemplate(entry) {
  const hosts = entry.host_template.split(';').map((h) => h.trim()).filter(Boolean);
  if (hosts.length === 0) {
    throw new Error(`catalog entry ${entry.index_key} has no host_template`);
  }
  const candidates = hosts.filter((h) => !h.startsWith('telemetry-ingestion.'));
  const preferred = candidates.find((h) => h.includes('.oci.oraclecloud.com')) || candidates[0];
  if (!preferred) {
    throw new Error(`catalog entry ${entry.index_key}: no usable host in ${entry.host_template}`);
  }
  return preferred;
}

function serverUrlFor(entry) {
  const host = resolveHostTemplate(entry);
  const base = entry.version_in === 'basePath' ? entry.version_date : '';
  return `https://${host}${base}`;
}

function serversBlockFor(entry) {
  return [
    {
      url: serverUrlFor(entry),
      variables: {
        region: {
          default: REGION_DEFAULT,
          description: 'OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query.',
          'x-stackQL-envVar': REGION_ENV_VAR
        }
      }
    }
  ];
}

function resolveRef(ref, doc) {
  if (typeof ref !== 'string' || !ref.startsWith('#/')) return null;
  let node = doc;
  for (const part of ref.slice(2).split('/')) {
    node = node?.[part.replace(/~1/g, '/').replace(/~0/g, '~')];
    if (node === undefined) return null;
  }
  return node;
}

function deref(node, doc) {
  return node && node.$ref ? resolveRef(node.$ref, doc) : node;
}

// pagination style of one operation: 'header' (page/opc-next-page),
// 'start' (start/nextStartWith), or null
function paginationStyle(op, pathItem, doc) {
  const params = [...(pathItem.parameters || []), ...(op.parameters || [])]
    .map((p) => deref(p, doc))
    .filter(Boolean);
  const queryNames = new Set(params.filter((p) => p.in === 'query').map((p) => p.name));

  let hasNextPageHeader = false;
  let hasNextStartWithBody = false;
  for (const [code, respRaw] of Object.entries(op.responses || {})) {
    if (!/^2\d\d$/.test(code)) continue;
    const resp = deref(respRaw, doc);
    if (!resp) continue;
    for (const headerName of Object.keys(resp.headers || {})) {
      if (headerName.toLowerCase() === 'opc-next-page') hasNextPageHeader = true;
    }
    const schema = deref(resp.content?.['application/json']?.schema, doc);
    if (schema && deref(schema.properties?.nextStartWith, doc)) hasNextStartWithBody = true;
  }

  if (queryNames.has('start') && hasNextStartWithBody) return 'start';
  if (queryNames.has('page') && hasNextPageHeader) return 'header';
  return null;
}

const DEFAULT_LIMIT_MAX = 1000;

// mirrors any-sdk pkg/casing ToSnake closely enough for the OCI field-name
// vocabulary (camelCase, digit suffixes: timeCreated, md5, storageTier)
function toSnake(name) {
  return name
    .replace(/(.)([A-Z][a-z]+)/g, '$1_$2')
    .replace(/([a-z])([0-9]+)/g, '$1_$2')
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .toLowerCase();
}

// pushdown facts of one operation: the `limit` query parameter (top
// pushdown) and a `fields` query parameter with an enumerated field set
// (select pushdown). Returns null when neither applies.
function pushdownConfigFor(op, pathItem, doc) {
  const params = [...(pathItem.parameters || []), ...(op.parameters || [])]
    .map((p) => deref(p, doc))
    .filter((p) => p && p.in === 'query');
  const pushdown = {};

  const limitParam = params.find((p) => p.name === 'limit');
  if (limitParam) {
    const schema = deref(limitParam.schema, doc) || {};
    const max = Number.isInteger(schema.maximum) ? schema.maximum : DEFAULT_LIMIT_MAX;
    pushdown.top = { paramName: 'limit', maxValue: max };
  }

  const fieldsParam = params.find((p) => p.name === 'fields');
  if (fieldsParam) {
    const schema = deref(fieldsParam.schema, doc) || {};
    const itemSchema = schema.type === 'array' ? deref(schema.items, doc) || {} : schema;
    const supported = Array.isArray(itemSchema.enum) ? itemSchema.enum.filter((v) => typeof v === 'string') : [];
    if (supported.length > 1) {
      // the engine compares projection strings verbatim; the SQL surface is
      // snake_case, so carry both the wire names and their snake aliases
      const withSnake = [...new Set(supported.flatMap((v) => [v, toSnake(v)]))];
      pushdown.select = { paramName: 'fields', delimiter: ',', supportedColumns: withSnake };
    }
  }

  return Object.keys(pushdown).length > 0 ? pushdown : null;
}

// 5. scalar response transforms - operations whose responses are bare JSON
// scalars cannot project as select rows (the engine's column_anon schema
// error); a golang-template response transform reshapes the scalar into a
// one-row object, and response.schema_override documents the post-transform
// shape (aws provider precedent; provider-utils 0.7.7 docgen renders
// schema_override columns). Keyed by service.resource.method; validation
// fails if a key matches no generated method.
const SCALAR_TRANSFORMS = {
  'object_storage.namespaces.get': {
    schemaName: 'GetNamespaceTransformed',
    schema: {
      type: 'object',
      properties: {
        namespace: {
          type: 'string',
          description: 'The Object Storage namespace of the tenancy (top-level bucket container).'
        }
      }
    },
    transform: {
      type: 'golang_template_text_v0.1.0',
      body: '{{- $ns := getRegexpFirstMatch . "\\"([^\\"]+)\\"" -}}\n{"namespace": "{{ $ns }}"}'
    }
  }
};

// 6. optional-body drops - action operations whose requestBody is optional
// on the wire but whose body schema carries required attributes. The engine's
// exec surface demands every required body attribute whenever a requestBody
// is declared, forcing a body onto plain actions - and live OCI 400s
// InstanceAction bodies whose actionType is not a reset-family discriminator
// (found live: STOP/START never despatch). Dropping the optional body lets
// plain actions despatch bodyless; the reset-variant detail knobs are
// documented as out of scope until the engine supports optional exec bodies.
const OPTIONAL_BODY_DROPS = new Set(['compute.instances.instance_action']);

function opFromMethodRef(methodRef, doc, label, errors) {
  const m = /^#\/paths\/(.+)\/(get|post|put|patch|delete|head)$/.exec(methodRef || '');
  if (!m) {
    errors.push(`${label}: unparseable operation $ref ${methodRef}`);
    return null;
  }
  const pathKey = m[1].replace(/~1/g, '/').replace(/~0/g, '~');
  const pathItem = doc.paths?.[pathKey];
  const op = pathItem?.[m[2]];
  if (!op) {
    errors.push(`${label}: operation $ref target not found (${pathKey} ${m[2]})`);
    return null;
  }
  return { op, pathItem };
}

async function main() {
  const args = process.argv.slice(2);
  const dirIdx = args.indexOf('--provider-dir');
  const providerDir = dirIdx !== -1 ? args[dirIdx + 1] : DEFAULT_PROVIDER_DIR;
  const servicesDir = path.join(providerDir, 'services');

  if (!fs.existsSync(servicesDir)) {
    console.error(`Error: services dir not found: ${servicesDir} (run generate-provider first)`);
    process.exit(1);
  }

  const serviceToEntry = loadServiceToCatalogEntry();
  const files = fs.readdirSync(servicesDir).filter((f) => f.endsWith('.yaml'));
  const errors = [];
  const pending = []; // [filePath, doc] - written only if zero errors
  const report = [];
  const appliedScalarTransforms = new Set();
  const appliedBodyDrops = new Set();

  for (const file of files) {
    const service = file.replace(/\.yaml$/, '');
    const entry = serviceToEntry[service];
    if (!entry) {
      errors.push(`${service}: no catalog entry via service_names.json`);
      continue;
    }
    const filePath = path.join(servicesDir, file);
    const doc = yaml.load(fs.readFileSync(filePath, 'utf8'));

    // 1. servers
    doc.servers = serversBlockFor(entry);

    // 2. pagination facts across all operations
    const styles = new Set();
    for (const pathItem of Object.values(doc.paths || {})) {
      for (const verb of ['get', 'post', 'put', 'patch', 'delete']) {
        if (!pathItem[verb]) continue;
        const style = paginationStyle(pathItem[verb], pathItem, doc);
        if (style) styles.add(style);
      }
    }

    let serviceStyle = null;
    if (styles.has('header')) {
      serviceStyle = 'header';
      doc['x-stackQL-config'] = {
        ...(doc['x-stackQL-config'] || {}),
        pagination: HEADER_PAGINATION
      };
    } else if (styles.size > 0) {
      errors.push(`${service}: pagination styles ${[...styles].join(',')} with no header default - extend post_process rules`);
    }

    // method-level pagination overrides and pushdown config
    let overrides = 0;
    let topCount = 0;
    let selectCount = 0;
    let scalarTfCount = 0;
    const resources = doc.components?.['x-stackQL-resources'] || {};
    for (const [resName, res] of Object.entries(resources)) {
      for (const [methodName, method] of Object.entries(res.methods || {})) {
        const label = `${service}.${resName}.${methodName}`;
        const target = opFromMethodRef(method.operation?.$ref, doc, label, errors);
        if (!target) continue;
        const style = paginationStyle(target.op, target.pathItem, doc);
        if (style && style !== serviceStyle) {
          if (style !== 'start') {
            errors.push(`${label}: unhandled pagination override style ${style}`);
            continue;
          }
          method.config = { ...(method.config || {}), pagination: START_PAGINATION };
          overrides++;
        }
        const pushdown = pushdownConfigFor(target.op, target.pathItem, doc);
        if (pushdown) {
          method.config = { ...(method.config || {}), queryParamPushdown: pushdown };
          if (pushdown.top) topCount++;
          if (pushdown.select) selectCount++;
        }
        method.request = { ...(method.request || {}), nativeCasing: 'camel' };

        if (OPTIONAL_BODY_DROPS.has(label)) {
          if (!target.op.requestBody) {
            errors.push(`${label}: optional-body drop matched an operation with no requestBody - rule drift`);
          } else if (target.op.requestBody.required === true) {
            errors.push(`${label}: optional-body drop matched a REQUIRED requestBody - refusing`);
          } else {
            delete target.op.requestBody;
            // the generate step attaches naive requestBodyTranslate to every
            // body verb; with no requestBody left it must go too, else the
            // engine errors 'no request body for operation'
            if (method.config?.requestBodyTranslate) {
              delete method.config.requestBodyTranslate;
              if (Object.keys(method.config).length === 0) delete method.config;
            }
            // the method-level request block (nativeCasing) makes the engine
            // treat the method as body-bearing (op.Request non-nil ->
            // getRequestBodySchema error); exec variables resolve by wire
            // name anyway, so the block does nothing here
            delete method.request;
            appliedBodyDrops.add(label);
          }
        }

        const scalarTf = SCALAR_TRANSFORMS[label];
        if (scalarTf) {
          doc.components.schemas = doc.components.schemas || {};
          doc.components.schemas[scalarTf.schemaName] = scalarTf.schema;
          // overrideMediaType is required: the engine's transform path only
          // activates when both a transform and a non-empty override media
          // type are declared (any-sdk operation_store.go isOverridable)
          method.response = {
            ...(method.response || {}),
            overrideMediaType: 'application/json',
            schema_override: { $ref: `#/components/schemas/${scalarTf.schemaName}` },
            transform: scalarTf.transform
          };
          appliedScalarTransforms.add(label);
          scalarTfCount++;
        }
      }
    }

    pending.push([filePath, doc]);
    report.push({
      service,
      url: doc.servers[0].url,
      pagination: serviceStyle || 'none',
      overrides,
      topCount,
      selectCount,
      scalarTfCount
    });
  }

  for (const key of Object.keys(SCALAR_TRANSFORMS)) {
    if (!appliedScalarTransforms.has(key)) {
      errors.push(`scalar transform key ${key} matched no generated method - rule drift`);
    }
  }
  for (const key of OPTIONAL_BODY_DROPS) {
    if (!appliedBodyDrops.has(key)) {
      errors.push(`optional-body drop key ${key} matched no generated method - rule drift`);
    }
  }

  if (errors.length > 0) {
    console.error(`\nValidation failed - nothing written (${errors.length} error(s)):`);
    for (const e of errors.slice(0, 50)) console.error(`  - ${e}`);
    if (errors.length > 50) console.error(`  ... and ${errors.length - 50} more`);
    process.exit(1);
  }

  // provider.yaml: snake_case aliases at the provider surface
  const providerYamlPath = path.join(providerDir, 'provider.yaml');
  if (!fs.existsSync(providerYamlPath)) {
    console.error(`Error: provider.yaml not found: ${providerYamlPath}`);
    process.exit(1);
  }
  const providerDoc = yaml.load(fs.readFileSync(providerYamlPath, 'utf8'));
  providerDoc.config = { ...(providerDoc.config || {}), snake_case_aliases: true };
  // doc-level default env var indirections (any-sdk doc auth DTO): a
  // populated OCI_* environment needs no --auth context at all. Indirections
  // only - no literal credential fields belong in a provider doc. Requires
  // the stackql wire-through of the doc-level Oci* getters onto the runtime
  // AuthCtx (tracked as a stackql issue; inert but harmless before it).
  providerDoc.config.auth = {
    type: 'oci_signing_v1',
    tenancy_ocid_envvar: 'OCI_TENANCY',
    user_ocid_envvar: 'OCI_USER',
    fingerprint_envvar: 'OCI_FINGERPRINT',
    private_key_path_envvar: 'OCI_KEY_FILE',
    passphrase_envvar: 'OCI_PASSPHRASE'
  };

  for (const [filePath, doc] of pending) {
    fs.writeFileSync(filePath, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
  }
  fs.writeFileSync(providerYamlPath, yaml.dump(providerDoc, { lineWidth: -1, noRefs: true }));
  console.log('provider.yaml: snake_case_aliases enabled');

  console.log(`Post-processed ${pending.length} service specs:`);
  for (const r of report) {
    const extras = [];
    if (r.overrides) extras.push(`${r.overrides} pagination override(s)`);
    if (r.topCount) extras.push(`limit pushdown x${r.topCount}`);
    if (r.selectCount) extras.push(`fields pushdown x${r.selectCount}`);
    if (r.scalarTfCount) extras.push(`scalar transform x${r.scalarTfCount}`);
    console.log(`  ${r.service.padEnd(18)} ${r.url}  pagination: ${r.pagination}${extras.length ? ` [${extras.join(', ')}]` : ''}`);
  }
}

main().catch((err) => {
  console.error('Error post-processing provider:', err);
  process.exit(1);
});
