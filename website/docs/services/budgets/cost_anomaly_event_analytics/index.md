--- 
title: cost_anomaly_event_analytics
hide_title: false
hide_table_of_contents: false
keywords:
  - cost_anomaly_event_analytics
  - budgets
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

Creates, updates, deletes, gets or lists a <code>cost_anomaly_event_analytics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cost_anomaly_event_analytics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.budgets.cost_anomaly_event_analytics" /></td></tr>
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
    <td><a href="#summarize_cost_anomaly_event_analytics"><CopyableCode code="summarize_cost_anomaly_event_analytics" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-costAnomalyMonitorId"><code>costAnomalyMonitorId</code></a>, <a href="#parameter-timeAnomalyEventStartDate"><code>timeAnomalyEventStartDate</code></a>, <a href="#parameter-timeAnomalyEventEndDate"><code>timeAnomalyEventEndDate</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-costImpact"><code>costImpact</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-targetTenantId"><code>targetTenantId</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets a list of Cost Anomaly Events analytics summary - aggregated metrics for a given time period.&lt;br /&gt;</td>
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
    <td>The ID of the compartment in which to list resources.</td>
</tr>
<tr id="parameter-costAnomalyMonitorId">
    <td><CopyableCode code="costAnomalyMonitorId" /></td>
    <td><code>string</code></td>
    <td>The cost monitor ocid.</td>
</tr>
<tr id="parameter-costImpact">
    <td><CopyableCode code="costImpact" /></td>
    <td><code>number (double)</code></td>
    <td>cost impact of the anomaly event.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-timeAnomalyEventEndDate">
    <td><CopyableCode code="timeAnomalyEventEndDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>endDate for anomaly event date.</td>
</tr>
<tr id="parameter-timeAnomalyEventStartDate">
    <td><CopyableCode code="timeAnomalyEventStartDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>startDate for anomaly event date.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Unique, non-changeable resource name. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>The client request ID for tracing.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. If not specified, the default is timeCreated. The default sort order for timeCreated is DESC. The default sort order for displayName is ASC in alphanumeric order. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either 'asc' or 'desc'.</td>
</tr>
<tr id="parameter-targetTenantId">
    <td><CopyableCode code="targetTenantId" /></td>
    <td><code>string</code></td>
    <td>The target tenantId ocid filter param.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="summarize_cost_anomaly_event_analytics"
    values={[
        { label: 'summarize_cost_anomaly_event_analytics', value: 'summarize_cost_anomaly_event_analytics' }
    ]}
>
<TabItem value="summarize_cost_anomaly_event_analytics">

Gets a list of Cost Anomaly Events analytics summary - aggregated metrics for a given time period.&lt;br /&gt;

```sql
EXEC oci.budgets.cost_anomaly_event_analytics.summarize_cost_anomaly_event_analytics 
@compartmentId='{{ compartmentId }}' --required, 
@costAnomalyMonitorId='{{ costAnomalyMonitorId }}' --required, 
@timeAnomalyEventStartDate='{{ timeAnomalyEventStartDate }}' --required, 
@timeAnomalyEventEndDate='{{ timeAnomalyEventEndDate }}' --required, 
@region='{{ region }}' --required, 
@costImpact='{{ costImpact }}' --required, 
@limit='{{ limit }}', 
@page='{{ page }}', 
@sortOrder='{{ sortOrder }}', 
@sortBy='{{ sortBy }}', 
@name='{{ name }}', 
@targetTenantId='{{ targetTenantId }}', 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
