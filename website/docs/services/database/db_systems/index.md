--- 
title: db_systems
hide_title: false
hide_table_of_contents: false
keywords:
  - db_systems
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

Creates, updates, deletes, gets or lists a <code>db_systems</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_systems" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.db_systems" /></td></tr>
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

The DB system information was retrieved.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain that the DB system is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="backupNetworkNsgIds" /></td>
    <td><code>array</code></td>
    <td>A list of the &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems. </td>
</tr>
<tr>
    <td><CopyableCode code="backupSubnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup network subnet the DB system is associated with. Applicable only to Exadata DB systems.  **Subnet Restriction:** See the subnet restrictions information for **subnetId**. </td>
</tr>
<tr>
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>The cluster name for Exadata and 2-node RAC virtual machine DB systems. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of compute servers for the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model for Base Database Service. This is required if using the `computeCount` parameter. If using `cpuCoreCount` then it is an error to specify `computeModel` to a non-null value. The ECPU compute model is the recommended model, and the OCPU compute model is legacy. (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled on the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="dataCollectionOptions" /></td>
    <td><code>object</code></td>
    <td>Indicates user preferences for the various diagnostic collection options for the VM cluster/Cloud VM cluster/VMBM DBCS. </td>
</tr>
<tr>
    <td><CopyableCode code="dataStoragePercentage" /></td>
    <td><code>integer</code></td>
    <td>The percentage assigned to DATA storage (user data and database files). The remaining percentage is assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). Accepted values are 40 and 80. The default is 80 percent assigned to DATA storage. Not applicable for virtual machine DB systems. </td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The data storage size, in gigabytes, that is currently available to the DB system. Applies only for virtual machine DB systems. </td>
</tr>
<tr>
    <td><CopyableCode code="databaseEdition" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database Edition that applies to all the databases on the DB system. Exadata DB systems and 2-node RAC DB systems require ENTERPRISE_EDITION_EXTREME_PERFORMANCE.  (STANDARD_EDITION, ENTERPRISE_EDITION, ENTERPRISE_EDITION_HIGH_PERFORMANCE, ENTERPRISE_EDITION_EXTREME_PERFORMANCE, ENTERPRISE_EDITION_DEVELOPER)</td>
</tr>
<tr>
    <td><CopyableCode code="dbSystemOptions" /></td>
    <td><code>object</code></td>
    <td>The DB system options.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="diskRedundancy" /></td>
    <td><code>string</code></td>
    <td>The type of redundancy configured for the DB system. NORMAL is 2-way redundancy. HIGH is 3-way redundancy.  (HIGH, NORMAL)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the DB system. The name does not have to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain name for the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="faultDomains" /></td>
    <td><code>array</code></td>
    <td>List of the Fault Domains in which this DB system is provisioned.</td>
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
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The hostname for the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="iormConfigCache" /></td>
    <td><code>object</code></td>
    <td>The IORM settings of the Exadata DB system. </td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.</td>
</tr>
<tr>
    <td><CopyableCode code="lastMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="lastPatchHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last patch history. This value is updated as soon as a patch operation starts.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to all the databases on the DB system. The default is LICENSE_INCLUDED.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the DB system. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MIGRATED, MAINTENANCE_IN_PROGRESS, NEEDS_ATTENTION, UPGRADING)</td>
