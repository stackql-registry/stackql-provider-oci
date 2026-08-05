--- 
title: app_catalog_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - app_catalog_subscriptions
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

Creates, updates, deletes, gets or lists an <code>app_catalog_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_catalog_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.app_catalog_subscriptions" /></td></tr>
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

a subscription summary for a listing resource version.

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
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartmentID of the subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="listingId" /></td>
    <td><code>string</code></td>
    <td>The ocid of the listing resource.</td>
</tr>
<tr>
    <td><CopyableCode code="listingResourceId" /></td>
    <td><code>string</code></td>
    <td>Listing resource id.</td>
</tr>
<tr>
    <td><CopyableCode code="listingResourceVersion" /></td>
    <td><code>string</code></td>
    <td>Listing resource version.</td>
</tr>
<tr>
    <td><CopyableCode code="publisherName" /></td>
    <td><code>string</code></td>
    <td>Name of the publisher who published this listing.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>The short summary to the listing.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time at which the subscription was created, in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format. Example: `2018-03-20T12:32:53.532Z` </td>
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
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-listingId"><code>listingId</code></a></td>
    <td>Lists subscriptions for a compartment.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-listingId"><code>listingId</code></a>, <a href="#parameter-listingResourceVersion"><code>listingResourceVersion</code></a>, <a href="#parameter-oracleTermsOfUseLink"><code>oracleTermsOfUseLink</code></a>, <a href="#parameter-timeRetrieved"><code>timeRetrieved</code></a>, <a href="#parameter-signature"><code>signature</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Create a subscription for listing resource version for a compartment. It will take some time to propagate to all regions.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-listingId"><code>listingId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-resourceVersion"><code>resourceVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a subscription for a listing resource version for a compartment.</td>
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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
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
<tr id="parameter-listingId">
    <td><CopyableCode code="listingId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only the listings that matches the given listing id. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** In general, some "List" operations (for example, `ListInstances`) let you optionally filter by availability domain if the scope of the resource type is within a single availability domain. If you call one of these "List" operations without specifying an availability domain, the resources are grouped by availability domain, then sorted. </td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists subscriptions for a compartment.

```sql
SELECT
compartmentId,
displayName,
listingId,
listingResourceId,
listingResourceVersion,
publisherName,
summary,
timeCreated
FROM oci.compute.app_catalog_subscriptions
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND listingId = '{{ listingId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Create a subscription for listing resource version for a compartment. It will take some time to propagate to all regions.&lt;br /&gt;

```sql
INSERT INTO oci.compute.app_catalog_subscriptions (
compartmentId,
eulaLink,
listingId,
listingResourceVersion,
oracleTermsOfUseLink,
signature,
timeRetrieved,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ eulaLink }}',
'{{ listingId }}' /* required */,
'{{ listingResourceVersion }}' /* required */,
'{{ oracleTermsOfUseLink }}' /* required */,
'{{ signature }}' /* required */,
'{{ timeRetrieved }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
compartmentId,
displayName,
listingId,
listingResourceId,
listingResourceVersion,
publisherName,
summary,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_catalog_subscriptions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the app_catalog_subscriptions resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The compartmentID for the subscription.
    - name: eulaLink
      value: "{{ eulaLink }}"
      description: |
        EULA link
    - name: listingId
      value: "{{ listingId }}"
      description: |
        The OCID of the listing.
    - name: listingResourceVersion
      value: "{{ listingResourceVersion }}"
      description: |
        Listing resource version.
    - name: oracleTermsOfUseLink
      value: "{{ oracleTermsOfUseLink }}"
      description: |
        Oracle TOU link
    - name: signature
      value: "{{ signature }}"
      description: |
        A generated signature for this listing resource version retrieved the agreements API.
    - name: timeRetrieved
      value: "{{ timeRetrieved }}"
      description: |
        Date and time the agreements were retrieved, in [RFC3339](https://tools.ietf.org/html/rfc3339) format.
        Example: \`2018-03-20T12:32:53.532Z\`
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete a subscription for a listing resource version for a compartment.

```sql
DELETE FROM oci.compute.app_catalog_subscriptions
WHERE listingId = '{{ listingId }}' --required
AND compartmentId = '{{ compartmentId }}' --required
AND resourceVersion = '{{ resourceVersion }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
