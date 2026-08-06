--- 
title: block_volume_replicas
hide_title: false
hide_table_of_contents: false
keywords:
  - block_volume_replicas
  - block_storage
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

Creates, updates, deletes, gets or lists a <code>block_volume_replicas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="block_volume_replicas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.block_storage.block_volume_replicas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

The block volume replica's information has been retrieved.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The block volume replica's Oracle ID (OCID).</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the block volume replica.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="blockVolumeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the source block volume.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the block volume replica.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of a block volume replica. (PROVISIONING, AVAILABLE, ACTIVATING, TERMINATING, TERMINATED, FAULTY)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInGBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the source block volume, in GBs. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the block volume replica was created. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="timeLastSynced" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the block volume replica was last synced from the source block volume. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="totalDataTransferredInGBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total size of the data transferred from the source block volume to the block volume replica, in GBs. </td>
</tr>
<tr>
    <td><CopyableCode code="volumeGroupReplicaId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the volume group replica. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An asynchronous replica of a block volume that can then be used to create&lt;br /&gt;a new block volume or recover a block volume. For more information, see &#91;Overview&lt;br /&gt;of Cross-Region Volume Replication&#93;(/iaas/Content/Block/Concepts/volumereplication.htm)&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy.&lt;br /&gt;If you're not authorized, talk to an administrator. If you're an administrator&lt;br /&gt;who needs to write policies to give users access, see &#91;Getting Started with&lt;br /&gt;Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you&lt;br /&gt;supply string values using the API.&lt;br /&gt;

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The block volume replica's Oracle ID (OCID).</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the block volume replica.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="blockVolumeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the source block volume.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the block volume replica.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of a block volume replica. (PROVISIONING, AVAILABLE, ACTIVATING, TERMINATING, TERMINATED, FAULTY)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInGBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the source block volume, in GBs. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the block volume replica was created. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="timeLastSynced" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the block volume replica was last synced from the source block volume. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="totalDataTransferredInGBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total size of the data transferred from the source block volume to the block volume replica, in GBs. </td>
</tr>
<tr>
    <td><CopyableCode code="volumeGroupReplicaId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the volume group replica. </td>
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
    <td><a href="#parameter-blockVolumeReplicaId"><code>blockVolumeReplicaId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information for the specified block volume replica.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the block volume replicas in the specified compartment and availability domain.&lt;br /&gt;</td>
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
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr id="parameter-blockVolumeReplicaId">
    <td><CopyableCode code="blockVolumeReplicaId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the block volume replica.</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given display name exactly. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given lifecycle state. The state value is case-insensitive. </td>
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
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** In general, some "List" operations (for example, `ListInstances`) let you optionally filter by availability domain if the scope of the resource type is within a single availability domain. If you call one of these "List" operations without specifying an availability domain, the resources are grouped by availability domain, then sorted. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). The DISPLAYNAME sort order is case sensitive. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets information for the specified block volume replica.

```sql
SELECT
id,
availabilityDomain,
blockVolumeId,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
sizeInGBs,
timeCreated,
timeLastSynced,
totalDataTransferredInGBs,
volumeGroupReplicaId
FROM oci.block_storage.block_volume_replicas
WHERE blockVolumeReplicaId = '{{ blockVolumeReplicaId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the block volume replicas in the specified compartment and availability domain.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
blockVolumeId,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
sizeInGBs,
timeCreated,
timeLastSynced,
totalDataTransferredInGBs,
volumeGroupReplicaId
FROM oci.block_storage.block_volume_replicas
WHERE availabilityDomain = '{{ availabilityDomain }}' -- required
AND compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND displayName = '{{ displayName }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
;
```
</TabItem>
</Tabs>
