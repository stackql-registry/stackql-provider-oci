--- 
title: autonomous_container_databases
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_container_databases
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

Creates, updates, deletes, gets or lists an <code>autonomous_container_databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_container_databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.autonomous_container_databases" /></td></tr>
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

The Autonomous Container Database.

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
    <td>The OCID of the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedBackupConfigurationDetails" /></td>
    <td><code>array</code></td>
    <td>A backup config object holds information about preferred backup destinations only. This object holds information about the associated backup destinations, such as secondary backup destinations created for local backups or remote replicated backups.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>**No longer used.** For Autonomous AI Database on dedicated Exadata infrastructure, the container database is created within a specified `cloudAutonomousVmCluster`. </td>
</tr>
<tr>
    <td><CopyableCode code="autonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="availableCpus" /></td>
    <td><code>number (float)</code></td>
    <td>Sum of CPUs available on the Autonomous VM Cluster + Sum of reclaimable CPUs available in the Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="backupConfig" /></td>
    <td><code>object</code></td>
    <td>Backup options for the Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="backupDestinationPropertiesList" /></td>
    <td><code>array</code></td>
    <td>This list describes the backup destination properties associated with the Autonomous Container Database (ACD) 's preferred backup destination. The object at a given index is associated with the destination present at the same index in the backup destination details list of the ACD Backup Configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudAutonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the cloud Autonomous Exadata VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Autonomous Container Database. For Autonomous AI Database on Dedicated Exadata Infrastructure, the CPU type (ECPUs or OCPUs) is determined by the parent Autonomous Exadata VM Cluster's compute model. ECPU compute model is the recommended model and OCPU compute model is legacy. See &#91;Compute Models in Autonomous AI Database on Dedicated Exadata Infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbak) for more details.  (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="customerContacts" /></td>
    <td><code>array</code></td>
    <td>Customer Contacts. Setting this to an empty list removes all customer contacts. </td>
</tr>
<tr>
    <td><CopyableCode code="dataguard" /></td>
    <td><code>object</code></td>
    <td>The properties that define Autonomous Container Databases Dataguard. </td>
</tr>
<tr>
    <td><CopyableCode code="dataguardGroupMembers" /></td>
    <td><code>array</code></td>
    <td>Array of Dg associations.</td>
</tr>
<tr>
    <td><CopyableCode code="dbName" /></td>
    <td><code>string</code></td>
    <td>The Database name for the Autonomous Container Database. The name must be unique within the Cloud Autonomous VM Cluster, starting with an alphabetic character, followed by 1 to 7 alphanumeric characters.</td>
</tr>
<tr>
    <td><CopyableCode code="dbSplitThreshold" /></td>
    <td><code>integer</code></td>
    <td>The CPU value beyond which an Autonomous AI Database will be opened across multiple nodes. The default value of this attribute is 16 for OCPUs and 64 for ECPUs.</td>
</tr>
<tr>
    <td><CopyableCode code="dbUniqueName" /></td>
    <td><code>string</code></td>
    <td>**Deprecated.** The `DB_UNIQUE_NAME` value is set by Oracle Cloud Infrastructure.  Do not specify a value for this parameter. Specifying a value for this field will cause Terraform operations to fail. </td>
</tr>
<tr>
    <td><CopyableCode code="dbVersion" /></td>
    <td><code>string</code></td>
    <td>Oracle AI Database version of the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-provided name for the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="distributionAffinity" /></td>
    <td><code>string</code></td>
    <td>Determines whether an Autonomous AI Database must be opened across the maximum number of nodes or the least number of nodes. By default, Minimum nodes is selected. (MINIMUM_DISTRIBUTION, MAXIMUM_DISTRIBUTION)</td>
</tr>
<tr>
    <td><CopyableCode code="dstFileVersion" /></td>
    <td><code>string</code></td>
    <td>DST Time-Zone File version of the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="infrastructureType" /></td>
    <td><code>string</code></td>
    <td>The infrastructure type this resource belongs to. (CLOUD, CLOUD_AT_CUSTOMER)</td>
</tr>
<tr>
    <td><CopyableCode code="isDataGuardEnabled" /></td>
    <td><code>boolean</code></td>
    <td>**Deprecated.** Indicates whether the Autonomous AI Database has local (in-region) Data Guard enabled. Not applicable to cross-region Autonomous Data Guard associations, or to Autonomous AI Databases using dedicated Exadata infrastructure or Exadata Cloud@Customer infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="isDstFileUpdateEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if an automatic DST Time Zone file update is enabled for the Autonomous Container Database. If enabled along with Release Update, patching will be done in a Non-Rolling manner.</td>
</tr>
<tr>
    <td><CopyableCode code="isMultipleStandby" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if it is multiple standby Autonomous Dataguard </td>
</tr>
<tr>
    <td><CopyableCode code="keyHistoryEntry" /></td>
    <td><code>array</code></td>
    <td>Key History Entry.</td>
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
    <td><CopyableCode code="largestProvisionableAutonomousDatabaseInCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The largest Autonomous AI Database (CPU) that can be created in a new Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="lastMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Autonomous Container Database. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, BACKUP_IN_PROGRESS, RESTORING, RESTORE_FAILED, RESTARTING, MAINTENANCE_IN_PROGRESS, ROLE_CHANGE_IN_PROGRESS, ENABLING_AUTONOMOUS_DATA_GUARD, UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="listOneOffPatches" /></td>
    <td><code>array</code></td>
    <td>List of One-Off patches that has been successfully applied to Autonomous Container Database</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window. </td>
</tr>
<tr>
    <td><CopyableCode code="memoryPerOracleComputeUnitInGBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory (in GBs) enabled per ECPU or OCPU in the Autonomous VM Cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="netServicesArchitecture" /></td>
    <td><code>string</code></td>
    <td>Enabling SHARED server architecture enables a database server to allow many client processes to share very few server processes, thereby increasing the number of supported users. (DEDICATED, SHARED, DRCP) (default: DEDICATED)</td>
</tr>
<tr>
    <td><CopyableCode code="nextMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the next maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="okvEndPointGroupName" /></td>
    <td><code>string</code></td>
    <td>The OKV End Point Group name for the Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="patchId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last patch applied on the system.</td>
</tr>
<tr>
    <td><CopyableCode code="patchModel" /></td>
    <td><code>string</code></td>
    <td>Database patch model preference. (RELEASE_UPDATES, RELEASE_UPDATE_REVISIONS)</td>
</tr>
<tr>
    <td><CopyableCode code="provisionableCpus" /></td>
    <td><code>array</code></td>
    <td>An array of CPU values that can be used to successfully provision a single Autonomous AI Database. </td>
