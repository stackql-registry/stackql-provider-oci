--- 
title: autonomous_vm_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_vm_clusters
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

Creates, updates, deletes, gets or lists an <code>autonomous_vm_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_vm_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.autonomous_vm_clusters" /></td></tr>
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

Information about the Autonomous VM cluster.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousDataStoragePercentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of the data storage used for the Autonomous Databases in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousDataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The data disk group size allocated for Autonomous Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="availableAutonomousDataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The data disk group size available for Autonomous Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="availableContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of Autonomous Container Databases that can be created with the currently available local storage.</td>
</tr>
<tr>
    <td><CopyableCode code="availableCpus" /></td>
    <td><code>integer</code></td>
    <td>The numnber of CPU cores available.</td>
</tr>
<tr>
    <td><CopyableCode code="availableDataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>**Deprecated.** Use `availableAutonomousDataStorageSizeInTBs` for Autonomous Databases' data storage availability in TBs. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Autonomous VM Cluster. ECPU compute model is the recommended model and OCPU compute model is legacy. See &#91;Compute Models in Autonomous Database on Dedicated Exadata #Infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbak) for more details.  (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCountPerNode" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled per VM cluster node.</td>
</tr>
<tr>
    <td><CopyableCode code="cpuPercentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of total number of CPUs used in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cpusEnabled" /></td>
    <td><code>integer</code></td>
    <td>The number of enabled CPU cores.</td>
</tr>
<tr>
    <td><CopyableCode code="cpusLowestScaledValue" /></td>
    <td><code>integer (int32)</code></td>
    <td>The lowest value to which cpus can be scaled down.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInGBs" /></td>
    <td><code>number (double)</code></td>
    <td>The total data storage allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The total data storage allocated in TBs</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The local node storage allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServers" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) of the Db servers.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Autonomous VM cluster. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="distributionAlgorithm" /></td>
    <td><code>string</code></td>
    <td>The distribution algorithm used for the Autonomous VM cluster. (RESOURCE_OPTIMIZED, DISTRIBUTION_OPTIMIZED)</td>
</tr>
<tr>
    <td><CopyableCode code="exadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="exadataStorageInTBsLowestScaledValue" /></td>
    <td><code>number (double)</code></td>
    <td>The lowest value to which exadataStorage(in TBs) can be scaled down.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isLocalBackupEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, database backup on local Exadata storage is configured for the Autonomous VM cluster. If false, database backup on local Exadata storage is not available in the Autonomous VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="isMtlsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable mutual TLS(mTLS) authentication for database while provisioning a VMCluster. Default is TLS.</td>
</tr>
<tr>
    <td><CopyableCode code="lastMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the Autonomous VM cluster. The default is LICENSE_INCLUDED.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Autonomous VM cluster. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window. </td>
</tr>
<tr>
    <td><CopyableCode code="maxAcdsLowestScaledValue" /></td>
    <td><code>integer (int32)</code></td>
    <td>The lowest value to which maximum number of ACDs can be scaled down.</td>
</tr>
<tr>
    <td><CopyableCode code="memoryPerOracleComputeUnitInGBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory (in GBs) to be enabled per each CPU core. </td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The memory allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="nextMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the next maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes in the Autonomous VM Cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="nonProvisionableAutonomousContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of non-provisionable Autonomous Container Databases in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ocpusEnabled" /></td>
    <td><code>number (float)</code></td>
    <td>The number of enabled OCPU cores.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionableAutonomousContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>**Deprecated.** Use field totalContainerDatabases. </td>
</tr>
<tr>
    <td><CopyableCode code="provisionedAutonomousContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of provisioned Autonomous Container Databases in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs provisioned in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="reclaimableCpus" /></td>
    <td><code>integer</code></td>
    <td>CPUs that continue to be included in the count of CPUs available to the Autonomous Container Database even after one of its Autonomous Database is terminated or scaled down. You can release them to the available CPUs at its parent Autonomous VM Cluster level by restarting the Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="reservedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs reserved in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scanListenerPortNonTls" /></td>
    <td><code>integer</code></td>
    <td>The SCAN Listener Non TLS port number. Default value is 1521.</td>
