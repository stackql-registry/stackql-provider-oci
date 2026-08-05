--- 
title: bs
hide_title: false
hide_table_of_contents: false
keywords:
  - bs
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

Creates, updates, deletes, gets or lists a <code>bs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.object_storage.bs" /></td></tr>
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
    <td><a href="#batch_delete_objects"><CopyableCode code="batch_delete_objects" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-objects"><code>objects</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Deletes a batch of objects.</td>
</tr>
<tr>
    <td><a href="#copy_object"><CopyableCode code="copy_object" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceObjectName"><code>sourceObjectName</code></a>, <a href="#parameter-destinationRegion"><code>destinationRegion</code></a>, <a href="#parameter-destinationNamespace"><code>destinationNamespace</code></a>, <a href="#parameter-destinationBucket"><code>destinationBucket</code></a>, <a href="#parameter-destinationObjectName"><code>destinationObjectName</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a>, <a href="#parameter-opc-sse-customer-algorithm"><code>opc-sse-customer-algorithm</code></a>, <a href="#parameter-opc-sse-customer-key"><code>opc-sse-customer-key</code></a>, <a href="#parameter-opc-sse-customer-key-sha256"><code>opc-sse-customer-key-sha256</code></a>, <a href="#parameter-opc-source-sse-customer-algorithm"><code>opc-source-sse-customer-algorithm</code></a>, <a href="#parameter-opc-source-sse-customer-key"><code>opc-source-sse-customer-key</code></a>, <a href="#parameter-opc-source-sse-customer-key-sha256"><code>opc-source-sse-customer-key-sha256</code></a>, <a href="#parameter-opc-sse-kms-key-id"><code>opc-sse-kms-key-id</code></a></td>
    <td>Creates a request to copy an object within a region or to another region.&lt;br /&gt;&lt;br /&gt;See &#91;Object Names&#93;(/Content/Object/Tasks/managingobjects.htm#namerequirements)&lt;br /&gt;for object naming requirements.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#make_bucket_writable"><CopyableCode code="make_bucket_writable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Stops replication to the destination bucket and removes the replication policy. When the replication&lt;br /&gt;policy was created, this destination bucket became read-only except for new and changed objects replicated&lt;br /&gt;automatically from the source bucket. MakeBucketWritable removes the replication policy. This bucket is no&lt;br /&gt;longer the target for replication and is now writable, allowing users to make changes to bucket contents.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#reencrypt_bucket"><CopyableCode code="reencrypt_bucket" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-isReencryptBucketKeyOnly"><code>isReencryptBucketKeyOnly</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Re-encrypts the unique data encryption key that encrypts each object written to the bucket by using the most recent &lt;br /&gt;version of the master encryption key assigned to the bucket. (All data encryption keys are encrypted by a master &lt;br /&gt;encryption key. Master encryption keys are assigned to buckets and managed by Oracle by default, but you can assign &lt;br /&gt;a key that you created and control through the Oracle Cloud Infrastructure Key Management service.) The kmsKeyId property &lt;br /&gt;of the bucket determines which master encryption key is assigned to the bucket. If you assigned a different Key Management &lt;br /&gt;master encryption key to the bucket, you can call this API to re-encrypt all data encryption keys with the newly &lt;br /&gt;assigned key. Similarly, you might want to re-encrypt all data encryption keys if the assigned key has been rotated to &lt;br /&gt;a new key version since objects were last added to the bucket. If you call this API and there is no kmsKeyId associated &lt;br /&gt;with the bucket, the call will fail. &lt;br /&gt;Also, if you set isBucketKeyEnabled, you might want to re-encrypt all data encryption keys&lt;br /&gt;using the bucket key. This will help reduce calls to OCI Vault KMS when older objects are downloaded.&lt;br /&gt;&lt;br /&gt;Calling this API starts a work request task to re-encrypt the data encryption key of all objects in the bucket. Only &lt;br /&gt;objects created before the time of the API call will be re-encrypted. The call can take a long time, depending on how many &lt;br /&gt;objects are in the bucket and how big they are. This API returns a work request ID that you can use to retrieve the status &lt;br /&gt;of the work request task.&lt;br /&gt;All the versions of objects will be re-encrypted whether versioning is enabled or suspended at the bucket.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#reencrypt_object"><CopyableCode code="reencrypt_object" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-objectName"><code>objectName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Re-encrypts the data encryption keys that encrypt the object and its chunks. By default, when you create a bucket, the Object Storage&lt;br /&gt;service manages the master encryption key used to encrypt each object's data encryption keys. The encryption mechanism that you specify for&lt;br /&gt;the bucket applies to the objects it contains.&lt;br /&gt;&lt;br /&gt;You can alternatively employ one of these encryption strategies for an object:&lt;br /&gt;&lt;br /&gt;- You can assign a key that you created and control through the Oracle Cloud Infrastructure Vault service.&lt;br /&gt;&lt;br /&gt;- You can encrypt an object using your own encryption key. The key you supply is known as a customer-provided encryption key (SSE-C).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#rename_object"><CopyableCode code="rename_object" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sourceName"><code>sourceName</code></a>, <a href="#parameter-newName"><code>newName</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Rename an object in the given Object Storage namespace.&lt;br /&gt;&lt;br /&gt;See &#91;Object Names&#93;(/Content/Object/Tasks/managingobjects.htm#namerequirements)&lt;br /&gt;for object naming requirements.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#restore_objects"><CopyableCode code="restore_objects" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-objectName"><code>objectName</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Restores the object specified by the objectName parameter.&lt;br /&gt;By default object will be restored for 24 hours. Duration can be configured using the hours parameter.&lt;br /&gt;</td>
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
<tr id="parameter-isReencryptBucketKeyOnly">
    <td><CopyableCode code="isReencryptBucketKeyOnly" /></td>
    <td><code>boolean</code></td>
    <td>If true, reencrypt only the intermediate bucket keys and skip everything else in the bucket.</td>
