--- 
title: cloud_vm_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_vm_clusters
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

Creates, updates, deletes, gets or lists a <code>cloud_vm_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_vm_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.cloud_vm_clusters" /></td></tr>
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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the cloud VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain that the cloud Exadata infrastructure resource is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="backupNetworkNsgIds" /></td>
    <td><code>array</code></td>
    <td>A list of the &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems. </td>
</tr>
<tr>
    <td><CopyableCode code="backupSubnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup network subnet associated with the cloud VM cluster.  **Subnet Restriction:** See the subnet restrictions information for **subnetId**. </td>
</tr>
<tr>
    <td><CopyableCode code="cloudExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>The cluster name for cloud VM cluster. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Base Database, Exadata Infrastructure, VM Cluster and Autonomous AI Database.  (ECPU, OCPU) (x-default-description: Null used when unspecified.)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of CPU cores enabled on the cloud VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="dataCollectionOptions" /></td>
    <td><code>object</code></td>
    <td>Indicates user preferences for the various diagnostic collection options for the VM cluster/Cloud VM cluster/VMBM DBCS. </td>
</tr>
<tr>
    <td><CopyableCode code="dataStoragePercentage" /></td>
    <td><code>integer (int32)</code></td>
    <td>The percentage assigned to DATA storage (user data and database files). See &#91;Storage Configuration&#93;(/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage. </td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The data disk group size to be allocated in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The local node storage to be allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServers" /></td>
    <td><code>array</code></td>
    <td>The list of DB servers.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="diskRedundancy" /></td>
    <td><code>string</code></td>
    <td>The type of redundancy configured for the cloud Vm cluster. NORMAL is 2-way redundancy. HIGH is 3-way redundancy.  (HIGH, NORMAL)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the cloud VM cluster. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain name for the cloud VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="exascaleDbStorageVaultId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata Database Storage Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="fileSystemConfigurationDetails" /></td>
    <td><code>array</code></td>
    <td>Details of the file system configuration of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="giSoftwareImageId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of a grid infrastructure software image. This is a database software image of the type `GRID_IMAGE`.</td>
</tr>
<tr>
    <td><CopyableCode code="giVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Grid Infrastructure (GI) software version.</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The hostname for the cloud VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="iormConfigCache" /></td>
    <td><code>object</code></td>
    <td>The IORM settings of the Exadata DB system. </td>
</tr>
<tr>
    <td><CopyableCode code="isLocalBackupEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, database backup on local Exadata storage is configured for the cloud VM cluster. If false, database backup on local Exadata storage is not available in the cloud VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="isSparseDiskgroupEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, sparse disk group is configured for the cloud VM cluster. If false, sparse disk group is not created. </td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance update history entry. This value is updated when a maintenance update starts.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the cloud VM cluster. The default is LICENSE_INCLUDED.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the cloud VM cluster. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="listenerPort" /></td>
    <td><code>integer (int64)</code></td>
    <td>The port number configured for the listener on the cloud VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The memory to be allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="multiCloudIdentityConnectorConfigs" /></td>
    <td><code>array</code></td>
    <td>Details of the multi cloud identity connectors of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes in the cloud VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="ocpuCount" /></td>
    <td><code>number (float)</code></td>
    <td>The number of OCPU cores to enable on the cloud VM cluster. Only 1 decimal place is allowed for the fractional part.</td>
</tr>
<tr>
    <td><CopyableCode code="recoStoragePercentage" /></td>
    <td><code>integer (int32)</code></td>
    <td>The percentage assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). See &#91;Storage Configuration&#93;(/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage. </td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsName" /></td>
    <td><code>string</code></td>
    <td>The FQDN of the DNS record for the SCAN IP addresses that are associated with the cloud VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsRecordId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DNS record for the SCAN IP addresses that are associated with the cloud VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="scanIpIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Single Client Access Name (SCAN) IP addresses associated with the cloud VM cluster. SCAN IP addresses are typically used for load balancing and are not assigned to any interface. Oracle Clusterware directs the requests to the appropriate nodes in the cluster.  **Note:** For a single-node DB system, this list is empty. </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security Attributes for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The model name of the Exadata hardware running the cloud VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="sparseStoragePercentage" /></td>
    <td><code>integer (int32)</code></td>
    <td>The percentage assigned to SPARSE storage (Exadata snapshots). See &#91;Storage Configuration&#93;(/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage. </td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKeys" /></td>
    <td><code>array</code></td>
    <td>The public key portion of one or more key pairs used for SSH access to the cloud VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="storageManagementType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of storage management for the Cloud VM Cluster if its ASM or Exascale. (ASM, EXASCALE)</td>
