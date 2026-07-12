// Populates stackql_resource_name, stackql_method_name, stackql_verb and
// stackql_object_key in provider-dev/config/all_services.csv, driven by the
// shared classifier (lib/classify.mjs - operationId-led rules with path
// context) over the split service specs (provider-dev/source). Deterministic
// and re-runnable on spec refreshes; review the CSV diff after running.
//
// Object keys:
//   - bare-array list responses are wrapped by normalize under a key derived
//     from the operationId (deriveWrapperKey below mirrors provider-utils
//     normalize.js exactly) -> $.<key>
//   - envelope list responses (e.g. object storage ListObjects) use the
//     single array-typed property of the response schema -> $.<property>
//   - single-object responses project whole -> no object key
//
// Validation (fails without writing on any violation): every operation in
// the split specs is mapped or explicitly skipped with a reason code, method
// names are unique per resource, and overloaded SQL verbs have unique
// required-parameter signatures per resource.
//
// Usage: node provider-dev/scripts/map_operations.mjs [--out PATH]

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { CONFIG_DIR, SOURCE_DIR, parseCsv, csvField } from './lib/catalog.mjs';
import { classifyOperation } from './lib/classify.mjs';

const CSV_PATH = path.join(CONFIG_DIR, 'all_services.csv');
const SERVICE_NAMES_PATH = path.join(CONFIG_DIR, 'service_names.json');

const REQUIRED_COLUMNS = [
  'filename', 'path', 'verb', 'operationId', 'tags',
  'stackql_resource_name', 'stackql_method_name', 'stackql_verb', 'stackql_object_key'
];

// mirrors provider-utils src/providerdev/normalize.js (camelToSnakeLocal +
// deriveWrapperKey) so mapped object keys match the keys normalize wraps
// bare arrays under
const VERB_PREFIXES = [
  'list_all', 'get_all', 'fetch_all', 'find_all',
  'list', 'get', 'fetch', 'find', 'index', 'enumerate', 'retrieve'
];

function camelToSnakeLocal(name) {
  if (typeof name !== 'string' || name.length === 0) return '';
  const s1 = name.replace(/([a-z0-9])([A-Z][a-z]+)/g, '$1_$2');
  return s1.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase().replace(/-/g, '_');
}

function deriveWrapperKey(operationId) {
  if (typeof operationId !== 'string' || operationId.length === 0) return '';
  let snake = camelToSnakeLocal(operationId);
  for (const verb of VERB_PREFIXES) {
    if (snake === verb) return '';
    if (snake.startsWith(verb + '_')) {
      snake = snake.slice(verb.length + 1);
      break;
    }
  }
  return snake;
}

function resolveRef(ref, doc) {
  if (typeof ref !== 'string' || !ref.startsWith('#/')) return null;
  let node = doc;
  for (const part of ref.slice(2).split('/')) {
    node = node?.[part.replace(/~1/g, '/').replace(/~0/g, '~')];
  }
  return node || null;
}

function deref(node, doc) {
  return node && node.$ref ? resolveRef(node.$ref, doc) : node;
}

// object key for a select-list operation, from the pre-normalize response schema
function listObjectKey(op, doc, label, errors) {
  for (const [code, respRaw] of Object.entries(op.responses || {})) {
    if (!/^2\d\d$/.test(code)) continue;
    const resp = deref(respRaw, doc);
    const schema = deref(resp?.content?.['application/json']?.schema, doc);
    if (!schema) continue;
    if (schema.type === 'array') {
      const key = deriveWrapperKey(op.operationId) || 'items';
      return `$.${key}`;
    }
    const arrayProps = Object.entries(schema.properties || {})
      .filter(([, v]) => deref(v, doc)?.type === 'array')
      .map(([k]) => k);
    if (arrayProps.length === 1) {
      return `$.${arrayProps[0]}`;
    }
    // multi-array envelopes (object storage ListObjects: objects + prefixes):
    // prefer the property matching the operationId-derived wrapper key, then
    // the conventional 'items' collection key
    const derived = deriveWrapperKey(op.operationId);
    if (arrayProps.includes(derived)) return `$.${derived}`;
    if (arrayProps.includes('items')) return '$.items';
    errors.push(`${label}: cannot derive object key - envelope with ${arrayProps.length} array properties [${arrayProps.join(', ')}]`);
    return '';
  }
  errors.push(`${label}: list operation with no 2xx JSON response schema`);
  return '';
}

