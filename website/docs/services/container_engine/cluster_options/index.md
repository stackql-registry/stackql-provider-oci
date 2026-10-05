--- 
title: cluster_options
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_options
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

Creates, updates, deletes, gets or lists a <code>cluster_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.container_engine.cluster_options" /></td></tr>
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

The cluster options.

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
    <td><CopyableCode code="clusterPodNetworkOptions" /></td>
    <td><code>array</code></td>
    <td>Available CNIs and network options for existing and new node pools of the cluster (x-default-description: when unspecified in case of updates, the current value of this field will be preserved, else value set to null)</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesVersions" /></td>
    <td><code>array</code></td>
    <td>Available Kubernetes versions.</td>
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
    <td><a href="#parameter-clusterOptionId"><code>clusterOptionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-shouldListAllPatchVersions"><code>shouldListAllPatchVersions</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Get options available for clusters.</td>
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
<tr id="parameter-clusterOptionId">
    <td><CopyableCode code="clusterOptionId" /></td>
    <td><code>string</code></td>
    <td>The id of the option set to retrieve. Use "all" get all options, or use a cluster ID to get options specific to the provided cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-shouldListAllPatchVersions">
    <td><CopyableCode code="shouldListAllPatchVersions" /></td>
    <td><code>boolean</code></td>
    <td>Option to show all kubernetes patch versions</td>
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

Get options available for clusters.

```sql
SELECT
clusterPodNetworkOptions,
kubernetesVersions
FROM oci.container_engine.cluster_options
WHERE clusterOptionId = '{{ clusterOptionId }}' -- required
AND region = '{{ region }}' -- required
AND compartmentId = '{{ compartmentId }}'
AND shouldListAllPatchVersions = '{{ shouldListAllPatchVersions }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
