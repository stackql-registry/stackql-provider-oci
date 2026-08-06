--- 
title: subnet_topologies
hide_title: false
hide_table_of_contents: false
keywords:
  - subnet_topologies
  - network
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

Creates, updates, deletes, gets or lists a <code>subnet_topologies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="subnet_topologies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.subnet_topologies" /></td></tr>
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

The topology was successfully returned.

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
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td>Lists entities comprising the virtual network topology.</td>
</tr>
<tr>
    <td><CopyableCode code="limitedEntities" /></td>
    <td><code>array</code></td>
    <td>Lists entities that are limited during ingestion. The values for the items in the list are the entity type names of the limitedEntities. Example: `vcn` </td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>array</code></td>
    <td>Lists relationships between entities in the virtual network topology.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the subnet for which the visualization is generated.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Records when the virtual network topology was created, in &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339) format for date and time.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the topology object. (NETWORKING, VCN, SUBNET, PATH)</td>
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
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-accessLevel"><code>accessLevel</code></a>, <a href="#parameter-queryCompartmentSubtree"><code>queryCompartmentSubtree</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-none-match"><code>if-none-match</code></a>, <a href="#parameter-cache-control"><code>cache-control</code></a></td>
    <td>Gets a topology for a given subnet.</td>
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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-subnetId">
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the subnet.</td>
</tr>
<tr id="parameter-accessLevel">
    <td><CopyableCode code="accessLevel" /></td>
    <td><code>string</code></td>
    <td>Valid values are `ANY` and `ACCESSIBLE`. The default is `ANY`. Setting this to `ACCESSIBLE` returns only compartments for which a user has INSPECT permissions, either directly or indirectly (permissions can be on a resource in a subcompartment). A restricted set of fields is returned for compartments in which a user has indirect INSPECT permissions.  When set to `ANY` permissions are not checked. </td>
</tr>
<tr id="parameter-cache-control">
    <td><CopyableCode code="cache-control" /></td>
    <td><code>string</code></td>
    <td>The Cache-Control HTTP header holds directives (instructions) for caching in both requests and responses. </td>
</tr>
<tr id="parameter-if-none-match">
    <td><CopyableCode code="if-none-match" /></td>
    <td><code>string</code></td>
    <td>For querying if there is a cached value on the server. The If-None-Match HTTP request header  makes the request conditional. For GET and HEAD methods, the server will send back the requested  resource, with a 200 status, only if it doesn't have an ETag matching the given ones.  For other methods, the request will be processed only if the eventually existing resource's  ETag doesn't match any of the values listed. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-queryCompartmentSubtree">
    <td><CopyableCode code="queryCompartmentSubtree" /></td>
    <td><code>boolean</code></td>
    <td>When set to true, the hierarchy of compartments is traversed and the specified compartment and its subcompartments are inspected depending on the the setting of `accessLevel`. Default is false. </td>
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

Gets a topology for a given subnet.

```sql
SELECT
entities,
limitedEntities,
relationships,
subnetId,
timeCreated,
type
FROM oci.network.subnet_topologies
WHERE compartmentId = '{{ compartmentId }}' -- required
AND subnetId = '{{ subnetId }}' -- required
AND region = '{{ region }}' -- required
AND accessLevel = '{{ accessLevel }}'
AND queryCompartmentSubtree = '{{ queryCompartmentSubtree }}'
AND opc-request-id = '{{ opc-request-id }}'
AND if-none-match = '{{ if-none-match }}'
AND cache-control = '{{ cache-control }}'
;
```
</TabItem>
</Tabs>
