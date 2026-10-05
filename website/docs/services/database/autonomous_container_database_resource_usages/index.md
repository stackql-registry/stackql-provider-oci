--- 
title: autonomous_container_database_resource_usages
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_container_database_resource_usages
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

Creates, updates, deletes, gets or lists an <code>autonomous_container_database_resource_usages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_container_database_resource_usages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.autonomous_container_database_resource_usages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get the Autonomous Container Database resource usage details.

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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Get resource usage details for the specified Autonomous Container Database.&lt;br /&gt;</td>
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
<tr id="parameter-autonomousContainerDatabaseId">
    <td><CopyableCode code="autonomousContainerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The Autonomous Container Database &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get resource usage details for the specified Autonomous Container Database.&lt;br /&gt;

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
FROM oci.database.autonomous_container_database_resource_usages
WHERE autonomousContainerDatabaseId = '{{ autonomousContainerDatabaseId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
