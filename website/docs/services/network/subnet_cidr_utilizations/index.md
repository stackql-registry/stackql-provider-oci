--- 
title: subnet_cidr_utilizations
hide_title: false
hide_table_of_contents: false
keywords:
  - subnet_cidr_utilizations
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

Creates, updates, deletes, gets or lists a <code>subnet_cidr_utilizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subnet_cidr_utilizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.subnet_cidr_utilizations" /></td></tr>
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

Retrieve `IpInventoryCidrUtilizationCollection` resource.

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
    <td>Compartment of the subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>integer (int32)</code></td>
    <td>Specifies the count for the number of results for the response.</td>
</tr>
<tr>
    <td><CopyableCode code="ipInventoryCidrUtilizationSummary" /></td>
    <td><code>array</code></td>
    <td>Lists 'IpInventoryCidrUtilizationSummary` object. </td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Timestamp of the latest update from the database in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of the data.</td>
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
    <td><a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the CIDR utilization data of the specified subnet. Specify the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;</td>
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
<tr id="parameter-subnetId">
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>Specify the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the subnet.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
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

Gets the CIDR utilization data of the specified subnet. Specify the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;

```sql
SELECT
compartmentId,
count,
ipInventoryCidrUtilizationSummary,
lastUpdatedTimestamp,
message
FROM oci.network.subnet_cidr_utilizations
WHERE subnetId = '{{ subnetId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
