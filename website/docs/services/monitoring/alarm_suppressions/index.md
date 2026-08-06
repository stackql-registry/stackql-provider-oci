--- 
title: alarm_suppressions
hide_title: false
hide_table_of_contents: false
keywords:
  - alarm_suppressions
  - monitoring
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

Creates, updates, deletes, gets or lists an <code>alarm_suppressions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alarm_suppressions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.monitoring.alarm_suppressions" /></td></tr>
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

Successfully retrieved alarm suppression.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the alarm suppression.</td>
</tr>
<tr>
    <td><CopyableCode code="alarmSuppressionTarget" /></td>
    <td><code>object</code></td>
    <td>The target of the alarm suppression.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the alarm suppression.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Usage of predefined tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Human-readable reason for this alarm suppression. It does not have to be unique, and it's changeable. Avoid entering confidential information.  Oracle recommends including tracking information for the event or associated work, such as a ticket number.  Example: `Planned outage due to change IT-1234.` </td>
</tr>
<tr>
    <td><CopyableCode code="dimensions" /></td>
    <td><code>object</code></td>
    <td>Configured dimension filter for suppressing alarm state entries that include the set of specified dimension key-value pairs.  Example: `&#123;"resourceId": "ocid1.instance.region1.phx.exampleuniqueID"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the alarm suppression. It does not have to be unique, and it's changeable. Avoid entering confidential information.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only. Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="level" /></td>
    <td><code>string</code></td>
    <td>The level of this alarm suppression. `ALARM` indicates a suppression of the entire alarm, regardless of dimension. `DIMENSION` indicates a suppression configured for specified dimensions.  (ALARM, DIMENSION)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the alarm suppression.  Example: `DELETED`  (ACTIVE, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="suppressionConditions" /></td>
    <td><code>array</code></td>
    <td>Array of all preconditions for alarm suppression. Example: `&#91;&#123;   conditionType: "RECURRENCE",   suppressionRecurrence: "FRQ=DAILY;BYHOUR=10",   suppressionDuration: "PT1H" &#125;&#93;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the alarm suppression was created. Format defined by RFC3339.  Example: `2018-02-01T01:02:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeSuppressFrom" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date and time for the suppression to take place, inclusive. Format defined by RFC3339.  Example: `2018-02-01T01:02:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeSuppressUntil" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date and time for the suppression to take place, inclusive. Format defined by RFC3339.  Example: `2018-02-01T02:02:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the alarm suppression was last updated (deleted). Format defined by RFC3339.  Example: `2018-02-03T01:02:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