</tr>
<tr>
    <td><CopyableCode code="provisionedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs provisioned in an Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="reclaimableCpus" /></td>
    <td><code>number (float)</code></td>
    <td>CPUs that continue to be included in the count of CPUs available to the Autonomous Container Database even after one of its Autonomous AI Database is terminated or scaled down. You can release them to the available CPUs at its parent Autonomous VM Cluster level by restarting the Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="recoveryApplianceDetails" /></td>
    <td><code>object</code></td>
    <td>Information about the recovery appliance configuration associated with the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="reservedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs reserved in an Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The Data Guard role of the Autonomous Container Database or Autonomous AI Database, if Autonomous Data Guard is enabled.  (PRIMARY, STANDBY, DISABLED_STANDBY, BACKUP_COPY, SNAPSHOT_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceLevelAgreementType" /></td>
    <td><code>string</code></td>
    <td>The service level agreement type of the container database. The default is STANDARD. (STANDARD, MISSION_CRITICAL, AUTONOMOUS_DATAGUARD)</td>
</tr>
<tr>
    <td><CopyableCode code="standbyMaintenanceBufferInDays" /></td>
    <td><code>integer</code></td>
    <td>The scheduling detail for the quarterly maintenance window of the standby Autonomous Container Database. This value represents the number of days before scheduled maintenance of the primary database. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Autonomous Container Database was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfLastBackup" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of last successful backup. Here NULL value represents either there are no successful backups or backups are not configured for this Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="timeSnapshotStandbyRevert" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Autonomous Container Database will be reverted to Standby from Snapshot Standby.</td>
</tr>
<tr>
    <td><CopyableCode code="totalCpus" /></td>
    <td><code>integer</code></td>
    <td>The number of CPUs allocated to the Autonomous VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure &#91;vault&#93;(/Content/KeyManagement/Concepts/keyoverview.htm#concepts). This parameter and `secretId` are required for Customer Managed Keys.</td>
</tr>
<tr>
    <td><CopyableCode code="versionPreference" /></td>
    <td><code>string</code></td>
    <td>The next maintenance version preference.  (NEXT_RELEASE_UPDATE, LATEST_RELEASE_UPDATE) (default: NEXT_RELEASE_UPDATE)</td>
</tr>
<tr>
    <td><CopyableCode code="vmFailoverReservation" /></td>
    <td><code>integer</code></td>
    <td>The percentage of CPUs reserved across nodes to support node failover. Allowed values are 0%, 25%, 50%, 75%, and 100%, with 50% being the default option.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An Autonomous Container Database is a container database service that enables the customer to host one or more databases within the container database. A basic container database runs on a single Autonomous Exadata Infrastructure from an availability domain without the Extreme Availability features enabled.&lt;br /&gt;

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
    <td>The OCID of the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedBackupConfigurationDetails" /></td>
    <td><code>array</code></td>
    <td>A backup config object holds information about preferred backup destinations only. This object holds information about the associated backup destinations, such as secondary backup destinations created for local backups or remote replicated backups.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>**No longer used.** For Autonomous AI Database on dedicated Exadata infrastructure, the container database is created within a specified `cloudAutonomousVmCluster`. </td>
</tr>
<tr>
    <td><CopyableCode code="autonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="availableCpus" /></td>
    <td><code>number (float)</code></td>
    <td>Sum of CPUs available on the Autonomous VM Cluster + Sum of reclaimable CPUs available in the Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="backupConfig" /></td>
    <td><code>object</code></td>
    <td>Backup options for the Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="backupDestinationPropertiesList" /></td>
    <td><code>array</code></td>
    <td>This list describes the backup destination properties associated with the Autonomous Container Database (ACD) 's preferred backup destination. The object at a given index is associated with the destination present at the same index in the backup destination details list of the ACD Backup Configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudAutonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the cloud Autonomous Exadata VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Autonomous Container Database. For Autonomous AI Database on Dedicated Exadata Infrastructure, the CPU type (ECPUs or OCPUs) is determined by the parent Autonomous Exadata VM Cluster's compute model. ECPU compute model is the recommended model and OCPU compute model is legacy. See &#91;Compute Models in Autonomous AI Database on Dedicated Exadata Infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbak) for more details.  (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="customerContacts" /></td>
    <td><code>array</code></td>
    <td>Customer Contacts. Setting this to an empty list removes all customer contacts. </td>
</tr>
<tr>
    <td><CopyableCode code="dataguard" /></td>
    <td><code>object</code></td>
    <td>The properties that define Autonomous Container Databases Dataguard. </td>
</tr>
<tr>
    <td><CopyableCode code="dataguardGroupMembers" /></td>
    <td><code>array</code></td>
    <td>Array of Dg associations.</td>
</tr>
<tr>
    <td><CopyableCode code="dbName" /></td>
    <td><code>string</code></td>
    <td>The Database name for the Autonomous Container Database. The name must be unique within the Cloud Autonomous VM Cluster, starting with an alphabetic character, followed by 1 to 7 alphanumeric characters.</td>
</tr>
<tr>
    <td><CopyableCode code="dbSplitThreshold" /></td>
    <td><code>integer</code></td>
    <td>The CPU value beyond which an Autonomous AI Database will be opened across multiple nodes. The default value of this attribute is 16 for OCPUs and 64 for ECPUs.</td>
</tr>
<tr>
    <td><CopyableCode code="dbUniqueName" /></td>
    <td><code>string</code></td>
    <td>**Deprecated.** The `DB_UNIQUE_NAME` value is set by Oracle Cloud Infrastructure.  Do not specify a value for this parameter. Specifying a value for this field will cause Terraform operations to fail. </td>
</tr>
<tr>
    <td><CopyableCode code="dbVersion" /></td>
    <td><code>string</code></td>
    <td>Oracle AI Database version of the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-provided name for the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="distributionAffinity" /></td>
    <td><code>string</code></td>
    <td>Determines whether an Autonomous AI Database must be opened across the maximum number of nodes or the least number of nodes. By default, Minimum nodes is selected. (MINIMUM_DISTRIBUTION, MAXIMUM_DISTRIBUTION)</td>
</tr>
<tr>
    <td><CopyableCode code="dstFileVersion" /></td>
    <td><code>string</code></td>
    <td>DST Time-Zone File version of the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="infrastructureType" /></td>
    <td><code>string</code></td>
    <td>The infrastructure type this resource belongs to. (CLOUD, CLOUD_AT_CUSTOMER)</td>
</tr>
<tr>
    <td><CopyableCode code="isDataGuardEnabled" /></td>
    <td><code>boolean</code></td>
    <td>**Deprecated.** Indicates whether the Autonomous AI Database has local (in-region) Data Guard enabled. Not applicable to cross-region Autonomous Data Guard associations, or to Autonomous AI Databases using dedicated Exadata infrastructure or Exadata Cloud@Customer infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="isDstFileUpdateEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if an automatic DST Time Zone file update is enabled for the Autonomous Container Database. If enabled along with Release Update, patching will be done in a Non-Rolling manner.</td>
