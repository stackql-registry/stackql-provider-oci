--- 
title: pluggable_databases
hide_title: false
hide_table_of_contents: false
keywords:
  - pluggable_databases
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

Creates, updates, deletes, gets or lists a <code>pluggable_databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pluggable_databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.pluggable_databases" /></td></tr>
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

The pluggable database.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the pluggable database.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionStrings" /></td>
    <td><code>object</code></td>
    <td>Connection strings to connect to an Oracle Pluggable Database. </td>
</tr>
<tr>
    <td><CopyableCode code="containerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the CDB.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isRestricted" /></td>
    <td><code>boolean</code></td>
    <td>The restricted mode of the pluggable database. If a pluggable database is opened in restricted mode, the user needs both create a session and have restricted session privileges to connect to it. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Detailed message for the lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the pluggable database. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED, UPDATING, FAILED, RELOCATING, RELOCATED, REFRESHING, RESTORE_IN_PROGRESS, RESTORE_FAILED, BACKUP_IN_PROGRESS, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="openMode" /></td>
    <td><code>string</code></td>
    <td>**Deprecated.** Use &#91;PluggableDatabaseNodeLevelDetails&#93;(#/en/database/latest/datatypes/PluggableDatabaseNodeLevelDetails) for OpenMode details. The mode that pluggable database is in. Open mode can only be changed to READ_ONLY or MIGRATE directly from the backend (within the Oracle Database software).  (READ_ONLY, READ_WRITE, MOUNTED, MIGRATE)</td>
</tr>
<tr>
    <td><CopyableCode code="pdbName" /></td>
    <td><code>string</code></td>
    <td>The name for the pluggable database (PDB). The name is unique in the context of a &#91;container database&#93;(#/en/database/latest/Database/). The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters. Special characters are not permitted. The pluggable database name should not be same as the container database name.</td>
</tr>
<tr>
    <td><CopyableCode code="pdbNodeLevelDetails" /></td>
    <td><code>array</code></td>
    <td>Pluggable Database Node Level Details. Example: &#91;&#123;"nodeName" : "node1", "openMode" : "READ_WRITE"&#125;, &#123;"nodeName" : "node2", "openMode" : "READ_ONLY"&#125;&#93; </td>
</tr>
<tr>
    <td><CopyableCode code="refreshableCloneConfig" /></td>
    <td><code>object</code></td>
    <td>Pluggable Database Refreshable Clone Configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the pluggable database was created.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A pluggable database (PDB) is portable collection of schemas, schema objects, and non-schema objects that appears to an Oracle client as a non-container database. To use a PDB, it needs to be plugged into a CDB.&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to a tenancy administrator. If you are an administrator who needs to write policies to give users access, see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the pluggable database.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionStrings" /></td>
    <td><code>object</code></td>
    <td>Connection strings to connect to an Oracle Pluggable Database. </td>
</tr>
<tr>
    <td><CopyableCode code="containerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the CDB.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isRestricted" /></td>
    <td><code>boolean</code></td>
    <td>The restricted mode of the pluggable database. If a pluggable database is opened in restricted mode, the user needs both create a session and have restricted session privileges to connect to it. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Detailed message for the lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the pluggable database. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED, UPDATING, FAILED, RELOCATING, RELOCATED, REFRESHING, RESTORE_IN_PROGRESS, RESTORE_FAILED, BACKUP_IN_PROGRESS, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="openMode" /></td>
    <td><code>string</code></td>
    <td>**Deprecated.** Use &#91;PluggableDatabaseNodeLevelDetails&#93;(#/en/database/latest/datatypes/PluggableDatabaseNodeLevelDetails) for OpenMode details. The mode that pluggable database is in. Open mode can only be changed to READ_ONLY or MIGRATE directly from the backend (within the Oracle Database software).  (READ_ONLY, READ_WRITE, MOUNTED, MIGRATE)</td>
