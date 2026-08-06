--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.tags" /></td></tr>
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

The tag was retrieved.

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
    <td>The OCID of the tag definition.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name assigned to the tag during creation. This is the tag key definition. The name must be unique within the tag namespace and cannot be changed. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the tag definition.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the tag.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isCostTracking" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the tag is enabled for cost tracking. </td>
</tr>
<tr>
    <td><CopyableCode code="isRetired" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the tag is retired. See &#91;Retiring Key Definitions and Namespace Definitions&#93;(/Content/Tagging/Tasks/managingtagsandtagnamespaces.htm#retiringkeys). </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The tag's current state. After creating a tag, make sure its `lifecycleState` is ACTIVE before using it. After retiring a tag, make sure its `lifecycleState` is INACTIVE before using it. If you delete a tag, you cannot delete another tag until the deleted tag's `lifecycleState` changes from DELETING to DELETED. (ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>The system tags for this resource. Each key is predefined and scoped to a namespace. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="tagNamespaceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the namespace that contains the tag definition.</td>
</tr>
<tr>
    <td><CopyableCode code="tagNamespaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the tag namespace that contains the tag definition. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the tag was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="validator" /></td>
    <td><code>object</code></td>
    <td>Validates a definedTag value. Each validator performs validation steps in addition to the standard validation for definedTag values. For more information, see &#91;Limits on Tags&#93;(/Content/Tagging/Concepts/taggingoverview.htm#limits).  If you define a validator after a value has been set for a defined tag, then any updates that attempt to change the value must pass the additional validation defined by the current rule. Previously set values (even those that would fail the current validation) are not updated. You can still update other attributes to resources that contain a non-valid defined tag.  To clear the validator call UpdateTag with &#91;DefaultTagDefinitionValidator&#93;(/api/#/en/identity/latest/datatypes/DefaultTagDefinitionValidator). </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A tag definition that belongs to a specific tag namespace.&lt;br /&gt;

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
    <td>The OCID of the tag definition.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name assigned to the tag during creation. This is the tag key definition. The name must be unique within the tag namespace and cannot be changed. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the tag definition.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the tag.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isCostTracking" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the tag is enabled for cost tracking. </td>
