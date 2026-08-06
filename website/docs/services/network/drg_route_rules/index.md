--- 
title: drg_route_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - drg_route_rules
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

Creates, updates, deletes, gets or lists a <code>drg_route_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="drg_route_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.drg_route_rules" /></td></tr>
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

A DRG route rule is a mapping between a destination IP address range and a DRG attachment.&lt;br /&gt;The map is used to route matching packets. Traffic will be routed across the attachments using Equal-cost multi-path routing (ECMP)&lt;br /&gt;if there are multiple rules with identical destinations and none of the rules conflict.&lt;br /&gt;

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
    <td>The Oracle-assigned ID of the DRG route rule. </td>
</tr>
<tr>
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Additional properties for the route, computed by the service. </td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Represents the range of IP addresses to match against when routing traffic.  Potential values:   * An IP address range (IPv4 or IPv6) in CIDR notation. For example: `192.168.1.0/24`   or `2001:0db8:0123:45::/56`.   * When you're setting up a security rule for traffic destined for a particular `Service` through   a service gateway, this is the `cidrBlock` value associated with that &#91;Service&#93;(#/en/iaas/20160918/Service/). For example: `oci-phx-objectstorage`. </td>
</tr>
<tr>
    <td><CopyableCode code="destinationType" /></td>
    <td><code>string</code></td>
    <td>The type of destination for the rule.  Allowed values:    * `CIDR_BLOCK`: If the rule's `destination` is an IP address range in CIDR notation.   * `SERVICE_CIDR_BLOCK`: If the rule's `destination` is the `cidrBlock` value for a     &#91;Service&#93;(#/en/iaas/latest/Service/) (the rule is for traffic destined for a     particular `Service` through a service gateway).  (CIDR_BLOCK, SERVICE_CIDR_BLOCK)</td>
</tr>
<tr>
    <td><CopyableCode code="isBlackhole" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that if the next hop attachment does not exist, so traffic for this route is discarded without notification. </td>
</tr>
<tr>
    <td><CopyableCode code="isConflict" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that the route was not imported due to a conflict between route rules. </td>
</tr>
<tr>
    <td><CopyableCode code="nextHopDrgAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the next hop DRG attachment responsible for reaching the network destination.  A value of `BLACKHOLE` means traffic for this route is discarded without notification. </td>
</tr>
<tr>
    <td><CopyableCode code="routeProvenance" /></td>
    <td><code>string</code></td>
    <td>The earliest origin of a route. If a route is advertised to a DRG through an IPsec tunnel attachment, and is propagated to peered DRGs via RPC attachments, the route's provenance in the peered DRGs remains `IPSEC_TUNNEL`, because that is the earliest origin.  No routes with a provenance `IPSEC_TUNNEL` or `VIRTUAL_CIRCUIT` will be exported to IPsec tunnel or virtual circuit attachments, regardless of the attachment's export distribution.  (STATIC, VCN, VIRTUAL_CIRCUIT, IPSEC_TUNNEL)</td>
</tr>
<tr>
    <td><CopyableCode code="routeType" /></td>
    <td><code>string</code></td>
    <td>You can specify static routes for the DRG route table using the API. The DRG learns dynamic routes from the DRG attachments using various routing protocols.  (STATIC, DYNAMIC)</td>
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
    <td><a href="#parameter-drgRouteTableId"><code>drgRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-routeType"><code>routeType</code></a></td>
    <td>Lists the route rules in the specified DRG route table.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-drgRouteTableId"><code>drgRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates one or more route rules in the specified DRG route table.&lt;br /&gt;</td>
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
<tr id="parameter-drgRouteTableId">
    <td><CopyableCode code="drgRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG route table.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
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
<tr id="parameter-routeType">
    <td><CopyableCode code="routeType" /></td>
    <td><code>string</code></td>
    <td>Static routes are specified through the DRG route table API. Dynamic routes are learned by the DRG from the DRG attachments through various routing protocols. </td>
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

Lists the route rules in the specified DRG route table.

```sql
SELECT
id,
attributes,
destination,
destinationType,
isBlackhole,
isConflict,
nextHopDrgAttachmentId,
routeProvenance,
routeType
FROM oci.network.drg_route_rules
WHERE drgRouteTableId = '{{ drgRouteTableId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND routeType = '{{ routeType }}'
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

Updates one or more route rules in the specified DRG route table.&lt;br /&gt;

```sql
UPDATE oci.network.drg_route_rules
SET 
routeRules = '{{ routeRules }}'
WHERE 
drgRouteTableId = '{{ drgRouteTableId }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
attributes,
destination,
destinationType,
isBlackhole,
isConflict,
nextHopDrgAttachmentId,
routeProvenance,
routeType;
```
</TabItem>
</Tabs>
