--- 
title: load_balancers
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancers
  - load_balancer
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

Creates, updates, deletes, gets or lists a <code>load_balancers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="load_balancers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.load_balancer.load_balancers" /></td></tr>
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

The configuration information is being retrieved.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="backendSets" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="certificates" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment containing the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. It does not have to be unique, and it is changeable.  Example: `example_load_balancer` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="hostnames" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ipAddresses" /></td>
    <td><code>array</code></td>
    <td>An array of IP addresses. </td>
</tr>
<tr>
    <td><CopyableCode code="ipMode" /></td>
    <td><code>string</code></td>
    <td>Whether the load balancer has an IPv4 or IPv6 IP address.    If "IPV4", the service assigns an IPv4 address and the load balancer supports IPv4 traffic.    If "IPV6", the service assigns an IPv6 address and the load balancer supports IPv6 traffic.    Example: "ipMode":"IPV6"  (IPV4, IPV6) (default: IPV4)</td>
</tr>
<tr>
    <td><CopyableCode code="isDeleteProtectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the load balancer has delete protection enabled.  If "true", the loadbalancer will be protected against deletion if configured to accept traffic.  If "false", the loadbalancer will not be protected against deletion.  Delete protection is not be enabled unless this field is set to "true". Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="isPrivate" /></td>
    <td><code>boolean</code></td>
    <td>Whether the load balancer has a VCN-local (private) IP address.  If "true", the service assigns a private IP address to the load balancer.  If "false", the service assigns a public IP address to the load balancer.  A public load balancer is accessible from the internet, depending on your VCN's &#91;security list rules&#93;(/Content/Network/Concepts/securitylists.htm). For more information about public and private load balancers, see &#91;How Load Balancing Works&#93;(/Content/Balance/Concepts/balanceoverview.htm#how-load-balancing-works).  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="isRequestIdEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the load balancer has the Request Id feature enabled for HTTP listeners.  If "true", the load balancer will attach a unique request id header to every request passed through from the load balancer to load balancer backends. This same request id header also will be added to the response the lb received from the backend handling the request before the load balancer returns the response to the requestor. The name of the unique request id header is set the by value of requestIdHeader.  If "false", the loadbalancer not add this unique request id header to either the request passed through to the load balancer backends nor to the reponse returned to the user.  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the load balancer.  (CREATING, FAILED, ACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="listeners" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="networkSecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>An array of NSG &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) associated with the load balancer.  During the load balancer's creation, the service adds the new load balancer to the specified NSGs.  The benefits of associating the load balancer with NSGs include:  *  NSGs define network security rules to govern ingress and egress traffic for the load balancer.  *  The network security rules of other resources can reference the NSGs associated with the load balancer    to ensure access.  Example: &#91;"ocid1.nsg.oc1.phx.unique_ID"&#93; </td>
