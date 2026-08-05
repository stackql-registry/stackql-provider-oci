--- 
title: ip_sec_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_sec_connections
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

Creates, updates, deletes, gets or lists an <code>ip_sec_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_sec_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.ip_sec_connections" /></td></tr>
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

The information was retrieved.

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
    <td>The IPSec connection's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the IPSec connection.</td>
</tr>
<tr>
    <td><CopyableCode code="cpeId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the &#91;Cpe&#93;(#/en/iaas/latest/Cpe/) object.</td>
</tr>
<tr>
    <td><CopyableCode code="cpeLocalIdentifier" /></td>
    <td><code>string</code></td>
    <td>Your identifier for your CPE device. Can be either an IP address or a hostname (specifically, the fully qualified domain name (FQDN)). The type of identifier here must correspond to the value for `cpeLocalIdentifierType`.  If you don't provide a value when creating the IPSec connection, the `ipAddress` attribute for the &#91;Cpe&#93;(#/en/iaas/latest/Cpe/) object specified by `cpeId` is used as the `cpeLocalIdentifier`.  For information about why you'd provide this value, see &#91;If Your CPE Is Behind a NAT Device&#93;(/iaas/Content/Network/Tasks/overviewIPsec.htm#nat).  Example IP address: `10.0.3.3`  Example hostname: `cpe.example.com` </td>
