--- 
title: app_catalog_listing_resource_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - app_catalog_listing_resource_versions
  - compute
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

Creates, updates, deletes, gets or lists an <code>app_catalog_listing_resource_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_catalog_listing_resource_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.app_catalog_listing_resource_versions" /></td></tr>
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

The listing resource version was retrieved.

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
    <td><CopyableCode code="accessiblePorts" /></td>
    <td><code>array</code></td>
    <td>List of accessible ports for instances launched with this listing resource version.</td>
</tr>
<tr>
    <td><CopyableCode code="allowedActions" /></td>
    <td><code>array</code></td>
    <td>Allowed actions for the listing resource.</td>
</tr>
<tr>
    <td><CopyableCode code="availableRegions" /></td>
    <td><code>array</code></td>
    <td>List of regions that this listing resource version is available.  For information about regions, see &#91;Regions and Availability Domains&#93;(/iaas/Content/General/Concepts/regions.htm).  Example: `&#91;"us-ashburn-1", "us-phoenix-1"&#93;` </td>
</tr>
<tr>
    <td><CopyableCode code="compatibleShapes" /></td>
    <td><code>array</code></td>
    <td>Array of shapes compatible with this resource.  You can enumerate all available shapes by calling &#91;ListShapes&#93;(#/en/iaas/latest/Shape/ListShapes).  Example: `&#91;"VM.Standard1.1", "VM.Standard1.2"&#93;` </td>
</tr>
<tr>
    <td><CopyableCode code="listingId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the listing this resource version belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="listingResourceId" /></td>
    <td><code>string</code></td>
    <td>OCID of the listing resource.</td>
</tr>
<tr>
    <td><CopyableCode code="listingResourceVersion" /></td>
    <td><code>string</code></td>
    <td>Resource Version.</td>
</tr>
<tr>
    <td><CopyableCode code="timePublished" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the listing resource version was published, in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. Example: `2018-03-20T12:32:53.532Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Listing Resource Version summary

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
    <td><CopyableCode code="listingId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the listing this resource version belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="listingResourceId" /></td>
    <td><code>string</code></td>
    <td>OCID of the listing resource.</td>
</tr>
<tr>
    <td><CopyableCode code="listingResourceVersion" /></td>
    <td><code>string</code></td>
    <td>Resource Version.</td>
</tr>
<tr>
    <td><CopyableCode code="timePublished" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the listing resource version was published, in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. Example: `2018-03-20T12:32:53.532Z` </td>
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
    <td><a href="#parameter-listingId"><code>listingId</code></a>, <a href="#parameter-resourceVersion"><code>resourceVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified listing resource version.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-listingId"><code>listingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Gets all resource versions for a particular listing.</td>
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
<tr id="parameter-listingId">
    <td><CopyableCode code="listingId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the listing.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-resourceVersion">
    <td><CopyableCode code="resourceVersion" /></td>
    <td><code>string</code></td>
    <td>Listing Resource Version.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). The DISPLAYNAME sort order is case sensitive. </td>
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

Gets the specified listing resource version.

```sql
SELECT
accessiblePorts,
allowedActions,
availableRegions,
compatibleShapes,
listingId,
listingResourceId,
listingResourceVersion,
timePublished
FROM oci.compute.app_catalog_listing_resource_versions
WHERE listingId = '{{ listingId }}' -- required
AND resourceVersion = '{{ resourceVersion }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Gets all resource versions for a particular listing.

```sql
SELECT
listingId,
listingResourceId,
listingResourceVersion,
timePublished
FROM oci.compute.app_catalog_listing_resource_versions
WHERE listingId = '{{ listingId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortOrder = '{{ sortOrder }}'
;
```
</TabItem>
</Tabs>
