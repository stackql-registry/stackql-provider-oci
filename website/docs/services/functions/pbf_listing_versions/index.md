--- 
title: pbf_listing_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - pbf_listing_versions
  - functions
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

Creates, updates, deletes, gets or lists a <code>pbf_listing_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pbf_listing_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.functions.pbf_listing_versions" /></td></tr>
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

Retrieves the PbfListingVersion for the given PbfListing id and version.

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
    <td>Unique identifier that is immutable on creation (example: ocid1.pbflistingversion.oc1.iad.aaaaaaaal3dkjeliven6l7kw3kiwlkbqjtfhdra6fly7uqekgmuef6forplq)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Semantic version (example: 0.0.1)</td>
</tr>
<tr>
    <td><CopyableCode code="changeSummary" /></td>
    <td><code>string</code></td>
    <td>Details changes are included in this version. (example: First release of the PBF.&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>array</code></td>
    <td>Details about the required and optional Function configurations needed for proper performance of the PBF.  (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. Example: `&#123;"foo-namespace": &#123;"bar-key": "value"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only. Example: `&#123;"bar-key": "value"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the PBF resource. (ACTIVE, INACTIVE, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="pbfListingId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the PbfListing this resource version belongs to. (example: ocid1.pbflisting.oc1.iad.aaaaaaaal3dkjeliven6l7kw3kiwlkbqjtfhdra6fly7uqekgmuef6forplq)</td>
</tr>
<tr>
    <td><CopyableCode code="requirements" /></td>
    <td><code>object</code></td>
    <td>Minimum memory required by this PBF. The user should use memory greater than or equal to this value  while configuring the Function. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the PbfListingVersion was created. An RFC3339 formatted datetime string. (example: 2022-09-30T0710:20:50.52Z)</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the PbfListingVersion was updated. An RFC3339 formatted datetime string. (example: 2022-09-30T0710:20:50.52Z)</td>
</tr>
<tr>
    <td><CopyableCode code="triggers" /></td>
    <td><code>array</code></td>
    <td>An array of Trigger. A list of triggers that may activate the PBF.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A page of PbfListingVersionSummary objects.

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
    <td>Unique identifier that is immutable on creation (example: ocid1.pbflistingversion.oc1.iad.aaaaaaaal3dkjeliven6l7kw3kiwlkbqjtfhdra6fly7uqekgmuef6forplq)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Semantic version (example: 0.0.1)</td>
</tr>
<tr>
    <td><CopyableCode code="changeSummary" /></td>
    <td><code>string</code></td>
    <td>Details changes are included in this version. (example: First release of the PBF.&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>array</code></td>
    <td>Details about the required and optional Function configurations needed for proper performance of the PBF.  (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. Example: `&#123;"foo-namespace": &#123;"bar-key": "value"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only. Example: `&#123;"bar-key": "value"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the PBF resource. (x-obmcs-enumref: #/definitions/PbfListingVersion/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="pbfListingId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the PbfListing this resource version belongs to. (example: ocid1.pbflisting.oc1.iad.aaaaaaaal3dkjeliven6l7kw3kiwlkbqjtfhdra6fly7uqekgmuef6forplq)</td>
</tr>
<tr>
    <td><CopyableCode code="requirements" /></td>
    <td><code>object</code></td>
    <td>Minimum memory required by this PBF. The user should use memory greater than or equal to this value  while configuring the Function. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the PbfListingVersion was created. An RFC3339 formatted datetime string. (example: 2022-09-30T0710:20:50.52Z)</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the PbfListingVersion was updated. An RFC3339 formatted datetime string. (example: 2022-09-30T0710:20:50.52Z)</td>
</tr>
<tr>
    <td><CopyableCode code="triggers" /></td>
    <td><code>array</code></td>
    <td>An array of Trigger. A list of triggers that may activate the PBF.</td>
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
    <td><a href="#parameter-pbfListingVersionId"><code>pbfListingVersionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets a PbfListingVersion by identifier for a PbfListing.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-pbfListingId"><code>pbfListingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-pbfListingVersionId"><code>pbfListingVersionId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-isCurrentVersion"><code>isCurrentVersion</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Fetches a wrapped list of all Pre-built Function(PBF) Listing versions. Returns a PbfListingVersionCollection &lt;br /&gt;containing an array of PbfListingVersionSummary response models.&lt;br /&gt;&lt;br /&gt;Note that the PbfListingIdentifier must be provided as a query parameter, otherwise an exception shall &lt;br /&gt;be thrown.&lt;br /&gt;</td>
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
<tr id="parameter-pbfListingId">
    <td><CopyableCode code="pbfListingId" /></td>
    <td><code>string</code></td>
    <td>unique PbfListing identifier</td>
</tr>
<tr id="parameter-pbfListingVersionId">
    <td><CopyableCode code="pbfListingVersionId" /></td>
    <td><code>string</code></td>
    <td>unique PbfListingVersion identifier</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-isCurrentVersion">
    <td><CopyableCode code="isCurrentVersion" /></td>
    <td><code>boolean</code></td>
    <td>Matches the current version (the most recently added version with an Active  lifecycleState) associated with a PbfListing. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources their lifecycleState matches the given lifecycleState.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return. 1 is the minimum, 50 is the maximum.  Default: 10 </td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Matches a PbfListingVersion based on a provided semantic version name for a PbfListingVersion.  Each PbfListingVersion name is unique with respect to its associated PbfListing. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token for a list query returned by a previous operation </td>
</tr>
<tr id="parameter-pbfListingVersionId">
    <td><CopyableCode code="pbfListingVersionId" /></td>
    <td><code>string</code></td>
    <td>unique PbfListingVersion identifier</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for name is ascending. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies sort order.  * **ASC:** Ascending sort order. * **DESC:** Descending sort order. </td>
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

Gets a PbfListingVersion by identifier for a PbfListing.

```sql
SELECT
id,
name,
changeSummary,
config,
definedTags,
freeformTags,
lifecycleState,
pbfListingId,
requirements,
systemTags,
timeCreated,
timeUpdated,
triggers
FROM oci.functions.pbf_listing_versions
WHERE pbfListingVersionId = '{{ pbfListingVersionId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Fetches a wrapped list of all Pre-built Function(PBF) Listing versions. Returns a PbfListingVersionCollection &lt;br /&gt;containing an array of PbfListingVersionSummary response models.&lt;br /&gt;&lt;br /&gt;Note that the PbfListingIdentifier must be provided as a query parameter, otherwise an exception shall &lt;br /&gt;be thrown.&lt;br /&gt;

```sql
SELECT
id,
name,
changeSummary,
config,
definedTags,
freeformTags,
lifecycleState,
pbfListingId,
requirements,
systemTags,
timeCreated,
timeUpdated,
triggers
FROM oci.functions.pbf_listing_versions
WHERE pbfListingId = '{{ pbfListingId }}' -- required
AND region = '{{ region }}' -- required
AND pbfListingVersionId = '{{ pbfListingVersionId }}'
AND name = '{{ name }}'
AND isCurrentVersion = '{{ isCurrentVersion }}'
AND lifecycleState = '{{ lifecycleState }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
