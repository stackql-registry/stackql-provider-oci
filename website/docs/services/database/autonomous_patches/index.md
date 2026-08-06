--- 
title: autonomous_patches
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_patches
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

Creates, updates, deletes, gets or lists an <code>autonomous_patches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_patches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.autonomous_patches" /></td></tr>
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

The autonomous patch details.

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
    <td><CopyableCode code="autonomousPatchType" /></td>
    <td><code>string</code></td>
    <td>Maintenance run type, either "QUARTERLY" or "TIMEZONE".  (QUARTERLY, TIMEZONE) (default: QUARTERLY)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The text describing this patch package.</td>
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
    <td><CopyableCode code="patchModel" /></td>
    <td><code>string</code></td>
    <td>Database patching model preference. See &#91;My Oracle Support note 2285040.1&#93;(https:​//support.oracle.com/rs?type=doc&id=2285040.1) for information on the Release Update (RU) and Release Update Revision (RUR) patching models. (RELEASE_UPDATES, RELEASE_UPDATE_REVISIONS)</td>
</tr>
<tr>
    <td><CopyableCode code="quarter" /></td>
    <td><code>string</code></td>
    <td>First month of the quarter in which the patch was released.</td>
</tr>
<tr>
    <td><CopyableCode code="timeReleased" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the patch was released.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of patch. BUNDLE is one example.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of this patch package.</td>
</tr>
<tr>
    <td><CopyableCode code="year" /></td>
    <td><code>string</code></td>
    <td>Year in which the patch was released.</td>
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
    <td><a href="#parameter-autonomousPatchId"><code>autonomousPatchId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specific autonomous patch.</td>
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
<tr id="parameter-autonomousPatchId">
    <td><CopyableCode code="autonomousPatchId" /></td>
    <td><code>string</code></td>
    <td>The autonomous patch &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
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

Gets information about a specific autonomous patch.

```sql
SELECT
id,
autonomousPatchType,
description,
lifecycleDetails,
lifecycleState,
patchModel,
quarter,
timeReleased,
type,
version,
year
FROM oci.database.autonomous_patches
WHERE autonomousPatchId = '{{ autonomousPatchId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
