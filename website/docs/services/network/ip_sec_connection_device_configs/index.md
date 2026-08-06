--- 
title: ip_sec_connection_device_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_sec_connection_device_configs
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

Creates, updates, deletes, gets or lists an <code>ip_sec_connection_device_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_sec_connection_device_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.ip_sec_connection_device_configs" /></td></tr>
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

The configuration information was retrieved.

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
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the IPSec connection was created.</td>
</tr>
<tr>
    <td><CopyableCode code="tunnels" /></td>
    <td><code>array</code></td>
    <td>Two &#91;TunnelConfig&#93;(#/en/iaas/latest/TunnelConfig/) objects.</td>
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
    <td>Deprecated. To get tunnel information, instead use:&lt;br /&gt;&lt;br /&gt;* &#91;GetIPSecConnectionTunnel&#93;(#/en/iaas/latest/IPSecConnectionTunnel/GetIPSecConnectionTunnel)&lt;br /&gt;* &#91;GetIPSecConnectionTunnelSharedSecret&#93;(#/en/iaas/latest/IPSecConnectionTunnelSharedSecret/GetIPSecConnectionTunnelSharedSecret)&lt;br /&gt;</td>
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

Deprecated. To get tunnel information, instead use:&lt;br /&gt;&lt;br /&gt;* &#91;GetIPSecConnectionTunnel&#93;(#/en/iaas/latest/IPSecConnectionTunnel/GetIPSecConnectionTunnel)&lt;br /&gt;* &#91;GetIPSecConnectionTunnelSharedSecret&#93;(#/en/iaas/latest/IPSecConnectionTunnelSharedSecret/GetIPSecConnectionTunnelSharedSecret)&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
timeCreated,
tunnels
FROM oci.network.ip_sec_connection_device_configs
WHERE ipscId = '{{ ipscId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
