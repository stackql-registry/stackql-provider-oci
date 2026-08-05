--- 
title: databases
hide_title: false
hide_table_of_contents: false
keywords:
  - databases
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

Creates, updates, deletes, gets or lists a <code>databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.databases" /></td></tr>
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

The database information was retrieved.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the database.</td>
</tr>
<tr>
    <td><CopyableCode code="characterSet" /></td>
    <td><code>string</code></td>
    <td>The character set for the database.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionStrings" /></td>
    <td><code>object</code></td>
    <td>Connection strings to connect to an Oracle Database. </td>
</tr>
<tr>
    <td><CopyableCode code="dataGuardGroup" /></td>
    <td><code>object</code></td>
    <td>Details of Data Guard setup that the given database is part of.  Also includes information about databases part of this Data Guard group and properties for their Data Guard configuration. </td>
</tr>
<tr>
    <td><CopyableCode code="databaseManagementConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of the Database Management service.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseSoftwareImageId" /></td>
    <td><code>string</code></td>
    <td>The database software image &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm)</td>
</tr>
<tr>
    <td><CopyableCode code="dbBackupConfig" /></td>
    <td><code>object</code></td>
    <td>Backup Options To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="dbHomeId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Database Home.</td>
</tr>
<tr>
    <td><CopyableCode code="dbName" /></td>
    <td><code>string</code></td>
    <td>The database name.</td>
</tr>
<tr>
    <td><CopyableCode code="dbSystemId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="dbUniqueName" /></td>
    <td><code>string</code></td>
    <td>A system-generated name for the database to ensure uniqueness within an Oracle Data Guard group (a primary database and its standby databases). The unique name cannot be changed. </td>
