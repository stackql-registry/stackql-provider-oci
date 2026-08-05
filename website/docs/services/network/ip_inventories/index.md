--- 
title: ip_inventories
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_inventories
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

Creates, updates, deletes, gets or lists an <code>ip_inventories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_inventories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.ip_inventories" /></td></tr>
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
    <td><a href="#list_ip_inventory"><CopyableCode code="list_ip_inventory" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-regionList"><code>regionList</code></a>, <a href="#parameter-compartmentList"><code>compartmentList</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists the IP Inventory information in the selected compartments.&lt;br /&gt;</td>
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
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="list_ip_inventory"
    values={[
        { label: 'list_ip_inventory', value: 'list_ip_inventory' }
    ]}
>
<TabItem value="list_ip_inventory">

Lists the IP Inventory information in the selected compartments.&lt;br /&gt;

```sql
EXEC oci.network.ip_inventories.list_ip_inventory 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"addressTypeList": "{{ addressTypeList }}", 
"compartmentList": "{{ compartmentList }}", 
"overlappingVcnsOnly": {{ overlappingVcnsOnly }}, 
"overrideFilters": {{ overrideFilters }}, 
"paginationLimit": {{ paginationLimit }}, 
"paginationOffset": {{ paginationOffset }}, 
"regionList": "{{ regionList }}", 
"resourceTypeList": "{{ resourceTypeList }}", 
"searchKeyword": "{{ searchKeyword }}", 
"sortBy": "{{ sortBy }}", 
"sortOrder": "{{ sortOrder }}", 
"utilization": {{ utilization }}
}'
;
```
</TabItem>
</Tabs>
