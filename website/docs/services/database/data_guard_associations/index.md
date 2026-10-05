--- 
title: data_guard_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - data_guard_associations
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

Creates, updates, deletes, gets or lists a <code>data_guard_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_guard_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.data_guard_associations" /></td></tr>
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

The configuration information is being retrieved.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Data Guard association.</td>
</tr>
<tr>
    <td><CopyableCode code="applyLag" /></td>
    <td><code>string</code></td>
    <td>The lag time between updates to the primary database and application of the redo data on the standby database, as computed by the reporting database.  Example: `9 seconds` </td>
</tr>
<tr>
    <td><CopyableCode code="applyRate" /></td>
    <td><code>string</code></td>
    <td>The rate at which redo logs are synced between the associated databases.  Example: `180 Mb per second` </td>
</tr>
<tr>
    <td><CopyableCode code="databaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the reporting database.</td>
</tr>
<tr>
    <td><CopyableCode code="isActiveDataGuardEnabled" /></td>
    <td><code>boolean</code></td>
    <td>True if active Data Guard is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycleState, if available. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Data Guard association. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, UPGRADING)</td>
</tr>
<tr>
    <td><CopyableCode code="peerDataGuardAssociationId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the peer database's Data Guard association.</td>
</tr>
<tr>
    <td><CopyableCode code="peerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the associated peer database.</td>
</tr>
<tr>
    <td><CopyableCode code="peerDbHomeId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Database Home containing the associated peer database. </td>
</tr>
<tr>
    <td><CopyableCode code="peerDbSystemId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DB system containing the associated peer database. </td>
</tr>
<tr>
    <td><CopyableCode code="peerRole" /></td>
    <td><code>string</code></td>
    <td>The role of the peer database in this Data Guard association. (PRIMARY, STANDBY, DISABLED_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="protectionMode" /></td>
    <td><code>string</code></td>
    <td>The protection mode of this Data Guard association. For more information, see &#91;Oracle Data Guard Protection Modes&#93;(http:​//docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000) in the Oracle Data Guard documentation.  (MAXIMUM_AVAILABILITY, MAXIMUM_PERFORMANCE, MAXIMUM_PROTECTION)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role of the reporting database in this Data Guard association. (PRIMARY, STANDBY, DISABLED_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Data Guard association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="transportType" /></td>
    <td><code>string</code></td>
    <td>The redo transport type used by this Data Guard association.  For more information, see &#91;Redo Transport Services&#93;(http:​//docs.oracle.com/database/122/SBYDB/oracle-data-guard-redo-transport-services.htm#SBYDB00400) in the Oracle Data Guard documentation.  (SYNC, ASYNC, FASTSYNC)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The properties that define a Data Guard association.&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an&lt;br /&gt;administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;For information about endpoints and signing API requests, see&lt;br /&gt;&#91;About the API&#93;(/Content/API/Concepts/usingapi.htm). For information about available SDKs and tools, see&lt;br /&gt;&#91;SDKS and Other Tools&#93;(/Content/API/Concepts/sdks.htm).&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Data Guard association.</td>
</tr>
<tr>
    <td><CopyableCode code="applyLag" /></td>
    <td><code>string</code></td>
    <td>The lag time between updates to the primary database and application of the redo data on the standby database, as computed by the reporting database.  Example: `9 seconds` </td>
</tr>
<tr>
    <td><CopyableCode code="applyRate" /></td>
    <td><code>string</code></td>
    <td>The rate at which redo logs are synced between the associated databases.  Example: `180 Mb per second` </td>
</tr>
<tr>
    <td><CopyableCode code="databaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the reporting database.</td>
</tr>
<tr>
    <td><CopyableCode code="isActiveDataGuardEnabled" /></td>
    <td><code>boolean</code></td>
    <td>True if active Data Guard is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycleState, if available. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Data Guard association. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, UPGRADING)</td>
</tr>
<tr>
    <td><CopyableCode code="peerDataGuardAssociationId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the peer database's Data Guard association.</td>
</tr>
<tr>
    <td><CopyableCode code="peerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the associated peer database.</td>
</tr>
<tr>
    <td><CopyableCode code="peerDbHomeId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Database Home containing the associated peer database. </td>
</tr>
<tr>
    <td><CopyableCode code="peerDbSystemId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DB system containing the associated peer database. </td>
