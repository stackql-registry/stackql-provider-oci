--- 
title: namespace_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - namespace_metadatas
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

Creates, updates, deletes, gets or lists a <code>namespace_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="namespace_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.object_storage.namespace_metadatas" /></td></tr>
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

The default metadata.

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
    <td><CopyableCode code="defaultS3CompartmentId" /></td>
    <td><code>string</code></td>
    <td>If the field is set, specifies the default compartment assignment for the Amazon S3 Compatibility API.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultSwiftCompartmentId" /></td>
    <td><code>string</code></td>
    <td>If the field is set, specifies the default compartment assignment for the Swift API.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The Object Storage namespace to which the metadata belongs.</td>
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
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Gets the metadata for the Object Storage namespace, which contains defaultS3CompartmentId and&lt;br /&gt;defaultSwiftCompartmentId.&lt;br /&gt;&lt;br /&gt;Any user with the OBJECTSTORAGE_NAMESPACE_READ permission will be able to see the current metadata. If you are&lt;br /&gt;not authorized, talk to an administrator. If you are an administrator who needs to write policies&lt;br /&gt;to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>By default, buckets created using the Amazon S3 Compatibility API or the Swift API are created in the root&lt;br /&gt;compartment of the Oracle Cloud Infrastructure tenancy.&lt;br /&gt;&lt;br /&gt;You can change the default Swift/Amazon S3 compartmentId designation to a different compartmentId. All&lt;br /&gt;subsequent bucket creations will use the new default compartment, but no previously created&lt;br /&gt;buckets will be modified. A user must have OBJECTSTORAGE_NAMESPACE_UPDATE permission to make changes to the default&lt;br /&gt;compartments for Amazon S3 and Swift.&lt;br /&gt;</td>
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
<tr id="parameter-namespaceName">
    <td><CopyableCode code="namespaceName" /></td>
    <td><code>string</code></td>
    <td>The Object Storage namespace used for the request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
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

Gets the metadata for the Object Storage namespace, which contains defaultS3CompartmentId and&lt;br /&gt;defaultSwiftCompartmentId.&lt;br /&gt;&lt;br /&gt;Any user with the OBJECTSTORAGE_NAMESPACE_READ permission will be able to see the current metadata. If you are&lt;br /&gt;not authorized, talk to an administrator. If you are an administrator who needs to write policies&lt;br /&gt;to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

```sql
SELECT
defaultS3CompartmentId,
defaultSwiftCompartmentId,
namespace
FROM oci.object_storage.namespace_metadatas
WHERE namespaceName = '{{ namespaceName }}' -- required
AND region = '{{ region }}' -- required
AND opc-client-request-id = '{{ opc-client-request-id }}'
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

By default, buckets created using the Amazon S3 Compatibility API or the Swift API are created in the root&lt;br /&gt;compartment of the Oracle Cloud Infrastructure tenancy.&lt;br /&gt;&lt;br /&gt;You can change the default Swift/Amazon S3 compartmentId designation to a different compartmentId. All&lt;br /&gt;subsequent bucket creations will use the new default compartment, but no previously created&lt;br /&gt;buckets will be modified. A user must have OBJECTSTORAGE_NAMESPACE_UPDATE permission to make changes to the default&lt;br /&gt;compartments for Amazon S3 and Swift.&lt;br /&gt;

```sql
UPDATE oci.object_storage.namespace_metadatas
SET 
defaultS3CompartmentId = '{{ defaultS3CompartmentId }}',
defaultSwiftCompartmentId = '{{ defaultSwiftCompartmentId }}'
WHERE 
namespaceName = '{{ namespaceName }}' --required
AND region = '{{ region }}' --required
AND opc-client-request-id = '{{ opc-client-request-id}}'
RETURNING
defaultS3CompartmentId,
defaultSwiftCompartmentId,
namespace;
```
</TabItem>
</Tabs>
