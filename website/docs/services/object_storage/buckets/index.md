--- 
title: buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets
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

Creates, updates, deletes, gets or lists a <code>buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="buckets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.object_storage.buckets" /></td></tr>
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

A bucket representation for the requested bucket.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the bucket. </td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket. Avoid entering confidential information. Example: my-new-bucket1 </td>
</tr>
<tr>
    <td><CopyableCode code="approximateCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The approximate number of objects in the bucket. Count statistics are reported periodically. You will see a lag between what is displayed and the actual object count. </td>
</tr>
<tr>
    <td><CopyableCode code="approximateSize" /></td>
    <td><code>integer (int64)</code></td>
    <td>The approximate total size in bytes of all objects in the bucket. Size statistics are reported periodically. You will see a lag between what is displayed and the actual size of the bucket. </td>
</tr>
<tr>
    <td><CopyableCode code="autoTiering" /></td>
    <td><code>string</code></td>
    <td>The auto tiering status on the bucket. A bucket is created with auto tiering `Disabled` by default. For auto tiering `InfrequentAccess`, objects are transitioned automatically between the 'Standard' and 'InfrequentAccess' tiers based on the access pattern of the objects.  (Disabled, InfrequentAccess)</td>
</tr>
<tr>
    <td><CopyableCode code="bucketScope" /></td>
    <td><code>string</code></td>
    <td>The bucket scope determines weather the bucket name must be unique within the tenancy and region (essentially the namespace) or across all tenancies in the region. The bucket scope also determines if the bucket supports S3 virtual-hosted style URL's or not.  Allowed values: NAMESPACE: Only supports path-style bucket access, bucket name only needs to be unique within the tenancy and region. REGION: Supports both path-style and virtual-hosted URL style access, bucket name needs to be unique across all tenancies in the region.  (NAMESPACE, REGION)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment ID in which the bucket is authorized.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the user who created the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) for the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isBucketKeyEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether Object Storage should use intermediate cached Bucket Encryption Keys with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. This reduces calls to OCI Vault Key Management Service (KMS). Existing objects are not affected. </td>
</tr>
<tr>
    <td><CopyableCode code="isReadOnly" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this bucket is read only. By default, `isReadOnly` is set to `false`. This will be set to 'true' when this bucket is configured as a destination in a replication policy. </td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of a master encryption key used to call the Key Management service to generate a data encryption key or to encrypt or decrypt a data encryption key. </td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Arbitrary string keys and values for user-defined metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The Object Storage namespace in which the bucket resides.</td>
</tr>
<tr>
    <td><CopyableCode code="objectEventsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not events are emitted for object state changes in this bucket. By default, `objectEventsEnabled` is set to `false`. Set `objectEventsEnabled` to `true` to emit events for object state changes. For more information about events, see &#91;Overview of Events&#93;(/Content/Events/Concepts/eventsoverview.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="objectLifecyclePolicyEtag" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) for the live object lifecycle policy on the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="publicAccessType" /></td>
    <td><code>string</code></td>
    <td>The type of public access enabled on this bucket. A bucket is set to `NoPublicAccess` by default, which only allows an authenticated caller to access the bucket and its contents. When `ObjectRead` is enabled on the bucket, public access is allowed for the `GetObject`, `HeadObject`, and `ListObjects` operations. When `ObjectReadWithoutList` is enabled on the bucket, public access is allowed for the `GetObject` and `HeadObject` operations.  (NoPublicAccess, ObjectRead, ObjectReadWithoutList)</td>
</tr>
<tr>
    <td><CopyableCode code="replicationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this bucket is a replication source. By default, `replicationEnabled` is set to `false`. This will be set to 'true' when you create a replication policy for the bucket. </td>
</tr>
<tr>
    <td><CopyableCode code="storageTier" /></td>
    <td><code>string</code></td>
    <td>The storage tier type assigned to the bucket. A bucket is set to `Standard` tier by default, which means objects uploaded or copied to the bucket will be in the standard storage tier. When the `Archive` tier type is set explicitly for a bucket, objects uploaded or copied to the bucket will be stored in archive storage. The `storageTier` property is immutable after bucket is created.  (Standard, Archive)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the bucket was created, as described in &#91;RFC 2616&#93;(https:​//tools.ietf.org/html/rfc2616#section-14.29).</td>
