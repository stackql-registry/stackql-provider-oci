--- 
title: db_homes
hide_title: false
hide_table_of_contents: false
keywords:
  - db_homes
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

Creates, updates, deletes, gets or lists a <code>db_homes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_homes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.db_homes" /></td></tr>
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

The Database Home.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Database Home.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseSoftwareImageId" /></td>
    <td><code>string</code></td>
    <td>The database software image &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm)</td>
</tr>
<tr>
    <td><CopyableCode code="dbHomeLocation" /></td>
    <td><code>string</code></td>
    <td>The location of the Oracle Database Home.</td>
</tr>
<tr>
    <td><CopyableCode code="dbSystemId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="dbVersion" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database version.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-provided name for the Database Home. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="homeType" /></td>
    <td><code>string</code></td>
    <td>Represents database home will be managed by oracle or customer  (ORACLE_MANAGED, CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.</td>
</tr>
<tr>
    <td><CopyableCode code="lastPatchHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last patch history. This value is updated as soon as a patch operation is started.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Database Home. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="oneOffPatches" /></td>
    <td><code>array</code></td>
    <td>List of one-off patches for Database Homes.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Database Home was created.</td>
</tr>
<tr>
    <td><CopyableCode code="vmClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VM cluster.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A directory where Oracle Database software is installed. A bare metal or Exadata DB system can have multiple Database Homes&lt;br /&gt;and each Database Home can run a different supported version of Oracle Database. A virtual machine DB system can have only one Database Home.&lt;br /&gt;For more information, see &#91;Bare Metal and Virtual Machine DB Systems&#93;(/Content/Database/Concepts/overview.htm) and &#91;Exadata DB Systems&#93;(/Content/Database/Concepts/exaoverview.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an&lt;br /&gt;administrator. If you're an administrator who needs to write policies to give users access,&lt;br /&gt;see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Database Home.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseSoftwareImageId" /></td>
    <td><code>string</code></td>
    <td>The database software image &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm)</td>
</tr>
<tr>
    <td><CopyableCode code="dbHomeLocation" /></td>
    <td><code>string</code></td>
    <td>The location of the Oracle Database Home.</td>
</tr>
<tr>
    <td><CopyableCode code="dbSystemId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="dbVersion" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database version.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-provided name for the Database Home. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="homeType" /></td>
    <td><code>string</code></td>
    <td>Represents database home will be managed by oracle or customer  (ORACLE_MANAGED, CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.</td>
</tr>
<tr>
    <td><CopyableCode code="lastPatchHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last patch history. This value is updated as soon as a patch operation is started.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Database Home. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="oneOffPatches" /></td>
    <td><code>array</code></td>
    <td>List of one-off patches for Database Homes.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Database Home was created.</td>
</tr>
<tr>
    <td><CopyableCode code="vmClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VM cluster.</td>
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
    <td><a href="#parameter-dbHomeId"><code>dbHomeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified Database Home.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-vmClusterId"><code>vmClusterId</code></a>, <a href="#parameter-backupId"><code>backupId</code></a>, <a href="#parameter-dbVersion"><code>dbVersion</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td>Lists the Database Homes in the specified DB system and compartment. A Database Home is a directory where Oracle Database software is installed.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new Database Home in the specified database system based on the request parameters you provide. Applies to bare metal DB systems, Exadata systems, and Exadata Cloud@Customer systems.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dbHomeId"><code>dbHomeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Patches the specified Database Home.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dbHomeId"><code>dbHomeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-performFinalBackup"><code>performFinalBackup</code></a></td>
    <td>Deletes a Database Home. Applies to bare metal DB systems, Exadata Cloud Service, and Exadata Cloud@Customer systems.&lt;br /&gt;&lt;br /&gt;Oracle recommends that you use the `performFinalBackup` parameter to back up any data on a bare metal DB system before you delete a Database Home. On an Exadata Cloud@Customer system or an Exadata Cloud Service system, you can delete a Database Home only when there are no databases in it and therefore you cannot use the `performFinalBackup` parameter to back up data.&lt;br /&gt;</td>
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
<tr id="parameter-dbHomeId">
    <td><CopyableCode code="dbHomeId" /></td>
    <td><code>string</code></td>
    <td>The Database Home &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-backupId">
    <td><CopyableCode code="backupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup. Specify a backupId to list only the DB systems or DB homes that support creating a database using this backup in this compartment.</td>
</tr>
<tr id="parameter-dbSystemId">
    <td><CopyableCode code="dbSystemId" /></td>
    <td><code>string</code></td>
    <td>The DB system &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm). If provided, filters the results to the set of database versions which are supported for the DB system.</td>
