--- 
title: boot_volume_backups
hide_title: false
hide_table_of_contents: false
keywords:
  - boot_volume_backups
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

Creates, updates, deletes, gets or lists a <code>boot_volume_backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="boot_volume_backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.block_storage.boot_volume_backups" /></td></tr>
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

The boot volume backup was retrieved.

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
    <td>The OCID of the boot volume backup.</td>
</tr>
<tr>
    <td><CopyableCode code="bootVolumeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the boot volume.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the boot volume backup.</td>
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
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the volume backup will expire and be automatically deleted. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). This parameter will always be present for backups that were created automatically by a scheduled-backup policy. For manually created backups, it will be absent, signifying that there is no expiration time and the backup will last forever until manually deleted. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="imageId" /></td>
    <td><code>string</code></td>
    <td>The image OCID used to create the boot volume the backup is taken from. </td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Vault service master encryption assigned to the boot volume backup. For more information about the Vault service and encryption keys, see &#91;Overview of Vault service&#93;(/iaas/Content/KeyManagement/Concepts/keyoverview.htm) and &#91;Using Keys&#93;(/iaas/Content/KeyManagement/Tasks/usingkeys.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of a boot volume backup. (CREATING, AVAILABLE, TERMINATING, TERMINATED, FAULTY, REQUEST_RECEIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInGBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the boot volume, in GBs. </td>
</tr>
<tr>
    <td><CopyableCode code="sourceBootVolumeBackupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the source boot volume backup.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the backup was created manually, or via scheduled backup policy.  (MANUAL, SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the boot volume backup was created. This is the time the actual point-in-time image of the volume data was taken. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="timeRequestReceived" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the request to create the boot volume backup was received. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of a volume backup. (FULL, INCREMENTAL)</td>
</tr>
<tr>
    <td><CopyableCode code="uniqueSizeInGBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size used by the backup, in GBs. It is typically smaller than sizeInGBs, depending on the space consumed on the boot volume and whether the backup is full or incremental. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A point-in-time copy of a boot volume that can then be used to create&lt;br /&gt;a new boot volume or recover a boot volume. For more information, see &#91;Overview&lt;br /&gt;of Boot Volume Backups&#93;(/iaas/Content/Block/Concepts/bootvolumebackups.htm)&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy.&lt;br /&gt;If you're not authorized, talk to an administrator. If you're an administrator&lt;br /&gt;who needs to write policies to give users access, see &#91;Getting Started with&lt;br /&gt;Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you&lt;br /&gt;supply string values using the API.&lt;br /&gt;

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
    <td>The OCID of the boot volume backup.</td>
</tr>
<tr>
    <td><CopyableCode code="bootVolumeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the boot volume.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the boot volume backup.</td>
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
    <td><CopyableCode code="expirationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the volume backup will expire and be automatically deleted. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). This parameter will always be present for backups that were created automatically by a scheduled-backup policy. For manually created backups, it will be absent, signifying that there is no expiration time and the backup will last forever until manually deleted. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="imageId" /></td>
    <td><code>string</code></td>
    <td>The image OCID used to create the boot volume the backup is taken from. </td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Vault service master encryption assigned to the boot volume backup. For more information about the Vault service and encryption keys, see &#91;Overview of Vault service&#93;(/iaas/Content/KeyManagement/Concepts/keyoverview.htm) and &#91;Using Keys&#93;(/iaas/Content/KeyManagement/Tasks/usingkeys.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of a boot volume backup. (CREATING, AVAILABLE, TERMINATING, TERMINATED, FAULTY, REQUEST_RECEIVED)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInGBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the boot volume, in GBs. </td>
