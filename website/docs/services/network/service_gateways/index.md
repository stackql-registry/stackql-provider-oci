--- 
title: service_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - service_gateways
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

Creates, updates, deletes, gets or lists a <code>service_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.service_gateways" /></td></tr>
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

The service gateway was retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the service gateway. </td>
</tr>
<tr>
    <td><CopyableCode code="blockTraffic" /></td>
    <td><code>boolean</code></td>
    <td>Whether the service gateway blocks all traffic through it. The default is `false`. When this is `true`, traffic is not routed to any services, regardless of route rules.  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the service gateway. </td>
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
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The service gateway's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table the service gateway is using. For information about why you would associate a route table with a service gateway, see &#91;Transit Routing: Private Access to Oracle Services&#93;(/iaas/Content/Network/Tasks/transitroutingoracleservices.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>List of the &#91;Service&#93;(#/en/iaas/latest/Service/) objects enabled for this service gateway. The list can be empty. You can enable a particular `Service` by using &#91;AttachServiceId&#93;(#/en/iaas/latest/ServiceGateway/AttachServiceId) or &#91;UpdateServiceGateway&#93;(#/en/iaas/latest/ServiceGateway/UpdateServiceGateway). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the service gateway was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN the service gateway belongs to. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Represents a router that lets your VCN privately access specific Oracle services such as Object&lt;br /&gt;Storage without exposing the VCN to the public internet. Traffic leaving the VCN and destined&lt;br /&gt;for a supported Oracle service (use the &#91;ListServices&#93;(#/en/iaas/latest/Service/ListServices) operation to&lt;br /&gt;find available service CIDR labels) is routed through the service gateway and does not traverse the internet.&lt;br /&gt;The instances in the VCN do not need to have public IP addresses nor be in a public subnet. The VCN does not&lt;br /&gt;need an internet gateway for this traffic. For more information, see&lt;br /&gt;&#91;Access to Oracle Services: Service Gateway&#93;(/iaas/Content/Network/Tasks/servicegateway.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the service gateway. </td>
</tr>
<tr>
    <td><CopyableCode code="blockTraffic" /></td>
    <td><code>boolean</code></td>
    <td>Whether the service gateway blocks all traffic through it. The default is `false`. When this is `true`, traffic is not routed to any services, regardless of route rules.  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the service gateway. </td>
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
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The service gateway's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table the service gateway is using. For information about why you would associate a route table with a service gateway, see &#91;Transit Routing: Private Access to Oracle Services&#93;(/iaas/Content/Network/Tasks/transitroutingoracleservices.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>List of the &#91;Service&#93;(#/en/iaas/latest/Service/) objects enabled for this service gateway. The list can be empty. You can enable a particular `Service` by using &#91;AttachServiceId&#93;(#/en/iaas/latest/ServiceGateway/AttachServiceId) or &#91;UpdateServiceGateway&#93;(#/en/iaas/latest/ServiceGateway/UpdateServiceGateway). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the service gateway was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN the service gateway belongs to. </td>
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
    <td><a href="#parameter-serviceGatewayId"><code>serviceGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified service gateway's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the service gateways in the specified compartment. You may optionally specify a VCN OCID&lt;br /&gt;to filter the results by VCN.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#attach"><CopyableCode code="attach" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-serviceGatewayId"><code>serviceGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Adds the specified &#91;Service&#93;(#/en/iaas/latest/Service/) to the list of enabled&lt;br /&gt;`Service` objects for the specified gateway. You must also set up a route rule with the&lt;br /&gt;`cidrBlock` of the `Service` as the rule's destination and the service gateway as the rule's&lt;br /&gt;target. See &#91;Route Table&#93;(#/en/iaas/latest/RouteTable/).&lt;br /&gt;&lt;br /&gt;**Note:** The `AttachServiceId` operation is an easy way to add an individual `Service` to&lt;br /&gt;the service gateway. Compare it with&lt;br /&gt;&#91;UpdateServiceGateway&#93;(#/en/iaas/latest/ServiceGateway/UpdateServiceGateway), which replaces&lt;br /&gt;the entire existing list of enabled `Service` objects with the list that you provide in the&lt;br /&gt;`Update` call.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-services"><code>services</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new service gateway in the specified compartment.&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want&lt;br /&gt;the service gateway to reside. For more information about compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;For information about OCIDs, see &#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the service gateway, otherwise a default is provided.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;Use the &#91;ListServices&#93;(#/en/iaas/latest/Service/ListServices) operation to find service CIDR labels&lt;br /&gt;available in the region.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-serviceGatewayId"><code>serviceGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified service gateway. The information you provide overwrites the existing&lt;br /&gt;attributes of the gateway.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-serviceGatewayId"><code>serviceGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified service gateway. There must not be a route table that lists the service&lt;br /&gt;gateway as a target.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceGatewayId"><code>serviceGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a service gateway into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#detach_service_id"><CopyableCode code="detach_service_id" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceGatewayId"><code>serviceGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Removes the specified &#91;Service&#93;(#/en/iaas/latest/Service/) from the list of enabled&lt;br /&gt;`Service` objects for the specified gateway. You do not need to remove any route&lt;br /&gt;rules that specify this `Service` object's `cidrBlock` as the destination CIDR. However, consider&lt;br /&gt;removing the rules if your intent is to permanently disable use of the `Service` through this&lt;br /&gt;service gateway.&lt;br /&gt;&lt;br /&gt;**Note:** The `DetachServiceId` operation is an easy way to remove an individual `Service` from&lt;br /&gt;the service gateway. Compare it with&lt;br /&gt;&#91;UpdateServiceGateway&#93;(#/en/iaas/latest/ServiceGateway/UpdateServiceGateway), which replaces&lt;br /&gt;the entire existing list of enabled `Service` objects with the list that you provide in the&lt;br /&gt;`Update` call. `UpdateServiceGateway` also lets you block all traffic through the service&lt;br /&gt;gateway without having to remove each of the individual `Service` objects.&lt;br /&gt;</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-serviceGatewayId">
    <td><CopyableCode code="serviceGatewayId" /></td>
    <td><code>string</code></td>
    <td>The service gateway's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given lifecycle state. The state value is case-insensitive. </td>
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

