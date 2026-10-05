--- 
title: cross_connect_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - cross_connect_mappings
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

Creates, updates, deletes, gets or lists a <code>cross_connect_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cross_connect_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.cross_connect_mappings" /></td></tr>
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

The list is being retrieved.

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
    <td><CopyableCode code="bgpMd5AuthKey" /></td>
    <td><code>string</code></td>
    <td>The key for BGP MD5 authentication. Only applicable if your system requires MD5 authentication. If empty or not set (null), that means you don't use BGP MD5 authentication. </td>
</tr>
<tr>
    <td><CopyableCode code="crossConnectOrCrossConnectGroupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the cross-connect or cross-connect group for this mapping. Specified by the owner of the cross-connect or cross-connect group (the customer if the customer is colocated with Oracle, or the provider if the customer is connecting via provider). </td>
</tr>
<tr>
    <td><CopyableCode code="customerBgpPeeringIp" /></td>
    <td><code>string</code></td>
    <td>The BGP IPv4 address for the router on the other end of the BGP session from Oracle. Specified by the owner of that router. If the session goes from Oracle to a customer, this is the BGP IPv4 address of the customer's edge router. If the session goes from Oracle to a provider, this is the BGP IPv4 address of the provider's edge router. Must use a subnet mask from /28 to /31.  There's one exception: for a public virtual circuit, Oracle specifies the BGP IPv4 addresses.  Example: `10.0.0.18/31` </td>
</tr>
<tr>
    <td><CopyableCode code="customerBgpPeeringIpv6" /></td>
    <td><code>string</code></td>
    <td>The BGP IPv6 address for the router on the other end of the BGP session from Oracle. Specified by the owner of that router. If the session goes from Oracle to a customer, this is the BGP IPv6 address of the customer's edge router. If the session goes from Oracle to a provider, this is the BGP IPv6 address of the provider's edge router. Only subnet masks from /64 up to /127 are allowed.  There's one exception: for a public virtual circuit, Oracle specifies the BGP IPv6 addresses.  Example: `2001:db8::1/64` </td>
</tr>
<tr>
    <td><CopyableCode code="ipv4BgpStatus" /></td>
    <td><code>string</code></td>
    <td>The state of the Ipv4 BGP session. (UP, DOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv6BgpStatus" /></td>
    <td><code>string</code></td>
    <td>The state of the Ipv6 BGP session. (UP, DOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="ociLogicalDeviceName" /></td>
    <td><code>string</code></td>
    <td>The FastConnect device that terminates the logical connection. </td>
</tr>
<tr>
    <td><CopyableCode code="oracleBgpPeeringIp" /></td>
    <td><code>string</code></td>
    <td>The IPv4 address for Oracle's end of the BGP session. Must use a subnet mask from /28 to /31. If the session goes from Oracle to a customer's edge router, the customer specifies this information. If the session goes from Oracle to a provider's edge router, the provider specifies this.  There's one exception: for a public virtual circuit, Oracle specifies the BGP IPv4 addresses.  Example: `10.0.0.19/31` </td>
</tr>
<tr>
    <td><CopyableCode code="oracleBgpPeeringIpv6" /></td>
    <td><code>string</code></td>
    <td>The IPv6 address for Oracle's end of the BGP session. Only subnet masks from /64 up to /127 are allowed. If the session goes from Oracle to a customer's edge router, the customer specifies this information. If the session goes from Oracle to a provider's edge router, the provider specifies this.  There's one exception: for a public virtual circuit, Oracle specifies the BGP IPv6 addresses.  Example: `2001:db8::2/64` </td>
</tr>
<tr>
    <td><CopyableCode code="vlan" /></td>
    <td><code>integer</code></td>
    <td>The number of the specific VLAN (on the cross-connect or cross-connect group) that is assigned to this virtual circuit. Specified by the owner of the cross-connect or cross-connect group (the customer if the customer is colocated with Oracle, or the provider if the customer is connecting via provider).  Example: `200` </td>
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
    <td><a href="#parameter-virtualCircuitId"><code>virtualCircuitId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists the Cross Connect mapping Details for the specified&lt;br /&gt;virtual circuit.&lt;br /&gt;</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-virtualCircuitId">
    <td><CopyableCode code="virtualCircuitId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the virtual circuit.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
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

Lists the Cross Connect mapping Details for the specified&lt;br /&gt;virtual circuit.&lt;br /&gt;

```sql
SELECT
bgpMd5AuthKey,
crossConnectOrCrossConnectGroupId,
customerBgpPeeringIp,
customerBgpPeeringIpv6,
ipv4BgpStatus,
ipv6BgpStatus,
ociLogicalDeviceName,
oracleBgpPeeringIp,
oracleBgpPeeringIpv6,
vlan
FROM oci.network.cross_connect_mappings
WHERE virtualCircuitId = '{{ virtualCircuitId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