</tr>
<tr>
    <td><CopyableCode code="scanListenerPortTls" /></td>
    <td><code>integer</code></td>
    <td>The SCAN Listener TLS port number. Default value is 2484.</td>
</tr>
<tr>
    <td><CopyableCode code="sgaPercentage" /></td>
    <td><code>number (float)</code></td>
    <td>Percentage of ECPU memory allocated for SGA(System Global Area).</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Autonomous VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeDatabaseSslCertificateExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the Database SSL certificate expiration.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOrdsCertificateExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the ORDS certificate expiration.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone to use for the Autonomous VM cluster. For details, see &#91;DB System Time Zones&#93;(/Content/Database/References/timezones.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="totalAutonomousDataStorageInTBs" /></td>
    <td><code>number (float)</code></td>
    <td>The total data disk group size for Autonomous Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="totalContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The total number of Autonomous Container Databases that can be created.</td>
</tr>
<tr>
    <td><CopyableCode code="vmClusterNetworkId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VM cluster network.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details of the Autonomous VM cluster.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousDataStoragePercentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of the data storage used for the Autonomous Databases in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousDataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The data disk group size allocated for Autonomous Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="availableAutonomousDataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The data disk group size available for Autonomous Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="availableContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of Autonomous Container Databases that can be created with the currently available local storage.</td>
</tr>
<tr>
    <td><CopyableCode code="availableCpus" /></td>
    <td><code>integer</code></td>
    <td>The numnber of CPU cores available.</td>
</tr>
<tr>
    <td><CopyableCode code="availableDataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>**Deprecated.** Use `availableAutonomousDataStorageSizeInTBs` for Autonomous Databases' data storage availability in TBs. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Autonomous VM Cluster. ECPU compute model is the recommended model and OCPU compute model is legacy. See &#91;Compute Models in Autonomous Database on Dedicated Exadata #Infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbak) for more details.  (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCountPerNode" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled per VM cluster node.</td>
</tr>
<tr>
    <td><CopyableCode code="cpuPercentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of total number of CPUs used in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="cpusEnabled" /></td>
    <td><code>integer</code></td>
    <td>The number of enabled CPU cores.</td>
</tr>
<tr>
    <td><CopyableCode code="cpusLowestScaledValue" /></td>
    <td><code>integer (int32)</code></td>
    <td>The lowest value to which cpus can be scaled down.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInGBs" /></td>
    <td><code>number (double)</code></td>
    <td>The total data storage allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The total data storage allocated in TBs</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The local node storage allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServers" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) of the Db servers.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Autonomous VM cluster. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="distributionAlgorithm" /></td>
    <td><code>string</code></td>
    <td>The distribution algorithm used for the Autonomous VM cluster. (RESOURCE_OPTIMIZED, DISTRIBUTION_OPTIMIZED)</td>
</tr>
<tr>
    <td><CopyableCode code="exadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="exadataStorageInTBsLowestScaledValue" /></td>
    <td><code>number (double)</code></td>
    <td>The lowest value to which exadataStorage(in TBs) can be scaled down.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isLocalBackupEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, database backup on local Exadata storage is configured for the Autonomous VM cluster. If false, database backup on local Exadata storage is not available in the Autonomous VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="isMtlsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable mutual TLS(mTLS) authentication for database while provisioning a VMCluster. Default is TLS.</td>
</tr>
<tr>
    <td><CopyableCode code="lastMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the Autonomous VM cluster. The default is LICENSE_INCLUDED.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Autonomous VM cluster. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window. </td>
</tr>
<tr>
    <td><CopyableCode code="maxAcdsLowestScaledValue" /></td>
    <td><code>integer (int32)</code></td>
    <td>The lowest value to which maximum number of ACDs can be scaled down.</td>
