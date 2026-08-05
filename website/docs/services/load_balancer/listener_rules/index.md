--- 
title: listener_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - listener_rules
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

Creates, updates, deletes, gets or lists a <code>listener_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="listener_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.load_balancer.listener_rules" /></td></tr>
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

The attributes of a rule associated with the specified listener, and the name of the rule set that the rule&lt;br /&gt;belongs to.&lt;br /&gt;

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
    <td><CopyableCode code="rule" /></td>
    <td><code>object</code></td>
    <td>An object that represents an action to apply to a listener. (x-example: &#123;&lt;br /&gt;  "action": "ADD_HTTP_REQUEST_HEADER",&lt;br /&gt;  "header": "example_header_name",&lt;br /&gt;  "value": "example_value"&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ruleSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the rule set that the rule belongs to.  (example: example_rule_set)</td>
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
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-listenerName"><code>listenerName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists all of the rules from all of the rule sets associated with the specified listener. The response organizes&lt;br /&gt;the rules in the following order:&lt;br /&gt;&lt;br /&gt;*  Access control rules&lt;br /&gt;*  Allow method rules&lt;br /&gt;*  Request header rules&lt;br /&gt;*  Response header rules&lt;br /&gt;</td>
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
<tr id="parameter-listenerName">
    <td><CopyableCode code="listenerName" /></td>
    <td><code>string</code></td>
    <td>The name of the listener the rules are associated with. Example: `example_listener` </td>
</tr>
<tr id="parameter-loadBalancerId">
    <td><CopyableCode code="loadBalancerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the load balancer associated with the listener.</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists all of the rules from all of the rule sets associated with the specified listener. The response organizes&lt;br /&gt;the rules in the following order:&lt;br /&gt;&lt;br /&gt;*  Access control rules&lt;br /&gt;*  Allow method rules&lt;br /&gt;*  Request header rules&lt;br /&gt;*  Response header rules&lt;br /&gt;

```sql
SELECT
rule,
ruleSetName
FROM oci.load_balancer.listener_rules
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
AND listenerName = '{{ listenerName }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
