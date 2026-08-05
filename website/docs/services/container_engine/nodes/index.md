--- 
title: nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes
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

Creates, updates, deletes, gets or lists a <code>nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.container_engine.nodes" /></td></tr>
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
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-nodePoolId"><code>nodePoolId</code></a>, <a href="#parameter-nodeId"><code>nodeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-isDecrementSize"><code>isDecrementSize</code></a>, <a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-overrideEvictionGraceDuration"><code>overrideEvictionGraceDuration</code></a>, <a href="#parameter-isForceDeletionAfterOverrideGraceDuration"><code>isForceDeletionAfterOverrideGraceDuration</code></a></td>
    <td>Delete node.</td>
</tr>
<tr>
    <td><a href="#reboot_cluster_node"><CopyableCode code="reboot_cluster_node" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-nodeId"><code>nodeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>perform reboot action to node in cluster</td>
</tr>
<tr>
    <td><a href="#replace_boot_volume_cluster_node"><CopyableCode code="replace_boot_volume_cluster_node" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-nodeId"><code>nodeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>perform cycle action to node in cluster</td>
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
<tr id="parameter-nodeId">
    <td><CopyableCode code="nodeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compute instance.</td>
</tr>
<tr id="parameter-nodePoolId">
    <td><CopyableCode code="nodePoolId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the node pool.</td>
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
<tr id="parameter-isDecrementSize">
    <td><CopyableCode code="isDecrementSize" /></td>
    <td><code>boolean</code></td>
    <td>If the nodepool should be scaled down after the node is deleted.</td>
</tr>
<tr id="parameter-isForceDeletionAfterOverrideGraceDuration">
    <td><CopyableCode code="isForceDeletionAfterOverrideGraceDuration" /></td>
    <td><code>boolean</code></td>
    <td>If the underlying compute instance should be deleted if you cannot evict all the pods in grace period</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token you supply to uniquely identify the request and provide idempotency if the request is retried. Idempotency tokens expire after 24 hours. </td>
</tr>
<tr id="parameter-overrideEvictionGraceDuration">
    <td><CopyableCode code="overrideEvictionGraceDuration" /></td>
    <td><code>string (x-obmcs-duration)</code></td>
    <td>Duration after which OKE will give up eviction of the pods on the node. PT0M will indicate you want to delete the node without cordon and drain. Default PT60M, Min PT0M, Max: PT60M. Format ISO 8601 e.g PT30M </td>
</tr>
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete node.

```sql
DELETE FROM oci.container_engine.nodes
WHERE nodePoolId = '{{ nodePoolId }}' --required
AND nodeId = '{{ nodeId }}' --required
AND region = '{{ region }}' --required
AND isDecrementSize = '{{ isDecrementSize }}'
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
AND overrideEvictionGraceDuration = '{{ overrideEvictionGraceDuration }}'
AND isForceDeletionAfterOverrideGraceDuration = '{{ isForceDeletionAfterOverrideGraceDuration }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reboot_cluster_node"
    values={[
        { label: 'reboot_cluster_node', value: 'reboot_cluster_node' },
        { label: 'replace_boot_volume_cluster_node', value: 'replace_boot_volume_cluster_node' }
    ]}
>
<TabItem value="reboot_cluster_node">

perform reboot action to node in cluster

```sql
EXEC oci.container_engine.nodes.reboot_cluster_node 
@clusterId='{{ clusterId }}' --required, 
@nodeId='{{ nodeId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"nodeEvictionSettings": "{{ nodeEvictionSettings }}"
}'
;
```
</TabItem>
<TabItem value="replace_boot_volume_cluster_node">

perform cycle action to node in cluster

```sql
EXEC oci.container_engine.nodes.replace_boot_volume_cluster_node 
@clusterId='{{ clusterId }}' --required, 
@nodeId='{{ nodeId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"nodeEvictionSettings": "{{ nodeEvictionSettings }}"
}'
;
```
</TabItem>
</Tabs>
