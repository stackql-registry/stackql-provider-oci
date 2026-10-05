--- 
title: local_peering_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - local_peering_gateways
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

Creates, updates, deletes, gets or lists a <code>local_peering_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="local_peering_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.local_peering_gateways" /></td></tr>
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

The local peering gateway was retrieved.

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
    <td>The LPG's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the LPG.</td>
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
    <td><CopyableCode code="isCrossTenancyPeering" /></td>
    <td><code>boolean</code></td>
    <td>Whether the VCN at the other end of the peering is in a different tenancy.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The LPG's current lifecycle state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="peerAdvertisedCidr" /></td>
    <td><code>string</code></td>
    <td>The smallest aggregate CIDR that contains all the CIDR routes advertised by the VCN at the other end of the peering from this LPG. See `peerAdvertisedCidrDetails` for the individual CIDRs. The value is `null` if the LPG is not peered.  Example: `192.168.0.0/16`, or if aggregated with `172.16.0.0/24` then `128.0.0.0/1` </td>
</tr>
<tr>
    <td><CopyableCode code="peerAdvertisedCidrDetails" /></td>
    <td><code>array</code></td>
    <td>The specific ranges of IP addresses available on or via the VCN at the other end of the peering from this LPG. The value is `null` if the LPG is not peered. You can use these as destination CIDRs for route rules to route a subnet's traffic to this LPG.  Example: &#91;`192.168.0.0/16`, `172.16.0.0/24`&#93; </td>
</tr>
<tr>
    <td><CopyableCode code="peerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the peered LPG.</td>
</tr>
<tr>
    <td><CopyableCode code="peeringStatus" /></td>
    <td><code>string</code></td>
    <td>Whether the LPG is peered with another LPG. `NEW` means the LPG has not yet been peered. `PENDING` means the peering is being established. `REVOKED` means the LPG at the other end of the peering has been deleted.  (INVALID, NEW, PEERED, PENDING, REVOKED)</td>
</tr>
<tr>
    <td><CopyableCode code="peeringStatusDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information regarding the peering status, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table the LPG is using.  For information about why you would associate a route table with an LPG, see &#91;Transit Routing: Access to Multiple VCNs in Same Region&#93;(/iaas/Content/Network/Tasks/transitrouting.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>&#91;Security attributes&#93;(/iaas/Content/zero-trust-packet-routing/zpr-artifacts.htm#security-attributes) are labels for a resource that can be referenced in a &#91;Zero Trust Packet Routing&#93;(/iaas/Content/zero-trust-packet-routing/overview.htm) (ZPR) policy to control access to ZPR-supported resources.  Example: `&#123;"Oracle-DataSecurity-ZPR": &#123;"MaxEgressCount": &#123;"value":"42","mode":"audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the LPG was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN that uses the LPG.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A local peering gateway (LPG) is an object on a VCN that lets that VCN peer&lt;br /&gt;with another VCN in the same region. *Peering* means that the two VCNs can&lt;br /&gt;communicate using private IP addresses, but without the traffic traversing the&lt;br /&gt;internet or routing through your on-premises network. For more information,&lt;br /&gt;see &#91;VCN Peering&#93;(/iaas/Content/Network/Tasks/VCNpeering.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The LPG's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the LPG.</td>
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
    <td><CopyableCode code="isCrossTenancyPeering" /></td>
    <td><code>boolean</code></td>
    <td>Whether the VCN at the other end of the peering is in a different tenancy.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The LPG's current lifecycle state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="peerAdvertisedCidr" /></td>
    <td><code>string</code></td>
    <td>The smallest aggregate CIDR that contains all the CIDR routes advertised by the VCN at the other end of the peering from this LPG. See `peerAdvertisedCidrDetails` for the individual CIDRs. The value is `null` if the LPG is not peered.  Example: `192.168.0.0/16`, or if aggregated with `172.16.0.0/24` then `128.0.0.0/1` </td>
</tr>
<tr>
    <td><CopyableCode code="peerAdvertisedCidrDetails" /></td>
    <td><code>array</code></td>
    <td>The specific ranges of IP addresses available on or via the VCN at the other end of the peering from this LPG. The value is `null` if the LPG is not peered. You can use these as destination CIDRs for route rules to route a subnet's traffic to this LPG.  Example: &#91;`192.168.0.0/16`, `172.16.0.0/24`&#93; </td>