</tr>
<tr>
    <td><CopyableCode code="storageSizeInGBs" /></td>
    <td><code>integer (int32)</code></td>
    <td>The storage allocation for the disk group, in gigabytes (GB).</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the subnet associated with the cloud VM cluster.  **Subnet Restrictions:** - For Exadata and virtual machine 2-node RAC systems, do not use a subnet that overlaps with 192.168.128.0/20.  These subnets are used by the Oracle Clusterware private interconnect on the database instance. Specifying an overlapping subnet will cause the private interconnect to malfunction. This restriction applies to both the client subnet and backup subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the subscription with which resource needs to be associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="systemVersion" /></td>
    <td><code>string</code></td>
    <td>Operating system version of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="tdeKeyStoreType" /></td>
    <td><code>string</code></td>
    <td>TDE keystore type (AZURE, OCI) (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the cloud VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the cloud VM cluster. For details, see &#91;Exadata Infrastructure Time Zones&#93;(/Content/Database/References/timezones.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="vipIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the virtual IP (VIP) addresses associated with the cloud VM cluster. The Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the Exadata Cloud Service instance to enable failover. If one node fails, the VIP is reassigned to another active node in the cluster.  **Note:** For a single-node DB system, this list is empty. </td>
</tr>
<tr>
    <td><CopyableCode code="vmBackupStorageType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of VM Backups Storage and supported values are LOCAL and EXASCALE. - LOCAL if selected then VM Backups storage will be on DB Servers. - EXASCALE if selected then VM Backups storage will be on Exascale Storage Servers. Default Value is LOCAL (LOCAL, EXASCALE)</td>
</tr>
<tr>
    <td><CopyableCode code="vmFileSystemStorageType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of file system storage and supported values are LOCAL and EXASCALE. - LOCAL if selected then file system storage will be on DB Servers. - EXASCALE if selected then file system storage will be on Exascale Storage Servers. Default Value is LOCAL (LOCAL, EXASCALE)</td>
</tr>
<tr>
    <td><CopyableCode code="zoneId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the zone the cloud VM cluster is associated with. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details of the cloud VM cluster. Applies to Exadata Cloud Service instances only.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the cloud VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain that the cloud Exadata infrastructure resource is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="backupNetworkNsgIds" /></td>
    <td><code>array</code></td>
    <td>A list of the &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems. </td>
</tr>
<tr>
    <td><CopyableCode code="backupSubnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup network subnet associated with the cloud VM cluster.  **Subnet Restriction:** See the subnet restrictions information for **subnetId**. </td>
</tr>
<tr>
    <td><CopyableCode code="cloudExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>The cluster name for cloud VM cluster. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Base Database, Exadata Infrastructure, VM Cluster and Autonomous AI Database.  (ECPU, OCPU) (x-default-description: Null used when unspecified.)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of CPU cores enabled on the cloud VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="dataCollectionOptions" /></td>
    <td><code>object</code></td>
    <td>Indicates user preferences for the various diagnostic collection options for the VM cluster/Cloud VM cluster/VMBM DBCS. </td>
</tr>
<tr>
    <td><CopyableCode code="dataStoragePercentage" /></td>
    <td><code>integer (int32)</code></td>
    <td>The percentage assigned to DATA storage (user data and database files). See &#91;Storage Configuration&#93;(/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage. </td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The data disk group size to be allocated in TBs.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The local node storage to be allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServers" /></td>
    <td><code>array</code></td>
    <td>The list of DB servers.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="diskRedundancy" /></td>
    <td><code>string</code></td>
    <td>The type of redundancy configured for the cloud Vm cluster. NORMAL is 2-way redundancy. HIGH is 3-way redundancy.  (HIGH, NORMAL)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the cloud VM cluster. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain name for the cloud VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="exascaleDbStorageVaultId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata Database Storage Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="fileSystemConfigurationDetails" /></td>
    <td><code>array</code></td>
    <td>Details of the file system configuration of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="giSoftwareImageId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of a grid infrastructure software image. This is a database software image of the type `GRID_IMAGE`.</td>
</tr>
<tr>
    <td><CopyableCode code="giVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Grid Infrastructure (GI) software version.</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The hostname for the cloud VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="isLocalBackupEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, database backup on local Exadata storage is configured for the cloud VM cluster. If false, database backup on local Exadata storage is not available in the cloud VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="isSparseDiskgroupEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, sparse disk group is configured for the cloud VM cluster. If false, sparse disk group is not created. </td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance update history entry. This value is updated when a maintenance update starts.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the cloud VM cluster. The default is LICENSE_INCLUDED.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the cloud VM cluster. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="listenerPort" /></td>
    <td><code>integer (int64)</code></td>
    <td>The port number configured for the listener on the cloud VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The memory to be allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="multiCloudIdentityConnectorConfigs" /></td>
    <td><code>array</code></td>
    <td>Details of the multi cloud identity connectors of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes in the cloud VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="ocpuCount" /></td>
    <td><code>number (float)</code></td>
    <td>The number of OCPU cores to enable on the cloud VM cluster. Only 1 decimal place is allowed for the fractional part.</td>
</tr>
<tr>
    <td><CopyableCode code="recoStoragePercentage" /></td>
    <td><code>integer (int32)</code></td>
    <td>The percentage assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). See &#91;Storage Configuration&#93;(/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage. </td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsName" /></td>
    <td><code>string</code></td>
    <td>The FQDN of the DNS record for the SCAN IP addresses that are associated with the cloud VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsRecordId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DNS record for the SCAN IP addresses that are associated with the cloud VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="scanIpIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Single Client Access Name (SCAN) IP addresses associated with the cloud VM cluster. SCAN IP addresses are typically used for load balancing and are not assigned to any interface. Oracle Clusterware directs the requests to the appropriate nodes in the cluster.  **Note:** For a single-node DB system, this list is empty. </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security Attributes for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The model name of the Exadata hardware running the cloud VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="sparseStoragePercentage" /></td>
    <td><code>integer (int32)</code></td>
    <td>The percentage assigned to SPARSE storage (Exadata snapshots). See &#91;Storage Configuration&#93;(/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage. </td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKeys" /></td>
    <td><code>array</code></td>
    <td>The public key portion of one or more key pairs used for SSH access to the cloud VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="storageManagementType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of storage management for the Cloud VM Cluster if its ASM or Exascale. (ASM, EXASCALE)</td>
