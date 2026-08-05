--- 
title: boot_volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - boot_volumes
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

Creates, updates, deletes, gets or lists a <code>boot_volumes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="boot_volumes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.block_storage.boot_volumes" /></td></tr>
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

The boot volume's information has been retrieved.

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
    <td>The boot volume's Oracle ID (OCID).</td>
</tr>
<tr>
    <td><CopyableCode code="autoTunedVpusPerGB" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of Volume Performance Units per GB that this boot volume is effectively tuned to. </td>
</tr>
<tr>
    <td><CopyableCode code="autotunePolicies" /></td>
    <td><code>array</code></td>
    <td>The list of autotune policies enabled for this volume.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the boot volume.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="bootVolumeReplicas" /></td>
    <td><code>array</code></td>
    <td>The list of boot volume replicas of this boot volume</td>
</tr>
<tr>
    <td><CopyableCode code="clusterPlacementGroupId" /></td>
    <td><code>string</code></td>
    <td>The clusterPlacementGroup Id of the volume for volume placement.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the boot volume.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
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
    <td><CopyableCode code="imageId" /></td>
    <td><code>string</code></td>
    <td>The image OCID used to create the boot volume.</td>
</tr>
<tr>
    <td><CopyableCode code="isAutoTuneEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the auto-tune performance is enabled for this boot volume. This field is deprecated. Use the `DetachedVolumeAutotunePolicy` instead to enable the volume for detached autotune. </td>
</tr>
<tr>
    <td><CopyableCode code="isHydrated" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the boot volume's data has finished copying from the source boot volume or boot volume backup. </td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Vault service master encryption key assigned to the boot volume.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of a boot volume. (PROVISIONING, RESTORING, AVAILABLE, TERMINATING, TERMINATED, FAULTY)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInGBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the boot volume in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInMBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the volume in MBs. The value must be a multiple of 1024. This field is deprecated. Please use sizeInGBs. </td>
</tr>
<tr>
    <td><CopyableCode code="sourceDetails" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the boot volume was created. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="volumeGroupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the source volume group.</td>
</tr>
<tr>
    <td><CopyableCode code="vpusPerGB" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of volume performance units (VPUs) that will be applied to this boot volume per GB, representing the Block Volume service's elastic performance options. See &#91;Block Volume Performance Levels&#93;(/iaas/Content/Block/Concepts/blockvolumeperformance.htm#perf_levels) for more information.  Allowed values:    * `10`: Represents Balanced option.    * `20`: Represents Higher Performance option.    * `30`-`120`: Represents the Ultra High Performance option.  For performance autotune enabled volumes, it would be the Default(Minimum) VPUs/GB. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A detachable boot volume device that contains the image used to boot a Compute instance. For more information, see&lt;br /&gt;&#91;Overview of Boot Volumes&#93;(/iaas/Content/Block/Concepts/bootvolumes.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you&lt;br /&gt;supply string values using the API.&lt;br /&gt;

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
    <td>The boot volume's Oracle ID (OCID).</td>
</tr>
<tr>
    <td><CopyableCode code="autoTunedVpusPerGB" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of Volume Performance Units per GB that this boot volume is effectively tuned to. </td>
</tr>
<tr>
    <td><CopyableCode code="autotunePolicies" /></td>
    <td><code>array</code></td>
    <td>The list of autotune policies enabled for this volume.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain of the boot volume.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="bootVolumeReplicas" /></td>
    <td><code>array</code></td>
    <td>The list of boot volume replicas of this boot volume</td>
</tr>
<tr>
    <td><CopyableCode code="clusterPlacementGroupId" /></td>
    <td><code>string</code></td>
    <td>The clusterPlacementGroup Id of the volume for volume placement.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the boot volume.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
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
    <td><CopyableCode code="imageId" /></td>
    <td><code>string</code></td>
    <td>The image OCID used to create the boot volume.</td>
</tr>
<tr>
    <td><CopyableCode code="isAutoTuneEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the auto-tune performance is enabled for this boot volume. This field is deprecated. Use the `DetachedVolumeAutotunePolicy` instead to enable the volume for detached autotune. </td>
</tr>
<tr>
    <td><CopyableCode code="isHydrated" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the boot volume's data has finished copying from the source boot volume or boot volume backup. </td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Vault service master encryption key assigned to the boot volume.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of a boot volume. (PROVISIONING, RESTORING, AVAILABLE, TERMINATING, TERMINATED, FAULTY)</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInGBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the boot volume in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="sizeInMBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the volume in MBs. The value must be a multiple of 1024. This field is deprecated. Please use sizeInGBs. </td>
</tr>
<tr>
    <td><CopyableCode code="sourceDetails" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the boot volume was created. Format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). </td>
