--- 
title: retention_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - retention_rules
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

Creates, updates, deletes, gets or lists a <code>retention_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="retention_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.object_storage.retention_rules" /></td></tr>
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

The specified retention rule.

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
    <td>Unique identifier for the retention rule.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User specified name for the retention rule.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>object</code></td>
    <td>The amount of time that objects in the bucket should be preserved for and which is calculated in relation to each object's Last-Modified timestamp. If duration is not present, then there is no time limit and the objects in the bucket will be preserved indefinitely. </td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) for the retention rule.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the retention rule was created as per &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).</td>
</tr>
<tr>
    <td><CopyableCode code="timeModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the retention rule was modified as per &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).</td>
</tr>
<tr>
    <td><CopyableCode code="timeRuleLocked" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time as per &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) after which this rule becomes locked. and can only be deleted by deleting the bucket. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The list of retention rules.

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
    <td>Unique identifier for the retention rule.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>User specified name for the retention rule.</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>object</code></td>
    <td>The amount of time that objects in the bucket should be preserved for and which is calculated in relation to each object's Last-Modified timestamp. If duration is not present, then there is no time limit and the objects in the bucket will be preserved indefinitely. </td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) for the retention rule.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the retention rule was created as per &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).</td>
</tr>
<tr>
    <td><CopyableCode code="timeModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the retention rule was modified as per &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).</td>
</tr>
<tr>
    <td><CopyableCode code="timeRuleLocked" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time as per &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) after which this rule becomes locked. and can only be deleted by deleting the bucket. </td>
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
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-retentionRuleId"><code>retentionRuleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Get the specified retention rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a></td>
    <td>List the retention rules for a bucket. The retention rules are sorted based on creation time,&lt;br /&gt;with the most recently created retention rule returned first.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Creates a new retention rule in the specified bucket. The new rule will take effect typically within 30 seconds.&lt;br /&gt;Note that a maximum of 100 rules are supported on a bucket.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-retentionRuleId"><code>retentionRuleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Updates the specified retention rule. Rule changes take effect typically within 30 seconds.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-bucketName"><code>bucketName</code></a>, <a href="#parameter-retentionRuleId"><code>retentionRuleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Deletes the specified rule. The deletion takes effect typically within 30 seconds.</td>
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
<tr id="parameter-bucketName">
    <td><CopyableCode code="bucketName" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket. Avoid entering confidential information. Example: `my-new-bucket1` </td>
</tr>
<tr id="parameter-namespaceName">
    <td><CopyableCode code="namespaceName" /></td>
    <td><code>string</code></td>
    <td>The Object Storage namespace used for the request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-retentionRuleId">
    <td><CopyableCode code="retentionRuleId" /></td>
    <td><code>string</code></td>
    <td>The ID of the retention rule.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) to match with the ETag of an existing resource. If the specified ETag matches the ETag of the existing resource, GET and HEAD requests will return the resource and PUT and POST requests will upload the resource. </td>
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

Get the specified retention rule.

```sql
SELECT
id,
displayName,
duration,
etag,
timeCreated,
timeModified,
timeRuleLocked
FROM oci.object_storage.retention_rules
WHERE namespaceName = '{{ namespaceName }}' -- required
AND bucketName = '{{ bucketName }}' -- required
AND retentionRuleId = '{{ retentionRuleId }}' -- required
AND region = '{{ region }}' -- required
AND opc-client-request-id = '{{ opc-client-request-id }}'
;
```
</TabItem>
<TabItem value="list">

List the retention rules for a bucket. The retention rules are sorted based on creation time,&lt;br /&gt;with the most recently created retention rule returned first.&lt;br /&gt;

```sql
SELECT
id,
displayName,
duration,
etag,
timeCreated,
timeModified,
timeRuleLocked
FROM oci.object_storage.retention_rules
WHERE namespaceName = '{{ namespaceName }}' -- required
AND bucketName = '{{ bucketName }}' -- required
AND region = '{{ region }}' -- required
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

Creates a new retention rule in the specified bucket. The new rule will take effect typically within 30 seconds.&lt;br /&gt;Note that a maximum of 100 rules are supported on a bucket.&lt;br /&gt;

```sql
INSERT INTO oci.object_storage.retention_rules (
displayName,
duration,
timeRuleLocked,
namespaceName,
bucketName,
region,
opc-client-request-id
)
SELECT 
'{{ displayName }}',
'{{ duration }}',
'{{ timeRuleLocked }}',
'{{ namespaceName }}',
'{{ bucketName }}',
'{{ region }}',
'{{ opc-client-request-id }}'
RETURNING
id,
displayName,
duration,
etag,
timeCreated,
timeModified,
timeRuleLocked
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: retention_rules
  props:
    - name: namespaceName
      value: "{{ namespaceName }}"
      description: Required parameter for the retention_rules resource.
    - name: bucketName
      value: "{{ bucketName }}"
      description: Required parameter for the retention_rules resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the retention_rules resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-specified name for the retention rule. Names can be helpful in identifying retention rules.
        Avoid entering confidential information.
    - name: duration
      description: |
        The amount of time that objects in the bucket should be preserved for and which is calculated in relation to
        each object's Last-Modified timestamp. If duration is not present, then there is no time limit and the objects
        in the bucket will be preserved indefinitely.
      value:
        timeAmount: {{ timeAmount }}
        timeUnit: "{{ timeUnit }}"
    - name: timeRuleLocked
      value: "{{ timeRuleLocked }}"
      description: |
        The date and time as per [RFC 3339](https://tools.ietf.org/html/rfc3339) after which this rule is locked
        and can only be deleted by deleting the bucket. Once a rule is locked, only increases in the duration are
        allowed and no other properties can be changed. This property cannot be updated for rules that are in a
        locked state. Specifying it when a duration is not specified is considered an error.
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

Updates the specified retention rule. Rule changes take effect typically within 30 seconds.&lt;br /&gt;

```sql
UPDATE oci.object_storage.retention_rules
SET 
displayName = '{{ displayName }}',
duration = '{{ duration }}',
timeRuleLocked = '{{ timeRuleLocked }}'
WHERE 
namespaceName = '{{ namespaceName }}' --required
AND bucketName = '{{ bucketName }}' --required
AND retentionRuleId = '{{ retentionRuleId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-client-request-id = '{{ opc-client-request-id}}'
RETURNING
id,
displayName,
duration,
etag,
timeCreated,
timeModified,
timeRuleLocked;
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

Deletes the specified rule. The deletion takes effect typically within 30 seconds.

```sql
DELETE FROM oci.object_storage.retention_rules
WHERE namespaceName = '{{ namespaceName }}' --required
AND bucketName = '{{ bucketName }}' --required
AND retentionRuleId = '{{ retentionRuleId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-client-request-id = '{{ opc-client-request-id }}'
;
```
</TabItem>
</Tabs>
