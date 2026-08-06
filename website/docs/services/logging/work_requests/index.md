--- 
title: work_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - work_requests
  - logging
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

Creates, updates, deletes, gets or lists a <code>work_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="work_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.logging.work_requests" /></td></tr>
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

The work request details.

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
    <td>The work request OCID. (example: ocid1.publicloggingworkrequest.oc1.iad.exampleuniqueID)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The work request's compartment OCID. (example: ocid1.compartment.oc1..exampleuniqueID)</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The type of work the work request is doing. (CREATE_LOG, UPDATE_LOG, DELETE_LOG, MOVE_LOG, CREATE_LOG_GROUP, UPDATE_LOG_GROUP, DELETE_LOG_GROUP, MOVE_LOG_GROUP, CREATE_CONFIGURATION, UPDATE_CONFIGURATION, DELETE_CONFIGURATION, MOVE_CONFIGURATION) (example: LOG_CREATE, x-obmcs-top-level-enum: #/definitions/OperationTypes)</td>
</tr>
<tr>
    <td><CopyableCode code="percentComplete" /></td>
    <td><code>number (float)</code></td>
    <td>Percentage of the request completed.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>The resources this work request affects.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the work request. (ACCEPTED, IN_PROGRESS, FAILED, SUCCEEDED, CANCELLING, CANCELED) (example: SUCCEEDED, x-obmcs-top-level-enum: #/definitions/OperationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="timeAccepted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the work request was accepted. (example: 2017-07-21T16:11:29Z)</td>
</tr>
<tr>
    <td><CopyableCode code="timeFinished" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the work request was finished. (example: 2017-07-21T16:11:29Z)</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the work request was started. (example: 2017-07-21T16:11:29Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A summary of a work request.

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
    <td>The OCID of the work request. (example: ocid1.publicloggingworkrequest.oc1.iad.exampleuniqueID)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the work request's compartment. (example: ocid1.compartment.oc1..exampleuniqueID)</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The type of work the work request is doing. (CREATE_LOG, UPDATE_LOG, DELETE_LOG, MOVE_LOG, CREATE_LOG_GROUP, UPDATE_LOG_GROUP, DELETE_LOG_GROUP, MOVE_LOG_GROUP, CREATE_CONFIGURATION, UPDATE_CONFIGURATION, DELETE_CONFIGURATION, MOVE_CONFIGURATION) (example: LOG_CREATE, x-obmcs-top-level-enum: #/definitions/OperationTypes)</td>
</tr>
<tr>
    <td><CopyableCode code="percentComplete" /></td>
    <td><code>number (float)</code></td>
    <td>Percentage of the request completed.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>The resources this work request affects.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the work request. (ACCEPTED, IN_PROGRESS, FAILED, SUCCEEDED, CANCELLING, CANCELED) (example: SUCCEEDED, x-obmcs-top-level-enum: #/definitions/OperationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="timeAccepted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the work request was accepted. (example: 2017-07-21T16:11:29Z)</td>
</tr>
<tr>
    <td><CopyableCode code="timeFinished" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the work request was finished. (example: 2017-07-21T16:11:29Z)</td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the work request was started. (example: 2017-07-21T16:11:29Z)</td>
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
    <td><a href="#parameter-workRequestId"><code>workRequestId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the details of the work request with the given ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a></td>
    <td>Lists the work requests in a compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workRequestId"><code>workRequestId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Cancel a work request that has not started yet.&lt;br /&gt;</td>
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
    <td>Compartment OCID to list resources in. See compartmentIdInSubtree      for nested compartments traversal. </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-workRequestId">
    <td><CopyableCode code="workRequestId" /></td>
    <td><code>string</code></td>
    <td>The asynchronous request ID.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>&lt;b&gt;Filter&lt;/b&gt; results by &#91;OCID&#93;(/iaas/Content/API/Concepts/identifiers.htm). Must be an OCID of the correct type for the resource type. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>When setting the page limit, specifies the maximum number of unfiltered records that can be fetched from the data store in one request. Filtering happens after the records are retrieved. Subsequent pages might include results that match the query criteria. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` or `opc-previous-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>Specifies the field to sort by. Accepts only one field. By default, when you sort by time fields, results are shown in descending order. All other fields default to ascending order. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, whether 'asc' or 'desc'. </td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter results by work request status.</td>
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

Gets the details of the work request with the given ID.

```sql
SELECT
id,
compartmentId,
operationType,
percentComplete,
resources,
status,
timeAccepted,
timeFinished,
timeStarted
FROM oci.logging.work_requests
WHERE workRequestId = '{{ workRequestId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the work requests in a compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
operationType,
percentComplete,
resources,
status,
timeAccepted,
timeFinished,
timeStarted
FROM oci.logging.work_requests
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND id = '{{ id }}'
AND opc-request-id = '{{ opc-request-id }}'
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
;
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

Cancel a work request that has not started yet.&lt;br /&gt;

```sql
DELETE FROM oci.logging.work_requests
WHERE workRequestId = '{{ workRequestId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
