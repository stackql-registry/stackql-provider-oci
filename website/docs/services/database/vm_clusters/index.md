--- 
title: vm_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - vm_clusters
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

Creates, updates, deletes, gets or lists a <code>vm_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vm_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.vm_clusters" /></td></tr>
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

Information about the Exadata Cloud@Customer VM cluster.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain that the VM cluster is located in.</td>
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
    <td><CopyableCode code="cpusEnabled" /></td>
    <td><code>integer</code></td>
    <td>The number of enabled CPU cores.</td>
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
    <td><CopyableCode code="dataStorageSizeInGBs" /></td>
    <td><code>number (double)</code></td>
    <td>Size of the DATA disk group in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>Size, in terabytes, of the DATA disk group.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The local node storage allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServers" /></td>
    <td><code>array</code></td>
    <td>The list of Db server.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Exadata Cloud@Customer VM cluster. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="exadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.</td>
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
    <td>The Oracle Grid Infrastructure software version for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="isLocalBackupEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, database backup on local Exadata storage is configured for the VM cluster. If false, database backup on local Exadata storage is not available in the VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="isSparseDiskgroupEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, sparse disk group is configured for the VM cluster. If false, sparse disk group is not created. </td>
</tr>
<tr>
    <td><CopyableCode code="lastPatchHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last patch history. This value is updated as soon as a patch operation starts.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the VM cluster. The default is LICENSE_INCLUDED.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the VM cluster. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The memory allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="ocpusEnabled" /></td>
    <td><code>number (float)</code></td>
    <td>The number of enabled OCPU cores.</td>
</tr>
<tr>
    <td><CopyableCode code="recoStoragePercentage" /></td>
    <td><code>integer (int32)</code></td>
    <td>The percentage assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). See &#91;Storage Configuration&#93;(/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage. </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the Exadata infrastructure. The shape determines the amount of CPU, storage, and memory resources allocated to the instance. </td>
</tr>
<tr>
    <td><CopyableCode code="sparseStoragePercentage" /></td>
    <td><code>integer (int32)</code></td>
    <td>The percentage assigned to SPARSE storage (Exadata snapshots). See &#91;Storage Configuration&#93;(/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage. </td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKeys" /></td>
    <td><code>array</code></td>
    <td>The public key portion of one or more key pairs used for SSH access to the VM cluster.</td>
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
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string (x-obmcs-time-zone)</code></td>
    <td>The time zone of the Exadata infrastructure. For details, see &#91;Exadata Infrastructure Time Zones&#93;(/Content/Database/References/timezones.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="vmBackupStorageType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of VM Backups Storage and supported values are LOCAL and EXASCALE. - LOCAL if selected then VM Backups storage will be on DB Servers. - EXASCALE if selected then VM Backups storage will be on Exascale Storage Servers. Default Value is LOCAL. (LOCAL, EXASCALE)</td>
</tr>
<tr>
    <td><CopyableCode code="vmClusterNetworkId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VM cluster network.</td>
</tr>
<tr>
    <td><CopyableCode code="vmFileSystemStorageType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of file system storage and supported values are LOCAL and EXASCALE. - LOCAL if selected then file system storage will be on DB Servers. - EXASCALE if selected then file system storage will be on Exascale Storage Servers. Default Value is LOCAL (LOCAL, EXASCALE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details of the Exadata Cloud@Customer VM cluster.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain that the VM cluster is located in.</td>
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
    <td><CopyableCode code="cpusEnabled" /></td>
    <td><code>integer</code></td>
    <td>The number of enabled CPU cores.</td>
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
    <td><CopyableCode code="dataStorageSizeInGBs" /></td>
    <td><code>number (double)</code></td>
    <td>Size of the DATA disk group in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>Size, in terabytes, of the DATA disk group.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The local node storage allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServers" /></td>
    <td><code>array</code></td>
    <td>The list of Db server.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Exadata Cloud@Customer VM cluster. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="exadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.</td>
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
    <td>The Oracle Grid Infrastructure software version for the VM cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="isLocalBackupEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, database backup on local Exadata storage is configured for the VM cluster. If false, database backup on local Exadata storage is not available in the VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="isSparseDiskgroupEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, sparse disk group is configured for the VM cluster. If false, sparse disk group is not created. </td>
</tr>
<tr>
    <td><CopyableCode code="lastPatchHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last patch history. This value is updated as soon as a patch operation starts.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the VM cluster. The default is LICENSE_INCLUDED.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the VM cluster. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The memory allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="ocpusEnabled" /></td>
    <td><code>number (float)</code></td>
    <td>The number of enabled OCPU cores.</td>
