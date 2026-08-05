--- 
title: recommended_scheduled_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - recommended_scheduled_actions
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

Creates, updates, deletes, gets or lists a <code>recommended_scheduled_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommended_scheduled_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.recommended_scheduled_actions" /></td></tr>
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

The Scheduling Actions configuration.

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
    <td><CopyableCode code="actionMembers" /></td>
    <td><code>array</code></td>
    <td>The list of action members in a scheduled action.</td>
</tr>
<tr>
    <td><CopyableCode code="actionOrder" /></td>
    <td><code>integer</code></td>
    <td>The order of the scheduled action.</td>
</tr>
<tr>
    <td><CopyableCode code="actionParams" /></td>
    <td><code>object</code></td>
    <td>Map&lt;ParamName, ParamValue&gt; where a key value pair describes the specific action parameter. Example: `&#123;"count": "3"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="actionType" /></td>
    <td><code>string</code></td>
    <td>The type of the scheduled action being performed (DB_SERVER_FULL_SOFTWARE_UPDATE, STORAGE_SERVER_FULL_SOFTWARE_UPDATE, NETWORK_SWITCH_FULL_SOFTWARE_UPDATE, DB_SERVER_ONLINE_SOFTWARE_UPDATE) (default: DB_SERVER_FULL_SOFTWARE_UPDATE)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Description of the scheduled action being performed, i.e. apply full update to DB Servers 1,2,3,4.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedTimeInMins" /></td>
    <td><code>integer</code></td>
    <td>The estimated patching time in minutes for the entire scheduled action.</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingWindowId" /></td>
    <td><code>string</code></td>
    <td>The id of the scheduling window this scheduled action belongs to.</td>
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
    <td><a href="#parameter-schedulingPolicyId"><code>schedulingPolicyId</code></a>, <a href="#parameter-schedulingPolicyTargetResourceId"><code>schedulingPolicyTargetResourceId</code></a>, <a href="#parameter-planIntent"><code>planIntent</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Returns a recommended Scheduled Actions configuration for a given resource, plan intent and scheduling policy.&lt;br /&gt;</td>
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
<tr id="parameter-planIntent">
    <td><CopyableCode code="planIntent" /></td>
    <td><code>string</code></td>
    <td>The scheduling plan intent the scheduled actions will be for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-schedulingPolicyId">
    <td><CopyableCode code="schedulingPolicyId" /></td>
    <td><code>string</code></td>
    <td>The Scheduling Policy &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-schedulingPolicyTargetResourceId">
    <td><CopyableCode code="schedulingPolicyTargetResourceId" /></td>
    <td><code>string</code></td>
    <td>The target resource &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) the scheduled actions will be for.</td>
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

Returns a recommended Scheduled Actions configuration for a given resource, plan intent and scheduling policy.&lt;br /&gt;

```sql
SELECT
actionMembers,
actionOrder,
actionParams,
actionType,
displayName,
estimatedTimeInMins,
schedulingWindowId
FROM oci.database.recommended_scheduled_actions
WHERE schedulingPolicyId = '{{ schedulingPolicyId }}' -- required
AND schedulingPolicyTargetResourceId = '{{ schedulingPolicyTargetResourceId }}' -- required
AND planIntent = '{{ planIntent }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