</tr>
<tr>
    <td><CopyableCode code="listenerPort" /></td>
    <td><code>integer</code></td>
    <td>The port number configured for the listener on the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window. </td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>Memory allocated to the DB system, in gigabytes. (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="nextMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the next maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes in the DB system. For RAC DB systems, the value is greater than 1. </td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="pointInTimeDataDiskCloneTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The point in time for a cloned database system when the data disks were cloned from the source database system, as described in &#91;RFC 3339&#93;(https:​//tools.ietf.org/rfc/rfc3339).</td>
</tr>
<tr>
    <td><CopyableCode code="recoStorageSizeInGB" /></td>
    <td><code>integer</code></td>
    <td>The RECO/REDO storage size, in gigabytes, that is currently allocated to the DB system. Applies only for virtual machine DB systems. </td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsName" /></td>
    <td><code>string</code></td>
    <td>The FQDN of the DNS record for the SCAN IP addresses that are associated with the DB system. </td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsRecordId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DNS record for the SCAN IP addresses that are associated with the DB system. </td>
</tr>
<tr>
    <td><CopyableCode code="scanIpIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Single Client Access Name (SCAN) IPv4 addresses associated with the DB system. SCAN IPv4 addresses are typically used for load balancing and are not assigned to any interface. Oracle Clusterware directs the requests to the appropriate nodes in the cluster.  **Note:** For a single-node DB system, this list is empty. </td>
</tr>
<tr>
    <td><CopyableCode code="scanIpv6Ids" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Single Client Access Name (SCAN) IPv6 addresses associated with the DB system. SCAN IPv6 addresses are typically used for load balancing and are not assigned to any interface. Oracle Clusterware directs the requests to the appropriate nodes in the cluster.  **Note:** For a single-node DB system, this list is empty. </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security Attributes for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the DB system. The shape determines resources to allocate to the DB system. - For virtual machine shapes, the number of CPU cores and memory - For bare metal and Exadata shapes, the number of CPU cores, storage, and memory </td>
</tr>
<tr>
    <td><CopyableCode code="sourceDbSystemId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="sparseDiskgroup" /></td>
    <td><code>boolean</code></td>
    <td>True, if Sparse Diskgroup is configured for Exadata dbsystem, False, if Sparse diskgroup was not configured. </td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKeys" /></td>
    <td><code>array</code></td>
    <td>The public key portion of one or more key pairs used for SSH access to the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="storageVolumePerformanceMode" /></td>
    <td><code>string</code></td>
    <td>The block storage volume performance level. Valid values are `BALANCED` and `HIGH_PERFORMANCE`. See &#91;Block Volume Performance&#93;(/Content/Block/Concepts/blockvolumeperformance.htm) for more information.  (BALANCED, HIGH_PERFORMANCE) (default: BALANCED)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the subnet the DB system is associated with.  **Subnet Restrictions:** - For bare metal DB systems and for single node virtual machine DB systems, do not use a subnet that overlaps with 192.168.16.16/28. - For Exadata and virtual machine 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.128.0/20.  These subnets are used by the Oracle Clusterware private interconnect on the database instance. Specifying an overlapping subnet will cause the private interconnect to malfunction. This restriction applies to both the client subnet and backup subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the DB system was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the DB system. For details, see &#91;DB System Time Zones&#93;(/Content/Database/References/timezones.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database version of the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="vipIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the virtual IPv4 (VIP) addresses associated with the DB system. The Cluster Ready Services (CRS) creates and maintains one VIPv4 address for each node in the DB system to enable failover. If one node fails, the VIPv4 is reassigned to another active node in the cluster.  **Note:** For a single-node DB system, this list is empty. </td>
</tr>
<tr>
    <td><CopyableCode code="vipv6Ids" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the virtual IPv6 (VIP) addresses associated with the DB system. The Cluster Ready Services (CRS) creates and maintains one VIP IpV6 address for each node in the DB system to enable failover. If one node fails, the VIP is reassigned to another active node in the cluster.  **Note:** For a single-node DB system, this list is empty. </td>
</tr>
<tr>
    <td><CopyableCode code="zoneId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the zone the DB system is associated with. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The Database Service supports several types of DB systems, ranging in size, price, and performance. For details about&lt;br /&gt;each type of system, see &#91;Bare Metal and Virtual Machine DB Systems&#93;(/Content/Database/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service instances using the new &#91;resource model&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model).&lt;br /&gt;To provision and manage new Exadata Cloud Service systems, use the&lt;br /&gt;&#91;CloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/) and &#91;CloudVmCluster&#93;(#/en/database/latest/CloudVmCluster/).&lt;br /&gt;See &#91;Exadata Cloud Service&#93;(/Content/Database/Concepts/exaoverview.htm) for more information on Exadata systems.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;For information about access control and compartments, see&lt;br /&gt;&#91;Overview of the Identity Service&#93;(/Content/Identity/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;For information about availability domains, see&lt;br /&gt;&#91;Regions and Availability Domains&#93;(/Content/General/Concepts/regions.htm).&lt;br /&gt;&lt;br /&gt;To get a list of availability domains, use the `ListAvailabilityDomains` operation&lt;br /&gt;in the Identity Service API.&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain that the DB system is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="backupNetworkNsgIds" /></td>
    <td><code>array</code></td>
    <td>A list of the &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems. </td>
</tr>
<tr>
    <td><CopyableCode code="backupSubnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup network subnet the DB system is associated with. Applicable only to Exadata DB systems.  **Subnet Restriction:** See the subnet restrictions information for **subnetId**. </td>
</tr>
<tr>
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>The cluster name for Exadata and 2-node RAC virtual machine DB systems. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of compute servers for the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model for Base Database Service. This is required if using the `computeCount` parameter. If using `cpuCoreCount` then it is an error to specify `computeModel` to a non-null value. The ECPU compute model is the recommended model, and the OCPU compute model is legacy. (ECPU, OCPU)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores enabled on the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="dataCollectionOptions" /></td>
    <td><code>object</code></td>
    <td>Indicates user preferences for the various diagnostic collection options for the VM cluster/Cloud VM cluster/VMBM DBCS. </td>
</tr>
<tr>
    <td><CopyableCode code="dataStoragePercentage" /></td>
    <td><code>integer</code></td>
    <td>The percentage assigned to DATA storage (user data and database files). The remaining percentage is assigned to RECO storage (database redo logs, archive logs, and recovery manager backups). Accepted values are 40 and 80. The default is 80 percent assigned to DATA storage. Not applicable for virtual machine DB systems. </td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The data storage size, in gigabytes, that is currently available to the DB system. Applies only for virtual machine DB systems. </td>
</tr>
<tr>
    <td><CopyableCode code="databaseEdition" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database Edition that applies to all the databases on the DB system. Exadata DB systems and 2-node RAC DB systems require ENTERPRISE_EDITION_EXTREME_PERFORMANCE.  (STANDARD_EDITION, ENTERPRISE_EDITION, ENTERPRISE_EDITION_HIGH_PERFORMANCE, ENTERPRISE_EDITION_EXTREME_PERFORMANCE, ENTERPRISE_EDITION_DEVELOPER)</td>
</tr>
<tr>
    <td><CopyableCode code="dbSystemOptions" /></td>
    <td><code>object</code></td>
    <td>The DB system options.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="diskRedundancy" /></td>
    <td><code>string</code></td>
    <td>The type of redundancy configured for the DB system. NORMAL is 2-way redundancy. HIGH is 3-way redundancy.  (HIGH, NORMAL)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the DB system. The name does not have to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain name for the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="faultDomains" /></td>
    <td><code>array</code></td>
    <td>List of the Fault Domains in which this DB system is provisioned.</td>
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
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The hostname for the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.</td>
</tr>
<tr>
    <td><CopyableCode code="lastMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="lastPatchHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last patch history. This value is updated as soon as a patch operation starts.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to all the databases on the DB system. The default is LICENSE_INCLUDED.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the DB system. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MIGRATED, MAINTENANCE_IN_PROGRESS, NEEDS_ATTENTION, UPGRADING)</td>
