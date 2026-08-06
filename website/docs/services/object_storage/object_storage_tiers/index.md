--- 
title: object_storage_tiers
hide_title: false
hide_table_of_contents: false
keywords:
  - object_storage_tiers
  - object_storage
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

Creates, updates, deletes, gets or lists an <code>object_storage_tiers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="object_storage_tiers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.object_storage.object_storage_tiers" /></td></tr>
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
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-objectName"><code>objectName</code></a>, <a href="#parameter-storageTier"><code>storageTier</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Changes the storage tier of the object specified by the objectName parameter.&lt;br /&gt;</td>
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
<tr id="parameter-bucketName">
    <td><CopyableCode code="bucketName" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket. Avoid entering confidential information. Example: `my-new-bucket1` </td>
</tr>
<tr id="parameter-namespaceName">
    <td><CopyableCode code="namespaceName" /></td>
    <td><code>string</code></td>
    <td>The Object Storage namespace used for the request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-opc-client-request-id">
    <td><CopyableCode code="opc-client-request-id" /></td>
    <td><code>string</code></td>
    <td>The client request ID for tracing.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Changes the storage tier of the object specified by the objectName parameter.&lt;br /&gt;

```sql
UPDATE oci.object_storage.object_storage_tiers
SET 
objectName = '{{ objectName }}',
storageTier = '{{ storageTier }}',
versionId = '{{ versionId }}'
WHERE 
namespaceName = '{{ namespaceName }}' --required
AND bucketName = '{{ bucketName }}' --required
AND region = '{{ region }}' --required
AND objectName = '{{ objectName }}' --required
AND storageTier = '{{ storageTier }}' --required
AND opc-client-request-id = '{{ opc-client-request-id}}';
```
</TabItem>
</Tabs>
