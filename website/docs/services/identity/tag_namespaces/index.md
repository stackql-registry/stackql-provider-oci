--- 
title: tag_namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_namespaces
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

Creates, updates, deletes, gets or lists a <code>tag_namespaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_namespaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.tag_namespaces" /></td></tr>
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

The tagNamespace was retrieved.

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
    <td>The OCID of the tag namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the tag namespace. It must be unique across all tag namespaces in the tenancy and cannot be changed. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the tag namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the tag namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isRetired" /></td>
    <td><code>boolean</code></td>
    <td>Whether the tag namespace is retired. See &#91;Retiring Key Definitions and Namespace Definitions&#93;(/Content/Tagging/Tasks/managingtagsandtagnamespaces.htm#retiringkeys). </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The tagnamespace's current state. After creating a tagnamespace, make sure its `lifecycleState` is ACTIVE before using it. After retiring a tagnamespace, make sure its `lifecycleState` is INACTIVE before using it. (ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="locks" /></td>
    <td><code>array</code></td>
    <td>Locks associated with this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the tagNamespace was created, in the format defined by RFC3339. Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A container for defined tags.&lt;br /&gt;

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
    <td>The OCID of the tag namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the tag namespace. It must be unique across all tag namespaces in the tenancy and cannot be changed. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the tag namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the tag namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isRetired" /></td>
    <td><code>boolean</code></td>
    <td>Whether the tag namespace is retired. For more information, see &#91;Retiring Key Definitions and Namespace Definitions&#93;(/Content/Tagging/Tasks/managingtagsandtagnamespaces.htm#retiringkeys). </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The tagnamespace's current state. After creating a tagnamespace, make sure its `lifecycleState` is ACTIVE before using it. After retiring a tagnamespace, make sure its `lifecycleState` is INACTIVE before using it. (x-obmcs-enumref: #/definitions/TagNamespace/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="locks" /></td>
    <td><code>array</code></td>
    <td>Locks associated with this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>The system tags for this resource. Each key is predefined and scoped to a namespace. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the tag namespace was created, in the format defined by RFC3339. Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-tagNamespaceId"><code>tagNamespaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified tag namespace's information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-includeSubcompartments"><code>includeSubcompartments</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the tag namespaces in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new tag namespace in the specified compartment.&lt;br /&gt;&lt;br /&gt;You must specify the compartment ID in the request object (remember that the tenancy is simply the root&lt;br /&gt;compartment).&lt;br /&gt;&lt;br /&gt;You must also specify a *name* for the namespace, which must be unique across all namespaces in your tenancy&lt;br /&gt;and cannot be changed. The name can contain any ASCII character except the space (_) or period (.).&lt;br /&gt;Names are case insensitive. That means, for example, "myNamespace" and "mynamespace" are not allowed&lt;br /&gt;in the same tenancy. Once you created a namespace, you cannot change the name.&lt;br /&gt;If you specify a name that's already in use in the tenancy, a 409 error is returned.&lt;br /&gt;&lt;br /&gt;You must also specify a *description* for the namespace.&lt;br /&gt;It does not have to be unique, and you can change it with&lt;br /&gt;&#91;UpdateTagNamespace&#93;(#/en/identity/latest/TagNamespace/UpdateTagNamespace).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-tagNamespaceId"><code>tagNamespaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-isLockOverride"><code>isLockOverride</code></a></td>
    <td>Updates the the specified tag namespace. You can't update the namespace name.&lt;br /&gt;&lt;br /&gt;Updating `isRetired` to 'true' retires the namespace and all the tag definitions in the namespace. Reactivating a&lt;br /&gt;namespace (changing `isRetired` from 'true' to 'false') does not reactivate tag definitions.&lt;br /&gt;To reactivate the tag definitions, you must reactivate each one individually *after* you reactivate the namespace,&lt;br /&gt;using &#91;UpdateTag&#93;(#/en/identity/20160918/Tag/UpdateTag). For more information about retiring tag namespaces, see&lt;br /&gt;&#91;Retiring Key Definitions and Namespace Definitions&#93;(/Content/Tagging/Tasks/managingtagsandtagnamespaces.htm#retiringkeys).&lt;br /&gt;&lt;br /&gt;You can't add a namespace with the same name as a retired namespace in the same tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tagNamespaceId"><code>tagNamespaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-isLockOverride"><code>isLockOverride</code></a></td>
    <td>Deletes the specified tag namespace. Only an empty tag namespace can be deleted with this operation. To use this operation&lt;br /&gt;to delete a tag namespace that contains tag definitions, first delete all of its tag definitions.&lt;br /&gt;&lt;br /&gt;Use &#91;CascadeDeleteTagNamespace&#93;(#/en/identity/20160918/TagNamespace/CascadeDeleteTagNamespace) to delete a tag namespace along with all of&lt;br /&gt;the tag definitions contained within that namespace.&lt;br /&gt;&lt;br /&gt;Use &#91;DeleteTag&#93;(#/en/identity/latest/Tag/DeleteTag) to delete a tag definition.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_tag_namespace_lock"><CopyableCode code="add_tag_namespace_lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tagNamespaceId"><code>tagNamespaceId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Add a resource lock to a tag namespace.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#cascade_delete_tag_namespace"><CopyableCode code="cascade_delete_tag_namespace" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tagNamespaceId"><code>tagNamespaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-isLockOverride"><code>isLockOverride</code></a></td>
    <td>Deletes the specified tag namespace. This operation triggers a process that removes all of the tags&lt;br /&gt;defined in the specified tag namespace from all resources in your tenancy and then deletes the tag namespace.&lt;br /&gt;&lt;br /&gt;After you start the delete operation:&lt;br /&gt;&lt;br /&gt;  * New tag key definitions cannot be created under the namespace.&lt;br /&gt;  * The state of the tag namespace changes to DELETING.&lt;br /&gt;  * Tag removal from the resources begins.&lt;br /&gt;&lt;br /&gt;This process can take up to 48 hours depending on the number of tag definitions in the namespace, the number of resources&lt;br /&gt;that are tagged, and the locations of the regions in which those resources reside.&lt;br /&gt;&lt;br /&gt;After all tags are removed, the state changes to DELETED. You cannot restore a deleted tag namespace. After the deleted tag namespace&lt;br /&gt;changes its state to DELETED, you can use the name of the deleted tag namespace again.&lt;br /&gt;&lt;br /&gt;After you start this operation, you cannot start either the &#91;DeleteTag&#93;(#/en/identity/20160918/Tag/DeleteTag) or the &#91;BulkDeleteTags&#93;(#/en/identity/20160918/Tag/BulkDeleteTags) operation until this process completes.&lt;br /&gt;&lt;br /&gt;To delete a tag namespace, you must first retire it. Use &#91;UpdateTagNamespace&#93;(#/en/identity/20160918/TagNamespace/UpdateTagNamespace)&lt;br /&gt;to retire a tag namespace.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tagNamespaceId"><code>tagNamespaceId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-isLockOverride"><code>isLockOverride</code></a></td>
    <td>Moves the specified tag namespace to the specified compartment within the same tenancy.&lt;br /&gt;&lt;br /&gt;To move the tag namespace, you must have the manage tag-namespaces permission on both compartments.&lt;br /&gt;For more information about IAM policies, see &#91;Details for IAM&#93;(/Content/Identity/policyreference/iampolicyreference.htm).&lt;br /&gt;&lt;br /&gt;Moving a tag namespace moves all the tag key definitions contained in the tag namespace.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_tag_namespace_lock"><CopyableCode code="remove_tag_namespace_lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tagNamespaceId"><code>tagNamespaceId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Remove a resource lock from a tag namespace.&lt;br /&gt;</td>
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
<tr id="parameter-tagNamespaceId">
    <td><CopyableCode code="tagNamespaceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tag namespace. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-includeSubcompartments">
    <td><CopyableCode code="includeSubcompartments" /></td>
    <td><code>boolean</code></td>
    <td>An optional boolean parameter indicating whether to retrieve all tag namespaces in subcompartments. If this parameter is not specified, only the tag namespaces defined in the specified compartment are retrieved. </td>
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

