--- 
title: alarms
hide_title: false
hide_table_of_contents: false
keywords:
  - alarms
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

Creates, updates, deletes, gets or lists an <code>alarms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alarms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.monitoring.alarms" /></td></tr>
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

Successfully retrieved alarm.

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
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>The human-readable content of the delivered alarm notification. Optionally include &#91;dynamic variables&#93;(/iaas/Content/Monitoring/Tasks/update-alarm-dynamic-variables.htm). Oracle recommends providing guidance to operators for resolving the alarm condition. Consider adding links to standard runbook practices. Avoid entering confidential information.  Example: `High CPU usage alert. Follow runbook instructions for resolution.` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the alarm. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Usage of predefined tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="destinations" /></td>
    <td><code>array</code></td>
    <td>A list of destinations for alarm notifications. Each destination is represented by the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of a related resource, such as a &#91;topic&#93;(#/en/notification/latest/NotificationTopic). Supported destination services: Notifications, Streaming. Limit: One destination per supported destination service. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the alarm. It does not have to be unique, and it's changeable.  This value determines the title of each alarm notification.  Example: `High CPU Utilization` </td>
</tr>
<tr>
    <td><CopyableCode code="evaluationSlackDuration" /></td>
    <td><code>string</code></td>
    <td>Customizable slack period to wait for metric ingestion before evaluating the alarm. Specify a string in ISO 8601 format (`PT10M` for ten minutes or `PT1H` for one hour). Minimum: PT3M. Maximum: PT2H. Default: PT3M. For more information about the slack period, see &#91;About the Internal Reset Period&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#reset). </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only. Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the alarm is enabled.  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="isNotificationsPerMetricDimensionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>When set to `true`, splits alarm notifications per metric stream. When set to `false`, groups alarm notifications across metric streams. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the alarm.  Example: `DELETED`  (ACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="messageFormat" /></td>
    <td><code>string</code></td>
    <td>The format to use for alarm notifications. The formats are: * `RAW` - Raw JSON blob. Default value. When the `destinations` attribute specifies `Streaming`, all alarm notifications use this format. * `PRETTY_JSON`: JSON with new lines and indents. Available when the `destinations` attribute specifies `Notifications` only. * `ONS_OPTIMIZED`: Simplified, user-friendly layout. Available when the `destinations` attribute specifies `Notifications` only. Applies to Email subscription types only.  (RAW, PRETTY_JSON, ONS_OPTIMIZED) (default: RAW)</td>
</tr>
<tr>
    <td><CopyableCode code="metricCompartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the metric being evaluated by the alarm. </td>
</tr>
<tr>
    <td><CopyableCode code="metricCompartmentIdInSubtree" /></td>
    <td><code>boolean</code></td>
    <td>When true, the alarm evaluates metrics from all compartments and subcompartments. The parameter can only be set to true when metricCompartmentId is the tenancy OCID (the tenancy is the root compartment). A true value requires the user to have tenancy-level permissions. If this requirement is not met, then the call is rejected. When false, the alarm evaluates metrics from only the compartment specified in metricCompartmentId. Default is false.  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The source service or application emitting the metric that is evaluated by the alarm.  Example: `oci_computeagent` </td>
