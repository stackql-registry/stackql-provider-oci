--- 
title: autonomous_database_backups
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_database_backups
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

Creates, updates, deletes, gets or lists an <code>autonomous_database_backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_database_backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.autonomous_database_backups" /></td></tr>
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

The Autonomous AI Database backup.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous AI Database backup.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="backupDestinationDetails" /></td>
    <td><code>object</code></td>
    <td>Backup destination details</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseSizeInTBs" /></td>
    <td><code>number (integer)</code></td>
    <td>The size of the database in terabytes at the time the backup was taken. </td>
</tr>
<tr>
    <td><CopyableCode code="dbVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle AI Database version for Autonomous AI Database. When you specify 23ai for dbversion, the system will provision a 23ai database, but the UI will display it as 26ai. When you specify 26ai for dbversion, the system will provision and display a 26ai database as expected. For new databases, it is recommended to use either 19c or 26ai.  **Note** Starting December 2026, 23ai will not be supported as a valid value for this parameter. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the backup. The name does not have to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructureType" /></td>
    <td><code>string</code></td>
    <td>The infrastructure type this resource belongs to. (CLOUD, CLOUD_AT_CUSTOMER)</td>
</tr>
<tr>
    <td><CopyableCode code="isAutomatic" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the backup is user-initiated or automatic.</td>
