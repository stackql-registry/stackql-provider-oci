--- 
title: backends
hide_title: false
hide_table_of_contents: false
keywords:
  - backends
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

Creates, updates, deletes, gets or lists a <code>backends</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backends" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.load_balancer.backends" /></td></tr>
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

The backend server information is being retrieved.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A read-only field showing the IP address and port that uniquely identify this backend server in the backend set.  Example: `10.0.0.3:8080` </td>
</tr>
<tr>
    <td><CopyableCode code="backup" /></td>
    <td><code>boolean</code></td>
    <td>Whether the load balancer should treat this server as a backup unit. If `true`, the load balancer forwards no ingress traffic to this backend server unless all other backend servers not marked as "backup" fail the health check policy.  **Note:** You cannot add a backend server marked as `backup` to a backend set that uses the IP Hash policy.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="drain" /></td>
    <td><code>boolean</code></td>
    <td>Whether the load balancer should drain this server. Servers marked "drain" receive no new incoming traffic.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>The IP address of the backend server.  Example: `10.0.0.3` </td>
</tr>
<tr>
    <td><CopyableCode code="maxConnections" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of simultaneous connections the load balancer can make to the backend. If this is not set or set to 0 then the maximum number of simultaneous connections the load balancer can make to the backend is unlimited.  Example: `300` </td>
</tr>
<tr>
    <td><CopyableCode code="offline" /></td>
    <td><code>boolean</code></td>
    <td>Whether the load balancer should treat this server as offline. Offline servers receive no incoming traffic.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer (int32)</code></td>
    <td>The communication port for the backend server.  Example: `8080` </td>
</tr>
<tr>
    <td><CopyableCode code="weight" /></td>
    <td><code>integer (int32)</code></td>
    <td>The load balancing policy weight assigned to the server. Backend servers with a higher weight receive a larger proportion of incoming traffic. For example, a server weighted '3' receives 3 times the number of new connections as a server weighted '1'. For more information on load balancing policies, see &#91;How Load Balancing Policies Work&#93;(/Content/Balance/Reference/lbpolicies.htm).  Example: `3` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The configuration of a backend server that is a member of a load balancer backend set.&lt;br /&gt;For more information, see &#91;Managing Backend Servers&#93;(/Content/Balance/Tasks/managingbackendservers.htm).&lt;br /&gt;

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A read-only field showing the IP address and port that uniquely identify this backend server in the backend set.  Example: `10.0.0.3:8080` </td>
</tr>
<tr>
    <td><CopyableCode code="backup" /></td>
    <td><code>boolean</code></td>
    <td>Whether the load balancer should treat this server as a backup unit. If `true`, the load balancer forwards no ingress traffic to this backend server unless all other backend servers not marked as "backup" fail the health check policy.  **Note:** You cannot add a backend server marked as `backup` to a backend set that uses the IP Hash policy.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="drain" /></td>
    <td><code>boolean</code></td>
    <td>Whether the load balancer should drain this server. Servers marked "drain" receive no new incoming traffic.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>The IP address of the backend server.  Example: `10.0.0.3` </td>
</tr>
<tr>
    <td><CopyableCode code="maxConnections" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of simultaneous connections the load balancer can make to the backend. If this is not set or set to 0 then the maximum number of simultaneous connections the load balancer can make to the backend is unlimited.  Example: `300` </td>
</tr>
<tr>
    <td><CopyableCode code="offline" /></td>
    <td><code>boolean</code></td>
    <td>Whether the load balancer should treat this server as offline. Offline servers receive no incoming traffic.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer (int32)</code></td>
    <td>The communication port for the backend server.  Example: `8080` </td>
</tr>
<tr>
    <td><CopyableCode code="weight" /></td>
    <td><code>integer (int32)</code></td>
    <td>The load balancing policy weight assigned to the server. Backend servers with a higher weight receive a larger proportion of incoming traffic. For example, a server weighted '3' receives 3 times the number of new connections as a server weighted '1'. For more information on load balancing policies, see &#91;How Load Balancing Policies Work&#93;(/Content/Balance/Reference/lbpolicies.htm).  Example: `3` </td>
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
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-backendSetName"><code>backendSetName</code></a>, <a href="#parameter-backendName"><code>backendName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified backend server's configuration information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-backendSetName"><code>backendSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists the backend servers for a given load balancer and backend set.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-backendSetName"><code>backendSetName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ipAddress"><code>ipAddress</code></a>, <a href="#parameter-port"><code>port</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Adds a backend server to a backend set.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-backendSetName"><code>backendSetName</code></a>, <a href="#parameter-backendName"><code>backendName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-weight"><code>weight</code></a>, <a href="#parameter-backup"><code>backup</code></a>, <a href="#parameter-drain"><code>drain</code></a>, <a href="#parameter-offline"><code>offline</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Updates the configuration of a backend server within the specified backend set.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-backendSetName"><code>backendSetName</code></a>, <a href="#parameter-backendName"><code>backendName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Removes a backend server from a given load balancer and backend set.</td>
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
<tr id="parameter-backendName">
    <td><CopyableCode code="backendName" /></td>
    <td><code>string</code></td>
    <td>The IP address and port of the backend server to remove.  Example: `10.0.0.3:8080` </td>
