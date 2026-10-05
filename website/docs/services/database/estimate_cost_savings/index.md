--- 
title: estimate_cost_savings
hide_title: false
hide_table_of_contents: false
keywords:
  - estimate_cost_savings
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

Creates, updates, deletes, gets or lists an <code>estimate_cost_savings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="estimate_cost_savings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.estimate_cost_savings" /></td></tr>
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

List of Cost Estimates.

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
    <td><CopyableCode code="costSavingsWithElasticPool" /></td>
    <td><code>number (double)</code></td>
    <td>Estimated cost savings in percentage with elastic pool utilization.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedUsageWithoutElasticPool" /></td>
    <td><code>integer (int64)</code></td>
    <td>CPU cost for a given time period under regular billing plan, in ECPU hours.</td>
</tr>
<tr>
    <td><CopyableCode code="isCpuAutoscale" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if CPU autoscaling is applied.</td>
</tr>
<tr>
    <td><CopyableCode code="timeEnded" /></td>
    <td><code>string (date-time)</code></td>
    <td>The epoch time at which cost aggregation ends.</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The epoch time at which cost aggregation starts.</td>
</tr>
<tr>
    <td><CopyableCode code="usageWithElasticPool" /></td>
    <td><code>integer (int64)</code></td>
    <td>CPU cost for a given time period under elastic pool billing plan, in ECPU hours.</td>
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
    <td><a href="#parameter-isCpuAutoscale"><code>isCpuAutoscale</code></a>, <a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Gets the estimate cost savings of the Autonomous AI Database.</td>
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
<tr id="parameter-autonomousDatabaseId">
    <td><CopyableCode code="autonomousDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The database &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-isCpuAutoscale">
    <td><CopyableCode code="isCpuAutoscale" /></td>
    <td><code>boolean</code></td>
    <td>If provided as true, cost estimate with cpu autoscaling.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
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
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token to continue listing from.</td>
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

Gets the estimate cost savings of the Autonomous AI Database.

```sql
SELECT
costSavingsWithElasticPool,
estimatedUsageWithoutElasticPool,
isCpuAutoscale,
timeEnded,
timeStarted,
usageWithElasticPool
FROM oci.database.estimate_cost_savings
WHERE isCpuAutoscale = '{{ isCpuAutoscale }}' -- required
AND autonomousDatabaseId = '{{ autonomousDatabaseId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
