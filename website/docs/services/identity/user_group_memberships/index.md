--- 
title: user_group_memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - user_group_memberships
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

Creates, updates, deletes, gets or lists a <code>user_group_memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_group_memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.user_group_memberships" /></td></tr>
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

The membership was retrieved.

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
    <td>The OCID of the membership.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tenancy containing the user, group, and membership object.</td>
</tr>
<tr>
    <td><CopyableCode code="groupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="inactiveStatus" /></td>
    <td><code>integer (int64)</code></td>
    <td>The detailed status of INACTIVE lifecycleState.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The membership's current state.  After creating a membership object, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the membership was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the user.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An object that represents the membership of a user in a group. When you add a user to a group, the result is a&lt;br /&gt;`UserGroupMembership` with its own OCID. To remove a user from a group, you delete the `UserGroupMembership` object.&lt;br /&gt;

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
    <td>The OCID of the membership.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tenancy containing the user, group, and membership object.</td>
</tr>
<tr>
    <td><CopyableCode code="groupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="inactiveStatus" /></td>
    <td><code>integer (int64)</code></td>
    <td>The detailed status of INACTIVE lifecycleState.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The membership's current state.  After creating a membership object, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the membership was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the user.</td>
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
    <td><a href="#parameter-userGroupMembershipId"><code>userGroupMembershipId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified UserGroupMembership's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-groupId"><code>groupId</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Lists the `UserGroupMembership` objects in your tenancy. You must specify your tenancy's OCID&lt;br /&gt;as the value for the compartment ID&lt;br /&gt;(see &#91;Where to Get the Tenancy's OCID and User's OCID&#93;(/Content/API/Concepts/apisigningkey.htm#five)).&lt;br /&gt;You must also then filter the list in one of these ways:&lt;br /&gt;&lt;br /&gt;- You can limit the results to just the memberships for a given user by specifying a `userId`.&lt;br /&gt;- Similarly, you can limit the results to just the memberships for a given group by specifying a `groupId`.&lt;br /&gt;- You can set both the `userId` and `groupId` to determine if the specified user is in the specified group.&lt;br /&gt;If the answer is no, the response is an empty list.&lt;br /&gt;- Although`userId` and `groupId` are not individually required, you must set one of them.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_user_to_group"><CopyableCode code="add_user_to_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-groupId"><code>groupId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Adds the specified user to the specified group and returns a `UserGroupMembership` object with its own OCID.&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's `lifecycleState` will temporarily be CREATING. Before using the&lt;br /&gt;object, first make sure its `lifecycleState` has changed to ACTIVE.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_user_from_group"><CopyableCode code="remove_user_from_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-userGroupMembershipId"><code>userGroupMembershipId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Removes a user from a group by deleting the corresponding `UserGroupMembership`.</td>
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
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment (remember that the tenancy is simply the root compartment). </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-userGroupMembershipId">
    <td><CopyableCode code="userGroupMembershipId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the userGroupMembership.</td>
</tr>
<tr id="parameter-groupId">
    <td><CopyableCode code="groupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the group.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in a paginated "List" call. </td>
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
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the user.</td>
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

Gets the specified UserGroupMembership's information.

```sql
SELECT
id,
compartmentId,
groupId,
inactiveStatus,
lifecycleState,
timeCreated,
userId
FROM oci.identity.user_group_memberships
WHERE userGroupMembershipId = '{{ userGroupMembershipId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the `UserGroupMembership` objects in your tenancy. You must specify your tenancy's OCID&lt;br /&gt;as the value for the compartment ID&lt;br /&gt;(see &#91;Where to Get the Tenancy's OCID and User's OCID&#93;(/Content/API/Concepts/apisigningkey.htm#five)).&lt;br /&gt;You must also then filter the list in one of these ways:&lt;br /&gt;&lt;br /&gt;- You can limit the results to just the memberships for a given user by specifying a `userId`.&lt;br /&gt;- Similarly, you can limit the results to just the memberships for a given group by specifying a `groupId`.&lt;br /&gt;- You can set both the `userId` and `groupId` to determine if the specified user is in the specified group.&lt;br /&gt;If the answer is no, the response is an empty list.&lt;br /&gt;- Although`userId` and `groupId` are not individually required, you must set one of them.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
groupId,
inactiveStatus,
lifecycleState,
timeCreated,
userId
FROM oci.identity.user_group_memberships
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND userId = '{{ userId }}'
AND groupId = '{{ groupId }}'
AND page = '{{ page }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_user_to_group"
    values={[
        { label: 'add_user_to_group', value: 'add_user_to_group' },
        { label: 'remove_user_from_group', value: 'remove_user_from_group' }
    ]}
>
<TabItem value="add_user_to_group">

Adds the specified user to the specified group and returns a `UserGroupMembership` object with its own OCID.&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's `lifecycleState` will temporarily be CREATING. Before using the&lt;br /&gt;object, first make sure its `lifecycleState` has changed to ACTIVE.&lt;br /&gt;

```sql
EXEC oci.identity.user_group_memberships.add_user_to_group 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"groupId": "{{ groupId }}", 
"userId": "{{ userId }}"
}'
;
```
</TabItem>
<TabItem value="remove_user_from_group">

Removes a user from a group by deleting the corresponding `UserGroupMembership`.

```sql
EXEC oci.identity.user_group_memberships.remove_user_from_group 
@userGroupMembershipId='{{ userGroupMembershipId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}'
;
```
</TabItem>
</Tabs>
