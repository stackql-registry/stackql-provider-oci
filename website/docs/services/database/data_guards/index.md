--- 
title: data_guards
hide_title: false
hide_table_of_contents: false
keywords:
  - data_guards
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

Creates, updates, deletes, gets or lists a <code>data_guards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_guards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.data_guards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Update an existing Data Guard member. A Data Guard member represents the replication relationship between the&lt;br /&gt;specified database and a standby database. For more information, see &#91;Using Oracle Data Guard&#93;(/Content/Database/Tasks/usingdataguard.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#convert_to_standalone"><CopyableCode code="convert_to_standalone" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-databaseAdminPassword"><code>databaseAdminPassword</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Disassociate the standby database identified by the `databaseId` parameter from existing Data Guard group. &lt;br /&gt;&lt;br /&gt;Convert the standby to a standalone database.        &lt;br /&gt;&lt;br /&gt;This operation should be performed on respective standby database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#failover_data_guard"><CopyableCode code="failover_data_guard" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-databaseAdminPassword"><code>databaseAdminPassword</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Performs a failover to transition the standby database identified by the `databaseId` path parameter into the&lt;br /&gt;primary role after the existing primary database fails or becomes unreachable.&lt;br /&gt;&lt;br /&gt;A failover might result in data loss depending on the protection mode in effect at the time of the primary&lt;br /&gt;database failure.&lt;br /&gt;&lt;br /&gt;This operation should be performed on respective standby database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#reinstate_data_guard"><CopyableCode code="reinstate_data_guard" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-databaseAdminPassword"><code>databaseAdminPassword</code></a>, <a href="#parameter-sourceDatabaseId"><code>sourceDatabaseId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Reinstates the database identified by the `databaseId` parameter into the standby role in a Data Guard association.        &lt;br /&gt;&lt;br /&gt;This operation should be performed on disabled standby database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#switch_over_data_guard"><CopyableCode code="switch_over_data_guard" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-databaseAdminPassword"><code>databaseAdminPassword</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Performs a switchover to transition primary database of this Data Guard association into a standby role. The&lt;br /&gt;standby database associated with the `dataGuardAssociationId` assumes the primary database role.&lt;br /&gt;&lt;br /&gt;A switchover guarantees no data loss.&lt;br /&gt;&lt;br /&gt;This operation should be performed on respective standby database.&lt;br /&gt;</td>
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
<tr id="parameter-databaseId">
    <td><CopyableCode code="databaseId" /></td>
    <td><code>string</code></td>
    <td>The database &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Update an existing Data Guard member. A Data Guard member represents the replication relationship between the&lt;br /&gt;specified database and a standby database. For more information, see &#91;Using Oracle Data Guard&#93;(/Content/Database/Tasks/usingdataguard.htm).&lt;br /&gt;

```sql
UPDATE oci.database.data_guards
SET 
databaseAdminPassword = '{{ databaseAdminPassword }}',
isActiveDataGuardEnabled = {{ isActiveDataGuardEnabled }},
protectionMode = '{{ protectionMode }}',
transportType = '{{ transportType }}'
WHERE 
databaseId = '{{ databaseId }}' --required
AND region = '{{ region }}' --required
AND opc-retry-token = '{{ opc-retry-token}}'
AND opc-request-id = '{{ opc-request-id}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
characterSet,
compartmentId,
connectionStrings,
dataGuardGroup,
databaseManagementConfig,
databaseSoftwareImageId,
dbBackupConfig,
dbHomeId,
dbName,
dbSystemId,
dbUniqueName,
dbWorkload,
definedTags,
encryptionKeyLocationDetails,
freeformTags,
homeType,
isCdb,
kmsKeyId,
kmsKeyVersionId,
lastBackupDurationInSeconds,
lastBackupTimestamp,
lastFailedBackupTimestamp,
lifecycleDetails,
lifecycleState,
managedSoftwareUpdateDetails,
ncharacterSet,
pdbName,
sidPrefix,
sourceDatabasePointInTimeRecoveryTimestamp,
storageSizeDetails,
systemTags,
timeCreated,
vaultId,
vmClusterId;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="convert_to_standalone"
    values={[
        { label: 'convert_to_standalone', value: 'convert_to_standalone' },
        { label: 'failover_data_guard', value: 'failover_data_guard' },
        { label: 'reinstate_data_guard', value: 'reinstate_data_guard' },
        { label: 'switch_over_data_guard', value: 'switch_over_data_guard' }
    ]}
>
<TabItem value="convert_to_standalone">

Disassociate the standby database identified by the `databaseId` parameter from existing Data Guard group. &lt;br /&gt;&lt;br /&gt;Convert the standby to a standalone database.        &lt;br /&gt;&lt;br /&gt;This operation should be performed on respective standby database.&lt;br /&gt;

```sql
EXEC oci.database.data_guards.convert_to_standalone 
@databaseId='{{ databaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"databaseAdminPassword": "{{ databaseAdminPassword }}"
}'
;
```
</TabItem>
<TabItem value="failover_data_guard">

Performs a failover to transition the standby database identified by the `databaseId` path parameter into the&lt;br /&gt;primary role after the existing primary database fails or becomes unreachable.&lt;br /&gt;&lt;br /&gt;A failover might result in data loss depending on the protection mode in effect at the time of the primary&lt;br /&gt;database failure.&lt;br /&gt;&lt;br /&gt;This operation should be performed on respective standby database.&lt;br /&gt;

```sql
EXEC oci.database.data_guards.failover_data_guard 
@databaseId='{{ databaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"databaseAdminPassword": "{{ databaseAdminPassword }}"
}'
;
```
</TabItem>
<TabItem value="reinstate_data_guard">

Reinstates the database identified by the `databaseId` parameter into the standby role in a Data Guard association.        &lt;br /&gt;&lt;br /&gt;This operation should be performed on disabled standby database.&lt;br /&gt;

```sql
EXEC oci.database.data_guards.reinstate_data_guard 
@databaseId='{{ databaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"databaseAdminPassword": "{{ databaseAdminPassword }}", 
"sourceDatabaseId": "{{ sourceDatabaseId }}"
}'
;
```
</TabItem>
<TabItem value="switch_over_data_guard">

Performs a switchover to transition primary database of this Data Guard association into a standby role. The&lt;br /&gt;standby database associated with the `dataGuardAssociationId` assumes the primary database role.&lt;br /&gt;&lt;br /&gt;A switchover guarantees no data loss.&lt;br /&gt;&lt;br /&gt;This operation should be performed on respective standby database.&lt;br /&gt;

```sql
EXEC oci.database.data_guards.switch_over_data_guard 
@databaseId='{{ databaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"databaseAdminPassword": "{{ databaseAdminPassword }}"
}'
;
```
</TabItem>
</Tabs>
