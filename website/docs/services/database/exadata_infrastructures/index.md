--- 
title: exadata_infrastructures
hide_title: false
hide_table_of_contents: false
keywords:
  - exadata_infrastructures
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

Creates, updates, deletes, gets or lists an <code>exadata_infrastructures</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exadata_infrastructures" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.exadata_infrastructures" /></td></tr>
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

The Exadata Cloud@Customer infrastructure details.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="activatedStorageCount" /></td>
    <td><code>integer</code></td>
    <td>The requested number of additional storage servers activated for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalComputeCount" /></td>
    <td><code>integer</code></td>
    <td>The requested number of additional compute servers for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalComputeSystemModel" /></td>
    <td><code>string</code></td>
    <td>Oracle Exadata System Model specification. The system model determines the amount of compute or storage server resources available for use. For more information, please see &#91;System and Shape Configuration Options&#93; (https:​//docs.oracle.com/en/engineered-systems/exadata-cloud-at-customer/ecccm/ecc-system-config-options.html#GUID-9E090174-5C57-4EB1-9243-B470F9F10D6B)  (X7, X8, X8M, X9M, X11M)</td>
</tr>
<tr>
    <td><CopyableCode code="additionalStorageCount" /></td>
    <td><code>integer</code></td>
    <td>The requested number of additional storage servers for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="adminNetworkCIDR" /></td>
    <td><code>string</code></td>
    <td>The CIDR block for the Exadata administration network.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain that the Exadata infrastructure is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudControlPlaneServer1" /></td>
    <td><code>string</code></td>
    <td>The IP address for the first control plane server.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudControlPlaneServer2" /></td>
    <td><code>string</code></td>
    <td>The IP address for the second control plane server.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeCount" /></td>
    <td><code>integer</code></td>
    <td>The number of compute servers for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Base Database, Exadata Infrastructure, VM Cluster and Autonomous AI Database.  (ECPU, OCPU) (x-default-description: Null used when unspecified.)</td>
</tr>
<tr>
    <td><CopyableCode code="contacts" /></td>
    <td><code>array</code></td>
    <td>The list of contacts for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="corporateProxy" /></td>
    <td><code>string</code></td>
    <td>The corporate network proxy for access to the control plane network.</td>
</tr>
<tr>
    <td><CopyableCode code="cpusEnabled" /></td>
    <td><code>integer</code></td>
    <td>The number of enabled CPU cores.</td>
</tr>
<tr>
    <td><CopyableCode code="csiNumber" /></td>
    <td><code>string</code></td>
    <td>The CSI Number of the Exadata infrastructure.</td>
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
    <td>The software version of the database servers (dom0) in the Exadata infrastructure.</td>
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
    <td>The user-friendly name for the Exadata Cloud@Customer infrastructure. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsServer" /></td>
    <td><code>array</code></td>
    <td>The list of DNS server IP addresses. Maximum of 3 allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="gateway" /></td>
    <td><code>string</code></td>
    <td>The gateway for the control plane network.</td>
</tr>
<tr>
    <td><CopyableCode code="infiniBandNetworkCIDR" /></td>
    <td><code>string</code></td>
    <td>The CIDR block for the Exadata InfiniBand interconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="isMultiRackDeployment" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if deployment is Multi-Rack or not.</td>
</tr>
<tr>
    <td><CopyableCode code="isSchedulingPolicyAssociated" /></td>
    <td><code>boolean</code></td>
    <td>If true, the infrastructure is using granular maintenance scheduling preference.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the Exadata infrastructure. (CREATING, REQUIRES_ACTIVATION, ACTIVATING, ACTIVE, ACTIVATION_FAILED, FAILED, UPDATING, DELETING, DELETED, DISCONNECTED, MAINTENANCE_IN_PROGRESS, WAITING_FOR_CONNECTIVITY)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSLOStatus" /></td>
    <td><code>string</code></td>
    <td>A field to capture ‘Maintenance SLO Status’ for the Exadata infrastructure with values ‘OK’, ‘DEGRADED’. Default is ‘OK’ when the infrastructure is provisioned. (OK, DEGRADED)</td>
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
    <td>The monthly software version of the database servers (dom0) in the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="multiRackConfigurationFile" /></td>
    <td><code>string (byte)</code></td>
    <td>The base64 encoded Multi-Rack configuration json file.</td>
