# Engineering Notes

Findings ledger for the `oci` provider build. Phase 1 evidence was against any-sdk `c328e2d` / stackql `2a0297b` (2026-07-12); phase 2 evidence (sections 1-2 updates and 11-13) is against any-sdk `83c0a2e` (= tag `v0.5.4-alpha01`) and stackql branch `any-sdk-v0.5.4-alpha01` (`d104758`, v0.10.582-7), local Linux build at `../../../stackql/core/stackql/build/stackql`, run under WSL, as of 2026-08-05. Sibling findings (k8s, proxmox, jira, hetzner NOTES.md) are reused, not re-derived.

**Release gate**: this build is one step ahead of the released stackql - `oci_signing_v1`, server-variable env resolution (`x-stackQL-envVar`) and the pushdown machinery land in the release cut after the `any-sdk-v0.5.4-alpha01` stackql PR merges. All testing here uses the local build; publish (step 6) stays gated on the release.

## 1. `oci_signing_v1` verification

**Landed and verified against the signed mock.** any-sdk v0.5.4-alpha01 vendors the official `oci-go-sdk/common` signer behind a RoundTripper (`pkg/ocisign`), per the issue contract. The integration suite (tests/integration, 24 assertions green) verifies both auth variants against a digest-enforcing mock: keyId composition `<tenancy>/<user>/<fingerprint>`, the three-header GET/DELETE form (`date (request-target) host`), the six-header body form with a correct base64 `x-content-sha256`, the config-file (INI profile) variant, and the fail-fast partial-credential error (`cannot compose OCI signing credentials`) with no request despatched. **Live verification complete (2026-08-06, `ap-melbourne-1` Always Free tenancy)**: `tests/smoke_test.py` run 4 - 18 passed, 0 failed, 0 skipped. Both signed forms verified against the live service (three-header GETs; six-header POST/PUT/DELETE after the section 14 fix), full instance state walk on `VM.Standard.E2.1.Micro` (launch -> RUNNING -> STOP -> STOPPED -> START -> RUNNING -> rename with select-back -> terminate -> TERMINATED, a SELECT verifying each state), VCN/subnet/bucket lifecycles, namespace via the section 15 transform, zero breadcrumbs after teardown. Total live cost: $0 (Always Free resources only). The `--live` (published-registry) variant remains for post-publish verification.

**Env var convention**: all documentation and examples standardise on provider-native names - `OCI_TENANCY`, `OCI_USER`, `OCI_FINGERPRINT`, `OCI_KEY_FILE`, `OCI_PASSPHRASE`, `OCI_REGION` (the `*_env_var` keys are free-form indirections; there are no baked-in defaults). The earlier `OCI_CLI_*` alignment was dropped deliberately: Terraform reads `TF_VAR_*`/`OCI_*` names (never `OCI_CLI_*`), and CLI-configured users are served by the `~/.oci/config` variant, so the CLI-name coupling bought nothing - `OCI_FINGERPRINT` and `OCI_REGION` coincide with Terraform's accepted bare names as a bonus. The provider doc auth block carries the type only (`config.auth.type: oci_signing_v1`); credentials always come from the runtime auth context - the doc-level auth DTO has no OCI fields.

Historical (2026-07-12) blocked status, for the record:

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

**Re-verified at v0.5.4-alpha01: still broken for bare-token headers; the engine ticket below stands.** `internal/anysdk/pagination.go` was untouched between v0.5.3-alpha11 and v0.5.4-alpha01 - `getHeaderTransformer()` still returns the Link-regex closure for every header key, and stackql's raw-header fallback remains unreachable because the token semantic always attaches that non-nil transformer. Empirically confirmed by the integration suite's two-page mock: traversal stops after page 1 (reported as a WARN, not a failure). The config emitted is the correct declaration (`requestToken: page/query`, `responseToken: opc-next-page/header`, service level) and traversal activates when the fix lands. **Body-token pagination works today**: the object storage `nextStartWith` override traverses all mock pages (verified), so `ListObjects` paginates fully while header-token lists return the first page (up to `limit`, which SQL `LIMIT` drives - section 11).

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

## 11. Query pushdown (v0.5.4-alpha01 `queryParamPushdown`)

any-sdk's pushdown vocabulary has six blocks (`select`/`filter`/`orderBy`/`top`/`skip`/`count`); the rendering engine is dialect-agnostic for `top`, `skip`, `count` and `select` (paramName-driven), but `filter` and `orderBy` render OData syntax only. Consequences, all verified against the mock:

- **`top` is wired and works**: SQL `LIMIT` pushes to the OCI `limit` query parameter (`limit=1` observed on the wire), emitted method-level for the 313 operations declaring `limit`, clamped to the declared schema maximum (1000 when silent). post_process derives it from operation facts.
- **`select` is wired but currently inert**: object storage operations with an enumerated `fields` parameter carry `select` config (allowlist = spec enum + snake aliases), but stackql's pushdown intent unions WHERE and residual-predicate columns into the projection, and the required routing params (`namespace_name`, `bucket_name`) are outside the allowlist - the all-or-nothing rule then declines. Engine enhancement: exclude operation-bound parameters from the projection union. Config stays declared for when that lands.
- **`filter`/`orderBy` are not emitted**: OCI does not speak OData filter syntax, and OCI's two-param sort convention (`sortBy` + `sortOrder`) is not expressible in the single-param OData `orderBy` rendering. WHERE pushdown for OCI is therefore ordinary OpenAPI query/path parameter mapping (which covers `compartmentId` and friends), with everything else evaluated locally.

## 12. snake_case surface

Two any-sdk primitives, both applied by post_process: `config.snake_case_aliases: true` on provider.yaml (SELECT/DESCRIBE columns present as snake aliases of the camelCase wire properties; extraction stays wire-keyed) and `request.nativeCasing: camel` on every method (snake WHERE/INSERT keys resolve to wire params via the reverse-casing lookup; the naive body matcher accepts snake input). Verified: snake columns in DESCRIBE, snake WHERE key -> `compartmentId` on the wire, snake INSERT columns -> camelCase body attributes. Two caveats: `SHOW METHODS` RequiredParams remain wire-cased (`ToPresentationMap` is not aliased - same presentation as the aws provider), and **EXEC variables resolve by wire name only** (`@instanceId`, not `@instance_id`) - the reverse-casing retry covers WHERE/INSERT surfaces, not exec vars. Docs examples reflect both. Also note nested JSON blob contents keep wire casing (`json_extract(shape_config, '$.memoryInGBs')`) - aliasing is top-level only, by design (botocore xform port).

## 13. Naive request body translation and the exec body quirk

`--naive-req-body-translate` emits method-level `requestBodyTranslate: {algorithm: naive}` on POST/PUT/PATCH: request body attributes are addressed by bare schema property name (no `data__` prefix, no parent key) - verified INSERT `(compartment_id, cidr_block, display_name)` produced the flat camelCase `CreateVcnDetails` body. One surface quirk found: operations whose request body is wire-optional but whose body schema has required fields (InstanceAction's `InstancePowerActionDetails.actionType`) surface those fields as required exec inputs - `EXEC oci.compute.instances.instance_action` needs `@actionType` alongside `@action`. Documented in the exec examples.

## 14. Live smoke finding: dangling `?` invalidates body-verb signatures (any-sdk fix)

**Found live 2026-08-06, root-caused, fixed on an any-sdk branch; release-gating.** The first live run authenticated every GET but 401'd (`NotAuthenticated`, `Failed to verify the HTTP(S) Signature`) on every signed POST. Bisection: the official-signer probe (scratchpad Go program, same key/headers/transport) succeeded live, and a raw-header dump at the mock showed the engine POSTs to `/20160918/vcns?` - any-sdk `operation_store.go` built the URL as `path + "?" + query` even for an empty query, `url.Parse` records the trailing `?` as `ForceQuery`, and it reproduces on the wire and inside the signed `(request-target)`. OCI normalises the request line before reconstructing the signing string, so verification fails - but only for no-query requests, and every OCI list GET carries `?compartmentId=...`, which is why reads passed. The signed mock could not catch it: the dangling `?` is self-consistent between signing and wire.

- Fix: any-sdk branch `fix/empty-query-request-target` (`operation_store.go` - only append `?`/`&` when the encoded query is non-empty). Local stackql build carries it via a `go.mod` replace (uncommitted, build-only).
- Regression guard: the integration mock now rejects a dangling `?` exactly as live OCI does, plus enforces concrete `content-length`/`content-type` on body verbs (no chunked encoding).
- **Release gate**: the fix must merge into any-sdk before the stackql release is cut, or every OCI write operation fails against the live service.

## 15. Scalar responses: golang-template response transform (`GetNamespace`)

`GetNamespace` returns a bare JSON string; the engine's select path errors with `column_anon ... schema unsuitable for select query` (per upstream guidance, `column_anon` appears for non-object/list responses, or when stray `additionalProperties` survive generation). First fix was an exec demotion; replaced with the aws-precedent response template: post_process `SCALAR_TRANSFORMS` attaches `transform` (`golang_template_text_v0.1.0`, regex-lifts the scalar into a `{namespace}` row), `schema_override` (an injected object schema - docgen 0.7.7 renders it, so the docs show a real column) and `overrideMediaType: application/json` (required - the engine's transform path only activates when both a transform and a non-empty override media type are declared; `isOverridable`, any-sdk operation_store.go). Verified against the mock (integration scenario 13) and live (namespace resolves through the template). The `additionalProperties` audit remains an open item.