</tr>
<tr>
    <td><CopyableCode code="volumeGroupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the source volume group.</td>
</tr>
<tr>
    <td><CopyableCode code="vpusPerGB" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of volume performance units (VPUs) that will be applied to this boot volume per GB, representing the Block Volume service's elastic performance options. See &#91;Block Volume Performance Levels&#93;(/iaas/Content/Block/Concepts/blockvolumeperformance.htm#perf_levels) for more information.  Allowed values:    * `10`: Represents Balanced option.    * `20`: Represents Higher Performance option.    * `30`-`120`: Represents the Ultra High Performance option.  For performance autotune enabled volumes, it would be the Default(Minimum) VPUs/GB. </td>
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
    <td><a href="#parameter-bootVolumeId"><code>bootVolumeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information for the specified boot volume.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-volumeGroupId"><code>volumeGroupId</code></a></td>
    <td>Lists the boot volumes in the specified compartment and availability domain.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-sourceDetails"><code>sourceDetails</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new boot volume in the specified compartment from an existing boot volume or a boot volume backup.&lt;br /&gt;For general information about boot volumes, see &#91;Boot Volumes&#93;(/iaas/Content/Block/Concepts/bootvolumes.htm).&lt;br /&gt;You may optionally specify a *display name* for the volume, which is simply a friendly name or&lt;br /&gt;description. It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bootVolumeId"><code>bootVolumeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified boot volume's display name, defined tags, and free-form tags.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bootVolumeId"><code>bootVolumeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified boot volume. The volume cannot have an active connection to an instance.&lt;br /&gt;To disconnect the boot volume from a connected instance, see&lt;br /&gt;&#91;Disconnecting From a Boot Volume&#93;(/iaas/Content/Block/Tasks/deletingbootvolume.htm).&lt;br /&gt;**Warning:** All data on the boot volume will be permanently lost when the boot volume is deleted.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-bootVolumeId"><code>bootVolumeId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Moves a boot volume into a different compartment within the same tenancy.&lt;br /&gt;For information about moving resources between compartments,&lt;br /&gt;see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
<tr id="parameter-bootVolumeId">
    <td><CopyableCode code="bootVolumeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the boot volume.</td>
</tr>
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
<tr id="parameter-volumeGroupId">
    <td><CopyableCode code="volumeGroupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the volume group.</td>
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

Gets information for the specified boot volume.

```sql
SELECT
id,
autoTunedVpusPerGB,
autotunePolicies,
availabilityDomain,
bootVolumeReplicas,
clusterPlacementGroupId,
compartmentId,
definedTags,
displayName,
freeformTags,
imageId,
isAutoTuneEnabled,
isHydrated,
kmsKeyId,
lifecycleState,
sizeInGBs,
sizeInMBs,
sourceDetails,
timeCreated,
volumeGroupId,
vpusPerGB
FROM oci.block_storage.boot_volumes
WHERE bootVolumeId = '{{ bootVolumeId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the boot volumes in the specified compartment and availability domain.&lt;br /&gt;

```sql
SELECT
id,
autoTunedVpusPerGB,
autotunePolicies,
availabilityDomain,
bootVolumeReplicas,
clusterPlacementGroupId,
compartmentId,
definedTags,
displayName,
freeformTags,
imageId,
isAutoTuneEnabled,
isHydrated,
kmsKeyId,
lifecycleState,
sizeInGBs,
sizeInMBs,
sourceDetails,
timeCreated,
volumeGroupId,
vpusPerGB
FROM oci.block_storage.boot_volumes
WHERE availabilityDomain = '{{ availabilityDomain }}' -- required
AND compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND volumeGroupId = '{{ volumeGroupId }}'
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

Creates a new boot volume in the specified compartment from an existing boot volume or a boot volume backup.&lt;br /&gt;For general information about boot volumes, see &#91;Boot Volumes&#93;(/iaas/Content/Block/Concepts/bootvolumes.htm).&lt;br /&gt;You may optionally specify a *display name* for the volume, which is simply a friendly name or&lt;br /&gt;description. It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;