</tr>
<tr>
    <td><CopyableCode code="peerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the peered LPG.</td>
</tr>
<tr>
    <td><CopyableCode code="peeringStatus" /></td>
    <td><code>string</code></td>
    <td>Whether the LPG is peered with another LPG. `NEW` means the LPG has not yet been peered. `PENDING` means the peering is being established. `REVOKED` means the LPG at the other end of the peering has been deleted.  (INVALID, NEW, PEERED, PENDING, REVOKED)</td>
</tr>
<tr>
    <td><CopyableCode code="peeringStatusDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information regarding the peering status, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table the LPG is using.  For information about why you would associate a route table with an LPG, see &#91;Transit Routing: Access to Multiple VCNs in Same Region&#93;(/iaas/Content/Network/Tasks/transitrouting.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>&#91;Security attributes&#93;(/iaas/Content/zero-trust-packet-routing/zpr-artifacts.htm#security-attributes) are labels for a resource that can be referenced in a &#91;Zero Trust Packet Routing&#93;(/iaas/Content/zero-trust-packet-routing/overview.htm) (ZPR) policy to control access to ZPR-supported resources.  Example: `&#123;"Oracle-DataSecurity-ZPR": &#123;"MaxEgressCount": &#123;"value":"42","mode":"audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the LPG was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN that uses the LPG.</td>
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
    <td><a href="#parameter-localPeeringGatewayId"><code>localPeeringGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified local peering gateway's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a></td>
    <td>Lists the local peering gateways (LPGs) for the specified VCN and specified compartment.&lt;br /&gt;If the VCN ID is not provided, then the list includes the LPGs from all VCNs in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new local peering gateway (LPG) for the specified VCN.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-localPeeringGatewayId"><code>localPeeringGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified local peering gateway (LPG).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-localPeeringGatewayId"><code>localPeeringGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified local peering gateway (LPG).&lt;br /&gt;&lt;br /&gt;This is an asynchronous operation; the local peering gateway's `lifecycleState` changes to TERMINATING temporarily&lt;br /&gt;until the local peering gateway is completely removed.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-localPeeringGatewayId"><code>localPeeringGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a local peering gateway into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#connect_local_peering_gateways"><CopyableCode code="connect_local_peering_gateways" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-localPeeringGatewayId"><code>localPeeringGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-peerId"><code>peerId</code></a></td>
    <td></td>
    <td>Connects this local peering gateway (LPG) to another one in the same region.&lt;br /&gt;&lt;br /&gt;This operation must be called by the VCN administrator who is designated as&lt;br /&gt;the *requestor* in the peering relationship. The *acceptor* must implement&lt;br /&gt;an Identity and Access Management (IAM) policy that gives the requestor permission&lt;br /&gt;to connect to LPGs in the acceptor's compartment. Without that permission, this&lt;br /&gt;operation will fail. For more information, see&lt;br /&gt;&#91;VCN Peering&#93;(/iaas/Content/Network/Tasks/VCNpeering.htm).&lt;br /&gt;</td>
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
<tr id="parameter-localPeeringGatewayId">
    <td><CopyableCode code="localPeeringGatewayId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the local peering gateway.</td>
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

Gets the specified local peering gateway's information.

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
freeformTags,
isCrossTenancyPeering,
lifecycleState,
peerAdvertisedCidr,
peerAdvertisedCidrDetails,
peerId,
peeringStatus,
peeringStatusDetails,
routeTableId,
securityAttributes,
timeCreated,
vcnId
FROM oci.network.local_peering_gateways
WHERE localPeeringGatewayId = '{{ localPeeringGatewayId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the local peering gateways (LPGs) for the specified VCN and specified compartment.&lt;br /&gt;If the VCN ID is not provided, then the list includes the LPGs from all VCNs in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
freeformTags,
isCrossTenancyPeering,
lifecycleState,
peerAdvertisedCidr,
peerAdvertisedCidrDetails,
peerId,
peeringStatus,
peeringStatusDetails,
routeTableId,
securityAttributes,
timeCreated,
vcnId
FROM oci.network.local_peering_gateways
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND vcnId = '{{ vcnId }}'
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

