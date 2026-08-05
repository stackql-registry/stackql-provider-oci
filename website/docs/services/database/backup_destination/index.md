--- 
title: backup_destination
hide_title: false
hide_table_of_contents: false
keywords:
  - backup_destination
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

Creates, updates, deletes, gets or lists a <code>backup_destination</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backup_destination" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.backup_destination" /></td></tr>
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

Backup destination details, including the list of databases using the backup destination.

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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Gets a list of backup destinations in the specified compartment.&lt;br /&gt;</td>
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
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return per page.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token to continue listing from.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given type of the Backup Destination.</td>
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

Gets a list of backup destinations in the specified compartment.&lt;br /&gt;

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
FROM oci.database.backup_destination
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>
