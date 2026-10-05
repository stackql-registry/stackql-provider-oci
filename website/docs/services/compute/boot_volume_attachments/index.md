--- 
title: boot_volume_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - boot_volume_attachments
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

Creates, updates, deletes, gets or lists a <code>boot_volume_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="boot_volume_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.boot_volume_attachments" /></td></tr>
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

The boot volume attachment was retrieved.

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
    <td>The OCID of the boot volume attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of an instance.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="bootVolumeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the boot volume.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="encryptionInTransitType" /></td>
    <td><code>string</code></td>
    <td>Refer the top-level definition of encryptionInTransitType. The default value is NONE.  (NONE, BM_ENCRYPTION_IN_TRANSIT) (default: NONE, x-obmcs-top-level-enum: #/definitions/EncryptionInTransitType)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the instance the boot volume is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="isPvEncryptionInTransitEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether in-transit encryption for the boot volume's paravirtualized attachment is enabled or not. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the boot volume attachment. (ATTACHING, ATTACHED, DETACHING, DETACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the boot volume was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the boot volume attachment was updated, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Represents an attachment between a boot volume and an instance.&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you&lt;br /&gt;supply string values using the API.&lt;br /&gt;

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
    <td>The OCID of the boot volume attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of an instance.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="bootVolumeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the boot volume.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="encryptionInTransitType" /></td>
    <td><code>string</code></td>
    <td>Refer the top-level definition of encryptionInTransitType. The default value is NONE.  (NONE, BM_ENCRYPTION_IN_TRANSIT) (default: NONE, x-obmcs-top-level-enum: #/definitions/EncryptionInTransitType)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the instance the boot volume is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="isPvEncryptionInTransitEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether in-transit encryption for the boot volume's paravirtualized attachment is enabled or not. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the boot volume attachment. (ATTACHING, ATTACHED, DETACHING, DETACHED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the boot volume was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the boot volume attachment was updated, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-bootVolumeAttachmentId"><code>bootVolumeAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified boot volume attachment.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-bootVolumeId"><code>bootVolumeId</code></a></td>
    <td>Lists the boot volume attachments in the specified compartment. You can filter the&lt;br /&gt;list by specifying an instance OCID, boot volume OCID, or both.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#attach"><CopyableCode code="attach" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-bootVolumeId"><code>bootVolumeId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Attaches the specified boot volume to the specified instance.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#detach"><CopyableCode code="detach" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bootVolumeAttachmentId"><code>bootVolumeAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Detaches a boot volume from an instance. You must specify the OCID of the boot volume attachment.&lt;br /&gt;&lt;br /&gt;This is an asynchronous operation. The attachment's `lifecycleState` will change to DETACHING temporarily&lt;br /&gt;until the attachment is completely removed.&lt;br /&gt;</td>
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
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr id="parameter-bootVolumeAttachmentId">
    <td><CopyableCode code="bootVolumeAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the boot volume attachment.</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-bootVolumeId">
    <td><CopyableCode code="bootVolumeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the boot volume.</td>
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

Gets information about the specified boot volume attachment.

```sql
SELECT
id,
availabilityDomain,
bootVolumeId,
compartmentId,
displayName,
encryptionInTransitType,
instanceId,
isPvEncryptionInTransitEnabled,
lifecycleState,
timeCreated,
timeUpdated
FROM oci.compute.boot_volume_attachments
WHERE bootVolumeAttachmentId = '{{ bootVolumeAttachmentId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the boot volume attachments in the specified compartment. You can filter the&lt;br /&gt;list by specifying an instance OCID, boot volume OCID, or both.&lt;br /&gt;

```sql
SELECT
id,
availabilityDomain,
bootVolumeId,
compartmentId,
displayName,
encryptionInTransitType,
instanceId,
isPvEncryptionInTransitEnabled,
lifecycleState,
timeCreated,
timeUpdated
FROM oci.compute.boot_volume_attachments
WHERE availabilityDomain = '{{ availabilityDomain }}' -- required
AND compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND instanceId = '{{ instanceId }}'
AND bootVolumeId = '{{ bootVolumeId }}'
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

Attaches the specified boot volume to the specified instance.&lt;br /&gt;

```sql
INSERT INTO oci.compute.boot_volume_attachments (
bootVolumeId,
displayName,
encryptionInTransitType,
instanceId,
region,
opc-retry-token
)
SELECT 
'{{ bootVolumeId }}' /* required */,
'{{ displayName }}',
'{{ encryptionInTransitType }}',
'{{ instanceId }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
availabilityDomain,
bootVolumeId,
compartmentId,
displayName,
encryptionInTransitType,
instanceId,
isPvEncryptionInTransitEnabled,
lifecycleState,
timeCreated,
timeUpdated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: boot_volume_attachments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the boot_volume_attachments resource.
    - name: bootVolumeId
      value: "{{ bootVolumeId }}"
      description: |
        The OCID of the  boot volume.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. Does not have to be unique, and it's changeable.
        Avoid entering confidential information.
    - name: encryptionInTransitType
      value: "{{ encryptionInTransitType }}"
      description: |
        Refer the top-level definition of encryptionInTransitType.
        The default value is NONE.
      valid_values: ['NONE', 'BM_ENCRYPTION_IN_TRANSIT']
      default: NONE
    - name: instanceId
      value: "{{ instanceId }}"
      description: |
        The OCID of the instance.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
`}</CodeBlock>

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

Detaches a boot volume from an instance. You must specify the OCID of the boot volume attachment.&lt;br /&gt;&lt;br /&gt;This is an asynchronous operation. The attachment's `lifecycleState` will change to DETACHING temporarily&lt;br /&gt;until the attachment is completely removed.&lt;br /&gt;

```sql
DELETE FROM oci.compute.boot_volume_attachments
WHERE bootVolumeAttachmentId = '{{ bootVolumeAttachmentId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
