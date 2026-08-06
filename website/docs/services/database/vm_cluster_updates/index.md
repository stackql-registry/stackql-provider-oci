--- 
title: vm_cluster_updates
hide_title: false
hide_table_of_contents: false
keywords:
  - vm_cluster_updates
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

Creates, updates, deletes, gets or lists a <code>vm_cluster_updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vm_cluster_updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.vm_cluster_updates" /></td></tr>
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

The maintenance update package.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the maintenance update.</td>
</tr>
<tr>
    <td><CopyableCode code="availableActions" /></td>
    <td><code>array</code></td>
    <td>The possible actions that can be performed using this maintenance update.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Details of the maintenance update package.</td>
</tr>
<tr>
    <td><CopyableCode code="lastAction" /></td>
    <td><code>string</code></td>
    <td>The update action performed most recently using this maintenance update. (ROLLING_APPLY, PRECHECK, ROLLBACK)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Descriptive text providing additional details about the lifecycle state. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the maintenance update. Dependent on value of `lastAction`. (AVAILABLE, SUCCESS, IN_PROGRESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeReleased" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the maintenance update was released.</td>
</tr>
<tr>
    <td><CopyableCode code="updateType" /></td>
    <td><code>string</code></td>
    <td>The type of VM cluster maintenance update. (GI_UPGRADE, GI_PATCH, OS_UPDATE)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the maintenance update package.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A maintenance update for a VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access,&lt;br /&gt;see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the maintenance update.</td>
</tr>
<tr>
    <td><CopyableCode code="availableActions" /></td>
    <td><code>array</code></td>
    <td>The possible actions that can be performed using this maintenance update.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Details of the maintenance update package.</td>
</tr>
<tr>
    <td><CopyableCode code="lastAction" /></td>
    <td><code>string</code></td>
    <td>The update action performed most recently using this maintenance update. (ROLLING_APPLY, PRECHECK, ROLLBACK)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Descriptive text providing additional details about the lifecycle state. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the maintenance update. Dependent on value of `lastAction`. (AVAILABLE, SUCCESS, IN_PROGRESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeReleased" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the maintenance update was released.</td>
</tr>
<tr>
    <td><CopyableCode code="updateType" /></td>
    <td><code>string</code></td>
    <td>The type of VM cluster maintenance update. (GI_UPGRADE, GI_PATCH, OS_UPDATE)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the maintenance update package.</td>
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
    <td><a href="#parameter-vmClusterId"><code>vmClusterId</code></a>, <a href="#parameter-updateId"><code>updateId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about a specified maintenance update package for a VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vmClusterId"><code>vmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-updateType"><code>updateType</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists the maintenance updates that can be applied to the specified VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-updateId">
    <td><CopyableCode code="updateId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the maintenance update.</td>
</tr>
<tr id="parameter-vmClusterId">
    <td><CopyableCode code="vmClusterId" /></td>
    <td><code>string</code></td>
    <td>The VM cluster &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
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

Gets information about a specified maintenance update package for a VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;

```sql
SELECT
id,
availableActions,
description,
lastAction,
lifecycleDetails,
lifecycleState,
timeReleased,
updateType,
version
FROM oci.database.vm_cluster_updates
WHERE vmClusterId = '{{ vmClusterId }}' -- required
AND updateId = '{{ updateId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the maintenance updates that can be applied to the specified VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;

```sql
SELECT
id,
availableActions,
description,
lastAction,
lifecycleDetails,
lifecycleState,
timeReleased,
updateType,
version
FROM oci.database.vm_cluster_updates
WHERE vmClusterId = '{{ vmClusterId }}' -- required
AND region = '{{ region }}' -- required
AND updateType = '{{ updateType }}'
AND lifecycleState = '{{ lifecycleState }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
