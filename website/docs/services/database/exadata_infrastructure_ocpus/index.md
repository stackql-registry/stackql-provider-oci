--- 
title: exadata_infrastructure_ocpus
hide_title: false
hide_table_of_contents: false
keywords:
  - exadata_infrastructure_ocpus
  - database
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

Creates, updates, deletes, gets or lists an <code>exadata_infrastructure_ocpus</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exadata_infrastructure_ocpus" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.exadata_infrastructure_ocpus" /></td></tr>
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

Details of the available and consumed OCPUs for the specified Autonomous Exadata Infrastructure instance.

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
    <td><CopyableCode code="byWorkloadType" /></td>
    <td><code>object</code></td>
    <td>The number of consumed OCPUs, by database workload type. </td>
</tr>
<tr>
    <td><CopyableCode code="consumedCpu" /></td>
    <td><code>number (float)</code></td>
    <td>The total number of consumed OCPUs in the Autonomous Exadata Infrastructure instance.</td>
</tr>
<tr>
    <td><CopyableCode code="totalCpu" /></td>
    <td><code>number (float)</code></td>
    <td>The total number of OCPUs in the Autonomous Exadata Infrastructure instance.</td>
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
    <td><a href="#parameter-autonomousExadataInfrastructureId"><code>autonomousExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets details of the available and consumed OCPUs for the specified Autonomous Exadata Infrastructure resource.&lt;br /&gt;</td>
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
<tr id="parameter-autonomousExadataInfrastructureId">
    <td><CopyableCode code="autonomousExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The Autonomous Exadata Infrastructure  &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. </td>
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

Gets details of the available and consumed OCPUs for the specified Autonomous Exadata Infrastructure resource.&lt;br /&gt;

```sql
SELECT
byWorkloadType,
consumedCpu,
totalCpu
FROM oci.database.exadata_infrastructure_ocpus
WHERE autonomousExadataInfrastructureId = '{{ autonomousExadataInfrastructureId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
