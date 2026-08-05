--- 
title: flex_components
hide_title: false
hide_table_of_contents: false
keywords:
  - flex_components
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

Creates, updates, deletes, gets or lists a <code>flex_components</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flex_components" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.flex_components" /></td></tr>
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

Supported DB system flex Components for a given DB System shape.

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
    <td>The name of the Flex Component used for the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="availableCoreCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of CPU cores that can ben enabled on the DB Server for this Flex Component.</td>
</tr>
<tr>
    <td><CopyableCode code="availableDbStorageInGBs" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum  storage that can be enabled on the Storage Server for this Flex Component.</td>
</tr>
<tr>
    <td><CopyableCode code="availableLocalStorageInGBs" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum local storage that can be enabled on the DB Server for this Flex Component.</td>
</tr>
<tr>
    <td><CopyableCode code="availableMemoryInGBs" /></td>
    <td><code>integer</code></td>
    <td>The maximum memory size that can be enabled on the DB Server for this Flex Component.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the DB Server for this Flex Component.</td>
</tr>
<tr>
    <td><CopyableCode code="descriptionSummary" /></td>
    <td><code>string</code></td>
    <td>The description summary for this Flex Component.</td>
</tr>
<tr>
    <td><CopyableCode code="hardwareType" /></td>
    <td><code>string</code></td>
    <td>The hardware type of the DB (Compute) or Storage (Cell) Server for this Flex Component. (COMPUTE, CELL)</td>
</tr>
<tr>
    <td><CopyableCode code="minimumCoreCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The minimum number of CPU cores that can be enabled on the DB Server for this Flex Component.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeMinimumCoreCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The runtime minimum number of CPU cores that can be enabled for this Flex Component.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The name of the DB system shape for this Flex Component.</td>
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
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-shape"><code>shape</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Gets a list of the flex components that can be used to launch a new DB system. The flex component determines resources to allocate to the DB system - Database Servers and Storage Servers.</td>
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
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return per page.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the entire name given. The match is not case sensitive.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token to continue listing from.</td>
</tr>
<tr id="parameter-shape">
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that belong to the entire shape name given. The match is not case sensitive.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for NAME is ascending. The NAME sort order is case sensitive. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`).</td>
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

Gets a list of the flex components that can be used to launch a new DB system. The flex component determines resources to allocate to the DB system - Database Servers and Storage Servers.

```sql
SELECT
name,
availableCoreCount,
availableDbStorageInGBs,
availableLocalStorageInGBs,
availableMemoryInGBs,
computeModel,
descriptionSummary,
hardwareType,
minimumCoreCount,
runtimeMinimumCoreCount,
shape
FROM oci.database.flex_components
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND name = '{{ name }}'
AND shape = '{{ shape }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
