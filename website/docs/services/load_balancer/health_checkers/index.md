--- 
title: health_checkers
hide_title: false
hide_table_of_contents: false
keywords:
  - health_checkers
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

Creates, updates, deletes, gets or lists a <code>health_checkers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="health_checkers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.load_balancer.health_checkers" /></td></tr>
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

The health check policy information is being retrieved.

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
    <td><CopyableCode code="intervalInMillis" /></td>
    <td><code>integer (int32)</code></td>
    <td>The interval between health checks, in milliseconds. The default is 10000 (10 seconds).  Example: `10000` </td>
</tr>
<tr>
    <td><CopyableCode code="isForcePlainText" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if health checks should always be done using plain text instead of depending on whether or not the associated backend set is using SSL.  If "true", health checks will be done using plain text even if the associated backend set is configured to use SSL.  If "false", health checks will be done using SSL encryption if the associated backend set is configured to use SSL. If the backend set is not so configured the health checks will be done using plain text.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer (int32)</code></td>
    <td>The backend server port against which to run the health check. If the port is not specified, the load balancer uses the port information from the `Backend` object.  Example: `8080`  (example: 0)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol the health check must use; either HTTP or TCP.  Example: `HTTP` </td>
</tr>
<tr>
    <td><CopyableCode code="responseBodyRegex" /></td>
    <td><code>string</code></td>
    <td>A regular expression for parsing the response body from the backend server.  Example: `^((?!false).|\s)*$` </td>
</tr>
<tr>
    <td><CopyableCode code="retries" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of retries to attempt before a backend server is considered "unhealthy". This number also applies when recovering a server to the "healthy" state. Defaults to 3.  Example: `3` </td>
</tr>
<tr>
    <td><CopyableCode code="returnCode" /></td>
    <td><code>integer (int32)</code></td>
    <td>The status code a healthy backend server should return. If you configure the health check policy to use the HTTP protocol, you can use common HTTP status codes such as "200".  Example: `200`  (example: 0)</td>
</tr>
<tr>
    <td><CopyableCode code="timeoutInMillis" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum time, in milliseconds, to wait for a reply to a health check. A health check is successful only if a reply returns within this timeout period. Defaults to 3000 (3 seconds).  Example: `3000` </td>
</tr>
<tr>
    <td><CopyableCode code="urlPath" /></td>
    <td><code>string</code></td>
    <td>The path against which to run the health check.  Example: `/healthcheck` </td>
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
    <td>Gets the health check policy information for a given load balancer and backend set.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-backendSetName"><code>backendSetName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-protocol"><code>protocol</code></a>, <a href="#parameter-port"><code>port</code></a>, <a href="#parameter-returnCode"><code>returnCode</code></a>, <a href="#parameter-retries"><code>retries</code></a>, <a href="#parameter-timeoutInMillis"><code>timeoutInMillis</code></a>, <a href="#parameter-intervalInMillis"><code>intervalInMillis</code></a>, <a href="#parameter-responseBodyRegex"><code>responseBodyRegex</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Updates the health check policy for a given load balancer and backend set.</td>
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
    <td>The name of the backend set associated with the health check policy to be retrieved.  Example: `example_backend_set` </td>
</tr>
<tr id="parameter-loadBalancerId">
    <td><CopyableCode code="loadBalancerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the load balancer associated with the health check policy to be updated.</td>
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
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
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

Gets the health check policy information for a given load balancer and backend set.

```sql
SELECT
intervalInMillis,
isForcePlainText,
port,
protocol,
responseBodyRegex,
retries,
returnCode,
timeoutInMillis,
urlPath
FROM oci.load_balancer.health_checkers
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
AND backendSetName = '{{ backendSetName }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates the health check policy for a given load balancer and backend set.

```sql
UPDATE oci.load_balancer.health_checkers
SET 
intervalInMillis = {{ intervalInMillis }},
isForcePlainText = {{ isForcePlainText }},
port = {{ port }},
protocol = '{{ protocol }}',
responseBodyRegex = '{{ responseBodyRegex }}',
retries = {{ retries }},
returnCode = {{ returnCode }},
timeoutInMillis = {{ timeoutInMillis }},
urlPath = '{{ urlPath }}'
WHERE 
loadBalancerId = '{{ loadBalancerId }}' --required
AND backendSetName = '{{ backendSetName }}' --required
AND region = '{{ region }}' --required
AND protocol = '{{ protocol }}' --required
AND port = '{{ port }}' --required
AND returnCode = '{{ returnCode }}' --required
AND retries = '{{ retries }}' --required
AND timeoutInMillis = '{{ timeoutInMillis }}' --required
AND intervalInMillis = '{{ intervalInMillis }}' --required
AND responseBodyRegex = '{{ responseBodyRegex }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND opc-retry-token = '{{ opc-retry-token}}';
```
</TabItem>
</Tabs>
