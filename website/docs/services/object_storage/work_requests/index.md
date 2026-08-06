--- 
title: work_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - work_requests
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

Creates, updates, deletes, gets or lists a <code>work_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="work_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.object_storage.work_requests" /></td></tr>
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

The details of the work request.

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
    <td>The id of the work request.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment that contains the work request. Work requests are scoped to the same compartment as the resource the work request affects.  If the work request affects multiple resources and those resources are not in the same compartment, the OCID of the primary resource is used. For example, you can copy an object in a bucket in one compartment to a bucket in another compartment. In this case, the OCID of the source compartment is used. </td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The type of work request. (COPY_OBJECT, REENCRYPT, PRIVATE_ENDPOINT_CREATE, PRIVATE_ENDPOINT_UPDATE, PRIVATE_ENDPOINT_DELETE)</td>
</tr>
<tr>
    <td><CopyableCode code="percentComplete" /></td>
    <td><code>number (float)</code></td>
    <td>Percentage of the work request completed.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the specified work request. (ACCEPTED, IN_PROGRESS, FAILED, COMPLETED, CANCELING, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeAccepted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the work request was created, as described in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="timeFinished" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the work request was finished, as described in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the work request was started, as described in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A summary of the status of a work request.

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
    <td>The id of the work request.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment that contains the work request. Work requests are scoped to the same compartment as the resource the work request affects.  If the work request affects multiple resources and those resources are not in the same compartment, the OCID of the primary resource is used. For example, you can copy an object in a bucket in one compartment to a bucket in another compartment. In this case, the OCID of the source compartment is used. </td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The type of work request. (COPY_OBJECT, REENCRYPT, PRIVATE_ENDPOINT_CREATE, PRIVATE_ENDPOINT_UPDATE, PRIVATE_ENDPOINT_DELETE)</td>
</tr>
<tr>
    <td><CopyableCode code="percentComplete" /></td>
    <td><code>number (float)</code></td>
    <td>Percentage of the work request completed.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a specified work request. (ACCEPTED, IN_PROGRESS, FAILED, COMPLETED, CANCELING, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeAccepted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the work request was created, as described in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="timeFinished" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the work request was finished, as described in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the work request was started, as described in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
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
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Gets the status of the work request for the given ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-privateEndpointName"><code>privateEndpointName</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>Lists the work requests in a compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#cancel_work_request"><CopyableCode code="cancel_work_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workRequestId"><code>workRequestId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Cancels a work request.&lt;br /&gt;</td>
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
    <td>The ID of the compartment in which to list buckets.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-workRequestId">
    <td><CopyableCode code="workRequestId" /></td>
    <td><code>string</code></td>
    <td>The ID of the asynchronous request.</td>
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
<tr id="parameter-privateEndpointName">
    <td><CopyableCode code="privateEndpointName" /></td>
    <td><code>string</code></td>
    <td>The name of the privateEndpoint for which to list work requests.</td>
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

Gets the status of the work request for the given ID.

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
FROM oci.object_storage.work_requests
WHERE workRequestId = '{{ workRequestId }}' -- required
AND region = '{{ region }}' -- required
AND opc-client-request-id = '{{ opc-client-request-id }}'
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
FROM oci.object_storage.work_requests
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND privateEndpointName = '{{ privateEndpointName }}'
AND opc-client-request-id = '{{ opc-client-request-id }}'
AND page = '{{ page }}'
AND limit = '{{ limit }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_work_request"
    values={[
        { label: 'cancel_work_request', value: 'cancel_work_request' }
    ]}
>
<TabItem value="cancel_work_request">

Cancels a work request.&lt;br /&gt;

```sql
EXEC oci.object_storage.work_requests.cancel_work_request 
@workRequestId='{{ workRequestId }}' --required, 
@region='{{ region }}' --required, 
@opc-client-request-id='{{ opc-client-request-id }}'
;
```
</TabItem>
</Tabs>