</tr>
<tr>
    <td><CopyableCode code="memoryPerOracleComputeUnitInGBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory (in GBs) to be enabled per each CPU core. </td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The memory allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="nextMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the next maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes in the Autonomous VM Cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="nonProvisionableAutonomousContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of non-provisionable Autonomous Container Databases in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="ocpusEnabled" /></td>
    <td><code>number (float)</code></td>
    <td>The number of enabled OCPU cores.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionableAutonomousContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>**Deprecated.** Use field totalContainerDatabases. </td>
</tr>
<tr>
    <td><CopyableCode code="provisionedAutonomousContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of provisioned Autonomous Container Databases in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs provisioned in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="reclaimableCpus" /></td>
    <td><code>integer</code></td>
    <td>CPUs that continue to be included in the count of CPUs available to the Autonomous Container Database even after one of its Autonomous Database is terminated or scaled down. You can release them to the available CPUs at its parent Autonomous VM Cluster level by restarting the Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="reservedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs reserved in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scanListenerPortNonTls" /></td>
    <td><code>integer</code></td>
    <td>The SCAN Listener Non TLS port number. Default value is 1521.</td>
</tr>
<tr>
    <td><CopyableCode code="scanListenerPortTls" /></td>
    <td><code>integer</code></td>
    <td>The SCAN Listener TLS port number. Default value is 2484.</td>
</tr>
<tr>
    <td><CopyableCode code="sgaPercentage" /></td>
    <td><code>number (float)</code></td>
    <td>Percentage of ECPU memory allocated for SGA(System Global Area).</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Autonomous VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeDatabaseSslCertificateExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the Database SSL certificate expiration.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOrdsCertificateExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the ORDS certificate expiration.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone to use for the Autonomous VM cluster. For details, see &#91;DB System Time Zones&#93;(/Content/Database/References/timezones.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="totalAutonomousDataStorageInTBs" /></td>
    <td><code>number (float)</code></td>
    <td>The total data disk group size for Autonomous Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="totalContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The total number of Autonomous Container Databases that can be created.</td>
</tr>
<tr>
    <td><CopyableCode code="vmClusterNetworkId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VM cluster network.</td>
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
    <td><a href="#parameter-autonomousVmClusterId"><code>autonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified Autonomous VM cluster for an Exadata Cloud@Customer system. To get information about an Autonomous VM Cluster in the Oracle cloud, see &#91;GetCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/GetCloudAutonomousVmCluster).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets a list of Exadata Cloud@Customer Autonomous VM clusters in the specified compartment. To list Autonomous VM Clusters in the Oracle Cloud, see &#91;ListCloudAutonomousVmClusters&#93;(#/en/database/latest/CloudAutonomousVmCluster/ListCloudAutonomousVmClusters).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-vmClusterNetworkId"><code>vmClusterNetworkId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates an Autonomous VM cluster for Exadata Cloud@Customer. To create an Autonomous VM Cluster in the Oracle cloud, see &#91;CreateCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/CreateCloudAutonomousVmCluster).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-autonomousVmClusterId"><code>autonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified Autonomous VM cluster for the Exadata Cloud@Customer system.To update an Autonomous VM Cluster in the Oracle cloud, see &#91;UpdateCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/UpdateCloudAutonomousVmCluster).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-autonomousVmClusterId"><code>autonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the specified Autonomous VM cluster in an Exadata Cloud@Customer system. To delete an Autonomous VM Cluster in the Oracle cloud, see &#91;DeleteCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/DeleteCloudAutonomousVmCluster).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousVmClusterId"><code>autonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Moves an Autonomous VM cluster and its dependent resources to another compartment. Applies to Exadata Cloud@Customer  only. For systems in the Oracle cloud, see &#91;ChangeAutonomousVmClusterCompartment&#93;(#/en/database/latest/AutonomousVmCluster/ChangeAutonomousVmClusterCompartment).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#restart_autonomous_vm_cluster_ords"><CopyableCode code="restart_autonomous_vm_cluster_ords" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousVmClusterId"><code>autonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Restarts Oracle REST Data Services (ORDS) for Autonomous Exadata VM cluster.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#rotate_autonomous_vm_cluster_ords_certs"><CopyableCode code="rotate_autonomous_vm_cluster_ords_certs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousVmClusterId"><code>autonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-certificateGenerationType"><code>certificateGenerationType</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Rotates the Oracle REST Data Services (ORDS) certificates for Autonomous Exadata VM cluster.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#rotate_autonomous_vm_cluster_ssl_certs"><CopyableCode code="rotate_autonomous_vm_cluster_ssl_certs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousVmClusterId"><code>autonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-certificateGenerationType"><code>certificateGenerationType</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Rotates the SSL certificates for Autonomous Exadata VM cluster.&lt;br /&gt;</td>
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
<tr id="parameter-autonomousVmClusterId">
    <td><CopyableCode code="autonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The autonomous VM cluster &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
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
<tr id="parameter-exadataInfrastructureId">
    <td><CopyableCode code="exadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>If provided, filters the results for the given Exadata Infrastructure.</td>
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
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is descending.  Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive. </td>
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

