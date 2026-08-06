--- 
title: vm_cluster_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - vm_cluster_networks
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

Creates, updates, deletes, gets or lists a <code>vm_cluster_networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vm_cluster_networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.vm_cluster_networks" /></td></tr>
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

The specified Exadata Cloud@Customer VM cluster network.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VM cluster network.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the VM cluster network. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="dns" /></td>
    <td><code>array</code></td>
    <td>The list of DNS server IP addresses. Maximum of 3 allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="drScans" /></td>
    <td><code>array</code></td>
    <td>The SCAN details for DR network</td>
</tr>
<tr>
    <td><CopyableCode code="exadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the VM cluster network. CREATING - The resource is being created REQUIRES_VALIDATION - The resource is created and may not be usable until it is validated. VALIDATING - The resource is being validated and not available to use. VALIDATED - The resource is validated and is available for consumption by VM cluster. VALIDATION_FAILED - The resource validation has failed and might require user input to be corrected. UPDATING - The resource is being updated and not available to use. ALLOCATED - The resource is is currently being used by VM cluster. TERMINATING - The resource is being deleted and not available to use. TERMINATED - The resource is deleted and unavailable. FAILED - The resource is in a failed state due to validation or other errors. NEEDS_ATTENTION - The resource is in needs attention state as some of it's child nodes are not validated                   and unusable by VM cluster.  (CREATING, REQUIRES_VALIDATION, VALIDATING, VALIDATED, VALIDATION_FAILED, UPDATING, ALLOCATED, TERMINATING, TERMINATED, FAILED, NEEDS_ATTENTION)</td>
</tr>
<tr>
    <td><CopyableCode code="ntp" /></td>
    <td><code>array</code></td>
    <td>The list of NTP server IP addresses. Maximum of 3 allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="scans" /></td>
    <td><code>array</code></td>
    <td>The SCAN details.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the VM cluster network was created.</td>
</tr>
<tr>
    <td><CopyableCode code="vmClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the associated VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="vmNetworks" /></td>
    <td><code>array</code></td>
    <td>Details of the client and backup networks.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details of the VM cluster network. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the VM cluster network.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the VM cluster network. The name does not need to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="dns" /></td>
    <td><code>array</code></td>
    <td>The list of DNS server IP addresses. Maximum of 3 allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="drScans" /></td>
    <td><code>array</code></td>
    <td>The SCAN details for DR network</td>
</tr>
<tr>
    <td><CopyableCode code="exadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the VM cluster network. CREATING - The resource is being created REQUIRES_VALIDATION - The resource is created and may not be usable until it is validated. VALIDATING - The resource is being validated and not available to use. VALIDATED - The resource is validated and is available for consumption by VM cluster. VALIDATION_FAILED - The resource validation has failed and might require user input to be corrected. UPDATING - The resource is being updated and not available to use. ALLOCATED - The resource is is currently being used by VM cluster. TERMINATING - The resource is being deleted and not available to use. TERMINATED - The resource is deleted and unavailable. FAILED - The resource is in a failed state due to validation or other errors. NEEDS_ATTENTION - The resource is in needs attention state as some of it's child nodes are not validated                   and unusable by VM cluster.  (CREATING, REQUIRES_VALIDATION, VALIDATING, VALIDATED, VALIDATION_FAILED, UPDATING, ALLOCATED, TERMINATING, TERMINATED, FAILED, NEEDS_ATTENTION)</td>
</tr>
<tr>
    <td><CopyableCode code="ntp" /></td>
    <td><code>array</code></td>
    <td>The list of NTP server IP addresses. Maximum of 3 allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="scans" /></td>
    <td><code>array</code></td>
    <td>The SCAN details.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the VM cluster network was created.</td>
