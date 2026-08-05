--- 
title: execution_windows
hide_title: false
hide_table_of_contents: false
keywords:
  - execution_windows
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

Creates, updates, deletes, gets or lists an <code>execution_windows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="execution_windows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.execution_windows" /></td></tr>
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

The execution window details.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the execution window.</td>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the execution window.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the execution window. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedTimeInMins" /></td>
    <td><code>integer</code></td>
    <td>The estimated time of the execution window in minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="executionResourceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the execution resource the execution window belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isEnforcedDuration" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if duration the user plans to allocate for scheduling window is strictly enforced. The default value is `FALSE`.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Schedule Policy. Valid states are CREATED, SCHEDULED, IN_PROGRESS, FAILED, CANCELED, UPDATING, DELETED, SUCCEEDED and PARTIAL_SUCCESS.  (CREATED, SCHEDULED, IN_PROGRESS, FAILED, CANCELED, UPDATING, DELETED, SUCCEEDED, PARTIAL_SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleSubstate" /></td>
    <td><code>string</code></td>
    <td>The current sub-state of the execution window. Valid states are DURATION_EXCEEDED, MAINTENANCE_IN_PROGRESS and WAITING.  (DURATION_EXCEEDED, MAINTENANCE_IN_PROGRESS, WAITING)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the execution window was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeEnded" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the execution window ended.</td>
</tr>
<tr>
    <td><CopyableCode code="timeScheduled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The scheduled start date and time of the execution window.</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the execution window was started.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date and time that the execution window was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="windowDurationInMins" /></td>
    <td><code>integer</code></td>
    <td>Duration window allows user to set a duration they plan to allocate for Scheduling window. The duration is in minutes. </td>
</tr>
<tr>
    <td><CopyableCode code="windowType" /></td>
    <td><code>string</code></td>
    <td>The execution window is of PLANNED or UNPLANNED type. (PLANNED, UNPLANNED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details of an execution window.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the execution window.</td>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the execution window.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the execution window. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedTimeInMins" /></td>
    <td><code>integer</code></td>
    <td>The estimated time of the execution window in minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="executionResourceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the execution resource the execution window belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isEnforcedDuration" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if duration the user plans to allocate for scheduling window is strictly enforced. The default value is `FALSE`.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Schedule Policy. Valid states are CREATED, SCHEDULED, IN_PROGRESS, FAILED, CANCELED, UPDATING, DELETED, SUCCEEDED and PARTIAL_SUCCESS.  (CREATED, SCHEDULED, IN_PROGRESS, FAILED, CANCELED, UPDATING, DELETED, SUCCEEDED, PARTIAL_SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleSubstate" /></td>
    <td><code>string</code></td>
    <td>The current sub-state of the execution window. Valid states are DURATION_EXCEEDED, MAINTENANCE_IN_PROGRESS and WAITING.  (DURATION_EXCEEDED, MAINTENANCE_IN_PROGRESS, WAITING)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the execution window was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeEnded" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the execution window ended.</td>
</tr>
<tr>
    <td><CopyableCode code="timeScheduled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The scheduled start date and time of the execution window.</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the execution window was started.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date and time that the execution window was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="windowDurationInMins" /></td>
    <td><code>integer</code></td>
    <td>Duration window allows user to set a duration they plan to allocate for Scheduling window. The duration is in minutes. </td>
</tr>
<tr>
    <td><CopyableCode code="windowType" /></td>
    <td><code>string</code></td>
    <td>The execution window is of PLANNED or UNPLANNED type. (PLANNED, UNPLANNED)</td>
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
    <td><a href="#parameter-executionWindowId"><code>executionWindowId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified execution window.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-executionResourceId"><code>executionResourceId</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td>Lists the execution window resources in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-executionResourceId"><code>executionResourceId</code></a>, <a href="#parameter-timeScheduled"><code>timeScheduled</code></a>, <a href="#parameter-windowDurationInMins"><code>windowDurationInMins</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates an execution window resource.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-executionWindowId"><code>executionWindowId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the execution window resource.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-executionWindowId"><code>executionWindowId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the execution window.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#reorder_execution_actions"><CopyableCode code="reorder_execution_actions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-executionWindowId"><code>executionWindowId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Reorders the execution actions under this execution window resource.&lt;br /&gt;</td>
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
<tr id="parameter-executionWindowId">
    <td><CopyableCode code="executionWindowId" /></td>
    <td><code>string</code></td>
    <td>The execution window &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the entire display name given. The match is not case sensitive.</td>
</tr>
<tr id="parameter-executionResourceId">
    <td><CopyableCode code="executionResourceId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given resource id exactly.</td>
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
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive. </td>
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

Gets information about the specified execution window.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
description,
displayName,
estimatedTimeInMins,
executionResourceId,
freeformTags,
isEnforcedDuration,
lifecycleDetails,
lifecycleState,
lifecycleSubstate,
systemTags,
timeCreated,
timeEnded,
timeScheduled,
timeStarted,
timeUpdated,
windowDurationInMins,
windowType
FROM oci.database.execution_windows
WHERE executionWindowId = '{{ executionWindowId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the execution window resources in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
description,
displayName,
estimatedTimeInMins,
executionResourceId,
freeformTags,
isEnforcedDuration,
lifecycleDetails,
lifecycleState,
lifecycleSubstate,
systemTags,
timeCreated,
timeEnded,
timeScheduled,
timeStarted,
timeUpdated,
windowDurationInMins,
windowType
FROM oci.database.execution_windows
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND sortBy = '{{ sortBy }}'
AND executionResourceId = '{{ executionResourceId }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
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

Creates an execution window resource.&lt;br /&gt;

```sql
INSERT INTO oci.database.execution_windows (
compartmentId,
definedTags,
executionResourceId,
freeformTags,
isEnforcedDuration,
timeScheduled,
windowDurationInMins,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ executionResourceId }}' /* required */,
'{{ freeformTags }}',
{{ isEnforcedDuration }},
'{{ timeScheduled }}' /* required */,
{{ windowDurationInMins }} /* required */,
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
compartmentId,
definedTags,
description,
displayName,
estimatedTimeInMins,
executionResourceId,
freeformTags,
isEnforcedDuration,
lifecycleDetails,
lifecycleState,
lifecycleSubstate,
systemTags,
timeCreated,
timeEnded,
timeScheduled,
timeStarted,
timeUpdated,
windowDurationInMins,
windowType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: execution_windows
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the execution_windows resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: executionResourceId
      value: "{{ executionResourceId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the execution resource the execution window belongs to.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: isEnforcedDuration
      value: {{ isEnforcedDuration }}
      description: |
        Indicates if duration the user plans to allocate for scheduling window is strictly enforced. The default value is \`FALSE\`.
      default: false
    - name: timeScheduled
      value: "{{ timeScheduled }}"
      description: |
        The scheduled start date and time of the execution window.
    - name: windowDurationInMins
      value: {{ windowDurationInMins }}
      description: |
        Duration window allows user to set a duration they plan to allocate for Scheduling window. The duration is in minutes.
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

Updates the execution window resource.&lt;br /&gt;

```sql
UPDATE oci.database.execution_windows
SET 
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}',
isEnforcedDuration = {{ isEnforcedDuration }},
timeScheduled = '{{ timeScheduled }}',
windowDurationInMins = {{ windowDurationInMins }}
WHERE 
executionWindowId = '{{ executionWindowId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
compartmentId,
definedTags,
description,
displayName,
estimatedTimeInMins,
executionResourceId,
freeformTags,
isEnforcedDuration,
lifecycleDetails,
lifecycleState,
lifecycleSubstate,
systemTags,
timeCreated,
timeEnded,
timeScheduled,
timeStarted,
timeUpdated,
windowDurationInMins,
windowType;
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

Deletes the execution window.&lt;br /&gt;

```sql
DELETE FROM oci.database.execution_windows
WHERE executionWindowId = '{{ executionWindowId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reorder_execution_actions"
    values={[
        { label: 'reorder_execution_actions', value: 'reorder_execution_actions' }
    ]}
>
<TabItem value="reorder_execution_actions">

Reorders the execution actions under this execution window resource.&lt;br /&gt;

```sql
EXEC oci.database.execution_windows.reorder_execution_actions 
@executionWindowId='{{ executionWindowId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"definedTags": "{{ definedTags }}", 
"executionActionOrderList": "{{ executionActionOrderList }}", 
"freeformTags": "{{ freeformTags }}"
}'
;
```
</TabItem>
</Tabs>
