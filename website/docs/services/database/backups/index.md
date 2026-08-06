--- 
title: backups
hide_title: false
hide_table_of_contents: false
keywords:
  - backups
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

Creates, updates, deletes, gets or lists a <code>backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.backups" /></td></tr>
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

The database backup information was retrieved.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain where the database backup is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="backupDestinationType" /></td>
    <td><code>string</code></td>
    <td>Type of the backup destination. (OBJECT_STORE, DBRS, AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseEdition" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database Edition that applies to all the databases on the DB system. Exadata DB systems and 2-node RAC DB systems require ENTERPRISE_EDITION_EXTREME_PERFORMANCE.  (STANDARD_EDITION, ENTERPRISE_EDITION, ENTERPRISE_EDITION_HIGH_PERFORMANCE, ENTERPRISE_EDITION_EXTREME_PERFORMANCE, ENTERPRISE_EDITION_DEVELOPER)</td>
</tr>
<tr>
    <td><CopyableCode code="databaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the database.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseSizeInGBs" /></td>
    <td><code>number (double)</code></td>
    <td>The size of the database in gigabytes at the time the backup was taken. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the backup. The name does not have to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKeyLocationDetails" /></td>
    <td><code>object</code></td>
    <td>Types of providers supported for managing database encryption keys</td>
</tr>
<tr>
    <td><CopyableCode code="isUsingOracleManagedKeys" /></td>
    <td><code>boolean</code></td>
    <td>True if Oracle Managed Keys is required for restore of the backup.</td>
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
    <td>The current state of the backup. (CREATING, ACTIVE, DELETING, DELETED, FAILED, RESTORING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="retentionPeriodInDays" /></td>
    <td><code>integer</code></td>
    <td>The retention period of the long term backup in days.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionPeriodInYears" /></td>
    <td><code>integer</code></td>
    <td>The retention period of the long term backup in years.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryKmsKeyIds" /></td>
    <td><code>array</code></td>
    <td>List of OCIDs of the key containers used as the secondary encryption key in database transparent data encryption (TDE) operations.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>Shape of the backup's source database.</td>
</tr>
<tr>
    <td><CopyableCode code="timeEnded" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the backup was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="timeExpiryScheduled" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiration time of the long term database backup.</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the backup started.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of backup. (INCREMENTAL, FULL, VIRTUAL_FULL)</td>
</tr>
<tr>
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure &#91;vault&#93;(/Content/KeyManagement/Concepts/keyoverview.htm#concepts). This parameter and `secretId` are required for Customer Managed Keys.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the backup's source database</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A database backup.&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain where the database backup is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="backupDestinationType" /></td>
    <td><code>string</code></td>
    <td>Type of the backup destination. (OBJECT_STORE, DBRS, AWS)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseEdition" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database Edition that applies to all the databases on the DB system. Exadata DB systems and 2-node RAC DB systems require ENTERPRISE_EDITION_EXTREME_PERFORMANCE.  (STANDARD_EDITION, ENTERPRISE_EDITION, ENTERPRISE_EDITION_HIGH_PERFORMANCE, ENTERPRISE_EDITION_EXTREME_PERFORMANCE, ENTERPRISE_EDITION_DEVELOPER)</td>
</tr>
<tr>
    <td><CopyableCode code="databaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the database.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseSizeInGBs" /></td>
    <td><code>number (double)</code></td>
    <td>The size of the database in gigabytes at the time the backup was taken. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the backup. The name does not have to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKeyLocationDetails" /></td>
    <td><code>object</code></td>
    <td>Types of providers supported for managing database encryption keys</td>
</tr>
<tr>
    <td><CopyableCode code="isUsingOracleManagedKeys" /></td>
    <td><code>boolean</code></td>
    <td>True if Oracle Managed Keys is required for restore of the backup.</td>
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
    <td>The current state of the backup. (CREATING, ACTIVE, DELETING, DELETED, FAILED, RESTORING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="retentionPeriodInDays" /></td>
    <td><code>integer</code></td>
    <td>The retention period of the long term backup in days.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionPeriodInYears" /></td>
    <td><code>integer</code></td>
    <td>The retention period of the long term backup in years.</td>
</tr>
<tr>
    <td><CopyableCode code="secondaryKmsKeyIds" /></td>
    <td><code>array</code></td>
    <td>List of OCIDs of the key containers used as the secondary encryption key in database transparent data encryption (TDE) operations.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>Shape of the backup's source database.</td>
</tr>
<tr>
    <td><CopyableCode code="timeEnded" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the backup was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="timeExpiryScheduled" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiration time of the long term database backup.</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the backup started.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of backup. (INCREMENTAL, FULL, VIRTUAL_FULL)</td>
</tr>
<tr>
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure &#91;vault&#93;(/Content/KeyManagement/Concepts/keyoverview.htm#concepts). This parameter and `secretId` are required for Customer Managed Keys.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the backup's source database</td>
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
    <td><a href="#parameter-backupId"><code>backupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified backup.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-shapeFamily"><code>shapeFamily</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-timeExpiryScheduledGreaterThanOrEqualTo"><code>timeExpiryScheduledGreaterThanOrEqualTo</code></a>, <a href="#parameter-timeExpiryScheduledLessThan"><code>timeExpiryScheduledLessThan</code></a>, <a href="#parameter-backupDestinationType"><code>backupDestinationType</code></a></td>
    <td>Gets a list of backups based on the `databaseId` or `compartmentId` specified. Either one of these query parameters must be provided.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new backup in the specified database based on the request parameters you provide. If you previously used RMAN or dbcli to configure backups and then you switch to using the Console or the API for backups, a new backup configuration is created and associated with your database. This means that you can no longer rely on your previously configured unmanaged backups to work.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-backupId"><code>backupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates database backup details.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-backupId"><code>backupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes a full backup. You cannot delete automatic backups using this API.</td>
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
<tr id="parameter-backupId">
    <td><CopyableCode code="backupId" /></td>
    <td><code>string</code></td>
    <td>The backup &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-backupDestinationType">
    <td><CopyableCode code="backupDestinationType" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given backup destination type.</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-databaseId">
    <td><CopyableCode code="databaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the database.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
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
<tr id="parameter-shapeFamily">
    <td><CopyableCode code="shapeFamily" /></td>
    <td><code>string</code></td>
    <td>If provided, filters the results to the set of database versions which are supported for the given shape family.</td>
</tr>
<tr id="parameter-timeExpiryScheduledGreaterThanOrEqualTo">
    <td><CopyableCode code="timeExpiryScheduledGreaterThanOrEqualTo" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of date-time range of expiration for the long term backups to be fetched.</td>
</tr>
<tr id="parameter-timeExpiryScheduledLessThan">
    <td><CopyableCode code="timeExpiryScheduledLessThan" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of date-time range of expiration for the long term backups to be fetched.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>A filter to return only backups that matches with the given type of Backup.</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given database version.</td>
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

Gets information about the specified backup.

```sql
SELECT
id,
availabilityDomain,
backupDestinationType,
compartmentId,
databaseEdition,
databaseId,
databaseSizeInGBs,
displayName,
encryptionKeyLocationDetails,
isUsingOracleManagedKeys,
kmsKeyId,
kmsKeyVersionId,
lifecycleDetails,
lifecycleState,
retentionPeriodInDays,
retentionPeriodInYears,
secondaryKmsKeyIds,
shape,
timeEnded,
timeExpiryScheduled,
timeStarted,
type,
vaultId,
version
FROM oci.database.backups
WHERE backupId = '{{ backupId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Gets a list of backups based on the `databaseId` or `compartmentId` specified. Either one of these query parameters must be provided.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
backupDestinationType,
compartmentId,
databaseEdition,
databaseId,
databaseSizeInGBs,
displayName,
encryptionKeyLocationDetails,
isUsingOracleManagedKeys,
kmsKeyId,
kmsKeyVersionId,
lifecycleDetails,
lifecycleState,
retentionPeriodInDays,
retentionPeriodInYears,
secondaryKmsKeyIds,
shape,
timeEnded,
timeExpiryScheduled,
timeStarted,
type,
vaultId,
version
FROM oci.database.backups
WHERE region = '{{ region }}' -- required
AND databaseId = '{{ databaseId }}'
AND compartmentId = '{{ compartmentId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND shapeFamily = '{{ shapeFamily }}'
AND version = '{{ version }}'
AND type = '{{ type }}'
AND lifecycleState = '{{ lifecycleState }}'
AND timeExpiryScheduledGreaterThanOrEqualTo = '{{ timeExpiryScheduledGreaterThanOrEqualTo }}'
AND timeExpiryScheduledLessThan = '{{ timeExpiryScheduledLessThan }}'
AND backupDestinationType = '{{ backupDestinationType }}'
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

Creates a new backup in the specified database based on the request parameters you provide. If you previously used RMAN or dbcli to configure backups and then you switch to using the Console or the API for backups, a new backup configuration is created and associated with your database. This means that you can no longer rely on your previously configured unmanaged backups to work.&lt;br /&gt;

```sql
INSERT INTO oci.database.backups (
databaseId,
displayName,
retentionPeriodInDays,
retentionPeriodInYears,
region,
opc-retry-token
)
SELECT 
'{{ databaseId }}' /* required */,
'{{ displayName }}' /* required */,
{{ retentionPeriodInDays }},
{{ retentionPeriodInYears }},
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
availabilityDomain,
backupDestinationType,
compartmentId,
databaseEdition,
databaseId,
databaseSizeInGBs,
displayName,
encryptionKeyLocationDetails,
isUsingOracleManagedKeys,
kmsKeyId,
kmsKeyVersionId,
lifecycleDetails,
lifecycleState,
retentionPeriodInDays,
retentionPeriodInYears,
secondaryKmsKeyIds,
shape,
timeEnded,
timeExpiryScheduled,
timeStarted,
type,
vaultId,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backups resource.
    - name: databaseId
      value: "{{ databaseId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the database.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the backup. The name does not have to be unique.
    - name: retentionPeriodInDays
      value: {{ retentionPeriodInDays }}
      description: |
        The retention period of the long term backup in days.
    - name: retentionPeriodInYears
      value: {{ retentionPeriodInYears }}
      description: |
        The retention period of the long term backup in years.
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

Updates database backup details.

```sql
UPDATE oci.database.backups
SET 
retentionPeriodInDays = {{ retentionPeriodInDays }},
retentionPeriodInYears = {{ retentionPeriodInYears }}
WHERE 
backupId = '{{ backupId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
availabilityDomain,
backupDestinationType,
compartmentId,
databaseEdition,
databaseId,
databaseSizeInGBs,
displayName,
encryptionKeyLocationDetails,
isUsingOracleManagedKeys,
kmsKeyId,
kmsKeyVersionId,
lifecycleDetails,
lifecycleState,
retentionPeriodInDays,
retentionPeriodInYears,
secondaryKmsKeyIds,
shape,
timeEnded,
timeExpiryScheduled,
timeStarted,
type,
vaultId,
version;
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

Deletes a full backup. You cannot delete automatic backups using this API.

```sql
DELETE FROM oci.database.backups
WHERE backupId = '{{ backupId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