</tr>
<tr>
    <td><CopyableCode code="dbWorkload" /></td>
    <td><code>string</code></td>
    <td>**Deprecated.** The dbWorkload field has been deprecated for Exadata Database Service on Dedicated Infrastructure, Exadata Database Service on Cloud@Customer, and Base Database Service. Support for this attribute will end in November 2023. You may choose to update your custom scripts to exclude the dbWorkload attribute. After November 2023 if you pass a value to the dbWorkload attribute, it will be ignored.  The database workload type. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKeyLocationDetails" /></td>
    <td><code>object</code></td>
    <td>Types of providers supported for managing database encryption keys</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="homeType" /></td>
    <td><code>string</code></td>
    <td>Represents database will be under oracle managed home or customer managed home  (ORACLE_MANAGED, CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="isCdb" /></td>
    <td><code>boolean</code></td>
    <td>True if the database is a container database.</td>
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
    <td><CopyableCode code="lastBackupDurationInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The duration when the latest database backup created.</td>
</tr>
<tr>
    <td><CopyableCode code="lastBackupTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the latest database backup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="lastFailedBackupTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the latest database backup failed.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the database. (PROVISIONING, AVAILABLE, UPDATING, BACKUP_IN_PROGRESS, UPGRADING, CONVERTING, TERMINATING, TERMINATED, RESTORE_FAILED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="managedSoftwareUpdateDetails" /></td>
    <td><code>object</code></td>
    <td>The database registered for Oracle Managed Database Software Updates. </td>
</tr>
<tr>
    <td><CopyableCode code="ncharacterSet" /></td>
    <td><code>string</code></td>
    <td>The national character set for the database.</td>
</tr>
<tr>
    <td><CopyableCode code="pdbName" /></td>
    <td><code>string</code></td>
    <td>The name of the pluggable database. The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters. Special characters are not permitted. Pluggable database should not be same as database name.</td>
</tr>
<tr>
    <td><CopyableCode code="sidPrefix" /></td>
    <td><code>string</code></td>
    <td>Specifies a prefix for the `Oracle SID` of the database to be created. </td>
</tr>
<tr>
    <td><CopyableCode code="sourceDatabasePointInTimeRecoveryTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Point in time recovery timeStamp of the source database at which cloned database system is cloned from the source database system, as described in &#91;RFC 3339&#93;(https:​//tools.ietf.org/rfc/rfc3339)</td>
</tr>
<tr>
    <td><CopyableCode code="storageSizeDetails" /></td>
    <td><code>object</code></td>
    <td>The database storage size details. This database option is supported for the Exadata VM cluster on Exascale Infrastructure. </td>
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
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure &#91;vault&#93;(/Content/KeyManagement/Concepts/keyoverview.htm#concepts). This parameter and `secretId` are required for Customer Managed Keys.</td>
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

An Oracle Database on a bare metal or virtual machine DB system. For more information, see &#91;Bare Metal and Virtual Machine DB Systems&#93;(/Content/Database/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the database.</td>
</tr>
<tr>
    <td><CopyableCode code="characterSet" /></td>
    <td><code>string</code></td>
    <td>The character set for the database.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionStrings" /></td>
    <td><code>object</code></td>
    <td>Connection strings to connect to an Oracle Database. </td>
</tr>
<tr>
    <td><CopyableCode code="dataGuardGroup" /></td>
    <td><code>object</code></td>
    <td>Details of Data Guard setup that the given database is part of.  Also includes information about databases part of this Data Guard group and properties for their Data Guard configuration. </td>
</tr>
<tr>
    <td><CopyableCode code="databaseManagementConfig" /></td>
    <td><code>object</code></td>
    <td>The configuration of the Database Management service.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseSoftwareImageId" /></td>
    <td><code>string</code></td>
    <td>The database software image &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm)</td>
</tr>
<tr>
    <td><CopyableCode code="dbBackupConfig" /></td>
    <td><code>object</code></td>
    <td>Backup Options To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="dbHomeId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Database Home.</td>
</tr>
<tr>
    <td><CopyableCode code="dbName" /></td>
    <td><code>string</code></td>
    <td>The database name.</td>
</tr>
<tr>
    <td><CopyableCode code="dbSystemId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="dbUniqueName" /></td>
    <td><code>string</code></td>
    <td>A system-generated name for the database to ensure uniqueness within an Oracle Data Guard group (a primary database and its standby databases). The unique name cannot be changed. </td>
</tr>
<tr>
    <td><CopyableCode code="dbWorkload" /></td>
    <td><code>string</code></td>
    <td>**Deprecated.** The dbWorkload field has been deprecated for Exadata Database Service on Dedicated Infrastructure, Exadata Database Service on Cloud@Customer, and Base Database Service. Support for this attribute will end in November 2023. You may choose to update your custom scripts to exclude the dbWorkload attribute. After November 2023 if you pass a value to the dbWorkload attribute, it will be ignored.  The database workload type. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKeyLocationDetails" /></td>
    <td><code>object</code></td>
    <td>Types of providers supported for managing database encryption keys</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="homeType" /></td>
    <td><code>string</code></td>
    <td>Represents database will be under oracle managed home or customer managed home  (ORACLE_MANAGED, CUSTOMER_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="isCdb" /></td>
    <td><code>boolean</code></td>
    <td>True if the database is a container database.</td>
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
    <td><CopyableCode code="lastBackupDurationInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The duration when the latest database backup created.</td>
</tr>
<tr>
    <td><CopyableCode code="lastBackupTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the latest database backup was created.</td>
</tr>
<tr>
    <td><CopyableCode code="lastFailedBackupTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the latest database backup failed.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the database. (PROVISIONING, AVAILABLE, UPDATING, BACKUP_IN_PROGRESS, UPGRADING, CONVERTING, TERMINATING, TERMINATED, RESTORE_FAILED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="managedSoftwareUpdateDetails" /></td>
    <td><code>object</code></td>
    <td>The database registered for Oracle Managed Database Software Updates. </td>
</tr>
<tr>
    <td><CopyableCode code="ncharacterSet" /></td>
    <td><code>string</code></td>
    <td>The national character set for the database.</td>
</tr>
<tr>
    <td><CopyableCode code="pdbName" /></td>
    <td><code>string</code></td>
    <td>The name of the pluggable database. The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters. Special characters are not permitted. Pluggable database should not be same as database name.</td>
</tr>
<tr>
    <td><CopyableCode code="sidPrefix" /></td>
    <td><code>string</code></td>
    <td>Specifies a prefix for the `Oracle SID` of the database to be created. </td>
</tr>
<tr>
    <td><CopyableCode code="sourceDatabasePointInTimeRecoveryTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Point in time recovery timeStamp of the source database at which cloned database system is cloned from the source database system, as described in &#91;RFC 3339&#93;(https:​//tools.ietf.org/rfc/rfc3339)</td>
</tr>
<tr>
    <td><CopyableCode code="storageSizeDetails" /></td>
    <td><code>object</code></td>
    <td>The database storage size details. This database option is supported for the Exadata VM cluster on Exascale Infrastructure. </td>
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
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure &#91;vault&#93;(/Content/KeyManagement/Concepts/keyoverview.htm#concepts). This parameter and `secretId` are required for Customer Managed Keys.</td>
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
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified database.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-dbHomeId"><code>dbHomeId</code></a>, <a href="#parameter-systemId"><code>systemId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-dbName"><code>dbName</code></a></td>
    <td>Gets a list of the databases in the specified Database Home.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-source"><code>source</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a new database in the specified Database Home. If the database version is provided, it must match the version of the Database Home. Applies to Exadata and Exadata Cloud@Customer systems.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Update the specified database based on the request parameters provided.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-performFinalBackup"><code>performFinalBackup</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the specified database. Applies only to Exadata systems.&lt;br /&gt;&lt;br /&gt;The data in this database is local to the Exadata system and will be lost when the database is deleted. Oracle recommends that you back up any data in the Exadata system prior to deleting it. You can use the `performFinalBackup` parameter to have the Exadata system database backed up before it is deleted.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_encryption_key_location"><CopyableCode code="change_encryption_key_location" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-providerType"><code>providerType</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Update the encryption key management location for the database</td>
</tr>
<tr>
    <td><a href="#convert_to_pdb"><CopyableCode code="convert_to_pdb" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Converts a non-container database to a pluggable database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#disable_database_management"><CopyableCode code="disable_database_management" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Disables the Database Management service for the database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#enable_database_management"><CopyableCode code="enable_database_management" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-credentialDetails"><code>credentialDetails</code></a>, <a href="#parameter-privateEndPointId"><code>privateEndPointId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Enables the Database Management service for an Oracle Database located in Oracle Cloud Infrastructure. This service allows the database to access tools including Metrics and Performance hub. Database Management is enabled at the container database (CDB) level.</td>
</tr>
<tr>
    <td><a href="#migrate_vault_key"><CopyableCode code="migrate_vault_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-kmsKeyId"><code>kmsKeyId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Changes encryption key management from customer-managed, using the &#91;Vault service&#93;(/iaas/Content/KeyManagement/Concepts/keyoverview.htm), to Oracle-managed.</td>
</tr>
<tr>
    <td><a href="#modify_database_management"><CopyableCode code="modify_database_management" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates one or more attributes of the Database Management service for the database.</td>
</tr>
<tr>
    <td><a href="#reschedule_managed_db_software_update"><CopyableCode code="reschedule_managed_db_software_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Reschedule the Managed Database Software Update&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#restore_database"><CopyableCode code="restore_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Restore a Database based on the request parameters you provide.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#rotate_vault_key"><CopyableCode code="rotate_vault_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a new version of an existing &#91;Vault service&#93;(/iaas/Content/KeyManagement/Concepts/keyoverview.htm) key.</td>
</tr>
<tr>
    <td><a href="#upgrade_database"><CopyableCode code="upgrade_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Upgrades the specified Oracle Database instance.&lt;br /&gt;</td>
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
<tr id="parameter-dbHomeId">
    <td><CopyableCode code="dbHomeId" /></td>
    <td><code>string</code></td>
    <td>A Database Home &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-dbName">
    <td><CopyableCode code="dbName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the entire database name given. The match is not case sensitive.</td>
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
<tr id="parameter-performFinalBackup">
    <td><CopyableCode code="performFinalBackup" /></td>
    <td><code>boolean</code></td>
    <td>Whether to perform a final backup of the database or not. Default is false.  If you previously used RMAN or dbcli to configure backups and then you switch to using the Console or the API for backups, a new backup configuration is created and associated with your database. This means that you can no longer rely on your previously configured unmanaged backups to work.  This parameter is used in multiple APIs. Refer to the API description for details on how the operation uses it. </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is descending.  Default order for DBNAME is ascending. The DBNAME sort order is case sensitive.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`).</td>
</tr>
<tr id="parameter-systemId">
    <td><CopyableCode code="systemId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata DB system that you want to filter the database results by. Applies only to Exadata DB systems.</td>
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

Gets information about the specified database.

```sql
SELECT
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
vmClusterId
FROM oci.database.databases
WHERE databaseId = '{{ databaseId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Gets a list of the databases in the specified Database Home.&lt;br /&gt;

```sql
SELECT
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
vmClusterId
FROM oci.database.databases
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND dbHomeId = '{{ dbHomeId }}'
AND systemId = '{{ systemId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND dbName = '{{ dbName }}'
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

Creates a new database in the specified Database Home. If the database version is provided, it must match the version of the Database Home. Applies to Exadata and Exadata Cloud@Customer systems.&lt;br /&gt;

```sql
INSERT INTO oci.database.databases (
dbHomeId,
dbVersion,
kmsKeyId,
kmsKeyVersionId,
source,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ dbHomeId }}',
'{{ dbVersion }}',
'{{ kmsKeyId }}',
'{{ kmsKeyVersionId }}',
'{{ source }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
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
vmClusterId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: databases
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the databases resource.
    - name: dbHomeId
      value: "{{ dbHomeId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the Database Home.
    - name: dbVersion
      value: "{{ dbVersion }}"
      description: |
        A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation.
        This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.
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
        The source of the database:
        Use \`NONE\` for creating a new database.
        Use \`DB_BACKUP\` for creating a new database by restoring from a backup.
        Use \`DATAGUARD\` for creating a new STANDBY database for a Data Guard setup..
        The default is \`NONE\`.
      valid_values: ['NONE', 'DB_BACKUP', 'DATABASE', 'DATAGUARD']
      default: NONE
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

Update the specified database based on the request parameters provided.&lt;br /&gt;

```sql
UPDATE oci.database.databases
SET 
dbBackupConfig = '{{ dbBackupConfig }}',
dbHomeId = '{{ dbHomeId }}',
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}',
managedSoftwareUpdateDetails = '{{ managedSoftwareUpdateDetails }}',
newAdminPassword = '{{ newAdminPassword }}',
newTdeWalletPassword = '{{ newTdeWalletPassword }}',
oldTdeWalletPassword = '{{ oldTdeWalletPassword }}',
storageSizeDetails = '{{ storageSizeDetails }}'
WHERE 
databaseId = '{{ databaseId }}' --required
AND region = '{{ region }}' --required
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


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the specified database. Applies only to Exadata systems.&lt;br /&gt;&lt;br /&gt;The data in this database is local to the Exadata system and will be lost when the database is deleted. Oracle recommends that you back up any data in the Exadata system prior to deleting it. You can use the `performFinalBackup` parameter to have the Exadata system database backed up before it is deleted.&lt;br /&gt;

