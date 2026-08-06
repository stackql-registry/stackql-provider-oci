--- 
title: load_balancer_shapes
hide_title: false
hide_table_of_contents: false
keywords:
  - load_balancer_shapes
  - load_balancer
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

Creates, updates, deletes, gets or lists a <code>load_balancer_shapes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="load_balancer_shapes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.load_balancer.load_balancer_shapes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-shapeName"><code>shapeName</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Update the shape of a load balancer. The new shape can be larger or smaller compared to existing shape of the&lt;br /&gt;LB. The service will try to perform this operation in the least disruptive way to existing connections, but&lt;br /&gt;there is a possibility that they might be lost during the LB resizing process. The new shape becomes effective&lt;br /&gt;as soon as the related work request completes successfully, i.e. when reshaping to a larger shape, the LB will&lt;br /&gt;start accepting larger bandwidth and when reshaping to a smaller one, the LB will be accepting smaller&lt;br /&gt;bandwidth.&lt;br /&gt;</td>
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
<tr id="parameter-loadBalancerId">
    <td><CopyableCode code="loadBalancerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the load balancer whose shape will be updated.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Update the shape of a load balancer. The new shape can be larger or smaller compared to existing shape of the&lt;br /&gt;LB. The service will try to perform this operation in the least disruptive way to existing connections, but&lt;br /&gt;there is a possibility that they might be lost during the LB resizing process. The new shape becomes effective&lt;br /&gt;as soon as the related work request completes successfully, i.e. when reshaping to a larger shape, the LB will&lt;br /&gt;start accepting larger bandwidth and when reshaping to a smaller one, the LB will be accepting smaller&lt;br /&gt;bandwidth.&lt;br /&gt;

```sql
UPDATE oci.load_balancer.load_balancer_shapes
SET 
shapeDetails = '{{ shapeDetails }}',
shapeName = '{{ shapeName }}'
WHERE 
loadBalancerId = '{{ loadBalancerId }}' --required
AND region = '{{ region }}' --required
AND shapeName = '{{ shapeName }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND opc-retry-token = '{{ opc-retry-token}}';
```
</TabItem>
</Tabs>
