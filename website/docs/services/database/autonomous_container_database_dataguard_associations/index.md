--- 
title: autonomous_container_database_dataguard_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_container_database_dataguard_associations
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

Creates, updates, deletes, gets or lists an <code>autonomous_container_database_dataguard_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_container_database_dataguard_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.autonomous_container_database_dataguard_associations" /></td></tr>
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

The Autonomous Container Database with Autonomous Data Guard enabled association information for the specified Autonomous Data Guard association OCID.

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
    <td>The OCID of the Autonomous Data Guard created for a given Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="applyLag" /></td>
    <td><code>string</code></td>
    <td>The lag time between updates to the primary Autonomous Container Database and application of the redo data on the standby Autonomous Container Database, as computed by the reporting database.  Example: `9 seconds` </td>
</tr>
<tr>
    <td><CopyableCode code="applyRate" /></td>
    <td><code>string</code></td>
    <td>The rate at which redo logs are synchronized between the associated Autonomous Container Databases.  Example: `180 Mb per second` </td>
</tr>
<tr>
    <td><CopyableCode code="autonomousContainerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous Container Database that has a relationship with the peer Autonomous Container Database. Used only by Autonomous AI Database on Dedicated Exadata Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="fastStartFailOverLagLimitInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The lag time for my preference based on data loss tolerance in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="isAutomaticFailoverEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Automatic Failover is enabled for Autonomous Container Database Dataguard Association </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycleState, if available. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of Autonomous Data Guard. (PROVISIONING, AVAILABLE, ROLE_CHANGE_IN_PROGRESS, TERMINATING, TERMINATED, FAILED, UNAVAILABLE, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="peerAutonomousContainerDatabaseDataguardAssociationId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the peer Autonomous Container Database-Autonomous Data Guard association.</td>