</tr>
<tr>
    <td><CopyableCode code="pdbName" /></td>
    <td><code>string</code></td>
    <td>The name for the pluggable database (PDB). The name is unique in the context of a &#91;container database&#93;(#/en/database/latest/Database/). The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters. Special characters are not permitted. The pluggable database name should not be same as the container database name.</td>
</tr>
<tr>
    <td><CopyableCode code="pdbNodeLevelDetails" /></td>
    <td><code>array</code></td>
    <td>Pluggable Database Node Level Details. Example: &#91;&#123;"nodeName" : "node1", "openMode" : "READ_WRITE"&#125;, &#123;"nodeName" : "node2", "openMode" : "READ_ONLY"&#125;&#93; </td>
</tr>
<tr>
    <td><CopyableCode code="refreshableCloneConfig" /></td>
    <td><code>object</code></td>
    <td>Pluggable Database Refreshable Clone Configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the pluggable database was created.</td>
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
    <td><a href="#parameter-pluggableDatabaseId"><code>pluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified pluggable database.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-pdbName"><code>pdbName</code></a></td>
    <td>Gets a list of the pluggable databases in a database or compartment. You must provide either a `databaseId` or `compartmentId` value.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pdbName"><code>pdbName</code></a>, <a href="#parameter-containerDatabaseId"><code>containerDatabaseId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates and starts a pluggable database in the specified container database.&lt;br /&gt;Pluggable Database can be created using different operations (e.g. LocalClone, RemoteClone, Relocate ) with this API.&lt;br /&gt;Use the &#91;StartPluggableDatabase&#93;(#/en/database/latest/PluggableDatabase/StartPluggableDatabase) and &#91;StopPluggableDatabase&#93;(#/en/database/latest/PluggableDatabase/StopPluggableDatabase) APIs to start and stop the pluggable database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-pluggableDatabaseId"><code>pluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified pluggable database.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-pluggableDatabaseId"><code>pluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the specified pluggable database.</td>
</tr>
<tr>
    <td><a href="#convert_to_regular_pluggable_database"><CopyableCode code="convert_to_regular_pluggable_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-pluggableDatabaseId"><code>pluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Converts a Refreshable clone to Regular pluggable database (PDB).&lt;br /&gt;Pluggable Database will be in `READ_WRITE` openmode after conversion.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#local_clone_pluggable_database"><CopyableCode code="local_clone_pluggable_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-pluggableDatabaseId"><code>pluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clonedPdbName"><code>clonedPdbName</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>**Deprecated.** Use &#91;CreatePluggableDatabase&#93;(#/en/database/latest/PluggableDatabase/CreatePluggableDatabase) for Pluggable Database LocalClone Operation.&lt;br /&gt;Clones and starts a pluggable database (PDB) in the same database (CDB) as the source PDB. The source PDB must be in the `READ_WRITE` openMode to perform the clone operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#refresh_pluggable_database"><CopyableCode code="refresh_pluggable_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-pluggableDatabaseId"><code>pluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Refreshes a pluggable database (PDB) Refreshable clone.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remote_clone_pluggable_database"><CopyableCode code="remote_clone_pluggable_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-pluggableDatabaseId"><code>pluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clonedPdbName"><code>clonedPdbName</code></a>, <a href="#parameter-targetContainerDatabaseId"><code>targetContainerDatabaseId</code></a>, <a href="#parameter-sourceContainerDbAdminPassword"><code>sourceContainerDbAdminPassword</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>**Deprecated.** Use &#91;CreatePluggableDatabase&#93;(#/en/database/latest/PluggableDatabase/CreatePluggableDatabase) for Pluggable Database RemoteClone Operation.&lt;br /&gt;Clones a pluggable database (PDB) to a different database from the source PDB. The cloned PDB will be started upon completion of the clone operation. The source PDB must be in the `READ_WRITE` openMode when performing the clone.&lt;br /&gt;For Exadata Cloud@Customer instances, the source pluggable database (PDB) must be on the same Exadata Infrastructure as the target container database (CDB) to create a remote clone.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#start_pluggable_database"><CopyableCode code="start_pluggable_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-pluggableDatabaseId"><code>pluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Starts a stopped pluggable database. The `openMode` value of the pluggable database will be `READ_WRITE` upon completion.</td>
