--- 
title: budgets
hide_title: false
hide_table_of_contents: false
keywords:
  - budgets
  - budgets
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

Creates, updates, deletes, gets or lists a <code>budgets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="budgets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.budgets.budgets" /></td></tr>
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

Retrieves the budget with the given OCID.

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
    <td>The OCID of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="actualSpend" /></td>
    <td><code>number</code></td>
    <td>The actual spend in currency for the current budget cycle.</td>
</tr>
<tr>
    <td><CopyableCode code="alertRuleCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of alert rules in the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>number</code></td>
    <td>The amount of the budget expressed in the currency of the customer's rate card. </td>
</tr>
<tr>
    <td><CopyableCode code="budgetProcessingPeriodStartOffset" /></td>
    <td><code>integer</code></td>
    <td>The number of days offset from the first day of the month, at which the budget processing period starts. In months that have fewer days than this value, processing will begin on the last day of that month. For example, for a value of 12, processing starts every month on the 12th at midnight.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the budget. Avoid entering confidential information.</td>
</tr>
<tr>
    <td><CopyableCode code="endDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the one-time budget concludes. For example, `2023-08-12T16:01:19.847222+05:30`. The date-time format conforms to RFC 3339, and will be truncated to the starting point of the date provided after being converted to UTC time.</td>
