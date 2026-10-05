--- 
title: api_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - api_keys
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

Creates, updates, deletes, gets or lists an <code>api_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.api_keys" /></td></tr>
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

A PEM-format RSA credential for securing requests to the Oracle Cloud Infrastructure REST API. Also known&lt;br /&gt;as an *API signing key*. Specifically, this is the public key from the key pair. The private key remains with&lt;br /&gt;the user calling the API. For information about generating a key pair&lt;br /&gt;in the required PEM format, see &#91;Required Keys and OCIDs&#93;(/Content/API/Concepts/apisigningkey.htm).&lt;br /&gt;&lt;br /&gt;**Important:** This is **not** the SSH key for accessing compute instances.&lt;br /&gt;&lt;br /&gt;Each user can have a maximum of three API signing keys.&lt;br /&gt;&lt;br /&gt;For more information about user credentials, see &#91;User Credentials&#93;(/Content/Identity/Concepts/usercredentials.htm).&lt;br /&gt;

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
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>The key's fingerprint (e.g., 12:34:56:78:90:ab:cd:ef:12:34:56:78:90:ab:cd:ef).</td>
</tr>
<tr>
    <td><CopyableCode code="inactiveStatus" /></td>
    <td><code>integer (int64)</code></td>
    <td>The detailed status of INACTIVE lifecycleState.</td>
</tr>
<tr>
    <td><CopyableCode code="keyId" /></td>
    <td><code>string</code></td>
    <td>An Oracle-assigned identifier for the key, in this format: TENANCY_OCID/USER_OCID/KEY_FINGERPRINT. </td>
</tr>
<tr>
    <td><CopyableCode code="keyValue" /></td>
    <td><code>string</code></td>
    <td>The key's value.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The API key's current state. After creating an `ApiKey` object, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the `ApiKey` object was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the user the key belongs to.</td>
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
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the API signing keys for the specified user. A user can have a maximum of three keys.&lt;br /&gt;&lt;br /&gt;Every user has permission to use this API call for *their own user ID*.  An administrator in your&lt;br /&gt;organization does not need to write a policy to give users this ability.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-fingerprint"><code>fingerprint</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified API signing key for the specified user.&lt;br /&gt;&lt;br /&gt;Every user has permission to use this operation to delete a key for *their own user ID*. An&lt;br /&gt;administrator in your organization does not need to write a policy to give users this ability.&lt;br /&gt;To compare, administrators who have permission to the tenancy can use this operation to delete&lt;br /&gt;a key for any user, including themselves.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#upload_api_key"><CopyableCode code="upload_api_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-key"><code>key</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Uploads an API signing key for the specified user.&lt;br /&gt;&lt;br /&gt;Every user has permission to use this operation to upload a key for *their own user ID*. An&lt;br /&gt;administrator in your organization does not need to write a policy to give users this ability.&lt;br /&gt;To compare, administrators who have permission to the tenancy can use this operation to upload a&lt;br /&gt;key for any user, including themselves.&lt;br /&gt;&lt;br /&gt;**Important:** Even though you have permission to upload an API key, you might not yet&lt;br /&gt;have permission to do much else. If you try calling an operation unrelated to your own credential&lt;br /&gt;management (e.g., `ListUsers`, `LaunchInstance`) and receive an "unauthorized" error,&lt;br /&gt;check with an administrator to confirm which IAM Service group(s) you're in and what access&lt;br /&gt;you have. Also confirm you're working in the correct compartment.&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's `lifecycleState` will temporarily be CREATING. Before using&lt;br /&gt;the object, first make sure its `lifecycleState` has changed to ACTIVE.&lt;br /&gt;</td>
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
<tr id="parameter-fingerprint">
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>The key's fingerprint.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the user.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
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

Lists the API signing keys for the specified user. A user can have a maximum of three keys.&lt;br /&gt;&lt;br /&gt;Every user has permission to use this API call for *their own user ID*.  An administrator in your&lt;br /&gt;organization does not need to write a policy to give users this ability.&lt;br /&gt;

```sql
SELECT
fingerprint,
inactiveStatus,
keyId,
keyValue,
lifecycleState,
timeCreated,
userId
FROM oci.identity.api_keys
WHERE userId = '{{ userId }}' -- required
AND region = '{{ region }}' -- required
;
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

Deletes the specified API signing key for the specified user.&lt;br /&gt;&lt;br /&gt;Every user has permission to use this operation to delete a key for *their own user ID*. An&lt;br /&gt;administrator in your organization does not need to write a policy to give users this ability.&lt;br /&gt;To compare, administrators who have permission to the tenancy can use this operation to delete&lt;br /&gt;a key for any user, including themselves.&lt;br /&gt;

```sql
DELETE FROM oci.identity.api_keys
WHERE userId = '{{ userId }}' --required
AND fingerprint = '{{ fingerprint }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="upload_api_key"
    values={[
        { label: 'upload_api_key', value: 'upload_api_key' }
    ]}
>
<TabItem value="upload_api_key">

Uploads an API signing key for the specified user.&lt;br /&gt;&lt;br /&gt;Every user has permission to use this operation to upload a key for *their own user ID*. An&lt;br /&gt;administrator in your organization does not need to write a policy to give users this ability.&lt;br /&gt;To compare, administrators who have permission to the tenancy can use this operation to upload a&lt;br /&gt;key for any user, including themselves.&lt;br /&gt;&lt;br /&gt;**Important:** Even though you have permission to upload an API key, you might not yet&lt;br /&gt;have permission to do much else. If you try calling an operation unrelated to your own credential&lt;br /&gt;management (e.g., `ListUsers`, `LaunchInstance`) and receive an "unauthorized" error,&lt;br /&gt;check with an administrator to confirm which IAM Service group(s) you're in and what access&lt;br /&gt;you have. Also confirm you're working in the correct compartment.&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's `lifecycleState` will temporarily be CREATING. Before using&lt;br /&gt;the object, first make sure its `lifecycleState` has changed to ACTIVE.&lt;br /&gt;

```sql
EXEC oci.identity.api_keys.upload_api_key 
@userId='{{ userId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"key": "{{ key }}"
}'
;
```
</TabItem>
</Tabs>
