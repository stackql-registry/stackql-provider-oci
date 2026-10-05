--- 
title: node_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - node_pools
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

Creates, updates, deletes, gets or lists a <code>node_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="node_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.container_engine.node_pools" /></td></tr>
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

The node pool.

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
    <td>The OCID of the node pool. (example: ocid1.nodepool.oc1.iad.aaaaaaaanifpelnyzmkvnepohbz4ntswkpl35syzzsugdxceth3oihe8hcfq)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the node pool. (example: My Node Pool)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the cluster to which this node pool is attached. (example: ocid1.cluster.oc1.iad.aaaaaaaaga3tombrmq3wgyrvmi3gcn3bmfsdizjwgy4wgyldmy3dcmtcmmyw)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment in which the node pool exists. (example: ocid1.compartment.oc1..aaaaaaaafqm2df7ckwmmbtdsl2bgxsw4fcpvkoojytxrqst24yww2tdmtqcq)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="initialNodeLabels" /></td>
    <td><code>array</code></td>
    <td>A list of key/value pairs to add to nodes after they join the Kubernetes cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesVersion" /></td>
    <td><code>string</code></td>
    <td>The version of Kubernetes running on the nodes in the node pool. (example: v1.9.4)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the state of the nodepool.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The state of the nodepool. For more information, see &#91;Monitoring Clusters&#93;(/Content/ContEng/Tasks/contengmonitoringclusters.htm) (DELETED, CREATING, ACTIVE, UPDATING, DELETING, FAILED, INACTIVE, NEEDS_ATTENTION) (example: ACTIVE, x-obmcs-top-level-enum: #/definitions/NodePoolLifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="networkLaunchType" /></td>
    <td><code>string</code></td>
    <td>Emulation type for the physical network interface card (NIC) for nodes (VFIO, E1000, PARAVIRTUALIZED) (x-obmcs-top-level-enum: #/definitions/NetworkLaunchType)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfigDetails" /></td>
    <td><code>object</code></td>
    <td>The size and placement configuration of nodes in the node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeEvictionNodePoolSettings" /></td>
    <td><code>object</code></td>
    <td>Node Eviction Details configuration</td>
</tr>
<tr>
    <td><CopyableCode code="nodeImageId" /></td>
    <td><code>string</code></td>
    <td>Deprecated. see `nodeSource`. The OCID of the image running on the nodes in the node pool.  (example: ocid1.image.oc1.phx.aaaaaaaanclh465xnfvajjojj5bbjzqytunslgvnyvf3fepiiltalnglekoa)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeImageName" /></td>
    <td><code>string</code></td>
    <td>Deprecated. see `nodeSource`. The name of the image running on the nodes in the node pool.  (example: Oracle-Linux-7.4)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeMetadata" /></td>
    <td><code>object</code></td>
    <td>A list of key/value pairs to add to each underlying OCI instance in the node pool on launch.</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolCyclingDetails" /></td>
    <td><code>object</code></td>
    <td>Node Pool Cycling Details</td>
</tr>
<tr>
    <td><CopyableCode code="nodeShape" /></td>
    <td><code>string</code></td>
    <td>The name of the node shape of the nodes in the node pool. (example: VM.Standard2.4)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeShapeConfig" /></td>
    <td><code>object</code></td>
    <td>The shape configuration of the nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeSource" /></td>
    <td><code>object</code></td>
    <td>The source option for the node.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeSourceDetails" /></td>
    <td><code>object</code></td>
    <td>The details of the node's source.</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>The nodes in the node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryVnic" /></td>
    <td><code>object</code></td>
    <td>Details for node's primary VNIC</td>
</tr>
<tr>
    <td><CopyableCode code="quantityPerSubnet" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes in each subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryVnics" /></td>
    <td><code>array</code></td>
    <td>A list of secondary vnics to attach to nodes</td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKey" /></td>
    <td><code>string</code></td>
    <td>The SSH public key on each node in the node pool on launch. (example: ssh-rsa AAAAB3NzaC1yc2abc123...)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The OCIDs of the subnets in which to place nodes for this node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The properties that define a node pool summary.

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
    <td>The OCID of the node pool. (example: ocid1.nodepool.oc1.iad.aaaaaaaanifpelnyzmkvnepohbz4ntswkpl35syzzsugdxceth3oihe8hcfq)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the node pool. (example: My Node Pool)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the cluster to which this node pool is attached. (example: ocid1.cluster.oc1.iad.aaaaaaaaga3tombrmq3wgyrvmi3gcn3bmfsdizjwgy4wgyldmy3dcmtcmmyw)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment in which the node pool exists. (example: ocid1.compartment.oc1..aaaaaaaafqm2df7ckwmmbtdsl2bgxsw4fcpvkoojytxrqst24yww2tdmtqcq)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="initialNodeLabels" /></td>
    <td><code>array</code></td>
    <td>A list of key/value pairs to add to nodes after they join the Kubernetes cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesVersion" /></td>
    <td><code>string</code></td>
    <td>The version of Kubernetes running on the nodes in the node pool. (example: v1.9.4)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the state of the nodepool.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The state of the nodepool. For more information, see &#91;Monitoring Clusters&#93;(/Content/ContEng/Tasks/contengmonitoringclusters.htm) (DELETED, CREATING, ACTIVE, UPDATING, DELETING, FAILED, INACTIVE, NEEDS_ATTENTION) (example: ACTIVE, x-obmcs-top-level-enum: #/definitions/NodePoolLifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="networkLaunchType" /></td>
    <td><code>string</code></td>
    <td>Emulation type for the physical network interface card (NIC) for nodes (VFIO, E1000, PARAVIRTUALIZED) (x-obmcs-top-level-enum: #/definitions/NetworkLaunchType)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeConfigDetails" /></td>
    <td><code>object</code></td>
    <td>The size and placement configuration of nodes in the node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeEvictionNodePoolSettings" /></td>
    <td><code>object</code></td>
    <td>Node Eviction Details configuration</td>
</tr>
<tr>
    <td><CopyableCode code="nodeImageId" /></td>
    <td><code>string</code></td>
    <td>Deprecated. see `nodeSource`. The OCID of the image running on the nodes in the node pool.  (example: ocid1.image.oc1.phx.aaaaaaaanclh465xnfvajjojj5bbjzqytunslgvnyvf3fepiiltalnglekoa)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeImageName" /></td>
    <td><code>string</code></td>
    <td>Deprecated. see `nodeSource`. The name of the image running on the nodes in the node pool.  (example: Oracle-Linux-7.4)</td>
</tr>
<tr>
    <td><CopyableCode code="nodePoolCyclingDetails" /></td>
    <td><code>object</code></td>
    <td>Node Pool Cycling Details</td>
</tr>
<tr>
    <td><CopyableCode code="nodeShape" /></td>
    <td><code>string</code></td>
    <td>The name of the node shape of the nodes in the node pool. (example: VM.Standard2.4)</td>
</tr>
<tr>
    <td><CopyableCode code="nodeShapeConfig" /></td>
    <td><code>object</code></td>
    <td>The shape configuration of the nodes.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeSource" /></td>
    <td><code>object</code></td>
    <td>The source option for the node.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeSourceDetails" /></td>
    <td><code>object</code></td>
    <td>The details of the node's source.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryVnic" /></td>
    <td><code>object</code></td>
    <td>Details for node's primary VNIC</td>
</tr>
<tr>
    <td><CopyableCode code="quantityPerSubnet" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes in each subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryVnics" /></td>
    <td><code>array</code></td>
    <td>A list of secondary vnics to attach to nodes</td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKey" /></td>
    <td><code>string</code></td>
    <td>The SSH public key on each node in the node pool on launch. (example: ssh-rsa AAAAB3NzaC1yc2abc123...)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The OCIDs of the subnets in which to place nodes for this node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
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
    <td><a href="#parameter-nodePoolId"><code>nodePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Get the details of a node pool.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>List all the node pools in a compartment, and optionally filter by cluster.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-nodeShape"><code>nodeShape</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Create a new node pool.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-nodePoolId"><code>nodePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-overrideEvictionGraceDuration"><code>overrideEvictionGraceDuration</code></a>, <a href="#parameter-isForceDeletionAfterOverrideGraceDuration"><code>isForceDeletionAfterOverrideGraceDuration</code></a></td>
    <td>Update the details of a node pool.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-nodePoolId"><code>nodePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-overrideEvictionGraceDuration"><code>overrideEvictionGraceDuration</code></a>, <a href="#parameter-isForceDeletionAfterOverrideGraceDuration"><code>isForceDeletionAfterOverrideGraceDuration</code></a></td>
    <td>Delete a node pool.</td>
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
    <td>The OCID of the compartment.</td>
</tr>
<tr id="parameter-nodePoolId">
    <td><CopyableCode code="nodePoolId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the node pool.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the cluster.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-isForceDeletionAfterOverrideGraceDuration">
    <td><CopyableCode code="isForceDeletionAfterOverrideGraceDuration" /></td>
    <td><code>boolean</code></td>
    <td>If the underlying compute instance should be deleted if you cannot evict all the pods in grace period</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>array</code></td>
    <td>A list of nodepool lifecycle states on which to filter on, matching any of the list items (OR logic). eg. &#91;ACTIVE, DELETING&#93;. For more information, see &#91;Monitoring Clusters&#93;(/Content/ContEng/Tasks/contengmonitoringclusters.htm)</td>
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
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token you supply to uniquely identify the request and provide idempotency if the request is retried. Idempotency tokens expire after 24 hours. </td>
</tr>
<tr id="parameter-overrideEvictionGraceDuration">
    <td><CopyableCode code="overrideEvictionGraceDuration" /></td>
    <td><code>string (x-obmcs-duration)</code></td>
    <td>Duration after which OKE will give up eviction of the pods on the node. PT0M will indicate you want to delete the node without cordon and drain. Default PT60M, Min PT0M, Max: PT60M. Format ISO 8601 e.g PT30M </td>
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

Get the details of a node pool.

```sql
SELECT
id,
name,
clusterId,
compartmentId,
definedTags,
freeformTags,
initialNodeLabels,
kubernetesVersion,
lifecycleDetails,
lifecycleState,
networkLaunchType,
nodeConfigDetails,
nodeEvictionNodePoolSettings,
nodeImageId,
nodeImageName,
nodeMetadata,
nodePoolCyclingDetails,
nodeShape,
nodeShapeConfig,
nodeSource,
nodeSourceDetails,
nodes,
primaryVnic,
quantityPerSubnet,
secondaryVnics,
sshPublicKey,
subnetIds,
systemTags
FROM oci.container_engine.node_pools
WHERE nodePoolId = '{{ nodePoolId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

List all the node pools in a compartment, and optionally filter by cluster.

```sql
SELECT
id,
name,
clusterId,
compartmentId,
definedTags,
freeformTags,
initialNodeLabels,
kubernetesVersion,
lifecycleDetails,
lifecycleState,
networkLaunchType,
nodeConfigDetails,
nodeEvictionNodePoolSettings,
nodeImageId,
nodeImageName,
nodePoolCyclingDetails,
nodeShape,
nodeShapeConfig,
nodeSource,
nodeSourceDetails,
primaryVnic,
quantityPerSubnet,
secondaryVnics,
sshPublicKey,
subnetIds,
systemTags
FROM oci.container_engine.node_pools
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND clusterId = '{{ clusterId }}'
AND name = '{{ name }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
AND opc-request-id = '{{ opc-request-id }}'
AND lifecycleState = '{{ lifecycleState }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Create a new node pool.

```sql
INSERT INTO oci.container_engine.node_pools (
clusterId,
compartmentId,
definedTags,
freeformTags,
initialNodeLabels,
kubernetesVersion,
name,
networkLaunchType,
nodeConfigDetails,
nodeEvictionNodePoolSettings,
nodeImageName,
nodeMetadata,
nodePoolCyclingDetails,
nodeShape,
nodeShapeConfig,
nodeSourceDetails,
primaryVnic,
quantityPerSubnet,
secondaryVnics,
sshPublicKey,
subnetIds,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ clusterId }}' /* required */,
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ freeformTags }}',
'{{ initialNodeLabels }}',
'{{ kubernetesVersion }}',
'{{ name }}' /* required */,
'{{ networkLaunchType }}',
'{{ nodeConfigDetails }}',
'{{ nodeEvictionNodePoolSettings }}',
'{{ nodeImageName }}',
'{{ nodeMetadata }}',
'{{ nodePoolCyclingDetails }}',
'{{ nodeShape }}' /* required */,
'{{ nodeShapeConfig }}',
'{{ nodeSourceDetails }}',
'{{ primaryVnic }}',
{{ quantityPerSubnet }},
'{{ secondaryVnics }}',
'{{ sshPublicKey }}',
'{{ subnetIds }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: node_pools
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the node_pools resource.
    - name: clusterId
      value: "{{ clusterId }}"
      description: |
        The OCID of the cluster to which this node pool is attached.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment in which the node pool exists.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: initialNodeLabels
      description: |
        A list of key/value pairs to add to nodes after they join the Kubernetes cluster.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: kubernetesVersion
      value: "{{ kubernetesVersion }}"
      description: |
        The version of Kubernetes to install on the nodes in the node pool.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the node pool. Avoid entering confidential information.
    - name: networkLaunchType
      value: "{{ networkLaunchType }}"
      description: |
        Emulation type for the physical network interface card (NIC) for nodes
      valid_values: ['VFIO', 'E1000', 'PARAVIRTUALIZED']
    - name: nodeConfigDetails
      description: |
        The size and placement configuration of nodes in the node pool.
      value:
        computeClusterId: "{{ computeClusterId }}"
        definedTags: "{{ definedTags }}"
        freeformTags: "{{ freeformTags }}"
        isPvEncryptionInTransitEnabled: {{ isPvEncryptionInTransitEnabled }}
        kmsKeyId: "{{ kmsKeyId }}"
        nodePoolPodNetworkOptionDetails:
          cniType: "{{ cniType }}"
        nsgIds:
          - "{{ nsgIds }}"
        placementConfigs:
          - availabilityDomain: "{{ availabilityDomain }}"
            capacityReservationId: "{{ capacityReservationId }}"
            faultDomains: "{{ faultDomains }}"
            hostGroupId: "{{ hostGroupId }}"
            preemptibleNodeConfig:
              preemptionAction:
                type: "{{ type }}"
            subnetId: "{{ subnetId }}"
        size: {{ size }}
    - name: nodeEvictionNodePoolSettings
      description: |
        Node Eviction Details configuration
      value:
        evictionGraceDuration: "{{ evictionGraceDuration }}"
        isForceActionAfterGraceDuration: {{ isForceActionAfterGraceDuration }}
        isForceDeleteAfterGraceDuration: {{ isForceDeleteAfterGraceDuration }}
    - name: nodeImageName
      value: "{{ nodeImageName }}"
      description: |
        Deprecated. Use \`nodeSourceDetails\` instead.
        If you specify values for both, this value is ignored.
        The name of the image running on the nodes in the node pool.
    - name: nodeMetadata
      value: "{{ nodeMetadata }}"
      description: |
        A list of key/value pairs to add to each underlying OCI instance in the node pool on launch.
    - name: nodePoolCyclingDetails
      description: |
        Node Pool Cycling Details
      value:
        cycleModes:
          - "{{ cycleModes }}"
        isNodeCyclingEnabled: {{ isNodeCyclingEnabled }}
        maximumSurge: "{{ maximumSurge }}"
        maximumUnavailable: "{{ maximumUnavailable }}"
    - name: nodeShape
      value: "{{ nodeShape }}"
      description: |
        The name of the node shape of the nodes in the node pool.
    - name: nodeShapeConfig
      description: |
        The shape configuration of the nodes.
      value:
        memoryInGBs: {{ memoryInGBs }}
        ocpus: {{ ocpus }}
    - name: nodeSourceDetails
      description: |
        The details of the node's source.
      value:
        sourceType: "{{ sourceType }}"
    - name: primaryVnic
      description: |
        Details for node's primary VNIC
      value:
        securityAttributes: "{{ securityAttributes }}"
    - name: quantityPerSubnet
      value: {{ quantityPerSubnet }}
      description: |
        Optional, default to 1. The number of nodes to create in each subnet specified in subnetIds property.
        When used, subnetIds is required. This property is deprecated, use nodeConfigDetails instead.
      default: 1
    - name: secondaryVnics
      description: |
        A list of secondary vnics to attach to nodes
      value:
        - createVnicDetails:
            applicationResources:
              - "{{ applicationResources }}"
            assignIpv6Ip: {{ assignIpv6Ip }}
            assignPublicIp: {{ assignPublicIp }}
            definedTags: "{{ definedTags }}"
            displayName: "{{ displayName }}"
            freeformTags: "{{ freeformTags }}"
            ipCount: {{ ipCount }}
            ipv6AddressIpv6SubnetCidrPairDetails:
              - ipv6Address: "{{ ipv6Address }}"
                ipv6SubnetCidr: "{{ ipv6SubnetCidr }}"
            nsgIds:
              - "{{ nsgIds }}"
            securityAttributes: "{{ securityAttributes }}"
            skipSourceDestCheck: {{ skipSourceDestCheck }}
            subnetId: "{{ subnetId }}"
          displayName: "{{ displayName }}"
          nicIndex: {{ nicIndex }}
    - name: sshPublicKey
      value: "{{ sshPublicKey }}"
      description: |
        The SSH public key on each node in the node pool on launch.
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
      description: |
        The OCIDs of the subnets in which to place nodes for this node pool. When used, quantityPerSubnet
        can be provided. This property is deprecated, use nodeConfigDetails. Exactly one of the
        subnetIds or nodeConfigDetails properties must be specified.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token you supply to uniquely identify the request and provide idempotency if the request is retried. Idempotency tokens expire after 24 hours. 
      description: A token you supply to uniquely identify the request and provide idempotency if the request is retried. Idempotency tokens expire after 24 hours. 
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Update the details of a node pool.

```sql
UPDATE oci.container_engine.node_pools
SET 
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}',
initialNodeLabels = '{{ initialNodeLabels }}',
kubernetesVersion = '{{ kubernetesVersion }}',
name = '{{ name }}',
networkLaunchType = '{{ networkLaunchType }}',
nodeConfigDetails = '{{ nodeConfigDetails }}',
nodeEvictionNodePoolSettings = '{{ nodeEvictionNodePoolSettings }}',
nodeMetadata = '{{ nodeMetadata }}',
nodePoolCyclingDetails = '{{ nodePoolCyclingDetails }}',
nodeShape = '{{ nodeShape }}',
nodeShapeConfig = '{{ nodeShapeConfig }}',
nodeSourceDetails = '{{ nodeSourceDetails }}',
primaryVnic = '{{ primaryVnic }}',
quantityPerSubnet = {{ quantityPerSubnet }},
secondaryVnics = '{{ secondaryVnics }}',
sshPublicKey = '{{ sshPublicKey }}',
subnetIds = '{{ subnetIds }}'
WHERE 
nodePoolId = '{{ nodePoolId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
AND overrideEvictionGraceDuration = '{{ overrideEvictionGraceDuration}}'
AND isForceDeletionAfterOverrideGraceDuration = {{ isForceDeletionAfterOverrideGraceDuration}};
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete a node pool.

```sql
DELETE FROM oci.container_engine.node_pools
WHERE nodePoolId = '{{ nodePoolId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
AND overrideEvictionGraceDuration = '{{ overrideEvictionGraceDuration }}'
AND isForceDeletionAfterOverrideGraceDuration = '{{ isForceDeletionAfterOverrideGraceDuration }}'
;
```
</TabItem>
</Tabs>
