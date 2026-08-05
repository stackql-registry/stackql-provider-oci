--- 
title: db_system_upgrade_history_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - db_system_upgrade_history_entries
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

Creates, updates, deletes, gets or lists a <code>db_system_upgrade_history_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_system_upgrade_history_entries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.db_system_upgrade_history_entries" /></td></tr>
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

The upgrade operation details were retrieved.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the upgrade history entry.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The operating system upgrade action. (PRECHECK, ROLLBACK, UPDATE_SNAPSHOT_RETENTION_DAYS, UPGRADE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>A descriptive text associated with the lifecycleState. Typically contains additional displayable text. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the action. (IN_PROGRESS, SUCCEEDED, FAILED, NEEDS_ATTENTION)</td>
</tr>
<tr>
    <td><CopyableCode code="newGiVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Grid Infrastructure (GI) software version.</td>
</tr>
<tr>
    <td><CopyableCode code="newOsVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Software (OS) version eg. Oracle Linux Server release 8</td>
</tr>
<tr>
    <td><CopyableCode code="oldGiVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Grid Infrastructure (GI) software version.</td>
</tr>
<tr>
    <td><CopyableCode code="oldOsVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Software (OS) version eg. Oracle Linux Server release 8</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotRetentionPeriodInDays" /></td>
    <td><code>integer</code></td>
    <td>The retention period, in days, for the snapshot that allows you to perform a rollback of the upgrade operation. After this number of days passes, you cannot roll back the upgrade.</td>
</tr>
<tr>
    <td><CopyableCode code="timeEnded" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the upgrade action completed</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the upgrade action started.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The summary for the record of an OS upgrade action on a DB system.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the upgrade history entry.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The operating system upgrade action. (PRECHECK, ROLLBACK, UPDATE_SNAPSHOT_RETENTION_DAYS, UPGRADE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>A descriptive text associated with the lifecycleState. Typically contains additional displayable text. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the action. (IN_PROGRESS, SUCCEEDED, FAILED, NEEDS_ATTENTION)</td>
</tr>
<tr>
    <td><CopyableCode code="newGiVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Grid Infrastructure (GI) software version.</td>
</tr>
<tr>
    <td><CopyableCode code="newOsVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Software (OS) version eg. Oracle Linux Server release 8</td>
</tr>
<tr>
    <td><CopyableCode code="oldGiVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Grid Infrastructure (GI) software version.</td>
</tr>
<tr>
    <td><CopyableCode code="oldOsVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Software (OS) version eg. Oracle Linux Server release 8</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotRetentionPeriodInDays" /></td>
    <td><code>integer</code></td>
    <td>The retention period, in days, for the snapshot that allows you to perform a rollback of the upgrade operation. After this number of days passes, you cannot roll back the upgrade.</td>
</tr>
<tr>
    <td><CopyableCode code="timeEnded" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the upgrade action completed</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the upgrade action started.</td>
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
    <td><a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-upgradeHistoryEntryId"><code>upgradeHistoryEntryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the details of the specified operating system upgrade operation for the specified DB system.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-upgradeAction"><code>upgradeAction</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the history of the upgrade actions performed on the specified DB system.&lt;br /&gt;</td>
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
<tr id="parameter-dbSystemId">
    <td><CopyableCode code="dbSystemId" /></td>
    <td><code>string</code></td>
    <td>The DB system &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-upgradeHistoryEntryId">
    <td><CopyableCode code="upgradeHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The database/db system upgrade History &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only upgrade history entries that match the given lifecycle state exactly.</td>
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

Gets the details of the specified operating system upgrade operation for the specified DB system.&lt;br /&gt;

```sql
SELECT
id,
action,
lifecycleDetails,
lifecycleState,
newGiVersion,
newOsVersion,
oldGiVersion,
oldOsVersion,
snapshotRetentionPeriodInDays,
timeEnded,
timeStarted
FROM oci.database.db_system_upgrade_history_entries
WHERE dbSystemId = '{{ dbSystemId }}' -- required
AND upgradeHistoryEntryId = '{{ upgradeHistoryEntryId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets the history of the upgrade actions performed on the specified DB system.&lt;br /&gt;

```sql
SELECT
id,
action,
lifecycleDetails,
lifecycleState,
newGiVersion,
newOsVersion,
oldGiVersion,
oldOsVersion,
snapshotRetentionPeriodInDays,
timeEnded,
timeStarted
FROM oci.database.db_system_upgrade_history_entries
WHERE dbSystemId = '{{ dbSystemId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
AND upgradeAction = '{{ upgradeAction }}'
AND lifecycleState = '{{ lifecycleState }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
