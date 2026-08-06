--- 
title: db_nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - db_nodes
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

Creates, updates, deletes, gets or lists a <code>db_nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.db_nodes" /></td></tr>
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

The database node information is retrieved.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the database node.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the planned maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="backupIpId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup IP address associated with the database node. Use this OCID with either the &#91;GetPrivateIp&#93;(#/en/iaas/20160918/PrivateIp/GetPrivateIp) or the &#91;GetPublicIpByPrivateIpId&#93;(#/en/iaas/20160918/PublicIp/GetPublicIpByPrivateIpId) API to get the IP address needed to make a database connection.  **Note:** Applies only to Exadata Cloud Service. </td>
</tr>
<tr>
    <td><CopyableCode code="backupVnic2Id" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the second backup VNIC.  **Note:** Applies only to Exadata Cloud Service. </td>
</tr>
<tr>
    <td><CopyableCode code="backupVnicId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup VNIC.</td>
</tr>
<tr>
    <td><CopyableCode code="computeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of compute servers for the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model for Base Database Service. This is required if using the `computeCount` parameter. If using `cpuCoreCount` then it is an error to specify `computeModel` to a non-null value. The ECPU compute model is the recommended model, and the OCPU compute model is legacy. (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled on the Db node.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The allocated local node storage in GBs on the Db node.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exacc Db server associated with the database node.</td>
</tr>
<tr>
    <td><CopyableCode code="dbSystemId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="faultDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the Fault Domain the instance is contained in.</td>
</tr>
<tr>
    <td><CopyableCode code="hostIpId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the host IP address associated with the database node. Use this OCID with either the &#91;GetPrivateIp&#93;(#/en/iaas/20160918/PrivateIp/GetPrivateIp) or the &#91;GetPublicIpByPrivateIpId&#93;(#/en/iaas/20160918/PublicIp/GetPublicIpByPrivateIpId) API to get the IP address needed to make a database connection.  **Note:** Applies only to Exadata Cloud Service. </td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The host name for the database node.</td>
</tr>
<tr>
    <td><CopyableCode code="isForceActionInProgress" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the node is in the process of being forcefully stopped or rebooted.</td>
