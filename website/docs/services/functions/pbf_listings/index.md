--- 
title: pbf_listings
hide_title: false
hide_table_of_contents: false
keywords:
  - pbf_listings
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

Creates, updates, deletes, gets or lists a <code>pbf_listings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pbf_listings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.functions.pbf_listings" /></td></tr>
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

Retrieves the PbfListing with the given id.

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
    <td>Unique identifier that is immutable on creation. (example: ocid1.pbflisting.oc1.iad.aaaaaaaal3dkjeliven6l7kw3kiwlkbqjtfhdra6fly7uqekgmuef6forplq)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A brief descriptive name for the PBF listing. The PBF listing name must be unique, and not match and existing PBF.  (example: Logs to Splunk)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. Example: `&#123;"foo-namespace": &#123;"bar-key": "value"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short overview of the PBF Listing: the purpose of the PBF and and associated information. (example: A PBF to transform and send logs, metrics and data to Splunk. The PBF pushes data to Splunk through &lt;br /&gt;http/post requests and Splunk's HEC module (https:​//docs.splunk.com/Documentation/Splunk/9.0.0/Data/UsetheHTTPEventCollector).&lt;br /&gt;)</td>
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
    <td><CopyableCode code="publisherDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about the publisher of this PBF Listing.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the PbfListing was created. An RFC3339 formatted datetime string. (example: 2022-09-30T0710:20:50.52Z)</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the PbfListing was updated. An RFC3339 formatted datetime string. (example: 2022-09-30T0710:20:50.52Z)</td>
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

A page of PbfListingSummary objects.

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
    <td>Unique identifier that is immutable on creation. (example: ocid1.pbflisting.oc1.iad.aaaaaaaal3dkjeliven6l7kw3kiwlkbqjtfhdra6fly7uqekgmuef6forplq)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A brief descriptive name for the PBF listing. The PBF listing name must be unique, and not match and existing PBF.  (example: Logs to Splunk)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. Example: `&#123;"foo-namespace": &#123;"bar-key": "value"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short overview of the PBF Listing: the purpose of the PBF and and associated information. (example: A PBF to transform and send logs, metrics and data to Splunk. The PBF pushes data to Splunk through &lt;br /&gt;http/post requests and Splunk's HEC module (https:​//docs.splunk.com/Documentation/Splunk/9.0.0/Data/UsetheHTTPEventCollector).&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only. Example: `&#123;"bar-key": "value"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the PBF resource. (x-obmcs-enumref: #/definitions/PbfListing/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="publisherDetails" /></td>
    <td><code>object</code></td>
    <td>Contains details about the publisher of this PBF Listing.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the PbfListing was created. An RFC3339 formatted datetime string. (example: 2022-09-30T0710:20:50.52Z)</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the PbfListing was updated. An RFC3339 formatted datetime string. (example: 2022-09-30T0710:20:50.52Z)</td>
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
    <td><a href="#parameter-pbfListingId"><code>pbfListingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Fetches a Pre-built Function(PBF) Listing. Returns a PbfListing response model.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-pbfListingId"><code>pbfListingId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-nameContains"><code>nameContains</code></a>, <a href="#parameter-nameStartsWith"><code>nameStartsWith</code></a>, <a href="#parameter-trigger"><code>trigger</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Fetches a wrapped list of all Pre-built Function(PBF) Listings. Returns a PbfListingCollection containing &lt;br /&gt;an array of PbfListingSummary response models.&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
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
    <td>A filter to return only resources that match the entire PBF name given.</td>
</tr>
<tr id="parameter-nameContains">
    <td><CopyableCode code="nameContains" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that contain the supplied filter text in the PBF name given.</td>
</tr>
<tr id="parameter-nameStartsWith">
    <td><CopyableCode code="nameStartsWith" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that start with the supplied filter text in the PBF name given.</td>
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
<tr id="parameter-pbfListingId">
    <td><CopyableCode code="pbfListingId" /></td>
    <td><code>string</code></td>
    <td>unique PbfListing identifier</td>
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
<tr id="parameter-trigger">
    <td><CopyableCode code="trigger" /></td>
    <td><code>array</code></td>
    <td>A filter to return only resources that match the service trigger sources of a PBF.</td>
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

Fetches a Pre-built Function(PBF) Listing. Returns a PbfListing response model.&lt;br /&gt;

```sql
SELECT
id,
name,
definedTags,
description,
freeformTags,
lifecycleState,
publisherDetails,
systemTags,
timeCreated,
timeUpdated,
triggers
FROM oci.functions.pbf_listings
WHERE pbfListingId = '{{ pbfListingId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Fetches a wrapped list of all Pre-built Function(PBF) Listings. Returns a PbfListingCollection containing &lt;br /&gt;an array of PbfListingSummary response models.&lt;br /&gt;

```sql
SELECT
id,
name,
definedTags,
description,
freeformTags,
lifecycleState,
publisherDetails,
systemTags,
timeCreated,
timeUpdated,
triggers
FROM oci.functions.pbf_listings
WHERE region = '{{ region }}' -- required
AND pbfListingId = '{{ pbfListingId }}'
AND name = '{{ name }}'
AND nameContains = '{{ nameContains }}'
AND nameStartsWith = '{{ nameStartsWith }}'
AND trigger = '{{ trigger }}'
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
