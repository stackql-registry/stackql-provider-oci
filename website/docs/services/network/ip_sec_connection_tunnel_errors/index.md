--- 
title: ip_sec_connection_tunnel_errors
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_sec_connection_tunnel_errors
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

Creates, updates, deletes, gets or lists an <code>ip_sec_connection_tunnel_errors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_sec_connection_tunnel_errors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.ip_sec_connection_tunnel_errors" /></td></tr>
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

The tunnel error was successfully returned.

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
    <td>Unique ID generated for each error report.</td>
</tr>
<tr>
    <td><CopyableCode code="errorCode" /></td>
    <td><code>string</code></td>
    <td>Unique code describes the error type.</td>
</tr>
<tr>
    <td><CopyableCode code="errorDescription" /></td>
    <td><code>string</code></td>
    <td>A detailed description of the error.</td>
</tr>
<tr>
    <td><CopyableCode code="ociResourcesLink" /></td>
    <td><code>string</code></td>
    <td>Link to more Oracle resources or relevant documentation.</td>
</tr>
<tr>
    <td><CopyableCode code="solution" /></td>
    <td><code>string</code></td>
    <td>Resolution for the error.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the error occurred.</td>
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
    <td>Gets the identified error for the specified IPSec tunnel ID.&lt;br /&gt;</td>
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

Gets the identified error for the specified IPSec tunnel ID.&lt;br /&gt;

```sql
SELECT
id,
errorCode,
errorDescription,
ociResourcesLink,
solution,
timestamp
FROM oci.network.ip_sec_connection_tunnel_errors
WHERE ipscId = '{{ ipscId }}' -- required
AND tunnelId = '{{ tunnelId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
