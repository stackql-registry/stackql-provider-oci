--- 
title: drg_route_distributions
hide_title: false
hide_table_of_contents: false
keywords:
  - drg_route_distributions
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

Creates, updates, deletes, gets or lists a <code>drg_route_distributions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="drg_route_distributions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.drg_route_distributions" /></td></tr>
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

The route distribution was retrieved.

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
    <td>The route distribution's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the route distribution.</td>
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
    <td><CopyableCode code="distributionType" /></td>
    <td><code>string</code></td>
    <td>Whether this distribution defines how routes get imported into route tables or exported through DRG attachments.  (IMPORT, EXPORT)</td>
</tr>
<tr>
    <td><CopyableCode code="drgId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG that contains this route distribution. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The route distribution's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the route distribution was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A route distribution establishes how routes get imported into DRG route tables and exported through the DRG attachments.&lt;br /&gt;&lt;br /&gt;A route distribution is a list of statements. Each statement consists of a set of matches, all of which must be `True` for the statement's action to take place. Each statement determines which routes are propagated.&lt;br /&gt;&lt;br /&gt;You can assign a route distribution as a route table's import distribution. The statements in an import&lt;br /&gt;route distribution specify how how incoming route advertisements through a referenced attachment or all attachments of a certain type are inserted into the route table.&lt;br /&gt;&lt;br /&gt;You can assign a route distribution as a DRG attachment's export distribution unless the&lt;br /&gt;attachment has the type `VCN`. Exporting routes through a VCN attachment is unsupported. Export&lt;br /&gt;route distribution statements specify how routes in a DRG attachment's assigned table are&lt;br /&gt;advertised out through the attachment. When a DRG is created, a route distribution is created&lt;br /&gt;with a single ACCEPT statement with match criteria MATCH_ALL. By default, all DRG attachments&lt;br /&gt;(except for those of type VCN), are assigned this distribution. You can't create a new export route distribution, one is created for you when the DRG is created.&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;The two auto-generated DRG route tables (one as the default for VCN attachments, and the other for all other types of attachments)&lt;br /&gt;are each assigned an auto generated import route distribution. The default VCN table's import distribution has a single statement with match criteria MATCH_ALL to import routes from&lt;br /&gt;each DRG attachment type. The other table's import distribution has a statement to import routes from attachments with the VCN type.&lt;br /&gt;&lt;br /&gt;The route distribution is always in the same compartment as the DRG.&lt;br /&gt;

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
    <td>The route distribution's Oracle ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the route distribution.</td>
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
    <td><CopyableCode code="distributionType" /></td>
    <td><code>string</code></td>
    <td>Whether this distribution defines how routes get imported into route tables or exported through DRG attachments.  (IMPORT, EXPORT)</td>
</tr>
<tr>
    <td><CopyableCode code="drgId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the DRG that contains this route distribution. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The route distribution's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the route distribution was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-drgRouteDistributionId"><code>drgRouteDistributionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified route distribution's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-drgId"><code>drgId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the route distributions in the specified DRG.&lt;br /&gt;&lt;br /&gt;To retrieve the statements in a distribution, use the&lt;br /&gt;ListDrgRouteDistributionStatements operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-drgId"><code>drgId</code></a>, <a href="#parameter-distributionType"><code>distributionType</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new route distribution for the specified DRG.&lt;br /&gt;Assign the route distribution as an import distribution to a DRG route table using the `UpdateDrgRouteTable` or `CreateDrgRouteTable` operations.&lt;br /&gt;Assign the route distribution as an export distribution to a DRG attachment&lt;br /&gt;using the `UpdateDrgAttachment` or `CreateDrgAttachment` operations.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-drgRouteDistributionId"><code>drgRouteDistributionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified route distribution&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-drgRouteDistributionId"><code>drgRouteDistributionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified route distribution. You can't delete a route distribution currently in use by a DRG attachment or DRG route table.&lt;br /&gt;&lt;br /&gt;Remove the DRG route distribution from a DRG attachment or DRG route table by using the "RemoveExportDrgRouteDistribution" or "RemoveImportDrgRouteDistribution' operations.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_drg_route_distribution_statements"><CopyableCode code="add_drg_route_distribution_statements" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-drgRouteDistributionId"><code>drgRouteDistributionId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-statements"><code>statements</code></a></td>
    <td></td>
    <td>Adds one or more route distribution statements to the specified route distribution.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_drg_route_distribution_statements"><CopyableCode code="remove_drg_route_distribution_statements" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-drgRouteDistributionId"><code>drgRouteDistributionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes one or more route distribution statements from the specified route distribution's map.&lt;br /&gt;</td>
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
<tr id="parameter-drgRouteDistributionId">
    <td><CopyableCode code="drgRouteDistributionId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the route distribution.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
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
    <td>A filter that only returns resources that match the specified lifecycle state. The value is case insensitive. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
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