</tr>
<tr>
    <td><CopyableCode code="isMultipleStandby" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if it is multiple standby Autonomous Dataguard </td>
</tr>
<tr>
    <td><CopyableCode code="keyHistoryEntry" /></td>
    <td><code>array</code></td>
    <td>Key History Entry.</td>
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
    <td><CopyableCode code="largestProvisionableAutonomousDatabaseInCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The largest Autonomous AI Database (CPU) that can be created in a new Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="lastMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Autonomous Container Database. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, BACKUP_IN_PROGRESS, RESTORING, RESTORE_FAILED, RESTARTING, MAINTENANCE_IN_PROGRESS, ROLE_CHANGE_IN_PROGRESS, ENABLING_AUTONOMOUS_DATA_GUARD, UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="listOneOffPatches" /></td>
    <td><code>array</code></td>
    <td>List of One-Off patches that has been successfully applied to Autonomous Container Database</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window. </td>
</tr>
<tr>
    <td><CopyableCode code="memoryPerOracleComputeUnitInGBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory (in GBs) enabled per ECPU or OCPU in the Autonomous VM Cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="netServicesArchitecture" /></td>
    <td><code>string</code></td>
    <td>Enabling SHARED server architecture enables a database server to allow many client processes to share very few server processes, thereby increasing the number of supported users. (DEDICATED, SHARED, DRCP) (default: DEDICATED)</td>
</tr>
<tr>
    <td><CopyableCode code="nextMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the next maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="okvEndPointGroupName" /></td>
    <td><code>string</code></td>
    <td>The OKV End Point Group name for the Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="patchId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last patch applied on the system.</td>
</tr>
<tr>
    <td><CopyableCode code="patchModel" /></td>
    <td><code>string</code></td>
    <td>Database patch model preference. (RELEASE_UPDATES, RELEASE_UPDATE_REVISIONS)</td>
</tr>
<tr>
    <td><CopyableCode code="provisionableCpus" /></td>
    <td><code>array</code></td>
    <td>An array of CPU values that can be used to successfully provision a single Autonomous AI Database. </td>
</tr>
<tr>
    <td><CopyableCode code="provisionedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs provisioned in an Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="reclaimableCpus" /></td>
    <td><code>number (float)</code></td>
    <td>CPUs that continue to be included in the count of CPUs available to the Autonomous Container Database even after one of its Autonomous AI Database is terminated or scaled down. You can release them to the available CPUs at its parent Autonomous VM Cluster level by restarting the Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="recoveryApplianceDetails" /></td>
    <td><code>object</code></td>
    <td>Information about the recovery appliance configuration associated with the Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="reservedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs reserved in an Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The Data Guard role of the Autonomous Container Database or Autonomous AI Database, if Autonomous Data Guard is enabled.  (PRIMARY, STANDBY, DISABLED_STANDBY, BACKUP_COPY, SNAPSHOT_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceLevelAgreementType" /></td>
    <td><code>string</code></td>
    <td>The service level agreement type of the container database. The default is STANDARD. (STANDARD, MISSION_CRITICAL, AUTONOMOUS_DATAGUARD)</td>
</tr>
<tr>
    <td><CopyableCode code="standbyMaintenanceBufferInDays" /></td>
    <td><code>integer</code></td>
    <td>The scheduling detail for the quarterly maintenance window of the standby Autonomous Container Database. This value represents the number of days before scheduled maintenance of the primary database. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Autonomous Container Database was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfLastBackup" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of last successful backup. Here NULL value represents either there are no successful backups or backups are not configured for this Autonomous Container Database.</td>
</tr>
<tr>
    <td><CopyableCode code="timeSnapshotStandbyRevert" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Autonomous Container Database will be reverted to Standby from Snapshot Standby.</td>
</tr>
<tr>
    <td><CopyableCode code="totalCpus" /></td>
    <td><code>integer</code></td>
    <td>The number of CPUs allocated to the Autonomous VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure &#91;vault&#93;(/Content/KeyManagement/Concepts/keyoverview.htm#concepts). This parameter and `secretId` are required for Customer Managed Keys.</td>
</tr>
<tr>
    <td><CopyableCode code="versionPreference" /></td>
    <td><code>string</code></td>
    <td>The next maintenance version preference.  (NEXT_RELEASE_UPDATE, LATEST_RELEASE_UPDATE) (default: NEXT_RELEASE_UPDATE)</td>
</tr>
<tr>
    <td><CopyableCode code="vmFailoverReservation" /></td>
    <td><code>integer</code></td>
    <td>The percentage of CPUs reserved across nodes to support node failover. Allowed values are 0%, 25%, 50%, 75%, and 100%, with 50% being the default option.</td>
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
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified Autonomous Container Database.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-autonomousExadataInfrastructureId"><code>autonomousExadataInfrastructureId</code></a>, <a href="#parameter-autonomousVmClusterId"><code>autonomousVmClusterId</code></a>, <a href="#parameter-infrastructureType"><code>infrastructureType</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-serviceLevelAgreementType"><code>serviceLevelAgreementType</code></a>, <a href="#parameter-cloudAutonomousVmClusterId"><code>cloudAutonomousVmClusterId</code></a></td>
    <td>Gets a list of the Autonomous Container Databases in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-patchModel"><code>patchModel</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates an Autonomous Container Database in the specified Autonomous Exadata Infrastructure.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the properties of an Autonomous Container Database, such as display name, maintenance preference, backup retention, and tags.</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Terminates an Autonomous Container Database, which permanently deletes the container database and any databases within the container database. The database data is local to the Autonomous Exadata Infrastructure and will be lost when the container database is terminated. Oracle recommends that you back up any data in the Autonomous Container Database prior to terminating it.</td>
