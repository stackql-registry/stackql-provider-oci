--- 
title: vcns
hide_title: false
hide_table_of_contents: false
keywords:
  - vcns
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

Creates, updates, deletes, gets or lists a <code>vcns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vcns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.vcns" /></td></tr>
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

The VCN was retrieved.

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
    <td>The VCN's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="byoipv6CidrBlocks" /></td>
    <td><code>array</code></td>
    <td>The list of BYOIPv6 prefixes required to create a VCN that uses BYOIPv6 ranges. </td>
</tr>
<tr>
    <td><CopyableCode code="cidrBlock" /></td>
    <td><code>string</code></td>
    <td>Deprecated. The first CIDR IP address from cidrBlocks.  Example: `172.16.0.0/16` </td>
</tr>
<tr>
    <td><CopyableCode code="cidrBlocks" /></td>
    <td><code>array</code></td>
    <td>The list of IPv4 CIDR blocks the VCN will use. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the VCN.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultDhcpOptionsId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the VCN's default set of DHCP options. </td>
</tr>
<tr>
    <td><CopyableCode code="defaultRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the VCN's default route table.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultSecurityListId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the VCN's default security list.</td>
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
    <td><CopyableCode code="dnsLabel" /></td>
    <td><code>string</code></td>
    <td>A DNS label for the VCN, used in conjunction with the VNIC's hostname and subnet's DNS label to form a fully qualified domain name (FQDN) for each VNIC within this subnet (for example, `bminstance1.subnet123.vcn1.oraclevcn.com`). Must be an alphanumeric string that begins with a letter. The value cannot be changed.  The absence of this parameter means the Internet and VCN Resolver will not work for this VCN.  For more information, see &#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).  Example: `vcn1` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6CidrBlock" /></td>
    <td><code>string</code></td>
    <td>For an IPv6-enabled VCN, this is the IPv6 prefix for the VCN's private IP address space. The VCN size is always /56. Oracle provides the IPv6 prefix to use as the *same* CIDR for the `ipv6PublicCidrBlock`. When creating a subnet, specify the last 8 bits, 00 to FF. See &#91;IPv6 Addresses&#93;(/iaas/Content/Network/Concepts/ipv6.htm). Example: `2001:0db8:0123::/56` </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6PrivateCidrBlocks" /></td>
    <td><code>array</code></td>
    <td>For an IPv6-enabled VCN, this is the list of Private IPv6 prefixes for the VCN's IP address space. </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6PublicCidrBlock" /></td>
    <td><code>string</code></td>
    <td>For an IPv6-enabled VCN, this is the IPv6 prefix for the VCN's public IP address space. The VCN size is always /56. This prefix is always provided by Oracle. If you don't provide a custom prefix for the `ipv6CidrBlock` when creating the VCN, Oracle assigns that value and also uses it for `ipv6PublicCidrBlock`. Oracle uses addresses from this block for the `publicIpAddress` attribute of an &#91;Ipv6&#93;(#/en/iaas/latest/Ipv6/) that has internet access allowed.  Example: `2001:0db8:0123::/48` </td>
</tr>
<tr>
    <td><CopyableCode code="isEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether traffic within the VCN is encrypted. For more information, see &#91;VN Encryption&#93;(/iaas/Content/gov-cloud/govinfo.htm#govinfo_topic_LAN-encryption). </td>
