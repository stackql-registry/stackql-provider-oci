--- 
title: fast_connect_provider_service_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - fast_connect_provider_service_keys
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

Creates, updates, deletes, gets or lists a <code>fast_connect_provider_service_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fast_connect_provider_service_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.fast_connect_provider_service_keys" /></td></tr>
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

The provider service key name is being retrieved.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The service key that the provider gives you when you set up a virtual circuit connection from the provider to Oracle Cloud Infrastructure. Use this value as the `providerServiceKeyName` query parameter for &#91;GetFastConnectProviderServiceKey&#93;(#/en/iaas/latest/FastConnectProviderServiceKey/GetFastConnectProviderServiceKey). </td>
</tr>
<tr>
    <td><CopyableCode code="bandwidthShapeName" /></td>
    <td><code>string</code></td>
    <td>The provisioned data rate of the connection. To get a list of the available bandwidth levels (that is, shapes), see &#91;ListFastConnectProviderServiceVirtualCircuitBandwidthShapes&#93;(#/en/iaas/latest/FastConnectProviderService/ListFastConnectProviderVirtualCircuitBandwidthShapes).  Example: `10 Gbps` </td>
</tr>
<tr>
    <td><CopyableCode code="peeringLocation" /></td>
    <td><code>string</code></td>
    <td>The provider's peering location.</td>
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
    <td><a href="#parameter-providerServiceId"><code>providerServiceId</code></a>, <a href="#parameter-providerServiceKeyName"><code>providerServiceKeyName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified provider service key's information. Use this operation to validate a&lt;br /&gt;provider service key. An invalid key returns a 404 error.&lt;br /&gt;</td>
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
<tr id="parameter-providerServiceId">
    <td><CopyableCode code="providerServiceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the provider service.</td>
</tr>
<tr id="parameter-providerServiceKeyName">
    <td><CopyableCode code="providerServiceKeyName" /></td>
    <td><code>string</code></td>
    <td>The provider service key that the provider gives you when you set up a virtual circuit connection from the provider to Oracle Cloud Infrastructure. You can set up that connection and get your provider service key at the provider's website or portal. For the portal location, see the `description` attribute of the &#91;FastConnectProviderService&#93;(#/en/iaas/latest/FastConnectProviderService/). </td>
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

Gets the specified provider service key's information. Use this operation to validate a&lt;br /&gt;provider service key. An invalid key returns a 404 error.&lt;br /&gt;

```sql
SELECT
name,
bandwidthShapeName,
peeringLocation
FROM oci.network.fast_connect_provider_service_keys
WHERE providerServiceId = '{{ providerServiceId }}' -- required
AND providerServiceKeyName = '{{ providerServiceKeyName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
