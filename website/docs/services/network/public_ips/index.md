--- 
title: public_ips
hide_title: false
hide_table_of_contents: false
keywords:
  - public_ips
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

Creates, updates, deletes, gets or lists a <code>public_ips</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="public_ips" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.public_ips" /></td></tr>
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

The public IP was retrieved.

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
    <td>The public IP's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="assignedEntityId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the entity the public IP is assigned to, or in the process of being assigned to. </td>
</tr>
<tr>
    <td><CopyableCode code="assignedEntityType" /></td>
    <td><code>string</code></td>
    <td>The type of entity the public IP is assigned to, or in the process of being assigned to.  (PRIVATE_IP, NAT_GATEWAY)</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The public IP's availability domain. This property is set only for ephemeral public IPs that are assigned to a private IP (that is, when the `scope` of the public IP is set to AVAILABILITY_DOMAIN). The value is the availability domain of the assigned private IP.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the public IP. For an ephemeral public IP, this is the compartment of its assigned entity (which can be a private IP or a regional entity such as a NAT gateway). For a reserved public IP that is currently assigned, its compartment can be different from the assigned private IP's. </td>
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
    <td>The public IP address of the `publicIp` object.  Example: `203.0.113.2` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The public IP's current state. (PROVISIONING, AVAILABLE, ASSIGNING, ASSIGNED, UNASSIGNING, UNASSIGNED, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="lifetime" /></td>
    <td><code>string</code></td>
    <td>Defines when the public IP is deleted and released back to Oracle's public IP pool.  * `EPHEMERAL`: The lifetime is tied to the lifetime of its assigned entity. An ephemeral public IP must always be assigned to an entity. If the assigned entity is a private IP, the ephemeral public IP is automatically deleted when the private IP is deleted, when the VNIC is terminated, or when the instance is terminated. If the assigned entity is a &#91;NatGateway&#93;(#/en/iaas/latest/NatGateway/), the ephemeral public IP is automatically deleted when the NAT gateway is terminated.  * `RESERVED`: You control the public IP's lifetime. You can delete a reserved public IP whenever you like. It does not need to be assigned to a private IP at all times.  For more information and comparison of the two types, see &#91;Public IP Addresses&#93;(/iaas/Content/Network/Tasks/managingpublicIPs.htm).  (EPHEMERAL, RESERVED)</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpId" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Use `assignedEntityId` instead.  The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the private IP that the public IP is currently assigned to, or in the process of being assigned to.  **Note:** This is `null` if the public IP is not assigned to a private IP, or is in the process of being assigned to one. </td>
</tr>
<tr>
    <td><CopyableCode code="publicIpPoolId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the pool object created in the current tenancy.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Whether the public IP is regional or specific to a particular availability domain.  * `REGION`: The public IP exists within a region and is assigned to a regional entity (such as a &#91;NatGateway&#93;(#/en/iaas/latest/NatGateway/)), or can be assigned to a private IP in any availability domain in the region. Reserved public IPs and ephemeral public IPs assigned to a regional entity have `scope` = `REGION`.  * `AVAILABILITY_DOMAIN`: The public IP exists within the availability domain of the entity it's assigned to, which is specified by the `availabilityDomain` property of the public IP object. Ephemeral public IPs that are assigned to private IPs have `scope` = `AVAILABILITY_DOMAIN`.  (REGION, AVAILABILITY_DOMAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the public IP was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A *public IP* is a conceptual term that refers to a public IP address and related properties.&lt;br /&gt;The `publicIp` object is the API representation of a public IP.&lt;br /&gt;&lt;br /&gt;There are two types of public IPs:&lt;br /&gt;1. Ephemeral&lt;br /&gt;2. Reserved&lt;br /&gt;&lt;br /&gt;For more information and comparison of the two types,&lt;br /&gt;see &#91;Public IP Addresses&#93;(/iaas/Content/Network/Tasks/managingpublicIPs.htm).&lt;br /&gt;

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
    <td>The public IP's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="assignedEntityId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the entity the public IP is assigned to, or in the process of being assigned to. </td>
