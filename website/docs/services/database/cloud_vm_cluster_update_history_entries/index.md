--- 
title: cloud_vm_cluster_update_history_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_vm_cluster_update_history_entries
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

Creates, updates, deletes, gets or lists a <code>cloud_vm_cluster_update_history_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_vm_cluster_update_history_entries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.cloud_vm_cluster_update_history_entries" /></td></tr>
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

The maintenance update history details for the specified update history entry.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the maintenance update history entry.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Descriptive text providing additional details about the lifecycle state. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the maintenance update operation. (IN_PROGRESS, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCompleted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the maintenance update action completed.</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the maintenance update action started.</td>
</tr>
<tr>
    <td><CopyableCode code="updateAction" /></td>
    <td><code>string</code></td>
    <td>The update action. (ROLLING_APPLY, NON_ROLLING_APPLY, PRECHECK, ROLLBACK)</td>
</tr>
<tr>
    <td><CopyableCode code="updateId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the maintenance update.</td>
</tr>
<tr>
    <td><CopyableCode code="updateType" /></td>
    <td><code>string</code></td>
    <td>The type of cloud VM cluster maintenance update. (GI_UPGRADE, GI_PATCH, OS_UPDATE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The record of an maintenance update action on a specified cloud VM cluster. Applies to Exadata Cloud Service instances only.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the maintenance update history entry.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Descriptive text providing additional details about the lifecycle state. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the maintenance update operation. (IN_PROGRESS, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCompleted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the maintenance update action completed.</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the maintenance update action started.</td>
</tr>
<tr>
    <td><CopyableCode code="updateAction" /></td>
    <td><code>string</code></td>
    <td>The update action. (ROLLING_APPLY, NON_ROLLING_APPLY, PRECHECK, ROLLBACK)</td>
</tr>
<tr>
    <td><CopyableCode code="updateId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the maintenance update.</td>
</tr>
<tr>
    <td><CopyableCode code="updateType" /></td>
    <td><code>string</code></td>
    <td>The type of cloud VM cluster maintenance update. (GI_UPGRADE, GI_PATCH, OS_UPDATE)</td>
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
    <td><a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-updateHistoryEntryId"><code>updateHistoryEntryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the maintenance update history details for the specified update history entry. Applies to Exadata Cloud Service instances only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-updateType"><code>updateType</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the history of the maintenance update actions performed on the specified cloud VM cluster. Applies to Exadata Cloud Service instances only.&lt;br /&gt;</td>
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
<tr id="parameter-cloudVmClusterId">
    <td><CopyableCode code="cloudVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The cloud VM cluster &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-updateHistoryEntryId">
    <td><CopyableCode code="updateHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the maintenance update history entry.</td>
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
<tr id="parameter-updateType">
    <td><CopyableCode code="updateType" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given update type exactly.</td>
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

Gets the maintenance update history details for the specified update history entry. Applies to Exadata Cloud Service instances only.&lt;br /&gt;

```sql
SELECT
id,
lifecycleDetails,
lifecycleState,
timeCompleted,
timeStarted,
updateAction,
updateId,
updateType
FROM oci.database.cloud_vm_cluster_update_history_entries
WHERE cloudVmClusterId = '{{ cloudVmClusterId }}' -- required
AND updateHistoryEntryId = '{{ updateHistoryEntryId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets the history of the maintenance update actions performed on the specified cloud VM cluster. Applies to Exadata Cloud Service instances only.&lt;br /&gt;

```sql
SELECT
id,
lifecycleDetails,
lifecycleState,
timeCompleted,
timeStarted,
updateAction,
updateId,
updateType
FROM oci.database.cloud_vm_cluster_update_history_entries
WHERE cloudVmClusterId = '{{ cloudVmClusterId }}' -- required
AND region = '{{ region }}' -- required
AND updateType = '{{ updateType }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
