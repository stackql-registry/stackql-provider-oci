--- 
title: volume_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - volume_groups
  - block_storage
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

Creates, updates, deletes, gets or lists a <code>volume_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volume_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.block_storage.volume_groups" /></td></tr>
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

The volume group's information has been retrieved.

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
    <td>The OCID for the volume group.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the volume group.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the volume group.</td>
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
    <td><CopyableCode code="isHydrated" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the newly created cloned volume group's data has finished copying from the source volume group or backup. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of a volume group. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED, FAULTY)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInGBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The aggregate size of the volume group in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInMBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The aggregate size of the volume group in MBs.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDetails" /></td>
    <td><code>object</code></td>
    <td>Specifies the source for a volume group.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the volume group was created. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).</td>
</tr>
<tr>
    <td><CopyableCode code="volumeGroupReplicas" /></td>
    <td><code>array</code></td>
    <td>The list of volume group replicas of this volume group.</td>
</tr>
<tr>
    <td><CopyableCode code="volumeIds" /></td>
    <td><code>array</code></td>
    <td>OCIDs for the volumes in this volume group.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Specifies a volume group which is a collection of&lt;br /&gt;volumes. For more information, see &#91;Volume Groups&#93;(/iaas/Content/Block/Concepts/volumegroups.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you&lt;br /&gt;supply string values using the API.&lt;br /&gt;

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
    <td>The OCID for the volume group.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the volume group.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the volume group.</td>
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
    <td><CopyableCode code="isHydrated" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the newly created cloned volume group's data has finished copying from the source volume group or backup. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of a volume group. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED, FAULTY)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInGBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The aggregate size of the volume group in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInMBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The aggregate size of the volume group in MBs.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDetails" /></td>
    <td><code>object</code></td>
    <td>Specifies the source for a volume group.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the volume group was created. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).</td>
</tr>
<tr>
    <td><CopyableCode code="volumeGroupReplicas" /></td>
    <td><code>array</code></td>
    <td>The list of volume group replicas of this volume group.</td>
</tr>
<tr>
    <td><CopyableCode code="volumeIds" /></td>
    <td><code>array</code></td>
    <td>OCIDs for the volumes in this volume group.</td>
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
    <td><a href="#parameter-volumeGroupId"><code>volumeGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information for the specified volume group. For more information, see &#91;Volume Groups&#93;(/iaas/Content/Block/Concepts/volumegroups.htm).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the volume groups in the specified compartment and availability domain.&lt;br /&gt;For more information, see &#91;Volume Groups&#93;(/iaas/Content/Block/Concepts/volumegroups.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-sourceDetails"><code>sourceDetails</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new volume group in the specified compartment.&lt;br /&gt;A volume group is a collection of volumes and may be created from a list of volumes, cloning an existing&lt;br /&gt;volume group, or by restoring a volume group backup.&lt;br /&gt;You may optionally specify a *display name* for the volume group, which is simply a friendly name or&lt;br /&gt;description. It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;For more information, see &#91;Volume Groups&#93;(/iaas/Content/Block/Concepts/volumegroups.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-volumeGroupId"><code>volumeGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-preserveVolumeReplica"><code>preserveVolumeReplica</code></a></td>
    <td>Updates the set of volumes in a volume group along with the display name. Use this operation&lt;br /&gt;to add or remove volumes in a volume group. Specify the full list of volume IDs to include in the&lt;br /&gt;volume group. If the volume ID is not specified in the call, it will be removed from the volume group.&lt;br /&gt;Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;For more information, see &#91;Volume Groups&#93;(/iaas/Content/Block/Concepts/volumegroups.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-volumeGroupId"><code>volumeGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified volume group. Individual volumes are not deleted, only the volume group is deleted.&lt;br /&gt;For more information, see &#91;Volume Groups&#93;(/iaas/Content/Block/Concepts/volumegroups.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-volumeGroupId"><code>volumeGroupId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Moves a volume group into a different compartment within the same tenancy.&lt;br /&gt;For information about moving resources between compartments,&lt;br /&gt;see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-volumeGroupId">
    <td><CopyableCode code="volumeGroupId" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud ID (OCID) that uniquely identifies the volume group.</td>
</tr>
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given display name exactly. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given lifecycle state. The state value is case-insensitive. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
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
<tr id="parameter-preserveVolumeReplica">
    <td><CopyableCode code="preserveVolumeReplica" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to disable or preserve the individual volume replication when removing a volume from the replication enabled volume group. When set to `true`, the individual volume replica is preserved. The default value is `true`. </td>
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

Gets information for the specified volume group. For more information, see [Volume Groups](/iaas/Content/Block/Concepts/volumegroups.htm).