</tr>
<tr>
    <td><CopyableCode code="assignedEntityType" /></td>
    <td><code>string</code></td>
    <td>The type of entity the public IP is assigned to, or in the process of being assigned to.  (PRIVATE_IP, NAT_GATEWAY)</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The public IP's availability domain. This property is set only for ephemeral public IPs that are assigned to a private IP (that is, when the `scope` of the public IP is set to AVAILABILITY_DOMAIN). The value is the availability domain of the assigned private IP.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the public IP. For an ephemeral public IP, this is the compartment of its assigned entity (which can be a private IP or a regional entity such as a NAT gateway). For a reserved public IP that is currently assigned, its compartment can be different from the assigned private IP's. </td>
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
    <td>The public IP address of the `publicIp` object.  Example: `203.0.113.2` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The public IP's current state. (PROVISIONING, AVAILABLE, ASSIGNING, ASSIGNED, UNASSIGNING, UNASSIGNED, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="lifetime" /></td>
    <td><code>string</code></td>
    <td>Defines when the public IP is deleted and released back to Oracle's public IP pool.  * `EPHEMERAL`: The lifetime is tied to the lifetime of its assigned entity. An ephemeral public IP must always be assigned to an entity. If the assigned entity is a private IP, the ephemeral public IP is automatically deleted when the private IP is deleted, when the VNIC is terminated, or when the instance is terminated. If the assigned entity is a &#91;NatGateway&#93;(#/en/iaas/latest/NatGateway/), the ephemeral public IP is automatically deleted when the NAT gateway is terminated.  * `RESERVED`: You control the public IP's lifetime. You can delete a reserved public IP whenever you like. It does not need to be assigned to a private IP at all times.  For more information and comparison of the two types, see &#91;Public IP Addresses&#93;(/iaas/Content/Network/Tasks/managingpublicIPs.htm).  (EPHEMERAL, RESERVED)</td>
</tr>
<tr>
    <td><CopyableCode code="privateIpId" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Use `assignedEntityId` instead.  The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the private IP that the public IP is currently assigned to, or in the process of being assigned to.  **Note:** This is `null` if the public IP is not assigned to a private IP, or is in the process of being assigned to one. </td>
