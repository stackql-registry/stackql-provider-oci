--- 
title: vault_replicas
hide_title: false
hide_table_of_contents: false
keywords:
  - vault_replicas
  - kms
  - oci
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage oci resources using SQL
custom_edit_url: null
image: /img/stackql-oci-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>vault_replicas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vault_replicas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.kms.vault_replicas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Summary of vault replicas

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="cryptoEndpoint" /></td>
    <td><code>string</code></td>
    <td>The vault replica's crypto endpoint </td>
</tr>
<tr>
    <td><CopyableCode code="managementEndpoint" /></td>
    <td><code>string</code></td>
    <td>The vault replica's management endpoint </td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region to which vault is replicated to </td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the Vault (CREATING, CREATED, DELETING, DELETED)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vaultId"><code>vaultId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Lists the replicas for a vault&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-vaultId"><code>vaultId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-replicaRegion"><code>replicaRegion</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a replica for the vault in another region in the same realm&lt;br /&gt;&lt;br /&gt;The API is a no-op if called for same region that a vault is already replicated to.&lt;br /&gt;409 if called on a vault that is already replicated to a different region. Users need to delete&lt;br /&gt;existing replica first before calling it with a different region.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-vaultId">
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the vault.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in a paginated "List" call. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If provided, the returned request ID will include this value. Otherwise, a random request ID will be generated by the service. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The value of the `opc-next-page` response header from the previous "List" call. </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can specify only one sort order. The default order for `TIMECREATED` is descending. The default order for `DISPLAYNAME` is ascending. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists the replicas for a vault&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;

```sql
SELECT
cryptoEndpoint,
managementEndpoint,
region,
status
FROM oci.kms.vault_replicas
WHERE vaultId = '{{ vaultId }}' -- required
AND region = '{{ region }}' -- required
AND if-match = '{{ if-match }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND opc-retry-token = '{{ opc-retry-token }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a replica for the vault in another region in the same realm&lt;br /&gt;&lt;br /&gt;The API is a no-op if called for same region that a vault is already replicated to.&lt;br /&gt;409 if called on a vault that is already replicated to a different region. Users need to delete&lt;br /&gt;existing replica first before calling it with a different region.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;

```sql
INSERT INTO oci.kms.vault_replicas (
replicaRegion,
replicaVaultMetadata,
vaultId,
region,
if-match,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ replicaRegion }}' /* required */,
'{{ replicaVaultMetadata }}',
'{{ vaultId }}',
'{{ region }}',
'{{ if-match }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vault_replicas
  props:
    - name: vaultId
      value: "{{ vaultId }}"
      description: Required parameter for the vault_replicas resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vault_replicas resource.
    - name: replicaRegion
      value: "{{ replicaRegion }}"
      description: |
        The region in the realm to which the vault need to be replicated to
    - name: replicaVaultMetadata
      description: |
        Metadata for the replica vault, needed if different from primary vault
      value:
        vaultType: "{{ vaultType }}"
    - name: if-match
      value: "{{ if-match }}"
      description: For optimistic concurrency control. In the PUT or DELETE call for a resource, set the \`if-match\` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. 
      description: For optimistic concurrency control. In the PUT or DELETE call for a resource, set the \`if-match\` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. 
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique identifier for the request. If provided, the returned request ID will include this value. Otherwise, a random request ID will be generated by the service. 
      description: Unique identifier for the request. If provided, the returned request ID will include this value. Otherwise, a random request ID will be generated by the service. 
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
`}</CodeBlock>

</TabItem>
</Tabs>
