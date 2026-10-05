--- 
title: compute_gpu_memory_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_gpu_memory_clusters
  - compute
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

Creates, updates, deletes, gets or lists a <code>compute_gpu_memory_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compute_gpu_memory_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.compute_gpu_memory_clusters" /></td></tr>
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

The information of the compute GPU memory cluster was retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the Customer-unique GPU Memory Cluster </td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the GPU Memory Cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the compute GPU memory cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="computeClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compute cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="gpuMemoryClusterScaleConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration settings for GPU Memory Cluster scaling. </td>
</tr>
<tr>
    <td><CopyableCode code="gpuMemoryFabricId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the GPU memory fabric. </td>
</tr>
<tr>
    <td><CopyableCode code="instanceConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Instance Configuration used to source launch details for this instance.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The lifecycle state of the GPU Memory Cluster  (CREATING, ACTIVE, UPDATING, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpIds" /></td>
    <td><code>array</code></td>
    <td>Unique list of OCIDs for private IPs (IPv4/IPv6) associated with the GPU Memory Cluster</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size represents the total number of instances in the GPU Memory Cluster, including both running instances and those still in the process of launching. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123; "orcl-cloud": &#123; "free-tier-retained": "true" &#125; &#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the GPU Memory Cluster was created.  Example: `2016-09-15T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The list of GPU memory clusters was created and retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the Customer-unique GPU Memory Cluster </td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of GPU Memory Cluster.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the compute GPU Memory Cluster. compartment. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="gpuMemoryFabricId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the GPU memory fabric. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the compute GPU Memory Cluster. (x-obmcs-enumref: #/definitions/ComputeGpuMemoryCluster/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size represents the total number of instances in the GPU Memory Cluster, including both running instances and those still in the process of launching. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123; "orcl-cloud": &#123; "free-tier-retained": "true" &#125; &#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the boot volume was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-computeGpuMemoryClusterId"><code>computeGpuMemoryClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified compute GPU memory cluster&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-computeGpuMemoryClusterId"><code>computeGpuMemoryClusterId</code></a>, <a href="#parameter-computeGpuMemoryFabricId"><code>computeGpuMemoryFabricId</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-computeClusterId"><code>computeClusterId</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>List all of the compute GPU memory clusters.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-computeClusterId"><code>computeClusterId</code></a>, <a href="#parameter-instanceConfigurationId"><code>instanceConfigurationId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Create a compute GPU memory cluster instance on a specific compute GPU memory fabric&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-computeGpuMemoryClusterId"><code>computeGpuMemoryClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Updates a compute gpu memory cluster resource.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-computeGpuMemoryClusterId"><code>computeGpuMemoryClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Terminates and deletes the specified compute GPU memory cluster and underlying instances.</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-computeGpuMemoryClusterId"><code>computeGpuMemoryClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a compute GPU memory cluster into a different compartment. For information about moving resources between&lt;br /&gt;compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr id="parameter-computeGpuMemoryClusterId">
    <td><CopyableCode code="computeGpuMemoryClusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compute GPU memory cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr id="parameter-computeClusterId">
    <td><CopyableCode code="computeClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compute cluster. A &#91;compute cluster&#93;(/iaas/Content/Compute/Tasks/compute-clusters.htm) is a remote direct memory access (RDMA) network group. </td>
</tr>
<tr id="parameter-computeGpuMemoryClusterId">
    <td><CopyableCode code="computeGpuMemoryClusterId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only the listings that matches the given GPU memory cluster id. </td>
</tr>
<tr id="parameter-computeGpuMemoryFabricId">
    <td><CopyableCode code="computeGpuMemoryFabricId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only the listings that matches the given GPU memory fabric id. </td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given display name exactly. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** In general, some "List" operations (for example, `ListInstances`) let you optionally filter by availability domain if the scope of the resource type is within a single availability domain. If you call one of these "List" operations without specifying an availability domain, the resources are grouped by availability domain, then sorted. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). The DISPLAYNAME sort order is case sensitive. </td>
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

Gets information about the specified compute GPU memory cluster&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
compartmentId,
computeClusterId,
definedTags,
displayName,
freeformTags,
gpuMemoryClusterScaleConfig,
gpuMemoryFabricId,
instanceConfigurationId,
lifecycleState,
privateIpIds,
size,
systemTags,
timeCreated
FROM oci.compute.compute_gpu_memory_clusters
WHERE computeGpuMemoryClusterId = '{{ computeGpuMemoryClusterId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

