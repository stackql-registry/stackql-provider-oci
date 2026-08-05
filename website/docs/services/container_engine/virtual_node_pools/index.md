--- 
title: virtual_node_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_node_pools
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

Creates, updates, deletes, gets or lists a <code>virtual_node_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_node_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.container_engine.virtual_node_pools" /></td></tr>
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

The virtual node pool.

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
    <td>The OCID of the virtual node pool. (example: ocid1.virtualnodepool.oc1.iad.aaaaaaaanifpelnyzmkvnepohbz4ntswkpl35syzzsugdxceth3oihe8hcfq)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>The cluster the virtual node pool is associated with. A virtual node pool can only be associated with one cluster. (example: ocid1.cluster.oc1.iad.aaaaaaaaga3tombrmq3wgyrvmi3gcn3bmfsdizjwgy4wgyldmy3dcmtcmmyw)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>Compartment of the virtual node pool. (example: ocid1.compartment.oc1..aaaaaaaafqm2df7ckwmmbtdsl2bgxsw4fcpvkoojytxrqst24yww2tdmtqcq)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name of the virtual node pool. This is a non-unique value. (example: My Virtual Node Pool)</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="initialVirtualNodeLabels" /></td>
    <td><code>array</code></td>
    <td>Initial labels that will be added to the Kubernetes Virtual Node object when it registers. This is the same as virtualNodePool resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesVersion" /></td>
    <td><code>string</code></td>
    <td>The version of Kubernetes running on the nodes in the node pool. (example: v1.9.4)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the state of the Virtual Node Pool. (example: updating.)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The state of the Virtual Node Pool. (CREATING, ACTIVE, UPDATING, DELETING, DELETED, FAILED, NEEDS_ATTENTION) (x-obmcs-top-level-enum: #/definitions/VirtualNodePoolLifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>List of network security group id's applied to the Virtual Node VNIC.</td>
</tr>
<tr>
    <td><CopyableCode code="placementConfigurations" /></td>
    <td><code>array</code></td>
    <td>The list of placement configurations which determines where Virtual Nodes will be provisioned across as it relates to the subnet and availability domains. The size attribute determines how many we evenly spread across these placement configurations</td>
</tr>
<tr>
    <td><CopyableCode code="podConfiguration" /></td>
    <td><code>object</code></td>
    <td>The pod configuration for pods run on virtual nodes of this virtual node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of Virtual Nodes that should be in the Virtual Node Pool. The placement configurations determine where these virtual nodes are placed.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="taints" /></td>
    <td><code>array</code></td>
    <td>A taint is a collection of &lt;key, value, effect&gt;. These taints will be applied to the Virtual Nodes of this Virtual Node Pool for Kubernetes scheduling.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the virtual node pool was created. (example: 2017-07-21T16:11:29Z)</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the virtual node pool was updated. (example: 2017-07-21T16:11:29Z)</td>
</tr>
<tr>
    <td><CopyableCode code="virtualNodePoolCyclingDetails" /></td>
    <td><code>object</code></td>
    <td>Virtual Node Pool Cycling Details</td>
</tr>
<tr>
    <td><CopyableCode code="virtualNodeTags" /></td>
    <td><code>object</code></td>
    <td>The tags associated to the virtual nodes in this virtual node pool.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The properties that define a virtual node pool summary.

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
    <td>The OCID of the virtual node pool. (example: ocid1.nodepool.oc1.iad.aaaaaaaanifpelnyzmkvnepohbz4ntswkpl35syzzsugdxceth3oihe8hcfq)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>The cluster the virtual node pool is associated with. A virtual node pool can only be associated with one cluster. (example: ocid1.cluster.oc1.iad.aaaaaaaaga3tombrmq3wgyrvmi3gcn3bmfsdizjwgy4wgyldmy3dcmtcmmyw)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>Compartment of the virtual node pool. (example: ocid1.compartment.oc1..aaaaaaaafqm2df7ckwmmbtdsl2bgxsw4fcpvkoojytxrqst24yww2tdmtqcq)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name of the virtual node pool. This is a non-unique value. (example: My Virtual Node Pool)</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="initialVirtualNodeLabels" /></td>
    <td><code>array</code></td>
    <td>Initial labels that will be added to the Kubernetes Virtual Node object when it registers. This is the same as virtualNodePool resources.</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesVersion" /></td>
    <td><code>string</code></td>
    <td>The version of Kubernetes running on the nodes in the node pool. (example: v1.9.4)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the state of the Virtual Node Pool. (example: updating.)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The state of the Virtual Node Pool. (CREATING, ACTIVE, UPDATING, DELETING, DELETED, FAILED, NEEDS_ATTENTION) (x-obmcs-top-level-enum: #/definitions/VirtualNodePoolLifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>List of network security group id's applied to the Virtual Node VNIC.</td>
</tr>
<tr>
    <td><CopyableCode code="placementConfigurations" /></td>
    <td><code>array</code></td>
    <td>The list of placement configurations which determines where Virtual Nodes will be provisioned across as it relates to the subnet and availability domains. The size attribute determines how many we evenly spread across these placement configurations</td>
</tr>
<tr>
    <td><CopyableCode code="podConfiguration" /></td>
    <td><code>object</code></td>
    <td>The pod configuration for pods run on virtual nodes of this virtual node pool.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of Virtual Nodes that should be in the Virtual Node Pool. The placement configurations determine where these virtual nodes are placed.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="taints" /></td>
    <td><code>array</code></td>
    <td>A taint is a collection of &lt;key, value, effect&gt;. These taints will be applied to the Virtual Nodes of this Virtual Node Pool for Kubernetes scheduling.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the virtual node pool was created. (example: 2017-07-21T16:11:29Z)</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the virtual node pool was updated. (example: 2017-07-21T16:11:29Z)</td>
</tr>
<tr>
    <td><CopyableCode code="virtualNodePoolCyclingDetails" /></td>
    <td><code>object</code></td>
    <td>Virtual Node Pool Cycling Details</td>
</tr>
<tr>
    <td><CopyableCode code="virtualNodeTags" /></td>
    <td><code>object</code></td>
    <td>The tags associated to the virtual nodes in this virtual node pool.</td>
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
    <td><a href="#parameter-virtualNodePoolId"><code>virtualNodePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Get the details of a virtual node pool.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>List all the virtual node pools in a compartment, and optionally filter by cluster.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-placementConfigurations"><code>placementConfigurations</code></a>, <a href="#parameter-podConfiguration"><code>podConfiguration</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Create a new virtual node pool.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-virtualNodePoolId"><code>virtualNodePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Update the details of a virtual node pool.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-virtualNodePoolId"><code>virtualNodePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-overrideEvictionGraceDurationVnp"><code>overrideEvictionGraceDurationVnp</code></a>, <a href="#parameter-isForceDeletionAfterOverrideGraceDurationVnp"><code>isForceDeletionAfterOverrideGraceDurationVnp</code></a></td>
    <td>Delete a virtual node pool.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-virtualNodePoolId">
    <td><CopyableCode code="virtualNodePoolId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the virtual node pool.</td>
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
<tr id="parameter-isForceDeletionAfterOverrideGraceDurationVnp">
    <td><CopyableCode code="isForceDeletionAfterOverrideGraceDurationVnp" /></td>
    <td><code>boolean</code></td>
    <td>If the underlying virtual node should be force deleted if all the pods are not evicted in the evictionGraceDuration.</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>array</code></td>
    <td>A virtual node pool lifecycle state to filter on. Can have multiple parameters of this name.</td>
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
<tr id="parameter-overrideEvictionGraceDurationVnp">
    <td><CopyableCode code="overrideEvictionGraceDurationVnp" /></td>
    <td><code>string (x-obmcs-duration)</code></td>
    <td>Duration after which SKE will give up eviction of the pods on the node. PT0M will indicate you want to delete the virtual node without cordon and drain. Default PT60M, Min PT0M, Max: PT60M. Format ISO 8601 e.g PT30M </td>
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

Get the details of a virtual node pool.

```sql
SELECT
id,
clusterId,
compartmentId,
definedTags,
displayName,
freeformTags,
initialVirtualNodeLabels,
kubernetesVersion,
lifecycleDetails,
lifecycleState,
nsgIds,
placementConfigurations,
podConfiguration,
size,
systemTags,
taints,
timeCreated,
timeUpdated,
virtualNodePoolCyclingDetails,
virtualNodeTags
FROM oci.container_engine.virtual_node_pools
WHERE virtualNodePoolId = '{{ virtualNodePoolId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

List all the virtual node pools in a compartment, and optionally filter by cluster.

```sql
SELECT
id,
clusterId,
compartmentId,
definedTags,
displayName,
freeformTags,
initialVirtualNodeLabels,
kubernetesVersion,
lifecycleDetails,
lifecycleState,
nsgIds,
placementConfigurations,
podConfiguration,
size,
systemTags,
taints,
timeCreated,
timeUpdated,
virtualNodePoolCyclingDetails,
virtualNodeTags
FROM oci.container_engine.virtual_node_pools
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND clusterId = '{{ clusterId }}'
AND name = '{{ name }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
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

Create a new virtual node pool.

```sql
INSERT INTO oci.container_engine.virtual_node_pools (
clusterId,
compartmentId,
definedTags,
displayName,
freeformTags,
initialVirtualNodeLabels,
nsgIds,
placementConfigurations,
podConfiguration,
size,
taints,
virtualNodePoolCyclingDetails,
virtualNodeTags,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ clusterId }}' /* required */,
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ freeformTags }}',
'{{ initialVirtualNodeLabels }}',
'{{ nsgIds }}',
'{{ placementConfigurations }}' /* required */,
'{{ podConfiguration }}' /* required */,
{{ size }} /* required */,
'{{ taints }}',
'{{ virtualNodePoolCyclingDetails }}',
'{{ virtualNodeTags }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: virtual_node_pools
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the virtual_node_pools resource.
    - name: clusterId
      value: "{{ clusterId }}"
      description: |
        The cluster the virtual node pool is associated with. A virtual node pool can only be associated with one cluster.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        Compartment of the virtual node pool.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        Display name of the virtual node pool. This is a non-unique value.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: initialVirtualNodeLabels
      description: |
        Initial labels that will be added to the Kubernetes Virtual Node object when it registers.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: nsgIds
      value:
        - "{{ nsgIds }}"
      description: |
        List of network security group id's applied to the Virtual Node VNIC.
    - name: placementConfigurations
      description: |
        The list of placement configurations which determines where Virtual Nodes will be provisioned across as it relates to the subnet and availability domains. The size attribute determines how many we evenly spread across these placement configurations
      value:
        - availabilityDomain: "{{ availabilityDomain }}"
          faultDomain: "{{ faultDomain }}"
          subnetId: "{{ subnetId }}"
    - name: podConfiguration
      description: |
        The pod configuration for pods run on virtual nodes of this virtual node pool.
      value:
        nsgIds:
          - "{{ nsgIds }}"
        shape: "{{ shape }}"
        subnetId: "{{ subnetId }}"
    - name: size
      value: {{ size }}
      description: |
        The number of Virtual Nodes that should be in the Virtual Node Pool. The placement configurations determine where these virtual nodes are placed.
    - name: taints
      description: |
        A taint is a collection of <key, value, effect>. These taints will be applied to the Virtual Nodes of this Virtual Node Pool for Kubernetes scheduling.
      value:
        - effect: "{{ effect }}"
          key: "{{ key }}"
          value: "{{ value }}"
    - name: virtualNodePoolCyclingDetails
      description: |
        Virtual Node Pool Cycling Details
      value:
        isVirtualNodeCyclingEnabled: {{ isVirtualNodeCyclingEnabled }}
        maximumSurge: "{{ maximumSurge }}"
        maximumUnavailable: "{{ maximumUnavailable }}"
    - name: virtualNodeTags
      description: |
        The tags associated to the virtual nodes in this virtual node pool.
      value:
        definedTags: "{{ definedTags }}"
        freeformTags: "{{ freeformTags }}"
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

Update the details of a virtual node pool.

```sql
UPDATE oci.container_engine.virtual_node_pools
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
initialVirtualNodeLabels = '{{ initialVirtualNodeLabels }}',
nsgIds = '{{ nsgIds }}',
placementConfigurations = '{{ placementConfigurations }}',
podConfiguration = '{{ podConfiguration }}',
size = {{ size }},
taints = '{{ taints }}',
virtualNodePoolCyclingDetails = '{{ virtualNodePoolCyclingDetails }}',
virtualNodeTags = '{{ virtualNodeTags }}'
WHERE 
virtualNodePoolId = '{{ virtualNodePoolId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}';
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

Delete a virtual node pool.

```sql
DELETE FROM oci.container_engine.virtual_node_pools
WHERE virtualNodePoolId = '{{ virtualNodePoolId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
AND overrideEvictionGraceDurationVnp = '{{ overrideEvictionGraceDurationVnp }}'
AND isForceDeletionAfterOverrideGraceDurationVnp = '{{ isForceDeletionAfterOverrideGraceDurationVnp }}'
;
```
</TabItem>
</Tabs>
