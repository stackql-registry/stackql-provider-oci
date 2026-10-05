--- 
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
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

Creates, updates, deletes, gets or lists a <code>groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.groups" /></td></tr>
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

The group was retrieved.

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
    <td>The OCID of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name you assign to the group during creation. The name must be unique across all groups in the tenancy and cannot be changed. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tenancy containing the group.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the group. Does not have to be unique, and it's changeable.  (For tenancies that support identity domains) You can have an empty description. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="inactiveStatus" /></td>
    <td><code>integer (int64)</code></td>
    <td>The detailed status of INACTIVE lifecycleState.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The group's current state. After creating a group, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the group was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A collection of users who all need the same type of access to a particular set of resources or compartment.&lt;br /&gt;For conceptual information about groups and other IAM Service components, see&lt;br /&gt;&#91;Overview of IAM&#93;(/Content/Identity/getstarted/identity-domains.htm).&lt;br /&gt;&lt;br /&gt;If you're federating with an identity provider (IdP), you need to create mappings between the groups&lt;br /&gt;defined in the IdP and groups you define in the IAM service. For more information, see&lt;br /&gt;&#91;Identity Providers and Federation&#93;(/Content/Identity/Concepts/federation.htm). Also see&lt;br /&gt;&#91;IdentityProvider&#93;(#/en/identity/20160918/IdentityProvider/) and&lt;br /&gt;&#91;IdpGroupMapping&#93;(#/en/identity/20160918/IdpGroupMapping/).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access,&lt;br /&gt;see &#91;Get Started with Policies&#93;(/Content/Identity/policiesgs/get-started-with-policies.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values&lt;br /&gt;using the API.&lt;br /&gt;

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
    <td>The OCID of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name you assign to the group during creation. The name must be unique across all groups in the tenancy and cannot be changed. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tenancy containing the group.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the group. Does not have to be unique, and it's changeable.  (For tenancies that support identity domains) You can have an empty description. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="inactiveStatus" /></td>
    <td><code>integer (int64)</code></td>
    <td>The detailed status of INACTIVE lifecycleState.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The group's current state. After creating a group, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the group was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-groupId"><code>groupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified group's information.&lt;br /&gt;&lt;br /&gt;This operation does not return a list of all the users in the group. To do that, use&lt;br /&gt;&#91;ListUserGroupMemberships&#93;(#/en/identity/20160918/UserGroupMembership/ListUserGroupMemberships) and&lt;br /&gt;provide the group's OCID as a query parameter in the request.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the groups in your tenancy. You must specify your tenancy's OCID as the value for&lt;br /&gt;the compartment ID (remember that the tenancy is simply the root compartment).&lt;br /&gt;See &#91;Where to Get the Tenancy's OCID and User's OCID&#93;(/Content/API/Concepts/apisigningkey.htm#five).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new group in your tenancy.&lt;br /&gt;&lt;br /&gt;You must specify your tenancy's OCID as the compartment ID in the request object (remember that the tenancy&lt;br /&gt;is simply the root compartment). Notice that IAM resources (users, groups, compartments, and some policies)&lt;br /&gt;reside within the tenancy itself, unlike cloud resources such as compute instances, which typically&lt;br /&gt;reside within compartments inside the tenancy. For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You must also specify a *name* for the group, which must be unique across all groups in your tenancy and&lt;br /&gt;cannot be changed. You can use this name or the OCID when writing policies that apply to the group. For more&lt;br /&gt;information about policies, see &#91;How Policies Work&#93;(/Content/Identity/policieshow/how-policies-work.htm).&lt;br /&gt;&lt;br /&gt;You must also specify a *description* for the group (although it can be an empty string). It does not&lt;br /&gt;have to be unique, and you can change it anytime with &#91;UpdateGroup&#93;(#/en/identity/20160918/Group/UpdateGroup).&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's `lifecycleState` will temporarily be CREATING. Before using the&lt;br /&gt;object, first make sure its `lifecycleState` has changed to ACTIVE.&lt;br /&gt;&lt;br /&gt;After creating the group, you need to put users in it and write policies for it.&lt;br /&gt;See &#91;AddUserToGroup&#93;(#/en/identity/20160918/UserGroupMembership/AddUserToGroup) and&lt;br /&gt;&#91;CreatePolicy&#93;(#/en/identity/20160918/Policy/CreatePolicy).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-groupId"><code>groupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified group.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-groupId"><code>groupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified group. The group must be empty.&lt;br /&gt;</td>
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
<tr id="parameter-groupId">
    <td><CopyableCode code="groupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the specified group's information.&lt;br /&gt;&lt;br /&gt;This operation does not return a list of all the users in the group. To do that, use&lt;br /&gt;&#91;ListUserGroupMemberships&#93;(#/en/identity/20160918/UserGroupMembership/ListUserGroupMemberships) and&lt;br /&gt;provide the group's OCID as a query parameter in the request.&lt;br /&gt;

