--- 
title: cloud_autonomous_vm_cluster_resource_usages
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_autonomous_vm_cluster_resource_usages
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

Creates, updates, deletes, gets or lists a <code>cloud_autonomous_vm_cluster_resource_usages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_autonomous_vm_cluster_resource_usages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.cloud_autonomous_vm_cluster_resource_usages" /></td></tr>
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

Get the Autonomous Cloud VM cluster resource usage details.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Cloud Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousDataStorageSizeInTBs" /></td>
    <td><code>number (float)</code></td>
    <td>The data disk group size allocated for Autonomous AI Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousVmResourceUsage" /></td>
    <td><code>array</code></td>
    <td>List of Autonomous VM resource usages.</td>
</tr>
<tr>
    <td><CopyableCode code="availableAutonomousDataStorageSizeInTBs" /></td>
    <td><code>number (float)</code></td>
    <td>The data disk group size available for Autonomous AI Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="availableCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPU cores available.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The local node storage allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Autonomous VM cluster. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="exadataStorageInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>Total exadata storage allocated for the Autonomous VM Cluster. DATA + RECOVERY + SPARSE + any overhead in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="memoryPerOracleComputeUnitInGBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory (in GBs) to be enabled per each CPU core. </td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The memory allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="nonProvisionableAutonomousContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of non-provisionable Autonomous Container Databases in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionableAutonomousContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of provisionable Autonomous Container Databases in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedAutonomousContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of provisioned Autonomous Container Databases in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs provisioned in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="reclaimableCpus" /></td>
    <td><code>number (float)</code></td>
    <td>CPU cores that continue to be included in the count of OCPUs available to the Autonomous Container Database even after one of its Autonomous AI Database is terminated or scaled down. You can release them to the available OCPUs at its parent AVMC level by restarting the Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="reservedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs reserved in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="totalContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The total number of Autonomous Container Databases that can be created.</td>
</tr>
<tr>
    <td><CopyableCode code="totalCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPU cores enabled on the Cloud Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="usedAutonomousDataStorageSizeInTBs" /></td>
    <td><code>number (float)</code></td>
    <td>The data disk group size used for Autonomous AI Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="usedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPU cores alloted to the Autonomous Container Databases in an Cloud Autonomous VM cluster. </td>
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
    <td><a href="#parameter-cloudAutonomousVmClusterId"><code>cloudAutonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Get the resource usage details for the specified Cloud Autonomous Exadata VM cluster.&lt;br /&gt;</td>
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
<tr id="parameter-cloudAutonomousVmClusterId">
    <td><CopyableCode code="cloudAutonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The Cloud VM cluster &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
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

Get the resource usage details for the specified Cloud Autonomous Exadata VM cluster.&lt;br /&gt;

```sql
SELECT
id,
autonomousDataStorageSizeInTBs,
autonomousVmResourceUsage,
availableAutonomousDataStorageSizeInTBs,
availableCpus,
dbNodeStorageSizeInGBs,
displayName,
exadataStorageInTBs,
memoryPerOracleComputeUnitInGBs,
memorySizeInGBs,
nonProvisionableAutonomousContainerDatabases,
provisionableAutonomousContainerDatabases,
provisionedAutonomousContainerDatabases,
provisionedCpus,
reclaimableCpus,
reservedCpus,
totalContainerDatabases,
totalCpus,
usedAutonomousDataStorageSizeInTBs,
usedCpus
FROM oci.database.cloud_autonomous_vm_cluster_resource_usages
WHERE cloudAutonomousVmClusterId = '{{ cloudAutonomousVmClusterId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