Gets the specified service gateway's information.

```sql
SELECT
id,
blockTraffic,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
routeTableId,
services,
timeCreated,
vcnId
FROM oci.network.service_gateways
WHERE serviceGatewayId = '{{ serviceGatewayId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the service gateways in the specified compartment. You may optionally specify a VCN OCID&lt;br /&gt;to filter the results by VCN.&lt;br /&gt;

```sql
SELECT
id,
blockTraffic,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
routeTableId,
services,
timeCreated,
vcnId
FROM oci.network.service_gateways
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND vcnId = '{{ vcnId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="attach"
    values={[
        { label: 'attach', value: 'attach' },
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="attach">

Adds the specified &#91;Service&#93;(#/en/iaas/latest/Service/) to the list of enabled&lt;br /&gt;`Service` objects for the specified gateway. You must also set up a route rule with the&lt;br /&gt;`cidrBlock` of the `Service` as the rule's destination and the service gateway as the rule's&lt;br /&gt;target. See &#91;Route Table&#93;(#/en/iaas/latest/RouteTable/).&lt;br /&gt;&lt;br /&gt;**Note:** The `AttachServiceId` operation is an easy way to add an individual `Service` to&lt;br /&gt;the service gateway. Compare it with&lt;br /&gt;&#91;UpdateServiceGateway&#93;(#/en/iaas/latest/ServiceGateway/UpdateServiceGateway), which replaces&lt;br /&gt;the entire existing list of enabled `Service` objects with the list that you provide in the&lt;br /&gt;`Update` call.&lt;br /&gt;

```sql
INSERT INTO oci.network.service_gateways (
serviceId,
serviceGatewayId,
region,
if-match
)
SELECT 
'{{ serviceId }}' /* required */,
'{{ serviceGatewayId }}',
'{{ region }}',
'{{ if-match }}'
RETURNING
id,
blockTraffic,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
routeTableId,
services,
timeCreated,
vcnId
;
```
</TabItem>
<TabItem value="create">

Creates a new service gateway in the specified compartment.&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want&lt;br /&gt;the service gateway to reside. For more information about compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;For information about OCIDs, see &#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the service gateway, otherwise a default is provided.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;Use the &#91;ListServices&#93;(#/en/iaas/latest/Service/ListServices) operation to find service CIDR labels&lt;br /&gt;available in the region.&lt;br /&gt;

```sql
INSERT INTO oci.network.service_gateways (
compartmentId,
definedTags,
displayName,
freeformTags,
routeTableId,
services,
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
'{{ services }}' /* required */,
'{{ vcnId }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
blockTraffic,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
routeTableId,
services,
timeCreated,
vcnId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_gateways
  props:
    - name: serviceGatewayId
      value: "{{ serviceGatewayId }}"
      description: Required parameter for the service_gateways resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_gateways resource.
    - name: serviceId
      value: "{{ serviceId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the [Service](#/en/iaas/latest/Service/).
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment to contain the service gateway.
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
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the route table the service gateway will use.
        If you don't specify a route table here, the service gateway is created without an associated route
        table. The Networking service does NOT automatically associate the attached VCN's default route table
        with the service gateway.
        For information about why you would associate a route table with a service gateway, see
        [Transit Routing: Private Access to Oracle Services](/iaas/Content/Network/Tasks/transitroutingoracleservices.htm).
    - name: services
      description: |
        List of the OCIDs of the [Service](#/en/iaas/latest/Service/) objects to
        enable for the service gateway. This list can be empty if you don't want to enable any
        \`Service\` objects when you create the gateway. You can enable a \`Service\`
        object later by using either [AttachServiceId](#/en/iaas/latest/ServiceGateway/AttachServiceId)
        or [UpdateServiceGateway](#/en/iaas/latest/ServiceGateway/UpdateServiceGateway).
        For each enabled \`Service\`, make sure there's a route rule with the \`Service\` object's \`cidrBlock\`
        as the rule's destination and the service gateway as the rule's target. See
        [Route Table](#/en/iaas/latest/RouteTable/).
      value:
        - serviceId: "{{ serviceId }}"
    - name: vcnId
      value: "{{ vcnId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the VCN.
    - name: if-match
      value: "{{ if-match }}"
      description: For optimistic concurrency control. In the PUT or DELETE call for a resource, set the \`if-match\` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. 
      description: For optimistic concurrency control. In the PUT or DELETE call for a resource, set the \`if-match\` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. 
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

Updates the specified service gateway. The information you provide overwrites the existing&lt;br /&gt;attributes of the gateway.&lt;br /&gt;

```sql
UPDATE oci.network.service_gateways
SET 
blockTraffic = {{ blockTraffic }},
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
routeTableId = '{{ routeTableId }}',
services = '{{ services }}'
WHERE 
serviceGatewayId = '{{ serviceGatewayId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
blockTraffic,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
routeTableId,
services,
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

Deletes the specified service gateway. There must not be a route table that lists the service&lt;br /&gt;gateway as a target.&lt;br /&gt;

```sql
DELETE FROM oci.network.service_gateways
WHERE serviceGatewayId = '{{ serviceGatewayId }}' --required
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
        { label: 'detach_service_id', value: 'detach_service_id' }
    ]}
>
<TabItem value="change_compartment">

Moves a service gateway into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.network.service_gateways.change_compartment 
@serviceGatewayId='{{ serviceGatewayId }}' --required, 
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
<TabItem value="detach_service_id">

Removes the specified &#91;Service&#93;(#/en/iaas/latest/Service/) from the list of enabled&lt;br /&gt;`Service` objects for the specified gateway. You do not need to remove any route&lt;br /&gt;rules that specify this `Service` object's `cidrBlock` as the destination CIDR. However, consider&lt;br /&gt;removing the rules if your intent is to permanently disable use of the `Service` through this&lt;br /&gt;service gateway.&lt;br /&gt;&lt;br /&gt;**Note:** The `DetachServiceId` operation is an easy way to remove an individual `Service` from&lt;br /&gt;the service gateway. Compare it with&lt;br /&gt;&#91;UpdateServiceGateway&#93;(#/en/iaas/latest/ServiceGateway/UpdateServiceGateway), which replaces&lt;br /&gt;the entire existing list of enabled `Service` objects with the list that you provide in the&lt;br /&gt;`Update` call. `UpdateServiceGateway` also lets you block all traffic through the service&lt;br /&gt;gateway without having to remove each of the individual `Service` objects.&lt;br /&gt;

```sql
EXEC oci.network.service_gateways.detach_service_id 
@serviceGatewayId='{{ serviceGatewayId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}' 
@@json=
'{
"serviceId": "{{ serviceId }}"
}'
;
```
</TabItem>
</Tabs>
