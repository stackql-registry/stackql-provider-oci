--- 
title: drg_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - drg_attachments
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

Creates, updates, deletes, gets or lists a <code>drg_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="drg_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.drg_attachments" /></td></tr>
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

The `DrgAttachment` was retrieved.

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
    <td>The DRG attachment's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the DRG attachment.</td>
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
    <td><CopyableCode code="drgId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG.</td>
</tr>
<tr>
    <td><CopyableCode code="drgRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG route table that is assigned to this attachment.  The DRG route table manages traffic inside the DRG. </td>
</tr>
<tr>
    <td><CopyableCode code="exportDrgRouteDistributionId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the export route distribution used to specify how routes in the assigned DRG route table are advertised to the attachment. If this value is null, no routes are advertised through this attachment. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isCrossTenancy" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DRG attachment and attached network live in a different tenancy than the DRG.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The DRG attachment's current state. (ATTACHING, ATTACHED, DETACHING, DETACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="networkDetails" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table the DRG attachment is using.  For information about why you would associate a route table with a DRG attachment, see:    * &#91;Transit Routing: Access to Multiple VCNs in Same Region&#93;(/iaas/Content/Network/Tasks/transitrouting.htm)   * &#91;Transit Routing: Private Access to Oracle Services&#93;(/iaas/Content/Network/Tasks/transitroutingoracleservices.htm)  This field is deprecated. Instead, use the `networkDetails` field to view the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the attached resource. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the DRG attachment was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN. This field is deprecated. Instead, use the `networkDetails` field to view the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the attached resource. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A DRG attachment serves as a link between a DRG and a network resource. A DRG can be attached to a VCN,&lt;br /&gt;IPSec tunnel, remote peering connection, or virtual circuit.&lt;br /&gt;&lt;br /&gt;For more information, see &#91;Overview of the Networking Service&#93;(/iaas/Content/Network/Concepts/overview.htm).&lt;br /&gt;

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
    <td>The DRG attachment's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the DRG attachment.</td>
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
    <td><CopyableCode code="drgId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG.</td>
</tr>
<tr>
    <td><CopyableCode code="drgRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG route table that is assigned to this attachment.  The DRG route table manages traffic inside the DRG. </td>
</tr>
<tr>
    <td><CopyableCode code="exportDrgRouteDistributionId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the export route distribution used to specify how routes in the assigned DRG route table are advertised to the attachment. If this value is null, no routes are advertised through this attachment. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isCrossTenancy" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DRG attachment and attached network live in a different tenancy than the DRG.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The DRG attachment's current state. (ATTACHING, ATTACHED, DETACHING, DETACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="networkDetails" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="routeTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route table the DRG attachment is using.  For information about why you would associate a route table with a DRG attachment, see:    * &#91;Transit Routing: Access to Multiple VCNs in Same Region&#93;(/iaas/Content/Network/Tasks/transitrouting.htm)   * &#91;Transit Routing: Private Access to Oracle Services&#93;(/iaas/Content/Network/Tasks/transitroutingoracleservices.htm)  This field is deprecated. Instead, use the `networkDetails` field to view the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the attached resource. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the DRG attachment was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN. This field is deprecated. Instead, use the `networkDetails` field to view the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the attached resource. </td>
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
    <td><a href="#parameter-drgAttachmentId"><code>drgAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the `DrgAttachment` resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-drgId"><code>drgId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-networkId"><code>networkId</code></a>, <a href="#parameter-attachmentType"><code>attachmentType</code></a>, <a href="#parameter-drgRouteTableId"><code>drgRouteTableId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the `DrgAttachment` resource for the specified compartment. You can filter the&lt;br /&gt;results by DRG, attached network, attachment type, DRG route table or&lt;br /&gt;VCN route table.&lt;br /&gt;&lt;br /&gt;The LIST API lists DRG attachments by attachment type. It will default to list VCN attachments,&lt;br /&gt;but you may request to list ALL attachments of ALL types.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-drgId"><code>drgId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Attaches the specified DRG to the specified network resource. A VCN can be attached to only one DRG&lt;br /&gt;at a time, but a DRG can be attached to more than one VCN. The response includes a `DrgAttachment`&lt;br /&gt;object with its own &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). For more information about DRGs, see&lt;br /&gt;&#91;Dynamic Routing Gateways (DRGs)&#93;(/iaas/Content/Network/Tasks/managingDRGs.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the attachment, otherwise a default is provided.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;For the purposes of access control, the DRG attachment is automatically placed into the currently selected compartment.&lt;br /&gt;For more information about compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-drgAttachmentId"><code>drgAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the display name and routing information for the specified `DrgAttachment`.&lt;br /&gt;Avoid entering confidential information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-drgAttachmentId"><code>drgAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Detaches a DRG from a network resource by deleting the corresponding `DrgAttachment` resource. This is an asynchronous&lt;br /&gt;operation. The attachment's `lifecycleState` will temporarily change to DETACHING until the attachment&lt;br /&gt;is completely removed.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_export_drg_route_distribution"><CopyableCode code="remove_export_drg_route_distribution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-drgAttachmentId"><code>drgAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Removes the export route distribution from the DRG attachment so no routes are advertised to it.&lt;br /&gt;</td>
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
<tr id="parameter-drgAttachmentId">
    <td><CopyableCode code="drgAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG attachment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-attachmentType">
    <td><CopyableCode code="attachmentType" /></td>
    <td><code>string</code></td>
    <td>The type for the network resource attached to the DRG.</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given display name exactly. </td>
</tr>
<tr id="parameter-drgId">
    <td><CopyableCode code="drgId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG.</td>