</tr>
<tr>
    <td><CopyableCode code="isZprOnly" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether ZPR Only mode is enforced. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The VCN's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>&#91;Security attributes&#93;(/iaas/Content/zero-trust-packet-routing/zpr-artifacts.htm#security-attributes) are labels for a resource that can be referenced in a &#91;Zero Trust Packet Routing&#93;(/iaas/Content/zero-trust-packet-routing/overview.htm) (ZPR) policy to control access to ZPR-supported resources.  Example: `&#123;"Oracle-DataSecurity-ZPR": &#123;"MaxEgressCount": &#123;"value":"42","mode":"audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the VCN was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnDomainName" /></td>
    <td><code>string</code></td>
    <td>The VCN's domain name, which consists of the VCN's DNS label, and the `oraclevcn.com` domain.  For more information, see &#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).  Example: `vcn1.oraclevcn.com` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A virtual cloud network (VCN). For more information, see&lt;br /&gt;&#91;Overview of the Networking Service&#93;(/iaas/Content/Network/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The VCN's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="byoipv6CidrBlocks" /></td>
    <td><code>array</code></td>
    <td>The list of BYOIPv6 prefixes required to create a VCN that uses BYOIPv6 ranges. </td>
</tr>
<tr>
    <td><CopyableCode code="cidrBlock" /></td>
    <td><code>string</code></td>
    <td>Deprecated. The first CIDR IP address from cidrBlocks.  Example: `172.16.0.0/16` </td>
</tr>
<tr>
    <td><CopyableCode code="cidrBlocks" /></td>
    <td><code>array</code></td>
    <td>The list of IPv4 CIDR blocks the VCN will use. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the VCN.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultDhcpOptionsId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the VCN's default set of DHCP options. </td>
</tr>
<tr>
    <td><CopyableCode code="defaultRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the VCN's default route table.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultSecurityListId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for the VCN's default security list.</td>
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
    <td><CopyableCode code="dnsLabel" /></td>
    <td><code>string</code></td>
    <td>A DNS label for the VCN, used in conjunction with the VNIC's hostname and subnet's DNS label to form a fully qualified domain name (FQDN) for each VNIC within this subnet (for example, `bminstance1.subnet123.vcn1.oraclevcn.com`). Must be an alphanumeric string that begins with a letter. The value cannot be changed.  The absence of this parameter means the Internet and VCN Resolver will not work for this VCN.  For more information, see &#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).  Example: `vcn1` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6CidrBlock" /></td>
    <td><code>string</code></td>
    <td>For an IPv6-enabled VCN, this is the IPv6 prefix for the VCN's private IP address space. The VCN size is always /56. Oracle provides the IPv6 prefix to use as the *same* CIDR for the `ipv6PublicCidrBlock`. When creating a subnet, specify the last 8 bits, 00 to FF. See &#91;IPv6 Addresses&#93;(/iaas/Content/Network/Concepts/ipv6.htm). Example: `2001:0db8:0123::/56` </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6PrivateCidrBlocks" /></td>
    <td><code>array</code></td>
    <td>For an IPv6-enabled VCN, this is the list of Private IPv6 prefixes for the VCN's IP address space. </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6PublicCidrBlock" /></td>
    <td><code>string</code></td>
    <td>For an IPv6-enabled VCN, this is the IPv6 prefix for the VCN's public IP address space. The VCN size is always /56. This prefix is always provided by Oracle. If you don't provide a custom prefix for the `ipv6CidrBlock` when creating the VCN, Oracle assigns that value and also uses it for `ipv6PublicCidrBlock`. Oracle uses addresses from this block for the `publicIpAddress` attribute of an &#91;Ipv6&#93;(#/en/iaas/latest/Ipv6/) that has internet access allowed.  Example: `2001:0db8:0123::/48` </td>
</tr>
<tr>
    <td><CopyableCode code="isEncrypted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether traffic within the VCN is encrypted. For more information, see &#91;VN Encryption&#93;(/iaas/Content/gov-cloud/govinfo.htm#govinfo_topic_LAN-encryption). </td>
