--- 
title: external_pluggable_databases
hide_title: false
hide_table_of_contents: false
keywords:
  - external_pluggable_databases
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

Creates, updates, deletes, gets or lists an <code>external_pluggable_databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="external_pluggable_databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.external_pluggable_databases" /></td></tr>
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

The &#91;external pluggable database&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails).&lt;br /&gt;resource.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure external database resource. </td>
</tr>
<tr>
    <td><CopyableCode code="characterSet" /></td>
    <td><code>string</code></td>
    <td>The character set of the external database.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseConfiguration" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database configuration (RAC, SINGLE_INSTANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="databaseEdition" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database Edition that applies to all the databases on the DB system. Exadata DB systems and 2-node RAC DB systems require ENTERPRISE_EDITION_EXTREME_PERFORMANCE.  (STANDARD_EDITION, ENTERPRISE_EDITION, ENTERPRISE_EDITION_HIGH_PERFORMANCE, ENTERPRISE_EDITION_EXTREME_PERFORMANCE, ENTERPRISE_EDITION_DEVELOPER)</td>
</tr>
<tr>
    <td><CopyableCode code="databaseManagementConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of the Database Management service.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseVersion" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database version.</td>
</tr>
<tr>
    <td><CopyableCode code="dbId" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database ID, which identifies an Oracle Database located outside of Oracle Cloud. </td>
</tr>
<tr>
    <td><CopyableCode code="dbPacks" /></td>
    <td><code>string</code></td>
    <td>The database packs licensed for the external Oracle Database.</td>
</tr>
<tr>
    <td><CopyableCode code="dbUniqueName" /></td>
    <td><code>string</code></td>
    <td>The `DB_UNIQUE_NAME` of the external database.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the external database. The name does not have to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="externalContainerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the &#91;external container database&#93;(#/en/database/latest/datatypes/CreateExternalContainerDatabaseDetails) that contains the specified &#91;external pluggable database&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails) resource. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Oracle Cloud Infrastructure external database resource. (PROVISIONING, NOT_CONNECTED, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="ncharacterSet" /></td>
    <td><code>string</code></td>
    <td>The national character of the external database.</td>
</tr>
<tr>
    <td><CopyableCode code="operationsInsightsConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of Operations Insights for the external database</td>
</tr>
<tr>
    <td><CopyableCode code="sourceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the the non-container database that was converted to a pluggable database to create this resource. </td>
</tr>
<tr>
    <td><CopyableCode code="stackMonitoringConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of Stack Monitoring for the external database.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the database was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the external database. It is a time zone offset (a character type in the format '&#91;+|-&#93;TZH:TZM') or a time zone region name, depending on how the time zone value was specified when the database was created / last altered. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An Oracle Cloud Infrastructure resource that allows you to manage an external pluggable database.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure external database resource. </td>
</tr>
<tr>
    <td><CopyableCode code="characterSet" /></td>
    <td><code>string</code></td>
    <td>The character set of the external database.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseConfiguration" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database configuration (RAC, SINGLE_INSTANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="databaseEdition" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database Edition that applies to all the databases on the DB system. Exadata DB systems and 2-node RAC DB systems require ENTERPRISE_EDITION_EXTREME_PERFORMANCE.  (STANDARD_EDITION, ENTERPRISE_EDITION, ENTERPRISE_EDITION_HIGH_PERFORMANCE, ENTERPRISE_EDITION_EXTREME_PERFORMANCE, ENTERPRISE_EDITION_DEVELOPER)</td>
</tr>
<tr>
    <td><CopyableCode code="databaseManagementConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of the Database Management service.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseVersion" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database version.</td>
</tr>
<tr>
    <td><CopyableCode code="dbId" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database ID, which identifies an Oracle Database located outside of Oracle Cloud. </td>
</tr>
<tr>
    <td><CopyableCode code="dbPacks" /></td>
    <td><code>string</code></td>
    <td>The database packs licensed for the external Oracle Database.</td>
</tr>
<tr>
    <td><CopyableCode code="dbUniqueName" /></td>
    <td><code>string</code></td>
    <td>The `DB_UNIQUE_NAME` of the external database.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the external database. The name does not have to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="externalContainerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the &#91;external container database&#93;(#/en/database/latest/datatypes/CreateExternalContainerDatabaseDetails) that contains the specified &#91;external pluggable database&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails) resource. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Oracle Cloud Infrastructure external database resource. (PROVISIONING, NOT_CONNECTED, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="ncharacterSet" /></td>
    <td><code>string</code></td>
    <td>The national character of the external database.</td>
</tr>
<tr>
    <td><CopyableCode code="operationsInsightsConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of Operations Insights for the external database</td>
</tr>
<tr>
    <td><CopyableCode code="sourceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the the non-container database that was converted to a pluggable database to create this resource. </td>
