--- 
title: windows_instance_initial_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - windows_instance_initial_credentials
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

Creates, updates, deletes, gets or lists a <code>windows_instance_initial_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="windows_instance_initial_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.windows_instance_initial_credentials" /></td></tr>
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

The credentials were retrieved.

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
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td>The password for the username.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The username.</td>
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
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deprecated. Use &#91;GetInstanceDefaultCredentials&#93;(#/en/iaas/latest/InstanceCredentials/GetInstanceDefaultCredentials) instead.&lt;br /&gt;&lt;br /&gt;Gets the generated credentials for the instance. Only works for instances that require a password to log in, such as Windows.&lt;br /&gt;For certain operating systems, users will be forced to change the initial credentials.&lt;br /&gt;</td>
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
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the instance.</td>
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

Deprecated. Use &#91;GetInstanceDefaultCredentials&#93;(#/en/iaas/latest/InstanceCredentials/GetInstanceDefaultCredentials) instead.&lt;br /&gt;&lt;br /&gt;Gets the generated credentials for the instance. Only works for instances that require a password to log in, such as Windows.&lt;br /&gt;For certain operating systems, users will be forced to change the initial credentials.&lt;br /&gt;

```sql
SELECT
password,
username
FROM oci.compute.windows_instance_initial_credentials
WHERE instanceId = '{{ instanceId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
