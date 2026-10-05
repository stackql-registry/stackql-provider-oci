--- 
title: external_backup_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - external_backup_jobs
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

Creates, updates, deletes, gets or lists an <code>external_backup_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="external_backup_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.external_backup_jobs" /></td></tr>
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

The backup of an external database.

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
    <td><CopyableCode code="backupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the associated backup resource.</td>
</tr>
<tr>
    <td><CopyableCode code="bucketName" /></td>
    <td><code>string</code></td>
    <td>The name of the Swift compartment bucket where the backup should be stored.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning" /></td>
    <td><code>boolean</code></td>
    <td>An indicator for the provisioning state of the resource. If `TRUE`, the resource is still being provisioned.</td>
</tr>
<tr>
    <td><CopyableCode code="swiftPassword" /></td>
    <td><code>string</code></td>
    <td>The auth token to use for access to the Swift compartment bucket that will store the standalone backup. For information about auth tokens, see &#91;Working with Auth Tokens&#93;(/Content/Identity/Tasks/managingcredentials.htm#two). </td>
</tr>
<tr>
    <td><CopyableCode code="swiftPath" /></td>
    <td><code>string</code></td>
    <td>The Swift path to use as a destination for the standalone backup.</td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td>The tag for RMAN to apply to the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="userName" /></td>
    <td><code>string</code></td>
    <td>The Swift user name to use for transferring the standalone backup to the designated Swift compartment bucket.</td>
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
    <td>Gets information about the specified external backup job.&lt;br /&gt;&lt;br /&gt;**Note:** This API is used by an Oracle Cloud Infrastructure Python script that is packaged with the Oracle Cloud Infrastructure CLI. Oracle recommends that you use the script instead using the API directly. See &#91;Migrating an On-Premises Database to Oracle Cloud Infrastructure by Creating a Backup in the Cloud&#93;(/Content/Database/Tasks/mig-onprembackup.htm) for more information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-dbVersion"><code>dbVersion</code></a>, <a href="#parameter-dbName"><code>dbName</code></a>, <a href="#parameter-externalDatabaseIdentifier"><code>externalDatabaseIdentifier</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-characterSet"><code>characterSet</code></a>, <a href="#parameter-ncharacterSet"><code>ncharacterSet</code></a>, <a href="#parameter-databaseMode"><code>databaseMode</code></a>, <a href="#parameter-databaseEdition"><code>databaseEdition</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new backup resource and returns the information the caller needs to back up an on-premises Oracle Database to Oracle Cloud Infrastructure.&lt;br /&gt;&lt;br /&gt;**Note:** This API is used by an Oracle Cloud Infrastructure Python script that is packaged with the Oracle Cloud Infrastructure CLI. Oracle recommends that you use the script instead using the API directly. See &#91;Migrating an On-Premises Database to Oracle Cloud Infrastructure by Creating a Backup in the Cloud&#93;(/Content/Database/Tasks/mig-onprembackup.htm) for more information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#complete_external_backup_job"><CopyableCode code="complete_external_backup_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-backupId"><code>backupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Changes the status of the standalone backup resource to `ACTIVE` after the backup is created from the on-premises database and placed in Oracle Cloud Infrastructure Object Storage.&lt;br /&gt;&lt;br /&gt;**Note:** This API is used by an Oracle Cloud Infrastructure Python script that is packaged with the Oracle Cloud Infrastructure CLI. Oracle recommends that you use the script instead using the API directly. See &#91;Migrating an On-Premises Database to Oracle Cloud Infrastructure by Creating a Backup in the Cloud&#93;(/Content/Database/Tasks/mig-onprembackup.htm) for more information.&lt;br /&gt;</td>
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
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
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

Gets information about the specified external backup job.&lt;br /&gt;&lt;br /&gt;**Note:** This API is used by an Oracle Cloud Infrastructure Python script that is packaged with the Oracle Cloud Infrastructure CLI. Oracle recommends that you use the script instead using the API directly. See &#91;Migrating an On-Premises Database to Oracle Cloud Infrastructure by Creating a Backup in the Cloud&#93;(/Content/Database/Tasks/mig-onprembackup.htm) for more information.&lt;br /&gt;

