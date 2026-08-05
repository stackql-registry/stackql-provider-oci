--- 
title: cross_connects
hide_title: false
hide_table_of_contents: false
keywords:
  - cross_connects
  - network
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

Creates, updates, deletes, gets or lists a <code>cross_connects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cross_connects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.cross_connects" /></td></tr>
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

The cross-connect was retrieved.

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
    <td>The cross-connect's Oracle ID (OCID).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the cross-connect group.</td>
</tr>
<tr>
    <td><CopyableCode code="crossConnectGroupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the cross-connect group this cross-connect belongs to (if any). </td>
</tr>
<tr>
    <td><CopyableCode code="customerReferenceName" /></td>
    <td><code>string</code></td>
    <td>A reference name or identifier for the physical fiber connection that this cross-connect uses. </td>
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
    <td><CopyableCode code="interfaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the FastConnect interface where this cross-connect is installed. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The cross-connect's current state. (PENDING_CUSTOMER, PROVISIONING, PROVISIONED, INACTIVE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="locationName" /></td>
    <td><code>string</code></td>
    <td>The name of the FastConnect location where this cross-connect is installed. </td>
</tr>
<tr>
    <td><CopyableCode code="macsecProperties" /></td>
    <td><code>object</code></td>
    <td>Properties used for MACsec (if capable).</td>
</tr>
<tr>
    <td><CopyableCode code="ociLogicalDeviceName" /></td>
    <td><code>string</code></td>
    <td>The FastConnect device that terminates the logical connection. This device might be different than the device that terminates the physical connection. </td>
</tr>
<tr>
    <td><CopyableCode code="ociPhysicalDeviceName" /></td>
    <td><code>string</code></td>
    <td>The FastConnect device that terminates the physical connection. </td>
</tr>
<tr>
    <td><CopyableCode code="portName" /></td>
    <td><code>string</code></td>
    <td>A string identifying the meet-me room port for this cross-connect.</td>
</tr>
<tr>
    <td><CopyableCode code="portSpeedShapeName" /></td>
    <td><code>string</code></td>
    <td>The port speed for this cross-connect.  Example: `10 Gbps` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the cross-connect was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

For use with Oracle Cloud Infrastructure FastConnect. A cross-connect represents a&lt;br /&gt;physical connection between an existing network and Oracle. Customers who are colocated&lt;br /&gt;with Oracle in a FastConnect location create and use cross-connects. For more&lt;br /&gt;information, see &#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;&lt;br /&gt;Oracle recommends you create each cross-connect in a&lt;br /&gt;&#91;CrossConnectGroup&#93;(#/en/iaas/latest/CrossConnectGroup) so you can use link aggregation&lt;br /&gt;with the connection.&lt;br /&gt;&lt;br /&gt;**Note:** If you're a provider who is setting up a physical connection to Oracle so customers&lt;br /&gt;can use FastConnect over the connection, be aware that your connection is modeled the&lt;br /&gt;same way as a colocated customer's (with `CrossConnect` and `CrossConnectGroup` objects, and so on).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The cross-connect's Oracle ID (OCID).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the cross-connect group.</td>
</tr>
<tr>
    <td><CopyableCode code="crossConnectGroupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the cross-connect group this cross-connect belongs to (if any). </td>
</tr>
<tr>
    <td><CopyableCode code="customerReferenceName" /></td>
    <td><code>string</code></td>
    <td>A reference name or identifier for the physical fiber connection that this cross-connect uses. </td>
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
    <td><CopyableCode code="interfaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the FastConnect interface where this cross-connect is installed. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The cross-connect's current state. (PENDING_CUSTOMER, PROVISIONING, PROVISIONED, INACTIVE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="locationName" /></td>
    <td><code>string</code></td>
    <td>The name of the FastConnect location where this cross-connect is installed. </td>
</tr>
<tr>
    <td><CopyableCode code="macsecProperties" /></td>
    <td><code>object</code></td>
    <td>Properties used for MACsec (if capable).</td>
</tr>
<tr>
    <td><CopyableCode code="ociLogicalDeviceName" /></td>
    <td><code>string</code></td>
    <td>The FastConnect device that terminates the logical connection. This device might be different than the device that terminates the physical connection. </td>
</tr>
<tr>
    <td><CopyableCode code="ociPhysicalDeviceName" /></td>
    <td><code>string</code></td>
    <td>The FastConnect device that terminates the physical connection. </td>