</tr>
<tr id="parameter-opc-client-request-id">
    <td><CopyableCode code="opc-client-request-id" /></td>
    <td><code>string</code></td>
    <td>The client request ID for tracing.</td>
</tr>
<tr id="parameter-opc-source-sse-customer-algorithm">
    <td><CopyableCode code="opc-source-sse-customer-algorithm" /></td>
    <td><code>string</code></td>
    <td>The optional header that specifies "AES256" as the encryption algorithm to use to decrypt the source object. For more information, see &#91;Using Your Own Keys for Server-Side Encryption&#93;(/Content/Object/Tasks/usingyourencryptionkeys.htm). </td>
</tr>
<tr id="parameter-opc-source-sse-customer-key">
    <td><CopyableCode code="opc-source-sse-customer-key" /></td>
    <td><code>string</code></td>
    <td>The optional header that specifies the base64-encoded 256-bit encryption key to use to decrypt the source object. For more information, see &#91;Using Your Own Keys for Server-Side Encryption&#93;(/Content/Object/Tasks/usingyourencryptionkeys.htm). </td>
</tr>
<tr id="parameter-opc-source-sse-customer-key-sha256">
    <td><CopyableCode code="opc-source-sse-customer-key-sha256" /></td>
    <td><code>string</code></td>
    <td>The optional header that specifies the base64-encoded SHA256 hash of the encryption key used to decrypt the source object. This value is used to check the integrity of the encryption key. For more information, see &#91;Using Your Own Keys for Server-Side Encryption&#93;(/Content/Object/Tasks/usingyourencryptionkeys.htm). </td>
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
<tr id="parameter-versionId">
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>VersionId used to identify a particular version of the object</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_objects"
    values={[
        { label: 'batch_delete_objects', value: 'batch_delete_objects' },
        { label: 'copy_object', value: 'copy_object' },
        { label: 'make_bucket_writable', value: 'make_bucket_writable' },
        { label: 'reencrypt_bucket', value: 'reencrypt_bucket' },
        { label: 'reencrypt_object', value: 'reencrypt_object' },
        { label: 'rename_object', value: 'rename_object' },
        { label: 'restore_objects', value: 'restore_objects' }
    ]}
>
<TabItem value="batch_delete_objects">

Deletes a batch of objects.

