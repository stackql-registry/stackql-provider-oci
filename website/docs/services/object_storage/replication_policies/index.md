--- 
title: replication_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_policies
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

Creates, updates, deletes, gets or lists a <code>replication_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replication_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.object_storage.replication_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

The replication policy.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The id of the replication policy.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationBucketName" /></td>
    <td><code>string</code></td>
    <td>The bucket to replicate to in the destination region. Replication policy creation does not automatically create a destination bucket. Create the destination bucket before creating the policy. </td>
</tr>
<tr>
    <td><CopyableCode code="destinationRegionName" /></td>
    <td><code>string</code></td>
    <td>The destination region to replicate to, for example "us-ashburn-1".</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The replication status of the policy. If the status is CLIENT_ERROR, once the user fixes the issue described in the status message, the status will become ACTIVE.  (ACTIVE, CLIENT_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of the status.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the replication policy was created as per &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="timeLastSync" /></td>
    <td><code>string (date-time)</code></td>
    <td>Changes made to the source bucket before this time has been replicated. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The summary of a replication policy.

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The id of the replication policy.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="destinationBucketName" /></td>
    <td><code>string</code></td>
    <td>The bucket to replicate to in the destination region. Replication policy creation does not automatically create a destination bucket. Create the destination bucket before creating the policy. </td>
</tr>
<tr>
    <td><CopyableCode code="destinationRegionName" /></td>
    <td><code>string</code></td>
    <td>The destination region to replicate to, for example "us-ashburn-1".</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The replication status of the policy. If the status is CLIENT_ERROR, once the user fixes the issue described in the status message, the status will become ACTIVE.  (ACTIVE, CLIENT_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of the status.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the replication policy was created as per &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="timeLastSync" /></td>
    <td><code>string (date-time)</code></td>
    <td>Changes made to the source bucket before this time has been replicated. </td>
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
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-replicationId"><code>replicationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Get the replication policy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>List the replication policies associated with a bucket.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-destinationRegionName"><code>destinationRegionName</code></a>, <a href="#parameter-destinationBucketName"><code>destinationBucketName</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Creates a replication policy for the specified bucket.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-replicationId"><code>replicationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Deletes the replication policy associated with the source bucket.&lt;br /&gt;</td>
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
<tr id="parameter-replicationId">
    <td><CopyableCode code="replicationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the replication policy.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-opc-client-request-id">
    <td><CopyableCode code="opc-client-request-id" /></td>
    <td><code>string</code></td>
    <td>The client request ID for tracing.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get the replication policy.&lt;br /&gt;

```sql
SELECT
id,
name,
destinationBucketName,
destinationRegionName,
status,
statusMessage,
timeCreated,
timeLastSync
FROM oci.object_storage.replication_policies
WHERE namespaceName = '{{ namespaceName }}' -- required
AND bucketName = '{{ bucketName }}' -- required
AND replicationId = '{{ replicationId }}' -- required
AND region = '{{ region }}' -- required
AND opc-client-request-id = '{{ opc-client-request-id }}'
;
```
</TabItem>
<TabItem value="list">

List the replication policies associated with a bucket.&lt;br /&gt;

```sql
SELECT
id,
name,
destinationBucketName,
destinationRegionName,
status,
statusMessage,
timeCreated,
timeLastSync
FROM oci.object_storage.replication_policies
WHERE namespaceName = '{{ namespaceName }}' -- required
AND bucketName = '{{ bucketName }}' -- required
AND region = '{{ region }}' -- required
AND opc-client-request-id = '{{ opc-client-request-id }}'
AND page = '{{ page }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a replication policy for the specified bucket.&lt;br /&gt;

```sql
INSERT INTO oci.object_storage.replication_policies (
destinationBucketName,
destinationRegionName,
name,
namespaceName,
bucketName,
region,
opc-client-request-id
)
SELECT 
'{{ destinationBucketName }}' /* required */,
'{{ destinationRegionName }}' /* required */,
'{{ name }}' /* required */,
'{{ namespaceName }}',
'{{ bucketName }}',
'{{ region }}',
'{{ opc-client-request-id }}'
RETURNING
id,
name,
destinationBucketName,
destinationRegionName,
status,
statusMessage,
timeCreated,
timeLastSync
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: replication_policies
  props:
    - name: namespaceName
      value: "{{ namespaceName }}"
      description: Required parameter for the replication_policies resource.
    - name: bucketName
      value: "{{ bucketName }}"
      description: Required parameter for the replication_policies resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the replication_policies resource.
    - name: destinationBucketName
      value: "{{ destinationBucketName }}"
      description: |
        The bucket to replicate to in the destination region. Replication policy creation does not automatically
        create a destination bucket. Create the destination bucket before creating the policy.
    - name: destinationRegionName
      value: "{{ destinationRegionName }}"
      description: |
        The destination region to replicate to, for example "us-ashburn-1".
    - name: name
      value: "{{ name }}"
      description: |
        The name of the policy. Avoid entering confidential information.
    - name: opc-client-request-id
      value: "{{ opc-client-request-id }}"
      description: The client request ID for tracing.
      description: The client request ID for tracing.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the replication policy associated with the source bucket.&lt;br /&gt;

```sql
DELETE FROM oci.object_storage.replication_policies
WHERE namespaceName = '{{ namespaceName }}' --required
AND bucketName = '{{ bucketName }}' --required
AND replicationId = '{{ replicationId }}' --required
AND region = '{{ region }}' --required
AND opc-client-request-id = '{{ opc-client-request-id }}'
;
```
</TabItem>
</Tabs>
