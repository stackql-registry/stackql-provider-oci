--- 
title: volume_backup_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - volume_backup_policies
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

Creates, updates, deletes, gets or lists a <code>volume_backup_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volume_backup_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.block_storage.volume_backup_policies" /></td></tr>
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

The volume backup policy was retrieved.

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
    <td>The OCID of the volume backup policy.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the volume backup.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="destinationRegion" /></td>
    <td><code>string</code></td>
    <td>The paired destination region for copying scheduled backups to. Example `us-ashburn-1`. See &#91;Region Pairs&#93;(/iaas/Content/Block/Tasks/schedulingvolumebackups.htm#RegionPairs) for details about paired regions. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="schedules" /></td>
    <td><code>array</code></td>
    <td>The collection of schedules that this policy will apply.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the volume backup policy was created. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A policy for automatically creating volume backups according to a&lt;br /&gt;recurring schedule. Has a set of one or more schedules that control when and&lt;br /&gt;how backups are created.&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you&lt;br /&gt;supply string values using the API.&lt;br /&gt;

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
    <td>The OCID of the volume backup policy.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the volume backup.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="destinationRegion" /></td>
    <td><code>string</code></td>
    <td>The paired destination region for copying scheduled backups to. Example `us-ashburn-1`. See &#91;Region Pairs&#93;(/iaas/Content/Block/Tasks/schedulingvolumebackups.htm#RegionPairs) for details about paired regions. </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="schedules" /></td>
    <td><code>array</code></td>
    <td>The collection of schedules that this policy will apply.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the volume backup policy was created. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
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
    <td><a href="#parameter-policyId"><code>policyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information for the specified volume backup policy.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td>Lists all the volume backup policies available in the specified compartment.&lt;br /&gt;&lt;br /&gt;For more information about Oracle defined backup policies and user defined backup policies,&lt;br /&gt;see &#91;Policy-Based Backups&#93;(/iaas/Content/Block/Tasks/schedulingvolumebackups.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a new user defined backup policy.&lt;br /&gt;&lt;br /&gt;For more information about Oracle defined backup policies and user defined backup policies,&lt;br /&gt;see &#91;Policy-Based Backups&#93;(/iaas/Content/Block/Tasks/schedulingvolumebackups.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policyId"><code>policyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Updates a user defined backup policy.&lt;br /&gt; For more information about user defined backup policies,&lt;br /&gt; see &#91;Policy-Based Backups&#93;(/iaas/Content/Block/Tasks/schedulingvolumebackups.htm#UserDefinedBackupPolicies).&lt;br /&gt;&lt;br /&gt; Avoid entering confidential information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policyId"><code>policyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes a user defined backup policy.&lt;br /&gt; For more information about user defined backup policies,&lt;br /&gt; see &#91;Policy-Based Backups&#93;(/iaas/Content/Block/Tasks/schedulingvolumebackups.htm#UserDefinedBackupPolicies).&lt;br /&gt;&lt;br /&gt; Avoid entering confidential information.&lt;br /&gt;</td>
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
<tr id="parameter-policyId">
    <td><CopyableCode code="policyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the volume backup policy.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment. If no compartment is specified, the Oracle defined backup policies are listed. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
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
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
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

Gets information for the specified volume backup policy.

```sql
SELECT
id,
compartmentId,
definedTags,
destinationRegion,
displayName,
freeformTags,
schedules,
timeCreated
FROM oci.block_storage.volume_backup_policies
WHERE policyId = '{{ policyId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists all the volume backup policies available in the specified compartment.&lt;br /&gt;&lt;br /&gt;For more information about Oracle defined backup policies and user defined backup policies,&lt;br /&gt;see &#91;Policy-Based Backups&#93;(/iaas/Content/Block/Tasks/schedulingvolumebackups.htm).&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
destinationRegion,
displayName,
freeformTags,
schedules,
timeCreated
FROM oci.block_storage.volume_backup_policies
WHERE region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND compartmentId = '{{ compartmentId }}'
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

Creates a new user defined backup policy.&lt;br /&gt;&lt;br /&gt;For more information about Oracle defined backup policies and user defined backup policies,&lt;br /&gt;see &#91;Policy-Based Backups&#93;(/iaas/Content/Block/Tasks/schedulingvolumebackups.htm).&lt;br /&gt;

```sql
INSERT INTO oci.block_storage.volume_backup_policies (
compartmentId,
definedTags,
destinationRegion,
displayName,
freeformTags,
schedules,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ destinationRegion }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ schedules }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
compartmentId,
definedTags,
destinationRegion,
displayName,
freeformTags,
schedules,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: volume_backup_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the volume_backup_policies resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a
        namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: destinationRegion
      value: "{{ destinationRegion }}"
      description: |
        The paired destination region for copying scheduled backups to. Example: \`us-ashburn-1\`.
        See [Region Pairs](/iaas/Content/Block/Tasks/schedulingvolumebackups.htm#RegionPairs) for details about paired regions.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. Does not have to be unique, and it's changeable.
        Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: schedules
      description: |
        The collection of schedules for the volume backup policy. See
        see [Schedules](/iaas/Content/Block/Tasks/schedulingvolumebackups.htm#schedules) in
        [Policy-Based Backups](/iaas/Content/Block/Tasks/schedulingvolumebackups.htm) for more information.
      value:
        - backupType: "{{ backupType }}"
          dayOfMonth: {{ dayOfMonth }}
          dayOfWeek: "{{ dayOfWeek }}"
          hourOfDay: {{ hourOfDay }}
          month: "{{ month }}"
          offsetSeconds: {{ offsetSeconds }}
          offsetType: "{{ offsetType }}"
          period: "{{ period }}"
          retentionSeconds: {{ retentionSeconds }}
          timeZone: "{{ timeZone }}"
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a user defined backup policy.&lt;br /&gt; For more information about user defined backup policies,&lt;br /&gt; see &#91;Policy-Based Backups&#93;(/iaas/Content/Block/Tasks/schedulingvolumebackups.htm#UserDefinedBackupPolicies).&lt;br /&gt;&lt;br /&gt; Avoid entering confidential information.&lt;br /&gt;

```sql
UPDATE oci.block_storage.volume_backup_policies
SET 
definedTags = '{{ definedTags }}',
destinationRegion = '{{ destinationRegion }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
schedules = '{{ schedules }}'
WHERE 
policyId = '{{ policyId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
AND opc-retry-token = '{{ opc-retry-token}}'
RETURNING
id,
compartmentId,
definedTags,
destinationRegion,
displayName,
freeformTags,
schedules,
timeCreated;
```
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

Deletes a user defined backup policy.&lt;br /&gt; For more information about user defined backup policies,&lt;br /&gt; see &#91;Policy-Based Backups&#93;(/iaas/Content/Block/Tasks/schedulingvolumebackups.htm#UserDefinedBackupPolicies).&lt;br /&gt;&lt;br /&gt; Avoid entering confidential information.&lt;br /&gt;

```sql
DELETE FROM oci.block_storage.volume_backup_policies
WHERE policyId = '{{ policyId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