</tr>
<tr>
    <td><CopyableCode code="notificationTitle" /></td>
    <td><code>string</code></td>
    <td>Customizable notification title (`title` &#91;alarm message parameter&#93;(/iaas/Content/Monitoring/alarm-message-format.htm)). Optionally include &#91;dynamic variables&#93;(/iaas/Content/Monitoring/Tasks/update-alarm-dynamic-variables.htm). The notification title appears as the subject line in a formatted email message and as the title in a Slack message. </td>
</tr>
<tr>
    <td><CopyableCode code="notificationVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the alarm notification to be delivered. Allowed value: `1.X` The value must start with a number (up to four digits), followed by a period and an uppercase X. </td>
</tr>
<tr>
    <td><CopyableCode code="overrides" /></td>
    <td><code>array</code></td>
    <td>A set of overrides that control evaluations of the alarm.   Each override can specify values for query, severity, body, and pending duration. When an alarm contains overrides, the Monitoring service evaluates each override in order, beginning with the first override in the array (index position `0`), and then evaluates the alarm's base values (`ruleName` value of `BASE`). </td>
</tr>
<tr>
    <td><CopyableCode code="pendingDuration" /></td>
    <td><code>string</code></td>
    <td>The period of time that the condition defined in the alarm must persist before the alarm state changes from "OK" to "FIRING". For example, a value of 5 minutes means that the alarm must persist in breaching the condition for five minutes before the alarm updates its state to "FIRING".  The duration is specified as a string in ISO 8601 format (`PT10M` for ten minutes or `PT1H` for one hour). Minimum: PT1M. Maximum: PT24H. Default: PT1M.  Under the default value of PT1M, the first evaluation that breaches the alarm updates the state to "FIRING".  The alarm updates its status to "OK" when the breaching condition has been clear for the most recent minute.  Example: `PT5M` </td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>The Monitoring Query Language (MQL) expression to evaluate for the alarm. The Alarms feature of the Monitoring service interprets results for each returned time series as Boolean values, where zero represents false and a non-zero value represents true. A true value means that the trigger rule condition has been met. The query must specify a metric, statistic, interval, and trigger rule (threshold or absence). Supported values for interval depend on the specified time range. More interval values are supported for smaller time ranges. You can optionally specify dimensions and grouping functions. Also, you can customize the  &#91;absence detection period&#93;(/iaas/Content/Monitoring/Tasks/create-edit-alarm-query-absence-detection-period.htm). Supported grouping functions: `grouping()`, `groupBy()`. For information about writing MQL expressions, see &#91;Editing the MQL Expression for a Query&#93;(/iaas/Content/Monitoring/Tasks/query-metric-mql.htm). For details about MQL, see &#91;Monitoring Query Language (MQL) Reference&#93;(/iaas/Content/Monitoring/Reference/mql.htm). For available dimensions, review the metric definition for the supported service. See &#91;Supported Services&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#SupportedServices).  Example of threshold alarm:    -----      CpuUtilization&#91;1m&#93;&#123;availabilityDomain="cumS:PHX-AD-1"&#125;.groupBy(availabilityDomain).percentile(0.9) &gt; 85    -----  Example of absence alarm:    -----      CpuUtilization&#91;1m&#93;&#123;availabilityDomain="cumS:PHX-AD-1"&#125;.absent()    ----- Example of absence alarm with custom absence detection period of 20 hours:    -----          CpuUtilization&#91;1m&#93;&#123;availabilityDomain="cumS:PHX-AD-1"&#125;.absent(20h)      ----- </td>
</tr>
<tr>
    <td><CopyableCode code="repeatNotificationDuration" /></td>
    <td><code>string</code></td>
    <td>The frequency for re-submitting alarm notifications, if the alarm keeps firing without interruption. Format defined by ISO 8601. For example, `PT4H` indicates four hours. As another example, `PT0M` indicates a repeat notification each time the alarm trigger condition is met, otherwise known as an event-based notification. For more information, see &#91;Getting Event-Based Notifications for an Alarm&#93;(/iaas/Content/Monitoring/Tasks/update-alarm-event.htm). Minimum: PT0M. Maximum: P30D. </td>
</tr>
<tr>
    <td><CopyableCode code="resolution" /></td>
    <td><code>string</code></td>
    <td>The time between calculated aggregation windows for the alarm. Supported value: `1m` </td>
</tr>
<tr>
    <td><CopyableCode code="resourceGroup" /></td>
    <td><code>string</code></td>
    <td>Resource group to match for metric data retrieved by the alarm. A resource group is a custom string that you can match when retrieving custom metrics. Only one resource group can be applied per metric. A valid resourceGroup value starts with an alphabetical character and includes only alphanumeric characters, periods (.), underscores (_), hyphens (-), and dollar signs ($).  Example: `frontend-fleet` </td>
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
    <td><CopyableCode code="suppression" /></td>
    <td><code>object</code></td>
    <td>The configuration details for an alarm-wide suppression. For dimension-specific suppressions, see &#91;AlarmSuppression&#93;(#/en/monitoring/latest/AlarmSuppression).  For information about alarms, see &#91;Alarms Overview&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#AlarmsOverview).  (x-example: &#123;&lt;br /&gt;  "description": "Planned outage due to change IT-1234.",&lt;br /&gt;  "timeSuppressFrom": "2023-02-01T01:02:29.600Z",&lt;br /&gt;  "timeSuppressUntil": "2023-02-01T02:02:29.600Z"&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the alarm was created. Format defined by RFC3339.  Example: `2023-02-01T01:02:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the alarm was last updated. Format defined by RFC3339.  Example: `2023-02-03T01:02:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A summary of properties for the specified alarm.&lt;br /&gt;For information about alarms, see&lt;br /&gt;&#91;Alarms Overview&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#AlarmsOverview).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;For information about endpoints and signing API requests, see&lt;br /&gt;&#91;About the API&#93;(/iaas/Content/API/Concepts/usingapi.htm).&lt;br /&gt;For information about available SDKs and tools, see&lt;br /&gt;&#91;SDKS and Other Tools&#93;(/iaas/Content/API/Concepts/sdks.htm).&lt;br /&gt;

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
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the alarm. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Usage of predefined tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="destinations" /></td>
    <td><code>array</code></td>
    <td>A list of destinations for alarm notifications. Each destination is represented by the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of a related resource, such as a &#91;topic&#93;(#/en/notification/latest/NotificationTopic). Supported destination services: Notifications, Streaming. Limit: One destination per supported destination service. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the alarm. It does not have to be unique, and it's changeable.  This value determines the title of each alarm notification.  Example: `High CPU Utilization` </td>
</tr>
<tr>
    <td><CopyableCode code="evaluationSlackDuration" /></td>
    <td><code>string</code></td>
    <td>Customizable slack period to wait for metric ingestion before evaluating the alarm. Specify a string in ISO 8601 format (`PT10M` for ten minutes or `PT1H` for one hour). Minimum: PT3M. Maximum: PT2H. Default: PT3M. For more information about the slack period, see &#91;About the Internal Reset Period&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#reset). </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only. Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the alarm is enabled.  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="isNotificationsPerMetricDimensionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the alarm sends a separate message for each metric stream. See &#91;Creating an Alarm That Splits Messages by Metric Stream&#93;(/iaas/Content/Monitoring/Tasks/create-alarm-split.htm). Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the alarm.  (x-obmcs-enumref: #/definitions/Alarm/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="metricCompartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the metric being evaluated by the alarm. </td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The source service or application emitting the metric that is evaluated by the alarm.  Example: `oci_computeagent` </td>
</tr>
<tr>
    <td><CopyableCode code="notificationTitle" /></td>
    <td><code>string</code></td>
    <td>Customizable notification title (`title` &#91;alarm message parameter&#93;(/iaas/Content/Monitoring/alarm-message-format.htm)). Optionally include &#91;dynamic variables&#93;(/iaas/Content/Monitoring/Tasks/update-alarm-dynamic-variables.htm). The notification title appears as the subject line in a formatted email message and as the title in a Slack message. </td>
</tr>
<tr>
    <td><CopyableCode code="notificationVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the alarm notification to be delivered. Allowed value: `1.X` The value must start with a number (up to four digits), followed by a period and an uppercase X. </td>
</tr>
<tr>
    <td><CopyableCode code="overrides" /></td>
    <td><code>array</code></td>
    <td>A set of overrides that control evaluations of the alarm.   Each override can specify values for query, severity, body, and pending duration. When an alarm contains overrides, the Monitoring service evaluates each override in order, beginning with the first override in the array (index position `0`), and then evaluates the alarm's base values (`ruleName` value of `BASE`). </td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>The Monitoring Query Language (MQL) expression to evaluate for the alarm. The Alarms feature of the Monitoring service interprets results for each returned time series as Boolean values, where zero represents false and a non-zero value represents true. A true value means that the trigger rule condition has been met. The query must specify a metric, statistic, interval, and trigger rule (threshold or absence). Supported values for interval depend on the specified time range. More interval values are supported for smaller time ranges. Supported grouping functions: `grouping()`, `groupBy()`. For information about writing MQL expressions, see &#91;Editing the MQL Expression for a Query&#93;(/iaas/Content/Monitoring/Tasks/query-metric-mql.htm). For details about MQL, see &#91;Monitoring Query Language (MQL) Reference&#93;(/iaas/Content/Monitoring/Reference/mql.htm). For available dimensions, review the metric definition for the supported service. See &#91;Supported Services&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#SupportedServices).  Example of threshold alarm:    -----      CpuUtilization&#91;1m&#93;&#123;availabilityDomain="cumS:PHX-AD-1"&#125;.groupBy(availabilityDomain).percentile(0.9) &gt; 85    -----  Example of absence alarm:    -----      CpuUtilization&#91;1m&#93;&#123;availabilityDomain="cumS:PHX-AD-1"&#125;.absent()    ----- </td>
</tr>
<tr>
    <td><CopyableCode code="resourceGroup" /></td>
    <td><code>string</code></td>
    <td>Resource group that you want to match. A null value returns only metric data that has no resource groups. The specified resource group must exist in the definition of the posted metric. Only one resource group can be applied per metric. A valid resourceGroup value starts with an alphabetical character and includes only alphanumeric characters, periods (.), underscores (_), hyphens (-), and dollar signs ($).  Example: `frontend-fleet` </td>
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
    <td><CopyableCode code="suppression" /></td>
    <td><code>object</code></td>
    <td>The configuration details for an alarm-wide suppression. For dimension-specific suppressions, see &#91;AlarmSuppression&#93;(#/en/monitoring/latest/AlarmSuppression).  For information about alarms, see &#91;Alarms Overview&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#AlarmsOverview).  (x-example: &#123;&lt;br /&gt;  "description": "Planned outage due to change IT-1234.",&lt;br /&gt;  "timeSuppressFrom": "2023-02-01T01:02:29.600Z",&lt;br /&gt;  "timeSuppressUntil": "2023-02-01T02:02:29.600Z"&lt;br /&gt;&#125;&lt;br /&gt;)</td>
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
    <td><a href="#parameter-alarmId"><code>alarmId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified alarm.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Getting an Alarm&#93;(/iaas/Content/Monitoring/Tasks/get-alarm.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-compartmentIdInSubtree"><code>compartmentIdInSubtree</code></a></td>
    <td>Lists the alarms for the specified compartment.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Alarms&#93;(/iaas/Content/Monitoring/Tasks/list-alarm.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-metricCompartmentId"><code>metricCompartmentId</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-severity"><code>severity</code></a>, <a href="#parameter-destinations"><code>destinations</code></a>, <a href="#parameter-isEnabled"><code>isEnabled</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new alarm in the specified compartment.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Creating an Alarm&#93;(/iaas/Content/Monitoring/Tasks/create-alarm.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-alarmId"><code>alarmId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified alarm.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Updating an Alarm&#93;(/iaas/Content/Monitoring/Tasks/update-alarm.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-alarmId"><code>alarmId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the specified alarm.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Deleting an Alarm&#93;(/iaas/Content/Monitoring/Tasks/delete-alarm.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-alarmId"><code>alarmId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves an alarm into a different compartment within the same tenancy.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Moving an Alarm&#93;(/iaas/Content/Monitoring/Tasks/change-compartment-alarm.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_alarm_suppression"><CopyableCode code="remove_alarm_suppression" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-alarmId"><code>alarmId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Removes any existing suppression for the specified alarm.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Removing a Suppression from a Single Alarm&#93;(/iaas/Content/Monitoring/Tasks/delete-alarm-suppression.htm) and&lt;br /&gt;&#91;Removing a Suppression from Multiple Alarms&#93;(/iaas/Content/Monitoring/Tasks/delete-alarm-suppression-multiple.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#retrieve_dimension_states"><CopyableCode code="retrieve_dimension_states" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-alarmId"><code>alarmId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Lists the current alarm status of each metric stream, where status is derived from the metric stream's last associated transition.&lt;br /&gt;Optionally filter by status value and one or more dimension key-value pairs.&lt;br /&gt;&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Metric Stream Status in an Alarm&#93;(/iaas/Content/Monitoring/Tasks/list-alarm-status-metric-stream.htm).&lt;br /&gt;&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#summarize_alarm_suppression_history"><CopyableCode code="summarize_alarm_suppression_history" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-alarmId"><code>alarmId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Returns history of suppressions for the specified alarm, including both dimension-specific and and alarm-wide suppressions. For more information, see&lt;br /&gt;&#91;Getting Suppression History for an Alarm&#93;(/iaas/Content/Monitoring/Tasks/summarize-alarm-suppression-history.htm).&lt;br /&gt;&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;</td>
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
<tr id="parameter-alarmId">
    <td><CopyableCode code="alarmId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of an alarm. </td>
</tr>
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
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only alarms that match the given lifecycle state exactly. When not specified, only alarms in the ACTIVE lifecycle state are listed. </td>
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
    <td>The field to use when sorting returned alarm definitions. Only one sorting level is provided.  Example: `severity` </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use when sorting returned alarm definitions. Ascending (ASC) or descending (DESC).  Example: `ASC` </td>
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

Gets the specified alarm.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Getting an Alarm&#93;(/iaas/Content/Monitoring/Tasks/get-alarm.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;

```sql
SELECT
id,
alarmSummary,
body,
compartmentId,
definedTags,
destinations,
displayName,
evaluationSlackDuration,
freeformTags,
isEnabled,
isNotificationsPerMetricDimensionEnabled,
lifecycleState,
messageFormat,
metricCompartmentId,
metricCompartmentIdInSubtree,
namespace,
notificationTitle,
notificationVersion,
overrides,
pendingDuration,
query,
repeatNotificationDuration,
resolution,
resourceGroup,
ruleName,
severity,
suppression,
timeCreated,
timeUpdated
FROM oci.monitoring.alarms
WHERE alarmId = '{{ alarmId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the alarms for the specified compartment.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Alarms&#93;(/iaas/Content/Monitoring/Tasks/list-alarm.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;

```sql
SELECT
id,
alarmSummary,
compartmentId,
definedTags,
destinations,
displayName,
evaluationSlackDuration,
freeformTags,
isEnabled,
isNotificationsPerMetricDimensionEnabled,
lifecycleState,
metricCompartmentId,
namespace,
notificationTitle,
notificationVersion,
overrides,
query,
resourceGroup,
ruleName,
severity,
suppression
FROM oci.monitoring.alarms
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND displayName = '{{ displayName }}'
AND lifecycleState = '{{ lifecycleState }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND compartmentIdInSubtree = '{{ compartmentIdInSubtree }}'
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

Creates a new alarm in the specified compartment.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Creating an Alarm&#93;(/iaas/Content/Monitoring/Tasks/create-alarm.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;

```sql
INSERT INTO oci.monitoring.alarms (
alarmSummary,
body,
compartmentId,
definedTags,
destinations,
displayName,
evaluationSlackDuration,
freeformTags,
isEnabled,
isNotificationsPerMetricDimensionEnabled,
messageFormat,
metricCompartmentId,
metricCompartmentIdInSubtree,
namespace,
notificationTitle,
notificationVersion,
overrides,
pendingDuration,
query,
repeatNotificationDuration,
resolution,
resourceGroup,
ruleName,
severity,
suppression,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ alarmSummary }}',
'{{ body }}',
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ destinations }}' /* required */,
'{{ displayName }}' /* required */,
'{{ evaluationSlackDuration }}',
'{{ freeformTags }}',
{{ isEnabled }} /* required */,
{{ isNotificationsPerMetricDimensionEnabled }},
'{{ messageFormat }}',
'{{ metricCompartmentId }}' /* required */,
{{ metricCompartmentIdInSubtree }},
'{{ namespace }}' /* required */,
'{{ notificationTitle }}',
'{{ notificationVersion }}',
'{{ overrides }}',
'{{ pendingDuration }}',
'{{ query }}' /* required */,
'{{ repeatNotificationDuration }}',
'{{ resolution }}',
'{{ resourceGroup }}',
'{{ ruleName }}',
'{{ severity }}' /* required */,
'{{ suppression }}',
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
alarmSummary,
body,
compartmentId,
definedTags,
destinations,
displayName,
evaluationSlackDuration,
freeformTags,
isEnabled,
isNotificationsPerMetricDimensionEnabled,
lifecycleState,
messageFormat,
metricCompartmentId,
metricCompartmentIdInSubtree,
namespace,
notificationTitle,
notificationVersion,
overrides,
pendingDuration,
query,
repeatNotificationDuration,
resolution,
resourceGroup,
ruleName,
severity,
suppression,
timeCreated,
timeUpdated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: alarms
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the alarms resource.
    - name: alarmSummary
      value: "{{ alarmSummary }}"
      description: |
        Customizable alarm summary (\`alarmSummary\` [alarm message parameter](/iaas/Content/Monitoring/alarm-message-format.htm)).
        Optionally include [dynamic variables](/iaas/Content/Monitoring/Tasks/update-alarm-dynamic-variables.htm).
        The alarm summary appears within the body of the alarm message and in responses to
        [ListAlarmStatus](#/en/monitoring/latest/AlarmStatusSummary/ListAlarmsStatus)
        [GetAlarmHistory](#/en/monitoring/latest/AlarmHistoryCollection/GetAlarmHistory) and
        [RetrieveDimensionStates](#/en/monitoring/latest/AlarmDimensionStatesCollection/RetrieveDimensionStates).
    - name: body
      value: "{{ body }}"
      description: |
        The human-readable content of the delivered alarm notification.
        Optionally include [dynamic variables](/iaas/Content/Monitoring/Tasks/update-alarm-dynamic-variables.htm).
        Oracle recommends providing guidance
        to operators for resolving the alarm condition. Consider adding links to standard runbook
        practices. Avoid entering confidential information.
        Example: \`High CPU usage alert. Follow runbook instructions for resolution.\`
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the alarm.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Usage of predefined tag keys. These predefined keys are scoped to namespaces.
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: destinations
      value:
        - "{{ destinations }}"
      description: |
        A list of destinations for alarm notifications.
        Each destination is represented by the [OCID](/iaas/Content/General/Concepts/identifiers.htm)
        of a related resource, such as a [topic](#/en/notification/latest/NotificationTopic).
        Supported destination services: Notifications, Streaming.
        Limit: One destination per supported destination service.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name for the alarm. It does not have to be unique, and it's changeable.
        Avoid entering confidential information.
        This value determines the title of each alarm notification.
        Example: \`High CPU Utilization\`
    - name: evaluationSlackDuration
      value: "{{ evaluationSlackDuration }}"
      description: |
        Customizable slack period to wait for metric ingestion before evaluating the alarm.
        Specify a string in ISO 8601 format (\`PT10M\` for ten minutes or \`PT1H\`
        for one hour). Minimum: PT3M. Maximum: PT2H. Default: PT3M.
        For more information about the slack period, see
        [About the Internal Reset Period](/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#reset).
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
        Example: \`{"Department": "Finance"}\`
    - name: isEnabled
      value: {{ isEnabled }}
      description: |
        Whether the alarm is enabled.
        Example: \`true\`
    - name: isNotificationsPerMetricDimensionEnabled
      value: {{ isNotificationsPerMetricDimensionEnabled }}
      description: |
        When set to \`true\`, splits alarm notifications per metric stream.
        When set to \`false\`, groups alarm notifications across metric streams.
        Example: \`true\`
      default: false
    - name: messageFormat
      value: "{{ messageFormat }}"
      description: |
        The format to use for alarm notifications. The formats are:
        * \`RAW\` - Raw JSON blob. Default value. When the \`destinations\` attribute specifies \`Streaming\`, all alarm notifications use this format.
        * \`PRETTY_JSON\`: JSON with new lines and indents. Available when the \`destinations\` attribute specifies \`Notifications\` only.
        * \`ONS_OPTIMIZED\`: Simplified, user-friendly layout. Available when the \`destinations\` attribute specifies \`Notifications\` only. Applies to Email subscription types only.
      valid_values: ['RAW', 'PRETTY_JSON', 'ONS_OPTIMIZED']
      default: RAW
    - name: metricCompartmentId
      value: "{{ metricCompartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the metric
        being evaluated by the alarm.
    - name: metricCompartmentIdInSubtree
      value: {{ metricCompartmentIdInSubtree }}
      description: |
        When true, the alarm evaluates metrics from all compartments and subcompartments. The parameter can
        only be set to true when metricCompartmentId is the tenancy OCID (the tenancy is the root compartment).
        A true value requires the user to have tenancy-level permissions. If this requirement is not met,
        then the call is rejected. When false, the alarm evaluates metrics from only the compartment specified
        in metricCompartmentId. Default is false.
        Example: \`true\`
    - name: namespace
      value: "{{ namespace }}"
      description: |
        The source service or application emitting the metric that is evaluated by the alarm.
        Example: \`oci_computeagent\`
    - name: notificationTitle
      value: "{{ notificationTitle }}"
      description: |
        Customizable notification title (\`title\` [alarm message parameter](/iaas/Content/Monitoring/alarm-message-format.htm)).
        Optionally include [dynamic variables](/iaas/Content/Monitoring/Tasks/update-alarm-dynamic-variables.htm).
        The notification title appears as the subject line in a formatted email message and as the title in a Slack message.
    - name: notificationVersion
      value: "{{ notificationVersion }}"
      description: |
        The version of the alarm notification to be delivered. Allowed value: \`1.X\`
        The value must start with a number (up to four digits), followed by a period and an uppercase X.
    - name: overrides
      description: |
        A set of overrides that control evaluations of the alarm.
        Each override can specify values for query, severity, body, and pending duration.
        When an alarm contains overrides, the Monitoring service evaluates each override in order, beginning with the first override in the array (index position \`0\`),
        and then evaluates the alarm's base values (\`ruleName\` value of \`BASE\`).
      value:
        - body: "{{ body }}"
          pendingDuration: "{{ pendingDuration }}"
          query: "{{ query }}"
          ruleName: "{{ ruleName }}"
          severity: "{{ severity }}"
    - name: pendingDuration
      value: "{{ pendingDuration }}"
      description: |
        The period of time that the condition defined in the alarm must persist before the alarm state
        changes from "OK" to "FIRING". For example, a value of 5 minutes means that the
        alarm must persist in breaching the condition for five minutes before the alarm updates its
        state to "FIRING".
        The duration is specified as a string in ISO 8601 format (\`PT10M\` for ten minutes or \`PT1H\`
        for one hour). Minimum: PT1M. Maximum: PT24H. Default: PT1M.
        Under the default value of PT1M, the first evaluation that breaches the alarm updates the
        state to "FIRING".
        The alarm updates its status to "OK" when the breaching condition has been clear for
        the most recent minute.
        Example: \`PT5M\`
    - name: query
      value: "{{ query }}"
      description: |
        The Monitoring Query Language (MQL) expression to evaluate for the alarm. The Alarms feature of
        the Monitoring service interprets results for each returned time series as Boolean values,
        where zero represents false and a non-zero value represents true. A true value means that the trigger
        rule condition has been met. The query must specify a metric, statistic, interval, and trigger
        rule (threshold or absence). Supported values for interval depend on the specified time range. More
        interval values are supported for smaller time ranges. You can optionally
        specify dimensions and grouping functions.
        Also, you can customize the
        [absence detection period](/iaas/Content/Monitoring/Tasks/create-edit-alarm-query-absence-detection-period.htm).
        Supported grouping functions: \`grouping()\`, \`groupBy()\`.
        For information about writing MQL expressions, see
        [Editing the MQL Expression for a Query](/iaas/Content/Monitoring/Tasks/query-metric-mql.htm).
        For details about MQL, see
        [Monitoring Query Language (MQL) Reference](/iaas/Content/Monitoring/Reference/mql.htm).
        For available dimensions, review the metric definition for the supported service. See
        [Supported Services](/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#SupportedServices).
        Example of threshold alarm:
        -----
        CpuUtilization[1m]{availabilityDomain="cumS:PHX-AD-1"}.groupBy(availabilityDomain).percentile(0.9) > 85
        -----
        Example of absence alarm:
        -----
        CpuUtilization[1m]{availabilityDomain="cumS:PHX-AD-1"}.absent()
        -----
        Example of absence alarm with custom absence detection period of 20 hours:
        -----
        CpuUtilization[1m]{availabilityDomain="cumS:PHX-AD-1"}.absent(20h)
        -----
    - name: repeatNotificationDuration
      value: "{{ repeatNotificationDuration }}"
      description: |
        The frequency for re-submitting alarm notifications, if the alarm keeps firing without
        interruption. Format defined by ISO 8601. For example, \`PT4H\` indicates four hours.
        As another example, \`PT0M\` indicates a repeat notification each time the alarm trigger condition is met,
        otherwise known as an event-based notification. For more information, see
        [Getting Event-Based Notifications for an Alarm](/iaas/Content/Monitoring/Tasks/update-alarm-event.htm).
        Minimum: PT0M. Maximum: P30D.
        Default value: null (notifications are not re-submitted).
    - name: resolution
      value: "{{ resolution }}"
      description: |
        The time between calculated aggregation windows for the alarm. Supported value: \`1m\`
    - name: resourceGroup
      value: "{{ resourceGroup }}"
      description: |
        Resource group that you want to match. A null value returns only metric data that has no resource groups. The alarm retrieves metric data associated with the specified resource group only. Only one resource group can be applied per metric.
        A valid resourceGroup value starts with an alphabetical character and includes only alphanumeric characters, periods (.), underscores (_), hyphens (-), and dollar signs ($).
        Avoid entering confidential information.
        Example: \`frontend-fleet\`
    - name: ruleName
      value: "{{ ruleName }}"
      description: |
        Identifier of the alarm's base values for alarm evaluation, for use when the alarm contains overrides.
        Default value is \`BASE\`. For information about alarm overrides, see [AlarmOverride](#/en/monitoring/latest/datatypes/AlarmOverride).
    - name: severity
      value: "{{ severity }}"
      description: |
        The perceived type of response required when the alarm is in the "FIRING" state.
    - name: suppression
      description: |
        The configuration details for an alarm-wide suppression.
        For dimension-specific suppressions, see [AlarmSuppression](#/en/monitoring/latest/AlarmSuppression).
        For information about alarms, see
        [Alarms Overview](/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#AlarmsOverview).
      value:
        description: "{{ description }}"
        timeSuppressFrom: "{{ timeSuppressFrom }}"
        timeSuppressUntil: "{{ timeSuppressUntil }}"
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


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates the specified alarm.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Updating an Alarm&#93;(/iaas/Content/Monitoring/Tasks/update-alarm.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;

```sql
UPDATE oci.monitoring.alarms
SET 
alarmSummary = '{{ alarmSummary }}',
body = '{{ body }}',
compartmentId = '{{ compartmentId }}',
definedTags = '{{ definedTags }}',
destinations = '{{ destinations }}',
displayName = '{{ displayName }}',
evaluationSlackDuration = '{{ evaluationSlackDuration }}',
freeformTags = '{{ freeformTags }}',
isEnabled = {{ isEnabled }},
isNotificationsPerMetricDimensionEnabled = {{ isNotificationsPerMetricDimensionEnabled }},
messageFormat = '{{ messageFormat }}',
metricCompartmentId = '{{ metricCompartmentId }}',
metricCompartmentIdInSubtree = {{ metricCompartmentIdInSubtree }},
namespace = '{{ namespace }}',
notificationTitle = '{{ notificationTitle }}',
notificationVersion = '{{ notificationVersion }}',
overrides = '{{ overrides }}',
pendingDuration = '{{ pendingDuration }}',
query = '{{ query }}',
repeatNotificationDuration = '{{ repeatNotificationDuration }}',
resolution = '{{ resolution }}',
resourceGroup = '{{ resourceGroup }}',
ruleName = '{{ ruleName }}',
severity = '{{ severity }}',
suppression = '{{ suppression }}'
WHERE 
alarmId = '{{ alarmId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
alarmSummary,
body,
compartmentId,
definedTags,
destinations,
displayName,
evaluationSlackDuration,
freeformTags,
isEnabled,
isNotificationsPerMetricDimensionEnabled,
lifecycleState,
messageFormat,
metricCompartmentId,
metricCompartmentIdInSubtree,
namespace,
notificationTitle,
notificationVersion,
overrides,
pendingDuration,
query,
repeatNotificationDuration,
resolution,
resourceGroup,
ruleName,
severity,
suppression,
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

Deletes the specified alarm.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Deleting an Alarm&#93;(/iaas/Content/Monitoring/Tasks/delete-alarm.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;

```sql
DELETE FROM oci.monitoring.alarms
WHERE alarmId = '{{ alarmId }}' --required
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
        { label: 'remove_alarm_suppression', value: 'remove_alarm_suppression' },
        { label: 'retrieve_dimension_states', value: 'retrieve_dimension_states' },
        { label: 'summarize_alarm_suppression_history', value: 'summarize_alarm_suppression_history' }
    ]}
>
<TabItem value="change_compartment">

Moves an alarm into a different compartment within the same tenancy.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Moving an Alarm&#93;(/iaas/Content/Monitoring/Tasks/change-compartment-alarm.htm).&lt;br /&gt;

```sql
EXEC oci.monitoring.alarms.change_compartment 
@alarmId='{{ alarmId }}' --required, 
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
<TabItem value="remove_alarm_suppression">

Removes any existing suppression for the specified alarm.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Removing a Suppression from a Single Alarm&#93;(/iaas/Content/Monitoring/Tasks/delete-alarm-suppression.htm) and&lt;br /&gt;&#91;Removing a Suppression from Multiple Alarms&#93;(/iaas/Content/Monitoring/Tasks/delete-alarm-suppression-multiple.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;

```sql
EXEC oci.monitoring.alarms.remove_alarm_suppression 
@alarmId='{{ alarmId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="retrieve_dimension_states">

Lists the current alarm status of each metric stream, where status is derived from the metric stream's last associated transition.&lt;br /&gt;Optionally filter by status value and one or more dimension key-value pairs.&lt;br /&gt;&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Metric Stream Status in an Alarm&#93;(/iaas/Content/Monitoring/Tasks/list-alarm-status-metric-stream.htm).&lt;br /&gt;&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;

```sql
EXEC oci.monitoring.alarms.retrieve_dimension_states 
@alarmId='{{ alarmId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@page='{{ page }}', 
@limit='{{ limit }}' 
@@json=
'{
"dimensionFilters": "{{ dimensionFilters }}", 
"status": "{{ status }}"
}'
;
```
</TabItem>
<TabItem value="summarize_alarm_suppression_history">

Returns history of suppressions for the specified alarm, including both dimension-specific and and alarm-wide suppressions. For more information, see&lt;br /&gt;&#91;Getting Suppression History for an Alarm&#93;(/iaas/Content/Monitoring/Tasks/summarize-alarm-suppression-history.htm).&lt;br /&gt;&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;

```sql
EXEC oci.monitoring.alarms.summarize_alarm_suppression_history 
@alarmId='{{ alarmId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@page='{{ page }}', 
@limit='{{ limit }}' 
@@json=
'{
"dimensions": "{{ dimensions }}", 
"timeSuppressFromGreaterThanOrEqualTo": "{{ timeSuppressFromGreaterThanOrEqualTo }}", 
"timeSuppressFromLessThan": "{{ timeSuppressFromLessThan }}"
}'
;
```
</TabItem>
</Tabs>
