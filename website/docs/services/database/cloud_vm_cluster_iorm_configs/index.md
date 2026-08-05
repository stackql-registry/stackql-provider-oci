--- 
title: cloud_vm_cluster_iorm_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_vm_cluster_iorm_configs
  - database
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

Creates, updates, deletes, gets or lists a <code>cloud_vm_cluster_iorm_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_vm_cluster_iorm_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.cloud_vm_cluster_iorm_configs" /></td></tr>
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

An object containing the list of databases in the specified cloud VM cluster and their IORM settings.

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
    <td><CopyableCode code="dbPlans" /></td>
    <td><code>array</code></td>
    <td>An array of IORM settings for all the database in the Exadata DB system. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current `lifecycleState`. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of IORM configuration for the Exadata DB system.  (BOOTSTRAPPING, ENABLED, DISABLED, UPDATING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="objective" /></td>
    <td><code>string</code></td>
    <td>The current value for the IORM objective. The default is `AUTO`.  (LOW_LATENCY, HIGH_THROUGHPUT, BALANCED, AUTO, BASIC)</td>
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
    <td><a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the IORM configuration for the specified cloud VM cluster in an Exadata Cloud Service instance.&lt;br /&gt;If you have not specified an IORM configuration, the default configuration is returned.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cloudVmClusterId"><code>cloudVmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the IORM settings for the specified cloud VM cluster in an Exadata Cloud Service instance.&lt;br /&gt;</td>
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
<tr id="parameter-cloudVmClusterId">
    <td><CopyableCode code="cloudVmClusterId" /></td>
    <td><code>string</code></td>
    <td>The cloud VM cluster &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. </td>
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

Gets the IORM configuration for the specified cloud VM cluster in an Exadata Cloud Service instance.&lt;br /&gt;If you have not specified an IORM configuration, the default configuration is returned.&lt;br /&gt;

```sql
SELECT
dbPlans,
lifecycleDetails,
lifecycleState,
objective
FROM oci.database.cloud_vm_cluster_iorm_configs
WHERE cloudVmClusterId = '{{ cloudVmClusterId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
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

Updates the IORM settings for the specified cloud VM cluster in an Exadata Cloud Service instance.&lt;br /&gt;

```sql
UPDATE oci.database.cloud_vm_cluster_iorm_configs
SET 
dbPlans = '{{ dbPlans }}',
objective = '{{ objective }}'
WHERE 
cloudVmClusterId = '{{ cloudVmClusterId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND if-match = '{{ if-match}}'
RETURNING
dbPlans,
lifecycleDetails,
lifecycleState,
objective;
```
</TabItem>
</Tabs>
