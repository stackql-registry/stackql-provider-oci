--- 
title: zone_records
hide_title: false
hide_table_of_contents: false
keywords:
  - zone_records
  - dns
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

Creates, updates, deletes, gets or lists a <code>zone_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="zone_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.dns.zone_records" /></td></tr>
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

A collection of DNS resource record objects.

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
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#parameter-zoneNameOrId"><code>zoneNameOrId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-If-Modified-Since"><code>If-Modified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-zoneVersion"><code>zoneVersion</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-domainContains"><code>domainContains</code></a>, <a href="#parameter-rtype"><code>rtype</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-viewId"><code>viewId</code></a></td>
    <td>Gets all records in the specified zone.&lt;br /&gt;&lt;br /&gt;The results are sorted by `domain` in alphabetical order by default. For more information about records,&lt;br /&gt;see &#91;Resource Record (RR) TYPEs&#93;(https:​//www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4).&lt;br /&gt;When the zone name is provided as a path parameter and `PRIVATE` is used for the scope query parameter&lt;br /&gt;then the viewId query parameter is required.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-zoneNameOrId"><code>zoneNameOrId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-viewId"><code>viewId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td>Replaces records in the specified zone with the records specified in the request body.&lt;br /&gt;&lt;br /&gt;If a specified record does not exist, it will be created. If the record exists, then it will be updated&lt;br /&gt;to represent the record in the body of the request. If a record in the zone does not exist in the&lt;br /&gt;request body, the record will be removed from the zone. When the zone name is provided as a path&lt;br /&gt;parameter and `PRIVATE` is used for the scope query parameter then the viewId query parameter is&lt;br /&gt;required.&lt;br /&gt;</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-zoneNameOrId">
    <td><CopyableCode code="zoneNameOrId" /></td>
    <td><code>string</code></td>
    <td>The name or OCID of the target zone.</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The `If-Match` header field makes the request method conditional on the existence of at least one current representation of the target resource, when the field-value is `*`, or having a current representation of the target resource that has an entity-tag matching a member of the list of entity-tags provided in the field-value. </td>
</tr>
<tr id="parameter-If-Modified-Since">
    <td><CopyableCode code="If-Modified-Since" /></td>
    <td><code>string</code></td>
    <td>The `If-Modified-Since` header field makes a GET or HEAD request method conditional on the selected representation's modification date being more recent than the date provided in the field-value.  Transfer of the selected representation's data is avoided if that data has not changed. </td>
</tr>
<tr id="parameter-If-None-Match">
    <td><CopyableCode code="If-None-Match" /></td>
    <td><code>string</code></td>
    <td>The `If-None-Match` header field makes the request method conditional on the absence of any current representation of the target resource, when the field-value is `*`, or having a selected representation with an entity-tag that does not match any of those listed in the field-value. </td>
</tr>
<tr id="parameter-If-Unmodified-Since">
    <td><CopyableCode code="If-Unmodified-Since" /></td>
    <td><code>string</code></td>
    <td>The `If-Unmodified-Since` header field makes the request method conditional on the selected representation's last modification date being earlier than or equal to the date provided in the field-value.  This field accomplishes the same purpose as If-Match for cases where the user agent does not have an entity-tag for the representation. </td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment the zone belongs to.  This parameter is deprecated and should be omitted. </td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Search by domain. Will match any record whose domain (case-insensitive) equals the provided value. </td>
</tr>
<tr id="parameter-domainContains">
    <td><CopyableCode code="domainContains" /></td>
    <td><code>string</code></td>
    <td>Search by domain. Will match any record whose domain (case-insensitive) contains the provided value. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum number of items to return in a page of the collection. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The value of the `opc-next-page` response header from the previous "List" call. </td>
</tr>
<tr id="parameter-rtype">
    <td><CopyableCode code="rtype" /></td>
    <td><code>string</code></td>
    <td>Search by record type. Will match any record whose &#91;type&#93;(https:​//www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4) (case-insensitive) equals the provided value. </td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Specifies to operate only on resources that have a matching DNS scope. </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field by which to sort records.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The order to sort the resources. </td>
</tr>
<tr id="parameter-viewId">
    <td><CopyableCode code="viewId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the view the zone is associated with. Required when accessing a private zone by name.</td>
</tr>
<tr id="parameter-zoneVersion">
    <td><CopyableCode code="zoneVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the zone for which data is requested. </td>
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

Gets all records in the specified zone.&lt;br /&gt;&lt;br /&gt;The results are sorted by `domain` in alphabetical order by default. For more information about records,&lt;br /&gt;see &#91;Resource Record (RR) TYPEs&#93;(https:​//www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4).&lt;br /&gt;When the zone name is provided as a path parameter and `PRIVATE` is used for the scope query parameter&lt;br /&gt;then the viewId query parameter is required.&lt;br /&gt;

```sql
SELECT
items
FROM oci.dns.zone_records
WHERE zoneNameOrId = '{{ zoneNameOrId }}' -- required
AND region = '{{ region }}' -- required
AND If-None-Match = '{{ If-None-Match }}'
AND If-Modified-Since = '{{ If-Modified-Since }}'
AND opc-request-id = '{{ opc-request-id }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND zoneVersion = '{{ zoneVersion }}'
AND domain = '{{ domain }}'
AND domainContains = '{{ domainContains }}'
AND rtype = '{{ rtype }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND compartmentId = '{{ compartmentId }}'
AND scope = '{{ scope }}'
AND viewId = '{{ viewId }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Replaces records in the specified zone with the records specified in the request body.&lt;br /&gt;&lt;br /&gt;If a specified record does not exist, it will be created. If the record exists, then it will be updated&lt;br /&gt;to represent the record in the body of the request. If a record in the zone does not exist in the&lt;br /&gt;request body, the record will be removed from the zone. When the zone name is provided as a path&lt;br /&gt;parameter and `PRIVATE` is used for the scope query parameter then the viewId query parameter is&lt;br /&gt;required.&lt;br /&gt;

```sql
UPDATE oci.dns.zone_records
SET 
items = '{{ items }}'
WHERE 
zoneNameOrId = '{{ zoneNameOrId }}' --required
AND region = '{{ region }}' --required
AND If-Match = '{{ If-Match}}'
AND If-Unmodified-Since = '{{ If-Unmodified-Since}}'
AND opc-request-id = '{{ opc-request-id}}'
AND scope = '{{ scope}}'
AND viewId = '{{ viewId}}'
AND compartmentId = '{{ compartmentId}}'
RETURNING
items;
```
</TabItem>
</Tabs>
