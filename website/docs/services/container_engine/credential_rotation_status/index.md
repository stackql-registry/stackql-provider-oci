--- 
title: credential_rotation_status
hide_title: false
hide_table_of_contents: false
keywords:
  - credential_rotation_status
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

Creates, updates, deletes, gets or lists a <code>credential_rotation_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="credential_rotation_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.container_engine.credential_rotation_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

The cluster credential rotation status details.

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Credential rotation status of a kubernetes cluster IN_PROGRESS: Issuing new credentials to kubernetes cluster control plane and worker nodes or retiring old credentials from kubernetes cluster control plane and worker nodes. WAITING: Waiting for customer to invoke the complete rotation action or the automcatic complete rotation action. COMPLETED: New credentials are functional on kuberentes cluster.  (IN_PROGRESS, WAITING, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusDetails" /></td>
    <td><code>string</code></td>
    <td>Details of a kuberenetes cluster credential rotation status: ISSUING_NEW_CREDENTIALS: Credential rotation is in progress. Starting to issue new credentials to kubernetes cluster control plane and worker nodes. NEW_CREDENTIALS_ISSUED: New credentials are added. At this stage cluster has both old and new credentials and is awaiting old credentials retirement. RETIRING_OLD_CREDENTIALS: Retirement of old credentials is in progress. Starting to remove old credentials from kubernetes cluster control plane and worker nodes. COMPLETED: Credential rotation is complete. Old credentials are retired.  (ISSUING_NEW_CREDENTIALS, NEW_CREDENTIALS_ISSUED, RETIRING_OLD_CREDENTIALS, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeAutoCompletionScheduled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time by which retirement of old credentials should start. (example: 2017-07-21T16:11:29Z)</td>
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
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Get cluster credential rotation status.</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get cluster credential rotation status.

```sql
SELECT
status,
statusDetails,
timeAutoCompletionScheduled
FROM oci.container_engine.credential_rotation_status
WHERE clusterId = '{{ clusterId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
