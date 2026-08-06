--- 
title: workload_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - workload_mappings
  - container_engine
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

Creates, updates, deletes, gets or lists a <code>workload_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workload_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.container_engine.workload_mappings" /></td></tr>
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

WorkloadMapping details.

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
    <td>The ocid of the workloadMapping. (example: ocid1.workloadmapping.ocX.us-ashburn-1.xtrdsa56sjasa72321)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the cluster. (example: ocid1.cluster.oc1.iad.aaaaaaaaga3tombrmq3wgyrvmi3gcn3bmfsdizjwgy4wgyldmy3dcmtcmmyw)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The state of the workloadMapping. (CREATING, ACTIVE, FAILED, DELETING, DELETED, UPDATING) (example: UPDATING, x-obmcs-top-level-enum: #/definitions/WorkloadMappingLifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="mappedCompartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the mapped customer compartment. (example: ocid1.compartment.oc1..aaaaaaaafqm2df7ckwmmbtdsl2bgxsw4fcpvkoojytxrqst24yww2tdmtqcq)</td>
</tr>
<tr>
    <td><CopyableCode code="mappedTenancyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the mapped customer tenancy. (example: ocid1.tenancy.oc1..aaaaaaaafqm2df7ckwmmbtdsl2bgxsw4fcpvkoojytxrqst24yww2tdmtqcq)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the workloadMapping. (example: kube-proxy)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the cluster was created. (example: 2017-07-21T16:11:29Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The properties that define an workloadMapping summary.

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
    <td>The ocid of the workloadMapping. (example: ocid1.workloadmapping.ocX.us-ashburn-1.xtrdsa56sjasa72321)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the cluster. (example: ocid1.cluster.oc1.iad.aaaaaaaaga3tombrmq3wgyrvmi3gcn3bmfsdizjwgy4wgyldmy3dcmtcmmyw)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The state of the workloadMapping. (CREATING, ACTIVE, FAILED, DELETING, DELETED, UPDATING) (example: UPDATING, x-obmcs-top-level-enum: #/definitions/WorkloadMappingLifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="mappedCompartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the mapped customer compartment. (example: ocid1.compartment.oc1..aaaaaaaafqm2df7ckwmmbtdsl2bgxsw4fcpvkoojytxrqst24yww2tdmtqcq)</td>
</tr>
<tr>
    <td><CopyableCode code="mappedTenancyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the mapped customer tenancy. (example: ocid1.tenancy.oc1..aaaaaaaafqm2df7ckwmmbtdsl2bgxsw4fcpvkoojytxrqst24yww2tdmtqcq)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the workloadMapping. (example: kube-proxy)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the cluster was created. (example: 2017-07-21T16:11:29Z)</td>
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
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-workloadMappingId"><code>workloadMappingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Get the specified workloadMapping for a cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a></td>
    <td>List workloadMappings for a provisioned cluster.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-mappedCompartmentId"><code>mappedCompartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Create the specified workloadMapping for a cluster.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-workloadMappingId"><code>workloadMappingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Update workloadMapping details for a cluster.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-workloadMappingId"><code>workloadMappingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Delete workloadMapping for a provisioned cluster.</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-workloadMappingId">
    <td><CopyableCode code="workloadMappingId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the workloadMapping.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. 1 is the minimum, 1000 is the maximum. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token you supply to uniquely identify the request and provide idempotency if the request is retried. Idempotency tokens expire after 24 hours. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The optional field to sort the results by.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The optional order in which to sort the results.</td>
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

Get the specified workloadMapping for a cluster.

```sql
SELECT
id,
clusterId,
definedTags,
freeformTags,
lifecycleState,
mappedCompartmentId,
mappedTenancyId,
namespace,
systemTags,
timeCreated
FROM oci.container_engine.workload_mappings
WHERE clusterId = '{{ clusterId }}' -- required
AND workloadMappingId = '{{ workloadMappingId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

List workloadMappings for a provisioned cluster.

```sql
SELECT
id,
clusterId,
definedTags,
freeformTags,
lifecycleState,
mappedCompartmentId,
mappedTenancyId,
namespace,
systemTags,
timeCreated
FROM oci.container_engine.workload_mappings
WHERE clusterId = '{{ clusterId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
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

Create the specified workloadMapping for a cluster.

```sql
INSERT INTO oci.container_engine.workload_mappings (
definedTags,
freeformTags,
mappedCompartmentId,
namespace,
clusterId,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ definedTags }}',
'{{ freeformTags }}',
'{{ mappedCompartmentId }}' /* required */,
'{{ namespace }}' /* required */,
'{{ clusterId }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
clusterId,
definedTags,
freeformTags,
lifecycleState,
mappedCompartmentId,
mappedTenancyId,
namespace,
systemTags,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workload_mappings
  props:
    - name: clusterId
      value: "{{ clusterId }}"
      description: Required parameter for the workload_mappings resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workload_mappings resource.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: mappedCompartmentId
      value: "{{ mappedCompartmentId }}"
      description: |
        The OCID of the mapped customer compartment.
    - name: namespace
      value: "{{ namespace }}"
      description: |
        The namespace of the workloadMapping.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token you supply to uniquely identify the request and provide idempotency if the request is retried. Idempotency tokens expire after 24 hours. 
      description: A token you supply to uniquely identify the request and provide idempotency if the request is retried. Idempotency tokens expire after 24 hours. 
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
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

Update workloadMapping details for a cluster.

```sql
UPDATE oci.container_engine.workload_mappings
SET 
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}',
mappedCompartmentId = '{{ mappedCompartmentId }}'
WHERE 
clusterId = '{{ clusterId }}' --required
AND workloadMappingId = '{{ workloadMappingId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
clusterId,
definedTags,
freeformTags,
lifecycleState,
mappedCompartmentId,
mappedTenancyId,
namespace,
systemTags,
timeCreated;
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

Delete workloadMapping for a provisioned cluster.

```sql
DELETE FROM oci.container_engine.workload_mappings
WHERE clusterId = '{{ clusterId }}' --required
AND workloadMappingId = '{{ workloadMappingId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
