--- 
title: instance_pool_load_balancer_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_pool_load_balancer_attachments
  - compute
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

Creates, updates, deletes, gets or lists an <code>instance_pool_load_balancer_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_pool_load_balancer_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.instance_pool_load_balancer_attachments" /></td></tr>
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

The load balancer attached to the instance pool was retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the load balancer attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="backendSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the backend set on the load balancer.</td>
</tr>
<tr>
    <td><CopyableCode code="instancePoolId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the instance pool of the load balancer attachment. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The status of the interaction between the instance pool and the load balancer. (ATTACHING, ATTACHED, DETACHING, DETACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the load balancer attached to the instance pool. </td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>The port value used for the backends.</td>
</tr>
<tr>
    <td><CopyableCode code="vnicSelection" /></td>
    <td><code>string</code></td>
    <td>Indicates which VNIC on each instance in the instance pool should be used to associate with the load balancer. Possible values are "PrimaryVnic" or the displayName of one of the secondary VNICs on the instance configuration that is associated with the instance pool. </td>
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
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-instancePoolLoadBalancerAttachmentId"><code>instancePoolLoadBalancerAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a load balancer that is attached to the specified instance pool.&lt;br /&gt;</td>
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
<tr id="parameter-instancePoolId">
    <td><CopyableCode code="instancePoolId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the instance pool.</td>
</tr>
<tr id="parameter-instancePoolLoadBalancerAttachmentId">
    <td><CopyableCode code="instancePoolLoadBalancerAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the load balancer attachment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
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

Gets information about a load balancer that is attached to the specified instance pool.&lt;br /&gt;

```sql
SELECT
id,
backendSetName,
instancePoolId,
lifecycleState,
loadBalancerId,
port,
vnicSelection
FROM oci.compute.instance_pool_load_balancer_attachments
WHERE instancePoolId = '{{ instancePoolId }}' -- required
AND instancePoolLoadBalancerAttachmentId = '{{ instancePoolLoadBalancerAttachmentId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
