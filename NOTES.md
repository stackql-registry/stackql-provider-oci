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