```sql
EXEC oci.object_storage.bs.batch_delete_objects 
@namespaceName='{{ namespaceName }}' --required, 
@bucketName='{{ bucketName }}' --required, 
@region='{{ region }}' --required, 
@opc-client-request-id='{{ opc-client-request-id }}' 
@@json=
'{
"isSkipDeletedResult": {{ isSkipDeletedResult }}, 
"objects": "{{ objects }}"
}'
;
```
</TabItem>
<TabItem value="copy_object">

Creates a request to copy an object within a region or to another region.&lt;br /&gt;&lt;br /&gt;See &#91;Object Names&#93;(/Content/Object/Tasks/managingobjects.htm#namerequirements)&lt;br /&gt;for object naming requirements.&lt;br /&gt;

```sql
EXEC oci.object_storage.bs.copy_object 
@namespaceName='{{ namespaceName }}' --required, 
@bucketName='{{ bucketName }}' --required, 
@region='{{ region }}' --required, 
@opc-client-request-id='{{ opc-client-request-id }}', 
@opc-sse-customer-algorithm='{{ opc-sse-customer-algorithm }}', 
@opc-sse-customer-key='{{ opc-sse-customer-key }}', 
@opc-sse-customer-key-sha256='{{ opc-sse-customer-key-sha256 }}', 
@opc-source-sse-customer-algorithm='{{ opc-source-sse-customer-algorithm }}', 
@opc-source-sse-customer-key='{{ opc-source-sse-customer-key }}', 
@opc-source-sse-customer-key-sha256='{{ opc-source-sse-customer-key-sha256 }}', 
@opc-sse-kms-key-id='{{ opc-sse-kms-key-id }}' 
@@json=
'{
"destinationBucket": "{{ destinationBucket }}", 
"destinationNamespace": "{{ destinationNamespace }}", 
"destinationObjectIfMatchETag": "{{ destinationObjectIfMatchETag }}", 
"destinationObjectIfNoneMatchETag": "{{ destinationObjectIfNoneMatchETag }}", 
"destinationObjectMetadata": "{{ destinationObjectMetadata }}", 
"destinationObjectName": "{{ destinationObjectName }}", 
"destinationObjectStorageTier": "{{ destinationObjectStorageTier }}", 
"destinationRegion": "{{ destinationRegion }}", 
"sourceObjectIfMatchETag": "{{ sourceObjectIfMatchETag }}", 
"sourceObjectName": "{{ sourceObjectName }}", 
"sourceVersionId": "{{ sourceVersionId }}"
}'
;
```
</TabItem>
<TabItem value="make_bucket_writable">

Stops replication to the destination bucket and removes the replication policy. When the replication&lt;br /&gt;policy was created, this destination bucket became read-only except for new and changed objects replicated&lt;br /&gt;automatically from the source bucket. MakeBucketWritable removes the replication policy. This bucket is no&lt;br /&gt;longer the target for replication and is now writable, allowing users to make changes to bucket contents.&lt;br /&gt;

```sql
EXEC oci.object_storage.bs.make_bucket_writable 
@namespaceName='{{ namespaceName }}' --required, 
@bucketName='{{ bucketName }}' --required, 
@region='{{ region }}' --required, 
@opc-client-request-id='{{ opc-client-request-id }}'
;
```
</TabItem>
<TabItem value="reencrypt_bucket">

Re-encrypts the unique data encryption key that encrypts each object written to the bucket by using the most recent &lt;br /&gt;version of the master encryption key assigned to the bucket. (All data encryption keys are encrypted by a master &lt;br /&gt;encryption key. Master encryption keys are assigned to buckets and managed by Oracle by default, but you can assign &lt;br /&gt;a key that you created and control through the Oracle Cloud Infrastructure Key Management service.) The kmsKeyId property &lt;br /&gt;of the bucket determines which master encryption key is assigned to the bucket. If you assigned a different Key Management &lt;br /&gt;master encryption key to the bucket, you can call this API to re-encrypt all data encryption keys with the newly &lt;br /&gt;assigned key. Similarly, you might want to re-encrypt all data encryption keys if the assigned key has been rotated to &lt;br /&gt;a new key version since objects were last added to the bucket. If you call this API and there is no kmsKeyId associated &lt;br /&gt;with the bucket, the call will fail. &lt;br /&gt;Also, if you set isBucketKeyEnabled, you might want to re-encrypt all data encryption keys&lt;br /&gt;using the bucket key. This will help reduce calls to OCI Vault KMS when older objects are downloaded.&lt;br /&gt;&lt;br /&gt;Calling this API starts a work request task to re-encrypt the data encryption key of all objects in the bucket. Only &lt;br /&gt;objects created before the time of the API call will be re-encrypted. The call can take a long time, depending on how many &lt;br /&gt;objects are in the bucket and how big they are. This API returns a work request ID that you can use to retrieve the status &lt;br /&gt;of the work request task.&lt;br /&gt;All the versions of objects will be re-encrypted whether versioning is enabled or suspended at the bucket.&lt;br /&gt;

