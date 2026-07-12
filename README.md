# `oci` provider for `stackql`

StackQL provider for Oracle Cloud Infrastructure (OCI), enabling SQL-based query and provisioning operations against OCI services - identity, core services (compute, VCN networking, block storage), object storage, database, container engine, load balancers, DNS, KMS/Vault, monitoring, logging, events, functions, resource manager, streaming, budgets, usage, and audit.

This provider completes StackQL's hyperscaler coverage alongside `aws`, `azure`, and `google`. The multi-cloud inventory and FinOps story is the strategic driver: compartment-tree inventory, IAM policy audit, usage cost by service and compartment, and the four-hyperscaler union (`oci` + `aws` + `azure` + `google` instances and cost in one `SELECT`).

Built using [`@stackql/provider-utils`](https://www.npmjs.com/package/@stackql/provider-utils), following the repository pattern established in [`stackql-provider-k8s`](https://github.com/stackql-registry/stackql-provider-k8s/tree/feature/provider-dev).

## Design Principles

- **Harvested vendor specs, catalogued** - Oracle publishes an OpenAPI spec per service via the [API reference](https://docs.oracle.com/en-us/iaas/api/); there is no single spec repo. `provider-dev/config/spec_catalog.csv` is the single source of truth for scope, spec URLs, endpoint host templates, version-date base paths, tiers, and pin hashes. Specs are never fetched ad hoc; refreshes are reviewed diffs.
- **Per-service regional endpoints** - hosts follow `https://<service>.{region}.oraclecloud.com` or `https://<service>.{region}.oci.oraclecloud.com`, with the API version date as the base path segment (e.g. `iaas.{region}.oraclecloud.com/20160918`). `{region}` is a single dot-free label (`ap-sydney-1`), so it is compatible with the router's host-variable constraint. Region defaults from `OCI_REGION`.
- **`compartmentId` is the universal scope** - nearly every list operation requires a `compartmentId` query parameter. Tenancy-root queries use the tenancy OCID as the compartment id; the `identity.compartments` resource enumerates scopes for joins.
- **Work requests are the async backbone** - mutating operations return `opc-work-request-id` (a response header) with work-request APIs for polling.
- **Concurrency and retry headers are not modelled** - ETag/`if-match` and `opc-retry-token` are documented for users but not surfaced as columns; `opc-request-id` is mentioned for support cases.
- **Object data plane is skipped** - get/put object bodies are streaming operations, out of scope per the standing exclusions; object metadata and listing are in scope.

## Tier Model

OCI has dozens of services. The catalog assigns tiers; v1 ships tier 1:

- **Tier 1**: identity, core (compute + VCN + block storage share the `iaas` endpoint and the core spec), object storage, database, container engine, load balancer, dns, kms/vault, monitoring, logging, events, functions, resource manager, streaming, budgets, usage, audit
- **Tier 2+**: the long tail (AI services, integration, analytics, GoldenGate, etc), deferred with reasons recorded in the catalog - added mechanically per release cycle after v1

## Authentication

All OCI API requests are signed (draft-cavage HTTP Signatures with an RSA key registered to an IAM user). The provider uses the `oci_signing_v1` auth type in any-sdk (see `provider-dev/config/any-sdk-oci-signing-issue.md` for the contract). Two configuration variants:

```yaml
# config file (the ~/.oci/config convention shared with the OCI CLI and SDKs)
auth:
  type: oci_signing_v1
  config_file_path: ~/.oci/config
  profile: DEFAULT

# raw env vars (twelve-factor / CI)
auth:
  type: oci_signing_v1
  tenancy_ocid_env_var: OCI_TENANCY_OCID
  user_ocid_env_var: OCI_USER_OCID
  fingerprint_env_var: OCI_FINGERPRINT
  private_key_path_env_var: OCI_PRIVATE_KEY_PATH
```

Auth follow-ups (not yet supported, additive in any-sdk later): instance principals, resource principals, and session-token auth.

## Prerequisites

- Node.js >= 20
- A local `stackql` binary from a build that includes the `oci_signing_v1` auth type
- For live testing: an OCI Always Free tenancy with an API key uploaded to the IAM user. Never run tests against a production tenancy.

```bash
npm install
```

## 0. Catalog, Harvest, Clean

The harvest catalog is built from the API reference index, then tier-1 specs are downloaded and validated:

```bash
node provider-dev/scripts/harvest_catalog.mjs   # builds/refreshes provider-dev/config/spec_catalog.csv
npm run fetch-specs                              # downloads tier-1 specs into provider-dev/downloaded, records pins
node provider-dev/scripts/clean_specs.mjs        # validates each spec, applies deterministic fixes with a fix report
```

Every script validates and fails without writing on anything unfixable.

## 1. Split into Service Specs

```bash
npm run split -- \
  --provider-name oci \
  --input-dir provider-dev/downloaded \
  --output-dir provider-dev/source \
  --overwrite
```

The catalog is already per-service; the core `iaas` spec splits by area (compute, network, block_storage). The final service split is recorded in `provider-dev/config/service_names.json`.

## 2. Generate Mappings

```bash
npm run generate-mappings -- \
  --provider-name oci \
  --input-dir provider-dev/source \
  --output-dir provider-dev/config
node provider-dev/scripts/map_operations.mjs
```

Operation mapping rules (applied deterministically in `map_operations.mjs`, never hand-edits to the CSV):

| Operation pattern | StackQL verb | Resource / method |
|---|---|---|
| GET collection (`compartmentId`, `limit`/`page`) | `SELECT` | `<resource>.list` |
| GET single | `SELECT` | `<resource>.get` |
| POST create | `INSERT` | `<resource>.create` |
| PUT update | `UPDATE` | `<resource>.update` |
| DELETE | `DELETE` | `<resource>.delete` |
| POST actions (instance action, ADB start/stop) | `EXEC` | `<resource>.<action>` |
| object data plane (get/put object bodies) | skipped | reason-coded |

Resource names are plural snake_case (`instances`, `vcns`, `autonomous_databases`, `compartments`).

## 3. Normalize

```bash
node provider-dev/scripts/pre_normalize.mjs
npm run normalize -- --api-dir provider-dev/source
```

Bare-array list responses are wrapped; deep details objects (launch details, shape config) are lowered to JSON-blob columns addressed with `json_extract`.

## 4. Generate Provider

See `CLAUDE.md` for the full invocation. Servers carry per-service from the catalog (`{region}` variable, version-date base paths); pagination config per the header-token finding in `NOTES.md`. Followed by `node provider-dev/scripts/post_process.mjs`.

## 5. Test Provider

Four layers, in order:

1. Offline validation - local file registry, `SHOW SERVICES/RESOURCES/METHODS`, `DESCRIBE EXTENDED`
2. Meta-route tests - `npm run start-server` / `npm run test-meta-routes -- oci --verbose` / `npm run stop-server`
3. Integration tests - `tests/integration/mock_oci_server.mjs` serving real wire shapes, asserting the `Authorization: Signature ...` header form
4. Smoke tests - `tests/smoke_test.py` (pystackql) against an Always Free tenancy; disposable resources tagged `stackql-smoke-<stamp>`, breadcrumbs swept first

## 6. Publish the Provider

Push the `oci` dir to `providers/src` in a feature branch of [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry) and follow the registry release flow - gated on `oci_signing_v1` landing in a released stackql.

## 7. Generate Web Docs

Docusaurus microsite in `website/`, published to `oci-provider.stackql.io`. See `CLAUDE.md` step 7.

## 8. CI

GitHub Actions: harvest check + fetch + clean + build, integration tests against the mock, meta-route tests, and (secret-gated) the smoke suite against the Always Free tenancy, plus a catalog-drift job.

## Engineering Notes

Findings, evidence, and open questions from the build are recorded in `NOTES.md`.

## License

MIT

## Contributing

Issues and pull requests are welcome. Note the working rules in `CLAUDE.md`: deterministic scripts over hand edits, the catalog is the single source of truth for scope and URLs, and every regeneration is followed by the integration test suite before commit.