</tr>
<tr>
    <td><CopyableCode code="isRestorable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the backup can be used to restore the associated Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="keyStoreId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the key store of Oracle Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="keyStoreWalletName" /></td>
    <td><code>string</code></td>
    <td>The wallet name for Oracle Key Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyVersionId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation. Autonomous AI Database Serverless does not use key versions, hence is not applicable for Autonomous AI Database Serverless instances. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the backup. (CREATING, ACTIVE, DELETING, DELETED, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Name of the region in which backup is taken in.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionPeriodInDays" /></td>
    <td><code>integer</code></td>
    <td>Retention period, in days, for long-term backups</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The backup size in terrabytes (TB).</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDatabaseDetails" /></td>
    <td><code>object</code></td>
    <td>Source Autonomous AI Database details.</td>
</tr>
<tr>
    <td><CopyableCode code="timeAvailableTill" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp until when the backup will be available</td>
</tr>
<tr>
    <td><CopyableCode code="timeEnded" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the backup completed.</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the backup started.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of backup. (INCREMENTAL, FULL, LONGTERM, VIRTUAL_FULL, CUMULATIVE_INCREMENTAL, ROLL_FORWARD_IMAGE_COPY)</td>
</tr>
<tr>
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure &#91;vault&#93;(/Content/KeyManagement/Concepts/keyoverview.htm#concepts). This parameter and `secretId` are required for Customer Managed Keys.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An Autonomous AI Database backup.&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;    &lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous AI Database backup.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="backupDestinationDetails" /></td>
    <td><code>object</code></td>
    <td>Backup destination details</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseSizeInTBs" /></td>
    <td><code>number (integer)</code></td>
    <td>The size of the database in terabytes at the time the backup was taken. </td>
</tr>
<tr>
    <td><CopyableCode code="dbVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle AI Database version for Autonomous AI Database. When you specify 23ai for dbversion, the system will provision a 23ai database, but the UI will display it as 26ai. When you specify 26ai for dbversion, the system will provision and display a 26ai database as expected. For new databases, it is recommended to use either 19c or 26ai.  **Note** Starting December 2026, 23ai will not be supported as a valid value for this parameter. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the backup. The name does not have to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructureType" /></td>
    <td><code>string</code></td>
    <td>The infrastructure type this resource belongs to. (CLOUD, CLOUD_AT_CUSTOMER)</td>
</tr>
<tr>
    <td><CopyableCode code="isAutomatic" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the backup is user-initiated or automatic.</td>
</tr>
<tr>
    <td><CopyableCode code="isRestorable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the backup can be used to restore the associated Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="keyStoreId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the key store of Oracle Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="keyStoreWalletName" /></td>
    <td><code>string</code></td>
    <td>The wallet name for Oracle Key Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyVersionId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation. Autonomous AI Database Serverless does not use key versions, hence is not applicable for Autonomous AI Database Serverless instances. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the backup. (CREATING, ACTIVE, DELETING, DELETED, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Name of the region in which backup is taken in.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionPeriodInDays" /></td>
    <td><code>integer</code></td>
    <td>Retention period, in days, for long-term backups</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The backup size in terrabytes (TB).</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDatabaseDetails" /></td>
    <td><code>object</code></td>
    <td>Source Autonomous AI Database details.</td>
</tr>
<tr>
    <td><CopyableCode code="timeAvailableTill" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp until when the backup will be available</td>
</tr>
<tr>
    <td><CopyableCode code="timeEnded" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the backup completed.</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the backup started.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of backup. (INCREMENTAL, FULL, LONGTERM, VIRTUAL_FULL, CUMULATIVE_INCREMENTAL, ROLL_FORWARD_IMAGE_COPY)</td>
</tr>
<tr>
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure &#91;vault&#93;(/Content/KeyManagement/Concepts/keyoverview.htm#concepts). This parameter and `secretId` are required for Customer Managed Keys.</td>
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
    <td><a href="#parameter-autonomousDatabaseBackupId"><code>autonomousDatabaseBackupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified Autonomous AI Database backup.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-backupDestinationId"><code>backupDestinationId</code></a>, <a href="#parameter-keyStoreId"><code>keyStoreId</code></a>, <a href="#parameter-infrastructureType"><code>infrastructureType</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets a list of Autonomous AI Database backups based on either the `autonomousDatabaseId` or `compartmentId` specified as a query parameter.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a new Autonomous AI Database backup for the specified database based on the provided request parameters.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-autonomousDatabaseBackupId"><code>autonomousDatabaseBackupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the Autonomous AI Database backup of the specified database based on the request parameters.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-autonomousDatabaseBackupId"><code>autonomousDatabaseBackupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes a long-term backup. You cannot delete other backups using this API.</td>
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
<tr id="parameter-autonomousDatabaseBackupId">
    <td><CopyableCode code="autonomousDatabaseBackupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous AI Database backup.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-autonomousDatabaseId">
    <td><CopyableCode code="autonomousDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The database &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-backupDestinationId">
    <td><CopyableCode code="backupDestinationId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that have the given backup destination id.</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the entire display name given. The match is not case sensitive.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-infrastructureType">
    <td><CopyableCode code="infrastructureType" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given Infrastructure Type.</td>
</tr>
<tr id="parameter-keyStoreId">
    <td><CopyableCode code="keyStoreId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that have the given key store id.</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given lifecycle state exactly.</td>
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
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token to continue listing from.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is descending.  Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** If you do not include the availability domain filter, the resources are grouped by availability domain, then sorted. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`).</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A filter to return only backups that matches with the given type of Backup.</td>
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

Gets information about the specified Autonomous AI Database backup.

```sql
SELECT
id,
autonomousDatabaseId,
backupDestinationDetails,
compartmentId,
databaseSizeInTBs,
dbVersion,
displayName,
infrastructureType,
isAutomatic,
isRestorable,
keyStoreId,
keyStoreWalletName,
kmsKeyId,
kmsKeyVersionId,
lifecycleDetails,
lifecycleState,
region,
retentionPeriodInDays,
sizeInTBs,
sourceDatabaseDetails,
timeAvailableTill,
timeEnded,
timeStarted,
type,
vaultId
FROM oci.database.autonomous_database_backups
WHERE autonomousDatabaseBackupId = '{{ autonomousDatabaseBackupId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of Autonomous AI Database backups based on either the `autonomousDatabaseId` or `compartmentId` specified as a query parameter.&lt;br /&gt;

```sql
SELECT
id,
autonomousDatabaseId,
backupDestinationDetails,
compartmentId,
databaseSizeInTBs,
dbVersion,
displayName,
infrastructureType,
isAutomatic,
isRestorable,
keyStoreId,
keyStoreWalletName,
kmsKeyId,
kmsKeyVersionId,
lifecycleDetails,
lifecycleState,
region,
retentionPeriodInDays,
sizeInTBs,
sourceDatabaseDetails,
timeAvailableTill,
timeEnded,
timeStarted,
type,
vaultId
FROM oci.database.autonomous_database_backups
WHERE region = '{{ region }}' -- required
AND autonomousDatabaseId = '{{ autonomousDatabaseId }}'
AND compartmentId = '{{ compartmentId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
AND type = '{{ type }}'
AND backupDestinationId = '{{ backupDestinationId }}'
AND keyStoreId = '{{ keyStoreId }}'
AND infrastructureType = '{{ infrastructureType }}'
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

Creates a new Autonomous AI Database backup for the specified database based on the provided request parameters.&lt;br /&gt;

```sql
INSERT INTO oci.database.autonomous_database_backups (
autonomousDatabaseId,
backupDestinationDetails,
displayName,
isLongTermBackup,
retentionPeriodInDays,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ autonomousDatabaseId }}' /* required */,
'{{ backupDestinationDetails }}',
'{{ displayName }}',
{{ isLongTermBackup }},
{{ retentionPeriodInDays }},
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
autonomousDatabaseId,
backupDestinationDetails,
compartmentId,
databaseSizeInTBs,
dbVersion,
displayName,
infrastructureType,
isAutomatic,
isRestorable,
keyStoreId,
keyStoreWalletName,
kmsKeyId,
kmsKeyVersionId,
lifecycleDetails,
lifecycleState,
region,
retentionPeriodInDays,
sizeInTBs,
sourceDatabaseDetails,
timeAvailableTill,
timeEnded,
timeStarted,
type,
vaultId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: autonomous_database_backups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the autonomous_database_backups resource.
    - name: autonomousDatabaseId
      value: "{{ autonomousDatabaseId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the Autonomous AI Database backup.
    - name: backupDestinationDetails
      description: |
        Backup destination details
      value:
        backupRetentionPolicyOnTerminate: "{{ backupRetentionPolicyOnTerminate }}"
        dbrsPolicyId: "{{ dbrsPolicyId }}"
        id: "{{ id }}"
        internetProxy: "{{ internetProxy }}"
        isRemote: {{ isRemote }}
        isRetentionLockEnabled: {{ isRetentionLockEnabled }}
        remoteRegion: "{{ remoteRegion }}"
        type: "{{ type }}"
        vpcPassword: "{{ vpcPassword }}"
        vpcUser: "{{ vpcUser }}"
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the backup. The name does not have to be unique.
    - name: isLongTermBackup
      value: {{ isLongTermBackup }}
      description: |
        Indicates whether the backup is long-term
    - name: retentionPeriodInDays
      value: {{ retentionPeriodInDays }}
      description: |
        Retention period, in days, for long-term backups
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

Updates the Autonomous AI Database backup of the specified database based on the request parameters.&lt;br /&gt;

```sql
UPDATE oci.database.autonomous_database_backups
SET 
retentionPeriodInDays = {{ retentionPeriodInDays }}
WHERE 
autonomousDatabaseBackupId = '{{ autonomousDatabaseBackupId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
autonomousDatabaseId,
backupDestinationDetails,
compartmentId,
databaseSizeInTBs,
dbVersion,
displayName,
infrastructureType,
isAutomatic,
isRestorable,
keyStoreId,
keyStoreWalletName,
kmsKeyId,
kmsKeyVersionId,
lifecycleDetails,
lifecycleState,
region,
retentionPeriodInDays,
sizeInTBs,
sourceDatabaseDetails,
timeAvailableTill,
timeEnded,
timeStarted,
type,
vaultId;
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

Deletes a long-term backup. You cannot delete other backups using this API.

```sql
DELETE FROM oci.database.autonomous_database_backups
WHERE autonomousDatabaseBackupId = '{{ autonomousDatabaseBackupId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
