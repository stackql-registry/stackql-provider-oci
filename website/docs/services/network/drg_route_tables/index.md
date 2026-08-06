--- 
title: drg_route_tables
hide_title: false
hide_table_of_contents: false
keywords:
  - drg_route_tables
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

Creates, updates, deletes, gets or lists a <code>drg_route_tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="drg_route_tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.drg_route_tables" /></td></tr>
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

The DRG route table was retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG route table. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment the DRG is in. The DRG route table is always in the same compartment as the DRG. </td>
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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG the DRG that contains this route table. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="importDrgRouteDistributionId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the import route distribution used to specify how incoming route advertisements from referenced attachments are inserted into the DRG route table. </td>
</tr>
<tr>
    <td><CopyableCode code="isEcmpEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If you want traffic to be routed using ECMP across your virtual circuits or IPSec tunnels to your on-premises network, enable ECMP on the DRG route table to which these attachments import routes. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The DRG route table's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the DRG route table was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

All routing inside the DRG is driven by the contents of DRG route tables.&lt;br /&gt;DRG route tables contain rules which route packets to a particular network destination,&lt;br /&gt;represented as a DRG attachment.&lt;br /&gt;The routing decision for a packet entering a DRG is determined by the rules in the DRG route table&lt;br /&gt;assigned to the attachment-of-entry.&lt;br /&gt;&lt;br /&gt;Each DRG attachment can inject routes in any DRG route table, provided there is a statement corresponding to the attachment in the route table's `importDrgRouteDistribution`.&lt;br /&gt;You can also insert static routes into the DRG route tables.&lt;br /&gt;&lt;br /&gt;The DRG route table is always in the same compartment as the DRG. There must always be a default&lt;br /&gt;DRG route table for each attachment type.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG route table. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment the DRG is in. The DRG route table is always in the same compartment as the DRG. </td>
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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG the DRG that contains this route table. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="importDrgRouteDistributionId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the import route distribution used to specify how incoming route advertisements from referenced attachments are inserted into the DRG route table. </td>
</tr>
<tr>
    <td><CopyableCode code="isEcmpEnabled" /></td>
    <td><code>boolean</code></td>
    <td>If you want traffic to be routed using ECMP across your virtual circuits or IPSec tunnels to your on-premises network, enable ECMP on the DRG route table to which these attachments import routes. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The DRG route table's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the DRG route table was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-drgRouteTableId"><code>drgRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified DRG route table's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-drgId"><code>drgId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-importDrgRouteDistributionId"><code>importDrgRouteDistributionId</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the DRG route tables for the specified DRG.&lt;br /&gt;&lt;br /&gt;Use the `ListDrgRouteRules` operation to retrieve the route rules in a table.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-drgId"><code>drgId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new DRG route table for the specified DRG. Assign the DRG route table to a DRG attachment&lt;br /&gt;using the `UpdateDrgAttachment` or `CreateDrgAttachment` operations.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-drgRouteTableId"><code>drgRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified DRG route table.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-drgRouteTableId"><code>drgRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified DRG route table. There must not be any DRG attachments assigned.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_drg_route_rules"><CopyableCode code="add_drg_route_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-drgRouteTableId"><code>drgRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Adds one or more static route rules to the specified DRG route table.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_drg_route_rules"><CopyableCode code="remove_drg_route_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-drgRouteTableId"><code>drgRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes one or more route rules from the specified DRG route table.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_import_drg_route_distribution"><CopyableCode code="remove_import_drg_route_distribution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-drgRouteTableId"><code>drgRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Removes the import route distribution from the DRG route table so no routes are imported&lt;br /&gt;into it.&lt;br /&gt;</td>
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
<tr id="parameter-drgId">
    <td><CopyableCode code="drgId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG.</td>
</tr>
<tr id="parameter-drgRouteTableId">
    <td><CopyableCode code="drgRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG route table.</td>
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
<tr id="parameter-importDrgRouteDistributionId">
    <td><CopyableCode code="importDrgRouteDistributionId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the import route distribution. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter that only returns matches for the specified lifecycle state. The value is case insensitive. </td>
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