</tr>
<tr>
    <td><CopyableCode code="sourceBootVolumeBackupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the source boot volume backup.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceType" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the backup was created manually, or via scheduled backup policy.  (MANUAL, SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the boot volume backup was created. This is the time the actual point-in-time image of the volume data was taken. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="timeRequestReceived" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the request to create the boot volume backup was received. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of a volume backup. (FULL, INCREMENTAL)</td>
</tr>
<tr>
    <td><CopyableCode code="uniqueSizeInGBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size used by the backup, in GBs. It is typically smaller than sizeInGBs, depending on the space consumed on the boot volume and whether the backup is full or incremental. </td>
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
    <td><a href="#parameter-bootVolumeBackupId"><code>bootVolumeBackupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information for the specified boot volume backup.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-bootVolumeId"><code>bootVolumeId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sourceBootVolumeBackupId"><code>sourceBootVolumeBackupId</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the boot volume backups in the specified compartment. You can filter the results by boot volume.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-bootVolumeId"><code>bootVolumeId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new boot volume backup of the specified boot volume. For general information about boot volume backups,&lt;br /&gt;see &#91;Overview of Boot Volume Backups&#93;(/iaas/Content/Block/Concepts/bootvolumebackups.htm)&lt;br /&gt;&lt;br /&gt;When the request is received, the backup object is in a REQUEST_RECEIVED state.&lt;br /&gt;When the data is imaged, it goes into a CREATING state.&lt;br /&gt;After the backup is fully uploaded to the cloud, it goes into an AVAILABLE state.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bootVolumeBackupId"><code>bootVolumeBackupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the display name for the specified boot volume backup.&lt;br /&gt;Avoid entering confidential information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bootVolumeBackupId"><code>bootVolumeBackupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes a boot volume backup.</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bootVolumeBackupId"><code>bootVolumeBackupId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Moves a boot volume backup into a different compartment within the same tenancy.&lt;br /&gt;For information about moving resources between compartments,&lt;br /&gt;see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#copy_boot_volume_backup"><CopyableCode code="copy_boot_volume_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bootVolumeBackupId"><code>bootVolumeBackupId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destinationRegion"><code>destinationRegion</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a boot volume backup copy in specified region. For general information about volume backups,&lt;br /&gt;see &#91;Overview of Boot Volume Backups&#93;(/iaas/Content/Block/Concepts/bootvolumebackups.htm)&lt;br /&gt;</td>
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
<tr id="parameter-bootVolumeBackupId">
    <td><CopyableCode code="bootVolumeBackupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the boot volume backup.</td>
</tr>
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
<tr id="parameter-bootVolumeId">
    <td><CopyableCode code="bootVolumeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the boot volume.</td>
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
<tr id="parameter-sourceBootVolumeBackupId">
    <td><CopyableCode code="sourceBootVolumeBackupId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that originated from the given source boot volume backup. </td>
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

Gets information for the specified boot volume backup.

```sql
SELECT
id,
bootVolumeId,
compartmentId,
definedTags,
displayName,
expirationTime,
freeformTags,
imageId,
kmsKeyId,
lifecycleState,
sizeInGBs,
sourceBootVolumeBackupId,
sourceType,
timeCreated,
timeRequestReceived,
type,
uniqueSizeInGBs
FROM oci.block_storage.boot_volume_backups
WHERE bootVolumeBackupId = '{{ bootVolumeBackupId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the boot volume backups in the specified compartment. You can filter the results by boot volume.&lt;br /&gt;

```sql
SELECT
id,
bootVolumeId,
compartmentId,
definedTags,
displayName,
expirationTime,
freeformTags,
imageId,
kmsKeyId,
lifecycleState,
sizeInGBs,
sourceBootVolumeBackupId,
sourceType,
timeCreated,
timeRequestReceived,
type,
uniqueSizeInGBs
FROM oci.block_storage.boot_volume_backups
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND bootVolumeId = '{{ bootVolumeId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND displayName = '{{ displayName }}'
AND sourceBootVolumeBackupId = '{{ sourceBootVolumeBackupId }}'
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

Creates a new boot volume backup of the specified boot volume. For general information about boot volume backups,&lt;br /&gt;see &#91;Overview of Boot Volume Backups&#93;(/iaas/Content/Block/Concepts/bootvolumebackups.htm)&lt;br /&gt;&lt;br /&gt;When the request is received, the backup object is in a REQUEST_RECEIVED state.&lt;br /&gt;When the data is imaged, it goes into a CREATING state.&lt;br /&gt;After the backup is fully uploaded to the cloud, it goes into an AVAILABLE state.&lt;br /&gt;

```sql
INSERT INTO oci.block_storage.boot_volume_backups (
bootVolumeId,
definedTags,
displayName,
freeformTags,
kmsKeyId,
type,
region,
opc-retry-token
)
SELECT 
'{{ bootVolumeId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ kmsKeyId }}',
'{{ type }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
bootVolumeId,
compartmentId,
definedTags,
displayName,
expirationTime,
freeformTags,
imageId,
kmsKeyId,
lifecycleState,
sizeInGBs,
sourceBootVolumeBackupId,
sourceType,
timeCreated,
timeRequestReceived,
type,
uniqueSizeInGBs
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: boot_volume_backups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the boot_volume_backups resource.
    - name: bootVolumeId
      value: "{{ bootVolumeId }}"
      description: |
        The OCID of the boot volume that needs to be backed up.
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
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        The OCID of the Vault service key which is the master encryption key for the volume backup.
        For more information about the Vault service and encryption keys, see
        [Overview of Vault service](/iaas/Content/KeyManagement/Concepts/keyoverview.htm) and
        [Using Keys](/iaas/Content/KeyManagement/Tasks/usingkeys.htm).
    - name: type
      value: "{{ type }}"
      description: |
        The type of backup to create. If omitted, defaults to incremental.
      valid_values: ['FULL', 'INCREMENTAL']
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

Updates the display name for the specified boot volume backup.&lt;br /&gt;Avoid entering confidential information.&lt;br /&gt;

```sql
UPDATE oci.block_storage.boot_volume_backups
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
kmsKeyId = '{{ kmsKeyId }}'
WHERE 
bootVolumeBackupId = '{{ bootVolumeBackupId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
bootVolumeId,
compartmentId,
definedTags,
displayName,
expirationTime,
freeformTags,
imageId,
kmsKeyId,
lifecycleState,
sizeInGBs,
sourceBootVolumeBackupId,
sourceType,
timeCreated,
timeRequestReceived,
type,
uniqueSizeInGBs;
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

Deletes a boot volume backup.

```sql
DELETE FROM oci.block_storage.boot_volume_backups
WHERE bootVolumeBackupId = '{{ bootVolumeBackupId }}' --required
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
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'copy_boot_volume_backup', value: 'copy_boot_volume_backup' }
    ]}
>
<TabItem value="change_compartment">

Moves a boot volume backup into a different compartment within the same tenancy.&lt;br /&gt;For information about moving resources between compartments,&lt;br /&gt;see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.block_storage.boot_volume_backups.change_compartment 
@bootVolumeBackupId='{{ bootVolumeBackupId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
<TabItem value="copy_boot_volume_backup">

Creates a boot volume backup copy in specified region. For general information about volume backups,&lt;br /&gt;see &#91;Overview of Boot Volume Backups&#93;(/iaas/Content/Block/Concepts/bootvolumebackups.htm)&lt;br /&gt;

```sql
EXEC oci.block_storage.boot_volume_backups.copy_boot_volume_backup 
@bootVolumeBackupId='{{ bootVolumeBackupId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"destinationRegion": "{{ destinationRegion }}", 
"displayName": "{{ displayName }}", 
"kmsKeyId": "{{ kmsKeyId }}"
}'
;
```
</TabItem>
</Tabs>
