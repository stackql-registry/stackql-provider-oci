--- 
title: tag_defaults
hide_title: false
hide_table_of_contents: false
keywords:
  - tag_defaults
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

Creates, updates, deletes, gets or lists a <code>tag_defaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tag_defaults" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.tag_defaults" /></td></tr>
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

The tag default was retrieved.

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
    <td>The OCID of the tag default.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment. The tag default applies to all new resources that get created in the compartment. Resources that existed before the tag default was created are not tagged. </td>
</tr>
<tr>
    <td><CopyableCode code="isRequired" /></td>
    <td><code>boolean</code></td>
    <td>If you specify that a value is required, a value is set during resource creation (either by the user creating the resource or another tag defualt). If no value is set, resource creation is blocked.  * If the `isRequired` flag is set to "true", the value is set during resource creation. * If the `isRequired` flag is set to "false", the value you enter is set during resource creation.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The tag default's current state. After creating a `TagDefault`, make sure its `lifecycleState` is ACTIVE before using it.  (ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="locks" /></td>
    <td><code>array</code></td>
    <td>Locks associated with this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tagDefinitionId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tag definition. The tag default will always assign a default value for this tag definition. </td>
</tr>
<tr>
    <td><CopyableCode code="tagDefinitionName" /></td>
    <td><code>string</code></td>
    <td>The name used in the tag definition. This field is informational in the context of the tag default. </td>
</tr>
<tr>
    <td><CopyableCode code="tagNamespaceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tag namespace that contains the tag definition. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the `TagDefault` object was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The default value for the tag definition. This will be applied to all resources created in the compartment. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Summary information for the specified tag default.&lt;br /&gt;

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
    <td>The OCID of the tag default.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment. The tag default will apply to all new resources that are created in the compartment. </td>
</tr>
<tr>
    <td><CopyableCode code="isRequired" /></td>
    <td><code>boolean</code></td>
    <td>If you specify that a value is required, a value is set during resource creation (either by the user creating the resource or another tag defualt). If no value is set, resource creation is blocked.  * If the `isRequired` flag is set to "true", the value is set during resource creation. * If the `isRequired` flag is set to "false", the value you enter is set during resource creation.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The tag default's current state. After creating a `TagDefault`, make sure its `lifecycleState` is ACTIVE before using it.  (ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="locks" /></td>
    <td><code>array</code></td>
    <td>Locks associated with this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="tagDefinitionId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tag definition. The tag default will always assign a default value for this tag definition. </td>
</tr>
<tr>
    <td><CopyableCode code="tagDefinitionName" /></td>
    <td><code>string</code></td>
    <td>The name used in the tag definition. This field is informational in the context of the tag default. </td>
</tr>
<tr>
    <td><CopyableCode code="tagNamespaceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tag namespace that contains the tag definition. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the `TagDefault` object was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The default value for the tag definition. This will be applied to all new resources created in the compartment. </td>
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
    <td><a href="#parameter-tagDefaultId"><code>tagDefaultId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified tag default.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-tagDefinitionId"><code>tagDefinitionId</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the tag defaults for tag definitions in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-tagDefinitionId"><code>tagDefinitionId</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a new tag default in the specified compartment for the specified tag definition.&lt;br /&gt;&lt;br /&gt;If you specify that a value is required, a value is set during resource creation (either by&lt;br /&gt;the user creating the resource or another tag defualt). If no value is set, resource creation&lt;br /&gt;is blocked.&lt;br /&gt;&lt;br /&gt;* If the `isRequired` flag is set to "true", the value is set during resource creation.&lt;br /&gt;* If the `isRequired` flag is set to "false", the value you enter is set during resource creation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-tagDefaultId"><code>tagDefaultId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td><a href="#parameter-isLockOverride"><code>isLockOverride</code></a>, <a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified tag default. If you specify that a value is required, a value is set&lt;br /&gt;during resource creation (either by the user creating the resource or another tag defualt).&lt;br /&gt;If no value is set, resource creation is blocked.&lt;br /&gt;&lt;br /&gt;* If the `isRequired` flag is set to "true", the value is set during resource creation.&lt;br /&gt;* If the `isRequired` flag is set to "false", the value you enter is set during resource creation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tagDefaultId"><code>tagDefaultId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-isLockOverride"><code>isLockOverride</code></a></td>
    <td>Deletes the the specified tag default.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#assemble_effective_tag_set"><CopyableCode code="assemble_effective_tag_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Assembles tag defaults in the specified compartment and any parent compartments to determine&lt;br /&gt;the tags to apply. Tag defaults from parent compartments do not override tag defaults&lt;br /&gt;referencing the same tag in a compartment lower down the hierarchy. This set of tag defaults&lt;br /&gt;includes all tag defaults from the current compartment back to the root compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_tag_default_lock"><CopyableCode code="add_tag_default_lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tagDefaultId"><code>tagDefaultId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Add a resource lock to a tag default.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_tag_default_lock"><CopyableCode code="remove_tag_default_lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tagDefaultId"><code>tagDefaultId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Remove a resource lock from a tag default.&lt;br /&gt;</td>
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
<tr id="parameter-tagDefaultId">
    <td><CopyableCode code="tagDefaultId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tag default.</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment (remember that the tenancy is simply the root compartment). </td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the specified OCID exactly. </td>
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
<tr id="parameter-tagDefinitionId">
    <td><CopyableCode code="tagDefinitionId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tag definition. </td>
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

