# Engineering Notes

Phase 1 findings for the `oci` provider build. Evidence is against local checkouts of any-sdk (`c328e2d`, main) and stackql (`2a0297b`, main, binary v0.10.542), as of 2026-07-12. Sibling findings (k8s, proxmox, jira, hetzner NOTES.md) are reused, not re-derived.

## 1. `oci_signing_v1` verification

**Blocked - the auth type has not landed in any-sdk.** The CLAUDE.md premise ("now supported in any-sdk") is ahead of upstream reality as of 2026-07-12. Evidence:

- `stackql/any-sdk` upstream: no branch, tag, or commit mentions OCI signing (checked via `git fetch --all` on the local checkout plus the GitHub API - branches, tags to `v0.5.3-alpha11`, commit search). No `pkg/ocisign` package exists at `c328e2d`.
- `stackql/stackql` upstream: no OCI branches; the binary string table of the released `v0.10.542` Windows build contains `aws_signing_v4` but not `oci_signing_v1` (raw byte search, control string verified). Same for the local `v0.10.500` build.
- No stackql build with the auth type exists on this machine, and no Go toolchain is installed to build one from a feature branch.

**Also blocked on credentials**: no `OCI_*` environment variables, no `~/.oci/config`, and no key material were found on this machine. The live tenancy half of the verification cannot run regardless of the binary.

**Unblock list** (in order):

1. Land the `oci_signing_v1` implementation in any-sdk per `provider-dev/config/any-sdk-oci-signing-issue.md`, consume it in a stackql build, and place that binary at the repo root (`./stackql` / `stackql.exe`).
2. Provision the Always Free tenancy credentials on the test machine: either `~/.oci/config` (DEFAULT profile) or the four env vars (`OCI_TENANCY_OCID`, `OCI_USER_OCID`, `OCI_FINGERPRINT`, `OCI_PRIVATE_KEY_PATH`), plus `OCI_REGION`.

**Verification runbook** (executes unchanged once unblocked; this is the acceptance test for the engine work):

1. Raw-env-var variant, GET: `SELECT id, name FROM oci.identity.compartments WHERE compartment_id = '<tenancy_ocid>'` (wire: `GET /20160918/compartments?compartmentId=...` on `identity.{region}.oci.oraclecloud.com`). Assert rows and the three-header signature form (`(request-target) host date`) via a debug proxy or the mock.
2. Config-file variant: same query with the auth config switched to `config_file_path` + `profile`; assert identical result.
3. Signed POST: `INSERT INTO oci.network.vcns (...)` creating a test VCN with freeform tag `stackql-smoke: phase1-auth` and CIDR `10.99.0.0/24` (wire: `POST /20160918/vcns` on `iaas.{region}.oraclecloud.com`). Assert 200, and the six-header form (`(request-target) host date content-length content-type x-content-sha256`) with a correct base64 body SHA-256. Delete the VCN afterwards (breadcrumb sweep by the freeform tag).
4. Error surfaces: (a) skew the local clock >5 minutes (or replay a canned `date` header) and assert the 401 `NotAuthenticated` is surfaced with the clock-skew hint per the issue contract; (b) corrupt `OCI_FINGERPRINT` and assert a clean 401 `NotAuthenticated` surface (no panic, no retry storm).

Findings from the runbook get recorded here, replacing this blocked status.

## 2. Pagination: `opc-next-page` response header

**Answered by code analysis - expressible in config, but broken at runtime for bare-token headers; small engine fix required.** Runtime confirmation against a live multi-page list (identity policies or audit events) is folded into the section 1 runbook.

What OCI needs: the next-page token arrives in the `opc-next-page` response header (an opaque string, no `Link` framing) and is applied to the `page` query parameter on the next request, with `limit` as the page-size parameter. Traversal ends when the header is absent.

What the engine does today (any-sdk `c328e2d`, stackql `2a0297b`):