</tr>
<tr>
    <td><a href="#stop_pluggable_database"><CopyableCode code="stop_pluggable_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-pluggableDatabaseId"><code>pluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Stops a pluggable database. The `openMode` value of the pluggable database will be `MOUNTED` upon completion.</td>
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
<tr id="parameter-pluggableDatabaseId">
    <td><CopyableCode code="pluggableDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The database &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
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
<tr id="parameter-pdbName">
    <td><CopyableCode code="pdbName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only pluggable databases that match the entire name given. The match is not case sensitive.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is descending.  Default order for PDBNAME is ascending. The PDBNAME sort order is case sensitive.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`).</td>
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

Gets information about the specified pluggable database.

```sql
SELECT
id,
compartmentId,
connectionStrings,
containerDatabaseId,
definedTags,
freeformTags,
isRestricted,
lifecycleDetails,
lifecycleState,
openMode,
pdbName,
pdbNodeLevelDetails,
refreshableCloneConfig,
systemTags,
timeCreated
FROM oci.database.pluggable_databases
WHERE pluggableDatabaseId = '{{ pluggableDatabaseId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Gets a list of the pluggable databases in a database or compartment. You must provide either a `databaseId` or `compartmentId` value.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
connectionStrings,
containerDatabaseId,
definedTags,
freeformTags,
isRestricted,
lifecycleDetails,
lifecycleState,
openMode,
pdbName,
pdbNodeLevelDetails,
refreshableCloneConfig,
systemTags,
timeCreated
FROM oci.database.pluggable_databases
WHERE region = '{{ region }}' -- required
AND compartmentId = '{{ compartmentId }}'
AND databaseId = '{{ databaseId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND pdbName = '{{ pdbName }}'
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

Creates and starts a pluggable database in the specified container database.&lt;br /&gt;Pluggable Database can be created using different operations (e.g. LocalClone, RemoteClone, Relocate ) with this API.&lt;br /&gt;Use the &#91;StartPluggableDatabase&#93;(#/en/database/latest/PluggableDatabase/StartPluggableDatabase) and &#91;StopPluggableDatabase&#93;(#/en/database/latest/PluggableDatabase/StopPluggableDatabase) APIs to start and stop the pluggable database.&lt;br /&gt;

```sql
INSERT INTO oci.database.pluggable_databases (
containerDatabaseAdminPassword,
containerDatabaseId,
definedTags,
freeformTags,
pdbAdminPassword,
pdbCreationTypeDetails,
pdbName,
shouldCreatePdbBackup,
shouldPdbAdminAccountBeLocked,
tdeWalletPassword,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ containerDatabaseAdminPassword }}',
'{{ containerDatabaseId }}' /* required */,
'{{ definedTags }}',
'{{ freeformTags }}',
'{{ pdbAdminPassword }}',
'{{ pdbCreationTypeDetails }}',
'{{ pdbName }}' /* required */,
{{ shouldCreatePdbBackup }},
{{ shouldPdbAdminAccountBeLocked }},
'{{ tdeWalletPassword }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
compartmentId,
connectionStrings,
containerDatabaseId,
definedTags,
freeformTags,
isRestricted,
lifecycleDetails,
lifecycleState,
openMode,
pdbName,
pdbNodeLevelDetails,
refreshableCloneConfig,
systemTags,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pluggable_databases
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the pluggable_databases resource.
    - name: containerDatabaseAdminPassword
      value: "{{ containerDatabaseAdminPassword }}"
      description: |
        The DB system administrator password of the Container Database.
    - name: containerDatabaseId
      value: "{{ containerDatabaseId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the CDB
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: pdbAdminPassword
      value: "{{ pdbAdminPassword }}"
      description: |
        A strong password for PDB Admin. The password must be at least nine characters and contain at least two uppercase, two lowercase, two numbers, and two special characters. The special characters must be _, \#, or -.
    - name: pdbCreationTypeDetails
      description: |
        The Pluggable Database creation type.
        Use \`LOCAL_CLONE_PDB\` for creating a new PDB using Local Clone on Source Pluggable Database. This will Clone and starts a
        pluggable database (PDB) in the same database (CDB) as the source PDB. The source PDB must be in the \`READ_WRITE\` openMode to
        perform the clone operation.
        sourcePluggableDatabaseSnapshotId and
        isThinClone options are supported for Exadata VM cluster on Exascale Infrastructure, Exadata Cloud@Customer VM Cluster on Exadata Cloud@Customer infrastructure, and Exadata Cloud VM cluster on cloud Exadata infrastructure
        Use \`REMOTE_CLONE_PDB\` for creating a new PDB using Remote Clone on Source Pluggable Database. This will Clone a pluggable
        database (PDB) to a different database from the source PDB. The cloned PDB will be started upon completion of the clone
        operation. The source PDB must be in the \`READ_WRITE\` openMode when performing the clone.
        For Exadata Cloud@Customer instances, the source pluggable database (PDB) must be on the same Exadata Infrastructure as the
        target container database (CDB) to create a remote clone.
        sourcePluggableDatabaseSnapshotId and
        isThinClone options are supported for Exadata VM cluster on Exascale Infrastructure, Exadata Cloud@Customer VM Cluster on Exadata Cloud@Customer infrastructure, and Exadata Cloud VM cluster on cloud Exadata infrastructure.
        Use \`RELOCATE_PDB\` for relocating the Pluggable Database from Source CDB and creating it in target CDB. This will relocate a
        pluggable database (PDB) to a different database from the source PDB. The source PDB must be in the \`READ_WRITE\` openMode when
        performing the relocate.
      value:
        creationType: "{{ creationType }}"
    - name: pdbName
      value: "{{ pdbName }}"
      description: |
        The name for the pluggable database (PDB). The name is unique in the context of a [container database](#/en/database/latest/Database/). The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters. Special characters are not permitted. The pluggable database name should not be same as the container database name.
    - name: shouldCreatePdbBackup
      value: {{ shouldCreatePdbBackup }}
      description: |
        Indicates whether to take Pluggable Database Backup after the operation.
    - name: shouldPdbAdminAccountBeLocked
      value: {{ shouldPdbAdminAccountBeLocked }}
      description: |
        The locked mode of the pluggable database admin account. If false, the user needs to provide the PDB Admin Password to connect to it.
        If true, the pluggable database will be locked and user cannot login to it.
      default: false
    - name: tdeWalletPassword
      value: "{{ tdeWalletPassword }}"
      description: |
        The existing TDE wallet password of the CDB.
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

Updates the specified pluggable database.

```sql
UPDATE oci.database.pluggable_databases
SET 
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}'
WHERE 
pluggableDatabaseId = '{{ pluggableDatabaseId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
connectionStrings,
containerDatabaseId,
definedTags,
freeformTags,
isRestricted,
lifecycleDetails,
lifecycleState,
openMode,
pdbName,
pdbNodeLevelDetails,
refreshableCloneConfig,
systemTags,
timeCreated;
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

