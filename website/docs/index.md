---
title: oci
hide_title: false
hide_table_of_contents: false
keywords:
  - oci
  - oracle cloud infrastructure
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage Oracle Cloud Infrastructure resources using SQL
custom_edit_url: null
image: /img/stackql-cover.png
id: 'provider-intro'
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';

Oracle Cloud Infrastructure - query and provision identity (compartments, users, groups, policies), core services (compute, VCN networking, block storage), object storage, database (including Autonomous), container engine (OKE), load balancers, DNS, KMS and secrets, monitoring, logging, events, functions, resource manager, streaming, budgets, usage and audit using SQL. Completes StackQL hyperscaler coverage alongside the `aws`, `azure` and `google` providers for multi-cloud inventory and FinOps queries.


:::info[Provider Summary] 

total services: __22__  
total resources: __474__  

:::

See also:
[[` SHOW `]](https://stackql.io/docs/language-spec/show) [[` DESCRIBE `]](https://stackql.io/docs/language-spec/describe)  [[` REGISTRY `]](https://stackql.io/docs/language-spec/registry)
* * *

## Installation

To use the `oci` provider, first [download and install `stackql`](https://stackql.io/downloads):

```bash
curl -L https://bit.ly/stackql-zip -O && unzip stackql-zip
```

Then pull the latest version of the provider:

```bash
REGISTRY PULL oci;
```
> To view previous provider versions or to pull a specific provider version, see [here](https://stackql.io/docs/language-spec/registry).

## Authentication

Requests are signed with an OCI API key (the same credential the OCI CLI and Terraform use; see <a href="https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm">Required Keys and OCIDs</a>). The following system environment variables are used by default - the exact names the OCI CLI reads, so an environment already configured for the CLI works unchanged:

- <CopyableCode code="OCI_CLI_TENANCY" /> - tenancy OCID
- <CopyableCode code="OCI_CLI_USER" /> - user OCID
- <CopyableCode code="OCI_CLI_FINGERPRINT" /> - API key fingerprint
- <CopyableCode code="OCI_CLI_KEY_FILE" /> - path to the private key (PEM)
- <CopyableCode code="OCI_CLI_REGION" /> - region (e.g. `us-ashburn-1`), used to resolve the regional service endpoints
- <CopyableCode code="OCI_CLI_PASSPHRASE" /> - private key passphrase (only if the key is encrypted)

These variables are sourced at runtime (from the local machine or as CI variables/secrets). Use a least-privileged IAM user rather than an administrator.

```bash
AUTH='{ "oci": { "type": "oci_signing_v1", "tenancy_ocid_env_var": "OCI_CLI_TENANCY", "user_ocid_env_var": "OCI_CLI_USER", "fingerprint_env_var": "OCI_CLI_FINGERPRINT", "private_key_path_env_var": "OCI_CLI_KEY_FILE" }}'
stackql shell --auth="${AUTH}"
```

<details>

<summary>Using the OCI config file instead</summary>

When no raw credential values are supplied, the standard OCI config file convention applies - the same `~/.oci/config` used by the OCI CLI and Terraform:

```bash
AUTH='{ "oci": { "type": "oci_signing_v1", "config_file_path": "~/.oci/config", "profile": "DEFAULT" }}'
stackql shell --auth="${AUTH}"
```

or using PowerShell:

```powershell
$Auth = "{ 'oci': { 'type': 'oci_signing_v1', 'config_file_path': '~/.oci/config', 'profile': 'DEFAULT' }}"
stackql.exe shell --auth=$Auth
```
</details>

> OCI rejects requests with more than 5 minutes of clock skew with a `401 NotAuthenticated`; check the local clock if authentication fails with valid credentials.

Endpoints are regional (`identity.{region}.oci.oraclecloud.com` and similar). The `region` server variable resolves from <CopyableCode code="OCI_CLI_REGION" /> automatically, can be supplied per query in the `WHERE` clause, and defaults to `us-ashburn-1`.

## The compartment scope pattern

Nearly every list operation in OCI is scoped by a `compartment_id`. The tenancy OCID is the root compartment, and `oci.identity.compartments` enumerates the compartments beneath it - the natural driving table for estate-wide joins:

```sql
SELECT
  id,
  name,
  description,
  lifecycle_state
FROM oci.identity.compartments
WHERE compartment_id = 'ocid1.tenancy.oc1..your_tenancy_ocid';
```

## Compute estate inventory

Column names are snake_case; nested detail objects are JSON columns addressed with `json_extract`:

```sql
SELECT
  display_name,
  shape,
  json_extract(shape_config, '$.ocpus') AS ocpus,
  json_extract(shape_config, '$.memoryInGBs') AS memory_gb,
  lifecycle_state,
  time_created
FROM oci.compute.instances
WHERE compartment_id = 'ocid1.compartment.oc1..example'
ORDER BY time_created DESC;
```

`LIMIT` pushes down to the OCI `limit` query parameter, so `LIMIT 10` fetches only what it needs.

## IAM policy audit

```sql
SELECT
  name,
  description,
  statements
FROM oci.identity.policies
WHERE compartment_id = 'ocid1.tenancy.oc1..your_tenancy_ocid';
```

## Provisioning

Mutations are SQL verbs - `INSERT` creates, `UPDATE` mutates, `DELETE` removes. Request body attributes use the same snake_case names:

```sql
INSERT INTO oci.network.vcns (
  compartment_id,
  cidr_block,
  display_name
)
SELECT
  'ocid1.compartment.oc1..example',
  '10.0.0.0/16',
  'my-vcn';
```

Actions map to `EXEC`; exec variables use the wire (camelCase) parameter names:

```sql
EXEC oci.compute.instances.instance_action
  @instanceId = 'ocid1.instance.oc1..example',
  @action = 'STOP',
  @actionType = 'stop';
```

## Multi-cloud inventory

The reason this provider exists - the four-hyperscaler estate in one statement:

```sql
SELECT 'oci' AS provider, display_name AS name, shape AS size, lifecycle_state AS state
FROM oci.compute.instances
WHERE compartment_id = 'ocid1.compartment.oc1..example'
UNION ALL
SELECT 'aws', instance_id, instance_type, json_extract(state, '$.name')
FROM aws.ec2.instances
WHERE region = 'us-east-1'
UNION ALL
SELECT 'azure', name, json_extract(properties, '$.hardwareProfile.vmSize'), json_extract(properties, '$.provisioningState')
FROM azure.compute.virtual_machines
WHERE subscriptionId = '00000000-0000-0000-0000-000000000000' AND resourceGroupName = 'my-rg'
UNION ALL
SELECT 'google', name, machineType, status
FROM google.compute.instances
WHERE project = 'my-project' AND zone = 'us-central1-a';
```


## Services
<div class="row">
<div class="providerDocColumn">
<a href="/services/audit/">audit</a><br />
<a href="/services/block_storage/">block_storage</a><br />
<a href="/services/budgets/">budgets</a><br />
<a href="/services/compute/">compute</a><br />
<a href="/services/container_engine/">container_engine</a><br />
<a href="/services/database/">database</a><br />
<a href="/services/dns/">dns</a><br />
<a href="/services/events/">events</a><br />
<a href="/services/functions/">functions</a><br />
<a href="/services/identity/">identity</a><br />
<a href="/services/kms/">kms</a><br />
</div>
<div class="providerDocColumn">
<a href="/services/load_balancer/">load_balancer</a><br />
<a href="/services/logging/">logging</a><br />
<a href="/services/monitoring/">monitoring</a><br />
<a href="/services/network/">network</a><br />
<a href="/services/object_storage/">object_storage</a><br />
<a href="/services/resource_manager/">resource_manager</a><br />
<a href="/services/secrets/">secrets</a><br />
<a href="/services/streaming/">streaming</a><br />
<a href="/services/usage/">usage</a><br />
<a href="/services/vault/">vault</a><br />
<a href="/services/work_requests/">work_requests</a><br />
</div>
</div>