Gets information about the specified Autonomous VM cluster for an Exadata Cloud@Customer system. To get information about an Autonomous VM Cluster in the Oracle cloud, see &#91;GetCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/GetCloudAutonomousVmCluster).&lt;br /&gt;

```sql
SELECT
id,
autonomousDataStoragePercentage,
autonomousDataStorageSizeInTBs,
availableAutonomousDataStorageSizeInTBs,
availableContainerDatabases,
availableCpus,
availableDataStorageSizeInTBs,
compartmentId,
computeModel,
cpuCoreCountPerNode,
cpuPercentage,
cpusEnabled,
cpusLowestScaledValue,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
displayName,
distributionAlgorithm,
exadataInfrastructureId,
exadataStorageInTBsLowestScaledValue,
freeformTags,
isLocalBackupEnabled,
isMtlsEnabled,
lastMaintenanceRunId,
licenseModel,
lifecycleDetails,
lifecycleState,
maintenanceWindow,
maxAcdsLowestScaledValue,
memoryPerOracleComputeUnitInGBs,
memorySizeInGBs,
nextMaintenanceRunId,
nodeCount,
nonProvisionableAutonomousContainerDatabases,
ocpusEnabled,
provisionableAutonomousContainerDatabases,
provisionedAutonomousContainerDatabases,
provisionedCpus,
reclaimableCpus,
reservedCpus,
scanListenerPortNonTls,
scanListenerPortTls,
sgaPercentage,
systemTags,
timeCreated,
timeDatabaseSslCertificateExpires,
timeOrdsCertificateExpires,
timeZone,
totalAutonomousDataStorageInTBs,
totalContainerDatabases,
vmClusterNetworkId
FROM oci.database.autonomous_vm_clusters
WHERE autonomousVmClusterId = '{{ autonomousVmClusterId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of Exadata Cloud@Customer Autonomous VM clusters in the specified compartment. To list Autonomous VM Clusters in the Oracle Cloud, see &#91;ListCloudAutonomousVmClusters&#93;(#/en/database/latest/CloudAutonomousVmCluster/ListCloudAutonomousVmClusters).&lt;br /&gt;

```sql
SELECT
id,
autonomousDataStoragePercentage,
autonomousDataStorageSizeInTBs,
availableAutonomousDataStorageSizeInTBs,
availableContainerDatabases,
availableCpus,
availableDataStorageSizeInTBs,
compartmentId,
computeModel,
cpuCoreCountPerNode,
cpuPercentage,
cpusEnabled,
cpusLowestScaledValue,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
displayName,
distributionAlgorithm,
exadataInfrastructureId,
exadataStorageInTBsLowestScaledValue,
freeformTags,
isLocalBackupEnabled,
isMtlsEnabled,
lastMaintenanceRunId,
licenseModel,
lifecycleDetails,
lifecycleState,
maintenanceWindow,
maxAcdsLowestScaledValue,
memoryPerOracleComputeUnitInGBs,
memorySizeInGBs,
nextMaintenanceRunId,
nodeCount,
nonProvisionableAutonomousContainerDatabases,
ocpusEnabled,
provisionableAutonomousContainerDatabases,
provisionedAutonomousContainerDatabases,
provisionedCpus,
reclaimableCpus,
reservedCpus,
scanListenerPortNonTls,
scanListenerPortTls,
sgaPercentage,
systemTags,
timeCreated,
timeDatabaseSslCertificateExpires,
timeOrdsCertificateExpires,
timeZone,
totalAutonomousDataStorageInTBs,
totalContainerDatabases,
vmClusterNetworkId
FROM oci.database.autonomous_vm_clusters
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND exadataInfrastructureId = '{{ exadataInfrastructureId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
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

