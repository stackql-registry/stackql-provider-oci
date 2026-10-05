--- 
title: cloud_autonomous_vm_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_autonomous_vm_clusters
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

Creates, updates, deletes, gets or lists a <code>cloud_autonomous_vm_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_autonomous_vm_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.cloud_autonomous_vm_clusters" /></td></tr>
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

Information about the cloud VM cluster.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Cloud Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousDataStoragePercentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of the data storage used for the Autonomous AI Databases in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousDataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The data disk group size allocated for Autonomous AI Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain that the cloud Autonomous VM cluster is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="availableAutonomousDataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The data disk group size available for Autonomous AI Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="availableContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of Autonomous Container Databases that can be created with the currently available local storage.</td>
</tr>
<tr>
    <td><CopyableCode code="availableCpus" /></td>
    <td><code>number (float)</code></td>
    <td>CPU cores available for allocation to Autonomous AI Databases.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterTimeZone" /></td>
    <td><code>string (x-obmcs-time-zone)</code></td>
    <td>The time zone of the Cloud Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Cloud Autonomous VM Cluster. ECPU compute model is the recommended model and OCPU compute model is legacy. See &#91;Compute Models in Autonomous AI Database on Dedicated Exadata #Infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbak) for more details.  (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of CPU cores on the cloud Autonomous VM cluster.</td>
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
    <td><CopyableCode code="dataStorageSizeInGBs" /></td>
    <td><code>number (double)</code></td>
    <td>The total data storage allocated, in gigabytes (GB).</td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The total data storage allocated, in terabytes (TB).</td>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User defined description of the cloud Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the cloud Autonomous VM cluster. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="distributionAlgorithm" /></td>
    <td><code>string</code></td>
    <td>The distribution algorithm used for the Autonomous VM cluster. (RESOURCE_OPTIMIZED, DISTRIBUTION_OPTIMIZED)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain name for the cloud Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="exadataStorageInTBsLowestScaledValue" /></td>
    <td><code>number (double)</code></td>
    <td>The lowest value to which exadataStorage (in TBs) can be scaled down.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The hostname for the cloud Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="isMtlsEnabledVmCluster" /></td>
    <td><code>boolean</code></td>
    <td>Enable mutual TLS(mTLS) authentication for database at time of provisioning a VMCluster. This is applicable to database TLS Certificates only. Default is TLS</td>
</tr>
<tr>
    <td><CopyableCode code="lastMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance update history. This value is updated when a maintenance update starts.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the Oracle Autonomous AI Database. Bring your own license (BYOL) allows you to apply your current on-premises Oracle software licenses to equivalent, highly automated Oracle services in the cloud. License Included allows you to subscribe to new Oracle AI Database software licenses and the Oracle AI Database service. Note that when provisioning an &#91;Autonomous AI Database on dedicated Exadata infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html), this attribute must be null. It is already set at the Autonomous Exadata Infrastructure level. When provisioning an &#91;Autonomous AI Database Serverless&#93; (https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html) database, if a value is not specified, the system defaults the value to `BRING_YOUR_OWN_LICENSE`. Bring your own license (BYOL) also allows you to select the DB edition using the optional parameter.  This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, dataStorageSizeInTBs, adminPassword, isMTLSConnectionRequired, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the cloud Autonomous VM cluster. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
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
    <td><code>integer (int32)</code></td>
    <td>The amount of memory (in GBs) to be enabled per OCPU or ECPU. </td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer (int32)</code></td>
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
    <td>The number of database servers in the cloud VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="nonProvisionableAutonomousContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of non-provisionable Autonomous Container Databases in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="ocpuCount" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPU cores on the cloud Autonomous VM cluster. Only 1 decimal place is allowed for the fractional part.</td>
