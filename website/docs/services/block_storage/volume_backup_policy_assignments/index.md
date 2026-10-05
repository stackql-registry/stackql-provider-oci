--- 
title: volume_backup_policy_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - volume_backup_policy_assignments
  - block_storage
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

Creates, updates, deletes, gets or lists a <code>volume_backup_policy_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volume_backup_policy_assignments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.block_storage.volume_backup_policy_assignments" /></td></tr>
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

The volume backup policy assignment was retrieved.

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
    <td>The OCID of the volume backup policy assignment.</td>
</tr>
<tr>
    <td><CopyableCode code="assetId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the volume the policy has been assigned to.</td>
</tr>
<tr>
    <td><CopyableCode code="policyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the volume backup policy that has been assigned to the volume. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the volume backup policy was assigned to the volume. The format is defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
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
    <td><a href="#parameter-policyAssignmentId"><code>policyAssignmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information for the specified volume backup policy assignment.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyId"><code>policyId</code></a>, <a href="#parameter-assetId"><code>assetId</code></a></td>
    <td></td>
    <td>Assigns a volume backup policy to the specified volume. Note that a given volume can&lt;br /&gt;only have one backup policy assigned to it. If this operation is used for a volume that already&lt;br /&gt;has a different backup policy assigned, the prior backup policy will be silently unassigned.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policyAssignmentId"><code>policyAssignmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes a volume backup policy assignment.</td>
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
<tr id="parameter-policyAssignmentId">
    <td><CopyableCode code="policyAssignmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the volume backup policy assignment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
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

Gets information for the specified volume backup policy assignment.

```sql
SELECT
id,
assetId,
policyId,
timeCreated
FROM oci.block_storage.volume_backup_policy_assignments
WHERE policyAssignmentId = '{{ policyAssignmentId }}' -- required
AND region = '{{ region }}' -- required
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

Assigns a volume backup policy to the specified volume. Note that a given volume can&lt;br /&gt;only have one backup policy assigned to it. If this operation is used for a volume that already&lt;br /&gt;has a different backup policy assigned, the prior backup policy will be silently unassigned.&lt;br /&gt;

```sql
INSERT INTO oci.block_storage.volume_backup_policy_assignments (
assetId,
policyId,
region
)
SELECT 
'{{ assetId }}' /* required */,
'{{ policyId }}' /* required */,
'{{ region }}'
RETURNING
id,
assetId,
policyId,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: volume_backup_policy_assignments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the volume_backup_policy_assignments resource.
    - name: assetId
      value: "{{ assetId }}"
      description: |
        The OCID of the volume to assign the policy to.
    - name: policyId
      value: "{{ policyId }}"
      description: |
        The OCID of the volume backup policy to assign to the volume.
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

Deletes a volume backup policy assignment.

```sql
DELETE FROM oci.block_storage.volume_backup_policy_assignments
WHERE policyAssignmentId = '{{ policyAssignmentId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
