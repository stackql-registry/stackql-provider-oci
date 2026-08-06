--- 
title: scheduled_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_actions
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

Creates, updates, deletes, gets or lists a <code>scheduled_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduled_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.scheduled_actions" /></td></tr>
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

The Scheduled Action details.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Scheduled Action.</td>
</tr>
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
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the Scheduled Action.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedTimeInMins" /></td>
    <td><code>integer</code></td>
    <td>The estimated patching time for the scheduled action.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Scheduled Action. Valid states are CREATING, NEEDS_ATTENTION, AVAILABLE, UPDATING, FAILED, DELETING and DELETED.  (CREATING, NEEDS_ATTENTION, AVAILABLE, UPDATING, FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingPlanId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Scheduling Plan.</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingWindowId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Scheduling Window.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Scheduled Action Resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Scheduled Action Resource was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of the Scheduled Action resources in the specified compartment.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Scheduled Action.</td>
</tr>
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
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the Scheduled Action.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedTimeInMins" /></td>
    <td><code>integer</code></td>
    <td>The estimated patching time for the scheduled action.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Scheduled Action. Valid states are CREATING, NEEDS_ATTENTION, AVAILABLE, UPDATING, FAILED, DELETING and DELETED.  (CREATING, NEEDS_ATTENTION, AVAILABLE, UPDATING, FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingPlanId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Scheduling Plan.</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingWindowId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Scheduling Window.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Scheduled Action Resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Scheduled Action Resource was updated.</td>
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
    <td><a href="#parameter-scheduledActionId"><code>scheduledActionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified Scheduled Action.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-serviceType"><code>serviceType</code></a>, <a href="#parameter-schedulingPlanId"><code>schedulingPlanId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the Scheduled Action resources in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-actionOrder"><code>actionOrder</code></a>, <a href="#parameter-actionType"><code>actionType</code></a>, <a href="#parameter-schedulingWindowId"><code>schedulingWindowId</code></a>, <a href="#parameter-schedulingPlanId"><code>schedulingPlanId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a Scheduled Action resource.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-scheduledActionId"><code>scheduledActionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the Scheduled Action resource.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-scheduledActionId"><code>scheduledActionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the scheduled action.&lt;br /&gt;</td>
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
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-scheduledActionId">
    <td><CopyableCode code="scheduledActionId" /></td>
    <td><code>string</code></td>
    <td>The Scheduled Action &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the entire display name given. The match is not case sensitive.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given Scheduled Action id exactly.</td>
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
<tr id="parameter-schedulingPlanId">
    <td><CopyableCode code="schedulingPlanId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given scheduling policy id exactly.</td>
</tr>
<tr id="parameter-serviceType">
    <td><CopyableCode code="serviceType" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given service type exactly.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is descending. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`).</td>
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

Gets information about the specified Scheduled Action.&lt;br /&gt;

```sql
SELECT
id,
actionMembers,
actionOrder,
actionParams,
actionType,
compartmentId,
definedTags,
displayName,
estimatedTimeInMins,
freeformTags,
lifecycleState,
schedulingPlanId,
schedulingWindowId,
systemTags,
timeCreated,
timeUpdated
FROM oci.database.scheduled_actions
WHERE scheduledActionId = '{{ scheduledActionId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the Scheduled Action resources in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
actionMembers,
actionOrder,
actionParams,
actionType,
compartmentId,
definedTags,
displayName,
estimatedTimeInMins,
freeformTags,
lifecycleState,
schedulingPlanId,
schedulingWindowId,
systemTags,
timeCreated,
timeUpdated
FROM oci.database.scheduled_actions
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND sortOrder = '{{ sortOrder }}'
AND serviceType = '{{ serviceType }}'
AND schedulingPlanId = '{{ schedulingPlanId }}'
AND displayName = '{{ displayName }}'
AND sortBy = '{{ sortBy }}'
AND id = '{{ id }}'
AND lifecycleState = '{{ lifecycleState }}'
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

Creates a Scheduled Action resource.&lt;br /&gt;

```sql
INSERT INTO oci.database.scheduled_actions (
actionMembers,
actionOrder,
actionParams,
actionType,
compartmentId,
definedTags,
freeformTags,
schedulingPlanId,
schedulingWindowId,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ actionMembers }}',
'{{ actionOrder }}' /* required */,
'{{ actionParams }}',
'{{ actionType }}' /* required */,
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ freeformTags }}',
'{{ schedulingPlanId }}' /* required */,
'{{ schedulingWindowId }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
actionMembers,
actionOrder,
actionParams,
actionType,
compartmentId,
definedTags,
displayName,
estimatedTimeInMins,
freeformTags,
lifecycleState,
schedulingPlanId,
schedulingWindowId,
systemTags,
timeCreated,
timeUpdated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scheduled_actions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scheduled_actions resource.
    - name: actionMembers
      description: |
        The list of action members in a scheduled action.
      value:
        - estimatedTimeInMins: {{ estimatedTimeInMins }}
          memberId: "{{ memberId }}"
          memberOrder: {{ memberOrder }}
    - name: actionOrder
      value:
        - "{{ actionOrder }}"
      description: |
        The array of [OCID](/Content/General/Concepts/identifiers.htm) of the Scheduled Action and order paris.
    - name: actionParams
      value: "{{ actionParams }}"
      description: |
        Map<ParamName, ParamValue> where a key value pair describes the specific action parameter.
        Example: \`{"count": "3"}\`
    - name: actionType
      value: "{{ actionType }}"
      description: |
        The type of the scheduled action being performed
      valid_values: ['DB_SERVER_FULL_SOFTWARE_UPDATE', 'STORAGE_SERVER_FULL_SOFTWARE_UPDATE', 'NETWORK_SWITCH_FULL_SOFTWARE_UPDATE', 'DB_SERVER_ONLINE_SOFTWARE_UPDATE']
      default: DB_SERVER_FULL_SOFTWARE_UPDATE
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: schedulingPlanId
      value: "{{ schedulingPlanId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the Scheduling Plan.
    - name: schedulingWindowId
      value: "{{ schedulingWindowId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the Scheduling Window.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique identifier for the request. 
      description: Unique identifier for the request. 
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

Updates the Scheduled Action resource.&lt;br /&gt;

```sql
UPDATE oci.database.scheduled_actions
SET 
actionMembers = '{{ actionMembers }}',
actionParams = '{{ actionParams }}'
WHERE 
scheduledActionId = '{{ scheduledActionId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
actionMembers,
actionOrder,
actionParams,
actionType,
compartmentId,
definedTags,
displayName,
estimatedTimeInMins,
freeformTags,
lifecycleState,
schedulingPlanId,
schedulingWindowId,
systemTags,
timeCreated,
timeUpdated;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the scheduled action.&lt;br /&gt;

```sql
DELETE FROM oci.database.scheduled_actions
WHERE scheduledActionId = '{{ scheduledActionId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
