--- 
title: maintenance_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - maintenance_runs
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

Creates, updates, deletes, gets or lists a <code>maintenance_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="maintenance_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.maintenance_runs" /></td></tr>
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

Information about the specified maintenance run.

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
    <td>The OCID of the maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="currentCustomActionTimeoutInMins" /></td>
    <td><code>integer</code></td>
    <td>Extend current custom action timeout between the current database servers during waiting state, from 0 (zero) to 30 minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="currentPatchingComponent" /></td>
    <td><code>string</code></td>
    <td>The name of the current infrastruture component that is getting patched.</td>
</tr>
<tr>
    <td><CopyableCode code="customActionTimeoutInMins" /></td>
    <td><code>integer</code></td>
    <td>Determines the amount of time the system will wait before the start of each database server patching operation. Specify a number of minutes, from 15 to 120. </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedComponentPatchingStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The estimated start time of the next infrastruture component patching operation.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedPatchingTime" /></td>
    <td><code>object</code></td>
    <td>The estimated total time required in minutes for all patching operations (database server, storage server, and network switch patching). </td>
</tr>
<tr>
    <td><CopyableCode code="isCustomActionTimeoutEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, enables the configuration of a custom action timeout (waiting period) between database servers patching operations.</td>
</tr>
<tr>
    <td><CopyableCode code="isDstFileUpdateEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if an automatic DST Time Zone file update is enabled for the Autonomous Container Database. If enabled along with Release Update, patching will be done in a Non-Rolling manner.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the maintenance run. For Autonomous AI Database Serverless instances, valid states are IN_PROGRESS, SUCCEEDED, and FAILED.  (SCHEDULED, IN_PROGRESS, SUCCEEDED, SKIPPED, FAILED, UPDATING, DELETING, DELETED, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSubtype" /></td>
    <td><code>string</code></td>
    <td>Maintenance sub-type. (QUARTERLY, HARDWARE, CRITICAL, INFRASTRUCTURE, DATABASE, ONEOFF, SECURITY_MONTHLY, TIMEZONE)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceType" /></td>
    <td><code>string</code></td>
    <td>Maintenance type. (PLANNED, UNPLANNED)</td>
</tr>
<tr>
    <td><CopyableCode code="patchFailureCount" /></td>
    <td><code>integer</code></td>
    <td>Contain the patch failure count.</td>
</tr>
<tr>
    <td><CopyableCode code="patchId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the patch. The identifier string includes the patch type, the Oracle AI Database version, and the patch creation date (using the format YYMMDD). For example, the identifier `ru_patch_19.9.0.0_201030` is used for an RU patch for Oracle AI Database 19.9.0.0 that was released October 30, 2020.</td>
</tr>
<tr>
    <td><CopyableCode code="patchingEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the patching operation ended.</td>
</tr>
<tr>
    <td><CopyableCode code="patchingMode" /></td>
    <td><code>string</code></td>
    <td>Cloud Exadata infrastructure node patching method, either "ROLLING" or "NONROLLING". Default value is ROLLING.  *IMPORTANT*: Non-rolling infrastructure patching involves system down time. See &#91;Oracle-Managed Infrastructure Maintenance Updates&#93;(/iaas/Content/Database/Concepts/examaintenance.htm#Oracle) for more information.  (ROLLING, NONROLLING)</td>
</tr>
<tr>
    <td><CopyableCode code="patchingStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the patching operation started.</td>
</tr>
<tr>
    <td><CopyableCode code="patchingStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the patching operation. (PATCHING, WAITING, SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="peerMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the maintenance run for the Autonomous Data Guard association's peer container database.</td>
</tr>
<tr>
    <td><CopyableCode code="peerMaintenanceRunIds" /></td>
    <td><code>array</code></td>
    <td>The list of OCIDs for the maintenance runs associated with their Autonomous Data Guard peer container databases.</td>