```sql
SELECT
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
inactiveStatus,
lifecycleState,
timeCreated
FROM oci.identity.groups
WHERE groupId = '{{ groupId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the groups in your tenancy. You must specify your tenancy's OCID as the value for&lt;br /&gt;the compartment ID (remember that the tenancy is simply the root compartment).&lt;br /&gt;See &#91;Where to Get the Tenancy's OCID and User's OCID&#93;(/Content/API/Concepts/apisigningkey.htm#five).&lt;br /&gt;

```sql
SELECT
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
inactiveStatus,
lifecycleState,
timeCreated
FROM oci.identity.groups
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
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

Creates a new group in your tenancy.&lt;br /&gt;&lt;br /&gt;You must specify your tenancy's OCID as the compartment ID in the request object (remember that the tenancy&lt;br /&gt;is simply the root compartment). Notice that IAM resources (users, groups, compartments, and some policies)&lt;br /&gt;reside within the tenancy itself, unlike cloud resources such as compute instances, which typically&lt;br /&gt;reside within compartments inside the tenancy. For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You must also specify a *name* for the group, which must be unique across all groups in your tenancy and&lt;br /&gt;cannot be changed. You can use this name or the OCID when writing policies that apply to the group. For more&lt;br /&gt;information about policies, see &#91;How Policies Work&#93;(/Content/Identity/policieshow/how-policies-work.htm).&lt;br /&gt;&lt;br /&gt;You must also specify a *description* for the group (although it can be an empty string). It does not&lt;br /&gt;have to be unique, and you can change it anytime with &#91;UpdateGroup&#93;(#/en/identity/20160918/Group/UpdateGroup).&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's `lifecycleState` will temporarily be CREATING. Before using the&lt;br /&gt;object, first make sure its `lifecycleState` has changed to ACTIVE.&lt;br /&gt;&lt;br /&gt;After creating the group, you need to put users in it and write policies for it.&lt;br /&gt;See &#91;AddUserToGroup&#93;(#/en/identity/20160918/UserGroupMembership/AddUserToGroup) and&lt;br /&gt;&#91;CreatePolicy&#93;(#/en/identity/20160918/Policy/CreatePolicy).&lt;br /&gt;

```sql
INSERT INTO oci.identity.groups (
compartmentId,
definedTags,
description,
freeformTags,
name,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ description }}' /* required */,
'{{ freeformTags }}',
'{{ name }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
inactiveStatus,
lifecycleState,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the groups resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the tenancy containing the group.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        The description you assign to the group during creation. Does not have to be unique, and it's changeable.
        (For tenancies that support identity domains) You can have an empty description.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: name
      value: "{{ name }}"
      description: |
        The name you assign to the group during creation. The name must be unique across all groups
        in the tenancy and cannot be changed.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
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

Updates the specified group.

```sql
UPDATE oci.identity.groups
SET 
definedTags = '{{ definedTags }}',
description = '{{ description }}',
freeformTags = '{{ freeformTags }}'
WHERE 
groupId = '{{ groupId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
inactiveStatus,
lifecycleState,
timeCreated;
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

Deletes the specified group. The group must be empty.&lt;br /&gt;

```sql
DELETE FROM oci.identity.groups
WHERE groupId = '{{ groupId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
