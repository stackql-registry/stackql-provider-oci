--- 
title: exascale_db_storage_vaults
hide_title: false
hide_table_of_contents: false
keywords:
  - exascale_db_storage_vaults
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

Creates, updates, deletes, gets or lists an <code>exascale_db_storage_vaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exascale_db_storage_vaults" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.exascale_db_storage_vaults" /></td></tr>
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

Information about the Exadata Database Storage Vault.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata Database Storage Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalFlashCacheInPercent" /></td>
    <td><code>integer (int32)</code></td>
    <td>The size of additional Flash Cache in percentage of High Capacity database storage. </td>
</tr>
<tr>
    <td><CopyableCode code="attachedShapeAttributes" /></td>
    <td><code>array</code></td>
    <td>The shapeAttribute of the Exadata VM cluster(s) associated with the Exadata Database Storage Vault. </td>
</tr>
<tr>
    <td><CopyableCode code="autoscaleLimitInGBs" /></td>
    <td><code>integer</code></td>
    <td>The maximum limit, in gigabytes, to which the Vault storage size can automatically scale when auto scaling is enabled for the Database Storage Vault</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain in which the Exadata Database Storage Vault is located.</td>
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
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Exadata Database Storage Vault description.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Exadata Database Storage Vault. The name does not need to be unique.</td>
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
    <td><CopyableCode code="highCapacityDatabaseStorage" /></td>
    <td><code>object</code></td>
    <td>Exadata Database Storage Details </td>
</tr>
<tr>
    <td><CopyableCode code="isAutoscaleEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if autoscale feature is enabled for the Database Storage Vault. The default value is `FALSE`.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Exadata Database Storage Vault. (PROVISIONING, AVAILABLE, UPDATING, TERMINATING, TERMINATED, FAILED)</td>
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
    <td>The date and time that the Exadata Database Storage Vault was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone that you want to use for the Exadata Database Storage Vault. For details, see &#91;Time Zones&#93;(/Content/Database/References/timezones.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="vmClusterCount" /></td>
    <td><code>integer</code></td>
    <td>The number of Exadata VM clusters used the Exadata Database Storage Vault. </td>
</tr>
<tr>
    <td><CopyableCode code="vmClusterIds" /></td>
    <td><code>array</code></td>
    <td>The List of Exadata VM cluster on Exascale Infrastructure &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) **Note:** If Exadata Database Storage Vault is not used for any Exadata VM cluster on Exascale Infrastructure, this list is empty. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details of the Exadata Database Storage Vault.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Exadata Database Storage Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="additionalFlashCacheInPercent" /></td>
    <td><code>integer (int32)</code></td>
    <td>The size of additional Flash Cache in percentage of High Capacity database storage. </td>
</tr>
<tr>
    <td><CopyableCode code="attachedShapeAttributes" /></td>
    <td><code>array</code></td>
    <td>The shapeAttribute of the Exadata VM cluster(s) associated with the Exadata Database Storage Vault. </td>
</tr>
<tr>
    <td><CopyableCode code="autoscaleLimitInGBs" /></td>
    <td><code>integer</code></td>
    <td>The maximum limit, in gigabytes, to which the Vault storage size can automatically scale when auto scaling is enabled for the Database Storage Vault</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain in which the Exadata Database Storage Vault is located.</td>
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
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Exadata Database Storage Vault description.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Exadata Database Storage Vault. The name does not need to be unique.</td>
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
    <td><CopyableCode code="highCapacityDatabaseStorage" /></td>
    <td><code>object</code></td>
    <td>Exadata Database Storage Details </td>
</tr>
<tr>
    <td><CopyableCode code="isAutoscaleEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if autoscale feature is enabled for the Database Storage Vault. The default value is `FALSE`.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Exadata Database Storage Vault. (x-obmcs-enumref: #/definitions/ExascaleDbStorageVault/lifecycleState)</td>
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
    <td>The date and time that the Exadata Database Storage Vault was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>string</code></td>
    <td>The time zone that you want to use for the Exadata Database Storage Vault. For details, see &#91;Time Zones&#93;(/Content/Database/References/timezones.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="vmClusterCount" /></td>
    <td><code>integer</code></td>
    <td>The number of Exadata VM clusters used the Exadata Database Storage Vault. </td>
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
    <td><a href="#parameter-exascaleDbStorageVaultId"><code>exascaleDbStorageVaultId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified Exadata Database Storage Vaults in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-clusterPlacementGroupId"><code>clusterPlacementGroupId</code></a>, <a href="#parameter-attachedShapeAttributesNotEqualTo"><code>attachedShapeAttributesNotEqualTo</code></a>, <a href="#parameter-attachedShapeAttributes"><code>attachedShapeAttributes</code></a>, <a href="#parameter-vmClusterCountLessThanOrEqualTo"><code>vmClusterCountLessThanOrEqualTo</code></a>, <a href="#parameter-vmClusterCountGreaterThanOrEqualTo"><code>vmClusterCountGreaterThanOrEqualTo</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-exadataInfrastructureId"><code>exadataInfrastructureId</code></a></td>
    <td>Gets a list of the Exadata Database Storage Vaults in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-highCapacityDatabaseStorage"><code>highCapacityDatabaseStorage</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates an Exadata Database Storage Vault&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exascaleDbStorageVaultId"><code>exascaleDbStorageVaultId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the specified Exadata Database Storage Vault.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exascaleDbStorageVaultId"><code>exascaleDbStorageVaultId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the specified Exadata Database Storage Vault.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exascaleDbStorageVaultId"><code>exascaleDbStorageVaultId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Moves a Exadata Database Storage Vault to another compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_exascale_db_storage_vault_subscription"><CopyableCode code="change_exascale_db_storage_vault_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exascaleDbStorageVaultId"><code>exascaleDbStorageVaultId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Associate a Exadata Database Storage Vault with a different subscription.&lt;br /&gt;</td>
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
<tr id="parameter-exascaleDbStorageVaultId">
    <td><CopyableCode code="exascaleDbStorageVaultId" /></td>
    <td><code>string</code></td>
    <td>The Exadata Database Storage Vault &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-attachedShapeAttributes">
    <td><CopyableCode code="attachedShapeAttributes" /></td>
    <td><code>string</code></td>
    <td>A filter to return only Exadata Database Storage Vaults which match the given attachedShapeAttributes or has null attachedShapeAttributes</td>
