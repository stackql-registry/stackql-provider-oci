--- 
title: job_logs
hide_title: false
hide_table_of_contents: false
keywords:
  - job_logs
  - resource_manager
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

Creates, updates, deletes, gets or lists a <code>job_logs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_logs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.resource_manager.job_logs" /></td></tr>
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

Log entry for an operation resulting from a job's execution.

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
    <td><CopyableCode code="level" /></td>
    <td><code>string</code></td>
    <td>Specifies the severity level of the log entry. (TRACE, DEBUG, INFO, WARN, ERROR, FATAL)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The log entry value.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the log entry. Format is defined by RFC3339. Example: `2020-01-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Specifies the log type for the log entry. (TERRAFORM_CONSOLE)</td>
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
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-levelGreaterThanOrEqualTo"><code>levelGreaterThanOrEqualTo</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-timestampGreaterThanOrEqualTo"><code>timestampGreaterThanOrEqualTo</code></a>, <a href="#parameter-timestampLessThanOrEqualTo"><code>timestampLessThanOrEqualTo</code></a></td>
    <td>Returns console log entries for the specified job in JSON format.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Getting Logs for a Job&#93;(/iaas/Content/ResourceManager/Tasks/get-job-logs.htm).&lt;br /&gt;</td>
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
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-levelGreaterThanOrEqualTo">
    <td><CopyableCode code="levelGreaterThanOrEqualTo" /></td>
    <td><code>string</code></td>
    <td>A filter that returns only log entries that match a given severity level or greater. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The number of items returned in a paginated `List` call. For information about pagination, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The value of the `opc-next-page` response header from the preceding `List` call. For information about pagination, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use when sorting returned resources. Ascending (`ASC`) or descending (`DESC`). </td>
</tr>
<tr id="parameter-timestampGreaterThanOrEqualTo">
    <td><CopyableCode code="timestampGreaterThanOrEqualTo" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time stamp specifying the lower time limit for which logs are returned in a query. Format is defined by RFC3339. Example: `2020-01-01T12:00:00.000Z` </td>
</tr>
<tr id="parameter-timestampLessThanOrEqualTo">
    <td><CopyableCode code="timestampLessThanOrEqualTo" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time stamp specifying the upper time limit for which logs are returned in a query. Format is defined by RFC3339. Example: `2020-02-01T12:00:00.000Z` </td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>array</code></td>
    <td>A filter that returns only logs of a specified type. </td>
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

Returns console log entries for the specified job in JSON format.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Getting Logs for a Job&#93;(/iaas/Content/ResourceManager/Tasks/get-job-logs.htm).&lt;br /&gt;

```sql
SELECT
level,
message,
timestamp,
type
FROM oci.resource_manager.job_logs
WHERE jobId = '{{ jobId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND type = '{{ type }}'
AND levelGreaterThanOrEqualTo = '{{ levelGreaterThanOrEqualTo }}'
AND sortOrder = '{{ sortOrder }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND timestampGreaterThanOrEqualTo = '{{ timestampGreaterThanOrEqualTo }}'
AND timestampLessThanOrEqualTo = '{{ timestampLessThanOrEqualTo }}'
;
```
</TabItem>
</Tabs>
