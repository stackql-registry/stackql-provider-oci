--- 
title: inventory_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - inventory_rules
  - object_storage
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

Creates, updates, deletes, gets or lists an <code>inventory_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inventory_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.object_storage.inventory_rules" /></td></tr>
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

The specified inventory rule.

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
    <td>Unique identifier for the inventory rule.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) for the inventory rule.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>Defines rule filter.</td>
</tr>
<tr>
    <td><CopyableCode code="isEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean that determines whether this rule is currently enabled. </td>
</tr>
<tr>
    <td><CopyableCode code="report" /></td>
    <td><code>object</code></td>
    <td>Defines output report.</td>
</tr>
<tr>
    <td><CopyableCode code="reportRecurrences" /></td>
    <td><code>string (x-obmcs-recurring-time)</code></td>
    <td>Defines the recurring times for report generation using iCal RFC 5545 format. The report will be generated based on the provided frequency (e.g., daily, weekly, monthly). Supported values: -  FREQ=DAILY (Daily recurrence) -  FREQ=WEEKLY (Weekly recurrence without specifying days) -  FREQ=MONTHLY (Monthly recurrence without specifying days, default value) The recurrence is based purely on the frequency (e.g., daily, weekly, monthly),  with no support for finer details like specific days or intervals.  (default: FREQ=MONTHLY)</td>
</tr>
<tr>
    <td><CopyableCode code="ruleName" /></td>
    <td><code>string</code></td>
    <td>The user-defined name for the inventory rule. - Must be unique within the tenancy's Object Storage namespace. - Must be between 1 and 256 characters in length. - Valid characters are uppercase and lowercase letters, numbers, hyphens (-), underscores (_), and periods (.). </td>
</tr>
<tr>
    <td><CopyableCode code="ruleType" /></td>
    <td><code>string</code></td>
    <td>The inventory rule type.  (BUCKET_RULE, OBJECT_RULE) (default: OBJECT_RULE)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the inventory rule was created as per &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).</td>
</tr>
<tr>
    <td><CopyableCode code="timeModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the inventory rule was modified as per &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The list of inventory rules.

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
    <td>Unique identifier for the inventory rule.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) for the inventory rule.</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>object</code></td>
    <td>Defines rule filter.</td>
</tr>
<tr>
    <td><CopyableCode code="isEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean that determines whether this rule is currently enabled. </td>
</tr>
<tr>
    <td><CopyableCode code="report" /></td>
    <td><code>object</code></td>
    <td>Defines output report.</td>
</tr>
<tr>
    <td><CopyableCode code="reportRecurrences" /></td>
    <td><code>string (x-obmcs-recurring-time)</code></td>
    <td>Defines the recurring times for report generation using iCal RFC 5545 format. The report will be generated based on the provided frequency (e.g., daily, weekly, monthly). Supported values: -  FREQ=DAILY (Daily recurrence) -  FREQ=WEEKLY (Weekly recurrence without specifying days) -  FREQ=MONTHLY (Monthly recurrence without specifying days, default value) The recurrence is based purely on the frequency (e.g., daily, weekly, monthly),  with no support for finer details like specific days or intervals.  (default: FREQ=MONTHLY)</td>
</tr>
<tr>
    <td><CopyableCode code="ruleName" /></td>
    <td><code>string</code></td>
    <td>The user-defined name for the inventory rule. - Must be unique within the tenancy's Object Storage namespace. - Must be between 1 and 256 characters in length. - Valid characters are uppercase and lowercase letters, numbers, hyphens (-), underscores (_), and periods (.). </td>
</tr>
<tr>
    <td><CopyableCode code="ruleType" /></td>
    <td><code>string</code></td>
    <td>The inventory rule type.  (BUCKET_RULE, OBJECT_RULE) (default: OBJECT_RULE)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the inventory rule was created as per &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).</td>
</tr>
<tr>
    <td><CopyableCode code="timeModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the inventory rule was modified as per &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).</td>
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
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-inventoryRuleId"><code>inventoryRuleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Get the specified inventory rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>List the inventory rules.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ruleName"><code>ruleName</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-report"><code>report</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Creates a new inventory rule in the namespace&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-inventoryRuleId"><code>inventoryRuleId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ruleName"><code>ruleName</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-report"><code>report</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Updates the specified inventory rule. Rule changes take effect typically within 30 seconds.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-inventoryRuleId"><code>inventoryRuleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Deletes the specified rule.</td>
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
<tr id="parameter-inventoryRuleId">
    <td><CopyableCode code="inventoryRuleId" /></td>
    <td><code>string</code></td>
    <td>The ID of the inventory rule.</td>
</tr>
<tr id="parameter-namespaceName">
    <td><CopyableCode code="namespaceName" /></td>
    <td><code>string</code></td>
    <td>The Object Storage namespace used for the request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) to match with the ETag of an existing resource. If the specified ETag matches the ETag of the existing resource, GET and HEAD requests will return the resource and PUT and POST requests will upload the resource. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-opc-client-request-id">
    <td><CopyableCode code="opc-client-request-id" /></td>
    <td><code>string</code></td>
    <td>The client request ID for tracing.</td>
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

