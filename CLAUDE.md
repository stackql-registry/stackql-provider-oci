# CLAUDE.md

## Project

This repository builds and documents the `oci` provider for [StackQL](https://github.com/stackql/stackql), enabling SQL-based query and provisioning operations against Oracle Cloud Infrastructure - identity (compartments, users, groups, policies, dynamic groups, domains), core services (compute, VCN networking, block storage), object storage, database (including Autonomous), container engine (OKE), load balancers, DNS, KMS/Vault, monitoring, logging, events, functions, resource manager, streaming, budgets, usage, and audit.

This provider completes StackQL's hyperscaler coverage alongside `aws`, `azure`, and `google` - the multi-cloud inventory and FinOps story is the strategic driver, and the docs lead with it.

The provider is built using the `@stackql/provider-utils` package and follows the repository pattern established in [`stackql-registry/stackql-provider-k8s`](https://github.com/stackql-registry/stackql-provider-k8s/tree/feature/provider-dev) (branch `feature/provider-dev`). Sibling-build NOTES.md findings are reused, not re-derived.

## Auth: `oci_signing_v1`

All OCI API requests are signed (draft-cavage HTTP Signatures, RSA key registered to an IAM user). This is now supported in any-sdk via the `oci_signing_v1` auth type - implemented per the issue filed from this build (see `provider-dev/config/any-sdk-oci-signing-issue.md` for the contract), which vendors Oracle's official `oci-go-sdk/common` request signer behind a RoundTripper decorator, mirroring the `aws_signing_v4` architecture. Two configuration variants exist and both are documented:

```yaml
# config file (the ~/.oci/config convention shared with the OCI CLI and SDKs)
auth:
  type: oci_signing_v1
  config_file_path: ~/.oci/config
  profile: DEFAULT

# raw env vars (twelve-factor / CI) - the provider's default names; the
# *_env_var keys are free-form, so existing conventions (e.g. Terraform's
# TF_VAR_*) can be pointed at instead, and CLI-configured users are covered
# by the config file variant
auth:
  type: oci_signing_v1
  tenancy_ocid_env_var: OCI_TENANCY
  user_ocid_env_var: OCI_USER
  fingerprint_env_var: OCI_FINGERPRINT
  private_key_path_env_var: OCI_KEY_FILE
```

The provider doc auth block carries the type only (`config.auth.type: oci_signing_v1`); the auth configs above are runtime `--auth` contexts - the doc-level auth DTO has no OCI credential fields. Region resolves from `OCI_REGION` via the `x-stackQL-envVar` server-variable extension.

Phase 1 verifies both variants against a live tenancy, including a POST (the six-header body-hash form) and the clock-skew 401 hint. Instance/resource principals and session tokens are any-sdk follow-ups, noted in the docs as not yet supported.

## Spec source: harvested vendor specs, catalogued

Oracle publishes an OpenAPI spec per service, downloadable from the API reference (`docs.oracle.com/en-us/iaas/api/`). There is no single spec repo, so this build maintains a **harvest catalog**: `provider-dev/config/spec_catalog.csv` (service, spec URL, endpoint host template, API version date segment, tier, pin hash), and `bin/fetch-specs.sh` downloads every catalogued spec into `provider-dev/downloaded/` deterministically. The `api-evangelist/oracle` catalog is a useful cross-check for locating spec URLs, never a source. Refreshes are reviewed diffs, never silent regenerations.

**Tiered scope** - OCI is AWSCC-scale (dozens of services). The catalog assigns tiers, and v1 ships tier 1:

- **Tier 1**: identity, core (compute + VCN + block storage share the `iaas` endpoint and the core spec), object storage, database, container engine, load balancer, dns, kms/vault, monitoring, logging, events, functions, resource manager, streaming, budgets, usage, audit
- **Tier 2+** (deferred with reasons in the catalog): the long tail (AI services, integration, analytics, GoldenGate, etc) - added mechanically per release cycle after v1

## Design principles

- **Per-service regional endpoints** - hosts follow `https://<service>.{region}.oraclecloud.com` or `https://<service>.{region}.oci.oraclecloud.com`, with the API version date as the base path segment (e.g. `iaas.{region}.oraclecloud.com/20160918`). `{region}` is a single dot-free label (`ap-sydney-1`), so the dotted-host router constraint does not apply (the jira `{site}` precedent). Server templates carry per-service from the catalog; region defaults from `OCI_REGION`. Object Storage additionally scopes by namespace - a required path parameter, surfaced plainly.
- **`compartmentId` is the universal scope** - nearly every list operation requires a `compartmentId` query parameter (the `realm`/`groupId` role in sibling builds). The docs teach the pattern once, prominently, including tenancy-root queries and the identity `compartments` resource as the way to enumerate scopes for joins.
- **Header-token pagination is the phase 1 gate** - OCI paginates with a `page` query parameter whose next value arrives in the **`opc-next-page` response header**, with `limit` as the size parameter. Whether any-sdk pagination config can express a header-located response token is the central phase 1 investigation (every prior sibling used body tokens). If unsupported, this is a small engine ticket (the response-token `location` concept already exists for requests) filed alongside; per-resource parameter-driven honesty is the interim.
- **Bare-array lists** - core-service list responses are JSON arrays (normalize wraps); some services differ - the inventory records envelope per service, never assumed.
- **Work requests are the async backbone** - mutating operations return `opc-work-request-id` (a response header) with work-request APIs for polling. `EXEC`/`INSERT` projection of the header, and work-request resources as `SELECT`, follow the proxmox UPID pattern - with the header-projection question folded into the pagination header finding (same mechanism family).
- **Concurrency and retry headers are not modelled** - ETag/`if-match` and `opc-retry-token` are documented for users but not surfaced as columns; `opc-request-id` is mentioned for support cases.
- **Reads and writes** - full lifecycle on tier-1 resources: instance launch/terminate, VCN construction, bucket and object metadata management (object data-plane streaming is skipped per the standing exclusions), database lifecycle, policy CRUD. Actions (instance power actions, ADB start/stop) map to `EXEC`.
- **FinOps and audit lead** - usage and budgets resources, plus the audit events surface, are first-class: the four-hyperscaler cost and inventory union is the flagship of the whole provider portfolio.

## Toolchain rules

- Use the **latest** `@stackql/provider-utils` (see [npm](https://www.npmjs.com/package/@stackql/provider-utils)). Check for a newer version before starting work; do not pin to an old minor.
- Node.js >= 20. `type: module` in package.json.
- Wrap the two CLI entry points (`provider-dev-utils.mjs`, `docgen-utils.mjs`) as npm scripts, invoked through `node` (not `.bin` shims). Pass flags with npm's `--` separator.
- A local `stackql` binary (a build including `oci_signing_v1`) is required for testing.

## Repository layout

```
provider-dev/
  downloaded/          # harvested spec snapshots per the catalog
  source/              # cleaned + split per-service specs (build artifacts)
  config/              # spec_catalog.csv, service names, all_services.csv, the any-sdk issue copy
  openapi/src/oci/     # generated provider output
  scripts/             # harvest_catalog.mjs, clean_specs.mjs, map_operations.mjs, pre_normalize.mjs, post_process.mjs
  docgen/provider-data/       # headerContent1.txt, headerContent2.txt for docs landing page
bin/                   # thin shell/node wrappers + fetch-specs.sh
tests/
  integration/         # mock OCI servers (per-endpoint) + row-level assertions
  fixtures/            # seed definitions for Always Free UAT resources
  smoke_test.py        # pystackql smoke suite
website/               # Docusaurus 3.10 microsite
CLAUDE.md
README.md              # k8s-README style, steps 0-8, incl the tier model and auth follow-ups
```

## Build pipeline

Every step is deterministic and re-runnable. Manual mapping decisions are applied as rules in scripts, never hand-edits to CSVs or specs. Validate-and-fail-without-writing is the standard for every script.

### 0. Catalog, harvest, clean

`node provider-dev/scripts/harvest_catalog.mjs` builds/refreshes `spec_catalog.csv` from the API reference index; `bin/fetch-specs.sh` downloads tier-1 specs and records pins; `node provider-dev/scripts/clean_specs.mjs` validates each with `@apidevtools/swagger-parser`, applies deterministic fixes with a fix report (expect variance across services - these specs are generated by different teams over a decade), and fails without writing on anything unfixable.

### 1. Split into service specs

`npm run split` with `--provider-name oci`. The catalog is already per-service; the core `iaas` spec splits by area. Candidate service split (final decision from the endpoint inventory, recorded in `provider-dev/config/service_names.json`):

`identity`, `compute` (instances, images, boot volumes attachments, instance pools/configs), `network` (VCNs, subnets, security lists, NSGs, gateways, route tables), `block_storage` (volumes, backups, volume groups), `object_storage` (namespaces, buckets, object metadata, preauth requests, multipart admin), `database` (DB systems, Autonomous, backups), `container_engine`, `load_balancer`, `dns`, `kms` (vaults, HSM clusters, EKMS private endpoints - keys/keyVersions live on per-vault dedicated endpoints and are skipped with reason codes), `vault` (secret management), `secrets` (secret bundle retrieval), `monitoring` (metrics, alarms), `logging`, `events`, `functions`, `resource_manager` (stacks, jobs), `streaming`, `budgets`, `usage`, `audit`, `work_requests`

Decided from the endpoint inventory (23 services): the kms/vault/secrets family stays three services (not the single `kms` originally sketched) because the three vendor specs route to three different host templates (`kms.{region}`, `vaults.{region}`, `secrets.vaults.{region}`) and a service carries one server template. The core `iaas` spec divides by operation tag (`virtualNetwork` -> network, `compute`/`computeManagement` -> compute, `blockstorage` -> block_storage; table in `provider-dev/scripts/lib/core_split.mjs`).

### 2. Generate mappings

`npm run generate-mappings`, then `node provider-dev/scripts/map_operations.mjs`:

| Operation pattern | StackQL verb | Resource / method |
|---|---|---|
| GET collection (`compartmentId`, `limit`/`page`) | `SELECT` | `<resource>.list` (bare arrays wrapped by normalize) |
| GET single | `SELECT` | `<resource>.get` |
| POST create (work-request returning) | `INSERT` | `<resource>.create`, work request projected per the header finding |
| PUT update | `UPDATE` | `<resource>.update` - OCI PUTs take update details objects (partial semantics); confirm per service and record |
| DELETE | `DELETE` | `<resource>.delete` |
| POST actions (instance action, ADB start/stop, bucket reencrypt) | `EXEC` | `<resource>.<action>` |
| object data plane (get/put object bodies) | skipped | streaming, reason-coded; object metadata/list in scope |

Resource names are plural snake_case (`instances`, `vcns`, `autonomous_databases`, `compartments`), consistent with the sibling builds. The script validates: every generator-relevant operation in tier-1 services mapped or explicitly skipped with a reason code, method names unique per resource, overloaded SQL verbs have unique required-parameter signatures. Fail without writing on any violation.

### 3. Normalize

`node provider-dev/scripts/pre_normalize.mjs` (per-service quirks from the clean report), then `npm run normalize -- --api-dir provider-dev/source`. Expect bare arrays wrapped, and deep details objects (launch details, shape config, network security rules) lowered to JSON-blob columns addressed with `json_extract`.

### 4. Generate the provider

```bash
rm -rf provider-dev/openapi/*
npm run generate-provider -- \
  --provider-name oci \
  --input-dir provider-dev/source \
  --output-dir provider-dev/openapi/src/oci \
  --config-path provider-dev/config/all_services.csv \
  --provider-config '{"auth": {"type": "oci_signing_v1"}}' \
  --naive-req-body-translate \
  --overwrite
```

Servers carry per-service from the catalog (`{region}` variable, version-date base paths). Pagination config per the header-token finding, at service level. Then `node provider-dev/scripts/post_process.mjs`: work-request header projection, plus whatever the integration tests surface.

### 5. Test

Same four layers as the k8s repo, in order:

1. **Offline validation** - local file registry, `SHOW SERVICES/RESOURCES/METHODS`, `DESCRIBE EXTENDED` on representative resources (`oci.identity.compartments`, `oci.compute.instances`, `oci.usage.usage_summaries`)
2. **Meta-route tests** - `npm run start-server` / `npm run test-meta-routes -- oci --verbose` / `npm run stop-server`
3. **Integration tests** - `tests/integration/mock_oci_server.mjs` (multi-endpoint aware) serving real wire shapes, asserting the `Authorization: Signature ...` header form and, on POSTs, `x-content-sha256`; row-level assertions per archetype: bare-array wrapping, `compartmentId` scoping, `opc-next-page` traversal per the finding, a VCN `INSERT`/`UPDATE`/`DELETE` lifecycle with work-request projection, an instance-action `EXEC`, and both auth config variants
4. **Smoke tests** - `tests/smoke_test.py` (pystackql) against a real tenancy: read smokes across identity/compute/network/usage plus a disposable write lifecycle built entirely from **Always Free** resources (a VCN with subnets, an Always Free-shape compute instance where capacity allows, an object storage bucket), `stackql-smoke-<stamp>` naming with freeform tags for sweeping, breadcrumbs swept first; `--registry public` variant doubles as post-publish verification

An OCI Always Free tenancy is the live test target - the free tier makes the smoke economics closer to hetzner than to snowflake. Always Free capacity for compute shapes is regionally contended; the instance lifecycle degrades gracefully to skip-with-notice when capacity is unavailable. Never run tests against a production tenancy.

### 6. Publish

Push the `oci` dir to `providers/src` in a feature branch of [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry) and follow the registry release flow - gated on `oci_signing_v1` landing in a released stackql. Verify with `registry pull oci` against the dev registry.

### 7. Docs microsite

`website/` is Docusaurus 3.10 following the shared architecture: shared `stackql/docusaurus-config` vendored to `.shared-config/`; site-local files limited to `website/provider.js` (`providerName = 'oci'`, `providerTitle = 'Oracle Cloud Infrastructure'`), thin config wrappers, shared components, and `static/CNAME` pinning `oci-provider.stackql.io`.

- Author `headerContent1.txt` / `headerContent2.txt` in `provider-dev/docgen/provider-data/` (installation, API key setup and both auth variants, the `{region}` variable, the `compartmentId` pattern, the tier model, example queries)
- `npm run generate-docs`, then `node website/scripts/sanitize-docs.mjs`
- Publish via GitHub Pages, DNS: `oci-provider.stackql.io` CNAME -> `stackql.github.io.`

Lead the docs examples with the queries this provider exists for: compartment-tree inventory, compute and network estate queries with `json_extract`, IAM policy audit, usage cost by service and compartment, budget-vs-actual reporting - and the flagship of the entire portfolio: the four-hyperscaler union (`oci` + `aws` + `azure` + `google` instances/cost in one `SELECT`). That query is the reason this provider exists; it appears in the landing header, not buried.

### 8. CI

GitHub Actions: harvest check + fetch + clean + build, integration tests against the mock, meta-route tests, and (secret-gated) the smoke suite against the Always Free tenancy. Add a catalog-drift job re-running the harvest and diffing spec pins. Model on the k8s repo's `build-and-test.yml`.

## Writing conventions

- README and docs copy: measured, precise, no hyperbole. Third-person or passive framing for descriptive copy.
- No em dashes; use `-`. No characters not on a QWERTY keyboard; use `->` for arrows.
- Sample queries follow the k8s README style: realistic, runnable, `json_extract` for nested fields.

## Non-negotiables

1. Latest `@stackql/provider-utils`, always
2. The k8s `feature/provider-dev` repo is the reference pattern; sibling-build NOTES.md findings are reused, not re-derived - deviate only with a documented reason in the README
3. The spec catalog is the single source of truth for scope, URLs, and tiers - specs are never fetched ad hoc
4. Deterministic scripts, never hand-edits to derived artifacts
5. Every regeneration is followed by the integration test suite before commit
6. Smoke tests use Always Free resources, tag everything they create, and sweep breadcrumbs - a failed run must not leave billable resources behind
