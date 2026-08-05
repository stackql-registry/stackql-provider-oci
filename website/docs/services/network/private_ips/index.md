--- 
title: private_ips
hide_title: false
hide_table_of_contents: false
keywords:
  - private_ips
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

Creates, updates, deletes, gets or lists a <code>private_ips</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="private_ips" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.private_ips" /></td></tr>
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

The private IP.

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
    <td>The private IP's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The private IP's availability domain. This attribute will be null if this is a *secondary* private IP assigned to a VNIC that is in a *regional* subnet.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="cidrPrefixLength" /></td>
    <td><code>integer</code></td>
    <td>The secondary IPv4 CIDR prefix length.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the private IP.</td>
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
    <td><CopyableCode code="hostnameLabel" /></td>
    <td><code>string</code></td>
    <td>The hostname for the private IP. Used for DNS. The value is the hostname portion of the private IP's fully qualified domain name (FQDN) (for example, `bminstance1` in FQDN `bminstance1.subnet123.vcn1.oraclevcn.com`). Must be unique across all VNICs in the subnet and comply with &#91;RFC 952&#93;(https:​//tools.ietf.org/html/rfc952) and &#91;RFC 1123&#93;(https:​//tools.ietf.org/html/rfc1123).  For more information, see &#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).  Example: `bminstance1` </td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>The private IP address of the `privateIp` object. The address is within the CIDR of the VNIC's subnet.  However, if the `PrivateIp` object is being used with a VLAN as part of the Oracle Cloud VMware Solution, the address is from the range specified by the `cidrBlock` attribute for the VLAN. See &#91;Vlan&#93;(#/en/iaas/latest/Vlan).  Example: `10.0.3.3` </td>