</tr>
<tr>
    <td><CopyableCode code="storageSizeInGBs" /></td>
    <td><code>integer (int32)</code></td>
    <td>The storage allocation for the disk group, in gigabytes (GB).</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the subnet associated with the cloud VM cluster.  **Subnet Restrictions:** - For Exadata and virtual machine 2-node RAC systems, do not use a subnet that overlaps with 192.168.128.0/20.  These subnets are used by the Oracle Clusterware private interconnect on the database instance. Specifying an overlapping subnet will cause the private interconnect to malfunction. This restriction applies to both the client subnet and backup subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the subscription with which resource needs to be associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="systemVersion" /></td>
    <td><code>string</code></td>
    <td>Operating system version of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="tdeKeyStoreType" /></td>
    <td><code>string</code></td>
    <td>TDE keystore type (AZURE, OCI) (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the cloud VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the cloud VM cluster. For details, see &#91;Exadata Infrastructure Time Zones&#93;(/Content/Database/References/timezones.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="vipIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the virtual IP (VIP) addresses associated with the cloud VM cluster. The Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the Exadata Cloud Service instance to enable failover. If one node fails, the VIP is reassigned to another active node in the cluster.  **Note:** For a single-node DB system, this list is empty. </td>
</tr>
<tr>
    <td><CopyableCode code="vmBackupStorageType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of VM Backups Storage and supported values are LOCAL and EXASCALE. - LOCAL if selected then VM Backups storage will be on DB Servers. - EXASCALE if selected then VM Backups storage will be on Exascale Storage Servers. Default Value is LOCAL (LOCAL, EXASCALE)</td>
</tr>
<tr>
    <td><CopyableCode code="vmFileSystemStorageType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of file system storage and supported values are LOCAL and EXASCALE. - LOCAL if selected then file system storage will be on DB Servers. - EXASCALE if selected then file system storage will be on Exascale Storage Servers. Default Value is LOCAL (LOCAL, EXASCALE)</td>
</tr>
<tr>
    <td><CopyableCode code="zoneId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the zone the cloud VM cluster is associated with. </td>
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
    <td><a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified cloud VM cluster. Applies to Exadata Cloud Service instances and Autonomous Database on dedicated Exadata infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets a list of the cloud VM clusters in the specified compartment. Applies to Exadata Cloud Service instances and Autonomous Database on dedicated Exadata infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a>, <a href="#parameter-cpuCoreCount"><code>cpuCoreCount</code></a>, <a href="#parameter-sshPublicKeys"><code>sshPublicKeys</code></a>, <a href="#parameter-giVersion"><code>giVersion</code></a>, <a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-backupSubnetId"><code>backupSubnetId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a cloud VM cluster.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified cloud VM cluster. Applies to Exadata Cloud Service instances and Autonomous Database on dedicated Exadata infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the specified cloud VM cluster. Applies to Exadata Cloud Service instances and Autonomous Database on dedicated Exadata infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_virtual_machine_to_cloud_vm_cluster"><CopyableCode code="add_virtual_machine_to_cloud_vm_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dbServers"><code>dbServers</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Add Virtual Machines to the Cloud VM cluster. Applies to Exadata Cloud instances only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Moves a cloud VM cluster and its dependent resources to another compartment. Applies to Exadata Cloud Service instances and Autonomous Database on dedicated Exadata infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_cloud_vm_cluster_subscription"><CopyableCode code="change_cloud_vm_cluster_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Associate a cloud VM cluster with a different subscription.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#register_cloud_vm_cluster_pkcs"><CopyableCode code="register_cloud_vm_cluster_pkcs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-tdeKeyStoreType"><code>tdeKeyStoreType</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Install the PKCS11 driver for given keystore type&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_virtual_machine_from_cloud_vm_cluster"><CopyableCode code="remove_virtual_machine_from_cloud_vm_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dbServers"><code>dbServers</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Remove Virtual Machines from the Cloud VM cluster. Applies to Exadata Cloud instances only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#unregister_cloud_vm_cluster_pkcs"><CopyableCode code="unregister_cloud_vm_cluster_pkcs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-tdeKeyStoreType"><code>tdeKeyStoreType</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Uninstall the PKCS11 driver for given keystore type&lt;br /&gt;</td>
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
<tr id="parameter-cloudVmClusterId">
    <td><CopyableCode code="cloudVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The cloud VM cluster &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
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
    <td>A filter to return only cloud VM clusters that match the given lifecycle state exactly.</td>
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

Gets information about the specified cloud VM cluster. Applies to Exadata Cloud Service instances and Autonomous Database on dedicated Exadata infrastructure only.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
backupNetworkNsgIds,
backupSubnetId,
cloudExadataInfrastructureId,
clusterName,
compartmentId,
computeModel,
cpuCoreCount,
dataCollectionOptions,
dataStoragePercentage,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
diskRedundancy,
displayName,
domain,
exascaleDbStorageVaultId,
fileSystemConfigurationDetails,
freeformTags,
giSoftwareImageId,
giVersion,
hostname,
iormConfigCache,
isLocalBackupEnabled,
isSparseDiskgroupEnabled,
lastUpdateHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
listenerPort,
memorySizeInGBs,
multiCloudIdentityConnectorConfigs,
nodeCount,
nsgIds,
ocpuCount,
recoStoragePercentage,
scanDnsName,
scanDnsRecordId,
scanIpIds,
securityAttributes,
shape,
sparseStoragePercentage,
sshPublicKeys,
storageManagementType,
storageSizeInGBs,
subnetId,
subscriptionId,
systemTags,
systemVersion,
tdeKeyStoreType,
timeCreated,
timeZone,
vipIds,
vmBackupStorageType,
vmFileSystemStorageType,
zoneId
FROM oci.database.cloud_vm_clusters
WHERE cloudVmClusterId = '{{ cloudVmClusterId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of the cloud VM clusters in the specified compartment. Applies to Exadata Cloud Service instances and Autonomous Database on dedicated Exadata infrastructure only.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
backupNetworkNsgIds,
backupSubnetId,
cloudExadataInfrastructureId,
clusterName,
compartmentId,
computeModel,
cpuCoreCount,
dataCollectionOptions,
dataStoragePercentage,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
diskRedundancy,
displayName,
domain,
exascaleDbStorageVaultId,
fileSystemConfigurationDetails,
freeformTags,
giSoftwareImageId,
giVersion,
hostname,
isLocalBackupEnabled,
isSparseDiskgroupEnabled,
lastUpdateHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
listenerPort,
memorySizeInGBs,
multiCloudIdentityConnectorConfigs,
nodeCount,
nsgIds,
ocpuCount,
recoStoragePercentage,
scanDnsName,
scanDnsRecordId,
scanIpIds,
securityAttributes,
shape,
sparseStoragePercentage,
sshPublicKeys,
storageManagementType,
storageSizeInGBs,
subnetId,
subscriptionId,
systemTags,
systemVersion,
tdeKeyStoreType,
timeCreated,
timeZone,
vipIds,
vmBackupStorageType,
vmFileSystemStorageType,
zoneId
FROM oci.database.cloud_vm_clusters
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND cloudExadataInfrastructureId = '{{ cloudExadataInfrastructureId }}'
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

Creates a cloud VM cluster.&lt;br /&gt;

```sql
INSERT INTO oci.database.cloud_vm_clusters (
backupNetworkNsgIds,
backupSubnetId,
cloudExadataInfrastructureId,
clusterName,
compartmentId,
cpuCoreCount,
dataCollectionOptions,
dataStoragePercentage,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
displayName,
domain,
exascaleDbStorageVaultId,
fileSystemConfigurationDetails,
freeformTags,
giVersion,
hostname,
isLocalBackupEnabled,
isSparseDiskgroupEnabled,
licenseModel,
memorySizeInGBs,
nsgIds,
ocpuCount,
privateZoneId,
recoStoragePercentage,
securityAttributes,
sparseStoragePercentage,
sshPublicKeys,
subnetId,
subscriptionId,
systemVersion,
timeZone,
vmBackupStorageType,
vmFileSystemStorageType,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ backupNetworkNsgIds }}',
'{{ backupSubnetId }}' /* required */,
'{{ cloudExadataInfrastructureId }}' /* required */,
'{{ clusterName }}',
'{{ compartmentId }}' /* required */,
{{ cpuCoreCount }} /* required */,
'{{ dataCollectionOptions }}',
{{ dataStoragePercentage }},
{{ dataStorageSizeInTBs }},
{{ dbNodeStorageSizeInGBs }},
'{{ dbServers }}',
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ domain }}',
'{{ exascaleDbStorageVaultId }}',
'{{ fileSystemConfigurationDetails }}',
'{{ freeformTags }}',
'{{ giVersion }}' /* required */,
'{{ hostname }}' /* required */,
{{ isLocalBackupEnabled }},
{{ isSparseDiskgroupEnabled }},
'{{ licenseModel }}',
{{ memorySizeInGBs }},
'{{ nsgIds }}',
{{ ocpuCount }},
'{{ privateZoneId }}',
{{ recoStoragePercentage }},
'{{ securityAttributes }}',
{{ sparseStoragePercentage }},
'{{ sshPublicKeys }}' /* required */,
'{{ subnetId }}' /* required */,
'{{ subscriptionId }}',
'{{ systemVersion }}',
'{{ timeZone }}',
'{{ vmBackupStorageType }}',
'{{ vmFileSystemStorageType }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
availabilityDomain,
backupNetworkNsgIds,
backupSubnetId,
cloudExadataInfrastructureId,
clusterName,
compartmentId,
computeModel,
cpuCoreCount,
dataCollectionOptions,
dataStoragePercentage,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
diskRedundancy,
displayName,
domain,
exascaleDbStorageVaultId,
fileSystemConfigurationDetails,
freeformTags,
giSoftwareImageId,
giVersion,
hostname,
iormConfigCache,
isLocalBackupEnabled,
isSparseDiskgroupEnabled,
lastUpdateHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
listenerPort,
memorySizeInGBs,
multiCloudIdentityConnectorConfigs,
nodeCount,
nsgIds,
ocpuCount,
recoStoragePercentage,
scanDnsName,
scanDnsRecordId,
scanIpIds,
securityAttributes,
shape,
sparseStoragePercentage,
sshPublicKeys,
storageManagementType,
storageSizeInGBs,
subnetId,
subscriptionId,
systemTags,
systemVersion,
tdeKeyStoreType,
timeCreated,
timeZone,
vipIds,
vmBackupStorageType,
vmFileSystemStorageType,
zoneId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cloud_vm_clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cloud_vm_clusters resource.
    - name: backupNetworkNsgIds
      value:
        - "{{ backupNetworkNsgIds }}"
      description: |
        A list of the [OCIDs](/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems.
    - name: backupSubnetId
      value: "{{ backupSubnetId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the backup network subnet associated with the cloud VM cluster.
    - name: cloudExadataInfrastructureId
      value: "{{ cloudExadataInfrastructureId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure resource.
    - name: clusterName
      value: "{{ clusterName }}"
      description: |
        The cluster name for cloud VM cluster. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment.
    - name: cpuCoreCount
      value: {{ cpuCoreCount }}
      description: |
        For fixed shapes, this is the total number of OCPUs to enable across the VM cluster.
        - Exadata.Base.48 - Specify a multiple of 2, from 0 to 48.
        - Exadata.Quarter3.100 - Specify a multiple of 2, from 0 to 100.
        - Exadata.Half3.200 - Specify a multiple of 4, from 0 to 200.
        - Exadata.Full3.400 - Specify a multiple of 8, from 0 to 400.
        The API specification for fixed shape values is https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/DbSystemShapeSummary
        For flexible shapes X8M and X9M, this is the total number of OCPUs to enable across the VM cluster. The number available for the VM cluster will be based on the number of database servers selected for provisioning the VM cluster on the Exadata Infrastructure.
        - Exadata.X8M - Specify a multiple of 2, from 2 to 50 per X8M database server.
        - Exadata.X9M - Specify a multiple of 2, from 2 to 126 per X9M database server.
        For flexible shapes X11M and higher, this is the total number of ECPUs to enable across the VM cluster. The number available for the VM cluster will be based on the number of database servers selected for provisioning the VM cluster on the Exadata Infrastructure.
        - Exadata.X11M - Specify a multiple of 8, from 8 to 760 per X11M database server.
        The API specification for flexible shape values is https://docs.oracle.com/en-us/iaas/api/#/en/database/20160918/datatypes/FlexComponentSummary
    - name: dataCollectionOptions
      description: |
        Indicates user preferences for the various diagnostic collection options for the VM cluster/Cloud VM cluster/VMBM DBCS.
      value:
        isDiagnosticsEventsEnabled: {{ isDiagnosticsEventsEnabled }}
        isHealthMonitoringEnabled: {{ isHealthMonitoringEnabled }}
        isIncidentLogsEnabled: {{ isIncidentLogsEnabled }}
    - name: dataStoragePercentage
      value: {{ dataStoragePercentage }}
      description: |
        The percentage assigned to DATA storage (user data and database files). See [Storage Configuration](/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage.
    - name: dataStorageSizeInTBs
      value: {{ dataStorageSizeInTBs }}
      description: |
        The data disk group size to be allocated in TBs.
    - name: dbNodeStorageSizeInGBs
      value: {{ dbNodeStorageSizeInGBs }}
      description: |
        The local node storage to be allocated in GBs.
    - name: dbServers
      value:
        - "{{ dbServers }}"
      description: |
        The list of DB servers.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the cloud VM cluster. The name does not need to be unique.
    - name: domain
      value: "{{ domain }}"
      description: |
        A domain name used for the cloud VM cluster. If the Oracle-provided internet and VCN
        resolver is enabled for the specified subnet, the domain name for the subnet is used
        (do not provide one). Otherwise, provide a valid DNS domain name. Hyphens (-) are not permitted.
        Applies to Exadata Cloud Service instances only.
    - name: exascaleDbStorageVaultId
      value: "{{ exascaleDbStorageVaultId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the Exadata Database Storage Vault.
    - name: fileSystemConfigurationDetails
      description: |
        Details of the file system configuration of the VM cluster.
      value:
        - fileSystemSizeGb: {{ fileSystemSizeGb }}
          mountPoint: "{{ mountPoint }}"
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: giVersion
      value: "{{ giVersion }}"
      description: |
        A valid Oracle Grid Infrastructure (GI) software version.
    - name: hostname
      value: "{{ hostname }}"
      description: |
        The hostname for the cloud VM cluster. The hostname must begin with an alphabetic character, and
        can contain alphanumeric characters and hyphens (-). The maximum length of the hostname is 16 characters for bare metal and virtual machine DB systems, and 12 characters for Exadata systems.
        The maximum length of the combined hostname and domain is 63 characters.
        **Note:** The hostname must be unique within the subnet. If it is not unique,
        the cloud VM Cluster will fail to provision.
    - name: isLocalBackupEnabled
      value: {{ isLocalBackupEnabled }}
      description: |
        If true, database backup on local Exadata storage is configured for the cloud VM cluster. If false, database backup on local Exadata storage is not available in the cloud VM cluster.
    - name: isSparseDiskgroupEnabled
      value: {{ isSparseDiskgroupEnabled }}
      description: |
        If true, the sparse disk group is configured for the cloud VM cluster. If false, the sparse disk group is not created.
    - name: licenseModel
      value: "{{ licenseModel }}"
      description: |
        The Oracle license model that applies to the cloud VM cluster. The default is BRING_YOUR_OWN_LICENSE.
      valid_values: ['LICENSE_INCLUDED', 'BRING_YOUR_OWN_LICENSE']
    - name: memorySizeInGBs
      value: {{ memorySizeInGBs }}
      description: |
        The memory to be allocated in GBs.
    - name: nsgIds
      value:
        - "{{ nsgIds }}"
      description: |
        The list of [OCIDs](/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](/Content/Network/Concepts/securityrules.htm).
    - name: ocpuCount
      value: {{ ocpuCount }}
      description: |
        The number of OCPU cores to enable for a cloud VM cluster. Only 1 decimal place is allowed for the fractional part.
    - name: privateZoneId
      value: "{{ privateZoneId }}"
      description: |
        The private zone id in which DNS records need to be created.
    - name: recoStoragePercentage
      value: {{ recoStoragePercentage }}
      description: |
        The percentage assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). See [Storage Configuration](/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage.
    - name: securityAttributes
      value: "{{ securityAttributes }}"
      description: |
        Security Attributes for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Oracle-ZPR": {"MaxEgressCount": {"value": "42", "mode": "audit"}}}\`
    - name: sparseStoragePercentage
      value: {{ sparseStoragePercentage }}
      description: |
        The percentage assigned to SPARSE storage (Exadata snapshots). See [Storage Configuration](/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage.
    - name: sshPublicKeys
      value:
        - "{{ sshPublicKeys }}"
      description: |
        The public key portion of one or more key pairs used for SSH access to the cloud VM cluster.
    - name: subnetId
      value: "{{ subnetId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the subnet associated with the cloud VM cluster.
    - name: subscriptionId
      value: "{{ subscriptionId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the subscription with which resource needs to be associated with.
    - name: systemVersion
      value: "{{ systemVersion }}"
      description: |
        Operating system version of the image.
    - name: timeZone
      value: "{{ timeZone }}"
      description: |
        The time zone to use for the cloud VM cluster. For details, see [Time Zones](/Content/Database/References/timezones.htm).
    - name: vmBackupStorageType
      value: "{{ vmBackupStorageType }}"
      description: |
        Specifies the type of VM Backups Storage and supported values are LOCAL and EXASCALE. - LOCAL if selected then VM Backups storage will be on DB Servers. - EXASCALE if selected then VM Backups storage will be on Exascale Storage Servers. Default Value is LOCAL
      valid_values: ['LOCAL', 'EXASCALE']
      default: LOCAL
    - name: vmFileSystemStorageType
      value: "{{ vmFileSystemStorageType }}"
      description: |
        Specifies the type of file system storage and supported values are LOCAL and EXASCALE. - LOCAL if selected then file system storage will be on DB Servers. - EXASCALE if selected then file system storage will be on Exascale Storage Servers. Default Value is LOCAL
      valid_values: ['LOCAL', 'EXASCALE']
      default: LOCAL
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

Updates the specified cloud VM cluster. Applies to Exadata Cloud Service instances and Autonomous Database on dedicated Exadata infrastructure only.&lt;br /&gt;

```sql
UPDATE oci.database.cloud_vm_clusters
SET 
backupNetworkNsgIds = '{{ backupNetworkNsgIds }}',
computeNodes = '{{ computeNodes }}',
cpuCoreCount = {{ cpuCoreCount }},
dataCollectionOptions = '{{ dataCollectionOptions }}',
dataStoragePercentage = {{ dataStoragePercentage }},
dataStorageSizeInTBs = {{ dataStorageSizeInTBs }},
dbNodeStorageSizeInGBs = {{ dbNodeStorageSizeInGBs }},
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
fileSystemConfigurationDetails = '{{ fileSystemConfigurationDetails }}',
freeformTags = '{{ freeformTags }}',
isLocalBackupEnabled = {{ isLocalBackupEnabled }},
isSparseDiskgroupEnabled = {{ isSparseDiskgroupEnabled }},
licenseModel = '{{ licenseModel }}',
memorySizeInGBs = {{ memorySizeInGBs }},
nsgIds = '{{ nsgIds }}',
ocpuCount = {{ ocpuCount }},
recoStoragePercentage = {{ recoStoragePercentage }},
securityAttributes = '{{ securityAttributes }}',
sparseStoragePercentage = {{ sparseStoragePercentage }},
sshPublicKeys = '{{ sshPublicKeys }}',
storageSizeInGBs = {{ storageSizeInGBs }},
updateDetails = '{{ updateDetails }}',
vmBackupStorageType = '{{ vmBackupStorageType }}'
WHERE 
cloudVmClusterId = '{{ cloudVmClusterId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
availabilityDomain,
backupNetworkNsgIds,
backupSubnetId,
cloudExadataInfrastructureId,
clusterName,
compartmentId,
computeModel,
cpuCoreCount,
dataCollectionOptions,
dataStoragePercentage,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
diskRedundancy,
displayName,
domain,
exascaleDbStorageVaultId,
fileSystemConfigurationDetails,
freeformTags,
giSoftwareImageId,
giVersion,
hostname,
iormConfigCache,
isLocalBackupEnabled,
isSparseDiskgroupEnabled,
lastUpdateHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
listenerPort,
memorySizeInGBs,
multiCloudIdentityConnectorConfigs,
nodeCount,
nsgIds,
ocpuCount,
recoStoragePercentage,
scanDnsName,
scanDnsRecordId,
scanIpIds,
securityAttributes,
shape,
sparseStoragePercentage,
sshPublicKeys,
storageManagementType,
storageSizeInGBs,
subnetId,
subscriptionId,
systemTags,
systemVersion,
tdeKeyStoreType,
timeCreated,
timeZone,
vipIds,
vmBackupStorageType,
vmFileSystemStorageType,
zoneId;
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

Deletes the specified cloud VM cluster. Applies to Exadata Cloud Service instances and Autonomous Database on dedicated Exadata infrastructure only.&lt;br /&gt;

```sql
DELETE FROM oci.database.cloud_vm_clusters
WHERE cloudVmClusterId = '{{ cloudVmClusterId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_virtual_machine_to_cloud_vm_cluster"
    values={[
        { label: 'add_virtual_machine_to_cloud_vm_cluster', value: 'add_virtual_machine_to_cloud_vm_cluster' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'change_cloud_vm_cluster_subscription', value: 'change_cloud_vm_cluster_subscription' },
        { label: 'register_cloud_vm_cluster_pkcs', value: 'register_cloud_vm_cluster_pkcs' },
        { label: 'remove_virtual_machine_from_cloud_vm_cluster', value: 'remove_virtual_machine_from_cloud_vm_cluster' },
        { label: 'unregister_cloud_vm_cluster_pkcs', value: 'unregister_cloud_vm_cluster_pkcs' }
    ]}
>
<TabItem value="add_virtual_machine_to_cloud_vm_cluster">

Add Virtual Machines to the Cloud VM cluster. Applies to Exadata Cloud instances only.&lt;br /&gt;

```sql
EXEC oci.database.cloud_vm_clusters.add_virtual_machine_to_cloud_vm_cluster 
@cloudVmClusterId='{{ cloudVmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"dbServers": "{{ dbServers }}"
}'
;
```
</TabItem>
<TabItem value="change_compartment">

Moves a cloud VM cluster and its dependent resources to another compartment. Applies to Exadata Cloud Service instances and Autonomous Database on dedicated Exadata infrastructure only.&lt;br /&gt;

```sql
EXEC oci.database.cloud_vm_clusters.change_compartment 
@cloudVmClusterId='{{ cloudVmClusterId }}' --required, 
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
<TabItem value="change_cloud_vm_cluster_subscription">

