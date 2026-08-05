--- 
title: instance_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_configurations
  - compute
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

Creates, updates, deletes, gets or lists an <code>instance_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.instance_configurations" /></td></tr>
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

The instance configuration was retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the instance configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the instance configuration. </td>
</tr>
<tr>
    <td><CopyableCode code="deferredFields" /></td>
    <td><code>array</code></td>
    <td>Parameters that were not specified when the instance configuration was created, but that are required to launch an instance from the instance configuration. See the &#91;LaunchInstanceConfiguration&#93;(#/en/iaas/latest/Instance/LaunchInstanceConfiguration) operation. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="instanceDetails" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the instance configuration was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Summary information for an instance configuration.&lt;br /&gt;

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
    <td>The OCID of the instance configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the instance configuration. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the instance configuration was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-instanceConfigurationId"><code>instanceConfigurationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified instance configuration</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Lists the instance configurations in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#launch"><CopyableCode code="launch" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instanceConfigurationId"><code>instanceConfigurationId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceType"><code>instanceType</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-compute-cluster-id"><code>opc-compute-cluster-id</code></a></td>
    <td>Creates an instance from an instance configuration.&lt;br /&gt;&lt;br /&gt;If the instance configuration does not include all of the parameters that are&lt;br /&gt;required to create an instance, such as the availability domain and subnet ID, you must&lt;br /&gt;provide these parameters when you create an instance from the instance configuration.&lt;br /&gt;For more information, see the &#91;InstanceConfiguration&#93;(#/en/iaas/latest/InstanceConfiguration/)&lt;br /&gt;resource.&lt;br /&gt;&lt;br /&gt;To determine whether capacity is available for a specific shape before you create an instance,&lt;br /&gt;use the &#91;CreateComputeCapacityReport&#93;(#/en/iaas/latest/ComputeCapacityReport/CreateComputeCapacityReport)&lt;br /&gt;operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates an instance configuration. An instance configuration is a template that defines the&lt;br /&gt;settings to use when creating Compute instances.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instanceConfigurationId"><code>instanceConfigurationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the free-form tags, defined tags, and display name of an instance configuration.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instanceConfigurationId"><code>instanceConfigurationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes an instance configuration.</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceConfigurationId"><code>instanceConfigurationId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves an instance configuration into a different compartment within the same tenancy.&lt;br /&gt;For information about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;When you move an instance configuration to a different compartment, associated resources such as&lt;br /&gt;instance pools are not moved.&lt;br /&gt;&lt;br /&gt;**Important:** Most of the properties for an existing instance configuration, including the compartment,&lt;br /&gt;cannot be modified after you create the instance configuration. Although you can move an instance configuration&lt;br /&gt;to a different compartment, you will not be able to use the instance configuration to manage instance pools&lt;br /&gt;in the new compartment. If you want to update an instance configuration to point to a different compartment,&lt;br /&gt;you should instead create a new instance configuration in the target compartment using&lt;br /&gt;&#91;CreateInstanceConfiguration&#93;(/iaas/api/#/en/iaas/20160918/InstanceConfiguration/CreateInstanceConfiguration).&lt;br /&gt;</td>
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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr id="parameter-instanceConfigurationId">
    <td><CopyableCode code="instanceConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the instance configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
</tr>
<tr id="parameter-opc-compute-cluster-id">
    <td><CopyableCode code="opc-compute-cluster-id" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the &#91;compute cluster&#93;(/iaas/Content/Compute/Tasks/compute-clusters.htm) that the instance will be created in. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** In general, some "List" operations (for example, `ListInstances`) let you optionally filter by availability domain if the scope of the resource type is within a single availability domain. If you call one of these "List" operations without specifying an availability domain, the resources are grouped by availability domain, then sorted. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). The DISPLAYNAME sort order is case sensitive. </td>
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

Gets the specified instance configuration