```sql
DELETE FROM oci.database.databases
WHERE databaseId = '{{ databaseId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND performFinalBackup = '{{ performFinalBackup }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_encryption_key_location"
    values={[
        { label: 'change_encryption_key_location', value: 'change_encryption_key_location' },
        { label: 'convert_to_pdb', value: 'convert_to_pdb' },
        { label: 'disable_database_management', value: 'disable_database_management' },
        { label: 'enable_database_management', value: 'enable_database_management' },
        { label: 'migrate_vault_key', value: 'migrate_vault_key' },
        { label: 'modify_database_management', value: 'modify_database_management' },
        { label: 'reschedule_managed_db_software_update', value: 'reschedule_managed_db_software_update' },
        { label: 'restore_database', value: 'restore_database' },
        { label: 'rotate_vault_key', value: 'rotate_vault_key' },
        { label: 'upgrade_database', value: 'upgrade_database' }
    ]}
>
<TabItem value="change_encryption_key_location">

Update the encryption key management location for the database

```sql
EXEC oci.database.databases.change_encryption_key_location 
@databaseId='{{ databaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"providerType": "{{ providerType }}"
}'
;
```
</TabItem>
<TabItem value="convert_to_pdb">

Converts a non-container database to a pluggable database.&lt;br /&gt;

```sql
EXEC oci.database.databases.convert_to_pdb 
@databaseId='{{ databaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"action": "{{ action }}", 
"convertToPdbTargetDetails": "{{ convertToPdbTargetDetails }}"
}'
;
```
</TabItem>
<TabItem value="disable_database_management">

Disables the Database Management service for the database.&lt;br /&gt;

```sql
EXEC oci.database.databases.disable_database_management 
@databaseId='{{ databaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="enable_database_management">