</tr>
<tr>
    <td><CopyableCode code="isZprOnly" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether ZPR Only mode is enforced. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The VCN's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>&#91;Security attributes&#93;(/iaas/Content/zero-trust-packet-routing/zpr-artifacts.htm#security-attributes) are labels for a resource that can be referenced in a &#91;Zero Trust Packet Routing&#93;(/iaas/Content/zero-trust-packet-routing/overview.htm) (ZPR) policy to control access to ZPR-supported resources.  Example: `&#123;"Oracle-DataSecurity-ZPR": &#123;"MaxEgressCount": &#123;"value":"42","mode":"audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the VCN was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnDomainName" /></td>
    <td><code>string</code></td>
    <td>The VCN's domain name, which consists of the VCN's DNS label, and the `oraclevcn.com` domain.  For more information, see &#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).  Example: `vcn1.oraclevcn.com` </td>
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
    <td><a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified VCN's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the virtual cloud networks (VCNs) in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new virtual cloud network (VCN). For more information, see&lt;br /&gt;&#91;VCNs and Subnets&#93;(/iaas/Content/Network/Tasks/managingVCNs.htm).&lt;br /&gt;&lt;br /&gt;For the VCN, you specify a list of one or more IPv4 CIDR blocks that meet the following criteria:&lt;br /&gt;&lt;br /&gt;- The CIDR blocks must be valid.&lt;br /&gt;- They must not overlap with each other or with the on-premises network CIDR block.&lt;br /&gt;- The number of CIDR blocks does not exceed the limit of CIDR blocks allowed per VCN.&lt;br /&gt;&lt;br /&gt;For a CIDR block, Oracle recommends that you use one of the private IP address ranges specified in &#91;RFC 1918&#93;(https:​//tools.ietf.org/html/rfc1918) (10.0.0.0/8, 172.16/12, and 192.168/16). Example:&lt;br /&gt;172.16.0.0/16. The CIDR blocks can range from /16 to /30.&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want the VCN to&lt;br /&gt;reside. Consult an Oracle Cloud Infrastructure administrator in your organization if you're not sure which&lt;br /&gt;compartment to use. Notice that the VCN doesn't have to be in the same compartment as the subnets or other&lt;br /&gt;Networking Service components. For more information about compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm). For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the VCN, otherwise a default is provided. It does not have to&lt;br /&gt;be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;You can also add a DNS label for the VCN, which is required if you want the instances to use the&lt;br /&gt;Interent and VCN Resolver option for DNS in the VCN. For more information, see&lt;br /&gt;&#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).&lt;br /&gt;&lt;br /&gt;The VCN automatically comes with a default route table, default security list, and default set of DHCP options.&lt;br /&gt;The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for each is returned in the response. You can't delete these default objects, but you can change their&lt;br /&gt;contents (that is, change the route rules, security list rules, and so on).&lt;br /&gt;&lt;br /&gt;The VCN and subnets you create are not accessible until you attach an internet gateway or set up a Site-to-Site VPN&lt;br /&gt;or FastConnect. For more information, see&lt;br /&gt;&#91;Overview of the Networking Service&#93;(/iaas/Content/Network/Concepts/overview.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified VCN.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified VCN. The VCN must be completely empty and have no attached gateways. This is an asynchronous&lt;br /&gt;operation.&lt;br /&gt;&lt;br /&gt;A deleted VCN's `lifecycleState` changes to TERMINATING and then TERMINATED temporarily until the VCN is completely&lt;br /&gt;removed. A completely removed VCN does not appear in the results of a `ListVcns` operation and can't be used in a&lt;br /&gt;`GetVcn` operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_vcn_cidr"><CopyableCode code="add_vcn_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cidrBlock"><code>cidrBlock</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Adds a CIDR block to a VCN. The CIDR block you add:&lt;br /&gt;&lt;br /&gt;- Must be valid.&lt;br /&gt;- Must not overlap with another CIDR block in the VCN, a CIDR block of a peered VCN, or the on-premises network CIDR block.&lt;br /&gt;- Must not exceed the limit of CIDR blocks allowed per VCN.&lt;br /&gt;&lt;br /&gt;**Note:** Adding a CIDR block places your VCN in an updating state until the changes are complete. You cannot create or update the VCN's subnets, VLANs, LPGs, or route tables during this operation. The time to completion can take a few minutes. You can use the `GetWorkRequest` operation to check the status of the update.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_ipv6_vcn_cidr"><CopyableCode code="add_ipv6_vcn_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Add an IPv6 prefix to a VCN. The VCN size is always /56.&lt;br /&gt;AddIpv6VcnCidr supports adding Private IPv6 Prefix i.e. ULA or an IPv6 GUA assigned by Oracle or BYOIPv6 Prefix, only one of these per request.&lt;br /&gt;Once added the IPv6 prefix cannot be removed or modified.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a VCN into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#modify_vcn_cidr"><CopyableCode code="modify_vcn_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-originalCidrBlock"><code>originalCidrBlock</code></a>, <a href="#parameter-newCidrBlock"><code>newCidrBlock</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified CIDR block of a VCN. The new CIDR IP range must meet the following criteria:&lt;br /&gt;&lt;br /&gt;- Must be valid.&lt;br /&gt;- Must not overlap with another CIDR block in the VCN, a CIDR block of a peered VCN, or the on-premises network CIDR block.&lt;br /&gt;- Must not exceed the limit of CIDR blocks allowed per VCN.&lt;br /&gt;- Must include IP addresses from the original CIDR block that are used in the VCN's existing route rules.&lt;br /&gt;- No IP address in an existing subnet should be outside of the new CIDR block range.&lt;br /&gt;&lt;br /&gt;**Note:** Modifying a CIDR block places your VCN in an updating state until the changes are complete. You cannot create or update the VCN's subnets, VLANs, LPGs, or route tables during this operation. The time to completion can vary depending on the size of your network. Updating a small network could take about a minute, and updating a large network could take up to an hour. You can use the `GetWorkRequest` operation to check the status of the update.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_vcn_cidr"><CopyableCode code="remove_vcn_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cidrBlock"><code>cidrBlock</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Removes a specified CIDR block from a VCN.&lt;br /&gt;&lt;br /&gt;**Notes:**&lt;br /&gt;- You cannot remove a CIDR block if an IP address in its range is in use.&lt;br /&gt;- Removing a CIDR block places your VCN in an updating state until the changes are complete. You cannot create or update the VCN's subnets, VLANs, LPGs, or route tables during this operation. The time to completion can take a few minutes. You can use the `GetWorkRequest` operation to check the status of the update.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_ipv6_vcn_cidr"><CopyableCode code="remove_ipv6_vcn_cidr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Removing an existing IPv6 prefix from a VCN.&lt;br /&gt;</td>
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
<tr id="parameter-vcnId">
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>Specify the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN.</td>
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

