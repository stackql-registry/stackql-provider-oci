--- 
title: hostnames
hide_title: false
hide_table_of_contents: false
keywords:
  - hostnames
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

Creates, updates, deletes, gets or lists a <code>hostnames</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hostnames" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.load_balancer.hostnames" /></td></tr>
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

The hostname information is being retrieved.

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
    <td>A friendly name for the hostname resource. It must be unique and it cannot be changed. Avoid entering confidential information.  Example: `example_hostname_001` </td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>A virtual hostname. For more information about virtual hostname string construction, see &#91;Managing Request Routing&#93;(/Content/Balance/Tasks/managingrequest.htm#routing).  Example: `app.example.com` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A hostname resource associated with a load balancer for use by one or more listeners.&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>A friendly name for the hostname resource. It must be unique and it cannot be changed. Avoid entering confidential information.  Example: `example_hostname_001` </td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>A virtual hostname. For more information about virtual hostname string construction, see &#91;Managing Request Routing&#93;(/Content/Balance/Tasks/managingrequest.htm#routing).  Example: `app.example.com` </td>
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
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified hostname resource's configuration information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists all hostname resources associated with the specified load balancer.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-hostname"><code>hostname</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Adds a hostname resource to the specified load balancer. For more information, see&lt;br /&gt;&#91;Managing Request Routing&#93;(/Content/Balance/Tasks/managingrequest.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Overwrites an existing hostname resource on the specified load balancer. Use this operation to change a&lt;br /&gt;virtual hostname.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes a hostname resource from the specified load balancer.&lt;br /&gt;</td>
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
<tr id="parameter-loadBalancerId">
    <td><CopyableCode code="loadBalancerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the load balancer associated with the hostname to delete.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the hostname resource to delete.  Example: `example_hostname_001` </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
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

Gets the specified hostname resource's configuration information.

```sql
SELECT
name,
hostname
FROM oci.load_balancer.hostnames
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists all hostname resources associated with the specified load balancer.

```sql
SELECT
name,
hostname
FROM oci.load_balancer.hostnames
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
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

Adds a hostname resource to the specified load balancer. For more information, see&lt;br /&gt;&#91;Managing Request Routing&#93;(/Content/Balance/Tasks/managingrequest.htm).&lt;br /&gt;

```sql
INSERT INTO oci.load_balancer.hostnames (
hostname,
name,
loadBalancerId,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ hostname }}' /* required */,
'{{ name }}' /* required */,
'{{ loadBalancerId }}',
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hostnames
  props:
    - name: loadBalancerId
      value: "{{ loadBalancerId }}"
      description: Required parameter for the hostnames resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hostnames resource.
    - name: hostname
      value: "{{ hostname }}"
      description: |
        A virtual hostname. For more information about virtual hostname string construction, see
        [Managing Request Routing](/Content/Balance/Tasks/managingrequest.htm#routing).
        Example: \`app.example.com\`
    - name: name
      value: "{{ name }}"
      description: |
        A friendly name for the hostname resource. It must be unique and it cannot be changed. Avoid entering confidential
        information.
        Example: \`example_hostname_001\`
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

Overwrites an existing hostname resource on the specified load balancer. Use this operation to change a&lt;br /&gt;virtual hostname.&lt;br /&gt;

```sql
UPDATE oci.load_balancer.hostnames
SET 
hostname = '{{ hostname }}'
WHERE 
loadBalancerId = '{{ loadBalancerId }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
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

Deletes a hostname resource from the specified load balancer.&lt;br /&gt;

```sql
DELETE FROM oci.load_balancer.hostnames
WHERE loadBalancerId = '{{ loadBalancerId }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
