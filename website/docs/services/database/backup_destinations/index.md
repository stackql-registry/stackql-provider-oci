--- 
title: backup_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_destinations
  - database
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

Creates, updates, deletes, gets or lists a <code>backup_destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backup_destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.backup_destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

The backup destination.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup destination.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedDatabases" /></td>
    <td><code>array</code></td>
    <td>List of databases associated with the backup destination.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedLongTermBackupCount" /></td>
    <td><code>integer</code></td>
    <td>Indicates the number of long term backups of Autonomous AI Databases associated with this backup destination.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedLongTermBackups" /></td>
    <td><code>array</code></td>
    <td>List of long term backups of Autonomous AI Databases associated with this backup destination.The maximum associated number of long term backup listed here would be 1024.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionString" /></td>
    <td><code>string</code></td>
    <td>For a RECOVERY_APPLIANCE backup destination, the connection string for connecting to the Recovery Appliance.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-provided name of the backup destination.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>A descriptive text associated with the lifecycleState. Typically contains additional displayable text </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the backup destination. (ACTIVE, FAILED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="localMountPointPath" /></td>
    <td><code>string</code></td>
    <td>The local directory path on each VM cluster node where the NFS server location is mounted. The local directory path and the NFS server location must each be the same across all of the VM cluster nodes. Ensure that the NFS mount is maintained continuously on all of the VM cluster nodes. </td>
</tr>
<tr>
    <td><CopyableCode code="nfsMountType" /></td>
    <td><code>string</code></td>
    <td>NFS Mount type for backup destination. (SELF_MOUNT, AUTOMATED_MOUNT)</td>
</tr>
<tr>
    <td><CopyableCode code="nfsServer" /></td>
    <td><code>array</code></td>
    <td>Host names or IP addresses for NFS Auto mount.</td>
</tr>
<tr>
    <td><CopyableCode code="nfsServerExport" /></td>
    <td><code>string</code></td>
    <td>Specifies the directory on which to mount the file system</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeAtWhichStorageDetailsAreUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the total storage size and the utilized storage size of the backup destination are updated.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the backup destination was created.</td>
</tr>
<tr>
    <td><CopyableCode code="totalStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The total storage size of the backup destination in GBs, rounded to the nearest integer.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the backup destination. (NFS, RECOVERY_APPLIANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="utilizedStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The total amount of space utilized on the backup destination (in GBs), rounded to the nearest integer.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcUsers" /></td>
    <td><code>array</code></td>
    <td>For a RECOVERY_APPLIANCE backup destination, the Virtual Private Catalog (VPC) users that are used to access the Recovery Appliance.</td>
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
    <td><a href="#parameter-backupDestinationId"><code>backupDestinationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified backup destination in an Exadata Cloud@Customer system.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a backup destination in an Exadata Cloud@Customer system.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-backupDestinationId"><code>backupDestinationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>If no database is associated with the backup destination:&lt;br /&gt;- For a RECOVERY_APPLIANCE backup destination, updates the connection string and/or the list of VPC users.&lt;br /&gt;- For an NFS backup destination, updates the NFS location.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-backupDestinationId"><code>backupDestinationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes a backup destination in an Exadata Cloud@Customer system.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-backupDestinationId"><code>backupDestinationId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Move the backup destination and its dependent resources to the specified compartment.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Moving Database Resources to a Different Compartment&#93;(/Content/Database/Concepts/databaseoverview.htm#moveRes).&lt;br /&gt;</td>
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
<tr id="parameter-backupDestinationId">
    <td><CopyableCode code="backupDestinationId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup destination.</td>
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
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Gets information about the specified backup destination in an Exadata Cloud@Customer system.&lt;br /&gt;

```sql
SELECT
id,
associatedDatabases,
associatedLongTermBackupCount,
associatedLongTermBackups,
compartmentId,
connectionString,
definedTags,
displayName,
freeformTags,
lifecycleDetails,
lifecycleState,
localMountPointPath,
nfsMountType,
nfsServer,
nfsServerExport,
systemTags,
timeAtWhichStorageDetailsAreUpdated,
timeCreated,
totalStorageSizeInGBs,
type,
utilizedStorageSizeInGBs,
vpcUsers
FROM oci.database.backup_destinations
WHERE backupDestinationId = '{{ backupDestinationId }}' -- required
AND region = '{{ region }}' -- required
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

Creates a backup destination in an Exadata Cloud@Customer system.&lt;br /&gt;

```sql
INSERT INTO oci.database.backup_destinations (
compartmentId,
definedTags,
displayName,
freeformTags,
type,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ freeformTags }}',
'{{ type }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
associatedDatabases,
associatedLongTermBackupCount,
associatedLongTermBackups,
compartmentId,
connectionString,
definedTags,
displayName,
freeformTags,
lifecycleDetails,
lifecycleState,
localMountPointPath,
nfsMountType,
nfsServer,
nfsServerExport,
systemTags,
timeAtWhichStorageDetailsAreUpdated,
timeCreated,
totalStorageSizeInGBs,
type,
utilizedStorageSizeInGBs,
vpcUsers
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backup_destinations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backup_destinations resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-provided name of the backup destination.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: type
      value: "{{ type }}"
      description: |
        Type of the backup destination.
      valid_values: ['NFS', 'RECOVERY_APPLIANCE']
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique identifier for the request. 
      description: Unique identifier for the request. 
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

If no database is associated with the backup destination:&lt;br /&gt;- For a RECOVERY_APPLIANCE backup destination, updates the connection string and/or the list of VPC users.&lt;br /&gt;- For an NFS backup destination, updates the NFS location.&lt;br /&gt;

```sql
UPDATE oci.database.backup_destinations
SET 
connectionString = '{{ connectionString }}',
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}',
localMountPointPath = '{{ localMountPointPath }}',
nfsMountType = '{{ nfsMountType }}',
nfsServer = '{{ nfsServer }}',
nfsServerExport = '{{ nfsServerExport }}',
vpcUsers = '{{ vpcUsers }}'
WHERE 
backupDestinationId = '{{ backupDestinationId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
associatedDatabases,
associatedLongTermBackupCount,
associatedLongTermBackups,
compartmentId,
connectionString,
definedTags,
displayName,
freeformTags,
lifecycleDetails,
lifecycleState,
localMountPointPath,
nfsMountType,
nfsServer,
nfsServerExport,
systemTags,
timeAtWhichStorageDetailsAreUpdated,
timeCreated,
totalStorageSizeInGBs,
type,
utilizedStorageSizeInGBs,
vpcUsers;
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

Deletes a backup destination in an Exadata Cloud@Customer system.&lt;br /&gt;

```sql
DELETE FROM oci.database.backup_destinations
WHERE backupDestinationId = '{{ backupDestinationId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
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

Move the backup destination and its dependent resources to the specified compartment.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Moving Database Resources to a Different Compartment&#93;(/Content/Database/Concepts/databaseoverview.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.database.backup_destinations.change_compartment 
@backupDestinationId='{{ backupDestinationId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
</Tabs>
