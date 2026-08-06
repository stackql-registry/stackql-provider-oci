--- 
title: autonomous_exadata_infrastructures
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_exadata_infrastructures
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

Creates, updates, deletes, gets or lists an <code>autonomous_exadata_infrastructures</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_exadata_infrastructures" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.autonomous_exadata_infrastructures" /></td></tr>
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

The Autonomous Exadata Infrastructure details.

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
    <td>The OCID of the Autonomous Exadata Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain that the Autonomous Exadata Infrastructure is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Autonomous Exadata Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain name for the Autonomous Exadata Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The host name for the Autonomous Exadata Infrastructure node.</td>
</tr>
<tr>
    <td><CopyableCode code="lastMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to all databases in the Autonomous Exadata Infrastructure. The default is BRING_YOUR_OWN_LICENSE.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state of the Autonomous Exadata Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the Autonomous Exadata Infrastructure. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window. </td>
</tr>
<tr>
    <td><CopyableCode code="nextMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the next maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsName" /></td>
    <td><code>string</code></td>
    <td>The FQDN of the DNS record for the SCAN IP addresses that are associated with the Autonomous Exadata Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the Autonomous Exadata Infrastructure. The shape determines resources to allocate to the Autonomous Exadata Infrastructure (CPU cores, memory and storage).</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the subnet the Autonomous Exadata Infrastructure is associated with.  **Subnet Restrictions:** - For Autonomous AI Databases with Autonomous Exadata Infrastructure, do not use a subnet that overlaps with 192.168.128.0/20  These subnets are used by the Oracle Clusterware private interconnect on the database instance. Specifying an overlapping subnet will cause the private interconnect to malfunction. This restriction applies to both the client subnet and backup subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Autonomous Exadata Infrastructure was created.</td>
</tr>
<tr>
    <td><CopyableCode code="zoneId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the zone the Autonomous Exadata Infrastructure is associated with. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

**Deprecated** These APIs are deprecated with the introduction of the Autonomous Exadata VM Cluster resource and a shift to a common Exadata Infrastructure resource for all Exadata Cloud-based services, including Autonomous AI Database on dedicated Exadata infrastructure. For more details, see &#91;Latest Resource Model&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/flddd/#articletitle).&lt;br /&gt;&lt;br /&gt;Infrastructure that enables the running of multiple Autonomous AI Databases within a dedicated DB system.&lt;br /&gt;For more information about Autonomous Exadata Infrastructure, see&lt;br /&gt;&#91;Oracle Autonomous AI Database&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;For information about access control and compartments, see&lt;br /&gt;&#91;Overview of the Identity Service&#93;(/Content/Identity/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;For information about availability domains, see&lt;br /&gt;&#91;Regions and Availability Domains&#93;(/Content/General/Concepts/regions.htm).&lt;br /&gt;&lt;br /&gt;To get a list of availability domains, use the ListAvailabilityDomains operation&lt;br /&gt;in the Identity service API.&lt;br /&gt;

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
    <td>The OCID of the Autonomous Exadata Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain that the Autonomous Exadata Infrastructure is located in.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Autonomous Exadata Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain name for the Autonomous Exadata Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>The host name for the Autonomous Exadata Infrastructure node.</td>
</tr>
<tr>
    <td><CopyableCode code="lastMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the last maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to all databases in the Autonomous Exadata Infrastructure. The default is BRING_YOUR_OWN_LICENSE.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state of the Autonomous Exadata Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the Autonomous Exadata Infrastructure. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED, MAINTENANCE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceWindow" /></td>
    <td><code>object</code></td>
    <td>The scheduling details for the quarterly maintenance window. Patching and system updates take place during the maintenance window. </td>
</tr>
<tr>
    <td><CopyableCode code="nextMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the next maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="scanDnsName" /></td>
    <td><code>string</code></td>
    <td>The FQDN of the DNS record for the SCAN IP addresses that are associated with the Autonomous Exadata Infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the Autonomous Exadata Infrastructure. The shape determines resources to allocate to the Autonomous Exadata Infrastructure (CPU cores, memory and storage).</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the subnet the Autonomous Exadata Infrastructure is associated with.  **Subnet Restrictions:** - For Autonomous AI Databases with Autonomous Exadata Infrastructure, do not use a subnet that overlaps with 192.168.128.0/20  These subnets are used by the Oracle Clusterware private interconnect on the database instance. Specifying an overlapping subnet will cause the private interconnect to malfunction. This restriction applies to both the client subnet and backup subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Autonomous Exadata Infrastructure was created.</td>
