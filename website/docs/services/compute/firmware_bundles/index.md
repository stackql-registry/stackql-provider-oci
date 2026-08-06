--- 
title: firmware_bundles
hide_title: false
hide_table_of_contents: false
keywords:
  - firmware_bundles
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

Creates, updates, deletes, gets or lists a <code>firmware_bundles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firmware_bundles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.firmware_bundles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

A Firmware Bundle object.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of this firmware bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="allowableTransitions" /></td>
    <td><code>object</code></td>
    <td>A map of firmware bundle upgrades/downgrades validated by OCI.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment of this firmware bundle. </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description or metadata about this firmware bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of this firmware bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the firmware bundle. (ACTIVE, INACTIVE, DELETE_SCHEDULED)</td>
</tr>
<tr>
    <td><CopyableCode code="platforms" /></td>
    <td><code>array</code></td>
    <td>A map of platforms to pinned firmware versions.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the firmware bundle was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the firmware bundle was updated, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The list is being retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of this firmware bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="allowableTransitions" /></td>
    <td><code>object</code></td>
    <td>A map of firmware bundle upgrades/downgrades validated by OCI.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment of this firmware bundle. </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description or metadata about this firmware bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of this firmware bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the firmware bundle. (x-obmcs-enumref: #/definitions/FirmwareBundle/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="platforms" /></td>
    <td><code>array</code></td>
    <td>A map of platforms to pinned firmware versions.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the firmware bundle was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the firmware bundle was updated, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-firmwareBundleId"><code>firmwareBundleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Returns the Firmware Bundle matching the provided firmwareBundleId.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-platform"><code>platform</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-isDefaultBundle"><code>isDefaultBundle</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets a list of all Firmware Bundles in a compartment for specified platform. Can filter results to include &lt;br /&gt;only the default (recommended) Firmware Bundle for the given platform.&lt;br /&gt;</td>
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
<tr id="parameter-firmwareBundleId">
    <td><CopyableCode code="firmwareBundleId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the firmware bundle.</td>
</tr>
<tr id="parameter-platform">
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>platform name</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr id="parameter-isDefaultBundle">
    <td><CopyableCode code="isDefaultBundle" /></td>
    <td><code>boolean</code></td>
    <td>If true, return only the default firmware bundle for a given platform. Default is false.</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given lifecycle state name exactly. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns the Firmware Bundle matching the provided firmwareBundleId.&lt;br /&gt;

```sql
SELECT
id,
allowableTransitions,
compartmentId,
description,
displayName,
lifecycleState,
platforms,
timeCreated,
timeUpdated
FROM oci.compute.firmware_bundles
WHERE firmwareBundleId = '{{ firmwareBundleId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of all Firmware Bundles in a compartment for specified platform. Can filter results to include &lt;br /&gt;only the default (recommended) Firmware Bundle for the given platform.&lt;br /&gt;

```sql
SELECT
id,
allowableTransitions,
compartmentId,
description,
displayName,
lifecycleState,
platforms,
timeCreated,
timeUpdated
FROM oci.compute.firmware_bundles
WHERE platform = '{{ platform }}' -- required
AND region = '{{ region }}' -- required
AND compartmentId = '{{ compartmentId }}'
AND isDefaultBundle = '{{ isDefaultBundle }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND lifecycleState = '{{ lifecycleState }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