Gets the specified VCN's information.

```sql
SELECT
id,
byoipv6CidrBlocks,
cidrBlock,
cidrBlocks,
compartmentId,
defaultDhcpOptionsId,
defaultRouteTableId,
defaultSecurityListId,
definedTags,
displayName,
dnsLabel,
freeformTags,
ipv6CidrBlock,
ipv6PrivateCidrBlocks,
ipv6PublicCidrBlock,
isEncrypted,
isZprOnly,
lifecycleState,
securityAttributes,
timeCreated,
vcnDomainName
FROM oci.network.vcns
WHERE vcnId = '{{ vcnId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the virtual cloud networks (VCNs) in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
byoipv6CidrBlocks,
cidrBlock,
cidrBlocks,
compartmentId,
defaultDhcpOptionsId,
defaultRouteTableId,
defaultSecurityListId,
definedTags,
displayName,
dnsLabel,
freeformTags,
ipv6CidrBlock,
ipv6PrivateCidrBlocks,
ipv6PublicCidrBlock,
isEncrypted,
isZprOnly,
lifecycleState,
securityAttributes,
timeCreated,
vcnDomainName
FROM oci.network.vcns
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
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

Creates a new virtual cloud network (VCN). For more information, see&lt;br /&gt;&#91;VCNs and Subnets&#93;(/iaas/Content/Network/Tasks/managingVCNs.htm).&lt;br /&gt;&lt;br /&gt;For the VCN, you specify a list of one or more IPv4 CIDR blocks that meet the following criteria:&lt;br /&gt;&lt;br /&gt;- The CIDR blocks must be valid.&lt;br /&gt;- They must not overlap with each other or with the on-premises network CIDR block.&lt;br /&gt;- The number of CIDR blocks does not exceed the limit of CIDR blocks allowed per VCN.&lt;br /&gt;&lt;br /&gt;For a CIDR block, Oracle recommends that you use one of the private IP address ranges specified in &#91;RFC 1918&#93;(https:​//tools.ietf.org/html/rfc1918) (10.0.0.0/8, 172.16/12, and 192.168/16). Example:&lt;br /&gt;172.16.0.0/16. The CIDR blocks can range from /16 to /30.&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want the VCN to&lt;br /&gt;reside. Consult an Oracle Cloud Infrastructure administrator in your organization if you're not sure which&lt;br /&gt;compartment to use. Notice that the VCN doesn't have to be in the same compartment as the subnets or other&lt;br /&gt;Networking Service components. For more information about compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm). For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the VCN, otherwise a default is provided. It does not have to&lt;br /&gt;be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;You can also add a DNS label for the VCN, which is required if you want the instances to use the&lt;br /&gt;Interent and VCN Resolver option for DNS in the VCN. For more information, see&lt;br /&gt;&#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).&lt;br /&gt;&lt;br /&gt;The VCN automatically comes with a default route table, default security list, and default set of DHCP options.&lt;br /&gt;The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) for each is returned in the response. You can't delete these default objects, but you can change their&lt;br /&gt;contents (that is, change the route rules, security list rules, and so on).&lt;br /&gt;&lt;br /&gt;The VCN and subnets you create are not accessible until you attach an internet gateway or set up a Site-to-Site VPN&lt;br /&gt;or FastConnect. For more information, see&lt;br /&gt;&#91;Overview of the Networking Service&#93;(/iaas/Content/Network/Concepts/overview.htm).&lt;br /&gt;

```sql
INSERT INTO oci.network.vcns (
byoipv6CidrDetails,
cidrBlock,
cidrBlocks,
compartmentId,
definedTags,
displayName,
dnsLabel,
freeformTags,
ipv6CidrBlock,
ipv6PrivateCidrBlocks,
isEncrypted,
isIpv6Enabled,
isOracleGuaAllocationEnabled,
isZprOnly,
securityAttributes,
region,
opc-retry-token
)
SELECT 
'{{ byoipv6CidrDetails }}',
'{{ cidrBlock }}',
'{{ cidrBlocks }}',
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ dnsLabel }}',
'{{ freeformTags }}',
'{{ ipv6CidrBlock }}',
'{{ ipv6PrivateCidrBlocks }}',
{{ isEncrypted }},
{{ isIpv6Enabled }},
{{ isOracleGuaAllocationEnabled }},
{{ isZprOnly }},
'{{ securityAttributes }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
byoipv6CidrBlocks,
cidrBlock,
cidrBlocks,
compartmentId,
defaultDhcpOptionsId,
defaultRouteTableId,
defaultSecurityListId,
definedTags,
displayName,
dnsLabel,
freeformTags,
ipv6CidrBlock,
ipv6PrivateCidrBlocks,
ipv6PublicCidrBlock,
isEncrypted,
isZprOnly,
lifecycleState,
securityAttributes,
timeCreated,
vcnDomainName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vcns
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vcns resource.
    - name: byoipv6CidrDetails
      description: |
        The list of BYOIPv6 OCIDs and BYOIPv6 prefixes required to create a VCN that uses BYOIPv6 address ranges.
      value:
        - byoipv6RangeId: "{{ byoipv6RangeId }}"
          ipv6CidrBlock: "{{ ipv6CidrBlock }}"
    - name: cidrBlock
      value: "{{ cidrBlock }}"
      description: |
        **Deprecated.** Do *not* set this value. Use \`cidrBlocks\` instead.
        Example: \`10.0.0.0/16\`
    - name: cidrBlocks
      value:
        - "{{ cidrBlocks }}"
      description: |
        The list of one or more IPv4 CIDR blocks for the VCN that meet the following criteria:
        - The CIDR blocks must be valid.
        - They must not overlap with each other or with the on-premises network CIDR block.
        - The number of CIDR blocks must not exceed the limit of CIDR blocks allowed per VCN.
        **Important:** Do *not* specify a value for \`cidrBlock\`. Use this parameter instead.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the VCN.
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
    - name: dnsLabel
      value: "{{ dnsLabel }}"
      description: |
        A DNS label for the VCN, used in conjunction with the VNIC's hostname and
        subnet's DNS label to form a fully qualified domain name (FQDN) for each VNIC
        within this subnet (for example, \`bminstance1.subnet123.vcn1.oraclevcn.com\`).
        Not required to be unique, but it's a best practice to set unique DNS labels
        for VCNs in your tenancy. Must be an alphanumeric string that begins with a letter.
        The value cannot be changed.
        You must set this value if you want instances to be able to use hostnames to
        resolve other instances in the VCN. Otherwise the Internet and VCN Resolver
        will not work.
        For more information, see
        [DNS in Your Virtual Cloud Network](/iaas/Content/Network/Concepts/dns.htm).
        Example: \`vcn1\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: ipv6CidrBlock
      value: "{{ ipv6CidrBlock }}"
      description: |
        If you enable IPv6 for the VCN (see \`isIpv6Enabled\`), you may optionally provide an IPv6
        /56 prefix from the supported ranges (see [IPv6 Addresses](/iaas/Content/Network/Concepts/ipv6.htm).
        The addresses in this block will be considered private and cannot be accessed
        from the internet. The documentation refers to this as a *custom CIDR* for the VCN.
        If you don't provide a custom CIDR for the VCN, Oracle assigns the VCN's IPv6 /56 prefix.
        Regardless of whether you or Oracle assigns the \`ipv6CidrBlock\`,
        Oracle *also* assigns the VCN an IPv6 prefix for the VCN's public IP address space
        (see the \`ipv6PublicCidrBlock\` of the [Vcn](#/en/iaas/latest/Vcn/) object). If you do
        not assign a custom prefix, Oracle uses the *same* Oracle-assigned prefix for both the private
        IP address space (\`ipv6CidrBlock\` in the \`Vcn\` object) and the public IP addreses space
        (\`ipv6PublicCidrBlock\` in the \`Vcn\` object). This means that a given VNIC might use the same
        IPv6 IP address for both private and public (internet) communication. You control whether
        an IPv6 address can be used for internet communication by using the \`isInternetAccessAllowed\`
        attribute in the [Ipv6](#/en/iaas/latest/Ipv6/) object.
        For important details about IPv6 addressing in a VCN, see [IPv6 Addresses](/iaas/Content/Network/Concepts/ipv6.htm).
        Example: \`2001:0db8:0123::/48\`
    - name: ipv6PrivateCidrBlocks
      value:
        - "{{ ipv6PrivateCidrBlocks }}"
      description: |
        The list of one or more ULA or Private IPv6 prefixes for the VCN that meets the following criteria:
        - The CIDR blocks must be valid.
        - Multiple CIDR blocks must not overlap each other or the on-premises network prefix.
        - The number of CIDR blocks must not exceed the limit of IPv6 prefixes allowed to a VCN.
        **Important:** Do *not* specify a value for \`ipv6CidrBlock\`. Use this parameter instead.
    - name: isEncrypted
      value: {{ isEncrypted }}
      description: |
        Indicates whether traffic within the VCN is encrypted.
        For more information, see [VN Encryption](/iaas/Content/gov-cloud/govinfo.htm#govinfo_topic_LAN-encryption).
    - name: isIpv6Enabled
      value: {{ isIpv6Enabled }}
      description: |
        Whether IPv6 is enabled for the VCN. Default is \`false\`.
        If enabled, Oracle will assign the VCN a IPv6 /56 CIDR block.
        You may skip having Oracle allocate the VCN a IPv6 /56 CIDR block by setting isOracleGuaAllocationEnabled to \`false\`.
        For important details about IPv6 addressing in a VCN, see [IPv6 Addresses](/iaas/Content/Network/Concepts/ipv6.htm).
        Example: \`true\`
    - name: isOracleGuaAllocationEnabled
      value: {{ isOracleGuaAllocationEnabled }}
      description: |
        Specifies whether to skip Oracle allocated IPv6 GUA. By default, Oracle will allocate one GUA of /56
        size for an IPv6 enabled VCN.
      default: true
    - name: isZprOnly
      value: {{ isZprOnly }}
      description: |
        Indicates whether ZPR Only mode is enforced.
      default: false
    - name: securityAttributes
      value: "{{ securityAttributes }}"
      description: |
        [Security attributes](/iaas/Content/zero-trust-packet-routing/zpr-artifacts.htm#security-attributes) are labels
        for a resource that can be referenced in a [Zero Trust Packet Routing](/iaas/Content/zero-trust-packet-routing/overview.htm)
        (ZPR) policy to control access to ZPR-supported resources.
        Example: \`{"Oracle-DataSecurity-ZPR": {"MaxEgressCount": {"value":"42","mode":"audit"}}}\`
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

Updates the specified VCN.&lt;br /&gt;

```sql
UPDATE oci.network.vcns
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
isEncrypted = {{ isEncrypted }},
isZprOnly = {{ isZprOnly }},
securityAttributes = '{{ securityAttributes }}'
WHERE 
vcnId = '{{ vcnId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
byoipv6CidrBlocks,
cidrBlock,
cidrBlocks,
compartmentId,
defaultDhcpOptionsId,
defaultRouteTableId,
defaultSecurityListId,
definedTags,
displayName,
dnsLabel,
freeformTags,
ipv6CidrBlock,
ipv6PrivateCidrBlocks,
ipv6PublicCidrBlock,
isEncrypted,
isZprOnly,
lifecycleState,
securityAttributes,
timeCreated,
vcnDomainName;
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

