--- 
title: compartments
hide_title: false
hide_table_of_contents: false
keywords:
  - compartments
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

Creates, updates, deletes, gets or lists a <code>compartments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compartments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.compartments" /></td></tr>
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

A collection of related resources. Compartments are a fundamental component of Oracle Cloud Infrastructure&lt;br /&gt;for organizing and isolating your cloud resources. You use them to clearly separate resources for the purposes&lt;br /&gt;of measuring usage and billing, access (through the use of IAM Service policies), and isolation (separating the&lt;br /&gt;resources for one project or business unit from another). A common approach is to create a compartment for each&lt;br /&gt;major part of your organization. For more information, see&lt;br /&gt;&#91;Overview of IAM&#93;(//Content/Identity/getstarted/identity-domains.htm) and also&lt;br /&gt;&#91;Setting Up Your Tenancy&#93;(/Content/GSG/Concepts/settinguptenancy.htm).&lt;br /&gt;&lt;br /&gt;To place a resource in a compartment, simply specify the compartment ID in the "Create" request object when&lt;br /&gt;initially creating the resource. For example, to launch an instance into a particular compartment, specify&lt;br /&gt;that compartment's OCID in the `LaunchInstance` request. You can't move an existing resource from one&lt;br /&gt;compartment to another.&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access,&lt;br /&gt;see &#91;Get Started with Policies&#93;(/Content/Identity/policiesgs/get-started-with-policies.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values&lt;br /&gt;using the API.&lt;br /&gt;

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
    <td>The OCID of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name you assign to the compartment during creation. The name must be unique across all compartments in the parent. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the parent compartment containing the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the compartment. Does not have to be unique, and it's changeable.</td>
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
    <td><CopyableCode code="isAccessible" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether or not the compartment is accessible for the user making the request. Returns true when the user has INSPECT permissions directly on a resource in the compartment or indirectly (permissions can be on a resource in a subcompartment). </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The compartment's current state. After creating a compartment, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the compartment was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-accessLevel"><code>accessLevel</code></a>, <a href="#parameter-compartmentIdInSubtree"><code>compartmentIdInSubtree</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the compartments in a specified compartment. The members of the list&lt;br /&gt;returned depends on the values set for several parameters.&lt;br /&gt;&lt;br /&gt;With the exception of the tenancy (root compartment), the ListCompartments operation&lt;br /&gt;returns only the first-level child compartments in the parent compartment specified in&lt;br /&gt;`compartmentId`. The list does not include any subcompartments of the child&lt;br /&gt;compartments (grandchildren).&lt;br /&gt;&lt;br /&gt;The parameter `accessLevel` specifies whether to return only those compartments for which the&lt;br /&gt;requestor has INSPECT permissions on at least one resource directly&lt;br /&gt;or indirectly (the resource can be in a subcompartment).&lt;br /&gt;&lt;br /&gt;The parameter `compartmentIdInSubtree` applies only when you perform ListCompartments on the&lt;br /&gt;tenancy (root compartment). When set to true, the entire hierarchy of compartments can be returned.&lt;br /&gt;To get a full list of all compartments and subcompartments in the tenancy (root compartment),&lt;br /&gt;set the parameter `compartmentIdInSubtree` to true and `accessLevel` to ANY.&lt;br /&gt;&lt;br /&gt;See &#91;Where to Get the Tenancy's OCID and User's OCID&#93;(/Content/API/Concepts/apisigningkey.htm#five).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new compartment in the specified compartment.&lt;br /&gt;&lt;br /&gt;Specify the parent compartment's OCID as the compartment ID in the request object. Remember that the tenancy&lt;br /&gt;is simply the root compartment. For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You must also specify a *name* for the compartment, which must be unique across all compartments in&lt;br /&gt;your tenancy. You can use this name or the OCID when writing policies that apply&lt;br /&gt;to the compartment. For more information about policies, see&lt;br /&gt;&#91;How Policies Work&#93;(/Content/Identity/policieshow/how-policies-work.htm).&lt;br /&gt;&lt;br /&gt;You must also specify a *description* for the compartment (although it can be an empty string). It does&lt;br /&gt;not have to be unique, and you can change it anytime with&lt;br /&gt;&#91;UpdateCompartment&#93;(#/en/identity/20160918/Compartment/UpdateCompartment).&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's `lifecycleState` will temporarily be CREATING. Before using the&lt;br /&gt;object, first make sure its `lifecycleState` has changed to ACTIVE.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified compartment's description or name. You can't update the root compartment.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified compartment. The compartment must be empty.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#get_compartment"><CopyableCode code="get_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified compartment's information.&lt;br /&gt;&lt;br /&gt;This operation does not return a list of all the resources inside the compartment. There is no single&lt;br /&gt;API operation that does that. Compartments can contain multiple types of resources (instances, block&lt;br /&gt;storage volumes, etc.). To find out what's in a compartment, you must call the "List" operation for&lt;br /&gt;each resource type and specify the compartment's OCID as a query parameter in the request. For example,&lt;br /&gt;call the &#91;ListInstances&#93;(#/en/iaas/20160918/Instance/ListInstances) operation in the Cloud Compute&lt;br /&gt;Service or the &#91;ListVolumes&#93;(#/en/iaas/20160918/Volume/ListVolumes) operation in Cloud Block Storage.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#bulk_delete_resources"><CopyableCode code="bulk_delete_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resources"><code>resources</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Deletes multiple resources in the compartment. All resources must be in the same compartment. You must have the appropriate&lt;br /&gt;permissions to delete the resources in the request. This API can only be invoked from the tenancy's&lt;br /&gt;&#91;home region&#93;(/Content/Identity/regions/managingregions.htm#Home). This operation creates a&lt;br /&gt;&#91;WorkRequest&#93;(#/en/workrequests/20160918/WorkRequest/). Use the &#91;GetWorkRequest&#93;(#/en/workrequests/20160918/WorkRequest/GetWorkRequest)&lt;br /&gt;API to monitor the status of the bulk action.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#bulk_move_resources"><CopyableCode code="bulk_move_resources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resources"><code>resources</code></a>, <a href="#parameter-targetCompartmentId"><code>targetCompartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves multiple resources from one compartment to another. All resources must be in the same compartment.&lt;br /&gt;This API can only be invoked from the tenancy's &#91;home region&#93;(/Content/Identity/regions/managingregions.htm#Home).&lt;br /&gt;To move resources, you must have the appropriate permissions to move the resource in both the source and target&lt;br /&gt;compartments. This operation creates a &#91;WorkRequest&#93;(#/en/workrequests/20160918/WorkRequest/).&lt;br /&gt;Use the &#91;GetWorkRequest&#93;(#/en/workrequests/20160918/WorkRequest/GetWorkRequest) API to monitor the status of the bulk action.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#move_compartment"><CopyableCode code="move_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetCompartmentId"><code>targetCompartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Move the compartment to a different parent compartment in the same tenancy. When you move a&lt;br /&gt;compartment, all its contents (subcompartments and resources) are moved with it. Note that&lt;br /&gt;the `CompartmentId` that you specify in the path is the compartment that you want to move.&lt;br /&gt;&lt;br /&gt;**IMPORTANT**: After you move a compartment to a new parent compartment, the access policies of&lt;br /&gt;the new parent take effect and the policies of the previous parent no longer apply. Ensure that you&lt;br /&gt;are aware of the implications for the compartment contents before you move it. For more&lt;br /&gt;information, see &#91;Moving a Compartment&#93;(/Content/Identity/compartments/managingcompartments.htm#MoveCompartment).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#recover_compartment"><CopyableCode code="recover_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Recover the compartment from DELETED state to ACTIVE state.&lt;br /&gt;</td>
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
    <td>The OCID of the compartment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-accessLevel">
    <td><CopyableCode code="accessLevel" /></td>
    <td><code>string</code></td>
    <td>Valid values are `ANY` and `ACCESSIBLE`. Default is `ANY`. Setting this to `ACCESSIBLE` returns only those compartments for which the user has INSPECT permissions directly or indirectly (permissions can be on a resource in a subcompartment). For the compartments on which the user indirectly has INSPECT permissions, a restricted set of fields is returned.  When set to `ANY` permissions are not checked. </td>