</tr>
<tr>
    <td><CopyableCode code="pathRouteSets" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="requestIdHeader" /></td>
    <td><code>string</code></td>
    <td>If isRequestIdEnabled is true then this field contains the name of the header field that contains the unique request id that is attached to every request from the load balancer to the load balancer backends and to every response from the load balancer.  If a request to the load balancer already contains a header with same name as specified in requestIdHeader then the load balancer will not change the value of that field.  If this field is set to "" this field defaults to X-Request-Id.  (pattern: &lt;code&gt;^(X-(-?&#91;a-zA-Z_0-9&#93;)*)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="routingPolicies" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ruleSets" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Extended Defined tags for ZPR for this resource. Each key is predefined and scoped to a namespace.  Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value":"42","mode":"audit", "usagetype" : "zpr"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="shapeDetails" /></td>
    <td><code>object</code></td>
    <td>The configuration details to update load balancer to a different shape.  (x-example: &#123;&lt;br /&gt;  "minimumBandwidthInMbps": 150,&lt;br /&gt;  "maximumBandwidthInMbps": 1500&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="shapeName" /></td>
    <td><code>string</code></td>
    <td>A template that determines the total pre-provisioned bandwidth (ingress plus egress). To get a list of available shapes, use the &#91;ListShapes&#93;(#/en/loadbalancer/20170115/LoadBalancerShape/ListShapes) operation.  Example: `100Mbps` </td>
</tr>
<tr>
    <td><CopyableCode code="sslCipherSuites" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>An array of subnet &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). System tags can be viewed by users, but can only be created by the system.  Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the load balancer was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The properties that define a load balancer. For more information, see&lt;br /&gt;&#91;Managing a Load Balancer&#93;(/Content/Balance/Tasks/managingloadbalancer.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;For information about endpoints and signing API requests, see&lt;br /&gt;&#91;About the API&#93;(/Content/API/Concepts/usingapi.htm). For information about available SDKs and tools, see&lt;br /&gt;&#91;SDKS and Other Tools&#93;(/Content/API/Concepts/sdks.htm).&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="backendSets" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="certificates" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment containing the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. It does not have to be unique, and it is changeable.  Example: `example_load_balancer` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="hostnames" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ipAddresses" /></td>
    <td><code>array</code></td>
    <td>An array of IP addresses. </td>
</tr>
<tr>
    <td><CopyableCode code="ipMode" /></td>
    <td><code>string</code></td>
    <td>Whether the load balancer has an IPv4 or IPv6 IP address.    If "IPV4", the service assigns an IPv4 address and the load balancer supports IPv4 traffic.    If "IPV6", the service assigns an IPv6 address and the load balancer supports IPv6 traffic.    Example: "ipMode":"IPV6"  (IPV4, IPV6) (default: IPV4)</td>
</tr>
<tr>
    <td><CopyableCode code="isDeleteProtectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the load balancer has delete protection enabled.  If "true", the loadbalancer will be protected against deletion if configured to accept traffic.  If "false", the loadbalancer will not be protected against deletion.  Delete protection is not be enabled unless this field is set to "true". Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="isPrivate" /></td>
    <td><code>boolean</code></td>
    <td>Whether the load balancer has a VCN-local (private) IP address.  If "true", the service assigns a private IP address to the load balancer.  If "false", the service assigns a public IP address to the load balancer.  A public load balancer is accessible from the internet, depending on your VCN's &#91;security list rules&#93;(/Content/Network/Concepts/securitylists.htm). For more information about public and private load balancers, see &#91;How Load Balancing Works&#93;(/Content/Balance/Concepts/balanceoverview.htm#how-load-balancing-works).  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="isRequestIdEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the load balancer has the Request Id feature enabled for HTTP listeners.  If "true", the load balancer will attach a unique request id header to every request passed through from the load balancer to load balancer backends. This same request id header also will be added to the response the lb received from the backend handling the request before the load balancer returns the response to the requestor. The name of the unique request id header is set the by value of requestIdHeader.  If "false", the loadbalancer not add this unique request id header to either the request passed through to the load balancer backends nor to the reponse returned to the user.  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the load balancer.  (CREATING, FAILED, ACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="listeners" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="networkSecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>An array of NSG &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) associated with the load balancer.  During the load balancer's creation, the service adds the new load balancer to the specified NSGs.  The benefits of associating the load balancer with NSGs include:  *  NSGs define network security rules to govern ingress and egress traffic for the load balancer.  *  The network security rules of other resources can reference the NSGs associated with the load balancer    to ensure access.  Example: &#91;"ocid1.nsg.oc1.phx.unique_ID"&#93; </td>
</tr>
<tr>
    <td><CopyableCode code="pathRouteSets" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="requestIdHeader" /></td>
    <td><code>string</code></td>
    <td>If isRequestIdEnabled is true then this field contains the name of the header field that contains the unique request id that is attached to every request from the load balancer to the load balancer backends and to every response from the load balancer.  If a request to the load balancer already contains a header with same name as specified in requestIdHeader then the load balancer will not change the value of that field.  If this field is set to "" this field defaults to X-Request-Id.  (pattern: &lt;code&gt;^(X-(-?&#91;a-zA-Z_0-9&#93;)*)?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="routingPolicies" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ruleSets" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Extended Defined tags for ZPR for this resource. Each key is predefined and scoped to a namespace.  Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value":"42","mode":"audit", "usagetype" : "zpr"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="shapeDetails" /></td>
    <td><code>object</code></td>
    <td>The configuration details to update load balancer to a different shape.  (x-example: &#123;&lt;br /&gt;  "minimumBandwidthInMbps": 150,&lt;br /&gt;  "maximumBandwidthInMbps": 1500&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="shapeName" /></td>
    <td><code>string</code></td>
    <td>A template that determines the total pre-provisioned bandwidth (ingress plus egress). To get a list of available shapes, use the &#91;ListShapes&#93;(#/en/loadbalancer/20170115/LoadBalancerShape/ListShapes) operation.  Example: `100Mbps` </td>
</tr>
<tr>
    <td><CopyableCode code="sslCipherSuites" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>An array of subnet &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). System tags can be viewed by users, but can only be created by the system.  Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the load balancer was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified load balancer's configuration information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-detail"><code>detail</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists all load balancers in the specified compartment.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-shapeName"><code>shapeName</code></a>, <a href="#parameter-subnetIds"><code>subnetIds</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new load balancer in the specified compartment. For general information about load balancers,&lt;br /&gt;see &#91;Overview of the Load Balancing Service&#93;(/Content/Balance/Concepts/balanceoverview.htm).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the OCID of the compartment where you want&lt;br /&gt;the load balancer to reside. Notice that the load balancer doesn't have to be in the same compartment as the VCN&lt;br /&gt;or backend set. If you're not sure which compartment to use, put the load balancer in the same compartment as the VCN.&lt;br /&gt;For information about access control and compartments, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/Content/Identity/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;You must specify a display name for the load balancer. It does not have to be unique, and you can change it.&lt;br /&gt;&lt;br /&gt;For information about Availability Domains, see&lt;br /&gt;&#91;Regions and Availability Domains&#93;(/Content/General/Concepts/regions.htm).&lt;br /&gt;To get a list of Availability Domains, use the `ListAvailabilityDomains` operation&lt;br /&gt;in the Identity and Access Management Service API.&lt;br /&gt;&lt;br /&gt;All Oracle Cloud Infrastructure resources, including load balancers, get an Oracle-assigned,&lt;br /&gt;unique ID called an Oracle Cloud Identifier (OCID). When you create a resource, you can find its OCID&lt;br /&gt;in the response. You can also retrieve a resource's OCID by using a List API operation on that resource type,&lt;br /&gt;or by viewing the resource in the Console. Fore more information, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's state will temporarily be PROVISIONING. Before using the&lt;br /&gt;object, first make sure its state has changed to RUNNING.&lt;br /&gt;&lt;br /&gt;When you create a load balancer, the system assigns an IP address.&lt;br /&gt;To get the IP address, use the &#91;GetLoadBalancer&#93;(#/en/loadbalancer/20170115/LoadBalancer/GetLoadBalancer) operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Updates a load balancer's configuration.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Stops a load balancer and removes it from service.</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a load balancer into a different compartment within the same tenancy. For information about moving resources&lt;br /&gt;between compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment containing the load balancers to list.</td>
</tr>
<tr id="parameter-loadBalancerId">
    <td><CopyableCode code="loadBalancerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the load balancer to move.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-detail">
    <td><CopyableCode code="detail" /></td>
    <td><code>string</code></td>
    <td>The level of detail to return for each result. Can be `full` or `simple`.  Example: `full` </td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given display name exactly.  Example: `example_load_balancer` </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given lifecycle state.  Example: `SUCCEEDED` </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `3` </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by.  You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive. </td>
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

Gets the specified load balancer's configuration information.

```sql
SELECT
id,
backendSets,
certificates,
compartmentId,
definedTags,
displayName,
freeformTags,
hostnames,
ipAddresses,
ipMode,
isDeleteProtectionEnabled,
isPrivate,
isRequestIdEnabled,
lifecycleState,
listeners,
networkSecurityGroupIds,
pathRouteSets,
requestIdHeader,
routingPolicies,
ruleSets,
securityAttributes,
shapeDetails,
shapeName,
sslCipherSuites,
subnetIds,
systemTags,
timeCreated
FROM oci.load_balancer.load_balancers
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists all load balancers in the specified compartment.

```sql
SELECT
id,
backendSets,
certificates,
compartmentId,
definedTags,
displayName,
freeformTags,
hostnames,
ipAddresses,
ipMode,
isDeleteProtectionEnabled,
isPrivate,
isRequestIdEnabled,
lifecycleState,
listeners,
networkSecurityGroupIds,
pathRouteSets,
requestIdHeader,
routingPolicies,
ruleSets,
securityAttributes,
shapeDetails,
shapeName,
sslCipherSuites,
subnetIds,
systemTags,
timeCreated
FROM oci.load_balancer.load_balancers
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND detail = '{{ detail }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND displayName = '{{ displayName }}'
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

Creates a new load balancer in the specified compartment. For general information about load balancers,&lt;br /&gt;see &#91;Overview of the Load Balancing Service&#93;(/Content/Balance/Concepts/balanceoverview.htm).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the OCID of the compartment where you want&lt;br /&gt;the load balancer to reside. Notice that the load balancer doesn't have to be in the same compartment as the VCN&lt;br /&gt;or backend set. If you're not sure which compartment to use, put the load balancer in the same compartment as the VCN.&lt;br /&gt;For information about access control and compartments, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/Content/Identity/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;You must specify a display name for the load balancer. It does not have to be unique, and you can change it.&lt;br /&gt;&lt;br /&gt;For information about Availability Domains, see&lt;br /&gt;&#91;Regions and Availability Domains&#93;(/Content/General/Concepts/regions.htm).&lt;br /&gt;To get a list of Availability Domains, use the `ListAvailabilityDomains` operation&lt;br /&gt;in the Identity and Access Management Service API.&lt;br /&gt;&lt;br /&gt;All Oracle Cloud Infrastructure resources, including load balancers, get an Oracle-assigned,&lt;br /&gt;unique ID called an Oracle Cloud Identifier (OCID). When you create a resource, you can find its OCID&lt;br /&gt;in the response. You can also retrieve a resource's OCID by using a List API operation on that resource type,&lt;br /&gt;or by viewing the resource in the Console. Fore more information, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's state will temporarily be PROVISIONING. Before using the&lt;br /&gt;object, first make sure its state has changed to RUNNING.&lt;br /&gt;&lt;br /&gt;When you create a load balancer, the system assigns an IP address.&lt;br /&gt;To get the IP address, use the &#91;GetLoadBalancer&#93;(#/en/loadbalancer/20170115/LoadBalancer/GetLoadBalancer) operation.&lt;br /&gt;

```sql
INSERT INTO oci.load_balancer.load_balancers (
backendSets,
certificates,
compartmentId,
definedTags,
displayName,
freeformTags,
hostnames,
ipMode,
ipv6SubnetCidr,
isDeleteProtectionEnabled,
isPrivate,
isRequestIdEnabled,
listeners,
networkSecurityGroupIds,
pathRouteSets,
requestIdHeader,
reservedIps,
ruleSets,
securityAttributes,
shapeDetails,
shapeName,
sslCipherSuites,
subnetIds,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ backendSets }}',
'{{ certificates }}',
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ freeformTags }}',
'{{ hostnames }}',
'{{ ipMode }}',
'{{ ipv6SubnetCidr }}',
{{ isDeleteProtectionEnabled }},
{{ isPrivate }},
{{ isRequestIdEnabled }},
'{{ listeners }}',
'{{ networkSecurityGroupIds }}',
'{{ pathRouteSets }}',
'{{ requestIdHeader }}',
'{{ reservedIps }}',
'{{ ruleSets }}',
'{{ securityAttributes }}',
'{{ shapeDetails }}',
'{{ shapeName }}' /* required */,
'{{ sslCipherSuites }}',
'{{ subnetIds }}' /* required */,
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: load_balancers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the load_balancers resource.
    - name: backendSets
      value: "{{ backendSets }}"
    - name: certificates
      value: "{{ certificates }}"
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment in which to create the load balancer.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. It does not have to be unique, and it is changeable.
        Avoid entering confidential information.
        Example: \`example_load_balancer\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: hostnames
      value: "{{ hostnames }}"
    - name: ipMode
      value: "{{ ipMode }}"
      description: |
        Whether the load balancer has an IPv4 or IPv6 IP address.
        If "IPV4", the service assigns an IPv4 address and the load balancer supports IPv4 traffic.
        If "IPV6", the service assigns an IPv6 address and the load balancer supports IPv6 traffic.
        Example: "ipMode":"IPV6"
      valid_values: ['IPV4', 'IPV6']
      default: IPV4
    - name: ipv6SubnetCidr
      value: "{{ ipv6SubnetCidr }}"
      description: |
        Applies to IPV6 LB creation only.
        Used to disambiguate which subnet prefix should be used to create an IPv6 LB.
        Example: "2002::1234:abcd:ffff:c0a8:101/64"
    - name: isDeleteProtectionEnabled
      value: {{ isDeleteProtectionEnabled }}
      description: |
        Whether or not the load balancer has delete protection enabled.
        If "true", the loadbalancer will be protected against deletion if configured to accept traffic.
        If "false", the loadbalancer will not be protected against deletion.
        Delete protection will not be enabled unless a value of "true" is provided.
        Example: \`true\`
      default: false
    - name: isPrivate
      value: {{ isPrivate }}
      description: |
        Whether the load balancer has a VCN-local (private) IP address.
        If "true", the service assigns a private IP address to the load balancer.
        If "false", the service assigns a public IP address to the load balancer.
        A public load balancer is accessible from the internet, depending on your VCN's
        [security list rules](/Content/Network/Concepts/securitylists.htm). For more information about public and
        private load balancers, see [How Load Balancing Works](/Content/Balance/Concepts/balanceoverview.htm#how-load-balancing-works).
        Example: \`true\`
      default: false
    - name: isRequestIdEnabled
      value: {{ isRequestIdEnabled }}
      description: |
        Whether or not the load balancer has the Request Id feature enabled for HTTP listeners.
        If "true", the load balancer will attach a unique request id header to every request
        passed through from the load balancer to load balancer backends. This same request id
        header also will be added to the response the lb received from the backend handling
        the request before the load balancer returns the response to the requestor. The name
        of the unique request id header is set the by value of requestIdHeader.
        If "false", the loadbalancer not add this unique request id header to either the request
        passed through to the load balancer backends nor to the reponse returned to the user.
        New load balancers have the Request Id feature disabled unless isRequestIdEnabled is set to true.
        Example: \`true\`
      default: false
    - name: listeners
      value: "{{ listeners }}"
    - name: networkSecurityGroupIds
      value:
        - "{{ networkSecurityGroupIds }}"
      description: |
        An array of NSG [OCIDs](/Content/General/Concepts/identifiers.htm) associated with this load balancer.
        During the load balancer's creation, the service adds the new load balancer to the specified NSGs.
        The benefits of using NSGs with the load balancer include:
        *  NSGs define network security rules to govern ingress and egress traffic for the load balancer.
        *  The network security rules of other resources can reference the NSGs associated with the load balancer
        to ensure access.
        Example: \`["ocid1.nsg.oc1.phx.unique_ID"]\`
    - name: pathRouteSets
      value: "{{ pathRouteSets }}"
    - name: requestIdHeader
      value: "{{ requestIdHeader }}"
      description: |
        If isRequestIdEnabled is true then this field contains the name of the header field
        that contains the unique request id that is attached to every request from
        the load balancer to the load balancer backends and to every response from the load
        balancer.
        If a request to the load balancer already contains a header with same name as specified
        in requestIdHeader then the load balancer will not change the value of that field.
        If isRequestIdEnabled is false then this field is ignored.
        If this field is not set or is set to "" then this field defaults to X-Request-Id
        **Notes:**
        * Unless the header name is "" it must start with "X-" prefix.
        * Setting the header name to "" will set it to the default: X-Request-Id.
      default: X-Request-Id
    - name: reservedIps
      description: |
        An array of reserved Ips.
      value:
        - id: "{{ id }}"
    - name: ruleSets
      value: "{{ ruleSets }}"
    - name: securityAttributes
      value: "{{ securityAttributes }}"
      description: |
        Extended Defined tags for ZPR for this resource. Each key is predefined and scoped to a namespace.
        Example: \`{"Oracle-ZPR": {"MaxEgressCount": {"value":"42","mode":"audit", "usagetype" : "zpr"}}}\`
    - name: shapeDetails
      description: |
        The configuration details to update load balancer to a different shape.
      value:
        maximumBandwidthInMbps: {{ maximumBandwidthInMbps }}
        minimumBandwidthInMbps: {{ minimumBandwidthInMbps }}
    - name: shapeName
      value: "{{ shapeName }}"
      description: |
        A template that determines the total pre-provisioned bandwidth (ingress plus egress).
        To get a list of available shapes, use the [ListShapes](#/en/loadbalancer/20170115/LoadBalancerShape/ListShapes)
        operation.
        Example: \`flexible\`
        NOTE: After May 2023, Fixed shapes - 10Mbps, 100Mbps, 400Mbps, 8000Mbps would be deprecated and only shape
        allowed would be \`Flexible\`
    - name: sslCipherSuites
      value: "{{ sslCipherSuites }}"
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
      description: |
        An array of subnet [OCIDs](/Content/General/Concepts/identifiers.htm).
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
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

Updates a load balancer's configuration.

```sql
UPDATE oci.load_balancer.load_balancers
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
ipMode = '{{ ipMode }}',
isDeleteProtectionEnabled = {{ isDeleteProtectionEnabled }},
isRequestIdEnabled = {{ isRequestIdEnabled }},
requestIdHeader = '{{ requestIdHeader }}',
securityAttributes = '{{ securityAttributes }}'
WHERE 
loadBalancerId = '{{ loadBalancerId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND opc-retry-token = '{{ opc-retry-token}}';
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

Stops a load balancer and removes it from service.

```sql
DELETE FROM oci.load_balancer.load_balancers
WHERE loadBalancerId = '{{ loadBalancerId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_compartment"
    values={[
        { label: 'change_compartment', value: 'change_compartment' }
    ]}
>
<TabItem value="change_compartment">

Moves a load balancer into a different compartment within the same tenancy. For information about moving resources&lt;br /&gt;between compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.load_balancer.load_balancers.change_compartment 
@loadBalancerId='{{ loadBalancerId }}' --required, 
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