</tr>
<tr>
    <td><CopyableCode code="forecastedSpend" /></td>
    <td><code>number</code></td>
    <td>The forecasted spend in currency by the end of the current budget cycle.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the budget. (ACTIVE, INACTIVE) (x-obmcs-top-level-enum: #/definitions/LifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="processingPeriodType" /></td>
    <td><code>string</code></td>
    <td>The budget processing period type. Valid values are INVOICE, MONTH, and SINGLE_USE.  (INVOICE, MONTH, SINGLE_USE) (x-obmcs-top-level-enum: #/definitions/ProcessingPeriodType)</td>
</tr>
<tr>
    <td><CopyableCode code="resetPeriod" /></td>
    <td><code>string</code></td>
    <td>The reset period for the budget.  (MONTHLY) (x-obmcs-top-level-enum: #/definitions/ResetPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="startDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the one-time budget begins. For example, `2023-07-12T16:01:19.847222+05:30`. The date-time format conforms to RFC 3339, and will be truncated to the starting point of the date provided after being converted to UTC time.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="targetCompartmentId" /></td>
    <td><code>string</code></td>
    <td>This is DEPRECATED. For backwards compatability, the property is populated when the targetType is "COMPARTMENT", and targets contain the specific target compartment OCID. For all other scenarios, this property will be left empty. </td>
</tr>
<tr>
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td>The type of target on which the budget is applied.  (COMPARTMENT, TAG) (x-obmcs-top-level-enum: #/definitions/TargetType)</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td>The list of targets on which the budget is applied.   If the targetType is "COMPARTMENT", the targets contain the list of compartment OCIDs.   If the targetType is "TAG", the targets contain the list of cost tracking tag identifiers in the form of "&#123;tagNamespace&#125;.&#123;tagKey&#125;.&#123;tagValue&#125;". </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the budget was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeSpendComputed" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the budget spend was last computed.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the budget was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The version of the budget. Starts from 1 and increments by 1.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A budget.

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
    <td>The OCID of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="actualSpend" /></td>
    <td><code>number</code></td>
    <td>The actual spend in currency for the current budget cycle.</td>
</tr>
<tr>
    <td><CopyableCode code="alertRuleCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of alert rules in the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>number</code></td>
    <td>The amount of the budget, expressed in the currency of the customer's rate card. </td>
</tr>
<tr>
    <td><CopyableCode code="budgetProcessingPeriodStartOffset" /></td>
    <td><code>integer</code></td>
    <td>The number of days offset from the first day of the month, at which the budget processing period starts. In months that have fewer days than this value, processing will begin on the last day of that month. For example, for a value of 12, processing starts every month on the 12th at midnight.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the budget. Avoid entering confidential information.</td>
</tr>
<tr>
    <td><CopyableCode code="endDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the one-time budget concludes. For example, - `2023-08-12T16:01:19.847222+05:30`. The date-time format conforms to RFC 3339, and will be truncated to the starting point of the date provided after being converted to UTC time.</td>
</tr>
<tr>
    <td><CopyableCode code="forecastedSpend" /></td>
    <td><code>number</code></td>
    <td>The forecasted spend in currency by the end of the current budget cycle.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the budget. (ACTIVE, INACTIVE) (x-obmcs-top-level-enum: #/definitions/LifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="processingPeriodType" /></td>
    <td><code>string</code></td>
    <td>The type of the budget processing period. Valid values are INVOICE, MONTH, and SINGLE_USE.  (INVOICE, MONTH, SINGLE_USE) (x-obmcs-top-level-enum: #/definitions/ProcessingPeriodType)</td>
</tr>
<tr>
    <td><CopyableCode code="resetPeriod" /></td>
    <td><code>string</code></td>
    <td>The reset period for the budget.  (MONTHLY) (x-obmcs-top-level-enum: #/definitions/ResetPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="startDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the one-time budget begins. For example, `2023-07-12T16:01:19.847222+05:30`. The date-time format conforms to RFC 3339, and will be truncated to the starting point of the date provided after being converted to UTC time.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="targetCompartmentId" /></td>
    <td><code>string</code></td>
    <td>This is DEPRECATED. For backwards compatability, the property is populated when the targetType is "COMPARTMENT", and the targets contain the specific target compartment OCID. For all other scenarios, this property is left empty. </td>
</tr>
<tr>
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td>The type of target on which the budget is applied.  (COMPARTMENT, TAG) (x-obmcs-top-level-enum: #/definitions/TargetType)</td>
</tr>
<tr>
    <td><CopyableCode code="targets" /></td>
    <td><code>array</code></td>
    <td>The list of targets on which the budget is applied.   If the targetType is "COMPARTMENT", the targets contain the list of compartment OCIDs.   If the targetType is "TAG", the targets contain the list of cost tracking tag identifiers in the form of "&#123;tagNamespace&#125;.&#123;tagKey&#125;.&#123;tagValue&#125;". </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the budget was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeSpendComputed" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the budget spend was last computed.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the budget was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The version of the budget. Starts from 1 and increments by 1.</td>
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
    <td><a href="#parameter-budgetId"><code>budgetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets a budget by the identifier.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-targetType"><code>targetType</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets a list of budgets in a compartment.&lt;br /&gt;&lt;br /&gt;By default, ListBudgets returns budgets of the 'COMPARTMENT' target type, and the budget records with only one target compartment OCID.&lt;br /&gt;&lt;br /&gt;To list all budgets, set the targetType query parameter to ALL (for example: 'targetType=ALL').&lt;br /&gt;&lt;br /&gt;Clients should ignore new targetTypes, or upgrade to the latest version of the client SDK to handle new targetTypes.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-amount"><code>amount</code></a>, <a href="#parameter-resetPeriod"><code>resetPeriod</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a new budget.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-budgetId"><code>budgetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Update a budget identified by the OCID.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-budgetId"><code>budgetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes a specified budget resource.</td>
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
<tr id="parameter-budgetId">
    <td><CopyableCode code="budgetId" /></td>
    <td><code>string</code></td>
    <td>The unique budget OCID.</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the compartment in which to list resources.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. This does not have to be unique, and it's changeable.  Example: `My new resource` </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the resource to filter by.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>The client request ID for tracing.</td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried, in case of a timeout or server error, without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations. For example, if a resource has been deleted and purged from the system, then a retry of the original creation request might be rejected. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. If not specified, the default is timeCreated. The default sort order for timeCreated is DESC. The default sort order for displayName is ASC in alphanumeric order. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either 'asc' or 'desc'.</td>
</tr>
<tr id="parameter-targetType">
    <td><CopyableCode code="targetType" /></td>
    <td><code>string</code></td>
    <td>The type of target to filter by:   * ALL - List all budgets   * COMPARTMENT - List all budgets with targetType == "COMPARTMENT"   * TAG - List all budgets with targetType == "TAG" </td>
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

Gets a budget by the identifier.

```sql
SELECT
id,
actualSpend,
alertRuleCount,
amount,
budgetProcessingPeriodStartOffset,
compartmentId,
definedTags,
description,
displayName,
endDate,
forecastedSpend,
freeformTags,
lifecycleState,
processingPeriodType,
resetPeriod,
startDate,
systemTags,
targetCompartmentId,
targetType,
targets,
timeCreated,
timeSpendComputed,
timeUpdated,
version
FROM oci.budgets.budgets
WHERE budgetId = '{{ budgetId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of budgets in a compartment.&lt;br /&gt;&lt;br /&gt;By default, ListBudgets returns budgets of the 'COMPARTMENT' target type, and the budget records with only one target compartment OCID.&lt;br /&gt;&lt;br /&gt;To list all budgets, set the targetType query parameter to ALL (for example: 'targetType=ALL').&lt;br /&gt;&lt;br /&gt;Clients should ignore new targetTypes, or upgrade to the latest version of the client SDK to handle new targetTypes.&lt;br /&gt;

```sql
SELECT
id,
actualSpend,
alertRuleCount,
amount,
budgetProcessingPeriodStartOffset,
compartmentId,
definedTags,
description,
displayName,
endDate,
forecastedSpend,
freeformTags,
lifecycleState,
processingPeriodType,
resetPeriod,
startDate,
systemTags,
targetCompartmentId,
targetType,
targets,
timeCreated,
timeSpendComputed,
timeUpdated,
version
FROM oci.budgets.budgets
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
AND targetType = '{{ targetType }}'
AND opc-request-id = '{{ opc-request-id }}'
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

Creates a new budget.&lt;br /&gt;

```sql
INSERT INTO oci.budgets.budgets (
amount,
budgetProcessingPeriodStartOffset,
compartmentId,
definedTags,
description,
displayName,
endDate,
freeformTags,
processingPeriodType,
resetPeriod,
startDate,
systemTags,
targetCompartmentId,
targetType,
targets,
region,
opc-retry-token,
opc-request-id
)
SELECT 
{{ amount }} /* required */,
{{ budgetProcessingPeriodStartOffset }},
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ description }}',
'{{ displayName }}',
'{{ endDate }}',
'{{ freeformTags }}',
'{{ processingPeriodType }}',
'{{ resetPeriod }}' /* required */,
'{{ startDate }}',
'{{ systemTags }}',
'{{ targetCompartmentId }}',
'{{ targetType }}',
'{{ targets }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
actualSpend,
alertRuleCount,
amount,
budgetProcessingPeriodStartOffset,
compartmentId,
definedTags,
description,
displayName,
endDate,
forecastedSpend,
freeformTags,
lifecycleState,
processingPeriodType,
resetPeriod,
startDate,
systemTags,
targetCompartmentId,
targetType,
targets,
timeCreated,
timeSpendComputed,
timeUpdated,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: budgets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the budgets resource.
    - name: amount
      value: {{ amount }}
      description: |
        The amount of the budget expressed as a whole number in the currency of the customer's rate card.
    - name: budgetProcessingPeriodStartOffset
      value: {{ budgetProcessingPeriodStartOffset }}
      description: |
        The number of days offset from the first day of the month, at which the budget processing period starts. In months that have fewer days than this value, processing will begin on the last day of that month. For example, for a value of 12, processing starts every month on the 12th at midnight.
      default: 1
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        The description of the budget.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The displayName of the budget. Avoid entering confidential information.
    - name: endDate
      value: "{{ endDate }}"
      description: |
        The date when the one-time budget concludes. For example, \`2023-08-12T16:01:19.847222+05:30\`. The date-time format conforms to RFC 3339, and will be truncated to the starting point of the date provided after being converted to UTC time.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: processingPeriodType
      value: "{{ processingPeriodType }}"
      description: |
        The type of the budget processing period. Valid values are INVOICE, MONTH, and SINGLE_USE.
      valid_values: ['INVOICE', 'MONTH', 'SINGLE_USE']
    - name: resetPeriod
      value: "{{ resetPeriod }}"
      description: |
        The reset period for the budget.
      valid_values: ['MONTHLY']
    - name: startDate
      value: "{{ startDate }}"
      description: |
        The date when the one-time budget begins. For example, \`2023-07-12T16:01:19.847222+05:30\`. The date-time format conforms to RFC 3339, and will be truncated to the starting point of the date provided after being converted to UTC time.
    - name: systemTags
      value: "{{ systemTags }}"
      description: |
        Usage of system tag keys. These predefined keys are scoped to namespaces.
        Example: \`{"orcl-cloud": {"free-tier-retained": "true"}}\`
    - name: targetCompartmentId
      value: "{{ targetCompartmentId }}"
      description: |
        This is DEPRECATED. Set the target compartment ID in targets instead.
    - name: targetType
      value: "{{ targetType }}"
      description: |
        The type of target on which the budget is applied.
      valid_values: ['COMPARTMENT', 'TAG']
      default: COMPARTMENT
    - name: targets
      value:
        - "{{ targets }}"
      description: |
        The list of targets on which the budget is applied.
        If targetType is "COMPARTMENT", the targets contain the list of compartment OCIDs.
        If targetType is "TAG", the targets contain the list of cost tracking tag identifiers in the form of "{tagNamespace}.{tagKey}.{tagValue}".
        Curerntly, the array should contain exactly one item.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried, in case of a timeout or server error, without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations. For example, if a resource has been deleted and purged from the system, then a retry of the original creation request might be rejected. 
      description: A token that uniquely identifies a request so it can be retried, in case of a timeout or server error, without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations. For example, if a resource has been deleted and purged from the system, then a retry of the original creation request might be rejected. 
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: The client request ID for tracing.
      description: The client request ID for tracing.
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

Update a budget identified by the OCID.

```sql
UPDATE oci.budgets.budgets
SET 
amount = {{ amount }},
budgetProcessingPeriodStartOffset = {{ budgetProcessingPeriodStartOffset }},
definedTags = '{{ definedTags }}',
description = '{{ description }}',
displayName = '{{ displayName }}',
endDate = '{{ endDate }}',
freeformTags = '{{ freeformTags }}',
processingPeriodType = '{{ processingPeriodType }}',
resetPeriod = '{{ resetPeriod }}',
startDate = '{{ startDate }}',
systemTags = '{{ systemTags }}'
WHERE 
budgetId = '{{ budgetId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
actualSpend,
alertRuleCount,
amount,
budgetProcessingPeriodStartOffset,
compartmentId,
definedTags,
description,
displayName,
endDate,
forecastedSpend,
freeformTags,
lifecycleState,
processingPeriodType,
resetPeriod,
startDate,
systemTags,
targetCompartmentId,
targetType,
targets,
timeCreated,
timeSpendComputed,
timeUpdated,
version;
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

Deletes a specified budget resource.

```sql
DELETE FROM oci.budgets.budgets
WHERE budgetId = '{{ budgetId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