</tr>
<tr>
    <td><CopyableCode code="isRetired" /></td>
    <td><code>boolean</code></td>
    <td>Whether the tag is retired. See &#91;Retiring Key Definitions and Namespace Definitions&#93;(/Content/Tagging/Tasks/managingtagsandtagnamespaces.htm#retiringkeys). </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The tag's current state. After creating a tag, make sure its `lifecycleState` is ACTIVE before using it. After retiring a tag, make sure its `lifecycleState` is INACTIVE before using it. If you delete a tag, you cannot delete another tag until the deleted tag's `lifecycleState` changes from DELETING to DELETED. (x-obmcs-enumref: #/definitions/Tag/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>The system tags for this resource. Each key is predefined and scoped to a namespace. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the tag was created, in the format defined by RFC3339. Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-tagNamespaceId"><code>tagNamespaceId</code></a>, <a href="#parameter-tagName"><code>tagName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified tag's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-tagNamespaceId"><code>tagNamespaceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the tag definitions in the specified tag namespace.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-tagNamespaceId"><code>tagNamespaceId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-isLockOverride"><code>isLockOverride</code></a></td>
    <td>Creates a new tag in the specified tag namespace.&lt;br /&gt;&lt;br /&gt;The tag requires either the OCID or the name of the tag namespace that will contain this&lt;br /&gt;tag definition.&lt;br /&gt;&lt;br /&gt;You must specify a *name* for the tag, which must be unique across all tags in the tag namespace&lt;br /&gt;and cannot be changed. The name can contain any ASCII character except the space (_) or period (.) characters.&lt;br /&gt;Names are case insensitive. That means, for example, "myTag" and "mytag" are not allowed in the same namespace.&lt;br /&gt;If you specify a name that's already in use in the tag namespace, a 409 error is returned.&lt;br /&gt;&lt;br /&gt;The tag must have a *description*. It does not have to be unique, and you can change it with&lt;br /&gt;&#91;UpdateTag&#93;(#/en/identity/latest/Tag/UpdateTag).&lt;br /&gt;&lt;br /&gt;The tag must have a value type, which is specified with a validator. Tags can use either a&lt;br /&gt;static value or a list of possible values. Static values are entered by a user applying the tag&lt;br /&gt;to a resource. Lists are created by you and the user must apply a value from the list. Lists&lt;br /&gt;are validiated.&lt;br /&gt;&lt;br /&gt;* If no `validator` is set, the user applying the tag to a resource can type in a static&lt;br /&gt;value or leave the tag value empty.&lt;br /&gt;* If a `validator` is set, the user applying the tag to a resource must select from a list&lt;br /&gt;of values that you supply with &#91;EnumTagDefinitionValidator&#93;(#/en/identity/latest/datatypes/EnumTagDefinitionValidator).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-tagNamespaceId"><code>tagNamespaceId</code></a>, <a href="#parameter-tagName"><code>tagName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-isLockOverride"><code>isLockOverride</code></a></td>
    <td>Updates the specified tag definition.&lt;br /&gt;&lt;br /&gt;Setting `validator` determines the value type. Tags can use either a static value or a&lt;br /&gt;list of possible values. Static values are entered by a user applying the tag to a resource.&lt;br /&gt;Lists are created by you and the user must apply a value from the list. On update, any values&lt;br /&gt;in a list that were previously set do not change, but new values must pass validation. Values&lt;br /&gt;already applied to a resource do not change.&lt;br /&gt;&lt;br /&gt;You cannot remove list values that appear in a TagDefault. To remove a list value that&lt;br /&gt;appears in a TagDefault, first update the TagDefault to use a different value.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tagNamespaceId"><code>tagNamespaceId</code></a>, <a href="#parameter-tagName"><code>tagName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-isLockOverride"><code>isLockOverride</code></a></td>
    <td>Deletes the specified tag definition. This operation triggers a process that removes the&lt;br /&gt;tag from all resources in your tenancy.&lt;br /&gt;&lt;br /&gt;These things happen immediately:&lt;br /&gt;  * If the tag was a cost-tracking tag, it no longer counts against your 10 cost-tracking&lt;br /&gt;  tags limit, whether you first disabled it or not.&lt;br /&gt;  * If the tag was used with dynamic groups, none of the rules that contain the tag will&lt;br /&gt;  be evaluated against the tag.&lt;br /&gt;&lt;br /&gt;When you start the delete operation, the state of the tag changes to DELETING and tag removal&lt;br /&gt;from resources begins. This can take up to 48 hours depending on the number of resources that&lt;br /&gt;were tagged as well as the regions in which those resources reside.&lt;br /&gt;&lt;br /&gt;When all tags have been removed, the state changes to DELETED. You cannot restore a deleted tag. Once the deleted tag&lt;br /&gt;changes its state to DELETED, you can use the same tag name again.&lt;br /&gt;&lt;br /&gt;After you start this operation, you cannot start either the &#91;BulkDeleteTags&#93;(#/en/identity/20160918/Tag/BulkDeleteTags) or the &#91;CascadeDeleteTagNamespace&#93;(#/en/identity/20160918/TagNamespace/CascadeDeleteTagNamespace) operation until this process completes.&lt;br /&gt;&lt;br /&gt;To delete a tag, you must first retire it. Use &#91;UpdateTag&#93;(#/en/identity/latest/Tag/UpdateTag)&lt;br /&gt;to retire a tag.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#bulk_delete_tags"><CopyableCode code="bulk_delete_tags" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-tagDefinitionIds"><code>tagDefinitionIds</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-isLockOverride"><code>isLockOverride</code></a></td>
    <td>Deletes the specified tag key definitions. This operation triggers a process that removes the&lt;br /&gt;tags from all resources in your tenancy. The tag key definitions must be within the same tag namespace.&lt;br /&gt;&lt;br /&gt;The following actions happen immediately:&lt;br /&gt;&lt;br /&gt;  * If the tag is a cost-tracking tag, the tag no longer counts against your&lt;br /&gt;  10 cost-tracking tags limit, even if you do not disable the tag before running this operation.&lt;br /&gt;  * If the tag is used with dynamic groups, the rules that contain the tag are no longer&lt;br /&gt;  evaluated against the tag.&lt;br /&gt;&lt;br /&gt;After you start this operation, the state of the tag changes to DELETING, and tag removal&lt;br /&gt;from resources begins. This process can take up to 48 hours depending on the number of resources that&lt;br /&gt;are tagged and the regions in which those resources reside.&lt;br /&gt;&lt;br /&gt;When all tags have been removed, the state changes to DELETED. You cannot restore a deleted tag. After the tag state&lt;br /&gt;changes to DELETED, you can use the same tag name again.&lt;br /&gt;&lt;br /&gt;After you start this operation, you cannot start either the &#91;DeleteTag&#93;(#/en/identity/20160918/Tag/DeleteTag) or the &#91;CascadeDeleteTagNamespace&#93;(#/en/identity/20160918/TagNamespace/CascadeDeleteTagNamespace) operation until this process completes.&lt;br /&gt;&lt;br /&gt;In order to delete tags, you must first retire the tags. Use &#91;UpdateTag&#93;(#/en/identity/20160918/Tag/UpdateTag)&lt;br /&gt;to retire a tag.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#bulk_edit_tags"><CopyableCode code="bulk_edit_tags" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-resources"><code>resources</code></a>, <a href="#parameter-bulkEditOperations"><code>bulkEditOperations</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Edits the specified list of tag key definitions for the selected resources.&lt;br /&gt;This operation triggers a process that edits the tags on all selected resources. The possible actions are:&lt;br /&gt;&lt;br /&gt;  * Add a defined tag when the tag does not already exist on the resource.&lt;br /&gt;  * Update the value for a defined tag when the tag is present on the resource.&lt;br /&gt;  * Add a defined tag when it does not already exist on the resource or update the value for a defined tag when the tag is present on the resource.&lt;br /&gt;  * Remove a defined tag from a resource. The tag is removed from the resource regardless of the tag value.&lt;br /&gt;&lt;br /&gt;See &#91;BulkEditOperationDetails&#93;(#/en/identity/latest/datatypes/BulkEditOperationDetails) for more information.&lt;br /&gt;&lt;br /&gt;The edits can include a combination of operations and tag sets.&lt;br /&gt;However, multiple operations cannot apply to one key definition in the same request.&lt;br /&gt;For example, if one request adds `tag set-1` to a resource and sets a tag value to `tag set-2`,&lt;br /&gt;`tag set-1` and `tag set-2` cannot have any common tag definitions.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#import_standard_tags"><CopyableCode code="import_standard_tags" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-standardTagNamespaceName"><code>standardTagNamespaceName</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>OCI will release Tag Namespaces that our customers can import.&lt;br /&gt;These Tag Namespaces will provide Tags for our customers and Partners to provide consistency and enable data reporting.&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-tagName">
    <td><CopyableCode code="tagName" /></td>
    <td><code>string</code></td>
    <td>The name of the tag. </td>
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