```sql
SELECT
backupId,
bucketName,
provisioning,
swiftPassword,
swiftPath,
tag,
userName
FROM oci.database.external_backup_jobs
WHERE backupId = '{{ backupId }}' -- required
AND region = '{{ region }}' -- required
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

Creates a new backup resource and returns the information the caller needs to back up an on-premises Oracle Database to Oracle Cloud Infrastructure.&lt;br /&gt;&lt;br /&gt;**Note:** This API is used by an Oracle Cloud Infrastructure Python script that is packaged with the Oracle Cloud Infrastructure CLI. Oracle recommends that you use the script instead using the API directly. See &#91;Migrating an On-Premises Database to Oracle Cloud Infrastructure by Creating a Backup in the Cloud&#93;(/Content/Database/Tasks/mig-onprembackup.htm) for more information.&lt;br /&gt;

```sql
INSERT INTO oci.database.external_backup_jobs (
availabilityDomain,
characterSet,
compartmentId,
databaseEdition,
databaseMode,
dbName,
dbUniqueName,
dbVersion,
displayName,
externalDatabaseIdentifier,
ncharacterSet,
pdbName,
region,
opc-retry-token
)
SELECT 
'{{ availabilityDomain }}' /* required */,
'{{ characterSet }}' /* required */,
'{{ compartmentId }}' /* required */,
'{{ databaseEdition }}' /* required */,
'{{ databaseMode }}' /* required */,
'{{ dbName }}' /* required */,
'{{ dbUniqueName }}',
'{{ dbVersion }}' /* required */,
'{{ displayName }}' /* required */,
{{ externalDatabaseIdentifier }} /* required */,
'{{ ncharacterSet }}' /* required */,
'{{ pdbName }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
backupId,
bucketName,
provisioning,
swiftPassword,
swiftPath,
tag,
userName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: external_backup_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the external_backup_jobs resource.
    - name: availabilityDomain
      value: "{{ availabilityDomain }}"
      description: |
        The targeted availability domain for the backup.
    - name: characterSet
      value: "{{ characterSet }}"
      description: |
        The character set for the database.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment where this backup should be created.
    - name: databaseEdition
      value: "{{ databaseEdition }}"
      description: |
        The Oracle Database Edition that applies to all the databases on the DB system.
        Exadata DB systems and 2-node RAC DB systems require ENTERPRISE_EDITION_EXTREME_PERFORMANCE.
      valid_values: ['STANDARD_EDITION', 'ENTERPRISE_EDITION', 'ENTERPRISE_EDITION_HIGH_PERFORMANCE', 'ENTERPRISE_EDITION_EXTREME_PERFORMANCE', 'ENTERPRISE_EDITION_DEVELOPER']
    - name: databaseMode
      value: "{{ databaseMode }}"
      description: |
        The mode (single instance or RAC) of the database being backed up.
      valid_values: ['SI', 'RAC']
    - name: dbName
      value: "{{ dbName }}"
      description: |
        The name of the database from which the backup is being taken.
    - name: dbUniqueName
      value: "{{ dbUniqueName }}"
      description: |
        The \`DB_UNIQUE_NAME\` of the Oracle Database being backed up.
    - name: dbVersion
      value: "{{ dbVersion }}"
      description: |
        A valid Oracle Database version.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name for the backup. This name does not have to be unique.
    - name: externalDatabaseIdentifier
      value: {{ externalDatabaseIdentifier }}
      description: |
        The \`DBID\` of the Oracle Database being backed up.
    - name: ncharacterSet
      value: "{{ ncharacterSet }}"
      description: |
        The national character set for the database.
    - name: pdbName
      value: "{{ pdbName }}"
      description: |
        The pluggable database name.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="complete_external_backup_job"
    values={[
        { label: 'complete_external_backup_job', value: 'complete_external_backup_job' }
    ]}
>
<TabItem value="complete_external_backup_job">

Changes the status of the standalone backup resource to `ACTIVE` after the backup is created from the on-premises database and placed in Oracle Cloud Infrastructure Object Storage.&lt;br /&gt;&lt;br /&gt;**Note:** This API is used by an Oracle Cloud Infrastructure Python script that is packaged with the Oracle Cloud Infrastructure CLI. Oracle recommends that you use the script instead using the API directly. See &#91;Migrating an On-Premises Database to Oracle Cloud Infrastructure by Creating a Backup in the Cloud&#93;(/Content/Database/Tasks/mig-onprembackup.htm) for more information.&lt;br /&gt;

```sql
EXEC oci.database.external_backup_jobs.complete_external_backup_job 
@backupId='{{ backupId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"cfBackupHandle": "{{ cfBackupHandle }}", 
"dataSize": {{ dataSize }}, 
"redoSize": {{ redoSize }}, 
"spfBackupHandle": "{{ spfBackupHandle }}", 
"sqlPatches": "{{ sqlPatches }}", 
"tdeWalletPath": "{{ tdeWalletPath }}"
}'
;
```
</TabItem>
</Tabs>
