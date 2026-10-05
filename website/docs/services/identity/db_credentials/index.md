--- 
title: db_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - db_credentials
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

Creates, updates, deletes, gets or lists a <code>db_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.db_credentials" /></td></tr>
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

As the name suggests, an `DbCredentialSummary` object contains information about an `DbCredential`.&lt;br /&gt;The DB credential is used for DB authentication with&lt;br /&gt;the &#91;DB Service&#93;.&lt;br /&gt;

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
    <td>The OCID of the DB credential.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the DB credential. Does not have to be unique, and it's changeable.  (For tenancies that support identity domains) You can have an empty description. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The credential's current state. After creating a DB credential, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (x-obmcs-enumref: #/definitions/DbCredential/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the `DbCredential` object was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when this credential will expire, in the format defined by RFC3339. Null if it never expires.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the user the DB credential belongs to.</td>
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
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the DB credentials for the specified user. The returned object contains the credential's OCID&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-password"><code>password</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new DB credential for the specified user.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-dbCredentialId"><code>dbCredentialId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified DB credential for the specified user.&lt;br /&gt;</td>
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
<tr id="parameter-dbCredentialId">
    <td><CopyableCode code="dbCredentialId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the DB credential.</td>
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
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given lifecycle state.  The state value is case-insensitive. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in a paginated "List" call. </td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given name exactly. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The value of the `opc-next-page` response header from the previous "List" call. </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for NAME is ascending. The NAME sort order is case sensitive.  **Note:** In general, some "List" operations (for example, `ListInstances`) let you optionally filter by Availability Domain if the scope of the resource type is within a single Availability Domain. If you call one of these "List" operations without specifying an Availability Domain, the resources are grouped by Availability Domain, then sorted. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). The NAME sort order is case sensitive. </td>
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

Lists the DB credentials for the specified user. The returned object contains the credential's OCID&lt;br /&gt;

```sql
SELECT
id,
description,
lifecycleState,
timeCreated,
timeExpires,
userId
FROM oci.identity.db_credentials
WHERE userId = '{{ userId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND name = '{{ name }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
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

Creates a new DB credential for the specified user.&lt;br /&gt;

```sql
INSERT INTO oci.identity.db_credentials (
description,
password,
userId,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ description }}' /* required */,
'{{ password }}' /* required */,
'{{ userId }}',
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
lifecycleDetails,
lifecycleState,
timeCreated,
timeExpires,
userId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_credentials
  props:
    - name: userId
      value: "{{ userId }}"
      description: Required parameter for the db_credentials resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_credentials resource.
    - name: description
      value: "{{ description }}"
      description: |
        The description you assign to the DB credentials during creation.
        (For tenancies that support identity domains) You can have an empty description.
    - name: password
      value: "{{ password }}"
      description: |
        The password for the DB credentials during creation.
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
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

Deletes the specified DB credential for the specified user.&lt;br /&gt;

```sql
DELETE FROM oci.identity.db_credentials
WHERE userId = '{{ userId }}' --required
AND dbCredentialId = '{{ dbCredentialId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