Creates a new local peering gateway (LPG) for the specified VCN.&lt;br /&gt;

```sql
INSERT INTO oci.network.local_peering_gateways (
compartmentId,
definedTags,
displayName,
freeformTags,
routeTableId,
securityAttributes,
vcnId,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ routeTableId }}',
'{{ securityAttributes }}',
'{{ vcnId }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
freeformTags,
isCrossTenancyPeering,
lifecycleState,
peerAdvertisedCidr,
peerAdvertisedCidrDetails,
peerId,
peeringStatus,
peeringStatusDetails,
routeTableId,
securityAttributes,
timeCreated,
vcnId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: local_peering_gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the local_peering_gateways resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the local peering gateway (LPG).
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
    - name: routeTableId
      value: "{{ routeTableId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the route table the LPG will use.
        If you don't specify a route table here, the LPG is created without an associated route
        table. The Networking service does NOT automatically associate the attached VCN's default route table
        with the LPG.
        For information about why you would associate a route table with an LPG, see
        [Transit Routing: Access to Multiple VCNs in Same Region](/iaas/Content/Network/Tasks/transitrouting.htm).
    - name: securityAttributes
      value: "{{ securityAttributes }}"
      description: |
        [Security attributes](/iaas/Content/zero-trust-packet-routing/zpr-artifacts.htm#security-attributes) are labels
        for a resource that can be referenced in a [Zero Trust Packet Routing](/iaas/Content/zero-trust-packet-routing/overview.htm)
        (ZPR) policy to control access to ZPR-supported resources.
        Example: \`{"Oracle-DataSecurity-ZPR": {"MaxEgressCount": {"value":"42","mode":"audit"}}}\`
    - name: vcnId
      value: "{{ vcnId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the VCN the LPG belongs to.
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

Updates the specified local peering gateway (LPG).&lt;br /&gt;

```sql
UPDATE oci.network.local_peering_gateways
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
routeTableId = '{{ routeTableId }}',
securityAttributes = '{{ securityAttributes }}'
WHERE 
localPeeringGatewayId = '{{ localPeeringGatewayId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
freeformTags,
isCrossTenancyPeering,
lifecycleState,
peerAdvertisedCidr,
peerAdvertisedCidrDetails,
peerId,
peeringStatus,
peeringStatusDetails,
routeTableId,
securityAttributes,
timeCreated,
vcnId;
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

Deletes the specified local peering gateway (LPG).&lt;br /&gt;&lt;br /&gt;This is an asynchronous operation; the local peering gateway's `lifecycleState` changes to TERMINATING temporarily&lt;br /&gt;until the local peering gateway is completely removed.&lt;br /&gt;

```sql
DELETE FROM oci.network.local_peering_gateways
WHERE localPeeringGatewayId = '{{ localPeeringGatewayId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_compartment"
    values={[
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'connect_local_peering_gateways', value: 'connect_local_peering_gateways' }
    ]}
>
<TabItem value="change_compartment">

Moves a local peering gateway into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.network.local_peering_gateways.change_compartment 
@localPeeringGatewayId='{{ localPeeringGatewayId }}' --required, 
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
<TabItem value="connect_local_peering_gateways">

Connects this local peering gateway (LPG) to another one in the same region.&lt;br /&gt;&lt;br /&gt;This operation must be called by the VCN administrator who is designated as&lt;br /&gt;the *requestor* in the peering relationship. The *acceptor* must implement&lt;br /&gt;an Identity and Access Management (IAM) policy that gives the requestor permission&lt;br /&gt;to connect to LPGs in the acceptor's compartment. Without that permission, this&lt;br /&gt;operation will fail. For more information, see&lt;br /&gt;&#91;VCN Peering&#93;(/iaas/Content/Network/Tasks/VCNpeering.htm).&lt;br /&gt;

```sql
EXEC oci.network.local_peering_gateways.connect_local_peering_gateways 
@localPeeringGatewayId='{{ localPeeringGatewayId }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"peerId": "{{ peerId }}"
}'
;
```
</TabItem>
</Tabs>