alarm suppression items

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the alarm suppression.</td>
</tr>
<tr>
    <td><CopyableCode code="alarmSuppressionTarget" /></td>
    <td><code>object</code></td>
    <td>The target of the alarm suppression.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the alarm suppression.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. Example: `&#123;"foo-namespace": &#123;"bar-key": "value"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Human-readable reason for this alarm suppression. It does not have to be unique, and it's changeable. Avoid entering confidential information.  Oracle recommends including tracking information for the event or associated work, such as a ticket number.  Example: `Planned outage due to change IT-1234.` </td>
</tr>
<tr>
    <td><CopyableCode code="dimensions" /></td>
    <td><code>object</code></td>
    <td>Configured dimension filter for suppressing alarm state entries that include the set of specified dimension key-value pairs.  Example: `&#123;"resourceId": "ocid1.instance.region1.phx.exampleuniqueID"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the alarm suppression. It does not have to be unique, and it's changeable. Avoid entering confidential information.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only. Example: `&#123;"bar-key": "value"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="level" /></td>
    <td><code>string</code></td>
    <td>The level of this alarm suppression. `ALARM` indicates a suppression of the entire alarm, regardless of dimension. `DIMENSION` indicates a suppression configured for specified dimensions.  Defaut: `DIMENSION`  (x-obmcs-enumref: #/definitions/AlarmSuppression/level)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the alarm suppression.  (x-obmcs-enumref: #/definitions/AlarmSuppression/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="suppressionConditions" /></td>
    <td><code>array</code></td>
    <td>Array of all preconditions for alarm suppression. Example: `&#91;&#123;   conditionType: "RECURRENCE",   suppressionRecurrence: "FRQ=DAILY;BYHOUR=10",   suppressionDuration: "PT1H" &#125;&#93;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the alarm suppression was created. Format defined by RFC3339.  Example: `2023-02-01T01:02:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeSuppressFrom" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date and time for the suppression to take place, inclusive. Format defined by RFC3339.  Example: `2023-02-01T01:02:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeSuppressUntil" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date and time for the suppression to take place, inclusive. Format defined by RFC3339.  Example: `2023-02-01T02:02:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the alarm suppression was last updated (deleted). Format defined by RFC3339.  Example: `2023-02-03T01:02:29.600Z` </td>
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
    <td><a href="#parameter-alarmSuppressionId"><code>alarmSuppressionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified alarm suppression. For more information, see&lt;br /&gt;&#91;Getting an Alarm-wide Suppression&#93;(/iaas/Content/Monitoring/Tasks/get-alarm-suppression.htm).&lt;br /&gt;&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-alarmId"><code>alarmId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-level"><code>level</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-compartmentIdInSubtree"><code>compartmentIdInSubtree</code></a>, <a href="#parameter-targetType"><code>targetType</code></a>, <a href="#parameter-isAllSuppressions"><code>isAllSuppressions</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Lists alarm suppressions for the specified alarm. For more information, see&lt;br /&gt;&#91;Listing Alarm Suppressions&#93;(/iaas/Content/Monitoring/Tasks/list-alarm-suppression.htm).&lt;br /&gt;&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-alarmSuppressionTarget"><code>alarmSuppressionTarget</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-timeSuppressFrom"><code>timeSuppressFrom</code></a>, <a href="#parameter-timeSuppressUntil"><code>timeSuppressUntil</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new alarm suppression at the specified level (alarm-wide or dimension-specific).&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Suppressing a Single Alarm&#93;(/iaas/Content/Monitoring/Tasks/create-alarm-suppression.htm) and&lt;br /&gt;&#91;Suppressing Multiple Alarms&#93;(/iaas/Content/Monitoring/Tasks/create-alarm-suppression-multiple.htm).&lt;br /&gt;&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-alarmSuppressionId"><code>alarmSuppressionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified alarm suppression. For more information, see&lt;br /&gt;&#91;Removing a Suppression from a Single Alarm&#93;(/iaas/Content/Monitoring/Tasks/delete-alarm-suppression.htm) and&lt;br /&gt;&#91;Removing a Suppression from Multiple Alarms&#93;(/iaas/Content/Monitoring/Tasks/delete-alarm-suppression-multiple.htm).&lt;br /&gt;&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;</td>
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
<tr id="parameter-alarmSuppressionId">
    <td><CopyableCode code="alarmSuppressionId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the alarm suppression.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-alarmId">
    <td><CopyableCode code="alarmId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the alarm that is the target of the alarm suppression.</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment for searching.  Use the tenancy OCID to search in the root compartment.  If targetType is not specified, searches all suppressions defined under the compartment.  If targetType is `COMPARTMENT`, searches suppressions in the specified compartment only.  Example: `ocid1.compartment.oc1..exampleuniqueID` </td>
</tr>
<tr id="parameter-compartmentIdInSubtree">
    <td><CopyableCode code="compartmentIdInSubtree" /></td>
    <td><code>boolean</code></td>
    <td>When true, returns resources from all compartments and subcompartments. The parameter can only be set to true when compartmentId is the tenancy OCID (the tenancy is the root compartment). A true value requires the user to have tenancy-level permissions. If this requirement is not met, then the call is rejected. When false, returns resources from only the compartment specified in compartmentId. Default is false. </td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given display name exactly. Use this filter to list an alarm suppression by name. Alternatively, when you know the alarm suppression OCID, use the GetAlarmSuppression operation. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-isAllSuppressions">
    <td><CopyableCode code="isAllSuppressions" /></td>
    <td><code>boolean</code></td>
    <td>Setting this parameter to true requires the query to specify the alarm (`alarmId`).  When true, lists all alarm suppressions that affect the specified alarm, including suppressions that target the corresponding compartment or tenancy. When false, lists only the alarm suppressions that target the specified alarm.  Default is false. </td>
</tr>
<tr id="parameter-level">
    <td><CopyableCode code="level" /></td>
    <td><code>string</code></td>
    <td>The level of this alarm suppression. `ALARM` indicates a suppression of the entire alarm, regardless of dimension. `DIMENSION` indicates a suppression configured for specified dimensions. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given lifecycle state exactly. When not specified, only resources in the ACTIVE lifecycle state are listed. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Default: 1000  Example: 500 </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Customer part of the request identifier token. If you need to contact Oracle about a particular request, please provide the complete request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations. For example, if a resource has been deleted and purged from the system, then a retry of the original creation request might be rejected. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to use when sorting returned alarm suppressions. Only one sorting level is provided.  Example: `timeCreated` </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use when sorting returned alarm suppressions. Ascending (ASC) or descending (DESC).  Example: `ASC` </td>
</tr>
<tr id="parameter-targetType">
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td>The target type to use when listing alarm suppressions.     `ALARM` lists all suppression records for the specified alarm. `COMPARTMENT` lists all suppression records for the specified compartment or tenancy. </td>
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

Gets the specified alarm suppression. For more information, see&lt;br /&gt;&#91;Getting an Alarm-wide Suppression&#93;(/iaas/Content/Monitoring/Tasks/get-alarm-suppression.htm).&lt;br /&gt;&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;

```sql
SELECT
id,
alarmSuppressionTarget,
compartmentId,
definedTags,
description,
dimensions,
displayName,
freeformTags,
level,
lifecycleState,
suppressionConditions,
timeCreated,
timeSuppressFrom,
timeSuppressUntil,
timeUpdated
FROM oci.monitoring.alarm_suppressions
WHERE alarmSuppressionId = '{{ alarmSuppressionId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists alarm suppressions for the specified alarm. For more information, see&lt;br /&gt;&#91;Listing Alarm Suppressions&#93;(/iaas/Content/Monitoring/Tasks/list-alarm-suppression.htm).&lt;br /&gt;&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;

```sql
SELECT
id,
alarmSuppressionTarget,
compartmentId,
definedTags,
description,
dimensions,
displayName,
freeformTags,
level,
lifecycleState,
suppressionConditions,
timeCreated,
timeSuppressFrom,
timeSuppressUntil,
timeUpdated
FROM oci.monitoring.alarm_suppressions
WHERE region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND alarmId = '{{ alarmId }}'
AND displayName = '{{ displayName }}'
AND lifecycleState = '{{ lifecycleState }}'
AND level = '{{ level }}'
AND compartmentId = '{{ compartmentId }}'
AND compartmentIdInSubtree = '{{ compartmentIdInSubtree }}'
AND targetType = '{{ targetType }}'
AND isAllSuppressions = '{{ isAllSuppressions }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND page = '{{ page }}'
AND limit = '{{ limit }}'
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

Creates a new alarm suppression at the specified level (alarm-wide or dimension-specific).&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Suppressing a Single Alarm&#93;(/iaas/Content/Monitoring/Tasks/create-alarm-suppression.htm) and&lt;br /&gt;&#91;Suppressing Multiple Alarms&#93;(/iaas/Content/Monitoring/Tasks/create-alarm-suppression-multiple.htm).&lt;br /&gt;&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;

```sql
INSERT INTO oci.monitoring.alarm_suppressions (
alarmSuppressionTarget,
definedTags,
description,
dimensions,
displayName,
freeformTags,
level,
suppressionConditions,
timeSuppressFrom,
timeSuppressUntil,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ alarmSuppressionTarget }}' /* required */,
'{{ definedTags }}',
'{{ description }}',
'{{ dimensions }}',
'{{ displayName }}' /* required */,
'{{ freeformTags }}',
'{{ level }}',
'{{ suppressionConditions }}',
'{{ timeSuppressFrom }}' /* required */,
'{{ timeSuppressUntil }}' /* required */,
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
alarmSuppressionTarget,
compartmentId,
definedTags,
description,
dimensions,
displayName,
freeformTags,
level,
lifecycleState,
suppressionConditions,
timeCreated,
timeSuppressFrom,
timeSuppressUntil,
timeUpdated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: alarm_suppressions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the alarm_suppressions resource.
    - name: alarmSuppressionTarget
      description: |
        The target of the alarm suppression.
      value:
        targetType: "{{ targetType }}"
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Usage of predefined tag keys. These predefined keys are scoped to namespaces.
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        Human-readable reason for this alarm suppression.
        It does not have to be unique, and it's changeable.
        Avoid entering confidential information.
        Oracle recommends including tracking information for the event or associated work,
        such as a ticket number.
        Example: \`Planned outage due to change IT-1234.\`
    - name: dimensions
      value: "{{ dimensions }}"
      description: |
        A filter to suppress only alarm state entries that include the set of specified dimension key-value pairs.
        If you specify {"availabilityDomain": "phx-ad-1"}
        and the alarm state entry corresponds to the set {"availabilityDomain": "phx-ad-1" and "resourceId": "ocid1.instance.region1.phx.exampleuniqueID"},
        then this alarm will be included for suppression.
        This is required only when the value of level is \`DIMENSION\`. If required, the value cannot be an empty object.
        Only a single value is allowed per key. No grouping of multiple values is allowed under the same key.
        Maximum characters (after serialization): 4000. This maximum satisfies typical use cases.
        The response for an exceeded maximum is \`HTTP 400\` with an "dimensions values are too long" message.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name for the alarm suppression. It does not have to be unique, and it's changeable. Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
        Example: \`{"Department": "Finance"}\`
    - name: level
      value: "{{ level }}"
      description: |
        The level of this alarm suppression.
        \`ALARM\` indicates a suppression of the entire alarm, regardless of dimension.
        \`DIMENSION\` indicates a suppression configured for specified dimensions.
        Defaut: \`DIMENSION\`
    - name: suppressionConditions
      description: |
        Array of all preconditions for alarm suppression.
        Example: \`[{
        conditionType: "RECURRENCE",
        suppressionRecurrence: "FRQ=DAILY;BYHOUR=10",
        suppressionDuration: "PT1H"
        }]\`
      value:
        - conditionType: "{{ conditionType }}"
    - name: timeSuppressFrom
      value: "{{ timeSuppressFrom }}"
      description: |
        The start date and time for the suppression to take place, inclusive. Format defined by RFC3339.
        Example: \`2023-02-01T01:02:29.600Z\`
    - name: timeSuppressUntil
      value: "{{ timeSuppressUntil }}"
      description: |
        The end date and time for the suppression to take place, inclusive. Format defined by RFC3339.
        Example: \`2023-02-01T02:02:29.600Z\`
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Customer part of the request identifier token. If you need to contact Oracle about a particular request, please provide the complete request ID. 
      description: Customer part of the request identifier token. If you need to contact Oracle about a particular request, please provide the complete request ID. 
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations. For example, if a resource has been deleted and purged from the system, then a retry of the original creation request might be rejected. 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations. For example, if a resource has been deleted and purged from the system, then a retry of the original creation request might be rejected. 
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

Deletes the specified alarm suppression. For more information, see&lt;br /&gt;&#91;Removing a Suppression from a Single Alarm&#93;(/iaas/Content/Monitoring/Tasks/delete-alarm-suppression.htm) and&lt;br /&gt;&#91;Removing a Suppression from Multiple Alarms&#93;(/iaas/Content/Monitoring/Tasks/delete-alarm-suppression-multiple.htm).&lt;br /&gt;&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;

```sql
DELETE FROM oci.monitoring.alarm_suppressions
WHERE alarmSuppressionId = '{{ alarmSuppressionId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