</tr>
<tr>
    <td><CopyableCode code="vmClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the associated VM Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="vmNetworks" /></td>
    <td><code>array</code></td>
    <td>Details of the client and backup networks.</td>
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
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-vmClusterNetworkId"><code>vmClusterNetworkId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified VM cluster network. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To get information about a cloud VM cluster in an Exadata Cloud Service instance, use the &#91;GetCloudVmCluster &#93;(#/en/database/latest/CloudVmCluster/GetCloudVmCluster) operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets a list of the VM cluster networks in the specified compartment. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-scans"><code>scans</code></a>, <a href="#parameter-vmNetworks"><code>vmNetworks</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates the VM cluster network. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To create a cloud VM cluster in an Exadata Cloud Service instance, use the &#91;CreateCloudVmCluster &#93;(#/en/database/latest/CloudVmCluster/CreateCloudVmCluster) operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-vmClusterNetworkId"><code>vmClusterNetworkId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified VM cluster network. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To update a cloud VM cluster in an Exadata Cloud Service instance, use the &#91;UpdateCloudVmCluster &#93;(#/en/database/latest/CloudVmCluster/UpdateCloudVmCluster) operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-vmClusterNetworkId"><code>vmClusterNetworkId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the specified VM cluster network. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To delete a cloud VM cluster in an Exadata Cloud Service instance, use the &#91;DeleteCloudVmCluster &#93;(#/en/database/latest/CloudVmCluster/DeleteCloudVmCluster) operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#generate_recommended_vm_cluster_network"><CopyableCode code="generate_recommended_vm_cluster_network" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-networks"><code>networks</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Generates a recommended Cloud@Customer VM cluster network configuration.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#download_vm_cluster_network_config_file"><CopyableCode code="download_vm_cluster_network_config_file" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-vmClusterNetworkId"><code>vmClusterNetworkId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Downloads the configuration file for the specified VM cluster network. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#resize_vm_cluster_network"><CopyableCode code="resize_vm_cluster_network" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-vmClusterNetworkId"><code>vmClusterNetworkId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vmNetworks"><code>vmNetworks</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Adds or removes Db server network nodes to extend or shrink the existing VM cluster network. Applies to Exadata&lt;br /&gt;Cloud@Customer instances only.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#validate_vm_cluster_network"><CopyableCode code="validate_vm_cluster_network" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a>, <a href="#parameter-vmClusterNetworkId"><code>vmClusterNetworkId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Validates the specified VM cluster network. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;</td>
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
<tr id="parameter-vmClusterNetworkId">
    <td><CopyableCode code="vmClusterNetworkId" /></td>
    <td><code>string</code></td>
    <td>The VM cluster network &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
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

Gets information about the specified VM cluster network. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To get information about a cloud VM cluster in an Exadata Cloud Service instance, use the &#91;GetCloudVmCluster &#93;(#/en/database/latest/CloudVmCluster/GetCloudVmCluster) operation.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
dns,
drScans,
exadataInfrastructureId,
freeformTags,
lifecycleDetails,
lifecycleState,
ntp,
scans,
systemTags,
timeCreated,
vmClusterId,
vmNetworks
FROM oci.database.vm_cluster_networks
WHERE exadataInfrastructureId = '{{ exadataInfrastructureId }}' -- required
AND vmClusterNetworkId = '{{ vmClusterNetworkId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of the VM cluster networks in the specified compartment. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
dns,
drScans,
exadataInfrastructureId,
freeformTags,
lifecycleDetails,
lifecycleState,
ntp,
scans,
systemTags,
timeCreated,
vmClusterId,
vmNetworks
FROM oci.database.vm_cluster_networks
WHERE exadataInfrastructureId = '{{ exadataInfrastructureId }}' -- required
AND compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
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

Creates the VM cluster network. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To create a cloud VM cluster in an Exadata Cloud Service instance, use the &#91;CreateCloudVmCluster &#93;(#/en/database/latest/CloudVmCluster/CreateCloudVmCluster) operation.&lt;br /&gt;

