--- 
title: instance_console_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_console_histories
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

Creates, updates, deletes, gets or lists an <code>instance_console_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_console_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.instance_console_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#capture_console_history"><CopyableCode code="capture_console_history" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Captures the most recent serial console data (up to a megabyte) for the&lt;br /&gt;specified instance.&lt;br /&gt;&lt;br /&gt;The `CaptureConsoleHistory` operation works with the other console history operations&lt;br /&gt;as described below.&lt;br /&gt;&lt;br /&gt;1. Use `CaptureConsoleHistory` to request the capture of up to a megabyte of the&lt;br /&gt;most recent console history. This call returns a `ConsoleHistory`&lt;br /&gt;object. The object will have a state of REQUESTED.&lt;br /&gt;2. Wait for the capture operation to succeed by polling `GetConsoleHistory` with&lt;br /&gt;the identifier of the console history metadata. The state of the&lt;br /&gt;`ConsoleHistory` object will go from REQUESTED to GETTING-HISTORY and&lt;br /&gt;then SUCCEEDED (or FAILED).&lt;br /&gt;3. Use `GetConsoleHistoryContent` to get the actual console history data (not the&lt;br /&gt;metadata).&lt;br /&gt;4. Optionally, use `DeleteConsoleHistory` to delete the console history metadata&lt;br /&gt;and the console history data.&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="capture_console_history"
    values={[
        { label: 'capture_console_history', value: 'capture_console_history' }
    ]}
>
<TabItem value="capture_console_history">

Captures the most recent serial console data (up to a megabyte) for the&lt;br /&gt;specified instance.&lt;br /&gt;&lt;br /&gt;The `CaptureConsoleHistory` operation works with the other console history operations&lt;br /&gt;as described below.&lt;br /&gt;&lt;br /&gt;1. Use `CaptureConsoleHistory` to request the capture of up to a megabyte of the&lt;br /&gt;most recent console history. This call returns a `ConsoleHistory`&lt;br /&gt;object. The object will have a state of REQUESTED.&lt;br /&gt;2. Wait for the capture operation to succeed by polling `GetConsoleHistory` with&lt;br /&gt;the identifier of the console history metadata. The state of the&lt;br /&gt;`ConsoleHistory` object will go from REQUESTED to GETTING-HISTORY and&lt;br /&gt;then SUCCEEDED (or FAILED).&lt;br /&gt;3. Use `GetConsoleHistoryContent` to get the actual console history data (not the&lt;br /&gt;metadata).&lt;br /&gt;4. Optionally, use `DeleteConsoleHistory` to delete the console history metadata&lt;br /&gt;and the console history data.&lt;br /&gt;

```sql
EXEC oci.compute.instance_console_histories.capture_console_history 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"definedTags": "{{ definedTags }}", 
"displayName": "{{ displayName }}", 
"freeformTags": "{{ freeformTags }}", 
"instanceId": "{{ instanceId }}"
}'
;
```
</TabItem>
</Tabs>