Enables the Database Management service for an Oracle Database located in Oracle Cloud Infrastructure. This service allows the database to access tools including Metrics and Performance hub. Database Management is enabled at the container database (CDB) level.

```sql
EXEC oci.database.databases.enable_database_management 
@databaseId='{{ databaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"credentialDetails": "{{ credentialDetails }}", 
"managementType": "{{ managementType }}", 
"privateEndPointId": "{{ privateEndPointId }}", 
"serviceName": "{{ serviceName }}"
}'
;
```
</TabItem>
<TabItem value="migrate_vault_key">

Changes encryption key management from customer-managed, using the [Vault service](/iaas/Content/KeyManagement/Concepts/keyoverview.htm), to Oracle-managed.

```sql
EXEC oci.database.databases.migrate_vault_key 
@databaseId='{{ databaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"adminPassword": "{{ adminPassword }}", 
"kmsKeyId": "{{ kmsKeyId }}", 
"kmsKeyVersionId": "{{ kmsKeyVersionId }}", 
"tdeWalletPassword": "{{ tdeWalletPassword }}", 
"vaultId": "{{ vaultId }}"
}'
;
```
</TabItem>
<TabItem value="modify_database_management">

Updates one or more attributes of the Database Management service for the database.

```sql
EXEC oci.database.databases.modify_database_management 
@databaseId='{{ databaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"credentialDetails": "{{ credentialDetails }}", 
"managementType": "{{ managementType }}", 
"privateEndPointId": "{{ privateEndPointId }}", 
"serviceName": "{{ serviceName }}"
}'
;
```
</TabItem>
<TabItem value="reschedule_managed_db_software_update">

Reschedule the Managed Database Software Update&lt;br /&gt;

```sql
EXEC oci.database.databases.reschedule_managed_db_software_update 
@databaseId='{{ databaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="restore_database">

Restore a Database based on the request parameters you provide.&lt;br /&gt;

```sql
EXEC oci.database.databases.restore_database 
@databaseId='{{ databaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}' 
@@json=
'{
"databaseSCN": "{{ databaseSCN }}", 
"latest": {{ latest }}, 
"pluggableDatabaseName": "{{ pluggableDatabaseName }}", 
"timestamp": "{{ timestamp }}"
}'
;
```
</TabItem>
<TabItem value="rotate_vault_key">

Creates a new version of an existing [Vault service](/iaas/Content/KeyManagement/Concepts/keyoverview.htm) key.

```sql
EXEC oci.database.databases.rotate_vault_key 
@databaseId='{{ databaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="upgrade_database">

Upgrades the specified Oracle Database instance.&lt;br /&gt;

```sql
EXEC oci.database.databases.upgrade_database 
@databaseId='{{ databaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"action": "{{ action }}", 
"databaseUpgradeSourceDetails": "{{ databaseUpgradeSourceDetails }}"
}'
;
```
</TabItem>
</Tabs>