</tr>
<tr>
    <td><CopyableCode code="netmask" /></td>
    <td><code>string</code></td>
    <td>The netmask for the control plane network.</td>
</tr>
<tr>
    <td><CopyableCode code="networkBondingModeDetails" /></td>
    <td><code>object</code></td>
    <td>Details of bonding mode for Client and Backup and DR networks of an Exadata infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="ntpServer" /></td>
    <td><code>array</code></td>
    <td>The list of NTP server IP addresses. Maximum of 3 allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="rackSerialNumber" /></td>
    <td><code>string</code></td>
    <td>The serial number for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the Exadata infrastructure. The shape determines the amount of CPU, storage, and memory resources allocated to the instance. </td>
</tr>
<tr>
    <td><CopyableCode code="storageCount" /></td>
    <td><code>integer</code></td>
    <td>The number of Exadata storage servers for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="storageServerType" /></td>
    <td><code>string</code></td>
    <td>The storage server type of the Exadata infrastructure. (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="storageServerVersion" /></td>
    <td><code>string</code></td>
    <td>The software version of the storage servers (cells) in the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Exadata infrastructure was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string (x-obmcs-time-zone)</code></td>
    <td>The time zone of the Exadata infrastructure. For details, see &#91;Exadata Infrastructure Time Zones&#93;(/Content/Database/References/timezones.htm).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details of the Exadata Cloud@Customer infrastructure. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;See &#91;CloudExadataInfrastructureSummary Reference&#93;(#/en/database/latest/datatypes/CloudExadataInfrastructureSummary) for details of the cloud Exadata infrastructure resource used by Exadata Cloud Service instances.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="activatedStorageCount" /></td>
    <td><code>integer</code></td>
    <td>The requested number of additional storage servers activated for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalComputeCount" /></td>
    <td><code>integer</code></td>
    <td>The requested number of additional compute servers for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalComputeSystemModel" /></td>
    <td><code>string</code></td>
    <td>Oracle Exadata System Model specification. The system model determines the amount of compute or storage server resources available for use. For more information, please see &#91;System and Shape Configuration Options&#93; (https:​//docs.oracle.com/en/engineered-systems/exadata-cloud-at-customer/ecccm/ecc-system-config-options.html#GUID-9E090174-5C57-4EB1-9243-B470F9F10D6B)  (X7, X8, X8M, X9M, X11M)</td>
</tr>
<tr>
    <td><CopyableCode code="additionalStorageCount" /></td>
    <td><code>integer</code></td>
    <td>The requested number of additional storage servers for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="adminNetworkCIDR" /></td>
    <td><code>string</code></td>
    <td>The CIDR block for the Exadata administration network.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain that the Exadata infrastructure is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudControlPlaneServer1" /></td>
    <td><code>string</code></td>
    <td>The IP address for the first control plane server.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudControlPlaneServer2" /></td>
    <td><code>string</code></td>
    <td>The IP address for the second control plane server.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeCount" /></td>
    <td><code>integer</code></td>
    <td>The number of compute servers for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Base Database, Exadata Infrastructure, VM Cluster and Autonomous AI Database.  (ECPU, OCPU) (x-default-description: Null used when unspecified.)</td>
</tr>
<tr>
    <td><CopyableCode code="contacts" /></td>
    <td><code>array</code></td>
    <td>The list of contacts for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="corporateProxy" /></td>
    <td><code>string</code></td>
    <td>The corporate network proxy for access to the control plane network.</td>
</tr>
<tr>
    <td><CopyableCode code="cpusEnabled" /></td>
    <td><code>integer</code></td>
    <td>The number of enabled CPU cores.</td>
</tr>
<tr>
    <td><CopyableCode code="csiNumber" /></td>
    <td><code>string</code></td>
    <td>The CSI Number of the Exadata infrastructure.</td>
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
    <td>The software version of the database servers (dom0) in the Exadata infrastructure.</td>
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
    <td>The user-friendly name for the Exadata Cloud@Customer infrastructure. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="dnsServer" /></td>
    <td><code>array</code></td>
    <td>The list of DNS server IP addresses. Maximum of 3 allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="gateway" /></td>
    <td><code>string</code></td>
    <td>The gateway for the control plane network.</td>
</tr>
<tr>
    <td><CopyableCode code="infiniBandNetworkCIDR" /></td>
    <td><code>string</code></td>
    <td>The CIDR block for the Exadata InfiniBand interconnect.</td>
</tr>
<tr>
    <td><CopyableCode code="isMultiRackDeployment" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if deployment is Multi-Rack or not.</td>
</tr>
<tr>
    <td><CopyableCode code="isSchedulingPolicyAssociated" /></td>
    <td><code>boolean</code></td>
    <td>If true, the infrastructure is using granular maintenance scheduling preference.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the Exadata infrastructure. (CREATING, REQUIRES_ACTIVATION, ACTIVATING, ACTIVE, ACTIVATION_FAILED, FAILED, UPDATING, DELETING, DELETED, DISCONNECTED, MAINTENANCE_IN_PROGRESS, WAITING_FOR_CONNECTIVITY)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSLOStatus" /></td>
    <td><code>string</code></td>
    <td>A field to capture ‘Maintenance SLO Status’ for the Exadata infrastructure with values ‘OK’, ‘DEGRADED’. Default is ‘OK’ when the infrastructure is provisioned. (OK, DEGRADED)</td>
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
    <td>The monthly software version of the database servers (dom0) in the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="multiRackConfigurationFile" /></td>
    <td><code>string (byte)</code></td>
    <td>The base64 encoded Multi-Rack configuration json file.</td>
</tr>
<tr>
    <td><CopyableCode code="netmask" /></td>
    <td><code>string</code></td>
    <td>The netmask for the control plane network.</td>
</tr>
<tr>
    <td><CopyableCode code="networkBondingModeDetails" /></td>
    <td><code>object</code></td>
    <td>Details of bonding mode for Client and Backup and DR networks of an Exadata infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="ntpServer" /></td>
    <td><code>array</code></td>
    <td>The list of NTP server IP addresses. Maximum of 3 allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="rackSerialNumber" /></td>
    <td><code>string</code></td>
    <td>The serial number for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the Exadata infrastructure. The shape determines the amount of CPU, storage, and memory resources allocated to the instance. </td>
</tr>
<tr>
    <td><CopyableCode code="storageCount" /></td>
    <td><code>integer</code></td>
    <td>The number of Exadata storage servers for the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="storageServerType" /></td>
    <td><code>string</code></td>
    <td>The storage server type of the Exadata infrastructure. (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="storageServerVersion" /></td>
    <td><code>string</code></td>
    <td>The software version of the storage servers (cells) in the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Exadata infrastructure was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string (x-obmcs-time-zone)</code></td>
    <td>The time zone of the Exadata infrastructure. For details, see &#91;Exadata Infrastructure Time Zones&#93;(/Content/Database/References/timezones.htm).</td>
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
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-excludedFields"><code>excludedFields</code></a></td>
    <td>Gets information about the specified Exadata infrastructure. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To get information on an Exadata Cloud Service infrastructure resource, use the  &#91;GetCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/GetCloudExadataInfrastructure) operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-excludedFields"><code>excludedFields</code></a></td>
    <td>Lists the Exadata infrastructure resources in the specified compartment. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To list the Exadata Cloud Service infrastructure resources in a compartment, use the  &#91;ListCloudExadataInfrastructures&#93;(#/en/database/latest/CloudExadataInfrastructure/ListCloudExadataInfrastructures) operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-shape"><code>shape</code></a>, <a href="#parameter-timeZone"><code>timeZone</code></a>, <a href="#parameter-cloudControlPlaneServer1"><code>cloudControlPlaneServer1</code></a>, <a href="#parameter-cloudControlPlaneServer2"><code>cloudControlPlaneServer2</code></a>, <a href="#parameter-netmask"><code>netmask</code></a>, <a href="#parameter-gateway"><code>gateway</code></a>, <a href="#parameter-adminNetworkCIDR"><code>adminNetworkCIDR</code></a>, <a href="#parameter-infiniBandNetworkCIDR"><code>infiniBandNetworkCIDR</code></a>, <a href="#parameter-dnsServer"><code>dnsServer</code></a>, <a href="#parameter-ntpServer"><code>ntpServer</code></a>, <a href="#parameter-corporateProxy"><code>corporateProxy</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates an Exadata infrastructure resource. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To create an Exadata Cloud Service infrastructure resource, use the  &#91;CreateCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/CreateCloudExadataInfrastructure) operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the Exadata infrastructure resource. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To update an Exadata Cloud Service infrastructure resource, use the  &#91;UpdateCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/UpdateCloudExadataInfrastructure) operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the Exadata Cloud@Customer infrastructure.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#activate_exadata_infrastructure"><CopyableCode code="activate_exadata_infrastructure" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-activationFile"><code>activationFile</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Activates the specified Exadata infrastructure resource. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_storage_capacity_exadata_infrastructure"><CopyableCode code="add_storage_capacity_exadata_infrastructure" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Makes the storage capacity from additional storage servers available for VM Cluster consumption. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Moves an Exadata infrastructure resource and its dependent resources to another compartment. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To move an Exadata Cloud Service infrastructure resource to another compartment, use the  &#91;ChangeCloudExadataInfrastructureCompartment&#93;(#/en/database/latest/CloudExadataInfrastructure/ChangeCloudExadataInfrastructureCompartment) operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#download_exadata_infrastructure_config_file"><CopyableCode code="download_exadata_infrastructure_config_file" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Downloads the configuration file for the specified Exadata Cloud@Customer infrastructure.&lt;br /&gt;</td>
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
<tr id="parameter-exadataInfrastructureId">
    <td><CopyableCode code="exadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The Exadata infrastructure &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
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
<tr id="parameter-excludedFields">
    <td><CopyableCode code="excludedFields" /></td>
    <td><code>array</code></td>
    <td>If provided, the specified fields will be excluded in the response.</td>
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

Gets information about the specified Exadata infrastructure. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To get information on an Exadata Cloud Service infrastructure resource, use the  &#91;GetCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/GetCloudExadataInfrastructure) operation.&lt;br /&gt;

```sql
SELECT
id,
activatedStorageCount,
additionalComputeCount,
additionalComputeSystemModel,
additionalStorageCount,
adminNetworkCIDR,
availabilityDomain,
cloudControlPlaneServer1,
cloudControlPlaneServer2,
compartmentId,
computeCount,
computeModel,
contacts,
corporateProxy,
cpusEnabled,
csiNumber,
dataStorageSizeInTBs,
databaseServerType,
dbNodeStorageSizeInGBs,
dbServerVersion,
definedFileSystemConfigurations,
definedTags,
displayName,
dnsServer,
freeformTags,
gateway,
infiniBandNetworkCIDR,
isMultiRackDeployment,
isSchedulingPolicyAssociated,
lifecycleDetails,
lifecycleState,
maintenanceSLOStatus,
maintenanceVersionPreferences,
maintenanceWindow,
maxCpuCount,
maxDataStorageInTBs,
maxDbNodeStorageInGBs,
maxMemoryInGBs,
memorySizeInGBs,
monthlyDbServerVersion,
multiRackConfigurationFile,
netmask,
networkBondingModeDetails,
ntpServer,
rackSerialNumber,
shape,
storageCount,
storageServerType,
storageServerVersion,
systemTags,
timeCreated,
timeZone
FROM oci.database.exadata_infrastructures
WHERE exadataInfrastructureId = '{{ exadataInfrastructureId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND excludedFields = '{{ excludedFields }}'
;
```
</TabItem>
<TabItem value="list">

Lists the Exadata infrastructure resources in the specified compartment. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To list the Exadata Cloud Service infrastructure resources in a compartment, use the  &#91;ListCloudExadataInfrastructures&#93;(#/en/database/latest/CloudExadataInfrastructure/ListCloudExadataInfrastructures) operation.&lt;br /&gt;

```sql
SELECT
id,
activatedStorageCount,
additionalComputeCount,
additionalComputeSystemModel,
additionalStorageCount,
adminNetworkCIDR,
availabilityDomain,
cloudControlPlaneServer1,
cloudControlPlaneServer2,
compartmentId,
computeCount,
computeModel,
contacts,
corporateProxy,
cpusEnabled,
csiNumber,
dataStorageSizeInTBs,
databaseServerType,
dbNodeStorageSizeInGBs,
dbServerVersion,
definedFileSystemConfigurations,
definedTags,
displayName,
dnsServer,
freeformTags,
gateway,
infiniBandNetworkCIDR,
isMultiRackDeployment,
isSchedulingPolicyAssociated,
lifecycleDetails,
lifecycleState,
maintenanceSLOStatus,
maintenanceVersionPreferences,
maintenanceWindow,
maxCpuCount,
maxDataStorageInTBs,
maxDbNodeStorageInGBs,
maxMemoryInGBs,
memorySizeInGBs,
monthlyDbServerVersion,
multiRackConfigurationFile,
netmask,
networkBondingModeDetails,
ntpServer,
rackSerialNumber,
shape,
storageCount,
storageServerType,
storageServerVersion,
systemTags,
timeCreated,
timeZone
FROM oci.database.exadata_infrastructures
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
AND excludedFields = '{{ excludedFields }}'
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

Creates an Exadata infrastructure resource. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To create an Exadata Cloud Service infrastructure resource, use the  &#91;CreateCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/CreateCloudExadataInfrastructure) operation.&lt;br /&gt;

```sql
INSERT INTO oci.database.exadata_infrastructures (
adminNetworkCIDR,
cloudControlPlaneServer1,
cloudControlPlaneServer2,
compartmentId,
computeCount,
contacts,
corporateProxy,
databaseServerType,
definedTags,
displayName,
dnsServer,
freeformTags,
gateway,
infiniBandNetworkCIDR,
isMultiRackDeployment,
maintenanceVersionPreferences,
maintenanceWindow,
multiRackConfigurationFile,
netmask,
networkBondingModeDetails,
ntpServer,
shape,
storageCount,
storageServerType,
timeZone,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ adminNetworkCIDR }}' /* required */,
'{{ cloudControlPlaneServer1 }}' /* required */,
'{{ cloudControlPlaneServer2 }}' /* required */,
'{{ compartmentId }}' /* required */,
{{ computeCount }},
'{{ contacts }}',
'{{ corporateProxy }}' /* required */,
'{{ databaseServerType }}',
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ dnsServer }}' /* required */,
'{{ freeformTags }}',
'{{ gateway }}' /* required */,
'{{ infiniBandNetworkCIDR }}' /* required */,
{{ isMultiRackDeployment }},
'{{ maintenanceVersionPreferences }}',
'{{ maintenanceWindow }}',
'{{ multiRackConfigurationFile }}',
'{{ netmask }}' /* required */,
'{{ networkBondingModeDetails }}',
'{{ ntpServer }}' /* required */,
'{{ shape }}' /* required */,
{{ storageCount }},
'{{ storageServerType }}',
'{{ timeZone }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
activatedStorageCount,
additionalComputeCount,
additionalComputeSystemModel,
additionalStorageCount,
adminNetworkCIDR,
availabilityDomain,
cloudControlPlaneServer1,
cloudControlPlaneServer2,
compartmentId,
computeCount,
computeModel,
contacts,
corporateProxy,
cpusEnabled,
csiNumber,
dataStorageSizeInTBs,
databaseServerType,
dbNodeStorageSizeInGBs,
dbServerVersion,
definedFileSystemConfigurations,
definedTags,
displayName,
dnsServer,
freeformTags,
gateway,
infiniBandNetworkCIDR,
isMultiRackDeployment,
isSchedulingPolicyAssociated,
lifecycleDetails,
lifecycleState,
maintenanceSLOStatus,
maintenanceVersionPreferences,
maintenanceWindow,
maxCpuCount,
maxDataStorageInTBs,
maxDbNodeStorageInGBs,
maxMemoryInGBs,
memorySizeInGBs,
monthlyDbServerVersion,
multiRackConfigurationFile,
netmask,
networkBondingModeDetails,
ntpServer,
rackSerialNumber,
shape,
storageCount,
storageServerType,
storageServerVersion,
systemTags,
timeCreated,
timeZone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: exadata_infrastructures
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the exadata_infrastructures resource.
    - name: adminNetworkCIDR
      value: "{{ adminNetworkCIDR }}"
      description: |
        The CIDR block for the Exadata administration network.
    - name: cloudControlPlaneServer1
      value: "{{ cloudControlPlaneServer1 }}"
      description: |
        The IP address for the first control plane server.
    - name: cloudControlPlaneServer2
      value: "{{ cloudControlPlaneServer2 }}"
      description: |
        The IP address for the second control plane server.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment.
    - name: computeCount
      value: {{ computeCount }}
      description: |
        The number of compute servers for the Exadata infrastructure.
    - name: contacts
      description: |
        The list of contacts for the Exadata infrastructure.
      value:
        - email: "{{ email }}"
          isContactMosValidated: {{ isContactMosValidated }}
          isPrimary: {{ isPrimary }}
          name: "{{ name }}"
          phoneNumber: "{{ phoneNumber }}"
    - name: corporateProxy
      value: "{{ corporateProxy }}"
      description: |
        The corporate network proxy for access to the control plane network. Oracle recommends using an HTTPS proxy when possible
        for enhanced security.
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
        The user-friendly name for the Exadata infrastructure. The name does not need to be unique.
    - name: dnsServer
      value:
        - "{{ dnsServer }}"
      description: |
        The list of DNS server IP addresses. Maximum of 3 allowed.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: gateway
      value: "{{ gateway }}"
      description: |
        The gateway for the control plane network.
    - name: infiniBandNetworkCIDR
      value: "{{ infiniBandNetworkCIDR }}"
      description: |
        The CIDR block for the Exadata InfiniBand interconnect.
    - name: isMultiRackDeployment
      value: {{ isMultiRackDeployment }}
      description: |
        Indicates if deployment is Multi-Rack or not.
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
    - name: multiRackConfigurationFile
      value: "{{ multiRackConfigurationFile }}"
      description: |
        The base64 encoded Multi-Rack configuration json file.
    - name: netmask
      value: "{{ netmask }}"
      description: |
        The netmask for the control plane network.
    - name: networkBondingModeDetails
      description: |
        Details of bonding mode for Client and Backup and DR networks of an Exadata infrastructure.
      value:
        backupNetworkBondingMode: "{{ backupNetworkBondingMode }}"
        clientNetworkBondingMode: "{{ clientNetworkBondingMode }}"
        drNetworkBondingMode: "{{ drNetworkBondingMode }}"
    - name: ntpServer
      value:
        - "{{ ntpServer }}"
      description: |
        The list of NTP server IP addresses. Maximum of 3 allowed.
    - name: shape
      value: "{{ shape }}"
      description: |
        The shape of the Exadata infrastructure. The shape determines the amount of CPU, storage, and memory resources allocated to the instance.
    - name: storageCount
      value: {{ storageCount }}
      description: |
        The number of storage servers for the Exadata infrastructure.
    - name: storageServerType
      value: "{{ storageServerType }}"
      description: |
        The storage server type of the Exadata infrastructure.
    - name: timeZone
      value: "{{ timeZone }}"
      description: |
        The time zone of the Exadata infrastructure. For details, see [Exadata Infrastructure Time Zones](/Content/Database/References/timezones.htm).
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