</tr>
<tr>
    <td><CopyableCode code="publicIpPoolId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the pool object created in the current tenancy.</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Whether the public IP is regional or specific to a particular availability domain.  * `REGION`: The public IP exists within a region and is assigned to a regional entity (such as a &#91;NatGateway&#93;(#/en/iaas/latest/NatGateway/)), or can be assigned to a private IP in any availability domain in the region. Reserved public IPs and ephemeral public IPs assigned to a regional entity have `scope` = `REGION`.  * `AVAILABILITY_DOMAIN`: The public IP exists within the availability domain of the entity it's assigned to, which is specified by the `availabilityDomain` property of the public IP object. Ephemeral public IPs that are assigned to private IPs have `scope` = `AVAILABILITY_DOMAIN`.  (REGION, AVAILABILITY_DOMAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the public IP was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-publicIpId"><code>publicIpId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified public IP. You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;Alternatively, you can get the object by using &#91;GetPublicIpByIpAddress&#93;(#/en/iaas/latest/PublicIp/GetPublicIpByIpAddress)&lt;br /&gt;with the public IP address (for example, 203.0.113.2).&lt;br /&gt;&lt;br /&gt;Or you can use &#91;GetPublicIpByPrivateIpId&#93;(#/en/iaas/latest/PublicIp/GetPublicIpByPrivateIpId)&lt;br /&gt;with the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the private IP that the public IP is assigned to.&lt;br /&gt;&lt;br /&gt;**Note:** If you're fetching a reserved public IP that is in the process of being&lt;br /&gt;moved to a different private IP, the service returns the public IP object with&lt;br /&gt;`lifecycleState` = ASSIGNING and `assignedEntityId` = &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the target private IP.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-lifetime"><code>lifetime</code></a>, <a href="#parameter-publicIpPoolId"><code>publicIpPoolId</code></a></td>
    <td>Lists the &#91;PublicIp&#93;(#/en/iaas/latest/PublicIp/) objects&lt;br /&gt;in the specified compartment. You can filter the list by using query parameters.&lt;br /&gt;&lt;br /&gt;To list your reserved public IPs:&lt;br /&gt;  * Set `scope` = `REGION`  (required)&lt;br /&gt;  * Leave the `availabilityDomain` parameter empty&lt;br /&gt;  * Set `lifetime` = `RESERVED`&lt;br /&gt;&lt;br /&gt;To list the ephemeral public IPs assigned to a regional entity such as a NAT gateway:&lt;br /&gt;  * Set `scope` = `REGION`  (required)&lt;br /&gt;  * Leave the `availabilityDomain` parameter empty&lt;br /&gt;  * Set `lifetime` = `EPHEMERAL`&lt;br /&gt;&lt;br /&gt;To list the ephemeral public IPs assigned to private IPs:&lt;br /&gt;  * Set `scope` = `AVAILABILITY_DOMAIN` (required)&lt;br /&gt;  * Set the `availabilityDomain` parameter to the desired availability domain (required)&lt;br /&gt;  * Set `lifetime` = `EPHEMERAL`&lt;br /&gt;&lt;br /&gt;**Note:** An ephemeral public IP assigned to a private IP&lt;br /&gt;is always in the same availability domain and compartment as the private IP.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-lifetime"><code>lifetime</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a public IP. Use the `lifetime` property to specify whether it's an ephemeral or&lt;br /&gt;reserved public IP. For information about limits on how many you can create, see&lt;br /&gt;&#91;Public IP Addresses&#93;(/iaas/Content/Network/Tasks/managingpublicIPs.htm).&lt;br /&gt;&lt;br /&gt;* **For an ephemeral public IP assigned to a private IP:** You must also specify a `privateIpId`&lt;br /&gt;with the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the primary private IP you want to assign the public IP to. The public IP is&lt;br /&gt;created in the same availability domain as the private IP. An ephemeral public IP must always be&lt;br /&gt;assigned to a private IP, and only to the *primary* private IP on a VNIC, not a secondary&lt;br /&gt;private IP. Exception: If you create a &#91;NatGateway&#93;(#/en/iaas/latest/NatGateway/), Oracle&lt;br /&gt;automatically assigns the NAT gateway a regional ephemeral public IP that you cannot remove.&lt;br /&gt;&lt;br /&gt;* **For a reserved public IP:** You may also optionally assign the public IP to a private&lt;br /&gt;IP by specifying `privateIpId`. Or you can later assign the public IP with&lt;br /&gt;&#91;UpdatePublicIp&#93;(#/en/iaas/latest/PublicIp/UpdatePublicIp).&lt;br /&gt;&lt;br /&gt;**Note:** When assigning a public IP to a private IP, the private IP must not already have&lt;br /&gt;a public IP with `lifecycleState` = ASSIGNING or ASSIGNED. If it does, an error is returned.&lt;br /&gt;&lt;br /&gt;Also, for reserved public IPs, the optional assignment part of this operation is&lt;br /&gt;asynchronous. Poll the public IP's `lifecycleState` to determine if the assignment&lt;br /&gt;succeeded.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-publicIpId"><code>publicIpId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified public IP. You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). Use this operation if you want to:&lt;br /&gt;&lt;br /&gt;* Assign a reserved public IP in your pool to a private IP.&lt;br /&gt;* Move a reserved public IP to a different private IP.&lt;br /&gt;* Unassign a reserved public IP from a private IP (which returns it to your pool&lt;br /&gt;of reserved public IPs).&lt;br /&gt;* Change the display name or tags for a public IP.&lt;br /&gt;&lt;br /&gt;Assigning, moving, and unassigning a reserved public IP are asynchronous&lt;br /&gt;operations. Poll the public IP's `lifecycleState` to determine if the operation&lt;br /&gt;succeeded.&lt;br /&gt;&lt;br /&gt;**Note:** When moving a reserved public IP, the target private IP&lt;br /&gt;must not already have a public IP with `lifecycleState` = ASSIGNING or ASSIGNED. If it&lt;br /&gt;does, an error is returned. Also, the initial unassignment from the original&lt;br /&gt;private IP always succeeds, but the assignment to the target private IP is asynchronous and&lt;br /&gt;could fail silently (for example, if the target private IP is deleted or has a different public IP&lt;br /&gt;assigned to it in the interim). If that occurs, the public IP remains unassigned and its&lt;br /&gt;`lifecycleState` switches to AVAILABLE (it is not reassigned to its original private IP).&lt;br /&gt;You must poll the public IP's `lifecycleState` to determine if the move succeeded.&lt;br /&gt;&lt;br /&gt;Regarding ephemeral public IPs:&lt;br /&gt;&lt;br /&gt;* If you want to assign an ephemeral public IP to a primary private IP, use&lt;br /&gt;&#91;CreatePublicIp&#93;(#/en/iaas/latest/PublicIp/CreatePublicIp).&lt;br /&gt;* You can't move an ephemeral public IP to a different private IP.&lt;br /&gt;* If you want to unassign an ephemeral public IP from its private IP, use&lt;br /&gt;&#91;DeletePublicIp&#93;(#/en/iaas/latest/PublicIp/DeletePublicIp), which&lt;br /&gt;unassigns and deletes the ephemeral public IP.&lt;br /&gt;&lt;br /&gt;**Note:** If a public IP is assigned to a secondary private&lt;br /&gt;IP (see &#91;PrivateIp&#93;(#/en/iaas/latest/PrivateIp)), and you move that secondary&lt;br /&gt;private IP to another VNIC, the public IP moves with it.&lt;br /&gt;&lt;br /&gt;**Note:** There's a limit to the number of &#91;public IPs&#93;(#/en/iaas/latest/PublicIp/)&lt;br /&gt;a VNIC or instance can have. If you try to move a reserved public IP&lt;br /&gt;to a VNIC or instance that has already reached its public IP limit, an error is&lt;br /&gt;returned. For information about the public IP limits, see&lt;br /&gt;&#91;Public IP Addresses&#93;(/iaas/Content/Network/Tasks/managingpublicIPs.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-publicIpId"><code>publicIpId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Unassigns and deletes the specified public IP (either ephemeral or reserved).&lt;br /&gt;You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). The public IP address is returned to the&lt;br /&gt;Oracle Cloud Infrastructure public IP pool.&lt;br /&gt;&lt;br /&gt;**Note:** You cannot update, unassign, or delete the public IP that Oracle automatically&lt;br /&gt;assigned to an entity for you (such as a load balancer or NAT gateway). The public IP is&lt;br /&gt;automatically deleted if the assigned entity is terminated.&lt;br /&gt;&lt;br /&gt;For an assigned reserved public IP, the initial unassignment portion of this operation&lt;br /&gt;is asynchronous. Poll the public IP's `lifecycleState` to determine&lt;br /&gt;if the operation succeeded.&lt;br /&gt;&lt;br /&gt;If you want to simply unassign a reserved public IP and return it to your pool&lt;br /&gt;of reserved public IPs, instead use&lt;br /&gt;&#91;UpdatePublicIp&#93;(#/en/iaas/latest/PublicIp/UpdatePublicIp).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#get_public_ip_by_ip_address"><CopyableCode code="get_public_ip_by_ip_address" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ipAddress"><code>ipAddress</code></a></td>
    <td></td>
    <td>Gets the public IP based on the public IP address (for example, 203.0.113.2).&lt;br /&gt;&lt;br /&gt;**Note:** If you're fetching a reserved public IP that is in the process of being&lt;br /&gt;moved to a different private IP, the service returns the public IP object with&lt;br /&gt;`lifecycleState` = ASSIGNING and `assignedEntityId` = &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the target private IP.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#get_public_ip_by_private_ip_id"><CopyableCode code="get_public_ip_by_private_ip_id" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-privateIpId"><code>privateIpId</code></a></td>
    <td></td>
    <td>Gets the public IP assigned to the specified private IP. You must specify the OCID&lt;br /&gt;of the private IP. If no public IP is assigned, a 404 is returned.&lt;br /&gt;&lt;br /&gt;**Note:** If you're fetching a reserved public IP that is in the process of being&lt;br /&gt;moved to a different private IP, and you provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the original private&lt;br /&gt;IP, this operation returns a 404. If you instead provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the target&lt;br /&gt;private IP, or if you instead call&lt;br /&gt;&#91;GetPublicIp&#93;(#/en/iaas/latest/PublicIp/GetPublicIp) or&lt;br /&gt;&#91;GetPublicIpByIpAddress&#93;(#/en/iaas/latest/PublicIp/GetPublicIpByIpAddress), the&lt;br /&gt;service returns the public IP object with `lifecycleState` = ASSIGNING and&lt;br /&gt;`assignedEntityId` = &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the target private IP.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-publicIpId"><code>publicIpId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a public IP into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;This operation applies only to reserved public IPs. Ephemeral public IPs always belong to the&lt;br /&gt;same compartment as their VNIC and move accordingly.&lt;br /&gt;</td>
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
<tr id="parameter-publicIpId">
    <td><CopyableCode code="publicIpId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the public IP.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Whether the public IP is regional or specific to a particular availability domain.  * `REGION`: The public IP exists within a region and is assigned to a regional entity (such as a &#91;NatGateway&#93;(#/en/iaas/latest/NatGateway/)), or can be assigned to a private IP in any availability domain in the region. Reserved public IPs have `scope` = `REGION`, as do ephemeral public IPs assigned to a regional entity.  * `AVAILABILITY_DOMAIN`: The public IP exists within the availability domain of the entity it's assigned to, which is specified by the `availabilityDomain` property of the public IP object. Ephemeral public IPs that are assigned to private IPs have `scope` = `AVAILABILITY_DOMAIN`. </td>
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
<tr id="parameter-lifetime">
    <td><CopyableCode code="lifetime" /></td>
    <td><code>string</code></td>
    <td>A filter to return only public IPs that match given lifetime. </td>
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
<tr id="parameter-publicIpPoolId">
    <td><CopyableCode code="publicIpPoolId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that belong to the given public IP pool. </td>
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