</tr>
<tr id="parameter-dbVersion">
    <td><CopyableCode code="dbVersion" /></td>
    <td><code>string</code></td>
    <td>A filter to return only DB Homes that match the specified dbVersion.</td>
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
<tr id="parameter-performFinalBackup">
    <td><CopyableCode code="performFinalBackup" /></td>
    <td><code>boolean</code></td>
    <td>Whether to perform a final backup of the database or not. Default is false.  If you previously used RMAN or dbcli to configure backups and then you switch to using the Console or the API for backups, a new backup configuration is created and associated with your database. This means that you can no longer rely on your previously configured unmanaged backups to work.  This parameter is used in multiple APIs. Refer to the API description for details on how the operation uses it. </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is descending.  Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`).</td>
</tr>
<tr id="parameter-vmClusterId">
    <td><CopyableCode code="vmClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VM cluster.</td>
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

Gets information about the specified Database Home.

```sql
SELECT
id,
compartmentId,
databaseSoftwareImageId,
dbHomeLocation,
dbSystemId,
dbVersion,
definedTags,
displayName,
freeformTags,
homeType,
kmsKeyId,
lastPatchHistoryEntryId,
lifecycleDetails,
lifecycleState,
oneOffPatches,
systemTags,
timeCreated,
vmClusterId
FROM oci.database.db_homes
WHERE dbHomeId = '{{ dbHomeId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the Database Homes in the specified DB system and compartment. A Database Home is a directory where Oracle Database software is installed.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
databaseSoftwareImageId,
dbHomeLocation,
dbSystemId,
dbVersion,
definedTags,
displayName,
freeformTags,
homeType,
kmsKeyId,
lastPatchHistoryEntryId,
lifecycleDetails,
lifecycleState,
oneOffPatches,
systemTags,
timeCreated,
vmClusterId
FROM oci.database.db_homes
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND dbSystemId = '{{ dbSystemId }}'
AND vmClusterId = '{{ vmClusterId }}'
AND backupId = '{{ backupId }}'
AND dbVersion = '{{ dbVersion }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
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

Creates a new Database Home in the specified database system based on the request parameters you provide. Applies to bare metal DB systems, Exadata systems, and Exadata Cloud@Customer systems.&lt;br /&gt;

```sql
INSERT INTO oci.database.db_homes (
databaseSoftwareImageId,
definedTags,
displayName,
freeformTags,
isDesupportedVersion,
kmsKeyId,
kmsKeyVersionId,
source,
region,
opc-retry-token
)
SELECT 
'{{ databaseSoftwareImageId }}',
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
{{ isDesupportedVersion }},
'{{ kmsKeyId }}',
'{{ kmsKeyVersionId }}',
'{{ source }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
databaseSoftwareImageId,
dbHomeLocation,
dbSystemId,
dbVersion,
definedTags,
displayName,
freeformTags,
homeType,
kmsKeyId,
lastPatchHistoryEntryId,
lifecycleDetails,
lifecycleState,
oneOffPatches,
systemTags,
timeCreated,
vmClusterId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_homes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_homes resource.
    - name: databaseSoftwareImageId
      value: "{{ databaseSoftwareImageId }}"
      description: |
        The database software image [OCID](/Content/General/Concepts/identifiers.htm)
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-provided name of the Database Home.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: isDesupportedVersion
      value: {{ isDesupportedVersion }}
      description: |
        If true, the customer acknowledges that the specified Oracle Database software is an older release that is not currently supported by OCI.
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
    - name: kmsKeyVersionId
      value: "{{ kmsKeyVersionId }}"
      description: |
        The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation. Autonomous AI Database Serverless does not use key versions, hence is not applicable for Autonomous AI Database Serverless instances.
    - name: source
      value: "{{ source }}"
      description: |
        The source of database: NONE for creating a new database. DB_BACKUP for creating a new database by restoring from a database backup.
      valid_values: ['NONE', 'DB_BACKUP', 'DATABASE', 'VM_CLUSTER_BACKUP', 'VM_CLUSTER_NEW', 'VM_CLUSTER_DATABASE']
      default: NONE
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

Patches the specified Database Home.

```sql
UPDATE oci.database.db_homes
SET 
dbVersion = '{{ dbVersion }}',
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}',
oneOffPatches = '{{ oneOffPatches }}'
WHERE 
dbHomeId = '{{ dbHomeId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
databaseSoftwareImageId,
dbHomeLocation,
dbSystemId,
dbVersion,
definedTags,
displayName,
freeformTags,
homeType,
kmsKeyId,
lastPatchHistoryEntryId,
lifecycleDetails,
lifecycleState,
oneOffPatches,
systemTags,
timeCreated,
vmClusterId;
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

Deletes a Database Home. Applies to bare metal DB systems, Exadata Cloud Service, and Exadata Cloud@Customer systems.&lt;br /&gt;&lt;br /&gt;Oracle recommends that you use the `performFinalBackup` parameter to back up any data on a bare metal DB system before you delete a Database Home. On an Exadata Cloud@Customer system or an Exadata Cloud Service system, you can delete a Database Home only when there are no databases in it and therefore you cannot use the `performFinalBackup` parameter to back up data.&lt;br /&gt;

```sql
DELETE FROM oci.database.db_homes
WHERE dbHomeId = '{{ dbHomeId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND performFinalBackup = '{{ performFinalBackup }}'
;
```
</TabItem>
</Tabs>