</tr>
<tr>
    <td><CopyableCode code="listenerPort" /></td>
    <td><code>integer</code></td>
    <td>The port number configured for the listener on the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window. </td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>Memory allocated to the DB system, in gigabytes. (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="nextMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the next maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer</code></td>
    <td>The number of nodes in the DB system. For RAC DB systems, the value is greater than 1. </td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="pointInTimeDataDiskCloneTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The point in time for a cloned database system when the data disks were cloned from the source database system, as described in &#91;RFC 3339&#93;(https:​//tools.ietf.org/rfc/rfc3339).</td>
</tr>
<tr>
    <td><CopyableCode code="recoStorageSizeInGB" /></td>
    <td><code>integer</code></td>
    <td>The RECO/REDO storage size, in gigabytes, that is currently allocated to the DB system. Applies only for virtual machine DB systems. </td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsName" /></td>
    <td><code>string</code></td>
    <td>The FQDN of the DNS record for the SCAN IP addresses that are associated with the DB system. </td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsRecordId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DNS record for the SCAN IP addresses that are associated with the DB system. </td>
</tr>
<tr>
    <td><CopyableCode code="scanIpIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Single Client Access Name (SCAN) IPv4 addresses associated with the DB system. SCAN IPv4 addresses are typically used for load balancing and are not assigned to any interface. Oracle Clusterware directs the requests to the appropriate nodes in the cluster.  **Note:** For a single-node DB system, this list is empty. </td>
</tr>
<tr>
    <td><CopyableCode code="scanIpv6Ids" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Single Client Access Name (SCAN) IPv6 addresses associated with the DB system. SCAN IPv6 addresses are typically used for load balancing and are not assigned to any interface. Oracle Clusterware directs the requests to the appropriate nodes in the cluster.  **Note:** For a single-node DB system, this list is empty. </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security Attributes for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the DB system. The shape determines resources to allocate to the DB system. - For virtual machine shapes, the number of CPU cores and memory - For bare metal and Exadata shapes, the number of CPU cores, storage, and memory </td>
</tr>
<tr>
    <td><CopyableCode code="sourceDbSystemId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="sparseDiskgroup" /></td>
    <td><code>boolean</code></td>
    <td>True, if Sparse Diskgroup is configured for Exadata dbsystem, False, if Sparse diskgroup was not configured. </td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKeys" /></td>
    <td><code>array</code></td>
    <td>The public key portion of one or more key pairs used for SSH access to the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="storageVolumePerformanceMode" /></td>
    <td><code>string</code></td>
    <td>The block storage volume performance level. Valid values are `BALANCED` and `HIGH_PERFORMANCE`. See &#91;Block Volume Performance&#93;(/Content/Block/Concepts/blockvolumeperformance.htm) for more information.  (BALANCED, HIGH_PERFORMANCE) (default: BALANCED)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the subnet the DB system is associated with.  **Subnet Restrictions:** - For bare metal DB systems and for single node virtual machine DB systems, do not use a subnet that overlaps with 192.168.16.16/28. - For Exadata and virtual machine 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.128.0/20.  These subnets are used by the Oracle Clusterware private interconnect on the database instance. Specifying an overlapping subnet will cause the private interconnect to malfunction. This restriction applies to both the client subnet and backup subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the DB system was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone of the DB system. For details, see &#91;DB System Time Zones&#93;(/Content/Database/References/timezones.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The Oracle Database version of the DB system.</td>
</tr>
<tr>
    <td><CopyableCode code="vipIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the virtual IPv4 (VIP) addresses associated with the DB system. The Cluster Ready Services (CRS) creates and maintains one VIPv4 address for each node in the DB system to enable failover. If one node fails, the VIPv4 is reassigned to another active node in the cluster.  **Note:** For a single-node DB system, this list is empty. </td>
</tr>
<tr>
    <td><CopyableCode code="vipv6Ids" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the virtual IPv6 (VIP) addresses associated with the DB system. The Cluster Ready Services (CRS) creates and maintains one VIP IpV6 address for each node in the DB system to enable failover. If one node fails, the VIP is reassigned to another active node in the cluster.  **Note:** For a single-node DB system, this list is empty. </td>
</tr>
<tr>
    <td><CopyableCode code="zoneId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the zone the DB system is associated with. </td>
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
    <td><a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified DB system.&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service systems. Use the &#91;new resource model APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model) instead.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-backupId"><code>backupId</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td>Lists the DB systems in the specified compartment. You can specify a `backupId` to list only the DB systems that support creating a database using this backup in this compartment.&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service systems. Use the &#91;new resource model APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model) instead.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#launch"><CopyableCode code="launch" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-shape"><code>shape</code></a>, <a href="#parameter-sshPublicKeys"><code>sshPublicKeys</code></a>, <a href="#parameter-hostname"><code>hostname</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new DB system in the specified compartment and availability domain. The Oracle&lt;br /&gt;Database edition that you specify applies to all the databases on that DB system. The selected edition cannot be changed.&lt;br /&gt;&lt;br /&gt;An initial database is created on the DB system based on the request parameters you provide and some default&lt;br /&gt;options. For detailed information about default options, see &#91;Bare metal and virtual machine DB system default options.&#93;(/Content/Database/Tasks/creatingDBsystem.htm#Default)&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service systems. Use the &#91;new resource model APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model) instead.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;&lt;br /&gt;Use the &#91;CreateCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/CreateCloudExadataInfrastructure/) and &#91;CreateCloudVmCluster&#93;(#/en/database/latest/CloudVmCluster/CreateCloudVmCluster/) APIs to provision a new Exadata Cloud Service instance.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the properties of the specified DB system.&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service systems. Use the &#91;new resource model APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model) instead.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Terminates a DB system and permanently deletes it and any databases running on it, and any storage volumes attached to it. The database data is local to the DB system and will be lost when the system is terminated. Oracle recommends that you back up any data in the DB system prior to terminating it.&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service systems. Use the &#91;new resource model APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model) instead.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Moves the DB system and its dependent resources to the specified compartment.&lt;br /&gt;For more information about moving DB systems, see&lt;br /&gt;&#91;Moving Database Resources to a Different Compartment&#93;(/Content/Database/Concepts/databaseoverview.htm#moveRes).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#migrate_exadata_db_system_resource_model"><CopyableCode code="migrate_exadata_db_system_resource_model" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Migrates the Exadata DB system to the new &#91;Exadata resource model&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model).&lt;br /&gt;All related resources will be migrated.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#execute_db_system_os_patch"><CopyableCode code="execute_db_system_os_patch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Execute an operating system (OS) patch action on a DB system. Returns 202 and a work request. Some updates may require a reboot.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#upgrade_db_system"><CopyableCode code="upgrade_db_system" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Upgrades the operating system and grid infrastructure of the DB system.&lt;br /&gt;</td>
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
<tr id="parameter-dbSystemId">
    <td><CopyableCode code="dbSystemId" /></td>
    <td><code>string</code></td>
    <td>The DB system &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given availability domain exactly.</td>
</tr>
<tr id="parameter-backupId">
    <td><CopyableCode code="backupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup. Specify a backupId to list only the DB systems or DB homes that support creating a database using this backup in this compartment.</td>
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

Gets information about the specified DB system.&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service systems. Use the &#91;new resource model APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model) instead.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
backupNetworkNsgIds,
backupSubnetId,
clusterName,
compartmentId,
computeCount,
computeModel,
cpuCoreCount,
dataCollectionOptions,
dataStoragePercentage,
dataStorageSizeInGBs,
databaseEdition,
dbSystemOptions,
definedTags,
diskRedundancy,
displayName,
domain,
faultDomains,
freeformTags,
giSoftwareImageId,
hostname,
iormConfigCache,
kmsKeyId,
lastMaintenanceRunId,
lastPatchHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
listenerPort,
maintenanceWindow,
memorySizeInGBs,
nextMaintenanceRunId,
nodeCount,
nsgIds,
pointInTimeDataDiskCloneTimestamp,
recoStorageSizeInGB,
scanDnsName,
scanDnsRecordId,
scanIpIds,
scanIpv6Ids,
securityAttributes,
shape,
sourceDbSystemId,
sparseDiskgroup,
sshPublicKeys,
storageVolumePerformanceMode,
subnetId,
systemTags,
timeCreated,
timeZone,
version,
vipIds,
vipv6Ids,
zoneId
FROM oci.database.db_systems
WHERE dbSystemId = '{{ dbSystemId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the DB systems in the specified compartment. You can specify a `backupId` to list only the DB systems that support creating a database using this backup in this compartment.&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service systems. Use the &#91;new resource model APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model) instead.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
backupNetworkNsgIds,
backupSubnetId,
clusterName,
compartmentId,
computeCount,
computeModel,
cpuCoreCount,
dataCollectionOptions,
dataStoragePercentage,
dataStorageSizeInGBs,
databaseEdition,
dbSystemOptions,
definedTags,
diskRedundancy,
displayName,
domain,
faultDomains,
freeformTags,
giSoftwareImageId,
hostname,
kmsKeyId,
lastMaintenanceRunId,
lastPatchHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
listenerPort,
maintenanceWindow,
memorySizeInGBs,
nextMaintenanceRunId,
nodeCount,
nsgIds,
pointInTimeDataDiskCloneTimestamp,
recoStorageSizeInGB,
scanDnsName,
scanDnsRecordId,
scanIpIds,
scanIpv6Ids,
securityAttributes,
shape,
sourceDbSystemId,
sparseDiskgroup,
sshPublicKeys,
storageVolumePerformanceMode,
subnetId,
systemTags,
timeCreated,
timeZone,
version,
vipIds,
vipv6Ids,
zoneId
FROM oci.database.db_systems
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND backupId = '{{ backupId }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND availabilityDomain = '{{ availabilityDomain }}'
AND displayName = '{{ displayName }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="launch"
    values={[
        { label: 'launch', value: 'launch' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="launch">

Creates a new DB system in the specified compartment and availability domain. The Oracle&lt;br /&gt;Database edition that you specify applies to all the databases on that DB system. The selected edition cannot be changed.&lt;br /&gt;&lt;br /&gt;An initial database is created on the DB system based on the request parameters you provide and some default&lt;br /&gt;options. For detailed information about default options, see &#91;Bare metal and virtual machine DB system default options.&#93;(/Content/Database/Tasks/creatingDBsystem.htm#Default)&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service systems. Use the &#91;new resource model APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model) instead.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;&lt;br /&gt;Use the &#91;CreateCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/CreateCloudExadataInfrastructure/) and &#91;CreateCloudVmCluster&#93;(#/en/database/latest/CloudVmCluster/CreateCloudVmCluster/) APIs to provision a new Exadata Cloud Service instance.&lt;br /&gt;

```sql
INSERT INTO oci.database.db_systems (
availabilityDomain,
backupNetworkNsgIds,
backupSubnetId,
clusterName,
compartmentId,
computeCount,
computeModel,
cpuCoreCount,
dataCollectionOptions,
dataStoragePercentage,
dbSystemOptions,
definedTags,
displayName,
domain,
faultDomains,
freeformTags,
hostname,
initialDataStorageSizeInGB,
kmsKeyId,
kmsKeyVersionId,
nodeCount,
nsgIds,
privateIp,
privateIpV6,
securityAttributes,
shape,
source,
sparseDiskgroup,
sshPublicKeys,
storageVolumePerformanceMode,
subnetId,
timeZone,
region,
opc-retry-token
)
SELECT 
'{{ availabilityDomain }}' /* required */,
'{{ backupNetworkNsgIds }}',
'{{ backupSubnetId }}',
'{{ clusterName }}',
'{{ compartmentId }}' /* required */,
{{ computeCount }},
'{{ computeModel }}',
{{ cpuCoreCount }},
'{{ dataCollectionOptions }}',
{{ dataStoragePercentage }},
'{{ dbSystemOptions }}',
'{{ definedTags }}',
'{{ displayName }}',
'{{ domain }}',
'{{ faultDomains }}',
'{{ freeformTags }}',
'{{ hostname }}' /* required */,
{{ initialDataStorageSizeInGB }},
'{{ kmsKeyId }}',
'{{ kmsKeyVersionId }}',
{{ nodeCount }},
'{{ nsgIds }}',
'{{ privateIp }}',
'{{ privateIpV6 }}',
'{{ securityAttributes }}',
'{{ shape }}' /* required */,
'{{ source }}',
{{ sparseDiskgroup }},
'{{ sshPublicKeys }}' /* required */,
'{{ storageVolumePerformanceMode }}',
'{{ subnetId }}' /* required */,
'{{ timeZone }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
availabilityDomain,
backupNetworkNsgIds,
backupSubnetId,
clusterName,
compartmentId,
computeCount,
computeModel,
cpuCoreCount,
dataCollectionOptions,
dataStoragePercentage,
dataStorageSizeInGBs,
databaseEdition,
dbSystemOptions,
definedTags,
diskRedundancy,
displayName,
domain,
faultDomains,
freeformTags,
giSoftwareImageId,
hostname,
iormConfigCache,
kmsKeyId,
lastMaintenanceRunId,
lastPatchHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
listenerPort,
maintenanceWindow,
memorySizeInGBs,
nextMaintenanceRunId,
nodeCount,
nsgIds,
pointInTimeDataDiskCloneTimestamp,
recoStorageSizeInGB,
scanDnsName,
scanDnsRecordId,
scanIpIds,
scanIpv6Ids,
securityAttributes,
shape,
sourceDbSystemId,
sparseDiskgroup,
sshPublicKeys,
storageVolumePerformanceMode,
subnetId,
systemTags,
timeCreated,
timeZone,
version,
vipIds,
vipv6Ids,
zoneId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_systems
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_systems resource.
    - name: availabilityDomain
      value: "{{ availabilityDomain }}"
      description: |
        The availability domain where the DB system is located.
    - name: backupNetworkNsgIds
      value:
        - "{{ backupNetworkNsgIds }}"
      description: |
        A list of the [OCIDs](/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems.
    - name: backupSubnetId
      value: "{{ backupSubnetId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the backup network subnet the DB system is associated with. Applicable only to Exadata DB systems.
        **Subnet Restrictions:** See the subnet restrictions information for **subnetId**.
    - name: clusterName
      value: "{{ clusterName }}"
      description: |
        The cluster name for Exadata and 2-node RAC virtual machine DB systems. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment the DB system  belongs in.
    - name: computeCount
      value: {{ computeCount }}
      description: |
        The number of compute servers for the DB system.
    - name: computeModel
      value: "{{ computeModel }}"
      description: |
        The compute model for Base Database Service. This is required if using the \`computeCount\` parameter. If using \`cpuCoreCount\` then it is an error to specify \`computeModel\` to a non-null value. The ECPU compute model is the recommended model, and the OCPU compute model is legacy.
      valid_values: ['ECPU', 'OCPU']
    - name: cpuCoreCount
      value: {{ cpuCoreCount }}
      description: |
        The number of CPU cores to enable for a bare metal or Exadata DB system or AMD VMDB Systems. The valid values depend on the specified shape:
        - BM.DenseIO1.36 - Specify a multiple of 2, from 2 to 36.
        - BM.DenseIO2.52 - Specify a multiple of 2, from 2 to 52.
        - Exadata.Base.48 - Specify a multiple of 2, from 0 to 48.
        - Exadata.Quarter1.84 - Specify a multiple of 2, from 22 to 84.
        - Exadata.Half1.168 - Specify a multiple of 4, from 44 to 168.
        - Exadata.Full1.336 - Specify a multiple of 8, from 88 to 336.
        - Exadata.Quarter2.92 - Specify a multiple of 2, from 0 to 92.
        - Exadata.Half2.184 - Specify a multiple of 4, from 0 to 184.
        - Exadata.Full2.368 - Specify a multiple of 8, from 0 to 368.
        - VM.Standard.E4.Flex - Specify any thing from 1 to 64.
        This parameter is not used for INTEL virtual machine DB systems because virtual machine DB systems have a set number of cores for each shape.
        For information about the number of cores for a virtual machine DB system shape, see [Virtual Machine DB Systems](/Content/Database/Concepts/overview.htm#virtualmachine)
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
        The percentage assigned to DATA storage (user data and database files).
        The remaining percentage is assigned to RECO storage (database redo logs, archive logs, and recovery manager backups).
        Specify 80 or 40. The default is 80 percent assigned to DATA storage. Not applicable for virtual machine DB systems.
    - name: dbSystemOptions
      description: |
        The DB system options.
      value:
        storageManagement: "{{ storageManagement }}"
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the DB system. The name does not have to be unique.
    - name: domain
      value: "{{ domain }}"
      description: |
        A domain name used for the DB system. If the Oracle-provided Internet and VCN
        Resolver is enabled for the specified subnet, the domain name for the subnet is used
        (do not provide one). Otherwise, provide a valid DNS domain name. Hyphens (-) are not permitted.
    - name: faultDomains
      value:
        - "{{ faultDomains }}"
      description: |
        A Fault Domain is a grouping of hardware and infrastructure within an availability domain.
        Fault Domains let you distribute your instances so that they are not on the same physical
        hardware within a single availability domain. A hardware failure or maintenance
        that affects one Fault Domain does not affect DB systems in other Fault Domains.
        If you do not specify the Fault Domain, the system selects one for you. To change the Fault
        Domain for a DB system, terminate it and launch a new DB system in the preferred Fault Domain.
        If the node count is greater than 1, you can specify which Fault Domains these nodes will be distributed into.
        The system assigns your nodes automatically to the Fault Domains you specify so that
        no Fault Domain contains more than one node.
        To get a list of Fault Domains, use the
        [ListFaultDomains](#/en/identity/latest/FaultDomain/ListFaultDomains) operation in the
        Identity and Access Management Service API.
        Example: \`FAULT-DOMAIN-1\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: hostname
      value: "{{ hostname }}"
      description: |
        The hostname for the DB system. The hostname must begin with an alphabetic character, and
        can contain alphanumeric characters and hyphens (-). The maximum length of the hostname is 16 characters for bare metal and virtual machine DB systems, and 12 characters for Exadata DB systems.
        The maximum length of the combined hostname and domain is 63 characters.
        **Note:** The hostname must be unique within the subnet. If it is not unique,
        the DB system will fail to provision.
    - name: initialDataStorageSizeInGB
      value: {{ initialDataStorageSizeInGB }}
      description: |
        Size (in GB) of the initial data volume that will be created and attached to a virtual machine DB system. You can scale up storage after provisioning, as needed. Note that the total storage size attached will be more than the amount you specify to allow for REDO/RECO space and software volume. By default this will be set to 256.
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
    - name: kmsKeyVersionId
      value: "{{ kmsKeyVersionId }}"
      description: |
        The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation. Autonomous AI Database Serverless does not use key versions, hence is not applicable for Autonomous AI Database Serverless instances.
    - name: nodeCount
      value: {{ nodeCount }}
      description: |
        The number of nodes to launch for a virtual machine DB system. Specify either 1 or 2. By default this will be set to 1.
    - name: nsgIds
      value:
        - "{{ nsgIds }}"
      description: |
        The list of [OCIDs](/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](/Content/Network/Concepts/securityrules.htm).
    - name: privateIp
      value: "{{ privateIp }}"
      description: |
        A private IP address of your choice. Must be an available IP address within the subnet's CIDR.
        If you don't specify a value, Oracle automatically assigns a private IP address from the subnet.
    - name: privateIpV6
      value: "{{ privateIpV6 }}"
      description: |
        A private IPv6 address of your choice. Must be an available IP address within the subnet's CIDR.
        If you don't specify a value and the subnet is dual stack, Oracle automatically assigns a private IPv6 address from the subnet.
    - name: securityAttributes
      value: "{{ securityAttributes }}"
      description: |
        Security Attributes for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Oracle-ZPR": {"MaxEgressCount": {"value": "42", "mode": "audit"}}}\`
    - name: shape
      value: "{{ shape }}"
      description: |
        The shape of the DB system. The shape determines resources allocated to the DB system.
        - For virtual machine shapes, the number of CPU cores and memory
        - For bare metal and Exadata shapes, the number of CPU cores, memory, and storage
        To get a list of shapes, use the [ListDbSystemShapes](#/en/database/latest/DbSystemShapeSummary/ListDbSystemShapes) operation.
    - name: source
      value: "{{ source }}"
      description: |
        The source of the database:
        Use \`NONE\` for creating a new database. Use \`DB_BACKUP\` for creating a new database by restoring from a backup. Use \`DATABASE\` for creating
        a new database from an existing database, including archive redo log data. The default is \`NONE\`.
      valid_values: ['NONE', 'DB_BACKUP', 'DATABASE', 'DB_SYSTEM', 'DATAGUARD']
      default: NONE
    - name: sparseDiskgroup
      value: {{ sparseDiskgroup }}
      description: |
        If true, Sparse Diskgroup is configured for Exadata dbsystem. If False, Sparse diskgroup is not configured.
    - name: sshPublicKeys
      value:
        - "{{ sshPublicKeys }}"
      description: |
        The public key portion of the key pair to use for SSH access to the DB system. Multiple public keys can be provided. The length of the combined keys cannot exceed 40,000 characters.
    - name: storageVolumePerformanceMode
      value: "{{ storageVolumePerformanceMode }}"
      description: |
        The block storage volume performance level. Valid values are \`BALANCED\` and \`HIGH_PERFORMANCE\`. See [Block Volume Performance](/Content/Block/Concepts/blockvolumeperformance.htm) for more information.
      valid_values: ['BALANCED', 'HIGH_PERFORMANCE']
      default: BALANCED
    - name: subnetId
      value: "{{ subnetId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the subnet the DB system is associated with.
        **Subnet Restrictions:**
        - For bare metal DB systems and for single node virtual machine DB systems, do not use a subnet that overlaps with 192.168.16.16/28.
        - For Exadata and virtual machine 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.128.0/20.
        These subnets are used by the Oracle Clusterware private interconnect on the database instance.
        Specifying an overlapping subnet will cause the private interconnect to malfunction.
        This restriction applies to both the client subnet and the backup subnet.
    - name: timeZone
      value: "{{ timeZone }}"
      description: |
        The time zone to use for the DB system. For details, see [DB System Time Zones](/Content/Database/References/timezones.htm).
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

Updates the properties of the specified DB system.&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service systems. Use the &#91;new resource model APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model) instead.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;

```sql
UPDATE oci.database.db_systems
SET 
backupNetworkNsgIds = '{{ backupNetworkNsgIds }}',
computeCount = {{ computeCount }},
computeModel = '{{ computeModel }}',
cpuCoreCount = {{ cpuCoreCount }},
dataCollectionOptions = '{{ dataCollectionOptions }}',
dataStorageSizeInGBs = {{ dataStorageSizeInGBs }},
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}',
licenseModel = '{{ licenseModel }}',
maintenanceWindowDetails = '{{ maintenanceWindowDetails }}',
nsgIds = '{{ nsgIds }}',
securityAttributes = '{{ securityAttributes }}',
shape = '{{ shape }}',
sshPublicKeys = '{{ sshPublicKeys }}',
version = '{{ version }}'
WHERE 
dbSystemId = '{{ dbSystemId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
availabilityDomain,
backupNetworkNsgIds,
backupSubnetId,
clusterName,
compartmentId,
computeCount,
computeModel,
cpuCoreCount,
dataCollectionOptions,
dataStoragePercentage,
dataStorageSizeInGBs,
databaseEdition,
dbSystemOptions,
definedTags,
diskRedundancy,
displayName,
domain,
faultDomains,
freeformTags,
giSoftwareImageId,
hostname,
iormConfigCache,
kmsKeyId,
lastMaintenanceRunId,
lastPatchHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
listenerPort,
maintenanceWindow,
memorySizeInGBs,
nextMaintenanceRunId,
nodeCount,
nsgIds,
pointInTimeDataDiskCloneTimestamp,
recoStorageSizeInGB,
scanDnsName,
scanDnsRecordId,
scanIpIds,
scanIpv6Ids,
securityAttributes,
shape,
sourceDbSystemId,
sparseDiskgroup,
sshPublicKeys,
storageVolumePerformanceMode,
subnetId,
systemTags,
timeCreated,
timeZone,
version,
vipIds,
vipv6Ids,
zoneId;
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

Terminates a DB system and permanently deletes it and any databases running on it, and any storage volumes attached to it. The database data is local to the DB system and will be lost when the system is terminated. Oracle recommends that you back up any data in the DB system prior to terminating it.&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service systems. Use the &#91;new resource model APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model) instead.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;

```sql
DELETE FROM oci.database.db_systems
WHERE dbSystemId = '{{ dbSystemId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_compartment"
    values={[
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'migrate_exadata_db_system_resource_model', value: 'migrate_exadata_db_system_resource_model' },
        { label: 'execute_db_system_os_patch', value: 'execute_db_system_os_patch' },
        { label: 'upgrade_db_system', value: 'upgrade_db_system' }
    ]}
>
<TabItem value="change_compartment">

Moves the DB system and its dependent resources to the specified compartment.&lt;br /&gt;For more information about moving DB systems, see&lt;br /&gt;&#91;Moving Database Resources to a Different Compartment&#93;(/Content/Database/Concepts/databaseoverview.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.database.db_systems.change_compartment 
@dbSystemId='{{ dbSystemId }}' --required, 
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
<TabItem value="migrate_exadata_db_system_resource_model">

Migrates the Exadata DB system to the new &#91;Exadata resource model&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model).&lt;br /&gt;All related resources will be migrated.&lt;br /&gt;

```sql
EXEC oci.database.db_systems.migrate_exadata_db_system_resource_model 
@dbSystemId='{{ dbSystemId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="execute_db_system_os_patch">

Execute an operating system (OS) patch action on a DB system. Returns 202 and a work request. Some updates may require a reboot.&lt;br /&gt;

```sql
EXEC oci.database.db_systems.execute_db_system_os_patch 
@dbSystemId='{{ dbSystemId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"action": "{{ action }}", 
"dbNodeId": "{{ dbNodeId }}"
}'
;
```
</TabItem>
<TabItem value="upgrade_db_system">

Upgrades the operating system and grid infrastructure of the DB system.&lt;br /&gt;

```sql
EXEC oci.database.db_systems.upgrade_db_system 
@dbSystemId='{{ dbSystemId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"action": "{{ action }}", 
"isSnapshotRetentionDaysForceUpdated": {{ isSnapshotRetentionDaysForceUpdated }}, 
"newGiVersion": "{{ newGiVersion }}", 
"newOsVersion": "{{ newOsVersion }}", 
"snapshotRetentionPeriodInDays": {{ snapshotRetentionPeriodInDays }}
}'
;
```
</TabItem>
</Tabs>
