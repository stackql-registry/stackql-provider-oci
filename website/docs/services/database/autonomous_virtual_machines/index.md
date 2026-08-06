--- 
title: autonomous_virtual_machines
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_virtual_machines
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

Creates, updates, deletes, gets or lists an <code>autonomous_virtual_machines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_virtual_machines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.autonomous_virtual_machines" /></td></tr>
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

Autonomous Virtual Machine details.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous VM Cluster associated with the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="clientIpAddress" /></td>
    <td><code>string</code></td>
    <td>Client IP Address.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudAutonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Cloud Autonomous VM Cluster associated with the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled on the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The allocated local node storage in GBs on the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServerDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the dbServer associated with the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Db server associated with the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Autonomous Virtual Machine. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The allocated memory in GBs on the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="vmName" /></td>
    <td><code>string</code></td>
    <td>The name of the Autonomous Virtual Machine.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details of the Autonomous Virtual Machine.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous VM Cluster associated with the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="clientIpAddress" /></td>
    <td><code>string</code></td>
    <td>Client IP Address.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudAutonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Cloud Autonomous VM Cluster associated with the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled on the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The allocated local node storage in GBs on the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServerDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the dbServer associated with the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Db server associated with the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Autonomous Virtual Machine. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The allocated memory in GBs on the Autonomous Virtual Machine.</td>
</tr>
<tr>
    <td><CopyableCode code="vmName" /></td>
    <td><code>string</code></td>
    <td>The name of the Autonomous Virtual Machine.</td>
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
    <td><a href="#parameter-autonomousVirtualMachineId"><code>autonomousVirtualMachineId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the details of specific Autonomous Virtual Machine.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-autonomousVmClusterId"><code>autonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the Autonomous Virtual Machines in the specified Autonomous VM Cluster and Compartment.&lt;br /&gt;</td>
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
<tr id="parameter-autonomousVirtualMachineId">
    <td><CopyableCode code="autonomousVirtualMachineId" /></td>
    <td><code>string</code></td>
    <td>The Autonomous Virtual machine &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-autonomousVmClusterId">
    <td><CopyableCode code="autonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The Autonomous Virtual machine &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
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

Gets the details of specific Autonomous Virtual Machine.&lt;br /&gt;

```sql
SELECT
id,
autonomousVmClusterId,
clientIpAddress,
cloudAutonomousVmClusterId,
compartmentId,
cpuCoreCount,
dbNodeStorageSizeInGBs,
dbServerDisplayName,
dbServerId,
definedTags,
freeformTags,
lifecycleState,
memorySizeInGBs,
vmName
FROM oci.database.autonomous_virtual_machines
WHERE autonomousVirtualMachineId = '{{ autonomousVirtualMachineId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the Autonomous Virtual Machines in the specified Autonomous VM Cluster and Compartment.&lt;br /&gt;

```sql
SELECT
id,
autonomousVmClusterId,
clientIpAddress,
cloudAutonomousVmClusterId,
compartmentId,
cpuCoreCount,
dbNodeStorageSizeInGBs,
dbServerDisplayName,
dbServerId,
definedTags,
freeformTags,
lifecycleState,
memorySizeInGBs,
vmName
FROM oci.database.autonomous_virtual_machines
WHERE compartmentId = '{{ compartmentId }}' -- required
AND autonomousVmClusterId = '{{ autonomousVmClusterId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND lifecycleState = '{{ lifecycleState }}'
;
```
</TabItem>
</Tabs>
