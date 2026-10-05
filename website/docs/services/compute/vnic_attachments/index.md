--- 
title: vnic_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - vnic_attachments
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

Creates, updates, deletes, gets or lists a <code>vnic_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vnic_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.vnic_attachments" /></td></tr>
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

The VNIC attachment was retrieved.

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
    <td>The OCID of the VNIC attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the instance.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment the VNIC attachment is in, which is the same compartment the instance is in. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the VNIC attachment. (ATTACHING, ATTACHED, DETACHING, DETACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="nicIndex" /></td>
    <td><code>integer (int32)</code></td>
    <td>Which physical network interface card (NIC) the VNIC uses. Certain bare metal instance shapes have two active physical NICs (0 and 1). If you add a secondary VNIC to one of these instances, you can specify which NIC the VNIC will use. For more information, see &#91;Virtual Network Interface Cards (VNICs)&#93;(/iaas/Content/Network/Tasks/managingVNICs.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the subnet to create the VNIC in.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the VNIC attachment was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vlanId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the VLAN to create the VNIC in. Creating the VNIC in a VLAN (instead of a subnet) is possible only if you are an Oracle Cloud VMware Solution customer. See &#91;Vlan&#93;(#/en/iaas/latest/Vlan).  An error is returned if the instance already has a VNIC attached to it from this VLAN. </td>
</tr>
<tr>
    <td><CopyableCode code="vlanTag" /></td>
    <td><code>integer (int32)</code></td>
    <td>The Oracle-assigned VLAN tag of the attached VNIC. Available after the attachment process is complete.  However, if the VNIC belongs to a VLAN as part of the Oracle Cloud VMware Solution, the `vlanTag` value is instead the value of the `vlanTag` attribute for the VLAN. See &#91;Vlan&#93;(#/en/iaas/latest/Vlan).  Example: `0` </td>
</tr>
<tr>
    <td><CopyableCode code="vnicId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the VNIC. Available after the attachment process is complete. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Represents an attachment between a VNIC and an instance. For more information, see&lt;br /&gt;&#91;Virtual Network Interface Cards (VNICs)&#93;(/iaas/Content/Network/Tasks/managingVNICs.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you&lt;br /&gt;supply string values using the API.&lt;br /&gt;

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
    <td>The OCID of the VNIC attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the instance.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment the VNIC attachment is in, which is the same compartment the instance is in. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the VNIC attachment. (ATTACHING, ATTACHED, DETACHING, DETACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="nicIndex" /></td>
    <td><code>integer (int32)</code></td>
    <td>Which physical network interface card (NIC) the VNIC uses. Certain bare metal instance shapes have two active physical NICs (0 and 1). If you add a secondary VNIC to one of these instances, you can specify which NIC the VNIC will use. For more information, see &#91;Virtual Network Interface Cards (VNICs)&#93;(/iaas/Content/Network/Tasks/managingVNICs.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the subnet to create the VNIC in.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the VNIC attachment was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vlanId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the VLAN to create the VNIC in. Creating the VNIC in a VLAN (instead of a subnet) is possible only if you are an Oracle Cloud VMware Solution customer. See &#91;Vlan&#93;(#/en/iaas/latest/Vlan).  An error is returned if the instance already has a VNIC attached to it from this VLAN. </td>
</tr>
<tr>
    <td><CopyableCode code="vlanTag" /></td>
    <td><code>integer (int32)</code></td>
    <td>The Oracle-assigned VLAN tag of the attached VNIC. Available after the attachment process is complete.  However, if the VNIC belongs to a VLAN as part of the Oracle Cloud VMware Solution, the `vlanTag` value is instead the value of the `vlanTag` attribute for the VLAN. See &#91;Vlan&#93;(#/en/iaas/latest/Vlan).  Example: `0` </td>
</tr>
<tr>
    <td><CopyableCode code="vnicId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the VNIC. Available after the attachment process is complete. </td>
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
    <td><a href="#parameter-vnicAttachmentId"><code>vnicAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the information for the specified VNIC attachment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-vnicId"><code>vnicId</code></a></td>
    <td>Lists the VNIC attachments in the specified compartment. A VNIC attachment&lt;br /&gt;resides in the same compartment as the attached instance. The list can be&lt;br /&gt;filtered by instance, VNIC, or availability domain.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#attach"><CopyableCode code="attach" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-createVnicDetails"><code>createVnicDetails</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a secondary VNIC and attaches it to the specified instance.&lt;br /&gt;For more information about secondary VNICs, see&lt;br /&gt;&#91;Virtual Network Interface Cards (VNICs)&#93;(/iaas/Content/Network/Tasks/managingVNICs.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#detach"><CopyableCode code="detach" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-vnicAttachmentId"><code>vnicAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Detaches and deletes the specified secondary VNIC.&lt;br /&gt;This operation cannot be used on the instance's primary VNIC.&lt;br /&gt;When you terminate an instance, all attached VNICs (primary&lt;br /&gt;and secondary) are automatically detached and deleted.&lt;br /&gt;&lt;br /&gt;**Important:** If the VNIC has a&lt;br /&gt;&#91;private IP&#93;(#/en/iaas/latest/PrivateIp/) that is the&lt;br /&gt;&#91;target of a route rule&#93;(/iaas/Content/Network/Tasks/managingroutetables.htm#privateip),&lt;br /&gt;deleting the VNIC causes that route rule to blackhole and the traffic&lt;br /&gt;will be dropped.&lt;br /&gt;</td>
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
<tr id="parameter-vnicAttachmentId">
    <td><CopyableCode code="vnicAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the VNIC attachment.</td>
</tr>
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the instance.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
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
<tr id="parameter-vnicId">
    <td><CopyableCode code="vnicId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the VNIC.</td>
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

Gets the information for the specified VNIC attachment.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
compartmentId,
displayName,
instanceId,
lifecycleState,
nicIndex,
subnetId,
timeCreated,
vlanId,
vlanTag,
vnicId
FROM oci.compute.vnic_attachments
WHERE vnicAttachmentId = '{{ vnicAttachmentId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the VNIC attachments in the specified compartment. A VNIC attachment&lt;br /&gt;resides in the same compartment as the attached instance. The list can be&lt;br /&gt;filtered by instance, VNIC, or availability domain.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
compartmentId,
displayName,
instanceId,
lifecycleState,
nicIndex,
subnetId,
timeCreated,
vlanId,
vlanTag,
vnicId
FROM oci.compute.vnic_attachments
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND availabilityDomain = '{{ availabilityDomain }}'
AND instanceId = '{{ instanceId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND vnicId = '{{ vnicId }}'
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

Creates a secondary VNIC and attaches it to the specified instance.&lt;br /&gt;For more information about secondary VNICs, see&lt;br /&gt;&#91;Virtual Network Interface Cards (VNICs)&#93;(/iaas/Content/Network/Tasks/managingVNICs.htm).&lt;br /&gt;

```sql
INSERT INTO oci.compute.vnic_attachments (
createVnicDetails,
displayName,
instanceId,
nicIndex,
region,
opc-retry-token
)
SELECT 
'{{ createVnicDetails }}' /* required */,
'{{ displayName }}',
'{{ instanceId }}' /* required */,
{{ nicIndex }},
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
availabilityDomain,
compartmentId,
displayName,
instanceId,
lifecycleState,
nicIndex,
subnetId,
timeCreated,
vlanId,
vlanTag,
vnicId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vnic_attachments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vnic_attachments resource.
    - name: createVnicDetails
      description: |
        Contains properties for a VNIC. You use this object when creating the
        primary VNIC during instance launch or when creating a secondary VNIC.
        For more information about VNICs, see
        [Virtual Network Interface Cards (VNICs)](/iaas/Content/Network/Tasks/managingVNICs.htm).
      value:
        assignIpv6Ip: {{ assignIpv6Ip }}
        assignPrivateDnsRecord: {{ assignPrivateDnsRecord }}
        assignPublicIp: {{ assignPublicIp }}
        definedTags: "{{ definedTags }}"
        displayName: "{{ displayName }}"
        freeformTags: "{{ freeformTags }}"
        hostnameLabel: "{{ hostnameLabel }}"
        ipv6AddressIpv6SubnetCidrPairDetails:
          - ipv6Address: "{{ ipv6Address }}"
            ipv6Id: "{{ ipv6Id }}"
            ipv6SubnetCidr: "{{ ipv6SubnetCidr }}"
        nsgIds:
          - "{{ nsgIds }}"
        privateIp: "{{ privateIp }}"
        privateIpId: "{{ privateIpId }}"
        securityAttributes: "{{ securityAttributes }}"
        skipSourceDestCheck: {{ skipSourceDestCheck }}
        subnetCidr: "{{ subnetCidr }}"
        subnetId: "{{ subnetId }}"
        vlanId: "{{ vlanId }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. Does not have to be unique, and it's changeable.
        Avoid entering confidential information.
    - name: instanceId
      value: "{{ instanceId }}"
      description: |
        The OCID of the instance.
    - name: nicIndex
      value: {{ nicIndex }}
      description: |
        Which physical network interface card (NIC) the VNIC will use. Defaults to 0.
        Certain bare metal instance shapes have two active physical NICs (0 and 1). If
        you add a secondary VNIC to one of these instances, you can specify which NIC
        the VNIC will use. For more information, see
        [Virtual Network Interface Cards (VNICs)](/iaas/Content/Network/Tasks/managingVNICs.htm).
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="detach"
    values={[
        { label: 'detach', value: 'detach' }
    ]}
>
<TabItem value="detach">

Detaches and deletes the specified secondary VNIC.&lt;br /&gt;This operation cannot be used on the instance's primary VNIC.&lt;br /&gt;When you terminate an instance, all attached VNICs (primary&lt;br /&gt;and secondary) are automatically detached and deleted.&lt;br /&gt;&lt;br /&gt;**Important:** If the VNIC has a&lt;br /&gt;&#91;private IP&#93;(#/en/iaas/latest/PrivateIp/) that is the&lt;br /&gt;&#91;target of a route rule&#93;(/iaas/Content/Network/Tasks/managingroutetables.htm#privateip),&lt;br /&gt;deleting the VNIC causes that route rule to blackhole and the traffic&lt;br /&gt;will be dropped.&lt;br /&gt;

```sql
DELETE FROM oci.compute.vnic_attachments
WHERE vnicAttachmentId = '{{ vnicAttachmentId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
