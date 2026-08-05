--- 
title: tunnel_cpe_device_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - tunnel_cpe_device_configs
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

Creates, updates, deletes, gets or lists a <code>tunnel_cpe_device_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tunnel_cpe_device_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.tunnel_cpe_device_configs" /></td></tr>
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
    <td><CopyableCode code="tunnelCpeDeviceConfigParameter" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the set of CPE configuration answers for the tunnel, which the customer provided in&lt;br /&gt;&#91;UpdateTunnelCpeDeviceConfig&#93;(#/en/iaas/latest/TunnelCpeDeviceConfig/UpdateTunnelCpeDeviceConfig).&lt;br /&gt;To get the full set of content for the tunnel (any answers merged with the template of other&lt;br /&gt;information specific to the CPE device type), use&lt;br /&gt;&#91;GetTunnelCpeDeviceConfigContent&#93;(#/en/iaas/latest/TunnelCpeDeviceConfig/GetTunnelCpeDeviceConfigContent).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ipscId"><code>ipscId</code></a>, <a href="#parameter-tunnelId"><code>tunnelId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates or updates the set of CPE configuration answers for the specified tunnel.&lt;br /&gt;The answers correlate to the questions that are specific to the CPE device type (see the&lt;br /&gt;`parameters` attribute of &#91;CpeDeviceShapeDetail&#93;(#/en/iaas/latest/CpeDeviceShapeDetail/)).&lt;br /&gt;</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
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

Gets the set of CPE configuration answers for the tunnel, which the customer provided in&lt;br /&gt;&#91;UpdateTunnelCpeDeviceConfig&#93;(#/en/iaas/latest/TunnelCpeDeviceConfig/UpdateTunnelCpeDeviceConfig).&lt;br /&gt;To get the full set of content for the tunnel (any answers merged with the template of other&lt;br /&gt;information specific to the CPE device type), use&lt;br /&gt;&#91;GetTunnelCpeDeviceConfigContent&#93;(#/en/iaas/latest/TunnelCpeDeviceConfig/GetTunnelCpeDeviceConfigContent).&lt;br /&gt;

```sql
SELECT
tunnelCpeDeviceConfigParameter
FROM oci.network.tunnel_cpe_device_configs
WHERE ipscId = '{{ ipscId }}' -- required
AND tunnelId = '{{ tunnelId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
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

Creates or updates the set of CPE configuration answers for the specified tunnel.&lt;br /&gt;The answers correlate to the questions that are specific to the CPE device type (see the&lt;br /&gt;`parameters` attribute of &#91;CpeDeviceShapeDetail&#93;(#/en/iaas/latest/CpeDeviceShapeDetail/)).&lt;br /&gt;

```sql
UPDATE oci.network.tunnel_cpe_device_configs
SET 
tunnelCpeDeviceConfig = '{{ tunnelCpeDeviceConfig }}'
WHERE 
ipscId = '{{ ipscId }}' --required
AND tunnelId = '{{ tunnelId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-retry-token = '{{ opc-retry-token}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
tunnelCpeDeviceConfigParameter;
```
</TabItem>
</Tabs>
