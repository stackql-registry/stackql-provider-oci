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