```sql
INSERT INTO oci.block_storage.boot_volumes (
autotunePolicies,
availabilityDomain,
bootVolumeReplicas,
clusterPlacementGroupId,
compartmentId,
definedTags,
displayName,
freeformTags,
isAutoTuneEnabled,
kmsKeyId,
sizeInGBs,
sourceDetails,
vpusPerGB,
region,
opc-retry-token
)
SELECT 
'{{ autotunePolicies }}',
'{{ availabilityDomain }}',
'{{ bootVolumeReplicas }}',
'{{ clusterPlacementGroupId }}',
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
{{ isAutoTuneEnabled }},
'{{ kmsKeyId }}',
{{ sizeInGBs }},
'{{ sourceDetails }}' /* required */,
{{ vpusPerGB }},
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
autoTunedVpusPerGB,
autotunePolicies,
availabilityDomain,
bootVolumeReplicas,
clusterPlacementGroupId,
compartmentId,
definedTags,
displayName,
freeformTags,
imageId,
isAutoTuneEnabled,
isHydrated,
kmsKeyId,
lifecycleState,
sizeInGBs,
sizeInMBs,
sourceDetails,
timeCreated,
volumeGroupId,
vpusPerGB
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: boot_volumes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the boot_volumes resource.
    - name: autotunePolicies
      description: |
        The list of autotune policies to be enabled for this volume.
      value:
        - autotuneType: "{{ autotuneType }}"
    - name: availabilityDomain
      value: "{{ availabilityDomain }}"
      description: |
        The availability domain of the volume. Omissible for cloning a volume. The new volume will be created in the availability domain of the source volume.
        Example: \`Uocm:PHX-AD-1\`
    - name: bootVolumeReplicas
      description: |
        The list of boot volume replicas to be enabled for this boot volume
        in the specified destination availability domains.
      value:
        - availabilityDomain: "{{ availabilityDomain }}"
          displayName: "{{ displayName }}"
    - name: clusterPlacementGroupId
      value: "{{ clusterPlacementGroupId }}"
      description: |
        The clusterPlacementGroup Id of the volume for volume placement.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment that contains the boot volume.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a
        namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
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
    - name: isAutoTuneEnabled
      value: {{ isAutoTuneEnabled }}
      description: |
        Specifies whether the auto-tune performance is enabled for this boot volume. This field is deprecated.
        Use the \`DetachedVolumeAutotunePolicy\` instead to enable the volume for detached autotune.
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        The OCID of the Vault service key to assign as the master encryption key
        for the boot volume.
    - name: sizeInGBs
      value: {{ sizeInGBs }}
      description: |
        The size of the volume in GBs.
    - name: sourceDetails
      value:
        type: "{{ type }}"
    - name: vpusPerGB
      value: {{ vpusPerGB }}
      description: |
        The number of volume performance units (VPUs) that will be applied to this volume per GB,
        representing the Block Volume service's elastic performance options.
        See [Block Volume Performance Levels](/iaas/Content/Block/Concepts/blockvolumeperformance.htm#perf_levels) for more information.
        Allowed values:
        * \`10\`: Represents the Balanced option.
        * \`20\`: Represents the Higher Performance option.
        * \`30\`-\`120\`: Represents the Ultra High Performance option.
        For performance autotune enabled volumes, it would be the Default(Minimum) VPUs/GB.
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

Updates the specified boot volume's display name, defined tags, and free-form tags.

```sql
UPDATE oci.block_storage.boot_volumes
SET 
autotunePolicies = '{{ autotunePolicies }}',
bootVolumeReplicas = '{{ bootVolumeReplicas }}',
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
isAutoTuneEnabled = {{ isAutoTuneEnabled }},
sizeInGBs = {{ sizeInGBs }},
vpusPerGB = {{ vpusPerGB }}
WHERE 
bootVolumeId = '{{ bootVolumeId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
autoTunedVpusPerGB,
autotunePolicies,
availabilityDomain,
bootVolumeReplicas,
clusterPlacementGroupId,
compartmentId,
definedTags,
displayName,
freeformTags,
imageId,
isAutoTuneEnabled,
isHydrated,
kmsKeyId,
lifecycleState,
sizeInGBs,
sizeInMBs,
sourceDetails,
timeCreated,
volumeGroupId,
vpusPerGB;
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

Deletes the specified boot volume. The volume cannot have an active connection to an instance.&lt;br /&gt;To disconnect the boot volume from a connected instance, see&lt;br /&gt;&#91;Disconnecting From a Boot Volume&#93;(/iaas/Content/Block/Tasks/deletingbootvolume.htm).&lt;br /&gt;**Warning:** All data on the boot volume will be permanently lost when the boot volume is deleted.&lt;br /&gt;

```sql
DELETE FROM oci.block_storage.boot_volumes
WHERE bootVolumeId = '{{ bootVolumeId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_compartment"
    values={[
        { label: 'change_compartment', value: 'change_compartment' }
    ]}
>
<TabItem value="change_compartment">

Moves a boot volume into a different compartment within the same tenancy.&lt;br /&gt;For information about moving resources between compartments,&lt;br /&gt;see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.block_storage.boot_volumes.change_compartment 
@bootVolumeId='{{ bootVolumeId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
</Tabs>
