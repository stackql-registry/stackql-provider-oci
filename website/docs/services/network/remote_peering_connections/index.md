--- 
title: remote_peering_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - remote_peering_connections
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

Creates, updates, deletes, gets or lists a <code>remote_peering_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="remote_peering_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.remote_peering_connections" /></td></tr>
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

The RPC was retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the RPC.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the RPC.</td>
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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG that this RPC belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isCrossTenancyPeering" /></td>
    <td><code>boolean</code></td>
    <td>Whether the VCN at the other end of the peering is in a different tenancy.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The RPC's current lifecycle state. (AVAILABLE, PROVISIONING, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="peerId" /></td>
    <td><code>string</code></td>
    <td>If this RPC is peered, this value is the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the other RPC. </td>
</tr>
<tr>
    <td><CopyableCode code="peerRegionName" /></td>
    <td><code>string</code></td>
    <td>If this RPC is peered, this value is the region that contains the other RPC.  Example: `us-ashburn-1` </td>
</tr>
<tr>
    <td><CopyableCode code="peerTenancyId" /></td>
    <td><code>string</code></td>
    <td>If this RPC is peered, this value is the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the other RPC's tenancy. </td>
</tr>
<tr>
    <td><CopyableCode code="peeringStatus" /></td>
    <td><code>string</code></td>
    <td>Whether the RPC is peered with another RPC. `NEW` means the RPC has not yet been peered. `PENDING` means the peering is being established. `REVOKED` means the RPC at the other end of the peering has been deleted.  (INVALID, NEW, PENDING, PEERED, REVOKED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the RPC was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A remote peering connection (RPC) is an object on a DRG that lets the VCN that is attached&lt;br /&gt;to the DRG peer with a VCN in a different region. *Peering* means that the two VCNs can&lt;br /&gt;communicate using private IP addresses, but without the traffic traversing the internet or&lt;br /&gt;routing through your on-premises network. For more information, see&lt;br /&gt;&#91;VCN Peering&#93;(/iaas/Content/Network/Tasks/VCNpeering.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the RPC.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the RPC.</td>
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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG that this RPC belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isCrossTenancyPeering" /></td>
    <td><code>boolean</code></td>
    <td>Whether the VCN at the other end of the peering is in a different tenancy.  Example: `false` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The RPC's current lifecycle state. (AVAILABLE, PROVISIONING, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="peerId" /></td>
    <td><code>string</code></td>
    <td>If this RPC is peered, this value is the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the other RPC. </td>
</tr>
<tr>
    <td><CopyableCode code="peerRegionName" /></td>
    <td><code>string</code></td>
    <td>If this RPC is peered, this value is the region that contains the other RPC.  Example: `us-ashburn-1` </td>
</tr>
<tr>
    <td><CopyableCode code="peerTenancyId" /></td>
    <td><code>string</code></td>
    <td>If this RPC is peered, this value is the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the other RPC's tenancy. </td>
</tr>
<tr>
    <td><CopyableCode code="peeringStatus" /></td>
    <td><code>string</code></td>
    <td>Whether the RPC is peered with another RPC. `NEW` means the RPC has not yet been peered. `PENDING` means the peering is being established. `REVOKED` means the RPC at the other end of the peering has been deleted.  (INVALID, NEW, PENDING, PEERED, REVOKED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the RPC was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-remotePeeringConnectionId"><code>remotePeeringConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the specified remote peering connection's information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-drgId"><code>drgId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the remote peering connections (RPCs) for the specified DRG and compartment&lt;br /&gt;(the RPC's compartment).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-drgId"><code>drgId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new remote peering connection (RPC) for the specified DRG.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-remotePeeringConnectionId"><code>remotePeeringConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified remote peering connection (RPC).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-remotePeeringConnectionId"><code>remotePeeringConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the remote peering connection (RPC).&lt;br /&gt;&lt;br /&gt;This is an asynchronous operation; the RPC's `lifecycleState` changes to TERMINATING temporarily&lt;br /&gt;until the RPC is completely removed.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-remotePeeringConnectionId"><code>remotePeeringConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a remote peering connection (RPC) into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#connect_remote_peering_connections"><CopyableCode code="connect_remote_peering_connections" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-remotePeeringConnectionId"><code>remotePeeringConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-peerId"><code>peerId</code></a>, <a href="#parameter-peerRegionName"><code>peerRegionName</code></a></td>
    <td></td>
    <td>Connects this RPC to another one in a different region.&lt;br /&gt;&lt;br /&gt;This operation must be called by the VCN administrator who is designated as&lt;br /&gt;the *requestor* in the peering relationship. The *acceptor* must implement&lt;br /&gt;an Identity and Access Management (IAM) policy that gives the requestor permission&lt;br /&gt;to connect to RPCs in the acceptor's compartment. Without that permission, this&lt;br /&gt;operation will fail. For more information, see&lt;br /&gt;&#91;VCN Peering&#93;(/iaas/Content/Network/Tasks/VCNpeering.htm).&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-remotePeeringConnectionId">
    <td><CopyableCode code="remotePeeringConnectionId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the remote peering connection (RPC).</td>
</tr>
<tr id="parameter-drgId">
    <td><CopyableCode code="drgId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
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

Get the specified remote peering connection's information.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
drgId,
freeformTags,
isCrossTenancyPeering,
lifecycleState,
peerId,
peerRegionName,
peerTenancyId,
peeringStatus,
timeCreated
FROM oci.network.remote_peering_connections
WHERE remotePeeringConnectionId = '{{ remotePeeringConnectionId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the remote peering connections (RPCs) for the specified DRG and compartment&lt;br /&gt;(the RPC's compartment).&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
drgId,
freeformTags,
isCrossTenancyPeering,
lifecycleState,
peerId,
peerRegionName,
peerTenancyId,
peeringStatus,
timeCreated
FROM oci.network.remote_peering_connections
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND drgId = '{{ drgId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
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

Creates a new remote peering connection (RPC) for the specified DRG.&lt;br /&gt;

```sql
INSERT INTO oci.network.remote_peering_connections (
compartmentId,
definedTags,
displayName,
drgId,
freeformTags,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ drgId }}' /* required */,
'{{ freeformTags }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
drgId,
freeformTags,
isCrossTenancyPeering,
lifecycleState,
peerId,
peerRegionName,
peerTenancyId,
peeringStatus,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: remote_peering_connections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the remote_peering_connections resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the RPC.
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
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the DRG the RPC belongs to.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
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

Updates the specified remote peering connection (RPC).&lt;br /&gt;

```sql
UPDATE oci.network.remote_peering_connections
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}'
WHERE 
remotePeeringConnectionId = '{{ remotePeeringConnectionId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
drgId,
freeformTags,
isCrossTenancyPeering,
lifecycleState,
peerId,
peerRegionName,
peerTenancyId,
peeringStatus,
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

Deletes the remote peering connection (RPC).&lt;br /&gt;&lt;br /&gt;This is an asynchronous operation; the RPC's `lifecycleState` changes to TERMINATING temporarily&lt;br /&gt;until the RPC is completely removed.&lt;br /&gt;

```sql
DELETE FROM oci.network.remote_peering_connections
WHERE remotePeeringConnectionId = '{{ remotePeeringConnectionId }}' --required
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
        { label: 'connect_remote_peering_connections', value: 'connect_remote_peering_connections' }
    ]}
>
<TabItem value="change_compartment">

Moves a remote peering connection (RPC) into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.network.remote_peering_connections.change_compartment 
@remotePeeringConnectionId='{{ remotePeeringConnectionId }}' --required, 
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
<TabItem value="connect_remote_peering_connections">

Connects this RPC to another one in a different region.&lt;br /&gt;&lt;br /&gt;This operation must be called by the VCN administrator who is designated as&lt;br /&gt;the *requestor* in the peering relationship. The *acceptor* must implement&lt;br /&gt;an Identity and Access Management (IAM) policy that gives the requestor permission&lt;br /&gt;to connect to RPCs in the acceptor's compartment. Without that permission, this&lt;br /&gt;operation will fail. For more information, see&lt;br /&gt;&#91;VCN Peering&#93;(/iaas/Content/Network/Tasks/VCNpeering.htm).&lt;br /&gt;

```sql
EXEC oci.network.remote_peering_connections.connect_remote_peering_connections 
@remotePeeringConnectionId='{{ remotePeeringConnectionId }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"peerId": "{{ peerId }}", 
"peerRegionName": "{{ peerRegionName }}"
}'
;
```
</TabItem>
</Tabs>
