--- 
title: virtual_circuits
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_circuits
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

Creates, updates, deletes, gets or lists a <code>virtual_circuits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_circuits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.virtual_circuits" /></td></tr>
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

The virtual circuit was retrieved.

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
    <td>The virtual circuit's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidthShapeName" /></td>
    <td><code>string</code></td>
    <td>The provisioned data rate of the connection. To get a list of the available bandwidth levels (that is, shapes), see &#91;ListFastConnectProviderServiceVirtualCircuitBandwidthShapes&#93;(#/en/iaas/latest/FastConnectProviderService/ListFastConnectProviderVirtualCircuitBandwidthShapes).  Example: `10 Gbps` </td>
</tr>
<tr>
    <td><CopyableCode code="bgpAdminState" /></td>
    <td><code>string</code></td>
    <td>Set to `ENABLED` (the default) to activate the BGP session of the virtual circuit, set to `DISABLED` to deactivate the virtual circuit.  (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="bgpIpv6SessionState" /></td>
    <td><code>string</code></td>
    <td>The state of the Ipv6 BGP session associated with the virtual circuit. (UP, DOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="bgpManagement" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Instead use the information in &#91;FastConnectProviderService&#93;(#/en/iaas/latest/FastConnectProviderService/).  (CUSTOMER_MANAGED, PROVIDER_MANAGED, ORACLE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="bgpSessionState" /></td>
    <td><code>string</code></td>
    <td>The state of the Ipv4 BGP session associated with the virtual circuit. (UP, DOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the virtual circuit.</td>
</tr>
<tr>
    <td><CopyableCode code="crossConnectMappings" /></td>
    <td><code>array</code></td>
    <td>An array of mappings, each containing properties for a cross-connect or cross-connect group that is associated with this virtual circuit. </td>
</tr>
<tr>
    <td><CopyableCode code="customerBgpAsn" /></td>
    <td><code>integer</code></td>
    <td>The BGP ASN of the network at the other end of the BGP session from Oracle. If the session is between the customer's edge router and Oracle, the value is the customer's ASN. If the BGP session is between the provider's edge router and Oracle, the value is the provider's ASN. </td>
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
    <td><CopyableCode code="gatewayId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the customer's &#91;dynamic routing gateway (DRG)&#93;(#/en/iaas/latest/Drg) that this virtual circuit uses. Applicable only to private virtual circuits. </td>
</tr>
<tr>
    <td><CopyableCode code="ipMtu" /></td>
    <td><code>string</code></td>
    <td>The layer 3 IP MTU to use on this virtual circuit. (MTU_1500, MTU_9000) (x-obmcs-top-level-enum: #/definitions/VirtualCircuitIpMtu)</td>
</tr>
<tr>
    <td><CopyableCode code="isBfdEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Set to `true` to enable BFD for IPv4 BGP peering, or set to `false` to disable BFD. If this is not set, the default is `false`. </td>
</tr>
<tr>
    <td><CopyableCode code="isTransportMode" /></td>
    <td><code>boolean</code></td>
    <td>Set to `true` for the virtual circuit to carry only encrypted traffic, or set to `false` for the virtual circuit to carry unencrypted traffic. If this is not set, the default is `false`. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The virtual circuit's current state. For information about the different states, see &#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).  (PENDING_PROVIDER, VERIFYING, PROVISIONING, PROVISIONED, FAILED, INACTIVE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="oracleBgpAsn" /></td>
    <td><code>integer</code></td>
    <td>The Oracle BGP ASN.</td>
</tr>
<tr>
    <td><CopyableCode code="providerName" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Instead use `providerServiceId`. </td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the service offered by the provider (if the customer is connecting via a provider). </td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceKeyName" /></td>
    <td><code>string</code></td>
    <td>The service key name offered by the provider (if the customer is connecting via a provider). </td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceName" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Instead use `providerServiceId`. </td>
</tr>
<tr>
    <td><CopyableCode code="providerState" /></td>
    <td><code>string</code></td>
    <td>The provider's state in relation to this virtual circuit (if the customer is connecting via a provider). ACTIVE means the provider has provisioned the virtual circuit from their end. INACTIVE means the provider has not yet provisioned the virtual circuit, or has de-provisioned it.  (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="publicPrefixes" /></td>
    <td><code>array</code></td>
    <td>For a public virtual circuit. The public IP prefixes (CIDRs) the customer wants to advertise across the connection. All prefix sizes are allowed. </td>
</tr>
<tr>
    <td><CopyableCode code="referenceComment" /></td>
    <td><code>string</code></td>
    <td>Provider-supplied reference information about this virtual circuit (if the customer is connecting via a provider). </td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud Infrastructure region where this virtual circuit is located. </td>
</tr>
<tr>
    <td><CopyableCode code="routingPolicy" /></td>
    <td><code>array</code></td>
    <td>The routing policy sets how routing information about the Oracle cloud is shared over a public virtual circuit. Policies available are: `ORACLE_SERVICE_NETWORK`, `REGIONAL`, `MARKET_LEVEL`, and `GLOBAL`. See &#91;Route Filtering&#93;(/iaas/Content/Network/Concepts/routingonprem.htm#route_filtering) for details. By default, routing information is shared for all routes in the same market. </td>
</tr>
<tr>
    <td><CopyableCode code="serviceType" /></td>
    <td><code>string</code></td>
    <td>Provider service type.  (COLOCATED, LAYER2, LAYER3)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the virtual circuit was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Whether the virtual circuit supports private or public peering. For more information, see &#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).  (PUBLIC, PRIVATE)</td>
</tr>
<tr>
    <td><CopyableCode code="virtualCircuitRedundancyMetadata" /></td>
    <td><code>object</code></td>
    <td>This resource provides redundancy level details for the virtual circuit. For more about redundancy, see &#91;FastConnect Redundancy Best Practices&#93;(/iaas/Content/Network/Concepts/fastconnectresiliency.htm). </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

For use with Oracle Cloud Infrastructure FastConnect.&lt;br /&gt;&lt;br /&gt;A virtual circuit is an isolated network path that runs over one or more physical&lt;br /&gt;network connections to provide a single, logical connection between the edge router&lt;br /&gt;on the customer's existing network and Oracle Cloud Infrastructure. *Private*&lt;br /&gt;virtual circuits support private peering, and *public* virtual circuits support&lt;br /&gt;public peering. For more information, see &#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;&lt;br /&gt;Each virtual circuit is made up of information shared between a customer, Oracle,&lt;br /&gt;and a provider (if the customer is using FastConnect via a provider). Who fills in&lt;br /&gt;a given property of a virtual circuit depends on whether the BGP session related to&lt;br /&gt;that virtual circuit goes from the customer's edge router to Oracle, or from the provider's&lt;br /&gt;edge router to Oracle. Also, in the case where the customer is using a provider, values&lt;br /&gt;for some of the properties may not be present immediately, but may get filled in as the&lt;br /&gt;provider and Oracle each do their part to provision the virtual circuit.&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The virtual circuit's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidthShapeName" /></td>
    <td><code>string</code></td>
    <td>The provisioned data rate of the connection. To get a list of the available bandwidth levels (that is, shapes), see &#91;ListFastConnectProviderServiceVirtualCircuitBandwidthShapes&#93;(#/en/iaas/latest/FastConnectProviderService/ListFastConnectProviderVirtualCircuitBandwidthShapes).  Example: `10 Gbps` </td>
</tr>
<tr>
    <td><CopyableCode code="bgpAdminState" /></td>
    <td><code>string</code></td>
    <td>Set to `ENABLED` (the default) to activate the BGP session of the virtual circuit, set to `DISABLED` to deactivate the virtual circuit.  (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="bgpIpv6SessionState" /></td>
    <td><code>string</code></td>
    <td>The state of the Ipv6 BGP session associated with the virtual circuit. (UP, DOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="bgpManagement" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Instead use the information in &#91;FastConnectProviderService&#93;(#/en/iaas/latest/FastConnectProviderService/).  (CUSTOMER_MANAGED, PROVIDER_MANAGED, ORACLE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="bgpSessionState" /></td>
    <td><code>string</code></td>
    <td>The state of the Ipv4 BGP session associated with the virtual circuit. (UP, DOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the virtual circuit.</td>
</tr>
<tr>
    <td><CopyableCode code="crossConnectMappings" /></td>
    <td><code>array</code></td>
    <td>An array of mappings, each containing properties for a cross-connect or cross-connect group that is associated with this virtual circuit. </td>
</tr>
<tr>
    <td><CopyableCode code="customerBgpAsn" /></td>
    <td><code>integer</code></td>
    <td>The BGP ASN of the network at the other end of the BGP session from Oracle. If the session is between the customer's edge router and Oracle, the value is the customer's ASN. If the BGP session is between the provider's edge router and Oracle, the value is the provider's ASN. </td>
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
    <td><CopyableCode code="gatewayId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the customer's &#91;dynamic routing gateway (DRG)&#93;(#/en/iaas/latest/Drg) that this virtual circuit uses. Applicable only to private virtual circuits. </td>
</tr>
<tr>
    <td><CopyableCode code="ipMtu" /></td>
    <td><code>string</code></td>
    <td>The layer 3 IP MTU to use on this virtual circuit. (MTU_1500, MTU_9000) (x-obmcs-top-level-enum: #/definitions/VirtualCircuitIpMtu)</td>
</tr>
<tr>
    <td><CopyableCode code="isBfdEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Set to `true` to enable BFD for IPv4 BGP peering, or set to `false` to disable BFD. If this is not set, the default is `false`. </td>
</tr>
<tr>
    <td><CopyableCode code="isTransportMode" /></td>
    <td><code>boolean</code></td>
    <td>Set to `true` for the virtual circuit to carry only encrypted traffic, or set to `false` for the virtual circuit to carry unencrypted traffic. If this is not set, the default is `false`. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The virtual circuit's current state. For information about the different states, see &#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).  (PENDING_PROVIDER, VERIFYING, PROVISIONING, PROVISIONED, FAILED, INACTIVE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="oracleBgpAsn" /></td>
    <td><code>integer</code></td>
    <td>The Oracle BGP ASN.</td>
</tr>
<tr>
    <td><CopyableCode code="providerName" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Instead use `providerServiceId`. </td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the service offered by the provider (if the customer is connecting via a provider). </td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceKeyName" /></td>
    <td><code>string</code></td>
    <td>The service key name offered by the provider (if the customer is connecting via a provider). </td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceName" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Instead use `providerServiceId`. </td>
</tr>
<tr>
    <td><CopyableCode code="providerState" /></td>
    <td><code>string</code></td>
    <td>The provider's state in relation to this virtual circuit (if the customer is connecting via a provider). ACTIVE means the provider has provisioned the virtual circuit from their end. INACTIVE means the provider has not yet provisioned the virtual circuit, or has de-provisioned it.  (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="publicPrefixes" /></td>
    <td><code>array</code></td>
    <td>For a public virtual circuit. The public IP prefixes (CIDRs) the customer wants to advertise across the connection. All prefix sizes are allowed. </td>
</tr>
<tr>
    <td><CopyableCode code="referenceComment" /></td>
    <td><code>string</code></td>
    <td>Provider-supplied reference information about this virtual circuit (if the customer is connecting via a provider). </td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud Infrastructure region where this virtual circuit is located. </td>
</tr>
<tr>
    <td><CopyableCode code="routingPolicy" /></td>
    <td><code>array</code></td>
    <td>The routing policy sets how routing information about the Oracle cloud is shared over a public virtual circuit. Policies available are: `ORACLE_SERVICE_NETWORK`, `REGIONAL`, `MARKET_LEVEL`, and `GLOBAL`. See &#91;Route Filtering&#93;(/iaas/Content/Network/Concepts/routingonprem.htm#route_filtering) for details. By default, routing information is shared for all routes in the same market. </td>
</tr>
<tr>
    <td><CopyableCode code="serviceType" /></td>
    <td><code>string</code></td>
    <td>Provider service type.  (COLOCATED, LAYER2, LAYER3)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the virtual circuit was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Whether the virtual circuit supports private or public peering. For more information, see &#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).  (PUBLIC, PRIVATE)</td>
</tr>
<tr>
    <td><CopyableCode code="virtualCircuitRedundancyMetadata" /></td>
    <td><code>object</code></td>
    <td>This resource provides redundancy level details for the virtual circuit. For more about redundancy, see &#91;FastConnect Redundancy Best Practices&#93;(/iaas/Content/Network/Concepts/fastconnectresiliency.htm). </td>
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
    <td><a href="#parameter-virtualCircuitId"><code>virtualCircuitId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified virtual circuit's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the virtual circuits in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new virtual circuit to use with Oracle Cloud&lt;br /&gt;Infrastructure FastConnect. For more information, see&lt;br /&gt;&#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the&lt;br /&gt;compartment where you want the virtual circuit to reside. If you're&lt;br /&gt;not sure which compartment to use, put the virtual circuit in the&lt;br /&gt;same compartment with the DRG it's using. For more information about&lt;br /&gt;compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the virtual circuit.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;**Important:** When creating a virtual circuit, you specify a DRG for&lt;br /&gt;the traffic to flow through. Make sure you attach the DRG to your&lt;br /&gt;VCN and confirm the VCN's routing sends traffic to the DRG. Otherwise&lt;br /&gt;traffic will not flow. For more information, see&lt;br /&gt;&#91;Route Tables&#93;(/iaas/Content/Network/Tasks/managingroutetables.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-virtualCircuitId"><code>virtualCircuitId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified virtual circuit. This can be called by&lt;br /&gt;either the customer who owns the virtual circuit, or the&lt;br /&gt;provider (when provisioning or de-provisioning the virtual&lt;br /&gt;circuit from their end). The documentation for&lt;br /&gt;&#91;UpdateVirtualCircuitDetails&#93;(#/en/iaas/latest/requests/UpdateVirtualCircuitDetails)&lt;br /&gt;indicates who can update each property of the virtual circuit.&lt;br /&gt;&lt;br /&gt;**Important:** If the virtual circuit is working and in the&lt;br /&gt;PROVISIONED state, updating any of the network-related properties&lt;br /&gt;(such as the DRG being used, the BGP ASN, and so on) will cause the virtual&lt;br /&gt;circuit's state to switch to PROVISIONING and the related BGP&lt;br /&gt;session to go down. After Oracle re-provisions the virtual circuit,&lt;br /&gt;its state will return to PROVISIONED. Make sure you confirm that&lt;br /&gt;the associated BGP session is back up. For more information&lt;br /&gt;about the various states and how to test connectivity, see&lt;br /&gt;&#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;&lt;br /&gt;To change the list of public IP prefixes for a public virtual circuit,&lt;br /&gt;use &#91;BulkAddVirtualCircuitPublicPrefixes&#93;(#/en/iaas/latest/VirtualCircuitPublicPrefix/BulkAddVirtualCircuitPublicPrefixes)&lt;br /&gt;and&lt;br /&gt;&#91;BulkDeleteVirtualCircuitPublicPrefixes&#93;(#/en/iaas/latest/VirtualCircuitPublicPrefix/BulkDeleteVirtualCircuitPublicPrefixes).&lt;br /&gt;Updating the list of prefixes does NOT cause the BGP session to go down. However,&lt;br /&gt;Oracle must verify the customer's ownership of each added prefix before&lt;br /&gt;traffic for that prefix will flow across the virtual circuit.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-virtualCircuitId"><code>virtualCircuitId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified virtual circuit.&lt;br /&gt;&lt;br /&gt;**Important:** If you're using FastConnect via a provider,&lt;br /&gt;make sure to also terminate the connection with&lt;br /&gt;the provider, or else the provider may continue to bill you.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#bulk_add_virtual_circuit_public_prefixes"><CopyableCode code="bulk_add_virtual_circuit_public_prefixes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-virtualCircuitId"><code>virtualCircuitId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-publicPrefixes"><code>publicPrefixes</code></a></td>
    <td></td>
    <td>Adds one or more customer public IP prefixes to the specified public virtual circuit.&lt;br /&gt;Use this operation (and not &#91;UpdateVirtualCircuit&#93;(#/en/iaas/latest/VirtualCircuit/UpdateVirtualCircuit))&lt;br /&gt;to add prefixes to the virtual circuit. Oracle must verify the customer's ownership&lt;br /&gt;of each prefix before traffic for that prefix will flow across the virtual circuit.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#bulk_delete_virtual_circuit_public_prefixes"><CopyableCode code="bulk_delete_virtual_circuit_public_prefixes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-virtualCircuitId"><code>virtualCircuitId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-publicPrefixes"><code>publicPrefixes</code></a></td>
    <td></td>
    <td>Removes one or more customer public IP prefixes from the specified public virtual circuit.&lt;br /&gt;Use this operation (and not &#91;UpdateVirtualCircuit&#93;(#/en/iaas/latest/VirtualCircuit/UpdateVirtualCircuit))&lt;br /&gt;to remove prefixes from the virtual circuit. When the virtual circuit's state switches&lt;br /&gt;back to PROVISIONED, Oracle stops advertising the specified prefixes across the connection.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-virtualCircuitId"><code>virtualCircuitId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a virtual circuit into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
<tr id="parameter-virtualCircuitId">
    <td><CopyableCode code="virtualCircuitId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the virtual circuit.</td>
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
    <td>A filter to return only resources that match the specified lifecycle state. The value is case insensitive. </td>
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

Gets the specified virtual circuit's information.

```sql
SELECT
id,
bandwidthShapeName,
bgpAdminState,
bgpIpv6SessionState,
bgpManagement,
bgpSessionState,
compartmentId,
crossConnectMappings,
customerBgpAsn,
definedTags,
displayName,
freeformTags,
gatewayId,
ipMtu,
isBfdEnabled,
isTransportMode,
lifecycleState,
oracleBgpAsn,
providerName,
providerServiceId,
providerServiceKeyName,
providerServiceName,
providerState,
publicPrefixes,
referenceComment,
region,
routingPolicy,
serviceType,
timeCreated,
type,
virtualCircuitRedundancyMetadata
FROM oci.network.virtual_circuits
WHERE virtualCircuitId = '{{ virtualCircuitId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the virtual circuits in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
bandwidthShapeName,
bgpAdminState,
bgpIpv6SessionState,
bgpManagement,
bgpSessionState,
compartmentId,
crossConnectMappings,
customerBgpAsn,
definedTags,
displayName,
freeformTags,
gatewayId,
ipMtu,
isBfdEnabled,
isTransportMode,
lifecycleState,
oracleBgpAsn,
providerName,
providerServiceId,
providerServiceKeyName,
providerServiceName,
providerState,
publicPrefixes,
referenceComment,
region,
routingPolicy,
serviceType,
timeCreated,
type,
virtualCircuitRedundancyMetadata
FROM oci.network.virtual_circuits
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

Creates a new virtual circuit to use with Oracle Cloud&lt;br /&gt;Infrastructure FastConnect. For more information, see&lt;br /&gt;&#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the&lt;br /&gt;compartment where you want the virtual circuit to reside. If you're&lt;br /&gt;not sure which compartment to use, put the virtual circuit in the&lt;br /&gt;same compartment with the DRG it's using. For more information about&lt;br /&gt;compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the virtual circuit.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;**Important:** When creating a virtual circuit, you specify a DRG for&lt;br /&gt;the traffic to flow through. Make sure you attach the DRG to your&lt;br /&gt;VCN and confirm the VCN's routing sends traffic to the DRG. Otherwise&lt;br /&gt;traffic will not flow. For more information, see&lt;br /&gt;&#91;Route Tables&#93;(/iaas/Content/Network/Tasks/managingroutetables.htm).&lt;br /&gt;

```sql
INSERT INTO oci.network.virtual_circuits (
bandwidthShapeName,
bgpAdminState,
compartmentId,
crossConnectMappings,
customerBgpAsn,
definedTags,
displayName,
freeformTags,
gatewayId,
ipMtu,
isBfdEnabled,
isTransportMode,
providerName,
providerServiceId,
providerServiceKeyName,
providerServiceName,
publicPrefixes,
region,
routingPolicy,
type,
region,
opc-retry-token
)
SELECT 
'{{ bandwidthShapeName }}',
'{{ bgpAdminState }}',
'{{ compartmentId }}' /* required */,
'{{ crossConnectMappings }}',
{{ customerBgpAsn }},
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ gatewayId }}',
'{{ ipMtu }}',
{{ isBfdEnabled }},
{{ isTransportMode }},
'{{ providerName }}',
'{{ providerServiceId }}',
'{{ providerServiceKeyName }}',
'{{ providerServiceName }}',
'{{ publicPrefixes }}',
'{{ region }}',
'{{ routingPolicy }}',
'{{ type }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
bandwidthShapeName,
bgpAdminState,
bgpIpv6SessionState,
bgpManagement,
bgpSessionState,
compartmentId,
crossConnectMappings,
customerBgpAsn,
definedTags,
displayName,
freeformTags,
gatewayId,
ipMtu,
isBfdEnabled,
isTransportMode,
lifecycleState,
oracleBgpAsn,
providerName,
providerServiceId,
providerServiceKeyName,
providerServiceName,
providerState,
publicPrefixes,
referenceComment,
region,
routingPolicy,
serviceType,
timeCreated,
type,
virtualCircuitRedundancyMetadata
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: virtual_circuits
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the virtual_circuits resource.
    - name: bandwidthShapeName
      value: "{{ bandwidthShapeName }}"
      description: |
        The provisioned data rate of the connection. To get a list of the
        available bandwidth levels (that is, shapes), see
        [ListFastConnectProviderServiceVirtualCircuitBandwidthShapes](#/en/iaas/latest/FastConnectProviderService/ListFastConnectProviderVirtualCircuitBandwidthShapes).
        Example: \`10 Gbps\`
    - name: bgpAdminState
      value: "{{ bgpAdminState }}"
      description: |
        Set to \`ENABLED\` (the default) to activate the BGP session of the virtual circuit, set to \`DISABLED\` to deactivate the virtual circuit.
      valid_values: ['ENABLED', 'DISABLED']
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the virtual circuit.
    - name: crossConnectMappings
      description: |
        Create a \`CrossConnectMapping\` for each cross-connect or cross-connect
        group this virtual circuit will run on.
      value:
        - bgpMd5AuthKey: "{{ bgpMd5AuthKey }}"
          crossConnectOrCrossConnectGroupId: "{{ crossConnectOrCrossConnectGroupId }}"
          customerBgpPeeringIp: "{{ customerBgpPeeringIp }}"
          customerBgpPeeringIpv6: "{{ customerBgpPeeringIpv6 }}"
          oracleBgpPeeringIp: "{{ oracleBgpPeeringIp }}"
          oracleBgpPeeringIpv6: "{{ oracleBgpPeeringIpv6 }}"
          vlan: {{ vlan }}
    - name: customerBgpAsn
      value: {{ customerBgpAsn }}
      description: |
        Your BGP ASN (either public or private). Provide this value only if
        there's a BGP session that goes from your edge router to Oracle.
        Otherwise, leave this empty or null.
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
    - name: gatewayId
      value: "{{ gatewayId }}"
      description: |
        For private virtual circuits only. The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the [dynamic routing gateway (DRG)](#/en/iaas/latest/Drg)
        that this virtual circuit uses.
    - name: ipMtu
      value: "{{ ipMtu }}"
      description: |
        The layer 3 IP MTU to use with this virtual circuit.
      valid_values: ['MTU_1500', 'MTU_9000']
    - name: isBfdEnabled
      value: {{ isBfdEnabled }}
      description: |
        Set to \`true\` to enable BFD for IPv4 BGP peering, or set to \`false\` to disable BFD. If this is not set, the default is \`false\`.
      default: false
    - name: isTransportMode
      value: {{ isTransportMode }}
      description: |
        Set to \`true\` for the virtual circuit to carry only encrypted traffic, or set to \`false\` for the virtual circuit to carry unencrypted traffic. If this is not set, the default is \`false\`.
      default: false
    - name: providerName
      value: "{{ providerName }}"
      description: |
        Deprecated. Instead use \`providerServiceId\`.
        To get a list of the provider names, see
        [ListFastConnectProviderServices](#/en/iaas/latest/FastConnectProviderService/ListFastConnectProviderServices).
    - name: providerServiceId
      value: "{{ providerServiceId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the service offered by the provider (if you're connecting
        via a provider). To get a list of the available service offerings, see
        [ListFastConnectProviderServices](#/en/iaas/latest/FastConnectProviderService/ListFastConnectProviderServices).
    - name: providerServiceKeyName
      value: "{{ providerServiceKeyName }}"
      description: |
        The service key name or activation key offered by the provider (if the customer is connecting via a provider).
    - name: providerServiceName
      value: "{{ providerServiceName }}"
      description: |
        Deprecated. Instead use \`providerServiceId\`.
        To get a list of the provider names, see
        [ListFastConnectProviderServices](#/en/iaas/latest/FastConnectProviderService/ListFastConnectProviderServices).
    - name: publicPrefixes
      description: |
        For a public virtual circuit. The public IP prefixes (CIDRs) the customer wants to
        advertise across the connection.
      value:
        - cidrBlock: "{{ cidrBlock }}"
    - name: region
      value: "{{ region }}"
      description: |
        The Oracle Cloud Infrastructure region where this virtual
        circuit is located.
        Example: \`phx\`
    - name: routingPolicy
      value:
        - "{{ routingPolicy }}"
      description: |
        The routing policy sets how routing information about the Oracle cloud is shared over a public virtual circuit.
        Policies available are: \`ORACLE_SERVICE_NETWORK\`, \`REGIONAL\`, \`MARKET_LEVEL\`, and \`GLOBAL\`.
        See [Route Filtering](/iaas/Content/Network/Concepts/routingonprem.htm#route_filtering) for details.
        By default, routing information is shared for all routes in the same market.
    - name: type
      value: "{{ type }}"
      description: |
        The type of IP addresses used in this virtual circuit. PRIVATE
        means [RFC 1918](https://tools.ietf.org/html/rfc1918) addresses
        (10.0.0.0/8, 172.16/12, and 192.168/16).
      valid_values: ['PUBLIC', 'PRIVATE']
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

Updates the specified virtual circuit. This can be called by&lt;br /&gt;either the customer who owns the virtual circuit, or the&lt;br /&gt;provider (when provisioning or de-provisioning the virtual&lt;br /&gt;circuit from their end). The documentation for&lt;br /&gt;&#91;UpdateVirtualCircuitDetails&#93;(#/en/iaas/latest/requests/UpdateVirtualCircuitDetails)&lt;br /&gt;indicates who can update each property of the virtual circuit.&lt;br /&gt;&lt;br /&gt;**Important:** If the virtual circuit is working and in the&lt;br /&gt;PROVISIONED state, updating any of the network-related properties&lt;br /&gt;(such as the DRG being used, the BGP ASN, and so on) will cause the virtual&lt;br /&gt;circuit's state to switch to PROVISIONING and the related BGP&lt;br /&gt;session to go down. After Oracle re-provisions the virtual circuit,&lt;br /&gt;its state will return to PROVISIONED. Make sure you confirm that&lt;br /&gt;the associated BGP session is back up. For more information&lt;br /&gt;about the various states and how to test connectivity, see&lt;br /&gt;&#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;&lt;br /&gt;To change the list of public IP prefixes for a public virtual circuit,&lt;br /&gt;use &#91;BulkAddVirtualCircuitPublicPrefixes&#93;(#/en/iaas/latest/VirtualCircuitPublicPrefix/BulkAddVirtualCircuitPublicPrefixes)&lt;br /&gt;and&lt;br /&gt;&#91;BulkDeleteVirtualCircuitPublicPrefixes&#93;(#/en/iaas/latest/VirtualCircuitPublicPrefix/BulkDeleteVirtualCircuitPublicPrefixes).&lt;br /&gt;Updating the list of prefixes does NOT cause the BGP session to go down. However,&lt;br /&gt;Oracle must verify the customer's ownership of each added prefix before&lt;br /&gt;traffic for that prefix will flow across the virtual circuit.&lt;br /&gt;

```sql
UPDATE oci.network.virtual_circuits
SET 
bandwidthShapeName = '{{ bandwidthShapeName }}',
bgpAdminState = '{{ bgpAdminState }}',
crossConnectMappings = '{{ crossConnectMappings }}',
customerBgpAsn = {{ customerBgpAsn }},
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
gatewayId = '{{ gatewayId }}',
ipMtu = '{{ ipMtu }}',
isBfdEnabled = {{ isBfdEnabled }},
isTransportMode = {{ isTransportMode }},
providerServiceKeyName = '{{ providerServiceKeyName }}',
providerState = '{{ providerState }}',
referenceComment = '{{ referenceComment }}',
routingPolicy = '{{ routingPolicy }}'
WHERE 
virtualCircuitId = '{{ virtualCircuitId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
bandwidthShapeName,
bgpAdminState,
bgpIpv6SessionState,
bgpManagement,
bgpSessionState,
compartmentId,
crossConnectMappings,
customerBgpAsn,
definedTags,
displayName,
freeformTags,
gatewayId,
ipMtu,
isBfdEnabled,
isTransportMode,
lifecycleState,
oracleBgpAsn,
providerName,
providerServiceId,
providerServiceKeyName,
providerServiceName,
providerState,
publicPrefixes,
referenceComment,
region,
routingPolicy,
serviceType,
timeCreated,
type,
virtualCircuitRedundancyMetadata;
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

Deletes the specified virtual circuit.&lt;br /&gt;&lt;br /&gt;**Important:** If you're using FastConnect via a provider,&lt;br /&gt;make sure to also terminate the connection with&lt;br /&gt;the provider, or else the provider may continue to bill you.&lt;br /&gt;

```sql
DELETE FROM oci.network.virtual_circuits
WHERE virtualCircuitId = '{{ virtualCircuitId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="bulk_add_virtual_circuit_public_prefixes"
    values={[
        { label: 'bulk_add_virtual_circuit_public_prefixes', value: 'bulk_add_virtual_circuit_public_prefixes' },
        { label: 'bulk_delete_virtual_circuit_public_prefixes', value: 'bulk_delete_virtual_circuit_public_prefixes' },
        { label: 'change_compartment', value: 'change_compartment' }
    ]}
>
<TabItem value="bulk_add_virtual_circuit_public_prefixes">

Adds one or more customer public IP prefixes to the specified public virtual circuit.&lt;br /&gt;Use this operation (and not &#91;UpdateVirtualCircuit&#93;(#/en/iaas/latest/VirtualCircuit/UpdateVirtualCircuit))&lt;br /&gt;to add prefixes to the virtual circuit. Oracle must verify the customer's ownership&lt;br /&gt;of each prefix before traffic for that prefix will flow across the virtual circuit.&lt;br /&gt;

```sql
EXEC oci.network.virtual_circuits.bulk_add_virtual_circuit_public_prefixes 
@virtualCircuitId='{{ virtualCircuitId }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"publicPrefixes": "{{ publicPrefixes }}"
}'
;
```
</TabItem>
<TabItem value="bulk_delete_virtual_circuit_public_prefixes">

Removes one or more customer public IP prefixes from the specified public virtual circuit.&lt;br /&gt;Use this operation (and not &#91;UpdateVirtualCircuit&#93;(#/en/iaas/latest/VirtualCircuit/UpdateVirtualCircuit))&lt;br /&gt;to remove prefixes from the virtual circuit. When the virtual circuit's state switches&lt;br /&gt;back to PROVISIONED, Oracle stops advertising the specified prefixes across the connection.&lt;br /&gt;

```sql
EXEC oci.network.virtual_circuits.bulk_delete_virtual_circuit_public_prefixes 
@virtualCircuitId='{{ virtualCircuitId }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"publicPrefixes": "{{ publicPrefixes }}"
}'
;
```
</TabItem>
<TabItem value="change_compartment">

Moves a virtual circuit into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.network.virtual_circuits.change_compartment 
@virtualCircuitId='{{ virtualCircuitId }}' --required, 
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
