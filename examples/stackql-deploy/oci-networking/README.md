# oci-networking stack

An example [stackql-deploy](https://stackql-deploy.io) stack for the `oci` provider: a VCN with a subnet and an object storage bucket. All three resources are free-tier, and everything created is tagged with the stack name and environment.

## Resources

| Resource | StackQL resource | Notes |
|---|---|---|
| `example_vcn` | `oci.network.vcns` | CIDR varies by environment (`dev`/`sit`/`prd`) |
| `example_subnet` | `oci.network.subnets` | consumes the exported `vcn_id` |
| `example_bucket` | `oci.object_storage.buckets` | requires the tenancy's object storage namespace |

## Prerequisites

Provider authentication uses the same environment the OCI CLI reads - export these in the shell (they are consumed by the stackql server process, not the templating engine):

```bash
export OCI_CLI_TENANCY=ocid1.tenancy.oc1..your_tenancy
export OCI_CLI_USER=ocid1.user.oc1..your_user
export OCI_CLI_FINGERPRINT=aa:bb:cc:...
export OCI_CLI_KEY_FILE=~/.oci/oci_api_key.pem
export OCI_CLI_REGION=us-ashburn-1
```

(Alternatively `~/.oci/config` works via the provider's config-file auth variant.)

Stack variables are passed with `-e` or a `.env` file:

- `OCI_COMPARTMENT_ID` - compartment OCID to deploy into
- `OCI_OS_NAMESPACE` - object storage namespace (`oci os ns get` in the OCI CLI)

## Usage

```bash
# deploy (or converge) the dev environment
stackql-deploy build examples/stackql-deploy/oci-networking dev \
  -e OCI_COMPARTMENT_ID=ocid1.compartment.oc1..example \
  -e OCI_OS_NAMESPACE=mynamespace

# verify without mutating
stackql-deploy test examples/stackql-deploy/oci-networking dev \
  -e OCI_COMPARTMENT_ID=ocid1.compartment.oc1..example \
  -e OCI_OS_NAMESPACE=mynamespace

# tear down (reverse order: bucket, subnet, vcn)
stackql-deploy teardown examples/stackql-deploy/oci-networking dev \
  -e OCI_COMPARTMENT_ID=ocid1.compartment.oc1..example \
  -e OCI_OS_NAMESPACE=mynamespace
```

Add `--dry-run` to preview the rendered queries, or `--show-queries` to print them as they execute.