</tr>
<tr>
    <td><CopyableCode code="recoStoragePercentage" /></td>
    <td><code>integer (int32)</code></td>
    <td>The percentage assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). See &#91;Storage Configuration&#93;(/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage. </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the Exadata infrastructure. The shape determines the amount of CPU, storage, and memory resources allocated to the instance. </td>
</tr>
<tr>
    <td><CopyableCode code="sparseStoragePercentage" /></td>
    <td><code>integer (int32)</code></td>
    <td>The percentage assigned to SPARSE storage (Exadata snapshots). See &#91;Storage Configuration&#93;(/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage. </td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKeys" /></td>
    <td><code>array</code></td>
    <td>The public key portion of one or more key pairs used for SSH access to the VM cluster.</td>
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
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the VM cluster was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string (x-obmcs-time-zone)</code></td>
    <td>The time zone of the Exadata infrastructure. For details, see &#91;Exadata Infrastructure Time Zones&#93;(/Content/Database/References/timezones.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="vmBackupStorageType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of VM Backups Storage and supported values are LOCAL and EXASCALE. - LOCAL if selected then VM Backups storage will be on DB Servers. - EXASCALE if selected then VM Backups storage will be on Exascale Storage Servers. Default Value is LOCAL. (LOCAL, EXASCALE)</td>
</tr>
<tr>
    <td><CopyableCode code="vmClusterNetworkId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VM cluster network.</td>
</tr>
<tr>
    <td><CopyableCode code="vmFileSystemStorageType" /></td>
    <td><code>string</code></td>
    <td>Specifies the type of file system storage and supported values are LOCAL and EXASCALE. - LOCAL if selected then file system storage will be on DB Servers. - EXASCALE if selected then file system storage will be on Exascale Storage Servers. Default Value is LOCAL (LOCAL, EXASCALE)</td>
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
    <td><a href="#parameter-vmClusterId"><code>vmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists the VM clusters in the specified compartment. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To list the cloud VM clusters in an Exadata Cloud Service instance, use the &#91;ListCloudVmClusters &#93;(#/en/database/latest/CloudVmCluster/ListCloudVmClusters) operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-cpuCoreCount"><code>cpuCoreCount</code></a>, <a href="#parameter-vmClusterNetworkId"><code>vmClusterNetworkId</code></a>, <a href="#parameter-sshPublicKeys"><code>sshPublicKeys</code></a>, <a href="#parameter-giVersion"><code>giVersion</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates an Exadata Cloud@Customer VM cluster.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-vmClusterId"><code>vmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-vmClusterId"><code>vmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the specified VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_virtual_machine_to_vm_cluster"><CopyableCode code="add_virtual_machine_to_vm_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vmClusterId"><code>vmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dbServers"><code>dbServers</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Add Virtual Machines to the VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vmClusterId"><code>vmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Moves a VM cluster and its dependent resources to another compartment. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To move a cloud VM cluster in an Exadata Cloud Service instance to another compartment, use the &#91;ChangeCloudVmClusterCompartment &#93;(#/en/database/latest/CloudVmCluster/ChangeCloudVmClusterCompartment) operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_virtual_machine_from_vm_cluster"><CopyableCode code="remove_virtual_machine_from_vm_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vmClusterId"><code>vmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dbServers"><code>dbServers</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Remove Virtual Machines from the VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-vmClusterId">
    <td><CopyableCode code="vmClusterId" /></td>
    <td><code>string</code></td>
    <td>The VM cluster &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
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

Gets information about the VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
compartmentId,
computeModel,
cpusEnabled,
dataCollectionOptions,
dataStoragePercentage,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
displayName,
exadataInfrastructureId,
fileSystemConfigurationDetails,
freeformTags,
giSoftwareImageId,
giVersion,
isLocalBackupEnabled,
isSparseDiskgroupEnabled,
lastPatchHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
memorySizeInGBs,
ocpusEnabled,
recoStoragePercentage,
shape,
sparseStoragePercentage,
sshPublicKeys,
systemTags,
systemVersion,
timeCreated,
timeZone,
vmBackupStorageType,
vmClusterNetworkId,
vmFileSystemStorageType
FROM oci.database.vm_clusters
WHERE vmClusterId = '{{ vmClusterId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the VM clusters in the specified compartment. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To list the cloud VM clusters in an Exadata Cloud Service instance, use the &#91;ListCloudVmClusters &#93;(#/en/database/latest/CloudVmCluster/ListCloudVmClusters) operation.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
compartmentId,
computeModel,
cpusEnabled,
dataCollectionOptions,
dataStoragePercentage,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
displayName,
exadataInfrastructureId,
fileSystemConfigurationDetails,
freeformTags,
giSoftwareImageId,
giVersion,
isLocalBackupEnabled,
isSparseDiskgroupEnabled,
lastPatchHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
memorySizeInGBs,
ocpusEnabled,
recoStoragePercentage,
shape,
sparseStoragePercentage,
sshPublicKeys,
systemTags,
systemVersion,
timeCreated,
timeZone,
vmBackupStorageType,
vmClusterNetworkId,
vmFileSystemStorageType
FROM oci.database.vm_clusters
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

