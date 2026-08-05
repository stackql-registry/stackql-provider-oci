--- 
title: cross_connect_letter_of_authorities
hide_title: false
hide_table_of_contents: false
keywords:
  - cross_connect_letter_of_authorities
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

Creates, updates, deletes, gets or lists a <code>cross_connect_letter_of_authorities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cross_connect_letter_of_authorities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.cross_connect_letter_of_authorities" /></td></tr>
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

The Letter of Authority was retrieved.

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
    <td><CopyableCode code="authorizedEntityName" /></td>
    <td><code>string</code></td>
    <td>The name of the entity authorized by this Letter of Authority.</td>
</tr>
<tr>
    <td><CopyableCode code="circuitType" /></td>
    <td><code>string</code></td>
    <td>The type of cross-connect fiber, termination, and optical specification. (Single_mode_LC, Single_mode_SC)</td>
</tr>
<tr>
    <td><CopyableCode code="crossConnectId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the cross-connect.</td>
</tr>
<tr>
    <td><CopyableCode code="facilityLocation" /></td>
    <td><code>string</code></td>
    <td>The address of the FastConnect location.</td>
</tr>
<tr>
    <td><CopyableCode code="portName" /></td>
    <td><code>string</code></td>
    <td>The meet-me room port for this cross-connect.</td>
</tr>
<tr>
    <td><CopyableCode code="timeExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the Letter of Authority expires, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="timeIssued" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Letter of Authority was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-crossConnectId"><code>crossConnectId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the Letter of Authority for the specified cross-connect.</td>
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
<tr id="parameter-crossConnectId">
    <td><CopyableCode code="crossConnectId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the cross-connect.</td>
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

Gets the Letter of Authority for the specified cross-connect.

```sql
SELECT
authorizedEntityName,
circuitType,
crossConnectId,
facilityLocation,
portName,
timeExpires,
timeIssued
FROM oci.network.cross_connect_letter_of_authorities
WHERE crossConnectId = '{{ crossConnectId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
