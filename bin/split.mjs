#!/usr/bin/env node

// Split cleaned OCI specs (provider-dev/downloaded/cleaned, OAS3 output of
// clean_specs.mjs) into per-service specs (provider-dev/source), driven by
// provider-dev/config/spec_catalog.csv. Most catalogued specs map 1:1 to a
// StackQL service; the core `iaas` spec divides into compute / network /
// block_storage by operation tag (provider-dev/scripts/lib/core_split.mjs).
//
// Usage: node bin/split.mjs --provider-name oci --input-dir provider-dev/downloaded/cleaned \
//          --output-dir provider-dev/source [--only svc1,svc2] [--overwrite] [--verbose]

import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { providerdev } from '@stackql/provider-utils';

const BASE_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// provider-utils split() cleans its output dir on every call, so per-file
// splits go via a temp dir and collect into outputDir (k8s repo pattern)
async function splitFileInto({ apiDoc, providerName, outputDir, svcDiscriminatorFn, verbose, keepServices }) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'stackql-split-'));
  const written = [];
  try {
    const result = await providerdev.split({
      apiDoc,
      providerName,
      outputDir: tmpDir,
      svcDiscriminator: 'function',
      svcDiscriminatorFn,
      overwrite: true,
      verbose,
      svcNameOverrides: {}
    });
    if (!result) {
      console.error(`Error: Split failed for ${apiDoc}`);
      process.exit(1);
    }
    for (const outFile of fs.readdirSync(tmpDir)) {
      const svc = outFile.replace(/\.(yaml|yml|json)$/, '');
      if (keepServices && !keepServices.has(svc)) continue;
      const dest = path.join(outputDir, outFile);
      if (fs.existsSync(dest)) {
        console.error(`Error: Duplicate service spec ${outFile} (produced by ${apiDoc})`);
        process.exit(1);
      }
      fs.copyFileSync(path.join(tmpDir, outFile), dest);
      written.push(outFile);
    }
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
  return written;
}

async function main() {
  const args = process.argv.slice(2);
  const getArg = (flag) => {
    const index = args.indexOf(flag);
    return index !== -1 ? args[index + 1] : null;
  };

  const providerName = getArg('--provider-name');
  const inputDir = getArg('--input-dir') || path.join(BASE_DIR, 'provider-dev', 'downloaded', 'cleaned');
  const outputDir = getArg('--output-dir');
  const overwrite = args.includes('--overwrite');
  const verbose = args.includes('--verbose');
  const only = getArg('--only'); // comma-separated StackQL service names (pilot mode)

  if (!providerName || !outputDir) {
    console.error('Error: Missing required arguments');
    console.error('Usage: node split.mjs --provider-name NAME [--input-dir DIR] --output-dir DIR [--only svc1,svc2] [--overwrite] [--verbose]');
    process.exit(1);
  }

  const { loadCatalog } = await import(pathToFileURL(path.join(BASE_DIR, 'provider-dev', 'scripts', 'lib', 'catalog.mjs')));
  const { coreServiceForOperation, CORE_SERVICES } = await import(pathToFileURL(path.join(BASE_DIR, 'provider-dev', 'scripts', 'lib', 'core_split.mjs')));

  const catalog = loadCatalog();
  const onlySet = only ? new Set(only.split(',').map((s) => s.trim())) : null;

  fs.mkdirSync(outputDir, { recursive: true });
  const existing = fs.readdirSync(outputDir).filter((f) => f.endsWith('.yaml') || f.endsWith('.yml') || f.endsWith('.json'));
  if (existing.length > 0 && !overwrite && !onlySet) {
    console.error(`Error: Output directory ${outputDir} is not empty. Use --overwrite to replace existing service specs.`);
    process.exit(1);
  }

  const written = [];
  for (const entry of catalog.filter((e) => e.tier === '1')) {
    const specServices = entry.service === 'core' ? CORE_SERVICES : [entry.service];
    const wanted = onlySet ? specServices.filter((s) => onlySet.has(s)) : specServices;
    if (wanted.length === 0) {
      continue;
    }
    const cleanedFile = entry.local_file.replace(/\.(yaml|json)$/, '.json');
    const specPath = path.join(inputDir, cleanedFile);
    if (!fs.existsSync(specPath)) {
      console.error(`Error: Cleaned spec not found: ${specPath} (run bin/fetch-specs.sh then clean_specs.mjs)`);
      process.exit(1);
    }
    // clear prior outputs this spec produces (idempotent re-runs)
    for (const svc of wanted) {
      const dest = path.join(outputDir, `${svc}.yaml`);
      if (fs.existsSync(dest)) fs.rmSync(dest);
    }
    // provider-utils calls the discriminator as fn(pathKey, operationId, tags, { providerName, pathItem, operation })
    const svcDiscriminatorFn = entry.service === 'core'
      ? (pathKey, operationId, tags, ctx) => coreServiceForOperation(pathKey, operationId, tags, ctx)
      : () => entry.service;
    console.log(`Splitting ${cleanedFile} -> ${wanted.join(', ')}`);
    const files = await splitFileInto({
      apiDoc: specPath,
      providerName,
      outputDir,
      svcDiscriminatorFn,
      verbose,
      keepServices: onlySet ? new Set(wanted) : null
    });
    written.push(...files);
  }

  console.log(`Split operation completed successfully: ${written.length} service specs written to ${outputDir}`);
  for (const f of written.sort()) {
    console.log(`  ${f}`);
  }
}

main().catch((err) => {
  console.error('Error splitting OpenAPI doc(s):', err);
  process.exit(1);
});
