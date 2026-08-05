--- 
title: shapes
hide_title: false
hide_table_of_contents: false
keywords:
  - shapes
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

Creates, updates, deletes, gets or lists a <code>shapes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="shapes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.shapes" /></td></tr>
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

A compute instance shape that can be used in &#91;LaunchInstance&#93;(#/en/iaas/latest/Instance/LaunchInstance).&lt;br /&gt;For more information, see &#91;Overview of the Compute Service&#93;(/iaas/Content/Compute/Concepts/computeoverview.htm) and&lt;br /&gt;&#91;Compute Shapes&#93;(/iaas/Content/Compute/References/computeshapes.htm).&lt;br /&gt;

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
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The shape's availability domain.</td>
</tr>
<tr>
    <td><CopyableCode code="baselineOcpuUtilizations" /></td>
    <td><code>array</code></td>
    <td>For a subcore burstable VM, the supported baseline OCPU utilization for instances that use this shape. </td>
</tr>
<tr>
    <td><CopyableCode code="billingType" /></td>
    <td><code>string</code></td>
    <td>How instances that use this shape are charged.  (ALWAYS_FREE, LIMITED_FREE, PAID)</td>
</tr>
<tr>
    <td><CopyableCode code="gpuDescription" /></td>
    <td><code>string</code></td>
    <td>A short description of the graphics processing unit (GPU) available for this shape.  If the shape does not have any GPUs, this field is `null`. </td>
</tr>
<tr>
    <td><CopyableCode code="gpus" /></td>
    <td><code>integer</code></td>
    <td>The number of GPUs available for this shape. </td>
</tr>
<tr>
    <td><CopyableCode code="isBilledForStoppedInstance" /></td>
    <td><code>boolean</code></td>
    <td>Whether billing continues when the instances that use this shape are in the stopped state. </td>
</tr>
<tr>
    <td><CopyableCode code="isFlexible" /></td>
    <td><code>boolean</code></td>
    <td>Whether the shape supports creating flexible instances. A &#91;flexible shape&#93;(/iaas/Content/Compute/References/computeshapes.htm#flexible) is a shape that lets you customize the number of OCPUs and the amount of memory when launching or resizing your instance. </td>
</tr>
<tr>
    <td><CopyableCode code="isLiveMigrationSupported" /></td>
    <td><code>boolean</code></td>
    <td>Whether live migration is supported for this shape. </td>
</tr>
<tr>
    <td><CopyableCode code="isSubcore" /></td>
    <td><code>boolean</code></td>
    <td>Whether the shape supports creating subcore or burstable instances. A &#91;burstable instance&#93;(/iaas/Content/Compute/References/burstable-instances.htm) is a virtual machine (VM) instance that provides a baseline level of CPU performance with the ability to burst to a higher level to support occasional spikes in usage. </td>
</tr>
<tr>
    <td><CopyableCode code="localDiskDescription" /></td>
    <td><code>string</code></td>
    <td>A short description of the local disks available for this shape.  If the shape does not have any local disks, this field is `null`. </td>
</tr>
<tr>
    <td><CopyableCode code="localDisks" /></td>
    <td><code>integer</code></td>
    <td>The number of local disks available for this shape. </td>
</tr>
<tr>
    <td><CopyableCode code="localDisksTotalSizeInGBs" /></td>
    <td><code>number (float)</code></td>
    <td>The aggregate size of the local disks available for this shape, in gigabytes.  If the shape does not have any local disks, this field is `null`. </td>
</tr>
<tr>
    <td><CopyableCode code="maxVnicAttachmentOptions" /></td>
    <td><code>object</code></td>
    <td>For a flexible shape, the number of VNIC attachments that are available for instances that use this shape.  If this field is null, then this shape has a fixed maximum number of VNIC attachments equal to `maxVnicAttachments`. </td>
</tr>
<tr>
    <td><CopyableCode code="maxVnicAttachments" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of VNIC attachments available for this shape. </td>
</tr>
<tr>
    <td><CopyableCode code="memoryInGBs" /></td>
    <td><code>number (float)</code></td>
    <td>The default amount of memory available for this shape, in gigabytes. </td>
</tr>
<tr>
    <td><CopyableCode code="memoryOptions" /></td>
    <td><code>object</code></td>
    <td>For a flexible shape, the amount of memory available for instances that use this shape.  If this field is null, then this shape has a fixed amount of memory equivalent to `memoryInGBs`. </td>
</tr>
<tr>
    <td><CopyableCode code="minTotalBaselineOcpusRequired" /></td>
    <td><code>number (int32)</code></td>
    <td>For a subcore burstable VM, the minimum total baseline OCPUs required. The total baseline OCPUs is equal to baselineOcpuUtilization chosen multiplied by the number of OCPUs chosen. </td>
</tr>
<tr>
    <td><CopyableCode code="networkPorts" /></td>
    <td><code>integer</code></td>
    <td>The number of physical network interface card (NIC) ports available for this shape. </td>
</tr>
<tr>
    <td><CopyableCode code="networkingBandwidthInGbps" /></td>
    <td><code>number (float)</code></td>
    <td>The networking bandwidth available for this shape, in gigabits per second. </td>
</tr>
<tr>
    <td><CopyableCode code="networkingBandwidthOptions" /></td>
    <td><code>object</code></td>
    <td>For a flexible shape, the amount of networking bandwidth available for instances that use this shape.  If this field is null, then this shape has a fixed amount of bandwidth equivalent to `networkingBandwidthInGbps`. </td>