</tr>
<tr>
    <td><CopyableCode code="ocpusLowestScaledValue" /></td>
    <td><code>integer (int32)</code></td>
    <td>The lowest value to which ocpus can be scaled down.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionableAutonomousContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of provisionable Autonomous Container Databases in an Autonomous VM Cluster.</td>
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
    <td><code>number (float)</code></td>
    <td>CPUs that continue to be included in the count of CPUs available to the Autonomous Container Database even after one of its Autonomous AI Database is terminated or scaled down. You can release them to the available CPUs at its parent Autonomous VM Cluster level by restarting the Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="reservedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs reserved in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scanListenerPortNonTls" /></td>
    <td><code>integer</code></td>
    <td>The SCAN Listener Non TLS port. Default is 1521.</td>
</tr>
<tr>
    <td><CopyableCode code="scanListenerPortTls" /></td>
    <td><code>integer</code></td>
    <td>The SCAN Listenenr TLS port. Default is 2484.</td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security Attributes for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="sgaPercentage" /></td>
    <td><code>number (float)</code></td>
    <td>Percentage of ECPU memory allocated for SGA(System Global Area).</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The model name of the Exadata hardware running the cloud Autonomous VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the subnet the cloud Autonomous VM Cluster is associated with.  **Subnet Restrictions:** - For Exadata and virtual machine 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.128.0/20.  These subnets are used by the Oracle Clusterware private interconnect on the database instance. Specifying an overlapping subnet will cause the private interconnect to malfunction. This restriction applies to both the client subnet and backup subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the cloud Autonomous VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeDatabaseSslCertificateExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of Database SSL certificate expiration.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOrdsCertificateExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of ORDS certificate expiration.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date and time that the cloud Autonomous VM cluster was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="totalAutonomousDataStorageInTBs" /></td>
    <td><code>number (float)</code></td>
    <td>The total data disk group size for Autonomous AI Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="totalContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The total number of Autonomous Container Databases that can be created with the allocated local storage.</td>
</tr>
<tr>
    <td><CopyableCode code="totalCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The total number of CPUs in an Autonomous VM Cluster.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details of the cloud Autonomous VM cluster.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Cloud Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousDataStoragePercentage" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of the data storage used for the Autonomous AI Databases in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousDataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The data disk group size allocated for Autonomous AI Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain that the cloud Autonomous VM cluster is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="availableAutonomousDataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The data disk group size available for Autonomous AI Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="availableContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of Autonomous Container Databases that can be created with the currently available local storage.</td>
</tr>
<tr>
    <td><CopyableCode code="availableCpus" /></td>
    <td><code>number (float)</code></td>
    <td>CPU cores available for allocation to Autonomous AI Databases.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterTimeZone" /></td>
    <td><code>string (x-obmcs-time-zone)</code></td>
    <td>The time zone of the Cloud Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Cloud Autonomous VM Cluster. ECPU compute model is the recommended model and OCPU compute model is legacy. See &#91;Compute Models in Autonomous AI Database on Dedicated Exadata #Infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbak) for more details.  (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of CPU cores on the cloud Autonomous VM cluster.</td>
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
    <td><CopyableCode code="dataStorageSizeInGBs" /></td>
    <td><code>number (double)</code></td>
    <td>The total data storage allocated, in gigabytes (GB).</td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The total data storage allocated, in terabytes (TB).</td>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>User defined description of the cloud Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the cloud Autonomous VM cluster. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="distributionAlgorithm" /></td>
    <td><code>string</code></td>
    <td>The distribution algorithm used for the Autonomous VM cluster. (RESOURCE_OPTIMIZED, DISTRIBUTION_OPTIMIZED)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain name for the cloud Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="exadataStorageInTBsLowestScaledValue" /></td>
    <td><code>number (double)</code></td>
    <td>The lowest value to which exadataStorage (in TBs) can be scaled down.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The hostname for the cloud Autonomous VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="isMtlsEnabledVmCluster" /></td>
    <td><code>boolean</code></td>
    <td>Enable mutual TLS(mTLS) authentication for database at time of provisioning a VMCluster. This is applicable to database TLS Certificates only. Default is TLS</td>
