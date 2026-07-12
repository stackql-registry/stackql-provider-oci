#!/usr/bin/env node

// Split harvested OCI specs (provider-dev/downloaded) into per-service specs
// (provider-dev/source), driven by provider-dev/config/spec_catalog.csv.
// Most catalogued specs map 1:1 to a StackQL service; the core `iaas` spec
// divides into compute / network / block_storage by path prefix (rules in
// provider-dev/scripts/lib/core_split.mjs once the endpoint inventory lands).

import fs from 'fs';
import os from 'os';
import path from 'path';
import { providerdev } from '@stackql/provider-utils';

async function splitSingleDoc({ apiDoc, providerName, outputDir, svcDiscriminator, svcDiscriminatorFn, exclude, overwrite, verbose, svcNameOverrides }) {
  const result = await providerdev.split({
    apiDoc,
    providerName,
    outputDir,
    svcDiscriminator,
    svcDiscriminatorFn,
    exclude,
    overwrite,
    verbose,
    svcNameOverrides
  });
  if (!result) {
    process.exit(1);
  }
}

// provider-utils split() cleans its output dir on every call, so per-file
// splits go via a temp dir and collect into outputDir (k8s repo pattern)
async function splitFileInto({ apiDoc, providerName, outputDir, svcDiscriminator, svcDiscriminatorFn, verbose }) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'stackql-split-'));
  const written = [];
  try {
    const result = await providerdev.split({
      apiDoc,
      providerName,
      outputDir: tmpDir,
      svcDiscriminator,
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
  const apiDoc = getArg('--api-doc');
  const inputDir = getArg('--input-dir');
  const outputDir = getArg('--output-dir');
  const svcDiscriminator = getArg('--svc-discriminator') || 'tag';
  const exclude = getArg('--exclude') || '';
  const overwrite = args.includes('--overwrite');
  const verbose = args.includes('--verbose');
  const only = getArg('--only'); // comma-separated catalog service names to split (pilot mode)

  if (!providerName || !outputDir || (!apiDoc && !inputDir)) {
    console.error('Error: Missing required arguments');
    console.error('Usage: node split.mjs --provider-name NAME (--api-doc PATH | --input-dir DIR) --output-dir DIR [--only svc1,svc2] [--overwrite] [--verbose]');
    process.exit(1);
  }

  if (apiDoc) {
    await splitSingleDoc({ apiDoc, providerName, outputDir, svcDiscriminator, exclude, overwrite, verbose, svcNameOverrides: {} });
    console.log('Split operation completed successfully');
    return;
  }

  // catalog-driven mode
  const baseDir = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
  const { loadCatalog } = await import(path.join(baseDir, 'provider-dev', 'scripts', 'lib', 'catalog.mjs').replace(/\\/g, '/'));
  const { coreServiceForOperation, CORE_SERVICES } = await import(path.join(baseDir, 'provider-dev', 'scripts', 'lib', 'core_split.mjs').replace(/\\/g, '/'));

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
    if (onlySet && !specServices.some((s) => onlySet.has(s))) {
      continue;
    }
    const specPath = path.join(inputDir, entry.local_file);
    if (!fs.existsSync(specPath)) {
      console.error(`Error: Catalogued spec not found: ${specPath} (run npm run fetch-specs)`);
      process.exit(1);
    }
    // clear any prior outputs this spec produces (idempotent re-runs)
    for (const svc of specServices) {
      const dest = path.join(outputDir, `${svc}.yaml`);
      if (fs.existsSync(dest)) fs.rmSync(dest);
    }
    // provider-utils calls the discriminator as fn(pathKey, operationId, tags, { providerName, pathItem, operation })
    const svcDiscriminatorFn = entry.service === 'core'
      ? (pathKey, operationId, tags, ctx) => coreServiceForOperation(pathKey, operationId, tags, ctx)
      : () => entry.service;
    console.log(`Splitting ${entry.local_file} -> ${specServices.join(', ')}`);
    const files = await splitFileInto({
      apiDoc: specPath,
      providerName,
      outputDir,
      svcDiscriminator: 'function',
      svcDiscriminatorFn,
      verbose
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
