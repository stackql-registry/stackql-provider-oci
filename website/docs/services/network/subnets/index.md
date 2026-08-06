--- 
title: subnets
hide_title: false
hide_table_of_contents: false
keywords:
  - subnets
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

Creates, updates, deletes, gets or lists a <code>subnets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subnets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.subnets" /></td></tr>
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

The subnet was retrieved.

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
    <td>The subnet's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The subnet's availability domain. This attribute will be null if this is a regional subnet instead of an AD-specific subnet. Oracle recommends creating regional subnets.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="cidrBlock" /></td>
    <td><code>string</code></td>
    <td>The subnet's CIDR block.  Example: `10.0.1.0/24` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="dhcpOptionsId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the set of DHCP options that the subnet uses. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="dnsLabel" /></td>
    <td><code>string</code></td>
    <td>A DNS label for the subnet, used in conjunction with the VNIC's hostname and VCN's DNS label to form a fully qualified domain name (FQDN) for each VNIC within this subnet (for example, `bminstance1.subnet123.vcn1.oraclevcn.com`). Must be an alphanumeric string that begins with a letter and is unique within the VCN. The value cannot be changed.  The absence of this parameter means the Internet and VCN Resolver will not resolve hostnames of instances in this subnet.  For more information, see &#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).  Example: `subnet123` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="ipv4CidrBlocks" /></td>
    <td><code>array</code></td>
    <td>The list of all IPv4 CIDR blocks for the subnet that meets the following criteria: - Ipv4 CIDR blocks must be valid. - Multiple Ipv4 CIDR blocks must not overlap each other or the on-premises network CIDR block. - The number of prefixes must not exceed the limit of IPv4 prefixes allowed to a subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6CidrBlock" /></td>
    <td><code>string</code></td>
    <td>For an IPv6-enabled subnet, this is the IPv6 prefix for the subnet's private IP address space. The subnet size is always /64. IPv6 addressing is supported for all commercial and government regions. See &#91;IPv6 Addresses&#93;(/iaas/Content/Network/Concepts/ipv6.htm).  Example: `2001:0db8:0123:1111::/64` </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6CidrBlocks" /></td>
    <td><code>array</code></td>
    <td>The list of all IPv6 prefixes (Oracle allocated IPv6 GUA, ULA or private IPv6 prefixes, BYOIPv6 prefixes) for the subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6PublicCidrBlock" /></td>
    <td><code>string</code></td>
    <td>For an IPv6-enabled subnet, this is the IPv6 prefix for the subnet's public IP address space. The subnet size is always /64. The left 48 bits are inherited from the `ipv6PublicCidrBlock` of the &#91;Vcn&#93;(#/en/iaas/latest/Vcn/), and the remaining 16 bits are from the subnet's `ipv6CidrBlock`.  Example: `2001:0db8:0123:1111::/64` </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6VirtualRouterIp" /></td>
    <td><code>string</code></td>
    <td>For an IPv6-enabled subnet, this is the IPv6 address of the virtual router.  Example: `2001:0db8:0123:1111:89ab:cdef:1234:5678` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The subnet's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="prohibitPublicIpOnVnic" /></td>
    <td><code>boolean</code></td>
    <td>Whether VNICs within this subnet can have public IP addresses. Defaults to false, which means VNICs created in this subnet will automatically be assigned public IP addresses unless specified otherwise during instance launch or VNIC creation (with the `assignPublicIp` flag in &#91;CreateVnicDetails&#93;(#/en/iaas/latest/CreateVnicDetails/)). If `prohibitPublicIpOnVnic` is set to true, VNICs created in this subnet cannot have public IP addresses (that is, it's a private subnet).  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table that the subnet uses.</td>
</tr>
<tr>
    <td><CopyableCode code="securityListIds" /></td>
    <td><code>array</code></td>
    <td>The OCIDs of the security list or lists that the subnet uses. Remember that security lists are associated *with the subnet*, but the rules are applied to the individual VNICs in the subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="subnetDomainName" /></td>
    <td><code>string</code></td>
    <td>The subnet's domain name, which consists of the subnet's DNS label, the VCN's DNS label, and the `oraclevcn.com` domain.  For more information, see &#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).  Example: `subnet123.vcn1.oraclevcn.com` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the subnet was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN the subnet is in.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualRouterIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the virtual router.  Example: `10.0.14.1` </td>
</tr>
<tr>
    <td><CopyableCode code="virtualRouterMac" /></td>
    <td><code>string</code></td>
    <td>The MAC address of the virtual router.  Example: `00:00:00:00:00:01` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A logical subdivision of a VCN. Each subnet&lt;br /&gt;consists of a contiguous range of IP addresses that do not overlap with&lt;br /&gt;other subnets in the VCN. Example: 172.16.1.0/24. For more information, see&lt;br /&gt;&#91;Overview of the Networking Service&#93;(/iaas/Content/Network/Concepts/overview.htm) and&lt;br /&gt;&#91;VCNs and Subnets&#93;(/iaas/Content/Network/Tasks/managingVCNs.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The subnet's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The subnet's availability domain. This attribute will be null if this is a regional subnet instead of an AD-specific subnet. Oracle recommends creating regional subnets.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="cidrBlock" /></td>
    <td><code>string</code></td>
    <td>The subnet's CIDR block.  Example: `10.0.1.0/24` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="dhcpOptionsId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the set of DHCP options that the subnet uses. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="dnsLabel" /></td>
    <td><code>string</code></td>
    <td>A DNS label for the subnet, used in conjunction with the VNIC's hostname and VCN's DNS label to form a fully qualified domain name (FQDN) for each VNIC within this subnet (for example, `bminstance1.subnet123.vcn1.oraclevcn.com`). Must be an alphanumeric string that begins with a letter and is unique within the VCN. The value cannot be changed.  The absence of this parameter means the Internet and VCN Resolver will not resolve hostnames of instances in this subnet.  For more information, see &#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).  Example: `subnet123` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="ipv4CidrBlocks" /></td>
    <td><code>array</code></td>
    <td>The list of all IPv4 CIDR blocks for the subnet that meets the following criteria: - Ipv4 CIDR blocks must be valid. - Multiple Ipv4 CIDR blocks must not overlap each other or the on-premises network CIDR block. - The number of prefixes must not exceed the limit of IPv4 prefixes allowed to a subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6CidrBlock" /></td>
    <td><code>string</code></td>
    <td>For an IPv6-enabled subnet, this is the IPv6 prefix for the subnet's private IP address space. The subnet size is always /64. IPv6 addressing is supported for all commercial and government regions. See &#91;IPv6 Addresses&#93;(/iaas/Content/Network/Concepts/ipv6.htm).  Example: `2001:0db8:0123:1111::/64` </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6CidrBlocks" /></td>
    <td><code>array</code></td>
    <td>The list of all IPv6 prefixes (Oracle allocated IPv6 GUA, ULA or private IPv6 prefixes, BYOIPv6 prefixes) for the subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6PublicCidrBlock" /></td>
    <td><code>string</code></td>
    <td>For an IPv6-enabled subnet, this is the IPv6 prefix for the subnet's public IP address space. The subnet size is always /64. The left 48 bits are inherited from the `ipv6PublicCidrBlock` of the &#91;Vcn&#93;(#/en/iaas/latest/Vcn/), and the remaining 16 bits are from the subnet's `ipv6CidrBlock`.  Example: `2001:0db8:0123:1111::/64` </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6VirtualRouterIp" /></td>
    <td><code>string</code></td>
    <td>For an IPv6-enabled subnet, this is the IPv6 address of the virtual router.  Example: `2001:0db8:0123:1111:89ab:cdef:1234:5678` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The subnet's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="prohibitPublicIpOnVnic" /></td>
    <td><code>boolean</code></td>
    <td>Whether VNICs within this subnet can have public IP addresses. Defaults to false, which means VNICs created in this subnet will automatically be assigned public IP addresses unless specified otherwise during instance launch or VNIC creation (with the `assignPublicIp` flag in &#91;CreateVnicDetails&#93;(#/en/iaas/latest/CreateVnicDetails/)). If `prohibitPublicIpOnVnic` is set to true, VNICs created in this subnet cannot have public IP addresses (that is, it's a private subnet).  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table that the subnet uses.</td>
</tr>
<tr>
    <td><CopyableCode code="securityListIds" /></td>
    <td><code>array</code></td>
    <td>The OCIDs of the security list or lists that the subnet uses. Remember that security lists are associated *with the subnet*, but the rules are applied to the individual VNICs in the subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="subnetDomainName" /></td>
    <td><code>string</code></td>
    <td>The subnet's domain name, which consists of the subnet's DNS label, the VCN's DNS label, and the `oraclevcn.com` domain.  For more information, see &#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).  Example: `subnet123.vcn1.oraclevcn.com` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the subnet was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN the subnet is in.</td>
</tr>
<tr>
    <td><CopyableCode code="virtualRouterIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the virtual router.  Example: `10.0.14.1` </td>
</tr>
<tr>
    <td><CopyableCode code="virtualRouterMac" /></td>
    <td><code>string</code></td>
    <td>The MAC address of the virtual router.  Example: `00:00:00:00:00:01` </td>
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
    <td><a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified subnet's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the subnets in the specified VCN and the specified compartment.&lt;br /&gt;If the VCN ID is not provided, then the list includes the subnets from all VCNs in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new subnet in the specified VCN. You can't change the size of the subnet after creation,&lt;br /&gt;so it's important to think about the size of subnets you need before creating them.&lt;br /&gt;For more information, see &#91;VCNs and Subnets&#93;(/iaas/Content/Network/Tasks/managingVCNs.htm).&lt;br /&gt;For information on the number of subnets you can have in a VCN, see&lt;br /&gt;&#91;Service Limits&#93;(/iaas/Content/General/Concepts/servicelimits.htm).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want the subnet&lt;br /&gt;to reside. Notice that the subnet doesn't have to be in the same compartment as the VCN, route tables, or&lt;br /&gt;other Networking Service components. If you're not sure which compartment to use, put the subnet in&lt;br /&gt;the same compartment as the VCN. For more information about compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm). For information about OCIDs,&lt;br /&gt;see &#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally associate a route table with the subnet. If you don't, the subnet will use the&lt;br /&gt;VCN's default route table. For more information about route tables, see&lt;br /&gt;&#91;Route Tables&#93;(/iaas/Content/Network/Tasks/managingroutetables.htm).&lt;br /&gt;&lt;br /&gt;You may optionally associate a security list with the subnet. If you don't, the subnet will use the&lt;br /&gt;VCN's default security list. For more information about security lists, see&lt;br /&gt;&#91;Security Lists&#93;(/iaas/Content/Network/Concepts/securitylists.htm).&lt;br /&gt;&lt;br /&gt;You may optionally associate a set of DHCP options with the subnet. If you don't, the subnet will use the&lt;br /&gt;VCN's default set. For more information about DHCP options, see&lt;br /&gt;&#91;DHCP Options&#93;(/iaas/Content/Network/Tasks/managingDHCP.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the subnet, otherwise a default is provided.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;You can also add a DNS label for the subnet, which is required if you want the Internet and&lt;br /&gt;VCN Resolver to resolve hostnames for instances in the subnet. For more information, see&lt;br /&gt;&#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified subnet.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified subnet, but only if there are no instances in the subnet. This is an asynchronous&lt;br /&gt;operation. The subnet's `lifecycleState` will change to TERMINATING temporarily. If there are any&lt;br /&gt;instances in the subnet, the state will instead change back to AVAILABLE.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_ipv4_subnet_cidr"><CopyableCode code="add_ipv4_subnet_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ipv4CidrBlock"><code>ipv4CidrBlock</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Add an IPv4 prefix to a subnet.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_ipv6_subnet_cidr"><CopyableCode code="add_ipv6_subnet_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ipv6CidrBlock"><code>ipv6CidrBlock</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Add an IPv6 prefix to a subnet.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a subnet into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#modify_ipv4_subnet_cidr"><CopyableCode code="modify_ipv4_subnet_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ipv4CidrBlock"><code>ipv4CidrBlock</code></a>, <a href="#parameter-updatedIpv4CidrBlock"><code>updatedIpv4CidrBlock</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified Ipv4 CIDR block of a Subnet. The new Ipv4 CIDR IP range must meet the following criteria:&lt;br /&gt;&lt;br /&gt;- Must be valid.&lt;br /&gt;- Must not overlap with another Ipv4 CIDR block in the Subnet or the on-premises network CIDR block.&lt;br /&gt;- Must not exceed the limit of Ipv4 CIDR blocks allowed per Subnet.&lt;br /&gt;- Must include IP addresses from the original CIDR block that are used in the VCN's existing route rules.&lt;br /&gt;- No IP address in an existing subnet should be outside of the new CIDR block range.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_ipv4_subnet_cidr"><CopyableCode code="remove_ipv4_subnet_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ipv4CidrBlock"><code>ipv4CidrBlock</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Remove an IPv4 prefix from a subnet&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_ipv6_subnet_cidr"><CopyableCode code="remove_ipv6_subnet_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ipv6CidrBlock"><code>ipv6CidrBlock</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Remove an IPv6 prefix from a subnet. At least one IPv6 CIDR should remain.&lt;br /&gt;</td>
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
<tr id="parameter-subnetId">
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>Specify the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the subnet.</td>
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

Gets the specified subnet's information.

```sql
SELECT
id,
availabilityDomain,
cidrBlock,
compartmentId,
definedTags,
dhcpOptionsId,
displayName,
dnsLabel,
freeformTags,
ipv4CidrBlocks,
ipv6CidrBlock,
ipv6CidrBlocks,
ipv6PublicCidrBlock,
ipv6VirtualRouterIp,
lifecycleState,
prohibitPublicIpOnVnic,
routeTableId,
securityListIds,
subnetDomainName,
timeCreated,
vcnId,
virtualRouterIp,
virtualRouterMac
FROM oci.network.subnets
WHERE subnetId = '{{ subnetId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the subnets in the specified VCN and the specified compartment.&lt;br /&gt;If the VCN ID is not provided, then the list includes the subnets from all VCNs in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
cidrBlock,
compartmentId,
definedTags,
dhcpOptionsId,
displayName,
dnsLabel,
freeformTags,
ipv4CidrBlocks,
ipv6CidrBlock,
ipv6CidrBlocks,
ipv6PublicCidrBlock,
ipv6VirtualRouterIp,
lifecycleState,
prohibitPublicIpOnVnic,
routeTableId,
securityListIds,
subnetDomainName,
timeCreated,
vcnId,
virtualRouterIp,
virtualRouterMac
FROM oci.network.subnets
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND vcnId = '{{ vcnId }}'
AND displayName = '{{ displayName }}'
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

Creates a new subnet in the specified VCN. You can't change the size of the subnet after creation,&lt;br /&gt;so it's important to think about the size of subnets you need before creating them.&lt;br /&gt;For more information, see &#91;VCNs and Subnets&#93;(/iaas/Content/Network/Tasks/managingVCNs.htm).&lt;br /&gt;For information on the number of subnets you can have in a VCN, see&lt;br /&gt;&#91;Service Limits&#93;(/iaas/Content/General/Concepts/servicelimits.htm).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want the subnet&lt;br /&gt;to reside. Notice that the subnet doesn't have to be in the same compartment as the VCN, route tables, or&lt;br /&gt;other Networking Service components. If you're not sure which compartment to use, put the subnet in&lt;br /&gt;the same compartment as the VCN. For more information about compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm). For information about OCIDs,&lt;br /&gt;see &#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally associate a route table with the subnet. If you don't, the subnet will use the&lt;br /&gt;VCN's default route table. For more information about route tables, see&lt;br /&gt;&#91;Route Tables&#93;(/iaas/Content/Network/Tasks/managingroutetables.htm).&lt;br /&gt;&lt;br /&gt;You may optionally associate a security list with the subnet. If you don't, the subnet will use the&lt;br /&gt;VCN's default security list. For more information about security lists, see&lt;br /&gt;&#91;Security Lists&#93;(/iaas/Content/Network/Concepts/securitylists.htm).&lt;br /&gt;&lt;br /&gt;You may optionally associate a set of DHCP options with the subnet. If you don't, the subnet will use the&lt;br /&gt;VCN's default set. For more information about DHCP options, see&lt;br /&gt;&#91;DHCP Options&#93;(/iaas/Content/Network/Tasks/managingDHCP.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the subnet, otherwise a default is provided.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;You can also add a DNS label for the subnet, which is required if you want the Internet and&lt;br /&gt;VCN Resolver to resolve hostnames for instances in the subnet. For more information, see&lt;br /&gt;&#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).&lt;br /&gt;

```sql
INSERT INTO oci.network.subnets (
availabilityDomain,
cidrBlock,
compartmentId,
definedTags,
dhcpOptionsId,
displayName,
dnsLabel,
freeformTags,
ipv4CidrBlocks,
ipv6CidrBlock,
ipv6CidrBlocks,
prohibitPublicIpOnVnic,
routeTableId,
securityListIds,
vcnId,
region,
opc-retry-token
)
SELECT 
'{{ availabilityDomain }}',
'{{ cidrBlock }}',
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ dhcpOptionsId }}',
'{{ displayName }}',
'{{ dnsLabel }}',
'{{ freeformTags }}',
'{{ ipv4CidrBlocks }}',
'{{ ipv6CidrBlock }}',
'{{ ipv6CidrBlocks }}',
{{ prohibitPublicIpOnVnic }},
'{{ routeTableId }}',
'{{ securityListIds }}',
'{{ vcnId }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
availabilityDomain,
cidrBlock,
compartmentId,
definedTags,
dhcpOptionsId,
displayName,
dnsLabel,
freeformTags,
ipv4CidrBlocks,
ipv6CidrBlock,
ipv6CidrBlocks,
ipv6PublicCidrBlock,
ipv6VirtualRouterIp,
lifecycleState,
prohibitPublicIpOnVnic,
routeTableId,
securityListIds,
subnetDomainName,
timeCreated,
vcnId,
virtualRouterIp,
virtualRouterMac
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: subnets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the subnets resource.
    - name: availabilityDomain
      value: "{{ availabilityDomain }}"
      description: |
        Controls whether the subnet is regional or specific to an availability domain. Oracle
        recommends creating regional subnets because they're more flexible and make it easier to
        implement failover across availability domains. Originally, AD-specific subnets were the
        only kind available to use.
        To create a regional subnet, omit this attribute. Then any resources later created in this
        subnet (such as a Compute instance) can be created in any availability domain in the region.
        To instead create an AD-specific subnet, set this attribute to the availability domain you
        want this subnet to be in. Then any resources later created in this subnet can only be
        created in that availability domain.
        Example: \`Uocm:PHX-AD-1\`
    - name: cidrBlock
      value: "{{ cidrBlock }}"
      description: |
        The CIDR IP address range of the subnet. The CIDR must maintain the following rules -
        a. The CIDR block is valid and correctly formatted.
        b. The new range is within one of the parent VCN ranges.
        Example: \`10.0.1.0/24\`
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the subnet.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a
        namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: dhcpOptionsId
      value: "{{ dhcpOptionsId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the set of DHCP options the subnet will use. If you don't
        provide a value, the subnet uses the VCN's default set of DHCP options.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. Does not have to be unique, and it's changeable.
        Avoid entering confidential information.
    - name: dnsLabel
      value: "{{ dnsLabel }}"
      description: |
        A DNS label for the subnet, used in conjunction with the VNIC's hostname and
        VCN's DNS label to form a fully qualified domain name (FQDN) for each VNIC
        within this subnet (for example, \`bminstance1.subnet123.vcn1.oraclevcn.com\`).
        Must be an alphanumeric string that begins with a letter and is unique within the VCN.
        The value cannot be changed.
        This value must be set if you want to use the Internet and VCN Resolver to resolve the
        hostnames of instances in the subnet. It can only be set if the VCN itself
        was created with a DNS label.
        For more information, see
        [DNS in Your Virtual Cloud Network](/iaas/Content/Network/Concepts/dns.htm).
        Example: \`subnet123\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: ipv4CidrBlocks
      value:
        - "{{ ipv4CidrBlocks }}"
      description: |
        The list of all IPv4 CIDR blocks for the subnet that meets the following criteria:
        - Ipv4 CIDR blocks must be valid.
        - Multiple Ipv4 CIDR blocks must not overlap each other or the on-premises network CIDR block.
        - The number of prefixes must not exceed the limit of IPv4 prefixes allowed to a subnet.
    - name: ipv6CidrBlock
      value: "{{ ipv6CidrBlock }}"
      description: |
        Use this to enable IPv6 addressing for this subnet. The VCN must be enabled for IPv6.
        You can't change this subnet characteristic later. All subnets are /64 in size. The subnet
        portion of the IPv6 address is the fourth hextet from the left (1111 in the following example).
        For important details about IPv6 addressing in a VCN, see [IPv6 Addresses](/iaas/Content/Network/Concepts/ipv6.htm).
        Example: \`2001:0db8:0123:1111::/64\`
    - name: ipv6CidrBlocks
      value:
        - "{{ ipv6CidrBlocks }}"
      description: |
        The list of all IPv6 prefixes (Oracle allocated IPv6 GUA, ULA or private IPv6 prefixes, BYOIPv6 prefixes) for the subnet that meets the following criteria:
        - The prefixes must be valid.
        - Multiple prefixes must not overlap each other or the on-premises network prefix.
        - The number of prefixes must not exceed the limit of IPv6 prefixes allowed to a subnet.
    - name: prohibitPublicIpOnVnic
      value: {{ prohibitPublicIpOnVnic }}
      description: |
        Whether VNICs within this subnet can have public IP addresses.
        Defaults to false, which means VNICs created in this subnet will
        automatically be assigned public IP addresses unless specified
        otherwise during instance launch or VNIC creation (with the
        \`assignPublicIp\` flag in [CreateVnicDetails](#/en/iaas/latest/CreateVnicDetails/)).
        If \`prohibitPublicIpOnVnic\` is set to true, VNICs created in this
        subnet cannot have public IP addresses (that is, it's a private
        subnet).
        For IPv6, if \`prohibitPublicIpOnVnic\` is set to \`true\`, internet access is not allowed for any
        IPv6s assigned to VNICs in the subnet.
        Example: \`true\`
    - name: routeTableId
      value: "{{ routeTableId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the route table the subnet will use. If you don't provide a value,
        the subnet uses the VCN's default route table.
    - name: securityListIds
      value:
        - "{{ securityListIds }}"
      description: |
        The OCIDs of the security list or lists the subnet will use. If you don't
        provide a value, the subnet uses the VCN's default security list.
        Remember that security lists are associated *with the subnet*, but the
        rules are applied to the individual VNICs in the subnet.
    - name: vcnId
      value: "{{ vcnId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the VCN to contain the subnet.
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

Updates the specified subnet.&lt;br /&gt;

```sql
UPDATE oci.network.subnets
SET 
definedTags = '{{ definedTags }}',
dhcpOptionsId = '{{ dhcpOptionsId }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
ipv6CidrBlock = '{{ ipv6CidrBlock }}',
ipv6CidrBlocks = '{{ ipv6CidrBlocks }}',
routeTableId = '{{ routeTableId }}',
securityListIds = '{{ securityListIds }}'
WHERE 
subnetId = '{{ subnetId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
availabilityDomain,
cidrBlock,
compartmentId,
definedTags,
dhcpOptionsId,
displayName,
dnsLabel,
freeformTags,
ipv4CidrBlocks,
ipv6CidrBlock,
ipv6CidrBlocks,
ipv6PublicCidrBlock,
ipv6VirtualRouterIp,
lifecycleState,
prohibitPublicIpOnVnic,
routeTableId,
securityListIds,
subnetDomainName,
timeCreated,
vcnId,
virtualRouterIp,
virtualRouterMac;
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