</tr>
<tr>
    <td><CopyableCode code="ipState" /></td>
    <td><code>string</code></td>
    <td>State of the IP address. If an IP address is assigned to a VNIC it is ASSIGNED, otherwise it is AVAILABLE.  (ASSIGNED, AVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv4SubnetCidrAtCreation" /></td>
    <td><code>string</code></td>
    <td>Ipv4 Subnet CIDR specified whn creating the PrivateIP. </td>
</tr>
<tr>
    <td><CopyableCode code="isPrimary" /></td>
    <td><code>boolean</code></td>
    <td>Whether this private IP is the primary one on the VNIC. Primary private IPs are unassigned and deleted automatically when the VNIC is terminated.  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="lifetime" /></td>
    <td><code>string</code></td>
    <td>Lifetime of the IP address. There are two types of IPs:  - Ephemeral  - Reserved  (EPHEMERAL, RESERVED)</td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table the IP address or VNIC will use. For more information, see &#91;Per-resource Routing&#93;(https:​//docs.oracle.com/iaas/Content/Network/Tasks/managingroutetables.htm#Overview_of_Routing_for_Your_VCN__source_routing). </td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the subnet the VNIC is in.  However, if the `PrivateIp` object is being used with a VLAN as part of the Oracle Cloud VMware Solution, the `subnetId` is null. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the private IP was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vlanId" /></td>
    <td><code>string</code></td>
    <td>Applicable only if the `PrivateIp` object is being used with a VLAN as part of the Oracle Cloud VMware Solution. The `vlanId` is the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VLAN. See &#91;Vlan&#93;(#/en/iaas/latest/Vlan). </td>
</tr>
<tr>
    <td><CopyableCode code="vnicId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VNIC the private IP is assigned to. The VNIC and private IP must be in the same subnet. However, if the `PrivateIp` object is being used with a VLAN as part of the Oracle Cloud VMware Solution, the `vnicId` is null. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A *private IP* is a conceptual term that refers to an IPv4 private IP address and related properties.&lt;br /&gt;The `privateIp` object is the API representation of a private IP.&lt;br /&gt;&lt;br /&gt;**Note:** For information about IPv6 addresses, see &#91;Ipv6&#93;(#/en/iaas/latest/Ipv6/).&lt;br /&gt;&lt;br /&gt;Each instance has a *primary private IP* that is automatically created and&lt;br /&gt;assigned to the primary VNIC during instance launch. If you add a secondary&lt;br /&gt;VNIC to the instance, it also automatically gets a primary private IP. You&lt;br /&gt;can't remove a primary private IP from its VNIC. The primary private IP is&lt;br /&gt;automatically deleted when the VNIC is terminated.&lt;br /&gt;&lt;br /&gt;You can add *secondary private IPs* to a VNIC after it's created. For more&lt;br /&gt;information, see the `privateIp` operations and also&lt;br /&gt;&#91;IP Addresses&#93;(/iaas/Content/Network/Tasks/managingIPaddresses.htm).&lt;br /&gt;&lt;br /&gt;**Note:** Only&lt;br /&gt;&#91;ListPrivateIps&#93;(#/en/iaas/latest/PrivateIp/ListPrivateIps) and&lt;br /&gt;&#91;GetPrivateIp&#93;(#/en/iaas/latest/PrivateIp/GetPrivateIp) work with&lt;br /&gt;*primary* private IPs. To create and update primary private IPs, you instead&lt;br /&gt;work with instance and VNIC operations. For example, a primary private IP's&lt;br /&gt;properties come from the values you specify in&lt;br /&gt;&#91;CreateVnicDetails&#93;(#/en/iaas/latest/CreateVnicDetails/) when calling either&lt;br /&gt;&#91;LaunchInstance&#93;(#/en/iaas/latest/Instance/LaunchInstance) or&lt;br /&gt;&#91;AttachVnic&#93;(#/en/iaas/latest/VnicAttachment/AttachVnic). To update the hostname&lt;br /&gt;for a primary private IP, you use &#91;UpdateVnic&#93;(#/en/iaas/latest/Vnic/UpdateVnic).&lt;br /&gt;&lt;br /&gt;`PrivateIp` objects that are created for use with the Oracle Cloud VMware Solution are&lt;br /&gt;assigned to a VLAN and not a VNIC in a subnet. See the&lt;br /&gt;descriptions of the relevant attributes in the `PrivateIp` object. Also see&lt;br /&gt;&#91;Vlan&#93;(#/en/iaas/latest/Vlan).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The private IP's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The private IP's availability domain. This attribute will be null if this is a *secondary* private IP assigned to a VNIC that is in a *regional* subnet.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="cidrPrefixLength" /></td>
    <td><code>integer</code></td>
    <td>The secondary IPv4 CIDR prefix length.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the private IP.</td>
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
    <td><CopyableCode code="hostnameLabel" /></td>
    <td><code>string</code></td>
    <td>The hostname for the private IP. Used for DNS. The value is the hostname portion of the private IP's fully qualified domain name (FQDN) (for example, `bminstance1` in FQDN `bminstance1.subnet123.vcn1.oraclevcn.com`). Must be unique across all VNICs in the subnet and comply with &#91;RFC 952&#93;(https:​//tools.ietf.org/html/rfc952) and &#91;RFC 1123&#93;(https:​//tools.ietf.org/html/rfc1123).  For more information, see &#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).  Example: `bminstance1` </td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>The private IP address of the `privateIp` object. The address is within the CIDR of the VNIC's subnet.  However, if the `PrivateIp` object is being used with a VLAN as part of the Oracle Cloud VMware Solution, the address is from the range specified by the `cidrBlock` attribute for the VLAN. See &#91;Vlan&#93;(#/en/iaas/latest/Vlan).  Example: `10.0.3.3` </td>
</tr>
<tr>
    <td><CopyableCode code="ipState" /></td>
    <td><code>string</code></td>
    <td>State of the IP address. If an IP address is assigned to a VNIC it is ASSIGNED, otherwise it is AVAILABLE.  (ASSIGNED, AVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv4SubnetCidrAtCreation" /></td>
    <td><code>string</code></td>
    <td>Ipv4 Subnet CIDR specified whn creating the PrivateIP. </td>
</tr>
<tr>
    <td><CopyableCode code="isPrimary" /></td>
    <td><code>boolean</code></td>
    <td>Whether this private IP is the primary one on the VNIC. Primary private IPs are unassigned and deleted automatically when the VNIC is terminated.  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="lifetime" /></td>
    <td><code>string</code></td>
    <td>Lifetime of the IP address. There are two types of IPs:  - Ephemeral  - Reserved  (EPHEMERAL, RESERVED)</td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table the IP address or VNIC will use. For more information, see &#91;Per-resource Routing&#93;(https:​//docs.oracle.com/iaas/Content/Network/Tasks/managingroutetables.htm#Overview_of_Routing_for_Your_VCN__source_routing). </td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the subnet the VNIC is in.  However, if the `PrivateIp` object is being used with a VLAN as part of the Oracle Cloud VMware Solution, the `subnetId` is null. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the private IP was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vlanId" /></td>
    <td><code>string</code></td>
    <td>Applicable only if the `PrivateIp` object is being used with a VLAN as part of the Oracle Cloud VMware Solution. The `vlanId` is the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VLAN. See &#91;Vlan&#93;(#/en/iaas/latest/Vlan). </td>
</tr>
<tr>
    <td><CopyableCode code="vnicId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VNIC the private IP is assigned to. The VNIC and private IP must be in the same subnet. However, if the `PrivateIp` object is being used with a VLAN as part of the Oracle Cloud VMware Solution, the `vnicId` is null. </td>
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
    <td><a href="#parameter-privateIpId"><code>privateIpId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified private IP. You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;Alternatively, you can get the object by using&lt;br /&gt;&#91;ListPrivateIps&#93;(#/en/iaas/latest/PrivateIp/ListPrivateIps)&lt;br /&gt;with the private IP address (for example, 10.0.3.3) and subnet &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-ipAddress"><code>ipAddress</code></a>, <a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-vnicId"><code>vnicId</code></a>, <a href="#parameter-ipState"><code>ipState</code></a>, <a href="#parameter-lifetime"><code>lifetime</code></a>, <a href="#parameter-vlanId"><code>vlanId</code></a></td>
    <td>Lists the &#91;PrivateIp&#93;(#/en/iaas/latest/PrivateIp/) objects based&lt;br /&gt;on one of these filters:&lt;br /&gt;&lt;br /&gt;  - Subnet &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;  - VNIC &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;  - Both private IP address and subnet OCID: This lets&lt;br /&gt;  you get a `privateIP` object based on its private IP&lt;br /&gt;  address (for example, 10.0.3.3) and not its &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). For comparison,&lt;br /&gt;  &#91;GetPrivateIp&#93;(#/en/iaas/latest/PrivateIp/GetPrivateIp)&lt;br /&gt;  requires the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;If you're listing all the private IPs associated with a given subnet&lt;br /&gt;or VNIC, the response includes both primary and secondary private IPs.&lt;br /&gt;&lt;br /&gt;If you are an Oracle Cloud VMware Solution customer and have VLANs&lt;br /&gt;in your VCN, you can filter the list by VLAN &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). See &#91;Vlan&#93;(#/en/iaas/latest/Vlan).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a private IP.&lt;br /&gt;For more information about private IPs, see&lt;br /&gt;&#91;IP Addresses&#93;(/iaas/Content/Network/Tasks/managingIPaddresses.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-privateIpId"><code>privateIpId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified private IP. You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;Use this operation if you want to:&lt;br /&gt;&lt;br /&gt;  - Move a secondary private IP to a different VNIC in the same subnet.&lt;br /&gt;  - Change the display name for a secondary private IP.&lt;br /&gt;  - Change the hostname for a secondary private IP.&lt;br /&gt;&lt;br /&gt;This operation cannot be used with primary private IPs.&lt;br /&gt;To update the hostname for the primary IP on a VNIC, use&lt;br /&gt;&#91;UpdateVnic&#93;(#/en/iaas/latest/Vnic/UpdateVnic).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-privateIpId"><code>privateIpId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Unassigns and deletes the specified private IP. You must&lt;br /&gt;specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). The private IP address is returned to&lt;br /&gt;the subnet's pool of available addresses.&lt;br /&gt;&lt;br /&gt;This operation cannot be used with primary private IPs, which are&lt;br /&gt;automatically unassigned and deleted when the VNIC is terminated.&lt;br /&gt;&lt;br /&gt;**Important:** If a secondary private IP is the&lt;br /&gt;&#91;target of a route rule&#93;(/iaas/Content/Network/Tasks/managingroutetables.htm#privateip),&lt;br /&gt;unassigning it from the VNIC causes that route rule to blackhole and the traffic&lt;br /&gt;will be dropped.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#bulk_create_private_ips"><CopyableCode code="bulk_create_private_ips" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bulkCreatePrivateIpItem"><code>bulkCreatePrivateIpItem</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Create secondary private IPv4 addresses.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#bulk_delete_private_ips"><CopyableCode code="bulk_delete_private_ips" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bulkDeletePrivateIpItem"><code>bulkDeletePrivateIpItem</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Unassign and delete secondary private IPv4s for a VNIC.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#bulk_detach_private_ips"><CopyableCode code="bulk_detach_private_ips" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bulkDetachPrivateIpItem"><code>bulkDetachPrivateIpItem</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Unassign the specified private IP addresses from the Virtual Network Interface Card (VNIC). You must specify the PrivateIP object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#bulk_update_private_ips"><CopyableCode code="bulk_update_private_ips" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bulkUpdatePrivateIpItem"><code>bulkUpdatePrivateIpItem</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Update existing secondary private IPv4s for a VNIC.</td>
</tr>
<tr>
    <td><a href="#private_ip_vnic_detach"><CopyableCode code="private_ip_vnic_detach" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-privateIpId"><code>privateIpId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Unassign the specified PrivateIP address from Virtual Network Interface Card (VNIC). You must specify the PrivateIP &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;</td>
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
<tr id="parameter-privateIpId">
    <td><CopyableCode code="privateIpId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the private IP or IPv6.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-ipAddress">
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>An IP address. This could be either IPv4 or IPv6, depending on the resource. Example: `10.0.3.3` </td>
</tr>
<tr id="parameter-ipState">
    <td><CopyableCode code="ipState" /></td>
    <td><code>string</code></td>
    <td>State of the IP address. If an IP address is assigned to a VNIC it is ASSIGNED otherwise AVAILABLE</td>
</tr>
<tr id="parameter-lifetime">
    <td><CopyableCode code="lifetime" /></td>
    <td><code>string</code></td>
    <td>Lifetime of the IP address. There are two types of IPs:  - Ephemeral  - Reserved </td>
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
<tr id="parameter-subnetId">
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the subnet.</td>
</tr>
<tr id="parameter-vlanId">
    <td><CopyableCode code="vlanId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VLAN.</td>
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

Gets the specified private IP. You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;Alternatively, you can get the object by using&lt;br /&gt;&#91;ListPrivateIps&#93;(#/en/iaas/latest/PrivateIp/ListPrivateIps)&lt;br /&gt;with the private IP address (for example, 10.0.3.3) and subnet &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
cidrPrefixLength,
compartmentId,
definedTags,
displayName,
freeformTags,
hostnameLabel,
ipAddress,
ipState,
ipv4SubnetCidrAtCreation,
isPrimary,
lifetime,
routeTableId,
subnetId,
timeCreated,
vlanId,
vnicId
FROM oci.network.private_ips
WHERE privateIpId = '{{ privateIpId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the &#91;PrivateIp&#93;(#/en/iaas/latest/PrivateIp/) objects based&lt;br /&gt;on one of these filters:&lt;br /&gt;&lt;br /&gt;  - Subnet &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;  - VNIC &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;  - Both private IP address and subnet OCID: This lets&lt;br /&gt;  you get a `privateIP` object based on its private IP&lt;br /&gt;  address (for example, 10.0.3.3) and not its &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). For comparison,&lt;br /&gt;  &#91;GetPrivateIp&#93;(#/en/iaas/latest/PrivateIp/GetPrivateIp)&lt;br /&gt;  requires the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;If you're listing all the private IPs associated with a given subnet&lt;br /&gt;or VNIC, the response includes both primary and secondary private IPs.&lt;br /&gt;&lt;br /&gt;If you are an Oracle Cloud VMware Solution customer and have VLANs&lt;br /&gt;in your VCN, you can filter the list by VLAN &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). See &#91;Vlan&#93;(#/en/iaas/latest/Vlan).&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
cidrPrefixLength,
compartmentId,
definedTags,
displayName,
freeformTags,
hostnameLabel,
ipAddress,
ipState,
ipv4SubnetCidrAtCreation,
isPrimary,
lifetime,
routeTableId,
subnetId,
timeCreated,
vlanId,
vnicId
FROM oci.network.private_ips
WHERE region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND ipAddress = '{{ ipAddress }}'
AND subnetId = '{{ subnetId }}'
AND vnicId = '{{ vnicId }}'
AND ipState = '{{ ipState }}'
AND lifetime = '{{ lifetime }}'
AND vlanId = '{{ vlanId }}'
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

Creates a private IP.&lt;br /&gt;For more information about private IPs, see&lt;br /&gt;&#91;IP Addresses&#93;(/iaas/Content/Network/Tasks/managingIPaddresses.htm).&lt;br /&gt;

```sql
INSERT INTO oci.network.private_ips (
cidrPrefixLength,
definedTags,
displayName,
freeformTags,
hostnameLabel,
ipAddress,
ipv4SubnetCidrAtCreation,
lifetime,
routeTableId,
subnetId,
vlanId,
vnicId,
region,
opc-retry-token
)
SELECT 
{{ cidrPrefixLength }},
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ hostnameLabel }}',
'{{ ipAddress }}',
'{{ ipv4SubnetCidrAtCreation }}',
'{{ lifetime }}',
'{{ routeTableId }}',
'{{ subnetId }}',
'{{ vlanId }}',
'{{ vnicId }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
availabilityDomain,
cidrPrefixLength,
compartmentId,
definedTags,
displayName,
freeformTags,
hostnameLabel,
ipAddress,
ipState,
ipv4SubnetCidrAtCreation,
isPrimary,
lifetime,
routeTableId,
subnetId,
timeCreated,
vlanId,
vnicId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: private_ips
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the private_ips resource.
    - name: cidrPrefixLength
      value: {{ cidrPrefixLength }}
      description: |
        An optional field that when combined with the ipAddress field, will be used to allocate secondary IPv4 CIDRs.
        The CIDR range created by this combination must be within the subnet's CIDR
        and the CIDR range should not collide with any existing IPv4 address allocation.
        The VNIC ID specified in the request object should not already been assigned more than the max IPv4 addresses.
        If you don't specify a value, this option will be ignored.
        Example: 18
      default: 32
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
    - name: hostnameLabel
      value: "{{ hostnameLabel }}"
      description: |
        The hostname for the private IP. Used for DNS. The value
        is the hostname portion of the private IP's fully qualified domain name (FQDN)
        (for example, \`bminstance1\` in FQDN \`bminstance1.subnet123.vcn1.oraclevcn.com\`).
        Must be unique across all VNICs in the subnet and comply with
        [RFC 952](https://tools.ietf.org/html/rfc952) and
        [RFC 1123](https://tools.ietf.org/html/rfc1123).
        For more information, see
        [DNS in Your Virtual Cloud Network](/iaas/Content/Network/Concepts/dns.htm).
        Example: \`bminstance1\`
    - name: ipAddress
      value: "{{ ipAddress }}"
      description: |
        A private IP address of your choice. Must be an available IP address within
        the subnet's CIDR. If you don't specify a value, Oracle automatically
        assigns a private IP address from the subnet.
        Example: \`10.0.3.3\`
    - name: ipv4SubnetCidrAtCreation
      value: "{{ ipv4SubnetCidrAtCreation }}"
      description: |
        Any one of the IPv4 CIDRs allocated to the subnet.
    - name: lifetime
      value: "{{ lifetime }}"
      description: |
        Lifetime of the IP address.
        There are two types of IPs:
        - Ephemeral
        - Reserved
      valid_values: ['EPHEMERAL', 'RESERVED']
      default: EPHEMERAL
    - name: routeTableId
      value: "{{ routeTableId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the route table the IP address or VNIC will use. For more information, see
        [Per-resource Routing](https://docs.oracle.com/iaas/Content/Network/Tasks/managingroutetables.htm#Overview_of_Routing_for_Your_VCN__source_routing).
    - name: subnetId
      value: "{{ subnetId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the subnet from which the private IP is to be drawn. The IP address,
        *if supplied*, must be valid for the given subnet.
    - name: vlanId
      value: "{{ vlanId }}"
      description: |
        Use this attribute only with the Oracle Cloud VMware Solution.
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the VLAN from which the private IP is to be drawn. The IP address,
        *if supplied*, must be valid for the given VLAN. See [Vlan](#/en/iaas/latest/Vlan).
    - name: vnicId
      value: "{{ vnicId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the VNIC to assign the private IP to. The VNIC and private IP
        must be in the same subnet.
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

Updates the specified private IP. You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;Use this operation if you want to:&lt;br /&gt;&lt;br /&gt;  - Move a secondary private IP to a different VNIC in the same subnet.&lt;br /&gt;  - Change the display name for a secondary private IP.&lt;br /&gt;  - Change the hostname for a secondary private IP.&lt;br /&gt;&lt;br /&gt;This operation cannot be used with primary private IPs.&lt;br /&gt;To update the hostname for the primary IP on a VNIC, use&lt;br /&gt;&#91;UpdateVnic&#93;(#/en/iaas/latest/Vnic/UpdateVnic).&lt;br /&gt;

```sql
UPDATE oci.network.private_ips
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
hostnameLabel = '{{ hostnameLabel }}',
lifetime = '{{ lifetime }}',
routeTableId = '{{ routeTableId }}',
vnicId = '{{ vnicId }}'
WHERE 
privateIpId = '{{ privateIpId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
availabilityDomain,
cidrPrefixLength,
compartmentId,
definedTags,
displayName,
freeformTags,
hostnameLabel,
ipAddress,
ipState,
ipv4SubnetCidrAtCreation,
isPrimary,
lifetime,
routeTableId,
subnetId,
timeCreated,
vlanId,
vnicId;
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

Unassigns and deletes the specified private IP. You must&lt;br /&gt;specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). The private IP address is returned to&lt;br /&gt;the subnet's pool of available addresses.&lt;br /&gt;&lt;br /&gt;This operation cannot be used with primary private IPs, which are&lt;br /&gt;automatically unassigned and deleted when the VNIC is terminated.&lt;br /&gt;&lt;br /&gt;**Important:** If a secondary private IP is the&lt;br /&gt;&#91;target of a route rule&#93;(/iaas/Content/Network/Tasks/managingroutetables.htm#privateip),&lt;br /&gt;unassigning it from the VNIC causes that route rule to blackhole and the traffic&lt;br /&gt;will be dropped.&lt;br /&gt;

