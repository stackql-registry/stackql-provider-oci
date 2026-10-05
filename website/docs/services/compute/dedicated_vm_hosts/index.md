--- 
title: dedicated_vm_hosts
hide_title: false
hide_table_of_contents: false
keywords:
  - dedicated_vm_hosts
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

Creates, updates, deletes, gets or lists a <code>dedicated_vm_hosts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dedicated_vm_hosts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.dedicated_vm_hosts" /></td></tr>
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

The dedicated virtual machine host was retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the dedicated VM host.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain the dedicated virtual machine host is running in.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="capacityBins" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="capacityConfig" /></td>
    <td><code>string</code></td>
    <td>The capacity configuration selected to be configured for the Dedicated Virtual Machine host.  Run &#91;ListDedicatedVmHostShapes&#93;(#/en/iaas/latest/DedicatedVmHostShapeSummary/ListDedicatedVmHostShapes) API to see details of this capacity configuration. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the dedicated virtual machine host.</td>
</tr>
<tr>
    <td><CopyableCode code="computeBareMetalHostId" /></td>
    <td><code>string</code></td>
    <td>The compute bare metal host OCID of the dedicated virtual machine host. </td>
</tr>
<tr>
    <td><CopyableCode code="dedicatedVmHostShape" /></td>
    <td><code>string</code></td>
    <td>The dedicated virtual machine host shape. The shape determines the number of CPUs and other resources available for VMs. </td>
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
    <td><CopyableCode code="faultDomain" /></td>
    <td><code>string</code></td>
    <td>The fault domain for the dedicated virtual machine host's assigned instances. For more information, see &#91;Fault Domains&#93;(/iaas/Content/General/Concepts/regions.htm#fault).  If you do not specify the fault domain, the system selects one for you. To change the fault domain for a dedicated virtual machine host, delete it, and then create a new dedicated virtual machine host in the preferred fault domain.  To get a list of fault domains, use the `ListFaultDomains` operation in the &#91;Identity and Access Management Service API&#93;(/iaas/api/#/en/identity/20160918/).  Example: `FAULT-DOMAIN-1` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isBurstable" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the Dedicated Virtual Machine Host (DVMH) is to running only Burstable VMs. If `true`, only Burstable VMs can be launched. If `false`, Burstable VMs cannot be launched. </td>
</tr>
<tr>
    <td><CopyableCode code="isMemoryEncryptionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the Dedicated Virtual Machine Host (DVMH) is restricted to running only Confidential VMs. If `true`, only Confidential VMs can be launched. If `false`, Confidential VMs cannot be launched. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the dedicated VM host.  (CREATING, ACTIVE, UPDATING, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="placementConstraintDetails" /></td>
    <td><code>object</code></td>
    <td>The details for providing placement constraints. </td>
</tr>
<tr>
    <td><CopyableCode code="remainingMemoryInGBs" /></td>
    <td><code>number (float)</code></td>
    <td>The remaining memory of the dedicated VM host, in GBs. </td>
</tr>
<tr>
    <td><CopyableCode code="remainingOcpus" /></td>
    <td><code>number (float)</code></td>
    <td>The available OCPUs of the dedicated VM host. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the dedicated VM host was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="totalMemoryInGBs" /></td>
    <td><code>number (float)</code></td>
    <td>The total memory of the dedicated VM host, in GBs. </td>
</tr>
<tr>
    <td><CopyableCode code="totalOcpus" /></td>
    <td><code>number (float)</code></td>
    <td>The total OCPUs of the dedicated VM host. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A dedicated virtual machine (VM) host lets you host multiple instances on a dedicated server that is not shared with other tenancies.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the dedicated VM host. </td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain the dedicated VM host is running in.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the dedicated VM host. </td>
</tr>
<tr>
    <td><CopyableCode code="dedicatedVmHostShape" /></td>
    <td><code>string</code></td>
    <td>The shape of the dedicated VM host. The shape determines the number of CPUs and other resources available for VMs. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="faultDomain" /></td>
    <td><code>string</code></td>
    <td>The fault domain for the dedicated VM host's assigned instances. For more information, see Fault Domains.  If you do not specify the fault domain, the system selects one for you. To change the fault domain for a dedicated VM host, delete it and create a new dedicated VM host in the preferred fault domain.  To get a list of fault domains, use the ListFaultDomains operation in the Identity and Access Management Service API.  Example: `FAULT-DOMAIN-1` </td>