Updates the Exadata infrastructure resource. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To update an Exadata Cloud Service infrastructure resource, use the  &#91;UpdateCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/UpdateCloudExadataInfrastructure) operation.&lt;br /&gt;

```sql
UPDATE oci.database.exadata_infrastructures
SET 
additionalComputeCount = {{ additionalComputeCount }},
additionalComputeSystemModel = '{{ additionalComputeSystemModel }}',
additionalStorageCount = {{ additionalStorageCount }},
adminNetworkCIDR = '{{ adminNetworkCIDR }}',
cloudControlPlaneServer1 = '{{ cloudControlPlaneServer1 }}',
cloudControlPlaneServer2 = '{{ cloudControlPlaneServer2 }}',
contacts = '{{ contacts }}',
corporateProxy = '{{ corporateProxy }}',
definedTags = '{{ definedTags }}',
dnsServer = '{{ dnsServer }}',
freeformTags = '{{ freeformTags }}',
gateway = '{{ gateway }}',
infiniBandNetworkCIDR = '{{ infiniBandNetworkCIDR }}',
isMultiRackDeployment = {{ isMultiRackDeployment }},
maintenanceVersionPreferences = '{{ maintenanceVersionPreferences }}',
maintenanceWindow = '{{ maintenanceWindow }}',
multiRackConfigurationFile = '{{ multiRackConfigurationFile }}',
netmask = '{{ netmask }}',
networkBondingModeDetails = '{{ networkBondingModeDetails }}',
ntpServer = '{{ ntpServer }}',
timeZone = '{{ timeZone }}'
WHERE 
exadataInfrastructureId = '{{ exadataInfrastructureId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
activatedStorageCount,
additionalComputeCount,
additionalComputeSystemModel,
additionalStorageCount,
adminNetworkCIDR,
availabilityDomain,
cloudControlPlaneServer1,
cloudControlPlaneServer2,
compartmentId,
computeCount,
computeModel,
contacts,
corporateProxy,
cpusEnabled,
csiNumber,
dataStorageSizeInTBs,
databaseServerType,
dbNodeStorageSizeInGBs,
dbServerVersion,
definedFileSystemConfigurations,
definedTags,
displayName,
dnsServer,
freeformTags,
gateway,
infiniBandNetworkCIDR,
isMultiRackDeployment,
isSchedulingPolicyAssociated,
lifecycleDetails,
lifecycleState,
maintenanceSLOStatus,
maintenanceVersionPreferences,
maintenanceWindow,
maxCpuCount,
maxDataStorageInTBs,
maxDbNodeStorageInGBs,
maxMemoryInGBs,
memorySizeInGBs,
monthlyDbServerVersion,
multiRackConfigurationFile,
netmask,
networkBondingModeDetails,
ntpServer,
rackSerialNumber,
shape,
storageCount,
storageServerType,
storageServerVersion,
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

Deletes the Exadata Cloud@Customer infrastructure.&lt;br /&gt;

```sql
DELETE FROM oci.database.exadata_infrastructures
WHERE exadataInfrastructureId = '{{ exadataInfrastructureId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="activate_exadata_infrastructure"
    values={[
        { label: 'activate_exadata_infrastructure', value: 'activate_exadata_infrastructure' },
        { label: 'add_storage_capacity_exadata_infrastructure', value: 'add_storage_capacity_exadata_infrastructure' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'download_exadata_infrastructure_config_file', value: 'download_exadata_infrastructure_config_file' }
    ]}