</tr>
<tr>
    <td><CopyableCode code="versioning" /></td>
    <td><code>string</code></td>
    <td>The versioning status on the bucket. A bucket is created with versioning `Disabled` by default. For versioning `Enabled`, objects are protected from overwrites and deletes, by maintaining their version history. When versioning is `Suspended`, the previous versions will still remain but new versions will no longer be created when overwitten or deleted.  (Enabled, Suspended, Disabled)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized,&lt;br /&gt;talk to an administrator. If you are an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The name of the bucket. Avoid entering confidential information. Example: my-new-bucket1 </td>
</tr>
<tr>
    <td><CopyableCode code="bucketScope" /></td>
    <td><code>string</code></td>
    <td>The bucket scope determines weather the bucket name must be unique within the tenancy and region (essentially the namespace) or across all tenancies in the region. The bucket scope also determines if the bucket supports S3 virtual-hosted style URL's or not.  Allowed values: NAMESPACE: Only supports path-style bucket access, bucket name only needs to be unique within the tenancy and region. REGION: Supports both path-style and virtual-hosted URL style access, bucket name needs to be unique across all tenancies in the region.  (x-obmcs-enumref: #/definitions/Bucket/bucketScope)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment ID in which the bucket is authorized.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the user who created the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) for the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The Object Storage namespace in which the bucket lives.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the bucket was created, as described in &#91;RFC 2616&#93;(https:​//tools.ietf.org/html/rfc2616#section-14.29).</td>
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
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-if-none-match"><code>if-none-match</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a>, <a href="#parameter-fields"><code>fields</code></a></td>
    <td>Gets the current representation of the given bucket in the given Object Storage namespace.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-fields"><code>fields</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Gets a list of all BucketSummary items in a compartment. A BucketSummary contains only summary fields for the bucket&lt;br /&gt;and does not contain fields like the user-defined metadata.&lt;br /&gt;&lt;br /&gt;ListBuckets returns a BucketSummary containing at most 1000 buckets. To paginate through more buckets, use the returned&lt;br /&gt;`opc-next-page` value with the `page` request parameter.&lt;br /&gt;&lt;br /&gt;To use this and other API operations, you must be authorized in an IAM policy. If you are not authorized,&lt;br /&gt;talk to an administrator. If you are an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Creates a bucket in the given namespace with a bucket name and optional user-defined metadata. Avoid entering&lt;br /&gt;confidential information in bucket names.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Performs a partial or full update of a bucket's user-defined metadata.&lt;br /&gt;&lt;br /&gt;Use UpdateBucket to move a bucket from one compartment to another within the same tenancy. Supply the compartmentID&lt;br /&gt;of the compartment that you want to move the bucket to. For more information about moving resources between compartments,&lt;br /&gt;see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Deletes a bucket if the bucket is already empty. If the bucket is not empty, use&lt;br /&gt;&#91;DeleteObject&#93;(#/en/objectstorage/20160918/Object/DeleteObject) first. In addition,&lt;br /&gt;you cannot delete a bucket that has a multipart upload in progress or a pre-authenticated&lt;br /&gt;request associated with that bucket.&lt;br /&gt;</td>
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
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the compartment in which to list buckets.</td>
</tr>
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
<tr id="parameter-fields">
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>Bucket summary in list of buckets includes the 'namespace', 'name', 'compartmentId', 'createdBy', 'timeCreated', and 'etag' fields. This parameter can also include 'tags' (freeformTags and definedTags). The only supported value of this parameter is 'tags' for now. Example 'tags'. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) to match with the ETag of an existing resource. If the specified ETag matches the ETag of the existing resource, GET and HEAD requests will return the resource and PUT and POST requests will upload the resource. </td>
</tr>
<tr id="parameter-if-none-match">
    <td><CopyableCode code="if-none-match" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) to avoid matching. Wildcards ('*') are not allowed. If the specified ETag does not match the ETag of the existing resource, the request returns the expected response. If the ETag matches the ETag of the existing resource, the request returns an HTTP 304 status without a response body. </td>
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

Gets the current representation of the given bucket in the given Object Storage namespace.&lt;br /&gt;