</tr>
<tr>
    <td><CopyableCode code="stackMonitoringConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of Stack Monitoring for the external database.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the database was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the external database. It is a time zone offset (a character type in the format '&#91;+|-&#93;TZH:TZM') or a time zone region name, depending on how the time zone value was specified when the database was created / last altered. </td>
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
    <td><a href="#parameter-externalPluggableDatabaseId"><code>externalPluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about a specific&lt;br /&gt;&#91;external pluggable database&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails) resource.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-externalContainerDatabaseId"><code>externalContainerDatabaseId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td>Gets a list of the &#91;ExternalPluggableDatabase&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails)&lt;br /&gt;resources in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-externalContainerDatabaseId"><code>externalContainerDatabaseId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Registers a new &#91;ExternalPluggableDatabase&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails)&lt;br /&gt;resource.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-externalPluggableDatabaseId"><code>externalPluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the properties of an&lt;br /&gt;&#91;external pluggable database&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails) resource,&lt;br /&gt;such as the display name.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-externalPluggableDatabaseId"><code>externalPluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the &#91;external pluggable database&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails).&lt;br /&gt;resource.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-externalPluggableDatabaseId"><code>externalPluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Move the &#91;external pluggable database&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails) and&lt;br /&gt;its dependent resources to the specified compartment.&lt;br /&gt;For more information about moving external pluggable databases, see&lt;br /&gt;&#91;Moving Database Resources to a Different Compartment&#93;(/Content/Database/Concepts/databaseoverview.htm#moveRes).&lt;br /&gt;</td>
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
<tr id="parameter-externalPluggableDatabaseId">
    <td><CopyableCode code="externalPluggableDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The ExternalPluggableDatabaseId &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the entire display name given. The match is not case sensitive.</td>
</tr>
<tr id="parameter-externalContainerDatabaseId">
    <td><CopyableCode code="externalContainerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The ExternalContainerDatabase &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the specified lifecycle state.</td>
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
    <td>The field to sort by. You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive. </td>
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

Gets information about a specific&lt;br /&gt;&#91;external pluggable database&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails) resource.&lt;br /&gt;

```sql
SELECT
id,
characterSet,
compartmentId,
databaseConfiguration,
databaseEdition,
databaseManagementConfig,
databaseVersion,
dbId,
dbPacks,
dbUniqueName,
definedTags,
displayName,
externalContainerDatabaseId,
freeformTags,
lifecycleDetails,
lifecycleState,
ncharacterSet,
operationsInsightsConfig,
sourceId,
stackMonitoringConfig,
systemTags,
timeCreated,
timeZone
FROM oci.database.external_pluggable_databases
WHERE externalPluggableDatabaseId = '{{ externalPluggableDatabaseId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of the &#91;ExternalPluggableDatabase&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails)&lt;br /&gt;resources in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
characterSet,
compartmentId,
databaseConfiguration,
databaseEdition,
databaseManagementConfig,
databaseVersion,
dbId,
dbPacks,
dbUniqueName,
definedTags,
displayName,
externalContainerDatabaseId,
freeformTags,
lifecycleDetails,
lifecycleState,
ncharacterSet,
operationsInsightsConfig,
sourceId,
stackMonitoringConfig,
systemTags,
timeCreated,
timeZone
FROM oci.database.external_pluggable_databases
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND externalContainerDatabaseId = '{{ externalContainerDatabaseId }}'
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

Registers a new &#91;ExternalPluggableDatabase&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails)&lt;br /&gt;resource.&lt;br /&gt;

```sql
INSERT INTO oci.database.external_pluggable_databases (
compartmentId,
definedTags,
displayName,
freeformTags,
externalContainerDatabaseId,
sourceId,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ freeformTags }}',
'{{ externalContainerDatabaseId }}' /* required */,
'{{ sourceId }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
characterSet,
compartmentId,
databaseConfiguration,
databaseEdition,
databaseManagementConfig,
databaseVersion,
dbId,
dbPacks,
dbUniqueName,
definedTags,
displayName,
externalContainerDatabaseId,
freeformTags,
lifecycleDetails,
lifecycleState,
ncharacterSet,
operationsInsightsConfig,
sourceId,
stackMonitoringConfig,
systemTags,
timeCreated,
timeZone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: external_pluggable_databases
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the external_pluggable_databases resource.
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
        The user-friendly name for the external database. The name does not have to be unique.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: externalContainerDatabaseId
      value: "{{ externalContainerDatabaseId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the
        [external container database](#/en/database/latest/datatypes/CreateExternalContainerDatabaseDetails) that contains
        the specified [external pluggable database](#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails) resource.
    - name: sourceId
      value: "{{ sourceId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the the non-container database that was converted
        to a pluggable database to create this resource.
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

Updates the properties of an&lt;br /&gt;&#91;external pluggable database&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails) resource,&lt;br /&gt;such as the display name.&lt;br /&gt;

```sql
UPDATE oci.database.external_pluggable_databases
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}'
WHERE 
externalPluggableDatabaseId = '{{ externalPluggableDatabaseId }}' --required
AND region = '{{ region }}' --required
AND displayName = '{{ displayName }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
characterSet,
compartmentId,
databaseConfiguration,
databaseEdition,
databaseManagementConfig,
databaseVersion,
dbId,
dbPacks,
dbUniqueName,
definedTags,
displayName,
externalContainerDatabaseId,
freeformTags,
lifecycleDetails,
lifecycleState,
ncharacterSet,
operationsInsightsConfig,
sourceId,
stackMonitoringConfig,
systemTags,
timeCreated,
timeZone;
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

Deletes the &#91;external pluggable database&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails).&lt;br /&gt;resource.&lt;br /&gt;

```sql
DELETE FROM oci.database.external_pluggable_databases
WHERE externalPluggableDatabaseId = '{{ externalPluggableDatabaseId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
AND if-match = '{{ if-match }}'
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

Move the &#91;external pluggable database&#93;(#/en/database/latest/datatypes/CreateExternalPluggableDatabaseDetails) and&lt;br /&gt;its dependent resources to the specified compartment.&lt;br /&gt;For more information about moving external pluggable databases, see&lt;br /&gt;&#91;Moving Database Resources to a Different Compartment&#93;(/Content/Database/Concepts/databaseoverview.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.database.external_pluggable_databases.change_compartment 
@externalPluggableDatabaseId='{{ externalPluggableDatabaseId }}' --required, 
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
