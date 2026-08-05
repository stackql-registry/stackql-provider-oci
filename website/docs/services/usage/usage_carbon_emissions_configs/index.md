--- 
title: usage_carbon_emissions_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_carbon_emissions_configs
  - usage
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

Creates, updates, deletes, gets or lists a <code>usage_carbon_emissions_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_carbon_emissions_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.usage.usage_carbon_emissions_configs" /></td></tr>
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
    <td><a href="#request_usage_carbon_emission_config"><CopyableCode code="request_usage_carbon_emission_config" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tenantId"><code>tenantId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Returns the configuration list for the Console's carbon emission user interface drop-down list.&lt;br /&gt;</td>
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
<tr id="parameter-tenantId">
    <td><CopyableCode code="tenantId" /></td>
    <td><code>string</code></td>
    <td>tenant id</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="request_usage_carbon_emission_config"
    values={[
        { label: 'request_usage_carbon_emission_config', value: 'request_usage_carbon_emission_config' }
    ]}
>
<TabItem value="request_usage_carbon_emission_config">

Returns the configuration list for the Console's carbon emission user interface drop-down list.&lt;br /&gt;

```sql
EXEC oci.usage.usage_carbon_emissions_configs.request_usage_carbon_emission_config 
@tenantId='{{ tenantId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