List all of the compute GPU memory clusters.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
compartmentId,
definedTags,
displayName,
freeformTags,
gpuMemoryFabricId,
lifecycleState,
size,
systemTags,
timeCreated
FROM oci.compute.compute_gpu_memory_clusters
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND computeGpuMemoryClusterId = '{{ computeGpuMemoryClusterId }}'
AND computeGpuMemoryFabricId = '{{ computeGpuMemoryFabricId }}'
AND availabilityDomain = '{{ availabilityDomain }}'
AND displayName = '{{ displayName }}'
AND computeClusterId = '{{ computeClusterId }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND limit = '{{ limit }}'
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

Create a compute GPU memory cluster instance on a specific compute GPU memory fabric&lt;br /&gt;

```sql
INSERT INTO oci.compute.compute_gpu_memory_clusters (
availabilityDomain,
compartmentId,
computeClusterId,
definedTags,
displayName,
freeformTags,
gpuMemoryClusterScaleConfig,
gpuMemoryFabricId,
instanceConfigurationId,
privateIpIds,
size,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ availabilityDomain }}' /* required */,
'{{ compartmentId }}' /* required */,
'{{ computeClusterId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ gpuMemoryClusterScaleConfig }}',
'{{ gpuMemoryFabricId }}',
'{{ instanceConfigurationId }}' /* required */,
'{{ privateIpIds }}',
{{ size }},
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
availabilityDomain,
compartmentId,
computeClusterId,
definedTags,
displayName,
freeformTags,
gpuMemoryClusterScaleConfig,
gpuMemoryFabricId,
instanceConfigurationId,
lifecycleState,
privateIpIds,
size,
systemTags,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: compute_gpu_memory_clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the compute_gpu_memory_clusters resource.
    - name: availabilityDomain
      value: "{{ availabilityDomain }}"
      description: |
        The availability domain of the GPU Memory Cluster.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the compute GPU Memory Cluster.
        compartment.
    - name: computeClusterId
      value: "{{ computeClusterId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compute cluster.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a
        namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. Does not have to be unique, and it's changeable.
        Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: gpuMemoryClusterScaleConfig
      description: |
        Configuration settings for GPU Memory Cluster scaling.
      value:
        isDownsizeEnabled: {{ isDownsizeEnabled }}
        isUpsizeEnabled: {{ isUpsizeEnabled }}
        targetSize: {{ targetSize }}
    - name: gpuMemoryFabricId
      value: "{{ gpuMemoryFabricId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the GPU memory fabric.
    - name: instanceConfigurationId
      value: "{{ instanceConfigurationId }}"
      description: |
        Instance Configuration to be used for this GPU Memory Cluster
    - name: privateIpIds
      value:
        - "{{ privateIpIds }}"
      description: |
        Unique list of OCIDs for private IPs (IPv4/IPv6) associated with the GPU Memory Cluster
    - name: size
      value: {{ size }}
      description: |
        The desired number of instances for the GPU Memory Cluster.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
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

Updates a compute gpu memory cluster resource.&lt;br /&gt;

```sql
UPDATE oci.compute.compute_gpu_memory_clusters
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
gpuMemoryClusterScaleConfig = '{{ gpuMemoryClusterScaleConfig }}',
instanceConfigurationId = '{{ instanceConfigurationId }}',
privateIpIds = '{{ privateIpIds }}',
size = {{ size }}
WHERE 
computeGpuMemoryClusterId = '{{ computeGpuMemoryClusterId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
AND opc-retry-token = '{{ opc-retry-token}}'
RETURNING
id,
availabilityDomain,
compartmentId,
computeClusterId,
definedTags,
displayName,
freeformTags,
gpuMemoryClusterScaleConfig,
gpuMemoryFabricId,
instanceConfigurationId,
lifecycleState,
privateIpIds,
size,
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

Terminates and deletes the specified compute GPU memory cluster and underlying instances.

```sql
DELETE FROM oci.compute.compute_gpu_memory_clusters
WHERE computeGpuMemoryClusterId = '{{ computeGpuMemoryClusterId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_compartment"
    values={[
        { label: 'change_compartment', value: 'change_compartment' }
    ]}
>
<TabItem value="change_compartment">

Moves a compute GPU memory cluster into a different compartment. For information about moving resources between&lt;br /&gt;compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.compute.compute_gpu_memory_clusters.change_compartment 
@computeGpuMemoryClusterId='{{ computeGpuMemoryClusterId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
</Tabs>
