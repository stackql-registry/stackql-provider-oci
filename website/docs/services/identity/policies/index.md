--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.policies" /></td></tr>
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

The policy was retrieved.

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
    <td>The OCID of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name you assign to the policy during creation. The name must be unique across all policies in the tenancy and cannot be changed. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the policy (either the tenancy or another compartment). </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the policy. Does not have to be unique, and it's changeable.</td>
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
    <td>The policy's current state. After creating a policy, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="locks" /></td>
    <td><code>array</code></td>
    <td>Locks associated with this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="statements" /></td>
    <td><code>array</code></td>
    <td>An array of one or more policy statements written in the policy language.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the policy was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="versionDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The version of the policy. If null or set to an empty string, when a request comes in for authorization, the policy will be evaluated according to the current behavior of the services at that moment. If set to a particular date (YYYY-MM-DD), the policy will be evaluated according to the behavior of the services on that date. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A document that specifies the type of access a group has to the resources in a compartment. For information about&lt;br /&gt;policies and other IAM Service components, see&lt;br /&gt;&#91;Overview of IAM&#93;(/Content/Identity/getstarted/identity-domains.htm). If you're new to policies, see&lt;br /&gt;&#91;Get Started with Policies&#93;(/Content/Identity/policiesgs/get-started-with-policies.htm).&lt;br /&gt;&lt;br /&gt;The word "policy" is used by people in different ways:&lt;br /&gt;&lt;br /&gt;  * An individual statement written in the policy language&lt;br /&gt;  * A collection of statements in a single, named "policy" document (which has an Oracle Cloud ID (OCID) assigned to it)&lt;br /&gt;  * The overall body of policies your organization uses to control access to resources&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator.&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values&lt;br /&gt;using the API.&lt;br /&gt;

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
    <td>The OCID of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name you assign to the policy during creation. The name must be unique across all policies in the tenancy and cannot be changed. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the policy (either the tenancy or another compartment). </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the policy. Does not have to be unique, and it's changeable.</td>
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
    <td>The policy's current state. After creating a policy, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="locks" /></td>
    <td><code>array</code></td>
    <td>Locks associated with this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="statements" /></td>
    <td><code>array</code></td>
    <td>An array of one or more policy statements written in the policy language.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the policy was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="versionDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The version of the policy. If null or set to an empty string, when a request comes in for authorization, the policy will be evaluated according to the current behavior of the services at that moment. If set to a particular date (YYYY-MM-DD), the policy will be evaluated according to the behavior of the services on that date. </td>
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
    <td><a href="#parameter-policyId"><code>policyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified policy's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the policies in the specified compartment (either the tenancy or another of your compartments).&lt;br /&gt;See &#91;Where to Get the Tenancy's OCID and User's OCID&#93;(/Content/API/Concepts/apisigningkey.htm#five).&lt;br /&gt;&lt;br /&gt;To determine which policies apply to a particular group or compartment, you must view the individual&lt;br /&gt;statements inside all your policies. There isn't a way to automatically obtain that information via the API.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-statements"><code>statements</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new policy in the specified compartment (either the tenancy or another of your compartments).&lt;br /&gt;If you're new to policies, see &#91;Get Started with Policies&#93;(/Content/Identity/policiesgs/get-started-with-policies.htm).&lt;br /&gt;&lt;br /&gt;You must specify a *name* for the policy, which must be unique across all policies in your tenancy&lt;br /&gt;and cannot be changed.&lt;br /&gt;&lt;br /&gt;You must also specify a *description* for the policy (although it can be an empty string). It does not&lt;br /&gt;have to be unique, and you can change it anytime with &#91;UpdatePolicy&#93;(#/en/identity/20160918/Policy/UpdatePolicy).&lt;br /&gt;&lt;br /&gt;You must specify one or more policy statements in the statements array. For information about writing&lt;br /&gt;policies, see &#91;How Policies Work&#93;(/Content/Identity/policieshow/how-policies-work.htm) and&lt;br /&gt;&#91;Common Policies&#93;(/Content/Identity/policiescommon/commonpolicies.htm).&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's `lifecycleState` will temporarily be CREATING. Before using the&lt;br /&gt;object, first make sure its `lifecycleState` has changed to ACTIVE.&lt;br /&gt;&lt;br /&gt;New policies take effect typically within 10 seconds.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policyId"><code>policyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-isLockOverride"><code>isLockOverride</code></a></td>
    <td>Updates the specified policy. You can update the description or the policy statements themselves.&lt;br /&gt;&lt;br /&gt;Policy changes take effect typically within 10 seconds.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policyId"><code>policyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-isLockOverride"><code>isLockOverride</code></a></td>
    <td>Deletes the specified policy. The deletion takes effect typically within 10 seconds.</td>
