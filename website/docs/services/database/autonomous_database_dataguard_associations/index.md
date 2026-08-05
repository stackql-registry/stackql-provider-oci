--- 
title: autonomous_database_dataguard_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_database_dataguard_associations
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

Creates, updates, deletes, gets or lists an <code>autonomous_database_dataguard_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_database_dataguard_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.autonomous_database_dataguard_associations" /></td></tr>
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

The Autonomous Data Guard-enabled database associated with the specified Autonomous Data Guard association OCID.

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
    <td>The OCID of the Autonomous Dataguard created for Autonomous Container Database where given Autonomous AI Database resides in.</td>
</tr>
<tr>
    <td><CopyableCode code="applyLag" /></td>
    <td><code>string</code></td>
    <td>The lag time between updates to the primary database and application of the redo data on the standby database, as computed by the reporting database.  Example: `9 seconds` </td>
</tr>
<tr>
    <td><CopyableCode code="applyRate" /></td>
    <td><code>string</code></td>
    <td>The rate at which redo logs are synced between the associated databases.  Example: `180 Mb per second` </td>
</tr>
<tr>
    <td><CopyableCode code="autonomousDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous AI Database that has a relationship with the peer Autonomous AI Database. </td>
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
    <td><CopyableCode code="peerAutonomousDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the peer Autonomous AI Database. </td>
</tr>
<tr>
    <td><CopyableCode code="peerAutonomousDatabaseLifeCycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Autonomous AI Database. (PROVISIONING, AVAILABLE, STOPPING, STOPPED, STARTING, TERMINATING, TERMINATED, UNAVAILABLE, RESTORE_IN_PROGRESS, RESTORE_FAILED, BACKUP_IN_PROGRESS, SCALE_IN_PROGRESS, AVAILABLE_NEEDS_ATTENTION, UPDATING, MAINTENANCE_IN_PROGRESS, RESTARTING, RECREATING, ROLE_CHANGE_IN_PROGRESS, UPGRADING, INACCESSIBLE, STANDBY, TRANSPORTING)</td>
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
    <td>The date and time the Data Guard association was created.</td>
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

The properties that define dataguard association between two different Autonomous AI Databases.&lt;br /&gt;Note that Autonomous AI Databases inherit DataGuard association from parent Autonomous Container Database.&lt;br /&gt;No actions can be taken on AutonomousDatabaseDataguardAssociation, usage is strictly informational.&lt;br /&gt;

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
    <td>The OCID of the Autonomous Dataguard created for Autonomous Container Database where given Autonomous AI Database resides in.</td>
</tr>
<tr>
    <td><CopyableCode code="applyLag" /></td>
    <td><code>string</code></td>
    <td>The lag time between updates to the primary database and application of the redo data on the standby database, as computed by the reporting database.  Example: `9 seconds` </td>
</tr>
<tr>
    <td><CopyableCode code="applyRate" /></td>
    <td><code>string</code></td>
    <td>The rate at which redo logs are synced between the associated databases.  Example: `180 Mb per second` </td>
</tr>
<tr>
    <td><CopyableCode code="autonomousDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous AI Database that has a relationship with the peer Autonomous AI Database. </td>
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
    <td><CopyableCode code="peerAutonomousDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the peer Autonomous AI Database. </td>
</tr>
<tr>
    <td><CopyableCode code="peerAutonomousDatabaseLifeCycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Autonomous AI Database. (PROVISIONING, AVAILABLE, STOPPING, STOPPED, STARTING, TERMINATING, TERMINATED, UNAVAILABLE, RESTORE_IN_PROGRESS, RESTORE_FAILED, BACKUP_IN_PROGRESS, SCALE_IN_PROGRESS, AVAILABLE_NEEDS_ATTENTION, UPDATING, MAINTENANCE_IN_PROGRESS, RESTARTING, RECREATING, ROLE_CHANGE_IN_PROGRESS, UPGRADING, INACCESSIBLE, STANDBY, TRANSPORTING)</td>
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
    <td>The date and time the Data Guard association was created.</td>
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
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-autonomousDatabaseDataguardAssociationId"><code>autonomousDatabaseDataguardAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>*Deprecated.* Use the &#91;GetAutonomousContainerDatabase&#93;(#/en/database/latest/AutonomousContainerDatabase/GetAutonomousContainerDatabase) operation to gets an Autonomous Data Guard-enabled database associated with the specified Autonomous AI Database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>*Deprecated.* Use the &#91;GetAutonomousContainerDatabase&#93;(#/en/database/latest/AutonomousContainerDatabase/GetAutonomousContainerDatabase) operation to get a list of the Autonomous Data Guard-enabled databases associated with the specified Autonomous AI Database.&lt;br /&gt;</td>
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
<tr id="parameter-autonomousDatabaseDataguardAssociationId">
    <td><CopyableCode code="autonomousDatabaseDataguardAssociationId" /></td>
    <td><code>string</code></td>
    <td>The Autonomous Container Database-Autonomous Data Guard association &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-autonomousDatabaseId">
    <td><CopyableCode code="autonomousDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The database &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
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

*Deprecated.* Use the &#91;GetAutonomousContainerDatabase&#93;(#/en/database/latest/AutonomousContainerDatabase/GetAutonomousContainerDatabase) operation to gets an Autonomous Data Guard-enabled database associated with the specified Autonomous AI Database.&lt;br /&gt;

```sql
SELECT
id,
applyLag,
applyRate,
autonomousDatabaseId,
isAutomaticFailoverEnabled,
lifecycleDetails,
lifecycleState,
peerAutonomousDatabaseId,
peerAutonomousDatabaseLifeCycleState,
peerRole,
protectionMode,
role,
timeCreated,
timeLastRoleChanged,
timeLastSynced,
transportLag
FROM oci.database.autonomous_database_dataguard_associations
WHERE autonomousDatabaseId = '{{ autonomousDatabaseId }}' -- required
AND autonomousDatabaseDataguardAssociationId = '{{ autonomousDatabaseDataguardAssociationId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

*Deprecated.* Use the &#91;GetAutonomousContainerDatabase&#93;(#/en/database/latest/AutonomousContainerDatabase/GetAutonomousContainerDatabase) operation to get a list of the Autonomous Data Guard-enabled databases associated with the specified Autonomous AI Database.&lt;br /&gt;

```sql
SELECT
id,
applyLag,
applyRate,
autonomousDatabaseId,
isAutomaticFailoverEnabled,
lifecycleDetails,
lifecycleState,
peerAutonomousDatabaseId,
peerAutonomousDatabaseLifeCycleState,
peerRole,
protectionMode,
role,
timeCreated,
timeLastRoleChanged,
timeLastSynced,
transportLag
FROM oci.database.autonomous_database_dataguard_associations
WHERE autonomousDatabaseId = '{{ autonomousDatabaseId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