Get the specified inventory rule.

```sql
SELECT
id,
etag,
filter,
isEnabled,
report,
reportRecurrences,
ruleName,
ruleType,
timeCreated,
timeModified
FROM oci.object_storage.inventory_rules
WHERE namespaceName = '{{ namespaceName }}' -- required
AND inventoryRuleId = '{{ inventoryRuleId }}' -- required
AND region = '{{ region }}' -- required
AND opc-client-request-id = '{{ opc-client-request-id }}'
;
```
</TabItem>
<TabItem value="list">

List the inventory rules.&lt;br /&gt;

```sql
SELECT
id,
etag,
filter,
isEnabled,
report,
reportRecurrences,
ruleName,
ruleType,
timeCreated,
timeModified
FROM oci.object_storage.inventory_rules
WHERE namespaceName = '{{ namespaceName }}' -- required
AND region = '{{ region }}' -- required
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND opc-client-request-id = '{{ opc-client-request-id }}'
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

Creates a new inventory rule in the namespace&lt;br /&gt;

```sql
INSERT INTO oci.object_storage.inventory_rules (
filter,
isEnabled,
report,
reportRecurrences,
ruleName,
ruleType,
namespaceName,
region,
opc-client-request-id
)
SELECT 
'{{ filter }}' /* required */,
{{ isEnabled }},
'{{ report }}' /* required */,
'{{ reportRecurrences }}',
'{{ ruleName }}' /* required */,
'{{ ruleType }}',
'{{ namespaceName }}',
'{{ region }}',
'{{ opc-client-request-id }}'
RETURNING
id,
etag,
filter,
isEnabled,
report,
reportRecurrences,
ruleName,
ruleType,
timeCreated,
timeModified
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: inventory_rules
  props:
    - name: namespaceName
      value: "{{ namespaceName }}"
      description: Required parameter for the inventory_rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the inventory_rules resource.
    - name: filter
      description: |
        Defines rule filter.
      value:
        createdWithinDays: {{ createdWithinDays }}
        exclusionPrefixes:
          - "{{ exclusionPrefixes }}"
        inclusionPrefixes:
          - "{{ inclusionPrefixes }}"
        objectTypes:
          - "{{ objectTypes }}"
    - name: isEnabled
      value: {{ isEnabled }}
      description: |
        A Boolean that determines whether this rule is currently enabled.
      default: true
    - name: report
      description: |
        Defines output report.
      value:
        format: "{{ format }}"
        schemaFields:
          - "{{ schemaFields }}"
        targetBucket: "{{ targetBucket }}"
    - name: reportRecurrences
      value: "{{ reportRecurrences }}"
      description: |
        Defines the recurring times for report generation using iCal RFC 5545 format.
        The report will be generated based on the provided frequency (e.g., daily, weekly, monthly).
        Supported values:
        -  FREQ=DAILY (Daily recurrence)
        -  FREQ=WEEKLY (Weekly recurrence without specifying days)
        -  FREQ=MONTHLY (Monthly recurrence without specifying days, default value)
        The recurrence is based purely on the frequency (e.g., daily, weekly, monthly),
        with no support for finer details like specific days or intervals.
      default: FREQ=MONTHLY
    - name: ruleName
      value: "{{ ruleName }}"
      description: |
        The user-defined name for the inventory rule.
        - Must be unique within the tenancy's Object Storage namespace.
        - Must be between 1 and 256 characters in length.
        - Valid characters are uppercase and lowercase letters, numbers, hyphens (-), underscores (_), and periods (.).
    - name: ruleType
      value: "{{ ruleType }}"
      description: |
        The inventory rule type.
      valid_values: ['BUCKET_RULE', 'OBJECT_RULE']
      default: OBJECT_RULE
    - name: opc-client-request-id
      value: "{{ opc-client-request-id }}"
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

Updates the specified inventory rule. Rule changes take effect typically within 30 seconds.&lt;br /&gt;

```sql
UPDATE oci.object_storage.inventory_rules
SET 
filter = '{{ filter }}',
isEnabled = {{ isEnabled }},
report = '{{ report }}',
reportRecurrences = '{{ reportRecurrences }}',
ruleName = '{{ ruleName }}',
ruleType = '{{ ruleType }}'
WHERE 
namespaceName = '{{ namespaceName }}' --required
AND inventoryRuleId = '{{ inventoryRuleId }}' --required
AND region = '{{ region }}' --required
AND ruleName = '{{ ruleName }}' --required
AND filter = '{{ filter }}' --required
AND report = '{{ report }}' --required
AND if-match = '{{ if-match}}'
AND opc-client-request-id = '{{ opc-client-request-id}}'
RETURNING
id,
etag,
filter,
isEnabled,
report,
reportRecurrences,
ruleName,
ruleType,
timeCreated,
timeModified;
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

Deletes the specified rule.

```sql
DELETE FROM oci.object_storage.inventory_rules
WHERE namespaceName = '{{ namespaceName }}' --required
AND inventoryRuleId = '{{ inventoryRuleId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-client-request-id = '{{ opc-client-request-id }}'
;
```
</TabItem>
</Tabs>
