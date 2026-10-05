--- 
title: ipv6s
hide_title: false
hide_table_of_contents: false
keywords:
  - ipv6s
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

Creates, updates, deletes, gets or lists an <code>ipv6s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipv6s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.ipv6s" /></td></tr>
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

The IPv6 was retrievd.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the IPv6.</td>
</tr>
<tr>
    <td><CopyableCode code="cidrPrefixLength" /></td>
    <td><code>integer</code></td>
    <td>Length of cidr range. Optional field to specify flexible cidr.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the IPv6. This is the same as the VNIC's compartment. </td>
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
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>The IPv6 address of the `IPv6` object. The address is within the IPv6 prefix of the VNIC's subnet (see the `ipv6CidrBlock` attribute for the &#91;Subnet&#93;(#/en/iaas/latest/Subnet/) object.  Example: `2001:0db8:0123:1111:abcd:ef01:2345:6789` </td>
</tr>
<tr>
    <td><CopyableCode code="ipState" /></td>
    <td><code>string</code></td>
    <td>State of the IP address. If an IP address is assigned to a VNIC it is ASSIGNED, otherwise it is AVAILABLE.  (ASSIGNED, AVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="isInternetAccessAllowed" /></td>
    <td><code>boolean</code></td>
    <td>Whether the IPv6 can be used for internet communication. Allowed by default for an IPv6 in a public subnet. Never allowed for an IPv6 in a private subnet. If the value is `true`, the IPv6 uses its public IP address for internet communication.  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The IPv6's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="lifetime" /></td>
    <td><code>string</code></td>
    <td>Lifetime of the IP address. There are two types of IPs:  - Ephemeral  - Reserved  (EPHEMERAL, RESERVED)</td>
</tr>
<tr>
    <td><CopyableCode code="publicIpAddress" /></td>
    <td><code>string</code></td>
    <td>The IPv6 address to be used for internet communication. The address is within the IPv6 prefix of the VNIC's subnet (see the `ipv6PublicCidrBlock` attribute for the &#91;Subnet&#93;(#/en/iaas/latest/Subnet/) object).  If your organization did NOT assign a custom IPv6 prefix to the VCN for the private address space, Oracle provides the IPv6 prefix and uses that same prefix for the private and public address space. Therefore the `publicIpAddress` would be the same as the `ipAddress`.  If your organization assigned a custom IPv6 prefix to the VCN for the address space, the right 80 bits of the IPv6 IP (the subnet and address bits) are the same as for the `ipAddress`. But the left 48 bits are from the IPv6 prefix that Oracle assigned to the VCN.  This is null if the IPv6 is created with `isInternetAccessAllowed` set to `false`.  Example: `2001:0db8:0123:1111:abcd:ef01:2345:6789` </td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table the IP address or VNIC will use. For more information, see &#91;Per-resource Routing&#93;(https:​//docs.oracle.com/iaas/Content/Network/Tasks/managingroutetables.htm#Overview_of_Routing_for_Your_VCN__source_routing). </td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the subnet the VNIC is in.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the IPv6 was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vnicId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VNIC the IPv6 is assigned to. The VNIC and IPv6 must be in the same subnet. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An *IPv6* is a conceptual term that refers to an IPv6 address and related properties.&lt;br /&gt;The `IPv6` object is the API representation of an IPv6.&lt;br /&gt;&lt;br /&gt;You can create and assign an IPv6 to any VNIC that is in an IPv6-enabled subnet in an&lt;br /&gt;IPv6-enabled VCN.&lt;br /&gt;&lt;br /&gt;**Note:** IPv6 addressing is supported for all commercial and government regions. For important&lt;br /&gt;details about IPv6 addressing in a VCN, see &#91;IPv6 Addresses&#93;(/iaas/Content/Network/Concepts/ipv6.htm).&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the IPv6.</td>
</tr>
<tr>
    <td><CopyableCode code="cidrPrefixLength" /></td>
    <td><code>integer</code></td>
    <td>Length of cidr range. Optional field to specify flexible cidr.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the IPv6. This is the same as the VNIC's compartment. </td>
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
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>The IPv6 address of the `IPv6` object. The address is within the IPv6 prefix of the VNIC's subnet (see the `ipv6CidrBlock` attribute for the &#91;Subnet&#93;(#/en/iaas/latest/Subnet/) object.  Example: `2001:0db8:0123:1111:abcd:ef01:2345:6789` </td>
</tr>
<tr>
    <td><CopyableCode code="ipState" /></td>
    <td><code>string</code></td>
    <td>State of the IP address. If an IP address is assigned to a VNIC it is ASSIGNED, otherwise it is AVAILABLE.  (ASSIGNED, AVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="isInternetAccessAllowed" /></td>
    <td><code>boolean</code></td>
    <td>Whether the IPv6 can be used for internet communication. Allowed by default for an IPv6 in a public subnet. Never allowed for an IPv6 in a private subnet. If the value is `true`, the IPv6 uses its public IP address for internet communication.  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The IPv6's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="lifetime" /></td>
    <td><code>string</code></td>
    <td>Lifetime of the IP address. There are two types of IPs:  - Ephemeral  - Reserved  (EPHEMERAL, RESERVED)</td>
</tr>
<tr>
    <td><CopyableCode code="publicIpAddress" /></td>
    <td><code>string</code></td>
    <td>The IPv6 address to be used for internet communication. The address is within the IPv6 prefix of the VNIC's subnet (see the `ipv6PublicCidrBlock` attribute for the &#91;Subnet&#93;(#/en/iaas/latest/Subnet/) object).  If your organization did NOT assign a custom IPv6 prefix to the VCN for the private address space, Oracle provides the IPv6 prefix and uses that same prefix for the private and public address space. Therefore the `publicIpAddress` would be the same as the `ipAddress`.  If your organization assigned a custom IPv6 prefix to the VCN for the address space, the right 80 bits of the IPv6 IP (the subnet and address bits) are the same as for the `ipAddress`. But the left 48 bits are from the IPv6 prefix that Oracle assigned to the VCN.  This is null if the IPv6 is created with `isInternetAccessAllowed` set to `false`.  Example: `2001:0db8:0123:1111:abcd:ef01:2345:6789` </td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table the IP address or VNIC will use. For more information, see &#91;Per-resource Routing&#93;(https:​//docs.oracle.com/iaas/Content/Network/Tasks/managingroutetables.htm#Overview_of_Routing_for_Your_VCN__source_routing). </td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the subnet the VNIC is in.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the IPv6 was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vnicId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VNIC the IPv6 is assigned to. The VNIC and IPv6 must be in the same subnet. </td>
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
    <td><a href="#parameter-ipv6Id"><code>ipv6Id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified IPv6. You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;Alternatively, you can get the object by using&lt;br /&gt;&#91;ListIpv6s&#93;(#/en/iaas/latest/Ipv6/ListIpv6s)&lt;br /&gt;with the IPv6 address (for example, 2001:0db8:0123:1111:98fe:dcba:9876:4321) and subnet &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-ipAddress"><code>ipAddress</code></a>, <a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-vnicId"><code>vnicId</code></a>, <a href="#parameter-ipState"><code>ipState</code></a>, <a href="#parameter-lifetime"><code>lifetime</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists the &#91;IPv6&#93;(#/en/iaas/latest/Ipv6/) objects based&lt;br /&gt;on one of these filters:&lt;br /&gt;&lt;br /&gt;  * Subnet &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;  * VNIC &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;  * Both IPv6 address and subnet OCID: This lets you get an `Ipv6` object based on its private&lt;br /&gt;  IPv6 address (for example, 2001:0db8:0123:1111:abcd:ef01:2345:6789) and not its &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). For comparison,&lt;br /&gt;  &#91;GetIpv6&#93;(#/en/iaas/latest/Ipv6/GetIpv6) requires the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates an IPv6 for the specified VNIC.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ipv6Id"><code>ipv6Id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified IPv6. You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;Use this operation if you want to:&lt;br /&gt;&lt;br /&gt;  * Move an IPv6 to a different VNIC in the same subnet.&lt;br /&gt;  * Enable/disable internet access for an IPv6.&lt;br /&gt;  * Change the display name for an IPv6.&lt;br /&gt;  * Update resource tags for an IPv6.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ipv6Id"><code>ipv6Id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Unassigns and deletes the specified IPv6. You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;The IPv6 address is returned to the subnet's pool of available addresses.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#bulk_create_ipv6s"><CopyableCode code="bulk_create_ipv6s" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bulkCreateIpv6sItem"><code>bulkCreateIpv6sItem</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Create new IPv6s in bulk for a VNIC or subnet.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#bulk_delete_ipv6s"><CopyableCode code="bulk_delete_ipv6s" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bulkDeleteIpv6sItem"><code>bulkDeleteIpv6sItem</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Unassign and delete IPv6s for a VNIC in bulk.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#bulk_detach_ipv6s"><CopyableCode code="bulk_detach_ipv6s" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bulkDetachIpv6sItem"><code>bulkDetachIpv6sItem</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Detach the specified IPv6s.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#bulk_update_ipv6s"><CopyableCode code="bulk_update_ipv6s" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bulkUpdateIpv6sItem"><code>bulkUpdateIpv6sItem</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified IPv6s in bulk.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#ipv6_vnic_detach"><CopyableCode code="ipv6_vnic_detach" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ipv6Id"><code>ipv6Id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Unassign the specified IPv6 address from Virtual Network Interface Card (VNIC). You must specify the IPv6 &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;</td>
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
<tr id="parameter-ipv6Id">
    <td><CopyableCode code="ipv6Id" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the IPv6.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
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

Gets the specified IPv6. You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;Alternatively, you can get the object by using&lt;br /&gt;&#91;ListIpv6s&#93;(#/en/iaas/latest/Ipv6/ListIpv6s)&lt;br /&gt;with the IPv6 address (for example, 2001:0db8:0123:1111:98fe:dcba:9876:4321) and subnet &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;

```sql
SELECT
id,
cidrPrefixLength,
compartmentId,
definedTags,
displayName,
freeformTags,
ipAddress,
ipState,
isInternetAccessAllowed,
lifecycleState,
lifetime,
publicIpAddress,
routeTableId,
subnetId,
timeCreated,
vnicId
FROM oci.network.ipv6s
WHERE ipv6Id = '{{ ipv6Id }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the &#91;IPv6&#93;(#/en/iaas/latest/Ipv6/) objects based&lt;br /&gt;on one of these filters:&lt;br /&gt;&lt;br /&gt;  * Subnet &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;  * VNIC &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;  * Both IPv6 address and subnet OCID: This lets you get an `Ipv6` object based on its private&lt;br /&gt;  IPv6 address (for example, 2001:0db8:0123:1111:abcd:ef01:2345:6789) and not its &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). For comparison,&lt;br /&gt;  &#91;GetIpv6&#93;(#/en/iaas/latest/Ipv6/GetIpv6) requires the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;

```sql
SELECT
id,
cidrPrefixLength,
compartmentId,
definedTags,
displayName,
freeformTags,
ipAddress,
ipState,
isInternetAccessAllowed,
lifecycleState,
lifetime,
publicIpAddress,
routeTableId,
subnetId,
timeCreated,
vnicId
FROM oci.network.ipv6s
WHERE region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND ipAddress = '{{ ipAddress }}'
AND subnetId = '{{ subnetId }}'
AND vnicId = '{{ vnicId }}'
AND ipState = '{{ ipState }}'
AND lifetime = '{{ lifetime }}'
AND opc-request-id = '{{ opc-request-id }}'
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

Creates an IPv6 for the specified VNIC.&lt;br /&gt;

```sql
INSERT INTO oci.network.ipv6s (
cidrPrefixLength,
definedTags,
displayName,
freeformTags,
ipAddress,
ipv6SubnetCidr,
isInternetAccessAllowed,
lifetime,
routeTableId,
subnetId,
vnicId,
region,
opc-request-id,
opc-retry-token
)
SELECT 
{{ cidrPrefixLength }},
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ ipAddress }}',
'{{ ipv6SubnetCidr }}',
{{ isInternetAccessAllowed }},
'{{ lifetime }}',
'{{ routeTableId }}',
'{{ subnetId }}',
'{{ vnicId }}',
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
cidrPrefixLength,
compartmentId,
definedTags,
displayName,
freeformTags,
ipAddress,
ipState,
isInternetAccessAllowed,
lifecycleState,
lifetime,
publicIpAddress,
routeTableId,
subnetId,
timeCreated,
vnicId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ipv6s
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ipv6s resource.
    - name: cidrPrefixLength
      value: {{ cidrPrefixLength }}
      description: |
        Length of cidr range. Optional field to specify flexible cidr.
      default: 128
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
    - name: ipAddress
      value: "{{ ipAddress }}"
      description: |
        An IPv6 address of your choice. Must be an available IP address within
        the subnet's CIDR. If you don't specify a value, Oracle automatically
        assigns an IPv6 address from the subnet. The subnet is the one that
        contains the VNIC you specify in \`vnicId\`.
        Example: \`2001:DB8::\`
    - name: ipv6SubnetCidr
      value: "{{ ipv6SubnetCidr }}"
      description: |
        The IPv6 prefix allocated to the subnet. This is required if more than one IPv6 prefix exists on the subnet.
    - name: isInternetAccessAllowed
      value: {{ isInternetAccessAllowed }}
      description: |
        Whether the IPv6 can be used for internet communication. Allowed by default for an IPv6 in
        a public subnet. Never allowed for an IPv6 in a private subnet. If the value is \`true\`, the
        IPv6 uses its public IP address for internet communication.
        If \`isInternetAccessAllowed\` is set to \`false\`, the resulting \`publicIpAddress\` attribute
        for the \`Ipv6\` is null.
        Example: \`true\`
      default: true
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
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the subnet from which the IPv6 is to be drawn. The IP address,
        *if supplied*, must be valid for the given subnet, only valid for reserved IPs currently.
    - name: vnicId
      value: "{{ vnicId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the VNIC to assign the IPv6 to. The
        IPv6 will be in the VNIC's subnet.
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
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

Updates the specified IPv6. You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;Use this operation if you want to:&lt;br /&gt;&lt;br /&gt;  * Move an IPv6 to a different VNIC in the same subnet.&lt;br /&gt;  * Enable/disable internet access for an IPv6.&lt;br /&gt;  * Change the display name for an IPv6.&lt;br /&gt;  * Update resource tags for an IPv6.&lt;br /&gt;

```sql
UPDATE oci.network.ipv6s
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
isInternetAccessAllowed = {{ isInternetAccessAllowed }},
lifetime = '{{ lifetime }}',
routeTableId = '{{ routeTableId }}',
vnicId = '{{ vnicId }}'
WHERE 
ipv6Id = '{{ ipv6Id }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
cidrPrefixLength,
compartmentId,
definedTags,
displayName,
freeformTags,
ipAddress,
ipState,
isInternetAccessAllowed,
lifecycleState,
lifetime,
publicIpAddress,
routeTableId,
subnetId,
timeCreated,
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

Unassigns and deletes the specified IPv6. You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;The IPv6 address is returned to the subnet's pool of available addresses.&lt;br /&gt;

```sql
DELETE FROM oci.network.ipv6s
WHERE ipv6Id = '{{ ipv6Id }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="bulk_create_ipv6s"
    values={[
        { label: 'bulk_create_ipv6s', value: 'bulk_create_ipv6s' },
        { label: 'bulk_delete_ipv6s', value: 'bulk_delete_ipv6s' },
        { label: 'bulk_detach_ipv6s', value: 'bulk_detach_ipv6s' },
        { label: 'bulk_update_ipv6s', value: 'bulk_update_ipv6s' },
        { label: 'ipv6_vnic_detach', value: 'ipv6_vnic_detach' }
    ]}
>
<TabItem value="bulk_create_ipv6s">

Create new IPv6s in bulk for a VNIC or subnet.&lt;br /&gt;

```sql
EXEC oci.network.ipv6s.bulk_create_ipv6s 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"bulkCreateIpv6sItem": "{{ bulkCreateIpv6sItem }}", 
"subnetId": "{{ subnetId }}", 
"vnicId": "{{ vnicId }}"
}'
;
```
</TabItem>
<TabItem value="bulk_delete_ipv6s">

Unassign and delete IPv6s for a VNIC in bulk.&lt;br /&gt;

```sql
EXEC oci.network.ipv6s.bulk_delete_ipv6s 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"bulkDeleteIpv6sItem": "{{ bulkDeleteIpv6sItem }}", 
"subnetId": "{{ subnetId }}", 
"vnicId": "{{ vnicId }}"
}'
;
```
</TabItem>
<TabItem value="bulk_detach_ipv6s">

Detach the specified IPv6s.&lt;br /&gt;

```sql
EXEC oci.network.ipv6s.bulk_detach_ipv6s 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"bulkDetachIpv6sItem": "{{ bulkDetachIpv6sItem }}", 
"vnicId": "{{ vnicId }}"
}'
;
```
</TabItem>
<TabItem value="bulk_update_ipv6s">

Updates the specified IPv6s in bulk.&lt;br /&gt;

```sql
EXEC oci.network.ipv6s.bulk_update_ipv6s 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"bulkUpdateIpv6sItem": "{{ bulkUpdateIpv6sItem }}", 
"vnicId": "{{ vnicId }}"
}'
;
```
</TabItem>
<TabItem value="ipv6_vnic_detach">

Unassign the specified IPv6 address from Virtual Network Interface Card (VNIC). You must specify the IPv6 &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;

```sql
EXEC oci.network.ipv6s.ipv6_vnic_detach 
@ipv6Id='{{ ipv6Id }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
</Tabs>
