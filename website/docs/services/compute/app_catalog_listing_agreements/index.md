--- 
title: app_catalog_listing_agreements
hide_title: false
hide_table_of_contents: false
keywords:
  - app_catalog_listing_agreements
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

Creates, updates, deletes, gets or lists an <code>app_catalog_listing_agreements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_catalog_listing_agreements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.app_catalog_listing_agreements" /></td></tr>
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

Agreements for the listing resource version were retrieved.

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
    <td><CopyableCode code="eulaLink" /></td>
    <td><code>string</code></td>
    <td>EULA link</td>
</tr>
<tr>
    <td><CopyableCode code="listingId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the listing associated with these agreements.</td>
</tr>
<tr>
    <td><CopyableCode code="listingResourceVersion" /></td>
    <td><code>string</code></td>
    <td>Listing resource version associated with these agreements.</td>
</tr>
<tr>
    <td><CopyableCode code="oracleTermsOfUseLink" /></td>
    <td><code>string</code></td>
    <td>Oracle TOU link</td>
</tr>
<tr>
    <td><CopyableCode code="signature" /></td>
    <td><code>string</code></td>
    <td>A generated signature for this agreement retrieval operation which should be used in the create subscription call. </td>
</tr>
<tr>
    <td><CopyableCode code="timeRetrieved" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the agreements were retrieved, in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. Example: `2018-03-20T12:32:53.532Z` </td>
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
    <td>Retrieves the agreements for a particular resource version of a listing.</td>
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

Retrieves the agreements for a particular resource version of a listing.

```sql
SELECT
eulaLink,
listingId,
listingResourceVersion,
oracleTermsOfUseLink,
signature,
timeRetrieved
FROM oci.compute.app_catalog_listing_agreements
WHERE listingId = '{{ listingId }}' -- required
AND resourceVersion = '{{ resourceVersion }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
