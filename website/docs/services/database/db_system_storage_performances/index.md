--- 
title: db_system_storage_performances
hide_title: false
hide_table_of_contents: false
keywords:
  - db_system_storage_performances
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

Creates, updates, deletes, gets or lists a <code>db_system_storage_performances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_system_storage_performances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.db_system_storage_performances" /></td></tr>
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

Representation of storage performance summary per shapeType .&lt;br /&gt;

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
    <td><CopyableCode code="dataStoragePerformanceList" /></td>
    <td><code>array</code></td>
    <td>List of storage performance for the DATA disks</td>
</tr>
<tr>
    <td><CopyableCode code="recoStoragePerformanceList" /></td>
    <td><code>array</code></td>
    <td>List of storage performance for the RECO disks</td>
</tr>
<tr>
    <td><CopyableCode code="shapeType" /></td>
    <td><code>string</code></td>
    <td>ShapeType of the DbSystems INTEL , AMD, INTEL_FLEX_X9 or AMPERE_FLEX_A1 (AMD, INTEL, INTEL_FLEX_X9, AMPERE_FLEX_A1)</td>
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
    <td><a href="#parameter-storageManagement"><code>storageManagement</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-shapeType"><code>shapeType</code></a>, <a href="#parameter-databaseEdition"><code>databaseEdition</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets a list of possible expected storage performance parameters of a VMDB System based on Configuration.&lt;br /&gt;</td>
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
<tr id="parameter-storageManagement">
    <td><CopyableCode code="storageManagement" /></td>
    <td><code>string</code></td>
    <td>The DB system storage management option. Used to list database versions available for that storage manager. Valid values are `ASM` and `LVM`. * ASM specifies Oracle Automatic Storage Management * LVM specifies logical volume manager, sometimes called logical disk manager. </td>
</tr>
<tr id="parameter-databaseEdition">
    <td><CopyableCode code="databaseEdition" /></td>
    <td><code>string</code></td>
    <td>The database edition of quota (STANDARD_EDITION/ENTERPRISE_EDITION/ENTERPRISE_EDITION_HIGH_PERFORMANCE/ENTERPRISE_EDITION_EXTREME_PERFORMANCE/ENTERPRISE_EDITION_DEVELOPER)</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. </td>
</tr>
<tr id="parameter-shapeType">
    <td><CopyableCode code="shapeType" /></td>
    <td><code>string</code></td>
    <td>Optional. Filters the performance results by shape type.</td>
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

Gets a list of possible expected storage performance parameters of a VMDB System based on Configuration.&lt;br /&gt;

```sql
SELECT
dataStoragePerformanceList,
recoStoragePerformanceList,
shapeType
FROM oci.database.db_system_storage_performances
WHERE storageManagement = '{{ storageManagement }}' -- required
AND region = '{{ region }}' -- required
AND shapeType = '{{ shapeType }}'
AND databaseEdition = '{{ databaseEdition }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
