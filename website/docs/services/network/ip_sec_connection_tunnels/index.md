--- 
title: ip_sec_connection_tunnels
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_sec_connection_tunnels
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

Creates, updates, deletes, gets or lists an <code>ip_sec_connection_tunnels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_sec_connection_tunnels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.ip_sec_connection_tunnels" /></td></tr>
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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the tunnel.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedVirtualCircuits" /></td>
    <td><code>array</code></td>
    <td>The list of virtual circuit &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)s over which your network can reach this tunnel. </td>
</tr>
<tr>
    <td><CopyableCode code="bgpSessionInfo" /></td>
    <td><code>object</code></td>
    <td>Information for establishing a BGP session for the IPSec tunnel.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the tunnel. </td>
</tr>
<tr>
    <td><CopyableCode code="cpeIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the CPE device's VPN headend.  Example: `203.0.113.22` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="dpdMode" /></td>
    <td><code>string</code></td>
    <td>Dead peer detection (DPD) mode set on the Oracle side of the connection. This mode sets whether Oracle can only respond to a request from the CPE device to start DPD, or both respond to and initiate requests.  (INITIATE_AND_RESPOND, RESPOND_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="dpdTimeoutInSec" /></td>
    <td><code>integer</code></td>
    <td>DPD timeout in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionDomainConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration information used by the encryption domain policy.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The tunnel's lifecycle state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="natTranslationEnabled" /></td>
    <td><code>string</code></td>
    <td>By default (the `AUTO` setting), IKE sends packets with a source and destination port set to 500, and when it detects that the port used to forward packets has changed (most likely because a NAT device is between the CPE device and the Oracle VPN headend) it will try to negotiate the use of NAT-T.  The `ENABLED` option sets the IKE protocol to use port 4500 instead of 500 and forces encapsulating traffic with the ESP protocol inside UDP packets.  The `DISABLED` option directs IKE to completely refuse to negotiate NAT-T even if it senses there may be a NAT device in use.   .  (ENABLED, DISABLED, AUTO)</td>
</tr>
<tr>
    <td><CopyableCode code="oracleCanInitiate" /></td>
    <td><code>string</code></td>
    <td>Indicates whether Oracle can only respond to a request to start an IPSec tunnel from the CPE device, or both respond to and initiate requests.  (INITIATOR_OR_RESPONDER, RESPONDER_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="phaseOneDetails" /></td>
    <td><code>object</code></td>
    <td>IPSec tunnel details specific to ISAKMP phase one.</td>
</tr>
<tr>
    <td><CopyableCode code="phaseTwoDetails" /></td>
    <td><code>object</code></td>
    <td>IPsec tunnel detail information specific to phase two.</td>
</tr>
<tr>
    <td><CopyableCode code="routing" /></td>
    <td><code>string</code></td>
    <td>The type of routing used for this tunnel (BGP dynamic routing, static routing, or policy-based routing).  (BGP, STATIC, POLICY)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the tunnel based on IPSec protocol characteristics. (UP, DOWN, DOWN_FOR_MAINTENANCE, PARTIAL_UP)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the IPSec tunnel was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeStatusUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the status of the IPSec tunnel last changed, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vpnIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the Oracle VPN headend for the connection.  Example: `203.0.113.21` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Information about a single IPSec tunnel in an IPSec connection. This object does not include the tunnel's&lt;br /&gt;shared secret (pre-shared key), which is found in the&lt;br /&gt;&#91;IPSecConnectionTunnelSharedSecret&#93;(#/en/iaas/latest/IPSecConnectionTunnelSharedSecret/) object.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the tunnel.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedVirtualCircuits" /></td>
    <td><code>array</code></td>
    <td>The list of virtual circuit &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)s over which your network can reach this tunnel. </td>
</tr>
<tr>
    <td><CopyableCode code="bgpSessionInfo" /></td>
    <td><code>object</code></td>
    <td>Information for establishing a BGP session for the IPSec tunnel.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the tunnel. </td>
</tr>
<tr>
    <td><CopyableCode code="cpeIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the CPE device's VPN headend.  Example: `203.0.113.22` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="dpdMode" /></td>
    <td><code>string</code></td>
    <td>Dead peer detection (DPD) mode set on the Oracle side of the connection. This mode sets whether Oracle can only respond to a request from the CPE device to start DPD, or both respond to and initiate requests.  (INITIATE_AND_RESPOND, RESPOND_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="dpdTimeoutInSec" /></td>
    <td><code>integer</code></td>
    <td>DPD timeout in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionDomainConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration information used by the encryption domain policy.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The tunnel's lifecycle state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="natTranslationEnabled" /></td>
    <td><code>string</code></td>
    <td>By default (the `AUTO` setting), IKE sends packets with a source and destination port set to 500, and when it detects that the port used to forward packets has changed (most likely because a NAT device is between the CPE device and the Oracle VPN headend) it will try to negotiate the use of NAT-T.  The `ENABLED` option sets the IKE protocol to use port 4500 instead of 500 and forces encapsulating traffic with the ESP protocol inside UDP packets.  The `DISABLED` option directs IKE to completely refuse to negotiate NAT-T even if it senses there may be a NAT device in use.   .  (ENABLED, DISABLED, AUTO)</td>
</tr>
<tr>
    <td><CopyableCode code="oracleCanInitiate" /></td>
    <td><code>string</code></td>
    <td>Indicates whether Oracle can only respond to a request to start an IPSec tunnel from the CPE device, or both respond to and initiate requests.  (INITIATOR_OR_RESPONDER, RESPONDER_ONLY)</td>
</tr>
<tr>
    <td><CopyableCode code="phaseOneDetails" /></td>
    <td><code>object</code></td>
    <td>IPSec tunnel details specific to ISAKMP phase one.</td>
</tr>
<tr>
    <td><CopyableCode code="phaseTwoDetails" /></td>
    <td><code>object</code></td>
    <td>IPsec tunnel detail information specific to phase two.</td>
</tr>
<tr>
    <td><CopyableCode code="routing" /></td>
    <td><code>string</code></td>
    <td>The type of routing used for this tunnel (BGP dynamic routing, static routing, or policy-based routing).  (BGP, STATIC, POLICY)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the tunnel based on IPSec protocol characteristics. (UP, DOWN, DOWN_FOR_MAINTENANCE, PARTIAL_UP)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the IPSec tunnel was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeStatusUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the status of the IPSec tunnel last changed, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vpnIp" /></td>
    <td><code>string</code></td>
    <td>The IP address of the Oracle VPN headend for the connection.  Example: `203.0.113.21` </td>
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
    <td><a href="#parameter-ipscId"><code>ipscId</code></a>, <a href="#parameter-tunnelId"><code>tunnelId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified tunnel's information. The resulting object does not include the tunnel's&lt;br /&gt;shared secret (pre-shared key). To retrieve that, use&lt;br /&gt;&#91;GetIPSecConnectionTunnelSharedSecret&#93;(#/en/iaas/latest/IPSecConnectionTunnelSharedSecret/GetIPSecConnectionTunnelSharedSecret).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ipscId"><code>ipscId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the tunnel information for the specified IPSec connection.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ipscId"><code>ipscId</code></a>, <a href="#parameter-tunnelId"><code>tunnelId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified tunnel. This operation lets you change tunnel attributes such as the&lt;br /&gt;routing type (BGP dynamic routing or static routing). Here are some important notes:&lt;br /&gt;&lt;br /&gt;  * If you change the tunnel's routing type or BGP session configuration, the tunnel will go&lt;br /&gt;    down while it's reprovisioned.&lt;br /&gt;&lt;br /&gt;  * If you want to switch the tunnel's `routing` from `STATIC` to `BGP`, make sure the tunnel's&lt;br /&gt;    BGP session configuration attributes have been set (&#91;bgpSessionConfig&#93;(#/en/iaas/latest/datatypes/BgpSessionInfo)).&lt;br /&gt;&lt;br /&gt;  * If you want to switch the tunnel's `routing` from `BGP` to `STATIC`, make sure the&lt;br /&gt;    &#91;IPSecConnection&#93;(#/en/iaas/latest/IPSecConnection/) already has at least one valid CIDR&lt;br /&gt;    static route.&lt;br /&gt;</td>
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
<tr id="parameter-ipscId">
    <td><CopyableCode code="ipscId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the IPSec connection.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-tunnelId">
    <td><CopyableCode code="tunnelId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the tunnel.</td>
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

Gets the specified tunnel's information. The resulting object does not include the tunnel's&lt;br /&gt;shared secret (pre-shared key). To retrieve that, use&lt;br /&gt;&#91;GetIPSecConnectionTunnelSharedSecret&#93;(#/en/iaas/latest/IPSecConnectionTunnelSharedSecret/GetIPSecConnectionTunnelSharedSecret).&lt;br /&gt;

```sql
SELECT
id,
associatedVirtualCircuits,
bgpSessionInfo,
compartmentId,
cpeIp,
displayName,
dpdMode,
dpdTimeoutInSec,
encryptionDomainConfig,
lifecycleState,
natTranslationEnabled,
oracleCanInitiate,
phaseOneDetails,
phaseTwoDetails,
routing,
status,
timeCreated,
timeStatusUpdated,
vpnIp
FROM oci.network.ip_sec_connection_tunnels
WHERE ipscId = '{{ ipscId }}' -- required
AND tunnelId = '{{ tunnelId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the tunnel information for the specified IPSec connection.&lt;br /&gt;

```sql
SELECT
id,
associatedVirtualCircuits,
bgpSessionInfo,
compartmentId,
cpeIp,
displayName,
dpdMode,
dpdTimeoutInSec,
encryptionDomainConfig,
lifecycleState,
natTranslationEnabled,
oracleCanInitiate,
phaseOneDetails,
phaseTwoDetails,
routing,
status,
timeCreated,
timeStatusUpdated,
vpnIp
FROM oci.network.ip_sec_connection_tunnels
WHERE ipscId = '{{ ipscId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
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

Updates the specified tunnel. This operation lets you change tunnel attributes such as the&lt;br /&gt;routing type (BGP dynamic routing or static routing). Here are some important notes:&lt;br /&gt;&lt;br /&gt;  * If you change the tunnel's routing type or BGP session configuration, the tunnel will go&lt;br /&gt;    down while it's reprovisioned.&lt;br /&gt;&lt;br /&gt;  * If you want to switch the tunnel's `routing` from `STATIC` to `BGP`, make sure the tunnel's&lt;br /&gt;    BGP session configuration attributes have been set (&#91;bgpSessionConfig&#93;(#/en/iaas/latest/datatypes/BgpSessionInfo)).&lt;br /&gt;&lt;br /&gt;  * If you want to switch the tunnel's `routing` from `BGP` to `STATIC`, make sure the&lt;br /&gt;    &#91;IPSecConnection&#93;(#/en/iaas/latest/IPSecConnection/) already has at least one valid CIDR&lt;br /&gt;    static route.&lt;br /&gt;

```sql
UPDATE oci.network.ip_sec_connection_tunnels
SET 
bgpSessionConfig = '{{ bgpSessionConfig }}',
displayName = '{{ displayName }}',
dpdConfig = '{{ dpdConfig }}',
encryptionDomainConfig = '{{ encryptionDomainConfig }}',
natTranslationEnabled = '{{ natTranslationEnabled }}',
oracleInitiation = '{{ oracleInitiation }}',
phaseOneConfig = '{{ phaseOneConfig }}',
phaseTwoConfig = '{{ phaseTwoConfig }}',
routing = '{{ routing }}'
WHERE 
ipscId = '{{ ipscId }}' --required
AND tunnelId = '{{ tunnelId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
associatedVirtualCircuits,
bgpSessionInfo,
compartmentId,
cpeIp,
displayName,
dpdMode,
dpdTimeoutInSec,
encryptionDomainConfig,
lifecycleState,
natTranslationEnabled,
oracleCanInitiate,
phaseOneDetails,
phaseTwoDetails,
routing,
status,
timeCreated,
timeStatusUpdated,
vpnIp;
```
</TabItem>
</Tabs>
