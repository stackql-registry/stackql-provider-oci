--- 
title: alarms_status
hide_title: false
hide_table_of_contents: false
keywords:
  - alarms_status
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

Creates, updates, deletes, gets or lists an <code>alarms_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alarms_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.monitoring.alarms_status" /></td></tr>
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

A summary of properties for the specified alarm and its current evaluation status.&lt;br /&gt;For information about alarms, see&lt;br /&gt;&#91;Alarms Overview&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#AlarmsOverview).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;For information about endpoints and signing API requests, see&lt;br /&gt;&#91;About the API&#93;(/iaas/Content/API/Concepts/usingapi.htm).&lt;br /&gt;For information about available SDKs and tools, see&lt;br /&gt;&#91;SDKS and Other Tools&#93;(/iaas/Content/API/Concepts/sdks.htm).&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the alarm. </td>
</tr>
<tr>
    <td><CopyableCode code="alarmSummary" /></td>
    <td><code>string</code></td>
    <td>Customizable alarm summary (`alarmSummary` &#91;alarm message parameter&#93;(/iaas/Content/Monitoring/alarm-message-format.htm)). Optionally include &#91;dynamic variables&#93;(/iaas/Content/Monitoring/Tasks/update-alarm-dynamic-variables.htm). The alarm summary appears within the body of the alarm message and in responses to  &#91;ListAlarmStatus&#93;(#/en/monitoring/latest/AlarmStatusSummary/ListAlarmsStatus)  &#91;GetAlarmHistory&#93;(#/en/monitoring/latest/AlarmHistoryCollection/GetAlarmHistory) and &#91;RetrieveDimensionStates&#93;(#/en/monitoring/latest/AlarmDimensionStatesCollection/RetrieveDimensionStates). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The configured name of the alarm.  Example: `High CPU Utilization` </td>
</tr>
<tr>
    <td><CopyableCode code="ruleName" /></td>
    <td><code>string</code></td>
    <td>Identifier of the alarm's base values for alarm evaluation, for use when the alarm contains overrides.  Default value is `BASE`. For information about alarm overrides, see &#91;AlarmOverride&#93;(#/en/monitoring/latest/datatypes/AlarmOverride). </td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The perceived type of response required when the alarm is in the "FIRING" state.  Example: `CRITICAL`  (CRITICAL, ERROR, WARNING, INFO)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of this alarm. Status is collective, across all metric streams in the alarm. To list alarm status for each metric stream, use &#91;RetrieveDimensionStates&#93;(#/en/monitoring/latest/AlarmDimensionStatesCollection/RetrieveDimensionStates).  Example: `FIRING`  (FIRING, OK, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="suppression" /></td>
    <td><code>object</code></td>
    <td>The configuration details for an alarm-wide suppression. For dimension-specific suppressions, see &#91;AlarmSuppression&#93;(#/en/monitoring/latest/AlarmSuppression).  For information about alarms, see &#91;Alarms Overview&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#AlarmsOverview).  (x-example: &#123;&lt;br /&gt;  "description": "Planned outage due to change IT-1234.",&lt;br /&gt;  "timeSuppressFrom": "2023-02-01T01:02:29.600Z",&lt;br /&gt;  "timeSuppressUntil": "2023-02-01T02:02:29.600Z"&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="timestampTriggered" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp for the transition of the alarm state. For example, the time when the alarm transitioned from OK to Firing. Note: A three-minute lag for this value accounts for any late-arriving metrics.  Example: `2023-02-01T01:02:29.600Z` </td>
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
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-compartmentIdInSubtree"><code>compartmentIdInSubtree</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-resourceId"><code>resourceId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-entityId"><code>entityId</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>List the status of each alarm in the specified compartment.&lt;br /&gt;Status is collective, across all metric streams in the alarm.&lt;br /&gt;To list alarm status for each metric stream, use &#91;RetrieveDimensionStates&#93;(#/en/monitoring/latest/AlarmDimensionStatesCollection/RetrieveDimensionStates).&lt;br /&gt;Optionally filter by resource or status value.&lt;br /&gt;&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Alarm Statuses&#93;(/iaas/Content/Monitoring/Tasks/list-alarm-status.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;</td>
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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the resources monitored by the metric that you are searching for. Use tenancyId to search in the root compartment.  Example: `ocid1.compartment.oc1..exampleuniqueID` </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-compartmentIdInSubtree">
    <td><CopyableCode code="compartmentIdInSubtree" /></td>
    <td><code>boolean</code></td>
    <td>When true, returns resources from all compartments and subcompartments. The parameter can only be set to true when compartmentId is the tenancy OCID (the tenancy is the root compartment). A true value requires the user to have tenancy-level permissions. If this requirement is not met, then the call is rejected. When false, returns resources from only the compartment specified in compartmentId. Default is false. </td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given display name exactly. Use this filter to list an alarm by name. Alternatively, when you know the alarm OCID, use the GetAlarm operation. </td>
</tr>
<tr id="parameter-entityId">
    <td><CopyableCode code="entityId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given entity &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) exactly. The resource (entity) must be monitored by the metric that you are searching for.  Example: `ocid1.instance.oc1.phx.exampleuniqueID` </td>
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
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-resourceId">
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only the resource with the specified &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). The resource must be monitored by the metric that you are searching for.  Example: `ocid1.instance.oc1.phx.exampleuniqueID` </td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given service name exactly. Use this filter to list all alarms containing metric streams that match the *exact* service-name dimension.  Example: `logging-analytics` </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to use when sorting returned alarm definitions. Only one sorting level is provided.  Example: `severity` </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use when sorting returned alarm definitions. Ascending (ASC) or descending (DESC).  Example: `ASC` </td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A filter to return only metric streams that match the specified status. For example, the value "FIRING" returns only firing metric streams.  Example: `FIRING` </td>
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

List the status of each alarm in the specified compartment.&lt;br /&gt;Status is collective, across all metric streams in the alarm.&lt;br /&gt;To list alarm status for each metric stream, use &#91;RetrieveDimensionStates&#93;(#/en/monitoring/latest/AlarmDimensionStatesCollection/RetrieveDimensionStates).&lt;br /&gt;Optionally filter by resource or status value.&lt;br /&gt;&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Alarm Statuses&#93;(/iaas/Content/Monitoring/Tasks/list-alarm-status.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;

```sql
SELECT
id,
alarmSummary,
displayName,
ruleName,
severity,
status,
suppression,
timestampTriggered
FROM oci.monitoring.alarms_status
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND compartmentIdInSubtree = '{{ compartmentIdInSubtree }}'
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND displayName = '{{ displayName }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND resourceId = '{{ resourceId }}'
AND serviceName = '{{ serviceName }}'
AND entityId = '{{ entityId }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>
