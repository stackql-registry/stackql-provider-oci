--- 
title: autonomous_database_character_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_database_character_sets
  - database
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

Creates, updates, deletes, gets or lists an <code>autonomous_database_character_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_database_character_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.autonomous_database_character_sets" /></td></tr>
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

The Oracle Autonomous AI Database supported character sets.&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>A valid Oracle character set.</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-isShared"><code>isShared</code></a>, <a href="#parameter-isDedicated"><code>isDedicated</code></a>, <a href="#parameter-characterSetType"><code>characterSetType</code></a></td>
    <td>Gets a list of supported character sets.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-characterSetType">
    <td><CopyableCode code="characterSetType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether this request pertains to database character sets or national character sets. </td>
</tr>
<tr id="parameter-isDedicated">
    <td><CopyableCode code="isDedicated" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the request is for an Autonomous AI Database Dedicated instance. The default request is for an Autonomous AI Database Dedicated instance. </td>
</tr>
<tr id="parameter-isShared">
    <td><CopyableCode code="isShared" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether this request is for an Autonomous AI Database Serverless instance. By default, this request will be for Autonomous AI Database on Dedicated Exadata Infrastructure. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. </td>
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

Gets a list of supported character sets.

```sql
SELECT
name
FROM oci.database.autonomous_database_character_sets
WHERE region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND isShared = '{{ isShared }}'
AND isDedicated = '{{ isDedicated }}'
AND characterSetType = '{{ characterSetType }}'
;
```
</TabItem>
</Tabs>
