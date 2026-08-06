--- 
title: work_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - work_requests
  - container_engine
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
<tr><td><b>Id</b></td><td><CopyableCode code="oci.container_engine.work_requests" /></td></tr>
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

The work request.

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
    <td>The OCID of the work request. (example: ocid1.clustersworkrequest.oc1.iad.aaaaaaaanifpelnyzmkvnepohbz4ntswkpl35syzzsugdxceth3oihe8hcfq)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment in which the work request exists. (example: ocid1.compartment.oc1..aaaaaaaafqm2df7ckwmmbtdsl2bgxsw4fcpvkoojytxrqst24yww2tdmtqcq)</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The type of work the work request is doing. (CLUSTER_CREATE, CLUSTER_UPDATE, CLUSTER_DELETE, CREATE_NAMESPACE, NODEPOOL_CREATE, NODEPOOL_UPDATE, NODEPOOL_DELETE, NODEPOOL_RECONCILE, NODEPOOL_CYCLING, WORKREQUEST_CANCEL, VIRTUALNODEPOOL_CREATE, VIRTUALNODEPOOL_UPDATE, VIRTUALNODEPOOL_DELETE, VIRTUALNODE_DELETE, VIRTUALNODEPOOL_CYCLING, ENABLE_ADDON, UPDATE_ADDON, DISABLE_ADDON, RECONCILE_ADDON, CLUSTER_NODE_REBOOT, CLUSTER_NODE_REPLACE_BOOT_VOLUME, START_PUBLIC_API_ENDPOINT_DECOMMISSION, ROLLBACK_PUBLIC_API_ENDPOINT_DECOMMISSION) (example: CLUSTER_UPDATE, x-obmcs-top-level-enum: #/definitions/WorkRequestOperationType)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>The resources this work request affects.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the work request. (ACCEPTED, IN_PROGRESS, FAILED, SUCCEEDED, CANCELING, CANCELED) (example: IN_PROGRESS, x-obmcs-top-level-enum: #/definitions/WorkRequestStatus)</td>
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

The properties that define a work request summary.

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
    <td>The OCID of the work request. (example: ocid1.clustersworkrequest.oc1.iad.aaaaaaaanifpelnyzmkvnepohbz4ntswkpl35syzzsugdxceth3oihe8hcfq)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment in which the work request exists. (example: ocid1.compartment.oc1..aaaaaaaafqm2df7ckwmmbtdsl2bgxsw4fcpvkoojytxrqst24yww2tdmtqcq)</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The type of work the work request is doing. (CLUSTER_CREATE, CLUSTER_UPDATE, CLUSTER_DELETE, CREATE_NAMESPACE, NODEPOOL_CREATE, NODEPOOL_UPDATE, NODEPOOL_DELETE, NODEPOOL_RECONCILE, NODEPOOL_CYCLING, WORKREQUEST_CANCEL, VIRTUALNODEPOOL_CREATE, VIRTUALNODEPOOL_UPDATE, VIRTUALNODEPOOL_DELETE, VIRTUALNODE_DELETE, VIRTUALNODEPOOL_CYCLING, ENABLE_ADDON, UPDATE_ADDON, DISABLE_ADDON, RECONCILE_ADDON, CLUSTER_NODE_REBOOT, CLUSTER_NODE_REPLACE_BOOT_VOLUME, START_PUBLIC_API_ENDPOINT_DECOMMISSION, ROLLBACK_PUBLIC_API_ENDPOINT_DECOMMISSION) (example: CLUSTER_UPDATE, x-obmcs-top-level-enum: #/definitions/WorkRequestOperationType)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>The resources this work request affects.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the work request. (ACCEPTED, IN_PROGRESS, FAILED, SUCCEEDED, CANCELING, CANCELED) (example: IN_PROGRESS, x-obmcs-top-level-enum: #/definitions/WorkRequestStatus)</td>
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
    <td>Get the details of a work request.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-resourceId"><code>resourceId</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>List all work requests in a compartment.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-workRequestId"><code>workRequestId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Cancel a work request that has not started.</td>
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
    <td>The OCID of the compartment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-workRequestId">
    <td><CopyableCode code="workRequestId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the work request.</td>
</tr>
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the cluster.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. 1 is the minimum, 1000 is the maximum. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-resourceId">
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the resource associated with a work request</td>
</tr>
<tr id="parameter-resourceType">
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Type of the resource associated with a work request</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The optional field to sort the results by.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The optional order in which to sort the results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>array</code></td>
    <td>A work request status to filter on. Can have multiple parameters of this name.</td>
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

Get the details of a work request.

```sql
SELECT
id,
compartmentId,
operationType,
resources,
status,
timeAccepted,
timeFinished,
timeStarted
FROM oci.container_engine.work_requests
WHERE workRequestId = '{{ workRequestId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

List all work requests in a compartment.

```sql
SELECT
id,
compartmentId,
operationType,
resources,
status,
timeAccepted,
timeFinished,
timeStarted
FROM oci.container_engine.work_requests
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND clusterId = '{{ clusterId }}'
AND resourceId = '{{ resourceId }}'
AND resourceType = '{{ resourceType }}'
AND status = '{{ status }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
AND opc-request-id = '{{ opc-request-id }}'
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

Cancel a work request that has not started.

```sql
DELETE FROM oci.container_engine.work_requests
WHERE workRequestId = '{{ workRequestId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
