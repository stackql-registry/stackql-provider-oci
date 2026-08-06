--- 
title: job_associated_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - job_associated_resources
  - resource_manager
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

Creates, updates, deletes, gets or lists a <code>job_associated_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_associated_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.resource_manager.job_associated_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

A list of associated resources.

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>Resource attribute values. Each value is represented as a key-value pair. Example: `&#123;"state": "AVAILABLE"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Resource region.  For information about regions, see &#91;Regions and Availability Domains&#93;(/iaas/Content/General/Concepts/regions.htm). Example: `us-phoenix-1` </td>
</tr>
<tr>
    <td><CopyableCode code="resourceAddress" /></td>
    <td><code>string</code></td>
    <td>Terraform resource address.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceName" /></td>
    <td><code>string</code></td>
    <td>Name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceType" /></td>
    <td><code>string</code></td>
    <td>Resource type. For more information about resource types supported for the Oracle Cloud Infrastructure (OCI) provider, see &#91;Oracle Cloud Infrastructure Provider&#93;(https:​//registry.terraform.io/providers/oracle/oci/latest/docs).</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the stack was created. Format is defined by RFC3339. Example: `2022-07-25T21:10:29.600Z` </td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-terraformResourceType"><code>terraformResourceType</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Gets the list of resources associated with the specified job.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Job Resources&#93;(/iaas/Content/ResourceManager/Tasks/list-job-resources.htm).&lt;br /&gt;</td>
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
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the job.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that exist in the compartment, identified by &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The number of items returned in a paginated `List` call. For information about pagination, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The value of the `opc-next-page` response header from the preceding `List` call. For information about pagination, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-terraformResourceType">
    <td><CopyableCode code="terraformResourceType" /></td>
    <td><code>string</code></td>
    <td>A filter to return only specified resource types. For more information about resource types supported for the Oracle Cloud Infrastructure &#91;OCI&#93; provider, see &#91;Oracle Cloud Infrastructure Provider&#93;(https:​//registry.terraform.io/providers/oracle/oci/latest/docs). </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Gets the list of resources associated with the specified job.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Job Resources&#93;(/iaas/Content/ResourceManager/Tasks/list-job-resources.htm).&lt;br /&gt;

```sql
SELECT
attributes,
region,
resourceAddress,
resourceId,
resourceName,
resourceType,
timeCreated
FROM oci.resource_manager.job_associated_resources
WHERE jobId = '{{ jobId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND compartmentId = '{{ compartmentId }}'
AND terraformResourceType = '{{ terraformResourceType }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
