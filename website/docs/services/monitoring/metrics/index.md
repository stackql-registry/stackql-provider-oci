--- 
title: metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - metrics
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

Creates, updates, deletes, gets or lists a <code>metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.monitoring.metrics" /></td></tr>
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
    <td><a href="#list_metrics"><CopyableCode code="list_metrics" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-compartmentIdInSubtree"><code>compartmentIdInSubtree</code></a></td>
    <td>Returns metric definitions that match the criteria specified in the request. Compartment OCID required.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Metric Definitions&#93;(/iaas/Content/Monitoring/Tasks/list-metric.htm).&lt;br /&gt;For information about metrics, see&lt;br /&gt;&#91;Metrics Overview&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#MetricsOverview).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;Transactions Per Second (TPS) per-tenancy limit for this operation: 10.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#summarize_metrics_data"><CopyableCode code="summarize_metrics_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-query"><code>query</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-compartmentIdInSubtree"><code>compartmentIdInSubtree</code></a></td>
    <td>Returns aggregated data that match the criteria specified in the request. Compartment OCID required.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Querying Metric Data&#93;(/iaas/Content/Monitoring/Tasks/query-metric-landing.htm)&lt;br /&gt;and&lt;br /&gt;&#91;Creating a Query&#93;(/iaas/Content/Monitoring/Tasks/query-metric.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;Transactions Per Second (TPS) per-tenancy limit for this operation: 10.&lt;br /&gt;</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-compartmentIdInSubtree">
    <td><CopyableCode code="compartmentIdInSubtree" /></td>
    <td><code>boolean</code></td>
    <td>When true, returns resources from all compartments and subcompartments. The parameter can only be set to true when compartmentId is the tenancy OCID (the tenancy is the root compartment). A true value requires the user to have tenancy-level permissions. If this requirement is not met, then the call is rejected. When false, returns resources from only the compartment specified in compartmentId. Default is false. </td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="list_metrics"
    values={[
        { label: 'list_metrics', value: 'list_metrics' },
        { label: 'summarize_metrics_data', value: 'summarize_metrics_data' }
    ]}
>
<TabItem value="list_metrics">

Returns metric definitions that match the criteria specified in the request. Compartment OCID required.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Metric Definitions&#93;(/iaas/Content/Monitoring/Tasks/list-metric.htm).&lt;br /&gt;For information about metrics, see&lt;br /&gt;&#91;Metrics Overview&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#MetricsOverview).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;Transactions Per Second (TPS) per-tenancy limit for this operation: 10.&lt;br /&gt;

```sql
EXEC oci.monitoring.metrics.list_metrics 
@compartmentId='{{ compartmentId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@page='{{ page }}', 
@limit='{{ limit }}', 
@compartmentIdInSubtree={{ compartmentIdInSubtree }} 
@@json=
'{
"dimensionFilters": "{{ dimensionFilters }}", 
"groupBy": "{{ groupBy }}", 
"name": "{{ name }}", 
"namespace": "{{ namespace }}", 
"resourceGroup": "{{ resourceGroup }}", 
"sortBy": "{{ sortBy }}", 
"sortOrder": "{{ sortOrder }}"
}'
;
```
</TabItem>
<TabItem value="summarize_metrics_data">

Returns aggregated data that match the criteria specified in the request. Compartment OCID required.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Querying Metric Data&#93;(/iaas/Content/Monitoring/Tasks/query-metric-landing.htm)&lt;br /&gt;and&lt;br /&gt;&#91;Creating a Query&#93;(/iaas/Content/Monitoring/Tasks/query-metric.htm).&lt;br /&gt;For important limits information, see&lt;br /&gt;&#91;Limits on Monitoring&#93;(/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#limits).&lt;br /&gt;&lt;br /&gt;Transactions Per Second (TPS) per-tenancy limit for this operation: 10.&lt;br /&gt;

```sql
EXEC oci.monitoring.metrics.summarize_metrics_data 
@compartmentId='{{ compartmentId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@compartmentIdInSubtree={{ compartmentIdInSubtree }} 
@@json=
'{
"endTime": "{{ endTime }}", 
"namespace": "{{ namespace }}", 
"query": "{{ query }}", 
"resolution": "{{ resolution }}", 
"resourceGroup": "{{ resourceGroup }}", 
"startTime": "{{ startTime }}"
}'
;
```
</TabItem>
</Tabs>