</tr>
<tr>
    <td><CopyableCode code="peerRole" /></td>
    <td><code>string</code></td>
    <td>The role of the peer database in this Data Guard association. (PRIMARY, STANDBY, DISABLED_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="protectionMode" /></td>
    <td><code>string</code></td>
    <td>The protection mode of this Data Guard association. For more information, see &#91;Oracle Data Guard Protection Modes&#93;(http:​//docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000) in the Oracle Data Guard documentation.  (MAXIMUM_AVAILABILITY, MAXIMUM_PERFORMANCE, MAXIMUM_PROTECTION)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role of the reporting database in this Data Guard association. (PRIMARY, STANDBY, DISABLED_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Data Guard association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="transportType" /></td>
    <td><code>string</code></td>
    <td>The redo transport type used by this Data Guard association.  For more information, see &#91;Redo Transport Services&#93;(http:​//docs.oracle.com/database/122/SBYDB/oracle-data-guard-redo-transport-services.htm#SBYDB00400) in the Oracle Data Guard documentation.  (SYNC, ASYNC, FASTSYNC)</td>
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
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-dataGuardAssociationId"><code>dataGuardAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified Data Guard association's configuration information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all Data Guard associations for the specified database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-databaseAdminPassword"><code>databaseAdminPassword</code></a>, <a href="#parameter-protectionMode"><code>protectionMode</code></a>, <a href="#parameter-transportType"><code>transportType</code></a>, <a href="#parameter-creationType"><code>creationType</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new Data Guard association.  A Data Guard association represents the replication relationship between the&lt;br /&gt;specified database and a peer database. For more information, see &#91;Using Oracle Data Guard&#93;(/Content/Database/Tasks/usingdataguard.htm).&lt;br /&gt;&lt;br /&gt;All Oracle Cloud Infrastructure resources, including Data Guard associations, get an Oracle-assigned, unique ID&lt;br /&gt;called an Oracle Cloud Identifier (OCID). When you create a resource, you can find its OCID in the response.&lt;br /&gt;You can also retrieve a resource's OCID by using a List API operation on that resource type, or by viewing the&lt;br /&gt;resource in the Console. For more information, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/Content/General/Concepts/identifiers.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-dataGuardAssociationId"><code>dataGuardAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the Data Guard association the specified database. This API can be used to change the `protectionMode` and `transportType` of the Data Guard association.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#failover_data_guard_association"><CopyableCode code="failover_data_guard_association" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-dataGuardAssociationId"><code>dataGuardAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-databaseAdminPassword"><code>databaseAdminPassword</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Performs a failover to transition the standby database identified by the `databaseId` parameter into the&lt;br /&gt;specified Data Guard association's primary role after the existing primary database fails or becomes unreachable.&lt;br /&gt;&lt;br /&gt;A failover might result in data loss depending on the protection mode in effect at the time of the primary&lt;br /&gt;database failure.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#migrate_data_guard_association_to_multi_data_guards"><CopyableCode code="migrate_data_guard_association_to_multi_data_guards" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-dataGuardAssociationId"><code>dataGuardAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Migrates the existing Data Guard association to new Data Guard model to support multiple standby databases functionality.        &lt;br /&gt;&lt;br /&gt;This operation should always be performed on primary.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#reinstate_data_guard_association"><CopyableCode code="reinstate_data_guard_association" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-dataGuardAssociationId"><code>dataGuardAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-databaseAdminPassword"><code>databaseAdminPassword</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Reinstates the database identified by the `databaseId` parameter into the standby role in a Data Guard association.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#switchover_data_guard_association"><CopyableCode code="switchover_data_guard_association" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-dataGuardAssociationId"><code>dataGuardAssociationId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-databaseAdminPassword"><code>databaseAdminPassword</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Performs a switchover to transition the primary database of a Data Guard association into a standby role. The&lt;br /&gt;standby database associated with the `dataGuardAssociationId` assumes the primary database role.&lt;br /&gt;&lt;br /&gt;A switchover guarantees no data loss.&lt;br /&gt;</td>
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
<tr id="parameter-dataGuardAssociationId">
    <td><CopyableCode code="dataGuardAssociationId" /></td>
    <td><code>string</code></td>
    <td>The Data Guard association's &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-databaseId">
    <td><CopyableCode code="databaseId" /></td>
    <td><code>string</code></td>
    <td>The database &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
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

Gets the specified Data Guard association's configuration information.&lt;br /&gt;

```sql
SELECT
id,
applyLag,
applyRate,
databaseId,
isActiveDataGuardEnabled,
lifecycleDetails,
lifecycleState,
peerDataGuardAssociationId,
peerDatabaseId,
peerDbHomeId,
peerDbSystemId,
peerRole,
protectionMode,
role,
timeCreated,
transportType
FROM oci.database.data_guard_associations
WHERE databaseId = '{{ databaseId }}' -- required
AND dataGuardAssociationId = '{{ dataGuardAssociationId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all Data Guard associations for the specified database.&lt;br /&gt;

```sql
SELECT
id,
applyLag,
applyRate,
databaseId,
isActiveDataGuardEnabled,
lifecycleDetails,
lifecycleState,
peerDataGuardAssociationId,
peerDatabaseId,
peerDbHomeId,
peerDbSystemId,
peerRole,
protectionMode,
role,
timeCreated,
transportType
FROM oci.database.data_guard_associations
WHERE databaseId = '{{ databaseId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
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

Creates a new Data Guard association.  A Data Guard association represents the replication relationship between the&lt;br /&gt;specified database and a peer database. For more information, see &#91;Using Oracle Data Guard&#93;(/Content/Database/Tasks/usingdataguard.htm).&lt;br /&gt;&lt;br /&gt;All Oracle Cloud Infrastructure resources, including Data Guard associations, get an Oracle-assigned, unique ID&lt;br /&gt;called an Oracle Cloud Identifier (OCID). When you create a resource, you can find its OCID in the response.&lt;br /&gt;You can also retrieve a resource's OCID by using a List API operation on that resource type, or by viewing the&lt;br /&gt;resource in the Console. For more information, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/Content/General/Concepts/identifiers.htm).&lt;br /&gt;

```sql
INSERT INTO oci.database.data_guard_associations (
creationType,
databaseAdminPassword,
databaseSoftwareImageId,
isActiveDataGuardEnabled,
peerDbUniqueName,
peerSidPrefix,
protectionMode,
sourceEncryptionKeyLocationDetails,
transportType,
databaseId,
region,
opc-retry-token
)
SELECT 
'{{ creationType }}' /* required */,
'{{ databaseAdminPassword }}' /* required */,
'{{ databaseSoftwareImageId }}',
{{ isActiveDataGuardEnabled }},
'{{ peerDbUniqueName }}',
'{{ peerSidPrefix }}',
'{{ protectionMode }}' /* required */,
'{{ sourceEncryptionKeyLocationDetails }}',
'{{ transportType }}' /* required */,
'{{ databaseId }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
applyLag,
applyRate,
databaseId,
isActiveDataGuardEnabled,
lifecycleDetails,
lifecycleState,
peerDataGuardAssociationId,
peerDatabaseId,
peerDbHomeId,
peerDbSystemId,
peerRole,
protectionMode,
role,
timeCreated,
transportType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_guard_associations
  props:
    - name: databaseId
      value: "{{ databaseId }}"
      description: Required parameter for the data_guard_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_guard_associations resource.
    - name: creationType
      value: "{{ creationType }}"
      description: |
        Specifies whether to create the peer database in an existing DB system or in a new DB system.
    - name: databaseAdminPassword
      value: "{{ databaseAdminPassword }}"
      description: |
        A strong password for the \`SYS\`, \`SYSTEM\`, and \`PDB Admin\` users to apply during standby creation.
        The password must contain no fewer than nine characters and include:
        * At least two uppercase characters.
        * At least two lowercase characters.
        * At least two numeric characters.
        * At least two special characters. Valid special characters include "_", "#", and "-" only.
        **The password MUST be the same as the primary admin password.**
    - name: databaseSoftwareImageId
      value: "{{ databaseSoftwareImageId }}"
      description: |
        The database software image [OCID](/Content/General/Concepts/identifiers.htm)
    - name: isActiveDataGuardEnabled
      value: {{ isActiveDataGuardEnabled }}
      description: |
        True if active Data Guard is enabled.
    - name: peerDbUniqueName
      value: "{{ peerDbUniqueName }}"
      description: |
        Specifies the \`DB_UNIQUE_NAME\` of the peer database to be created.
    - name: peerSidPrefix
      value: "{{ peerSidPrefix }}"
      description: |
        Specifies a prefix for the \`Oracle SID\` of the database to be created.
    - name: protectionMode
      value: "{{ protectionMode }}"
      description: |
        The protection mode to set up between the primary and standby databases. For more information, see
        [Oracle Data Guard Protection Modes](http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000)
        in the Oracle Data Guard documentation.
        **IMPORTANT** - The only protection mode currently supported by the Database service is MAXIMUM_PERFORMANCE.
      valid_values: ['MAXIMUM_AVAILABILITY', 'MAXIMUM_PERFORMANCE', 'MAXIMUM_PROTECTION']
    - name: sourceEncryptionKeyLocationDetails
      description: |
        Types of providers supported for managing database encryption keys
      value:
        providerType: "{{ providerType }}"
    - name: transportType
      value: "{{ transportType }}"
      description: |
        The redo transport type to use for this Data Guard association.  Valid values depend on the specified \`protectionMode\`:
        * MAXIMUM_AVAILABILITY - SYNC or FASTSYNC
        * MAXIMUM_PERFORMANCE - ASYNC
        * MAXIMUM_PROTECTION - SYNC
        For more information, see
        [Redo Transport Services](http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-redo-transport-services.htm#SBYDB00400)
        in the Oracle Data Guard documentation.
        **IMPORTANT** - The only transport type currently supported by the Database service is ASYNC.
      valid_values: ['SYNC', 'ASYNC', 'FASTSYNC']
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

Updates the Data Guard association the specified database. This API can be used to change the `protectionMode` and `transportType` of the Data Guard association.&lt;br /&gt;

```sql
UPDATE oci.database.data_guard_associations
SET 
databaseAdminPassword = '{{ databaseAdminPassword }}',
isActiveDataGuardEnabled = {{ isActiveDataGuardEnabled }},
protectionMode = '{{ protectionMode }}',
transportType = '{{ transportType }}'
WHERE 
databaseId = '{{ databaseId }}' --required
AND dataGuardAssociationId = '{{ dataGuardAssociationId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
applyLag,
applyRate,
databaseId,
isActiveDataGuardEnabled,
lifecycleDetails,
lifecycleState,
peerDataGuardAssociationId,
peerDatabaseId,
peerDbHomeId,
peerDbSystemId,
peerRole,
protectionMode,
role,
timeCreated,
transportType;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="failover_data_guard_association"
    values={[
        { label: 'failover_data_guard_association', value: 'failover_data_guard_association' },
        { label: 'migrate_data_guard_association_to_multi_data_guards', value: 'migrate_data_guard_association_to_multi_data_guards' },
        { label: 'reinstate_data_guard_association', value: 'reinstate_data_guard_association' },
        { label: 'switchover_data_guard_association', value: 'switchover_data_guard_association' }
    ]}
>
<TabItem value="failover_data_guard_association">

Performs a failover to transition the standby database identified by the `databaseId` parameter into the&lt;br /&gt;specified Data Guard association's primary role after the existing primary database fails or becomes unreachable.&lt;br /&gt;&lt;br /&gt;A failover might result in data loss depending on the protection mode in effect at the time of the primary&lt;br /&gt;database failure.&lt;br /&gt;

```sql
EXEC oci.database.data_guard_associations.failover_data_guard_association 
@databaseId='{{ databaseId }}' --required, 
@dataGuardAssociationId='{{ dataGuardAssociationId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}' 
@@json=
'{
"databaseAdminPassword": "{{ databaseAdminPassword }}"
}'
;
```
</TabItem>
<TabItem value="migrate_data_guard_association_to_multi_data_guards">

Migrates the existing Data Guard association to new Data Guard model to support multiple standby databases functionality.        &lt;br /&gt;&lt;br /&gt;This operation should always be performed on primary.&lt;br /&gt;

```sql
EXEC oci.database.data_guard_associations.migrate_data_guard_association_to_multi_data_guards 
@databaseId='{{ databaseId }}' --required, 
@dataGuardAssociationId='{{ dataGuardAssociationId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="reinstate_data_guard_association">

Reinstates the database identified by the `databaseId` parameter into the standby role in a Data Guard association.&lt;br /&gt;

```sql
EXEC oci.database.data_guard_associations.reinstate_data_guard_association 
@databaseId='{{ databaseId }}' --required, 
@dataGuardAssociationId='{{ dataGuardAssociationId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}' 
@@json=
'{
"databaseAdminPassword": "{{ databaseAdminPassword }}"
}'
;
```
</TabItem>
<TabItem value="switchover_data_guard_association">

Performs a switchover to transition the primary database of a Data Guard association into a standby role. The&lt;br /&gt;standby database associated with the `dataGuardAssociationId` assumes the primary database role.&lt;br /&gt;&lt;br /&gt;A switchover guarantees no data loss.&lt;br /&gt;

```sql
EXEC oci.database.data_guard_associations.switchover_data_guard_association 
@databaseId='{{ databaseId }}' --required, 
@dataGuardAssociationId='{{ dataGuardAssociationId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}' 
@@json=
'{
"databaseAdminPassword": "{{ databaseAdminPassword }}"
}'
;
```
</TabItem>
</Tabs>
