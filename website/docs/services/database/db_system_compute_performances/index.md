--- 
title: db_system_compute_performances
hide_title: false
hide_table_of_contents: false
keywords:
  - db_system_compute_performances
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

Creates, updates, deletes, gets or lists a <code>db_system_compute_performances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_system_compute_performances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.db_system_compute_performances" /></td></tr>
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

Representation of disk performance detail parameters.&lt;br /&gt;

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
    <td><CopyableCode code="computePerformanceList" /></td>
    <td><code>array</code></td>
    <td>List of Compute performance details for the specified DB system shape.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the DB system.</td>
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
    <td><a href="#parameter-dbSystemShape"><code>dbSystemShape</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td>Gets a list of expected compute performance parameters for a virtual machine DB system based on system configuration. Adding compartmentId does not affect results.&lt;br /&gt;</td>
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
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-dbSystemShape">
    <td><CopyableCode code="dbSystemShape" /></td>
    <td><code>string</code></td>
    <td>If provided, filters the results to the set of database versions which are supported for the given shape.</td>
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

Gets a list of expected compute performance parameters for a virtual machine DB system based on system configuration. Adding compartmentId does not affect results.&lt;br /&gt;

```sql
SELECT
computePerformanceList,
shape
FROM oci.database.db_system_compute_performances
WHERE region = '{{ region }}' -- required
AND dbSystemShape = '{{ dbSystemShape }}'
AND opc-request-id = '{{ opc-request-id }}'
AND compartmentId = '{{ compartmentId }}'
;
```
</TabItem>
</Tabs>
