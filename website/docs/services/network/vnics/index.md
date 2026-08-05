--- 
title: vnics
hide_title: false
hide_table_of_contents: false
keywords:
  - vnics
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

Creates, updates, deletes, gets or lists a <code>vnics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vnics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.vnics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

The VNIC was retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VNIC.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The VNIC's availability domain.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the VNIC.</td>
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
    <td>The hostname for the VNIC's primary private IP. Used for DNS. The value is the hostname portion of the primary private IP's fully qualified domain name (FQDN) (for example, `bminstance1` in FQDN `bminstance1.subnet123.vcn1.oraclevcn.com`). Must be unique across all VNICs in the subnet and comply with &#91;RFC 952&#93;(https:​//tools.ietf.org/html/rfc952) and &#91;RFC 1123&#93;(https:​//tools.ietf.org/html/rfc1123).  For more information, see &#91;DNS in Your Virtual Cloud Network&#93;(/iaas/Content/Network/Concepts/dns.htm).  Example: `bminstance1` </td>
</tr>
<tr>
    <td><CopyableCode code="ipv6Addresses" /></td>
    <td><code>array</code></td>
    <td>List of IPv6 addresses assigned to the VNIC.  Example: `2001:DB8::` </td>
</tr>
<tr>
    <td><CopyableCode code="isPrimary" /></td>
    <td><code>boolean</code></td>
    <td>Whether the VNIC is the primary VNIC (the VNIC that is automatically created and attached during instance launch). </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the VNIC. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="macAddress" /></td>
    <td><code>string</code></td>
    <td>The MAC address of the VNIC.  If the VNIC belongs to a VLAN as part of the Oracle Cloud VMware Solution, the MAC address is learned. If the VNIC belongs to a subnet, the MAC address is a static, Oracle-provided value.  Example: `00:00:00:00:00:01` </td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>A list of the OCIDs of the network security groups that the VNIC belongs to.  If the VNIC belongs to a VLAN as part of the Oracle Cloud VMware Solution (instead of belonging to a subnet), the value of the `nsgIds` attribute is ignored. Instead, the VNIC belongs to the NSGs that are associated with the VLAN itself. See &#91;Vlan&#93;(#/en/iaas/latest/Vlan).  For more information about NSGs, see &#91;NetworkSecurityGroup&#93;(#/en/iaas/latest/NetworkSecurityGroup/). </td>
</tr>
<tr>
    <td><CopyableCode code="privateIp" /></td>
    <td><code>string</code></td>
    <td>The private IP address of the primary `privateIp` object on the VNIC. The address is within the CIDR of the VNIC's subnet.  Example: `10.0.3.3` </td>
</tr>
<tr>
    <td><CopyableCode code="publicIp" /></td>
    <td><code>string</code></td>
    <td>The public IP address of the VNIC, if one is assigned. </td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table the IP address or VNIC will use. For more information, see &#91;Per-resource Routing&#93;(https:​//docs.oracle.com/iaas/Content/Network/Tasks/managingroutetables.htm#Overview_of_Routing_for_Your_VCN__source_routing). </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>&#91;Security attributes&#93;(/iaas/Content/zero-trust-packet-routing/zpr-artifacts.htm#security-attributes) are labels for a resource that can be referenced in a &#91;Zero Trust Packet Routing&#93;(/iaas/Content/zero-trust-packet-routing/overview.htm) (ZPR) policy to control access to ZPR-supported resources.  Example: `&#123;"Oracle-DataSecurity-ZPR": &#123;"MaxEgressCount": &#123;"value":"42","mode":"audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="skipSourceDestCheck" /></td>
    <td><code>boolean</code></td>
    <td>Whether the source/destination check is disabled on the VNIC. Defaults to `false`, which means the check is performed. For information about why you would skip the source/destination check, see &#91;Using a Private IP as a Route Target&#93;(/iaas/Content/Network/Tasks/managingroutetables.htm#privateip).  If the VNIC belongs to a VLAN as part of the Oracle Cloud VMware Solution (instead of belonging to a subnet), the `skipSourceDestCheck` attribute is `true`. This is because the source/destination check is always disabled for VNICs in a VLAN.  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the subnet the VNIC is in.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the VNIC was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vlanId" /></td>
    <td><code>string</code></td>
    <td>If the VNIC belongs to a VLAN as part of the Oracle Cloud VMware Solution (instead of belonging to a subnet), the `vlanId` is the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VLAN the VNIC is in. See &#91;Vlan&#93;(#/en/iaas/latest/Vlan). If the VNIC is instead in a subnet, `subnetId` has a value. </td>
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
    <td><a href="#parameter-vnicId"><code>vnicId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the information for the specified virtual network interface card (VNIC).&lt;br /&gt;You can get the VNIC &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) from the&lt;br /&gt;&#91;ListVnicAttachments&#93;(#/en/iaas/latest/VnicAttachment/ListVnicAttachments)&lt;br /&gt;operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-vnicId"><code>vnicId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified VNIC.&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-vnicId">
    <td><CopyableCode code="vnicId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VNIC.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Gets the information for the specified virtual network interface card (VNIC).&lt;br /&gt;You can get the VNIC &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) from the&lt;br /&gt;&#91;ListVnicAttachments&#93;(#/en/iaas/latest/VnicAttachment/ListVnicAttachments)&lt;br /&gt;operation.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
compartmentId,
definedTags,
displayName,
freeformTags,
hostnameLabel,
ipv6Addresses,
isPrimary,
lifecycleState,
macAddress,
nsgIds,
privateIp,
publicIp,
routeTableId,
securityAttributes,
skipSourceDestCheck,
subnetId,
timeCreated,
vlanId
FROM oci.network.vnics
WHERE vnicId = '{{ vnicId }}' -- required
AND region = '{{ region }}' -- required
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

Updates the specified VNIC.&lt;br /&gt;

```sql
UPDATE oci.network.vnics
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
hostnameLabel = '{{ hostnameLabel }}',
nsgIds = '{{ nsgIds }}',
routeTableId = '{{ routeTableId }}',
securityAttributes = '{{ securityAttributes }}',
skipSourceDestCheck = {{ skipSourceDestCheck }}
WHERE 
vnicId = '{{ vnicId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
availabilityDomain,
compartmentId,
definedTags,
displayName,
freeformTags,
hostnameLabel,
ipv6Addresses,
isPrimary,
lifecycleState,
macAddress,
nsgIds,
privateIp,
publicIp,
routeTableId,
securityAttributes,
skipSourceDestCheck,
subnetId,
timeCreated,
vlanId;
```
</TabItem>
</Tabs>
