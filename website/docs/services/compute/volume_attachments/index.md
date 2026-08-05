--- 
title: volume_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - volume_attachments
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

Creates, updates, deletes, gets or lists a <code>volume_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volume_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.volume_attachments" /></td></tr>
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

The volume attachment was retrieved.

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
    <td>The OCID of the volume attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="attachmentType" /></td>
    <td><code>string</code></td>
    <td>The type of volume attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of an instance.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="device" /></td>
    <td><code>string</code></td>
    <td>The device name.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the instance the volume is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="isMultipath" /></td>
    <td><code>boolean</code></td>
    <td>Whether the Iscsi or Paravirtualized attachment is multipath or not, it is not applicable to NVMe attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="isPvEncryptionInTransitEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether in-transit encryption for the data volume's paravirtualized attachment is enabled or not. </td>
</tr>
<tr>
    <td><CopyableCode code="isReadOnly" /></td>
    <td><code>boolean</code></td>
    <td>Whether the attachment was created in read-only mode.</td>
</tr>
<tr>
    <td><CopyableCode code="isShareable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the attachment should be created in shareable mode. If an attachment is created in shareable mode, then other instances can attach the same volume, provided that they also create their attachments in shareable mode. Only certain volume types can be attached in shareable mode. Defaults to false if not specified. </td>
</tr>
<tr>
    <td><CopyableCode code="isVolumeCreatedDuringLaunch" /></td>
    <td><code>boolean</code></td>
    <td>Flag indicating if this volume was created for the customer as part of a simplified launch. Used to determine whether the volume requires deletion on instance termination. </td>