>
<TabItem value="activate_exadata_infrastructure">

Activates the specified Exadata infrastructure resource. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;

```sql
EXEC oci.database.exadata_infrastructures.activate_exadata_infrastructure 
@exadataInfrastructureId='{{ exadataInfrastructureId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"activationFile": "{{ activationFile }}"
}'
;
```
</TabItem>
<TabItem value="add_storage_capacity_exadata_infrastructure">

Makes the storage capacity from additional storage servers available for VM Cluster consumption. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;

```sql
EXEC oci.database.exadata_infrastructures.add_storage_capacity_exadata_infrastructure 
@exadataInfrastructureId='{{ exadataInfrastructureId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="change_compartment">

Moves an Exadata infrastructure resource and its dependent resources to another compartment. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To move an Exadata Cloud Service infrastructure resource to another compartment, use the  &#91;ChangeCloudExadataInfrastructureCompartment&#93;(#/en/database/latest/CloudExadataInfrastructure/ChangeCloudExadataInfrastructureCompartment) operation.&lt;br /&gt;

```sql
EXEC oci.database.exadata_infrastructures.change_compartment 
@exadataInfrastructureId='{{ exadataInfrastructureId }}' --required, 
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
<TabItem value="download_exadata_infrastructure_config_file">

Downloads the configuration file for the specified Exadata Cloud@Customer infrastructure.&lt;br /&gt;

```sql
EXEC oci.database.exadata_infrastructures.download_exadata_infrastructure_config_file 
@exadataInfrastructureId='{{ exadataInfrastructureId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
</Tabs>
