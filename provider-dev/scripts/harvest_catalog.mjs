// Builds/refreshes provider-dev/config/spec_catalog.csv from the OCI API
// reference index (https://docs.oracle.com/en-us/iaas/api/specs/index.json).
//
// The index maps every published service API to a content-addressed spec file
// (./specs/<sha256>.yaml - the basename is the SHA-256 of the spec bytes, so
// the URL itself is the pin) plus the per-region endpoint list. This script:
//   - assigns tiers (tier-1 list per CLAUDE.md; everything else tier 2 with a
//     reason), and StackQL service names for tier-1 entries
//   - derives the commercial-realm host template by replacing the region
//     label in the endpoint list with {region}
//   - extracts the version-date base path (e.g. /20160918) from the
//     downloaded spec snapshot when present (run bin/fetch-specs.sh first,
//     then re-run this script to fill version_date)
//   - verifies downloaded snapshots against the URL pin, failing on mismatch
//
// Validates everything before writing; fails without writing on any error.
// Deterministic and re-runnable: same index + same snapshots -> same CSV.
// The CI catalog-drift job re-runs this and diffs.
//
// Usage: node provider-dev/scripts/harvest_catalog.mjs [--index-url URL]

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import {
  CATALOG_COLUMNS,
  CATALOG_PATH,
  DOWNLOADED_DIR,
  toCsv
} from './lib/catalog.mjs';

const INDEX_URL = 'https://docs.oracle.com/en-us/iaas/api/specs/index.json';
const API_REF_BASE = 'https://docs.oracle.com/en-us/iaas/api/';

// Tier 1 per CLAUDE.md. index key -> StackQL service name. The core `iaas`
// spec is catalogued as `core` and divides into compute / network /
// block_storage at split time. kms/vault/secrets granularity is provisional
// pending the endpoint inventory (final split recorded in service_names.json).
const TIER1 = {
  iaas: 'core',
  identity: 'identity',
  objectstorage: 'object_storage',
  database: 'database',
  containerengine: 'container_engine',
  loadbalancer: 'load_balancer',
  dns: 'dns',
  key: 'kms',
  secretmgmt: 'vault',
  secretretrieval: 'secrets',
  monitoring: 'monitoring',
  'logging-management': 'logging',
  events: 'events',
  functions: 'functions',
  resourcemanager: 'resource_manager',
  streaming: 'streaming',
  budgets: 'budgets',
  usage: 'usage',
  audit: 'audit',
  workrequests: 'work_requests'
};

// Named tier-2 exclusion reasons where the generic long-tail reason would
// mislead; everything else gets the generic reason.
const TIER2_REASONS = {
  s3objectstorage: 'S3 compatibility layer over object storage - redundant with the native API',
  'identity-domains': 'IDCS-heritage SCIM surface with its own idcs host convention - separate follow-up',
  'logging-dataplane': 'log ingestion data plane (PutLogs) - streaming exclusion',
  'logging-search': 'log search - candidate for tier-1 promotion with the logging service post-v1',
  instanceagent: 'in-instance Oracle Cloud Agent plugin API - not a control-plane inventory surface',
  'usage-proxy': 'subscription/redeemable-rewards proxy - overlaps the usage service',
  notification: 'ONS - first candidate in the tier-2 mechanical-addition queue'
};
const TIER2_DEFAULT_REASON = 'long tail - deferred to post-v1 mechanical addition per the tier model';

// commercial-realm (oc1) region label, e.g. ap-sydney-1, us-ashburn-1, eu-madrid-3
const REGION_RE = /\b[a-z]{2,3}-[a-z]+-\d+\b/;