</tr>
<tr>
    <td><CopyableCode code="lastMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance update history. This value is updated when a maintenance update starts.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the Oracle Autonomous AI Database. Bring your own license (BYOL) allows you to apply your current on-premises Oracle software licenses to equivalent, highly automated Oracle services in the cloud. License Included allows you to subscribe to new Oracle AI Database software licenses and the Oracle AI Database service. Note that when provisioning an &#91;Autonomous AI Database on dedicated Exadata infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html), this attribute must be null. It is already set at the Autonomous Exadata Infrastructure level. When provisioning an &#91;Autonomous AI Database Serverless&#93; (https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html) database, if a value is not specified, the system defaults the value to `BRING_YOUR_OWN_LICENSE`. Bring your own license (BYOL) also allows you to select the DB edition using the optional parameter.  This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, dataStorageSizeInTBs, adminPassword, isMTLSConnectionRequired, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the cloud Autonomous VM cluster. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
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
    <td><code>integer (int32)</code></td>
    <td>The amount of memory (in GBs) to be enabled per OCPU or ECPU. </td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer (int32)</code></td>
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
    <td>The number of database servers in the cloud VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="nonProvisionableAutonomousContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of non-provisionable Autonomous Container Databases in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="ocpuCount" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPU cores on the cloud Autonomous VM cluster. Only 1 decimal place is allowed for the fractional part.</td>
</tr>
<tr>
    <td><CopyableCode code="ocpusLowestScaledValue" /></td>
    <td><code>integer (int32)</code></td>
    <td>The lowest value to which ocpus can be scaled down.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionableAutonomousContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The number of provisionable Autonomous Container Databases in an Autonomous VM Cluster.</td>
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
    <td><code>number (float)</code></td>
    <td>CPUs that continue to be included in the count of CPUs available to the Autonomous Container Database even after one of its Autonomous AI Database is terminated or scaled down. You can release them to the available CPUs at its parent Autonomous VM Cluster level by restarting the Autonomous Container Database. </td>
</tr>
<tr>
    <td><CopyableCode code="reservedCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The number of CPUs reserved in an Autonomous VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="scanListenerPortNonTls" /></td>
    <td><code>integer</code></td>
    <td>The SCAN Listener Non TLS port. Default is 1521.</td>
</tr>
<tr>
    <td><CopyableCode code="scanListenerPortTls" /></td>
    <td><code>integer</code></td>
    <td>The SCAN Listenenr TLS port. Default is 2484.</td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security Attributes for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="sgaPercentage" /></td>
    <td><code>number (float)</code></td>
    <td>Percentage of ECPU memory allocated for SGA(System Global Area).</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The model name of the Exadata hardware running the cloud Autonomous VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the subnet the cloud Autonomous VM Cluster is associated with.  **Subnet Restrictions:** - For Exadata and virtual machine 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.128.0/20.  These subnets are used by the Oracle Clusterware private interconnect on the database instance. Specifying an overlapping subnet will cause the private interconnect to malfunction. This restriction applies to both the client subnet and backup subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the cloud Autonomous VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeDatabaseSslCertificateExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of Database SSL certificate expiration.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOrdsCertificateExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of ORDS certificate expiration.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date and time that the cloud Autonomous VM cluster was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="totalAutonomousDataStorageInTBs" /></td>
    <td><code>number (float)</code></td>
    <td>The total data disk group size for Autonomous AI Databases, in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="totalContainerDatabases" /></td>
    <td><code>integer</code></td>
    <td>The total number of Autonomous Container Databases that can be created with the allocated local storage.</td>
