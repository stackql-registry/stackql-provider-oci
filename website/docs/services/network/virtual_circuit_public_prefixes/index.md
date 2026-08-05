--- 
title: virtual_circuit_public_prefixes
hide_title: false
hide_table_of_contents: false
keywords:
  - virtual_circuit_public_prefixes
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

Creates, updates, deletes, gets or lists a <code>virtual_circuit_public_prefixes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="virtual_circuit_public_prefixes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.virtual_circuit_public_prefixes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

A public IP prefix and its details. With a public virtual circuit, the customer&lt;br /&gt;specifies the customer-owned public IP prefixes to advertise across the connection.&lt;br /&gt;For more information, see &#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;

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
    <td><CopyableCode code="cidrBlock" /></td>
    <td><code>string</code></td>
    <td>Publix IP prefix (CIDR) that the customer specified.</td>
</tr>
<tr>
    <td><CopyableCode code="verificationState" /></td>
    <td><code>string</code></td>
    <td>Oracle must verify that the customer owns the public IP prefix before traffic for that prefix can flow across the virtual circuit. Verification can take a few business days. `IN_PROGRESS` means Oracle is verifying the prefix. `COMPLETED` means verification succeeded. `FAILED` means verification failed and traffic for this prefix will not flow across the connection.  (IN_PROGRESS, COMPLETED, FAILED)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-virtualCircuitId"><code>virtualCircuitId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-verificationState"><code>verificationState</code></a></td>
    <td>Lists the public IP prefixes and their details for the specified&lt;br /&gt;public virtual circuit.&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-virtualCircuitId">
    <td><CopyableCode code="virtualCircuitId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the virtual circuit.</td>
</tr>
<tr id="parameter-verificationState">
    <td><CopyableCode code="verificationState" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given verification state.  The state value is case-insensitive. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists the public IP prefixes and their details for the specified&lt;br /&gt;public virtual circuit.&lt;br /&gt;

```sql
SELECT
cidrBlock,
verificationState
FROM oci.network.virtual_circuit_public_prefixes
WHERE virtualCircuitId = '{{ virtualCircuitId }}' -- required
AND region = '{{ region }}' -- required
AND verificationState = '{{ verificationState }}'
;
```
</TabItem>
</Tabs>
