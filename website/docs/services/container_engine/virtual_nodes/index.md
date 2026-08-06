--- 
title: virtual_nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_nodes
  - container_engine
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

Creates, updates, deletes, gets or lists a <code>virtual_nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.container_engine.virtual_nodes" /></td></tr>
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

The virtual node.

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
    <td>The ocid of the virtual node. (example: ocid1.virtualnode.oc1.iad.aaaaaaaaga3tombrmq3wgyrvmi3gcn3bmfsdizjwgyswgycdoy3tcmtctmyw)</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain in which this virtual node is placed</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual node. (example: My Kubernetes virtual Node)</td>
</tr>
<tr>
    <td><CopyableCode code="faultDomain" /></td>
    <td><code>string</code></td>
    <td>The fault domain of this virtual node.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesVersion" /></td>
    <td><code>string</code></td>
    <td>The version of Kubernetes this virtual node is running. (example: v1.9.4)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the state of the Virtual Node.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The state of the Virtual Node. (CREATING, ACTIVE, UPDATING, DELETING, DELETED, FAILED, NEEDS_ATTENTION) (x-obmcs-top-level-enum: #/definitions/VirtualNodeLifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>NSG Ids applied to virtual node vnic.</td>
</tr>
<tr>
    <td><CopyableCode code="privateIp" /></td>
    <td><code>string</code></td>
    <td>The private IP address of this Virtual Node.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the subnet in which this Virtual Node is placed.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the virtual node was created. (example: 2017-07-21T16:11:29Z)</td>
</tr>
<tr>
    <td><CopyableCode code="virtualNodeError" /></td>
    <td><code>string</code></td>
    <td>An error that may be associated with the virtual node.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualNodePoolId" /></td>
    <td><code>string</code></td>
    <td>The ocid of the virtual node pool this virtual node belongs to. (example: ocid1.virtualnodepool.oc1.iad.aaaaaaaanifpelnyzmkvnepohbz4ntswkpl35syzzsugdxceth3oihe8hcfq)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The properties that define a virtual node summary.

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
    <td>The ocid of the virtual node. (example: ocid1.virtualnode.oc1.iad.aaaaaaaaga3tombrmq3wgyrvmi3gcn3bmfsdizjwgyswgycdoy3tcmtctmyw)</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain in which this virtual node is placed</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The name of the virtual node. (example: My Kubernetes virtual Node)</td>
</tr>
<tr>
    <td><CopyableCode code="faultDomain" /></td>
    <td><code>string</code></td>
    <td>The fault domain of this virtual node.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesVersion" /></td>
    <td><code>string</code></td>
    <td>The version of Kubernetes this virtual node is running. (example: v1.9.4)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the state of the Virtual Node.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The state of the Virtual Node. (CREATING, ACTIVE, UPDATING, DELETING, DELETED, FAILED, NEEDS_ATTENTION) (x-obmcs-top-level-enum: #/definitions/VirtualNodeLifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>NSG Ids applied to virtual node vnic.</td>
</tr>
<tr>
    <td><CopyableCode code="privateIp" /></td>
    <td><code>string</code></td>
    <td>The private IP address of this Virtual Node.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the subnet in which this Virtual Node is placed.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the virtual node was created. (example: 2017-07-21T16:11:29Z)</td>
</tr>
<tr>
    <td><CopyableCode code="virtualNodeError" /></td>
    <td><code>string</code></td>
    <td>An error that may be associated with the virtual node.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualNodePoolId" /></td>
    <td><code>string</code></td>
    <td>The ocid of the virtual node pool this virtual node belongs to. (example: ocid1.virtualnodepool.oc1.iad.aaaaaaaanifpelnyzmkvnepohbz4ntswkpl35syzzsugdxceth3oihe8hcfq)</td>
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
    <td><a href="#parameter-virtualNodePoolId"><code>virtualNodePoolId</code></a>, <a href="#parameter-virtualNodeId"><code>virtualNodeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Get the details of a virtual node.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-virtualNodePoolId"><code>virtualNodePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a></td>
    <td>List virtual nodes in a virtual node pool.</td>
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
<tr id="parameter-virtualNodeId">
    <td><CopyableCode code="virtualNodeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the virtual node.</td>
</tr>
<tr id="parameter-virtualNodePoolId">
    <td><CopyableCode code="virtualNodePoolId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the virtual node pool.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. 1 is the minimum, 1000 is the maximum. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name to filter on.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The optional field to sort the results by.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The optional order in which to sort the results.</td>
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

Get the details of a virtual node.

```sql
SELECT
id,
availabilityDomain,
definedTags,
displayName,
faultDomain,
freeformTags,
kubernetesVersion,
lifecycleDetails,
lifecycleState,
nsgIds,
privateIp,
subnetId,
systemTags,
timeCreated,
virtualNodeError,
virtualNodePoolId
FROM oci.container_engine.virtual_nodes
WHERE virtualNodePoolId = '{{ virtualNodePoolId }}' -- required
AND virtualNodeId = '{{ virtualNodeId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

List virtual nodes in a virtual node pool.

```sql
SELECT
id,
availabilityDomain,
definedTags,
displayName,
faultDomain,
freeformTags,
kubernetesVersion,
lifecycleDetails,
lifecycleState,
nsgIds,
privateIp,
subnetId,
systemTags,
timeCreated,
virtualNodeError,
virtualNodePoolId
FROM oci.container_engine.virtual_nodes
WHERE virtualNodePoolId = '{{ virtualNodePoolId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND name = '{{ name }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
;
```
</TabItem>
</Tabs>