// required-parameter signature (sorted path + required query names)
function requiredParamSignature(op, pathItem, doc) {
  const params = [...(pathItem.parameters || []), ...(op.parameters || [])]
    .map((p) => deref(p, doc))
    .filter((p) => p && (p.in === 'path' || (p.in === 'query' && p.required)));
  return JSON.stringify(params.map((p) => p.name).sort());
}

async function main() {
  const args = process.argv.slice(2);
  const outIdx = args.indexOf('--out');
  const outPath = outIdx !== -1 ? args[outIdx + 1] : CSV_PATH;

  const serviceNames = JSON.parse(fs.readFileSync(SERVICE_NAMES_PATH, 'utf8'));
  // reverse map: StackQL service -> catalog index_key (iaas:<tag> entries collapse to iaas)
  const serviceToIndexKey = {};
  for (const [k, v] of Object.entries(serviceNames)) {
    if (k.startsWith('__')) continue;
    serviceToIndexKey[v] = k.split(':')[0];
  }

  const csvRows = parseCsv(fs.readFileSync(CSV_PATH, 'utf8'));
  const header = csvRows[0];
  const colIdx = Object.fromEntries(header.map((c, i) => [c, i]));
  for (const col of REQUIRED_COLUMNS) {
    if (!(col in colIdx)) {
      console.error(`Error: all_services.csv missing required column: ${col}`);
      process.exit(1);
    }
  }

  // index the split specs: service -> { doc, ops: Map("path::verb" -> {op, pathItem}) }
  const specs = {};
  for (const file of fs.readdirSync(SOURCE_DIR).filter((f) => f.endsWith('.yaml'))) {
    const service = file.replace(/\.yaml$/, '');
    const doc = yaml.load(fs.readFileSync(path.join(SOURCE_DIR, file), 'utf8'));
    const ops = new Map();
    for (const [pathKey, pathItem] of Object.entries(doc.paths || {})) {
      for (const verb of ['get', 'post', 'put', 'patch', 'delete', 'head']) {
        if (pathItem[verb]) ops.set(`${pathKey}::${verb}`, { op: pathItem[verb], pathItem });
      }
    }
    specs[service] = { doc, ops };
  }

  const errors = [];
  const mappedCsvKeys = new Set();
  const out = [header];
  const stats = { mapped: 0, skipped: 0, byVerb: new Map(), resources: new Set() };

  for (const row of csvRows.slice(1)) {
    const filename = row[colIdx.filename];
    const service = filename.replace(/\.yaml$/, '');
    const pathKey = row[colIdx.path];
    const verb = row[colIdx.verb];
    const opId = row[colIdx.operationId];
    const label = `${service} ${verb.toUpperCase()} ${pathKey} (${opId})`;
    const spec = specs[service];
    if (!spec) {
      errors.push(`${label}: no split spec for service ${service}`);
      continue;
    }
    const specOp = spec.ops.get(`${pathKey}::${verb}`);
    if (!specOp) {
      errors.push(`${label}: operation not found in split spec`);
      continue;
    }
    mappedCsvKeys.add(`${service}::${pathKey}::${verb}`);

    const indexKey = serviceToIndexKey[service];
    if (!indexKey) {
      errors.push(`${label}: service not in service_names.json`);
      continue;
    }

    let cls;
    try {
      cls = classifyOperation({
        indexKey,
        catalogService: service,
        pathKey,
        verb,
        op: specOp.op
      });
    } catch (err) {
      errors.push(`${label}: ${err.message}`);
      continue;
    }
    if (cls.service !== service) {
      errors.push(`${label}: classifier service ${cls.service} != split service ${service}`);
      continue;
    }

    const newRow = [...row];
    if (cls.sqlVerb === 'skip') {
      newRow[colIdx.stackql_resource_name] = 'skip_this_resource';
      newRow[colIdx.stackql_method_name] = camelToSnakeLocal(opId);
      newRow[colIdx.stackql_verb] = 'exec';
      newRow[colIdx.stackql_object_key] = '';
      stats.skipped++;
    } else {
      newRow[colIdx.stackql_resource_name] = cls.resource;
      newRow[colIdx.stackql_method_name] = cls.methodName;
      newRow[colIdx.stackql_verb] = cls.sqlVerb;
      newRow[colIdx.stackql_object_key] =
        cls.sqlVerb === 'select' && cls.methodName === 'list'
          ? listObjectKey(specOp.op, spec.doc, label, errors)
          : '';
      stats.mapped++;
      stats.byVerb.set(cls.sqlVerb, (stats.byVerb.get(cls.sqlVerb) || 0) + 1);
      stats.resources.add(`${service}.${cls.resource}`);
    }
    out.push(newRow);
  }

  // completeness: every generator-relevant spec operation appears in the CSV
  // (analyze does not emit HEAD operations; classify skips them anyway)
  for (const [service, spec] of Object.entries(specs)) {
    for (const key of spec.ops.keys()) {
      const [pathKey, verb] = key.split('::');
      if (verb === 'head') continue;
      if (!mappedCsvKeys.has(`${service}::${pathKey}::${verb}`)) {
        const opId = spec.ops.get(key).op.operationId || '';
        errors.push(`${service} ${verb.toUpperCase()} ${pathKey} (${opId}): in split spec but absent from all_services.csv`);
      }
    }
  }

  // uniqueness: method names per resource; required-param signatures per (resource, sqlVerb != exec)
  const methodSeen = new Map();
  const sigSeen = new Map();
  for (const row of out.slice(1)) {
    const service = row[colIdx.filename].replace(/\.yaml$/, '');
    const resource = row[colIdx.stackql_resource_name];
    if (resource === 'skip_this_resource') continue;
    const method = row[colIdx.stackql_method_name];
    const sqlVerb = row[colIdx.stackql_verb];
    const mKey = `${service}.${resource}.${method}`;
    if (methodSeen.has(mKey)) {
      errors.push(`duplicate method name ${mKey} (${methodSeen.get(mKey)} vs ${row[colIdx.path]})`);
    } else {
      methodSeen.set(mKey, row[colIdx.path]);
    }
    if (sqlVerb === 'exec') continue;
    const specOp = specs[service].ops.get(`${row[colIdx.path]}::${row[colIdx.verb]}`);
    const sig = requiredParamSignature(specOp.op, specOp.pathItem, specs[service].doc);
    const sKey = `${service}.${resource}.${sqlVerb}::${sig}`;
    if (sigSeen.has(sKey)) {
      errors.push(`overloaded ${sqlVerb} on ${service}.${resource} with identical required params ${sig}: ${sigSeen.get(sKey)} vs ${method}`);
    } else {
      sigSeen.set(sKey, method);
    }
  }

  if (errors.length > 0) {
    console.error(`\nValidation failed - CSV NOT written (${errors.length} error(s)):`);
    for (const e of errors.slice(0, 50)) console.error(`  - ${e}`);
    if (errors.length > 50) console.error(`  ... and ${errors.length - 50} more`);
    process.exit(1);
  }

  fs.writeFileSync(outPath, out.map((r) => r.map(csvField).join(',')).join('\n') + '\n');
  console.log(`Mappings written: ${outPath}`);
  console.log(`  mapped: ${stats.mapped} operations over ${stats.resources.size} resources, skipped: ${stats.skipped}`);
  for (const [v, n] of [...stats.byVerb.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${v}: ${n}`);
  }
  const perService = new Map();
  for (const r of stats.resources) {
    const svc = r.split('.')[0];
    perService.set(svc, (perService.get(svc) || 0) + 1);
  }
  for (const [svc, n] of [...perService.entries()].sort()) {
    console.log(`  ${svc}: ${n} resources`);
  }
}

main().catch((err) => {
  console.error('Error mapping operations:', err);
  process.exit(1);
});
