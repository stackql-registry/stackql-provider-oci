#!/usr/bin/env node

import { docgen } from '@stackql/provider-utils';

async function generateDocs() {
  const args = process.argv.slice(2);
  const getArg = (flag) => {
    const index = args.indexOf(flag);
    return index !== -1 ? args[index + 1] : null;
  };

  const providerName = getArg('--provider-name');
  const providerDir = getArg('--provider-dir');
  const outputDir = getArg('--output-dir');
  const providerDataDir = getArg('--provider-data-dir');

  if (!providerName || !providerDir || !outputDir || !providerDataDir) {
    console.error('Error: Missing required arguments');
    console.error('Usage: node generate-docs.mjs --provider-name NAME --provider-dir DIR --output-dir DIR --provider-data-dir DIR');
    process.exit(1);
  }

  try {
    await docgen.generateDocs({ providerName, providerDir, outputDir, providerDataDir });
    console.log('Documentation generation completed successfully');
  } catch (error) {
    console.error('Error generating documentation:', error);
    process.exit(1);
  }
}

generateDocs();
