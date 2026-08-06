--- 
title: alert_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - alert_rules
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

Creates, updates, deletes, gets or lists an <code>alert_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alert_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.budgets.alert_rules" /></td></tr>
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

Retrieves the Alert Rule with the given OCID.

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
    <td>The OCID of the alert rule.</td>
</tr>
<tr>
    <td><CopyableCode code="budgetId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the alert rule.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The name of the alert rule. Avoid entering confidential information.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the alert rule. (ACTIVE, INACTIVE) (x-obmcs-top-level-enum: #/definitions/LifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Custom message sent when an alert is triggered.</td>
</tr>
<tr>
    <td><CopyableCode code="recipients" /></td>
    <td><code>string</code></td>
    <td>The delimited list of email addresses to receive the alert when it triggers. Delimiter characters can be a comma, space, TAB, or semicolon. </td>
</tr>
<tr>
    <td><CopyableCode code="threshold" /></td>
    <td><code>number</code></td>
    <td>The threshold for triggering the alert. If the thresholdType is PERCENTAGE, the maximum value is 10000. </td>
</tr>
<tr>
    <td><CopyableCode code="thresholdType" /></td>
    <td><code>string</code></td>
    <td>The type of threshold. (PERCENTAGE, ABSOLUTE) (x-obmcs-top-level-enum: #/definitions/ThresholdType)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the budget was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the budget was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the alert. Valid values are ACTUAL (the alert triggers based on actual usage), or FORECAST (the alert triggers based on predicted usage).  (ACTUAL, FORECAST) (x-obmcs-top-level-enum: #/definitions/AlertType)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The version of the alert rule. Starts from 1 and increments by 1.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The alert rule.

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
    <td>The OCID of the alert rule.</td>
</tr>
<tr>
    <td><CopyableCode code="budgetId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the alert rule.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The name of the alert rule. Avoid entering confidential information.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the alert rule. (ACTIVE, INACTIVE) (x-obmcs-top-level-enum: #/definitions/LifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>The custom message that will be sent when the alert is triggered.</td>
</tr>
<tr>
    <td><CopyableCode code="recipients" /></td>
    <td><code>string</code></td>
    <td>The audience that receives the alert when it triggers.</td>
</tr>
<tr>
    <td><CopyableCode code="threshold" /></td>
    <td><code>number</code></td>
    <td>The threshold for triggering the alert. If the thresholdType is PERCENTAGE, the maximum value is 10000. </td>
</tr>
<tr>
    <td><CopyableCode code="thresholdType" /></td>
    <td><code>string</code></td>
    <td>The type of threshold. (PERCENTAGE, ABSOLUTE) (x-obmcs-top-level-enum: #/definitions/ThresholdType)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the budget was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the budget was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>ACTUAL means the alert triggers based on actual usage. FORECAST means the alert triggers based on predicted usage.  (ACTUAL, FORECAST) (x-obmcs-top-level-enum: #/definitions/AlertType)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The version of the alert rule. Starts from 1 and increments by 1.</td>
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
    <td><a href="#parameter-budgetId"><code>budgetId</code></a>, <a href="#parameter-alertRuleId"><code>alertRuleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets an Alert Rule for a specified budget.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-budgetId"><code>budgetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Returns a list of Alert Rules for a specified budget.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-budgetId"><code>budgetId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-threshold"><code>threshold</code></a>, <a href="#parameter-thresholdType"><code>thresholdType</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a new Alert Rule.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-budgetId"><code>budgetId</code></a>, <a href="#parameter-alertRuleId"><code>alertRuleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Update an Alert Rule for the budget identified by the OCID.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-budgetId"><code>budgetId</code></a>, <a href="#parameter-alertRuleId"><code>alertRuleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes a specified Alert Rule resource.</td>
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
<tr id="parameter-alertRuleId">
    <td><CopyableCode code="alertRuleId" /></td>
    <td><code>string</code></td>
    <td>The unique Alert Rule OCID.</td>
</tr>
<tr id="parameter-budgetId">
    <td><CopyableCode code="budgetId" /></td>
    <td><code>string</code></td>
    <td>The unique budget OCID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
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

Gets an Alert Rule for a specified budget.

```sql
SELECT
id,
budgetId,
definedTags,
description,
displayName,
freeformTags,
lifecycleState,
message,
recipients,
threshold,
thresholdType,
timeCreated,
timeUpdated,
type,
version
FROM oci.budgets.alert_rules
WHERE budgetId = '{{ budgetId }}' -- required
AND alertRuleId = '{{ alertRuleId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Returns a list of Alert Rules for a specified budget.&lt;br /&gt;

```sql
SELECT
id,
budgetId,
definedTags,
description,
displayName,
freeformTags,
lifecycleState,
message,
recipients,
threshold,
thresholdType,
timeCreated,
timeUpdated,
type,
version
FROM oci.budgets.alert_rules
WHERE budgetId = '{{ budgetId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
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

Creates a new Alert Rule.&lt;br /&gt;

```sql
INSERT INTO oci.budgets.alert_rules (
definedTags,
description,
displayName,
freeformTags,
message,
recipients,
threshold,
thresholdType,
type,
budgetId,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ definedTags }}',
'{{ description }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ message }}',
'{{ recipients }}',
{{ threshold }} /* required */,
'{{ thresholdType }}' /* required */,
'{{ type }}' /* required */,
'{{ budgetId }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
budgetId,
definedTags,
description,
displayName,
freeformTags,
lifecycleState,
message,
recipients,
threshold,
thresholdType,
timeCreated,
timeUpdated,
type,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: alert_rules
  props:
    - name: budgetId
      value: "{{ budgetId }}"
      description: Required parameter for the alert_rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the alert_rules resource.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        The description of the alert rule.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The name of the alert rule. Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: message
      value: "{{ message }}"
      description: |
        The message to be sent to the recipients when the alert rule is triggered.
    - name: recipients
      value: "{{ recipients }}"
      description: |
        The audience that receives the alert when it triggers. An empty string is interpreted as null.
    - name: threshold
      value: {{ threshold }}
      description: |
        The threshold for triggering the alert, expressed as a whole number or decimal value.
        If the thresholdType is ABSOLUTE, the threshold can have at most 12 digits before the decimal point, and up to two digits after the decimal point.
        If the thresholdType is PERCENTAGE, the maximum value is 10000 and can have up to two digits after the decimal point.
    - name: thresholdType
      value: "{{ thresholdType }}"
      description: |
        The type of threshold.
      valid_values: ['PERCENTAGE', 'ABSOLUTE']
    - name: type
      value: "{{ type }}"
      description: |
        The type of the alert. Valid values are ACTUAL (the alert triggers based on actual usage), or
        FORECAST (the alert triggers based on predicted usage).
      valid_values: ['ACTUAL', 'FORECAST']
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

Update an Alert Rule for the budget identified by the OCID.

```sql
UPDATE oci.budgets.alert_rules
SET 
definedTags = '{{ definedTags }}',
description = '{{ description }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
message = '{{ message }}',
recipients = '{{ recipients }}',
threshold = {{ threshold }},
thresholdType = '{{ thresholdType }}',
type = '{{ type }}'
WHERE 
budgetId = '{{ budgetId }}' --required
AND alertRuleId = '{{ alertRuleId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
budgetId,
definedTags,
description,
displayName,
freeformTags,
lifecycleState,
message,
recipients,
threshold,
thresholdType,
timeCreated,
timeUpdated,
type,
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

Deletes a specified Alert Rule resource.

```sql
DELETE FROM oci.budgets.alert_rules
WHERE budgetId = '{{ budgetId }}' --required
AND alertRuleId = '{{ alertRuleId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
