--- 
title: cloud_exadata_infrastructures
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_exadata_infrastructures
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

Creates, updates, deletes, gets or lists a <code>cloud_exadata_infrastructures</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_exadata_infrastructures" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.cloud_exadata_infrastructures" /></td></tr>
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

The cloud Exadata infrastructure details.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure resource.</td>
</tr>
<tr>
    <td><CopyableCode code="activatedStorageCount" /></td>
    <td><code>integer</code></td>
    <td>The requested number of additional storage servers activated for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalStorageCount" /></td>
    <td><code>integer</code></td>
    <td>The requested number of additional storage servers for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain that the cloud Exadata infrastructure resource is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="availableStorageSizeInGBs" /></td>
    <td><code>integer (int32)</code></td>
    <td>The available storage can be allocated to the cloud Exadata infrastructure resource, in gigabytes (GB).</td>
</tr>
<tr>
    <td><CopyableCode code="clusterPlacementGroupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the cluster placement group of the Exadata Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of compute servers for the cloud Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Base Database, Exadata Infrastructure, VM Cluster and Autonomous AI Database.  (ECPU, OCPU) (x-default-description: Null used when unspecified.)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores allocated.</td>
</tr>
<tr>
    <td><CopyableCode code="customerContacts" /></td>
    <td><code>array</code></td>
    <td>The list of customer email addresses that receive information from Oracle about the specified OCI Database service resource. Oracle uses these email addresses to send notifications about planned and unplanned software maintenance updates, information about system hardware, and other information needed by administrators. Up to 10 email addresses can be added to the customer contacts for a cloud Exadata infrastructure instance. </td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>Size, in terabytes, of the DATA disk group. </td>