</tr>
<tr>
    <td><a href="#add_policy_lock"><CopyableCode code="add_policy_lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-policyId"><code>policyId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Add a resource lock to a tag namespace.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_policy_lock"><CopyableCode code="remove_policy_lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-policyId"><code>policyId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Remove a resource lock to a policy&lt;br /&gt;</td>
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
<tr id="parameter-policyId">
    <td><CopyableCode code="policyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the policy.</td>
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
<tr id="parameter-isLockOverride">
    <td><CopyableCode code="isLockOverride" /></td>
    <td><code>boolean</code></td>
    <td>Whether to override locks (if any exist).</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the specified policy's information.

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
locks,
statements,
timeCreated,
versionDate
FROM oci.identity.policies
WHERE policyId = '{{ policyId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the policies in the specified compartment (either the tenancy or another of your compartments).&lt;br /&gt;See &#91;Where to Get the Tenancy's OCID and User's OCID&#93;(/Content/API/Concepts/apisigningkey.htm#five).&lt;br /&gt;&lt;br /&gt;To determine which policies apply to a particular group or compartment, you must view the individual&lt;br /&gt;statements inside all your policies. There isn't a way to automatically obtain that information via the API.&lt;br /&gt;

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
locks,
statements,
timeCreated,
versionDate
FROM oci.identity.policies
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

Creates a new policy in the specified compartment (either the tenancy or another of your compartments).&lt;br /&gt;If you're new to policies, see &#91;Get Started with Policies&#93;(/Content/Identity/policiesgs/get-started-with-policies.htm).&lt;br /&gt;&lt;br /&gt;You must specify a *name* for the policy, which must be unique across all policies in your tenancy&lt;br /&gt;and cannot be changed.&lt;br /&gt;&lt;br /&gt;You must also specify a *description* for the policy (although it can be an empty string). It does not&lt;br /&gt;have to be unique, and you can change it anytime with &#91;UpdatePolicy&#93;(#/en/identity/20160918/Policy/UpdatePolicy).&lt;br /&gt;&lt;br /&gt;You must specify one or more policy statements in the statements array. For information about writing&lt;br /&gt;policies, see &#91;How Policies Work&#93;(/Content/Identity/policieshow/how-policies-work.htm) and&lt;br /&gt;&#91;Common Policies&#93;(/Content/Identity/policiescommon/commonpolicies.htm).&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's `lifecycleState` will temporarily be CREATING. Before using the&lt;br /&gt;object, first make sure its `lifecycleState` has changed to ACTIVE.&lt;br /&gt;&lt;br /&gt;New policies take effect typically within 10 seconds.&lt;br /&gt;

```sql
INSERT INTO oci.identity.policies (
compartmentId,
definedTags,
description,
freeformTags,
locks,
name,
statements,
versionDate,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ description }}' /* required */,
'{{ freeformTags }}',
'{{ locks }}',
'{{ name }}' /* required */,
'{{ statements }}' /* required */,
'{{ versionDate }}',
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
locks,
statements,
timeCreated,
versionDate
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the policies resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment containing the policy (either the tenancy or another compartment).
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        The description you assign to the policy during creation. Does not have to be unique, and it's changeable.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: locks
      description: |
        Locks associated with this resource.
      value:
        - message: "{{ message }}"
          relatedResourceId: "{{ relatedResourceId }}"
          type: "{{ type }}"
    - name: name
      value: "{{ name }}"
      description: |
        The name you assign to the policy during creation. The name must be unique across all policies
        in the tenancy and cannot be changed.
    - name: statements
      value:
        - "{{ statements }}"
      description: |
        An array of policy statements written in the policy language. See
        [How Policies Work](/Content/Identity/policieshow/how-policies-work.htm) and
        [Common Policies](/Content/Identity/policiescommon/commonpolicies.htm).
    - name: versionDate
      value: "{{ versionDate }}"
      description: |
        The version of the policy. If null or set to an empty string, when a request comes in for authorization, the
        policy will be evaluated according to the current behavior of the services at that moment. If set to a particular
        date (YYYY-MM-DD), the policy will be evaluated according to the behavior of the services on that date.
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

Updates the specified policy. You can update the description or the policy statements themselves.&lt;br /&gt;&lt;br /&gt;Policy changes take effect typically within 10 seconds.&lt;br /&gt;

```sql
UPDATE oci.identity.policies
SET 
definedTags = '{{ definedTags }}',
description = '{{ description }}',
freeformTags = '{{ freeformTags }}',
statements = '{{ statements }}',
versionDate = '{{ versionDate }}'
WHERE 
policyId = '{{ policyId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND isLockOverride = {{ isLockOverride}}
RETURNING
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
inactiveStatus,
lifecycleState,
locks,
statements,
timeCreated,
versionDate;
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

Deletes the specified policy. The deletion takes effect typically within 10 seconds.

```sql
DELETE FROM oci.identity.policies
WHERE policyId = '{{ policyId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND isLockOverride = '{{ isLockOverride }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_policy_lock"
    values={[
        { label: 'add_policy_lock', value: 'add_policy_lock' },
        { label: 'remove_policy_lock', value: 'remove_policy_lock' }
    ]}
>
<TabItem value="add_policy_lock">

Add a resource lock to a tag namespace.&lt;br /&gt;

```sql
EXEC oci.identity.policies.add_policy_lock 
@policyId='{{ policyId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"message": "{{ message }}", 
"relatedResourceId": "{{ relatedResourceId }}", 
"type": "{{ type }}"
}'
;
```
</TabItem>
<TabItem value="remove_policy_lock">

Remove a resource lock to a policy&lt;br /&gt;

```sql
EXEC oci.identity.policies.remove_policy_lock 
@policyId='{{ policyId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"type": "{{ type }}"
}'
;
```
</TabItem>
</Tabs>
