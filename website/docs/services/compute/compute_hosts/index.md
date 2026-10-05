--- 
title: compute_hosts
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_hosts
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

Creates, updates, deletes, gets or lists a <code>compute_hosts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compute_hosts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.compute_hosts" /></td></tr>
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

The information host details for the specific host was retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the Customer-unique host </td>
</tr>
<tr>
    <td><CopyableCode code="additionalData" /></td>
    <td><code>object</code></td>
    <td>Additional data that can be exposed to the customer.  Will include raw fault codes for strategic customers </td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the compute host.  Example: `Uocm:US-CHICAGO-1-AD-2` </td>
</tr>
<tr>
    <td><CopyableCode code="capacityReservationId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the Capacity Reserver that is currently on host </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the compartment. This should always be the root compartment. </td>
</tr>
<tr>
    <td><CopyableCode code="computeHostGroupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the Customer-unique host group associated with the Compute Bare Metal Host. </td>
</tr>
<tr>
    <td><CopyableCode code="configurationData" /></td>
    <td><code>object</code></td>
    <td>Compute Host Configuration Data </td>
</tr>
<tr>
    <td><CopyableCode code="configurationState" /></td>
    <td><code>string</code></td>
    <td>Configuration state of the Compute Bare Metal Host.  (CONFORMANT, NON_CONFORMANT, CHECKING, PRE_APPLYING, APPLYING, UNKNOWN) (x-obmcs-top-level-enum: #/definitions/ConfigurationState)</td>
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
    <td><CopyableCode code="faultDomain" /></td>
    <td><code>string</code></td>
    <td>A fault domain is a grouping of hardware and infrastructure within an availability domain. Each availability domain contains three fault domains. Fault domains let you distribute your instances so that they are not on the same physical hardware within a single availability domain. A hardware failure or Compute hardware maintenance that affects one fault domain does not affect instances in other fault domains.  This field is the Fault domain of the host </td>
</tr>
<tr>
    <td><CopyableCode code="firmwareBundleId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the Customer-unique firmware bundle associated with the Host. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="gpuMemoryFabricId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for Customer-unique GPU Memory Fabric </td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>string</code></td>
    <td>The heathy state of the host  (HEALTHY, UNHEALTHY)</td>
</tr>
<tr>
    <td><CopyableCode code="hpcIslandId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for Customer-unique HPC Island </td>
</tr>
<tr>
    <td><CopyableCode code="impactedComponentDetails" /></td>
    <td><code>object</code></td>
    <td>A list that contains impacted components related to an unhealthy host. An impacted component will be a  free-form structure of key values pairs that will provide more or less details based on data tiering </td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The public &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the Virtual Machine or Bare Metal instance </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>object</code></td>
    <td>A free-form description detailing why the host is in its current state. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The lifecycle state of the host  (AVAILABLE, OCCUPIED, PROVISIONING, REPAIR, UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="localBlockId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for Customer-unique Local Block </td>
</tr>
<tr>
    <td><CopyableCode code="networkBlockId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for Customer-unique Network Block </td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The platform of the host </td>
</tr>
<tr>
    <td><CopyableCode code="recycleDetails" /></td>
    <td><code>object</code></td>
    <td>Shows details about the last recycle performed on this host. </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of host </td>
</tr>
<tr>
    <td><CopyableCode code="timeConfigurationCheck" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the compute bare metal host configuration check was updated, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the compute host record was created, in the format defined by &#91;RFC3339&#93;(https:​//tools .ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the compute host record was updated, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The list of summary host details was created and retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the Customer-unique host </td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the compute host.  Example: `Uocm:US-CHICAGO-1-AD-2` </td>
</tr>
<tr>
    <td><CopyableCode code="capacityReservationId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the Capacity Reserver that is currently on host </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the compartment. This should always be the root compartment. </td>
</tr>
<tr>
    <td><CopyableCode code="computeHostGroupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the Customer-unique host group </td>
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
    <td><CopyableCode code="faultDomain" /></td>
    <td><code>string</code></td>
    <td>A fault domain is a grouping of hardware and infrastructure within an availability domain. Each availability domain contains three fault domains. Fault domains let you distribute your instances so that they are not on the same physical hardware within a single availability domain. A hardware failure or Compute hardware maintenance that affects one fault domain does not affect instances in other fault domains.  This field is the Fault domain of the host </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="gpuMemoryFabricId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for Customer-unique GPU Memory Fabric </td>
</tr>
<tr>
    <td><CopyableCode code="hasImpactedComponents" /></td>
    <td><code>boolean</code></td>
    <td>While listing a host the user will know if they have an impacted component or not.  The user will have to issue a get host to see details. </td>
</tr>
<tr>
    <td><CopyableCode code="health" /></td>
    <td><code>string</code></td>
    <td>The heathy state of the host  (x-obmcs-enumref: #/definitions/ComputeHost/health)</td>
</tr>
<tr>
    <td><CopyableCode code="hpcIslandId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for Customer-unique HPC Island </td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The public &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the Virtual Machine or Bare Metal instance </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The lifecycle state of the host  (x-obmcs-enumref: #/definitions/ComputeHost/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="localBlockId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for Customer-unique Local Block </td>
</tr>
<tr>
    <td><CopyableCode code="networkBlockId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for Customer-unique Network Block </td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The platform of the host </td>
</tr>
<tr>
    <td><CopyableCode code="recycleDetails" /></td>
    <td><code>object</code></td>
    <td>Shows details about the last recycle performed on this host. </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of host </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the compute host record was created, in the format defined by &#91;RFC3339&#93;(https:​//tools .ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the compute host record was updated, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).    Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-computeHostId"><code>computeHostId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified compute host&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-networkResourceId"><code>networkResourceId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-computeHostLifecycleState"><code>computeHostLifecycleState</code></a>, <a href="#parameter-computeHostHealth"><code>computeHostHealth</code></a>, <a href="#parameter-computeHostGroupId"><code>computeHostGroupId</code></a>, <a href="#parameter-computeHostInSubtree"><code>computeHostInSubtree</code></a></td>
    <td>Generates a list of summary host details&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#attach"><CopyableCode code="attach" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-computeHostId"><code>computeHostId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-computeHostGroupId"><code>computeHostGroupId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Attaches the Compute BM Host to a Host group</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-computeHostId"><code>computeHostId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Customer can update the some fields for ComputeHost record&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#apply_host_configuration"><CopyableCode code="apply_host_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-computeHostId"><code>computeHostId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Triggers the asynchronous process that applies the host's target configuration</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-computeHostId"><code>computeHostId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a compute host into a different compartment. For information about moving resources between&lt;br /&gt;compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#check_host_configuration"><CopyableCode code="check_host_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-computeHostId"><code>computeHostId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Marks the host to be checked for conformance to its target configuration</td>
</tr>
<tr>
    <td><a href="#detach_compute_host_group_host"><CopyableCode code="detach_compute_host_group_host" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-computeHostId"><code>computeHostId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-computeHostGroupId"><code>computeHostGroupId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Detaches the specified bare metal host from the compute host group</td>
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
<tr id="parameter-computeHostId">
    <td><CopyableCode code="computeHostId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compute host. </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr id="parameter-computeHostGroupId">
    <td><CopyableCode code="computeHostGroupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compute host group. </td>
</tr>
<tr id="parameter-computeHostHealth">
    <td><CopyableCode code="computeHostHealth" /></td>
    <td><code>string</code></td>
    <td>A filter to return only ComputeHostSummary resources that match the given Compute Host health State OCID exactly. </td>
</tr>
<tr id="parameter-computeHostInSubtree">
    <td><CopyableCode code="computeHostInSubtree" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, all the compartments in the tenancy are traversed and the hosts in the specified tenancy and its compartments are fetched. Default is false. </td>
</tr>
<tr id="parameter-computeHostLifecycleState">
    <td><CopyableCode code="computeHostLifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only ComputeHostSummary resources that match the given Compute Host lifecycle State OCID exactly. </td>
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
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
</tr>
<tr id="parameter-networkResourceId">
    <td><CopyableCode code="networkResourceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compute host network resoruce. - Customer-unique HPC island ID - Customer-unique network block ID - Customer-unique local block ID </td>
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

Gets information about the specified compute host&lt;br /&gt;

```sql
SELECT
id,
additionalData,
availabilityDomain,
capacityReservationId,
compartmentId,
computeHostGroupId,
configurationData,
configurationState,
definedTags,
displayName,
faultDomain,
firmwareBundleId,
freeformTags,
gpuMemoryFabricId,
health,
hpcIslandId,
impactedComponentDetails,
instanceId,
lifecycleDetails,
lifecycleState,
localBlockId,
networkBlockId,
platform,
recycleDetails,
shape,
timeConfigurationCheck,
timeCreated,
timeUpdated
FROM oci.compute.compute_hosts
WHERE computeHostId = '{{ computeHostId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Generates a list of summary host details&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
capacityReservationId,
compartmentId,
computeHostGroupId,
definedTags,
displayName,
faultDomain,
freeformTags,
gpuMemoryFabricId,
hasImpactedComponents,
health,
hpcIslandId,
instanceId,
lifecycleState,
localBlockId,
networkBlockId,
platform,
recycleDetails,
shape,
timeCreated,
timeUpdated
FROM oci.compute.compute_hosts
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND availabilityDomain = '{{ availabilityDomain }}'
AND displayName = '{{ displayName }}'
AND networkResourceId = '{{ networkResourceId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND computeHostLifecycleState = '{{ computeHostLifecycleState }}'
AND computeHostHealth = '{{ computeHostHealth }}'
AND computeHostGroupId = '{{ computeHostGroupId }}'
AND computeHostInSubtree = '{{ computeHostInSubtree }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="attach"
    values={[
        { label: 'attach', value: 'attach' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="attach">

Attaches the Compute BM Host to a Host group

```sql
INSERT INTO oci.compute.compute_hosts (
computeHostGroupId,
computeHostId,
region,
if-match,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ computeHostGroupId }}' /* required */,
'{{ computeHostId }}',
'{{ region }}',
'{{ if-match }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
additionalData,
availabilityDomain,
capacityReservationId,
compartmentId,
computeHostGroupId,
configurationData,
configurationState,
definedTags,
displayName,
faultDomain,
firmwareBundleId,
freeformTags,
gpuMemoryFabricId,
health,
hpcIslandId,
impactedComponentDetails,
instanceId,
lifecycleDetails,
lifecycleState,
localBlockId,
networkBlockId,
platform,
recycleDetails,
shape,
timeConfigurationCheck,
timeCreated,
timeUpdated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: compute_hosts
  props:
    - name: computeHostId
      value: "{{ computeHostId }}"
      description: Required parameter for the compute_hosts resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the compute_hosts resource.
    - name: computeHostGroupId
      value: "{{ computeHostGroupId }}"
      description: |
        'The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compute host group.'
    - name: if-match
      value: "{{ if-match }}"
      description: For optimistic concurrency control. In the PUT or DELETE call for a resource, set the \`if-match\` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. 
      description: For optimistic concurrency control. In the PUT or DELETE call for a resource, set the \`if-match\` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. 
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
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

Customer can update the some fields for ComputeHost record&lt;br /&gt;

```sql
UPDATE oci.compute.compute_hosts
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}'
WHERE 
computeHostId = '{{ computeHostId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
AND opc-retry-token = '{{ opc-retry-token}}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="apply_host_configuration"
    values={[
        { label: 'apply_host_configuration', value: 'apply_host_configuration' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'check_host_configuration', value: 'check_host_configuration' },
        { label: 'detach_compute_host_group_host', value: 'detach_compute_host_group_host' }
    ]}
>
<TabItem value="apply_host_configuration">

Triggers the asynchronous process that applies the host's target configuration

```sql
EXEC oci.compute.compute_hosts.apply_host_configuration 
@computeHostId='{{ computeHostId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="change_compartment">

Moves a compute host into a different compartment. For information about moving resources between&lt;br /&gt;compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.compute.compute_hosts.change_compartment 
@computeHostId='{{ computeHostId }}' --required, 
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
<TabItem value="check_host_configuration">

Marks the host to be checked for conformance to its target configuration

```sql
EXEC oci.compute.compute_hosts.check_host_configuration 
@computeHostId='{{ computeHostId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="detach_compute_host_group_host">

Detaches the specified bare metal host from the compute host group

```sql
EXEC oci.compute.compute_hosts.detach_compute_host_group_host 
@computeHostId='{{ computeHostId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"computeHostGroupId": "{{ computeHostGroupId }}"
}'
;
```
</TabItem>
</Tabs>
