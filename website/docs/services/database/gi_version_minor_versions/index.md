--- 
title: gi_version_minor_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - gi_version_minor_versions
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

Creates, updates, deletes, gets or lists a <code>gi_version_minor_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gi_version_minor_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.gi_version_minor_versions" /></td></tr>
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

The Oracle Grid Infrastructure (GI) minor version.&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td><CopyableCode code="gridImageId" /></td>
    <td><code>string</code></td>
    <td>Grid Infrastructure Image Id</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Grid Infrastructure (GI) software version.</td>
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
    <td><a href="#parameter-version"><code>version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-shapeFamily"><code>shapeFamily</code></a>, <a href="#parameter-isGiVersionForProvisioning"><code>isGiVersionForProvisioning</code></a>, <a href="#parameter-shape"><code>shape</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Gets a list of supported Oracle Grid Infrastructure minor versions for the given major version and shape family.</td>
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
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The Oracle Grid Infrastructure major version.</td>
</tr>
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The target availability domain. Only passed if the limit is AD-specific.</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-isGiVersionForProvisioning">
    <td><CopyableCode code="isGiVersionForProvisioning" /></td>
    <td><code>boolean</code></td>
    <td>If true, returns the Grid Infrastructure versions that can be used for provisioning a cluster</td>
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
<tr id="parameter-shape">
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>If provided, filters the results for the given shape.</td>
</tr>
<tr id="parameter-shapeFamily">
    <td><CopyableCode code="shapeFamily" /></td>
    <td><code>string</code></td>
    <td>If provided, filters the results to the set of database versions which are supported for the given shape family.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>Sort by VERSION.  Default order for VERSION is descending.</td>
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

Gets a list of supported Oracle Grid Infrastructure minor versions for the given major version and shape family.

```sql
SELECT
gridImageId,
version
FROM oci.database.gi_version_minor_versions
WHERE version = '{{ version }}' -- required
AND region = '{{ region }}' -- required
AND availabilityDomain = '{{ availabilityDomain }}'
AND compartmentId = '{{ compartmentId }}'
AND opc-request-id = '{{ opc-request-id }}'
AND shapeFamily = '{{ shapeFamily }}'
AND isGiVersionForProvisioning = '{{ isGiVersionForProvisioning }}'
AND shape = '{{ shape }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
