--- 
title: backend_set_healths
hide_title: false
hide_table_of_contents: false
keywords:
  - backend_set_healths
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

Creates, updates, deletes, gets or lists a <code>backend_set_healths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backend_set_healths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.load_balancer.backend_set_healths" /></td></tr>
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
    <td><CopyableCode code="criticalStateBackendNames" /></td>
    <td><code>array</code></td>
    <td>A list of backend servers that are currently in the `CRITICAL` health state. The list identifies each backend server by IP address and port.  Example: `10.0.0.4:8080` </td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Overall health status of the backend set.  *  **OK:** All backend servers in the backend set return a status of `OK`.  *  **WARNING:** Half or more of the backend set's backend servers return a status of `OK` and at least one backend server returns a status of `WARNING`, `CRITICAL`, or `UNKNOWN`.  *  **CRITICAL:** Fewer than half of the backend set's backend servers return a status of `OK`.  *  **UNKNOWN:** More than half of the backend set's backend servers return a status of `UNKNOWN`, the system was unable to retrieve metrics, or the backend set does not have a listener attached.  (OK, WARNING, CRITICAL, UNKNOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="totalBackendCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of backend servers in this backend set.  Example: `7` </td>
</tr>
<tr>
    <td><CopyableCode code="unknownStateBackendNames" /></td>
    <td><code>array</code></td>
    <td>A list of backend servers that are currently in the `UNKNOWN` health state. The list identifies each backend server by IP address and port.  Example: `10.0.0.5:8080` </td>
</tr>
<tr>
    <td><CopyableCode code="warningStateBackendNames" /></td>
    <td><code>array</code></td>
    <td>A list of backend servers that are currently in the `WARNING` health state. The list identifies each backend server by IP address and port.  Example: `10.0.0.3:8080` </td>
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
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-backendSetName"><code>backendSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the health status for the specified backend set.</td>
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
<tr id="parameter-backendSetName">
    <td><CopyableCode code="backendSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the backend set to retrieve the health status for.  Example: `example_backend_set` </td>
</tr>
<tr id="parameter-loadBalancerId">
    <td><CopyableCode code="loadBalancerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the load balancer associated with the backend set health status to be retrieved.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
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

Gets the health status for the specified backend set.

```sql
SELECT
criticalStateBackendNames,
status,
totalBackendCount,
unknownStateBackendNames,
warningStateBackendNames
FROM oci.load_balancer.backend_set_healths
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
AND backendSetName = '{{ backendSetName }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