</tr>
<tr id="parameter-attachedShapeAttributesNotEqualTo">
    <td><CopyableCode code="attachedShapeAttributesNotEqualTo" /></td>
    <td><code>string</code></td>
    <td>A filter to return only Exadata Database Storage Vaults which do not match the given attachedShapeAttributes</td>
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
<tr id="parameter-exadataInfrastructureId">
    <td><CopyableCode code="exadataInfrastructureId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only list of Vaults that are linked to the exadata infrastructure Id.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only Exadata Database Storage Vaults that match the given lifecycle state exactly.</td>
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
<tr id="parameter-vmClusterCountGreaterThanOrEqualTo">
    <td><CopyableCode code="vmClusterCountGreaterThanOrEqualTo" /></td>
    <td><code>integer</code></td>
    <td>A filter to return only Exadata Database Storage Vaults with associated Exadata VM Clusters greater than or equal to the given count</td>
</tr>
<tr id="parameter-vmClusterCountLessThanOrEqualTo">
    <td><CopyableCode code="vmClusterCountLessThanOrEqualTo" /></td>
    <td><code>integer</code></td>
    <td>A filter to return only Exadata Database Storage Vaults with associated Exadata VM Clusters less than or equal to the given count</td>
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

Gets information about the specified Exadata Database Storage Vaults in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
additionalFlashCacheInPercent,
attachedShapeAttributes,
autoscaleLimitInGBs,
availabilityDomain,
clusterPlacementGroupId,
compartmentId,
definedTags,
description,
displayName,
exadataInfrastructureId,
freeformTags,
highCapacityDatabaseStorage,
isAutoscaleEnabled,
lifecycleDetails,
lifecycleState,
subscriptionId,
systemTags,
timeCreated,
timeZone,
vmClusterCount,
vmClusterIds
FROM oci.database.exascale_db_storage_vaults
WHERE exascaleDbStorageVaultId = '{{ exascaleDbStorageVaultId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of the Exadata Database Storage Vaults in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
additionalFlashCacheInPercent,
attachedShapeAttributes,
autoscaleLimitInGBs,
availabilityDomain,
clusterPlacementGroupId,
compartmentId,
definedTags,
description,
displayName,
exadataInfrastructureId,
freeformTags,
highCapacityDatabaseStorage,
isAutoscaleEnabled,
lifecycleDetails,
lifecycleState,
subscriptionId,
systemTags,
timeCreated,
timeZone,
vmClusterCount
FROM oci.database.exascale_db_storage_vaults
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND clusterPlacementGroupId = '{{ clusterPlacementGroupId }}'
AND attachedShapeAttributesNotEqualTo = '{{ attachedShapeAttributesNotEqualTo }}'
AND attachedShapeAttributes = '{{ attachedShapeAttributes }}'
AND vmClusterCountLessThanOrEqualTo = '{{ vmClusterCountLessThanOrEqualTo }}'
AND vmClusterCountGreaterThanOrEqualTo = '{{ vmClusterCountGreaterThanOrEqualTo }}'
AND displayName = '{{ displayName }}'
AND opc-request-id = '{{ opc-request-id }}'
AND exadataInfrastructureId = '{{ exadataInfrastructureId }}'
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

Creates an Exadata Database Storage Vault&lt;br /&gt;

