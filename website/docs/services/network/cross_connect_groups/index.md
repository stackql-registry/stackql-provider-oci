--- 
title: cross_connect_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - cross_connect_groups
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

Creates, updates, deletes, gets or lists a <code>cross_connect_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cross_connect_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.cross_connect_groups" /></td></tr>
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

The cross-connect group was retrieved.

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
    <td>The cross-connect group's Oracle ID (OCID).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the cross-connect group.</td>
</tr>
<tr>
    <td><CopyableCode code="customerReferenceName" /></td>
    <td><code>string</code></td>
    <td>A reference name or identifier for the physical fiber connection that this cross-connect group uses. </td>
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
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The cross-connect group's current state. (PROVISIONING, PROVISIONED, INACTIVE, TERMINATING, TERMINATED)</td>
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
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123; "orcl-cloud": &#123; "free-tier-retained": "true" &#125; &#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the cross-connect group was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

For use with Oracle Cloud Infrastructure FastConnect. A cross-connect group&lt;br /&gt;is a link aggregation group (LAG), which can contain one or more&lt;br /&gt;&#91;CrossConnects&#93;(#/en/iaas/latest/CrossConnect). Customers who are colocated with&lt;br /&gt;Oracle in a FastConnect location create and use cross-connect groups. For more&lt;br /&gt;information, see &#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;&lt;br /&gt;**Note:** If you're a provider who is setting up a physical connection to Oracle so customers&lt;br /&gt;can use FastConnect over the connection, be aware that your connection is modeled the&lt;br /&gt;same way as a colocated customer's (with `CrossConnect` and `CrossConnectGroup` objects, and so on).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The cross-connect group's Oracle ID (OCID).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the cross-connect group.</td>
</tr>
<tr>
    <td><CopyableCode code="customerReferenceName" /></td>
    <td><code>string</code></td>
    <td>A reference name or identifier for the physical fiber connection that this cross-connect group uses. </td>
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
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The cross-connect group's current state. (PROVISIONING, PROVISIONED, INACTIVE, TERMINATING, TERMINATED)</td>
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
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123; "orcl-cloud": &#123; "free-tier-retained": "true" &#125; &#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the cross-connect group was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-crossConnectGroupId"><code>crossConnectGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified cross-connect group's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the cross-connect groups in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new cross-connect group to use with Oracle Cloud Infrastructure&lt;br /&gt;FastConnect. For more information, see&lt;br /&gt;&#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the&lt;br /&gt;compartment where you want the cross-connect group to reside. If you're&lt;br /&gt;not sure which compartment to use, put the cross-connect group in the&lt;br /&gt;same compartment with your VCN. For more information about&lt;br /&gt;compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the cross-connect group.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-crossConnectGroupId"><code>crossConnectGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified cross-connect group's display name.&lt;br /&gt;Avoid entering confidential information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-crossConnectGroupId"><code>crossConnectGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified cross-connect group. It must not contain any&lt;br /&gt;cross-connects, and it cannot be mapped to a&lt;br /&gt;&#91;VirtualCircuit&#93;(#/en/iaas/latest/VirtualCircuit/).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-crossConnectGroupId"><code>crossConnectGroupId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a cross-connect group into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
<tr id="parameter-crossConnectGroupId">
    <td><CopyableCode code="crossConnectGroupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the cross-connect group.</td>
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

Gets the specified cross-connect group's information.

```sql
SELECT
id,
compartmentId,
customerReferenceName,
definedTags,
displayName,
freeformTags,
lifecycleState,
macsecProperties,
ociLogicalDeviceName,
ociPhysicalDeviceName,
systemTags,
timeCreated
FROM oci.network.cross_connect_groups
WHERE crossConnectGroupId = '{{ crossConnectGroupId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the cross-connect groups in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
customerReferenceName,
definedTags,
displayName,
freeformTags,
lifecycleState,
macsecProperties,
ociLogicalDeviceName,
ociPhysicalDeviceName,
systemTags,
timeCreated
FROM oci.network.cross_connect_groups
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
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

Creates a new cross-connect group to use with Oracle Cloud Infrastructure&lt;br /&gt;FastConnect. For more information, see&lt;br /&gt;&#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the&lt;br /&gt;compartment where you want the cross-connect group to reside. If you're&lt;br /&gt;not sure which compartment to use, put the cross-connect group in the&lt;br /&gt;same compartment with your VCN. For more information about&lt;br /&gt;compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the cross-connect group.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;

```sql
INSERT INTO oci.network.cross_connect_groups (
compartmentId,
customerReferenceName,
definedTags,
displayName,
freeformTags,
macsecProperties,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ customerReferenceName }}',
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ macsecProperties }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
customerReferenceName,
definedTags,
displayName,
freeformTags,
lifecycleState,
macsecProperties,
ociLogicalDeviceName,
ociPhysicalDeviceName,
systemTags,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cross_connect_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cross_connect_groups resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the cross-connect group.
    - name: customerReferenceName
      value: "{{ customerReferenceName }}"
      description: |
        A reference name or identifier for the physical fiber connection that this cross-connect
        group uses.
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

Updates the specified cross-connect group's display name.&lt;br /&gt;Avoid entering confidential information.&lt;br /&gt;

```sql
UPDATE oci.network.cross_connect_groups
SET 
customerReferenceName = '{{ customerReferenceName }}',
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
macsecProperties = '{{ macsecProperties }}'
WHERE 
crossConnectGroupId = '{{ crossConnectGroupId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
customerReferenceName,
definedTags,
displayName,
freeformTags,
lifecycleState,
macsecProperties,
ociLogicalDeviceName,
ociPhysicalDeviceName,
systemTags,
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

Deletes the specified cross-connect group. It must not contain any&lt;br /&gt;cross-connects, and it cannot be mapped to a&lt;br /&gt;&#91;VirtualCircuit&#93;(#/en/iaas/latest/VirtualCircuit/).&lt;br /&gt;

```sql
DELETE FROM oci.network.cross_connect_groups
WHERE crossConnectGroupId = '{{ crossConnectGroupId }}' --required
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

Moves a cross-connect group into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.network.cross_connect_groups.change_compartment 
@crossConnectGroupId='{{ crossConnectGroupId }}' --required, 
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
