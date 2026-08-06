--- 
title: namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - namespaces
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

Creates, updates, deletes, gets or lists a <code>namespaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="namespaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.object_storage.namespaces" /></td></tr>
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

The requesting user's Object Storage namespace string.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td>Each Oracle Cloud Infrastructure tenant is assigned one unique and uneditable Object Storage namespace. The namespace&lt;br /&gt;is a system-generated string assigned during account creation. For some older tenancies, the namespace string may be&lt;br /&gt;the tenancy name in all lower-case letters. You cannot edit a namespace.&lt;br /&gt;&lt;br /&gt;GetNamespace returns the name of the Object Storage namespace for the user making the request.&lt;br /&gt;If an optional compartmentId query parameter is provided, GetNamespace returns the namespace name of the corresponding&lt;br /&gt;tenancy, provided the user has access to it.&lt;br /&gt;</td>
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
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>This is an optional field representing either the tenancy &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) or the compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) within the tenancy whose Object Storage namespace is to be retrieved. </td>
</tr>
<tr id="parameter-opc-client-request-id">
    <td><CopyableCode code="opc-client-request-id" /></td>
    <td><code>string</code></td>
    <td>The client request ID for tracing.</td>
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

Each Oracle Cloud Infrastructure tenant is assigned one unique and uneditable Object Storage namespace. The namespace&lt;br /&gt;is a system-generated string assigned during account creation. For some older tenancies, the namespace string may be&lt;br /&gt;the tenancy name in all lower-case letters. You cannot edit a namespace.&lt;br /&gt;&lt;br /&gt;GetNamespace returns the name of the Object Storage namespace for the user making the request.&lt;br /&gt;If an optional compartmentId query parameter is provided, GetNamespace returns the namespace name of the corresponding&lt;br /&gt;tenancy, provided the user has access to it.&lt;br /&gt;

```sql
SELECT
*
FROM oci.object_storage.namespaces
WHERE region = '{{ region }}' -- required
AND opc-client-request-id = '{{ opc-client-request-id }}'
AND compartmentId = '{{ compartmentId }}'
;
```
</TabItem>
</Tabs>