</tr>
<tr id="parameter-compartmentIdInSubtree">
    <td><CopyableCode code="compartmentIdInSubtree" /></td>
    <td><code>boolean</code></td>
    <td>Default is false. Can only be set to true when performing ListCompartments on the tenancy (root compartment). When set to true, the hierarchy of compartments is traversed and all compartments and subcompartments in the tenancy are returned depending on the the setting of `accessLevel`. </td>
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

Lists the compartments in a specified compartment. The members of the list&lt;br /&gt;returned depends on the values set for several parameters.&lt;br /&gt;&lt;br /&gt;With the exception of the tenancy (root compartment), the ListCompartments operation&lt;br /&gt;returns only the first-level child compartments in the parent compartment specified in&lt;br /&gt;`compartmentId`. The list does not include any subcompartments of the child&lt;br /&gt;compartments (grandchildren).&lt;br /&gt;&lt;br /&gt;The parameter `accessLevel` specifies whether to return only those compartments for which the&lt;br /&gt;requestor has INSPECT permissions on at least one resource directly&lt;br /&gt;or indirectly (the resource can be in a subcompartment).&lt;br /&gt;&lt;br /&gt;The parameter `compartmentIdInSubtree` applies only when you perform ListCompartments on the&lt;br /&gt;tenancy (root compartment). When set to true, the entire hierarchy of compartments can be returned.&lt;br /&gt;To get a full list of all compartments and subcompartments in the tenancy (root compartment),&lt;br /&gt;set the parameter `compartmentIdInSubtree` to true and `accessLevel` to ANY.&lt;br /&gt;&lt;br /&gt;See &#91;Where to Get the Tenancy's OCID and User's OCID&#93;(/Content/API/Concepts/apisigningkey.htm#five).&lt;br /&gt;

