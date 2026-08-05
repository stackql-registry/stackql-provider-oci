--- 
title: us
hide_title: false
hide_table_of_contents: false
keywords:
  - us
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

Creates, updates, deletes, gets or lists a <code>us</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="us" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.object_storage.us" /></td></tr>
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
    <td><a href="#abort_multipart_upload"><CopyableCode code="abort_multipart_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-objectName"><code>objectName</code></a>, <a href="#parameter-uploadId"><code>uploadId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Aborts an in-progress multipart upload and deletes all parts that have been uploaded.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#commit_multipart_upload"><CopyableCode code="commit_multipart_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-objectName"><code>objectName</code></a>, <a href="#parameter-uploadId"><code>uploadId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-partsToCommit"><code>partsToCommit</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-if-none-match"><code>if-none-match</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Commits a multipart upload, which involves checking part numbers and entity tags (ETags) of the parts, to create an aggregate object.&lt;br /&gt;</td>
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
<tr id="parameter-objectName">
    <td><CopyableCode code="objectName" /></td>
    <td><code>string</code></td>
    <td>The name of the object. Avoid entering confidential information. Example: `test/object1.log` </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-uploadId">
    <td><CopyableCode code="uploadId" /></td>
    <td><code>string</code></td>
    <td>The upload ID for a multipart upload.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) to match with the ETag of an existing resource. If the specified ETag matches the ETag of the existing resource, GET and HEAD requests will return the resource and PUT and POST requests will upload the resource. </td>
</tr>
<tr id="parameter-if-none-match">
    <td><CopyableCode code="if-none-match" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) to avoid matching. The only valid value is '*', which indicates that the request should fail if the resource already exists. </td>
</tr>
<tr id="parameter-opc-client-request-id">
    <td><CopyableCode code="opc-client-request-id" /></td>
    <td><code>string</code></td>
    <td>The client request ID for tracing.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="abort_multipart_upload"
    values={[
        { label: 'abort_multipart_upload', value: 'abort_multipart_upload' },
        { label: 'commit_multipart_upload', value: 'commit_multipart_upload' }
    ]}
>
<TabItem value="abort_multipart_upload">

Aborts an in-progress multipart upload and deletes all parts that have been uploaded.&lt;br /&gt;

```sql
EXEC oci.object_storage.us.abort_multipart_upload 
@namespaceName='{{ namespaceName }}' --required, 
@bucketName='{{ bucketName }}' --required, 
@objectName='{{ objectName }}' --required, 
@uploadId='{{ uploadId }}' --required, 
@region='{{ region }}' --required, 
@opc-client-request-id='{{ opc-client-request-id }}'
;
```
</TabItem>
<TabItem value="commit_multipart_upload">

Commits a multipart upload, which involves checking part numbers and entity tags (ETags) of the parts, to create an aggregate object.&lt;br /&gt;

```sql
EXEC oci.object_storage.us.commit_multipart_upload 
@namespaceName='{{ namespaceName }}' --required, 
@bucketName='{{ bucketName }}' --required, 
@objectName='{{ objectName }}' --required, 
@uploadId='{{ uploadId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@if-none-match='{{ if-none-match }}', 
@opc-client-request-id='{{ opc-client-request-id }}' 
@@json=
'{
"partsToCommit": "{{ partsToCommit }}", 
"partsToExclude": "{{ partsToExclude }}"
}'
;
```
</TabItem>
</Tabs>
