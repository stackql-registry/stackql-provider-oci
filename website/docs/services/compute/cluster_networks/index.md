--- 
title: cluster_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_networks
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

Creates, updates, deletes, gets or lists a <code>cluster_networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.cluster_networks" /></td></tr>
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

The cluster network was retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the cluster network.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the cluster network.</td>
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
    <td><CopyableCode code="hpcIslandId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the HPC island used by the cluster network.</td>
</tr>
<tr>
    <td><CopyableCode code="instancePools" /></td>
    <td><code>array</code></td>
    <td>The instance pools in the cluster network.  Each cluster network can have one instance pool. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the cluster network. (PROVISIONING, SCALING, STARTING, STOPPING, TERMINATING, STOPPED, TERMINATED, RUNNING)</td>
</tr>
<tr>
    <td><CopyableCode code="networkBlockIds" /></td>
    <td><code>array</code></td>
    <td>The list of network block OCIDs of the HPC island.</td>
</tr>
<tr>
    <td><CopyableCode code="placementConfiguration" /></td>
    <td><code>object</code></td>
    <td>The location for where the instance pools in a cluster network will place instances.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Summary information for a &#91;cluster network with instance pools&#93;(/iaas/Content/Compute/Tasks/managingclusternetworks.htm).&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the cluster network.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the cluster netowrk. </td>
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
    <td><CopyableCode code="instancePools" /></td>
    <td><code>array</code></td>
    <td>The instance pools in the cluster network.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the cluster network. (PROVISIONING, SCALING, STARTING, STOPPING, TERMINATING, STOPPED, TERMINATED, RUNNING)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-clusterNetworkId"><code>clusterNetworkId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a &#91;cluster network with instance pools&#93;(/iaas/Content/Compute/Tasks/managingclusternetworks.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the &#91;cluster networks with instance pools&#93;(/iaas/Content/Compute/Tasks/managingclusternetworks.htm)&lt;br /&gt;in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-instancePools"><code>instancePools</code></a>, <a href="#parameter-placementConfiguration"><code>placementConfiguration</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a &#91;cluster network with instance pools&#93;(/iaas/Content/Compute/Tasks/managingclusternetworks.htm).&lt;br /&gt;A cluster network is a group of high performance computing (HPC), GPU, or optimized bare metal&lt;br /&gt;instances that are connected with an ultra low-latency remote direct memory access (RDMA) network.&lt;br /&gt;Cluster networks with instance pools use instance pools to manage groups of identical instances.&lt;br /&gt;&lt;br /&gt;Use cluster networks with instance pools when you want predictable capacity for a specific number of identical&lt;br /&gt;instances that are managed as a group.&lt;br /&gt;&lt;br /&gt;If you want to manage instances in the RDMA network independently of each other or use different types of instances&lt;br /&gt;in the network group, create a compute cluster by using the &#91;CreateComputeCluster&#93;(#/en/iaas/latest/ComputeCluster/CreateComputeCluster)&lt;br /&gt;operation.&lt;br /&gt;&lt;br /&gt;To determine whether capacity is available for a specific shape before you create a cluster network,&lt;br /&gt;use the &#91;CreateComputeCapacityReport&#93;(#/en/iaas/latest/ComputeCapacityReport/CreateComputeCapacityReport)&lt;br /&gt;operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-clusterNetworkId"><code>clusterNetworkId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates a &#91;cluster network with instance pools&#93;(/iaas/Content/Compute/Tasks/managingclusternetworks.htm).&lt;br /&gt;The OCID of the cluster network remains the same.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-clusterNetworkId"><code>clusterNetworkId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes (terminates) a &#91;cluster network with instance pools&#93;(/iaas/Content/Compute/Tasks/managingclusternetworks.htm).&lt;br /&gt;&lt;br /&gt;When you delete a cluster network, all of its resources are permanently deleted,&lt;br /&gt;including associated instances and instance pools.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterNetworkId"><code>clusterNetworkId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a &#91;cluster network with instance pools&#93;(/iaas/Content/Compute/Tasks/managingclusternetworks.htm)&lt;br /&gt;into a different compartment within the same tenancy. For&lt;br /&gt;information about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;When you move a cluster network to a different compartment, associated resources such as the instances&lt;br /&gt;in the cluster network, boot volumes, and VNICs are not moved.&lt;br /&gt;</td>
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
<tr id="parameter-clusterNetworkId">
    <td><CopyableCode code="clusterNetworkId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the cluster network.</td>
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
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
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
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
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

Gets information about a &#91;cluster network with instance pools&#93;(/iaas/Content/Compute/Tasks/managingclusternetworks.htm).&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
freeformTags,
hpcIslandId,
instancePools,
lifecycleState,
networkBlockIds,
placementConfiguration,
timeCreated,
timeUpdated
FROM oci.compute.cluster_networks
WHERE clusterNetworkId = '{{ clusterNetworkId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the &#91;cluster networks with instance pools&#93;(/iaas/Content/Compute/Tasks/managingclusternetworks.htm)&lt;br /&gt;in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
freeformTags,
instancePools,
lifecycleState,
timeCreated,
timeUpdated
FROM oci.compute.cluster_networks
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND displayName = '{{ displayName }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
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

