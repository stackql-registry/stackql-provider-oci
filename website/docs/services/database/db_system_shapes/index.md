--- 
title: db_system_shapes
hide_title: false
hide_table_of_contents: false
keywords:
  - db_system_shapes
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

Creates, updates, deletes, gets or lists a <code>db_system_shapes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_system_shapes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.db_system_shapes" /></td></tr>
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

The shape of the DB system. The shape determines resources to allocate to the DB system - CPU cores and memory for VM shapes; CPU cores, memory and storage for non-VM (or bare metal) shapes.&lt;br /&gt;&lt;br /&gt;For Exadata fixed and flexible shapes, detailed specifications can be found in https:​//docs.oracle.com/en/engineered-systems/exadata-cloud-service/ecscm/exa-service-desc.html#GUID-9E090174-5C57-4EB1-9243-B470F9F10D6B&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator.&lt;br /&gt;If you're an administrator who needs to write policies to give users access,&lt;br /&gt;see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the shape used for the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="areServerTypesSupported" /></td>
    <td><code>boolean</code></td>
    <td>If true, the shape supports configurable DB and Storage Server types.</td>
</tr>
<tr>
    <td><CopyableCode code="availableCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of CPU cores that can be enabled on the DB system for this shape.</td>
</tr>
<tr>
    <td><CopyableCode code="availableCoreCountPerNode" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of CPU cores per database node that can be enabled for this shape. Only applicable to the flex Exadata shape, ExaCC Elastic shapes and VM Flex shapes.</td>
</tr>
<tr>
    <td><CopyableCode code="availableDataStorageInTBs" /></td>
    <td><code>integer</code></td>
    <td>The maximum DATA storage that can be enabled for this shape.</td>
</tr>
<tr>
    <td><CopyableCode code="availableDataStoragePerServerInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The maximum data storage available per storage server for this shape. Only applicable to ExaCC Elastic shapes.</td>
</tr>
<tr>
    <td><CopyableCode code="availableDbNodePerNodeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The maximum Db Node storage available per database node for this shape. Only applicable to ExaCC Elastic shapes.</td>
</tr>
<tr>
    <td><CopyableCode code="availableDbNodeStorageInGBs" /></td>
    <td><code>integer</code></td>
    <td>The maximum Db Node storage that can be enabled for this shape.</td>
</tr>
<tr>
    <td><CopyableCode code="availableMemoryInGBs" /></td>
    <td><code>integer</code></td>
    <td>The maximum memory that can be enabled for this shape.</td>
</tr>
<tr>
    <td><CopyableCode code="availableMemoryPerNodeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The maximum memory available per database node for this shape. Only applicable to ExaCC Elastic shapes.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Base Database, Exadata Infrastructure, VM Cluster and Autonomous AI Database.  (ECPU, OCPU) (x-default-description: Null used when unspecified.)</td>
</tr>
<tr>
    <td><CopyableCode code="coreCountIncrement" /></td>
    <td><code>integer</code></td>
    <td>The discrete number by which the CPU core count for this shape can be increased or decreased.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the shape used for the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="maxStorageCount" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of Exadata storage servers available for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="maximumNodeCount" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of compute servers available for this shape.</td>
</tr>
<tr>
    <td><CopyableCode code="minCoreCountPerNode" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of CPU cores that can be enabled per node for this shape.</td>
</tr>
<tr>
    <td><CopyableCode code="minDataStorageInTBs" /></td>
    <td><code>integer</code></td>
    <td>The minimum data storage that need be allocated for this shape.</td>
</tr>
<tr>
    <td><CopyableCode code="minDbNodeStoragePerNodeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The minimum Db Node storage that need be allocated per node for this shape.</td>
</tr>
<tr>
    <td><CopyableCode code="minMemoryPerNodeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The minimum memory that need be allocated per node for this shape.</td>
</tr>
<tr>
    <td><CopyableCode code="minStorageCount" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of Exadata storage servers available for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of CPU cores that can be enabled on the DB system for this shape.</td>
</tr>
<tr>
    <td><CopyableCode code="minimumNodeCount" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of compute servers available for this shape.</td>
</tr>
<tr>
    <td><CopyableCode code="runtimeMinimumCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The runtime minimum number of CPU cores that can be enabled on the DB system for this shape.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Use `name` instead of `shape`.</td>
</tr>
<tr>
    <td><CopyableCode code="shapeAttributes" /></td>
    <td><code>array</code></td>
    <td>The shapeAttributes of the DB system shape. </td>
</tr>
<tr>
    <td><CopyableCode code="shapeFamily" /></td>
    <td><code>string</code></td>
    <td>The family of the shape used for the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="shapeType" /></td>
    <td><code>string</code></td>
    <td>The shape type for the virtual machine DB system. Shape type is determined by CPU hardware. Valid values are `AMD` , `INTEL`, `INTEL_FLEX_X9` or `AMPERE_FLEX_A1`. (AMD, INTEL, INTEL_FLEX_X9, AMPERE_FLEX_A1)</td>
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
    <td><a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-shapeAttribute"><code>shapeAttribute</code></a></td>
    <td>Gets a list of the shapes that can be used to launch a new DB system. The shape determines resources to allocate to the DB system - CPU cores and memory for VM shapes; CPU cores, memory and storage for non-VM (or bare metal) shapes.</td>
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
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the Availability Domain.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return per page.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token to continue listing from.</td>
</tr>
<tr id="parameter-shapeAttribute">
    <td><CopyableCode code="shapeAttribute" /></td>
    <td><code>string</code></td>
    <td>If provided and applicable, return DB System shape parameters based on the shapeAttribute provided</td>
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

Gets a list of the shapes that can be used to launch a new DB system. The shape determines resources to allocate to the DB system - CPU cores and memory for VM shapes; CPU cores, memory and storage for non-VM (or bare metal) shapes.

```sql
SELECT
name,
areServerTypesSupported,
availableCoreCount,
availableCoreCountPerNode,
availableDataStorageInTBs,
availableDataStoragePerServerInTBs,
availableDbNodePerNodeInGBs,
availableDbNodeStorageInGBs,
availableMemoryInGBs,
availableMemoryPerNodeInGBs,
computeModel,
coreCountIncrement,
displayName,
maxStorageCount,
maximumNodeCount,
minCoreCountPerNode,
minDataStorageInTBs,
minDbNodeStoragePerNodeInGBs,
minMemoryPerNodeInGBs,
minStorageCount,
minimumCoreCount,
minimumNodeCount,
runtimeMinimumCoreCount,
shape,
shapeAttributes,
shapeFamily,
shapeType
FROM oci.database.db_system_shapes
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND availabilityDomain = '{{ availabilityDomain }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND shapeAttribute = '{{ shapeAttribute }}'
;
```
</TabItem>
</Tabs>