</tr>
<tr>
    <td><CopyableCode code="referenceResourceIdForImageUpdates" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the resource the maintenance run will refer to when trying to fetch target versions. This field is set during maintenance run creation based on infrastructure's maintenance run version preferences.  Currently this is only be supported for monthly maintenance runs created via scheduling plans. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="targetDbServerVersion" /></td>
    <td><code>string</code></td>
    <td>The target software version for the database server patching operation.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the target resource on which the maintenance run occurs.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the target resource on which the maintenance run occurs. (AUTONOMOUS_EXADATA_INFRASTRUCTURE, AUTONOMOUS_CONTAINER_DATABASE, EXADATA_DB_SYSTEM, CLOUD_EXADATA_INFRASTRUCTURE, EXACC_INFRASTRUCTURE, AUTONOMOUS_VM_CLUSTER, AUTONOMOUS_DATABASE, CLOUD_AUTONOMOUS_VM_CLUSTER)</td>
</tr>
<tr>
    <td><CopyableCode code="targetStorageServerVersion" /></td>
    <td><code>string</code></td>
    <td>The target Cell version that is to be patched to.</td>
</tr>
<tr>
    <td><CopyableCode code="timeEnded" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the maintenance run was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="timeScheduled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the maintenance run is scheduled to occur.</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the maintenance run starts.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details of a maintenance run.&lt;br /&gt;

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
    <td>The OCID of the maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="currentCustomActionTimeoutInMins" /></td>
    <td><code>integer</code></td>
    <td>Extend current custom action timeout between the current database servers during waiting state, from 0 (zero) to 30 minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="currentPatchingComponent" /></td>
    <td><code>string</code></td>
    <td>The name of the current infrastruture component that is getting patched.</td>
</tr>
<tr>
    <td><CopyableCode code="customActionTimeoutInMins" /></td>
    <td><code>integer</code></td>
    <td>Determines the amount of time the system will wait before the start of each database server patching operation. Specify a number of minutes, from 15 to 120. </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the maintenance run.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedComponentPatchingStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The estimated start time of the next infrastruture component patching operation.</td>
</tr>
<tr>
    <td><CopyableCode code="estimatedPatchingTime" /></td>
    <td><code>object</code></td>
    <td>The estimated total time required in minutes for all patching operations (database server, storage server, and network switch patching). </td>
</tr>
<tr>
    <td><CopyableCode code="isCustomActionTimeoutEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If true, enables the configuration of a custom action timeout (waiting period) between database servers patching operations.</td>
</tr>
<tr>
    <td><CopyableCode code="isDstFileUpdateEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if an automatic DST Time Zone file update is enabled for the Autonomous Container Database. If enabled along with Release Update, patching will be done in a Non-Rolling manner.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the maintenance run. For Autonomous AI Database Serverless instances, valid states are IN_PROGRESS, SUCCEEDED, and FAILED.  (SCHEDULED, IN_PROGRESS, SUCCEEDED, SKIPPED, FAILED, UPDATING, DELETING, DELETED, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceSubtype" /></td>
    <td><code>string</code></td>
    <td>Maintenance sub-type. (QUARTERLY, HARDWARE, CRITICAL, INFRASTRUCTURE, DATABASE, ONEOFF, SECURITY_MONTHLY, TIMEZONE)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceType" /></td>
    <td><code>string</code></td>
    <td>Maintenance type. (PLANNED, UNPLANNED)</td>
</tr>
<tr>
    <td><CopyableCode code="patchFailureCount" /></td>
    <td><code>integer</code></td>
    <td>Contain the patch failure count.</td>
</tr>
<tr>
    <td><CopyableCode code="patchId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the patch. The identifier string includes the patch type, the Oracle AI Database version, and the patch creation date (using the format YYMMDD). For example, the identifier `ru_patch_19.9.0.0_201030` is used for an RU patch for Oracle AI Database 19.9.0.0 that was released October 30, 2020.</td>
</tr>
<tr>
    <td><CopyableCode code="patchingEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the patching operation ended.</td>