</tr>
<tr>
    <td><CopyableCode code="cpeLocalIdentifierType" /></td>
    <td><code>string</code></td>
    <td>The type of identifier for your CPE device. The value here must correspond to the value for `cpeLocalIdentifier`.  (IP_ADDRESS, HOSTNAME)</td>
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
    <td><CopyableCode code="drgId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The IPSec connection's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="staticRoutes" /></td>
    <td><code>array</code></td>
    <td>Static routes to the CPE. The CIDR must not be a multicast address or class E address.  Used for routing a given IPSec tunnel's traffic only if the tunnel is using static routing. If you configure at least one tunnel to use static routing, then you must provide at least one valid static route. If you configure both tunnels to use BGP dynamic routing, you can provide an empty list for the static routes.  The CIDR can be either IPv4 or IPv6. IPv6 addressing is supported for all commercial and government regions. See &#91;IPv6 Addresses&#93;(/iaas/Content/Network/Concepts/ipv6.htm).  Example: `10.0.1.0/24`  Example: `2001:db8::/32` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the IPSec connection was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="transportType" /></td>
    <td><code>string</code></td>
    <td>The transport type used for the IPSec connection.  (INTERNET, FASTCONNECT) (default: INTERNET)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A connection between a DRG and CPE. This connection consists of multiple IPSec&lt;br /&gt;tunnels. Creating this connection is one of the steps required when setting up&lt;br /&gt;a Site-to-Site VPN.&lt;br /&gt;&lt;br /&gt;**Important:**  Each tunnel in an IPSec connection can use either static routing or BGP dynamic&lt;br /&gt;routing (see the &#91;IPSecConnectionTunnel&#93;(#/en/iaas/latest/IPSecConnectionTunnel/) object's&lt;br /&gt;`routing` attribute). Originally only static routing was supported and&lt;br /&gt;every IPSec connection was required to have at least one static route configured.&lt;br /&gt;To maintain backward compatibility in the API when support for BPG dynamic routing was introduced,&lt;br /&gt;the API accepts an empty list of static routes if you configure both of the IPSec tunnels to use&lt;br /&gt;BGP dynamic routing. If you switch a tunnel's routing from `BGP` to `STATIC`, you must first&lt;br /&gt;ensure that the IPSec connection is configured with at least one valid CIDR block static route.&lt;br /&gt;Oracle uses the IPSec connection's static routes when routing a tunnel's traffic *only*&lt;br /&gt;if that tunnel's `routing` attribute = `STATIC`. Otherwise the static routes are ignored.&lt;br /&gt;&lt;br /&gt;For more information about the workflow for setting up an IPSec connection, see&lt;br /&gt;&#91;Site-to-Site VPN Overview&#93;(/iaas/Content/Network/Tasks/overviewIPsec.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The IPSec connection's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the IPSec connection.</td>
</tr>
<tr>
    <td><CopyableCode code="cpeId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the &#91;Cpe&#93;(#/en/iaas/latest/Cpe/) object.</td>
</tr>
<tr>
    <td><CopyableCode code="cpeLocalIdentifier" /></td>
    <td><code>string</code></td>
    <td>Your identifier for your CPE device. Can be either an IP address or a hostname (specifically, the fully qualified domain name (FQDN)). The type of identifier here must correspond to the value for `cpeLocalIdentifierType`.  If you don't provide a value when creating the IPSec connection, the `ipAddress` attribute for the &#91;Cpe&#93;(#/en/iaas/latest/Cpe/) object specified by `cpeId` is used as the `cpeLocalIdentifier`.  For information about why you'd provide this value, see &#91;If Your CPE Is Behind a NAT Device&#93;(/iaas/Content/Network/Tasks/overviewIPsec.htm#nat).  Example IP address: `10.0.3.3`  Example hostname: `cpe.example.com` </td>
</tr>
<tr>
    <td><CopyableCode code="cpeLocalIdentifierType" /></td>
    <td><code>string</code></td>
    <td>The type of identifier for your CPE device. The value here must correspond to the value for `cpeLocalIdentifier`.  (IP_ADDRESS, HOSTNAME)</td>
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
    <td><CopyableCode code="drgId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The IPSec connection's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="staticRoutes" /></td>
    <td><code>array</code></td>
    <td>Static routes to the CPE. The CIDR must not be a multicast address or class E address.  Used for routing a given IPSec tunnel's traffic only if the tunnel is using static routing. If you configure at least one tunnel to use static routing, then you must provide at least one valid static route. If you configure both tunnels to use BGP dynamic routing, you can provide an empty list for the static routes.  The CIDR can be either IPv4 or IPv6. IPv6 addressing is supported for all commercial and government regions. See &#91;IPv6 Addresses&#93;(/iaas/Content/Network/Concepts/ipv6.htm).  Example: `10.0.1.0/24`  Example: `2001:db8::/32` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the IPSec connection was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="transportType" /></td>
    <td><code>string</code></td>
    <td>The transport type used for the IPSec connection.  (INTERNET, FASTCONNECT) (default: INTERNET)</td>
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
    <td><a href="#parameter-ipscId"><code>ipscId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified IPSec connection's basic information, including the static routes for the&lt;br /&gt;on-premises router. If you want the status of the connection (whether it's up or down), use&lt;br /&gt;&#91;GetIPSecConnectionTunnel&#93;(#/en/iaas/latest/IPSecConnectionTunnel/GetIPSecConnectionTunnel).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-drgId"><code>drgId</code></a>, <a href="#parameter-cpeId"><code>cpeId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the IPSec connections for the specified compartment. You can filter the&lt;br /&gt;results by DRG or CPE.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-drgId"><code>drgId</code></a>, <a href="#parameter-cpeId"><code>cpeId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new IPSec connection between the specified DRG and CPE. For more information, see&lt;br /&gt;&#91;Site-to-Site VPN Overview&#93;(/iaas/Content/Network/Tasks/overviewIPsec.htm).&lt;br /&gt;&lt;br /&gt;If you configure at least one tunnel to use static routing, then in the request you must provide&lt;br /&gt;at least one valid static route (you're allowed a maximum of 10). For example: 10.0.0.0/16.&lt;br /&gt;If you configure both tunnels to use BGP dynamic routing, you can provide an empty list for&lt;br /&gt;the static routes. For more information, see the important note in&lt;br /&gt;&#91;IPSecConnection&#93;(#/en/iaas/latest/IPSecConnection/).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want the&lt;br /&gt;IPSec connection to reside. Notice that the IPSec connection doesn't have to be in the same compartment&lt;br /&gt;as the DRG, CPE, or other Networking Service components. If you're not sure which compartment to&lt;br /&gt;use, put the IPSec connection in the same compartment as the DRG. For more information about&lt;br /&gt;compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the IPSec connection, otherwise a default is provided.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;After creating the IPSec connection, you need to configure your on-premises router&lt;br /&gt;with tunnel-specific information. For tunnel status and the required configuration information, see:&lt;br /&gt;&lt;br /&gt;  * &#91;IPSecConnectionTunnel&#93;(#/en/iaas/latest/IPSecConnectionTunnel/)&lt;br /&gt;  * &#91;IPSecConnectionTunnelSharedSecret&#93;(#/en/iaas/latest/IPSecConnectionTunnelSharedSecret/)&lt;br /&gt;&lt;br /&gt;For each tunnel, you need the IP address of Oracle's VPN headend and the shared secret&lt;br /&gt;(that is, the pre-shared key). For more information, see&lt;br /&gt;&#91;CPE Configuration&#93;(/iaas/Content/Network/Tasks/configuringCPE.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ipscId"><code>ipscId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified IPSec connection.&lt;br /&gt;&lt;br /&gt;To update an individual IPSec tunnel's attributes, use&lt;br /&gt;&#91;UpdateIPSecConnectionTunnel&#93;(#/en/iaas/latest/IPSecConnectionTunnel/UpdateIPSecConnectionTunnel).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ipscId"><code>ipscId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified IPSec connection. If your goal is to disable the Site-to-Site VPN between your VCN and&lt;br /&gt;on-premises network, it's easiest to simply detach the DRG but keep all the Site-to-Site VPN components intact.&lt;br /&gt;If you were to delete all the components and then later need to create an Site-to-Site VPN again, you would&lt;br /&gt;need to configure your on-premises router again with the new information returned from&lt;br /&gt;&#91;CreateIPSecConnection&#93;(#/en/iaas/latest/IPSecConnection/CreateIPSecConnection).&lt;br /&gt;&lt;br /&gt;This is an asynchronous operation. The connection's `lifecycleState` will change to TERMINATING temporarily&lt;br /&gt;until the connection is completely removed.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ipscId"><code>ipscId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves an IPSec connection into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