</tr>
<tr>
    <td><CopyableCode code="iscsiLoginState" /></td>
    <td><code>string</code></td>
    <td>The iscsi login state of the volume attachment. For a Iscsi volume attachment, all iscsi sessions need to be all logged-in or logged-out to be in logged-in or logged-out state.  (UNKNOWN, LOGGING_IN, LOGIN_SUCCEEDED, LOGIN_FAILED, LOGGING_OUT, LOGOUT_SUCCEEDED, LOGOUT_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the volume attachment. (ATTACHING, ATTACHED, DETACHING, DETACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the volume was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="volumeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the volume.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A base object for all types of attachments between a storage volume and an instance.&lt;br /&gt;For specific details about iSCSI attachments, see&lt;br /&gt;&#91;IScsiVolumeAttachment Reference&#93;(#/en/iaas/latest/IScsiVolumeAttachment/).&lt;br /&gt;&lt;br /&gt;For general information about volume attachments, see&lt;br /&gt;&#91;Overview of Block Volume Storage&#93;(/iaas/Content/Block/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you&lt;br /&gt;supply string values using the API.&lt;br /&gt;

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
    <td>The OCID of the volume attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="attachmentType" /></td>
    <td><code>string</code></td>
    <td>The type of volume attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of an instance.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="device" /></td>
    <td><code>string</code></td>
    <td>The device name.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the instance the volume is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="isMultipath" /></td>
    <td><code>boolean</code></td>
    <td>Whether the Iscsi or Paravirtualized attachment is multipath or not, it is not applicable to NVMe attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="isPvEncryptionInTransitEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether in-transit encryption for the data volume's paravirtualized attachment is enabled or not. </td>
</tr>
<tr>
    <td><CopyableCode code="isReadOnly" /></td>
    <td><code>boolean</code></td>
    <td>Whether the attachment was created in read-only mode.</td>
</tr>
<tr>
    <td><CopyableCode code="isShareable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the attachment should be created in shareable mode. If an attachment is created in shareable mode, then other instances can attach the same volume, provided that they also create their attachments in shareable mode. Only certain volume types can be attached in shareable mode. Defaults to false if not specified. </td>
</tr>
<tr>
    <td><CopyableCode code="isVolumeCreatedDuringLaunch" /></td>
    <td><code>boolean</code></td>
    <td>Flag indicating if this volume was created for the customer as part of a simplified launch. Used to determine whether the volume requires deletion on instance termination. </td>
</tr>
<tr>
    <td><CopyableCode code="iscsiLoginState" /></td>
    <td><code>string</code></td>
    <td>The iscsi login state of the volume attachment. For a Iscsi volume attachment, all iscsi sessions need to be all logged-in or logged-out to be in logged-in or logged-out state.  (UNKNOWN, LOGGING_IN, LOGIN_SUCCEEDED, LOGIN_FAILED, LOGGING_OUT, LOGOUT_SUCCEEDED, LOGOUT_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the volume attachment. (ATTACHING, ATTACHED, DETACHING, DETACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the volume was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="volumeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the volume.</td>
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
    <td><a href="#parameter-volumeAttachmentId"><code>volumeAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified volume attachment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-volumeId"><code>volumeId</code></a></td>
    <td>Lists the volume attachments in the specified compartment. You can filter the&lt;br /&gt;list by specifying an instance OCID, volume OCID, or both.&lt;br /&gt;&lt;br /&gt;Currently, the only supported volume attachment type are &#91;IScsiVolumeAttachment&#93;(#/en/iaas/latest/IScsiVolumeAttachment/) and&lt;br /&gt;&#91;ParavirtualizedVolumeAttachment&#93;(#/en/iaas/latest/ParavirtualizedVolumeAttachment/).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#attach"><CopyableCode code="attach" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-volumeId"><code>volumeId</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Attaches the specified storage volume to the specified instance.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-volumeAttachmentId"><code>volumeAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates information about the specified volume attachment.</td>
</tr>
<tr>
    <td><a href="#detach"><CopyableCode code="detach" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-volumeAttachmentId"><code>volumeAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Detaches a storage volume from an instance. You must specify the OCID of the volume attachment.&lt;br /&gt;&lt;br /&gt;This is an asynchronous operation. The attachment's `lifecycleState` will change to DETACHING temporarily&lt;br /&gt;until the attachment is completely removed.&lt;br /&gt;</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-volumeAttachmentId">
    <td><CopyableCode code="volumeAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the volume attachment.</td>
</tr>
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the instance.</td>
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
<tr id="parameter-volumeId">
    <td><CopyableCode code="volumeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the volume.</td>
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

Gets information about the specified volume attachment.

```sql
SELECT
id,
attachmentType,
availabilityDomain,
compartmentId,
device,
displayName,
instanceId,
isMultipath,
isPvEncryptionInTransitEnabled,
isReadOnly,
isShareable,
isVolumeCreatedDuringLaunch,
iscsiLoginState,
lifecycleState,
timeCreated,
volumeId
FROM oci.compute.volume_attachments
WHERE volumeAttachmentId = '{{ volumeAttachmentId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the volume attachments in the specified compartment. You can filter the&lt;br /&gt;list by specifying an instance OCID, volume OCID, or both.&lt;br /&gt;&lt;br /&gt;Currently, the only supported volume attachment type are &#91;IScsiVolumeAttachment&#93;(#/en/iaas/latest/IScsiVolumeAttachment/) and&lt;br /&gt;&#91;ParavirtualizedVolumeAttachment&#93;(#/en/iaas/latest/ParavirtualizedVolumeAttachment/).&lt;br /&gt;

```sql
SELECT
id,
attachmentType,
availabilityDomain,
compartmentId,
device,
displayName,
instanceId,
isMultipath,
isPvEncryptionInTransitEnabled,
isReadOnly,
isShareable,
isVolumeCreatedDuringLaunch,
iscsiLoginState,
lifecycleState,
timeCreated,
volumeId
FROM oci.compute.volume_attachments
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND availabilityDomain = '{{ availabilityDomain }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND instanceId = '{{ instanceId }}'
AND volumeId = '{{ volumeId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="attach"
    values={[
        { label: 'attach', value: 'attach' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="attach">

Attaches the specified storage volume to the specified instance.&lt;br /&gt;

```sql
INSERT INTO oci.compute.volume_attachments (
device,
displayName,
instanceId,
isReadOnly,
isShareable,
type,
volumeId,
region,
opc-retry-token
)
SELECT 
'{{ device }}',
'{{ displayName }}',
'{{ instanceId }}' /* required */,
{{ isReadOnly }},
{{ isShareable }},
'{{ type }}' /* required */,
'{{ volumeId }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
attachmentType,
availabilityDomain,
compartmentId,
device,
displayName,
instanceId,
isMultipath,
isPvEncryptionInTransitEnabled,
isReadOnly,
isShareable,
isVolumeCreatedDuringLaunch,
iscsiLoginState,
lifecycleState,
timeCreated,
volumeId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: volume_attachments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the volume_attachments resource.
    - name: device
      value: "{{ device }}"
      description: |
        The device name. To retrieve a list of devices for a given instance, see [ListInstanceDevices](#/en/iaas/latest/Device/ListInstanceDevices).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. Does not have to be unique, and it's changeable.
        Avoid entering confidential information.
    - name: instanceId
      value: "{{ instanceId }}"
      description: |
        The OCID of the instance. For AttachVolume operation, this is a required field for the request,
        see [AttachVolume](#/en/iaas/latest/VolumeAttachment/AttachVolume).
    - name: isReadOnly
      value: {{ isReadOnly }}
      description: |
        Whether the attachment was created in read-only mode.
    - name: isShareable
      value: {{ isShareable }}
      description: |
        Whether the attachment should be created in shareable mode. If an attachment
        is created in shareable mode, then other instances can attach the same volume, provided
        that they also create their attachments in shareable mode. Only certain volume types can
        be attached in shareable mode. Defaults to false if not specified.
    - name: type
      value: "{{ type }}"
      description: |
        The type of volume. The only supported values are "iscsi" and "paravirtualized".
    - name: volumeId
      value: "{{ volumeId }}"
      description: |
        The OCID of the volume. If CreateVolumeDetails is specified, this field must be omitted from the request.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
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

Updates information about the specified volume attachment.

```sql
UPDATE oci.compute.volume_attachments
SET 
iscsiLoginState = '{{ iscsiLoginState }}'
WHERE 
volumeAttachmentId = '{{ volumeAttachmentId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
attachmentType,
availabilityDomain,
compartmentId,
device,
displayName,
instanceId,
isMultipath,
isPvEncryptionInTransitEnabled,
isReadOnly,
isShareable,
isVolumeCreatedDuringLaunch,
iscsiLoginState,
lifecycleState,
timeCreated,
volumeId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="detach"
    values={[
        { label: 'detach', value: 'detach' }
    ]}
>
<TabItem value="detach">

Detaches a storage volume from an instance. You must specify the OCID of the volume attachment.&lt;br /&gt;&lt;br /&gt;This is an asynchronous operation. The attachment's `lifecycleState` will change to DETACHING temporarily&lt;br /&gt;until the attachment is completely removed.&lt;br /&gt;

```sql
DELETE FROM oci.compute.volume_attachments
WHERE volumeAttachmentId = '{{ volumeAttachmentId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
