--- 
title: cross_connect_status
hide_title: false
hide_table_of_contents: false
keywords:
  - cross_connect_status
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

Creates, updates, deletes, gets or lists a <code>cross_connect_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cross_connect_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.cross_connect_status" /></td></tr>
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

The cross-connect's status was retrieved.

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
    <td><CopyableCode code="crossConnectId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the cross-connect.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionStatus" /></td>
    <td><code>string</code></td>
    <td>Encryption status of this cross connect.  Possible values: * **UP:** Traffic is encrypted over this cross-connect * **DOWN:** Traffic is not encrypted over this cross-connect * **CIPHER_MISMATCH:** The MACsec encryption cipher doesn't match the cipher on the CPE * **CKN_MISMATCH:** The MACsec Connectivity association Key Name (CKN) doesn't match the CKN on the CPE * **CAK_MISMATCH:** The MACsec Connectivity Association Key (CAK) doesn't match the CAK on the CPE  (UP, DOWN, CIPHER_MISMATCH, CKN_MISMATCH, CAK_MISMATCH)</td>
</tr>
<tr>
    <td><CopyableCode code="interfaceState" /></td>
    <td><code>string</code></td>
    <td>Indicates whether Oracle's side of the interface is up or down. (UP, DOWN)</td>
</tr>
<tr>
    <td><CopyableCode code="lightLevelIndBm" /></td>
    <td><code>number (float)</code></td>
    <td>The light level of the cross-connect (in dBm).  Example: `14.0` </td>
</tr>
<tr>
    <td><CopyableCode code="lightLevelIndicator" /></td>
    <td><code>string</code></td>
    <td>Status indicator corresponding to the light level.    * **NO_LIGHT:** No measurable light   * **LOW_WARN:** There's measurable light but it's too low   * **HIGH_WARN:** Light level is too high   * **BAD:** There's measurable light but the signal-to-noise ratio is bad   * **GOOD:** Good light level  (NO_LIGHT, LOW_WARN, HIGH_WARN, BAD, GOOD)</td>
</tr>
<tr>
    <td><CopyableCode code="lightLevelsInDBm" /></td>
    <td><code>array</code></td>
    <td>The light levels of the cross-connect (in dBm).  Example: `&#91;14.0, -14.0, 2.1, -10.1&#93;` </td>
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
    <td><a href="#parameter-crossConnectId"><code>crossConnectId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the status of the specified cross-connect.&lt;br /&gt;</td>
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
<tr id="parameter-crossConnectId">
    <td><CopyableCode code="crossConnectId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the cross-connect.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
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

Gets the status of the specified cross-connect.&lt;br /&gt;

```sql
SELECT
crossConnectId,
encryptionStatus,
interfaceState,
lightLevelIndBm,
lightLevelIndicator,
lightLevelsInDBm
FROM oci.network.cross_connect_status
WHERE crossConnectId = '{{ crossConnectId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
