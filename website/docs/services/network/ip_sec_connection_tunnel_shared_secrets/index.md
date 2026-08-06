--- 
title: ip_sec_connection_tunnel_shared_secrets
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_sec_connection_tunnel_shared_secrets
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

Creates, updates, deletes, gets or lists an <code>ip_sec_connection_tunnel_shared_secrets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_sec_connection_tunnel_shared_secrets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.ip_sec_connection_tunnel_shared_secrets" /></td></tr>
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
<tr>
    <td><CopyableCode code="sharedSecret" /></td>
    <td><code>string</code></td>
    <td>The tunnel's shared secret (pre-shared key). </td>
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
    <td>Gets the specified tunnel's shared secret (pre-shared key). To get other information&lt;br /&gt;about the tunnel, use &#91;GetIPSecConnectionTunnel&#93;(#/en/iaas/latest/IPSecConnectionTunnel/GetIPSecConnectionTunnel).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ipscId"><code>ipscId</code></a>, <a href="#parameter-tunnelId"><code>tunnelId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the shared secret (pre-shared key) for the specified tunnel.&lt;br /&gt;&lt;br /&gt;**Important:** If you change the shared secret, the tunnel will go down while it's reprovisioned.&lt;br /&gt;</td>
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

Gets the specified tunnel's shared secret (pre-shared key). To get other information&lt;br /&gt;about the tunnel, use &#91;GetIPSecConnectionTunnel&#93;(#/en/iaas/latest/IPSecConnectionTunnel/GetIPSecConnectionTunnel).&lt;br /&gt;

```sql
SELECT
sharedSecret
FROM oci.network.ip_sec_connection_tunnel_shared_secrets
WHERE ipscId = '{{ ipscId }}' -- required
AND tunnelId = '{{ tunnelId }}' -- required
AND region = '{{ region }}' -- required
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

Updates the shared secret (pre-shared key) for the specified tunnel.&lt;br /&gt;&lt;br /&gt;**Important:** If you change the shared secret, the tunnel will go down while it's reprovisioned.&lt;br /&gt;

```sql
UPDATE oci.network.ip_sec_connection_tunnel_shared_secrets
SET 
sharedSecret = '{{ sharedSecret }}'
WHERE 
ipscId = '{{ ipscId }}' --required
AND tunnelId = '{{ tunnelId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
sharedSecret;
```
</TabItem>
</Tabs>