<tr id="parameter-ipscId">
    <td><CopyableCode code="ipscId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the IPSec connection.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-cpeId">
    <td><CopyableCode code="cpeId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the CPE.</td>
</tr>
<tr id="parameter-drgId">
    <td><CopyableCode code="drgId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG.</td>
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

Gets the specified IPSec connection's basic information, including the static routes for the&lt;br /&gt;on-premises router. If you want the status of the connection (whether it's up or down), use&lt;br /&gt;&#91;GetIPSecConnectionTunnel&#93;(#/en/iaas/latest/IPSecConnectionTunnel/GetIPSecConnectionTunnel).&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
cpeId,
cpeLocalIdentifier,
cpeLocalIdentifierType,
definedTags,
displayName,
drgId,
freeformTags,
lifecycleState,
staticRoutes,
timeCreated,
transportType
FROM oci.network.ip_sec_connections
WHERE ipscId = '{{ ipscId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the IPSec connections for the specified compartment. You can filter the&lt;br /&gt;results by DRG or CPE.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
cpeId,
cpeLocalIdentifier,
cpeLocalIdentifierType,
definedTags,
displayName,
drgId,
freeformTags,
lifecycleState,
staticRoutes,
timeCreated,
transportType
FROM oci.network.ip_sec_connections
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND drgId = '{{ drgId }}'
AND cpeId = '{{ cpeId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
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

Creates a new IPSec connection between the specified DRG and CPE. For more information, see&lt;br /&gt;&#91;Site-to-Site VPN Overview&#93;(/iaas/Content/Network/Tasks/overviewIPsec.htm).&lt;br /&gt;&lt;br /&gt;If you configure at least one tunnel to use static routing, then in the request you must provide&lt;br /&gt;at least one valid static route (you're allowed a maximum of 10). For example: 10.0.0.0/16.&lt;br /&gt;If you configure both tunnels to use BGP dynamic routing, you can provide an empty list for&lt;br /&gt;the static routes. For more information, see the important note in&lt;br /&gt;&#91;IPSecConnection&#93;(#/en/iaas/latest/IPSecConnection/).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want the&lt;br /&gt;IPSec connection to reside. Notice that the IPSec connection doesn't have to be in the same compartment&lt;br /&gt;as the DRG, CPE, or other Networking Service components. If you're not sure which compartment to&lt;br /&gt;use, put the IPSec connection in the same compartment as the DRG. For more information about&lt;br /&gt;compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the IPSec connection, otherwise a default is provided.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;After creating the IPSec connection, you need to configure your on-premises router&lt;br /&gt;with tunnel-specific information. For tunnel status and the required configuration information, see:&lt;br /&gt;&lt;br /&gt;  * &#91;IPSecConnectionTunnel&#93;(#/en/iaas/latest/IPSecConnectionTunnel/)&lt;br /&gt;  * &#91;IPSecConnectionTunnelSharedSecret&#93;(#/en/iaas/latest/IPSecConnectionTunnelSharedSecret/)&lt;br /&gt;&lt;br /&gt;For each tunnel, you need the IP address of Oracle's VPN headend and the shared secret&lt;br /&gt;(that is, the pre-shared key). For more information, see&lt;br /&gt;&#91;CPE Configuration&#93;(/iaas/Content/Network/Tasks/configuringCPE.htm).&lt;br /&gt;