## 16. Plain power actions must despatch bodyless (optional-body drop)

**Found live (runs 2-3), fixed provider-side, regression-tested.** `InstanceAction` declares an optional `InstancePowerActionDetails` requestBody whose schema requires the `actionType` discriminator - but the discriminator only admits reset-family values (`reset`/`softreset`/`rebootMigrate`); plain STOP/START must send no body at all. The engine's exec surface demands every required body attribute whenever a requestBody (or a method-level `request:` block) is declared, so STOP either failed client-side (`required param not supplied for exec: could not find variable 'actionType'`) or went out with an invalid body. post_process `OPTIONAL_BODY_DROPS` removes the requestBody, the naive `requestBodyTranslate` config and the method `request:` block from `compute.instances.instance_action`; integration scenario 10 asserts the empty body on the wire. Reset-variant detail knobs are out of scope until the engine supports optional exec bodies (candidate any-sdk follow-up: treat an optional requestBody as absent when no body variables are supplied).

## 17. Doc-level auth defaults (zero `--auth` for the env-var variant)

Landed in any-sdk on the same branch as the section 14 fix (`fix/empty-query-request-target`): the doc-level auth DTO now carries OCI env-var indirections (`tenancy_ocid_envvar`, `user_ocid_envvar`, `oci_fingerprint_envvar`, `oci_private_key_envvar`, `oci_private_key_path_envvar`, `oci_passphrase_envvar`, `oci_region_envvar` - doc-level `envvar` convention, indirections only, never literals; the generic terms carry an `oci_` prefix so other auth types can claim fingerprint/private key/passphrase without collision). provider.yaml ships the defaults (`OCI_TENANCY` / `OCI_USER` / `OCI_FINGERPRINT` / `OCI_KEY_FILE` / `OCI_PASSPHRASE`), so a populated environment needs no `--auth` at all once stackql wires the doc-level getters onto the runtime AuthCtx (`transformOpenapiStackqlAuthToLocal`, tracked as a stackql issue - the last mile). Until that wire-through, the shipped defaults are inert and harmless: the type-only behaviour (config-file fallback) is unchanged.

## Open items

1. Live smoke complete (section 1: 18/18, run 4, 2026-08-06); the `--live` published-registry variant remains as post-publish verification.
2. Upstream the section 14 dangling-`?` fix (any-sdk branch `fix/empty-query-request-target`) - a hard release gate. Also file the section 2 pagination ticket (bare header tokens) and the section 11 enhancement (exclude operation-bound params from the pushdown projection union); re-run the integration suite when either lands - the WARNs flip to PASS with no config change.
3. Engine follow-up: doc-level auth defaults for `oci_signing_v1`. The provider doc's `config.auth` parses into any-sdk's doc-level auth DTO (`internal/anysdk/auth_dto.go`, interface `pkg/authsurface/surface.go`), which carries no OCI fields, and stackql's `transformOpenapiStackqlAuthToLocal` (`internal/stackql/handler/handler.go`) copies only the generic fields - so `tenancy_ocid_env_var` etc. in provider.yaml would be silently dropped today. The type-only block does flow through as the default auth context, which is why `~/.oci/config` + `DEFAULT` already works with no `--auth`. Additive fix (any-sdk struct + interface + formulation wrappers + stackql transform) lets the provider doc ship `tenancy_ocid_env_var: OCI_TENANCY` etc. and makes the raw env-var variant zero-config too; ship the fields in the provider doc only once the engine consumes them.
4. Publish (step 6) is gated on the stackql release consuming any-sdk v0.5.4-alpha01; until then all testing uses the local build (`STACKQL_BIN`).
5. Website: builds green (Docusaurus 3.10.2, vendored shared config, 54s). Remaining niceties: extend `website/scripts/sanitize-docs.mjs` to prefix vendor-relative `/iaas/Content/...` links in generated descriptions with `https://docs.oracle.com` (currently build-time warnings under `onBrokenLinks: 'warn'`, openai-sanitizer precedent); produce the blog featured image (`static/img/blog/stackql-oci-provider-featured-image.png`, 1200x627) in the stackql.io repo, where the announcement post is drafted but uncommitted.
6. Meta-route tests (`make test-meta`) need a native or WSL-visible server binary at the repo root - wire into CI on linux runners.
7. KMS per-vault management/crypto endpoints (27 skipped operations): revisit if any-sdk ever supports whole-host server variables spanning dots; until then documented as out of scope.