Deletes the specified subnet, but only if there are no instances in the subnet. This is an asynchronous&lt;br /&gt;operation. The subnet's `lifecycleState` will change to TERMINATING temporarily. If there are any&lt;br /&gt;instances in the subnet, the state will instead change back to AVAILABLE.&lt;br /&gt;

```sql
DELETE FROM oci.network.subnets
WHERE subnetId = '{{ subnetId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_ipv4_subnet_cidr"
    values={[
        { label: 'add_ipv4_subnet_cidr', value: 'add_ipv4_subnet_cidr' },
        { label: 'add_ipv6_subnet_cidr', value: 'add_ipv6_subnet_cidr' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'modify_ipv4_subnet_cidr', value: 'modify_ipv4_subnet_cidr' },
        { label: 'remove_ipv4_subnet_cidr', value: 'remove_ipv4_subnet_cidr' },
        { label: 'remove_ipv6_subnet_cidr', value: 'remove_ipv6_subnet_cidr' }
    ]}
>
<TabItem value="add_ipv4_subnet_cidr">

Add an IPv4 prefix to a subnet.&lt;br /&gt;

```sql
EXEC oci.network.subnets.add_ipv4_subnet_cidr 
@subnetId='{{ subnetId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"ipv4CidrBlock": "{{ ipv4CidrBlock }}"
}'
;
```
</TabItem>
<TabItem value="add_ipv6_subnet_cidr">

Add an IPv6 prefix to a subnet.&lt;br /&gt;

```sql
EXEC oci.network.subnets.add_ipv6_subnet_cidr 
@subnetId='{{ subnetId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"ipv6CidrBlock": "{{ ipv6CidrBlock }}"
}'
;
```
</TabItem>
<TabItem value="change_compartment">

Moves a subnet into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.network.subnets.change_compartment 
@subnetId='{{ subnetId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
<TabItem value="modify_ipv4_subnet_cidr">

Updates the specified Ipv4 CIDR block of a Subnet. The new Ipv4 CIDR IP range must meet the following criteria:&lt;br /&gt;&lt;br /&gt;- Must be valid.&lt;br /&gt;- Must not overlap with another Ipv4 CIDR block in the Subnet or the on-premises network CIDR block.&lt;br /&gt;- Must not exceed the limit of Ipv4 CIDR blocks allowed per Subnet.&lt;br /&gt;- Must include IP addresses from the original CIDR block that are used in the VCN's existing route rules.&lt;br /&gt;- No IP address in an existing subnet should be outside of the new CIDR block range.&lt;br /&gt;

```sql
EXEC oci.network.subnets.modify_ipv4_subnet_cidr 
@subnetId='{{ subnetId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"ipv4CidrBlock": "{{ ipv4CidrBlock }}", 
"updatedIpv4CidrBlock": "{{ updatedIpv4CidrBlock }}"
}'
;
```
</TabItem>
<TabItem value="remove_ipv4_subnet_cidr">

Remove an IPv4 prefix from a subnet&lt;br /&gt;

```sql
EXEC oci.network.subnets.remove_ipv4_subnet_cidr 
@subnetId='{{ subnetId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"ipv4CidrBlock": "{{ ipv4CidrBlock }}"
}'
;
```
</TabItem>
<TabItem value="remove_ipv6_subnet_cidr">

Remove an IPv6 prefix from a subnet. At least one IPv6 CIDR should remain.&lt;br /&gt;

```sql
EXEC oci.network.subnets.remove_ipv6_subnet_cidr 
@subnetId='{{ subnetId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"ipv6CidrBlock": "{{ ipv6CidrBlock }}"
}'
;
```
</TabItem>
</Tabs>
