--- 
title: iam_work_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - iam_work_requests
  - identity
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

Creates, updates, deletes, gets or lists an <code>iam_work_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="iam_work_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.iam_work_requests" /></td></tr>
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

IAM Work request

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
    <td>The OCID of the work request.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing this IAM work request.</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The asynchronous operation tracked by this IAM work request. (CREATE_DOMAIN, REPLICATE_DOMAIN_TO_REGION, UPDATE_DOMAIN, ACTIVATE_DOMAIN, DEACTIVATE_DOMAIN, DELETE_DOMAIN, CHANGE_COMPARTMENT_FOR_DOMAIN, CHANGE_LICENSE_TYPE_FOR_DOMAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="percentComplete" /></td>
    <td><code>number (float)</code></td>
    <td>How much progress the operation has made. </td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>The resources this work request affects.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the work request. (ACCEPTED, IN_PROGRESS, FAILED, SUCCEEDED, CANCELING, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeAccepted" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the work was accepted, in the format defined by RFC3339. Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeFinished" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the work completed, in the format defined by RFC3339. Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the work started, in the format defined by RFC3339. Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

(For tenancies that support identity domains) The IAM work request summary. Tracks the status of asynchronous operations.&lt;br /&gt;

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
    <td>The OCID of the work request.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing this IAM work request.</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The asynchronous operation tracked by this IAM work request. (CREATE_DOMAIN, REPLICATE_DOMAIN_TO_REGION, UPDATE_DOMAIN, ACTIVATE_DOMAIN, DEACTIVATE_DOMAIN, DELETE_DOMAIN, CHANGE_COMPARTMENT_FOR_DOMAIN, CHANGE_LICENSE_TYPE_FOR_DOMAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="percentComplete" /></td>
    <td><code>number (float)</code></td>
    <td>How much progress the operation has made. </td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>The resources this work request affects.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the work request. (ACCEPTED, IN_PROGRESS, FAILED, SUCCEEDED, CANCELING, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeAccepted" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the work was accepted, in the format defined by RFC3339. Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeFinished" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the work completed, in the format defined by RFC3339. Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeStarted" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the work started, in the format defined by RFC3339. Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-iamWorkRequestId"><code>iamWorkRequestId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the details of a specified IAM work request. The workRequestID is returned in the opc-work-request-id header for any asynchronous operation in the Identity and Access Management service.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-resourceIdentifier"><code>resourceIdentifier</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists the IAM work requests in compartment. The workRequestID is returned in the opc-work-request-id header for any asynchronous operation in the Identity and Access Management service.&lt;br /&gt;</td>
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
    <td>The OCID of the compartment (remember that the tenancy is simply the root compartment). </td>
</tr>
<tr id="parameter-iamWorkRequestId">
    <td><CopyableCode code="iamWorkRequestId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the IAM work request.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in a paginated "List" call. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The value of the `opc-next-page` response header from the previous "List" call. </td>
</tr>
<tr id="parameter-resourceIdentifier">
    <td><CopyableCode code="resourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the resource the work request affects.</td>
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

Gets the details of a specified IAM work request. The workRequestID is returned in the opc-work-request-id header for any asynchronous operation in the Identity and Access Management service.&lt;br /&gt;

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
FROM oci.identity.iam_work_requests
WHERE iamWorkRequestId = '{{ iamWorkRequestId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the IAM work requests in compartment. The workRequestID is returned in the opc-work-request-id header for any asynchronous operation in the Identity and Access Management service.&lt;br /&gt;

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
FROM oci.identity.iam_work_requests
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND resourceIdentifier = '{{ resourceIdentifier }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