Gets the specified public IP. You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;Alternatively, you can get the object by using &#91;GetPublicIpByIpAddress&#93;(#/en/iaas/latest/PublicIp/GetPublicIpByIpAddress)&lt;br /&gt;with the public IP address (for example, 203.0.113.2).&lt;br /&gt;&lt;br /&gt;Or you can use &#91;GetPublicIpByPrivateIpId&#93;(#/en/iaas/latest/PublicIp/GetPublicIpByPrivateIpId)&lt;br /&gt;with the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the private IP that the public IP is assigned to.&lt;br /&gt;&lt;br /&gt;**Note:** If you're fetching a reserved public IP that is in the process of being&lt;br /&gt;moved to a different private IP, the service returns the public IP object with&lt;br /&gt;`lifecycleState` = ASSIGNING and `assignedEntityId` = &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the target private IP.&lt;br /&gt;

```sql
SELECT
id,
assignedEntityId,
assignedEntityType,
availabilityDomain,
compartmentId,
definedTags,
displayName,
freeformTags,
ipAddress,
lifecycleState,
lifetime,
privateIpId,
publicIpPoolId,
scope,
timeCreated
FROM oci.network.public_ips
WHERE publicIpId = '{{ publicIpId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the &#91;PublicIp&#93;(#/en/iaas/latest/PublicIp/) objects&lt;br /&gt;in the specified compartment. You can filter the list by using query parameters.&lt;br /&gt;&lt;br /&gt;To list your reserved public IPs:&lt;br /&gt;  * Set `scope` = `REGION`  (required)&lt;br /&gt;  * Leave the `availabilityDomain` parameter empty&lt;br /&gt;  * Set `lifetime` = `RESERVED`&lt;br /&gt;&lt;br /&gt;To list the ephemeral public IPs assigned to a regional entity such as a NAT gateway:&lt;br /&gt;  * Set `scope` = `REGION`  (required)&lt;br /&gt;  * Leave the `availabilityDomain` parameter empty&lt;br /&gt;  * Set `lifetime` = `EPHEMERAL`&lt;br /&gt;&lt;br /&gt;To list the ephemeral public IPs assigned to private IPs:&lt;br /&gt;  * Set `scope` = `AVAILABILITY_DOMAIN` (required)&lt;br /&gt;  * Set the `availabilityDomain` parameter to the desired availability domain (required)&lt;br /&gt;  * Set `lifetime` = `EPHEMERAL`&lt;br /&gt;&lt;br /&gt;**Note:** An ephemeral public IP assigned to a private IP&lt;br /&gt;is always in the same availability domain and compartment as the private IP.&lt;br /&gt;

```sql
SELECT
id,
assignedEntityId,
assignedEntityType,
availabilityDomain,
compartmentId,
definedTags,
displayName,
freeformTags,
ipAddress,
lifecycleState,
lifetime,
privateIpId,
publicIpPoolId,
scope,
timeCreated
FROM oci.network.public_ips
WHERE scope = '{{ scope }}' -- required
AND compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND availabilityDomain = '{{ availabilityDomain }}'
AND lifetime = '{{ lifetime }}'
AND publicIpPoolId = '{{ publicIpPoolId }}'
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