```sql
SELECT
id,
name,
approximateCount,
approximateSize,
autoTiering,
bucketScope,
compartmentId,
createdBy,
definedTags,
etag,
freeformTags,
isBucketKeyEnabled,
isReadOnly,
kmsKeyId,
metadata,
namespace,
objectEventsEnabled,
objectLifecyclePolicyEtag,
publicAccessType,
replicationEnabled,
storageTier,
timeCreated,
versioning
FROM oci.object_storage.buckets
WHERE namespaceName = '{{ namespaceName }}' -- required
AND bucketName = '{{ bucketName }}' -- required
AND region = '{{ region }}' -- required
AND if-match = '{{ if-match }}'
AND if-none-match = '{{ if-none-match }}'
AND opc-client-request-id = '{{ opc-client-request-id }}'
AND fields = '{{ fields }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of all BucketSummary items in a compartment. A BucketSummary contains only summary fields for the bucket&lt;br /&gt;and does not contain fields like the user-defined metadata.&lt;br /&gt;&lt;br /&gt;ListBuckets returns a BucketSummary containing at most 1000 buckets. To paginate through more buckets, use the returned&lt;br /&gt;`opc-next-page` value with the `page` request parameter.&lt;br /&gt;&lt;br /&gt;To use this and other API operations, you must be authorized in an IAM policy. If you are not authorized,&lt;br /&gt;talk to an administrator. If you are an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

```sql
SELECT
name,
bucketScope,
compartmentId,
createdBy,
definedTags,
etag,
freeformTags,
namespace,
timeCreated
FROM oci.object_storage.buckets
WHERE namespaceName = '{{ namespaceName }}' -- required
AND compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND fields = '{{ fields }}'
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

Creates a bucket in the given namespace with a bucket name and optional user-defined metadata. Avoid entering&lt;br /&gt;confidential information in bucket names.&lt;br /&gt;

```sql
INSERT INTO oci.object_storage.buckets (
autoTiering,
bucketScope,
compartmentId,
definedTags,
freeformTags,
isBucketKeyEnabled,
kmsKeyId,
metadata,
name,
objectEventsEnabled,
publicAccessType,
storageTier,
versioning,
namespaceName,
region,
opc-client-request-id
)
SELECT 
'{{ autoTiering }}',
'{{ bucketScope }}',
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ freeformTags }}',
{{ isBucketKeyEnabled }},
'{{ kmsKeyId }}',
'{{ metadata }}',
'{{ name }}' /* required */,
{{ objectEventsEnabled }},
'{{ publicAccessType }}',
'{{ storageTier }}',
'{{ versioning }}',
'{{ namespaceName }}',
'{{ region }}',
'{{ opc-client-request-id }}'
RETURNING
id,
name,
approximateCount,
approximateSize,
autoTiering,
bucketScope,
compartmentId,
createdBy,
definedTags,
etag,
freeformTags,
isBucketKeyEnabled,
isReadOnly,
kmsKeyId,
metadata,
namespace,
objectEventsEnabled,
objectLifecyclePolicyEtag,
publicAccessType,
replicationEnabled,
storageTier,
timeCreated,
versioning
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: buckets
  props:
    - name: namespaceName
      value: "{{ namespaceName }}"
      description: Required parameter for the buckets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the buckets resource.
    - name: autoTiering
      value: "{{ autoTiering }}"
      description: |
        Set the auto tiering status on the bucket. By default, a bucket is created with auto tiering \`Disabled\`.
        Use this option to enable auto tiering during bucket creation. Objects in a bucket with auto tiering set to
        \`InfrequentAccess\` are transitioned automatically between the 'Standard' and 'InfrequentAccess'
        tiers based on the access pattern of the objects.
    - name: bucketScope
      value: "{{ bucketScope }}"
      description: |
        The bucket scope determines weather the bucket name must be unique within the tenancy and region (essentially the namespace) or across all tenancies in the region. The bucket scope also determines if the bucket supports S3 virtual-hosted style URL's or not.
        Allowed values:
        NAMESPACE: Only supports path-style bucket access, bucket name only needs to be unique within the tenancy and region.
        REGION: Supports both path-style and virtual-hosted URL style access, bucket name needs to be unique across all tenancies in the region.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The ID of the compartment in which to create the bucket.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: isBucketKeyEnabled
      value: {{ isBucketKeyEnabled }}
      description: |
        Specifies whether Object Storage should use intermediate cached Bucket Encryption Keys with server-side
        encryption using KMS (SSE-KMS) for new objects in the bucket. This reduces calls to OCI Vault Key Management
        Service (KMS). Existing objects are not affected.
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of a master encryption key used to call the Key
        Management service to generate a data encryption key or to encrypt or decrypt a data encryption key.
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Arbitrary string, up to 4KB, of keys and values for user-defined metadata.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the bucket. Valid characters are uppercase or lowercase letters, numbers, hyphens, underscores, and periods.
        Bucket names must be unique within an Object Storage namespace. Avoid entering confidential information.
        example: Example: my-new-bucket1
    - name: objectEventsEnabled
      value: {{ objectEventsEnabled }}
      description: |
        Whether or not events are emitted for object state changes in this bucket. By default, \`objectEventsEnabled\` is
        set to \`false\`. Set \`objectEventsEnabled\` to \`true\` to emit events for object state changes. For more information
        about events, see [Overview of Events](/Content/Events/Concepts/eventsoverview.htm).
    - name: publicAccessType
      value: "{{ publicAccessType }}"
      description: |
        The type of public access enabled on this bucket.
        A bucket is set to \`NoPublicAccess\` by default, which only allows an authenticated caller to access the
        bucket and its contents. When \`ObjectRead\` is enabled on the bucket, public access is allowed for the
        \`GetObject\`, \`HeadObject\`, and \`ListObjects\` operations. When \`ObjectReadWithoutList\` is enabled on the bucket,
        public access is allowed for the \`GetObject\` and \`HeadObject\` operations.
      valid_values: ['NoPublicAccess', 'ObjectRead', 'ObjectReadWithoutList']
    - name: storageTier
      value: "{{ storageTier }}"
      description: |
        The type of storage tier of this bucket.
        A bucket is set to 'Standard' tier by default, which means the bucket will be put in the standard storage tier.
        When 'Archive' tier type is set explicitly, the bucket is put in the Archive Storage tier. The 'storageTier'
        property is immutable after bucket is created.
      valid_values: ['Standard', 'Archive']
    - name: versioning
      value: "{{ versioning }}"
      description: |
        Set the versioning status on the bucket. By default, a bucket is created with versioning \`Disabled\`. Use this option to enable versioning during bucket creation. Objects in a version enabled bucket are protected from overwrites and deletions. Previous versions of the same object will be available in the bucket.
      valid_values: ['Enabled', 'Disabled']
    - name: opc-client-request-id
      value: "{{ opc-client-request-id }}"
      description: The client request ID for tracing.
      description: The client request ID for tracing.
`}</CodeBlock>

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

