--- 
title: exadb_vm_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - exadb_vm_clusters
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

Creates, updates, deletes, gets or lists an <code>exadb_vm_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exadb_vm_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.exadb_vm_clusters" /></td></tr>
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

Information about the Exadata VM cluster on Exascale Infrastructure

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata VM cluster on Exascale Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain in which the Exadata VM cluster on Exascale Infrastructure is located. </td>
</tr>
<tr>
    <td><CopyableCode code="backupNetworkNsgIds" /></td>
    <td><code>array</code></td>
    <td>A list of the &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems. </td>
</tr>
<tr>
    <td><CopyableCode code="backupSubnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup network subnet associated with the Exadata VM cluster on Exascale Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>The cluster name for Exadata VM cluster on Exascale Infrastructure. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive. </td>
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
    <td><CopyableCode code="dataCollectionOptions" /></td>
    <td><code>object</code></td>
    <td>Indicates user preferences for the various diagnostic collection options for the VM cluster/Cloud VM cluster/VMBM DBCS. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Exadata VM cluster on Exascale Infrastructure. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>A domain name used for the Exadata VM cluster on Exascale Infrastructure. If the Oracle-provided internet and VCN resolver is enabled for the specified subnet, then the domain name for the subnet is used (do not provide one). Otherwise, provide a valid DNS domain name. Hyphens (-) are not permitted.  Applies to Exadata Database Service on Exascale Infrastructure only. </td>
</tr>
<tr>
    <td><CopyableCode code="enabledECpuCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of ECPUs to enable for an Exadata VM cluster on Exascale Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="exascaleDbStorageVaultId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata Database Storage Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="giVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Grid Infrastructure (GI) software version.</td>
</tr>
<tr>
    <td><CopyableCode code="gridImageId" /></td>
    <td><code>string</code></td>
    <td>Grid Setup will be done using this grid image id.  The grid image ID can be obtained using the API /20160918/giVersions/&#123;majorVersion&#125;/minorVersions?compartmentId=&lt;compartmentId&gt;&shapeFamily=EXADB_XS&availabilityDomain=&lt;AD name&gt;. The list of supported major versions can be obtained using the API /20160918/giVersions?compartmentId=&lt;compartmentId&gt;&shape=ExaDbXS&availabilityDomain=&lt;AD name&gt; </td>