Deletes the specified VCN. The VCN must be completely empty and have no attached gateways. This is an asynchronous&lt;br /&gt;operation.&lt;br /&gt;&lt;br /&gt;A deleted VCN's `lifecycleState` changes to TERMINATING and then TERMINATED temporarily until the VCN is completely&lt;br /&gt;removed. A completely removed VCN does not appear in the results of a `ListVcns` operation and can't be used in a&lt;br /&gt;`GetVcn` operation.&lt;br /&gt;

```sql
DELETE FROM oci.network.vcns
WHERE vcnId = '{{ vcnId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_vcn_cidr"
    values={[
        { label: 'add_vcn_cidr', value: 'add_vcn_cidr' },
        { label: 'add_ipv6_vcn_cidr', value: 'add_ipv6_vcn_cidr' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'modify_vcn_cidr', value: 'modify_vcn_cidr' },
        { label: 'remove_vcn_cidr', value: 'remove_vcn_cidr' },
        { label: 'remove_ipv6_vcn_cidr', value: 'remove_ipv6_vcn_cidr' }
    ]}
>
<TabItem value="add_vcn_cidr">

Adds a CIDR block to a VCN. The CIDR block you add:&lt;br /&gt;&lt;br /&gt;- Must be valid.&lt;br /&gt;- Must not overlap with another CIDR block in the VCN, a CIDR block of a peered VCN, or the on-premises network CIDR block.&lt;br /&gt;- Must not exceed the limit of CIDR blocks allowed per VCN.&lt;br /&gt;&lt;br /&gt;**Note:** Adding a CIDR block places your VCN in an updating state until the changes are complete. You cannot create or update the VCN's subnets, VLANs, LPGs, or route tables during this operation. The time to completion can take a few minutes. You can use the `GetWorkRequest` operation to check the status of the update.&lt;br /&gt;

```sql
EXEC oci.network.vcns.add_vcn_cidr 
@vcnId='{{ vcnId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"cidrBlock": "{{ cidrBlock }}"
}'
;
```
</TabItem>
<TabItem value="add_ipv6_vcn_cidr">

Add an IPv6 prefix to a VCN. The VCN size is always /56.&lt;br /&gt;AddIpv6VcnCidr supports adding Private IPv6 Prefix i.e. ULA or an IPv6 GUA assigned by Oracle or BYOIPv6 Prefix, only one of these per request.&lt;br /&gt;Once added the IPv6 prefix cannot be removed or modified.&lt;br /&gt;

```sql
EXEC oci.network.vcns.add_ipv6_vcn_cidr 
@vcnId='{{ vcnId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"byoipv6CidrDetail": "{{ byoipv6CidrDetail }}", 
"ipv6PrivateCidrBlock": "{{ ipv6PrivateCidrBlock }}", 
"isOracleGuaAllocationEnabled": {{ isOracleGuaAllocationEnabled }}
}'
;
```
</TabItem>
<TabItem value="change_compartment">

Moves a VCN into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.network.vcns.change_compartment 
@vcnId='{{ vcnId }}' --required, 
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
<TabItem value="modify_vcn_cidr">

Updates the specified CIDR block of a VCN. The new CIDR IP range must meet the following criteria:&lt;br /&gt;&lt;br /&gt;- Must be valid.&lt;br /&gt;- Must not overlap with another CIDR block in the VCN, a CIDR block of a peered VCN, or the on-premises network CIDR block.&lt;br /&gt;- Must not exceed the limit of CIDR blocks allowed per VCN.&lt;br /&gt;- Must include IP addresses from the original CIDR block that are used in the VCN's existing route rules.&lt;br /&gt;- No IP address in an existing subnet should be outside of the new CIDR block range.&lt;br /&gt;&lt;br /&gt;**Note:** Modifying a CIDR block places your VCN in an updating state until the changes are complete. You cannot create or update the VCN's subnets, VLANs, LPGs, or route tables during this operation. The time to completion can vary depending on the size of your network. Updating a small network could take about a minute, and updating a large network could take up to an hour. You can use the `GetWorkRequest` operation to check the status of the update.&lt;br /&gt;

```sql
EXEC oci.network.vcns.modify_vcn_cidr 
@vcnId='{{ vcnId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"newCidrBlock": "{{ newCidrBlock }}", 
"originalCidrBlock": "{{ originalCidrBlock }}"
}'
;
```
</TabItem>
<TabItem value="remove_vcn_cidr">

Removes a specified CIDR block from a VCN.&lt;br /&gt;&lt;br /&gt;**Notes:**&lt;br /&gt;- You cannot remove a CIDR block if an IP address in its range is in use.&lt;br /&gt;- Removing a CIDR block places your VCN in an updating state until the changes are complete. You cannot create or update the VCN's subnets, VLANs, LPGs, or route tables during this operation. The time to completion can take a few minutes. You can use the `GetWorkRequest` operation to check the status of the update.&lt;br /&gt;

```sql
EXEC oci.network.vcns.remove_vcn_cidr 
@vcnId='{{ vcnId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"cidrBlock": "{{ cidrBlock }}"
}'
;
```
</TabItem>
<TabItem value="remove_ipv6_vcn_cidr">

Removing an existing IPv6 prefix from a VCN.&lt;br /&gt;

```sql
EXEC oci.network.vcns.remove_ipv6_vcn_cidr 
@vcnId='{{ vcnId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"ipv6CidrBlock": "{{ ipv6CidrBlock }}"
}'
;
```
</TabItem>
</Tabs>