</tr>
<tr>
    <td><CopyableCode code="portName" /></td>
    <td><code>string</code></td>
    <td>A string identifying the meet-me room port for this cross-connect.</td>
</tr>
<tr>
    <td><CopyableCode code="portSpeedShapeName" /></td>
    <td><code>string</code></td>
    <td>The port speed for this cross-connect.  Example: `10 Gbps` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the cross-connect was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-crossConnectId"><code>crossConnectId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified cross-connect's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-crossConnectGroupId"><code>crossConnectGroupId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the cross-connects in the specified compartment. You can filter the list&lt;br /&gt;by specifying the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of a cross-connect group.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-locationName"><code>locationName</code></a>, <a href="#parameter-portSpeedShapeName"><code>portSpeedShapeName</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new cross-connect. Oracle recommends you create each cross-connect in a&lt;br /&gt;&#91;CrossConnectGroup&#93;(#/en/iaas/latest/CrossConnectGroup) so you can use link aggregation&lt;br /&gt;with the connection.&lt;br /&gt;&lt;br /&gt;After creating the `CrossConnect` object, you need to go the FastConnect location&lt;br /&gt;and request to have the physical cable installed. For more information, see&lt;br /&gt;&#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the&lt;br /&gt;compartment where you want the cross-connect to reside. If you're&lt;br /&gt;not sure which compartment to use, put the cross-connect in the&lt;br /&gt;same compartment with your VCN. For more information about&lt;br /&gt;compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the cross-connect.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-crossConnectId"><code>crossConnectId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified cross-connect.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-crossConnectId"><code>crossConnectId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified cross-connect. It must not be mapped to a&lt;br /&gt;&#91;VirtualCircuit&#93;(#/en/iaas/latest/VirtualCircuit/).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-crossConnectId"><code>crossConnectId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a cross-connect into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
<tr id="parameter-crossConnectId">
    <td><CopyableCode code="crossConnectId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the cross-connect.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-crossConnectGroupId">
    <td><CopyableCode code="crossConnectGroupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the cross-connect group.</td>
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
    <td>A filter to return only resources that match the specified lifecycle state. The value is case insensitive. </td>
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

Gets the specified cross-connect's information.

