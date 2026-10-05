# Add OCI request signing auth type (`oci_signing_v1`)

## Summary

Add an authentication type to any-sdk supporting Oracle Cloud Infrastructure (OCI) request signing, enabling a StackQL `oci` provider. All OCI API requests must be signed using the draft-cavage HTTP Signatures scheme with an RSA key registered against an IAM user - no bearer/API-key alternative exists for the OCI control plane.

The proposed implementation mirrors the existing `aws_signing_v4` architecture exactly: vendor the cloud vendor's official Go signing implementation, wrap it in an `http.RoundTripper` decorator, configure it from `AuthCtx` fields, and dispatch on a new auth type string.

## Reference: how `aws_signing_v4` is structured today

- `pkg/awssign/aws_sign.go` - `standardAwsSignTransport` implements a `Transport` (RoundTripper) that wraps the underlying transport; `RoundTrip` reads and restores the body to compute the payload SHA-256, pulls `service`/`region` from request context, calls the official signer (`github.com/aws/aws-sdk-go-v2/aws/signer/v4` `SignHTTP`), applies service-specific header tweaks, then delegates.
- `pkg/dto/auth_ctx.go` - `KeyID`/`KeyIDEnvVar` fields plus the generic credentials bytes carry the key pair; env-var-or-literal getters.
- `pkg/auth_util/auth_util.go` - `awsSigningAuth()` resolves credentials, calls `ActivateAuth`, and swaps `httpClient.Transport` for the signing transport; the type switch routes `dto.AuthAWSSigningv4Str`.

## What OCI signing requires

Per the OCI Request Signatures specification:

- Scheme: `Authorization: Signature version="1",keyId="<tenancy_ocid>/<user_ocid>/<fingerprint>",algorithm="rsa-sha256",headers="...",signature="<base64>"`
- Signed headers: `(request-target)`, `host`, `date` on all requests; additionally `content-length`, `content-type`, `x-content-sha256` on POST/PUT/PATCH (the body SHA-256, base64-encoded, must be computed and set - the same read-and-restore body handling `aws_sign.go` already does)
- Key material: an RSA private key (PEM, optional passphrase) whose public half is uploaded to the IAM user; the fingerprint identifies it
- Server enforces clock sync: 401 `NotAuthenticated` on >5 minutes skew - worth a targeted error hint
- Unlike SigV4, no service/region participates in the signature - the signer needs only the keyId triple and the private key, so no request-context plumbing is required

## Proposed implementation

**New package `pkg/ocisign`**, wrapping the official SDK rather than reimplementing the scheme:

- Dependency: `github.com/oracle/oci-go-sdk/v65/common` - `common.RequestSigner(provider, genericHeaders, bodyHeaders)` / `common.DefaultRequestSigner(provider)` expose `Sign(*http.Request) error`; `common.NewRawConfigurationProvider(tenancy, user, region, fingerprint, privateKeyPEM, passphrase)` and `common.ConfigurationProviderFromFileWithProfile(path, profile, passphrase)` cover both credential sources
- `standardOciSignTransport` implementing the same `Transport` interface as `awssign`: `RoundTrip` ensures `date`/`host` are set, performs the body read-and-restore for `x-content-sha256`/`content-length` on body-bearing verbs (the SDK signer computes and sets these given the body is readable), calls `signer.Sign(req)`, delegates
- Constructors: `NewOciSignTransport(underlying, configProvider)` plus convenience builders for the raw and file-based providers

**`AuthCtx` additions** (`pkg/dto/auth_ctx.go`), following the env-var-or-literal getter convention:

```yaml
# variant A: OCI config file (the ~/.oci/config convention every OCI tool shares)
auth:
  type: oci_signing_v1
  config_file_path: ~/.oci/config     # optional, this default
  profile: DEFAULT                     # optional, this default
  passphrase_env_var: OCI_KEY_PASSPHRASE  # optional

# variant B: raw values, twelve-factor style
auth:
  type: oci_signing_v1
  tenancy_ocid_env_var: OCI_TENANCY_OCID
  user_ocid_env_var: OCI_USER_OCID
  fingerprint_env_var: OCI_FINGERPRINT
  private_key_path_env_var: OCI_PRIVATE_KEY_PATH   # or private_key_env_var for PEM-in-env
  passphrase_env_var: OCI_KEY_PASSPHRASE           # optional
  region_env_var: OCI_REGION                        # provider-config convenience, not used by the signer
```

Resolution order: raw values when present, otherwise config file. Both delegate to the SDK's configuration providers, so semantics match the OCI CLI/SDK ecosystem exactly.

**Dispatch**: `AuthOciSigningv1Str string = "oci_signing_v1"` in `pkg/dto/dto.go`; `ociSigningAuth()` in `pkg/auth_util/auth_util.go` mirroring `awsSigningAuth()` (resolve provider -> `ActivateAuth` -> wrap transport); a case in the type switch.

## Testing

- Unit: sign a canonical fixed request with a fixed test key and assert the exact `Authorization` header against the known-good vectors in Oracle's Request Signatures documentation (they publish worked examples); cover GET (three headers) and POST (six headers, body hash) forms; config-file and raw provider resolution; passphrase-protected key
- Negative: missing key material, malformed PEM, clock-skew 401 surfaced with a hint
- Integration (optional, gated): a `GET /20160918/vcns?compartmentId=...` against an Always Free tenancy

## Out of scope / follow-ups

- Instance principals, resource principals, and session-token (security token) auth - the SDK's `auth` package supports all three behind the same `ConfigurationProvider` interface, so they are additive later without touching the transport
- Upload-part streaming bodies (Object Storage multipart) - the read-and-restore body handling matches the existing AWS transport's behaviour; streaming optimization is not required for v1

## Motivation

Unlocks the `oci` StackQL provider (per-service vendor OpenAPI specs are published; the only blocker is this auth scheme), completing hyperscaler coverage alongside `aws`, `azure`, and `google`. Filed from the stackql-provider-oci build; cross-reference that repository's CLAUDE.md.
