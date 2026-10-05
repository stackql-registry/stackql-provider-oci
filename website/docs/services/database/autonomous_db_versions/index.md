--- 
title: autonomous_db_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_db_versions
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

Creates, updates, deletes, gets or lists an <code>autonomous_db_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_db_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.autonomous_db_versions" /></td></tr>
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

The supported Autonomous AI Database version.&lt;br /&gt;

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
    <td><CopyableCode code="dbWorkload" /></td>
    <td><code>string</code></td>
    <td>The Autonomous AI Database workload type. The following values are valid: - OLTP - indicates an Autonomous AI Transaction Processing database - DW - indicates an Autonomous AI Lakehouse database - AJD - indicates an Autonomous AI JSON Database - APEX - indicates an Autonomous AI Database with the Oracle APEX AI Application Development workload type. - LH - indicates an Oracle Autonomous AI Lakehouse database  **Note** Starting December 2026, DW will not be supported as a valid value for this parameter. When creating an Autonomous AI Database, if this parameter is not specified, the default value is `OLTP`.   This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.  (OLTP, DW, AJD, APEX, LH)</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>string</code></td>
    <td>A URL that points to a detailed description of the Autonomous AI Database version.</td>
</tr>
<tr>
    <td><CopyableCode code="isDedicated" /></td>
    <td><code>boolean</code></td>
    <td>True if the database uses &#91;dedicated Exadata infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html). </td>
</tr>
<tr>
    <td><CopyableCode code="isDefaultForFree" /></td>
    <td><code>boolean</code></td>
    <td>True if this version of the Oracle AI Database software's default is free.</td>
</tr>
<tr>
    <td><CopyableCode code="isDefaultForPaid" /></td>
    <td><code>boolean</code></td>
    <td>True if this version of the Oracle AI Database software's default is paid.</td>
</tr>
<tr>
    <td><CopyableCode code="isFreeTierEnabled" /></td>
    <td><code>boolean</code></td>
    <td>True if this version of the Oracle AI Database software can be used for Always-Free Autonomous AI Databases.</td>
</tr>
<tr>
    <td><CopyableCode code="isPaidEnabled" /></td>
    <td><code>boolean</code></td>
    <td>True if this version of the Oracle AI Database software has payments enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle AI Database version for Autonomous AI Database. When you specify 23ai for dbversion, the system will provision a 23ai database, but the UI will display it as 26ai. When you specify 26ai for dbversion, the system will provision and display a 26ai database as expected. For new databases, it is recommended to use either 19c or 26ai.  **Note** Starting December 2026, 23ai will not be supported as a valid value for this parameter. </td>
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
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-dbWorkload"><code>dbWorkload</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Gets a list of supported Autonomous AI Database versions.</td>
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
<tr id="parameter-dbWorkload">
    <td><CopyableCode code="dbWorkload" /></td>
    <td><code>string</code></td>
    <td>A filter to return only Autonomous AI Database resources that match the specified workload type.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return per page.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token to continue listing from.</td>
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

Gets a list of supported Autonomous AI Database versions.

```sql
SELECT
dbWorkload,
details,
isDedicated,
isDefaultForFree,
isDefaultForPaid,
isFreeTierEnabled,
isPaidEnabled,
version
FROM oci.database.autonomous_db_versions
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND dbWorkload = '{{ dbWorkload }}'
AND sortOrder = '{{ sortOrder }}'
;
```
</TabItem>
</Tabs>
