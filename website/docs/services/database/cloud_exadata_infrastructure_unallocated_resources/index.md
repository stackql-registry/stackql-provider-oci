--- 
title: cloud_exadata_infrastructure_unallocated_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_exadata_infrastructure_unallocated_resources
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

Creates, updates, deletes, gets or lists a <code>cloud_exadata_infrastructure_unallocated_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_exadata_infrastructure_unallocated_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.cloud_exadata_infrastructure_unallocated_resources" /></td></tr>
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

The Cloud Exadata infrastructure unallocated resources details.

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
    <td><CopyableCode code="cloudAutonomousVmClusters" /></td>
    <td><code>array</code></td>
    <td>The list of Cloud Autonomous VM Clusters on the Infrastructure and their associated unallocated resources details.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudExadataInfrastructureDisplayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Cloud Exadata infrastructure. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Cloud Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="exadataStorageInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>Total unallocated exadata storage in the infrastructure in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="localStorageInGbs" /></td>
    <td><code>integer</code></td>
    <td>The minimum amount of unallocated storage available across all nodes in the infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="memoryInGBs" /></td>
    <td><code>integer</code></td>
    <td>The minimum amount of unallocated memory available across all nodes in the infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="ocpus" /></td>
    <td><code>integer</code></td>
    <td>The minimum amount of unallocated ocpus available across all nodes in the infrastructure.</td>
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
    <td><a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-dbServers"><code>dbServers</code></a></td>
    <td>Gets unallocated resources information for the specified Cloud Exadata infrastructure.&lt;br /&gt;</td>
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
<tr id="parameter-cloudExadataInfrastructureId">
    <td><CopyableCode code="cloudExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The cloud Exadata infrastructure &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-dbServers">
    <td><CopyableCode code="dbServers" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) of the Db servers.</td>
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

Gets unallocated resources information for the specified Cloud Exadata infrastructure.&lt;br /&gt;

```sql
SELECT
cloudAutonomousVmClusters,
cloudExadataInfrastructureDisplayName,
cloudExadataInfrastructureId,
exadataStorageInTBs,
localStorageInGbs,
memoryInGBs,
ocpus
FROM oci.database.cloud_exadata_infrastructure_unallocated_resources
WHERE cloudExadataInfrastructureId = '{{ cloudExadataInfrastructureId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND dbServers = '{{ dbServers }}'
;
```
</TabItem>
</Tabs>
