--- 
title: compute_gpu_memory_fabrics
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_gpu_memory_fabrics
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

Creates, updates, deletes, gets or lists a <code>compute_gpu_memory_fabrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compute_gpu_memory_fabrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.compute_gpu_memory_fabrics" /></td></tr>
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

The information of the compute GPU memory fabric was retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the Customer-unique GPU memory fabric </td>
</tr>
<tr>
    <td><CopyableCode code="additionalData" /></td>
    <td><code>object</code></td>
    <td>Additional data that can be exposed to the customer. Right now it will include the switch tray ids. </td>
</tr>
<tr>
    <td><CopyableCode code="availableHostCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of available bare metal hosts located in this compute GPU memory fabric.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the compartment. This should always be the root compartment. </td>
</tr>
<tr>
    <td><CopyableCode code="computeGpuMemoryClusters" /></td>
    <td><code>array</code></td>
    <td>List of GPU memory clusters within this GPU memory fabric.</td>
</tr>
<tr>
    <td><CopyableCode code="computeHpcIslandId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for Customer-unique HPC Island </td>
</tr>
<tr>
    <td><CopyableCode code="computeLocalBlockId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for Customer-unique Local Block </td>
</tr>
<tr>
    <td><CopyableCode code="computeNetworkBlockId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for Customer-unique Network Block </td>
</tr>
<tr>
    <td><CopyableCode code="currentFirmwareBundleId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for current firmware bundle </td>
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
    <td><CopyableCode code="fabricHealth" /></td>
    <td><code>string</code></td>
    <td>The health state of the GPU memory fabric  (HEALTHY, UNHEALTHY)</td>
</tr>
<tr>
    <td><CopyableCode code="firmwareUpdateReason" /></td>
    <td><code>string</code></td>
    <td>The reason for updating firmware bundle version of the GPU memory fabric. </td>
