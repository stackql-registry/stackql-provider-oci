--- 
title: instance_maintenance_events
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_maintenance_events
  - compute
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

Creates, updates, deletes, gets or lists an <code>instance_maintenance_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_maintenance_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.instance_maintenance_events" /></td></tr>
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

Maintenance event of an instance.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the maintenance event. </td>
</tr>
<tr>
    <td><CopyableCode code="additionalDetails" /></td>
    <td><code>object</code></td>
    <td>Additional details of the maintenance in the form of json. </td>
</tr>
<tr>
    <td><CopyableCode code="alternativeResolutionActions" /></td>
    <td><code>array</code></td>
    <td>These are alternative actions to the requested instanceAction that can be taken to resolve the Maintenance. </td>
</tr>
<tr>
    <td><CopyableCode code="canDeleteLocalStorage" /></td>
    <td><code>boolean</code></td>
    <td>For Instances that have local storage, this field is set to true when local storage will be deleted as a result of the Maintenance. </td>
</tr>
<tr>
    <td><CopyableCode code="canReschedule" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if this MaintenanceEvent is capable of being rescheduled up to the timeHardDueDate. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the instance. </td>
</tr>
<tr>
    <td><CopyableCode code="correlationToken" /></td>
    <td><code>string</code></td>
    <td>A unique identifier that will group Instances that have a relationship with one another and must be scheduled together for the Maintenance to proceed. Any Instances that have a relationship with one another from a Maintenance perspective will have a matching correlationToken. </td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The creator of the maintenance event.  (CUSTOMER, SYSTEM)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>It is the descriptive information about the maintenance taking place on the customer instance. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="estimatedDuration" /></td>
    <td><code>string (x-obmcs-duration)</code></td>
    <td>This is the estimated duration of the Maintenance, once the Maintenance has entered the STARTED state. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="instanceAction" /></td>
    <td><code>string</code></td>
    <td>This is the action that will be performed on the Instance by OCI when the Maintenance begins.  (REBOOT_MIGRATION, TERMINATE, STOP, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Provides more details about the state of the maintenance event. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the maintenance event.  (SCHEDULED, STARTED, PROCESSING, SUCCEEDED, FAILED, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceCategory" /></td>
    <td><code>string</code></td>
    <td>This indicates the priority and allowed actions for this Maintenance. Higher priority forms of Maintenance have tighter restrictions and may not be rescheduled, while lower priority/severity Maintenance can be rescheduled, deferred, or even cancelled. Please see the &#91;Instance Maintenance&#93;(/iaas/Content/Compute/Tasks/placeholder.htm) documentation for details.  (EMERGENCY, MANDATORY, FLEXIBLE, OPTIONAL, NOTIFICATION)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceReason" /></td>
    <td><code>string</code></td>
    <td>This is the reason that Maintenance is being performed. See &#91;Instance Maintenance&#93;(/iaas/Content/Compute/Tasks/placeholder.htm) documentation for details.  (EVACUATION, ENVIRONMENTAL_FACTORS, DECOMMISSION, HARDWARE_REPLACEMENT, FIRMWARE_UPDATE, SECURITY_UPDATE)</td>
</tr>
<tr>
    <td><CopyableCode code="startWindowDuration" /></td>
    <td><code>string (x-obmcs-duration)</code></td>
    <td>The duration of the time window Maintenance is scheduled to begin within. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the maintenance event was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeFinished" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the Maintenance actually finished. </td>
</tr>
<tr>
    <td><CopyableCode code="timeHardDueDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>It is the scheduled hard due date and time of the maintenance event. The maintenance event will happen at this time and the due date will not be extended. </td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the Maintenance actually started. </td>
</tr>
<tr>
    <td><CopyableCode code="timeWindowStart" /></td>
    <td><code>string (date-time)</code></td>
    <td>The beginning of the time window when Maintenance is scheduled to begin. The Maintenance will not begin before this time. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

It is the event in which the maintenance action will be be performed on the customer instance on the scheduled date and time.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the maintenance event. </td>
</tr>
<tr>
    <td><CopyableCode code="alternativeResolutionActions" /></td>
    <td><code>array</code></td>
    <td>These are alternative actions to the requested instanceAction that can be taken to resolve the Maintenance. </td>
</tr>
<tr>
    <td><CopyableCode code="canReschedule" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if this MaintenanceEvent is capable of being rescheduled up to the timeHardDueDate. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the instance. </td>
</tr>
<tr>
    <td><CopyableCode code="correlationToken" /></td>
    <td><code>string</code></td>
    <td>A unique identifier that will group Instances that have a relationship with one another and must be scheduled together for the Maintenance to proceed. Any Instances that have a relationship with one another from a Maintenance perspective will have a matching correlationToken. </td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The creator of the maintenance event.  (x-obmcs-enumref: #/definitions/InstanceMaintenanceEvent/createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>It is the descriptive information about the maintenance taking place on the customer instance. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="estimatedDuration" /></td>
    <td><code>string (x-obmcs-duration)</code></td>
    <td>This is the estimated duration of the Maintenance, once the Maintenance has entered the STARTED state. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="instanceAction" /></td>
    <td><code>string</code></td>
    <td>This is the action that will be performed on the Instance by OCI when the Maintenance begins.  (x-obmcs-enumref: #/definitions/InstanceMaintenanceEvent/instanceAction)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the maintenance event.  (x-obmcs-enumref: #/definitions/InstanceMaintenanceEvent/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceCategory" /></td>
    <td><code>string</code></td>
    <td>This indicates the priority and allowed actions for this Maintenance. Higher priority forms of Maintenance have tighter restrictions and may not be rescheduled, while lower priority/severity Maintenance can be rescheduled, deferred, or even cancelled. Please see the &#91;Instance Maintenance&#93;(/iaas/Content/Compute/Tasks/placeholder.htm) documentation for details.  (x-obmcs-enumref: #/definitions/InstanceMaintenanceEvent/maintenanceCategory)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceReason" /></td>
    <td><code>string</code></td>
    <td>This is the reason that Maintenance is being performed. See &#91;Instance Maintenance&#93;(/iaas/Content/Compute/Tasks/placeholder.htm) documentation for details.  (x-obmcs-enumref: #/definitions/InstanceMaintenanceEvent/maintenanceReason)</td>
</tr>
<tr>
    <td><CopyableCode code="startWindowDuration" /></td>
    <td><code>string (x-obmcs-duration)</code></td>
    <td>The duration of the time window Maintenance is scheduled to begin within. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the maintenance event was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeFinished" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the Maintenance actually finished. </td>
</tr>
<tr>
    <td><CopyableCode code="timeHardDueDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>It is the scheduled hard due date and time of the maintenance event. The maintenance event will happen at this time and the due date will not be extended. </td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the Maintenance actually started. </td>
</tr>
<tr>
    <td><CopyableCode code="timeWindowStart" /></td>
    <td><code>string (date-time)</code></td>
    <td>The beginning of the time window when Maintenance is scheduled to begin. The Maintenance will not begin before this time. </td>
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
    <td><a href="#parameter-instanceMaintenanceEventId"><code>instanceMaintenanceEventId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the maintenance event for the given instance.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-correlationToken"><code>correlationToken</code></a>, <a href="#parameter-instanceAction"><code>instanceAction</code></a>, <a href="#parameter-timeWindowStartGreaterThanOrEqualTo"><code>timeWindowStartGreaterThanOrEqualTo</code></a>, <a href="#parameter-timeWindowStartLessThanOrEqualTo"><code>timeWindowStartLessThanOrEqualTo</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets a list of all the maintenance events for the given compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instanceMaintenanceEventId"><code>instanceMaintenanceEventId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Updates the maintenance event for the given instance.&lt;br /&gt;</td>
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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr id="parameter-instanceMaintenanceEventId">
    <td><CopyableCode code="instanceMaintenanceEventId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the instance maintenance event.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-correlationToken">
    <td><CopyableCode code="correlationToken" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that have a matching correlationToken.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-instanceAction">
    <td><CopyableCode code="instanceAction" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given instance action.</td>
</tr>
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the instance.</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given lifecycle state.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** In general, some "List" operations (for example, `ListInstances`) let you optionally filter by availability domain if the scope of the resource type is within a single availability domain. If you call one of these "List" operations without specifying an availability domain, the resources are grouped by availability domain, then sorted. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). The DISPLAYNAME sort order is case sensitive. </td>
</tr>
<tr id="parameter-timeWindowStartGreaterThanOrEqualTo">
    <td><CopyableCode code="timeWindowStartGreaterThanOrEqualTo" /></td>
    <td><code>string (date-time)</code></td>
    <td>Starting range to return the maintenances which are not completed (date-time is in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format).</td>
</tr>
<tr id="parameter-timeWindowStartLessThanOrEqualTo">
    <td><CopyableCode code="timeWindowStartLessThanOrEqualTo" /></td>
    <td><code>string (date-time)</code></td>
    <td>Ending range to return the maintenances which are not completed (date-time is in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format).</td>
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

Gets the maintenance event for the given instance.&lt;br /&gt;

```sql
SELECT
id,
additionalDetails,
alternativeResolutionActions,
canDeleteLocalStorage,
canReschedule,
compartmentId,
correlationToken,
createdBy,
definedTags,
description,
displayName,
estimatedDuration,
freeformTags,
instanceAction,
instanceId,
lifecycleDetails,
lifecycleState,
maintenanceCategory,
maintenanceReason,
startWindowDuration,
timeCreated,
timeFinished,
timeHardDueDate,
timeStarted,
timeWindowStart
FROM oci.compute.instance_maintenance_events
WHERE instanceMaintenanceEventId = '{{ instanceMaintenanceEventId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of all the maintenance events for the given compartment.&lt;br /&gt;

```sql
SELECT
id,
alternativeResolutionActions,
canReschedule,
compartmentId,
correlationToken,
createdBy,
definedTags,
description,
displayName,
estimatedDuration,
freeformTags,
instanceAction,
instanceId,
lifecycleState,
maintenanceCategory,
maintenanceReason,
startWindowDuration,
timeCreated,
timeFinished,
timeHardDueDate,
timeStarted,
timeWindowStart
FROM oci.compute.instance_maintenance_events
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND instanceId = '{{ instanceId }}'
AND lifecycleState = '{{ lifecycleState }}'
AND correlationToken = '{{ correlationToken }}'
AND instanceAction = '{{ instanceAction }}'
AND timeWindowStartGreaterThanOrEqualTo = '{{ timeWindowStartGreaterThanOrEqualTo }}'
AND timeWindowStartLessThanOrEqualTo = '{{ timeWindowStartLessThanOrEqualTo }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
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

Updates the maintenance event for the given instance.&lt;br /&gt;

```sql
UPDATE oci.compute.instance_maintenance_events
SET 
alternativeResolutionAction = '{{ alternativeResolutionAction }}',
canDeleteLocalStorage = {{ canDeleteLocalStorage }},
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
timeWindowStart = '{{ timeWindowStart }}'
WHERE 
instanceMaintenanceEventId = '{{ instanceMaintenanceEventId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND if-match = '{{ if-match}}'
AND opc-retry-token = '{{ opc-retry-token}}';
```
</TabItem>
</Tabs>
