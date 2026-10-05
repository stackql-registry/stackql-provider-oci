--- 
title: vlans
hide_title: false
hide_table_of_contents: false
keywords:
  - vlans
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

Creates, updates, deletes, gets or lists a <code>vlans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vlans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.vlans" /></td></tr>
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

The VLAN was retrieved.

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
    <td>The VLAN's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the VLAN.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="cidrBlock" /></td>
    <td><code>string</code></td>
    <td>The range of IPv4 addresses that will be used for layer 3 communication with hosts outside the VLAN.  Example: `192.168.1.0/24` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the VLAN.</td>
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
    <td>The VLAN's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>A list of the OCIDs of the network security groups (NSGs) to use with this VLAN. All VNICs in the VLAN belong to these NSGs. For more information about NSGs, see &#91;NetworkSecurityGroup&#93;(#/en/iaas/latest/NetworkSecurityGroup/). </td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table that the VLAN uses.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the VLAN was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN the VLAN is in.</td>
</tr>
<tr>
    <td><CopyableCode code="vlanTag" /></td>
    <td><code>integer (int32)</code></td>
    <td>The IEEE 802.1Q VLAN tag of this VLAN.  Example: `100` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A resource to be used only with the Oracle Cloud VMware Solution.&lt;br /&gt;&lt;br /&gt;Conceptually, a virtual LAN (VLAN) is a broadcast domain that is created&lt;br /&gt;by partitioning and isolating a network at the data link layer (a *layer 2 network*).&lt;br /&gt;VLANs work by using IEEE 802.1Q VLAN tags. Layer 2 traffic is forwarded within the&lt;br /&gt;VLAN based on MAC learning.&lt;br /&gt;&lt;br /&gt;In the Networking service, a VLAN is an object within a VCN. You use VLANs to&lt;br /&gt;partition the VCN at the data link layer (layer 2). A VLAN is analagous to a subnet,&lt;br /&gt;which is an object for partitioning the VCN at the IP layer (layer 3).&lt;br /&gt;

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
    <td>The VLAN's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the VLAN.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="cidrBlock" /></td>
    <td><code>string</code></td>
    <td>The range of IPv4 addresses that will be used for layer 3 communication with hosts outside the VLAN.  Example: `192.168.1.0/24` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the VLAN.</td>
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
    <td>The VLAN's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>A list of the OCIDs of the network security groups (NSGs) to use with this VLAN. All VNICs in the VLAN belong to these NSGs. For more information about NSGs, see &#91;NetworkSecurityGroup&#93;(#/en/iaas/latest/NetworkSecurityGroup/). </td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table that the VLAN uses.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the VLAN was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN the VLAN is in.</td>
</tr>
<tr>
    <td><CopyableCode code="vlanTag" /></td>
    <td><code>integer (int32)</code></td>
    <td>The IEEE 802.1Q VLAN tag of this VLAN.  Example: `100` </td>
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
    <td><a href="#parameter-vlanId"><code>vlanId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified VLAN's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the VLANs in the specified VCN and the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-cidrBlock"><code>cidrBlock</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a VLAN in the specified VCN and the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-vlanId"><code>vlanId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified VLAN. Note that this operation might require changes to all&lt;br /&gt;the VNICs in the VLAN, which can take a while. The VLAN will be in the UPDATING state until the changes are complete.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-vlanId"><code>vlanId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the specified VLAN, but only if there are no VNICs in the VLAN.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vlanId"><code>vlanId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a VLAN into a different compartment within the same tenancy.&lt;br /&gt;For information about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-vcnId">
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN.</td>
</tr>
<tr id="parameter-vlanId">
    <td><CopyableCode code="vlanId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VLAN.</td>
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

Gets the specified VLAN's information.

```sql
SELECT
id,
availabilityDomain,
cidrBlock,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
nsgIds,
routeTableId,
timeCreated,
vcnId,
vlanTag
FROM oci.network.vlans
WHERE vlanId = '{{ vlanId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the VLANs in the specified VCN and the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
cidrBlock,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
nsgIds,
routeTableId,
timeCreated,
vcnId,
vlanTag
FROM oci.network.vlans
WHERE compartmentId = '{{ compartmentId }}' -- required
AND vcnId = '{{ vcnId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND displayName = '{{ displayName }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
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

Creates a VLAN in the specified VCN and the specified compartment.&lt;br /&gt;

```sql
INSERT INTO oci.network.vlans (
availabilityDomain,
cidrBlock,
compartmentId,
definedTags,
displayName,
freeformTags,
nsgIds,
routeTableId,
vcnId,
vlanTag,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ availabilityDomain }}' /* required */,
'{{ cidrBlock }}' /* required */,
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ nsgIds }}',
'{{ routeTableId }}',
'{{ vcnId }}' /* required */,
{{ vlanTag }},
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
availabilityDomain,
cidrBlock,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
nsgIds,
routeTableId,
timeCreated,
vcnId,
vlanTag
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vlans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vlans resource.
    - name: availabilityDomain
      value: "{{ availabilityDomain }}"
      description: |
        The availability domain of the VLAN.
        Example: \`Uocm:PHX-AD-1\`
    - name: cidrBlock
      value: "{{ cidrBlock }}"
      description: |
        The range of IPv4 addresses that will be used for layer 3 communication with
        hosts outside the VLAN. The CIDR must maintain the following rules -
        1. The CIDR block is valid and correctly formatted.
        2. The new range is within one of the parent VCN ranges.
        Example: \`192.0.2.0/24\`
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the VLAN.
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
    - name: nsgIds
      value:
        - "{{ nsgIds }}"
      description: |
        A list of the OCIDs of the network security groups (NSGs) to add all VNICs in the VLAN to. For more
        information about NSGs, see
        [NetworkSecurityGroup](#/en/iaas/latest/NetworkSecurityGroup/).
    - name: routeTableId
      value: "{{ routeTableId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the route table the VLAN will use. If you don't provide a value,
        the VLAN uses the VCN's default route table.
    - name: vcnId
      value: "{{ vcnId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the VCN to contain the VLAN.
    - name: vlanTag
      value: {{ vlanTag }}
      description: |
        The IEEE 802.1Q VLAN tag for this VLAN. The value must be unique across all
        VLANs in the VCN. If you don't provide a value, Oracle assigns one.
        You cannot change the value later. VLAN tag 0 is reserved for use by Oracle.
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

Updates the specified VLAN. Note that this operation might require changes to all&lt;br /&gt;the VNICs in the VLAN, which can take a while. The VLAN will be in the UPDATING state until the changes are complete.&lt;br /&gt;

```sql
UPDATE oci.network.vlans
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
nsgIds = '{{ nsgIds }}',
routeTableId = '{{ routeTableId }}'
WHERE 
vlanId = '{{ vlanId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
availabilityDomain,
cidrBlock,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
nsgIds,
routeTableId,
timeCreated,
vcnId,
vlanTag;
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

Deletes the specified VLAN, but only if there are no VNICs in the VLAN.&lt;br /&gt;

```sql
DELETE FROM oci.network.vlans
WHERE vlanId = '{{ vlanId }}' --required
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

Moves a VLAN into a different compartment within the same tenancy.&lt;br /&gt;For information about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.network.vlans.change_compartment 
@vlanId='{{ vlanId }}' --required, 
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
