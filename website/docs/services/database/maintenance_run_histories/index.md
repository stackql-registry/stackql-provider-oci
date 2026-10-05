--- 
title: maintenance_run_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_run_histories
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

Creates, updates, deletes, gets or lists a <code>maintenance_run_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maintenance_run_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.maintenance_run_histories" /></td></tr>
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

Information about the specified maintenance run history.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The OCID of the maintenance run history.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServersHistoryDetails" /></td>
    <td><code>array</code></td>
    <td>List of database server history details.</td>
</tr>
<tr>
    <td><CopyableCode code="granularMaintenanceHistory" /></td>
    <td><code>array</code></td>
    <td>The list of granular maintenance history details.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceRunDetails" /></td>
    <td><code>object</code></td>
    <td>Details of a maintenance run. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
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
    <td><a href="#parameter-maintenanceRunHistoryId"><code>maintenanceRunHistoryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified maintenance run history.</td>
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
<tr id="parameter-maintenanceRunHistoryId">
    <td><CopyableCode code="maintenanceRunHistoryId" /></td>
    <td><code>string</code></td>
    <td>The maintenance run history OCID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
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

Gets information about the specified maintenance run history.

```sql
SELECT
id,
dbServersHistoryDetails,
granularMaintenanceHistory,
maintenanceRunDetails,
systemTags
FROM oci.database.maintenance_run_histories
WHERE maintenanceRunHistoryId = '{{ maintenanceRunHistoryId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