Gets the specified route distribution's information.

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
distributionType,
drgId,
freeformTags,
lifecycleState,
timeCreated
FROM oci.network.drg_route_distributions
WHERE drgRouteDistributionId = '{{ drgRouteDistributionId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the route distributions in the specified DRG.&lt;br /&gt;&lt;br /&gt;To retrieve the statements in a distribution, use the&lt;br /&gt;ListDrgRouteDistributionStatements operation.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
distributionType,
drgId,
freeformTags,
lifecycleState,
timeCreated
FROM oci.network.drg_route_distributions
WHERE drgId = '{{ drgId }}' -- required
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

Creates a new route distribution for the specified DRG.&lt;br /&gt;Assign the route distribution as an import distribution to a DRG route table using the `UpdateDrgRouteTable` or `CreateDrgRouteTable` operations.&lt;br /&gt;Assign the route distribution as an export distribution to a DRG attachment&lt;br /&gt;using the `UpdateDrgAttachment` or `CreateDrgAttachment` operations.&lt;br /&gt;

```sql
INSERT INTO oci.network.drg_route_distributions (
definedTags,
displayName,
distributionType,
drgId,
freeformTags,
region,
opc-retry-token
)
SELECT 
'{{ definedTags }}',
'{{ displayName }}',
'{{ distributionType }}' /* required */,
'{{ drgId }}' /* required */,
'{{ freeformTags }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
distributionType,
drgId,
freeformTags,
lifecycleState,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: drg_route_distributions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the drg_route_distributions resource.
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
    - name: distributionType
      value: "{{ distributionType }}"
      description: |
        States that this distribution defines how routes get imported into route tables.
      valid_values: ['IMPORT']
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

Updates the specified route distribution&lt;br /&gt;

```sql
UPDATE oci.network.drg_route_distributions
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}'
WHERE 
drgRouteDistributionId = '{{ drgRouteDistributionId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
distributionType,
drgId,
freeformTags,
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

Deletes the specified route distribution. You can't delete a route distribution currently in use by a DRG attachment or DRG route table.&lt;br /&gt;&lt;br /&gt;Remove the DRG route distribution from a DRG attachment or DRG route table by using the "RemoveExportDrgRouteDistribution" or "RemoveImportDrgRouteDistribution' operations.&lt;br /&gt;

```sql
DELETE FROM oci.network.drg_route_distributions
WHERE drgRouteDistributionId = '{{ drgRouteDistributionId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_drg_route_distribution_statements"
    values={[
        { label: 'add_drg_route_distribution_statements', value: 'add_drg_route_distribution_statements' },
        { label: 'remove_drg_route_distribution_statements', value: 'remove_drg_route_distribution_statements' }
    ]}
>
<TabItem value="add_drg_route_distribution_statements">

Adds one or more route distribution statements to the specified route distribution.&lt;br /&gt;

```sql
EXEC oci.network.drg_route_distributions.add_drg_route_distribution_statements 
@drgRouteDistributionId='{{ drgRouteDistributionId }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"statements": "{{ statements }}"
}'
;
```
</TabItem>
<TabItem value="remove_drg_route_distribution_statements">

Removes one or more route distribution statements from the specified route distribution's map.&lt;br /&gt;

```sql
EXEC oci.network.drg_route_distributions.remove_drg_route_distribution_statements 
@drgRouteDistributionId='{{ drgRouteDistributionId }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"statementIds": "{{ statementIds }}"
}'
;
```
</TabItem>
</Tabs>
