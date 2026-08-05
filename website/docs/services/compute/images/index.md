--- 
title: images
hide_title: false
hide_table_of_contents: false
keywords:
  - images
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

Creates, updates, deletes, gets or lists an <code>images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.images" /></td></tr>
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

The image was retrieved.

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
    <td>The OCID of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="agentFeatures" /></td>
    <td><code>object</code></td>
    <td>Oracle Cloud Agent features supported on the image.</td>
</tr>
<tr>
    <td><CopyableCode code="baseImageId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the image originally used to launch the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="billableSizeInGBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the internal storage for this image that is subject to billing (1 GB = 1,073,741,824 bytes).  Example: `100` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the instance you want to use as the basis for the image. </td>
</tr>
<tr>
    <td><CopyableCode code="createImageAllowed" /></td>
    <td><code>boolean</code></td>
    <td>Whether instances launched with this image can be used to create new images. For example, you cannot create an image of an Oracle Database instance.  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the image. It does not have to be unique, and it's changeable. Avoid entering confidential information.  You cannot use a platform image name as a custom image name.  Example: `My custom Oracle Linux image` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="launchMode" /></td>
    <td><code>string</code></td>
    <td>Specifies the configuration mode for launching virtual machine (VM) instances. The configuration modes are: * `NATIVE` - VM instances launch with iSCSI boot and VFIO devices. The default value for platform images. * `EMULATED` - VM instances launch with emulated devices, such as the E1000 network driver and emulated SCSI disk controller. * `PARAVIRTUALIZED` - VM instances launch with paravirtualized devices using VirtIO drivers. * `ACCELERATEDPV` - VM instances launch with accelerated paravirtualized networking type. * `CUSTOM` - VM instances launch with custom configuration settings specified in the `LaunchOptions` parameter.  (NATIVE, EMULATED, PARAVIRTUALIZED, ACCELERATEDPV, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="launchOptions" /></td>
    <td><code>object</code></td>
    <td>Options for tuning the compatibility and performance of VM shapes. The values that you specify override any default values. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td> (PROVISIONING, IMPORTING, AVAILABLE, EXPORTING, DISABLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="operatingSystem" /></td>
    <td><code>string</code></td>
    <td>The image's operating system.  Example: `Oracle Linux` </td>
</tr>
<tr>
    <td><CopyableCode code="operatingSystemVersion" /></td>
    <td><code>string</code></td>
    <td>The image's operating system version.  Example: `7.2` </td>
</tr>
<tr>
    <td><CopyableCode code="sizeInMBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The boot volume size for an instance launched from this image (1 MB = 1,048,576 bytes). Note this is not the same as the size of the image when it was exported or the actual size of the image.  Example: `47694` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the image was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A boot disk image for launching an instance. For more information, see&lt;br /&gt;&#91;Overview of the Compute Service&#93;(/iaas/Content/Compute/Concepts/computeoverview.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you&lt;br /&gt;supply string values using the API.&lt;br /&gt;

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
    <td>The OCID of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="agentFeatures" /></td>
    <td><code>object</code></td>
    <td>Oracle Cloud Agent features supported on the image.</td>
</tr>
<tr>
    <td><CopyableCode code="baseImageId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the image originally used to launch the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="billableSizeInGBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the internal storage for this image that is subject to billing (1 GB = 1,073,741,824 bytes).  Example: `100` </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the instance you want to use as the basis for the image. </td>
</tr>
<tr>
    <td><CopyableCode code="createImageAllowed" /></td>
    <td><code>boolean</code></td>
    <td>Whether instances launched with this image can be used to create new images. For example, you cannot create an image of an Oracle Database instance.  Example: `true` </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the image. It does not have to be unique, and it's changeable. Avoid entering confidential information.  You cannot use a platform image name as a custom image name.  Example: `My custom Oracle Linux image` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="launchMode" /></td>
    <td><code>string</code></td>
    <td>Specifies the configuration mode for launching virtual machine (VM) instances. The configuration modes are: * `NATIVE` - VM instances launch with iSCSI boot and VFIO devices. The default value for platform images. * `EMULATED` - VM instances launch with emulated devices, such as the E1000 network driver and emulated SCSI disk controller. * `PARAVIRTUALIZED` - VM instances launch with paravirtualized devices using VirtIO drivers. * `ACCELERATEDPV` - VM instances launch with accelerated paravirtualized networking type. * `CUSTOM` - VM instances launch with custom configuration settings specified in the `LaunchOptions` parameter.  (NATIVE, EMULATED, PARAVIRTUALIZED, ACCELERATEDPV, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="launchOptions" /></td>
    <td><code>object</code></td>
    <td>Options for tuning the compatibility and performance of VM shapes. The values that you specify override any default values. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td> (PROVISIONING, IMPORTING, AVAILABLE, EXPORTING, DISABLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="operatingSystem" /></td>
    <td><code>string</code></td>
    <td>The image's operating system.  Example: `Oracle Linux` </td>
</tr>
<tr>
    <td><CopyableCode code="operatingSystemVersion" /></td>
    <td><code>string</code></td>
    <td>The image's operating system version.  Example: `7.2` </td>
</tr>
<tr>
    <td><CopyableCode code="sizeInMBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>The boot volume size for an instance launched from this image (1 MB = 1,048,576 bytes). Note this is not the same as the size of the image when it was exported or the actual size of the image.  Example: `47694` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the image was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-imageId"><code>imageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified image.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-operatingSystem"><code>operatingSystem</code></a>, <a href="#parameter-operatingSystemVersion"><code>operatingSystemVersion</code></a>, <a href="#parameter-shape"><code>shape</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists a subset of images available in the specified compartment, including&lt;br /&gt;&#91;platform images&#93;(/iaas/Content/Compute/References/images.htm) and&lt;br /&gt;&#91;custom images&#93;(/iaas/Content/Compute/Tasks/managingcustomimages.htm).&lt;br /&gt;The list of platform images includes the three most recently published versions&lt;br /&gt;of each major distribution. The list does not support filtering based on image tags.&lt;br /&gt;&lt;br /&gt;The list of images returned is ordered to first show the recent platform images,&lt;br /&gt;then all of the custom images.&lt;br /&gt;&lt;br /&gt;**Caution:** Platform images are refreshed regularly. When new images are released, older versions are replaced.&lt;br /&gt;The image OCIDs remain available, but when the platform image is replaced, the image OCIDs are no longer returned as part of the platform image list.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a boot disk image for the specified instance or imports an exported image from the Oracle Cloud Infrastructure Object Storage service.&lt;br /&gt;&lt;br /&gt;When creating a new image, you must provide the OCID of the instance you want to use as the basis for the image, and&lt;br /&gt;the OCID of the compartment containing that instance. For more information about images,&lt;br /&gt;see &#91;Managing Custom Images&#93;(/iaas/Content/Compute/Tasks/managingcustomimages.htm).&lt;br /&gt;&lt;br /&gt;When importing an exported image from Object Storage, you specify the source information&lt;br /&gt;in &#91;ImageSourceDetails&#93;(#/en/iaas/latest/requests/ImageSourceDetails).&lt;br /&gt;&lt;br /&gt;When importing an image based on the namespace, bucket name, and object name,&lt;br /&gt;use &#91;ImageSourceViaObjectStorageTupleDetails&#93;(#/en/iaas/latest/requests/ImageSourceViaObjectStorageTupleDetails).&lt;br /&gt;&lt;br /&gt;When importing an image based on the Object Storage URL, use&lt;br /&gt;&#91;ImageSourceViaObjectStorageUriDetails&#93;(#/en/iaas/latest/requests/ImageSourceViaObjectStorageUriDetails).&lt;br /&gt;See &#91;Object Storage URLs&#93;(/iaas/Content/Compute/Tasks/imageimportexport.htm#URLs) and &#91;Using Pre-Authenticated Requests&#93;(/iaas/Content/Object/Tasks/usingpreauthenticatedrequests.htm)&lt;br /&gt;for constructing URLs for image import/export.&lt;br /&gt;&lt;br /&gt;For more information about importing exported images, see&lt;br /&gt;&#91;Image Import/Export&#93;(/iaas/Content/Compute/Tasks/imageimportexport.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the image, which is simply a friendly name or description.&lt;br /&gt;It does not have to be unique, and you can change it. See &#91;UpdateImage&#93;(#/en/iaas/latest/Image/UpdateImage).&lt;br /&gt;Avoid entering confidential information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-imageId"><code>imageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the display name of the image. Avoid entering confidential information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-imageId"><code>imageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes an image.</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-imageId"><code>imageId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves an image into a different compartment within the same tenancy. For information about moving&lt;br /&gt;resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#export_image"><CopyableCode code="export_image" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-imageId"><code>imageId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destinationType"><code>destinationType</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Exports the specified image to the Oracle Cloud Infrastructure Object Storage service. You can use the Object Storage URL,&lt;br /&gt;or the namespace, bucket name, and object name when specifying the location to export to.&lt;br /&gt;&lt;br /&gt;For more information about exporting images, see &#91;Image Import/Export&#93;(/iaas/Content/Compute/Tasks/imageimportexport.htm).&lt;br /&gt;&lt;br /&gt;To perform an image export, you need write access to the Object Storage bucket for the image,&lt;br /&gt;see &#91;Let Users Write Objects to Object Storage Buckets&#93;(/iaas/Content/Identity/Concepts/commonpolicies.htm#Let4).&lt;br /&gt;&lt;br /&gt;See &#91;Object Storage URLs&#93;(/iaas/Content/Compute/Tasks/imageimportexport.htm#URLs) and &#91;Using Pre-Authenticated Requests&#93;(/iaas/Content/Object/Tasks/usingpreauthenticatedrequests.htm)&lt;br /&gt;for constructing URLs for image import/export.&lt;br /&gt;</td>
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
<tr id="parameter-imageId">
    <td><CopyableCode code="imageId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the image.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given display name exactly. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given lifecycle state. The state value is case-insensitive. </td>
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
<tr id="parameter-operatingSystem">
    <td><CopyableCode code="operatingSystem" /></td>
    <td><code>string</code></td>
    <td>The image's operating system.  Example: `Oracle Linux` </td>
</tr>
<tr id="parameter-operatingSystemVersion">
    <td><CopyableCode code="operatingSystemVersion" /></td>
    <td><code>string</code></td>
    <td>The image's operating system version.  Example: `7.2` </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-shape">
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>Shape name.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** In general, some "List" operations (for example, `ListInstances`) let you optionally filter by availability domain if the scope of the resource type is within a single availability domain. If you call one of these "List" operations without specifying an availability domain, the resources are grouped by availability domain, then sorted. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). The DISPLAYNAME sort order is case sensitive. </td>
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

Gets the specified image.

```sql
SELECT
id,
agentFeatures,
baseImageId,
billableSizeInGBs,
compartmentId,
createImageAllowed,
definedTags,
displayName,
freeformTags,
launchMode,
launchOptions,
lifecycleState,
operatingSystem,
operatingSystemVersion,
sizeInMBs,
timeCreated
FROM oci.compute.images
WHERE imageId = '{{ imageId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists a subset of images available in the specified compartment, including&lt;br /&gt;&#91;platform images&#93;(/iaas/Content/Compute/References/images.htm) and&lt;br /&gt;&#91;custom images&#93;(/iaas/Content/Compute/Tasks/managingcustomimages.htm).&lt;br /&gt;The list of platform images includes the three most recently published versions&lt;br /&gt;of each major distribution. The list does not support filtering based on image tags.&lt;br /&gt;&lt;br /&gt;The list of images returned is ordered to first show the recent platform images,&lt;br /&gt;then all of the custom images.&lt;br /&gt;&lt;br /&gt;**Caution:** Platform images are refreshed regularly. When new images are released, older versions are replaced.&lt;br /&gt;The image OCIDs remain available, but when the platform image is replaced, the image OCIDs are no longer returned as part of the platform image list.&lt;br /&gt;

```sql
SELECT
id,
agentFeatures,
baseImageId,
billableSizeInGBs,
compartmentId,
createImageAllowed,
definedTags,
displayName,
freeformTags,
launchMode,
launchOptions,
lifecycleState,
operatingSystem,
operatingSystemVersion,
sizeInMBs,
timeCreated
FROM oci.compute.images
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND displayName = '{{ displayName }}'
AND operatingSystem = '{{ operatingSystem }}'
AND operatingSystemVersion = '{{ operatingSystemVersion }}'
AND shape = '{{ shape }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
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

Creates a boot disk image for the specified instance or imports an exported image from the Oracle Cloud Infrastructure Object Storage service.&lt;br /&gt;&lt;br /&gt;When creating a new image, you must provide the OCID of the instance you want to use as the basis for the image, and&lt;br /&gt;the OCID of the compartment containing that instance. For more information about images,&lt;br /&gt;see &#91;Managing Custom Images&#93;(/iaas/Content/Compute/Tasks/managingcustomimages.htm).&lt;br /&gt;&lt;br /&gt;When importing an exported image from Object Storage, you specify the source information&lt;br /&gt;in &#91;ImageSourceDetails&#93;(#/en/iaas/latest/requests/ImageSourceDetails).&lt;br /&gt;&lt;br /&gt;When importing an image based on the namespace, bucket name, and object name,&lt;br /&gt;use &#91;ImageSourceViaObjectStorageTupleDetails&#93;(#/en/iaas/latest/requests/ImageSourceViaObjectStorageTupleDetails).&lt;br /&gt;&lt;br /&gt;When importing an image based on the Object Storage URL, use&lt;br /&gt;&#91;ImageSourceViaObjectStorageUriDetails&#93;(#/en/iaas/latest/requests/ImageSourceViaObjectStorageUriDetails).&lt;br /&gt;See &#91;Object Storage URLs&#93;(/iaas/Content/Compute/Tasks/imageimportexport.htm#URLs) and &#91;Using Pre-Authenticated Requests&#93;(/iaas/Content/Object/Tasks/usingpreauthenticatedrequests.htm)&lt;br /&gt;for constructing URLs for image import/export.&lt;br /&gt;&lt;br /&gt;For more information about importing exported images, see&lt;br /&gt;&#91;Image Import/Export&#93;(/iaas/Content/Compute/Tasks/imageimportexport.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the image, which is simply a friendly name or description.&lt;br /&gt;It does not have to be unique, and you can change it. See &#91;UpdateImage&#93;(#/en/iaas/latest/Image/UpdateImage).&lt;br /&gt;Avoid entering confidential information.&lt;br /&gt;

```sql
INSERT INTO oci.compute.images (
compartmentId,
definedTags,
displayName,
freeformTags,
imageSourceDetails,
instanceId,
launchMode,
launchOptions,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ imageSourceDetails }}',
'{{ instanceId }}',
'{{ launchMode }}',
'{{ launchOptions }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
agentFeatures,
baseImageId,
billableSizeInGBs,
compartmentId,
createImageAllowed,
definedTags,
displayName,
freeformTags,
launchMode,
launchOptions,
lifecycleState,
operatingSystem,
operatingSystemVersion,
sizeInMBs,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: images
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the images resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment you want the image to be created in.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a
        namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name for the image. It does not have to be unique, and it's changeable.
        Avoid entering confidential information.
        You cannot use a platform image name as a custom image name.
        Example: \`My Oracle Linux image\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: imageSourceDetails
      value:
        operatingSystem: "{{ operatingSystem }}"
        operatingSystemVersion: "{{ operatingSystemVersion }}"
        sourceImageType: "{{ sourceImageType }}"
        sourceType: "{{ sourceType }}"
    - name: instanceId
      value: "{{ instanceId }}"
      description: |
        The OCID of the instance you want to use as the basis for the image.
    - name: launchMode
      value: "{{ launchMode }}"
      description: |
        Specifies the configuration mode for launching virtual machine (VM) instances. The configuration modes are:
        * \`NATIVE\` - VM instances launch with iSCSI boot and VFIO devices. The default value for platform images.
        * \`EMULATED\` - VM instances launch with emulated devices, such as the E1000 network driver and emulated SCSI disk controller.
        * \`PARAVIRTUALIZED\` - VM instances launch with paravirtualized devices using VirtIO drivers.
        * \`ACCELERATEDPV\` - VM instances launch with accelerated paravirtualized networking type.
        * \`CUSTOM\` - VM instances launch with custom configuration settings specified in the \`LaunchOptions\` parameter.
      valid_values: ['NATIVE', 'EMULATED', 'PARAVIRTUALIZED', 'ACCELERATEDPV', 'CUSTOM']
    - name: launchOptions
      description: |
        Options for tuning the compatibility and performance of VM shapes. The values that you specify override any
        default values.
      value:
        bootVolumeType: "{{ bootVolumeType }}"
        firmware: "{{ firmware }}"
        isConsistentVolumeNamingEnabled: {{ isConsistentVolumeNamingEnabled }}
        isPvEncryptionInTransitEnabled: {{ isPvEncryptionInTransitEnabled }}
        networkType: "{{ networkType }}"
        remoteDataVolumeType: "{{ remoteDataVolumeType }}"
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

Updates the display name of the image. Avoid entering confidential information.&lt;br /&gt;

```sql
UPDATE oci.compute.images
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
operatingSystem = '{{ operatingSystem }}',
operatingSystemVersion = '{{ operatingSystemVersion }}'
WHERE 
imageId = '{{ imageId }}' --required
AND region = '{{ region }}' --required
AND opc-retry-token = '{{ opc-retry-token}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
agentFeatures,
baseImageId,
billableSizeInGBs,
compartmentId,
createImageAllowed,
definedTags,
displayName,
freeformTags,
launchMode,
launchOptions,
lifecycleState,
operatingSystem,
operatingSystemVersion,
sizeInMBs,
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

Deletes an image.

```sql
DELETE FROM oci.compute.images
WHERE imageId = '{{ imageId }}' --required
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
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'export_image', value: 'export_image' }
    ]}
>
<TabItem value="change_compartment">

Moves an image into a different compartment within the same tenancy. For information about moving&lt;br /&gt;resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.compute.images.change_compartment 
@imageId='{{ imageId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
<TabItem value="export_image">

Exports the specified image to the Oracle Cloud Infrastructure Object Storage service. You can use the Object Storage URL,&lt;br /&gt;or the namespace, bucket name, and object name when specifying the location to export to.&lt;br /&gt;&lt;br /&gt;For more information about exporting images, see &#91;Image Import/Export&#93;(/iaas/Content/Compute/Tasks/imageimportexport.htm).&lt;br /&gt;&lt;br /&gt;To perform an image export, you need write access to the Object Storage bucket for the image,&lt;br /&gt;see &#91;Let Users Write Objects to Object Storage Buckets&#93;(/iaas/Content/Identity/Concepts/commonpolicies.htm#Let4).&lt;br /&gt;&lt;br /&gt;See &#91;Object Storage URLs&#93;(/iaas/Content/Compute/Tasks/imageimportexport.htm#URLs) and &#91;Using Pre-Authenticated Requests&#93;(/iaas/Content/Object/Tasks/usingpreauthenticatedrequests.htm)&lt;br /&gt;for constructing URLs for image import/export.&lt;br /&gt;

```sql
EXEC oci.compute.images.export_image 
@imageId='{{ imageId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"destinationType": "{{ destinationType }}", 
"exportFormat": "{{ exportFormat }}"
}'
;
```
</TabItem>
</Tabs>