Creates an Autonomous VM cluster for Exadata Cloud@Customer. To create an Autonomous VM Cluster in the Oracle cloud, see &#91;CreateCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/CreateCloudAutonomousVmCluster).&lt;br /&gt;

```sql
INSERT INTO oci.database.autonomous_vm_clusters (
autonomousDataStorageSizeInTBs,
compartmentId,
computeModel,
cpuCoreCountPerNode,
dbServers,
definedTags,
displayName,
distributionAlgorithm,
exadataInfrastructureId,
freeformTags,
isLocalBackupEnabled,
isMtlsEnabled,
licenseModel,
maintenanceWindowDetails,
memoryPerOracleComputeUnitInGBs,
scanListenerPortNonTls,
scanListenerPortTls,
sgaPercentage,
timeZone,
totalContainerDatabases,
vmClusterNetworkId,
region,
opc-retry-token,
opc-request-id
)
SELECT 
{{ autonomousDataStorageSizeInTBs }},
'{{ compartmentId }}' /* required */,
'{{ computeModel }}',
{{ cpuCoreCountPerNode }},
'{{ dbServers }}',
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ distributionAlgorithm }}',
'{{ exadataInfrastructureId }}' /* required */,
'{{ freeformTags }}',
{{ isLocalBackupEnabled }},
{{ isMtlsEnabled }},
'{{ licenseModel }}',
'{{ maintenanceWindowDetails }}',
{{ memoryPerOracleComputeUnitInGBs }},
{{ scanListenerPortNonTls }},
{{ scanListenerPortTls }},
{{ sgaPercentage }},
'{{ timeZone }}',
{{ totalContainerDatabases }},
'{{ vmClusterNetworkId }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
autonomousDataStoragePercentage,
autonomousDataStorageSizeInTBs,
availableAutonomousDataStorageSizeInTBs,
availableContainerDatabases,
availableCpus,
availableDataStorageSizeInTBs,
compartmentId,
computeModel,
cpuCoreCountPerNode,
cpuPercentage,
cpusEnabled,
cpusLowestScaledValue,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
displayName,
distributionAlgorithm,
exadataInfrastructureId,
exadataStorageInTBsLowestScaledValue,
freeformTags,
isLocalBackupEnabled,
isMtlsEnabled,
lastMaintenanceRunId,
licenseModel,
lifecycleDetails,
lifecycleState,
maintenanceWindow,
maxAcdsLowestScaledValue,
memoryPerOracleComputeUnitInGBs,
memorySizeInGBs,
nextMaintenanceRunId,
nodeCount,
nonProvisionableAutonomousContainerDatabases,
ocpusEnabled,
provisionableAutonomousContainerDatabases,
provisionedAutonomousContainerDatabases,
provisionedCpus,
reclaimableCpus,
reservedCpus,
scanListenerPortNonTls,
scanListenerPortTls,
sgaPercentage,
systemTags,
timeCreated,
timeDatabaseSslCertificateExpires,
timeOrdsCertificateExpires,
timeZone,
totalAutonomousDataStorageInTBs,
totalContainerDatabases,
vmClusterNetworkId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: autonomous_vm_clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the autonomous_vm_clusters resource.
    - name: autonomousDataStorageSizeInTBs
      value: {{ autonomousDataStorageSizeInTBs }}
      description: |
        The data disk group size to be allocated for Autonomous Databases, in TBs.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment.
    - name: computeModel
      value: "{{ computeModel }}"
      description: |
        The compute model of the Autonomous VM Cluster. ECPU compute model is the recommended model and OCPU compute model is legacy.
      valid_values: ['ECPU', 'OCPU']
      default: ECPU
    - name: cpuCoreCountPerNode
      value: {{ cpuCoreCountPerNode }}
      description: |
        The number of CPU cores to enable per VM cluster node.
    - name: dbServers
      value:
        - "{{ dbServers }}"
      description: |
        The list of [OCIDs](/Content/General/Concepts/identifiers.htm) of the Db servers.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the Autonomous VM cluster. The name does not need to be unique.
    - name: distributionAlgorithm
      value: "{{ distributionAlgorithm }}"
      description: |
        The distribution algorithm used for the Autonomous VM cluster.
      valid_values: ['RESOURCE_OPTIMIZED', 'DISTRIBUTION_OPTIMIZED']
    - name: exadataInfrastructureId
      value: "{{ exadataInfrastructureId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: isLocalBackupEnabled
      value: {{ isLocalBackupEnabled }}
      description: |
        If true, database backup on local Exadata storage is configured for the Autonomous VM cluster. If false, database backup on local Exadata storage is not available in the Autonomous VM cluster.
    - name: isMtlsEnabled
      value: {{ isMtlsEnabled }}
      description: |
        Enable mutual TLS(mTLS) authentication for database while provisioning a VMCluster. Default is TLS.
      default: false
    - name: licenseModel
      value: "{{ licenseModel }}"
      description: |
        The Oracle license model that applies to the Autonomous VM cluster. The default is BRING_YOUR_OWN_LICENSE.
      valid_values: ['LICENSE_INCLUDED', 'BRING_YOUR_OWN_LICENSE']
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
    - name: memoryPerOracleComputeUnitInGBs
      value: {{ memoryPerOracleComputeUnitInGBs }}
      description: |
        The amount of memory (in GBs) to be enabled per OCPU or ECPU.
    - name: scanListenerPortNonTls
      value: {{ scanListenerPortNonTls }}
      description: |
        The SCAN Listener Non TLS port number. Default value is 1521.
    - name: scanListenerPortTls
      value: {{ scanListenerPortTls }}
      description: |
        The SCAN Listener TLS port number. Default value is 2484.
    - name: sgaPercentage
      value: {{ sgaPercentage }}
      description: |
        Percentage of ECPU memory allocated for SGA(System Global Area).
    - name: timeZone
      value: "{{ timeZone }}"
      description: |
        The time zone to use for the Autonomous VM cluster. For details, see [DB System Time Zones](/Content/Database/References/timezones.htm).
    - name: totalContainerDatabases
      value: {{ totalContainerDatabases }}
      description: |
        The total number of Autonomous Container Databases that can be created.
    - name: vmClusterNetworkId
      value: "{{ vmClusterNetworkId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the VM cluster network.
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

Updates the specified Autonomous VM cluster for the Exadata Cloud@Customer system.To update an Autonomous VM Cluster in the Oracle cloud, see &#91;UpdateCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/UpdateCloudAutonomousVmCluster).&lt;br /&gt;

```sql
UPDATE oci.database.autonomous_vm_clusters
SET 
autonomousDataStorageSizeInTBs = {{ autonomousDataStorageSizeInTBs }},
cpuCoreCountPerNode = {{ cpuCoreCountPerNode }},
definedTags = '{{ definedTags }}',
distributionAlgorithm = '{{ distributionAlgorithm }}',
freeformTags = '{{ freeformTags }}',
isMtlsEnabled = {{ isMtlsEnabled }},
licenseModel = '{{ licenseModel }}',
maintenanceWindowDetails = '{{ maintenanceWindowDetails }}',
scanListenerPortNonTls = {{ scanListenerPortNonTls }},
scanListenerPortTls = {{ scanListenerPortTls }},
timeZone = '{{ timeZone }}',
totalContainerDatabases = {{ totalContainerDatabases }}
WHERE 
autonomousVmClusterId = '{{ autonomousVmClusterId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
autonomousDataStoragePercentage,
autonomousDataStorageSizeInTBs,
availableAutonomousDataStorageSizeInTBs,
availableContainerDatabases,
availableCpus,
availableDataStorageSizeInTBs,
compartmentId,
computeModel,
cpuCoreCountPerNode,
cpuPercentage,
cpusEnabled,
cpusLowestScaledValue,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
displayName,
distributionAlgorithm,
exadataInfrastructureId,
exadataStorageInTBsLowestScaledValue,
freeformTags,
isLocalBackupEnabled,
isMtlsEnabled,
lastMaintenanceRunId,
licenseModel,
lifecycleDetails,
lifecycleState,
maintenanceWindow,
maxAcdsLowestScaledValue,
memoryPerOracleComputeUnitInGBs,
memorySizeInGBs,
nextMaintenanceRunId,
nodeCount,
nonProvisionableAutonomousContainerDatabases,
ocpusEnabled,
provisionableAutonomousContainerDatabases,
provisionedAutonomousContainerDatabases,
provisionedCpus,
reclaimableCpus,
reservedCpus,
scanListenerPortNonTls,
scanListenerPortTls,
sgaPercentage,
systemTags,
timeCreated,
timeDatabaseSslCertificateExpires,
timeOrdsCertificateExpires,
timeZone,
totalAutonomousDataStorageInTBs,
totalContainerDatabases,
vmClusterNetworkId;
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