```sql
EXEC oci.object_storage.bs.reencrypt_bucket 
@namespaceName='{{ namespaceName }}' --required, 
@bucketName='{{ bucketName }}' --required, 
@region='{{ region }}' --required, 
@isReencryptBucketKeyOnly={{ isReencryptBucketKeyOnly }}, 
@opc-client-request-id='{{ opc-client-request-id }}'
;
```
</TabItem>
<TabItem value="reencrypt_object">

Re-encrypts the data encryption keys that encrypt the object and its chunks. By default, when you create a bucket, the Object Storage&lt;br /&gt;service manages the master encryption key used to encrypt each object's data encryption keys. The encryption mechanism that you specify for&lt;br /&gt;the bucket applies to the objects it contains.&lt;br /&gt;&lt;br /&gt;You can alternatively employ one of these encryption strategies for an object:&lt;br /&gt;&lt;br /&gt;- You can assign a key that you created and control through the Oracle Cloud Infrastructure Vault service.&lt;br /&gt;&lt;br /&gt;- You can encrypt an object using your own encryption key. The key you supply is known as a customer-provided encryption key (SSE-C).&lt;br /&gt;

```sql
EXEC oci.object_storage.bs.reencrypt_object 
@namespaceName='{{ namespaceName }}' --required, 
@bucketName='{{ bucketName }}' --required, 
@objectName='{{ objectName }}' --required, 
@region='{{ region }}' --required, 
@versionId='{{ versionId }}', 
@opc-client-request-id='{{ opc-client-request-id }}' 
@@json=
'{
"kmsKeyId": "{{ kmsKeyId }}", 
"sourceSseCustomerKey": "{{ sourceSseCustomerKey }}", 
"sseCustomerKey": "{{ sseCustomerKey }}"
}'
;
```
</TabItem>
<TabItem value="rename_object">

Rename an object in the given Object Storage namespace.&lt;br /&gt;&lt;br /&gt;See &#91;Object Names&#93;(/Content/Object/Tasks/managingobjects.htm#namerequirements)&lt;br /&gt;for object naming requirements.&lt;br /&gt;

```sql
EXEC oci.object_storage.bs.rename_object 
@namespaceName='{{ namespaceName }}' --required, 
@bucketName='{{ bucketName }}' --required, 
@region='{{ region }}' --required, 
@opc-client-request-id='{{ opc-client-request-id }}' 
@@json=
'{
"newName": "{{ newName }}", 
"newObjIfMatchETag": "{{ newObjIfMatchETag }}", 
"newObjIfNoneMatchETag": "{{ newObjIfNoneMatchETag }}", 
"sourceName": "{{ sourceName }}", 
"srcObjIfMatchETag": "{{ srcObjIfMatchETag }}"
}'
;
```
</TabItem>
<TabItem value="restore_objects">

Restores the object specified by the objectName parameter.&lt;br /&gt;By default object will be restored for 24 hours. Duration can be configured using the hours parameter.&lt;br /&gt;

```sql
EXEC oci.object_storage.bs.restore_objects 
@namespaceName='{{ namespaceName }}' --required, 
@bucketName='{{ bucketName }}' --required, 
@region='{{ region }}' --required, 
@opc-client-request-id='{{ opc-client-request-id }}' 
@@json=
'{
"hours": {{ hours }}, 
"objectName": "{{ objectName }}", 
"versionId": "{{ versionId }}"
}'
;
```
</TabItem>
</Tabs>