Creates a public IP. Use the `lifetime` property to specify whether it's an ephemeral or&lt;br /&gt;reserved public IP. For information about limits on how many you can create, see&lt;br /&gt;&#91;Public IP Addresses&#93;(/iaas/Content/Network/Tasks/managingpublicIPs.htm).&lt;br /&gt;&lt;br /&gt;* **For an ephemeral public IP assigned to a private IP:** You must also specify a `privateIpId`&lt;br /&gt;with the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the primary private IP you want to assign the public IP to. The public IP is&lt;br /&gt;created in the same availability domain as the private IP. An ephemeral public IP must always be&lt;br /&gt;assigned to a private IP, and only to the *primary* private IP on a VNIC, not a secondary&lt;br /&gt;private IP. Exception: If you create a &#91;NatGateway&#93;(#/en/iaas/latest/NatGateway/), Oracle&lt;br /&gt;automatically assigns the NAT gateway a regional ephemeral public IP that you cannot remove.&lt;br /&gt;&lt;br /&gt;* **For a reserved public IP:** You may also optionally assign the public IP to a private&lt;br /&gt;IP by specifying `privateIpId`. Or you can later assign the public IP with&lt;br /&gt;&#91;UpdatePublicIp&#93;(#/en/iaas/latest/PublicIp/UpdatePublicIp).&lt;br /&gt;&lt;br /&gt;**Note:** When assigning a public IP to a private IP, the private IP must not already have&lt;br /&gt;a public IP with `lifecycleState` = ASSIGNING or ASSIGNED. If it does, an error is returned.&lt;br /&gt;&lt;br /&gt;Also, for reserved public IPs, the optional assignment part of this operation is&lt;br /&gt;asynchronous. Poll the public IP's `lifecycleState` to determine if the assignment&lt;br /&gt;succeeded.&lt;br /&gt;