Retrieves the specified tag default.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
isRequired,
lifecycleState,
locks,
tagDefinitionId,
tagDefinitionName,
tagNamespaceId,
timeCreated,
value
FROM oci.identity.tag_defaults
WHERE tagDefaultId = '{{ tagDefaultId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the tag defaults for tag definitions in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
isRequired,
lifecycleState,
locks,
tagDefinitionId,
tagDefinitionName,
tagNamespaceId,
timeCreated,
value
FROM oci.identity.tag_defaults
WHERE region = '{{ region }}' -- required
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND id = '{{ id }}'
AND compartmentId = '{{ compartmentId }}'
AND tagDefinitionId = '{{ tagDefinitionId }}'
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

Creates a new tag default in the specified compartment for the specified tag definition.&lt;br /&gt;&lt;br /&gt;If you specify that a value is required, a value is set during resource creation (either by&lt;br /&gt;the user creating the resource or another tag defualt). If no value is set, resource creation&lt;br /&gt;is blocked.&lt;br /&gt;&lt;br /&gt;* If the `isRequired` flag is set to "true", the value is set during resource creation.&lt;br /&gt;* If the `isRequired` flag is set to "false", the value you enter is set during resource creation.&lt;br /&gt;

```sql
INSERT INTO oci.identity.tag_defaults (
compartmentId,
isRequired,
locks,
tagDefinitionId,
value,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ compartmentId }}' /* required */,
{{ isRequired }},
'{{ locks }}',
'{{ tagDefinitionId }}' /* required */,
'{{ value }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
compartmentId,
isRequired,
lifecycleState,
locks,
tagDefinitionId,
tagDefinitionName,
tagNamespaceId,
timeCreated,
value
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tag_defaults
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tag_defaults resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment. The tag default will be applied to all new resources created in this compartment.
    - name: isRequired
      value: {{ isRequired }}
      description: |
        If you specify that a value is required, a value is set during resource creation (either by
        the user creating the resource or another tag defualt). If no value is set, resource
        creation is blocked.
        * If the \`isRequired\` flag is set to "true", the value is set during resource creation.
        * If the \`isRequired\` flag is set to "false", the value you enter is set during resource creation.
        Example: \`false\`
    - name: locks
      description: |
        Locks associated with this resource.
      value:
        - message: "{{ message }}"
          relatedResourceId: "{{ relatedResourceId }}"
          type: "{{ type }}"
    - name: tagDefinitionId
      value: "{{ tagDefinitionId }}"
      description: |
        The OCID of the tag definition. The tag default will always assign a default value for this tag definition.
    - name: value
      value: "{{ value }}"
      description: |
        The default value for the tag definition. This will be applied to all new resources created in the compartment.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
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

Updates the specified tag default. If you specify that a value is required, a value is set&lt;br /&gt;during resource creation (either by the user creating the resource or another tag defualt).&lt;br /&gt;If no value is set, resource creation is blocked.&lt;br /&gt;&lt;br /&gt;* If the `isRequired` flag is set to "true", the value is set during resource creation.&lt;br /&gt;* If the `isRequired` flag is set to "false", the value you enter is set during resource creation.&lt;br /&gt;

```sql
UPDATE oci.identity.tag_defaults
SET 
isRequired = {{ isRequired }},
value = '{{ value }}'
WHERE 
tagDefaultId = '{{ tagDefaultId }}' --required
AND region = '{{ region }}' --required
AND value = '{{ value }}' --required
AND isLockOverride = {{ isLockOverride}}
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
compartmentId,
isRequired,
lifecycleState,
locks,
tagDefinitionId,
tagDefinitionName,
tagNamespaceId,
timeCreated,
value;
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

Deletes the the specified tag default.&lt;br /&gt;

```sql
DELETE FROM oci.identity.tag_defaults
WHERE tagDefaultId = '{{ tagDefaultId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
AND if-match = '{{ if-match }}'
AND isLockOverride = '{{ isLockOverride }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="assemble_effective_tag_set"
    values={[
        { label: 'assemble_effective_tag_set', value: 'assemble_effective_tag_set' },
        { label: 'add_tag_default_lock', value: 'add_tag_default_lock' },
        { label: 'remove_tag_default_lock', value: 'remove_tag_default_lock' }
    ]}
>
<TabItem value="assemble_effective_tag_set">

Assembles tag defaults in the specified compartment and any parent compartments to determine&lt;br /&gt;the tags to apply. Tag defaults from parent compartments do not override tag defaults&lt;br /&gt;referencing the same tag in a compartment lower down the hierarchy. This set of tag defaults&lt;br /&gt;includes all tag defaults from the current compartment back to the root compartment.&lt;br /&gt;

```sql
EXEC oci.identity.tag_defaults.assemble_effective_tag_set 
@compartmentId='{{ compartmentId }}' --required, 
@region='{{ region }}' --required, 
@lifecycleState='{{ lifecycleState }}'
;
```
</TabItem>
<TabItem value="add_tag_default_lock">

Add a resource lock to a tag default.&lt;br /&gt;

```sql
EXEC oci.identity.tag_defaults.add_tag_default_lock 
@tagDefaultId='{{ tagDefaultId }}' --required, 
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
<TabItem value="remove_tag_default_lock">

Remove a resource lock from a tag default.&lt;br /&gt;

```sql
EXEC oci.identity.tag_defaults.remove_tag_default_lock 
@tagDefaultId='{{ tagDefaultId }}' --required, 
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