</tr>
<tr>
    <td><CopyableCode code="zoneId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the zone the Autonomous Exadata Infrastructure is associated with. </td>
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
    <td><a href="#parameter-autonomousExadataInfrastructureId"><code>autonomousExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>**Deprecated.** Use the &#91;GetCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/GetCloudExadataInfrastructure) operation to get details of an Exadata Infrastructure resource and the &#91;GetCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/GetCloudAutonomousVmCluster) operation to get details of an Autonomous Exadata VM cluster.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td>**Deprecated.** Use the &#91;ListCloudExadataInfrastructures&#93;(#/en/database/latest/CloudExadataInfrastructure/ListCloudExadataInfrastructures) operation to list Exadata Infrastructures in the Oracle cloud and the  &#91;ListCloudAutonomousVmClusters&#93;(#/en/database/latest/CloudAutonomousVmCluster/ListCloudAutonomousVmClusters) operation to list Autonomous Exadata VM clusters.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#launch"><CopyableCode code="launch" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-shape"><code>shape</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>**Deprecated** To create a new Autonomous AI Database system on dedicated Exadata Infrastructure, use the &#91;CreateCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/CreateCloudExadataInfrastructure) and &#91;CreateCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/CreateCloudAutonomousVmCluster) operations instead. Note that to create an Autonomous VM cluster, you must have an existing Exadata Infrastructure resource to contain the VM cluster.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-autonomousExadataInfrastructureId"><code>autonomousExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>**Deprecated.** Use the &#91;UpdateCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/UpdateCloudExadataInfrastructure) operation to update an Exadata Infrastructure resource and  &#91;UpdateCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/UpdateCloudAutonomousVmCluster) operation to update an Autonomous Exadata VM cluster.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-autonomousExadataInfrastructureId"><code>autonomousExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>**Deprecated.** To terminate an Exadata Infrastructure resource in the Oracle cloud, use the &#91;DeleteCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/DeleteCloudExadataInfrastructure) operation. To delete an Autonomous Exadata VM cluster in the Oracle cloud, use the &#91;DeleteCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/DeleteCloudAutonomousVmCluster) operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousExadataInfrastructureId"><code>autonomousExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>**Deprecated.** Use the &#91;ChangeCloudExadataInfrastructureCompartment&#93;(#/en/database/latest/CloudExadataInfrastructure/ChangeCloudExadataInfrastructureCompartment) operation to move an Exadata infrastructure resource to a different compartment and  &#91;ChangeCloudAutonomousVmClusterCompartment&#93;(#/en/database/latest/CloudAutonomousVmCluster/ChangeCloudAutonomousVmClusterCompartment) operation to move an Autonomous Exadata VM cluster to a different compartment.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Moving Database Resources to a Different Compartment&#93;(/Content/Database/Concepts/databaseoverview.htm#moveRes).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#rotate_ords_certs"><CopyableCode code="rotate_ords_certs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousExadataInfrastructureId"><code>autonomousExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>**Deprecated.** Use the &#91;RotateCloudAutonomousVmClusterOrdsCerts&#93;(#/en/database/latest/CloudAutonomousVmCluster/RotateCloudAutonomousVmClusterOrdsCerts) to rotate Oracle REST Data Services (ORDS) certs for an Autonomous Exadata VM cluster instead.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#rotate_ssl_certs"><CopyableCode code="rotate_ssl_certs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousExadataInfrastructureId"><code>autonomousExadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>**Deprecated.** Use the &#91;RotateCloudAutonomousVmClusterSslCerts&#93;(#/en/database/latest/CloudAutonomousVmCluster/RotateCloudAutonomousVmClusterSslCerts) to rotate SSL certs for an Autonomous Exadata VM cluster instead.&lt;br /&gt;</td>
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
<tr id="parameter-autonomousExadataInfrastructureId">
    <td><CopyableCode code="autonomousExadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The Autonomous Exadata Infrastructure  &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
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
    <td>The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is descending.  Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.    **Note:** If you do not include the availability domain filter, the resources are grouped by availability domain, then sorted. </td>
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

