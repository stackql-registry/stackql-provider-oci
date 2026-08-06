--- 
title: terraform_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - terraform_versions
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

Creates, updates, deletes, gets or lists a <code>terraform_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="terraform_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.resource_manager.terraform_versions" /></td></tr>
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

A list of supported Terraform versions.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A supported Terraform version. Example: `1.5.x` </td>
</tr>
<tr>
    <td><CopyableCode code="isDefault" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this Terraform version is used by default in &#91;CreateStack&#93;(#/en/resourcemanager/latest/Stack/CreateStack).</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td>Returns a list of supported Terraform versions for use with stacks.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Terraform Versions&#93;(/iaas/Content/ResourceManager/Tasks/list-tf-versions.htm).&lt;br /&gt;</td>
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
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
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

Returns a list of supported Terraform versions for use with stacks.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Terraform Versions&#93;(/iaas/Content/ResourceManager/Tasks/list-tf-versions.htm).&lt;br /&gt;

```sql
SELECT
name,
isDefault
FROM oci.resource_manager.terraform_versions
WHERE region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND compartmentId = '{{ compartmentId }}'
;
```
</TabItem>
</Tabs>