```sql
INSERT INTO oci.database.exascale_db_storage_vaults (
additionalFlashCacheInPercent,
autoscaleLimitInGBs,
availabilityDomain,
clusterPlacementGroupId,
compartmentId,
definedTags,
description,
displayName,
exadataInfrastructureId,
freeformTags,
highCapacityDatabaseStorage,
isAutoscaleEnabled,
subscriptionId,
timeZone,
region,
opc-retry-token,
opc-request-id
)
SELECT 
{{ additionalFlashCacheInPercent }},
{{ autoscaleLimitInGBs }},
'{{ availabilityDomain }}' /* required */,
'{{ clusterPlacementGroupId }}',
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ description }}',
'{{ displayName }}' /* required */,
'{{ exadataInfrastructureId }}',
'{{ freeformTags }}',
'{{ highCapacityDatabaseStorage }}' /* required */,
{{ isAutoscaleEnabled }},
'{{ subscriptionId }}',
'{{ timeZone }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
additionalFlashCacheInPercent,
attachedShapeAttributes,
autoscaleLimitInGBs,
availabilityDomain,
clusterPlacementGroupId,
compartmentId,
definedTags,
description,
displayName,
exadataInfrastructureId,
freeformTags,
highCapacityDatabaseStorage,
isAutoscaleEnabled,
lifecycleDetails,
lifecycleState,
subscriptionId,
systemTags,
timeCreated,
timeZone,
vmClusterCount,
vmClusterIds
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: exascale_db_storage_vaults
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the exascale_db_storage_vaults resource.
    - name: additionalFlashCacheInPercent
      value: {{ additionalFlashCacheInPercent }}
      description: |
        The size of additional Flash Cache in percentage of High Capacity database storage.
    - name: autoscaleLimitInGBs
      value: {{ autoscaleLimitInGBs }}
      description: |
        The maximum limit, in gigabytes, to which the Vault storage size can automatically scale when auto scaling is enabled for the Database Storage Vault
    - name: availabilityDomain
      value: "{{ availabilityDomain }}"
      description: |
        The name of the availability domain in which the Exadata Database Storage Vault is located.
    - name: clusterPlacementGroupId
      value: "{{ clusterPlacementGroupId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the cluster placement group of the Exadata Infrastructure.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: description
      value: "{{ description }}"
      description: |
        Exadata Database Storage Vault description.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the Exadata Database Storage Vault. The name does not need to be unique.
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
    - name: highCapacityDatabaseStorage
      description: |
        Create exadata Database Storage Details
      value:
        totalSizeInGbs: {{ totalSizeInGbs }}
    - name: isAutoscaleEnabled
      value: {{ isAutoscaleEnabled }}
      description: |
        Indicates if autoscale feature is enabled for the Database Storage Vault. The default value is \`FALSE\`.
    - name: subscriptionId
      value: "{{ subscriptionId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the subscription with which resource needs to be associated with.
    - name: timeZone
      value: "{{ timeZone }}"
      description: |
        The time zone that you want to use for the Exadata Database Storage Vault. For details, see [Time Zones](/Content/Database/References/timezones.htm).
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

Updates the specified Exadata Database Storage Vault.&lt;br /&gt;

```sql
UPDATE oci.database.exascale_db_storage_vaults
SET 
additionalFlashCacheInPercent = {{ additionalFlashCacheInPercent }},
autoscaleLimitInGBs = {{ autoscaleLimitInGBs }},
definedTags = '{{ definedTags }}',
description = '{{ description }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
highCapacityDatabaseStorage = '{{ highCapacityDatabaseStorage }}',
isAutoscaleEnabled = {{ isAutoscaleEnabled }}
WHERE 
exascaleDbStorageVaultId = '{{ exascaleDbStorageVaultId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
additionalFlashCacheInPercent,
attachedShapeAttributes,
autoscaleLimitInGBs,
availabilityDomain,
clusterPlacementGroupId,
compartmentId,
definedTags,
description,
displayName,
exadataInfrastructureId,
freeformTags,
highCapacityDatabaseStorage,
isAutoscaleEnabled,
lifecycleDetails,
lifecycleState,
subscriptionId,
systemTags,
timeCreated,
timeZone,
vmClusterCount,
vmClusterIds;
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

Deletes the specified Exadata Database Storage Vault.&lt;br /&gt;

```sql
DELETE FROM oci.database.exascale_db_storage_vaults
WHERE exascaleDbStorageVaultId = '{{ exascaleDbStorageVaultId }}' --required
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
        { label: 'change_exascale_db_storage_vault_subscription', value: 'change_exascale_db_storage_vault_subscription' }
    ]}
>
<TabItem value="change_compartment">

Moves a Exadata Database Storage Vault to another compartment.&lt;br /&gt;

```sql
EXEC oci.database.exascale_db_storage_vaults.change_compartment 
@exascaleDbStorageVaultId='{{ exascaleDbStorageVaultId }}' --required, 
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
<TabItem value="change_exascale_db_storage_vault_subscription">

Associate a Exadata Database Storage Vault with a different subscription.&lt;br /&gt;

```sql
EXEC oci.database.exascale_db_storage_vaults.change_exascale_db_storage_vault_subscription 
@exascaleDbStorageVaultId='{{ exascaleDbStorageVaultId }}' --required, 
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
</Tabs>