**Deprecated.** Use the &#91;GetCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/GetCloudExadataInfrastructure) operation to get details of an Exadata Infrastructure resource and the &#91;GetCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/GetCloudAutonomousVmCluster) operation to get details of an Autonomous Exadata VM cluster.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
compartmentId,
definedTags,
displayName,
domain,
freeformTags,
hostname,
lastMaintenanceRunId,
licenseModel,
lifecycleDetails,
lifecycleState,
maintenanceWindow,
nextMaintenanceRunId,
nsgIds,
scanDnsName,
shape,
subnetId,
timeCreated,
zoneId
FROM oci.database.autonomous_exadata_infrastructures
WHERE autonomousExadataInfrastructureId = '{{ autonomousExadataInfrastructureId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

**Deprecated.** Use the &#91;ListCloudExadataInfrastructures&#93;(#/en/database/latest/CloudExadataInfrastructure/ListCloudExadataInfrastructures) operation to list Exadata Infrastructures in the Oracle cloud and the  &#91;ListCloudAutonomousVmClusters&#93;(#/en/database/latest/CloudAutonomousVmCluster/ListCloudAutonomousVmClusters) operation to list Autonomous Exadata VM clusters.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
compartmentId,
definedTags,
displayName,
domain,
freeformTags,
hostname,
lastMaintenanceRunId,
licenseModel,
lifecycleDetails,
lifecycleState,
maintenanceWindow,
nextMaintenanceRunId,
nsgIds,
scanDnsName,
shape,
subnetId,
timeCreated,
zoneId
FROM oci.database.autonomous_exadata_infrastructures
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
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

**Deprecated** To create a new Autonomous AI Database system on dedicated Exadata Infrastructure, use the &#91;CreateCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/CreateCloudExadataInfrastructure) and &#91;CreateCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/CreateCloudAutonomousVmCluster) operations instead. Note that to create an Autonomous VM cluster, you must have an existing Exadata Infrastructure resource to contain the VM cluster.&lt;br /&gt;

```sql
INSERT INTO oci.database.autonomous_exadata_infrastructures (
availabilityDomain,
compartmentId,
definedTags,
displayName,
domain,
freeformTags,
licenseModel,
maintenanceWindowDetails,
nsgIds,
shape,
subnetId,
region,
opc-retry-token
)
SELECT 
'{{ availabilityDomain }}' /* required */,
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ domain }}',
'{{ freeformTags }}',
'{{ licenseModel }}',
'{{ maintenanceWindowDetails }}',
'{{ nsgIds }}',
'{{ shape }}' /* required */,
'{{ subnetId }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
availabilityDomain,
compartmentId,
definedTags,
displayName,
domain,
freeformTags,
hostname,
lastMaintenanceRunId,
licenseModel,
lifecycleDetails,
lifecycleState,
maintenanceWindow,
nextMaintenanceRunId,
nsgIds,
scanDnsName,
shape,
subnetId,
timeCreated,
zoneId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: autonomous_exadata_infrastructures
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the autonomous_exadata_infrastructures resource.
    - name: availabilityDomain
      value: "{{ availabilityDomain }}"
      description: |
        The availability domain where the Autonomous Exadata Infrastructure is located.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment the Autonomous Exadata Infrastructure belongs in.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the Autonomous Exadata Infrastructure. It does not have to be unique.
    - name: domain
      value: "{{ domain }}"
      description: |
        A domain name used for the Autonomous Exadata Infrastructure. If the Oracle-provided Internet and VCN
        Resolver is enabled for the specified subnet, the domain name for the subnet is used
        (don't provide one). Otherwise, provide a valid DNS domain name. Hyphens (-) are not permitted.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: licenseModel
      value: "{{ licenseModel }}"
      description: |
        The Oracle license model that applies to all the databases in the Autonomous Exadata Infrastructure. The default is BRING_YOUR_OWN_LICENSE.
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
    - name: nsgIds
      value:
        - "{{ nsgIds }}"
      description: |
        The list of [OCIDs](/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](/Content/Network/Concepts/securityrules.htm).
    - name: shape
      value: "{{ shape }}"
      description: |
        The shape of the Autonomous Exadata Infrastructure. The shape determines resources allocated to the Autonomous Exadata Infrastructure (CPU cores, memory and storage). To get a list of shapes, use the ListDbSystemShapes operation.
    - name: subnetId
      value: "{{ subnetId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the subnet the Autonomous Exadata Infrastructure is associated with.
        **Subnet Restrictions:**
        - For Autonomous Exadata Infrastructures, do not use a subnet that overlaps with 192.168.128.0/20
        These subnets are used by the Oracle Clusterware private interconnect on the database instance.
        Specifying an overlapping subnet will cause the private interconnect to malfunction.
        This restriction applies to both the client subnet and backup subnet.
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

**Deprecated.** Use the &#91;UpdateCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/UpdateCloudExadataInfrastructure) operation to update an Exadata Infrastructure resource and  &#91;UpdateCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/UpdateCloudAutonomousVmCluster) operation to update an Autonomous Exadata VM cluster.&lt;br /&gt;

```sql
UPDATE oci.database.autonomous_exadata_infrastructures
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
maintenanceWindowDetails = '{{ maintenanceWindowDetails }}',
nsgIds = '{{ nsgIds }}'
WHERE 
autonomousExadataInfrastructureId = '{{ autonomousExadataInfrastructureId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
availabilityDomain,
compartmentId,
definedTags,
displayName,
domain,
freeformTags,
hostname,
lastMaintenanceRunId,
licenseModel,
lifecycleDetails,
lifecycleState,
maintenanceWindow,
nextMaintenanceRunId,
nsgIds,
scanDnsName,
shape,
subnetId,
timeCreated,
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