```sql
INSERT INTO oci.network.public_ips (
compartmentId,
definedTags,
displayName,
freeformTags,
lifetime,
privateIpId,
publicIpPoolId,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ lifetime }}' /* required */,
'{{ privateIpId }}',
'{{ publicIpPoolId }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
assignedEntityId,
assignedEntityType,
availabilityDomain,
compartmentId,
definedTags,
displayName,
freeformTags,
ipAddress,
lifecycleState,
lifetime,
privateIpId,
publicIpPoolId,
scope,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: public_ips
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the public_ips resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the public IP. For ephemeral public IPs,
        you must set this to the private IP's compartment [OCID](/iaas/Content/General/Concepts/identifiers.htm).
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
    - name: lifetime
      value: "{{ lifetime }}"
      description: |
        Defines when the public IP is deleted and released back to the Oracle Cloud
        Infrastructure public IP pool. For more information, see
        [Public IP Addresses](/iaas/Content/Network/Tasks/managingpublicIPs.htm).
      valid_values: ['EPHEMERAL', 'RESERVED']
    - name: privateIpId
      value: "{{ privateIpId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the private IP to assign the public IP to.
        Required for an ephemeral public IP because it must always be assigned to a private IP
        (specifically a *primary* private IP).
        Optional for a reserved public IP. If you don't provide it, the public IP is created but not
        assigned to a private IP. You can later assign the public IP with
        [UpdatePublicIp](#/en/iaas/latest/PublicIp/UpdatePublicIp).
    - name: publicIpPoolId
      value: "{{ publicIpPoolId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the public IP pool.
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

Updates the specified public IP. You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). Use this operation if you want to:&lt;br /&gt;&lt;br /&gt;* Assign a reserved public IP in your pool to a private IP.&lt;br /&gt;* Move a reserved public IP to a different private IP.&lt;br /&gt;* Unassign a reserved public IP from a private IP (which returns it to your pool&lt;br /&gt;of reserved public IPs).&lt;br /&gt;* Change the display name or tags for a public IP.&lt;br /&gt;&lt;br /&gt;Assigning, moving, and unassigning a reserved public IP are asynchronous&lt;br /&gt;operations. Poll the public IP's `lifecycleState` to determine if the operation&lt;br /&gt;succeeded.&lt;br /&gt;&lt;br /&gt;**Note:** When moving a reserved public IP, the target private IP&lt;br /&gt;must not already have a public IP with `lifecycleState` = ASSIGNING or ASSIGNED. If it&lt;br /&gt;does, an error is returned. Also, the initial unassignment from the original&lt;br /&gt;private IP always succeeds, but the assignment to the target private IP is asynchronous and&lt;br /&gt;could fail silently (for example, if the target private IP is deleted or has a different public IP&lt;br /&gt;assigned to it in the interim). If that occurs, the public IP remains unassigned and its&lt;br /&gt;`lifecycleState` switches to AVAILABLE (it is not reassigned to its original private IP).&lt;br /&gt;You must poll the public IP's `lifecycleState` to determine if the move succeeded.&lt;br /&gt;&lt;br /&gt;Regarding ephemeral public IPs:&lt;br /&gt;&lt;br /&gt;* If you want to assign an ephemeral public IP to a primary private IP, use&lt;br /&gt;&#91;CreatePublicIp&#93;(#/en/iaas/latest/PublicIp/CreatePublicIp).&lt;br /&gt;* You can't move an ephemeral public IP to a different private IP.&lt;br /&gt;* If you want to unassign an ephemeral public IP from its private IP, use&lt;br /&gt;&#91;DeletePublicIp&#93;(#/en/iaas/latest/PublicIp/DeletePublicIp), which&lt;br /&gt;unassigns and deletes the ephemeral public IP.&lt;br /&gt;&lt;br /&gt;**Note:** If a public IP is assigned to a secondary private&lt;br /&gt;IP (see &#91;PrivateIp&#93;(#/en/iaas/latest/PrivateIp)), and you move that secondary&lt;br /&gt;private IP to another VNIC, the public IP moves with it.&lt;br /&gt;&lt;br /&gt;**Note:** There's a limit to the number of &#91;public IPs&#93;(#/en/iaas/latest/PublicIp/)&lt;br /&gt;a VNIC or instance can have. If you try to move a reserved public IP&lt;br /&gt;to a VNIC or instance that has already reached its public IP limit, an error is&lt;br /&gt;returned. For information about the public IP limits, see&lt;br /&gt;&#91;Public IP Addresses&#93;(/iaas/Content/Network/Tasks/managingpublicIPs.htm).&lt;br /&gt;

```sql
UPDATE oci.network.public_ips
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
privateIpId = '{{ privateIpId }}'
WHERE 
publicIpId = '{{ publicIpId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
assignedEntityId,
assignedEntityType,
availabilityDomain,
compartmentId,
definedTags,
displayName,
freeformTags,
ipAddress,
lifecycleState,
lifetime,
privateIpId,
publicIpPoolId,
scope,
timeCreated;
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

