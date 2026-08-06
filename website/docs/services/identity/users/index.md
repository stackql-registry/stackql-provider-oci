--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.users" /></td></tr>
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

The user was retrieved.

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
    <td>The OCID of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name you assign to the user during creation. This is the user's login for the Console. The name must be unique across all users in the tenancy and cannot be changed. </td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Properties indicating how the user is allowed to authenticate.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tenancy containing the user.</td>
</tr>
<tr>
    <td><CopyableCode code="dbUserName" /></td>
    <td><code>string</code></td>
    <td>DB username of the DB credential. Has to be unique across the tenancy.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the user. Does not have to be unique, and it's changeable.  (For tenancies that support identity domains) You can have an empty description. </td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email address you assign to the user. The email address must be unique across all users in the tenancy.  (For tenancies that support identity domains) The email address is required unless the requirement is disabled at the tenancy level. </td>
</tr>
<tr>
    <td><CopyableCode code="emailVerified" /></td>
    <td><code>boolean</code></td>
    <td>Whether the email address has been validated.</td>
</tr>
<tr>
    <td><CopyableCode code="externalIdentifier" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user in the identity provider</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="identityProviderId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the `IdentityProvider` this user belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="inactiveStatus" /></td>
    <td><code>integer (int64)</code></td>
    <td>Returned only if the user's `lifecycleState` is INACTIVE. A 16-bit value showing the reason why the user is inactive:  - bit 0: SUSPENDED (reserved for future use) - bit 1: DISABLED (reserved for future use) - bit 2: BLOCKED (the user has exceeded the maximum number of failed login attempts for the Console) </td>
