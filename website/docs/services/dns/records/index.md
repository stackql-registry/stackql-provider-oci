--- 
title: records
hide_title: false
hide_table_of_contents: false
keywords:
  - records
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

Creates, updates, deletes, gets or lists a <code>records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.dns.records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#patch_zone_records"><CopyableCode code="patch_zone_records" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-zoneNameOrId"><code>zoneNameOrId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-viewId"><code>viewId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td>Updates a collection of records in the specified zone.&lt;br /&gt;&lt;br /&gt;You can update one record or all records for the specified zone depending on the changes provided in the&lt;br /&gt;request body. You can also add or remove records using this function. When the zone name is provided as&lt;br /&gt;a path parameter and `PRIVATE` is used for the scope query parameter then the viewId query parameter is&lt;br /&gt;required.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#patch_domain_records"><CopyableCode code="patch_domain_records" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-zoneNameOrId"><code>zoneNameOrId</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-viewId"><code>viewId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td>Updates records in the specified zone at a domain.&lt;br /&gt;&lt;br /&gt;You can update one record or all records for the specified zone depending on the changes provided in the&lt;br /&gt;request body. You can also add or remove records using this function. When the zone name is provided as&lt;br /&gt;a path parameter and `PRIVATE` is used for the scope query parameter then the viewId query parameter is&lt;br /&gt;required.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#patch_rr_set"><CopyableCode code="patch_rr_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-zoneNameOrId"><code>zoneNameOrId</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-rtype"><code>rtype</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-viewId"><code>viewId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td>Updates records in the specified RRSet.&lt;br /&gt;&lt;br /&gt;When the zone name is provided as a path parameter and `PRIVATE` is used for the scope query&lt;br /&gt;parameter then the viewId query parameter is required.&lt;br /&gt;</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The target fully-qualified domain name (FQDN) within the target zone.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-rtype">
    <td><CopyableCode code="rtype" /></td>
    <td><code>string</code></td>
    <td>The type of the target RRSet within the target zone.</td>
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
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Specifies to operate only on resources that have a matching DNS scope. </td>
</tr>
<tr id="parameter-viewId">
    <td><CopyableCode code="viewId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the view the zone is associated with. Required when accessing a private zone by name.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="patch_zone_records"
    values={[
        { label: 'patch_zone_records', value: 'patch_zone_records' },
        { label: 'patch_domain_records', value: 'patch_domain_records' },
        { label: 'patch_rr_set', value: 'patch_rr_set' }
    ]}
>
<TabItem value="patch_zone_records">

Updates a collection of records in the specified zone.&lt;br /&gt;&lt;br /&gt;You can update one record or all records for the specified zone depending on the changes provided in the&lt;br /&gt;request body. You can also add or remove records using this function. When the zone name is provided as&lt;br /&gt;a path parameter and `PRIVATE` is used for the scope query parameter then the viewId query parameter is&lt;br /&gt;required.&lt;br /&gt;

```sql
EXEC oci.dns.records.patch_zone_records 
@zoneNameOrId='{{ zoneNameOrId }}' --required, 
@region='{{ region }}' --required, 
@If-Match='{{ If-Match }}', 
@If-Unmodified-Since='{{ If-Unmodified-Since }}', 
@opc-request-id='{{ opc-request-id }}', 
@scope='{{ scope }}', 
@viewId='{{ viewId }}', 
@compartmentId='{{ compartmentId }}' 
@@json=
'{
"items": "{{ items }}"
}'
;
```
</TabItem>
<TabItem value="patch_domain_records">

Updates records in the specified zone at a domain.&lt;br /&gt;&lt;br /&gt;You can update one record or all records for the specified zone depending on the changes provided in the&lt;br /&gt;request body. You can also add or remove records using this function. When the zone name is provided as&lt;br /&gt;a path parameter and `PRIVATE` is used for the scope query parameter then the viewId query parameter is&lt;br /&gt;required.&lt;br /&gt;

```sql
EXEC oci.dns.records.patch_domain_records 
@zoneNameOrId='{{ zoneNameOrId }}' --required, 
@domain='{{ domain }}' --required, 
@region='{{ region }}' --required, 
@If-Match='{{ If-Match }}', 
@If-Unmodified-Since='{{ If-Unmodified-Since }}', 
@opc-request-id='{{ opc-request-id }}', 
@scope='{{ scope }}', 
@viewId='{{ viewId }}', 
@compartmentId='{{ compartmentId }}' 
@@json=
'{
"items": "{{ items }}"
}'
;
```
</TabItem>
<TabItem value="patch_rr_set">

Updates records in the specified RRSet.&lt;br /&gt;&lt;br /&gt;When the zone name is provided as a path parameter and `PRIVATE` is used for the scope query&lt;br /&gt;parameter then the viewId query parameter is required.&lt;br /&gt;

```sql
EXEC oci.dns.records.patch_rr_set 
@zoneNameOrId='{{ zoneNameOrId }}' --required, 
@domain='{{ domain }}' --required, 
@rtype='{{ rtype }}' --required, 
@region='{{ region }}' --required, 
@If-Match='{{ If-Match }}', 
@If-Unmodified-Since='{{ If-Unmodified-Since }}', 
@opc-request-id='{{ opc-request-id }}', 
@scope='{{ scope }}', 
@viewId='{{ viewId }}', 
@compartmentId='{{ compartmentId }}' 
@@json=
'{
"items": "{{ items }}"
}'
;
```
</TabItem>
</Tabs>
