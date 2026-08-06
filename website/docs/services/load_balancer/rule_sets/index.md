--- 
title: rule_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - rule_sets
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

Creates, updates, deletes, gets or lists a <code>rule_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rule_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.load_balancer.rule_sets" /></td></tr>
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

The rule set is being retrieved.

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
    <td>The name for this set of rules. It must be unique and it cannot be changed. Avoid entering confidential information.  Example: `example_rule_set` </td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>An array of rules that compose the rule set.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A named set of rules associated with a load balancer. Rules are objects that represent actions to apply to a listener,&lt;br /&gt;such as adding, altering, or removing HTTP headers. For more information, see&lt;br /&gt;&#91;Managing Rule Sets&#93;(/Content/Balance/Tasks/managingrulesets.htm).&lt;br /&gt;

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
    <td>The name for this set of rules. It must be unique and it cannot be changed. Avoid entering confidential information.  Example: `example_rule_set` </td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>An array of rules that compose the rule set.</td>
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
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-ruleSetName"><code>ruleSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified set of rules.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists all rule sets associated with the specified load balancer.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-items"><code>items</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new rule set associated with the specified load balancer. For more information, see&lt;br /&gt;&#91;Managing Rule Sets&#93;(/Content/Balance/Tasks/managingrulesets.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-ruleSetName"><code>ruleSetName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-items"><code>items</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Overwrites an existing set of rules on the specified load balancer. Use this operation to add or alter&lt;br /&gt;the rules in a rule set.&lt;br /&gt;&lt;br /&gt;To add a new rule to a set, the body must include both the new rule to add and the existing rules to retain.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-ruleSetName"><code>ruleSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes a rule set from the specified load balancer.&lt;br /&gt;&lt;br /&gt;To delete a rule from a rule set, use the&lt;br /&gt;&#91;UpdateRuleSet&#93;(#/en/loadbalancer/20170115/RuleSet/UpdateRuleSet) operation.&lt;br /&gt;</td>
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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the specified load balancer.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-ruleSetName">
    <td><CopyableCode code="ruleSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the rule set to delete.  Example: `example_rule_set` </td>
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

Gets the specified set of rules.

```sql
SELECT
name,
items
FROM oci.load_balancer.rule_sets
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
AND ruleSetName = '{{ ruleSetName }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists all rule sets associated with the specified load balancer.

```sql
SELECT
name,
items
FROM oci.load_balancer.rule_sets
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

Creates a new rule set associated with the specified load balancer. For more information, see&lt;br /&gt;&#91;Managing Rule Sets&#93;(/Content/Balance/Tasks/managingrulesets.htm).&lt;br /&gt;

```sql
INSERT INTO oci.load_balancer.rule_sets (
items,
name,
loadBalancerId,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ items }}' /* required */,
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
- name: rule_sets
  props:
    - name: loadBalancerId
      value: "{{ loadBalancerId }}"
      description: Required parameter for the rule_sets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the rule_sets resource.
    - name: items
      description: |
        An array of rules that compose the rule set.
      value:
        - action: "{{ action }}"
    - name: name
      value: "{{ name }}"
      description: |
        The name for this set of rules. It must be unique and it cannot be changed. Avoid entering
        confidential information.
        Example: \`example_rule_set\`
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

Overwrites an existing set of rules on the specified load balancer. Use this operation to add or alter&lt;br /&gt;the rules in a rule set.&lt;br /&gt;&lt;br /&gt;To add a new rule to a set, the body must include both the new rule to add and the existing rules to retain.&lt;br /&gt;

```sql
UPDATE oci.load_balancer.rule_sets
SET 
items = '{{ items }}'
WHERE 
loadBalancerId = '{{ loadBalancerId }}' --required
AND ruleSetName = '{{ ruleSetName }}' --required
AND region = '{{ region }}' --required
AND items = '{{ items }}' --required
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

Deletes a rule set from the specified load balancer.&lt;br /&gt;&lt;br /&gt;To delete a rule from a rule set, use the&lt;br /&gt;&#91;UpdateRuleSet&#93;(#/en/loadbalancer/20170115/RuleSet/UpdateRuleSet) operation.&lt;br /&gt;

```sql
DELETE FROM oci.load_balancer.rule_sets
WHERE loadBalancerId = '{{ loadBalancerId }}' --required
AND ruleSetName = '{{ ruleSetName }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
