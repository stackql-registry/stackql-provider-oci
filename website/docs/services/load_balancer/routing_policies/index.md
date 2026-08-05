--- 
title: routing_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - routing_policies
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

Creates, updates, deletes, gets or lists a <code>routing_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="routing_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.load_balancer.routing_policies" /></td></tr>
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

The routing policy requested.

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
    <td>The unique name for this list of routing rules. Avoid entering confidential information.  Example: `example_routing_policy`  (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="conditionLanguageVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the language in which `condition` of `rules` are composed.  (V1)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>The ordered list of routing rules.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A named ordered list of routing rules that is applied to a listener.&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>The unique name for this list of routing rules. Avoid entering confidential information.  Example: `example_routing_policy`  (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="conditionLanguageVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the language in which `condition` of `rules` are composed.  (V1)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>The ordered list of routing rules.</td>
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
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-routingPolicyName"><code>routingPolicyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified routing policy.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all routing policies associated with the specified load balancer.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-conditionLanguageVersion"><code>conditionLanguageVersion</code></a>, <a href="#parameter-rules"><code>rules</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Adds a routing policy to a load balancer. For more information, see&lt;br /&gt;&#91;Managing Request Routing&#93;(/Content/Balance/Tasks/managingrequest.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-routingPolicyName"><code>routingPolicyName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-rules"><code>rules</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Overwrites an existing routing policy on the specified load balancer. Use this operation to add, delete, or alter&lt;br /&gt;routing policy rules in a routing policy.&lt;br /&gt;&lt;br /&gt;To add a new routing rule to a routing policy, the body must include both the new routing rule to add and the existing rules to retain.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-routingPolicyName"><code>routingPolicyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes a routing policy from the specified load balancer.&lt;br /&gt;&lt;br /&gt;To delete a routing rule from a routing policy, use the&lt;br /&gt;&#91;UpdateRoutingPolicy&#93;(#/en/loadbalancer/20170115/RoutingPolicies/UpdateRoutingPolicy) operation.&lt;br /&gt;</td>
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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the load balancer associated with the routing policy to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-routingPolicyName">
    <td><CopyableCode code="routingPolicyName" /></td>
    <td><code>string</code></td>
    <td>The name of the routing policy to delete.  Example: `example_routing_policy` </td>
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
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
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

Gets the specified routing policy.

```sql
SELECT
name,
conditionLanguageVersion,
rules
FROM oci.load_balancer.routing_policies
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
AND routingPolicyName = '{{ routingPolicyName }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists all routing policies associated with the specified load balancer.

```sql
SELECT
name,
conditionLanguageVersion,
rules
FROM oci.load_balancer.routing_policies
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
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

Adds a routing policy to a load balancer. For more information, see&lt;br /&gt;&#91;Managing Request Routing&#93;(/Content/Balance/Tasks/managingrequest.htm).&lt;br /&gt;

```sql
INSERT INTO oci.load_balancer.routing_policies (
conditionLanguageVersion,
name,
rules,
loadBalancerId,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ conditionLanguageVersion }}' /* required */,
'{{ name }}' /* required */,
'{{ rules }}' /* required */,
'{{ loadBalancerId }}',
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: routing_policies
  props:
    - name: loadBalancerId
      value: "{{ loadBalancerId }}"
      description: Required parameter for the routing_policies resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the routing_policies resource.
    - name: conditionLanguageVersion
      value: "{{ conditionLanguageVersion }}"
      description: |
        The version of the language in which \`condition\` of \`rules\` are composed.
      valid_values: ['V1']
    - name: name
      value: "{{ name }}"
      description: |
        The name for this list of routing rules. It must be unique and it cannot be changed. Avoid entering
        confidential information.
        Example: \`example_routing_rules\`
    - name: rules
      description: |
        The list of routing rules.
      value:
        - actions: "{{ actions }}"
          condition: "{{ condition }}"
          name: "{{ name }}"
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

Overwrites an existing routing policy on the specified load balancer. Use this operation to add, delete, or alter&lt;br /&gt;routing policy rules in a routing policy.&lt;br /&gt;&lt;br /&gt;To add a new routing rule to a routing policy, the body must include both the new routing rule to add and the existing rules to retain.&lt;br /&gt;

```sql
UPDATE oci.load_balancer.routing_policies
SET 
conditionLanguageVersion = '{{ conditionLanguageVersion }}',
rules = '{{ rules }}'
WHERE 
loadBalancerId = '{{ loadBalancerId }}' --required
AND routingPolicyName = '{{ routingPolicyName }}' --required
AND region = '{{ region }}' --required
AND rules = '{{ rules }}' --required
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

Deletes a routing policy from the specified load balancer.&lt;br /&gt;&lt;br /&gt;To delete a routing rule from a routing policy, use the&lt;br /&gt;&#91;UpdateRoutingPolicy&#93;(#/en/loadbalancer/20170115/RoutingPolicies/UpdateRoutingPolicy) operation.&lt;br /&gt;

```sql
DELETE FROM oci.load_balancer.routing_policies
WHERE loadBalancerId = '{{ loadBalancerId }}' --required
AND routingPolicyName = '{{ routingPolicyName }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