Associate a cloud VM cluster with a different subscription.&lt;br /&gt;

```sql
EXEC oci.database.cloud_vm_clusters.change_cloud_vm_cluster_subscription 
@cloudVmClusterId='{{ cloudVmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"isDefault": {{ isDefault }}, 
"subscriptionId": "{{ subscriptionId }}"
}'
;
```
</TabItem>
<TabItem value="register_cloud_vm_cluster_pkcs">

Install the PKCS11 driver for given keystore type&lt;br /&gt;

```sql
EXEC oci.database.cloud_vm_clusters.register_cloud_vm_cluster_pkcs 
@cloudVmClusterId='{{ cloudVmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"tdeKeyStoreType": "{{ tdeKeyStoreType }}"
}'
;
```
</TabItem>
<TabItem value="remove_virtual_machine_from_cloud_vm_cluster">

Remove Virtual Machines from the Cloud VM cluster. Applies to Exadata Cloud instances only.&lt;br /&gt;

```sql
EXEC oci.database.cloud_vm_clusters.remove_virtual_machine_from_cloud_vm_cluster 
@cloudVmClusterId='{{ cloudVmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"dbServers": "{{ dbServers }}"
}'
;
```
</TabItem>
<TabItem value="unregister_cloud_vm_cluster_pkcs">

Uninstall the PKCS11 driver for given keystore type&lt;br /&gt;

```sql
EXEC oci.database.cloud_vm_clusters.unregister_cloud_vm_cluster_pkcs 
@cloudVmClusterId='{{ cloudVmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"tdeKeyStoreType": "{{ tdeKeyStoreType }}"
}'
;
```
</TabItem>
</Tabs>