- The config vocabulary expresses it fully: `pagination.responseToken: {key: opc-next-page, location: header}` + `requestToken: {key: page, location: query}` (`any-sdk/internal/anysdk/pagination.go`, `token_semantic.go`; request-side application in `http_armoury_params.go` `SetNextPage()` - query location confirmed by the jira build).
- The stackql traversal loop honors header locations: `inferNextPageResponseElement()` builds a header element and attaches the transformer from `TokenSemantic.GetTransformer()` (`stackql/internal/stackql/execution/mono_valent_execution.go:369-399`), then `extractNextPageTokenFromHeader()` applies it (`mono_valent_execution.go:1859-1881`).
- **The defect**: `getHeaderTransformer()` in `any-sdk/internal/anysdk/pagination.go:114-131` returns the GitHub-style `Link: <url>; rel="next"` regex transformer for every header key. For `opc-next-page: <token>` the regex never matches and the transformer returns `""`, which the loop reads as end-of-results (`mono_valent_execution.go:495`) - pagination silently stops after page 1.
- The raw-value fallback that would do exactly the right thing already exists (`mono_valent_execution.go:1876-1879` returns the single header value verbatim) but is unreachable: a non-nil transformer is always attached for header locations.

**Engine ticket (any-sdk), drafted**:

> **Title**: header response tokens: return the raw header value when the token is not Link-framed
>
> `getHeaderTransformer()` (internal/anysdk/pagination.go) hardwires the `Link; rel="next"` regex for every header key. Any API whose next-page token is a bare header value (OCI `opc-next-page`; also Okta-style custom headers) silently terminates after one page: the regex mismatch returns `""`, indistinguishable from end-of-results.
>
> Fix: when `location: header` and the key is not `link` (and no algorithm requests Link semantics), return a transformer that yields the single raw header value (`h.Values(key)`, first value, `""` when absent). Optionally honor the existing-but-unused `TokenSemanticArgs.GetRegex()` (token_semantic.go:101) for custom extraction. Keep the Link behaviour for `key: link` / an explicit `link_header` algorithm.
>
> Secondary inconsistency, same code path: any-sdk's own `getProcessedToken()` feeds the transformer `res.ExtractElement()` output, which for headers is `[]string` (pkg/response/response.go:126), while both header transformers type-assert `http.Header` - that internal path errors for every header token today. The stackql loop avoids it by passing `r.Header` directly (mono_valent_execution.go:1866). Align the two while fixing the above.
>
> Acceptance: an integration fixture paginating on `responseToken {key: opc-next-page, location: header}` + `requestToken {key: page, location: query}` traverses three mock pages and terminates on header absence.

**Interim posture until the fix lands**: pagination config is still emitted per the finding (service level, per the k8s/jira service-level-only rule - the provider-level fallback is broken in any-sdk). With the current engine, list queries return the first page (up to the default `limit`); `page` and `limit` remain honest request parameters so users can drive pagination manually (`WHERE page = '<token from a prior query is not retrievable>'` is NOT workable - the header is not projected - so the docs state the first-page limitation plainly until the engine fix lands). This is the documented per-resource parameter-driven honesty from CLAUDE.md.

## 3. Work-request id (`opc-work-request-id` response header) projection

**Answered by code analysis - not projectable today; same mechanism family as section 2.** Response headers are consumed in exactly one place in the engine: the pagination path above. Nothing projects response headers into result rows - `ExtractElement`'s header branch (any-sdk pkg/response/response.go:125-126) is only reached from token semantics, and the INSERT/EXEC projection pipeline (`monoValentExecution` itemisation) works on the response body alone. The proxmox UPID precedent does not transfer: the UPID is a body field, projected (or template-wrapped) from the body.

Consequences for the mapping posture:

- OCI create operations that return the created resource in the body (most tier-1 creates: VCN, subnet, instance, bucket...) project normally on `INSERT`; the work-request id is simply not a column. Users poll the resource lifecycle state instead - queries in the docs reflect that.
- Operations returning `202` + empty body + `opc-work-request-id` (some database and container-engine lifecycle ops) currently project nothing. These are recorded per-resource in the endpoint inventory (`work_request_returning` column) and called out in the docs.
- `work_requests` resources (the central Work Requests API plus per-service work-request surfaces) map as `SELECT`, so polling is expressible in SQL once an id is known from elsewhere (console, CLI) - or, post-fix, from the projected header.
- The engine follow-up is folded into the section 2 ticket family: a `responseHeaderProjection` (project named response headers into the result row) would make `INSERT ... RETURNING`-style work-request polling first-class. Filed as a follow-up note in the ticket rather than a v1 gate: v1 ships with body-projection semantics only.

## 4. `{region}` server variable routing

**Answered by code analysis; runtime confirmation due with the generate phase.** The jira finding transfers directly: mux host variables match a single dot-free label (`any-sdk/pkg/queryrouter/queryrouter.go`; the k8s/proxmox dotted-host constraint applies only when a variable spans dots). OCI region identifiers are single dot-free labels (`ap-sydney-1`, `us-ashburn-1`), so templates like `identity.{region}.oci.oraclecloud.com` are exactly what the router supports. Confirm with the meta-route/integration layers once the provider is generated (and note the jira corollary: fixed-domain templates cannot be redirected to a local mock by a server variable - the integration harness materialises a registry copy with rewritten `servers` blocks).

Related facts recorded in the catalog, to carry into generate:

- Host domain varies per service (`.oraclecloud.com` for the 2016-2018 era services, `.oci.oraclecloud.com` for later ones) - per-service templates from the catalog, never a global pattern.
- Three services share the `iaas.{region}.oraclecloud.com` host (core, load_balancer, work_requests) - distinct version-date base paths (`/20160918`, `/20170115`, `/20160918`) keep their routes disjoint except core/work_requests, which are disjoint by path shape (`/workRequests...`).
- Two services list two host prefixes: monitoring (`telemetry` for reads/alarms, `telemetry-ingestion` only for the skipped PostMetricData) -> generate with `telemetry.{region}.oraclecloud.com`; usage lists both `usageapi.{region}.oci.oraclecloud.com` and `usageapi.{region}.oraclecloud.com` -> generate with the `.oci.` form the API docs lead with.
- Non-commercial realms (`oraclecloud20.com` sovereign, gov realms, dedicated `customer-oci.com`) are excluded from templates and documented as a limitation.
- Vendor specs carry placeholder hosts (`host: localhost:9000` in object storage) - meaningless; normalize strips servers and generate applies catalog templates.

## 5. Version-date base paths

**Answered from the harvest.** Three placements exist, recorded per spec in the catalog (`version_date` / `version_in` columns):

- `basePath` (`/20160918` etc) - 18 of 20 tier-1 specs. Carried into the generated `servers` url as `https://<host_template><version_date>`.
- In every path key (kms: `/20180608/...` with `basePath: /`) - the server url carries no version segment; paths already do.
- None (object storage: paths are `/n/{namespaceName}/...`) - server url is the bare host.

The split specs preserve pathing exactly as cleaned, so no path rewriting exists anywhere in the pipeline.

## 6. PUT update semantics (UPDATE labelling)

**Answered for the pilots; per-service confirmation continues as services onboard.** OCI PUT operations take `Update<Resource>Details` request bodies whose fields are all optional; omitted fields keep their current values (partial-update semantics, e.g. UpdateVcnDetails: displayName/dnsLabel/tags only). The `UPDATE` SQL verb labelling is therefore correct - these are not replace operations. One convention deviation found: object storage updates via POST (`UpdateBucket` is `POST /n/{ns}/b/{bucket}/`) - the classifier is operationId-led so it maps as `update` regardless of HTTP verb.