</tr>
<tr>
    <td><CopyableCode code="isBurstable" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the Dedicated Virtual Machine Host (DVMH) is to running only Burstable VMs. If `true`, only Burstable VMs can be launched. If `false`, Burstable VMs cannot be launched. </td>
</tr>
<tr>
    <td><CopyableCode code="isMemoryEncryptionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the Dedicated Virtual Machine Host is restricted to running only Confidential VMs. If `true`, only Confidential VMs can be launched. If `false`, Confidential VMs cannot be launched. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the dedicated VM host.  (CREATING, ACTIVE, UPDATING, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="remainingMemoryInGBs" /></td>
    <td><code>number (float)</code></td>
    <td>The current available memory of the dedicated VM host, in GBs. </td>
</tr>
<tr>
    <td><CopyableCode code="remainingOcpus" /></td>
    <td><code>number (float)</code></td>
    <td>The current available OCPUs of the dedicated VM host. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the dedicated VM host was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="totalMemoryInGBs" /></td>
    <td><code>number (float)</code></td>
    <td>The current total memory of the dedicated VM host, in GBs. </td>
</tr>
<tr>
    <td><CopyableCode code="totalOcpus" /></td>
    <td><code>number (float)</code></td>
    <td>The current total OCPUs of the dedicated VM host. </td>
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
    <td><a href="#parameter-dedicatedVmHostId"><code>dedicatedVmHostId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified dedicated virtual machine host.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-instanceShapeName"><code>instanceShapeName</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-remainingMemoryInGBsGreaterThanOrEqualTo"><code>remainingMemoryInGBsGreaterThanOrEqualTo</code></a>, <a href="#parameter-remainingOcpusGreaterThanOrEqualTo"><code>remainingOcpusGreaterThanOrEqualTo</code></a>, <a href="#parameter-isMemoryEncryptionEnabled"><code>isMemoryEncryptionEnabled</code></a></td>
    <td>Returns the list of dedicated virtual machine hosts that match the specified criteria in the specified compartment.&lt;br /&gt;&lt;br /&gt;You can limit the list by specifying a dedicated virtual machine host display name. The list will include all the identically-named&lt;br /&gt;dedicated virtual machine hosts in the compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-dedicatedVmHostShape"><code>dedicatedVmHostShape</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new dedicated virtual machine host in the specified compartment and the specified availability domain.&lt;br /&gt;Dedicated virtual machine hosts enable you to run your Compute virtual machine (VM) instances on dedicated servers&lt;br /&gt;that are a single tenant and not shared with other customers.&lt;br /&gt;For more information, see &#91;Dedicated Virtual Machine Hosts&#93;(/iaas/Content/Compute/Concepts/dedicatedvmhosts.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dedicatedVmHostId"><code>dedicatedVmHostId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Updates the displayName, freeformTags, and definedTags attributes for the specified dedicated virtual machine host.&lt;br /&gt;If an attribute value is not included, it will not be updated.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dedicatedVmHostId"><code>dedicatedVmHostId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the specified dedicated virtual machine host.&lt;br /&gt;&lt;br /&gt;If any VM instances are assigned to the dedicated virtual machine host,&lt;br /&gt;the delete operation will fail and the service will return a 409 response code.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-dedicatedVmHostId"><code>dedicatedVmHostId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a dedicated virtual machine host from one compartment to another.</td>
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
<tr id="parameter-dedicatedVmHostId">
    <td><CopyableCode code="dedicatedVmHostId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the dedicated VM host.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain.  Example: `Uocm:PHX-AD-1` </td>
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
<tr id="parameter-instanceShapeName">
    <td><CopyableCode code="instanceShapeName" /></td>
    <td><code>string</code></td>
    <td>The name for the instance's shape. </td>
