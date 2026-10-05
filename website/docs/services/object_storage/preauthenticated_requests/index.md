--- 
title: preauthenticated_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - preauthenticated_requests
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

Creates, updates, deletes, gets or lists a <code>preauthenticated_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="preauthenticated_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.object_storage.preauthenticated_requests" /></td></tr>
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

Fetches the metadata for the specified pre-authenticated request.

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
    <td>The unique identifier to use when directly addressing the pre-authenticated request.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The user-provided name of the pre-authenticated request.</td>
</tr>
<tr>
    <td><CopyableCode code="accessType" /></td>
    <td><code>string</code></td>
    <td>The operation that can be performed on this resource. (ObjectRead, ObjectWrite, ObjectReadWrite, AnyObjectWrite, AnyObjectRead, AnyObjectReadWrite)</td>
</tr>
<tr>
    <td><CopyableCode code="bucketListingAction" /></td>
    <td><code>string</code></td>
    <td>Specifies whether a list operation is allowed on a PAR with accessType "AnyObjectRead" or "AnyObjectReadWrite". Deny: Prevents the user from performing a list operation. ListObjects: Authorizes the user to perform a list operation.  (x-obmcs-enumref: #/definitions/PreauthenticatedRequest/bucketListingAction)</td>
</tr>
<tr>
    <td><CopyableCode code="objectName" /></td>
    <td><code>string</code></td>
    <td>The name of object that is being granted access to by the pre-authenticated request. This can be null and if it is, the pre-authenticated request grants access to the entire bucket. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the pre-authenticated request was created as per &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="timeExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration date for the pre-authenticated request as per &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339). After this date the pre-authenticated request will no longer be valid. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Get summary information about pre-authenticated requests.&lt;br /&gt;

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
    <td>The unique identifier to use when directly addressing the pre-authenticated request.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The user-provided name of the pre-authenticated request.</td>
</tr>
<tr>
    <td><CopyableCode code="accessType" /></td>
    <td><code>string</code></td>
    <td>The operation that can be performed on this resource. (ObjectRead, ObjectWrite, ObjectReadWrite, AnyObjectWrite, AnyObjectRead, AnyObjectReadWrite)</td>
</tr>
<tr>
    <td><CopyableCode code="bucketListingAction" /></td>
    <td><code>string</code></td>
    <td>Specifies whether a list operation is allowed on a PAR with accessType "AnyObjectRead" or "AnyObjectReadWrite". Deny: Prevents the user from performing a list operation. ListObjects: Authorizes the user to perform a list operation.  (x-obmcs-enumref: #/definitions/PreauthenticatedRequest/bucketListingAction)</td>
</tr>
<tr>
    <td><CopyableCode code="objectName" /></td>
    <td><code>string</code></td>
    <td>The name of object that is being granted access to by the pre-authenticated request. This can be null and if it is, the pre-authenticated request grants access to the entire bucket. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the pre-authenticated request was created as per &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="timeExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiration date for the pre-authenticated request as per &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339). After this date the pre-authenticated request will no longer be valid. </td>
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
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-parId"><code>parId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Gets the pre-authenticated request for the bucket.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-objectNamePrefix"><code>objectNamePrefix</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Lists pre-authenticated requests for the bucket.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-accessType"><code>accessType</code></a>, <a href="#parameter-timeExpires"><code>timeExpires</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Creates a pre-authenticated request specific to the bucket.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-parId"><code>parId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Deletes the pre-authenticated request for the bucket.</td>
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
<tr id="parameter-parId">
    <td><CopyableCode code="parId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the pre-authenticated request. This can be used to manage operations against the pre-authenticated request, such as GET or DELETE. </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-objectNamePrefix">
    <td><CopyableCode code="objectNamePrefix" /></td>
    <td><code>string</code></td>
    <td>User-specified object name prefixes can be used to query and return a list of pre-authenticated requests.</td>
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

Gets the pre-authenticated request for the bucket.

```sql
SELECT
id,
name,
accessType,
bucketListingAction,
objectName,
timeCreated,
timeExpires
FROM oci.object_storage.preauthenticated_requests
WHERE namespaceName = '{{ namespaceName }}' -- required
AND bucketName = '{{ bucketName }}' -- required
AND parId = '{{ parId }}' -- required
AND region = '{{ region }}' -- required
AND opc-client-request-id = '{{ opc-client-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists pre-authenticated requests for the bucket.&lt;br /&gt;

```sql
SELECT
id,
name,
accessType,
bucketListingAction,
objectName,
timeCreated,
timeExpires
FROM oci.object_storage.preauthenticated_requests
WHERE namespaceName = '{{ namespaceName }}' -- required
AND bucketName = '{{ bucketName }}' -- required
AND region = '{{ region }}' -- required
AND objectNamePrefix = '{{ objectNamePrefix }}'
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

Creates a pre-authenticated request specific to the bucket.&lt;br /&gt;

```sql
INSERT INTO oci.object_storage.preauthenticated_requests (
accessType,
bucketListingAction,
name,
objectName,
timeExpires,
namespaceName,
bucketName,
region,
opc-client-request-id
)
SELECT 
'{{ accessType }}' /* required */,
'{{ bucketListingAction }}',
'{{ name }}' /* required */,
'{{ objectName }}',
'{{ timeExpires }}' /* required */,
'{{ namespaceName }}',
'{{ bucketName }}',
'{{ region }}',
'{{ opc-client-request-id }}'
RETURNING
id,
name,
accessType,
accessUri,
bucketListingAction,
objectName,
timeCreated,
timeExpires
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: preauthenticated_requests
  props:
    - name: namespaceName
      value: "{{ namespaceName }}"
      description: Required parameter for the preauthenticated_requests resource.
    - name: bucketName
      value: "{{ bucketName }}"
      description: Required parameter for the preauthenticated_requests resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the preauthenticated_requests resource.
    - name: accessType
      value: "{{ accessType }}"
      description: |
        The operation that can be performed on this resource.
      valid_values: ['ObjectRead', 'ObjectWrite', 'ObjectReadWrite', 'AnyObjectWrite', 'AnyObjectRead', 'AnyObjectReadWrite']
    - name: bucketListingAction
      value: "{{ bucketListingAction }}"
      description: |
        Specifies whether a list operation is allowed on a PAR with accessType "AnyObjectRead" or "AnyObjectReadWrite".
        Deny: Prevents the user from performing a list operation.
        ListObjects: Authorizes the user to perform a list operation.
      default: Deny
    - name: name
      value: "{{ name }}"
      description: |
        A user-specified name for the pre-authenticated request. Names can be helpful in managing pre-authenticated requests.
        Avoid entering confidential information.
    - name: objectName
      value: "{{ objectName }}"
      description: |
        The name of the object that is being granted access to by the pre-authenticated request. Avoid entering confidential
        information. The object name can be null and if so, the pre-authenticated request grants access to the entire bucket
        if the access type allows that. The object name can be a prefix as well, in that case pre-authenticated request
        grants access to all the objects within the bucket starting with that prefix provided that we have the correct access type.
    - name: timeExpires
      value: "{{ timeExpires }}"
      description: |
        The expiration date for the pre-authenticated request as per [RFC 3339](https://tools.ietf.org/html/rfc3339).
        After this date the pre-authenticated request will no longer be valid.
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

Deletes the pre-authenticated request for the bucket.

```sql
DELETE FROM oci.object_storage.preauthenticated_requests
WHERE namespaceName = '{{ namespaceName }}' --required
AND bucketName = '{{ bucketName }}' --required
AND parId = '{{ parId }}' --required
AND region = '{{ region }}' --required
AND opc-client-request-id = '{{ opc-client-request-id }}'
;
```
</TabItem>
</Tabs>