</tr>
<tr>
    <td><CopyableCode code="ocpuOptions" /></td>
    <td><code>object</code></td>
    <td>For a flexible shape, the number of OCPUs available for instances that use this shape.  If this field is null, then this shape has a fixed number of OCPUs equal to `ocpus`. </td>
</tr>
<tr>
    <td><CopyableCode code="ocpus" /></td>
    <td><code>number (float)</code></td>
    <td>The default number of OCPUs available for this shape. </td>
</tr>
<tr>
    <td><CopyableCode code="platformConfigOptions" /></td>
    <td><code>object</code></td>
    <td>The list of supported platform configuration options for this shape. </td>
</tr>
<tr>
    <td><CopyableCode code="platformNames" /></td>
    <td><code>array</code></td>
    <td>The list of platform names that can be used for this shapes </td>
</tr>
<tr>
    <td><CopyableCode code="processorDescription" /></td>
    <td><code>string</code></td>
    <td>A short description of the shape's processor (CPU). </td>
</tr>
<tr>
    <td><CopyableCode code="quotaNames" /></td>
    <td><code>array</code></td>
    <td>The list of of compartment quotas for the shape. </td>
</tr>
<tr>
    <td><CopyableCode code="rdmaBandwidthInGbps" /></td>
    <td><code>integer</code></td>
    <td>The networking bandwidth available for the remote direct memory access (RDMA) network for this shape, in gigabits per second. </td>
</tr>
<tr>
    <td><CopyableCode code="rdmaPorts" /></td>
    <td><code>integer</code></td>
    <td>The number of networking ports available for the remote direct memory access (RDMA) network between nodes in a high performance computing (HPC) cluster network. If the shape does not support cluster networks, this value is `0`. </td>
</tr>
<tr>
    <td><CopyableCode code="recommendedAlternatives" /></td>
    <td><code>array</code></td>
    <td>The list of shapes and shape details (if applicable) that Oracle recommends that you use as an alternative to the current shape. </td>
</tr>
<tr>
    <td><CopyableCode code="resizeCompatibleShapes" /></td>
    <td><code>array</code></td>
    <td>The list of compatible shapes that this shape can be changed to. For more information, see &#91;Changing the Shape of an Instance&#93;(/iaas/Content/Compute/Tasks/resizinginstances.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The name of the shape. You can enumerate all available shapes by calling &#91;ListShapes&#93;(#/en/iaas/latest/Shape/ListShapes). </td>
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
    <td><a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-imageId"><code>imageId</code></a>, <a href="#parameter-shape"><code>shape</code></a></td>
    <td>Lists the shapes that can be used to launch an instance within the specified compartment. You can&lt;br /&gt;filter the list by compatibility with a specific image.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_image_shape_compatibility_entry"><CopyableCode code="remove_image_shape_compatibility_entry" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-imageId"><code>imageId</code></a>, <a href="#parameter-shapeName"><code>shapeName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a shape from the compatible shapes list for the image.</td>
</tr>
<tr>
    <td><a href="#add_image_shape_compatibility_entry"><CopyableCode code="add_image_shape_compatibility_entry" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-imageId"><code>imageId</code></a>, <a href="#parameter-shapeName"><code>shapeName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds a shape to the compatible shapes list for the image.</td>
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
<tr id="parameter-imageId">
    <td><CopyableCode code="imageId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the image.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-shapeName">
    <td><CopyableCode code="shapeName" /></td>
    <td><code>string</code></td>
    <td>Shape name.</td>
</tr>
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr id="parameter-imageId">
    <td><CopyableCode code="imageId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of an image.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-shape">
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>Shape name.</td>
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

Lists the shapes that can be used to launch an instance within the specified compartment. You can&lt;br /&gt;filter the list by compatibility with a specific image.&lt;br /&gt;

```sql
SELECT
availabilityDomain,
baselineOcpuUtilizations,
billingType,
gpuDescription,
gpus,
isBilledForStoppedInstance,
isFlexible,
isLiveMigrationSupported,
isSubcore,
localDiskDescription,
localDisks,
localDisksTotalSizeInGBs,
maxVnicAttachmentOptions,
maxVnicAttachments,
memoryInGBs,
memoryOptions,
minTotalBaselineOcpusRequired,
networkPorts,
networkingBandwidthInGbps,
networkingBandwidthOptions,
ocpuOptions,
ocpus,
platformConfigOptions,
platformNames,
processorDescription,
quotaNames,
rdmaBandwidthInGbps,
rdmaPorts,
recommendedAlternatives,
resizeCompatibleShapes,
shape
FROM oci.compute.shapes
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND availabilityDomain = '{{ availabilityDomain }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND imageId = '{{ imageId }}'
AND shape = '{{ shape }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_image_shape_compatibility_entry"
    values={[
        { label: 'remove_image_shape_compatibility_entry', value: 'remove_image_shape_compatibility_entry' },
        { label: 'add_image_shape_compatibility_entry', value: 'add_image_shape_compatibility_entry' }
    ]}
>
<TabItem value="remove_image_shape_compatibility_entry">

Removes a shape from the compatible shapes list for the image.

```sql
EXEC oci.compute.shapes.remove_image_shape_compatibility_entry 
@imageId='{{ imageId }}' --required, 
@shapeName='{{ shapeName }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="add_image_shape_compatibility_entry">

Adds a shape to the compatible shapes list for the image.

```sql
EXEC oci.compute.shapes.add_image_shape_compatibility_entry 
@imageId='{{ imageId }}' --required, 
@shapeName='{{ shapeName }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"memoryConstraints": "{{ memoryConstraints }}", 
"ocpuConstraints": "{{ ocpuConstraints }}"
}'
;
```
</TabItem>
</Tabs>
