--- 
title: tunnel_cpe_device_config_contents
hide_title: false
hide_table_of_contents: false
keywords:
  - tunnel_cpe_device_config_contents
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

Creates, updates, deletes, gets or lists a <code>tunnel_cpe_device_config_contents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tunnel_cpe_device_config_contents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.tunnel_cpe_device_config_contents" /></td></tr>
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
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Renders a set of CPE configuration content for the specified IPSec tunnel. The content helps a&lt;br /&gt;network engineer configure the actual CPE device (for example, a hardware router) that the specified&lt;br /&gt;IPSec tunnel terminates on.&lt;br /&gt;&lt;br /&gt;The rendered content is specific to the type of CPE device (for example, Cisco ASA). Therefore the&lt;br /&gt;&#91;Cpe&#93;(#/en/iaas/latest/Cpe/) used by the specified &#91;IPSecConnection&#93;(#/en/iaas/latest/IPSecConnection/)&lt;br /&gt;must have the CPE's device type specified by the `cpeDeviceShapeId` attribute. The content&lt;br /&gt;optionally includes answers that the customer provides (see&lt;br /&gt;&#91;UpdateTunnelCpeDeviceConfig&#93;(#/en/iaas/latest/TunnelCpeDeviceConfig/UpdateTunnelCpeDeviceConfig)),&lt;br /&gt;merged with a template of other information specific to the CPE device type.&lt;br /&gt;&lt;br /&gt;The operation returns configuration information for only the specified IPSec tunnel.&lt;br /&gt;Here are other similar operations:&lt;br /&gt;&lt;br /&gt;  * &#91;GetIpsecCpeDeviceConfigContent&#93;(#/en/iaas/latest/IPSecConnection/GetIpsecCpeDeviceConfigContent)&lt;br /&gt;  returns CPE configuration content for all tunnels in a single IPSec connection.&lt;br /&gt;  * &#91;GetCpeDeviceConfigContent&#93;(#/en/iaas/latest/Cpe/GetCpeDeviceConfigContent)&lt;br /&gt;  returns CPE configuration content for *all* IPSec connections that use a specific CPE.&lt;br /&gt;</td>
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
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
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

Renders a set of CPE configuration content for the specified IPSec tunnel. The content helps a&lt;br /&gt;network engineer configure the actual CPE device (for example, a hardware router) that the specified&lt;br /&gt;IPSec tunnel terminates on.&lt;br /&gt;&lt;br /&gt;The rendered content is specific to the type of CPE device (for example, Cisco ASA). Therefore the&lt;br /&gt;&#91;Cpe&#93;(#/en/iaas/latest/Cpe/) used by the specified &#91;IPSecConnection&#93;(#/en/iaas/latest/IPSecConnection/)&lt;br /&gt;must have the CPE's device type specified by the `cpeDeviceShapeId` attribute. The content&lt;br /&gt;optionally includes answers that the customer provides (see&lt;br /&gt;&#91;UpdateTunnelCpeDeviceConfig&#93;(#/en/iaas/latest/TunnelCpeDeviceConfig/UpdateTunnelCpeDeviceConfig)),&lt;br /&gt;merged with a template of other information specific to the CPE device type.&lt;br /&gt;&lt;br /&gt;The operation returns configuration information for only the specified IPSec tunnel.&lt;br /&gt;Here are other similar operations:&lt;br /&gt;&lt;br /&gt;  * &#91;GetIpsecCpeDeviceConfigContent&#93;(#/en/iaas/latest/IPSecConnection/GetIpsecCpeDeviceConfigContent)&lt;br /&gt;  returns CPE configuration content for all tunnels in a single IPSec connection.&lt;br /&gt;  * &#91;GetCpeDeviceConfigContent&#93;(#/en/iaas/latest/Cpe/GetCpeDeviceConfigContent)&lt;br /&gt;  returns CPE configuration content for *all* IPSec connections that use a specific CPE.&lt;br /&gt;

```sql
SELECT
*
FROM oci.network.tunnel_cpe_device_config_contents
WHERE ipscId = '{{ ipscId }}' -- required
AND tunnelId = '{{ tunnelId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