</tr>
<tr>
    <td><a href="#add_standby_autonomous_container_database"><CopyableCode code="add_standby_autonomous_container_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Add a standby Autonomous Container Database. For more information about Autonomous Data Guard,see&lt;br /&gt;&#91;Protect Critical Databases from Failures and Disasters Using Autonomous Data Guard&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbau/GUID-C57B9A6E-7471-4CDC-8F10-B8386538E31C).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Move the Autonomous Container Database and its dependent resources to the specified compartment.&lt;br /&gt;For more information about moving Autonomous Container Databases, see&lt;br /&gt;&#91;Moving Database Resources to a Different Compartment&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/raqyy/#articletitle.html).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_dataguard_role"><CopyableCode code="change_dataguard_role" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-role"><code>role</code></a>, <a href="#parameter-autonomousContainerDatabaseDataguardAssociationId"><code>autonomousContainerDatabaseDataguardAssociationId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>**Deprecated.** Use the &#91;ConvertStandbyAutonomousContainerDatabase&#93;(#/en/database/latest/AutonomousContainerDatabase/ConvertStandbyAutonomousContainerDatabase) operation to switch the Autonomous Container Database (ACD) role between Standby and Snapshot Standby.&lt;br /&gt;For more information about changing ACD Role, see&lt;br /&gt;&#91;Convert Physical Standby to Snapshot Standby&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-D3B503F1-0032-4B0D-9F00-ACAE8151AB80) and &#91;Convert Snapshot Standby to Physical Standby&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-E8D7E0EE-8244-467D-B33A-1BC6F969A0A4).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#edit_autonomous_container_database_dataguard"><CopyableCode code="edit_autonomous_container_database_dataguard" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Modify Autonomous Container Database Data Guard settings such as protection mode, automatic failover, and fast start failover lag limit. For more information, see&lt;br /&gt;&#91;Update Autonomous Container Database Dataguard&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-3A936EC7-7A49-4FD2-9F39-8DB6B22011CE).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#failover_autonomous_container_database_dataguard"><CopyableCode code="failover_autonomous_container_database_dataguard" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Performs failover to a standby Autonomous Container Database (ACD) identified by the autonomousContainerDatabaseId parameter. This standby ACD will become the new primary ACD when the failover completes successfully. For more information, see&lt;br /&gt;&#91;Fail Over to the Standby in an Autonomous Data Guard Configuration&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-C8FFA343-223C-4F41-9656-AEC356AD90A0). &lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#reinstate_autonomous_container_database_dataguard"><CopyableCode code="reinstate_autonomous_container_database_dataguard" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Reinstates a disabled standby Autonomous Container Database (ACD), identified by the autonomousContainerDatabaseId parameter to an active standby ACD. For more information, see&lt;br /&gt;&#91;Reinstate the Disabled Standby in an Autonomous Data Guard Configuration&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-B5C6A90D-72E3-4F32-988D-8AECC0A2D947).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#restart_autonomous_container_database"><CopyableCode code="restart_autonomous_container_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Rolling restarts the specified Autonomous Container Database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#rotate_autonomous_container_database_encryption_key"><CopyableCode code="rotate_autonomous_container_database_encryption_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a new version of an existing &#91;Vault service&#93;(/iaas/Content/KeyManagement/Concepts/keyoverview.htm) key.</td>
</tr>
<tr>
    <td><a href="#convert_standby_autonomous_container_database"><CopyableCode code="convert_standby_autonomous_container_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-role"><code>role</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Convert the standby Autonomous Container Database (ACD) between physical standby and snapshot standby ACD. For more information about converting standby ACDs, see&lt;br /&gt;&#91;Convert Physical Standby to Snapshot Standby&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-D3B503F1-0032-4B0D-9F00-ACAE8151AB80) and &#91;Convert Snapshot Standby to Physical Standby&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-E8D7E0EE-8244-467D-B33A-1BC6F969A0A4).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#switchover_autonomous_container_database_dataguard"><CopyableCode code="switchover_autonomous_container_database_dataguard" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Switchover an Autonomous Container Database (ACD), identified by the autonomousContainerDatabaseId parameter, to an active standby ACD. This standby ACD will become the new primary ACD when the switchover completes successfully. For more information, see&lt;br /&gt;&#91;Switch Roles in an Autonomous Data Guard Configuration&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-A2AB31F6-D52D-493C-9BA7-D87A0F17078F). &lt;br /&gt;</td>
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
<tr id="parameter-autonomousContainerDatabaseId">
    <td><CopyableCode code="autonomousContainerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The Autonomous Container Database &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
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
<tr id="parameter-autonomousExadataInfrastructureId">
    <td><CopyableCode code="autonomousExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The Autonomous Exadata Infrastructure &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-autonomousVmClusterId">
    <td><CopyableCode code="autonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The Autonomous VM Cluster &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given availability domain exactly.</td>
</tr>
<tr id="parameter-cloudAutonomousVmClusterId">
    <td><CopyableCode code="cloudAutonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The cloud Autonomous VM Cluster &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
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
<tr id="parameter-serviceLevelAgreementType">
    <td><CopyableCode code="serviceLevelAgreementType" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given service-level agreement type exactly.</td>
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

Gets information about the specified Autonomous Container Database.