</tr>
<tr>
    <td><CopyableCode code="totalCpus" /></td>
    <td><code>number (float)</code></td>
    <td>The total number of CPUs in an Autonomous VM Cluster.</td>
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
    <td><a href="#parameter-cloudAutonomousVmClusterId"><code>cloudAutonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified Autonomous Exadata VM cluster in the Oracle cloud. For Exadata Cloud@Custustomer systems, see &#91;GetAutonomousVmCluster &#93;(#/en/database/latest/AutonomousVmCluster/GetAutonomousVmCluster).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists Autonomous Exadata VM clusters in the Oracle cloud. For Exadata Cloud@Customer systems, see &#91;ListAutonomousVmClusters&#93;(#/en/database/latest/AutonomousVmCluster/ListAutonomousVmClusters).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a>, <a href="#parameter-subnetId"><code>subnetId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates an Autonomous Exadata VM cluster in the Oracle cloud. For Exadata Cloud@Customer systems, see &#91;CreateAutonomousVmCluster&#93;(#/en/database/latest/AutonomousVmCluster/CreateAutonomousVmCluster).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cloudAutonomousVmClusterId"><code>cloudAutonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified Autonomous Exadata VM cluster in the Oracle cloud. For Exadata Cloud@Customer systems, see &#91;UpdateAutonomousVmCluster&#93;(#/en/database/latest/AutonomousVmCluster/UpdateAutonomousVmCluster).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cloudAutonomousVmClusterId"><code>cloudAutonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the specified Autonomous Exadata VM cluster in the Oracle cloud. For Exadata Cloud@Customer systems, see &#91;DeleteAutonomousVmCluster&#93;(#/en/database/latest/AutonomousVmCluster/DeleteAutonomousVmCluster).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cloudAutonomousVmClusterId"><code>cloudAutonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Moves an Autonomous Exadata VM cluster in the Oracle cloud and its dependent resources to another compartment. For Exadata Cloud@Customer systems, see &#91;ChangeAutonomousVmClusterCompartment&#93;(#/en/database/latest/AutonomousVmCluster/ChangeAutonomousVmClusterCompartment).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#restart_cloud_autonomous_vm_cluster_ords"><CopyableCode code="restart_cloud_autonomous_vm_cluster_ords" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cloudAutonomousVmClusterId"><code>cloudAutonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Restarts Oracle REST Data Services (ORDS) for a cloud Autonomous Exadata VM cluster.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#rotate_cloud_autonomous_vm_cluster_ords_certs"><CopyableCode code="rotate_cloud_autonomous_vm_cluster_ords_certs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cloudAutonomousVmClusterId"><code>cloudAutonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-certificateGenerationType"><code>certificateGenerationType</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Rotates the Oracle REST Data Services (ORDS) certificates for a cloud Autonomous Exadata VM cluster.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#rotate_cloud_autonomous_vm_cluster_ssl_certs"><CopyableCode code="rotate_cloud_autonomous_vm_cluster_ssl_certs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cloudAutonomousVmClusterId"><code>cloudAutonomousVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-certificateGenerationType"><code>certificateGenerationType</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Rotates the SSL certficates for a cloud Autonomous Exadata VM cluster.&lt;br /&gt;</td>
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
<tr id="parameter-cloudAutonomousVmClusterId">
    <td><CopyableCode code="cloudAutonomousVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The Cloud VM cluster &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
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
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given availability domain exactly.</td>
</tr>
<tr id="parameter-cloudExadataInfrastructureId">
    <td><CopyableCode code="cloudExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>If provided, filters the results for the specified cloud Exadata infrastructure.</td>
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

Gets information about the specified Autonomous Exadata VM cluster in the Oracle cloud. For Exadata Cloud@Custustomer systems, see &#91;GetAutonomousVmCluster &#93;(#/en/database/latest/AutonomousVmCluster/GetAutonomousVmCluster).&lt;br /&gt;