## 7. Response shapes and bare-array wrapping

**Confirmed through the pilots.** 277 of the 1,583 tier-1 operations return bare JSON arrays (the classic core-services list convention). provider-utils normalize wraps them under a key derived from the operationId (its `deriveWrapperKey`: strip the verb prefix, snake-case the noun - `ListVcns` -> `vcns`); `map_operations.mjs` mirrors that derivation exactly so `stackql_object_key` matches what normalize produces (`$.vcns`, `$.compartments`).

Envelope exceptions recorded per service as they surface (the inventory's `response_shape` column):

- object storage `ListObjects` -> `{objects: [], prefixes: []}` - object key `$.objects` (wrapper-key match); `prefixes` is not projected, documented.
- object storage `ListObjectVersions` -> `{items: [], prefixes: []}` - object key `$.items` (conventional-key fallback).
- usage/monitoring summarize operations return `{items: []}`-style envelopes - handled by the same single-array-property rule when those services onboard.

## 8. Select-overload collision: `GetCompartment`

**Found by the mapping validator, resolved deterministically.** `GetCompartment`'s path parameter is named `compartmentId` - the same name as the universal list scope - so `identity.compartments` `get` and `list` have identical required-parameter signatures (`["compartmentId"]`) and select routing cannot disambiguate. The only such collision in the pilots. Resolution: the get demotes to `exec` (`SELECT_DEMOTIONS` in `lib/classify.mjs`); compartment-by-id reads go through the list (children of the parent) or the exec method. Documented for the docs' compartment-pattern section.

## 9. Always Free smoke design (phase 2 obligation)

Recorded now, executed when auth unblocks:

- Reliably free resources: VCN + subnets + gateways (no charge), one object storage bucket (20GB free tier), IAM objects (free). These form the guaranteed write-lifecycle spine.
- Compute: `VM.Standard.E2.1.Micro` (x86, 2 instances free) and `VM.Standard.A1.Flex` (Arm, 4 OCPU/24GB pool) are Always Free but regionally capacity-contended - the instance lifecycle degrades to skip-with-notice on `Out of host capacity` / 500-limit errors, per the CLAUDE.md rule.
- Naming `stackql-smoke-<stamp>`, freeform tag `{"stackql-smoke": "<stamp>"}` on every created resource; the suite sweeps prior breadcrumbs by tag before running (hetzner convention). A failed run must not leave billable resources - all chosen resources are $0 even if the sweep is missed, by design.
- `--registry public` variant doubles as post-publish verification. Never a production tenancy.

## 10. Tier-2 backlog and mechanical addition

The catalog defers 137 specs with reasons (named reasons for s3objectstorage, identity-domains, logging-dataplane/search, instanceagent, usage-proxy, notification; generic long-tail reason otherwise). Promotion process per release cycle: move the key into `TIER1` in `harvest_catalog.mjs` with its service name -> `fetch-specs` -> `clean_specs` -> `split` -> `generate-mappings` + `map_operations` (extending classifier skip/demotion rules as validation surfaces issues) -> regenerate -> integration suite. Every step validates-and-fails-without-writing, so a promotion that needs new rules cannot silently ship.

## Open items

1. Land `oci_signing_v1` in any-sdk and run the section 1 runbook (the phase 1 acceptance test) - blocked on engine work + credentials.
2. File the section 2 any-sdk pagination ticket upstream and verify the header traversal against a live multi-page list (identity policies, audit events).
3. Generate-phase confirmations: `{region}` routing through the router, version-date base paths in generated servers, pagination config at service level (provider-level inheritance is broken - k8s finding).
4. KMS per-vault management/crypto endpoints (27 skipped operations): revisit if any-sdk ever supports whole-host server variables spanning dots; until then documented as out of scope.
5. Decide `secrets`/`vault` naming at docs time (three-service family: kms / vault / secrets) - names locked in service_names.json, revisit only if docs review objects.