```sql
SELECT
id,
associatedBackupConfigurationDetails,
autonomousExadataInfrastructureId,
autonomousVmClusterId,
availabilityDomain,
availableCpus,
backupConfig,
backupDestinationPropertiesList,
cloudAutonomousVmClusterId,
compartmentId,
computeModel,
customerContacts,
dataguard,
dataguardGroupMembers,
dbName,
dbSplitThreshold,
dbUniqueName,
dbVersion,
definedTags,
displayName,
distributionAffinity,
dstFileVersion,
freeformTags,
infrastructureType,
isDataGuardEnabled,
isDstFileUpdateEnabled,
isMultipleStandby,
keyHistoryEntry,
keyStoreId,
keyStoreWalletName,
kmsKeyId,
kmsKeyVersionId,
largestProvisionableAutonomousDatabaseInCpus,
lastMaintenanceRunId,
lifecycleDetails,
lifecycleState,
listOneOffPatches,
maintenanceWindow,
memoryPerOracleComputeUnitInGBs,
netServicesArchitecture,
nextMaintenanceRunId,
okvEndPointGroupName,
patchId,
patchModel,
provisionableCpus,
provisionedCpus,
reclaimableCpus,
recoveryApplianceDetails,
reservedCpus,
role,
serviceLevelAgreementType,
standbyMaintenanceBufferInDays,
systemTags,
timeCreated,
timeOfLastBackup,
timeSnapshotStandbyRevert,
totalCpus,
vaultId,
versionPreference,
vmFailoverReservation
FROM oci.database.autonomous_container_databases
WHERE autonomousContainerDatabaseId = '{{ autonomousContainerDatabaseId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Gets a list of the Autonomous Container Databases in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
associatedBackupConfigurationDetails,
autonomousExadataInfrastructureId,
autonomousVmClusterId,
availabilityDomain,
availableCpus,
backupConfig,
backupDestinationPropertiesList,
cloudAutonomousVmClusterId,
compartmentId,
computeModel,
customerContacts,
dataguard,
dataguardGroupMembers,
dbName,
dbSplitThreshold,
dbUniqueName,
dbVersion,
definedTags,
displayName,
distributionAffinity,
dstFileVersion,
freeformTags,
infrastructureType,
isDataGuardEnabled,
isDstFileUpdateEnabled,
isMultipleStandby,
keyHistoryEntry,
keyStoreId,
keyStoreWalletName,
kmsKeyId,
kmsKeyVersionId,
largestProvisionableAutonomousDatabaseInCpus,
lastMaintenanceRunId,
lifecycleDetails,
lifecycleState,
listOneOffPatches,
maintenanceWindow,
memoryPerOracleComputeUnitInGBs,
netServicesArchitecture,
nextMaintenanceRunId,
okvEndPointGroupName,
patchId,
patchModel,
provisionableCpus,
provisionedCpus,
reclaimableCpus,
recoveryApplianceDetails,
reservedCpus,
role,
serviceLevelAgreementType,
standbyMaintenanceBufferInDays,
systemTags,
timeCreated,
timeOfLastBackup,
timeSnapshotStandbyRevert,
totalCpus,
vaultId,
versionPreference,
vmFailoverReservation
FROM oci.database.autonomous_container_databases
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND autonomousExadataInfrastructureId = '{{ autonomousExadataInfrastructureId }}'
AND autonomousVmClusterId = '{{ autonomousVmClusterId }}'
AND infrastructureType = '{{ infrastructureType }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND availabilityDomain = '{{ availabilityDomain }}'
AND displayName = '{{ displayName }}'
AND serviceLevelAgreementType = '{{ serviceLevelAgreementType }}'
AND cloudAutonomousVmClusterId = '{{ cloudAutonomousVmClusterId }}'
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

Creates an Autonomous Container Database in the specified Autonomous Exadata Infrastructure.&lt;br /&gt;

```sql
INSERT INTO oci.database.autonomous_container_databases (
autonomousExadataInfrastructureId,
autonomousVmClusterId,
backupConfig,
cloudAutonomousVmClusterId,
compartmentId,
customerContacts,
databaseSoftwareImageId,
dbName,
dbSplitThreshold,
dbUniqueName,
dbVersion,
definedTags,
displayName,
distributionAffinity,
fastStartFailOverLagLimitInSeconds,
freeformTags,
isAutomaticFailoverEnabled,
isDstFileUpdateEnabled,
keyStoreId,
kmsKeyId,
kmsKeyVersionId,
maintenanceWindowDetails,
netServicesArchitecture,
okvEndPointGroupName,
patchModel,
peerAutonomousContainerDatabaseBackupConfig,
peerAutonomousContainerDatabaseCompartmentId,
peerAutonomousContainerDatabaseDisplayName,
peerAutonomousExadataInfrastructureId,
peerAutonomousVmClusterId,
peerCloudAutonomousVmClusterId,
peerDbUniqueName,
protectionMode,
serviceLevelAgreementType,
source,
standbyMaintenanceBufferInDays,
vaultId,
versionPreference,
vmFailoverReservation,
region,
opc-retry-token
)
SELECT 
'{{ autonomousExadataInfrastructureId }}',
'{{ autonomousVmClusterId }}',
'{{ backupConfig }}',
'{{ cloudAutonomousVmClusterId }}',
'{{ compartmentId }}',
'{{ customerContacts }}',
'{{ databaseSoftwareImageId }}',
'{{ dbName }}',
{{ dbSplitThreshold }},
'{{ dbUniqueName }}',
'{{ dbVersion }}',
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ distributionAffinity }}',
{{ fastStartFailOverLagLimitInSeconds }},
'{{ freeformTags }}',
{{ isAutomaticFailoverEnabled }},
{{ isDstFileUpdateEnabled }},
'{{ keyStoreId }}',
'{{ kmsKeyId }}',
'{{ kmsKeyVersionId }}',
'{{ maintenanceWindowDetails }}',
'{{ netServicesArchitecture }}',
'{{ okvEndPointGroupName }}',
'{{ patchModel }}' /* required */,
'{{ peerAutonomousContainerDatabaseBackupConfig }}',
'{{ peerAutonomousContainerDatabaseCompartmentId }}',
'{{ peerAutonomousContainerDatabaseDisplayName }}',
'{{ peerAutonomousExadataInfrastructureId }}',
'{{ peerAutonomousVmClusterId }}',
'{{ peerCloudAutonomousVmClusterId }}',
'{{ peerDbUniqueName }}',
'{{ protectionMode }}',
'{{ serviceLevelAgreementType }}',
'{{ source }}',
{{ standbyMaintenanceBufferInDays }},
'{{ vaultId }}',
'{{ versionPreference }}',
{{ vmFailoverReservation }},
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
associatedBackupConfigurationDetails,
autonomousExadataInfrastructureId,
autonomousVmClusterId,
availabilityDomain,
availableCpus,
backupConfig,
backupDestinationPropertiesList,
cloudAutonomousVmClusterId,
compartmentId,
computeModel,
customerContacts,
dataguard,
dataguardGroupMembers,
dbName,
dbSplitThreshold,
dbUniqueName,
dbVersion,
definedTags,
displayName,
distributionAffinity,
dstFileVersion,
freeformTags,
infrastructureType,
isDataGuardEnabled,
isDstFileUpdateEnabled,
isMultipleStandby,
keyHistoryEntry,
keyStoreId,
keyStoreWalletName,
kmsKeyId,
kmsKeyVersionId,
largestProvisionableAutonomousDatabaseInCpus,
lastMaintenanceRunId,
lifecycleDetails,
lifecycleState,
listOneOffPatches,
maintenanceWindow,
memoryPerOracleComputeUnitInGBs,
netServicesArchitecture,
nextMaintenanceRunId,
okvEndPointGroupName,
patchId,
patchModel,
provisionableCpus,
provisionedCpus,
reclaimableCpus,
recoveryApplianceDetails,
reservedCpus,
role,
serviceLevelAgreementType,
standbyMaintenanceBufferInDays,
systemTags,
timeCreated,
timeOfLastBackup,
timeSnapshotStandbyRevert,
totalCpus,
vaultId,
versionPreference,
vmFailoverReservation
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: autonomous_container_databases
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the autonomous_container_databases resource.
    - name: autonomousExadataInfrastructureId
      value: "{{ autonomousExadataInfrastructureId }}"
      description: |
        **No longer used.** This parameter is no longer used for Autonomous AI Database on dedicated Exadata infrasture. Specify a \`cloudAutonomousVmClusterId\` instead. Using this parameter will cause the operation to fail.
    - name: autonomousVmClusterId
      value: "{{ autonomousVmClusterId }}"
      description: |
        The OCID of the Autonomous VM Cluster.
    - name: backupConfig
      description: |
        Backup options for the Autonomous Container Database.
      value:
        backupDestinationDetails:
          - backupRetentionPolicyOnTerminate: "{{ backupRetentionPolicyOnTerminate }}"
            dbrsPolicyId: "{{ dbrsPolicyId }}"
            id: "{{ id }}"
            internetProxy: "{{ internetProxy }}"
            isRemote: {{ isRemote }}
            isRetentionLockEnabled: {{ isRetentionLockEnabled }}
            remoteRegion: "{{ remoteRegion }}"
            type: "{{ type }}"
            vpcPassword: "{{ vpcPassword }}"
            vpcUser: "{{ vpcUser }}"
        recoveryWindowInDays: {{ recoveryWindowInDays }}
    - name: cloudAutonomousVmClusterId
      value: "{{ cloudAutonomousVmClusterId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the cloud Autonomous Exadata VM Cluster.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment containing the Autonomous Container Database.
    - name: customerContacts
      description: |
        Customer Contacts. Setting this to an empty list removes all customer contacts.
      value:
        - email: "{{ email }}"
    - name: databaseSoftwareImageId
      value: "{{ databaseSoftwareImageId }}"
      description: |
        The Autonomous AI Database Software Image [OCID](/Content/General/Concepts/identifiers.htm).
    - name: dbName
      value: "{{ dbName }}"
      description: |
        The Database name for the Autonomous Container Database. The name must be unique within the Cloud Autonomous VM Cluster, starting with an alphabetic character, followed by 1 to 7 alphanumeric characters.
    - name: dbSplitThreshold
      value: {{ dbSplitThreshold }}
      description: |
        The CPU value beyond which an Autonomous AI Database will be opened across multiple nodes. The default value of this attribute is 16 for OCPUs and 64 for ECPUs.
    - name: dbUniqueName
      value: "{{ dbUniqueName }}"
      description: |
        **Deprecated.** The \`DB_UNIQUE_NAME\` value is set by Oracle Cloud Infrastructure.  Do not specify a value for this parameter. Specifying a value for this field will cause Terraform operations to fail.
    - name: dbVersion
      value: "{{ dbVersion }}"
      description: |
        The base version for the Autonomous Container Database.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The display name for the Autonomous Container Database.
    - name: distributionAffinity
      value: "{{ distributionAffinity }}"
      description: |
        Determines whether an Autonomous AI Database must be opened across a minimum or maximum of nodes. By default, Minimum nodes is selected.
      valid_values: ['MINIMUM_DISTRIBUTION', 'MAXIMUM_DISTRIBUTION']
    - name: fastStartFailOverLagLimitInSeconds
      value: {{ fastStartFailOverLagLimitInSeconds }}
      description: |
        The lag time for my preference based on data loss tolerance in seconds.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: isAutomaticFailoverEnabled
      value: {{ isAutomaticFailoverEnabled }}
      description: |
        Indicates whether Automatic Failover is enabled for Autonomous Container Database Dataguard Association
    - name: isDstFileUpdateEnabled
      value: {{ isDstFileUpdateEnabled }}
      description: |
        Indicates if an automatic DST Time Zone file update is enabled for the Autonomous Container Database. If enabled along with Release Update, patching will be done in a Non-Rolling manner.
    - name: keyStoreId
      value: "{{ keyStoreId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the key store of Oracle Vault.
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
    - name: kmsKeyVersionId
      value: "{{ kmsKeyVersionId }}"
      description: |
        The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation. Autonomous AI Database Serverless does not use key versions, hence is not applicable for Autonomous AI Database Serverless instances.
    - name: maintenanceWindowDetails
      description: |
        The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window.
      value:
        customActionTimeoutInMins: {{ customActionTimeoutInMins }}
        daysOfWeek:
          - name: "{{ name }}"
        hoursOfDay:
          - {{ hoursOfDay }}
        isCustomActionTimeoutEnabled: {{ isCustomActionTimeoutEnabled }}
        leadTimeInWeeks: {{ leadTimeInWeeks }}
        months:
          - name: "{{ name }}"
        patchingMode: "{{ patchingMode }}"
        preference: "{{ preference }}"
        skipRu:
          - {{ skipRu }}
        weeksOfMonth:
          - {{ weeksOfMonth }}
    - name: netServicesArchitecture
      value: "{{ netServicesArchitecture }}"
      description: |
        Enabling SHARED server architecture enables a database server to allow many client processes to share very few server processes, thereby increasing the number of supported users.
      valid_values: ['DEDICATED', 'SHARED', 'DRCP']
      default: DEDICATED
    - name: okvEndPointGroupName
      value: "{{ okvEndPointGroupName }}"
      description: |
        The OKV End Point Group name for the Autonomous Container Database.
    - name: patchModel
      value: "{{ patchModel }}"
      description: |
        Database Patch model preference.
      valid_values: ['RELEASE_UPDATES', 'RELEASE_UPDATE_REVISIONS']
    - name: peerAutonomousContainerDatabaseBackupConfig
      description: |
        Backup options for the standby Autonomous Container Database.
      value:
        backupDestinationDetails:
          - backupRetentionPolicyOnTerminate: "{{ backupRetentionPolicyOnTerminate }}"
            dbrsPolicyId: "{{ dbrsPolicyId }}"
            id: "{{ id }}"
            internetProxy: "{{ internetProxy }}"
            isRemote: {{ isRemote }}
            isRetentionLockEnabled: {{ isRetentionLockEnabled }}
            remoteRegion: "{{ remoteRegion }}"
            type: "{{ type }}"
            vpcPassword: "{{ vpcPassword }}"
            vpcUser: "{{ vpcUser }}"
        recoveryWindowInDays: {{ recoveryWindowInDays }}
    - name: peerAutonomousContainerDatabaseCompartmentId
      value: "{{ peerAutonomousContainerDatabaseCompartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment where the standby Autonomous Container Database
        will be created.
    - name: peerAutonomousContainerDatabaseDisplayName
      value: "{{ peerAutonomousContainerDatabaseDisplayName }}"
      description: |
        The display name for the peer Autonomous Container Database.
    - name: peerAutonomousExadataInfrastructureId
      value: "{{ peerAutonomousExadataInfrastructureId }}"
      description: |
        *No longer used.* This parameter is no longer used for Autonomous AI Database on dedicated Exadata infrasture. Specify a \`peerCloudAutonomousVmClusterId\` instead. Using this parameter will cause the operation to fail.
    - name: peerAutonomousVmClusterId
      value: "{{ peerAutonomousVmClusterId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the peer Autonomous VM cluster for Autonomous Data Guard. Required to enable Data Guard.
    - name: peerCloudAutonomousVmClusterId
      value: "{{ peerCloudAutonomousVmClusterId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the peer cloud Autonomous Exadata VM Cluster.
    - name: peerDbUniqueName
      value: "{{ peerDbUniqueName }}"
      description: |
        **Deprecated.** The \`DB_UNIQUE_NAME\` of the peer Autonomous Container Database in a Data Guard association is set by Oracle Cloud Infrastructure.  Do not specify a value for this parameter. Specifying a value for this field will cause Terraform operations to fail.
    - name: protectionMode
      value: "{{ protectionMode }}"
      description: |
        The protection mode of this Autonomous Data Guard association. For more information, see
        [Oracle Data Guard Protection Modes](http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000)
        in the Oracle Data Guard documentation.
      valid_values: ['MAXIMUM_AVAILABILITY', 'MAXIMUM_PERFORMANCE']
    - name: serviceLevelAgreementType
      value: "{{ serviceLevelAgreementType }}"
      description: |
        The service level agreement type of the Autonomous Container Database. The default is STANDARD. For an autonomous dataguard Autonomous Container Database, the specified Autonomous Exadata Infrastructure must be associated with a remote Autonomous Exadata Infrastructure.
      valid_values: ['STANDARD', 'AUTONOMOUS_DATAGUARD']
    - name: source
      value: "{{ source }}"
      description: |
        The source of the database. Use \`NONE\` to create a new Autonomous Container Database (ACD). Use \`BACKUP_FROM_ID\` to create a new ACD from a specified backup.
      valid_values: ['NONE', 'BACKUP_FROM_ID']
      default: NONE
    - name: standbyMaintenanceBufferInDays
      value: {{ standbyMaintenanceBufferInDays }}
      description: |
        The scheduling detail for the quarterly maintenance window of the standby Autonomous Container Database.
        This value represents the number of days before scheduled maintenance of the primary database.
    - name: vaultId
      value: "{{ vaultId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure [vault](/Content/KeyManagement/Concepts/keyoverview.htm#concepts). This parameter and \`secretId\` are required for Customer Managed Keys.
    - name: versionPreference
      value: "{{ versionPreference }}"
      description: |
        The next maintenance version preference.
      valid_values: ['NEXT_RELEASE_UPDATE', 'LATEST_RELEASE_UPDATE']
      default: NEXT_RELEASE_UPDATE
    - name: vmFailoverReservation
      value: {{ vmFailoverReservation }}
      description: |
        The percentage of CPUs reserved across nodes to support node failover. Allowed values are 0%, 25%, 50%, 75%, and 100%, with 50% being the default option.
      default: 50
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

Updates the properties of an Autonomous Container Database, such as display name, maintenance preference, backup retention, and tags.

```sql
UPDATE oci.database.autonomous_container_databases
SET 
backupConfig = '{{ backupConfig }}',
customerContacts = '{{ customerContacts }}',
dbSplitThreshold = {{ dbSplitThreshold }},
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
distributionAffinity = '{{ distributionAffinity }}',
freeformTags = '{{ freeformTags }}',
isDstFileUpdateEnabled = {{ isDstFileUpdateEnabled }},
maintenanceWindowDetails = '{{ maintenanceWindowDetails }}',
netServicesArchitecture = '{{ netServicesArchitecture }}',
okvEndPointGroupName = '{{ okvEndPointGroupName }}',
patchModel = '{{ patchModel }}',
standbyMaintenanceBufferInDays = {{ standbyMaintenanceBufferInDays }},
versionPreference = '{{ versionPreference }}',
vmFailoverReservation = {{ vmFailoverReservation }}
WHERE 
autonomousContainerDatabaseId = '{{ autonomousContainerDatabaseId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
associatedBackupConfigurationDetails,
autonomousExadataInfrastructureId,
autonomousVmClusterId,
availabilityDomain,
availableCpus,
backupConfig,
backupDestinationPropertiesList,
cloudAutonomousVmClusterId,
compartmentId,
computeModel,
customerContacts,
dataguard,
dataguardGroupMembers,
dbName,
dbSplitThreshold,
dbUniqueName,
dbVersion,
definedTags,
displayName,
distributionAffinity,
dstFileVersion,
freeformTags,
infrastructureType,
isDataGuardEnabled,
isDstFileUpdateEnabled,
isMultipleStandby,
keyHistoryEntry,
keyStoreId,
keyStoreWalletName,
kmsKeyId,
kmsKeyVersionId,
largestProvisionableAutonomousDatabaseInCpus,
lastMaintenanceRunId,
lifecycleDetails,
lifecycleState,
listOneOffPatches,
maintenanceWindow,
memoryPerOracleComputeUnitInGBs,
netServicesArchitecture,
nextMaintenanceRunId,
okvEndPointGroupName,
patchId,
patchModel,
provisionableCpus,
provisionedCpus,
reclaimableCpus,
recoveryApplianceDetails,
reservedCpus,
role,
serviceLevelAgreementType,
standbyMaintenanceBufferInDays,
systemTags,
timeCreated,
timeOfLastBackup,
timeSnapshotStandbyRevert,
totalCpus,
vaultId,
versionPreference,
vmFailoverReservation;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate"
    values={[
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="terminate">

Terminates an Autonomous Container Database, which permanently deletes the container database and any databases within the container database. The database data is local to the Autonomous Exadata Infrastructure and will be lost when the container database is terminated. Oracle recommends that you back up any data in the Autonomous Container Database prior to terminating it.

```sql
DELETE FROM oci.database.autonomous_container_databases
WHERE autonomousContainerDatabaseId = '{{ autonomousContainerDatabaseId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_standby_autonomous_container_database"
    values={[
        { label: 'add_standby_autonomous_container_database', value: 'add_standby_autonomous_container_database' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'change_dataguard_role', value: 'change_dataguard_role' },
        { label: 'edit_autonomous_container_database_dataguard', value: 'edit_autonomous_container_database_dataguard' },
        { label: 'failover_autonomous_container_database_dataguard', value: 'failover_autonomous_container_database_dataguard' },
        { label: 'reinstate_autonomous_container_database_dataguard', value: 'reinstate_autonomous_container_database_dataguard' },
        { label: 'restart_autonomous_container_database', value: 'restart_autonomous_container_database' },
        { label: 'rotate_autonomous_container_database_encryption_key', value: 'rotate_autonomous_container_database_encryption_key' },
        { label: 'convert_standby_autonomous_container_database', value: 'convert_standby_autonomous_container_database' },
        { label: 'switchover_autonomous_container_database_dataguard', value: 'switchover_autonomous_container_database_dataguard' }
    ]}
>
<TabItem value="add_standby_autonomous_container_database">

Add a standby Autonomous Container Database. For more information about Autonomous Data Guard,see&lt;br /&gt;&#91;Protect Critical Databases from Failures and Disasters Using Autonomous Data Guard&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbau/GUID-C57B9A6E-7471-4CDC-8F10-B8386538E31C).&lt;br /&gt;

```sql
EXEC oci.database.autonomous_container_databases.add_standby_autonomous_container_database 
@autonomousContainerDatabaseId='{{ autonomousContainerDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"fastStartFailOverLagLimitInSeconds": {{ fastStartFailOverLagLimitInSeconds }}, 
"isAutomaticFailoverEnabled": {{ isAutomaticFailoverEnabled }}, 
"peerAutonomousContainerDatabaseBackupConfig": "{{ peerAutonomousContainerDatabaseBackupConfig }}", 
"peerAutonomousContainerDatabaseCompartmentId": "{{ peerAutonomousContainerDatabaseCompartmentId }}", 
"peerAutonomousContainerDatabaseDisplayName": "{{ peerAutonomousContainerDatabaseDisplayName }}", 
"peerAutonomousVmClusterId": "{{ peerAutonomousVmClusterId }}", 
"peerCloudAutonomousVmClusterId": "{{ peerCloudAutonomousVmClusterId }}", 
"peerDbUniqueName": "{{ peerDbUniqueName }}", 
"protectionMode": "{{ protectionMode }}", 
"standbyMaintenanceBufferInDays": {{ standbyMaintenanceBufferInDays }}
}'
;
```
</TabItem>
<TabItem value="change_compartment">

Move the Autonomous Container Database and its dependent resources to the specified compartment.&lt;br /&gt;For more information about moving Autonomous Container Databases, see&lt;br /&gt;&#91;Moving Database Resources to a Different Compartment&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/raqyy/#articletitle.html).&lt;br /&gt;

```sql
EXEC oci.database.autonomous_container_databases.change_compartment 
@autonomousContainerDatabaseId='{{ autonomousContainerDatabaseId }}' --required, 
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
<TabItem value="change_dataguard_role">

**Deprecated.** Use the &#91;ConvertStandbyAutonomousContainerDatabase&#93;(#/en/database/latest/AutonomousContainerDatabase/ConvertStandbyAutonomousContainerDatabase) operation to switch the Autonomous Container Database (ACD) role between Standby and Snapshot Standby.&lt;br /&gt;For more information about changing ACD Role, see&lt;br /&gt;&#91;Convert Physical Standby to Snapshot Standby&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-D3B503F1-0032-4B0D-9F00-ACAE8151AB80) and &#91;Convert Snapshot Standby to Physical Standby&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-E8D7E0EE-8244-467D-B33A-1BC6F969A0A4).&lt;br /&gt;

```sql
EXEC oci.database.autonomous_container_databases.change_dataguard_role 
@autonomousContainerDatabaseId='{{ autonomousContainerDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"autonomousContainerDatabaseDataguardAssociationId": "{{ autonomousContainerDatabaseDataguardAssociationId }}", 
"connectionStringsType": "{{ connectionStringsType }}", 
"role": "{{ role }}"
}'
;
```
</TabItem>
<TabItem value="edit_autonomous_container_database_dataguard">

Modify Autonomous Container Database Data Guard settings such as protection mode, automatic failover, and fast start failover lag limit. For more information, see&lt;br /&gt;&#91;Update Autonomous Container Database Dataguard&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-3A936EC7-7A49-4FD2-9F39-8DB6B22011CE).&lt;br /&gt;

```sql
EXEC oci.database.autonomous_container_databases.edit_autonomous_container_database_dataguard 
@autonomousContainerDatabaseId='{{ autonomousContainerDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"fastStartFailOverLagLimitInSeconds": {{ fastStartFailOverLagLimitInSeconds }}, 
"isAutomaticFailoverEnabled": {{ isAutomaticFailoverEnabled }}, 
"protectionMode": "{{ protectionMode }}"
}'
;
```
</TabItem>
<TabItem value="failover_autonomous_container_database_dataguard">

Performs failover to a standby Autonomous Container Database (ACD) identified by the autonomousContainerDatabaseId parameter. This standby ACD will become the new primary ACD when the failover completes successfully. For more information, see&lt;br /&gt;&#91;Fail Over to the Standby in an Autonomous Data Guard Configuration&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-C8FFA343-223C-4F41-9656-AEC356AD90A0). &lt;br /&gt;

```sql
EXEC oci.database.autonomous_container_databases.failover_autonomous_container_database_dataguard 
@autonomousContainerDatabaseId='{{ autonomousContainerDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="reinstate_autonomous_container_database_dataguard">

Reinstates a disabled standby Autonomous Container Database (ACD), identified by the autonomousContainerDatabaseId parameter to an active standby ACD. For more information, see&lt;br /&gt;&#91;Reinstate the Disabled Standby in an Autonomous Data Guard Configuration&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-B5C6A90D-72E3-4F32-988D-8AECC0A2D947).&lt;br /&gt;

```sql
EXEC oci.database.autonomous_container_databases.reinstate_autonomous_container_database_dataguard 
@autonomousContainerDatabaseId='{{ autonomousContainerDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="restart_autonomous_container_database">

Rolling restarts the specified Autonomous Container Database.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_container_databases.restart_autonomous_container_database 
@autonomousContainerDatabaseId='{{ autonomousContainerDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"isForceRestart": {{ isForceRestart }}
}'
;
```
</TabItem>
<TabItem value="rotate_autonomous_container_database_encryption_key">

Creates a new version of an existing [Vault service](/iaas/Content/KeyManagement/Concepts/keyoverview.htm) key.

```sql
EXEC oci.database.autonomous_container_databases.rotate_autonomous_container_database_encryption_key 
@autonomousContainerDatabaseId='{{ autonomousContainerDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"keyVersionId": "{{ keyVersionId }}"
}'
;
```
</TabItem>
<TabItem value="convert_standby_autonomous_container_database">

Convert the standby Autonomous Container Database (ACD) between physical standby and snapshot standby ACD. For more information about converting standby ACDs, see&lt;br /&gt;&#91;Convert Physical Standby to Snapshot Standby&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-D3B503F1-0032-4B0D-9F00-ACAE8151AB80) and &#91;Convert Snapshot Standby to Physical Standby&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-E8D7E0EE-8244-467D-B33A-1BC6F969A0A4).&lt;br /&gt;

```sql
EXEC oci.database.autonomous_container_databases.convert_standby_autonomous_container_database 
@autonomousContainerDatabaseId='{{ autonomousContainerDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"connectionStringsType": "{{ connectionStringsType }}", 
"role": "{{ role }}"
}'
;
```
</TabItem>
<TabItem value="switchover_autonomous_container_database_dataguard">

Switchover an Autonomous Container Database (ACD), identified by the autonomousContainerDatabaseId parameter, to an active standby ACD. This standby ACD will become the new primary ACD when the switchover completes successfully. For more information, see&lt;br /&gt;&#91;Switch Roles in an Autonomous Data Guard Configuration&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbcl/index.html#ADBCL-GUID-A2AB31F6-D52D-493C-9BA7-D87A0F17078F). &lt;br /&gt;

```sql
EXEC oci.database.autonomous_container_databases.switchover_autonomous_container_database_dataguard 
@autonomousContainerDatabaseId='{{ autonomousContainerDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
