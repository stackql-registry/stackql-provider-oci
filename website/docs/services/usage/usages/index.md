--- 
title: usages
hide_title: false
hide_table_of_contents: false
keywords:
  - usages
  - usage
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

Creates, updates, deletes, gets or lists a <code>usages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.usage.usages" /></td></tr>
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
    <td><a href="#request_summarized_usages"><CopyableCode code="request_summarized_usages" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-tenantId"><code>tenantId</code></a>, <a href="#parameter-timeUsageStarted"><code>timeUsageStarted</code></a>, <a href="#parameter-timeUsageEnded"><code>timeUsageEnded</code></a>, <a href="#parameter-granularity"><code>granularity</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Returns usage for the given account.&lt;br /&gt;</td>
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
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call. </td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="request_summarized_usages"
    values={[
        { label: 'request_summarized_usages', value: 'request_summarized_usages' }
    ]}
>
<TabItem value="request_summarized_usages">

Returns usage for the given account.&lt;br /&gt;

```sql
EXEC oci.usage.usages.request_summarized_usages 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@page='{{ page }}', 
@limit='{{ limit }}' 
@@json=
'{
"compartmentDepth": {{ compartmentDepth }}, 
"filter": "{{ filter }}", 
"forecast": "{{ forecast }}", 
"granularity": "{{ granularity }}", 
"groupBy": "{{ groupBy }}", 
"groupByTag": "{{ groupByTag }}", 
"isAggregateByTime": {{ isAggregateByTime }}, 
"queryType": "{{ queryType }}", 
"tenantId": "{{ tenantId }}", 
"timeUsageEnded": "{{ timeUsageEnded }}", 
"timeUsageStarted": "{{ timeUsageStarted }}"
}'
;
```
</TabItem>
</Tabs>