**Deprecated.** To terminate an Exadata Infrastructure resource in the Oracle cloud, use the &#91;DeleteCloudExadataInfrastructure&#93;(#/en/database/latest/CloudExadataInfrastructure/DeleteCloudExadataInfrastructure) operation. To delete an Autonomous Exadata VM cluster in the Oracle cloud, use the &#91;DeleteCloudAutonomousVmCluster&#93;(#/en/database/latest/CloudAutonomousVmCluster/DeleteCloudAutonomousVmCluster) operation.&lt;br /&gt;

```sql
DELETE FROM oci.database.autonomous_exadata_infrastructures
WHERE autonomousExadataInfrastructureId = '{{ autonomousExadataInfrastructureId }}' --required
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
        { label: 'rotate_ords_certs', value: 'rotate_ords_certs' },
        { label: 'rotate_ssl_certs', value: 'rotate_ssl_certs' }
    ]}
>
<TabItem value="change_compartment">

**Deprecated.** Use the &#91;ChangeCloudExadataInfrastructureCompartment&#93;(#/en/database/latest/CloudExadataInfrastructure/ChangeCloudExadataInfrastructureCompartment) operation to move an Exadata infrastructure resource to a different compartment and  &#91;ChangeCloudAutonomousVmClusterCompartment&#93;(#/en/database/latest/CloudAutonomousVmCluster/ChangeCloudAutonomousVmClusterCompartment) operation to move an Autonomous Exadata VM cluster to a different compartment.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Moving Database Resources to a Different Compartment&#93;(/Content/Database/Concepts/databaseoverview.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.database.autonomous_exadata_infrastructures.change_compartment 
@autonomousExadataInfrastructureId='{{ autonomousExadataInfrastructureId }}' --required, 
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
<TabItem value="rotate_ords_certs">

**Deprecated.** Use the &#91;RotateCloudAutonomousVmClusterOrdsCerts&#93;(#/en/database/latest/CloudAutonomousVmCluster/RotateCloudAutonomousVmClusterOrdsCerts) to rotate Oracle REST Data Services (ORDS) certs for an Autonomous Exadata VM cluster instead.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_exadata_infrastructures.rotate_ords_certs 
@autonomousExadataInfrastructureId='{{ autonomousExadataInfrastructureId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="rotate_ssl_certs">

**Deprecated.** Use the &#91;RotateCloudAutonomousVmClusterSslCerts&#93;(#/en/database/latest/CloudAutonomousVmCluster/RotateCloudAutonomousVmClusterSslCerts) to rotate SSL certs for an Autonomous Exadata VM cluster instead.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_exadata_infrastructures.rotate_ssl_certs 
@autonomousExadataInfrastructureId='{{ autonomousExadataInfrastructureId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
</Tabs>
