--- 
title: vtaps
hide_title: false
hide_table_of_contents: false
keywords:
  - vtaps
  - network
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

Creates, updates, deletes, gets or lists a <code>vtaps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vtaps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.vtaps" /></td></tr>
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

The VTAP was retrieved.

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
    <td>The VTAP's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="captureFilterId" /></td>
    <td><code>string</code></td>
    <td>The capture filter's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)). </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the `Vtap` resource.</td>
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
    <td><CopyableCode code="encapsulationProtocol" /></td>
    <td><code>string</code></td>
    <td>Defines an encapsulation header type for the VTAP's mirrored traffic.  (VXLAN)</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isVtapEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Used to start or stop a `Vtap` resource.  * `TRUE` directs the VTAP to start mirroring traffic. * `FALSE` (Default) directs the VTAP to stop mirroring traffic. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The VTAP's administrative lifecycle state. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleStateDetails" /></td>
    <td><code>string</code></td>
    <td>The VTAP's current running state. (RUNNING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="maxPacketSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum size of the packets to be included in the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the source point where packets are captured. </td>
</tr>
<tr>
    <td><CopyableCode code="sourcePrivateEndpointIp" /></td>
    <td><code>string</code></td>
    <td>The IP Address of the source private endpoint. </td>
</tr>
<tr>
    <td><CopyableCode code="sourcePrivateEndpointSubnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the subnet that source private endpoint belongs to. </td>
</tr>
<tr>
    <td><CopyableCode code="sourceType" /></td>
    <td><code>string</code></td>
    <td>The source type for the VTAP.  (VNIC, SUBNET, LOAD_BALANCER, DB_SYSTEM, EXADATA_VM_CLUSTER, AUTONOMOUS_DATA_WAREHOUSE)</td>
</tr>
<tr>
    <td><CopyableCode code="targetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the destination resource where mirrored packets are sent. </td>
</tr>
<tr>
    <td><CopyableCode code="targetIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the destination resource where mirrored packets are sent. </td>
