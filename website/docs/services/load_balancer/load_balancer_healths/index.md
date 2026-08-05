--- 
title: load_balancer_healths
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancer_healths
  - load_balancer
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

Creates, updates, deletes, gets or lists a <code>load_balancer_healths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="load_balancer_healths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.load_balancer.load_balancer_healths" /></td></tr>
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

The health status information was retrieved.

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
    <td><CopyableCode code="criticalStateBackendSetNames" /></td>
    <td><code>array</code></td>
    <td>A list of backend sets that are currently in the `CRITICAL` health state. The list identifies each backend set by the friendly name you assigned when you created it.  Example: `example_backend_set` </td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The overall health status of the load balancer.  *  **OK:** All backend sets associated with the load balancer return a status of `OK`.  *  **WARNING:** At least one of the backend sets associated with the load balancer returns a status of `WARNING`, no backend sets return a status of `CRITICAL`, and the load balancer life cycle state is `ACTIVE`.  *  **CRITICAL:** One or more of the backend sets associated with the load balancer return a status of `CRITICAL`.  *  **UNKNOWN:** If any one of the following conditions is true:      *  The load balancer life cycle state is not `ACTIVE`.      *  No backend sets are defined for the load balancer.      *  More than half of the backend sets associated with the load balancer return a status of `UNKNOWN`, none of the backend        sets return a status of `WARNING` or `CRITICAL`, and the load balancer life cycle state is `ACTIVE`.      *  The system could not retrieve metrics for any reason.  (OK, WARNING, CRITICAL, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="totalBackendSetCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of backend sets associated with this load balancer.  Example: `4` </td>
</tr>
<tr>
    <td><CopyableCode code="unknownStateBackendSetNames" /></td>
    <td><code>array</code></td>
    <td>A list of backend sets that are currently in the `UNKNOWN` health state. The list identifies each backend set by the friendly name you assigned when you created it.  Example: `example_backend_set2` </td>
</tr>
<tr>
    <td><CopyableCode code="warningStateBackendSetNames" /></td>
    <td><code>array</code></td>
    <td>A list of backend sets that are currently in the `WARNING` health state. The list identifies each backend set by the friendly name you assigned when you created it.  Example: `example_backend_set3` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A health status summary for the specified load balancer.

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
    <td><CopyableCode code="loadBalancerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the load balancer the health status is associated with. </td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The overall health status of the load balancer.  *  **OK:** All backend sets associated with the load balancer return a status of `OK`.  *  **WARNING:** At least one of the backend sets associated with the load balancer returns a status of `WARNING`, no backend sets return a status of `CRITICAL`, and the load balancer life cycle state is `ACTIVE`.  *  **CRITICAL:** One or more of the backend sets associated with the load balancer return a status of `CRITICAL`.  *  **UNKNOWN:** If any one of the following conditions is true:      *  The load balancer life cycle state is not `ACTIVE`.      *  No backend sets are defined for the load balancer.      *  More than half of the backend sets associated with the load balancer return a status of `UNKNOWN`, none of the backend        sets return a status of `WARNING` or `CRITICAL`, and the load balancer life cycle state is `ACTIVE`.      *  The system could not retrieve metrics for any reason.  (OK, WARNING, CRITICAL, UNKNOWN)</td>
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
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the health status for the specified load balancer.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the summary health statuses for all load balancers in the specified compartment.</td>
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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment containing the load balancers to return health status information for.</td>
</tr>
<tr id="parameter-loadBalancerId">
    <td><CopyableCode code="loadBalancerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the load balancer to return health status for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `3` </td>
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

Gets the health status for the specified load balancer.

```sql
SELECT
criticalStateBackendSetNames,
status,
totalBackendSetCount,
unknownStateBackendSetNames,
warningStateBackendSetNames
FROM oci.load_balancer.load_balancer_healths
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the summary health statuses for all load balancers in the specified compartment.

```sql
SELECT
loadBalancerId,
status
FROM oci.load_balancer.load_balancer_healths
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
