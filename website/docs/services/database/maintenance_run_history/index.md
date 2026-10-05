--- 
title: maintenance_run_history
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_run_history
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

Creates, updates, deletes, gets or lists a <code>maintenance_run_history</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maintenance_run_history" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.maintenance_run_history" /></td></tr>
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

Details of a maintenance run history.

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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-targetResourceId"><code>targetResourceId</code></a>, <a href="#parameter-targetResourceType"><code>targetResourceType</code></a>, <a href="#parameter-maintenanceType"><code>maintenanceType</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-maintenanceSubtype"><code>maintenanceSubtype</code></a></td>
    <td>Gets a list of the maintenance run histories in the specified compartment.&lt;br /&gt;</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given availability domain exactly.</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The state of the maintenance run history.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return per page.</td>
</tr>
<tr id="parameter-maintenanceSubtype">
    <td><CopyableCode code="maintenanceSubtype" /></td>
    <td><code>string</code></td>
    <td>The sub-type of the maintenance run.</td>
</tr>
<tr id="parameter-maintenanceType">
    <td><CopyableCode code="maintenanceType" /></td>
    <td><code>string</code></td>
    <td>The maintenance type.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token to continue listing from.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIME_SCHEDULED and TIME_ENDED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** If you do not include the availability domain filter, the resources are grouped by availability domain, then sorted. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`).</td>
</tr>
<tr id="parameter-targetResourceId">
    <td><CopyableCode code="targetResourceId" /></td>
    <td><code>string</code></td>
    <td>The target resource ID.</td>
</tr>
<tr id="parameter-targetResourceType">
    <td><CopyableCode code="targetResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the target resource.</td>
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

Gets a list of the maintenance run histories in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
dbServersHistoryDetails,
granularMaintenanceHistory,
maintenanceRunDetails,
systemTags
FROM oci.database.maintenance_run_history
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND targetResourceId = '{{ targetResourceId }}'
AND targetResourceType = '{{ targetResourceType }}'
AND maintenanceType = '{{ maintenanceType }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND availabilityDomain = '{{ availabilityDomain }}'
AND maintenanceSubtype = '{{ maintenanceSubtype }}'
;
```
</TabItem>
</Tabs>
