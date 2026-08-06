--- 
title: ekms_private_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - ekms_private_endpoints
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

Creates, updates, deletes, gets or lists an <code>ekms_private_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ekms_private_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.kms.ekms_private_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Retrieves EKMS private endpoint with given id.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier that is immutable</td>
</tr>
<tr>
    <td><CopyableCode code="caBundle" /></td>
    <td><code>string</code></td>
    <td>CABundle to validate TLS certificate of the external key manager system in PEM format </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>Compartment Identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Usage of predefined tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"foo-namespace": &#123;"bar-key": "value"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>EKMS Private Endpoint display name</td>
</tr>
<tr>
    <td><CopyableCode code="externalKeyManagerIp" /></td>
    <td><code>string</code></td>
    <td>Private IP of the external key manager system to connect to from the EKMS private endpoint </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only. Example: `&#123;"bar-key": "value"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in 'Failed' state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the EKMS private endpoint resource. (CREATING, ACTIVE, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port of the external key manager system</td>
</tr>
<tr>
    <td><CopyableCode code="privateEndpointIp" /></td>
    <td><code>string</code></td>
    <td>The IP address in the customer's VCN for the EKMS private endpoint. This is taken from subnet</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>Subnet Identifier</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the EKMS private endpoint was created. An &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) formatted datetime string.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the EKMS private endpoint was updated. An &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) formatted datetime string.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

EKMS private endpoints summary

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier that is immutable</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>Identifier of the compartment this EKMS private endpoint belongs to</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Usage of predefined tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"foo-namespace": &#123;"bar-key": "value"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Mutable name of the EKMS private endpoint</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only. Example: `&#123;"bar-key": "value"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the EKMS private endpoint resource. (CREATING, ACTIVE, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>Subnet Identifier</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the EKMS private endpoint was created. An &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) formatted datetime string.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the EKMS private endpoint was updated. An &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) formatted datetime string.</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ekmsPrivateEndpointId"><code>ekmsPrivateEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets a specific EKMS private by identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Returns a list of all the EKMS private endpoints in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-externalKeyManagerIp"><code>externalKeyManagerIp</code></a>, <a href="#parameter-caBundle"><code>caBundle</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Create a new EKMS private endpoint used to connect to external key manager system</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ekmsPrivateEndpointId"><code>ekmsPrivateEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates EKMS private endpoint.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ekmsPrivateEndpointId"><code>ekmsPrivateEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes EKMS private endpoint by identifier.</td>
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
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
</tr>
<tr id="parameter-ekmsPrivateEndpointId">
    <td><CopyableCode code="ekmsPrivateEndpointId" /></td>
    <td><code>string</code></td>
    <td>Unique EKMS private endpoint identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets a specific EKMS private by identifier.

```sql
SELECT
id,
caBundle,
compartmentId,
definedTags,
displayName,
externalKeyManagerIp,
freeformTags,
lifecycleDetails,
lifecycleState,
port,
privateEndpointIp,
subnetId,
timeCreated,
timeUpdated
FROM oci.kms.ekms_private_endpoints
WHERE ekmsPrivateEndpointId = '{{ ekmsPrivateEndpointId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Returns a list of all the EKMS private endpoints in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
subnetId,
timeCreated,
timeUpdated
FROM oci.kms.ekms_private_endpoints
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
AND opc-request-id = '{{ opc-request-id }}'
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

Create a new EKMS private endpoint used to connect to external key manager system

```sql
INSERT INTO oci.kms.ekms_private_endpoints (
caBundle,
compartmentId,
definedTags,
displayName,
externalKeyManagerIp,
freeformTags,
port,
subnetId,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ caBundle }}' /* required */,
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ externalKeyManagerIp }}' /* required */,
'{{ freeformTags }}',
{{ port }},
'{{ subnetId }}' /* required */,
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
caBundle,
compartmentId,
definedTags,
displayName,
externalKeyManagerIp,
freeformTags,
lifecycleDetails,
lifecycleState,
port,
privateEndpointIp,
subnetId,
timeCreated,
timeUpdated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ekms_private_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ekms_private_endpoints resource.
    - name: caBundle
      value: "{{ caBundle }}"
      description: |
        CABundle to validate TLS certificate of the external key manager system in PEM format
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        Compartment identifier.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Usage of predefined tag keys. These predefined keys are scoped to namespaces.
        Example: \`{"foo-namespace": {"bar-key": "value"}}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Display name of the EKMS private endpoint resource being created.
    - name: externalKeyManagerIp
      value: "{{ externalKeyManagerIp }}"
      description: |
        External private IP to connect to from this EKMS private endpoint
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
        Example: \`{"bar-key": "value"}\`
    - name: port
      value: {{ port }}
      description: |
        The port of the external key manager system
    - name: subnetId
      value: "{{ subnetId }}"
      description: |
        The OCID of subnet in which the EKMS private endpoint is to be created
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


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates EKMS private endpoint.

```sql
UPDATE oci.kms.ekms_private_endpoints
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}'
WHERE 
ekmsPrivateEndpointId = '{{ ekmsPrivateEndpointId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
caBundle,
compartmentId,
definedTags,
displayName,
externalKeyManagerIp,
freeformTags,
lifecycleDetails,
lifecycleState,
port,
privateEndpointIp,
subnetId,
timeCreated,
timeUpdated;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes EKMS private endpoint by identifier.

```sql
DELETE FROM oci.kms.ekms_private_endpoints
WHERE ekmsPrivateEndpointId = '{{ ekmsPrivateEndpointId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
