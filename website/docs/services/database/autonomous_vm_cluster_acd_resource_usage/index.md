--- 
title: autonomous_vm_cluster_acd_resource_usage
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_vm_cluster_acd_resource_usage
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

Creates, updates, deletes, gets or lists an <code>autonomous_vm_cluster_acd_resource_usage</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_vm_cluster_acd_resource_usage" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.autonomous_vm_cluster_acd_resource_usage" /></td></tr>
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

Associated autonomous container databases usages.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousContainerDatabaseVmUsage" /></td>
    <td><code>array</code></td>
    <td>List of autonomous container database resource usage per autonomous virtual machine.</td>
</tr>
<tr>
    <td><CopyableCode code="availableCpus" /></td>
    <td><code>number (float)</code></td>
    <td>CPUs available for provisioning or scaling an Autonomous AI Database in the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Autonomous Container Database. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="largestProvisionableAutonomousDatabaseInCpus" /></td>
    <td><code>number (float)</code></td>
    <td>Largest provisionable ADB in the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionableCpus" /></td>
    <td><code>array</code></td>
    <td>Valid list of provisionable CPUs for Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>CPUs / cores assigned to ADBs in the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="reclaimableCpus" /></td>
    <td><code>number (float)</code></td>
    <td>Number of CPUs that are reclaimable or released to the AVMC on Autonomous Container Database restart.</td>
</tr>
<tr>
    <td><CopyableCode code="reservedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>CPUs / cores reserved for scalability, resilliency and other overheads. This includes failover, autoscaling and idle instance overhead. </td>
</tr>
<tr>
    <td><CopyableCode code="usedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>CPUs / cores assigned to the Autonomous Container Database. Sum of provisioned, reserved and reclaimable CPUs/ cores. </td>
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
    <td><a href="#parameter-autonomousVmClusterId"><code>autonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Gets the list of resource usage details for all the Autonomous Container Database in the specified Autonomous Exadata VM cluster.&lt;br /&gt;</td>
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
<tr id="parameter-autonomousVmClusterId">
    <td><CopyableCode code="autonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The autonomous VM cluster &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Gets the list of resource usage details for all the Autonomous Container Database in the specified Autonomous Exadata VM cluster.&lt;br /&gt;

```sql
SELECT
id,
autonomousContainerDatabaseVmUsage,
availableCpus,
definedTags,
displayName,
freeformTags,
largestProvisionableAutonomousDatabaseInCpus,
provisionableCpus,
provisionedCpus,
reclaimableCpus,
reservedCpus,
usedCpus
FROM oci.database.autonomous_vm_cluster_acd_resource_usage
WHERE autonomousVmClusterId = '{{ autonomousVmClusterId }}' -- required
AND region = '{{ region }}' -- required
AND compartmentId = '{{ compartmentId }}'
AND opc-request-id = '{{ opc-request-id }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