</tr>
<tr>
    <td><CopyableCode code="firmwareUpdateState" /></td>
    <td><code>string</code></td>
    <td>The state of Memory Fabric Firmware update  (WILL_UPDATE, NO_UPDATE, SKIP_RECYCLE_ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="healthyHostCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of healthy bare metal hosts located in this compute GPU memory fabric.</td>
</tr>
<tr>
    <td><CopyableCode code="hostPlatformName" /></td>
    <td><code>string</code></td>
    <td>The host platform identifier used for bundle queries </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The lifecycle state of the GPU memory fabric  (AVAILABLE, OCCUPIED, PROVISIONING, DEGRADED, UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="memoryFabricPreferences" /></td>
    <td><code>object</code></td>
    <td>The preference object specified by customer. Contains customerDesiredFirmwareBundleId, fabricRecycleLevel. </td>
</tr>
<tr>
    <td><CopyableCode code="switchPlatformName" /></td>
    <td><code>string</code></td>
    <td>The switch platform identifier used for bundle queries </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123; "orcl-cloud": &#123; "free-tier-retained": "true" &#125; &#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="targetFirmwareBundleId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for targeted firmware bundle </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the compute GPU memory fabric record was created, in the format defined by &#91;RFC3339&#93; (https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="totalHostCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of bare metal hosts located in this compute GPU memory fabric.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The list of summary memory fabric details was created and retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the Customer-unique GPU memory fabric </td>
</tr>
<tr>
    <td><CopyableCode code="availableHostCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of available bare metal hosts located in this compute GPU memory fabric.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the compartment. This should always be the  root compartment. </td>
</tr>
<tr>
    <td><CopyableCode code="computeHpcIslandId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for Customer-unique HPC Island </td>
</tr>
<tr>
    <td><CopyableCode code="computeLocalBlockId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for Customer-unique Local Block </td>
</tr>
<tr>
    <td><CopyableCode code="computeNetworkBlockId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for Customer-unique Network Block </td>
</tr>
<tr>
    <td><CopyableCode code="currentFirmwareBundleId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for current firmware bundle </td>
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
    <td><CopyableCode code="fabricHealth" /></td>
    <td><code>string</code></td>
    <td>The health state of the GPU memory fabric  (x-obmcs-enumref: #/definitions/ComputeGpuMemoryFabric/fabricHealth)</td>
</tr>
<tr>
    <td><CopyableCode code="firmwareUpdateState" /></td>
    <td><code>string</code></td>
    <td>The state of Memory Fabric Firmware update  (WILL_UPDATE, NO_UPDATE, SKIP_RECYCLE_ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="healthyHostCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of healthy bare metal hosts located in this compute GPU memory fabric.</td>
</tr>
<tr>
    <td><CopyableCode code="hostPlatformName" /></td>
    <td><code>string</code></td>
    <td>The host platform identifier used for bundle queries </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The lifecycle state of the GPU memory fabric  (x-obmcs-enumref: #/definitions/ComputeGpuMemoryFabric/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="memoryFabricPreferences" /></td>
    <td><code>object</code></td>
    <td>The preference object specified by customer. Contains customerDesiredFirmwareBundleId, fabricRecycleLevel. </td>
</tr>
<tr>
    <td><CopyableCode code="switchPlatformName" /></td>
    <td><code>string</code></td>
    <td>The switch platform identifier used for bundle queries </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123; "orcl-cloud": &#123; "free-tier-retained": "true" &#125; &#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="targetFirmwareBundleId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for targeted firmware bundle </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the compute GPU memory fabric record was created, in the format defined by &#91;RFC3339&#93; (https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="totalHostCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of bare metal hosts located in this compute GPU memory fabric.</td>
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
    <td><a href="#parameter-computeGpuMemoryFabricId"><code>computeGpuMemoryFabricId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified compute GPU memory fabric&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-computeGpuMemoryFabricId"><code>computeGpuMemoryFabricId</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-computeHpcIslandId"><code>computeHpcIslandId</code></a>, <a href="#parameter-computeNetworkBlockId"><code>computeNetworkBlockId</code></a>, <a href="#parameter-computeGpuMemoryFabricLifecycleState"><code>computeGpuMemoryFabricLifecycleState</code></a>, <a href="#parameter-computeGpuMemoryFabricHealth"><code>computeGpuMemoryFabricHealth</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Lists the compute GPU memory fabrics that match the specified criteria and compartmentId.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-computeGpuMemoryFabricId"><code>computeGpuMemoryFabricId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Customer can update displayName, tags and  desired firmware bundle, recycle level for &lt;br /&gt;compute GPU memory fabric record&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-computeGpuMemoryFabricId"><code>computeGpuMemoryFabricId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a compute GPU memory fabric into a different compartment. For information about moving resources between&lt;br /&gt;compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
<tr id="parameter-computeGpuMemoryFabricId">
    <td><CopyableCode code="computeGpuMemoryFabricId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compute GPU memory fabric.</td>
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
<tr id="parameter-computeGpuMemoryFabricHealth">
    <td><CopyableCode code="computeGpuMemoryFabricHealth" /></td>
    <td><code>string</code></td>
    <td>A filter to return ComputeGpuMemoryFabricSummary resources that match the given fabric health. </td>
</tr>
<tr id="parameter-computeGpuMemoryFabricId">
    <td><CopyableCode code="computeGpuMemoryFabricId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only the listings that matches the given GPU memory fabric id. </td>
</tr>
<tr id="parameter-computeGpuMemoryFabricLifecycleState">
    <td><CopyableCode code="computeGpuMemoryFabricLifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return ComputeGpuMemoryFabricSummary resources that match the given lifecycle state. </td>
</tr>
<tr id="parameter-computeHpcIslandId">
    <td><CopyableCode code="computeHpcIslandId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compute HPC island.</td>
</tr>
<tr id="parameter-computeNetworkBlockId">
    <td><CopyableCode code="computeNetworkBlockId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compute network block.</td>
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

Gets information about the specified compute GPU memory fabric&lt;br /&gt;

```sql
SELECT
id,
additionalData,
availableHostCount,
compartmentId,
computeGpuMemoryClusters,
computeHpcIslandId,
computeLocalBlockId,
computeNetworkBlockId,
currentFirmwareBundleId,
definedTags,
displayName,
fabricHealth,
firmwareUpdateReason,
firmwareUpdateState,
freeformTags,
healthyHostCount,
hostPlatformName,
lifecycleState,
memoryFabricPreferences,
switchPlatformName,
systemTags,
targetFirmwareBundleId,
timeCreated,
totalHostCount
FROM oci.compute.compute_gpu_memory_fabrics
WHERE computeGpuMemoryFabricId = '{{ computeGpuMemoryFabricId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the compute GPU memory fabrics that match the specified criteria and compartmentId.

```sql
SELECT
id,
availableHostCount,
compartmentId,
computeHpcIslandId,
computeLocalBlockId,
computeNetworkBlockId,
currentFirmwareBundleId,
definedTags,
displayName,
fabricHealth,
firmwareUpdateState,
freeformTags,
healthyHostCount,
hostPlatformName,
lifecycleState,
memoryFabricPreferences,
switchPlatformName,
systemTags,
targetFirmwareBundleId,
timeCreated,
totalHostCount
FROM oci.compute.compute_gpu_memory_fabrics
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND computeGpuMemoryFabricId = '{{ computeGpuMemoryFabricId }}'
AND availabilityDomain = '{{ availabilityDomain }}'
AND displayName = '{{ displayName }}'
AND computeHpcIslandId = '{{ computeHpcIslandId }}'
AND computeNetworkBlockId = '{{ computeNetworkBlockId }}'
AND computeGpuMemoryFabricLifecycleState = '{{ computeGpuMemoryFabricLifecycleState }}'
AND computeGpuMemoryFabricHealth = '{{ computeGpuMemoryFabricHealth }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
;
```
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

Customer can update displayName, tags and  desired firmware bundle, recycle level for &lt;br /&gt;compute GPU memory fabric record&lt;br /&gt;

```sql
UPDATE oci.compute.compute_gpu_memory_fabrics
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
memoryFabricPreferences = '{{ memoryFabricPreferences }}'
WHERE 
computeGpuMemoryFabricId = '{{ computeGpuMemoryFabricId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
AND opc-retry-token = '{{ opc-retry-token}}'
RETURNING
id,
additionalData,
availableHostCount,
compartmentId,
computeGpuMemoryClusters,
computeHpcIslandId,
computeLocalBlockId,
computeNetworkBlockId,
currentFirmwareBundleId,
definedTags,
displayName,
fabricHealth,
firmwareUpdateReason,
firmwareUpdateState,
freeformTags,
healthyHostCount,
hostPlatformName,
lifecycleState,
memoryFabricPreferences,
switchPlatformName,
systemTags,
targetFirmwareBundleId,
timeCreated,
totalHostCount;
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

Moves a compute GPU memory fabric into a different compartment. For information about moving resources between&lt;br /&gt;compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.compute.compute_gpu_memory_fabrics.change_compartment 
@computeGpuMemoryFabricId='{{ computeGpuMemoryFabricId }}' --required, 
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