</tr>
<tr>
    <td><CopyableCode code="isOsPatchRebootRequired" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the database node must be rebooted after applying Operating System patches. This flag becomes true after operations such as OS/kernel updates to indicate that a reboot of the node is required. After a successful reboot, this value is expected to return to false. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the database node. (PROVISIONING, AVAILABLE, UPDATING, STOPPING, STOPPED, STARTING, TERMINATING, TERMINATED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceType" /></td>
    <td><code>string</code></td>
    <td>The type of database node maintenance. (VMDB_REBOOT_MIGRATION, EXADBXS_REBOOT_MIGRATION)</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The allocated memory in GBs on the Db node.</td>
</tr>
<tr>
    <td><CopyableCode code="softwareStorageSizeInGB" /></td>
    <td><code>integer</code></td>
    <td>The size (in GB) of the block storage volume allocation for the DB system. This attribute applies only for virtual machine DB systems. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the database node was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeMaintenanceWindowEnd" /></td>
    <td><code>string (date-time)</code></td>
    <td>End date and time of maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="timeMaintenanceWindowStart" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start date and time of maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="totalCpuCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores reserved on the Db node.</td>
</tr>
<tr>
    <td><CopyableCode code="vnic2Id" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the second VNIC.  **Note:** Applies only to Exadata Cloud Service. </td>
</tr>
<tr>
    <td><CopyableCode code="vnicId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VNIC.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A server where Oracle Database software is running.&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the database node.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the planned maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="backupIpId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup IP address associated with the database node. Use this OCID with either the &#91;GetPrivateIp&#93;(#/en/iaas/20160918/PrivateIp/GetPrivateIp) or the &#91;GetPublicIpByPrivateIpId&#93;(#/en/iaas/20160918/PublicIp/GetPublicIpByPrivateIpId) API to get the IP address needed to make a database connection.  **Note:** Applies only to Exadata Cloud Service. </td>
</tr>
<tr>
    <td><CopyableCode code="backupVnic2Id" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the second backup VNIC.  **Note:** Applies only to Exadata Cloud Service. </td>
</tr>
<tr>
    <td><CopyableCode code="backupVnicId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup VNIC.</td>
</tr>
<tr>
    <td><CopyableCode code="computeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of compute servers for the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model for Base Database Service. This is required if using the `computeCount` parameter. If using `cpuCoreCount` then it is an error to specify `computeModel` to a non-null value. The ECPU compute model is the recommended model, and the OCPU compute model is legacy. (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled on the Db node.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The allocated local node storage in GBs on the Db node.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exacc Db server associated with the database node.</td>
</tr>
<tr>
    <td><CopyableCode code="dbSystemId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="faultDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the Fault Domain the instance is contained in.</td>
</tr>
<tr>
    <td><CopyableCode code="hostIpId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the host IP address associated with the database node. Use this OCID with either the &#91;GetPrivateIp&#93;(#/en/iaas/20160918/PrivateIp/GetPrivateIp) or the &#91;GetPublicIpByPrivateIpId&#93;(#/en/iaas/20160918/PublicIp/GetPublicIpByPrivateIpId) API to get the IP address needed to make a database connection.  **Note:** Applies only to Exadata Cloud Service. </td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The host name for the database node.</td>
</tr>
<tr>
    <td><CopyableCode code="isForceActionInProgress" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the node is in the process of being forcefully stopped or rebooted.</td>
</tr>
<tr>
    <td><CopyableCode code="isOsPatchRebootRequired" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the database node must be rebooted after applying Operating System patches. This flag becomes true after operations such as OS/kernel updates to indicate that a reboot of the node is required. After a successful reboot, this value is expected to return to false. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the database node. (PROVISIONING, AVAILABLE, UPDATING, STOPPING, STOPPED, STARTING, TERMINATING, TERMINATED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceType" /></td>
    <td><code>string</code></td>
    <td>The type of database node maintenance. (VMDB_REBOOT_MIGRATION, EXADBXS_REBOOT_MIGRATION)</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The allocated memory in GBs on the Db node.</td>
</tr>
<tr>
    <td><CopyableCode code="softwareStorageSizeInGB" /></td>
    <td><code>integer</code></td>
    <td>The size (in GB) of the block storage volume allocation for the DB system. This attribute applies only for virtual machine DB systems. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the database node was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeMaintenanceWindowEnd" /></td>
    <td><code>string (date-time)</code></td>
    <td>End date and time of maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="timeMaintenanceWindowStart" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start date and time of maintenance window.</td>
</tr>
<tr>
    <td><CopyableCode code="totalCpuCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores reserved on the Db node.</td>
</tr>
<tr>
    <td><CopyableCode code="vnic2Id" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the second VNIC.  **Note:** Applies only to Exadata Cloud Service. </td>
</tr>
<tr>
    <td><CopyableCode code="vnicId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VNIC.</td>
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
    <td><a href="#parameter-dbNodeId"><code>dbNodeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified database node.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-vmClusterId"><code>vmClusterId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-dbServerId"><code>dbServerId</code></a></td>
    <td>Lists the database nodes in the specified DB system and compartment. In addition to the other required parameters, either '--db-system-id' or '--vm-cluster-id' also must be provided, depending on the service being accessed.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#db_node_action"><CopyableCode code="db_node_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-dbNodeId"><code>dbNodeId</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Performs one of the following power actions on the specified DB node:&lt;br /&gt;- start - power on&lt;br /&gt;- stop - power off gracefully&lt;br /&gt;- forcestop - power off forcefully&lt;br /&gt;- forcereset - ACPI shutdown and power on forcefully&lt;br /&gt;- softreset - ACPI shutdown and power on&lt;br /&gt;- reset - power off and power on&lt;br /&gt;&lt;br /&gt;**Note:** Stopping a node affects billing differently, depending on the type of DB system:&lt;br /&gt;*Bare metal and Exadata systems* - The _stop_ state has no effect on the resources you consume.&lt;br /&gt;Billing continues for DB nodes that you stop, and related resources continue&lt;br /&gt;to apply against any relevant quotas. You must terminate the DB system&lt;br /&gt;(&#91;TerminateDbSystem&#93;(#/en/database/latest/DbSystem/TerminateDbSystem))&lt;br /&gt;to remove its resources from billing and quotas.&lt;br /&gt;*Virtual machine DB systems* - Stopping a node stops billing for all OCPUs associated with that node, and billing resumes when you restart the node.&lt;br /&gt;</td>
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
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action to perform on the DB Node.</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-dbNodeId">
    <td><CopyableCode code="dbNodeId" /></td>
    <td><code>string</code></td>
    <td>The database node &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-dbServerId">
    <td><CopyableCode code="dbServerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exacc Db server.</td>
</tr>
<tr id="parameter-dbSystemId">
    <td><CopyableCode code="dbSystemId" /></td>
    <td><code>string</code></td>
    <td>The DB system &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm). If provided, filters the results to the set of database versions which are supported for the DB system.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
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
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
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
<tr id="parameter-vmClusterId">
    <td><CopyableCode code="vmClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VM cluster.</td>
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

Gets information about the specified database node.

```sql
SELECT
id,
additionalDetails,
backupIpId,
backupVnic2Id,
backupVnicId,
computeCount,
computeModel,
cpuCoreCount,
dbNodeStorageSizeInGBs,
dbServerId,
dbSystemId,
faultDomain,
hostIpId,
hostname,
isForceActionInProgress,
isOsPatchRebootRequired,
lifecycleState,
maintenanceType,
memorySizeInGBs,
softwareStorageSizeInGB,
timeCreated,
timeMaintenanceWindowEnd,
timeMaintenanceWindowStart,
totalCpuCoreCount,
vnic2Id,
vnicId
FROM oci.database.db_nodes
WHERE dbNodeId = '{{ dbNodeId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the database nodes in the specified DB system and compartment. In addition to the other required parameters, either '--db-system-id' or '--vm-cluster-id' also must be provided, depending on the service being accessed.&lt;br /&gt;

```sql
SELECT
id,
additionalDetails,
backupIpId,
backupVnic2Id,
backupVnicId,
computeCount,
computeModel,
cpuCoreCount,
dbNodeStorageSizeInGBs,
dbServerId,
dbSystemId,
faultDomain,
hostIpId,
hostname,
isForceActionInProgress,
isOsPatchRebootRequired,
lifecycleState,
maintenanceType,
memorySizeInGBs,
softwareStorageSizeInGB,
timeCreated,
timeMaintenanceWindowEnd,
timeMaintenanceWindowStart,
totalCpuCoreCount,
vnic2Id,
vnicId
FROM oci.database.db_nodes
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND dbSystemId = '{{ dbSystemId }}'
AND vmClusterId = '{{ vmClusterId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND dbServerId = '{{ dbServerId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="db_node_action"
    values={[
        { label: 'db_node_action', value: 'db_node_action' }
    ]}
>
<TabItem value="db_node_action">

Performs one of the following power actions on the specified DB node:&lt;br /&gt;- start - power on&lt;br /&gt;- stop - power off gracefully&lt;br /&gt;- forcestop - power off forcefully&lt;br /&gt;- forcereset - ACPI shutdown and power on forcefully&lt;br /&gt;- softreset - ACPI shutdown and power on&lt;br /&gt;- reset - power off and power on&lt;br /&gt;&lt;br /&gt;**Note:** Stopping a node affects billing differently, depending on the type of DB system:&lt;br /&gt;*Bare metal and Exadata systems* - The _stop_ state has no effect on the resources you consume.&lt;br /&gt;Billing continues for DB nodes that you stop, and related resources continue&lt;br /&gt;to apply against any relevant quotas. You must terminate the DB system&lt;br /&gt;(&#91;TerminateDbSystem&#93;(#/en/database/latest/DbSystem/TerminateDbSystem))&lt;br /&gt;to remove its resources from billing and quotas.&lt;br /&gt;*Virtual machine DB systems* - Stopping a node stops billing for all OCPUs associated with that node, and billing resumes when you restart the node.&lt;br /&gt;

```sql
EXEC oci.database.db_nodes.db_node_action 
@dbNodeId='{{ dbNodeId }}' --required, 
@action='{{ action }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
</Tabs>
