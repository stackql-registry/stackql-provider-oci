--- 
title: network_security_group_security_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - network_security_group_security_rules
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

Creates, updates, deletes, gets or lists a <code>network_security_group_security_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_security_group_security_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.network_security_group_security_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

A security rule is one of the items in a &#91;NetworkSecurityGroup&#93;(#/en/iaas/latest/NetworkSecurityGroup/).&lt;br /&gt;It is a virtual firewall rule for the VNICs in the network security group. A rule can be for&lt;br /&gt;either inbound (`direction`= INGRESS) or outbound (`direction`= EGRESS) IP packets.&lt;br /&gt;

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
    <td>An Oracle-assigned identifier for the security rule. You specify this ID when you want to update or delete the rule.  Example: `04ABEC` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>An optional description of your choice for the rule. </td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Conceptually, this is the range of IP addresses that a packet originating from the instance can go to.  Allowed values:    * An IP address range in CIDR notation. For example: `192.168.1.0/24` or `2001:0db8:0123:45::/56`     IPv6 addressing is supported for all commercial and government regions.     See &#91;IPv6 Addresses&#93;(/iaas/Content/Network/Concepts/ipv6.htm).    * The `cidrBlock` value for a &#91;Service&#93;(#/en/iaas/latest/Service/), if you're     setting up a security rule for traffic destined for a particular `Service` through     a service gateway. For example: `oci-phx-objectstorage`.    * The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of a &#91;NetworkSecurityGroup&#93;(#/en/iaas/latest/NetworkSecurityGroup/) in the same     VCN. The value can be the NSG that the rule belongs to if the rule's intent is to control     traffic between VNICs in the same NSG. </td>
</tr>
<tr>
    <td><CopyableCode code="destinationType" /></td>
    <td><code>string</code></td>
    <td>Type of destination for the rule. Required if `direction` = `EGRESS`.  Allowed values:    * `CIDR_BLOCK`: If the rule's `destination` is an IP address range in CIDR notation.    * `SERVICE_CIDR_BLOCK`: If the rule's `destination` is the `cidrBlock` value for a     &#91;Service&#93;(#/en/iaas/latest/Service/) (the rule is for traffic destined for a     particular `Service` through a service gateway).    * `NETWORK_SECURITY_GROUP`: If the rule's `destination` is the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of a     &#91;NetworkSecurityGroup&#93;(#/en/iaas/latest/NetworkSecurityGroup/).  (CIDR_BLOCK, SERVICE_CIDR_BLOCK, NETWORK_SECURITY_GROUP)</td>