Deletes the specified pluggable database.

```sql
DELETE FROM oci.database.pluggable_databases
WHERE pluggableDatabaseId = '{{ pluggableDatabaseId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="convert_to_regular_pluggable_database"
    values={[
        { label: 'convert_to_regular_pluggable_database', value: 'convert_to_regular_pluggable_database' },
        { label: 'local_clone_pluggable_database', value: 'local_clone_pluggable_database' },
        { label: 'refresh_pluggable_database', value: 'refresh_pluggable_database' },
        { label: 'remote_clone_pluggable_database', value: 'remote_clone_pluggable_database' },
        { label: 'start_pluggable_database', value: 'start_pluggable_database' },
        { label: 'stop_pluggable_database', value: 'stop_pluggable_database' }
    ]}
>
<TabItem value="convert_to_regular_pluggable_database">

Converts a Refreshable clone to Regular pluggable database (PDB).&lt;br /&gt;Pluggable Database will be in `READ_WRITE` openmode after conversion.&lt;br /&gt;

```sql
EXEC oci.database.pluggable_databases.convert_to_regular_pluggable_database 
@pluggableDatabaseId='{{ pluggableDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"containerDatabaseAdminPassword": "{{ containerDatabaseAdminPassword }}", 
"shouldCreatePdbBackup": {{ shouldCreatePdbBackup }}, 
"tdeWalletPassword": "{{ tdeWalletPassword }}"
}'
;
```
</TabItem>
<TabItem value="local_clone_pluggable_database">

**Deprecated.** Use &#91;CreatePluggableDatabase&#93;(#/en/database/latest/PluggableDatabase/CreatePluggableDatabase) for Pluggable Database LocalClone Operation.&lt;br /&gt;Clones and starts a pluggable database (PDB) in the same database (CDB) as the source PDB. The source PDB must be in the `READ_WRITE` openMode to perform the clone operation.&lt;br /&gt;

```sql
EXEC oci.database.pluggable_databases.local_clone_pluggable_database 
@pluggableDatabaseId='{{ pluggableDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"clonedPdbName": "{{ clonedPdbName }}", 
"pdbAdminPassword": "{{ pdbAdminPassword }}", 
"shouldPdbAdminAccountBeLocked": {{ shouldPdbAdminAccountBeLocked }}, 
"targetTdeWalletPassword": "{{ targetTdeWalletPassword }}"
}'
;
```
</TabItem>
<TabItem value="refresh_pluggable_database">

Refreshes a pluggable database (PDB) Refreshable clone.&lt;br /&gt;

```sql
EXEC oci.database.pluggable_databases.refresh_pluggable_database 
@pluggableDatabaseId='{{ pluggableDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="remote_clone_pluggable_database">