Performs a partial or full update of a bucket's user-defined metadata.&lt;br /&gt;&lt;br /&gt;Use UpdateBucket to move a bucket from one compartment to another within the same tenancy. Supply the compartmentID&lt;br /&gt;of the compartment that you want to move the bucket to. For more information about moving resources between compartments,&lt;br /&gt;see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
UPDATE oci.object_storage.buckets
SET 
autoTiering = '{{ autoTiering }}',
bucketScope = '{{ bucketScope }}',
compartmentId = '{{ compartmentId }}',
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}',
isBucketKeyEnabled = {{ isBucketKeyEnabled }},
kmsKeyId = '{{ kmsKeyId }}',
metadata = '{{ metadata }}',
name = '{{ name }}',
namespace = '{{ namespace }}',
objectEventsEnabled = {{ objectEventsEnabled }},
publicAccessType = '{{ publicAccessType }}',
versioning = '{{ versioning }}'
WHERE 
namespaceName = '{{ namespaceName }}' --required
AND bucketName = '{{ bucketName }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-client-request-id = '{{ opc-client-request-id}}'
RETURNING
id,
name,
approximateCount,
approximateSize,
autoTiering,
bucketScope,
compartmentId,
createdBy,
definedTags,
etag,
freeformTags,
isBucketKeyEnabled,
isReadOnly,
kmsKeyId,
metadata,
namespace,
objectEventsEnabled,
objectLifecyclePolicyEtag,
publicAccessType,
replicationEnabled,
storageTier,
timeCreated,
versioning;
```
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

Deletes a bucket if the bucket is already empty. If the bucket is not empty, use&lt;br /&gt;&#91;DeleteObject&#93;(#/en/objectstorage/20160918/Object/DeleteObject) first. In addition,&lt;br /&gt;you cannot delete a bucket that has a multipart upload in progress or a pre-authenticated&lt;br /&gt;request associated with that bucket.&lt;br /&gt;

```sql
DELETE FROM oci.object_storage.buckets
WHERE namespaceName = '{{ namespaceName }}' --required
AND bucketName = '{{ bucketName }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-client-request-id = '{{ opc-client-request-id }}'
;
```
</TabItem>
</Tabs>
