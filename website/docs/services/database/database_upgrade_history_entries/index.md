--- 
title: database_upgrade_history_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - database_upgrade_history_entries
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

Creates, updates, deletes, gets or lists a <code>database_upgrade_history_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="database_upgrade_history_entries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.database_upgrade_history_entries" /></td></tr>
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

The database upgrade history.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the database upgrade history.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The database upgrade action. (PRECHECK, UPGRADE, ROLLBACK)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>Status of database upgrade history SUCCEEDED|IN_PROGRESS|FAILED. (SUCCEEDED, FAILED, IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>string</code></td>
    <td>Additional upgrade options supported by DBUA(Database Upgrade Assistant). Example: "-upgradeTimezone false -keepEvents" </td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source of the Oracle Database software to be used for the upgrade.  - Use `DB_HOME` to specify an existing Database Home to upgrade the database. The database is moved to the target Database Home and makes use of the Oracle Database software version of the target Database Home.  - Use `DB_VERSION` to specify a generally-available Oracle Database software version to upgrade the database.  - Use `DB_SOFTWARE_IMAGE` to specify a &#91;database software image&#93;(/iaas/Content/Database/Concepts/databasesoftwareimage.htm) to upgrade the database.  (DB_HOME, DB_VERSION, DB_SOFTWARE_IMAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDbHomeId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Database Home.</td>
</tr>
<tr>
    <td><CopyableCode code="targetDBVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation.  This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier. </td>
</tr>
<tr>
    <td><CopyableCode code="targetDatabaseSoftwareImageId" /></td>
    <td><code>string</code></td>
    <td>the database software image used for upgrading database.</td>
</tr>
<tr>
    <td><CopyableCode code="targetDbHomeId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Database Home.</td>
</tr>
<tr>
    <td><CopyableCode code="timeEnded" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the database upgrade ended.</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the database upgrade started.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The Database service supports the upgrade history of databases.&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;For information about access control and compartments, see&lt;br /&gt;&#91;Overview of the Identity Service&#93;(/Content/Identity/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the database upgrade history.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The database upgrade action. (PRECHECK, UPGRADE, ROLLBACK)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>Status of database upgrade history SUCCEEDED|IN_PROGRESS|FAILED. (SUCCEEDED, FAILED, IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>string</code></td>
    <td>Additional upgrade options supported by DBUA(Database Upgrade Assistant). Example: "-upgradeTimezone false -keepEvents" </td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source of the Oracle Database software to be used for the upgrade.  - Use `DB_HOME` to specify an existing Database Home to upgrade the database. The database is moved to the target Database Home and makes use of the Oracle Database software version of the target Database Home.  - Use `DB_VERSION` to specify a generally-available Oracle Database software version to upgrade the database.  - Use `DB_SOFTWARE_IMAGE` to specify a &#91;database software image&#93;(/iaas/Content/Database/Concepts/databasesoftwareimage.htm) to upgrade the database.  (DB_HOME, DB_VERSION, DB_SOFTWARE_IMAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDbHomeId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Database Home.</td>
</tr>
<tr>
    <td><CopyableCode code="targetDBVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation.  This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier. </td>
</tr>
<tr>
    <td><CopyableCode code="targetDatabaseSoftwareImageId" /></td>
    <td><code>string</code></td>
    <td>the database software image used for upgrading database.</td>
</tr>
<tr>
    <td><CopyableCode code="targetDbHomeId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Database Home.</td>
</tr>
<tr>
    <td><CopyableCode code="timeEnded" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the database upgrade ended.</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the database upgrade started.</td>
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
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-upgradeHistoryEntryId"><code>upgradeHistoryEntryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>gets the upgrade history for a specified database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-upgradeAction"><code>upgradeAction</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Gets the upgrade history for a specified database in a bare metal or virtual machine DB system.&lt;br /&gt;</td>
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
<tr id="parameter-databaseId">
    <td><CopyableCode code="databaseId" /></td>
    <td><code>string</code></td>
    <td>The database &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-upgradeHistoryEntryId">
    <td><CopyableCode code="upgradeHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The database/db system upgrade History &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only upgradeHistoryEntries that match the given lifecycle state exactly.</td>
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
    <td>The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is ascending. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`).</td>
</tr>
<tr id="parameter-upgradeAction">
    <td><CopyableCode code="upgradeAction" /></td>
    <td><code>string</code></td>
    <td>A filter to return only upgradeHistoryEntries that match the specified Upgrade Action.</td>
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

gets the upgrade history for a specified database.&lt;br /&gt;

```sql
SELECT
id,
action,
lifecycleDetails,
lifecycleState,
options,
source,
sourceDbHomeId,
targetDBVersion,
targetDatabaseSoftwareImageId,
targetDbHomeId,
timeEnded,
timeStarted
FROM oci.database.database_upgrade_history_entries
WHERE databaseId = '{{ databaseId }}' -- required
AND upgradeHistoryEntryId = '{{ upgradeHistoryEntryId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets the upgrade history for a specified database in a bare metal or virtual machine DB system.&lt;br /&gt;

```sql
SELECT
id,
action,
lifecycleDetails,
lifecycleState,
options,
source,
sourceDbHomeId,
targetDBVersion,
targetDatabaseSoftwareImageId,
targetDbHomeId,
timeEnded,
timeStarted
FROM oci.database.database_upgrade_history_entries
WHERE databaseId = '{{ databaseId }}' -- required
AND region = '{{ region }}' -- required
AND upgradeAction = '{{ upgradeAction }}'
AND lifecycleState = '{{ lifecycleState }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND opc-request-id = '{{ opc-request-id }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
