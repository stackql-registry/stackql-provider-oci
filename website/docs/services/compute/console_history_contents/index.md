--- 
title: console_history_contents
hide_title: false
hide_table_of_contents: false
keywords:
  - console_history_contents
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

Creates, updates, deletes, gets or lists a <code>console_history_contents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="console_history_contents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.console_history_contents" /></td></tr>
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

The information is being retrieved.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
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
    <td><a href="#parameter-instanceConsoleHistoryId"><code>instanceConsoleHistoryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-length"><code>length</code></a></td>
    <td>Gets the actual console history data (not the metadata).&lt;br /&gt;See &#91;CaptureConsoleHistory&#93;(#/en/iaas/latest/ConsoleHistory/CaptureConsoleHistory)&lt;br /&gt;for details about using the console history operations.&lt;br /&gt;</td>
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
<tr id="parameter-instanceConsoleHistoryId">
    <td><CopyableCode code="instanceConsoleHistoryId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the console history.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-length">
    <td><CopyableCode code="length" /></td>
    <td><code>integer (int32)</code></td>
    <td>Length of the snapshot data to retrieve.</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer (int32)</code></td>
    <td>Offset of the snapshot data to retrieve.</td>
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

Gets the actual console history data (not the metadata).&lt;br /&gt;See &#91;CaptureConsoleHistory&#93;(#/en/iaas/latest/ConsoleHistory/CaptureConsoleHistory)&lt;br /&gt;for details about using the console history operations.&lt;br /&gt;

```sql
SELECT
*
FROM oci.compute.console_history_contents
WHERE instanceConsoleHistoryId = '{{ instanceConsoleHistoryId }}' -- required
AND region = '{{ region }}' -- required
AND offset = '{{ offset }}'
AND length = '{{ length }}'
;
```
</TabItem>
</Tabs>
