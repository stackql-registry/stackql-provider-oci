--- 
title: vm_cluster_patches
hide_title: false
hide_table_of_contents: false
keywords:
  - vm_cluster_patches
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

Creates, updates, deletes, gets or lists a <code>vm_cluster_patches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vm_cluster_patches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.vm_cluster_patches" /></td></tr>
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

The patch package.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the patch.</td>
</tr>
<tr>
    <td><CopyableCode code="availableActions" /></td>
    <td><code>array</code></td>
    <td>Actions that can possibly be performed using this patch.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The text describing this patch package.</td>
</tr>
<tr>
    <td><CopyableCode code="lastAction" /></td>
    <td><code>string</code></td>
    <td>Action that is currently being performed or was completed last. (APPLY, PRECHECK)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>A descriptive text associated with the lifecycleState. Typically can contain additional displayable text. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the patch as a result of lastAction. (AVAILABLE, SUCCESS, IN_PROGRESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeReleased" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the patch was released.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of this patch package.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A Patch for a DB system or DB Home.&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access,&lt;br /&gt;see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the patch.</td>
</tr>
<tr>
    <td><CopyableCode code="availableActions" /></td>
    <td><code>array</code></td>
    <td>Actions that can possibly be performed using this patch.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The text describing this patch package.</td>
</tr>
<tr>
    <td><CopyableCode code="lastAction" /></td>
    <td><code>string</code></td>
    <td>Action that is currently being performed or was completed last. (APPLY, PRECHECK)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>A descriptive text associated with the lifecycleState. Typically can contain additional displayable text. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the patch as a result of lastAction. (AVAILABLE, SUCCESS, IN_PROGRESS, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeReleased" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the patch was released.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of this patch package.</td>
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
    <td><a href="#parameter-vmClusterId"><code>vmClusterId</code></a>, <a href="#parameter-patchId"><code>patchId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specified patch package.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-vmClusterId"><code>vmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the patches applicable to the specified VM cluster in an Exadata Cloud@Customer system.&lt;br /&gt;</td>
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
<tr id="parameter-patchId">
    <td><CopyableCode code="patchId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the patch.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-vmClusterId">
    <td><CopyableCode code="vmClusterId" /></td>
    <td><code>string</code></td>
    <td>The VM cluster &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return per page.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token to continue listing from.</td>
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

Gets information about a specified patch package.&lt;br /&gt;

```sql
SELECT
id,
availableActions,
description,
lastAction,
lifecycleDetails,
lifecycleState,
timeReleased,
version
FROM oci.database.vm_cluster_patches
WHERE vmClusterId = '{{ vmClusterId }}' -- required
AND patchId = '{{ patchId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the patches applicable to the specified VM cluster in an Exadata Cloud@Customer system.&lt;br /&gt;

```sql
SELECT
id,
availableActions,
description,
lastAction,
lifecycleDetails,
lifecycleState,
timeReleased,
version
FROM oci.database.vm_cluster_patches
WHERE vmClusterId = '{{ vmClusterId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