Gets the specified tag namespace's information.&lt;br /&gt;

```sql
SELECT
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
isRetired,
lifecycleState,
locks,
systemTags,
timeCreated
FROM oci.identity.tag_namespaces
WHERE tagNamespaceId = '{{ tagNamespaceId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the tag namespaces in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
isRetired,
lifecycleState,
locks,
systemTags,
timeCreated
FROM oci.identity.tag_namespaces
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND includeSubcompartments = '{{ includeSubcompartments }}'
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

Creates a new tag namespace in the specified compartment.&lt;br /&gt;&lt;br /&gt;You must specify the compartment ID in the request object (remember that the tenancy is simply the root&lt;br /&gt;compartment).&lt;br /&gt;&lt;br /&gt;You must also specify a *name* for the namespace, which must be unique across all namespaces in your tenancy&lt;br /&gt;and cannot be changed. The name can contain any ASCII character except the space (_) or period (.).&lt;br /&gt;Names are case insensitive. That means, for example, "myNamespace" and "mynamespace" are not allowed&lt;br /&gt;in the same tenancy. Once you created a namespace, you cannot change the name.&lt;br /&gt;If you specify a name that's already in use in the tenancy, a 409 error is returned.&lt;br /&gt;&lt;br /&gt;You must also specify a *description* for the namespace.&lt;br /&gt;It does not have to be unique, and you can change it with&lt;br /&gt;&#91;UpdateTagNamespace&#93;(#/en/identity/latest/TagNamespace/UpdateTagNamespace).&lt;br /&gt;

```sql
INSERT INTO oci.identity.tag_namespaces (
compartmentId,
definedTags,
description,
freeformTags,
locks,
name,
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
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
isRetired,
lifecycleState,
locks,
systemTags,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tag_namespaces
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tag_namespaces resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the tenancy containing the tag namespace.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        The description you assign to the tag namespace during creation.
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
        The name you assign to the tag namespace during creation. It must be unique across all tag namespaces in the tenancy and cannot be changed.
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

Updates the the specified tag namespace. You can't update the namespace name.&lt;br /&gt;&lt;br /&gt;Updating `isRetired` to 'true' retires the namespace and all the tag definitions in the namespace. Reactivating a&lt;br /&gt;namespace (changing `isRetired` from 'true' to 'false') does not reactivate tag definitions.&lt;br /&gt;To reactivate the tag definitions, you must reactivate each one individually *after* you reactivate the namespace,&lt;br /&gt;using &#91;UpdateTag&#93;(#/en/identity/20160918/Tag/UpdateTag). For more information about retiring tag namespaces, see&lt;br /&gt;&#91;Retiring Key Definitions and Namespace Definitions&#93;(/Content/Tagging/Tasks/managingtagsandtagnamespaces.htm#retiringkeys).&lt;br /&gt;&lt;br /&gt;You can't add a namespace with the same name as a retired namespace in the same tenancy.&lt;br /&gt;

```sql
UPDATE oci.identity.tag_namespaces
SET 
definedTags = '{{ definedTags }}',
description = '{{ description }}',
freeformTags = '{{ freeformTags }}',
isRetired = {{ isRetired }}
WHERE 
tagNamespaceId = '{{ tagNamespaceId }}' --required
AND region = '{{ region }}' --required
AND isLockOverride = {{ isLockOverride}}
RETURNING
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
isRetired,
lifecycleState,
locks,
systemTags,
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

Deletes the specified tag namespace. Only an empty tag namespace can be deleted with this operation. To use this operation&lt;br /&gt;to delete a tag namespace that contains tag definitions, first delete all of its tag definitions.&lt;br /&gt;&lt;br /&gt;Use &#91;CascadeDeleteTagNamespace&#93;(#/en/identity/20160918/TagNamespace/CascadeDeleteTagNamespace) to delete a tag namespace along with all of&lt;br /&gt;the tag definitions contained within that namespace.&lt;br /&gt;&lt;br /&gt;Use &#91;DeleteTag&#93;(#/en/identity/latest/Tag/DeleteTag) to delete a tag definition.&lt;br /&gt;

```sql
DELETE FROM oci.identity.tag_namespaces
WHERE tagNamespaceId = '{{ tagNamespaceId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
AND isLockOverride = '{{ isLockOverride }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_tag_namespace_lock"
    values={[
        { label: 'add_tag_namespace_lock', value: 'add_tag_namespace_lock' },
        { label: 'cascade_delete_tag_namespace', value: 'cascade_delete_tag_namespace' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'remove_tag_namespace_lock', value: 'remove_tag_namespace_lock' }
    ]}
>
<TabItem value="add_tag_namespace_lock">

Add a resource lock to a tag namespace.&lt;br /&gt;

```sql
EXEC oci.identity.tag_namespaces.add_tag_namespace_lock 
@tagNamespaceId='{{ tagNamespaceId }}' --required, 
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
<TabItem value="cascade_delete_tag_namespace">

Deletes the specified tag namespace. This operation triggers a process that removes all of the tags&lt;br /&gt;defined in the specified tag namespace from all resources in your tenancy and then deletes the tag namespace.&lt;br /&gt;&lt;br /&gt;After you start the delete operation:&lt;br /&gt;&lt;br /&gt;  * New tag key definitions cannot be created under the namespace.&lt;br /&gt;  * The state of the tag namespace changes to DELETING.&lt;br /&gt;  * Tag removal from the resources begins.&lt;br /&gt;&lt;br /&gt;This process can take up to 48 hours depending on the number of tag definitions in the namespace, the number of resources&lt;br /&gt;that are tagged, and the locations of the regions in which those resources reside.&lt;br /&gt;&lt;br /&gt;After all tags are removed, the state changes to DELETED. You cannot restore a deleted tag namespace. After the deleted tag namespace&lt;br /&gt;changes its state to DELETED, you can use the name of the deleted tag namespace again.&lt;br /&gt;&lt;br /&gt;After you start this operation, you cannot start either the &#91;DeleteTag&#93;(#/en/identity/20160918/Tag/DeleteTag) or the &#91;BulkDeleteTags&#93;(#/en/identity/20160918/Tag/BulkDeleteTags) operation until this process completes.&lt;br /&gt;&lt;br /&gt;To delete a tag namespace, you must first retire it. Use &#91;UpdateTagNamespace&#93;(#/en/identity/20160918/TagNamespace/UpdateTagNamespace)&lt;br /&gt;to retire a tag namespace.&lt;br /&gt;

```sql
EXEC oci.identity.tag_namespaces.cascade_delete_tag_namespace 
@tagNamespaceId='{{ tagNamespaceId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@isLockOverride={{ isLockOverride }}
;
```
</TabItem>
<TabItem value="change_compartment">

Moves the specified tag namespace to the specified compartment within the same tenancy.&lt;br /&gt;&lt;br /&gt;To move the tag namespace, you must have the manage tag-namespaces permission on both compartments.&lt;br /&gt;For more information about IAM policies, see &#91;Details for IAM&#93;(/Content/Identity/policyreference/iampolicyreference.htm).&lt;br /&gt;&lt;br /&gt;Moving a tag namespace moves all the tag key definitions contained in the tag namespace.&lt;br /&gt;

```sql
EXEC oci.identity.tag_namespaces.change_compartment 
@tagNamespaceId='{{ tagNamespaceId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@isLockOverride={{ isLockOverride }} 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
<TabItem value="remove_tag_namespace_lock">

Remove a resource lock from a tag namespace.&lt;br /&gt;

```sql
EXEC oci.identity.tag_namespaces.remove_tag_namespace_lock 
@tagNamespaceId='{{ tagNamespaceId }}' --required, 
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