Gets the specified DRG route table's information.

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
drgId,
freeformTags,
importDrgRouteDistributionId,
isEcmpEnabled,
lifecycleState,
timeCreated
FROM oci.network.drg_route_tables
WHERE drgRouteTableId = '{{ drgRouteTableId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the DRG route tables for the specified DRG.&lt;br /&gt;&lt;br /&gt;Use the `ListDrgRouteRules` operation to retrieve the route rules in a table.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
drgId,
freeformTags,
importDrgRouteDistributionId,
isEcmpEnabled,
lifecycleState,
timeCreated
FROM oci.network.drg_route_tables
WHERE drgId = '{{ drgId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND displayName = '{{ displayName }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND importDrgRouteDistributionId = '{{ importDrgRouteDistributionId }}'
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

Creates a new DRG route table for the specified DRG. Assign the DRG route table to a DRG attachment&lt;br /&gt;using the `UpdateDrgAttachment` or `CreateDrgAttachment` operations.&lt;br /&gt;

```sql
INSERT INTO oci.network.drg_route_tables (
definedTags,
displayName,
drgId,
freeformTags,
importDrgRouteDistributionId,
isEcmpEnabled,
region,
opc-retry-token
)
SELECT 
'{{ definedTags }}',
'{{ displayName }}',
'{{ drgId }}' /* required */,
'{{ freeformTags }}',
'{{ importDrgRouteDistributionId }}',
{{ isEcmpEnabled }},
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
drgId,
freeformTags,
importDrgRouteDistributionId,
isEcmpEnabled,
lifecycleState,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: drg_route_tables
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the drg_route_tables resource.
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
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the DRG the DRG route table belongs to.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: importDrgRouteDistributionId
      value: "{{ importDrgRouteDistributionId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the import route distribution used to specify how incoming route advertisements through
        referenced attachments are inserted into the DRG route table.
    - name: isEcmpEnabled
      value: {{ isEcmpEnabled }}
      description: |
        If you want traffic to be routed using ECMP across your virtual circuits or IPSec tunnels to
        your on-premises networks, enable ECMP on the DRG route table.
      default: false
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

Updates the specified DRG route table.&lt;br /&gt;

```sql
UPDATE oci.network.drg_route_tables
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
importDrgRouteDistributionId = '{{ importDrgRouteDistributionId }}',
isEcmpEnabled = {{ isEcmpEnabled }}
WHERE 
drgRouteTableId = '{{ drgRouteTableId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
drgId,
freeformTags,
importDrgRouteDistributionId,
isEcmpEnabled,
lifecycleState,
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

Deletes the specified DRG route table. There must not be any DRG attachments assigned.&lt;br /&gt;

```sql
DELETE FROM oci.network.drg_route_tables
WHERE drgRouteTableId = '{{ drgRouteTableId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_drg_route_rules"
    values={[
        { label: 'add_drg_route_rules', value: 'add_drg_route_rules' },
        { label: 'remove_drg_route_rules', value: 'remove_drg_route_rules' },
        { label: 'remove_import_drg_route_distribution', value: 'remove_import_drg_route_distribution' }
    ]}
>
<TabItem value="add_drg_route_rules">

Adds one or more static route rules to the specified DRG route table.&lt;br /&gt;

```sql
EXEC oci.network.drg_route_tables.add_drg_route_rules 
@drgRouteTableId='{{ drgRouteTableId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"routeRules": "{{ routeRules }}"
}'
;
```
</TabItem>
<TabItem value="remove_drg_route_rules">

Removes one or more route rules from the specified DRG route table.&lt;br /&gt;

```sql
EXEC oci.network.drg_route_tables.remove_drg_route_rules 
@drgRouteTableId='{{ drgRouteTableId }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"routeRuleIds": "{{ routeRuleIds }}"
}'
;
```
</TabItem>
<TabItem value="remove_import_drg_route_distribution">

Removes the import route distribution from the DRG route table so no routes are imported&lt;br /&gt;into it.&lt;br /&gt;

```sql
EXEC oci.network.drg_route_tables.remove_import_drg_route_distribution 
@drgRouteTableId='{{ drgRouteTableId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
</Tabs>
