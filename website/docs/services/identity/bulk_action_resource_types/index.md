--- 
title: bulk_action_resource_types
hide_title: false
hide_table_of_contents: false
keywords:
  - bulk_action_resource_types
  - identity
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

Creates, updates, deletes, gets or lists a <code>bulk_action_resource_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bulk_action_resource_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.bulk_action_resource_types" /></td></tr>
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

The list is being retrieved.

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
    <td>The unique name of the resource-type. </td>
</tr>
<tr>
    <td><CopyableCode code="metadataKeys" /></td>
    <td><code>array</code></td>
    <td>List of metadata keys required to identify a specific resource. Some resource-types require information besides an OCID to identify a specific resource. For example, the resource-type `buckets` requires metadataKeys &#91;"namespaceName", "bucketName"&#93; to identify a specific bucket. The required information to identify a resource is in the API documentation for the resource-type. For example, the required information for `buckets` is found in the &#91;DeleteBucket API&#93;(#/en/objectstorage/20160918/Bucket/DeleteBucket). </td>
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
    <td><a href="#parameter-bulkActionType"><code>bulkActionType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Lists the resource-types supported by compartment bulk actions. Use this API to help you provide the correct&lt;br /&gt;resource-type information to the &#91;BulkDeleteResources&#93;(#/en/identity/20160918/Compartment/BulkDeleteResources/)&lt;br /&gt;and &#91;BulkMoveResources&#93;(#/en/identity/20160918/Compartment/BulkMoveResources/) operations. The returned list of&lt;br /&gt;resource-types provides the appropriate resource-type names to use with the bulk action operations along with&lt;br /&gt;the type of identifying information you'll need to provide for each resource-type. Most resource-types just&lt;br /&gt;require an &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) to identify a specific resource, but some resource-types,&lt;br /&gt;such as buckets, require you to provide other identifying information.&lt;br /&gt;</td>
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
<tr id="parameter-bulkActionType">
    <td><CopyableCode code="bulkActionType" /></td>
    <td><code>string</code></td>
    <td>The type of bulk action. </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in a paginated "List" call. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The value of the `opc-next-page` response header from the previous "List" call. </td>
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

Lists the resource-types supported by compartment bulk actions. Use this API to help you provide the correct&lt;br /&gt;resource-type information to the &#91;BulkDeleteResources&#93;(#/en/identity/20160918/Compartment/BulkDeleteResources/)&lt;br /&gt;and &#91;BulkMoveResources&#93;(#/en/identity/20160918/Compartment/BulkMoveResources/) operations. The returned list of&lt;br /&gt;resource-types provides the appropriate resource-type names to use with the bulk action operations along with&lt;br /&gt;the type of identifying information you'll need to provide for each resource-type. Most resource-types just&lt;br /&gt;require an &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) to identify a specific resource, but some resource-types,&lt;br /&gt;such as buckets, require you to provide other identifying information.&lt;br /&gt;

```sql
SELECT
name,
metadataKeys
FROM oci.identity.bulk_action_resource_types
WHERE bulkActionType = '{{ bulkActionType }}' -- required
AND region = '{{ region }}' -- required
AND page = '{{ page }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>
