// Shared access to provider-dev/config/spec_catalog.csv - the single source
// of truth for scope, spec URLs, host templates, tiers, and pin hashes.
// RFC 4180 CSV handling (values may contain commas and quotes).

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(__dirname, '..', '..', '..');
export const CONFIG_DIR = path.join(REPO_ROOT, 'provider-dev', 'config');
export const DOWNLOADED_DIR = path.join(REPO_ROOT, 'provider-dev', 'downloaded');
export const CLEANED_DIR = path.join(DOWNLOADED_DIR, 'cleaned');
export const SOURCE_DIR = path.join(REPO_ROOT, 'provider-dev', 'source');
export const CATALOG_PATH = path.join(CONFIG_DIR, 'spec_catalog.csv');

export const CATALOG_COLUMNS = [
  'service',
  'index_key',
  'tier',
  'tier_reason',
  'toc_title',
  'spec_url',
  'spec_pin',
  'host_template',
  'version_date',
  'version_in',
  'local_file'
];

export function csvField(v) {
  const s = v === null || v === undefined ? '' : String(v);
  if (/[",\r\n]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

export function toCsv(rows, columns) {
  const lines = [columns.join(',')];
  for (const row of rows) {
    lines.push(columns.map((c) => csvField(row[c])).join(','));
  }
  return lines.join('\n') + '\n';
}

export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ',') {
      row.push(field);
      field = '';
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
    } else {
      field += ch;
    }
  }
  if (field !== '' || row.length > 0) {
    row.push(field);
    if (row.length > 1 || row[0] !== '') rows.push(row);
  }
  return rows;
}

export function loadCatalog(catalogPath = CATALOG_PATH) {
  if (!fs.existsSync(catalogPath)) {
    throw new Error(`Catalog not found: ${catalogPath} (run node provider-dev/scripts/harvest_catalog.mjs)`);
  }
  const rows = parseCsv(fs.readFileSync(catalogPath, 'utf8'));
  const header = rows[0];
  return rows.slice(1).map((r) => {
    const entry = {};
    header.forEach((col, i) => {
      entry[col] = r[i] ?? '';
    });
    return entry;
  });
}
