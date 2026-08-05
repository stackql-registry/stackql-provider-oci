--- 
title: mfa_totp_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - mfa_totp_devices
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

Creates, updates, deletes, gets or lists a <code>mfa_totp_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mfa_totp_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.mfa_totp_devices" /></td></tr>
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

The MFA TOTP device.

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
    <td>The OCID of the MFA TOTP Device.</td>
</tr>
<tr>
    <td><CopyableCode code="inactiveStatus" /></td>
    <td><code>integer (int64)</code></td>
    <td>The detailed status of INACTIVE lifecycleState. Allowed values are:  - 1 - SUSPENDED  - 2 - DISABLED  - 4 - BLOCKED  - 8 - LOCKED </td>
</tr>
<tr>
    <td><CopyableCode code="isActivated" /></td>
    <td><code>boolean</code></td>
    <td>Flag to indicate if the MFA TOTP device has been activated</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The MFA TOTP device's current state.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the `MfaTotpDevice` object was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when this MFA TOTP device will expire, in the format defined by RFC3339. Null if it never expires.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the user the MFA TOTP device belongs to.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

As the name suggests, a `MfaTotpDeviceSummary` object contains information about a `MfaTotpDevice`.&lt;br /&gt;

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
    <td>The OCID of the MFA TOTP Device.</td>
</tr>
<tr>
    <td><CopyableCode code="inactiveStatus" /></td>
    <td><code>integer (int64)</code></td>
    <td>The detailed status of INACTIVE lifecycleState. Allowed values are:  - 1 - SUSPENDED  - 2 - DISABLED  - 4 - BLOCKED  - 8 - LOCKED </td>
</tr>
<tr>
    <td><CopyableCode code="isActivated" /></td>
    <td><code>boolean</code></td>
    <td>Flag to indicate if the MFA TOTP device has been activated</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The MFA TOTP device's current state.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the `MfaTotpDevice` object was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when this MFA TOTP device will expire, in the format defined by RFC3339. Null if it never expires.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the user the MFA TOTP device belongs to.</td>
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
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-mfaTotpDeviceId"><code>mfaTotpDeviceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the specified MFA TOTP device for the specified user.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Lists the MFA TOTP devices for the specified user. The returned object contains the device's OCID, but not&lt;br /&gt;the seed. The seed is returned only upon creation or when the IAM service regenerates the MFA seed for the device.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new MFA TOTP device for the user. A user can have one MFA TOTP device.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-mfaTotpDeviceId"><code>mfaTotpDeviceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified MFA TOTP device for the specified user.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#activate_mfa_totp_device"><CopyableCode code="activate_mfa_totp_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-mfaTotpDeviceId"><code>mfaTotpDeviceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Activates the specified MFA TOTP device for the user. Activation requires manual interaction with the Console.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#generate_totp_seed"><CopyableCode code="generate_totp_seed" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-mfaTotpDeviceId"><code>mfaTotpDeviceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Generate seed for the MFA TOTP device.&lt;br /&gt;</td>
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
<tr id="parameter-mfaTotpDeviceId">
    <td><CopyableCode code="mfaTotpDeviceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the MFA TOTP device.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the user.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in a paginated "List" call. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The value of the `opc-next-page` response header from the previous "List" call. </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for NAME is ascending. The NAME sort order is case sensitive.  **Note:** In general, some "List" operations (for example, `ListInstances`) let you optionally filter by Availability Domain if the scope of the resource type is within a single Availability Domain. If you call one of these "List" operations without specifying an Availability Domain, the resources are grouped by Availability Domain, then sorted. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). The NAME sort order is case sensitive. </td>
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

Get the specified MFA TOTP device for the specified user.&lt;br /&gt;

```sql
SELECT
id,
inactiveStatus,
isActivated,
lifecycleState,
timeCreated,
timeExpires,
userId
FROM oci.identity.mfa_totp_devices
WHERE userId = '{{ userId }}' -- required
AND mfaTotpDeviceId = '{{ mfaTotpDeviceId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the MFA TOTP devices for the specified user. The returned object contains the device's OCID, but not&lt;br /&gt;the seed. The seed is returned only upon creation or when the IAM service regenerates the MFA seed for the device.&lt;br /&gt;

```sql
SELECT
id,
inactiveStatus,
isActivated,
lifecycleState,
timeCreated,
timeExpires,
userId
FROM oci.identity.mfa_totp_devices
WHERE userId = '{{ userId }}' -- required
AND region = '{{ region }}' -- required
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new MFA TOTP device for the user. A user can have one MFA TOTP device.&lt;br /&gt;

```sql
INSERT INTO oci.identity.mfa_totp_devices (
userId,
region,
opc-retry-token
)
SELECT 
'{{ userId }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
inactiveStatus,
isActivated,
lifecycleState,
seed,
timeCreated,
timeExpires,
userId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mfa_totp_devices
  props:
    - name: userId
      value: "{{ userId }}"
      description: Required parameter for the mfa_totp_devices resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the mfa_totp_devices resource.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes the specified MFA TOTP device for the specified user.&lt;br /&gt;

```sql
DELETE FROM oci.identity.mfa_totp_devices
WHERE userId = '{{ userId }}' --required
AND mfaTotpDeviceId = '{{ mfaTotpDeviceId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="activate_mfa_totp_device"
    values={[
        { label: 'activate_mfa_totp_device', value: 'activate_mfa_totp_device' },
        { label: 'generate_totp_seed', value: 'generate_totp_seed' }
    ]}
>
<TabItem value="activate_mfa_totp_device">

Activates the specified MFA TOTP device for the user. Activation requires manual interaction with the Console.&lt;br /&gt;

```sql
EXEC oci.identity.mfa_totp_devices.activate_mfa_totp_device 
@userId='{{ userId }}' --required, 
@mfaTotpDeviceId='{{ mfaTotpDeviceId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"totpToken": "{{ totpToken }}"
}'
;
```
</TabItem>
<TabItem value="generate_totp_seed">

Generate seed for the MFA TOTP device.&lt;br /&gt;

```sql
EXEC oci.identity.mfa_totp_devices.generate_totp_seed 
@userId='{{ userId }}' --required, 
@mfaTotpDeviceId='{{ mfaTotpDeviceId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}'
;
```
</TabItem>
</Tabs>