</tr>
<tr>
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td>The target type for the VTAP.  (VNIC, NETWORK_LOAD_BALANCER, IP_ADDRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the VTAP was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2020-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="trafficMode" /></td>
    <td><code>string</code></td>
    <td>Used to control the priority of traffic. It is an optional field. If it not passed, the value is DEFAULT (DEFAULT, PRIORITY) (default: DEFAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN containing the `Vtap` resource.</td>
</tr>
<tr>
    <td><CopyableCode code="vxlanNetworkIdentifier" /></td>
    <td><code>integer (int64)</code></td>
    <td>The virtual extensible LAN (VXLAN) network identifier (or VXLAN segment ID) that uniquely identifies the VXLAN. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A virtual test access point (VTAP) provides a way to mirror all traffic from a designated source to a selected target in order to facilitate troubleshooting, security analysis, and data monitoring.&lt;br /&gt;A VTAP is functionally similar to a test access point (TAP) you might deploy in your on-premises network.&lt;br /&gt;&lt;br /&gt;A *&#91;capture filter&#93;(#/en/iaas/latest/CaptureFilter)* contains a set of *&#91;rules&#93;(#/en/iaas/latest/datatypes/CaptureFilterRuleDetails)* governing what traffic a VTAP mirrors.&lt;br /&gt;

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
    <td>The VTAP's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="captureFilterId" /></td>
    <td><code>string</code></td>
    <td>The capture filter's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)). </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the `Vtap` resource.</td>
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
    <td><CopyableCode code="encapsulationProtocol" /></td>
    <td><code>string</code></td>
    <td>Defines an encapsulation header type for the VTAP's mirrored traffic.  (VXLAN)</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isVtapEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Used to start or stop a `Vtap` resource.  * `TRUE` directs the VTAP to start mirroring traffic. * `FALSE` (Default) directs the VTAP to stop mirroring traffic. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The VTAP's administrative lifecycle state. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleStateDetails" /></td>
    <td><code>string</code></td>
    <td>The VTAP's current running state. (RUNNING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="maxPacketSize" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum size of the packets to be included in the filter.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the source point where packets are captured. </td>
</tr>
<tr>
    <td><CopyableCode code="sourcePrivateEndpointIp" /></td>
    <td><code>string</code></td>
    <td>The IP Address of the source private endpoint. </td>
</tr>
<tr>
    <td><CopyableCode code="sourcePrivateEndpointSubnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the subnet that source private endpoint belongs to. </td>
</tr>
<tr>
    <td><CopyableCode code="sourceType" /></td>
    <td><code>string</code></td>
    <td>The source type for the VTAP.  (VNIC, SUBNET, LOAD_BALANCER, DB_SYSTEM, EXADATA_VM_CLUSTER, AUTONOMOUS_DATA_WAREHOUSE)</td>
</tr>
<tr>
    <td><CopyableCode code="targetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the destination resource where mirrored packets are sent. </td>
</tr>
<tr>
    <td><CopyableCode code="targetIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the destination resource where mirrored packets are sent. </td>
</tr>
<tr>
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td>The target type for the VTAP.  (VNIC, NETWORK_LOAD_BALANCER, IP_ADDRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the VTAP was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2020-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="trafficMode" /></td>
    <td><code>string</code></td>
    <td>Used to control the priority of traffic. It is an optional field. If it not passed, the value is DEFAULT (DEFAULT, PRIORITY) (default: DEFAULT)</td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN containing the `Vtap` resource.</td>
</tr>
<tr>
    <td><CopyableCode code="vxlanNetworkIdentifier" /></td>
    <td><code>integer (int64)</code></td>
    <td>The virtual extensible LAN (VXLAN) network identifier (or VXLAN segment ID) that uniquely identifies the VXLAN. </td>
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
    <td><a href="#parameter-vtapId"><code>vtapId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified `Vtap` resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-targetId"><code>targetId</code></a>, <a href="#parameter-targetIp"><code>targetIp</code></a>, <a href="#parameter-isVtapEnabled"><code>isVtapEnabled</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the virtual test access points (VTAPs) in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-sourceId"><code>sourceId</code></a>, <a href="#parameter-captureFilterId"><code>captureFilterId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a virtual test access point (VTAP) in the specified compartment.&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the VTAP.&lt;br /&gt;For more information about compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;For information about OCIDs, see &#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the VTAP, otherwise a default is provided.&lt;br /&gt;It does not have to be unique, and you can change it.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-vtapId"><code>vtapId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified VTAP's display name or tags.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-vtapId"><code>vtapId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the specified VTAP. This is an asynchronous operation. The VTAP's `lifecycleState` will change to&lt;br /&gt;TERMINATING temporarily until the VTAP is completely removed.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vtapId"><code>vtapId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a VTAP to a new compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-vtapId">
    <td><CopyableCode code="vtapId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VTAP.</td>
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
<tr id="parameter-isVtapEnabled">
    <td><CopyableCode code="isVtapEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to list all VTAPs or only running VTAPs.  * When `FALSE`, lists ALL running and stopped VTAPs. * When `TRUE`, lists only running VTAPs (VTAPs where isVtapEnabled = `TRUE`). </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given VTAP administrative lifecycle state. The state value is case-insensitive. </td>
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
<tr id="parameter-source">
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VTAP source.</td>
</tr>
<tr id="parameter-targetId">
    <td><CopyableCode code="targetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VTAP target.</td>
</tr>
<tr id="parameter-targetIp">
    <td><CopyableCode code="targetIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the VTAP target.</td>
</tr>
<tr id="parameter-vcnId">
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN.</td>
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

Gets the specified `Vtap` resource.

```sql
SELECT
id,
captureFilterId,
compartmentId,
definedTags,
displayName,
encapsulationProtocol,
freeformTags,
isVtapEnabled,
lifecycleState,
lifecycleStateDetails,
maxPacketSize,
sourceId,
sourcePrivateEndpointIp,
sourcePrivateEndpointSubnetId,
sourceType,
targetId,
targetIp,
targetType,
timeCreated,
trafficMode,
vcnId,
vxlanNetworkIdentifier
FROM oci.network.vtaps
WHERE vtapId = '{{ vtapId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the virtual test access points (VTAPs) in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
captureFilterId,
compartmentId,
definedTags,
displayName,
encapsulationProtocol,
freeformTags,
isVtapEnabled,
lifecycleState,
lifecycleStateDetails,
maxPacketSize,
sourceId,
sourcePrivateEndpointIp,
sourcePrivateEndpointSubnetId,
sourceType,
targetId,
targetIp,
targetType,
timeCreated,
trafficMode,
vcnId,
vxlanNetworkIdentifier
FROM oci.network.vtaps
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND vcnId = '{{ vcnId }}'
AND source = '{{ source }}'
AND targetId = '{{ targetId }}'
AND targetIp = '{{ targetIp }}'
AND isVtapEnabled = '{{ isVtapEnabled }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND displayName = '{{ displayName }}'
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

Creates a virtual test access point (VTAP) in the specified compartment.&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the VTAP.&lt;br /&gt;For more information about compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;For information about OCIDs, see &#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the VTAP, otherwise a default is provided.&lt;br /&gt;It does not have to be unique, and you can change it.&lt;br /&gt;

```sql
INSERT INTO oci.network.vtaps (
captureFilterId,
compartmentId,
definedTags,
displayName,
encapsulationProtocol,
freeformTags,
isVtapEnabled,
maxPacketSize,
sourceId,
sourcePrivateEndpointIp,
sourcePrivateEndpointSubnetId,
sourceType,
targetId,
targetIp,
targetType,
trafficMode,
vcnId,
vxlanNetworkIdentifier,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ captureFilterId }}' /* required */,
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ encapsulationProtocol }}',
'{{ freeformTags }}',
{{ isVtapEnabled }},
{{ maxPacketSize }},
'{{ sourceId }}' /* required */,
'{{ sourcePrivateEndpointIp }}',
'{{ sourcePrivateEndpointSubnetId }}',
'{{ sourceType }}',
'{{ targetId }}',
'{{ targetIp }}',
'{{ targetType }}',
'{{ trafficMode }}',
'{{ vcnId }}' /* required */,
{{ vxlanNetworkIdentifier }},
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
captureFilterId,
compartmentId,
definedTags,
displayName,
encapsulationProtocol,
freeformTags,
isVtapEnabled,
lifecycleState,
lifecycleStateDetails,
maxPacketSize,
sourceId,
sourcePrivateEndpointIp,
sourcePrivateEndpointSubnetId,
sourceType,
targetId,
targetIp,
targetType,
timeCreated,
trafficMode,
vcnId,
vxlanNetworkIdentifier
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vtaps
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vtaps resource.
    - name: captureFilterId
      value: "{{ captureFilterId }}"
      description: |
        The capture filter's Oracle ID ([OCID](/iaas/Content/General/Concepts/identifiers.htm)).
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the \`Vtap\` resource.
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
    - name: encapsulationProtocol
      value: "{{ encapsulationProtocol }}"
      description: |
        Defines an encapsulation header type for the VTAP's mirrored traffic.
      valid_values: ['VXLAN']
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: isVtapEnabled
      value: {{ isVtapEnabled }}
      description: |
        Used to start or stop a \`Vtap\` resource.
        * \`TRUE\` directs the VTAP to start mirroring traffic.
        * \`FALSE\` (Default) directs the VTAP to stop mirroring traffic.
      default: false
    - name: maxPacketSize
      value: {{ maxPacketSize }}
      description: |
        The maximum size of the packets to be included in the filter.
    - name: sourceId
      value: "{{ sourceId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the source point where packets are captured.
    - name: sourcePrivateEndpointIp
      value: "{{ sourcePrivateEndpointIp }}"
      description: |
        The IP Address of the source private endpoint.
    - name: sourcePrivateEndpointSubnetId
      value: "{{ sourcePrivateEndpointSubnetId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the subnet that source private endpoint belongs to.
    - name: sourceType
      value: "{{ sourceType }}"
      description: |
        The source type for the VTAP.
      valid_values: ['VNIC', 'SUBNET', 'LOAD_BALANCER', 'DB_SYSTEM', 'EXADATA_VM_CLUSTER', 'AUTONOMOUS_DATA_WAREHOUSE']
    - name: targetId
      value: "{{ targetId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the destination resource where mirrored packets are sent.
    - name: targetIp
      value: "{{ targetIp }}"
      description: |
        The IP address of the destination resource where mirrored packets are sent.
    - name: targetType
      value: "{{ targetType }}"
      description: |
        The target type for the VTAP.
      valid_values: ['VNIC', 'NETWORK_LOAD_BALANCER', 'IP_ADDRESS']
    - name: trafficMode
      value: "{{ trafficMode }}"
      description: |
        Used to control the priority of traffic. It is an optional field. If it not passed, the value is DEFAULT
      valid_values: ['DEFAULT', 'PRIORITY']
      default: DEFAULT
    - name: vcnId
      value: "{{ vcnId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the VCN containing the \`Vtap\` resource.
    - name: vxlanNetworkIdentifier
      value: {{ vxlanNetworkIdentifier }}
      description: |
        The virtual extensible LAN (VXLAN) network identifier (or VXLAN segment ID) that uniquely identifies the VXLAN.
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

Updates the specified VTAP's display name or tags.&lt;br /&gt;

```sql
UPDATE oci.network.vtaps
SET 
captureFilterId = '{{ captureFilterId }}',
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
encapsulationProtocol = '{{ encapsulationProtocol }}',
freeformTags = '{{ freeformTags }}',
isVtapEnabled = {{ isVtapEnabled }},
maxPacketSize = {{ maxPacketSize }},
sourceId = '{{ sourceId }}',
sourcePrivateEndpointIp = '{{ sourcePrivateEndpointIp }}',
sourcePrivateEndpointSubnetId = '{{ sourcePrivateEndpointSubnetId }}',
sourceType = '{{ sourceType }}',
targetId = '{{ targetId }}',
targetIp = '{{ targetIp }}',
targetType = '{{ targetType }}',
trafficMode = '{{ trafficMode }}',
vxlanNetworkIdentifier = {{ vxlanNetworkIdentifier }}
WHERE 
vtapId = '{{ vtapId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
captureFilterId,
compartmentId,
definedTags,
displayName,
encapsulationProtocol,
freeformTags,
isVtapEnabled,
lifecycleState,
lifecycleStateDetails,
maxPacketSize,
sourceId,
sourcePrivateEndpointIp,
sourcePrivateEndpointSubnetId,
sourceType,
targetId,
targetIp,
targetType,
timeCreated,
trafficMode,
vcnId,
vxlanNetworkIdentifier;
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

Deletes the specified VTAP. This is an asynchronous operation. The VTAP's `lifecycleState` will change to&lt;br /&gt;TERMINATING temporarily until the VTAP is completely removed.&lt;br /&gt;

```sql
DELETE FROM oci.network.vtaps
WHERE vtapId = '{{ vtapId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
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

Moves a VTAP to a new compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.network.vtaps.change_compartment 
@vtapId='{{ vtapId }}' --required, 
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