</tr>
<tr>
    <td><CopyableCode code="patchingMode" /></td>
    <td><code>string</code></td>
    <td>Cloud Exadata infrastructure node patching method, either "ROLLING" or "NONROLLING". Default value is ROLLING.  *IMPORTANT*: Non-rolling infrastructure patching involves system down time. See &#91;Oracle-Managed Infrastructure Maintenance Updates&#93;(/iaas/Content/Database/Concepts/examaintenance.htm#Oracle) for more information.  (ROLLING, NONROLLING)</td>
</tr>
<tr>
    <td><CopyableCode code="patchingStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the patching operation started.</td>
</tr>
<tr>
    <td><CopyableCode code="patchingStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the patching operation. (PATCHING, WAITING, SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="peerMaintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the maintenance run for the Autonomous Data Guard association's peer container database.</td>
</tr>
<tr>
    <td><CopyableCode code="peerMaintenanceRunIds" /></td>
    <td><code>array</code></td>
    <td>The list of OCIDs for the maintenance runs associated with their Autonomous Data Guard peer container databases.</td>
</tr>
<tr>
    <td><CopyableCode code="referenceResourceIdForImageUpdates" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the resource the maintenance run will refer to when trying to fetch target versions. This field is set during maintenance run creation based on infrastructure's maintenance run version preferences.  Currently this is only be supported for monthly maintenance runs created via scheduling plans. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="targetDbServerVersion" /></td>
    <td><code>string</code></td>
    <td>The target software version for the database server patching operation.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the target resource on which the maintenance run occurs.</td>
</tr>
<tr>
    <td><CopyableCode code="targetResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the target resource on which the maintenance run occurs. (AUTONOMOUS_EXADATA_INFRASTRUCTURE, AUTONOMOUS_CONTAINER_DATABASE, EXADATA_DB_SYSTEM, CLOUD_EXADATA_INFRASTRUCTURE, EXACC_INFRASTRUCTURE, AUTONOMOUS_VM_CLUSTER, AUTONOMOUS_DATABASE, CLOUD_AUTONOMOUS_VM_CLUSTER)</td>
</tr>
<tr>
    <td><CopyableCode code="targetStorageServerVersion" /></td>
    <td><code>string</code></td>
    <td>The target Cell version that is to be patched to.</td>
</tr>
<tr>
    <td><CopyableCode code="timeEnded" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the maintenance run was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="timeScheduled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the maintenance run is scheduled to occur.</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the maintenance run starts.</td>
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
    <td><a href="#parameter-maintenanceRunId"><code>maintenanceRunId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified maintenance run.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-targetResourceId"><code>targetResourceId</code></a>, <a href="#parameter-targetResourceType"><code>targetResourceType</code></a>, <a href="#parameter-maintenanceType"><code>maintenanceType</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-isLocalAdg"><code>isLocalAdg</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-maintenanceSubtype"><code>maintenanceSubtype</code></a></td>
    <td>Gets a list of the maintenance runs in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-targetResourceId"><code>targetResourceId</code></a>, <a href="#parameter-timeScheduled"><code>timeScheduled</code></a>, <a href="#parameter-patchType"><code>patchType</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a maintenance run with one of the following:&lt;br /&gt;1. The latest available release update patch (RUP) for the Autonomous Container Database.&lt;br /&gt;2. The latest available RUP and DST time-zone (TZ) file updates for the Autonomous Container Database.&lt;br /&gt;3. The DST TZ file updates for the Autonomous Container Database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-maintenanceRunId"><code>maintenanceRunId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the properties of a maintenance run, such as the state of a maintenance run.</td>
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
<tr id="parameter-maintenanceRunId">
    <td><CopyableCode code="maintenanceRunId" /></td>
    <td><code>string</code></td>
    <td>The maintenance run OCID.</td>
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
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-isLocalAdg">
    <td><CopyableCode code="isLocalAdg" /></td>
    <td><code>boolean</code></td>
    <td>A filter to return the maintenance history results for the local standby Autonomous AI Database Serverless only.</td>
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
<tr id="parameter-maintenanceSubtype">
    <td><CopyableCode code="maintenanceSubtype" /></td>
    <td><code>string</code></td>
    <td>The sub-type of the maintenance run.</td>