```sql
INSERT INTO oci.database.vm_cluster_networks (
compartmentId,
definedTags,
displayName,
dns,
drScans,
freeformTags,
ntp,
scans,
vmNetworks,
exadataInfrastructureId,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ dns }}',
'{{ drScans }}',
'{{ freeformTags }}',
'{{ ntp }}',
'{{ scans }}' /* required */,
'{{ vmNetworks }}' /* required */,
'{{ exadataInfrastructureId }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
dns,
drScans,
exadataInfrastructureId,
freeformTags,
lifecycleDetails,
lifecycleState,
ntp,
scans,
systemTags,
timeCreated,
vmClusterId,
vmNetworks
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vm_cluster_networks
  props:
    - name: exadataInfrastructureId
      value: "{{ exadataInfrastructureId }}"
      description: Required parameter for the vm_cluster_networks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vm_cluster_networks resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the Exadata Cloud@Customer VM cluster network. The name does not need to be unique.
    - name: dns
      value:
        - "{{ dns }}"
      description: |
        The list of DNS server IP addresses. Maximum of 3 allowed.
    - name: drScans
      description: |
        The SCAN details for DR network
      value:
        - hostname: "{{ hostname }}"
          ips: "{{ ips }}"
          scanListenerPortTcp: {{ scanListenerPortTcp }}
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: ntp
      value:
        - "{{ ntp }}"
      description: |
        The list of NTP server IP addresses. Maximum of 3 allowed.
    - name: scans
      description: |
        The SCAN details.
      value:
        - hostname: "{{ hostname }}"
          ips: "{{ ips }}"
          port: {{ port }}
    - name: vmNetworks
      description: |
        Details of the client and backup networks.
      value:
        - domainName: "{{ domainName }}"
          gateway: "{{ gateway }}"
          netmask: "{{ netmask }}"
          networkType: "{{ networkType }}"
          nodes: "{{ nodes }}"
          vlanId: "{{ vlanId }}"
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

Updates the specified VM cluster network. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To update a cloud VM cluster in an Exadata Cloud Service instance, use the &#91;UpdateCloudVmCluster &#93;(#/en/database/latest/CloudVmCluster/UpdateCloudVmCluster) operation.&lt;br /&gt;

```sql
UPDATE oci.database.vm_cluster_networks
SET 
definedTags = '{{ definedTags }}',
dns = '{{ dns }}',
drScans = '{{ drScans }}',
freeformTags = '{{ freeformTags }}',
ntp = '{{ ntp }}',
scans = '{{ scans }}',
vmNetworks = '{{ vmNetworks }}'
WHERE 
exadataInfrastructureId = '{{ exadataInfrastructureId }}' --required
AND vmClusterNetworkId = '{{ vmClusterNetworkId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
dns,
drScans,
exadataInfrastructureId,
freeformTags,
lifecycleDetails,
lifecycleState,
ntp,
scans,
systemTags,
timeCreated,
vmClusterId,
vmNetworks;
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

Deletes the specified VM cluster network. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;To delete a cloud VM cluster in an Exadata Cloud Service instance, use the &#91;DeleteCloudVmCluster &#93;(#/en/database/latest/CloudVmCluster/DeleteCloudVmCluster) operation.&lt;br /&gt;

```sql
DELETE FROM oci.database.vm_cluster_networks
WHERE exadataInfrastructureId = '{{ exadataInfrastructureId }}' --required
AND vmClusterNetworkId = '{{ vmClusterNetworkId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="generate_recommended_vm_cluster_network"
    values={[
        { label: 'generate_recommended_vm_cluster_network', value: 'generate_recommended_vm_cluster_network' },
        { label: 'download_vm_cluster_network_config_file', value: 'download_vm_cluster_network_config_file' },
        { label: 'resize_vm_cluster_network', value: 'resize_vm_cluster_network' },
        { label: 'validate_vm_cluster_network', value: 'validate_vm_cluster_network' }
    ]}
>
<TabItem value="generate_recommended_vm_cluster_network">

Generates a recommended Cloud@Customer VM cluster network configuration.&lt;br /&gt;

```sql
EXEC oci.database.vm_cluster_networks.generate_recommended_vm_cluster_network 
@exadataInfrastructureId='{{ exadataInfrastructureId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}", 
"dbServers": "{{ dbServers }}", 
"definedTags": "{{ definedTags }}", 
"displayName": "{{ displayName }}", 
"dns": "{{ dns }}", 
"drScanListenerPortTcp": {{ drScanListenerPortTcp }}, 
"freeformTags": "{{ freeformTags }}", 
"networks": "{{ networks }}", 
"ntp": "{{ ntp }}"
}'
;
```
</TabItem>
<TabItem value="download_vm_cluster_network_config_file">

Downloads the configuration file for the specified VM cluster network. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;

```sql
EXEC oci.database.vm_cluster_networks.download_vm_cluster_network_config_file 
@exadataInfrastructureId='{{ exadataInfrastructureId }}' --required, 
@vmClusterNetworkId='{{ vmClusterNetworkId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="resize_vm_cluster_network">

Adds or removes Db server network nodes to extend or shrink the existing VM cluster network. Applies to Exadata&lt;br /&gt;Cloud@Customer instances only.&lt;br /&gt;

```sql
EXEC oci.database.vm_cluster_networks.resize_vm_cluster_network 
@exadataInfrastructureId='{{ exadataInfrastructureId }}' --required, 
@vmClusterNetworkId='{{ vmClusterNetworkId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"action": "{{ action }}", 
"vmNetworks": "{{ vmNetworks }}"
}'
;
```
</TabItem>
<TabItem value="validate_vm_cluster_network">

Validates the specified VM cluster network. Applies to Exadata Cloud@Customer instances only.&lt;br /&gt;

```sql
EXEC oci.database.vm_cluster_networks.validate_vm_cluster_network 
@exadataInfrastructureId='{{ exadataInfrastructureId }}' --required, 
@vmClusterNetworkId='{{ vmClusterNetworkId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
</Tabs>