```sql
SELECT
id,
compartmentId,
deferredFields,
definedTags,
displayName,
freeformTags,
instanceDetails,
timeCreated
FROM oci.compute.instance_configurations
WHERE instanceConfigurationId = '{{ instanceConfigurationId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the instance configurations in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
freeformTags,
timeCreated
FROM oci.compute.instance_configurations
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="launch"
    values={[
        { label: 'launch', value: 'launch' },
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="launch">

Creates an instance from an instance configuration.&lt;br /&gt;&lt;br /&gt;If the instance configuration does not include all of the parameters that are&lt;br /&gt;required to create an instance, such as the availability domain and subnet ID, you must&lt;br /&gt;provide these parameters when you create an instance from the instance configuration.&lt;br /&gt;For more information, see the &#91;InstanceConfiguration&#93;(#/en/iaas/latest/InstanceConfiguration/)&lt;br /&gt;resource.&lt;br /&gt;&lt;br /&gt;To determine whether capacity is available for a specific shape before you create an instance,&lt;br /&gt;use the &#91;CreateComputeCapacityReport&#93;(#/en/iaas/latest/ComputeCapacityReport/CreateComputeCapacityReport)&lt;br /&gt;operation.&lt;br /&gt;

```sql
INSERT INTO oci.compute.instance_configurations (
instanceType,
instanceConfigurationId,
region,
opc-retry-token,
opc-compute-cluster-id
)
SELECT 
'{{ instanceType }}' /* required */,
'{{ instanceConfigurationId }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-compute-cluster-id }}'
RETURNING
id,
agentConfig,
availabilityConfig,
availabilityDomain,
capacityReservationId,
clusterPlacementGroupId,
compartmentId,
dedicatedVmHostId,
definedTags,
displayName,
extendedMetadata,
faultDomain,
freeformTags,
imageId,
instanceConfigurationId,
instanceOptions,
ipxeScript,
isAIEnterpriseEnabled,
launchMode,
launchOptions,
licensingConfigs,
lifecycleState,
metadata,
placementConstraintDetails,
platformConfig,
preemptibleInstanceConfig,
region,
securityAttributes,
securityAttributesState,
shape,
shapeConfig,
sourceDetails,
timeCreated,
timeMaintenanceRebootDue
;
```
</TabItem>
<TabItem value="create">

Creates an instance configuration. An instance configuration is a template that defines the&lt;br /&gt;settings to use when creating Compute instances.&lt;br /&gt;

```sql
INSERT INTO oci.compute.instance_configurations (
compartmentId,
definedTags,
displayName,
freeformTags,
source,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ source }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
deferredFields,
definedTags,
displayName,
freeformTags,
instanceDetails,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instance_configurations
  props:
    - name: instanceConfigurationId
      value: "{{ instanceConfigurationId }}"
      description: Required parameter for the instance_configurations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instance_configurations resource.
    - name: instanceType
      value: "{{ instanceType }}"
      description: |
        The type of instance details. Supported instanceType is compute
      default: compute
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment
        containing the instance configuration.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a
        namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. Does not have to be unique, and it's changeable.
        Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: source
      value: "{{ source }}"
      description: |
        The source of the instance configuration. An instance configuration defines the
        settings to use when creating Compute instances, including details
        such as the base image, shape, and metadata. You can also specify the associated resources for the
        instance, such as block volume attachments and network configuration.
        When you create an instance configuration using an existing instance as a template, the instance
        configuration does not include any information from the source instance's boot volume, such as installed
        applications, binaries, and files on the instance. It also does not include the contents of
        any block volumes that are attached to the instance.
        To create an instance configuration that includes the custom setup from an instance's boot volume, you
        must first create a custom image from the instance (see [CreateImage](#/en/iaas/latest/Image/CreateImage)).
        Then, use the custom image to launch a new instance
        (see [LaunchInstance](#/en/iaas/latest/Instance/LaunchInstance)). Finally, create the instance
        configuration based on the instance that you created from the custom image.
        To include block volume contents with an instance configuration, first create a backup of the attached block volumes
        (see [CreateVolumeBackup](#/en/iaas/latest/VolumeBackup/CreateVolumeBackup)). Then, create the instance
        configuration by specifying the list of settings, using
        [InstanceConfigurationVolumeSourceFromVolumeBackupDetails](#/en/iaas/latest/datatypes/InstanceConfigurationVolumeSourceFromVolumeBackupDetails)
        to include the block volume backups in the list of settings.
        The following values are supported:
        * \`NONE\`: Creates an instance configuration using the list of settings that you specify.
        * \`INSTANCE\`: Creates an instance configuration using an existing instance as a template.
      valid_values: ['NONE', 'INSTANCE']
      default: NONE
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
    - name: opc-compute-cluster-id
      value: "{{ opc-compute-cluster-id }}"
      description: The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the [compute cluster](/iaas/Content/Compute/Tasks/compute-clusters.htm) that the instance will be created in. 
      description: The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the [compute cluster](/iaas/Content/Compute/Tasks/compute-clusters.htm) that the instance will be created in. 
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

Updates the free-form tags, defined tags, and display name of an instance configuration.

```sql
UPDATE oci.compute.instance_configurations
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}'
WHERE 
instanceConfigurationId = '{{ instanceConfigurationId }}' --required
AND region = '{{ region }}' --required
AND opc-retry-token = '{{ opc-retry-token}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
deferredFields,
definedTags,
displayName,
freeformTags,
instanceDetails,
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

Deletes an instance configuration.

```sql
DELETE FROM oci.compute.instance_configurations
WHERE instanceConfigurationId = '{{ instanceConfigurationId }}' --required
AND region = '{{ region }}' --required
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

Moves an instance configuration into a different compartment within the same tenancy.&lt;br /&gt;For information about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;When you move an instance configuration to a different compartment, associated resources such as&lt;br /&gt;instance pools are not moved.&lt;br /&gt;&lt;br /&gt;**Important:** Most of the properties for an existing instance configuration, including the compartment,&lt;br /&gt;cannot be modified after you create the instance configuration. Although you can move an instance configuration&lt;br /&gt;to a different compartment, you will not be able to use the instance configuration to manage instance pools&lt;br /&gt;in the new compartment. If you want to update an instance configuration to point to a different compartment,&lt;br /&gt;you should instead create a new instance configuration in the target compartment using&lt;br /&gt;&#91;CreateInstanceConfiguration&#93;(/iaas/api/#/en/iaas/20160918/InstanceConfiguration/CreateInstanceConfiguration).&lt;br /&gt;

```sql
EXEC oci.compute.instance_configurations.change_compartment 
@instanceConfigurationId='{{ instanceConfigurationId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
</Tabs>