Deletes the specified Autonomous VM cluster in an Exadata Cloud@Customer system. To delete an Autonomous VM Cluster in the Oracle cloud, see &#91;DeleteCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/DeleteCloudAutonomousVmCluster).&lt;br /&gt;

```sql
DELETE FROM oci.database.autonomous_vm_clusters
WHERE autonomousVmClusterId = '{{ autonomousVmClusterId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_compartment"
    values={[
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'restart_autonomous_vm_cluster_ords', value: 'restart_autonomous_vm_cluster_ords' },
        { label: 'rotate_autonomous_vm_cluster_ords_certs', value: 'rotate_autonomous_vm_cluster_ords_certs' },
        { label: 'rotate_autonomous_vm_cluster_ssl_certs', value: 'rotate_autonomous_vm_cluster_ssl_certs' }
    ]}
>
<TabItem value="change_compartment">

Moves an Autonomous VM cluster and its dependent resources to another compartment. Applies to Exadata Cloud@Customer  only. For systems in the Oracle cloud, see &#91;ChangeAutonomousVmClusterCompartment&#93;(#/en/database/latest/AutonomousVmCluster/ChangeAutonomousVmClusterCompartment).&lt;br /&gt;

```sql
EXEC oci.database.autonomous_vm_clusters.change_compartment 
@autonomousVmClusterId='{{ autonomousVmClusterId }}' --required, 
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
<TabItem value="restart_autonomous_vm_cluster_ords">