Gets the specified tag's information.

```sql
SELECT
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
isCostTracking,
isRetired,
lifecycleState,
systemTags,
tagNamespaceId,
tagNamespaceName,
timeCreated,
validator
FROM oci.identity.tags
WHERE tagNamespaceId = '{{ tagNamespaceId }}' -- required
AND tagName = '{{ tagName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the tag definitions in the specified tag namespace.&lt;br /&gt;

```sql
SELECT
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
isCostTracking,
isRetired,
lifecycleState,
systemTags,
timeCreated
FROM oci.identity.tags
WHERE tagNamespaceId = '{{ tagNamespaceId }}' -- required
AND region = '{{ region }}' -- required
AND page = '{{ page }}'
AND limit = '{{ limit }}'
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

Creates a new tag in the specified tag namespace.&lt;br /&gt;&lt;br /&gt;The tag requires either the OCID or the name of the tag namespace that will contain this&lt;br /&gt;tag definition.&lt;br /&gt;&lt;br /&gt;You must specify a *name* for the tag, which must be unique across all tags in the tag namespace&lt;br /&gt;and cannot be changed. The name can contain any ASCII character except the space (_) or period (.) characters.&lt;br /&gt;Names are case insensitive. That means, for example, "myTag" and "mytag" are not allowed in the same namespace.&lt;br /&gt;If you specify a name that's already in use in the tag namespace, a 409 error is returned.&lt;br /&gt;&lt;br /&gt;The tag must have a *description*. It does not have to be unique, and you can change it with&lt;br /&gt;&#91;UpdateTag&#93;(#/en/identity/latest/Tag/UpdateTag).&lt;br /&gt;&lt;br /&gt;The tag must have a value type, which is specified with a validator. Tags can use either a&lt;br /&gt;static value or a list of possible values. Static values are entered by a user applying the tag&lt;br /&gt;to a resource. Lists are created by you and the user must apply a value from the list. Lists&lt;br /&gt;are validiated.&lt;br /&gt;&lt;br /&gt;* If no `validator` is set, the user applying the tag to a resource can type in a static&lt;br /&gt;value or leave the tag value empty.&lt;br /&gt;* If a `validator` is set, the user applying the tag to a resource must select from a list&lt;br /&gt;of values that you supply with &#91;EnumTagDefinitionValidator&#93;(#/en/identity/latest/datatypes/EnumTagDefinitionValidator).&lt;br /&gt;