function deriveHostTemplates(endpoints) {
  const templates = new Set();
  for (const ep of endpoints || []) {
    const host = ep.replace(/^https:\/\//, '').replace(/\/.*$/, '');
    // commercial realm only; sovereign/gov/dedicated realms are documented, not templated
    if (!host.endsWith('.oraclecloud.com')) continue;
    if (!REGION_RE.test(host)) continue;
    templates.add(host.replace(REGION_RE, '{region}'));
  }
  return [...templates].sort();
}

// The version-date segment lives in one of three places across OCI specs:
// basePath (/20160918 - most services), the path keys (/20180608/... - kms),
// or nowhere (object storage - paths are /n/{namespace}/...).
function extractVersionDate(specText) {
  const base = specText.match(/^basePath:\s*['"]?(\/\d{8})['"]?\s*$/m);
  if (base) return { versionDate: base[1], versionIn: 'basePath' };
  const pathDates = new Set();
  for (const m of specText.matchAll(/^ {2}(\/\d{8})\//gm)) {
    pathDates.add(m[1]);
  }
  if (pathDates.size === 1) return { versionDate: [...pathDates][0], versionIn: 'path' };
  if (pathDates.size > 1) return { versionDate: [...pathDates].sort().join(';'), versionIn: 'path' };
  return { versionDate: '', versionIn: 'none' };
}

function sha256(buf) {
  return crypto.createHash('sha256').update(buf).digest('hex');
}

async function main() {
  const args = process.argv.slice(2);
  const idx = args.indexOf('--index-url');
  const indexUrl = idx !== -1 ? args[idx + 1] : INDEX_URL;

  console.log(`Fetching index: ${indexUrl}`);
  const res = await fetch(indexUrl);
  if (!res.ok) {
    console.error(`Error: index fetch failed: HTTP ${res.status}`);
    process.exit(1);
  }
  const index = await res.json();
  const keys = Object.keys(index).sort();
  console.log(`Index entries: ${keys.length}`);

  const errors = [];
  const rows = [];

  for (const missing of Object.keys(TIER1).filter((k) => !keys.includes(k))) {
    errors.push(`tier-1 key missing from index: ${missing}`);
  }

  for (const key of keys) {
    const entry = index[key];
    const tier1Service = TIER1[key];
    const specRef = entry.specs || '';
    if (!specRef) {
      if (tier1Service) errors.push(`tier-1 entry has no spec reference: ${key}`);
      continue; // tier-2 entries without specs are not catalogued
    }
    const specUrl = new URL(specRef, API_REF_BASE).toString();
    const pinMatch = specUrl.match(/\/([0-9a-f]{64})\.(?:yaml|json)$/);
    if (!pinMatch) {
      errors.push(`spec URL is not content-addressed for ${key}: ${specUrl}`);
      continue;
    }
    const specPin = pinMatch[1];
    const hostTemplates = deriveHostTemplates(entry.endpoints);
    if (tier1Service && hostTemplates.length === 0) {
      errors.push(`no commercial-realm host template derivable for tier-1 key: ${key}`);
    }

    let versionDate = '';
    let versionIn = '';
    const localFile = tier1Service ? `${key}.${specUrl.endsWith('.json') ? 'json' : 'yaml'}` : '';
    if (tier1Service) {
      const localPath = path.join(DOWNLOADED_DIR, localFile);
      if (fs.existsSync(localPath)) {
        const buf = fs.readFileSync(localPath);
        const actual = sha256(buf);
        if (actual !== specPin) {
          errors.push(`downloaded snapshot pin mismatch for ${key}: expected ${specPin}, got ${actual} (upstream spec refreshed - review the diff, re-run bin/fetch-specs.sh)`);
        } else {
          ({ versionDate, versionIn } = extractVersionDate(buf.toString('utf8')));
        }
      }
    }

    rows.push({
      service: tier1Service || key.toLowerCase().replace(/[-. ]/g, '_'),
      index_key: key,
      tier: tier1Service ? '1' : '2',
      tier_reason: tier1Service ? '' : (TIER2_REASONS[key] || TIER2_DEFAULT_REASON),
      toc_title: entry.toc_title || '',
      spec_url: specUrl,
      spec_pin: specPin,
      host_template: hostTemplates.join(';'),
      version_date: versionDate,
      version_in: versionIn,
      local_file: localFile
    });
  }

  if (errors.length > 0) {
    console.error(`\nValidation failed - catalog NOT written (${errors.length} error(s)):`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }

  rows.sort((a, b) => a.tier.localeCompare(b.tier) || a.service.localeCompare(b.service));
  fs.writeFileSync(CATALOG_PATH, toCsv(rows, CATALOG_COLUMNS));

  const tier1 = rows.filter((r) => r.tier === '1');
  const withVersion = tier1.filter((r) => r.version_date);
  console.log(`\nCatalog written: ${CATALOG_PATH}`);
  console.log(`  tier 1: ${tier1.length} specs (${withVersion.length} with version_date from local snapshots)`);
  console.log(`  tier 2: ${rows.length - tier1.length} specs (deferred, reasons recorded)`);
  if (withVersion.length < tier1.length) {
    console.log('  run bin/fetch-specs.sh then re-run this script to fill version_date columns');
  }
}

main().catch((err) => {
  console.error('Error harvesting catalog:', err);
  process.exit(1);
});
