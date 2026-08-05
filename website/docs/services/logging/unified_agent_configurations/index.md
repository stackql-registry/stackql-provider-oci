--- 
title: unified_agent_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - unified_agent_configurations
  - logging
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

Creates, updates, deletes, gets or lists an <code>unified_agent_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="unified_agent_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.logging.unified_agent_configurations" /></td></tr>
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

Unified agent configuration.

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
    <td>The OCID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that the resource belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="configurationState" /></td>
    <td><code>string</code></td>
    <td>State of unified agent service configuration. (VALID, INVALID) (x-obmcs-top-level-enum: #/definitions/UnifiedAgentServiceConfigurationStates)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly display name. This must be unique within the enclosing resource, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="groupAssociation" /></td>
    <td><code>object</code></td>
    <td>Groups using the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="isEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this resource is currently enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The pipeline state. (CREATING, ACTIVE, UPDATING, INACTIVE, DELETING, FAILED) (x-obmcs-top-level-enum: #/definitions/LogLifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceConfiguration" /></td>
    <td><code>object</code></td>
    <td>Top level Unified Agent service configuration object.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeLastModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time the resource was last modified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The list is being retrieved.

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
    <td>The OCID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that the resource belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="configurationState" /></td>
    <td><code>string</code></td>
    <td>State of unified agent service configuration. (VALID, INVALID) (x-obmcs-top-level-enum: #/definitions/UnifiedAgentServiceConfigurationStates)</td>
</tr>
<tr>
    <td><CopyableCode code="configurationType" /></td>
    <td><code>string</code></td>
    <td>Type of Unified Agent service configuration. (LOGGING) (x-obmcs-top-level-enum: #/definitions/UnifiedAgentServiceConfigurationTypes)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly display name. This must be unique within the enclosing resource, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not this resource is currently enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The pipeline state. (CREATING, ACTIVE, UPDATING, INACTIVE, DELETING, FAILED) (x-obmcs-top-level-enum: #/definitions/LogLifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeLastModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time the resource was last modified.</td>
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
    <td><a href="#parameter-unifiedAgentConfigurationId"><code>unifiedAgentConfigurationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Get the unified agent configuration for an ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-logId"><code>logId</code></a>, <a href="#parameter-isCompartmentIdInSubtree"><code>isCompartmentIdInSubtree</code></a>, <a href="#parameter-groupId"><code>groupId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists all unified agent configurations in the specified compartment.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-isEnabled"><code>isEnabled</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-serviceConfiguration"><code>serviceConfiguration</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Create unified agent configuration registration.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-unifiedAgentConfigurationId"><code>unifiedAgentConfigurationId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-isEnabled"><code>isEnabled</code></a>, <a href="#parameter-serviceConfiguration"><code>serviceConfiguration</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Update an existing unified agent configuration. This call&lt;br /&gt;      fails if the log group does not exist.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-unifiedAgentConfigurationId"><code>unifiedAgentConfigurationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Delete unified agent configuration.</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-unifiedAgentConfigurationId"><code>unifiedAgentConfigurationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Moves the unified agent configuration into a different compartment within the same tenancy.  When provided, the If-Match is checked against the ETag values of the resource.&lt;br /&gt;For information about moving resources between compartments, see &#91;Moving Resources Between Compartments&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
    <td>Compartment OCID to list resources in. See compartmentIdInSubtree      for nested compartments traversal. </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-unifiedAgentConfigurationId">
    <td><CopyableCode code="unifiedAgentConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Unified Agent configuration.</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Resource name.</td>
</tr>
<tr id="parameter-groupId">
    <td><CopyableCode code="groupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of a group or a dynamic group.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-isCompartmentIdInSubtree">
    <td><CopyableCode code="isCompartmentIdInSubtree" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether or not nested compartments should be traversed. Defaults to false.</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>Lifecycle state of the log object</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>When setting the page limit, specifies the maximum number of unfiltered records that can be fetched from the data store in one request. Filtering happens after the records are retrieved. Subsequent pages might include results that match the query criteria. </td>
</tr>
<tr id="parameter-logId">
    <td><CopyableCode code="logId" /></td>
    <td><code>string</code></td>
    <td>Custom log OCID to list resources with the log as destination. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error, without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` or `opc-previous-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by (one column only). Default sort order is ascending exception of `timeCreated` and `timeLastModified` columns (descending). </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, whether 'asc' or 'desc'. </td>
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

Get the unified agent configuration for an ID.

```sql
SELECT
id,
compartmentId,
configurationState,
definedTags,
description,
displayName,
freeformTags,
groupAssociation,
isEnabled,
lifecycleState,
serviceConfiguration,
timeCreated,
timeLastModified
FROM oci.logging.unified_agent_configurations
WHERE unifiedAgentConfigurationId = '{{ unifiedAgentConfigurationId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists all unified agent configurations in the specified compartment.

```sql
SELECT
id,
compartmentId,
configurationState,
configurationType,
definedTags,
description,
displayName,
freeformTags,
isEnabled,
lifecycleState,
timeCreated,
timeLastModified
FROM oci.logging.unified_agent_configurations
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND logId = '{{ logId }}'
AND isCompartmentIdInSubtree = '{{ isCompartmentIdInSubtree }}'
AND groupId = '{{ groupId }}'
AND displayName = '{{ displayName }}'
AND lifecycleState = '{{ lifecycleState }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND opc-request-id = '{{ opc-request-id }}'
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

Create unified agent configuration registration.

```sql
INSERT INTO oci.logging.unified_agent_configurations (
compartmentId,
definedTags,
description,
displayName,
freeformTags,
groupAssociation,
isEnabled,
serviceConfiguration,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ description }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ groupAssociation }}',
{{ isEnabled }} /* required */,
'{{ serviceConfiguration }}' /* required */,
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: unified_agent_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the unified_agent_configurations resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment that the resource belongs to.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a
        namespace. For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        Description for this resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly display name. This must be unique within the enclosing resource,
        and it's changeable. Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: groupAssociation
      description: |
        Groups using the configuration.
      value:
        groupList:
          - "{{ groupList }}"
    - name: isEnabled
      value: {{ isEnabled }}
      description: |
        Whether or not this resource is currently enabled.
      default: true
    - name: serviceConfiguration
      description: |
        Top level Unified Agent service configuration object.
      value:
        configurationType: "{{ configurationType }}"
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error, without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error, without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
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

Update an existing unified agent configuration. This call&lt;br /&gt;      fails if the log group does not exist.&lt;br /&gt;

```sql
UPDATE oci.logging.unified_agent_configurations
SET 
definedTags = '{{ definedTags }}',
description = '{{ description }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
groupAssociation = '{{ groupAssociation }}',
isEnabled = {{ isEnabled }},
serviceConfiguration = '{{ serviceConfiguration }}'
WHERE 
unifiedAgentConfigurationId = '{{ unifiedAgentConfigurationId }}' --required
AND region = '{{ region }}' --required
AND displayName = '{{ displayName }}' --required
AND isEnabled = {{ isEnabled }} --required
AND serviceConfiguration = '{{ serviceConfiguration }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}';
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

Delete unified agent configuration.

```sql
DELETE FROM oci.logging.unified_agent_configurations
WHERE unifiedAgentConfigurationId = '{{ unifiedAgentConfigurationId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_compartment"
    values={[
        { label: 'change_compartment', value: 'change_compartment' }
    ]}
>
<TabItem value="change_compartment">

Moves the unified agent configuration into a different compartment within the same tenancy.  When provided, the If-Match is checked against the ETag values of the resource.&lt;br /&gt;For information about moving resources between compartments, see &#91;Moving Resources Between Compartments&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.logging.unified_agent_configurations.change_compartment 
@unifiedAgentConfigurationId='{{ unifiedAgentConfigurationId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
</Tabs>