</tr>
<tr>
    <td><CopyableCode code="databaseServerType" /></td>
    <td><code>string</code></td>
    <td>The database server type of the Exadata infrastructure. (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The local node storage allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServerVersion" /></td>
    <td><code>string</code></td>
    <td>The software version of the database servers (dom0) in the cloud Exadata infrastructure. Example: 20.1.15 </td>
</tr>
<tr>
    <td><CopyableCode code="definedFileSystemConfigurations" /></td>
    <td><code>array</code></td>
    <td>Details of the file system configuration of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the cloud Exadata infrastructure resource. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="exascaleConfig" /></td>
    <td><code>object</code></td>
    <td>The exascale config response details for the Exadata Cloud@Customer infrastructure or cloud Exadata infrastructure . Applies to both Exadata Cloud@Customer instances and Exadata Cloud Service instances. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isSchedulingPolicyAssociated" /></td>
    <td><code>boolean</code></td>
    <td>If true, the infrastructure is using granular maintenance scheduling preference.</td>
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
    <td>The current lifecycle state of the cloud Exadata infrastructure resource. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceVersionPreferences" /></td>
    <td><code>object</code></td>
    <td>The preferences for target versions of future maintenance runs.  Currently these preferences are only supported for Monthly maintenance runs created via scheduling plans If no preferences are specified then the version will be set by default to "Latest". Changing preferences will not change versions for an already existing maintenance run. </td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window. </td>
</tr>
<tr>
    <td><CopyableCode code="maxCpuCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores available.</td>
</tr>
<tr>
    <td><CopyableCode code="maxDataStorageInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The total available DATA disk group size.</td>
</tr>
<tr>
    <td><CopyableCode code="maxDbNodeStorageInGBs" /></td>
    <td><code>integer</code></td>
    <td>The total local node storage available in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="maxMemoryInGBs" /></td>
    <td><code>integer</code></td>
    <td>The total memory available in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The memory allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="monthlyDbServerVersion" /></td>
    <td><code>string</code></td>
    <td>The monthly software version of the database servers (dom0) in the cloud Exadata infrastructure. Example: 20.1.15 </td>
</tr>
<tr>
    <td><CopyableCode code="monthlyStorageServerVersion" /></td>
    <td><code>string</code></td>
    <td>The monthly software version of the storage servers (cells) in the cloud Exadata infrastructure. Example: 20.1.15 </td>
</tr>
<tr>
    <td><CopyableCode code="nextMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the next maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The model name of the cloud Exadata infrastructure resource. </td>
</tr>
<tr>
    <td><CopyableCode code="storageCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of storage servers for the cloud Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="storageServerType" /></td>
    <td><code>string</code></td>
    <td>The storage server type of the Exadata infrastructure. (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="storageServerVersion" /></td>
    <td><code>string</code></td>
    <td>The software version of the storage servers (cells) in the cloud Exadata infrastructure. Example: 20.1.15 </td>
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
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the cloud Exadata infrastructure resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="totalStorageSizeInGBs" /></td>
    <td><code>integer (int32)</code></td>
    <td>The total storage allocated to the cloud Exadata infrastructure resource, in gigabytes (GB).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details of the cloud Exadata infrastructure resource. Applies to Exadata Cloud Service instances only.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure resource.</td>
</tr>
<tr>
    <td><CopyableCode code="activatedStorageCount" /></td>
    <td><code>integer</code></td>
    <td>The requested number of additional storage servers activated for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalStorageCount" /></td>
    <td><code>integer</code></td>
    <td>The requested number of additional storage servers for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain that the cloud Exadata infrastructure resource is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="availableStorageSizeInGBs" /></td>
    <td><code>integer (int32)</code></td>
    <td>The available storage can be allocated to the cloud Exadata infrastructure resource, in gigabytes (GB).</td>
</tr>
<tr>
    <td><CopyableCode code="clusterPlacementGroupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the cluster placement group of the Exadata Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of compute servers for the cloud Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Base Database, Exadata Infrastructure, VM Cluster and Autonomous AI Database.  (ECPU, OCPU) (x-default-description: Null used when unspecified.)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores allocated.</td>
</tr>
<tr>
    <td><CopyableCode code="customerContacts" /></td>
    <td><code>array</code></td>
    <td>The list of customer email addresses that receive information from Oracle about the specified OCI Database service resource. Oracle uses these email addresses to send notifications about planned and unplanned software maintenance updates, information about system hardware, and other information needed by administrators. Up to 10 email addresses can be added to the customer contacts for a cloud Exadata infrastructure instance. </td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>Size, in terabytes, of the DATA disk group. </td>
</tr>
<tr>
    <td><CopyableCode code="databaseServerType" /></td>
    <td><code>string</code></td>
    <td>The database server type of the Exadata infrastructure. (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The local node storage allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="dbServerVersion" /></td>
    <td><code>string</code></td>
    <td>The software version of the database servers (dom0) in the cloud Exadata infrastructure. Example: 20.1.15 </td>
</tr>
<tr>
    <td><CopyableCode code="definedFileSystemConfigurations" /></td>
    <td><code>array</code></td>
    <td>Details of the file system configuration of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the cloud Exadata infrastructure resource. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="exascaleConfig" /></td>
    <td><code>object</code></td>
    <td>The exascale config response details for the Exadata Cloud@Customer infrastructure or cloud Exadata infrastructure . Applies to both Exadata Cloud@Customer instances and Exadata Cloud Service instances. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isSchedulingPolicyAssociated" /></td>
    <td><code>boolean</code></td>
    <td>If true, the infrastructure is using granular maintenance scheduling preference.</td>
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
    <td>The current lifecycle state of the cloud Exadata infrastructure resource. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceVersionPreferences" /></td>
    <td><code>object</code></td>
    <td>The preferences for target versions of future maintenance runs.  Currently these preferences are only supported for Monthly maintenance runs created via scheduling plans If no preferences are specified then the version will be set by default to "Latest". Changing preferences will not change versions for an already existing maintenance run. </td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window. </td>
</tr>
<tr>
    <td><CopyableCode code="maxCpuCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of CPU cores available.</td>
</tr>
<tr>
    <td><CopyableCode code="maxDataStorageInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The total available DATA disk group size.</td>
</tr>
<tr>
    <td><CopyableCode code="maxDbNodeStorageInGBs" /></td>
    <td><code>integer</code></td>
    <td>The total local node storage available in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="maxMemoryInGBs" /></td>
    <td><code>integer</code></td>
    <td>The total memory available in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The memory allocated in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="monthlyDbServerVersion" /></td>
    <td><code>string</code></td>
    <td>The monthly software version of the database servers (dom0) in the cloud Exadata infrastructure. Example: 20.1.15 </td>
</tr>
<tr>
    <td><CopyableCode code="monthlyStorageServerVersion" /></td>
    <td><code>string</code></td>
    <td>The monthly software version of the storage servers (cells) in the cloud Exadata infrastructure. Example: 20.1.15 </td>
</tr>
<tr>
    <td><CopyableCode code="nextMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the next maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The model name of the cloud Exadata infrastructure resource. </td>
</tr>
<tr>
    <td><CopyableCode code="storageCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of storage servers for the cloud Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="storageServerType" /></td>
    <td><code>string</code></td>
    <td>The storage server type of the Exadata infrastructure. (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="storageServerVersion" /></td>
    <td><code>string</code></td>
    <td>The software version of the storage servers (cells) in the cloud Exadata infrastructure. Example: 20.1.15 </td>
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
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the cloud Exadata infrastructure resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="totalStorageSizeInGBs" /></td>
    <td><code>integer (int32)</code></td>
    <td>The total storage allocated to the cloud Exadata infrastructure resource, in gigabytes (GB).</td>
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
    <td><a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified cloud Exadata infrastructure resource. Applies to Exadata Cloud Service instances and Autonomous AI Database on dedicated Exadata infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-clusterPlacementGroupId"><code>clusterPlacementGroupId</code></a></td>
    <td>Gets a list of the cloud Exadata infrastructure resources in the specified compartment. Applies to Exadata Cloud Service instances and Autonomous AI Database on dedicated Exadata infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-shape"><code>shape</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a cloud Exadata infrastructure resource. This resource is used to create either an &#91;Exadata Cloud Service&#93;(/Content/Database/Concepts/exaoverview.htm) instance or an Autonomous AI Database on dedicated Exadata infrastructure.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the Cloud Exadata infrastructure resource. Applies to Exadata Cloud Service instances and Autonomous AI Database on dedicated Exadata infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-isDeleteVmClusters"><code>isDeleteVmClusters</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the cloud Exadata infrastructure resource. Applies to Exadata Cloud Service instances and Autonomous AI Database on dedicated Exadata infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_storage_capacity_cloud_exadata_infrastructure"><CopyableCode code="add_storage_capacity_cloud_exadata_infrastructure" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Makes the storage capacity from additional storage servers available for Cloud VM Cluster consumption. Applies to Exadata Cloud Service instances and Autonomous AI Database on dedicated Exadata infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Moves a cloud Exadata infrastructure resource and its dependent resources to another compartment. Applies to Exadata Cloud Service instances and Autonomous AI Database on dedicated Exadata infrastructure only.For more information about moving resources to a different compartment, see &#91;Moving Database Resources to a Different Compartment&#93;(/Content/Database/Concepts/databaseoverview.htm#moveRes).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_cloud_exadata_infrastructure_subscription"><CopyableCode code="change_cloud_exadata_infrastructure_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Associate a cloud Exadata infrastructure with a different subscription.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#configure_exascale_cloud_exadata_infrastructure"><CopyableCode code="configure_exascale_cloud_exadata_infrastructure" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cloudExadataInfrastructureId"><code>cloudExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-totalStorageInGBs"><code>totalStorageInGBs</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Configures Exascale on Cloud exadata infrastructure resource. Applies to Exadata Cloud Service instances only.&lt;br /&gt;</td>
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
<tr id="parameter-cloudExadataInfrastructureId">
    <td><CopyableCode code="cloudExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The cloud Exadata infrastructure &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
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
<tr id="parameter-clusterPlacementGroupId">
    <td><CopyableCode code="clusterPlacementGroupId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given cluster placement group ID exactly.</td>
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
<tr id="parameter-isDeleteVmClusters">
    <td><CopyableCode code="isDeleteVmClusters" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, forces the deletion the specified cloud Exadata infrastructure resource as well as all associated VM clusters. If `false`, the cloud Exadata infrastructure resource can be deleted only if it has no associated VM clusters. Default value is `false`. </td>
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
    <td>The field to sort by. You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is descending.  Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive. </td>
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

Gets information about the specified cloud Exadata infrastructure resource. Applies to Exadata Cloud Service instances and Autonomous AI Database on dedicated Exadata infrastructure only.&lt;br /&gt;

```sql
SELECT
id,
activatedStorageCount,
additionalStorageCount,
availabilityDomain,
availableStorageSizeInGBs,
clusterPlacementGroupId,
compartmentId,
computeCount,
computeModel,
cpuCount,
customerContacts,
dataStorageSizeInTBs,
databaseServerType,
dbNodeStorageSizeInGBs,
dbServerVersion,
definedFileSystemConfigurations,
definedTags,
displayName,
exascaleConfig,
freeformTags,
isSchedulingPolicyAssociated,
lastMaintenanceRunId,
lifecycleDetails,
lifecycleState,
maintenanceVersionPreferences,
maintenanceWindow,
maxCpuCount,
maxDataStorageInTBs,
maxDbNodeStorageInGBs,
maxMemoryInGBs,
memorySizeInGBs,
monthlyDbServerVersion,
monthlyStorageServerVersion,
nextMaintenanceRunId,
shape,
storageCount,
storageServerType,
storageServerVersion,
subscriptionId,
systemTags,
timeCreated,
totalStorageSizeInGBs
FROM oci.database.cloud_exadata_infrastructures
WHERE cloudExadataInfrastructureId = '{{ cloudExadataInfrastructureId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of the cloud Exadata infrastructure resources in the specified compartment. Applies to Exadata Cloud Service instances and Autonomous AI Database on dedicated Exadata infrastructure only.&lt;br /&gt;

```sql
SELECT
id,
activatedStorageCount,
additionalStorageCount,
availabilityDomain,
availableStorageSizeInGBs,
clusterPlacementGroupId,
compartmentId,
computeCount,
computeModel,
cpuCount,
customerContacts,
dataStorageSizeInTBs,
databaseServerType,
dbNodeStorageSizeInGBs,
dbServerVersion,
definedFileSystemConfigurations,
definedTags,
displayName,
exascaleConfig,
freeformTags,
isSchedulingPolicyAssociated,
lastMaintenanceRunId,
lifecycleDetails,
lifecycleState,
maintenanceVersionPreferences,
maintenanceWindow,
maxCpuCount,
maxDataStorageInTBs,
maxDbNodeStorageInGBs,
maxMemoryInGBs,
memorySizeInGBs,
monthlyDbServerVersion,
monthlyStorageServerVersion,
nextMaintenanceRunId,
shape,
storageCount,
storageServerType,
storageServerVersion,
subscriptionId,
systemTags,
timeCreated,
totalStorageSizeInGBs
FROM oci.database.cloud_exadata_infrastructures
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
AND clusterPlacementGroupId = '{{ clusterPlacementGroupId }}'
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

Creates a cloud Exadata infrastructure resource. This resource is used to create either an &#91;Exadata Cloud Service&#93;(/Content/Database/Concepts/exaoverview.htm) instance or an Autonomous AI Database on dedicated Exadata infrastructure.&lt;br /&gt;

```sql
INSERT INTO oci.database.cloud_exadata_infrastructures (
availabilityDomain,
clusterPlacementGroupId,
compartmentId,
computeCount,
customerContacts,
databaseServerType,
definedTags,
displayName,
freeformTags,
maintenanceVersionPreferences,
maintenanceWindow,
shape,
storageCount,
storageServerType,
subscriptionId,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ availabilityDomain }}' /* required */,
'{{ clusterPlacementGroupId }}',
'{{ compartmentId }}' /* required */,
{{ computeCount }},
'{{ customerContacts }}',
'{{ databaseServerType }}',
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ freeformTags }}',
'{{ maintenanceVersionPreferences }}',
'{{ maintenanceWindow }}',
'{{ shape }}' /* required */,
{{ storageCount }},
'{{ storageServerType }}',
'{{ subscriptionId }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
activatedStorageCount,
additionalStorageCount,
availabilityDomain,
availableStorageSizeInGBs,
clusterPlacementGroupId,
compartmentId,
computeCount,
computeModel,
cpuCount,
customerContacts,
dataStorageSizeInTBs,
databaseServerType,
dbNodeStorageSizeInGBs,
dbServerVersion,
definedFileSystemConfigurations,
definedTags,
displayName,
exascaleConfig,
freeformTags,
isSchedulingPolicyAssociated,
lastMaintenanceRunId,
lifecycleDetails,
lifecycleState,
maintenanceVersionPreferences,
maintenanceWindow,
maxCpuCount,
maxDataStorageInTBs,
maxDbNodeStorageInGBs,
maxMemoryInGBs,
memorySizeInGBs,
monthlyDbServerVersion,
monthlyStorageServerVersion,
nextMaintenanceRunId,
shape,
storageCount,
storageServerType,
storageServerVersion,
subscriptionId,
systemTags,
timeCreated,
totalStorageSizeInGBs
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cloud_exadata_infrastructures
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cloud_exadata_infrastructures resource.
    - name: availabilityDomain
      value: "{{ availabilityDomain }}"
      description: |
        The availability domain where the cloud Exadata infrastructure is located.
    - name: clusterPlacementGroupId
      value: "{{ clusterPlacementGroupId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the cluster placement group of the Exadata Infrastructure.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment.
    - name: computeCount
      value: {{ computeCount }}
      description: |
        The number of compute servers for the cloud Exadata infrastructure.
    - name: customerContacts
      description: |
        Customer contacts.
      value:
        - email: "{{ email }}"
    - name: databaseServerType
      value: "{{ databaseServerType }}"
      description: |
        The database server type of the Exadata infrastructure.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the cloud Exadata infrastructure resource. The name does not need to be unique.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: maintenanceVersionPreferences
      description: |
        The preferences for target versions of future maintenance runs.
        Currently these preferences are only supported for Monthly maintenance runs created via scheduling plans
        If no preferences are specified then the version will be set by default to "Latest". Changing preferences
        will not change versions for an already existing maintenance run.
      value:
        referenceResourceIdForImageUpdates: "{{ referenceResourceIdForImageUpdates }}"
    - name: maintenanceWindow
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
    - name: shape
      value: "{{ shape }}"
      description: |
        The shape of the cloud Exadata infrastructure resource.
    - name: storageCount
      value: {{ storageCount }}
      description: |
        The number of storage servers for the cloud Exadata infrastructure.
    - name: storageServerType
      value: "{{ storageServerType }}"
      description: |
        The storage server type of the Exadata infrastructure.
    - name: subscriptionId
      value: "{{ subscriptionId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the subscription with which resource needs to be associated with.
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

Updates the Cloud Exadata infrastructure resource. Applies to Exadata Cloud Service instances and Autonomous AI Database on dedicated Exadata infrastructure only.&lt;br /&gt;

```sql
UPDATE oci.database.cloud_exadata_infrastructures
SET 
computeCount = {{ computeCount }},
customerContacts = '{{ customerContacts }}',
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
maintenanceVersionPreferences = '{{ maintenanceVersionPreferences }}',
maintenanceWindow = '{{ maintenanceWindow }}',
storageCount = {{ storageCount }}
WHERE 
cloudExadataInfrastructureId = '{{ cloudExadataInfrastructureId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
activatedStorageCount,
additionalStorageCount,
availabilityDomain,
availableStorageSizeInGBs,
clusterPlacementGroupId,
compartmentId,
computeCount,
computeModel,
cpuCount,
customerContacts,
dataStorageSizeInTBs,
databaseServerType,
dbNodeStorageSizeInGBs,
dbServerVersion,
definedFileSystemConfigurations,
definedTags,
displayName,
exascaleConfig,
freeformTags,
isSchedulingPolicyAssociated,
lastMaintenanceRunId,
lifecycleDetails,
lifecycleState,
maintenanceVersionPreferences,
maintenanceWindow,
maxCpuCount,
maxDataStorageInTBs,
maxDbNodeStorageInGBs,
maxMemoryInGBs,
memorySizeInGBs,
monthlyDbServerVersion,
monthlyStorageServerVersion,
nextMaintenanceRunId,
shape,
storageCount,
storageServerType,
storageServerVersion,
subscriptionId,
systemTags,
timeCreated,
totalStorageSizeInGBs;
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

Deletes the cloud Exadata infrastructure resource. Applies to Exadata Cloud Service instances and Autonomous AI Database on dedicated Exadata infrastructure only.&lt;br /&gt;

```sql
DELETE FROM oci.database.cloud_exadata_infrastructures
WHERE cloudExadataInfrastructureId = '{{ cloudExadataInfrastructureId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND isDeleteVmClusters = '{{ isDeleteVmClusters }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_storage_capacity_cloud_exadata_infrastructure"
    values={[
        { label: 'add_storage_capacity_cloud_exadata_infrastructure', value: 'add_storage_capacity_cloud_exadata_infrastructure' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'change_cloud_exadata_infrastructure_subscription', value: 'change_cloud_exadata_infrastructure_subscription' },
        { label: 'configure_exascale_cloud_exadata_infrastructure', value: 'configure_exascale_cloud_exadata_infrastructure' }
    ]}
>
<TabItem value="add_storage_capacity_cloud_exadata_infrastructure">

Makes the storage capacity from additional storage servers available for Cloud VM Cluster consumption. Applies to Exadata Cloud Service instances and Autonomous AI Database on dedicated Exadata infrastructure only.&lt;br /&gt;

```sql
EXEC oci.database.cloud_exadata_infrastructures.add_storage_capacity_cloud_exadata_infrastructure 
@cloudExadataInfrastructureId='{{ cloudExadataInfrastructureId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="change_compartment">

Moves a cloud Exadata infrastructure resource and its dependent resources to another compartment. Applies to Exadata Cloud Service instances and Autonomous AI Database on dedicated Exadata infrastructure only.For more information about moving resources to a different compartment, see &#91;Moving Database Resources to a Different Compartment&#93;(/Content/Database/Concepts/databaseoverview.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.database.cloud_exadata_infrastructures.change_compartment 
@cloudExadataInfrastructureId='{{ cloudExadataInfrastructureId }}' --required, 
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
<TabItem value="change_cloud_exadata_infrastructure_subscription">

Associate a cloud Exadata infrastructure with a different subscription.&lt;br /&gt;

```sql
EXEC oci.database.cloud_exadata_infrastructures.change_cloud_exadata_infrastructure_subscription 
@cloudExadataInfrastructureId='{{ cloudExadataInfrastructureId }}' --required, 
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
<TabItem value="configure_exascale_cloud_exadata_infrastructure">

Configures Exascale on Cloud exadata infrastructure resource. Applies to Exadata Cloud Service instances only.&lt;br /&gt;

```sql
EXEC oci.database.cloud_exadata_infrastructures.configure_exascale_cloud_exadata_infrastructure 
@cloudExadataInfrastructureId='{{ cloudExadataInfrastructureId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"totalStorageInGBs": {{ totalStorageInGBs }}, 
"totalVmStorageInGBs": {{ totalVmStorageInGBs }}
}'
;
```
</TabItem>
</Tabs>
