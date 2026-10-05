--- 
title: secret_bundles
hide_title: false
hide_table_of_contents: false
keywords:
  - secret_bundles
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

Creates, updates, deletes, gets or lists a <code>secret_bundles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="secret_bundles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.secrets.secret_bundles" /></td></tr>
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

A secret bundle.

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
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Customer-provided contextual metadata for the secret. </td>
</tr>
<tr>
    <td><CopyableCode code="secretBundleContent" /></td>
    <td><code>object</code></td>
    <td>The contents of the secret. (x-example: &#123;&lt;br /&gt;  "contentType": "BASE64"&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="secretId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="stages" /></td>
    <td><code>array</code></td>
    <td>A list of possible rotation states for the secret version.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the secret bundle was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfDeletion" /></td>
    <td><code>string (date-time)</code></td>
    <td>An optional property indicating when to delete the secret version, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2019-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeOfExpiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>An optional property indicating when the secret version will expire, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2019-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="versionName" /></td>
    <td><code>string</code></td>
    <td>The name of the secret version. Labels are unique across the different versions of a particular secret. </td>
</tr>
<tr>
    <td><CopyableCode code="versionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the secret.</td>
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
    <td><a href="#parameter-secretId"><code>secretId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-versionNumber"><code>versionNumber</code></a>, <a href="#parameter-secretVersionName"><code>secretVersionName</code></a>, <a href="#parameter-stage"><code>stage</code></a></td>
    <td>Gets a secret bundle that matches either the specified `stage`, `secretVersionName`, or `versionNumber` parameter.&lt;br /&gt;If none of these parameters are provided, the bundle for the secret version marked as `CURRENT` will be returned.&lt;br /&gt;</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-secretId">
    <td><CopyableCode code="secretId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the secret.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Gets a secret bundle that matches either the specified `stage`, `secretVersionName`, or `versionNumber` parameter.&lt;br /&gt;If none of these parameters are provided, the bundle for the secret version marked as `CURRENT` will be returned.&lt;br /&gt;

```sql
SELECT
metadata,
secretBundleContent,
secretId,
stages,
timeCreated,
timeOfDeletion,
timeOfExpiry,
versionName,
versionNumber
FROM oci.secrets.secret_bundles
WHERE secretId = '{{ secretId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND versionNumber = '{{ versionNumber }}'
AND secretVersionName = '{{ secretVersionName }}'
AND stage = '{{ stage }}'
;
```
</TabItem>
</Tabs>