```sql
SELECT
id,
compartmentId,
crossConnectGroupId,
customerReferenceName,
definedTags,
displayName,
freeformTags,
interfaceName,
lifecycleState,
locationName,
macsecProperties,
ociLogicalDeviceName,
ociPhysicalDeviceName,
portName,
portSpeedShapeName,
timeCreated
FROM oci.network.cross_connects
WHERE crossConnectId = '{{ crossConnectId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the cross-connects in the specified compartment. You can filter the list&lt;br /&gt;by specifying the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of a cross-connect group.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
crossConnectGroupId,
customerReferenceName,
definedTags,
displayName,
freeformTags,
interfaceName,
lifecycleState,
locationName,
macsecProperties,
ociLogicalDeviceName,
ociPhysicalDeviceName,
portName,
portSpeedShapeName,
timeCreated
FROM oci.network.cross_connects
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND crossConnectGroupId = '{{ crossConnectGroupId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND displayName = '{{ displayName }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
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

Creates a new cross-connect. Oracle recommends you create each cross-connect in a&lt;br /&gt;&#91;CrossConnectGroup&#93;(#/en/iaas/latest/CrossConnectGroup) so you can use link aggregation&lt;br /&gt;with the connection.&lt;br /&gt;&lt;br /&gt;After creating the `CrossConnect` object, you need to go the FastConnect location&lt;br /&gt;and request to have the physical cable installed. For more information, see&lt;br /&gt;&#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the&lt;br /&gt;compartment where you want the cross-connect to reside. If you're&lt;br /&gt;not sure which compartment to use, put the cross-connect in the&lt;br /&gt;same compartment with your VCN. For more information about&lt;br /&gt;compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the cross-connect.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;

```sql
INSERT INTO oci.network.cross_connects (
compartmentId,
crossConnectGroupId,
customerReferenceName,
definedTags,
displayName,
farCrossConnectOrCrossConnectGroupId,
freeformTags,
interfaceName,
locationName,
macsecProperties,
nearCrossConnectOrCrossConnectGroupId,
ociPhysicalDeviceName,
portSpeedShapeName,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ crossConnectGroupId }}',
'{{ customerReferenceName }}',
'{{ definedTags }}',
'{{ displayName }}',
'{{ farCrossConnectOrCrossConnectGroupId }}',
'{{ freeformTags }}',
'{{ interfaceName }}',
'{{ locationName }}' /* required */,
'{{ macsecProperties }}',
'{{ nearCrossConnectOrCrossConnectGroupId }}',
'{{ ociPhysicalDeviceName }}',
'{{ portSpeedShapeName }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
crossConnectGroupId,
customerReferenceName,
definedTags,
displayName,
freeformTags,
interfaceName,
lifecycleState,
locationName,
macsecProperties,
ociLogicalDeviceName,
ociPhysicalDeviceName,
portName,
portSpeedShapeName,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cross_connects
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cross_connects resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the cross-connect.
    - name: crossConnectGroupId
      value: "{{ crossConnectGroupId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the cross-connect group to put this cross-connect in.
    - name: customerReferenceName
      value: "{{ customerReferenceName }}"
      description: |
        A reference name or identifier for the physical fiber connection that this cross-connect
        uses.
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
    - name: farCrossConnectOrCrossConnectGroupId
      value: "{{ farCrossConnectOrCrossConnectGroupId }}"
      description: |
        If you already have an existing cross-connect or cross-connect group at this FastConnect
        location, and you want this new cross-connect to be on a different router (for the
        purposes of redundancy), provide the [OCID](/iaas/Content/General/Concepts/identifiers.htm) of that existing cross-connect or
        cross-connect group.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: interfaceName
      value: "{{ interfaceName }}"
      description: |
        The name of the FastConnect interface where this cross-connect is installed.
    - name: locationName
      value: "{{ locationName }}"
      description: |
        The name of the FastConnect location where this cross-connect will be installed.
        To get a list of the available locations, see
        [ListCrossConnectLocations](#/en/iaas/latest/CrossConnectLocation/ListCrossConnectLocations).
        Example: \`CyrusOne, Chandler, AZ\`
    - name: macsecProperties
      description: |
        Properties used to configure MACsec (if capable).
      value:
        encryptionCipher: "{{ encryptionCipher }}"
        isUnprotectedTrafficAllowed: {{ isUnprotectedTrafficAllowed }}
        primaryKey:
          connectivityAssociationKeySecretId: "{{ connectivityAssociationKeySecretId }}"
          connectivityAssociationNameSecretId: "{{ connectivityAssociationNameSecretId }}"
        state: "{{ state }}"
    - name: nearCrossConnectOrCrossConnectGroupId
      value: "{{ nearCrossConnectOrCrossConnectGroupId }}"
      description: |
        If you already have an existing cross-connect or cross-connect group at this FastConnect
        location, and you want this new cross-connect to be on the same router, provide the
        [OCID](/iaas/Content/General/Concepts/identifiers.htm) of that existing cross-connect or cross-connect group.
    - name: ociPhysicalDeviceName
      value: "{{ ociPhysicalDeviceName }}"
      description: |
        The name of the FastConnect device where this cross-connect is installed.
    - name: portSpeedShapeName
      value: "{{ portSpeedShapeName }}"
      description: |
        The port speed for this cross-connect. To get a list of the available port speeds, see
        [ListCrossConnectPortSpeedShapes](#/en/iaas/latest/CrossConnectPortSpeedShape/ListCrossconnectPortSpeedShapes).
        Example: \`10 Gbps\`
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

Updates the specified cross-connect.

```sql
UPDATE oci.network.cross_connects
SET 
customerReferenceName = '{{ customerReferenceName }}',
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
isActive = {{ isActive }},
macsecProperties = '{{ macsecProperties }}'
WHERE 
crossConnectId = '{{ crossConnectId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
crossConnectGroupId,
customerReferenceName,
definedTags,
displayName,
freeformTags,
interfaceName,
lifecycleState,
locationName,
macsecProperties,
ociLogicalDeviceName,
ociPhysicalDeviceName,
portName,
portSpeedShapeName,
timeCreated;
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

Deletes the specified cross-connect. It must not be mapped to a&lt;br /&gt;&#91;VirtualCircuit&#93;(#/en/iaas/latest/VirtualCircuit/).&lt;br /&gt;

```sql
DELETE FROM oci.network.cross_connects
WHERE crossConnectId = '{{ crossConnectId }}' --required
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
        { label: 'change_compartment', value: 'change_compartment' }
    ]}
>
<TabItem value="change_compartment">

Moves a cross-connect into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.network.cross_connects.change_compartment 
@crossConnectId='{{ crossConnectId }}' --required, 
@region='{{ region }}' --required, 
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
