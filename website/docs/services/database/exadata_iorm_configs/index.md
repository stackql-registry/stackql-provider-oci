--- 
title: exadata_iorm_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - exadata_iorm_configs
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

Creates, updates, deletes, gets or lists an <code>exadata_iorm_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exadata_iorm_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.exadata_iorm_configs" /></td></tr>
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

The IORM configuration was retrieved.

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
    <td><a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the IORM configuration settings for the specified cloud Exadata DB system.&lt;br /&gt;All Exadata service instances have default IORM settings.&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service systems. Use the &#91;new resource model APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model) instead.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;&lt;br /&gt;The &#91;GetCloudVmClusterIormConfig&#93;(#/en/database/latest/CloudVmCluster/GetCloudVmClusterIormConfig/) API is used for this operation with Exadata systems using the&lt;br /&gt;new resource model.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates IORM settings for the specified Exadata DB system.&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service systems. Use the &#91;new resource model APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model) instead.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;&lt;br /&gt;The &#91;UpdateCloudVmClusterIormConfig&#93;(#/en/database/latest/CloudVmCluster/UpdateCloudVmClusterIormConfig/) API is used for Exadata systems using the&lt;br /&gt;new resource model.&lt;br /&gt;</td>
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
<tr id="parameter-dbSystemId">
    <td><CopyableCode code="dbSystemId" /></td>
    <td><code>string</code></td>
    <td>The DB system &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
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

Gets the IORM configuration settings for the specified cloud Exadata DB system.&lt;br /&gt;All Exadata service instances have default IORM settings.&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service systems. Use the &#91;new resource model APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model) instead.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;&lt;br /&gt;The &#91;GetCloudVmClusterIormConfig&#93;(#/en/database/latest/CloudVmCluster/GetCloudVmClusterIormConfig/) API is used for this operation with Exadata systems using the&lt;br /&gt;new resource model.&lt;br /&gt;

```sql
SELECT
dbPlans,
lifecycleDetails,
lifecycleState,
objective
FROM oci.database.exadata_iorm_configs
WHERE dbSystemId = '{{ dbSystemId }}' -- required
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

Updates IORM settings for the specified Exadata DB system.&lt;br /&gt;&lt;br /&gt;**Note:** Deprecated for Exadata Cloud Service systems. Use the &#91;new resource model APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem.htm#exaflexsystem_topic-resource_model) instead.&lt;br /&gt;&lt;br /&gt;For Exadata Cloud Service instances, support for this API will end on May 15th, 2021. See &#91;Switching an Exadata DB System to the New Resource Model and APIs&#93;(/iaas/Content/Database/Concepts/exaflexsystem_topic-resource_model_conversion.htm) for details on converting existing Exadata DB systems to the new resource model.&lt;br /&gt;&lt;br /&gt;The &#91;UpdateCloudVmClusterIormConfig&#93;(#/en/database/latest/CloudVmCluster/UpdateCloudVmClusterIormConfig/) API is used for Exadata systems using the&lt;br /&gt;new resource model.&lt;br /&gt;

```sql
UPDATE oci.database.exadata_iorm_configs
SET 
dbPlans = '{{ dbPlans }}',
objective = '{{ objective }}'
WHERE 
dbSystemId = '{{ dbSystemId }}' --required
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
