--- 
title: multipart_uploads
hide_title: false
hide_table_of_contents: false
keywords:
  - multipart_uploads
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

Creates, updates, deletes, gets or lists a <code>multipart_uploads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multipart_uploads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.object_storage.multipart_uploads" /></td></tr>
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

Multipart uploads provide efficient and resilient uploads, especially for large objects. Multipart uploads also accommodate&lt;br /&gt;objects that are too large for a single upload operation. With multipart uploads, individual parts of an object can be&lt;br /&gt;uploaded in parallel to reduce the amount of time you spend uploading. Multipart uploads can also minimize the impact&lt;br /&gt;of network failures by letting you retry a failed part upload instead of requiring you to retry an entire object upload.&lt;br /&gt;See &#91;Using Multipart Uploads&#93;(/Content/Object/Tasks/usingmultipartuploads.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized,&lt;br /&gt;talk to an administrator. If you are an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The bucket in which the in-progress multipart upload is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The Object Storage namespace in which the in-progress multipart upload is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="object" /></td>
    <td><code>string</code></td>
    <td>The object name of the in-progress multipart upload.</td>
</tr>
<tr>
    <td><CopyableCode code="storageTier" /></td>
    <td><code>string</code></td>
    <td>The storage tier that the object is stored in. (Standard, InfrequentAccess, Archive) (x-obmcs-top-level-enum: #/definitions/StorageTier)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the upload was created, as described in &#91;RFC 2616&#93;(https:​//tools.ietf.org/html/rfc2616#section-14.29).</td>
</tr>
<tr>
    <td><CopyableCode code="uploadId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the in-progress multipart upload.</td>
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
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Lists all of the in-progress multipart uploads for the given bucket in the given Object Storage namespace.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-object"><code>object</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-if-none-match"><code>if-none-match</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a>, <a href="#parameter-opc-sse-customer-algorithm"><code>opc-sse-customer-algorithm</code></a>, <a href="#parameter-opc-sse-customer-key"><code>opc-sse-customer-key</code></a>, <a href="#parameter-opc-sse-customer-key-sha256"><code>opc-sse-customer-key-sha256</code></a>, <a href="#parameter-opc-sse-kms-key-id"><code>opc-sse-kms-key-id</code></a></td>
    <td>Starts a new multipart upload to a specific object in the given bucket in the given namespace.&lt;br /&gt;&lt;br /&gt;See &#91;Object Names&#93;(/Content/Object/Tasks/managingobjects.htm#namerequirements)&lt;br /&gt;for object naming requirements.&lt;br /&gt;</td>
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
<tr id="parameter-opc-sse-customer-algorithm">
    <td><CopyableCode code="opc-sse-customer-algorithm" /></td>
    <td><code>string</code></td>
    <td>The optional header that specifies "AES256" as the encryption algorithm. For more information, see &#91;Using Your Own Keys for Server-Side Encryption&#93;(/Content/Object/Tasks/usingyourencryptionkeys.htm). </td>
</tr>
<tr id="parameter-opc-sse-customer-key">
    <td><CopyableCode code="opc-sse-customer-key" /></td>
    <td><code>string</code></td>
    <td>The optional header that specifies the base64-encoded 256-bit encryption key to use to encrypt or decrypt the data. For more information, see &#91;Using Your Own Keys for Server-Side Encryption&#93;(/Content/Object/Tasks/usingyourencryptionkeys.htm). </td>
</tr>
<tr id="parameter-opc-sse-customer-key-sha256">
    <td><CopyableCode code="opc-sse-customer-key-sha256" /></td>
    <td><code>string</code></td>
    <td>The optional header that specifies the base64-encoded SHA256 hash of the encryption key. This value is used to check the integrity of the encryption key. For more information, see &#91;Using Your Own Keys for Server-Side Encryption&#93;(/Content/Object/Tasks/usingyourencryptionkeys.htm). </td>
</tr>
<tr id="parameter-opc-sse-kms-key-id">
    <td><CopyableCode code="opc-sse-kms-key-id" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of a master encryption key used to call the Key Management service to generate a data encryption key or to encrypt or decrypt a data encryption key. </td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists all of the in-progress multipart uploads for the given bucket in the given Object Storage namespace.&lt;br /&gt;

```sql
SELECT
bucket,
namespace,
object,
storageTier,
timeCreated,
uploadId
FROM oci.object_storage.multipart_uploads
WHERE namespaceName = '{{ namespaceName }}' -- required
AND bucketName = '{{ bucketName }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-client-request-id = '{{ opc-client-request-id }}'
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

Starts a new multipart upload to a specific object in the given bucket in the given namespace.&lt;br /&gt;&lt;br /&gt;See &#91;Object Names&#93;(/Content/Object/Tasks/managingobjects.htm#namerequirements)&lt;br /&gt;for object naming requirements.&lt;br /&gt;

```sql
INSERT INTO oci.object_storage.multipart_uploads (
cacheControl,
contentDisposition,
contentEncoding,
contentLanguage,
contentType,
metadata,
object,
storageTier,
namespaceName,
bucketName,
region,
if-match,
if-none-match,
opc-client-request-id,
opc-sse-customer-algorithm,
opc-sse-customer-key,
opc-sse-customer-key-sha256,
opc-sse-kms-key-id
)
SELECT 
'{{ cacheControl }}',
'{{ contentDisposition }}',
'{{ contentEncoding }}',
'{{ contentLanguage }}',
'{{ contentType }}',
'{{ metadata }}',
'{{ object }}' /* required */,
'{{ storageTier }}',
'{{ namespaceName }}',
'{{ bucketName }}',
'{{ region }}',
'{{ if-match }}',
'{{ if-none-match }}',
'{{ opc-client-request-id }}',
'{{ opc-sse-customer-algorithm }}',
'{{ opc-sse-customer-key }}',
'{{ opc-sse-customer-key-sha256 }}',
'{{ opc-sse-kms-key-id }}'
RETURNING
bucket,
namespace,
object,
storageTier,
timeCreated,
uploadId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: multipart_uploads
  props:
    - name: namespaceName
      value: "{{ namespaceName }}"
      description: Required parameter for the multipart_uploads resource.
    - name: bucketName
      value: "{{ bucketName }}"
      description: Required parameter for the multipart_uploads resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the multipart_uploads resource.
    - name: cacheControl
      value: "{{ cacheControl }}"
      description: |
        The optional Cache-Control header that defines the caching behavior value to be returned in GetObject and
        HeadObject responses. Specifying values for this header has no effect on Object Storage behavior. Programs
        that read the object determine what to do based on the value provided.
        For example, you could use this header to identify objects that require caching restrictions.
    - name: contentDisposition
      value: "{{ contentDisposition }}"
      description: |
        The optional Content-Disposition header that defines presentational information for the object to be
        returned in GetObject and HeadObject responses. Specifying values for this header has no effect on Object
        Storage behavior. Programs that read the object determine what to do based on the value provided.
        For example, you could use this header to let users download objects with custom filenames in a browser.
    - name: contentEncoding
      value: "{{ contentEncoding }}"
      description: |
        The optional Content-Encoding header that defines the content encodings that were applied to the object to
        upload. Specifying values for this header has no effect on Object Storage behavior. Programs that read the
        object determine what to do based on the value provided. For example, you could use this header to determine
        what decoding mechanisms need to be applied to obtain the media-type specified by the Content-Type header of
        the object.
    - name: contentLanguage
      value: "{{ contentLanguage }}"
      description: |
        The optional Content-Language header that defines the content language of the object to upload. Specifying
        values for this header has no effect on Object Storage behavior. Programs that read the object determine what
        to do based on the value provided. For example, you could use this header to identify and differentiate objects
        based on a particular language.
    - name: contentType
      value: "{{ contentType }}"
      description: |
        The optional Content-Type header that defines the standard MIME type format of the object to upload.
        Specifying values for this header has no effect on Object Storage behavior. Programs that read the object
        determine what to do based on the value provided. For example, you could use this header to identify and
        perform special operations on text only objects.
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Arbitrary string keys and values for the user-defined metadata for the object.
        Keys must be in "opc-meta-*" format. Avoid entering confidential information.
    - name: object
      value: "{{ object }}"
      description: |
        The name of the object to which this multi-part upload is targeted. Avoid entering confidential information.
        Example: test/object1.log
    - name: storageTier
      value: "{{ storageTier }}"
      description: |
        The storage tier that the object should be stored in. If not specified, the object will be stored in
        the same storage tier as the bucket.
      valid_values: ['Standard', 'InfrequentAccess', 'Archive']
    - name: if-match
      value: "{{ if-match }}"
      description: The entity tag (ETag) to match with the ETag of an existing resource. If the specified ETag matches the ETag of the existing resource, GET and HEAD requests will return the resource and PUT and POST requests will upload the resource. 
      description: The entity tag (ETag) to match with the ETag of an existing resource. If the specified ETag matches the ETag of the existing resource, GET and HEAD requests will return the resource and PUT and POST requests will upload the resource. 
    - name: if-none-match
      value: "{{ if-none-match }}"
      description: The entity tag (ETag) to avoid matching. The only valid value is '*', which indicates that the request should fail if the resource already exists. 
      description: The entity tag (ETag) to avoid matching. The only valid value is '*', which indicates that the request should fail if the resource already exists. 
    - name: opc-client-request-id
      value: "{{ opc-client-request-id }}"
      description: The client request ID for tracing.
      description: The client request ID for tracing.
    - name: opc-sse-customer-algorithm
      value: "{{ opc-sse-customer-algorithm }}"
      description: The optional header that specifies "AES256" as the encryption algorithm. For more information, see [Using Your Own Keys for Server-Side Encryption](/Content/Object/Tasks/usingyourencryptionkeys.htm). 
      description: The optional header that specifies "AES256" as the encryption algorithm. For more information, see [Using Your Own Keys for Server-Side Encryption](/Content/Object/Tasks/usingyourencryptionkeys.htm). 
    - name: opc-sse-customer-key
      value: "{{ opc-sse-customer-key }}"
      description: The optional header that specifies the base64-encoded 256-bit encryption key to use to encrypt or decrypt the data. For more information, see [Using Your Own Keys for Server-Side Encryption](/Content/Object/Tasks/usingyourencryptionkeys.htm). 
      description: The optional header that specifies the base64-encoded 256-bit encryption key to use to encrypt or decrypt the data. For more information, see [Using Your Own Keys for Server-Side Encryption](/Content/Object/Tasks/usingyourencryptionkeys.htm). 
    - name: opc-sse-customer-key-sha256
      value: "{{ opc-sse-customer-key-sha256 }}"
      description: The optional header that specifies the base64-encoded SHA256 hash of the encryption key. This value is used to check the integrity of the encryption key. For more information, see [Using Your Own Keys for Server-Side Encryption](/Content/Object/Tasks/usingyourencryptionkeys.htm). 
      description: The optional header that specifies the base64-encoded SHA256 hash of the encryption key. This value is used to check the integrity of the encryption key. For more information, see [Using Your Own Keys for Server-Side Encryption](/Content/Object/Tasks/usingyourencryptionkeys.htm). 
    - name: opc-sse-kms-key-id
      value: "{{ opc-sse-kms-key-id }}"
      description: The [OCID](/Content/General/Concepts/identifiers.htm) of a master encryption key used to call the Key Management service to generate a data encryption key or to encrypt or decrypt a data encryption key. 
      description: The [OCID](/Content/General/Concepts/identifiers.htm) of a master encryption key used to call the Key Management service to generate a data encryption key or to encrypt or decrypt a data encryption key. 
`}</CodeBlock>

</TabItem>
</Tabs>