```sql
SELECT
id,
autonomousDataStoragePercentage,
autonomousDataStorageSizeInTBs,
availabilityDomain,
availableAutonomousDataStorageSizeInTBs,
availableContainerDatabases,
availableCpus,
cloudExadataInfrastructureId,
clusterTimeZone,
compartmentId,
computeModel,
cpuCoreCount,
cpuCoreCountPerNode,
cpuPercentage,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
description,
displayName,
distributionAlgorithm,
domain,
exadataStorageInTBsLowestScaledValue,
freeformTags,
hostname,
isMtlsEnabledVmCluster,
lastMaintenanceRunId,
lastUpdateHistoryEntryId,
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
nsgIds,
ocpuCount,
ocpusLowestScaledValue,
provisionableAutonomousContainerDatabases,
provisionedAutonomousContainerDatabases,
provisionedCpus,
reclaimableCpus,
reservedCpus,
scanListenerPortNonTls,
scanListenerPortTls,
securityAttributes,
sgaPercentage,
shape,
subnetId,
systemTags,
timeCreated,
timeDatabaseSslCertificateExpires,
timeOrdsCertificateExpires,
timeUpdated,
totalAutonomousDataStorageInTBs,
totalContainerDatabases,
totalCpus
FROM oci.database.cloud_autonomous_vm_clusters
WHERE cloudAutonomousVmClusterId = '{{ cloudAutonomousVmClusterId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists Autonomous Exadata VM clusters in the Oracle cloud. For Exadata Cloud@Customer systems, see &#91;ListAutonomousVmClusters&#93;(#/en/database/latest/AutonomousVmCluster/ListAutonomousVmClusters).&lt;br /&gt;

```sql
SELECT
id,
autonomousDataStoragePercentage,
autonomousDataStorageSizeInTBs,
availabilityDomain,
availableAutonomousDataStorageSizeInTBs,
availableContainerDatabases,
availableCpus,
cloudExadataInfrastructureId,
clusterTimeZone,
compartmentId,
computeModel,
cpuCoreCount,
cpuCoreCountPerNode,
cpuPercentage,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
description,
displayName,
distributionAlgorithm,
domain,
exadataStorageInTBsLowestScaledValue,
freeformTags,
hostname,
isMtlsEnabledVmCluster,
lastMaintenanceRunId,
lastUpdateHistoryEntryId,
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
nsgIds,
ocpuCount,
ocpusLowestScaledValue,
provisionableAutonomousContainerDatabases,
provisionedAutonomousContainerDatabases,
provisionedCpus,
reclaimableCpus,
reservedCpus,
scanListenerPortNonTls,
scanListenerPortTls,
securityAttributes,
sgaPercentage,
shape,
subnetId,
systemTags,
timeCreated,
timeDatabaseSslCertificateExpires,
timeOrdsCertificateExpires,
timeUpdated,
totalAutonomousDataStorageInTBs,
totalContainerDatabases,
totalCpus
FROM oci.database.cloud_autonomous_vm_clusters
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND cloudExadataInfrastructureId = '{{ cloudExadataInfrastructureId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND availabilityDomain = '{{ availabilityDomain }}'
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

Creates an Autonomous Exadata VM cluster in the Oracle cloud. For Exadata Cloud@Customer systems, see &#91;CreateAutonomousVmCluster&#93;(#/en/database/latest/AutonomousVmCluster/CreateAutonomousVmCluster).&lt;br /&gt;

