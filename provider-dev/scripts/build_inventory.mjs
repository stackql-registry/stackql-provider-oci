// Builds provider-dev/config/endpoint_inventory.csv across the cleaned
// tier-1 specs: one row per operation with routing facts (host template,
// version-date segment), scope facts (compartmentId, pagination, body,
// response shape, work-request header) and the proposed StackQL mapping
// (service / resource / method / verb, or a skip reason). The inventory
// drives the final service split (service_names.json) and the mapping step.
//
// Validates before writing; fails without writing on any classification
// error. Deterministic and re-runnable.
//
// Usage: node provider-dev/scripts/build_inventory.mjs

import fs from 'fs';
import path from 'path';
import {
  CLEANED_DIR,
  CONFIG_DIR,
  loadCatalog,
  toCsv
} from './lib/catalog.mjs';
import { classifyOperation, eachOperation, operationFacts } from './lib/classify.mjs';

const INVENTORY_PATH = path.join(CONFIG_DIR, 'endpoint_inventory.csv');

const COLUMNS = [
  'service',
  'index_key',
  'method',
  'path',
  'operation_id',
  'host_template',
  'version_date',
  'version_in',
  'compartment_scoped',
  'paginated',
  'has_body',
  'response_shape',
  'work_request',
  'proposed_service',
  'proposed_resource',
  'proposed_method',
  'proposed_verb',
  'skip_reason'
];

function yn(b) {
  return b ? 'y' : 'n';
}

function count(map, key) {
  map.set(key, (map.get(key) || 0) + 1);
}

function printTable(title, map) {
  console.log(`\n${title}`);
  for (const [k, v] of [...map.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${String(k).padEnd(38)} ${v}`);
  }
}

async function main() {
  const catalog = loadCatalog().filter((e) => e.tier === '1');
  const rows = [];
  const errors = [];

  for (const entry of catalog) {
    const cleanedPath = path.join(CLEANED_DIR, `${entry.index_key}.json`);
    if (!fs.existsSync(cleanedPath)) {
      errors.push(`cleaned spec missing for ${entry.index_key} - run clean_specs.mjs`);
      continue;
    }
    const doc = JSON.parse(fs.readFileSync(cleanedPath, 'utf8'));
    eachOperation(doc, ({ pathKey, pathItem, verb, op }) => {
      try {
        const cls = classifyOperation({
          indexKey: entry.index_key,
          catalogService: entry.service,
          pathKey,
          verb,
          op
        });
        const facts = operationFacts({ pathKey, pathItem, verb, op, doc });
        rows.push({
          service: entry.service,
          index_key: entry.index_key,
          method: verb.toUpperCase(),
          path: pathKey,
          operation_id: op.operationId || '',
          host_template: entry.host_template,
          version_date: entry.version_date,
          version_in: entry.version_in,
          compartment_scoped: yn(facts.compartmentScoped),
          paginated: yn(facts.paginated),
          has_body: yn(facts.hasBody),
          response_shape: facts.responseShape,
          work_request: yn(facts.workRequest),
          proposed_service: cls.service,
          proposed_resource: cls.resource,
          proposed_method: cls.methodName,
          proposed_verb: cls.sqlVerb,
          skip_reason: cls.skipReason
        });
      } catch (err) {
        errors.push(`${entry.index_key} ${verb.toUpperCase()} ${pathKey}: ${err.message}`);
      }
    });
  }

  // validation: no unnamed mappings, method names unique per (service, resource)
  const seen = new Map();
  for (const r of rows) {
    if (r.proposed_verb === 'skip') continue;
    if (!r.proposed_resource || !r.proposed_method) {
      errors.push(`unmapped operation without skip reason: ${r.index_key} ${r.method} ${r.path}`);
      continue;
    }
    const key = `${r.proposed_service}.${r.proposed_resource}.${r.proposed_method}`;
    if (seen.has(key)) {
      errors.push(`duplicate method name: ${key} (${seen.get(key)} vs ${r.method} ${r.path})`);
    } else {
      seen.set(key, `${r.method} ${r.path}`);
    }
  }

  if (errors.length > 0) {
    console.error(`\nValidation failed - inventory NOT written (${errors.length} error(s)):`);
    for (const e of errors.slice(0, 40)) console.error(`  - ${e}`);
    if (errors.length > 40) console.error(`  ... and ${errors.length - 40} more`);
    process.exit(1);
  }

  rows.sort((a, b) =>
    a.proposed_service.localeCompare(b.proposed_service) ||
    a.proposed_resource.localeCompare(b.proposed_resource) ||
    a.path.localeCompare(b.path) ||
    a.method.localeCompare(b.method));
  fs.writeFileSync(INVENTORY_PATH, toCsv(rows, COLUMNS));

  // stats
  const byService = new Map();
  const byVerb = new Map();
  const byShape = new Map();
  const bySkip = new Map();
  let workRequests = 0;
  let compartmentScoped = 0;
  let paginated = 0;
  const resources = new Set();
  for (const r of rows) {
    count(byService, r.proposed_service);
    count(byVerb, r.proposed_verb);
    if (r.proposed_verb !== 'skip') {
      count(byShape, r.response_shape);
      resources.add(`${r.proposed_service}.${r.proposed_resource}`);
    } else {
      count(bySkip, r.skip_reason);
    }
    if (r.work_request === 'y') workRequests++;
    if (r.compartment_scoped === 'y') compartmentScoped++;
    if (r.paginated === 'y') paginated++;
  }

  console.log(`Inventory written: ${INVENTORY_PATH}`);
  console.log(`  operations: ${rows.length}, resources: ${resources.size}`);
  console.log(`  compartmentId-scoped: ${compartmentScoped}, paginated (page param): ${paginated}, work-request returning: ${workRequests}`);
  printTable('By proposed service:', byService);
  printTable('By proposed verb:', byVerb);
  printTable('By response shape (mapped ops):', byShape);
  printTable('Skips by reason:', bySkip);
}

main().catch((err) => {
  console.error('Error building inventory:', err);
  process.exit(1);
});