</tr>
<tr>
    <td><CopyableCode code="peerAutonomousContainerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the peer Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="peerLifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Autonomous Container Database. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, BACKUP_IN_PROGRESS, RESTORING, RESTORE_FAILED, RESTARTING, MAINTENANCE_IN_PROGRESS, ROLE_CHANGE_IN_PROGRESS, ENABLING_AUTONOMOUS_DATA_GUARD, UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="peerRole" /></td>
    <td><code>string</code></td>
    <td>The Data Guard role of the Autonomous Container Database or Autonomous AI Database, if Autonomous Data Guard is enabled.  (PRIMARY, STANDBY, DISABLED_STANDBY, BACKUP_COPY, SNAPSHOT_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="protectionMode" /></td>
    <td><code>string</code></td>
    <td>The protection mode of this Autonomous Data Guard association. For more information, see &#91;Oracle Data Guard Protection Modes&#93;(http:​//docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000) in the Oracle Data Guard documentation.  (MAXIMUM_AVAILABILITY, MAXIMUM_PERFORMANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The Data Guard role of the Autonomous Container Database or Autonomous AI Database, if Autonomous Data Guard is enabled.  (PRIMARY, STANDBY, DISABLED_STANDBY, BACKUP_COPY, SNAPSHOT_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Autonomous DataGuard association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeLastRoleChanged" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the last role change action happened.</td>
</tr>
<tr>
    <td><CopyableCode code="timeLastSynced" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the last update to the apply lag, apply rate, and transport lag values.</td>
</tr>
<tr>
    <td><CopyableCode code="transportLag" /></td>
    <td><code>string</code></td>
    <td>The approximate number of seconds of redo data not yet available on the standby Autonomous Container Database, as computed by the reporting database.  Example: `7 seconds` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The properties that define Autonomous Data Guard association between two different Autonomous Container Databases.&lt;br /&gt;

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
    <td>The OCID of the Autonomous Data Guard created for a given Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="applyLag" /></td>
    <td><code>string</code></td>
    <td>The lag time between updates to the primary Autonomous Container Database and application of the redo data on the standby Autonomous Container Database, as computed by the reporting database.  Example: `9 seconds` </td>
</tr>
<tr>
    <td><CopyableCode code="applyRate" /></td>
    <td><code>string</code></td>
    <td>The rate at which redo logs are synchronized between the associated Autonomous Container Databases.  Example: `180 Mb per second` </td>
</tr>
<tr>
    <td><CopyableCode code="autonomousContainerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous Container Database that has a relationship with the peer Autonomous Container Database. Used only by Autonomous AI Database on Dedicated Exadata Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="fastStartFailOverLagLimitInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The lag time for my preference based on data loss tolerance in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="isAutomaticFailoverEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Automatic Failover is enabled for Autonomous Container Database Dataguard Association </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycleState, if available. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of Autonomous Data Guard. (PROVISIONING, AVAILABLE, ROLE_CHANGE_IN_PROGRESS, TERMINATING, TERMINATED, FAILED, UNAVAILABLE, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="peerAutonomousContainerDatabaseDataguardAssociationId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the peer Autonomous Container Database-Autonomous Data Guard association.</td>
</tr>
<tr>
    <td><CopyableCode code="peerAutonomousContainerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the peer Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="peerLifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Autonomous Container Database. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, BACKUP_IN_PROGRESS, RESTORING, RESTORE_FAILED, RESTARTING, MAINTENANCE_IN_PROGRESS, ROLE_CHANGE_IN_PROGRESS, ENABLING_AUTONOMOUS_DATA_GUARD, UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="peerRole" /></td>
    <td><code>string</code></td>
    <td>The Data Guard role of the Autonomous Container Database or Autonomous AI Database, if Autonomous Data Guard is enabled.  (PRIMARY, STANDBY, DISABLED_STANDBY, BACKUP_COPY, SNAPSHOT_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="protectionMode" /></td>
    <td><code>string</code></td>
    <td>The protection mode of this Autonomous Data Guard association. For more information, see &#91;Oracle Data Guard Protection Modes&#93;(http:​//docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000) in the Oracle Data Guard documentation.  (MAXIMUM_AVAILABILITY, MAXIMUM_PERFORMANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The Data Guard role of the Autonomous Container Database or Autonomous AI Database, if Autonomous Data Guard is enabled.  (PRIMARY, STANDBY, DISABLED_STANDBY, BACKUP_COPY, SNAPSHOT_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Autonomous DataGuard association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeLastRoleChanged" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the last role change action happened.</td>
</tr>
<tr>
    <td><CopyableCode code="timeLastSynced" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the last update to the apply lag, apply rate, and transport lag values.</td>
</tr>
<tr>
    <td><CopyableCode code="transportLag" /></td>
    <td><code>string</code></td>
    <td>The approximate number of seconds of redo data not yet available on the standby Autonomous Container Database, as computed by the reporting database.  Example: `7 seconds` </td>
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
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-autonomousContainerDatabaseDataguardAssociationId"><code>autonomousContainerDatabaseDataguardAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>**Deprecated.** Use the &#91;GetAutonomousContainerDatabase&#93;(#/en/database/latest/AutonomousContainerDatabase/GetAutonomousContainerDatabase) operation to get the details of an Autonomous Container Database (ACD) enabled with Autonomous Data Guard associated with the specified ACD.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>**Deprecated.** Use the &#91;ListAutonomousContainerDatabases&#93;(#/en/database/latest/AutonomousContainerDatabase/ListAutonomousContainerDatabases) operation to get a list of the Autonomous Container Databases (ACDs)with Autonomous Data Guard-enabled associated with the specified ACD.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-peerAutonomousContainerDatabaseDisplayName"><code>peerAutonomousContainerDatabaseDisplayName</code></a>, <a href="#parameter-protectionMode"><code>protectionMode</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>**Deprecated.** Use the &#91;AddStandbyAutonomousContainerDatabase&#93;(#/en/database/latest/AutonomousContainerDatabase/AddStandbyAutonomousContainerDatabase) operation to create a new Autonomous Data Guard association. An Autonomous Data Guard association represents the replication relationship between the&lt;br /&gt;specified Autonomous Container database and a peer Autonomous Container database. For more information, see &#91;Using Oracle Data Guard&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbau/#articletitle.html).        &lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-autonomousContainerDatabaseDataguardAssociationId"><code>autonomousContainerDatabaseDataguardAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>**Deprecated.** Use the &#91;EditAutonomousContainerDatabaseDataguard&#93;(#/en/database/latest/AutonomousContainerDatabase/EditAutonomousContainerDatabaseDataguard) operation to update an Autonomous Data Guard association.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#failover_autonomous_container_database_dataguard_association"><CopyableCode code="failover_autonomous_container_database_dataguard_association" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-autonomousContainerDatabaseDataguardAssociationId"><code>autonomousContainerDatabaseDataguardAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>**Deprecated.** Use the &#91;FailoverAutonomousContainerDatabaseDataguard&#93;(#/en/database/latest/AutonomousContainerDatabase/FailoverAutonomousContainerDatabaseDataguard) operation to fail over the standby Autonomous Container Database (ACD) to the primary ACD after the existing primary ACD fails or becomes unreachable.&lt;br /&gt;&lt;br /&gt;A failover can result in data loss, depending on the protection mode in effect at the time the primary Autonomous Container Database fails.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#migrate_autonomous_container_database_dataguard_association"><CopyableCode code="migrate_autonomous_container_database_dataguard_association" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-autonomousContainerDatabaseDataguardAssociationId"><code>autonomousContainerDatabaseDataguardAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Migrate Autonomous Container Database, identified by the autonomousContainerDatabaseId parameter.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#reinstate_autonomous_container_database_dataguard_association"><CopyableCode code="reinstate_autonomous_container_database_dataguard_association" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-autonomousContainerDatabaseDataguardAssociationId"><code>autonomousContainerDatabaseDataguardAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>**Deprecated.** Use the &#91;ReinstateAutonomousContainerDatabaseDataguard&#93;(#/en/database/latest/AutonomousContainerDatabase/ReinstateAutonomousContainerDatabaseDataguard) operation to reinstate a disabled standby Autonomous Container Database (ACD), identified by the autonomousContainerDatabaseId parameter, to an active standby ACD.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#switchover_autonomous_container_database_dataguard_association"><CopyableCode code="switchover_autonomous_container_database_dataguard_association" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-autonomousContainerDatabaseDataguardAssociationId"><code>autonomousContainerDatabaseDataguardAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>**Deprecated.** Use the &#91;SwitchoverAutonomousContainerDatabaseDataguard&#93;(#/en/database/latest/AutonomousContainerDatabase/SwitchoverAutonomousContainerDatabaseDataguard) operation to switches over the primary Autonomous Container Database (ACD) of an Autonomous Data Guard peer association to standby role. The standby ACD associated with autonomousContainerDatabaseDataguardAssociationId assumes the primary ACD role.&lt;br /&gt;&lt;br /&gt;A switchover incurs no data loss.&lt;br /&gt;</td>
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
<tr id="parameter-autonomousContainerDatabaseDataguardAssociationId">
    <td><CopyableCode code="autonomousContainerDatabaseDataguardAssociationId" /></td>
    <td><code>string</code></td>
    <td>The Autonomous Container Database-Autonomous Data Guard association &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
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
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
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

**Deprecated.** Use the &#91;GetAutonomousContainerDatabase&#93;(#/en/database/latest/AutonomousContainerDatabase/GetAutonomousContainerDatabase) operation to get the details of an Autonomous Container Database (ACD) enabled with Autonomous Data Guard associated with the specified ACD.&lt;br /&gt;

```sql
SELECT
id,
applyLag,
applyRate,
autonomousContainerDatabaseId,
fastStartFailOverLagLimitInSeconds,
isAutomaticFailoverEnabled,
lifecycleDetails,
lifecycleState,
peerAutonomousContainerDatabaseDataguardAssociationId,
peerAutonomousContainerDatabaseId,
peerLifecycleState,
peerRole,
protectionMode,
role,
timeCreated,
timeLastRoleChanged,
timeLastSynced,
transportLag
FROM oci.database.autonomous_container_database_dataguard_associations
WHERE autonomousContainerDatabaseId = '{{ autonomousContainerDatabaseId }}' -- required
AND autonomousContainerDatabaseDataguardAssociationId = '{{ autonomousContainerDatabaseDataguardAssociationId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

**Deprecated.** Use the &#91;ListAutonomousContainerDatabases&#93;(#/en/database/latest/AutonomousContainerDatabase/ListAutonomousContainerDatabases) operation to get a list of the Autonomous Container Databases (ACDs)with Autonomous Data Guard-enabled associated with the specified ACD.&lt;br /&gt;

```sql
SELECT
id,
applyLag,
applyRate,
autonomousContainerDatabaseId,
fastStartFailOverLagLimitInSeconds,
isAutomaticFailoverEnabled,
lifecycleDetails,
lifecycleState,
peerAutonomousContainerDatabaseDataguardAssociationId,
peerAutonomousContainerDatabaseId,
peerLifecycleState,
peerRole,
protectionMode,
role,
timeCreated,
timeLastRoleChanged,
timeLastSynced,
transportLag
FROM oci.database.autonomous_container_database_dataguard_associations
WHERE autonomousContainerDatabaseId = '{{ autonomousContainerDatabaseId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
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

**Deprecated.** Use the &#91;AddStandbyAutonomousContainerDatabase&#93;(#/en/database/latest/AutonomousContainerDatabase/AddStandbyAutonomousContainerDatabase) operation to create a new Autonomous Data Guard association. An Autonomous Data Guard association represents the replication relationship between the&lt;br /&gt;specified Autonomous Container database and a peer Autonomous Container database. For more information, see &#91;Using Oracle Data Guard&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbau/#articletitle.html).        &lt;br /&gt;

```sql
INSERT INTO oci.database.autonomous_container_database_dataguard_associations (
fastStartFailOverLagLimitInSeconds,
isAutomaticFailoverEnabled,
peerAutonomousContainerDatabaseBackupConfig,
peerAutonomousContainerDatabaseCompartmentId,
peerAutonomousContainerDatabaseDisplayName,
peerAutonomousVmClusterId,
peerCloudAutonomousVmClusterId,
peerDbUniqueName,
protectionMode,
standbyMaintenanceBufferInDays,
autonomousContainerDatabaseId,
region,
opc-retry-token
)
SELECT 
{{ fastStartFailOverLagLimitInSeconds }},
{{ isAutomaticFailoverEnabled }},
'{{ peerAutonomousContainerDatabaseBackupConfig }}',
'{{ peerAutonomousContainerDatabaseCompartmentId }}',
'{{ peerAutonomousContainerDatabaseDisplayName }}' /* required */,
'{{ peerAutonomousVmClusterId }}',
'{{ peerCloudAutonomousVmClusterId }}',
'{{ peerDbUniqueName }}',
'{{ protectionMode }}' /* required */,
{{ standbyMaintenanceBufferInDays }},
'{{ autonomousContainerDatabaseId }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
applyLag,
applyRate,
autonomousContainerDatabaseId,
fastStartFailOverLagLimitInSeconds,
isAutomaticFailoverEnabled,
lifecycleDetails,
lifecycleState,
peerAutonomousContainerDatabaseDataguardAssociationId,
peerAutonomousContainerDatabaseId,
peerLifecycleState,
peerRole,
protectionMode,
role,
timeCreated,
timeLastRoleChanged,
timeLastSynced,
transportLag
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: autonomous_container_database_dataguard_associations
  props:
    - name: autonomousContainerDatabaseId
      value: "{{ autonomousContainerDatabaseId }}"
      description: Required parameter for the autonomous_container_database_dataguard_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the autonomous_container_database_dataguard_associations resource.
    - name: fastStartFailOverLagLimitInSeconds
      value: {{ fastStartFailOverLagLimitInSeconds }}
      description: |
        The lag time for my preference based on data loss tolerance in seconds.
    - name: isAutomaticFailoverEnabled
      value: {{ isAutomaticFailoverEnabled }}
      description: |
        Indicates whether Automatic Failover is enabled for Autonomous Container Database Dataguard Association
    - name: peerAutonomousContainerDatabaseBackupConfig
      description: |
        Backup options for the standby Autonomous Container Database.
      value:
        backupDestinationDetails:
          - backupRetentionPolicyOnTerminate: "{{ backupRetentionPolicyOnTerminate }}"
            dbrsPolicyId: "{{ dbrsPolicyId }}"
            id: "{{ id }}"
            internetProxy: "{{ internetProxy }}"
            isRemote: {{ isRemote }}
            isRetentionLockEnabled: {{ isRetentionLockEnabled }}
            remoteRegion: "{{ remoteRegion }}"
            type: "{{ type }}"
            vpcPassword: "{{ vpcPassword }}"
            vpcUser: "{{ vpcUser }}"
        recoveryWindowInDays: {{ recoveryWindowInDays }}
    - name: peerAutonomousContainerDatabaseCompartmentId
      value: "{{ peerAutonomousContainerDatabaseCompartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment where the standby Autonomous Container Database
        will be created.
    - name: peerAutonomousContainerDatabaseDisplayName
      value: "{{ peerAutonomousContainerDatabaseDisplayName }}"
      description: |
        The display name for the peer Autonomous Container Database.
    - name: peerAutonomousVmClusterId
      value: "{{ peerAutonomousVmClusterId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the peer Autonomous Exadata VM Cluster.
    - name: peerCloudAutonomousVmClusterId
      value: "{{ peerCloudAutonomousVmClusterId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the peer cloud Autonomous Exadata VM Cluster.
    - name: peerDbUniqueName
      value: "{{ peerDbUniqueName }}"
      description: |
        Specifies the \`DB_UNIQUE_NAME\` of the peer database to be created.
    - name: protectionMode
      value: "{{ protectionMode }}"
      description: |
        The protection mode of this Autonomous Data Guard association. For more information, see
        [Oracle Data Guard Protection Modes](http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000)
        in the Oracle Data Guard documentation.
      valid_values: ['MAXIMUM_AVAILABILITY', 'MAXIMUM_PERFORMANCE']
    - name: standbyMaintenanceBufferInDays
      value: {{ standbyMaintenanceBufferInDays }}
      description: |
        The scheduling detail for the quarterly maintenance window of the standby Autonomous Container Database.
        This value represents the number of days before scheduled maintenance of the primary database.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
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

**Deprecated.** Use the &#91;EditAutonomousContainerDatabaseDataguard&#93;(#/en/database/latest/AutonomousContainerDatabase/EditAutonomousContainerDatabaseDataguard) operation to update an Autonomous Data Guard association.&lt;br /&gt;

```sql
UPDATE oci.database.autonomous_container_database_dataguard_associations
SET 
fastStartFailOverLagLimitInSeconds = {{ fastStartFailOverLagLimitInSeconds }},
isAutomaticFailoverEnabled = {{ isAutomaticFailoverEnabled }},
protectionMode = '{{ protectionMode }}'
WHERE 
autonomousContainerDatabaseId = '{{ autonomousContainerDatabaseId }}' --required
AND autonomousContainerDatabaseDataguardAssociationId = '{{ autonomousContainerDatabaseDataguardAssociationId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
applyLag,
applyRate,
autonomousContainerDatabaseId,
fastStartFailOverLagLimitInSeconds,
isAutomaticFailoverEnabled,
lifecycleDetails,
lifecycleState,
peerAutonomousContainerDatabaseDataguardAssociationId,
peerAutonomousContainerDatabaseId,
peerLifecycleState,
peerRole,
protectionMode,
role,
timeCreated,
timeLastRoleChanged,
timeLastSynced,
transportLag;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="failover_autonomous_container_database_dataguard_association"
    values={[
        { label: 'failover_autonomous_container_database_dataguard_association', value: 'failover_autonomous_container_database_dataguard_association' },
        { label: 'migrate_autonomous_container_database_dataguard_association', value: 'migrate_autonomous_container_database_dataguard_association' },
        { label: 'reinstate_autonomous_container_database_dataguard_association', value: 'reinstate_autonomous_container_database_dataguard_association' },
        { label: 'switchover_autonomous_container_database_dataguard_association', value: 'switchover_autonomous_container_database_dataguard_association' }
    ]}
>
<TabItem value="failover_autonomous_container_database_dataguard_association">

**Deprecated.** Use the &#91;FailoverAutonomousContainerDatabaseDataguard&#93;(#/en/database/latest/AutonomousContainerDatabase/FailoverAutonomousContainerDatabaseDataguard) operation to fail over the standby Autonomous Container Database (ACD) to the primary ACD after the existing primary ACD fails or becomes unreachable.&lt;br /&gt;&lt;br /&gt;A failover can result in data loss, depending on the protection mode in effect at the time the primary Autonomous Container Database fails.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_container_database_dataguard_associations.failover_autonomous_container_database_dataguard_association 
@autonomousContainerDatabaseId='{{ autonomousContainerDatabaseId }}' --required, 
@autonomousContainerDatabaseDataguardAssociationId='{{ autonomousContainerDatabaseDataguardAssociationId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="migrate_autonomous_container_database_dataguard_association">

Migrate Autonomous Container Database, identified by the autonomousContainerDatabaseId parameter.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_container_database_dataguard_associations.migrate_autonomous_container_database_dataguard_association 
@autonomousContainerDatabaseId='{{ autonomousContainerDatabaseId }}' --required, 
@autonomousContainerDatabaseDataguardAssociationId='{{ autonomousContainerDatabaseDataguardAssociationId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="reinstate_autonomous_container_database_dataguard_association">

**Deprecated.** Use the &#91;ReinstateAutonomousContainerDatabaseDataguard&#93;(#/en/database/latest/AutonomousContainerDatabase/ReinstateAutonomousContainerDatabaseDataguard) operation to reinstate a disabled standby Autonomous Container Database (ACD), identified by the autonomousContainerDatabaseId parameter, to an active standby ACD.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_container_database_dataguard_associations.reinstate_autonomous_container_database_dataguard_association 
@autonomousContainerDatabaseId='{{ autonomousContainerDatabaseId }}' --required, 
@autonomousContainerDatabaseDataguardAssociationId='{{ autonomousContainerDatabaseDataguardAssociationId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="switchover_autonomous_container_database_dataguard_association">

**Deprecated.** Use the &#91;SwitchoverAutonomousContainerDatabaseDataguard&#93;(#/en/database/latest/AutonomousContainerDatabase/SwitchoverAutonomousContainerDatabaseDataguard) operation to switches over the primary Autonomous Container Database (ACD) of an Autonomous Data Guard peer association to standby role. The standby ACD associated with autonomousContainerDatabaseDataguardAssociationId assumes the primary ACD role.&lt;br /&gt;&lt;br /&gt;A switchover incurs no data loss.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_container_database_dataguard_associations.switchover_autonomous_container_database_dataguard_association 
@autonomousContainerDatabaseId='{{ autonomousContainerDatabaseId }}' --required, 
@autonomousContainerDatabaseDataguardAssociationId='{{ autonomousContainerDatabaseDataguardAssociationId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}'
;
```
</TabItem>
</Tabs>