```sql
INSERT INTO oci.database.cloud_autonomous_vm_clusters (
autonomousDataStorageSizeInTBs,
cloudExadataInfrastructureId,
clusterTimeZone,
compartmentId,
computeModel,
cpuCoreCountPerNode,
dbServers,
definedTags,
description,
displayName,
distributionAlgorithm,
freeformTags,
isMtlsEnabledVmCluster,
licenseModel,
maintenanceWindowDetails,
memoryPerOracleComputeUnitInGBs,
nsgIds,
scanListenerPortNonTls,
scanListenerPortTls,
securityAttributes,
sgaPercentage,
subnetId,
totalContainerDatabases,
region,
opc-retry-token,
opc-request-id
)
SELECT 
{{ autonomousDataStorageSizeInTBs }},
'{{ cloudExadataInfrastructureId }}' /* required */,
'{{ clusterTimeZone }}',
'{{ compartmentId }}' /* required */,
'{{ computeModel }}',
{{ cpuCoreCountPerNode }},
'{{ dbServers }}',
'{{ definedTags }}',
'{{ description }}',
'{{ displayName }}' /* required */,
'{{ distributionAlgorithm }}',
'{{ freeformTags }}',
{{ isMtlsEnabledVmCluster }},
'{{ licenseModel }}',
'{{ maintenanceWindowDetails }}',
{{ memoryPerOracleComputeUnitInGBs }},
'{{ nsgIds }}',
{{ scanListenerPortNonTls }},
{{ scanListenerPortTls }},
'{{ securityAttributes }}',
{{ sgaPercentage }},
'{{ subnetId }}' /* required */,
{{ totalContainerDatabases }},
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
autonomousDataStoragePercentage,
autonomousDataStorageSizeInTBs,
availabilityDomain,
availableAutonomousDataStorageSizeInTBs,
availableContainerDatabases,
availableCpus,
cloudExadataInfrastructureId,
clusterTimeZone,
compartmentId,
computeModel,
cpuCoreCount,
cpuCoreCountPerNode,
cpuPercentage,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
description,
displayName,
distributionAlgorithm,
domain,
exadataStorageInTBsLowestScaledValue,
freeformTags,
hostname,
isMtlsEnabledVmCluster,
lastMaintenanceRunId,
lastUpdateHistoryEntryId,
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
nsgIds,
ocpuCount,
ocpusLowestScaledValue,
provisionableAutonomousContainerDatabases,
provisionedAutonomousContainerDatabases,
provisionedCpus,
reclaimableCpus,
reservedCpus,
scanListenerPortNonTls,
scanListenerPortTls,
securityAttributes,
sgaPercentage,
shape,
subnetId,
systemTags,
timeCreated,
timeDatabaseSslCertificateExpires,
timeOrdsCertificateExpires,
timeUpdated,
totalAutonomousDataStorageInTBs,
totalContainerDatabases,
totalCpus
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cloud_autonomous_vm_clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cloud_autonomous_vm_clusters resource.
    - name: autonomousDataStorageSizeInTBs
      value: {{ autonomousDataStorageSizeInTBs }}
      description: |
        The data disk group size to be allocated for Autonomous AI Databases, in TBs.
    - name: cloudExadataInfrastructureId
      value: "{{ cloudExadataInfrastructureId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure.
    - name: clusterTimeZone
      value: "{{ clusterTimeZone }}"
      description: |
        The time zone to use for the Cloud Autonomous VM cluster. For details, see [DB System Time Zones](/Content/Database/References/timezones.htm).
      default: Etc/UTC
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment.
    - name: computeModel
      value: "{{ computeModel }}"
      description: |
        The compute model of the Cloud Autonomous VM Cluster. ECPU compute model is the recommended model and OCPU compute model is legacy.
      valid_values: ['ECPU', 'OCPU']
      default: ECPU
    - name: cpuCoreCountPerNode
      value: {{ cpuCoreCountPerNode }}
      description: |
        The number of CPU cores to be enabled per VM cluster node.
    - name: dbServers
      value:
        - "{{ dbServers }}"
      description: |
        The list of database servers.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: description
      value: "{{ description }}"
      description: |
        User defined description of the cloud Autonomous VM cluster.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the cloud Autonomous VM cluster. The name does not need to be unique.
    - name: distributionAlgorithm
      value: "{{ distributionAlgorithm }}"
      description: |
        The distribution algorithm used for the Autonomous VM cluster.
      valid_values: ['RESOURCE_OPTIMIZED', 'DISTRIBUTION_OPTIMIZED']
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: isMtlsEnabledVmCluster
      value: {{ isMtlsEnabledVmCluster }}
      description: |
        Enable mutual TLS(mTLS) authentication for database at time of provisioning a VMCluster. This is applicable to database TLS Certificates only. Default is TLS
      default: false
    - name: licenseModel
      value: "{{ licenseModel }}"
      description: |
        The Oracle license model that applies to the Oracle Autonomous AI Database. Bring your own license (BYOL) allows you to apply your current on-premises Oracle software licenses to equivalent, highly automated Oracle services in the cloud.
        License Included allows you to subscribe to new Oracle AI Database software licenses and the Oracle AI Database service.
        Note that when provisioning an [Autonomous AI Database on dedicated Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html), this attribute must be null. It is already set at the
        Autonomous Exadata Infrastructure level. When provisioning an [Autonomous AI Database Serverless] (https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html) database, if a value is not specified, the system defaults the value to \`BRING_YOUR_OWN_LICENSE\`. Bring your own license (BYOL) also allows you to select the DB edition using the optional parameter.
        This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, dataStorageSizeInTBs, adminPassword, isMTLSConnectionRequired, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
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
    - name: nsgIds
      value:
        - "{{ nsgIds }}"
      description: |
        The list of [OCIDs](/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](/Content/Network/Concepts/securityrules.htm).
    - name: scanListenerPortNonTls
      value: {{ scanListenerPortNonTls }}
      description: |
        The SCAN Listener Non TLS port. Default is 1521.
    - name: scanListenerPortTls
      value: {{ scanListenerPortTls }}
      description: |
        The SCAN Listener TLS port. Default is 2484.
    - name: securityAttributes
      value: "{{ securityAttributes }}"
      description: |
        Security Attributes for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Oracle-ZPR": {"MaxEgressCount": {"value": "42", "mode": "audit"}}}\`
    - name: sgaPercentage
      value: {{ sgaPercentage }}
      description: |
        Percentage of ECPU memory allocated for SGA(System Global Area).
    - name: subnetId
      value: "{{ subnetId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the subnet the cloud Autonomous VM Cluster is associated with.
    - name: totalContainerDatabases
      value: {{ totalContainerDatabases }}
      description: |
        The total number of Autonomous Container Databases that can be created.
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

Updates the specified Autonomous Exadata VM cluster in the Oracle cloud. For Exadata Cloud@Customer systems, see &#91;UpdateAutonomousVmCluster&#93;(#/en/database/latest/AutonomousVmCluster/UpdateAutonomousVmCluster).&lt;br /&gt;

```sql
UPDATE oci.database.cloud_autonomous_vm_clusters
SET 
autonomousDataStorageSizeInTBs = {{ autonomousDataStorageSizeInTBs }},
clusterTimeZone = '{{ clusterTimeZone }}',
cpuCoreCountPerNode = {{ cpuCoreCountPerNode }},
definedTags = '{{ definedTags }}',
description = '{{ description }}',
displayName = '{{ displayName }}',
distributionAlgorithm = '{{ distributionAlgorithm }}',
freeformTags = '{{ freeformTags }}',
isMtlsEnabledVmCluster = {{ isMtlsEnabledVmCluster }},
licenseModel = '{{ licenseModel }}',
maintenanceWindowDetails = '{{ maintenanceWindowDetails }}',
nsgIds = '{{ nsgIds }}',
scanListenerPortNonTls = {{ scanListenerPortNonTls }},
scanListenerPortTls = {{ scanListenerPortTls }},
securityAttributes = '{{ securityAttributes }}',
totalContainerDatabases = {{ totalContainerDatabases }}
WHERE 
cloudAutonomousVmClusterId = '{{ cloudAutonomousVmClusterId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
autonomousDataStoragePercentage,
autonomousDataStorageSizeInTBs,
availabilityDomain,
availableAutonomousDataStorageSizeInTBs,
availableContainerDatabases,
availableCpus,
cloudExadataInfrastructureId,
clusterTimeZone,
compartmentId,
computeModel,
cpuCoreCount,
cpuCoreCountPerNode,
cpuPercentage,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
description,
displayName,
distributionAlgorithm,
domain,
exadataStorageInTBsLowestScaledValue,
freeformTags,
hostname,
isMtlsEnabledVmCluster,
lastMaintenanceRunId,
lastUpdateHistoryEntryId,
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
nsgIds,
ocpuCount,
ocpusLowestScaledValue,
provisionableAutonomousContainerDatabases,
provisionedAutonomousContainerDatabases,
provisionedCpus,
reclaimableCpus,
reservedCpus,
scanListenerPortNonTls,
scanListenerPortTls,
securityAttributes,
sgaPercentage,
shape,
subnetId,
systemTags,
timeCreated,
timeDatabaseSslCertificateExpires,
timeOrdsCertificateExpires,
timeUpdated,
totalAutonomousDataStorageInTBs,
totalContainerDatabases,
totalCpus;
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

