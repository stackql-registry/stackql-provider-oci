--- 
title: instance_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_pools
  - compute
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

Creates, updates, deletes, gets or lists an <code>instance_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.instance_pools" /></td></tr>
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

The instance pool was retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the instance pool.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the instance pool. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="instanceConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the instance configuration associated with the instance pool. </td>
</tr>
<tr>
    <td><CopyableCode code="instanceDisplayNameFormatter" /></td>
    <td><code>string</code></td>
    <td>A user-friendly formatter for the instance pool's instances. Instance displaynames follow the format. The formatter does not retroactively change instance's displaynames, only instance displaynames in the future follow the format  (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceHostnameFormatter" /></td>
    <td><code>string</code></td>
    <td>A user-friendly formatter for the instance pool's instances. Instance hostnames follow the format. The formatter does not retroactively change instance's hostnames, only instance hostnames in the future follow the format  (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleManagement" /></td>
    <td><code>object</code></td>
    <td>The lifecycle management options for the instance pool. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the instance pool. (PROVISIONING, SCALING, STARTING, STOPPING, TERMINATING, STOPPED, TERMINATED, RUNNING)</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancers" /></td>
    <td><code>array</code></td>
    <td>The load balancers attached to the instance pool. </td>
</tr>
<tr>
    <td><CopyableCode code="placementConfigurations" /></td>
    <td><code>array</code></td>
    <td>The placement configurations for the instance pool.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The number of instances that should be in the instance pool.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the instance pool was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Summary information for an instance pool.

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
    <td>The OCID of the instance pool.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomains" /></td>
    <td><code>array</code></td>
    <td>The availability domains for the instance pool.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the instance pool.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="instanceConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the instance configuration associated with the instance pool.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the instance pool. (PROVISIONING, SCALING, STARTING, STOPPING, TERMINATING, STOPPED, TERMINATED, RUNNING)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The number of instances that should be in the instance pool.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the instance pool was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified instance pool</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the instance pools in the specified compartment.</td>
</tr>
<tr>
    <td><a href="#attach"><CopyableCode code="attach" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-backendSetName"><code>backendSetName</code></a>, <a href="#parameter-port"><code>port</code></a>, <a href="#parameter-vnicSelection"><code>vnicSelection</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Attach a load balancer to the instance pool.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-instanceConfigurationId"><code>instanceConfigurationId</code></a>, <a href="#parameter-placementConfigurations"><code>placementConfigurations</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates an instance pool.&lt;br /&gt;&lt;br /&gt;To determine whether capacity is available for a specific shape before you create an instance pool,&lt;br /&gt;use the &#91;CreateComputeCapacityReport&#93;(#/en/iaas/latest/ComputeCapacityReport/CreateComputeCapacityReport)&lt;br /&gt;operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Update the specified instance pool.&lt;br /&gt;&lt;br /&gt;The OCID of the instance pool remains the same.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Terminate the specified instance pool.&lt;br /&gt;&lt;br /&gt;**Warning:** When you delete an instance pool, the resources that were created by the pool are permanently&lt;br /&gt;deleted, including associated instances, attached boot volumes, and block volumes.&lt;br /&gt;&lt;br /&gt;If an autoscaling configuration applies to the instance pool, the autoscaling configuration will be deleted&lt;br /&gt;asynchronously after the pool is deleted. You can also manually delete the autoscaling configuration using&lt;br /&gt;the `DeleteAutoScalingConfiguration` operation in the Autoscaling API.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves an instance pool into a different compartment within the same tenancy. For&lt;br /&gt;information about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;When you move an instance pool to a different compartment, associated resources such as the instances in&lt;br /&gt;the pool, boot volumes, VNICs, and autoscaling configurations are not moved.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#detach_instance_pool_instance"><CopyableCode code="detach_instance_pool_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Detaches an instance from an instance pool.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#detach_load_balancer"><CopyableCode code="detach_load_balancer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-backendSetName"><code>backendSetName</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Detach a load balancer from the instance pool.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#reset_instance_pool"><CopyableCode code="reset_instance_pool" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Performs the reset (immediate power off and power on) action on the specified instance pool,&lt;br /&gt;which performs the action on all the instances in the pool.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#softreset_instance_pool"><CopyableCode code="softreset_instance_pool" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Performs the softreset (ACPI shutdown and power on) action on the specified instance pool,&lt;br /&gt;which performs the action on all the instances in the pool.&lt;br /&gt;&lt;br /&gt;Softreset gracefully reboots the instances by sending a shutdown command to the operating systems.&lt;br /&gt;After waiting 15 minutes for the OS to shut down, the instances are powered off and then powered back on.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#softstop_instance_pool"><CopyableCode code="softstop_instance_pool" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Performs the softstop (ACPI shutdown and power on) action on the specified instance pool,&lt;br /&gt;which performs the action on all the instances in the pool.&lt;br /&gt;&lt;br /&gt;Softstop gracefully reboots the instances by sending a shutdown command to the operating systems.&lt;br /&gt;After waiting 15 minutes for the OS to shutdown, the instances are powered off and then powered back on.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#start_instance_pool"><CopyableCode code="start_instance_pool" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Performs the start (power on) action on the specified instance pool,&lt;br /&gt;which performs the action on all the instances in the pool.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#stop_instance_pool"><CopyableCode code="stop_instance_pool" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Performs the stop (immediate power off) action on the specified instance pool,&lt;br /&gt;which performs the action on all the instances in the pool.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#termination_proceed_instance_pool_instance"><CopyableCode code="termination_proceed_instance_pool_instance" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Marks an instance in an instance pool to be ready for termination.&lt;br /&gt;</td>
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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr id="parameter-instancePoolId">
    <td><CopyableCode code="instancePoolId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the instance pool.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given display name exactly. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given lifecycle state. The state value is case-insensitive. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** In general, some "List" operations (for example, `ListInstances`) let you optionally filter by availability domain if the scope of the resource type is within a single availability domain. If you call one of these "List" operations without specifying an availability domain, the resources are grouped by availability domain, then sorted. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). The DISPLAYNAME sort order is case sensitive. </td>
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

Gets the specified instance pool

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
freeformTags,
instanceConfigurationId,
instanceDisplayNameFormatter,
instanceHostnameFormatter,
lifecycleManagement,
lifecycleState,
loadBalancers,
placementConfigurations,
size,
timeCreated
FROM oci.compute.instance_pools
WHERE instancePoolId = '{{ instancePoolId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the instance pools in the specified compartment.

```sql
SELECT
id,
availabilityDomains,
compartmentId,
definedTags,
displayName,
freeformTags,
instanceConfigurationId,
lifecycleState,
size,
timeCreated
FROM oci.compute.instance_pools
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND displayName = '{{ displayName }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="attach"
    values={[
        { label: 'attach', value: 'attach' },
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="attach">

Attach a load balancer to the instance pool.&lt;br /&gt;

```sql
INSERT INTO oci.compute.instance_pools (
backendSetName,
loadBalancerId,
port,
vnicSelection,
instancePoolId,
region,
opc-retry-token,
if-match
)
SELECT 
'{{ backendSetName }}' /* required */,
'{{ loadBalancerId }}' /* required */,
{{ port }} /* required */,
'{{ vnicSelection }}' /* required */,
'{{ instancePoolId }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ if-match }}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
freeformTags,
instanceConfigurationId,
instanceDisplayNameFormatter,
instanceHostnameFormatter,
lifecycleManagement,
lifecycleState,
loadBalancers,
placementConfigurations,
size,
timeCreated
;
```
</TabItem>
<TabItem value="create">

Creates an instance pool.&lt;br /&gt;&lt;br /&gt;To determine whether capacity is available for a specific shape before you create an instance pool,&lt;br /&gt;use the &#91;CreateComputeCapacityReport&#93;(#/en/iaas/latest/ComputeCapacityReport/CreateComputeCapacityReport)&lt;br /&gt;operation.&lt;br /&gt;

```sql
INSERT INTO oci.compute.instance_pools (
compartmentId,
definedTags,
displayName,
freeformTags,
instanceConfigurationId,
instanceDisplayNameFormatter,
instanceHostnameFormatter,
lifecycleManagement,
loadBalancers,
placementConfigurations,
size,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ instanceConfigurationId }}' /* required */,
'{{ instanceDisplayNameFormatter }}',
'{{ instanceHostnameFormatter }}',
'{{ lifecycleManagement }}',
'{{ loadBalancers }}',
'{{ placementConfigurations }}' /* required */,
{{ size }} /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
freeformTags,
instanceConfigurationId,
instanceDisplayNameFormatter,
instanceHostnameFormatter,
lifecycleManagement,
lifecycleState,
loadBalancers,
placementConfigurations,
size,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instance_pools
  props:
    - name: instancePoolId
      value: "{{ instancePoolId }}"
      description: Required parameter for the instance_pools resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instance_pools resource.
    - name: backendSetName
      value: "{{ backendSetName }}"
      description: |
        The name of the backend set on the load balancer to add instances to.
    - name: loadBalancerId
      value: "{{ loadBalancerId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the load balancer to attach to the instance pool.
    - name: port
      value: {{ port }}
      description: |
        The port value to use when creating the backend set.
    - name: vnicSelection
      value: "{{ vnicSelection }}"
      description: |
        Indicates which VNIC on each instance in the pool should be used to associate with the load balancer.
        Possible values are "PrimaryVnic" or the displayName of one of the secondary VNICs on the instance configuration
        that is associated with the instance pool.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the instance pool.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a
        namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. Does not have to be unique, and it's changeable.
        Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: instanceConfigurationId
      value: "{{ instanceConfigurationId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the instance configuration associated
        with the instance pool.
    - name: instanceDisplayNameFormatter
      value: "{{ instanceDisplayNameFormatter }}"
      description: |
        A user-friendly formatter for the instance pool's instances. Instance displaynames follow the format.
        The formatter does not retroactively change instance's displaynames, only instance displaynames in the future follow the format
    - name: instanceHostnameFormatter
      value: "{{ instanceHostnameFormatter }}"
      description: |
        A user-friendly formatter for the instance pool's instances. Instance hostnames follow the format.
        The formatter does not retroactively change instance's hostnames, only instance hostnames in the future follow the format
    - name: lifecycleManagement
      description: |
        The lifecycle management options for the instance pool.
      value:
        lifecycleActions:
          preTermination:
            isEnabled: {{ isEnabled }}
            onTimeout:
              preserveBlockVolumeMode: "{{ preserveBlockVolumeMode }}"
              preserveBootVolumeMode: "{{ preserveBootVolumeMode }}"
            timeout: {{ timeout }}
    - name: loadBalancers
      description: |
        The load balancers to attach to the instance pool.
      value:
        - backendSetName: "{{ backendSetName }}"
          loadBalancerId: "{{ loadBalancerId }}"
          port: {{ port }}
          vnicSelection: "{{ vnicSelection }}"
    - name: placementConfigurations
      description: |
        The placement configurations for the instance pool. Provide one placement configuration for
        each availability domain.
        To use the instance pool with a regional subnet, provide a placement configuration for
        each availability domain, and include the regional subnet in each placement
        configuration.
        To use compute cluster with instance pool, provide a single placement configuration.
      value:
        - availabilityDomain: "{{ availabilityDomain }}"
          computeClusterId: "{{ computeClusterId }}"
          faultDomains: "{{ faultDomains }}"
          primarySubnetId: "{{ primarySubnetId }}"
          primaryVnicSubnets:
            ipv6AddressIpv6SubnetCidrPairDetails:
              - ipv6SubnetCidr: "{{ ipv6SubnetCidr }}"
            isAssignIpv6Ip: {{ isAssignIpv6Ip }}
            subnetId: "{{ subnetId }}"
          secondaryVnicSubnets: "{{ secondaryVnicSubnets }}"
    - name: size
      value: {{ size }}
      description: |
        The number of instances that should be in the instance pool.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
    - name: if-match
      value: "{{ if-match }}"
      description: For optimistic concurrency control. In the PUT or DELETE call for a resource, set the \`if-match\` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. 
      description: For optimistic concurrency control. In the PUT or DELETE call for a resource, set the \`if-match\` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. 
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

Update the specified instance pool.&lt;br /&gt;&lt;br /&gt;The OCID of the instance pool remains the same.&lt;br /&gt;

```sql
UPDATE oci.compute.instance_pools
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
instanceConfigurationId = '{{ instanceConfigurationId }}',
instanceDisplayNameFormatter = '{{ instanceDisplayNameFormatter }}',
instanceHostnameFormatter = '{{ instanceHostnameFormatter }}',
lifecycleManagement = '{{ lifecycleManagement }}',
placementConfigurations = '{{ placementConfigurations }}',
size = {{ size }}
WHERE 
instancePoolId = '{{ instancePoolId }}' --required
AND region = '{{ region }}' --required
AND opc-retry-token = '{{ opc-retry-token}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
freeformTags,
instanceConfigurationId,
instanceDisplayNameFormatter,
instanceHostnameFormatter,
lifecycleManagement,
lifecycleState,
loadBalancers,
placementConfigurations,
size,
timeCreated;
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

Terminate the specified instance pool.&lt;br /&gt;&lt;br /&gt;**Warning:** When you delete an instance pool, the resources that were created by the pool are permanently&lt;br /&gt;deleted, including associated instances, attached boot volumes, and block volumes.&lt;br /&gt;&lt;br /&gt;If an autoscaling configuration applies to the instance pool, the autoscaling configuration will be deleted&lt;br /&gt;asynchronously after the pool is deleted. You can also manually delete the autoscaling configuration using&lt;br /&gt;the `DeleteAutoScalingConfiguration` operation in the Autoscaling API.&lt;br /&gt;

```sql
DELETE FROM oci.compute.instance_pools
WHERE instancePoolId = '{{ instancePoolId }}' --required
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
        { label: 'detach_instance_pool_instance', value: 'detach_instance_pool_instance' },
        { label: 'detach_load_balancer', value: 'detach_load_balancer' },
        { label: 'reset_instance_pool', value: 'reset_instance_pool' },
        { label: 'softreset_instance_pool', value: 'softreset_instance_pool' },
        { label: 'softstop_instance_pool', value: 'softstop_instance_pool' },
        { label: 'start_instance_pool', value: 'start_instance_pool' },
        { label: 'stop_instance_pool', value: 'stop_instance_pool' },
        { label: 'termination_proceed_instance_pool_instance', value: 'termination_proceed_instance_pool_instance' }
    ]}
>
<TabItem value="change_compartment">

Moves an instance pool into a different compartment within the same tenancy. For&lt;br /&gt;information about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;When you move an instance pool to a different compartment, associated resources such as the instances in&lt;br /&gt;the pool, boot volumes, VNICs, and autoscaling configurations are not moved.&lt;br /&gt;

```sql
EXEC oci.compute.instance_pools.change_compartment 
@instancePoolId='{{ instancePoolId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
<TabItem value="detach_instance_pool_instance">

Detaches an instance from an instance pool.&lt;br /&gt;

```sql
EXEC oci.compute.instance_pools.detach_instance_pool_instance 
@instancePoolId='{{ instancePoolId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"instanceId": "{{ instanceId }}", 
"isAutoTerminate": {{ isAutoTerminate }}, 
"isDecrementSize": {{ isDecrementSize }}
}'
;
```
</TabItem>
<TabItem value="detach_load_balancer">

Detach a load balancer from the instance pool.&lt;br /&gt;

```sql
EXEC oci.compute.instance_pools.detach_load_balancer 
@instancePoolId='{{ instancePoolId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"backendSetName": "{{ backendSetName }}", 
"loadBalancerId": "{{ loadBalancerId }}"
}'
;
```
</TabItem>
<TabItem value="reset_instance_pool">

Performs the reset (immediate power off and power on) action on the specified instance pool,&lt;br /&gt;which performs the action on all the instances in the pool.&lt;br /&gt;

```sql
EXEC oci.compute.instance_pools.reset_instance_pool 
@instancePoolId='{{ instancePoolId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="softreset_instance_pool">

Performs the softreset (ACPI shutdown and power on) action on the specified instance pool,&lt;br /&gt;which performs the action on all the instances in the pool.&lt;br /&gt;&lt;br /&gt;Softreset gracefully reboots the instances by sending a shutdown command to the operating systems.&lt;br /&gt;After waiting 15 minutes for the OS to shut down, the instances are powered off and then powered back on.&lt;br /&gt;

```sql
EXEC oci.compute.instance_pools.softreset_instance_pool 
@instancePoolId='{{ instancePoolId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="softstop_instance_pool">

Performs the softstop (ACPI shutdown and power on) action on the specified instance pool,&lt;br /&gt;which performs the action on all the instances in the pool.&lt;br /&gt;&lt;br /&gt;Softstop gracefully reboots the instances by sending a shutdown command to the operating systems.&lt;br /&gt;After waiting 15 minutes for the OS to shutdown, the instances are powered off and then powered back on.&lt;br /&gt;

```sql
EXEC oci.compute.instance_pools.softstop_instance_pool 
@instancePoolId='{{ instancePoolId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="start_instance_pool">

Performs the start (power on) action on the specified instance pool,&lt;br /&gt;which performs the action on all the instances in the pool.&lt;br /&gt;

```sql
EXEC oci.compute.instance_pools.start_instance_pool 
@instancePoolId='{{ instancePoolId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="stop_instance_pool">

Performs the stop (immediate power off) action on the specified instance pool,&lt;br /&gt;which performs the action on all the instances in the pool.&lt;br /&gt;

```sql
EXEC oci.compute.instance_pools.stop_instance_pool 
@instancePoolId='{{ instancePoolId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="termination_proceed_instance_pool_instance">

Marks an instance in an instance pool to be ready for termination.&lt;br /&gt;

```sql
EXEC oci.compute.instance_pools.termination_proceed_instance_pool_instance 
@instancePoolId='{{ instancePoolId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"instanceId": "{{ instanceId }}"
}'
;
```
</TabItem>
</Tabs>