</tr>
<tr id="parameter-isMemoryEncryptionEnabled">
    <td><CopyableCode code="isMemoryEncryptionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A filter to return only confidential Dedicated VM hosts (DVMH) or confidential VM instances on DVMH. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given lifecycle state.</td>
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
<tr id="parameter-remainingMemoryInGBsGreaterThanOrEqualTo">
    <td><CopyableCode code="remainingMemoryInGBsGreaterThanOrEqualTo" /></td>
    <td><code>number (float)</code></td>
    <td>The remaining memory of the dedicated VM host, in GBs.</td>
</tr>
<tr id="parameter-remainingOcpusGreaterThanOrEqualTo">
    <td><CopyableCode code="remainingOcpusGreaterThanOrEqualTo" /></td>
    <td><code>number (float)</code></td>
    <td>The available OCPUs of the dedicated VM host.</td>
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

Gets information about the specified dedicated virtual machine host.

```sql
SELECT
id,
availabilityDomain,
capacityBins,
capacityConfig,
compartmentId,
computeBareMetalHostId,
dedicatedVmHostShape,
definedTags,
displayName,
faultDomain,
freeformTags,
isBurstable,
isMemoryEncryptionEnabled,
lifecycleState,
placementConstraintDetails,
remainingMemoryInGBs,
remainingOcpus,
timeCreated,
totalMemoryInGBs,
totalOcpus
FROM oci.compute.dedicated_vm_hosts
WHERE dedicatedVmHostId = '{{ dedicatedVmHostId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Returns the list of dedicated virtual machine hosts that match the specified criteria in the specified compartment.&lt;br /&gt;&lt;br /&gt;You can limit the list by specifying a dedicated virtual machine host display name. The list will include all the identically-named&lt;br /&gt;dedicated virtual machine hosts in the compartment.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
compartmentId,
dedicatedVmHostShape,
displayName,
faultDomain,
isBurstable,
isMemoryEncryptionEnabled,
lifecycleState,
remainingMemoryInGBs,
remainingOcpus,
timeCreated,
totalMemoryInGBs,
totalOcpus
FROM oci.compute.dedicated_vm_hosts
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND availabilityDomain = '{{ availabilityDomain }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
AND instanceShapeName = '{{ instanceShapeName }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND remainingMemoryInGBsGreaterThanOrEqualTo = '{{ remainingMemoryInGBsGreaterThanOrEqualTo }}'
AND remainingOcpusGreaterThanOrEqualTo = '{{ remainingOcpusGreaterThanOrEqualTo }}'
AND isMemoryEncryptionEnabled = '{{ isMemoryEncryptionEnabled }}'
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

Creates a new dedicated virtual machine host in the specified compartment and the specified availability domain.&lt;br /&gt;Dedicated virtual machine hosts enable you to run your Compute virtual machine (VM) instances on dedicated servers&lt;br /&gt;that are a single tenant and not shared with other customers.&lt;br /&gt;For more information, see &#91;Dedicated Virtual Machine Hosts&#93;(/iaas/Content/Compute/Concepts/dedicatedvmhosts.htm).&lt;br /&gt;

```sql
INSERT INTO oci.compute.dedicated_vm_hosts (
availabilityDomain,
capacityConfig,
compartmentId,
dedicatedVmHostShape,
definedTags,
displayName,
faultDomain,
freeformTags,
isBaselineOcpuUtilizationEnabled,
isMemoryEncryptionEnabled,
placementConstraintDetails,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ availabilityDomain }}' /* required */,
'{{ capacityConfig }}',
'{{ compartmentId }}' /* required */,
'{{ dedicatedVmHostShape }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ faultDomain }}',
'{{ freeformTags }}',
{{ isBaselineOcpuUtilizationEnabled }},
{{ isMemoryEncryptionEnabled }},
'{{ placementConstraintDetails }}',
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
availabilityDomain,
capacityBins,
capacityConfig,
compartmentId,
computeBareMetalHostId,
dedicatedVmHostShape,
definedTags,
displayName,
faultDomain,
freeformTags,
isBurstable,
isMemoryEncryptionEnabled,
lifecycleState,
placementConstraintDetails,
remainingMemoryInGBs,
remainingOcpus,
timeCreated,
totalMemoryInGBs,
totalOcpus
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dedicated_vm_hosts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dedicated_vm_hosts resource.
    - name: availabilityDomain
      value: "{{ availabilityDomain }}"
      description: |
        The availability domain of the dedicated virtual machine host.
        Example: \`Uocm:PHX-AD-1\`
    - name: capacityConfig
      value: "{{ capacityConfig }}"
      description: |
        The capacity configuration selected to be configured for the Dedicated Virtual Machine host.
        Run [ListDedicatedVmHostShapes](#/en/iaas/latest/DedicatedVmHostShapeSummary/ListDedicatedVmHostShapes) API first to see the capacity configuration options.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment.
    - name: dedicatedVmHostShape
      value: "{{ dedicatedVmHostShape }}"
      description: |
        The dedicated virtual machine host shape. The shape determines the number of CPUs and
        other resources available for VM instances launched on the dedicated virtual machine host.
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
    - name: faultDomain
      value: "{{ faultDomain }}"
      description: |
        The fault domain for the dedicated virtual machine host's assigned instances.
        For more information, see [Fault Domains](/iaas/Content/General/Concepts/regions.htm#fault).
        If you do not specify the fault domain, the system selects one for you. To change the fault domain for a dedicated virtual machine host,
        delete it and create a new dedicated virtual machine host in the preferred fault domain.
        To get a list of fault domains, use the \`ListFaultDomains\` operation in
        the [Identity and Access Management Service API](/iaas/api/#/en/identity/20160918/).
        Example: \`FAULT-DOMAIN-1\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: isBaselineOcpuUtilizationEnabled
      value: {{ isBaselineOcpuUtilizationEnabled }}
      description: |
        Specifies if the Dedicated Virtual Machine Host (DVMH) is restricted to running only Burstable VMs. If \`true\`, only Burstable VMs can be launched. If \`false\`, Burstable VMs cannot be launched.
      default: false
    - name: isMemoryEncryptionEnabled
      value: {{ isMemoryEncryptionEnabled }}
      description: |
        Specifies if the Dedicated Virtual Machine Host (DVMH) is restricted to running only Confidential VMs. If \`true\`, only Confidential VMs can be launched. If \`false\`, Confidential VMs cannot be launched.
      default: false
    - name: placementConstraintDetails
      description: |
        The details for providing placement constraints.
      value:
        type: "{{ type }}"
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
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

Updates the displayName, freeformTags, and definedTags attributes for the specified dedicated virtual machine host.&lt;br /&gt;If an attribute value is not included, it will not be updated.&lt;br /&gt;

```sql
UPDATE oci.compute.dedicated_vm_hosts
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}'
WHERE 
dedicatedVmHostId = '{{ dedicatedVmHostId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
AND opc-retry-token = '{{ opc-retry-token}}'
RETURNING
id,
availabilityDomain,
capacityBins,
capacityConfig,
compartmentId,
computeBareMetalHostId,
dedicatedVmHostShape,
definedTags,
displayName,
faultDomain,
freeformTags,
isBurstable,
isMemoryEncryptionEnabled,
lifecycleState,
placementConstraintDetails,
remainingMemoryInGBs,
remainingOcpus,
timeCreated,
totalMemoryInGBs,
totalOcpus;
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

Deletes the specified dedicated virtual machine host.&lt;br /&gt;&lt;br /&gt;If any VM instances are assigned to the dedicated virtual machine host,&lt;br /&gt;the delete operation will fail and the service will return a 409 response code.&lt;br /&gt;

```sql
DELETE FROM oci.compute.dedicated_vm_hosts
WHERE dedicatedVmHostId = '{{ dedicatedVmHostId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_compartment"
    values={[
        { label: 'change_compartment', value: 'change_compartment' }
    ]}
>
<TabItem value="change_compartment">

Moves a dedicated virtual machine host from one compartment to another.

```sql
EXEC oci.compute.dedicated_vm_hosts.change_compartment 
@dedicatedVmHostId='{{ dedicatedVmHostId }}' --required, 
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
</Tabs>
