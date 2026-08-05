--- 
title: alarm_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - alarm_histories
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

Creates, updates, deletes, gets or lists an <code>alarm_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alarm_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.monitoring.alarm_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Successfully retrieved alarm history.

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
    <td><CopyableCode code="alarmId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the alarm to retrieve history for. </td>
</tr>
<tr>
    <td><CopyableCode code="entries" /></td>
    <td><code>array</code></td>
    <td>The set of history entries retrieved for the alarm. </td>
</tr>
<tr>
    <td><CopyableCode code="isEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the alarm is enabled.  Example: `true` </td>
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
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-alarmHistorytype"><code>alarmHistorytype</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-timestampGreaterThanOrEqualTo"><code>timestampGreaterThanOrEqualTo</code></a>, <a href="#parameter-timestampLessThan"><code>timestampLessThan</code></a></td>
    <td>Get the history of the specified alarm.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Getting History of an Alarm&#93;(/iaas/Content/Monitoring/Tasks/get-alarm-history.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-alarmHistorytype">
    <td><CopyableCode code="alarmHistorytype" /></td>
    <td><code>string</code></td>
    <td>The type of history entries to retrieve. State history (STATE_HISTORY), state transition history (STATE_TRANSITION_HISTORY), rule history (RULE_HISTORY) or rule transition history (RULE_TRANSITION_HISTORY). If not specified, entries of all types are retrieved.  Example: `STATE_HISTORY` </td>
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
<tr id="parameter-timestampGreaterThanOrEqualTo">
    <td><CopyableCode code="timestampGreaterThanOrEqualTo" /></td>
    <td><code>string (date-time)</code></td>
    <td>A filter to return only alarm history entries with timestamps occurring on or after the specified date and time. Format defined by RFC3339.  Example: `2023-01-01T01:00:00.789Z` </td>
</tr>
<tr id="parameter-timestampLessThan">
    <td><CopyableCode code="timestampLessThan" /></td>
    <td><code>string (date-time)</code></td>
    <td>A filter to return only alarm history entries with timestamps occurring before the specified date and time. Format defined by RFC3339.  Example: `2023-01-02T01:00:00.789Z` </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get the history of the specified alarm.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Getting History of an Alarm&#93;(/iaas/Content/Monitoring/Tasks/get-alarm-history.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;This call is subject to a Monitoring limit that applies to the total number of requests across all alarm operations.&lt;br /&gt;Monitoring might throttle this call to reject an otherwise valid request when the total rate of alarm operations exceeds 10 requests,&lt;br /&gt;or transactions, per second (TPS) for a given tenancy.&lt;br /&gt;

```sql
SELECT
alarmId,
entries,
isEnabled
FROM oci.monitoring.alarm_histories
WHERE alarmId = '{{ alarmId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND alarmHistorytype = '{{ alarmHistorytype }}'
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND timestampGreaterThanOrEqualTo = '{{ timestampGreaterThanOrEqualTo }}'
AND timestampLessThan = '{{ timestampLessThan }}'
;
```
</TabItem>
</Tabs>
