--- 
title: secretbundles
hide_title: false
hide_table_of_contents: false
keywords:
  - secretbundles
  - secrets
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

Creates, updates, deletes, gets or lists a <code>secretbundles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="secretbundles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.secrets.secretbundles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#get_secret_bundle_by_name"><CopyableCode code="get_secret_bundle_by_name" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-secretName"><code>secretName</code></a>, <a href="#parameter-vaultId"><code>vaultId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-versionNumber"><code>versionNumber</code></a>, <a href="#parameter-secretVersionName"><code>secretVersionName</code></a>, <a href="#parameter-stage"><code>stage</code></a></td>
    <td>Gets a secret bundle by secret name and vault ID, and secret version that matches either the specified `stage`, `secretVersionName`, or `versionNumber` parameter.&lt;br /&gt;If none of these parameters are provided, the bundle for the secret version marked as `CURRENT` is returned.&lt;br /&gt;</td>
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
<tr id="parameter-secretName">
    <td><CopyableCode code="secretName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the secret. Secret names are unique within a vault. Secret names are case-sensitive.</td>
</tr>
<tr id="parameter-vaultId">
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the vault that contains the secret.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request.</td>
</tr>
<tr id="parameter-secretVersionName">
    <td><CopyableCode code="secretVersionName" /></td>
    <td><code>string</code></td>
    <td>The name of the secret. (This might be referred to as the name of the secret version. Names are unique across the different versions of a secret.)</td>
</tr>
<tr id="parameter-stage">
    <td><CopyableCode code="stage" /></td>
    <td><code>string</code></td>
    <td>The rotation state of the secret version.</td>
</tr>
<tr id="parameter-versionNumber">
    <td><CopyableCode code="versionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the secret.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="get_secret_bundle_by_name"
    values={[
        { label: 'get_secret_bundle_by_name', value: 'get_secret_bundle_by_name' }
    ]}
>
<TabItem value="get_secret_bundle_by_name">

Gets a secret bundle by secret name and vault ID, and secret version that matches either the specified `stage`, `secretVersionName`, or `versionNumber` parameter.&lt;br /&gt;If none of these parameters are provided, the bundle for the secret version marked as `CURRENT` is returned.&lt;br /&gt;

```sql
EXEC oci.secrets.secretbundles.get_secret_bundle_by_name 
@secretName='{{ secretName }}' --required, 
@vaultId='{{ vaultId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@versionNumber='{{ versionNumber }}', 
@secretVersionName='{{ secretVersionName }}', 
@stage='{{ stage }}'
;
```
</TabItem>
</Tabs>