</tr>
<tr>
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>Direction of the security rule. Set to `EGRESS` for rules to allow outbound IP packets, or `INGRESS` for rules to allow inbound IP packets.  (EGRESS, INGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="icmpOptions" /></td>
    <td><code>object</code></td>
    <td>Optional and valid only for ICMP and ICMPv6. Use to specify a particular ICMP type and code as defined in: - &#91;ICMP Parameters&#93;(http:​//www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml) - &#91;ICMPv6 Parameters&#93;(https:​//www.iana.org/assignments/icmpv6-parameters/icmpv6-parameters.xhtml)  If you specify ICMP or ICMPv6 as the protocol but omit this object, then all ICMP types and codes are allowed. If you do provide this object, the type is required and the code is optional. To enable MTU negotiation for ingress internet traffic via IPv4, make sure to allow type 3 ("Destination Unreachable") code 4 ("Fragmentation Needed and Don't Fragment was Set"). If you need to specify multiple codes for a single type, create a separate security list rule for each. </td>
</tr>
<tr>
    <td><CopyableCode code="isStateless" /></td>
    <td><code>boolean</code></td>
    <td>A stateless rule allows traffic in one direction. Remember to add a corresponding stateless rule in the other direction if you need to support bidirectional traffic. For example, if egress traffic allows TCP destination port 80, there should be an ingress rule to allow TCP source port 80. Defaults to false, which means the rule is stateful and a corresponding rule is not necessary for bidirectional traffic. </td>
</tr>
<tr>
    <td><CopyableCode code="isValid" /></td>
    <td><code>boolean</code></td>
    <td>Whether the rule is valid. The value is `True` when the rule is first created. If the rule's `source` or `destination` is a network security group, the value changes to `False` if that network security group is deleted. </td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The transport protocol. Specify either `all` or an IPv4 protocol number as defined in &#91;Protocol Numbers&#93;(http:​//www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml). Options are supported only for ICMP ("1"), TCP ("6"), UDP ("17"), and ICMPv6 ("58"). </td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Conceptually, this is the range of IP addresses that a packet coming into the instance can come from.  Allowed values:    * An IP address range in CIDR notation. For example: `192.168.1.0/24` or `2001:0db8:0123:45::/56`     IPv6 addressing is supported for all commercial and government regions.     See &#91;IPv6 Addresses&#93;(/iaas/Content/Network/Concepts/ipv6.htm).    * The `cidrBlock` value for a &#91;Service&#93;(#/en/iaas/latest/Service/), if you're     setting up a security rule for traffic coming from a particular `Service` through     a service gateway. For example: `oci-phx-objectstorage`.    * The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of a &#91;NetworkSecurityGroup&#93;(#/en/iaas/latest/NetworkSecurityGroup/) in the same     VCN. The value can be the NSG that the rule belongs to if the rule's intent is to control     traffic between VNICs in the same NSG. </td>
</tr>
<tr>
    <td><CopyableCode code="sourceType" /></td>
    <td><code>string</code></td>
    <td>Type of source for the rule. Required if `direction` = `INGRESS`.    * `CIDR_BLOCK`: If the rule's `source` is an IP address range in CIDR notation.    * `SERVICE_CIDR_BLOCK`: If the rule's `source` is the `cidrBlock` value for a     &#91;Service&#93;(#/en/iaas/latest/Service/) (the rule is for traffic coming from a     particular `Service` through a service gateway).    * `NETWORK_SECURITY_GROUP`: If the rule's `source` is the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of a     &#91;NetworkSecurityGroup&#93;(#/en/iaas/latest/NetworkSecurityGroup/).  (CIDR_BLOCK, SERVICE_CIDR_BLOCK, NETWORK_SECURITY_GROUP)</td>
</tr>
<tr>
    <td><CopyableCode code="tcpOptions" /></td>
    <td><code>object</code></td>
    <td>Optional and valid only for TCP. Use to specify particular destination ports for TCP rules. If you specify TCP as the protocol but omit this object, then all destination ports are allowed. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the security rule was created. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).</td>
</tr>
<tr>
    <td><CopyableCode code="udpOptions" /></td>
    <td><code>object</code></td>
    <td>Optional and valid only for UDP. Use to specify particular destination ports for UDP rules. If you specify UDP as the protocol but omit this object, then all destination ports are allowed. </td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-networkSecurityGroupId"><code>networkSecurityGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Lists the security rules in the specified network security group.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-networkSecurityGroupId"><code>networkSecurityGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates one or more security rules in the specified network security group.&lt;br /&gt;</td>
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
<tr id="parameter-networkSecurityGroupId">
    <td><CopyableCode code="networkSecurityGroupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the network security group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>Direction of the security rule. Set to `EGRESS` for rules that allow outbound IP packets, or `INGRESS` for rules that allow inbound IP packets. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by.</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists the security rules in the specified network security group.&lt;br /&gt;

```sql
SELECT
id,
description,
destination,
destinationType,
direction,
icmpOptions,
isStateless,
isValid,
protocol,
source,
sourceType,
tcpOptions,
timeCreated,
udpOptions
FROM oci.network.network_security_group_security_rules
WHERE networkSecurityGroupId = '{{ networkSecurityGroupId }}' -- required
AND region = '{{ region }}' -- required
AND direction = '{{ direction }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
;
```
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

Updates one or more security rules in the specified network security group.&lt;br /&gt;

```sql
UPDATE oci.network.network_security_group_security_rules
SET 
securityRules = '{{ securityRules }}'
WHERE 
networkSecurityGroupId = '{{ networkSecurityGroupId }}' --required
AND region = '{{ region }}' --required
RETURNING
securityRules;
```
</TabItem>
</Tabs>