</tr>
<tr>
    <td><CopyableCode code="gridImageType" /></td>
    <td><code>string</code></td>
    <td>The type of Grid Image (RELEASE_UPDATE, CUSTOM_IMAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The hostname for the Exadata VM cluster on Exascale Infrastructure. The hostname must begin with an alphabetic character, and  can contain alphanumeric characters and hyphens (-). For Exadata systems, the maximum length of the hostname is 12 characters.  The maximum length of the combined hostname and domain is 63 characters.  **Note:** The hostname must be unique within the subnet. If it is not unique,  then the Exadata VM cluster on Exascale Infrastructure will fail to provision. </td>
</tr>
<tr>
    <td><CopyableCode code="iormConfigCache" /></td>
    <td><code>object</code></td>
    <td>The IORM settings of the Exadata DB system. </td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance update history entry. This value is updated when a maintenance update starts.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the Exadata VM cluster on Exascale Infrastructure. The default is BRING_YOUR_OWN_LICENSE.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Exadata VM cluster on Exascale Infrastructure. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="listenerPort" /></td>
    <td><code>integer (int64)</code></td>
    <td>The port number configured for the listener on the Exadata VM cluster on Exascale Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The memory that you want to be allocated in GBs. Memory is calculated based on 11 GB per VM core reserved. </td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes in the Exadata VM cluster on Exascale Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="privateZoneId" /></td>
    <td><code>string</code></td>
    <td>The private zone ID in which you want DNS records to be created. </td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsName" /></td>
    <td><code>string</code></td>
    <td>The FQDN of the DNS record for the SCAN IP addresses that are associated with the Exadata VM cluster on Exascale Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsRecordId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DNS record for the SCAN IP addresses that are associated with the Exadata VM cluster on Exascale Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="scanIpIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Single Client Access Name (SCAN) IP addresses associated with the Exadata VM cluster on Exascale Infrastructure. SCAN IP addresses are typically used for load balancing and are not assigned to any interface. Oracle Clusterware directs the requests to the appropriate nodes in the cluster.  **Note:** For a single-node DB system, this list is empty. </td>
</tr>
<tr>
    <td><CopyableCode code="scanListenerPortTcp" /></td>
    <td><code>integer</code></td>
    <td>The TCP Single Client Access Name (SCAN) port. The default port is 1521.</td>
</tr>
<tr>
    <td><CopyableCode code="scanListenerPortTcpSsl" /></td>
    <td><code>integer</code></td>
    <td>The Secured Communication (TCPS) protocol Single Client Access Name (SCAN) port. The default port is 2484. </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security Attributes for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the Exadata VM cluster on Exascale Infrastructure resource </td>
</tr>
<tr>
    <td><CopyableCode code="shapeAttribute" /></td>
    <td><code>string</code></td>
    <td>The type of Exascale storage used for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle Database 23ai and later  (SMART_STORAGE, BLOCK_STORAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotFileSystemStorage" /></td>
    <td><code>object</code></td>
    <td>Storage Details on the Exadata VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKeys" /></td>
    <td><code>array</code></td>
    <td>The public key portion of one or more key pairs used for SSH access to the Exadata VM cluster on Exascale Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the subnet associated with the Exadata VM cluster on Exascale Infrastructure. </td>
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
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Exadata VM cluster on Exascale Infrastructure was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone to use for the Exadata VM cluster on Exascale Infrastructure. For details, see &#91;Time Zones&#93;(/Content/Database/References/timezones.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="totalECpuCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of Total ECPUs for an Exadata VM cluster on Exascale Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="totalFileSystemStorage" /></td>
    <td><code>object</code></td>
    <td>Storage Details on the Exadata VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="vipIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the virtual IP (VIP) addresses associated with the Exadata VM cluster on Exascale Infrastructure.  The Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the Exadata Cloud Service instance to  enable failover. If one node fails, then the VIP is reassigned to another active node in the cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="vmFileSystemStorage" /></td>
    <td><code>object</code></td>
    <td>Storage Details on the Exadata VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="zoneId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the zone with which the Exadata VM cluster on Exascale Infrastructure is associated. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details of the Exadata VM cluster on Exascale Infrastructure. Applies to Exadata Database Service on Exascale Infrastructure only.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata VM cluster on Exascale Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain in which the Exadata VM cluster on Exascale Infrastructure is located. </td>
</tr>
<tr>
    <td><CopyableCode code="backupNetworkNsgIds" /></td>
    <td><code>array</code></td>
    <td>A list of the &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems. </td>
</tr>
<tr>
    <td><CopyableCode code="backupSubnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the backup network subnet associated with the Exadata VM cluster on Exascale Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="clusterName" /></td>
    <td><code>string</code></td>
    <td>The cluster name for Exadata VM cluster on Exascale Infrastructure. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive. </td>
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
    <td><CopyableCode code="dataCollectionOptions" /></td>
    <td><code>object</code></td>
    <td>Indicates user preferences for the various diagnostic collection options for the VM cluster/Cloud VM cluster/VMBM DBCS. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Exadata VM cluster on Exascale Infrastructure. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>A domain name used for the Exadata VM cluster on Exascale Infrastructure. If the Oracle-provided internet and VCN resolver is enabled for the specified subnet, then the domain name for the subnet is used (do not provide one). Otherwise, provide a valid DNS domain name. Hyphens (-) are not permitted.  Applies to Exadata Database Service on Exascale Infrastructure only. </td>
</tr>
<tr>
    <td><CopyableCode code="enabledECpuCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of ECPUs to enable for an Exadata VM cluster on Exascale Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="exascaleDbStorageVaultId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata Database Storage Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="giVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Grid Infrastructure (GI) software version.</td>
</tr>
<tr>
    <td><CopyableCode code="gridImageId" /></td>
    <td><code>string</code></td>
    <td>Grid Setup will be done using this grid image id.  The grid image ID can be obtained using the API /20160918/giVersions/&#123;majorVersion&#125;/minorVersions?compartmentId=&lt;compartmentId&gt;&shapeFamily=EXADB_XS&availabilityDomain=&lt;AD name&gt;. The list of supported major versions can be obtained using the API /20160918/giVersions?compartmentId=&lt;compartmentId&gt;&shape=ExaDbXS&availabilityDomain=&lt;AD name&gt; </td>
</tr>
<tr>
    <td><CopyableCode code="gridImageType" /></td>
    <td><code>string</code></td>
    <td>The type of Grid Image (RELEASE_UPDATE, CUSTOM_IMAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The hostname for the Exadata VM cluster on Exascale Infrastructure. The hostname must begin with an alphabetic character, and  can contain alphanumeric characters and hyphens (-). For Exadata systems, the maximum length of the hostname is 12 characters.  The maximum length of the combined hostname and domain is 63 characters.  **Note:** The hostname must be unique within the subnet. If it is not unique,  then the Exadata VM cluster on Exascale Infrastructure will fail to provision. </td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateHistoryEntryId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance update history entry. This value is updated when a maintenance update starts.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the Exadata VM cluster on Exascale Infrastructure. The default is BRING_YOUR_OWN_LICENSE.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Exadata VM cluster on Exascale Infrastructure. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="listenerPort" /></td>
    <td><code>integer (int64)</code></td>
    <td>The port number configured for the listener on the Exadata VM cluster on Exascale Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="memorySizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The memory that you want to be allocated in GBs. Memory is calculated based on 11 GB per VM core reserved. </td>
</tr>
<tr>
    <td><CopyableCode code="nodeCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of nodes in the Exadata VM cluster on Exascale Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="privateZoneId" /></td>
    <td><code>string</code></td>
    <td>The private zone ID in which you want DNS records to be created. </td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsName" /></td>
    <td><code>string</code></td>
    <td>The FQDN of the DNS record for the SCAN IP addresses that are associated with the Exadata VM cluster on Exascale Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsRecordId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the DNS record for the SCAN IP addresses that are associated with the Exadata VM cluster on Exascale Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="scanIpIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Single Client Access Name (SCAN) IP addresses associated with the Exadata VM cluster on Exascale Infrastructure. SCAN IP addresses are typically used for load balancing and are not assigned to any interface. Oracle Clusterware directs the requests to the appropriate nodes in the cluster.  **Note:** For a single-node DB system, this list is empty. </td>
</tr>
<tr>
    <td><CopyableCode code="scanListenerPortTcp" /></td>
    <td><code>integer</code></td>
    <td>The TCP Single Client Access Name (SCAN) port. The default port is 1521.</td>
</tr>
<tr>
    <td><CopyableCode code="scanListenerPortTcpSsl" /></td>
    <td><code>integer</code></td>
    <td>The Secured Communication (TCPS) protocol Single Client Access Name (SCAN) port. The default port is 2484. </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security Attributes for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the Exadata VM cluster on Exascale Infrastructure resource </td>
</tr>
<tr>
    <td><CopyableCode code="shapeAttribute" /></td>
    <td><code>string</code></td>
    <td>The type of Exascale storage used for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle Database 23ai and later  (SMART_STORAGE, BLOCK_STORAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshotFileSystemStorage" /></td>
    <td><code>object</code></td>
    <td>Storage Details on the Exadata VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="sshPublicKeys" /></td>
    <td><code>array</code></td>
    <td>The public key portion of one or more key pairs used for SSH access to the Exadata VM cluster on Exascale Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the subnet associated with the Exadata VM cluster on Exascale Infrastructure. </td>
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
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the Exadata VM cluster on Exascale Infrastructure was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone to use for the Exadata VM cluster on Exascale Infrastructure. For details, see &#91;Time Zones&#93;(/Content/Database/References/timezones.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="totalECpuCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The number of Total ECPUs for an Exadata VM cluster on Exascale Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="totalFileSystemStorage" /></td>
    <td><code>object</code></td>
    <td>Storage Details on the Exadata VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="vipIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the virtual IP (VIP) addresses associated with the Exadata VM cluster on Exascale Infrastructure.  The Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the Exadata Cloud Service instance to  enable failover. If one node fails, then the VIP is reassigned to another active node in the cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="vmFileSystemStorage" /></td>
    <td><code>object</code></td>
    <td>Storage Details on the Exadata VM cluster. </td>
</tr>
<tr>
    <td><CopyableCode code="zoneId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the zone with which the Exadata VM cluster on Exascale Infrastructure is associated. </td>
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
    <td><a href="#parameter-exadbVmClusterId"><code>exadbVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified Exadata VM cluster on Exascale Infrastructure. Applies to Exadata Database Service on Exascale Infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-exascaleDbStorageVaultId"><code>exascaleDbStorageVaultId</code></a>, <a href="#parameter-clusterPlacementGroupId"><code>clusterPlacementGroupId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets a list of the Exadata VM clusters on Exascale Infrastructure in the specified compartment. Applies to Exadata Database Service on Exascale Infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sshPublicKeys"><code>sshPublicKeys</code></a>, <a href="#parameter-gridImageId"><code>gridImageId</code></a>, <a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-backupSubnetId"><code>backupSubnetId</code></a>, <a href="#parameter-nodeCount"><code>nodeCount</code></a>, <a href="#parameter-totalECpuCount"><code>totalECpuCount</code></a>, <a href="#parameter-enabledECpuCount"><code>enabledECpuCount</code></a>, <a href="#parameter-vmFileSystemStorage"><code>vmFileSystemStorage</code></a>, <a href="#parameter-exascaleDbStorageVaultId"><code>exascaleDbStorageVaultId</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-shape"><code>shape</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates an Exadata VM cluster on Exascale Infrastructure&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exadbVmClusterId"><code>exadbVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified Exadata VM cluster on Exascale Infrastructure. Applies to Exadata Database Service on Exascale Infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exadbVmClusterId"><code>exadbVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the specified Exadata VM cluster on Exascale Infrastructure. Applies to Exadata Database Service on Exascale Infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_dbnode_snapshots_for_exadb_vm_cluster"><CopyableCode code="add_dbnode_snapshots_for_exadb_vm_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exadbVmClusterId"><code>exadbVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-sourceDbnodeIds"><code>sourceDbnodeIds</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Add a database node snapshots to the Exadb VM cluster..&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exadbVmClusterId"><code>exadbVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Moves a Exadata VM cluster on Exascale Infrastructure and its dependent resources to another compartment. Applies to Exadata Database Service on Exascale Infrastructure only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_exadb_vm_cluster_subscription"><CopyableCode code="change_exadb_vm_cluster_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exadbVmClusterId"><code>exadbVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Associate a Exadata VM cluster on Exascale Infrastructure with a different subscription.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_virtual_machine_from_exadb_vm_cluster"><CopyableCode code="remove_virtual_machine_from_exadb_vm_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exadbVmClusterId"><code>exadbVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dbNodes"><code>dbNodes</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Remove Virtual Machines from the Exadata VM cluster on Exascale Infrastructure. Applies to Exadata Cloud instances only.&lt;br /&gt;</td>
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
<tr id="parameter-exadbVmClusterId">
    <td><CopyableCode code="exadbVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The Exadata VM cluster &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) on Exascale Infrastructure.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
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
<tr id="parameter-exascaleDbStorageVaultId">
    <td><CopyableCode code="exascaleDbStorageVaultId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only Exadata VM clusters on Exascale Infrastructure that match the given Exascale Database Storage Vault ID. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only Exadata VM clusters on Exascale Infrastructure that match the given lifecycle state exactly. </td>
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

Gets information about the specified Exadata VM cluster on Exascale Infrastructure. Applies to Exadata Database Service on Exascale Infrastructure only.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
backupNetworkNsgIds,
backupSubnetId,
clusterName,
clusterPlacementGroupId,
compartmentId,
dataCollectionOptions,
definedTags,
displayName,
domain,
enabledECpuCount,
exascaleDbStorageVaultId,
freeformTags,
giVersion,
gridImageId,
gridImageType,
hostname,
iormConfigCache,
lastUpdateHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
listenerPort,
memorySizeInGBs,
nodeCount,
nsgIds,
privateZoneId,
scanDnsName,
scanDnsRecordId,
scanIpIds,
scanListenerPortTcp,
scanListenerPortTcpSsl,
securityAttributes,
shape,
shapeAttribute,
snapshotFileSystemStorage,
sshPublicKeys,
subnetId,
subscriptionId,
systemTags,
systemVersion,
timeCreated,
timeZone,
totalECpuCount,
totalFileSystemStorage,
vipIds,
vmFileSystemStorage,
zoneId
FROM oci.database.exadb_vm_clusters
WHERE exadbVmClusterId = '{{ exadbVmClusterId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of the Exadata VM clusters on Exascale Infrastructure in the specified compartment. Applies to Exadata Database Service on Exascale Infrastructure only.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
backupNetworkNsgIds,
backupSubnetId,
clusterName,
clusterPlacementGroupId,
compartmentId,
dataCollectionOptions,
definedTags,
displayName,
domain,
enabledECpuCount,
exascaleDbStorageVaultId,
freeformTags,
giVersion,
gridImageId,
gridImageType,
hostname,
lastUpdateHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
listenerPort,
memorySizeInGBs,
nodeCount,
nsgIds,
privateZoneId,
scanDnsName,
scanDnsRecordId,
scanIpIds,
scanListenerPortTcp,
scanListenerPortTcpSsl,
securityAttributes,
shape,
shapeAttribute,
snapshotFileSystemStorage,
sshPublicKeys,
subnetId,
subscriptionId,
systemTags,
systemVersion,
timeCreated,
timeZone,
totalECpuCount,
totalFileSystemStorage,
vipIds,
vmFileSystemStorage,
zoneId
FROM oci.database.exadb_vm_clusters
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND exascaleDbStorageVaultId = '{{ exascaleDbStorageVaultId }}'
AND clusterPlacementGroupId = '{{ clusterPlacementGroupId }}'
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

Creates an Exadata VM cluster on Exascale Infrastructure&lt;br /&gt;

```sql
INSERT INTO oci.database.exadb_vm_clusters (
availabilityDomain,
backupNetworkNsgIds,
backupSubnetId,
clusterName,
compartmentId,
dataCollectionOptions,
definedTags,
displayName,
domain,
enabledECpuCount,
exascaleDbStorageVaultId,
freeformTags,
gridImageId,
hostname,
licenseModel,
nodeCount,
nsgIds,
privateZoneId,
scanListenerPortTcp,
scanListenerPortTcpSsl,
securityAttributes,
shape,
shapeAttribute,
sshPublicKeys,
subnetId,
subscriptionId,
systemVersion,
timeZone,
totalECpuCount,
vmFileSystemStorage,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ availabilityDomain }}' /* required */,
'{{ backupNetworkNsgIds }}',
'{{ backupSubnetId }}' /* required */,
'{{ clusterName }}',
'{{ compartmentId }}' /* required */,
'{{ dataCollectionOptions }}',
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ domain }}',
{{ enabledECpuCount }} /* required */,
'{{ exascaleDbStorageVaultId }}' /* required */,
'{{ freeformTags }}',
'{{ gridImageId }}' /* required */,
'{{ hostname }}' /* required */,
'{{ licenseModel }}',
{{ nodeCount }} /* required */,
'{{ nsgIds }}',
'{{ privateZoneId }}',
{{ scanListenerPortTcp }},
{{ scanListenerPortTcpSsl }},
'{{ securityAttributes }}',
'{{ shape }}' /* required */,
'{{ shapeAttribute }}',
'{{ sshPublicKeys }}' /* required */,
'{{ subnetId }}' /* required */,
'{{ subscriptionId }}',
'{{ systemVersion }}',
'{{ timeZone }}',
{{ totalECpuCount }} /* required */,
'{{ vmFileSystemStorage }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
availabilityDomain,
backupNetworkNsgIds,
backupSubnetId,
clusterName,
clusterPlacementGroupId,
compartmentId,
dataCollectionOptions,
definedTags,
displayName,
domain,
enabledECpuCount,
exascaleDbStorageVaultId,
freeformTags,
giVersion,
gridImageId,
gridImageType,
hostname,
iormConfigCache,
lastUpdateHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
listenerPort,
memorySizeInGBs,
nodeCount,
nsgIds,
privateZoneId,
scanDnsName,
scanDnsRecordId,
scanIpIds,
scanListenerPortTcp,
scanListenerPortTcpSsl,
securityAttributes,
shape,
shapeAttribute,
snapshotFileSystemStorage,
sshPublicKeys,
subnetId,
subscriptionId,
systemTags,
systemVersion,
timeCreated,
timeZone,
totalECpuCount,
totalFileSystemStorage,
vipIds,
vmFileSystemStorage,
zoneId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: exadb_vm_clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the exadb_vm_clusters resource.
    - name: availabilityDomain
      value: "{{ availabilityDomain }}"
      description: |
        The name of the availability domain in which the Exadata VM cluster on Exascale Infrastructure is located.
    - name: backupNetworkNsgIds
      value:
        - "{{ backupNetworkNsgIds }}"
      description: |
        A list of the [OCIDs](/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems.
    - name: backupSubnetId
      value: "{{ backupSubnetId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the backup network subnet associated with the Exadata VM cluster on Exascale Infrastructure.
    - name: clusterName
      value: "{{ clusterName }}"
      description: |
        The cluster name for Exadata VM cluster on Exascale Infrastructure. The cluster name must begin with an alphabetic character, and may contain hyphens (-). Underscores (_) are not permitted. The cluster name can be no longer than 11 characters and is not case sensitive.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment.
    - name: dataCollectionOptions
      description: |
        Indicates user preferences for the various diagnostic collection options for the VM cluster/Cloud VM cluster/VMBM DBCS.
      value:
        isDiagnosticsEventsEnabled: {{ isDiagnosticsEventsEnabled }}
        isHealthMonitoringEnabled: {{ isHealthMonitoringEnabled }}
        isIncidentLogsEnabled: {{ isIncidentLogsEnabled }}
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the Exadata VM cluster on Exascale Infrastructure. The name does not need to be unique.
    - name: domain
      value: "{{ domain }}"
      description: |
        A domain name used for the Exadata VM cluster on Exascale Infrastructure. If the Oracle-provided internet and VCN
        resolver is enabled for the specified subnet, then the domain name for the subnet is used
        (do not provide one). Otherwise, provide a valid DNS domain name. Hyphens (-) are not permitted.
        Applies to Exadata Database Service on Exascale Infrastructure only.
    - name: enabledECpuCount
      value: {{ enabledECpuCount }}
      description: |
        The number of ECPUs to enable for an Exadata VM cluster on Exascale Infrastructure.
    - name: exascaleDbStorageVaultId
      value: "{{ exascaleDbStorageVaultId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the Exadata Database Storage Vault.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: gridImageId
      value: "{{ gridImageId }}"
      description: |
        Grid Setup will be done using this grid image id.
        The grid image ID can be obtained using the API /20160918/giVersions/{majorVersion}/minorVersions?compartmentId=<compartmentId>&shapeFamily=EXADB_XS&availabilityDomain=<AD name>.
        The list of supported major versions can be obtained using the API /20160918/giVersions?compartmentId=<compartmentId>&shape=ExaDbXS&availabilityDomain=<AD name>
    - name: hostname
      value: "{{ hostname }}"
      description: |
        The hostname for the Exadata VM cluster on Exascale Infrastructure. The hostname must begin with an alphabetic character, and
        can contain alphanumeric characters and hyphens (-). For Exadata systems, the maximum length of the hostname is 12 characters.
        The maximum length of the combined hostname and domain is 63 characters.
        **Note:** The hostname must be unique within the subnet. If it is not unique,
        then the Exadata VM cluster on Exascale Infrastructure will fail to provision.
    - name: licenseModel
      value: "{{ licenseModel }}"
      description: |
        The Oracle license model that applies to the Exadata VM cluster on Exascale Infrastructure. The default is BRING_YOUR_OWN_LICENSE.
      valid_values: ['LICENSE_INCLUDED', 'BRING_YOUR_OWN_LICENSE']
    - name: nodeCount
      value: {{ nodeCount }}
      description: |
        The number of nodes in the Exadata VM cluster on Exascale Infrastructure.
    - name: nsgIds
      value:
        - "{{ nsgIds }}"
      description: |
        The list of [OCIDs](/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](/Content/Network/Concepts/securityrules.htm).
    - name: privateZoneId
      value: "{{ privateZoneId }}"
      description: |
        The private zone ID in which you want DNS records to be created.
    - name: scanListenerPortTcp
      value: {{ scanListenerPortTcp }}
      description: |
        The TCP Single Client Access Name (SCAN) port. The default port is 1521.
    - name: scanListenerPortTcpSsl
      value: {{ scanListenerPortTcpSsl }}
      description: |
        The Secured Communication (TCPS) protocol Single Client Access Name (SCAN) port. The default port is 2484.
    - name: securityAttributes
      value: "{{ securityAttributes }}"
      description: |
        Security Attributes for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Oracle-ZPR": {"MaxEgressCount": {"value": "42", "mode": "audit"}}}\`
    - name: shape
      value: "{{ shape }}"
      description: |
        The shape of the Exadata VM cluster on Exascale Infrastructure resource
    - name: shapeAttribute
      value: "{{ shapeAttribute }}"
      description: |
        The type of Exascale storage used for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle Database 23ai and later
      valid_values: ['SMART_STORAGE', 'BLOCK_STORAGE']
    - name: sshPublicKeys
      value:
        - "{{ sshPublicKeys }}"
      description: |
        The public key portion of one or more key pairs used for SSH access to the Exadata VM cluster on Exascale Infrastructure.
    - name: subnetId
      value: "{{ subnetId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the subnet associated with the Exadata VM cluster on Exascale Infrastructure.
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
        The time zone to use for the Exadata VM cluster on Exascale Infrastructure. For details, see [Time Zones](/Content/Database/References/timezones.htm).
    - name: totalECpuCount
      value: {{ totalECpuCount }}
      description: |
        The number of Total ECPUs for an Exadata VM cluster on Exascale Infrastructure.
    - name: vmFileSystemStorage
      description: |
        Storage Details on the Exadata VM cluster.
      value:
        totalSizeInGbs: {{ totalSizeInGbs }}
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

Updates the specified Exadata VM cluster on Exascale Infrastructure. Applies to Exadata Database Service on Exascale Infrastructure only.&lt;br /&gt;

```sql
UPDATE oci.database.exadb_vm_clusters
SET 
backupNetworkNsgIds = '{{ backupNetworkNsgIds }}',
dataCollectionOptions = '{{ dataCollectionOptions }}',
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
enabledECpuCount = {{ enabledECpuCount }},
freeformTags = '{{ freeformTags }}',
gridImageId = '{{ gridImageId }}',
licenseModel = '{{ licenseModel }}',
nodeCount = {{ nodeCount }},
nsgIds = '{{ nsgIds }}',
securityAttributes = '{{ securityAttributes }}',
sshPublicKeys = '{{ sshPublicKeys }}',
systemVersion = '{{ systemVersion }}',
totalECpuCount = {{ totalECpuCount }},
updateAction = '{{ updateAction }}',
vmFileSystemStorage = '{{ vmFileSystemStorage }}'
WHERE 
exadbVmClusterId = '{{ exadbVmClusterId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
availabilityDomain,
backupNetworkNsgIds,
backupSubnetId,
clusterName,
clusterPlacementGroupId,
compartmentId,
dataCollectionOptions,
definedTags,
displayName,
domain,
enabledECpuCount,
exascaleDbStorageVaultId,
freeformTags,
giVersion,
gridImageId,
gridImageType,
hostname,
iormConfigCache,
lastUpdateHistoryEntryId,
licenseModel,
lifecycleDetails,
lifecycleState,
listenerPort,
memorySizeInGBs,
nodeCount,
nsgIds,
privateZoneId,
scanDnsName,
scanDnsRecordId,
scanIpIds,
scanListenerPortTcp,
scanListenerPortTcpSsl,
securityAttributes,
shape,
shapeAttribute,
snapshotFileSystemStorage,
sshPublicKeys,
subnetId,
subscriptionId,
systemTags,
systemVersion,
timeCreated,
timeZone,
totalECpuCount,
totalFileSystemStorage,
vipIds,
vmFileSystemStorage,
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

Deletes the specified Exadata VM cluster on Exascale Infrastructure. Applies to Exadata Database Service on Exascale Infrastructure only.&lt;br /&gt;

```sql
DELETE FROM oci.database.exadb_vm_clusters
WHERE exadbVmClusterId = '{{ exadbVmClusterId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_dbnode_snapshots_for_exadb_vm_cluster"
    values={[
        { label: 'add_dbnode_snapshots_for_exadb_vm_cluster', value: 'add_dbnode_snapshots_for_exadb_vm_cluster' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'change_exadb_vm_cluster_subscription', value: 'change_exadb_vm_cluster_subscription' },
        { label: 'remove_virtual_machine_from_exadb_vm_cluster', value: 'remove_virtual_machine_from_exadb_vm_cluster' }
    ]}
>
<TabItem value="add_dbnode_snapshots_for_exadb_vm_cluster">

Add a database node snapshots to the Exadb VM cluster..&lt;br /&gt;

```sql
EXEC oci.database.exadb_vm_clusters.add_dbnode_snapshots_for_exadb_vm_cluster 
@exadbVmClusterId='{{ exadbVmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"definedTags": "{{ definedTags }}", 
"freeformTags": "{{ freeformTags }}", 
"name": "{{ name }}", 
"sourceDbnodeIds": "{{ sourceDbnodeIds }}"
}'
;
```
</TabItem>
<TabItem value="change_compartment">

Moves a Exadata VM cluster on Exascale Infrastructure and its dependent resources to another compartment. Applies to Exadata Database Service on Exascale Infrastructure only.&lt;br /&gt;

```sql
EXEC oci.database.exadb_vm_clusters.change_compartment 
@exadbVmClusterId='{{ exadbVmClusterId }}' --required, 
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
<TabItem value="change_exadb_vm_cluster_subscription">

Associate a Exadata VM cluster on Exascale Infrastructure with a different subscription.&lt;br /&gt;

```sql
EXEC oci.database.exadb_vm_clusters.change_exadb_vm_cluster_subscription 
@exadbVmClusterId='{{ exadbVmClusterId }}' --required, 
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
<TabItem value="remove_virtual_machine_from_exadb_vm_cluster">

Remove Virtual Machines from the Exadata VM cluster on Exascale Infrastructure. Applies to Exadata Cloud instances only.&lt;br /&gt;

```sql
EXEC oci.database.exadb_vm_clusters.remove_virtual_machine_from_exadb_vm_cluster 
@exadbVmClusterId='{{ exadbVmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"dbNodes": "{{ dbNodes }}"
}'
;
```
</TabItem>
</Tabs>