**Deprecated.** Use &#91;CreatePluggableDatabase&#93;(#/en/database/latest/PluggableDatabase/CreatePluggableDatabase) for Pluggable Database RemoteClone Operation.&lt;br /&gt;Clones a pluggable database (PDB) to a different database from the source PDB. The cloned PDB will be started upon completion of the clone operation. The source PDB must be in the `READ_WRITE` openMode when performing the clone.&lt;br /&gt;For Exadata Cloud@Customer instances, the source pluggable database (PDB) must be on the same Exadata Infrastructure as the target container database (CDB) to create a remote clone.&lt;br /&gt;

```sql
EXEC oci.database.pluggable_databases.remote_clone_pluggable_database 
@pluggableDatabaseId='{{ pluggableDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"clonedPdbName": "{{ clonedPdbName }}", 
"pdbAdminPassword": "{{ pdbAdminPassword }}", 
"shouldPdbAdminAccountBeLocked": {{ shouldPdbAdminAccountBeLocked }}, 
"targetTdeWalletPassword": "{{ targetTdeWalletPassword }}", 
"sourceContainerDbAdminPassword": "{{ sourceContainerDbAdminPassword }}", 
"targetContainerDatabaseId": "{{ targetContainerDatabaseId }}"
}'
;
```
</TabItem>
<TabItem value="start_pluggable_database">

Starts a stopped pluggable database. The `openMode` value of the pluggable database will be `READ_WRITE` upon completion.

```sql
EXEC oci.database.pluggable_databases.start_pluggable_database 
@pluggableDatabaseId='{{ pluggableDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="stop_pluggable_database">

Stops a pluggable database. The `openMode` value of the pluggable database will be `MOUNTED` upon completion.

```sql
EXEC oci.database.pluggable_databases.stop_pluggable_database 
@pluggableDatabaseId='{{ pluggableDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
</Tabs>
