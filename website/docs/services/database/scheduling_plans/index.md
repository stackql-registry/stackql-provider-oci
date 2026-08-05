--- 
title: scheduling_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduling_plans
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

Creates, updates, deletes, gets or lists a <code>scheduling_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduling_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.scheduling_plans" /></td></tr>
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

The Scheduling Plan details.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Scheduling Plan.</td>
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
    <td>The display name of the Scheduling Plan.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedTimeInMins" /></td>
    <td><code>integer</code></td>
    <td>The estimated time for the Scheduling Plan.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isUsingRecommendedScheduledActions" /></td>
    <td><code>boolean</code></td>
    <td>If true, recommended scheduled actions will be generated for the scheduling plan.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Scheduling Plan. Valid states are CREATING, NEEDS_ATTENTION, AVAILABLE, UPDATING, FAILED, DELETING and DELETED.  (CREATING, NEEDS_ATTENTION, AVAILABLE, UPDATING, FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="planIntent" /></td>
    <td><code>string</code></td>
    <td>The current intent of the Scheduling Plan. Valid states are EXADATA_INFRASTRUCTURE_FULL_SOFTWARE_UPDATE and EXADATA_INFRASTRUCTURE_SECURITY_UPDATE. (EXADATA_INFRASTRUCTURE_FULL_SOFTWARE_UPDATE, EXADATA_INFRASTRUCTURE_SECURITY_UPDATE) (default: EXADATA_INFRASTRUCTURE_FULL_SOFTWARE_UPDATE)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingPolicyId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Scheduling Policy.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceType" /></td>
    <td><code>string</code></td>
    <td>The service type of the Scheduling Plan. (EXACC, EXACS, FPPPCS)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Scheduling Plan Resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Scheduling Plan Resource was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of the Scheduling Plan resources in the specified compartment.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Scheduling Plan.</td>
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
    <td>The display name of the Scheduling Plan.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedTimeInMins" /></td>
    <td><code>integer</code></td>
    <td>The estimated time for the Scheduling Plan.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isUsingRecommendedScheduledActions" /></td>
    <td><code>boolean</code></td>
    <td>If true, recommended scheduled actions will be generated for the scheduling plan.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Scheduling Plan. Valid states are CREATING, NEEDS_ATTENTION, AVAILABLE, UPDATING, FAILED, DELETING and DELETED.  (CREATING, NEEDS_ATTENTION, AVAILABLE, UPDATING, FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="planIntent" /></td>
    <td><code>string</code></td>
    <td>The current intent of the Scheduling Plan. Valid states are EXADATA_INFRASTRUCTURE_FULL_SOFTWARE_UPDATE and EXADATA_INFRASTRUCTURE_SECURITY_UPDATE. (EXADATA_INFRASTRUCTURE_FULL_SOFTWARE_UPDATE, EXADATA_INFRASTRUCTURE_SECURITY_UPDATE) (default: EXADATA_INFRASTRUCTURE_FULL_SOFTWARE_UPDATE)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="schedulingPolicyId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Scheduling Policy.</td>
</tr>
<tr>
    <td><CopyableCode code="serviceType" /></td>
    <td><code>string</code></td>
    <td>The service type of the Scheduling Plan. (EXACC, EXACS, FPPPCS)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Scheduling Plan Resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Scheduling Plan Resource was updated.</td>
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
    <td><a href="#parameter-schedulingPlanId"><code>schedulingPlanId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified Scheduling Plan.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-resourceId"><code>resourceId</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-planIntent"><code>planIntent</code></a></td>
    <td>Lists the Scheduling Plan resources in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-schedulingPolicyId"><code>schedulingPolicyId</code></a>, <a href="#parameter-resourceId"><code>resourceId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-serviceType"><code>serviceType</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a Scheduling Plan resource.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-schedulingPlanId"><code>schedulingPlanId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the scheduling plan.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-schedulingPlanId"><code>schedulingPlanId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves an scheduling plan resource to another compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#reorder_scheduled_actions"><CopyableCode code="reorder_scheduled_actions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-schedulingPlanId"><code>schedulingPlanId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-scheduledActionIdOrders"><code>scheduledActionIdOrders</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Re-order the scheduled actions under this scheduling plan resource.&lt;br /&gt;</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-schedulingPlanId">
    <td><CopyableCode code="schedulingPlanId" /></td>
    <td><code>string</code></td>
    <td>The Schedule Plan &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the entire display name given. The match is not case sensitive.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given Schedule Plan id exactly.</td>
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
<tr id="parameter-planIntent">
    <td><CopyableCode code="planIntent" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given plan intent exactly.</td>
</tr>
<tr id="parameter-resourceId">
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given resource id exactly.</td>
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

Gets information about the specified Scheduling Plan.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
estimatedTimeInMins,
freeformTags,
isUsingRecommendedScheduledActions,
lifecycleDetails,
lifecycleState,
planIntent,
resourceId,
schedulingPolicyId,
serviceType,
systemTags,
timeCreated,
timeUpdated
FROM oci.database.scheduling_plans
WHERE schedulingPlanId = '{{ schedulingPlanId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the Scheduling Plan resources in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
estimatedTimeInMins,
freeformTags,
isUsingRecommendedScheduledActions,
lifecycleDetails,
lifecycleState,
planIntent,
resourceId,
schedulingPolicyId,
serviceType,
systemTags,
timeCreated,
timeUpdated
FROM oci.database.scheduling_plans
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
AND resourceId = '{{ resourceId }}'
AND id = '{{ id }}'
AND planIntent = '{{ planIntent }}'
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

Creates a Scheduling Plan resource.&lt;br /&gt;

```sql
INSERT INTO oci.database.scheduling_plans (
compartmentId,
definedTags,
freeformTags,
isUsingRecommendedScheduledActions,
planIntent,
resourceId,
schedulingPolicyId,
serviceType,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ freeformTags }}',
{{ isUsingRecommendedScheduledActions }},
'{{ planIntent }}',
'{{ resourceId }}' /* required */,
'{{ schedulingPolicyId }}' /* required */,
'{{ serviceType }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
estimatedTimeInMins,
freeformTags,
isUsingRecommendedScheduledActions,
lifecycleDetails,
lifecycleState,
planIntent,
resourceId,
schedulingPolicyId,
serviceType,
systemTags,
timeCreated,
timeUpdated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scheduling_plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scheduling_plans resource.
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
    - name: isUsingRecommendedScheduledActions
      value: {{ isUsingRecommendedScheduledActions }}
      description: |
        If true, recommended scheduled actions will be generated for the scheduling plan.
    - name: planIntent
      value: "{{ planIntent }}"
      description: |
        The current intent of the Scheduling Plan. Valid states are EXADATA_INFRASTRUCTURE_FULL_SOFTWARE_UPDATE and EXADATA_INFRASTRUCTURE_SECURITY_UPDATE.
      valid_values: ['EXADATA_INFRASTRUCTURE_FULL_SOFTWARE_UPDATE', 'EXADATA_INFRASTRUCTURE_SECURITY_UPDATE']
      default: EXADATA_INFRASTRUCTURE_FULL_SOFTWARE_UPDATE
    - name: resourceId
      value: "{{ resourceId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the resource.
    - name: schedulingPolicyId
      value: "{{ schedulingPolicyId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the Scheduling Policy.
    - name: serviceType
      value: "{{ serviceType }}"
      description: |
        The service type of the Scheduling Plan.
      valid_values: ['EXACC', 'EXACS', 'FPPPCS']
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


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the scheduling plan.&lt;br /&gt;

```sql
DELETE FROM oci.database.scheduling_plans
WHERE schedulingPlanId = '{{ schedulingPlanId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_compartment"
    values={[
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'reorder_scheduled_actions', value: 'reorder_scheduled_actions' }
    ]}
>
<TabItem value="change_compartment">

Moves an scheduling plan resource to another compartment.&lt;br /&gt;

```sql
EXEC oci.database.scheduling_plans.change_compartment 
@schedulingPlanId='{{ schedulingPlanId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
<TabItem value="reorder_scheduled_actions">

Re-order the scheduled actions under this scheduling plan resource.&lt;br /&gt;

```sql
EXEC oci.database.scheduling_plans.reorder_scheduled_actions 
@schedulingPlanId='{{ schedulingPlanId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"scheduledActionIdOrders": "{{ scheduledActionIdOrders }}"
}'
;
```
</TabItem>
</Tabs>