```sql
SELECT
id,
availabilityDomain,
compartmentId,
definedTags,
displayName,
freeformTags,
isHydrated,
lifecycleState,
sizeInGBs,
sizeInMBs,
sourceDetails,
timeCreated,
volumeGroupReplicas,
volumeIds
FROM oci.block_storage.volume_groups
WHERE volumeGroupId = '{{ volumeGroupId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the volume groups in the specified compartment and availability domain.&lt;br /&gt;For more information, see &#91;Volume Groups&#93;(/iaas/Content/Block/Concepts/volumegroups.htm).&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
compartmentId,
definedTags,
displayName,
freeformTags,
isHydrated,
lifecycleState,
sizeInGBs,
sizeInMBs,
sourceDetails,
timeCreated,
volumeGroupReplicas,
volumeIds
FROM oci.block_storage.volume_groups
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND availabilityDomain = '{{ availabilityDomain }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND displayName = '{{ displayName }}'
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

Creates a new volume group in the specified compartment.&lt;br /&gt;A volume group is a collection of volumes and may be created from a list of volumes, cloning an existing&lt;br /&gt;volume group, or by restoring a volume group backup.&lt;br /&gt;You may optionally specify a *display name* for the volume group, which is simply a friendly name or&lt;br /&gt;description. It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;For more information, see &#91;Volume Groups&#93;(/iaas/Content/Block/Concepts/volumegroups.htm).&lt;br /&gt;

```sql
INSERT INTO oci.block_storage.volume_groups (
availabilityDomain,
backupPolicyId,
clusterPlacementGroupId,
compartmentId,
definedTags,
displayName,
freeformTags,
sourceDetails,
volumeGroupReplicas,
region,
opc-retry-token
)
SELECT 
'{{ availabilityDomain }}' /* required */,
'{{ backupPolicyId }}',
'{{ clusterPlacementGroupId }}',
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ sourceDetails }}' /* required */,
'{{ volumeGroupReplicas }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
availabilityDomain,
compartmentId,
definedTags,
displayName,
freeformTags,
isHydrated,
lifecycleState,
sizeInGBs,
sizeInMBs,
sourceDetails,
timeCreated,
volumeGroupReplicas,
volumeIds
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: volume_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the volume_groups resource.
    - name: availabilityDomain
      value: "{{ availabilityDomain }}"
      description: |
        The availability domain of the volume group.
    - name: backupPolicyId
      value: "{{ backupPolicyId }}"
      description: |
        If provided, specifies the ID of the volume backup policy to assign to the newly
        created volume group. If omitted, no policy will be assigned.
    - name: clusterPlacementGroupId
      value: "{{ clusterPlacementGroupId }}"
      description: |
        The clusterPlacementGroup Id of the volume group for volume group placement.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment that contains the volume group.
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
    - name: sourceDetails
      description: |
        Specifies the source for a volume group.
      value:
        type: "{{ type }}"
    - name: volumeGroupReplicas
      description: |
        The list of volume group replicas that this volume group will be enabled to have
        in the specified destination availability domains.
      value:
        - availabilityDomain: "{{ availabilityDomain }}"
          displayName: "{{ displayName }}"
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
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

Updates the set of volumes in a volume group along with the display name. Use this operation&lt;br /&gt;to add or remove volumes in a volume group. Specify the full list of volume IDs to include in the&lt;br /&gt;volume group. If the volume ID is not specified in the call, it will be removed from the volume group.&lt;br /&gt;Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;For more information, see &#91;Volume Groups&#93;(/iaas/Content/Block/Concepts/volumegroups.htm).&lt;br /&gt;

```sql
UPDATE oci.block_storage.volume_groups
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
volumeGroupReplicas = '{{ volumeGroupReplicas }}',
volumeIds = '{{ volumeIds }}'
WHERE 
volumeGroupId = '{{ volumeGroupId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND preserveVolumeReplica = {{ preserveVolumeReplica}}
RETURNING
id,
availabilityDomain,
compartmentId,
definedTags,
displayName,
freeformTags,
isHydrated,
lifecycleState,
sizeInGBs,
sizeInMBs,
sourceDetails,
timeCreated,
volumeGroupReplicas,
volumeIds;
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

Deletes the specified volume group. Individual volumes are not deleted, only the volume group is deleted.&lt;br /&gt;For more information, see &#91;Volume Groups&#93;(/iaas/Content/Block/Concepts/volumegroups.htm).&lt;br /&gt;

```sql
DELETE FROM oci.block_storage.volume_groups
WHERE volumeGroupId = '{{ volumeGroupId }}' --required
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

Moves a volume group into a different compartment within the same tenancy.&lt;br /&gt;For information about moving resources between compartments,&lt;br /&gt;see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.block_storage.volume_groups.change_compartment 
@volumeGroupId='{{ volumeGroupId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
</Tabs>
