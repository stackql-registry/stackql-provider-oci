--- 
title: object_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - object_versions
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

Creates, updates, deletes, gets or lists an <code>object_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="object_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.object_storage.object_versions" /></td></tr>
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

List of object version summaries, including optional prefixes and, in a truncated response, the `opc-next-page` to&lt;br /&gt;start the next page of results.&lt;br /&gt;

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
    <td>The name of the object. Avoid entering confidential information. Example: test/object1.log </td>
</tr>
<tr>
    <td><CopyableCode code="archivalState" /></td>
    <td><code>string</code></td>
    <td>Archival state of an object. This field is set only for objects in Archive tier. (Archived, Restoring, Restored) (x-obmcs-top-level-enum: #/definitions/ArchivalState)</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The current entity tag (ETag) for the object.</td>
</tr>
<tr>
    <td><CopyableCode code="isDeleteMarker" /></td>
    <td><code>boolean</code></td>
    <td>This flag will indicate if the version is deleted or not.</td>
</tr>
<tr>
    <td><CopyableCode code="md5" /></td>
    <td><code>string</code></td>
    <td>Base64-encoded MD5 hash of the object data.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int64)</code></td>
    <td>Size of the object in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="storageTier" /></td>
    <td><code>string</code></td>
    <td>The storage tier that the object is stored in. (Standard, InfrequentAccess, Archive) (x-obmcs-top-level-enum: #/definitions/StorageTier)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the object was created, as described in &#91;RFC 2616&#93;(https:​//tools.ietf.org/html/rfc2616#section-14.29).</td>
</tr>
<tr>
    <td><CopyableCode code="timeModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the object was modified, as described in &#91;RFC 2616&#93;(https:​//tools.ietf.org/rfc/rfc2616#section-14.29).</td>
</tr>
<tr>
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>VersionId of the object.</td>
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
    <td><a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-start"><code>start</code></a>, <a href="#parameter-end"><code>end</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-delimiter"><code>delimiter</code></a>, <a href="#parameter-fields"><code>fields</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a>, <a href="#parameter-startAfter"><code>startAfter</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the object versions in a bucket.&lt;br /&gt;&lt;br /&gt;ListObjectVersions returns an ObjectVersionCollection containing at most 1000 object versions. To paginate through&lt;br /&gt;more object versions, use the returned `opc-next-page` value with the `page` request parameter.&lt;br /&gt;&lt;br /&gt;To use this and other API operations, you must be authorized in an IAM policy. If you are not authorized,&lt;br /&gt;talk to an administrator. If you are an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;</td>
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
<tr id="parameter-delimiter">
    <td><CopyableCode code="delimiter" /></td>
    <td><code>string</code></td>
    <td>When this parameter is set, only objects whose names do not contain the delimiter character (after an optionally specified prefix) are returned in the objects key of the response body. Scanned objects whose names contain the delimiter have the part of their name up to the first occurrence of the delimiter (including the optional prefix) returned as a set of prefixes. Note that only '/' is a supported delimiter character at this time. </td>
</tr>
<tr id="parameter-end">
    <td><CopyableCode code="end" /></td>
    <td><code>string</code></td>
    <td>Returns object names which are lexicographically strictly less than this parameter.</td>
</tr>
<tr id="parameter-fields">
    <td><CopyableCode code="fields" /></td>
    <td><code>string</code></td>
    <td>Object summary by default includes only the 'name' field. Use this parameter to also include 'size' (object size in bytes), 'etag', 'md5', 'timeCreated' (object creation date and time), 'timeModified' (object modification date and time), 'storageTier' and 'archivalState' fields. Specify the value of this parameter as a comma-separated, case-insensitive list of those field names.  For example 'name,etag,timeCreated,md5,timeModified,storageTier,archivalState'. </td>
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
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>The string to use for matching against the start of object names in a list query.</td>
</tr>
<tr id="parameter-start">
    <td><CopyableCode code="start" /></td>
    <td><code>string</code></td>
    <td>Returns object names which are lexicographically greater than or equal to this parameter.</td>
</tr>
<tr id="parameter-startAfter">
    <td><CopyableCode code="startAfter" /></td>
    <td><code>string</code></td>
    <td>Returns object names which are lexicographically strictly greater than this parameter.</td>
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

Lists the object versions in a bucket.&lt;br /&gt;&lt;br /&gt;ListObjectVersions returns an ObjectVersionCollection containing at most 1000 object versions. To paginate through&lt;br /&gt;more object versions, use the returned `opc-next-page` value with the `page` request parameter.&lt;br /&gt;&lt;br /&gt;To use this and other API operations, you must be authorized in an IAM policy. If you are not authorized,&lt;br /&gt;talk to an administrator. If you are an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

```sql
SELECT
name,
archivalState,
etag,
isDeleteMarker,
md5,
size,
storageTier,
timeCreated,
timeModified,
versionId
FROM oci.object_storage.object_versions
WHERE namespaceName = '{{ namespaceName }}' -- required
AND bucketName = '{{ bucketName }}' -- required
AND region = '{{ region }}' -- required
AND prefix = '{{ prefix }}'
AND start = '{{ start }}'
AND end = '{{ end }}'
AND limit = '{{ limit }}'
AND delimiter = '{{ delimiter }}'
AND fields = '{{ fields }}'
AND opc-client-request-id = '{{ opc-client-request-id }}'
AND startAfter = '{{ startAfter }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