```sql
INSERT INTO oci.identity.tags (
definedTags,
description,
freeformTags,
isCostTracking,
name,
validator,
tagNamespaceId,
region,
opc-retry-token,
isLockOverride
)
SELECT 
'{{ definedTags }}',
'{{ description }}' /* required */,
'{{ freeformTags }}',
{{ isCostTracking }},
'{{ name }}' /* required */,
'{{ validator }}',
'{{ tagNamespaceId }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ isLockOverride }}'
RETURNING
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
isCostTracking,
isRetired,
lifecycleState,
systemTags,
tagNamespaceId,
tagNamespaceName,
timeCreated,
validator
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tags
  props:
    - name: tagNamespaceId
      value: "{{ tagNamespaceId }}"
      description: Required parameter for the tags resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tags resource.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        The description you assign to the tag during creation.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: isCostTracking
      value: {{ isCostTracking }}
      description: |
        Indicates whether the tag is enabled for cost tracking.
    - name: name
      value: "{{ name }}"
      description: |
        The name you assign to the tag during creation. This is the tag key definition.
        The name must be unique within the tag namespace and cannot be changed.
    - name: validator
      description: |
        Validates a definedTag value. Each validator performs validation steps in addition to the standard
        validation for definedTag values. For more information, see
        [Limits on Tags](/Content/Tagging/Concepts/taggingoverview.htm#limits).
        If you define a validator after a value has been set for a defined tag, then any updates that
        attempt to change the value must pass the additional validation defined by the current rule.
        Previously set values (even those that would fail the current validation) are not updated. You can
        still update other attributes to resources that contain a non-valid defined tag.
        To clear the validator call UpdateTag with
        [DefaultTagDefinitionValidator](/api/#/en/identity/latest/datatypes/DefaultTagDefinitionValidator).
      value:
        validatorType: "{{ validatorType }}"
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
    - name: isLockOverride
      value: {{ isLockOverride }}
      description: Whether to override locks (if any exist).
      description: Whether to override locks (if any exist).
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

Updates the specified tag definition.&lt;br /&gt;&lt;br /&gt;Setting `validator` determines the value type. Tags can use either a static value or a&lt;br /&gt;list of possible values. Static values are entered by a user applying the tag to a resource.&lt;br /&gt;Lists are created by you and the user must apply a value from the list. On update, any values&lt;br /&gt;in a list that were previously set do not change, but new values must pass validation. Values&lt;br /&gt;already applied to a resource do not change.&lt;br /&gt;&lt;br /&gt;You cannot remove list values that appear in a TagDefault. To remove a list value that&lt;br /&gt;appears in a TagDefault, first update the TagDefault to use a different value.&lt;br /&gt;

```sql
UPDATE oci.identity.tags
SET 
definedTags = '{{ definedTags }}',
description = '{{ description }}',
freeformTags = '{{ freeformTags }}',
isCostTracking = {{ isCostTracking }},
isRetired = {{ isRetired }},
validator = '{{ validator }}'
WHERE 
tagNamespaceId = '{{ tagNamespaceId }}' --required
AND tagName = '{{ tagName }}' --required
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
isCostTracking,
isRetired,
lifecycleState,
systemTags,
tagNamespaceId,
tagNamespaceName,
timeCreated,
validator;
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

Deletes the specified tag definition. This operation triggers a process that removes the&lt;br /&gt;tag from all resources in your tenancy.&lt;br /&gt;&lt;br /&gt;These things happen immediately:&lt;br /&gt;  * If the tag was a cost-tracking tag, it no longer counts against your 10 cost-tracking&lt;br /&gt;  tags limit, whether you first disabled it or not.&lt;br /&gt;  * If the tag was used with dynamic groups, none of the rules that contain the tag will&lt;br /&gt;  be evaluated against the tag.&lt;br /&gt;&lt;br /&gt;When you start the delete operation, the state of the tag changes to DELETING and tag removal&lt;br /&gt;from resources begins. This can take up to 48 hours depending on the number of resources that&lt;br /&gt;were tagged as well as the regions in which those resources reside.&lt;br /&gt;&lt;br /&gt;When all tags have been removed, the state changes to DELETED. You cannot restore a deleted tag. Once the deleted tag&lt;br /&gt;changes its state to DELETED, you can use the same tag name again.&lt;br /&gt;&lt;br /&gt;After you start this operation, you cannot start either the &#91;BulkDeleteTags&#93;(#/en/identity/20160918/Tag/BulkDeleteTags) or the &#91;CascadeDeleteTagNamespace&#93;(#/en/identity/20160918/TagNamespace/CascadeDeleteTagNamespace) operation until this process completes.&lt;br /&gt;&lt;br /&gt;To delete a tag, you must first retire it. Use &#91;UpdateTag&#93;(#/en/identity/latest/Tag/UpdateTag)&lt;br /&gt;to retire a tag.&lt;br /&gt;