</tr>
<tr>
    <td><CopyableCode code="isMfaActivated" /></td>
    <td><code>boolean</code></td>
    <td>Flag indicates if MFA has been activated for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSuccessfulLoginTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the user most recently logged in the format defined by RFC3339 (ex. `2016-08-25T21:10:29.600Z`). If there is no login history, this field is null.  For illustrative purposes, suppose we have a user who has logged in at July 1st, 2020 at 1200 PST and logged out 30 minutes later. They then login again on July 2nd, 2020 at 1500 PST.  Their previousSuccessfulLoginTime would be `2020-07-01:19:00.000Z`.  Their lastSuccessfulLoginTime would be `2020-07-02:22:00.000Z`. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The user's current state. After creating a user, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="previousSuccessfulLoginTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the user most recently logged in the format defined by RFC3339 (ex. `2016-08-25T21:10:29.600Z`). If there is no login history, this field is null.  For illustrative purposes, suppose we have a user who has logged in at July 1st, 2020 at 1200 PST and logged out 30 minutes later. They then login again on July 2nd, 2020 at 1500 PST.  Their previousSuccessfulLoginTime would be `2020-07-01:19:00.000Z`.  Their lastSuccessfulLoginTime would be `2020-07-02:22:00.000Z`. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the user was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An individual employee or system that needs to manage or use your company's Oracle Cloud Infrastructure&lt;br /&gt;resources. Users might need to launch instances, manage remote disks, work with your cloud network, etc. Users&lt;br /&gt;have one or more IAM Service credentials (&#91;ApiKey&#93;(#/en/identity/20160918/ApiKey/),&lt;br /&gt;&#91;UIPassword&#93;(#/en/identity/20160918/UIPassword/), &#91;SwiftPassword&#93;(#/en/identity/20160918/SwiftPassword/) and&lt;br /&gt;&#91;AuthToken&#93;(#/en/identity/20160918/AuthToken/)).&lt;br /&gt;For more information, see &#91;User Credentials&#93;(/Content/Identity/usercred/usercredentials.htm)). End users of your&lt;br /&gt;application are not typically IAM Service users, but for tenancies that have identity domains, they might be.&lt;br /&gt;For conceptual information about users and other IAM Service components, see &#91;Overview of IAM&#93;(/Content/Identity/getstarted/identity-domains.htm).&lt;br /&gt;&lt;br /&gt;These users are created directly within the Oracle Cloud Infrastructure system, via the IAM service.&lt;br /&gt;They are different from *federated users*, who authenticate themselves to the Oracle Cloud Infrastructure&lt;br /&gt;Console via an identity provider. For more information, see&lt;br /&gt;&#91;Identity Providers and Federation&#93;(/Content/Identity/Concepts/federation.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access,&lt;br /&gt;see &#91;Get Started with Policies&#93;(/Content/Identity/policiesgs/get-started-with-policies.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values&lt;br /&gt;using the API.&lt;br /&gt;

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
    <td>The OCID of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name you assign to the user during creation. This is the user's login for the Console. The name must be unique across all users in the tenancy and cannot be changed. </td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Properties indicating how the user is allowed to authenticate.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tenancy containing the user.</td>
</tr>
<tr>
    <td><CopyableCode code="dbUserName" /></td>
    <td><code>string</code></td>
    <td>DB username of the DB credential. Has to be unique across the tenancy.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the user. Does not have to be unique, and it's changeable.  (For tenancies that support identity domains) You can have an empty description. </td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email address you assign to the user. The email address must be unique across all users in the tenancy.  (For tenancies that support identity domains) The email address is required unless the requirement is disabled at the tenancy level. </td>
</tr>
<tr>
    <td><CopyableCode code="emailVerified" /></td>
    <td><code>boolean</code></td>
    <td>Whether the email address has been validated.</td>
</tr>
<tr>
    <td><CopyableCode code="externalIdentifier" /></td>
    <td><code>string</code></td>
    <td>Identifier of the user in the identity provider</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="identityProviderId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the `IdentityProvider` this user belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="inactiveStatus" /></td>
    <td><code>integer (int64)</code></td>
    <td>Returned only if the user's `lifecycleState` is INACTIVE. A 16-bit value showing the reason why the user is inactive:  - bit 0: SUSPENDED (reserved for future use) - bit 1: DISABLED (reserved for future use) - bit 2: BLOCKED (the user has exceeded the maximum number of failed login attempts for the Console) </td>
</tr>
<tr>
    <td><CopyableCode code="isMfaActivated" /></td>
    <td><code>boolean</code></td>
    <td>Flag indicates if MFA has been activated for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="lastSuccessfulLoginTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the user most recently logged in the format defined by RFC3339 (ex. `2016-08-25T21:10:29.600Z`). If there is no login history, this field is null.  For illustrative purposes, suppose we have a user who has logged in at July 1st, 2020 at 1200 PST and logged out 30 minutes later. They then login again on July 2nd, 2020 at 1500 PST.  Their previousSuccessfulLoginTime would be `2020-07-01:19:00.000Z`.  Their lastSuccessfulLoginTime would be `2020-07-02:22:00.000Z`. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The user's current state. After creating a user, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="previousSuccessfulLoginTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the user most recently logged in the format defined by RFC3339 (ex. `2016-08-25T21:10:29.600Z`). If there is no login history, this field is null.  For illustrative purposes, suppose we have a user who has logged in at July 1st, 2020 at 1200 PST and logged out 30 minutes later. They then login again on July 2nd, 2020 at 1500 PST.  Their previousSuccessfulLoginTime would be `2020-07-01:19:00.000Z`.  Their lastSuccessfulLoginTime would be `2020-07-02:22:00.000Z`. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the user was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified user's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-identityProviderId"><code>identityProviderId</code></a>, <a href="#parameter-externalIdentifier"><code>externalIdentifier</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the users in your tenancy. You must specify your tenancy's OCID as the value for the&lt;br /&gt;compartment ID (remember that the tenancy is simply the root compartment).&lt;br /&gt;See &#91;Where to Get the Tenancy's OCID and User's OCID&#93;(/Content/API/Concepts/apisigningkey.htm#five).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new user in your tenancy. For conceptual information about users, your tenancy, and other&lt;br /&gt;IAM Service components, see &#91;Overview of IAM&#93;(/Content/Identity/getstarted/identity-domains.htm).&lt;br /&gt;&lt;br /&gt;You must specify your tenancy's OCID as the compartment ID in the request object (remember that the&lt;br /&gt;tenancy is simply the root compartment). Notice that IAM resources (users, groups, compartments, and&lt;br /&gt;some policies) reside within the tenancy itself, unlike cloud resources such as compute instances,&lt;br /&gt;which typically reside within compartments inside the tenancy. For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You must also specify a *name* for the user, which must be unique across all users in your tenancy&lt;br /&gt;and cannot be changed. Allowed characters: No spaces. Only letters, numerals, hyphens, periods,&lt;br /&gt;underscores, +, and @. If you specify a name that's already in use, you'll get a 409 error.&lt;br /&gt;This name will be the user's login to the Console. You might want to pick a&lt;br /&gt;name that your company's own identity system (e.g., Active Directory, LDAP, etc.) already uses.&lt;br /&gt;If you delete a user and then create a new user with the same name, they'll be considered different&lt;br /&gt;users because they have different OCIDs.&lt;br /&gt;&lt;br /&gt;You must also specify a *description* for the user (although it can be an empty string).&lt;br /&gt;It does not have to be unique, and you can change it anytime with&lt;br /&gt;&#91;UpdateUser&#93;(#/en/identity/20160918/User/UpdateUser). You can use the field to provide the user's&lt;br /&gt;full name, a description, a nickname, or other information to generally identify the user.&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's `lifecycleState` will temporarily be CREATING. Before&lt;br /&gt;using the object, first make sure its `lifecycleState` has changed to ACTIVE.&lt;br /&gt;&lt;br /&gt;A new user has no permissions until you place the user in one or more groups (see&lt;br /&gt;&#91;AddUserToGroup&#93;(#/en/identity/20160918/UserGroupMembership/AddUserToGroup)). If the user needs to&lt;br /&gt;access the Console, you need to provide the user a password (see&lt;br /&gt;&#91;CreateOrResetUIPassword&#93;(#/en/identity/20160918/UIPassword/CreateOrResetUIPassword)).&lt;br /&gt;If the user needs to access the Oracle Cloud Infrastructure REST API, you need to upload a&lt;br /&gt;public API signing key for that user (see&lt;br /&gt;&#91;Required Keys and OCIDs&#93;(/Content/API/Concepts/apisigningkey.htm) and also&lt;br /&gt;&#91;UploadApiKey&#93;(#/en/identity/20160918/ApiKey/UploadApiKey)).&lt;br /&gt;&lt;br /&gt;**Important:** Make sure to inform the new user which compartment(s) they have access to.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the description of the specified user.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified user. The user must not be in any groups.</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the user.</td>
</tr>
<tr id="parameter-externalIdentifier">
    <td><CopyableCode code="externalIdentifier" /></td>
    <td><code>string</code></td>
    <td>The id of a user in the identity provider. </td>
</tr>
<tr id="parameter-identityProviderId">
    <td><CopyableCode code="identityProviderId" /></td>
    <td><code>string</code></td>
    <td>The id of the identity provider. </td>
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

Gets the specified user's information.

```sql
SELECT
id,
name,
capabilities,
compartmentId,
dbUserName,
definedTags,
description,
email,
emailVerified,
externalIdentifier,
freeformTags,
identityProviderId,
inactiveStatus,
isMfaActivated,
lastSuccessfulLoginTime,
lifecycleState,
previousSuccessfulLoginTime,
timeCreated
FROM oci.identity.users
WHERE userId = '{{ userId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the users in your tenancy. You must specify your tenancy's OCID as the value for the&lt;br /&gt;compartment ID (remember that the tenancy is simply the root compartment).&lt;br /&gt;See &#91;Where to Get the Tenancy's OCID and User's OCID&#93;(/Content/API/Concepts/apisigningkey.htm#five).&lt;br /&gt;

```sql
SELECT
id,
name,
capabilities,
compartmentId,
dbUserName,
definedTags,
description,
email,
emailVerified,
externalIdentifier,
freeformTags,
identityProviderId,
inactiveStatus,
isMfaActivated,
lastSuccessfulLoginTime,
lifecycleState,
previousSuccessfulLoginTime,
timeCreated
FROM oci.identity.users
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND identityProviderId = '{{ identityProviderId }}'
AND externalIdentifier = '{{ externalIdentifier }}'
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

Creates a new user in your tenancy. For conceptual information about users, your tenancy, and other&lt;br /&gt;IAM Service components, see &#91;Overview of IAM&#93;(/Content/Identity/getstarted/identity-domains.htm).&lt;br /&gt;&lt;br /&gt;You must specify your tenancy's OCID as the compartment ID in the request object (remember that the&lt;br /&gt;tenancy is simply the root compartment). Notice that IAM resources (users, groups, compartments, and&lt;br /&gt;some policies) reside within the tenancy itself, unlike cloud resources such as compute instances,&lt;br /&gt;which typically reside within compartments inside the tenancy. For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You must also specify a *name* for the user, which must be unique across all users in your tenancy&lt;br /&gt;and cannot be changed. Allowed characters: No spaces. Only letters, numerals, hyphens, periods,&lt;br /&gt;underscores, +, and @. If you specify a name that's already in use, you'll get a 409 error.&lt;br /&gt;This name will be the user's login to the Console. You might want to pick a&lt;br /&gt;name that your company's own identity system (e.g., Active Directory, LDAP, etc.) already uses.&lt;br /&gt;If you delete a user and then create a new user with the same name, they'll be considered different&lt;br /&gt;users because they have different OCIDs.&lt;br /&gt;&lt;br /&gt;You must also specify a *description* for the user (although it can be an empty string).&lt;br /&gt;It does not have to be unique, and you can change it anytime with&lt;br /&gt;&#91;UpdateUser&#93;(#/en/identity/20160918/User/UpdateUser). You can use the field to provide the user's&lt;br /&gt;full name, a description, a nickname, or other information to generally identify the user.&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's `lifecycleState` will temporarily be CREATING. Before&lt;br /&gt;using the object, first make sure its `lifecycleState` has changed to ACTIVE.&lt;br /&gt;&lt;br /&gt;A new user has no permissions until you place the user in one or more groups (see&lt;br /&gt;&#91;AddUserToGroup&#93;(#/en/identity/20160918/UserGroupMembership/AddUserToGroup)). If the user needs to&lt;br /&gt;access the Console, you need to provide the user a password (see&lt;br /&gt;&#91;CreateOrResetUIPassword&#93;(#/en/identity/20160918/UIPassword/CreateOrResetUIPassword)).&lt;br /&gt;If the user needs to access the Oracle Cloud Infrastructure REST API, you need to upload a&lt;br /&gt;public API signing key for that user (see&lt;br /&gt;&#91;Required Keys and OCIDs&#93;(/Content/API/Concepts/apisigningkey.htm) and also&lt;br /&gt;&#91;UploadApiKey&#93;(#/en/identity/20160918/ApiKey/UploadApiKey)).&lt;br /&gt;&lt;br /&gt;**Important:** Make sure to inform the new user which compartment(s) they have access to.&lt;br /&gt;

```sql
INSERT INTO oci.identity.users (
compartmentId,
definedTags,
description,
email,
freeformTags,
name,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ description }}' /* required */,
'{{ email }}',
'{{ freeformTags }}',
'{{ name }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
name,
capabilities,
compartmentId,
dbUserName,
definedTags,
description,
email,
emailVerified,
externalIdentifier,
freeformTags,
identityProviderId,
inactiveStatus,
isMfaActivated,
lastSuccessfulLoginTime,
lifecycleState,
previousSuccessfulLoginTime,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the users resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the tenancy containing the user.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        The description you assign to the user during creation. Does not have to be unique, and it's changeable.
        (For tenancies that support identity domains) You can have an empty description.
    - name: email
      value: "{{ email }}"
      description: |
        The email you assign to the user during creation. The email must be unique across all users in the tenancy.
        (For tenancies that support identity domains) You must provide an email for each user.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: name
      value: "{{ name }}"
      description: |
        The name you assign to the user during creation. This is the user's login for the Console.
        The name must be unique across all users in the tenancy and cannot be changed.
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

Updates the description of the specified user.

```sql
UPDATE oci.identity.users
SET 
dbUserName = '{{ dbUserName }}',
definedTags = '{{ definedTags }}',
description = '{{ description }}',
email = '{{ email }}',
freeformTags = '{{ freeformTags }}'
WHERE 
userId = '{{ userId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
name,
capabilities,
compartmentId,
dbUserName,
definedTags,
description,
email,
emailVerified,
externalIdentifier,
freeformTags,
identityProviderId,
inactiveStatus,
isMfaActivated,
lastSuccessfulLoginTime,
lifecycleState,
previousSuccessfulLoginTime,
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

Deletes the specified user. The user must not be in any groups.

```sql
DELETE FROM oci.identity.users
WHERE userId = '{{ userId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