Deletes the specified Autonomous Exadata VM cluster in the Oracle cloud. For Exadata Cloud@Customer systems, see &#91;DeleteAutonomousVmCluster&#93;(#/en/database/latest/AutonomousVmCluster/DeleteAutonomousVmCluster).&lt;br /&gt;

```sql
DELETE FROM oci.database.cloud_autonomous_vm_clusters
WHERE cloudAutonomousVmClusterId = '{{ cloudAutonomousVmClusterId }}' --required
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
        { label: 'restart_cloud_autonomous_vm_cluster_ords', value: 'restart_cloud_autonomous_vm_cluster_ords' },
        { label: 'rotate_cloud_autonomous_vm_cluster_ords_certs', value: 'rotate_cloud_autonomous_vm_cluster_ords_certs' },
        { label: 'rotate_cloud_autonomous_vm_cluster_ssl_certs', value: 'rotate_cloud_autonomous_vm_cluster_ssl_certs' }
    ]}
>
<TabItem value="change_compartment">

Moves an Autonomous Exadata VM cluster in the Oracle cloud and its dependent resources to another compartment. For Exadata Cloud@Customer systems, see &#91;ChangeAutonomousVmClusterCompartment&#93;(#/en/database/latest/AutonomousVmCluster/ChangeAutonomousVmClusterCompartment).&lt;br /&gt;

```sql
EXEC oci.database.cloud_autonomous_vm_clusters.change_compartment 
@cloudAutonomousVmClusterId='{{ cloudAutonomousVmClusterId }}' --required, 
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
<TabItem value="restart_cloud_autonomous_vm_cluster_ords">

Restarts Oracle REST Data Services (ORDS) for a cloud Autonomous Exadata VM cluster.&lt;br /&gt;

```sql
EXEC oci.database.cloud_autonomous_vm_clusters.restart_cloud_autonomous_vm_cluster_ords 
@cloudAutonomousVmClusterId='{{ cloudAutonomousVmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="rotate_cloud_autonomous_vm_cluster_ords_certs">

Rotates the Oracle REST Data Services (ORDS) certificates for a cloud Autonomous Exadata VM cluster.&lt;br /&gt;

```sql
EXEC oci.database.cloud_autonomous_vm_clusters.rotate_cloud_autonomous_vm_cluster_ords_certs 
@cloudAutonomousVmClusterId='{{ cloudAutonomousVmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
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
<TabItem value="rotate_cloud_autonomous_vm_cluster_ssl_certs">

Rotates the SSL certficates for a cloud Autonomous Exadata VM cluster.&lt;br /&gt;

```sql
EXEC oci.database.cloud_autonomous_vm_clusters.rotate_cloud_autonomous_vm_cluster_ssl_certs 
@cloudAutonomousVmClusterId='{{ cloudAutonomousVmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
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