Creates an Exadata Cloud@Customer VM cluster.&lt;br /&gt;

```sql
INSERT INTO oci.database.vm_clusters (
compartmentId,
cpuCoreCount,
dataCollectionOptions,
dataStoragePercentage,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
displayName,
exadataInfrastructureId,
fileSystemConfigurationDetails,
freeformTags,
giVersion,
isLocalBackupEnabled,
isSparseDiskgroupEnabled,
licenseModel,
memorySizeInGBs,
ocpuCount,
recoStoragePercentage,
sparseStoragePercentage,
sshPublicKeys,
systemVersion,
timeZone,
vmBackupStorageType,
vmClusterNetworkId,
vmFileSystemStorageType,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ compartmentId }}' /* required */,
{{ cpuCoreCount }} /* required */,
'{{ dataCollectionOptions }}',
{{ dataStoragePercentage }},
{{ dataStorageSizeInGBs }},
{{ dataStorageSizeInTBs }},
{{ dbNodeStorageSizeInGBs }},
'{{ dbServers }}',
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ exadataInfrastructureId }}' /* required */,
'{{ fileSystemConfigurationDetails }}',
'{{ freeformTags }}',
'{{ giVersion }}' /* required */,
{{ isLocalBackupEnabled }},
{{ isSparseDiskgroupEnabled }},
'{{ licenseModel }}',
{{ memorySizeInGBs }},
{{ ocpuCount }},
{{ recoStoragePercentage }},
{{ sparseStoragePercentage }},
'{{ sshPublicKeys }}' /* required */,
'{{ systemVersion }}',
'{{ timeZone }}',
'{{ vmBackupStorageType }}',
'{{ vmClusterNetworkId }}' /* required */,
'{{ vmFileSystemStorageType }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
availabilityDomain,
compartmentId,
computeModel,
cpusEnabled,
dataCollectionOptions,
dataStoragePercentage,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
displayName,
exadataInfrastructureId,
fileSystemConfigurationDetails,
freeformTags,
giSoftwareImageId,
giVersion,
isLocalBackupEnabled,
isSparseDiskgroupEnabled,
lastPatchHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
memorySizeInGBs,
ocpusEnabled,
recoStoragePercentage,
shape,
sparseStoragePercentage,
sshPublicKeys,
systemTags,
systemVersion,
timeCreated,
timeZone,
vmBackupStorageType,
vmClusterNetworkId,
vmFileSystemStorageType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vm_clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vm_clusters resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment.
    - name: cpuCoreCount
      value: {{ cpuCoreCount }}
      description: |
        The number of ECPUs (X11M and higher) or number of OCPUs (X10M and earlier) to enable for the VM cluster.
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
    - name: dataStorageSizeInGBs
      value: {{ dataStorageSizeInGBs }}
      description: |
        The data disk group size to be allocated in GBs.
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
        The list of Db server.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the VM cluster. The name does not need to be unique.
    - name: exadataInfrastructureId
      value: "{{ exadataInfrastructureId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.
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
        The Oracle Grid Infrastructure software version for the VM cluster.
    - name: isLocalBackupEnabled
      value: {{ isLocalBackupEnabled }}
      description: |
        If true, database backup on local Exadata storage is configured for the VM cluster. If false, database backup on local Exadata storage is not available in the VM cluster.
    - name: isSparseDiskgroupEnabled
      value: {{ isSparseDiskgroupEnabled }}
      description: |
        If true, the sparse disk group is configured for the VM cluster. If false, the sparse disk group is not created.
    - name: licenseModel
      value: "{{ licenseModel }}"
      description: |
        The Oracle license model that applies to the VM cluster. The default is BRING_YOUR_OWN_LICENSE.
      valid_values: ['LICENSE_INCLUDED', 'BRING_YOUR_OWN_LICENSE']
    - name: memorySizeInGBs
      value: {{ memorySizeInGBs }}
      description: |
        The memory to be allocated in GBs.
    - name: ocpuCount
      value: {{ ocpuCount }}
      description: |
        The number of OCPU cores to enable for the VM cluster. Only one decimal place is allowed for the fractional part.
    - name: recoStoragePercentage
      value: {{ recoStoragePercentage }}
      description: |
        The percentage assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). See [Storage Configuration](/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage.
    - name: sparseStoragePercentage
      value: {{ sparseStoragePercentage }}
      description: |
        The percentage assigned to SPARSE storage (Exadata snapshots). See [Storage Configuration](/Content/Database/Concepts/exaoverview.htm#Exadata) in the Exadata documentation for details on the impact of the configuration settings on storage.
    - name: sshPublicKeys
      value:
        - "{{ sshPublicKeys }}"
      description: |
        The public key portion of one or more key pairs used for SSH access to the VM cluster.
    - name: systemVersion
      value: "{{ systemVersion }}"
      description: |
        Operating system version of the image.
    - name: timeZone
      value: "{{ timeZone }}"
      description: |
        The time zone to use for the VM cluster. For details, see [DB System Time Zones](/Content/Database/References/timezones.htm).
    - name: vmBackupStorageType
      value: "{{ vmBackupStorageType }}"
      description: |
        Specifies the type of VM Backups Storage and supported values are LOCAL and EXASCALE. - LOCAL if selected then VM Backups storage will be on DB Servers. - EXASCALE if selected then VM Backups storage will be on Exascale Storage Servers. Default Value is LOCAL
      valid_values: ['LOCAL', 'EXASCALE']
      default: LOCAL
    - name: vmClusterNetworkId
      value: "{{ vmClusterNetworkId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the VM cluster network.
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

Updates the specified VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;

```sql
UPDATE oci.database.vm_clusters
SET 
cpuCoreCount = {{ cpuCoreCount }},
dataCollectionOptions = '{{ dataCollectionOptions }}',
dataStoragePercentage = {{ dataStoragePercentage }},
dataStorageSizeInGBs = {{ dataStorageSizeInGBs }},
dataStorageSizeInTBs = {{ dataStorageSizeInTBs }},
dbNodeStorageSizeInGBs = {{ dbNodeStorageSizeInGBs }},
definedTags = '{{ definedTags }}',
fileSystemConfigurationDetails = '{{ fileSystemConfigurationDetails }}',
freeformTags = '{{ freeformTags }}',
isLocalBackupEnabled = {{ isLocalBackupEnabled }},
isSparseDiskgroupEnabled = {{ isSparseDiskgroupEnabled }},
licenseModel = '{{ licenseModel }}',
memorySizeInGBs = {{ memorySizeInGBs }},
ocpuCount = {{ ocpuCount }},
recoStoragePercentage = {{ recoStoragePercentage }},
sparseStoragePercentage = {{ sparseStoragePercentage }},
sshPublicKeys = '{{ sshPublicKeys }}',
updateDetails = '{{ updateDetails }}',
version = '{{ version }}',
vmBackupStorageType = '{{ vmBackupStorageType }}'
WHERE 
vmClusterId = '{{ vmClusterId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
availabilityDomain,
compartmentId,
computeModel,
cpusEnabled,
dataCollectionOptions,
dataStoragePercentage,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
dbNodeStorageSizeInGBs,
dbServers,
definedTags,
displayName,
exadataInfrastructureId,
fileSystemConfigurationDetails,
freeformTags,
giSoftwareImageId,
giVersion,
isLocalBackupEnabled,
isSparseDiskgroupEnabled,
lastPatchHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
memorySizeInGBs,
ocpusEnabled,
recoStoragePercentage,
shape,
sparseStoragePercentage,
sshPublicKeys,
systemTags,
systemVersion,
timeCreated,
timeZone,
vmBackupStorageType,
vmClusterNetworkId,
vmFileSystemStorageType;
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