```sql
DELETE FROM oci.identity.tags
WHERE tagNamespaceId = '{{ tagNamespaceId }}' --required
AND tagName = '{{ tagName }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND isLockOverride = '{{ isLockOverride }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="bulk_delete_tags"
    values={[
        { label: 'bulk_delete_tags', value: 'bulk_delete_tags' },
        { label: 'bulk_edit_tags', value: 'bulk_edit_tags' },
        { label: 'import_standard_tags', value: 'import_standard_tags' }
    ]}
>
<TabItem value="bulk_delete_tags">

Deletes the specified tag key definitions. This operation triggers a process that removes the&lt;br /&gt;tags from all resources in your tenancy. The tag key definitions must be within the same tag namespace.&lt;br /&gt;&lt;br /&gt;The following actions happen immediately:&lt;br /&gt;&lt;br /&gt;  * If the tag is a cost-tracking tag, the tag no longer counts against your&lt;br /&gt;  10 cost-tracking tags limit, even if you do not disable the tag before running this operation.&lt;br /&gt;  * If the tag is used with dynamic groups, the rules that contain the tag are no longer&lt;br /&gt;  evaluated against the tag.&lt;br /&gt;&lt;br /&gt;After you start this operation, the state of the tag changes to DELETING, and tag removal&lt;br /&gt;from resources begins. This process can take up to 48 hours depending on the number of resources that&lt;br /&gt;are tagged and the regions in which those resources reside.&lt;br /&gt;&lt;br /&gt;When all tags have been removed, the state changes to DELETED. You cannot restore a deleted tag. After the tag state&lt;br /&gt;changes to DELETED, you can use the same tag name again.&lt;br /&gt;&lt;br /&gt;After you start this operation, you cannot start either the &#91;DeleteTag&#93;(#/en/identity/20160918/Tag/DeleteTag) or the &#91;CascadeDeleteTagNamespace&#93;(#/en/identity/20160918/TagNamespace/CascadeDeleteTagNamespace) operation until this process completes.&lt;br /&gt;&lt;br /&gt;In order to delete tags, you must first retire the tags. Use &#91;UpdateTag&#93;(#/en/identity/20160918/Tag/UpdateTag)&lt;br /&gt;to retire a tag.&lt;br /&gt;

```sql
EXEC oci.identity.tags.bulk_delete_tags 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@isLockOverride={{ isLockOverride }} 
@@json=
'{
"tagDefinitionIds": "{{ tagDefinitionIds }}"
}'
;
```
</TabItem>
<TabItem value="bulk_edit_tags">

Edits the specified list of tag key definitions for the selected resources.&lt;br /&gt;This operation triggers a process that edits the tags on all selected resources. The possible actions are:&lt;br /&gt;&lt;br /&gt;  * Add a defined tag when the tag does not already exist on the resource.&lt;br /&gt;  * Update the value for a defined tag when the tag is present on the resource.&lt;br /&gt;  * Add a defined tag when it does not already exist on the resource or update the value for a defined tag when the tag is present on the resource.&lt;br /&gt;  * Remove a defined tag from a resource. The tag is removed from the resource regardless of the tag value.&lt;br /&gt;&lt;br /&gt;See &#91;BulkEditOperationDetails&#93;(#/en/identity/latest/datatypes/BulkEditOperationDetails) for more information.&lt;br /&gt;&lt;br /&gt;The edits can include a combination of operations and tag sets.&lt;br /&gt;However, multiple operations cannot apply to one key definition in the same request.&lt;br /&gt;For example, if one request adds `tag set-1` to a resource and sets a tag value to `tag set-2`,&lt;br /&gt;`tag set-1` and `tag set-2` cannot have any common tag definitions.&lt;br /&gt;

```sql
EXEC oci.identity.tags.bulk_edit_tags 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"bulkEditOperations": "{{ bulkEditOperations }}", 
"compartmentId": "{{ compartmentId }}", 
"resources": "{{ resources }}"
}'
;
```
</TabItem>
<TabItem value="import_standard_tags">

OCI will release Tag Namespaces that our customers can import.&lt;br /&gt;These Tag Namespaces will provide Tags for our customers and Partners to provide consistency and enable data reporting.&lt;br /&gt;

```sql
EXEC oci.identity.tags.import_standard_tags 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}", 
"standardTagNamespaceName": "{{ standardTagNamespaceName }}"
}'
;
```
</TabItem>
</Tabs>