</tr>
<tr id="parameter-backendSetName">
    <td><CopyableCode code="backendSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the backend set associated with the backend server.  Example: `example_backend_set` </td>
</tr>
<tr id="parameter-loadBalancerId">
    <td><CopyableCode code="loadBalancerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the load balancer associated with the backend set and server.</td>
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
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the specified backend server's configuration information.

```sql
SELECT
name,
backup,
drain,
ipAddress,
maxConnections,
offline,
port,
weight
FROM oci.load_balancer.backends
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
AND backendSetName = '{{ backendSetName }}' -- required
AND backendName = '{{ backendName }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the backend servers for a given load balancer and backend set.

```sql
SELECT
name,
backup,
drain,
ipAddress,
maxConnections,
offline,
port,
weight
FROM oci.load_balancer.backends
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
AND backendSetName = '{{ backendSetName }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Adds a backend server to a backend set.

```sql
INSERT INTO oci.load_balancer.backends (
backup,
drain,
ipAddress,
maxConnections,
offline,
port,
weight,
loadBalancerId,
backendSetName,
region,
opc-request-id,
opc-retry-token
)
SELECT 
{{ backup }},
{{ drain }},
'{{ ipAddress }}' /* required */,
{{ maxConnections }},
{{ offline }},
{{ port }} /* required */,
{{ weight }},
'{{ loadBalancerId }}',
'{{ backendSetName }}',
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backends
  props:
    - name: loadBalancerId
      value: "{{ loadBalancerId }}"
      description: Required parameter for the backends resource.
    - name: backendSetName
      value: "{{ backendSetName }}"
      description: Required parameter for the backends resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backends resource.
    - name: backup
      value: {{ backup }}
      description: |
        Whether the load balancer should treat this server as a backup unit. If \`true\`, the load balancer forwards no ingress
        traffic to this backend server unless all other backend servers not marked as "backup" fail the health check policy.
        **Note:** You cannot add a backend server marked as \`backup\` to a backend set that uses the IP Hash policy.
        Example: \`false\`
      default: false
    - name: drain
      value: {{ drain }}
      description: |
        Whether the load balancer should drain this server. Servers marked "drain" receive no new
        incoming traffic.
        Example: \`false\`
      default: false
    - name: ipAddress
      value: "{{ ipAddress }}"
      description: |
        The IP address of the backend server.
        Example: \`10.0.0.3\`
    - name: maxConnections
      value: {{ maxConnections }}
      description: |
        The maximum number of simultaneous connections the load balancer can make to the backend.
        If this is not set or set to 0 then the maximum number of simultaneous connections the
        load balancer can make to the backend is unlimited.
        If setting maxConnections to some value other than 0 then that value must be greater
        or equal to 256.
        Example: \`300\`
    - name: offline
      value: {{ offline }}
      description: |
        Whether the load balancer should treat this server as offline. Offline servers receive no incoming
        traffic.
        Example: \`false\`
      default: false
    - name: port
      value: {{ port }}
      description: |
        The communication port for the backend server.
        Example: \`8080\`
    - name: weight
      value: {{ weight }}
      description: |
        The load balancing policy weight assigned to the server. Backend servers with a higher weight receive a larger
        proportion of incoming traffic. For example, a server weighted '3' receives 3 times the number of new connections
        as a server weighted '1'.
        For more information on load balancing policies, see
        [How Load Balancing Policies Work](/Content/Balance/Reference/lbpolicies.htm).
        Example: \`3\`
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
`}</CodeBlock>

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

Updates the configuration of a backend server within the specified backend set.

```sql
UPDATE oci.load_balancer.backends
SET 
backup = {{ backup }},
drain = {{ drain }},
maxConnections = {{ maxConnections }},
offline = {{ offline }},
weight = {{ weight }}
WHERE 
loadBalancerId = '{{ loadBalancerId }}' --required
AND backendSetName = '{{ backendSetName }}' --required
AND backendName = '{{ backendName }}' --required
AND region = '{{ region }}' --required
AND weight = '{{ weight }}' --required
AND backup = {{ backup }} --required
AND drain = {{ drain }} --required
AND offline = {{ offline }} --required
AND opc-request-id = '{{ opc-request-id}}'
AND opc-retry-token = '{{ opc-retry-token}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Removes a backend server from a given load balancer and backend set.

```sql
DELETE FROM oci.load_balancer.backends
WHERE loadBalancerId = '{{ loadBalancerId }}' --required
AND backendSetName = '{{ backendSetName }}' --required
AND backendName = '{{ backendName }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