```sql
INSERT INTO oci.network.ip_sec_connections (
compartmentId,
cpeId,
cpeLocalIdentifier,
cpeLocalIdentifierType,
definedTags,
displayName,
drgId,
freeformTags,
staticRoutes,
tunnelConfiguration,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ cpeId }}' /* required */,
'{{ cpeLocalIdentifier }}',
'{{ cpeLocalIdentifierType }}',
'{{ definedTags }}',
'{{ displayName }}',
'{{ drgId }}' /* required */,
'{{ freeformTags }}',
'{{ staticRoutes }}',
'{{ tunnelConfiguration }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
cpeId,
cpeLocalIdentifier,
cpeLocalIdentifierType,
definedTags,
displayName,
drgId,
freeformTags,
lifecycleState,
staticRoutes,
timeCreated,
transportType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ip_sec_connections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ip_sec_connections resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the IPSec connection.
    - name: cpeId
      value: "{{ cpeId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the [Cpe](#/en/iaas/latest/Cpe/) object.
    - name: cpeLocalIdentifier
      value: "{{ cpeLocalIdentifier }}"
      description: |
        Your identifier for your CPE device. Can be either an IP address or a hostname (specifically, the
        fully qualified domain name (FQDN)). The type of identifier you provide here must correspond
        to the value for \`cpeLocalIdentifierType\`.
        If you don't provide a value, the \`ipAddress\` attribute for the [Cpe](#/en/iaas/latest/Cpe/)
        object specified by \`cpeId\` is used as the \`cpeLocalIdentifier\`.
        For information about why you'd provide this value, see
        [If Your CPE Is Behind a NAT Device](/iaas/Content/Network/Tasks/overviewIPsec.htm#nat).
        Example IP address: \`10.0.3.3\`
        Example hostname: \`cpe.example.com\`
    - name: cpeLocalIdentifierType
      value: "{{ cpeLocalIdentifierType }}"
      description: |
        The type of identifier for your CPE device. The value you provide here must correspond to the value
        for \`cpeLocalIdentifier\`.
      valid_values: ['IP_ADDRESS', 'HOSTNAME']
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
    - name: drgId
      value: "{{ drgId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the DRG.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: staticRoutes
      value:
        - "{{ staticRoutes }}"
      description: |
        Static routes to the CPE. A static route's CIDR must not be a
        multicast address or class E address.
        Used for routing a given IPSec tunnel's traffic only if the tunnel
        is using static routing. If you configure at least one tunnel to use static routing, then
        you must provide at least one valid static route. If you configure both
        tunnels to use BGP dynamic routing, you can provide an empty list for the static routes.
        For more information, see the important note in [IPSecConnection](#/en/iaas/latest/IPSecConnection/).
        The CIDR can be either IPv4 or IPv6. IPv6 addressing is supported for all commercial and government regions.
        See [IPv6 Addresses](/iaas/Content/Network/Concepts/ipv6.htm).
        Example: \`10.0.1.0/24\`
        Example: \`2001:db8::/32\`
    - name: tunnelConfiguration
      description: |
        Information for creating the individual tunnels in the IPSec connection. You can provide a
        maximum of 2 \`tunnelConfiguration\` objects in the array (one for each of the
        two tunnels).
      value:
        - associatedVirtualCircuits: "{{ associatedVirtualCircuits }}"
          bgpSessionConfig:
            customerBgpAsn: "{{ customerBgpAsn }}"
            customerInterfaceIp: "{{ customerInterfaceIp }}"
            customerInterfaceIpv6: "{{ customerInterfaceIpv6 }}"
            oracleInterfaceIp: "{{ oracleInterfaceIp }}"
            oracleInterfaceIpv6: "{{ oracleInterfaceIpv6 }}"
          displayName: "{{ displayName }}"
          dpdConfig:
            dpdMode: "{{ dpdMode }}"
            dpdTimeoutInSec: {{ dpdTimeoutInSec }}
          drgRouteTableId: "{{ drgRouteTableId }}"
          encryptionDomainConfig:
            cpeTrafficSelector:
              - "{{ cpeTrafficSelector }}"
            oracleTrafficSelector:
              - "{{ oracleTrafficSelector }}"
          natTranslationEnabled: "{{ natTranslationEnabled }}"
          oracleInitiation: "{{ oracleInitiation }}"
          oracleTunnelIp: "{{ oracleTunnelIp }}"
          phaseOneConfig:
            authenticationAlgorithm: "{{ authenticationAlgorithm }}"
            diffieHelmanGroup: "{{ diffieHelmanGroup }}"
            encryptionAlgorithm: "{{ encryptionAlgorithm }}"
            isCustomPhaseOneConfig: {{ isCustomPhaseOneConfig }}
            lifetimeInSeconds: {{ lifetimeInSeconds }}
          phaseTwoConfig:
            authenticationAlgorithm: "{{ authenticationAlgorithm }}"
            encryptionAlgorithm: "{{ encryptionAlgorithm }}"
            isCustomPhaseTwoConfig: {{ isCustomPhaseTwoConfig }}
            isPfsEnabled: {{ isPfsEnabled }}
            lifetimeInSeconds: {{ lifetimeInSeconds }}
            pfsDhGroup: "{{ pfsDhGroup }}"
          routing: "{{ routing }}"
          sharedSecret: "{{ sharedSecret }}"
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

Updates the specified IPSec connection.&lt;br /&gt;&lt;br /&gt;To update an individual IPSec tunnel's attributes, use&lt;br /&gt;&#91;UpdateIPSecConnectionTunnel&#93;(#/en/iaas/latest/IPSecConnectionTunnel/UpdateIPSecConnectionTunnel).&lt;br /&gt;

```sql
UPDATE oci.network.ip_sec_connections
SET 
cpeLocalIdentifier = '{{ cpeLocalIdentifier }}',
cpeLocalIdentifierType = '{{ cpeLocalIdentifierType }}',
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
staticRoutes = '{{ staticRoutes }}'
WHERE 
ipscId = '{{ ipscId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
cpeId,
cpeLocalIdentifier,
cpeLocalIdentifierType,
definedTags,
displayName,
drgId,
freeformTags,
lifecycleState,
staticRoutes,
timeCreated,
transportType;
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

Deletes the specified IPSec connection. If your goal is to disable the Site-to-Site VPN between your VCN and&lt;br /&gt;on-premises network, it's easiest to simply detach the DRG but keep all the Site-to-Site VPN components intact.&lt;br /&gt;If you were to delete all the components and then later need to create an Site-to-Site VPN again, you would&lt;br /&gt;need to configure your on-premises router again with the new information returned from&lt;br /&gt;&#91;CreateIPSecConnection&#93;(#/en/iaas/latest/IPSecConnection/CreateIPSecConnection).&lt;br /&gt;&lt;br /&gt;This is an asynchronous operation. The connection's `lifecycleState` will change to TERMINATING temporarily&lt;br /&gt;until the connection is completely removed.&lt;br /&gt;

```sql
DELETE FROM oci.network.ip_sec_connections
WHERE ipscId = '{{ ipscId }}' --required
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
        { label: 'change_compartment', value: 'change_compartment' }
    ]}
>
<TabItem value="change_compartment">

Moves an IPSec connection into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.network.ip_sec_connections.change_compartment 
@ipscId='{{ ipscId }}' --required, 
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
