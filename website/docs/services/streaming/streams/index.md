--- 
title: streams
hide_title: false
hide_table_of_contents: false
keywords:
  - streams
  - streaming
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

Creates, updates, deletes, gets or lists a <code>streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.streaming.streams" /></td></tr>
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
    <td>The OCID of the stream. (example: ocid1.stream.realm.region.mnopqr789)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the stream. Avoid entering confidential information.  Example: `TelemetryEvents`  (example: TelemetryEvents)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the stream. (example: ocid1.compinstance.realm.region.zxcvbn432765)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;' </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. Exists for cross-compatibility only. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the stream. (CREATING, ACTIVE, DELETING, DELETED, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleStateDetails" /></td>
    <td><code>string</code></td>
    <td>Any additional details about the current state of the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="messagesEndpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint to use when creating the StreamClient to consume or publish messages in the stream. If the associated stream pool is private, the endpoint is also private and can only be accessed from inside the stream pool's associated subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="partitions" /></td>
    <td><code>integer</code></td>
    <td>The number of partitions in the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="retentionInHours" /></td>
    <td><code>integer</code></td>
    <td>The retention period of the stream, in hours. This property is read-only.</td>
</tr>
<tr>
    <td><CopyableCode code="streamPoolId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the stream pool that contains the stream. (example: ocid1.streampool.realm.region.zxcvbn432765)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the stream was created, expressed in in &#91;RFC 3339&#93;(https:​//tools.ietf.org/rfc/rfc3339) timestamp format.  Example: `2018-04-20T00:00:07.405Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Summary representation of a stream.

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
    <td>The OCID of the stream. (example: ocid1.stream.realm.region.mnopqr789)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the stream.  Example: `TelemetryEvents`  (example: TelemetryEvents)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the stream. (example: ocid1.compinstance.realm.region.zxcvbn432765)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair that is applied with no predefined name, type, or namespace. Exists for cross-compatibility only. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the stream. (CREATING, ACTIVE, DELETING, DELETED, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="messagesEndpoint" /></td>
    <td><code>string</code></td>
    <td>The endpoint to use when creating the StreamClient to consume or publish messages in the stream. If the associated stream pool is private, the endpoint is also private and can only be accessed from inside the stream pool's associated subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="partitions" /></td>
    <td><code>integer</code></td>
    <td>The number of partitions in the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="streamPoolId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the stream pool that contains the stream. (example: ocid1.streampool.realm.region.zxcvbn432765)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the stream was created, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/rfc/rfc3339) timestamp format.  Example: `2018-04-20T00:00:07.405Z` </td>
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
    <td><a href="#parameter-streamId"><code>streamId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets detailed information about a stream, including the number of partitions.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-streamPoolId"><code>streamPoolId</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists the streams in the given compartment id.&lt;br /&gt;If the compartment id is specified, it will list streams in the compartment, regardless of their stream pool.&lt;br /&gt;If the stream pool id is specified, the action will be scoped to that stream pool.&lt;br /&gt;The compartment id and stream pool id cannot be specified at the same time.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-partitions"><code>partitions</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Starts the provisioning of a new stream.&lt;br /&gt;The stream will be created in the given compartment id or stream pool id, depending on which parameter is specified.&lt;br /&gt;Compartment id and stream pool id cannot be specified at the same time.&lt;br /&gt;To track the progress of the provisioning, you can periodically call &#91;GetStream&#93;(#/en/streaming/20180418/Stream/GetStream).&lt;br /&gt;In the response, the `lifecycleState` parameter of the &#91;Stream&#93;(#/en/streaming/20180418/Stream/) object tells you its current state.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-streamId"><code>streamId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the stream. Only specified values will be updated.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-streamId"><code>streamId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes a stream and its content. Stream contents are deleted immediately. The service retains records of the stream itself for 90 days after deletion.&lt;br /&gt;The `lifecycleState` parameter of the `Stream` object changes to `DELETING` and the stream becomes inaccessible for read or write operations.&lt;br /&gt;To verify that a stream has been deleted, make a &#91;GetStream&#93;(#/en/streaming/20180418/Stream/GetStream) request. If the call returns the stream's&lt;br /&gt;lifecycle state as `DELETED`, then the stream has been deleted. If the call returns a "404 Not Found" error, that means all records of the&lt;br /&gt;stream have been deleted.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-streamId"><code>streamId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Moves a resource into a different compartment.&lt;br /&gt;When provided, If-Match is checked against ETag values of the resource.&lt;br /&gt;The stream will also be moved into the default stream pool in the destination compartment.&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-streamId">
    <td><CopyableCode code="streamId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the stream. </td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment. Is exclusive with the `streamPoolId` parameter. One of them is required.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given ID exactly. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given lifecycle state. The state value is case-insensitive. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return. The value must be between 1 and 50. The default is 10.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given name exactly. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The page at which to start retrieving results.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide no more than one sort order. By default, `TIMECREATED` sorts results in descending order and `NAME` sorts results in ascending order. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either 'asc' or 'desc'. </td>
</tr>
<tr id="parameter-streamPoolId">
    <td><CopyableCode code="streamPoolId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the stream pool. Is exclusive with the `compartmentId` parameter. One of them is required.</td>
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

Gets detailed information about a stream, including the number of partitions.

```sql
SELECT
id,
name,
compartmentId,
definedTags,
freeformTags,
lifecycleState,
lifecycleStateDetails,
messagesEndpoint,
partitions,
retentionInHours,
streamPoolId,
timeCreated
FROM oci.streaming.streams
WHERE streamId = '{{ streamId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the streams in the given compartment id.&lt;br /&gt;If the compartment id is specified, it will list streams in the compartment, regardless of their stream pool.&lt;br /&gt;If the stream pool id is specified, the action will be scoped to that stream pool.&lt;br /&gt;The compartment id and stream pool id cannot be specified at the same time.&lt;br /&gt;

```sql
SELECT
id,
name,
compartmentId,
definedTags,
freeformTags,
lifecycleState,
messagesEndpoint,
partitions,
streamPoolId,
timeCreated
FROM oci.streaming.streams
WHERE region = '{{ region }}' -- required
AND compartmentId = '{{ compartmentId }}'
AND streamPoolId = '{{ streamPoolId }}'
AND id = '{{ id }}'
AND name = '{{ name }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
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

Starts the provisioning of a new stream.&lt;br /&gt;The stream will be created in the given compartment id or stream pool id, depending on which parameter is specified.&lt;br /&gt;Compartment id and stream pool id cannot be specified at the same time.&lt;br /&gt;To track the progress of the provisioning, you can periodically call &#91;GetStream&#93;(#/en/streaming/20180418/Stream/GetStream).&lt;br /&gt;In the response, the `lifecycleState` parameter of the &#91;Stream&#93;(#/en/streaming/20180418/Stream/) object tells you its current state.&lt;br /&gt;

```sql
INSERT INTO oci.streaming.streams (
compartmentId,
definedTags,
freeformTags,
name,
partitions,
retentionInHours,
streamPoolId,
region,
opc-request-id
)
SELECT 
'{{ compartmentId }}',
'{{ definedTags }}',
'{{ freeformTags }}',
'{{ name }}' /* required */,
{{ partitions }} /* required */,
{{ retentionInHours }},
'{{ streamPoolId }}',
'{{ region }}',
'{{ opc-request-id }}'
RETURNING
id,
name,
compartmentId,
definedTags,
freeformTags,
lifecycleState,
lifecycleStateDetails,
messagesEndpoint,
partitions,
retentionInHours,
streamPoolId,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: streams
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the streams resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment that contains the stream.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair that is applied with no predefined name, type, or namespace. Exists for cross-compatibility only.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: name
      value: "{{ name }}"
      description: |
        The name of the stream. Avoid entering confidential information.
        Example: \`TelemetryEvents\`
    - name: partitions
      value: {{ partitions }}
      description: |
        The number of partitions in the stream.
    - name: retentionInHours
      value: {{ retentionInHours }}
      description: |
        The retention period of the stream, in hours. Accepted values are between 24 and 168 (7 days).
        If not specified, the stream will have a retention period of 24 hours.
    - name: streamPoolId
      value: "{{ streamPoolId }}"
      description: |
        The OCID of the stream pool that contains the stream.
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
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

Updates the stream. Only specified values will be updated.&lt;br /&gt;

```sql
UPDATE oci.streaming.streams
SET 
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}',
streamPoolId = '{{ streamPoolId }}'
WHERE 
streamId = '{{ streamId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
name,
compartmentId,
definedTags,
freeformTags,
lifecycleState,
lifecycleStateDetails,
messagesEndpoint,
partitions,
retentionInHours,
streamPoolId,
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

Deletes a stream and its content. Stream contents are deleted immediately. The service retains records of the stream itself for 90 days after deletion.&lt;br /&gt;The `lifecycleState` parameter of the `Stream` object changes to `DELETING` and the stream becomes inaccessible for read or write operations.&lt;br /&gt;To verify that a stream has been deleted, make a &#91;GetStream&#93;(#/en/streaming/20180418/Stream/GetStream) request. If the call returns the stream's&lt;br /&gt;lifecycle state as `DELETED`, then the stream has been deleted. If the call returns a "404 Not Found" error, that means all records of the&lt;br /&gt;stream have been deleted.&lt;br /&gt;

```sql
DELETE FROM oci.streaming.streams
WHERE streamId = '{{ streamId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
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

Moves a resource into a different compartment.&lt;br /&gt;When provided, If-Match is checked against ETag values of the resource.&lt;br /&gt;The stream will also be moved into the default stream pool in the destination compartment.&lt;br /&gt;

```sql
EXEC oci.streaming.streams.change_compartment 
@streamId='{{ streamId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
</Tabs>
