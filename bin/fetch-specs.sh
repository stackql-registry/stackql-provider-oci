#!/usr/bin/env bash
# Downloads every tier-1 spec catalogued in provider-dev/config/spec_catalog.csv
# into provider-dev/downloaded/, verifying each download against its pin
# (Oracle's spec URLs are content-addressed: the basename is the SHA-256 of
# the spec bytes). Fails on any mismatch. Deterministic: same catalog -> same
# snapshots. Specs are never fetched ad hoc - the catalog is the single
# source of truth for URLs and scope.
#
# Usage: bin/fetch-specs.sh [--force]

set -euo pipefail

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BASE_DIR="$( cd "$SCRIPT_DIR/.." && pwd )"
CATALOG="$BASE_DIR/provider-dev/config/spec_catalog.csv"
DEST="$BASE_DIR/provider-dev/downloaded"
FORCE="${1:-}"

if [ ! -f "$CATALOG" ]; then
  echo "Error: catalog not found: $CATALOG (run node provider-dev/scripts/harvest_catalog.mjs)" >&2
  exit 1
fi

mkdir -p "$DEST"

# tier-1 rows: emit "index_key|spec_url|spec_pin|local_file" via a tiny node
# CSV parse (the catalog contains quoted fields; naive cut would break).
# Relative import from BASE_DIR keeps the file URL valid across POSIX shells
# on Windows (Git Bash paths are not valid Windows file:// URLs).
ROWS=$(cd "$BASE_DIR" && node --input-type=module -e '
const { loadCatalog } = await import("./provider-dev/scripts/lib/catalog.mjs");
for (const e of loadCatalog()) {
  if (e.tier === "1") console.log([e.index_key, e.spec_url, e.spec_pin, e.local_file].join("|"));
}')

COUNT=0
SKIPPED=0
while IFS='|' read -r key url pin local_file; do
  [ -z "$key" ] && continue
  target="$DEST/$local_file"
  if [ -f "$target" ] && [ "$FORCE" != "--force" ]; then
    actual=$(sha256sum "$target" | cut -d' ' -f1)
    if [ "$actual" = "$pin" ]; then
      echo "ok (cached): $local_file"
      SKIPPED=$((SKIPPED+1))
      continue
    fi
    echo "stale snapshot (pin mismatch), refetching: $local_file"
  fi
  echo "fetching: $key <- $url"
  curl -fsSL -o "$target.tmp" "$url"
  actual=$(sha256sum "$target.tmp" | cut -d' ' -f1)
  if [ "$actual" != "$pin" ]; then
    rm -f "$target.tmp"
    echo "Error: pin mismatch for $key: expected $pin, got $actual" >&2
    exit 1
  fi
  mv "$target.tmp" "$target"
  COUNT=$((COUNT+1))
done <<< "$ROWS"

echo ""
echo "Fetched $COUNT spec(s), $SKIPPED already current, into $DEST"
echo "Re-run node provider-dev/scripts/harvest_catalog.mjs to fill version_date columns"