Restarts Oracle REST Data Services (ORDS) for Autonomous Exadata VM cluster.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_vm_clusters.restart_autonomous_vm_cluster_ords 
@autonomousVmClusterId='{{ autonomousVmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="rotate_autonomous_vm_cluster_ords_certs">

Rotates the Oracle REST Data Services (ORDS) certificates for Autonomous Exadata VM cluster.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_vm_clusters.rotate_autonomous_vm_cluster_ords_certs 
@autonomousVmClusterId='{{ autonomousVmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"caBundleId": "{{ caBundleId }}", 
"certificateAuthorityId": "{{ certificateAuthorityId }}", 
"certificateGenerationType": "{{ certificateGenerationType }}", 
"certificateId": "{{ certificateId }}"
}'
;
```
</TabItem>
<TabItem value="rotate_autonomous_vm_cluster_ssl_certs">

Rotates the SSL certificates for Autonomous Exadata VM cluster.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_vm_clusters.rotate_autonomous_vm_cluster_ssl_certs 
@autonomousVmClusterId='{{ autonomousVmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"caBundleId": "{{ caBundleId }}", 
"certificateAuthorityId": "{{ certificateAuthorityId }}", 
"certificateGenerationType": "{{ certificateGenerationType }}", 
"certificateId": "{{ certificateId }}"
}'
;
```
</TabItem>
</Tabs>