</tr>
<tr id="parameter-maintenanceType">
    <td><CopyableCode code="maintenanceType" /></td>
    <td><code>string</code></td>
    <td>The maintenance type.</td>
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
    <td>The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIME_SCHEDULED and TIME_ENDED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** If you do not include the availability domain filter, the resources are grouped by availability domain, then sorted. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`).</td>
</tr>
<tr id="parameter-targetResourceId">
    <td><CopyableCode code="targetResourceId" /></td>
    <td><code>string</code></td>
    <td>The target resource ID.</td>
</tr>
<tr id="parameter-targetResourceType">
    <td><CopyableCode code="targetResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the target resource.</td>
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

Gets information about the specified maintenance run.

```sql
SELECT
id,
compartmentId,
currentCustomActionTimeoutInMins,
currentPatchingComponent,
customActionTimeoutInMins,
description,
displayName,
estimatedComponentPatchingStartTime,
estimatedPatchingTime,
isCustomActionTimeoutEnabled,
isDstFileUpdateEnabled,
lifecycleDetails,
lifecycleState,
maintenanceSubtype,
maintenanceType,
patchFailureCount,
patchId,
patchingEndTime,
patchingMode,
patchingStartTime,
patchingStatus,
peerMaintenanceRunId,
peerMaintenanceRunIds,
referenceResourceIdForImageUpdates,
systemTags,
targetDbServerVersion,
targetResourceId,
targetResourceType,
targetStorageServerVersion,
timeEnded,
timeScheduled,
timeStarted
FROM oci.database.maintenance_runs
WHERE maintenanceRunId = '{{ maintenanceRunId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Gets a list of the maintenance runs in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
currentCustomActionTimeoutInMins,
currentPatchingComponent,
customActionTimeoutInMins,
description,
displayName,
estimatedComponentPatchingStartTime,
estimatedPatchingTime,
isCustomActionTimeoutEnabled,
isDstFileUpdateEnabled,
lifecycleDetails,
lifecycleState,
maintenanceSubtype,
maintenanceType,
patchFailureCount,
patchId,
patchingEndTime,
patchingMode,
patchingStartTime,
patchingStatus,
peerMaintenanceRunId,
peerMaintenanceRunIds,
referenceResourceIdForImageUpdates,
systemTags,
targetDbServerVersion,
targetResourceId,
targetResourceType,
targetStorageServerVersion,
timeEnded,
timeScheduled,
timeStarted
FROM oci.database.maintenance_runs
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND targetResourceId = '{{ targetResourceId }}'
AND targetResourceType = '{{ targetResourceType }}'
AND maintenanceType = '{{ maintenanceType }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND isLocalAdg = '{{ isLocalAdg }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND availabilityDomain = '{{ availabilityDomain }}'
AND maintenanceSubtype = '{{ maintenanceSubtype }}'
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

Creates a maintenance run with one of the following:&lt;br /&gt;1. The latest available release update patch (RUP) for the Autonomous Container Database.&lt;br /&gt;2. The latest available RUP and DST time-zone (TZ) file updates for the Autonomous Container Database.&lt;br /&gt;3. The DST TZ file updates for the Autonomous Container Database.&lt;br /&gt;

```sql
INSERT INTO oci.database.maintenance_runs (
compartmentId,
isDstFileUpdateEnabled,
patchType,
patchingMode,
targetResourceId,
timeScheduled,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ compartmentId }}',
{{ isDstFileUpdateEnabled }},
'{{ patchType }}' /* required */,
'{{ patchingMode }}',
'{{ targetResourceId }}' /* required */,
'{{ timeScheduled }}' /* required */,
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
currentCustomActionTimeoutInMins,
currentPatchingComponent,
customActionTimeoutInMins,
description,
displayName,
estimatedComponentPatchingStartTime,
estimatedPatchingTime,
isCustomActionTimeoutEnabled,
isDstFileUpdateEnabled,
lifecycleDetails,
lifecycleState,
maintenanceSubtype,
maintenanceType,
patchFailureCount,
patchId,
patchingEndTime,
patchingMode,
patchingStartTime,
patchingStatus,
peerMaintenanceRunId,
peerMaintenanceRunIds,
referenceResourceIdForImageUpdates,
systemTags,
targetDbServerVersion,
targetResourceId,
targetResourceType,
targetStorageServerVersion,
timeEnded,
timeScheduled,
timeStarted
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: maintenance_runs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the maintenance_runs resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment containing the Maintenance Run.
    - name: isDstFileUpdateEnabled
      value: {{ isDstFileUpdateEnabled }}
      description: |
        Indicates if an automatic DST Time Zone file update is enabled for the Autonomous Container Database. If enabled along with Release Update, patching will be done in a Non-Rolling manner.
    - name: patchType
      value: "{{ patchType }}"
      description: |
        Patch type, either "QUARTERLY" or "TIMEZONE".
      valid_values: ['QUARTERLY', 'TIMEZONE']
    - name: patchingMode
      value: "{{ patchingMode }}"
      description: |
        Cloud Exadata infrastructure node patching method, either "ROLLING" or "NONROLLING". Default value is ROLLING.
        *IMPORTANT*: Non-rolling infrastructure patching involves system down time. See [Oracle-Managed Infrastructure Maintenance Updates](/iaas/Content/Database/Concepts/examaintenance.htm#Oracle) for more information.
      valid_values: ['ROLLING', 'NONROLLING']
    - name: targetResourceId
      value: "{{ targetResourceId }}"
      description: |
        The ID of the target resource for which the maintenance run should be created.
    - name: timeScheduled
      value: "{{ timeScheduled }}"
      description: |
        The date and time that update should be scheduled.
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique identifier for the request. 
      description: Unique identifier for the request. 
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

Updates the properties of a maintenance run, such as the state of a maintenance run.

```sql
UPDATE oci.database.maintenance_runs
SET 
currentCustomActionTimeoutInMins = {{ currentCustomActionTimeoutInMins }},
customActionTimeoutInMins = {{ customActionTimeoutInMins }},
isCustomActionTimeoutEnabled = {{ isCustomActionTimeoutEnabled }},
isEnabled = {{ isEnabled }},
isPatchNowEnabled = {{ isPatchNowEnabled }},
isResumePatching = {{ isResumePatching }},
patchId = '{{ patchId }}',
patchingMode = '{{ patchingMode }}',
targetDbServerVersion = '{{ targetDbServerVersion }}',
targetStorageServerVersion = '{{ targetStorageServerVersion }}',
timeScheduled = '{{ timeScheduled }}'
WHERE 
maintenanceRunId = '{{ maintenanceRunId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
currentCustomActionTimeoutInMins,
currentPatchingComponent,
customActionTimeoutInMins,
description,
displayName,
estimatedComponentPatchingStartTime,
estimatedPatchingTime,
isCustomActionTimeoutEnabled,
isDstFileUpdateEnabled,
lifecycleDetails,
lifecycleState,
maintenanceSubtype,
maintenanceType,
patchFailureCount,
patchId,
patchingEndTime,
patchingMode,
patchingStartTime,
patchingStatus,
peerMaintenanceRunId,
peerMaintenanceRunIds,
referenceResourceIdForImageUpdates,
systemTags,
targetDbServerVersion,
targetResourceId,
targetResourceType,
targetStorageServerVersion,
timeEnded,
timeScheduled,
timeStarted;
```
</TabItem>
</Tabs>
