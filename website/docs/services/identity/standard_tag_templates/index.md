--- 
title: standard_tag_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - standard_tag_templates
  - identity
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

Creates, updates, deletes, gets or lists a <code>standard_tag_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="standard_tag_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.standard_tag_templates" /></td></tr>
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

Requested standard tag namespace template has been retrieved.

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The default description of the tag namespace that users can use to create the tag namespace</td>
</tr>
<tr>
    <td><CopyableCode code="standardTagNamespaceName" /></td>
    <td><code>string</code></td>
    <td>The reserved name of this standard tag namespace</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the standard tag namespace</td>
</tr>
<tr>
    <td><CopyableCode code="tagDefinitionTemplates" /></td>
    <td><code>array</code></td>
    <td>The template of the tag definition. This object includes necessary details to create the provided standard tag definition.</td>
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
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-standardTagNamespaceName"><code>standardTagNamespaceName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the standard tag namespace template given the standard tag namespace name.&lt;br /&gt;</td>
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
    <td>The OCID of the compartment (remember that the tenancy is simply the root compartment). </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-standardTagNamespaceName">
    <td><CopyableCode code="standardTagNamespaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the standard tag namespace tempate that is requested </td>
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

Retrieve the standard tag namespace template given the standard tag namespace name.&lt;br /&gt;

```sql
SELECT
description,
standardTagNamespaceName,
status,
tagDefinitionTemplates
FROM oci.identity.standard_tag_templates
WHERE compartmentId = '{{ compartmentId }}' -- required
AND standardTagNamespaceName = '{{ standardTagNamespaceName }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