Creates a &#91;cluster network with instance pools&#93;(/iaas/Content/Compute/Tasks/managingclusternetworks.htm).&lt;br /&gt;A cluster network is a group of high performance computing (HPC), GPU, or optimized bare metal&lt;br /&gt;instances that are connected with an ultra low-latency remote direct memory access (RDMA) network.&lt;br /&gt;Cluster networks with instance pools use instance pools to manage groups of identical instances.&lt;br /&gt;&lt;br /&gt;Use cluster networks with instance pools when you want predictable capacity for a specific number of identical&lt;br /&gt;instances that are managed as a group.&lt;br /&gt;&lt;br /&gt;If you want to manage instances in the RDMA network independently of each other or use different types of instances&lt;br /&gt;in the network group, create a compute cluster by using the &#91;CreateComputeCluster&#93;(#/en/iaas/latest/ComputeCluster/CreateComputeCluster)&lt;br /&gt;operation.&lt;br /&gt;&lt;br /&gt;To determine whether capacity is available for a specific shape before you create a cluster network,&lt;br /&gt;use the &#91;CreateComputeCapacityReport&#93;(#/en/iaas/latest/ComputeCapacityReport/CreateComputeCapacityReport)&lt;br /&gt;operation.&lt;br /&gt;

```sql
INSERT INTO oci.compute.cluster_networks (
compartmentId,
definedTags,
displayName,
freeformTags,
instancePools,
placementConfiguration,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ instancePools }}' /* required */,
'{{ placementConfiguration }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
freeformTags,
hpcIslandId,
instancePools,
lifecycleState,
networkBlockIds,
placementConfiguration,
timeCreated,
timeUpdated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cluster_networks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cluster_networks resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment
        containing the cluster network.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a
        namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. Does not have to be unique, and it's changeable.
        Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: instancePools
      description: |
        The data to create the instance pools in the cluster network.
        Each cluster network can have one instance pool.
      value:
        - definedTags: "{{ definedTags }}"
          displayName: "{{ displayName }}"
          freeformTags: "{{ freeformTags }}"
          instanceConfigurationId: "{{ instanceConfigurationId }}"
          size: {{ size }}
    - name: placementConfiguration
      description: |
        The location for where the instance pools in a cluster network will place instances.
      value:
        availabilityDomain: "{{ availabilityDomain }}"
        primarySubnetId: "{{ primarySubnetId }}"
        primaryVnicSubnets:
          ipv6AddressIpv6SubnetCidrPairDetails:
            - ipv6SubnetCidr: "{{ ipv6SubnetCidr }}"
          isAssignIpv6Ip: {{ isAssignIpv6Ip }}
          subnetId: "{{ subnetId }}"
        secondaryVnicSubnets:
          - ipv6AddressIpv6SubnetCidrPairDetails: "{{ ipv6AddressIpv6SubnetCidrPairDetails }}"
            isAssignIpv6Ip: {{ isAssignIpv6Ip }}
            subnetId: "{{ subnetId }}"
            displayName: "{{ displayName }}"
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
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

Updates a &#91;cluster network with instance pools&#93;(/iaas/Content/Compute/Tasks/managingclusternetworks.htm).&lt;br /&gt;The OCID of the cluster network remains the same.&lt;br /&gt;

```sql
UPDATE oci.compute.cluster_networks
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
instancePools = '{{ instancePools }}'
WHERE 
clusterNetworkId = '{{ clusterNetworkId }}' --required
AND region = '{{ region }}' --required
AND opc-retry-token = '{{ opc-retry-token}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
freeformTags,
hpcIslandId,
instancePools,
lifecycleState,
networkBlockIds,
placementConfiguration,
timeCreated,
timeUpdated;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate"
    values={[
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="terminate">

Deletes (terminates) a &#91;cluster network with instance pools&#93;(/iaas/Content/Compute/Tasks/managingclusternetworks.htm).&lt;br /&gt;&lt;br /&gt;When you delete a cluster network, all of its resources are permanently deleted,&lt;br /&gt;including associated instances and instance pools.&lt;br /&gt;

```sql
DELETE FROM oci.compute.cluster_networks
WHERE clusterNetworkId = '{{ clusterNetworkId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_compartment"
    values={[
        { label: 'change_compartment', value: 'change_compartment' }
    ]}
>
<TabItem value="change_compartment">

Moves a &#91;cluster network with instance pools&#93;(/iaas/Content/Compute/Tasks/managingclusternetworks.htm)&lt;br /&gt;into a different compartment within the same tenancy. For&lt;br /&gt;information about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;When you move a cluster network to a different compartment, associated resources such as the instances&lt;br /&gt;in the cluster network, boot volumes, and VNICs are not moved.&lt;br /&gt;

```sql
EXEC oci.compute.cluster_networks.change_compartment 
@clusterNetworkId='{{ clusterNetworkId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
</Tabs>