```sql
SELECT
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
inactiveStatus,
isAccessible,
lifecycleState,
timeCreated
FROM oci.identity.compartments
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND accessLevel = '{{ accessLevel }}'
AND compartmentIdInSubtree = '{{ compartmentIdInSubtree }}'
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

Creates a new compartment in the specified compartment.&lt;br /&gt;&lt;br /&gt;Specify the parent compartment's OCID as the compartment ID in the request object. Remember that the tenancy&lt;br /&gt;is simply the root compartment. For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You must also specify a *name* for the compartment, which must be unique across all compartments in&lt;br /&gt;your tenancy. You can use this name or the OCID when writing policies that apply&lt;br /&gt;to the compartment. For more information about policies, see&lt;br /&gt;&#91;How Policies Work&#93;(/Content/Identity/policieshow/how-policies-work.htm).&lt;br /&gt;&lt;br /&gt;You must also specify a *description* for the compartment (although it can be an empty string). It does&lt;br /&gt;not have to be unique, and you can change it anytime with&lt;br /&gt;&#91;UpdateCompartment&#93;(#/en/identity/20160918/Compartment/UpdateCompartment).&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's `lifecycleState` will temporarily be CREATING. Before using the&lt;br /&gt;object, first make sure its `lifecycleState` has changed to ACTIVE.&lt;br /&gt;

```sql
INSERT INTO oci.identity.compartments (
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
isAccessible,
lifecycleState,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: compartments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the compartments resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the parent compartment containing the compartment.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        The description you assign to the compartment during creation. Does not have to be unique, and it's changeable.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: name
      value: "{{ name }}"
      description: |
        The name you assign to the compartment during creation. The name must be unique across all compartments
        in the parent compartment. Avoid entering confidential information.
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

Updates the specified compartment's description or name. You can't update the root compartment.

```sql
UPDATE oci.identity.compartments
SET 
definedTags = '{{ definedTags }}',
description = '{{ description }}',
freeformTags = '{{ freeformTags }}',
name = '{{ name }}'
WHERE 
compartmentId = '{{ compartmentId }}' --required
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
isAccessible,
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

Deletes the specified compartment. The compartment must be empty.&lt;br /&gt;

```sql
DELETE FROM oci.identity.compartments
WHERE compartmentId = '{{ compartmentId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_compartment"
    values={[
        { label: 'get_compartment', value: 'get_compartment' },
        { label: 'bulk_delete_resources', value: 'bulk_delete_resources' },
        { label: 'bulk_move_resources', value: 'bulk_move_resources' },
        { label: 'move_compartment', value: 'move_compartment' },
        { label: 'recover_compartment', value: 'recover_compartment' }
    ]}
>
<TabItem value="get_compartment">

Gets the specified compartment's information.&lt;br /&gt;&lt;br /&gt;This operation does not return a list of all the resources inside the compartment. There is no single&lt;br /&gt;API operation that does that. Compartments can contain multiple types of resources (instances, block&lt;br /&gt;storage volumes, etc.). To find out what's in a compartment, you must call the "List" operation for&lt;br /&gt;each resource type and specify the compartment's OCID as a query parameter in the request. For example,&lt;br /&gt;call the &#91;ListInstances&#93;(#/en/iaas/20160918/Instance/ListInstances) operation in the Cloud Compute&lt;br /&gt;Service or the &#91;ListVolumes&#93;(#/en/iaas/20160918/Volume/ListVolumes) operation in Cloud Block Storage.&lt;br /&gt;

```sql
EXEC oci.identity.compartments.get_compartment 
@compartmentId='{{ compartmentId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="bulk_delete_resources">

Deletes multiple resources in the compartment. All resources must be in the same compartment. You must have the appropriate&lt;br /&gt;permissions to delete the resources in the request. This API can only be invoked from the tenancy's&lt;br /&gt;&#91;home region&#93;(/Content/Identity/regions/managingregions.htm#Home). This operation creates a&lt;br /&gt;&#91;WorkRequest&#93;(#/en/workrequests/20160918/WorkRequest/). Use the &#91;GetWorkRequest&#93;(#/en/workrequests/20160918/WorkRequest/GetWorkRequest)&lt;br /&gt;API to monitor the status of the bulk action.&lt;br /&gt;

```sql
EXEC oci.identity.compartments.bulk_delete_resources 
@compartmentId='{{ compartmentId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"resources": "{{ resources }}"
}'
;
```
</TabItem>
<TabItem value="bulk_move_resources">

Moves multiple resources from one compartment to another. All resources must be in the same compartment.&lt;br /&gt;This API can only be invoked from the tenancy's &#91;home region&#93;(/Content/Identity/regions/managingregions.htm#Home).&lt;br /&gt;To move resources, you must have the appropriate permissions to move the resource in both the source and target&lt;br /&gt;compartments. This operation creates a &#91;WorkRequest&#93;(#/en/workrequests/20160918/WorkRequest/).&lt;br /&gt;Use the &#91;GetWorkRequest&#93;(#/en/workrequests/20160918/WorkRequest/GetWorkRequest) API to monitor the status of the bulk action.&lt;br /&gt;

```sql
EXEC oci.identity.compartments.bulk_move_resources 
@compartmentId='{{ compartmentId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"resources": "{{ resources }}", 
"targetCompartmentId": "{{ targetCompartmentId }}"
}'
;
```
</TabItem>
<TabItem value="move_compartment">

Move the compartment to a different parent compartment in the same tenancy. When you move a&lt;br /&gt;compartment, all its contents (subcompartments and resources) are moved with it. Note that&lt;br /&gt;the `CompartmentId` that you specify in the path is the compartment that you want to move.&lt;br /&gt;&lt;br /&gt;**IMPORTANT**: After you move a compartment to a new parent compartment, the access policies of&lt;br /&gt;the new parent take effect and the policies of the previous parent no longer apply. Ensure that you&lt;br /&gt;are aware of the implications for the compartment contents before you move it. For more&lt;br /&gt;information, see &#91;Moving a Compartment&#93;(/Content/Identity/compartments/managingcompartments.htm#MoveCompartment).&lt;br /&gt;

```sql
EXEC oci.identity.compartments.move_compartment 
@compartmentId='{{ compartmentId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"targetCompartmentId": "{{ targetCompartmentId }}"
}'
;
```
</TabItem>
<TabItem value="recover_compartment">

Recover the compartment from DELETED state to ACTIVE state.&lt;br /&gt;

```sql
EXEC oci.identity.compartments.recover_compartment 
@compartmentId='{{ compartmentId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