</tr>
<tr id="parameter-drgRouteTableId">
    <td><CopyableCode code="drgRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG route table assigned to the DRG attachment.</td>
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
<tr id="parameter-networkId">
    <td><CopyableCode code="networkId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the resource (virtual circuit, VCN, IPSec tunnel, or remote peering connection) attached to the DRG.</td>
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
<tr id="parameter-vcnId">
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN.</td>
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

Gets the `DrgAttachment` resource.

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
drgId,
drgRouteTableId,
exportDrgRouteDistributionId,
freeformTags,
isCrossTenancy,
lifecycleState,
networkDetails,
routeTableId,
timeCreated,
vcnId
FROM oci.network.drg_attachments
WHERE drgAttachmentId = '{{ drgAttachmentId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the `DrgAttachment` resource for the specified compartment. You can filter the&lt;br /&gt;results by DRG, attached network, attachment type, DRG route table or&lt;br /&gt;VCN route table.&lt;br /&gt;&lt;br /&gt;The LIST API lists DRG attachments by attachment type. It will default to list VCN attachments,&lt;br /&gt;but you may request to list ALL attachments of ALL types.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
drgId,
drgRouteTableId,
exportDrgRouteDistributionId,
freeformTags,
isCrossTenancy,
lifecycleState,
networkDetails,
routeTableId,
timeCreated,
vcnId
FROM oci.network.drg_attachments
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND vcnId = '{{ vcnId }}'
AND drgId = '{{ drgId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND networkId = '{{ networkId }}'
AND attachmentType = '{{ attachmentType }}'
AND drgRouteTableId = '{{ drgRouteTableId }}'
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

Attaches the specified DRG to the specified network resource. A VCN can be attached to only one DRG&lt;br /&gt;at a time, but a DRG can be attached to more than one VCN. The response includes a `DrgAttachment`&lt;br /&gt;object with its own &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). For more information about DRGs, see&lt;br /&gt;&#91;Dynamic Routing Gateways (DRGs)&#93;(/iaas/Content/Network/Tasks/managingDRGs.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the attachment, otherwise a default is provided.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;For the purposes of access control, the DRG attachment is automatically placed into the currently selected compartment.&lt;br /&gt;For more information about compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;

```sql
INSERT INTO oci.network.drg_attachments (
definedTags,
displayName,
drgId,
drgRouteTableId,
freeformTags,
networkDetails,
routeTableId,
vcnId,
region,
opc-retry-token
)
SELECT 
'{{ definedTags }}',
'{{ displayName }}',
'{{ drgId }}' /* required */,
'{{ drgRouteTableId }}',
'{{ freeformTags }}',
'{{ networkDetails }}',
'{{ routeTableId }}',
'{{ vcnId }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
drgId,
drgRouteTableId,
exportDrgRouteDistributionId,
freeformTags,
isCrossTenancy,
lifecycleState,
networkDetails,
routeTableId,
timeCreated,
vcnId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: drg_attachments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the drg_attachments resource.
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
    - name: drgId
      value: "{{ drgId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the DRG.
    - name: drgRouteTableId
      value: "{{ drgRouteTableId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the DRG route table that is assigned to this attachment.
        The DRG route table manages traffic inside the DRG.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: networkDetails
      value:
        id: "{{ id }}"
        type: "{{ type }}"
    - name: routeTableId
      value: "{{ routeTableId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the route table used by the DRG attachment.
        If you don't specify a route table here, the DRG attachment is created without an associated route
        table. The Networking service does NOT automatically associate the attached VCN's default route table
        with the DRG attachment.
        For information about why you would associate a route table with a DRG attachment, see:
        * [Transit Routing: Access to Multiple VCNs in Same Region](/iaas/Content/Network/Tasks/transitrouting.htm)
        * [Transit Routing: Private Access to Oracle Services](/iaas/Content/Network/Tasks/transitroutingoracleservices.htm)
        This field is deprecated. Instead, use the networkDetails field to specify the VCN route table for this attachment.
    - name: vcnId
      value: "{{ vcnId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the VCN.
        This field is deprecated. Instead, use the \`networkDetails\` field to specify the [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the attached resource.
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

Updates the display name and routing information for the specified `DrgAttachment`.&lt;br /&gt;Avoid entering confidential information.&lt;br /&gt;

```sql
UPDATE oci.network.drg_attachments
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
drgRouteTableId = '{{ drgRouteTableId }}',
exportDrgRouteDistributionId = '{{ exportDrgRouteDistributionId }}',
freeformTags = '{{ freeformTags }}',
networkDetails = '{{ networkDetails }}',
routeTableId = '{{ routeTableId }}'
WHERE 
drgAttachmentId = '{{ drgAttachmentId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
drgId,
drgRouteTableId,
exportDrgRouteDistributionId,
freeformTags,
isCrossTenancy,
lifecycleState,
networkDetails,
routeTableId,
timeCreated,
vcnId;
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

Detaches a DRG from a network resource by deleting the corresponding `DrgAttachment` resource. This is an asynchronous&lt;br /&gt;operation. The attachment's `lifecycleState` will temporarily change to DETACHING until the attachment&lt;br /&gt;is completely removed.&lt;br /&gt;

```sql
DELETE FROM oci.network.drg_attachments
WHERE drgAttachmentId = '{{ drgAttachmentId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_export_drg_route_distribution"
    values={[
        { label: 'remove_export_drg_route_distribution', value: 'remove_export_drg_route_distribution' }
    ]}
>
<TabItem value="remove_export_drg_route_distribution">

Removes the export route distribution from the DRG attachment so no routes are advertised to it.&lt;br /&gt;

```sql
EXEC oci.network.drg_attachments.remove_export_drg_route_distribution 
@drgAttachmentId='{{ drgAttachmentId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
</Tabs>