```sql
DELETE FROM oci.network.private_ips
WHERE privateIpId = '{{ privateIpId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="bulk_create_private_ips"
    values={[
        { label: 'bulk_create_private_ips', value: 'bulk_create_private_ips' },
        { label: 'bulk_delete_private_ips', value: 'bulk_delete_private_ips' },
        { label: 'bulk_detach_private_ips', value: 'bulk_detach_private_ips' },
        { label: 'bulk_update_private_ips', value: 'bulk_update_private_ips' },
        { label: 'private_ip_vnic_detach', value: 'private_ip_vnic_detach' }
    ]}
>
<TabItem value="bulk_create_private_ips">

Create secondary private IPv4 addresses.&lt;br /&gt;

```sql
EXEC oci.network.private_ips.bulk_create_private_ips 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"bulkCreatePrivateIpItem": "{{ bulkCreatePrivateIpItem }}", 
"subnetId": "{{ subnetId }}", 
"vlanId": "{{ vlanId }}", 
"vnicId": "{{ vnicId }}"
}'
;
```
</TabItem>
<TabItem value="bulk_delete_private_ips">

Unassign and delete secondary private IPv4s for a VNIC.&lt;br /&gt;

```sql
EXEC oci.network.private_ips.bulk_delete_private_ips 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"bulkDeletePrivateIpItem": "{{ bulkDeletePrivateIpItem }}", 
"subnetId": "{{ subnetId }}", 
"vlanId": "{{ vlanId }}", 
"vnicId": "{{ vnicId }}"
}'
;
```
</TabItem>
<TabItem value="bulk_detach_private_ips">

Unassign the specified private IP addresses from the Virtual Network Interface Card (VNIC). You must specify the PrivateIP object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;

```sql
EXEC oci.network.private_ips.bulk_detach_private_ips 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"bulkDetachPrivateIpItem": "{{ bulkDetachPrivateIpItem }}", 
"vnicId": "{{ vnicId }}"
}'
;
```
</TabItem>
<TabItem value="bulk_update_private_ips">

Update existing secondary private IPv4s for a VNIC.

```sql
EXEC oci.network.private_ips.bulk_update_private_ips 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"bulkUpdatePrivateIpItem": "{{ bulkUpdatePrivateIpItem }}", 
"vnicId": "{{ vnicId }}"
}'
;
```
</TabItem>
<TabItem value="private_ip_vnic_detach">

Unassign the specified PrivateIP address from Virtual Network Interface Card (VNIC). You must specify the PrivateIP &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;

```sql
EXEC oci.network.private_ips.private_ip_vnic_detach 
@privateIpId='{{ privateIpId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
</Tabs>
