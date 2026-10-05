--- 
title: db_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - db_servers
  - database
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

Creates, updates, deletes, gets or lists a <code>db_servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.db_servers" /></td></tr>
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

Information about the Exadata Db server.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Db server.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousVirtualMachineIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous Virtual Machines associated with the Db server. </td>
</tr>
<tr>
    <td><CopyableCode code="autonomousVmClusterIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous VM Clusters associated with the Db server. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Base Database, Exadata Infrastructure, VM Cluster and Autonomous AI Database.  (ECPU, OCPU) (x-default-description: Null used when unspecified.)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled on the Db server.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Db nodes associated with the Db server. </td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The allocated local node storage in GBs on the Db server.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServerPatchingDetails" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Db server. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="exadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Db server. (CREATING, AVAILABLE, UNAVAILABLE, DELETING, DELETED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="maxCpuCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores available.</td>
</tr>
<tr>
    <td><CopyableCode code="maxDbNodeStorageInGBs" /></td>
    <td><code>integer</code></td>
    <td>The total local node storage available in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="maxMemoryInGBs" /></td>
    <td><code>integer</code></td>
    <td>The total memory available in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The allocated memory in GBs on the Db server.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the Db server. The shape determines the amount of CPU, storage, and memory resources available. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Db Server was created.</td>
</tr>
<tr>
    <td><CopyableCode code="vmClusterIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VM Clusters associated with the Db server. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details of the Db server.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Db server.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousVirtualMachineIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous Virtual Machines associated with the Db server. </td>
</tr>
<tr>
    <td><CopyableCode code="autonomousVmClusterIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous VM Clusters associated with the Db server. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Base Database, Exadata Infrastructure, VM Cluster and Autonomous AI Database.  (ECPU, OCPU) (x-default-description: Null used when unspecified.)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled on the Db server.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Db nodes associated with the Db server. </td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The allocated local node storage in GBs on the Db server.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServerPatchingDetails" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Db server. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="exadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Db server. (CREATING, AVAILABLE, UNAVAILABLE, DELETING, DELETED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="maxCpuCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores available.</td>
</tr>
<tr>
    <td><CopyableCode code="maxDbNodeStorageInGBs" /></td>
    <td><code>integer</code></td>
    <td>The total local node storage available in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="maxMemoryInGBs" /></td>
    <td><code>integer</code></td>
    <td>The total memory available in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The allocated memory in GBs on the Db server.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the Db server. The shape determines the amount of CPU, storage, and memory resources available. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Db Server was created.</td>
</tr>
<tr>
    <td><CopyableCode code="vmClusterIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VM Clusters associated with the Db server. </td>
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
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-dbServerId"><code>dbServerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the Exadata Db server.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td>Lists the Exadata DB servers in the ExadataInfrastructureId and specified compartment.&lt;br /&gt;</td>
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
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-dbServerId">
    <td><CopyableCode code="dbServerId" /></td>
    <td><code>string</code></td>
    <td>The DB server &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-exadataInfrastructureId">
    <td><CopyableCode code="exadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the ExadataInfrastructure.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the entire display name given. The match is not case sensitive.</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given lifecycle state exactly.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return per page.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token to continue listing from.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>Sort by TIMECREATED.  Default order for TIMECREATED is descending.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`).</td>
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

Gets information about the Exadata Db server.&lt;br /&gt;

```sql
SELECT
id,
autonomousVirtualMachineIds,
autonomousVmClusterIds,
compartmentId,
computeModel,
cpuCoreCount,
dbNodeIds,
dbNodeStorageSizeInGBs,
dbServerPatchingDetails,
definedTags,
displayName,
exadataInfrastructureId,
freeformTags,
lifecycleDetails,
lifecycleState,
maxCpuCount,
maxDbNodeStorageInGBs,
maxMemoryInGBs,
memorySizeInGBs,
shape,
systemTags,
timeCreated,
vmClusterIds
FROM oci.database.db_servers
WHERE exadataInfrastructureId = '{{ exadataInfrastructureId }}' -- required
AND dbServerId = '{{ dbServerId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the Exadata DB servers in the ExadataInfrastructureId and specified compartment.&lt;br /&gt;

```sql
SELECT
id,
autonomousVirtualMachineIds,
autonomousVmClusterIds,
compartmentId,
computeModel,
cpuCoreCount,
dbNodeIds,
dbNodeStorageSizeInGBs,
dbServerPatchingDetails,
definedTags,
displayName,
exadataInfrastructureId,
freeformTags,
lifecycleDetails,
lifecycleState,
maxCpuCount,
maxDbNodeStorageInGBs,
maxMemoryInGBs,
memorySizeInGBs,
shape,
systemTags,
timeCreated,
vmClusterIds
FROM oci.database.db_servers
WHERE compartmentId = '{{ compartmentId }}' -- required
AND exadataInfrastructureId = '{{ exadataInfrastructureId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortOrder = '{{ sortOrder }}'
AND opc-request-id = '{{ opc-request-id }}'
AND sortBy = '{{ sortBy }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
;
```
</TabItem>
</Tabs>