Deletes the specified VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;

```sql
DELETE FROM oci.database.vm_clusters
WHERE vmClusterId = '{{ vmClusterId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_virtual_machine_to_vm_cluster"
    values={[
        { label: 'add_virtual_machine_to_vm_cluster', value: 'add_virtual_machine_to_vm_cluster' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'remove_virtual_machine_from_vm_cluster', value: 'remove_virtual_machine_from_vm_cluster' }
    ]}
>
<TabItem value="add_virtual_machine_to_vm_cluster">

Add Virtual Machines to the VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;

```sql
EXEC oci.database.vm_clusters.add_virtual_machine_to_vm_cluster 
@vmClusterId='{{ vmClusterId }}' --required, 
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

Moves a VM cluster and its dependent resources to another compartment. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To move a cloud VM cluster in an Exadata Cloud Service instance to another compartment, use the &#91;ChangeCloudVmClusterCompartment &#93;(#/en/database/latest/CloudVmCluster/ChangeCloudVmClusterCompartment) operation.&lt;br /&gt;

```sql
EXEC oci.database.vm_clusters.change_compartment 
@vmClusterId='{{ vmClusterId }}' --required, 
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
<TabItem value="remove_virtual_machine_from_vm_cluster">

Remove Virtual Machines from the VM cluster. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;

```sql
EXEC oci.database.vm_clusters.remove_virtual_machine_from_vm_cluster 
@vmClusterId='{{ vmClusterId }}' --required, 
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
</Tabs>
