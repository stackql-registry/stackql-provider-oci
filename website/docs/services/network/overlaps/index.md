--- 
title: overlaps
hide_title: false
hide_table_of_contents: false
keywords:
  - overlaps
  - network
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

Creates, updates, deletes, gets or lists an <code>overlaps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="overlaps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.overlaps" /></td></tr>
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
    <td><a href="#get_vcn_overlap"><CopyableCode code="get_vcn_overlap" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-regionList"><code>regionList</code></a>, <a href="#parameter-compartmentList"><code>compartmentList</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Gets the CIDR overlap information of the specified VCN in selected compartments. Specify the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;</td>
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
<tr id="parameter-vcnId">
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>Specify the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="get_vcn_overlap"
    values={[
        { label: 'get_vcn_overlap', value: 'get_vcn_overlap' }
    ]}
>
<TabItem value="get_vcn_overlap">

Gets the CIDR overlap information of the specified VCN in selected compartments. Specify the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;

```sql
EXEC oci.network.overlaps.get_vcn_overlap 
@vcnId='{{ vcnId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"compartmentList": "{{ compartmentList }}", 
"regionList": "{{ regionList }}"
}'
;
```
</TabItem>
</Tabs>