Unassigns and deletes the specified public IP (either ephemeral or reserved).&lt;br /&gt;You must specify the object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). The public IP address is returned to the&lt;br /&gt;Oracle Cloud Infrastructure public IP pool.&lt;br /&gt;&lt;br /&gt;**Note:** You cannot update, unassign, or delete the public IP that Oracle automatically&lt;br /&gt;assigned to an entity for you (such as a load balancer or NAT gateway). The public IP is&lt;br /&gt;automatically deleted if the assigned entity is terminated.&lt;br /&gt;&lt;br /&gt;For an assigned reserved public IP, the initial unassignment portion of this operation&lt;br /&gt;is asynchronous. Poll the public IP's `lifecycleState` to determine&lt;br /&gt;if the operation succeeded.&lt;br /&gt;&lt;br /&gt;If you want to simply unassign a reserved public IP and return it to your pool&lt;br /&gt;of reserved public IPs, instead use&lt;br /&gt;&#91;UpdatePublicIp&#93;(#/en/iaas/latest/PublicIp/UpdatePublicIp).&lt;br /&gt;

```sql
DELETE FROM oci.network.public_ips
WHERE publicIpId = '{{ publicIpId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_public_ip_by_ip_address"
    values={[
        { label: 'get_public_ip_by_ip_address', value: 'get_public_ip_by_ip_address' },
        { label: 'get_public_ip_by_private_ip_id', value: 'get_public_ip_by_private_ip_id' },
        { label: 'change_compartment', value: 'change_compartment' }
    ]}
>
<TabItem value="get_public_ip_by_ip_address">

Gets the public IP based on the public IP address (for example, 203.0.113.2).&lt;br /&gt;&lt;br /&gt;**Note:** If you're fetching a reserved public IP that is in the process of being&lt;br /&gt;moved to a different private IP, the service returns the public IP object with&lt;br /&gt;`lifecycleState` = ASSIGNING and `assignedEntityId` = &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the target private IP.&lt;br /&gt;

```sql
EXEC oci.network.public_ips.get_public_ip_by_ip_address 
@region='{{ region }}' --required 
@@json=
'{
"ipAddress": "{{ ipAddress }}"
}'
;
```
</TabItem>
<TabItem value="get_public_ip_by_private_ip_id">

Gets the public IP assigned to the specified private IP. You must specify the OCID&lt;br /&gt;of the private IP. If no public IP is assigned, a 404 is returned.&lt;br /&gt;&lt;br /&gt;**Note:** If you're fetching a reserved public IP that is in the process of being&lt;br /&gt;moved to a different private IP, and you provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the original private&lt;br /&gt;IP, this operation returns a 404. If you instead provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the target&lt;br /&gt;private IP, or if you instead call&lt;br /&gt;&#91;GetPublicIp&#93;(#/en/iaas/latest/PublicIp/GetPublicIp) or&lt;br /&gt;&#91;GetPublicIpByIpAddress&#93;(#/en/iaas/latest/PublicIp/GetPublicIpByIpAddress), the&lt;br /&gt;service returns the public IP object with `lifecycleState` = ASSIGNING and&lt;br /&gt;`assignedEntityId` = &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the target private IP.&lt;br /&gt;

```sql
EXEC oci.network.public_ips.get_public_ip_by_private_ip_id 
@region='{{ region }}' --required 
@@json=
'{
"privateIpId": "{{ privateIpId }}"
}'
;
```
</TabItem>
<TabItem value="change_compartment">

Moves a public IP into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;This operation applies only to reserved public IPs. Ephemeral public IPs always belong to the&lt;br /&gt;same compartment as their VNIC and move accordingly.&lt;br /&gt;

```sql
EXEC oci.network.public_ips.change_compartment 
@publicIpId='{{ publicIpId }}' --required, 
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
</Tabs>
