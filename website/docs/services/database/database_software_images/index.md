--- 
title: database_software_images
hide_title: false
hide_table_of_contents: false
keywords:
  - database_software_images
  - database
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

Creates, updates, deletes, gets or lists a <code>database_software_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="database_software_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.database_software_images" /></td></tr>
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

The Database Software Image.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the database software image.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseSoftwareImageIncludedPatches" /></td>
    <td><code>array</code></td>
    <td>List of one-off patches for Database Homes.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseSoftwareImageOneOffPatches" /></td>
    <td><code>array</code></td>
    <td>List of one-off patches for Database Homes.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseVersion" /></td>
    <td><code>string</code></td>
    <td>The database version with which the database software image is to be built.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the database software image. The name does not have to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="imageShapeFamily" /></td>
    <td><code>string</code></td>
    <td>To what shape the image is meant for. (VM_BM_SHAPE, EXADATA_SHAPE, EXACC_SHAPE, EXADBXS_SHAPE)</td>
</tr>
<tr>
    <td><CopyableCode code="imageType" /></td>
    <td><code>string</code></td>
    <td>The type of software image. Can be grid or database. (GRID_IMAGE, DATABASE_IMAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="includedPatchesSummary" /></td>
    <td><code>string</code></td>
    <td>The patches included in the image and the version of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="isUpgradeSupported" /></td>
    <td><code>boolean</code></td>
    <td>True if this Database software image is supported for Upgrade.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Detailed message for the lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the database software image. (PROVISIONING, AVAILABLE, DELETING, DELETED, FAILED, TERMINATING, TERMINATED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="lsInventory" /></td>
    <td><code>string</code></td>
    <td>The output from the OPatch lsInventory command, which is passed as a string.</td>
</tr>
<tr>
    <td><CopyableCode code="patchSet" /></td>
    <td><code>string</code></td>
    <td>The PSU or PBP or Release Updates. To get a list of supported versions, use the &#91;ListDbVersions&#93;(#/en/database/latest/DbVersionSummary/ListDbVersions) operation.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the database software image was created.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The Database service supports the creation of database software images for use in creating and patching DB systems and databases.&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized, talk to an administrator. If you are an administrator who needs to write policies to give users access, see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;For information about access control and compartments, see &#91;Overview of the Identity Service&#93;(/Content/Identity/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the database software image.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseSoftwareImageIncludedPatches" /></td>
    <td><code>array</code></td>
    <td>List of one-off patches for Database Homes.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseSoftwareImageOneOffPatches" /></td>
    <td><code>array</code></td>
    <td>List of one-off patches for Database Homes.</td>
</tr>
<tr>
    <td><CopyableCode code="databaseVersion" /></td>
    <td><code>string</code></td>
    <td>The database version with which the database software image is to be built.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the database software image. The name does not have to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="imageShapeFamily" /></td>
    <td><code>string</code></td>
    <td>To what shape the image is meant for. (VM_BM_SHAPE, EXADATA_SHAPE, EXACC_SHAPE, EXADBXS_SHAPE)</td>
</tr>
<tr>
    <td><CopyableCode code="imageType" /></td>
    <td><code>string</code></td>
    <td>The type of software image. Can be grid or database. (GRID_IMAGE, DATABASE_IMAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="includedPatchesSummary" /></td>
    <td><code>string</code></td>
    <td>The patches included in the image and the version of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="isUpgradeSupported" /></td>
    <td><code>boolean</code></td>
    <td>True if this Database software image is supported for Upgrade.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Detailed message for the lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the database software image. (PROVISIONING, AVAILABLE, DELETING, DELETED, FAILED, TERMINATING, TERMINATED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="lsInventory" /></td>
    <td><code>string</code></td>
    <td>The output from the OPatch lsInventory command, which is passed as a string.</td>
</tr>
<tr>
    <td><CopyableCode code="patchSet" /></td>
    <td><code>string</code></td>
    <td>The PSU or PBP or Release Updates. To get a list of supported versions, use the &#91;ListDbVersions&#93;(#/en/database/latest/DbVersionSummary/ListDbVersions) operation.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the database software image was created.</td>
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
    <td><a href="#parameter-databaseSoftwareImageId"><code>databaseSoftwareImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified database software image.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-imageType"><code>imageType</code></a>, <a href="#parameter-imageShapeFamily"><code>imageShapeFamily</code></a>, <a href="#parameter-patchSetGreaterThanOrEqualTo"><code>patchSetGreaterThanOrEqualTo</code></a>, <a href="#parameter-isUpgradeSupported"><code>isUpgradeSupported</code></a></td>
    <td>Gets a list of the database software images in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>create database software image in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-databaseSoftwareImageId"><code>databaseSoftwareImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the properties of a Database Software Image, like Display Nmae</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-databaseSoftwareImageId"><code>databaseSoftwareImageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Delete a database software image</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-databaseSoftwareImageId"><code>databaseSoftwareImageId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Move the Database Software Image and its dependent resources to the specified compartment.&lt;br /&gt;For more information about moving Databse Software Images, see&lt;br /&gt;&#91;Moving Database Resources to a Different Compartment&#93;(/Content/Database/Concepts/databaseoverview.htm#moveRes).&lt;br /&gt;</td>
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
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-databaseSoftwareImageId">
    <td><CopyableCode code="databaseSoftwareImageId" /></td>
    <td><code>string</code></td>
    <td>The DB system &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the entire display name given. The match is not case sensitive.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-imageShapeFamily">
    <td><CopyableCode code="imageShapeFamily" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given image shape family exactly.</td>
</tr>
<tr id="parameter-imageType">
    <td><CopyableCode code="imageType" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given image type exactly.</td>
</tr>
<tr id="parameter-isUpgradeSupported">
    <td><CopyableCode code="isUpgradeSupported" /></td>
    <td><code>boolean</code></td>
    <td>If provided, filters the results to the set of database versions which are supported for Upgrade.</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given lifecycle state exactly.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return per page.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token to continue listing from.</td>
</tr>
<tr id="parameter-patchSetGreaterThanOrEqualTo">
    <td><CopyableCode code="patchSetGreaterThanOrEqualTo" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources with `patchSet` greater than or equal to given value.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is descending.  Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive. Default order for PATCHSET is descending. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`).</td>
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

Gets information about the specified database software image.

```sql
SELECT
id,
compartmentId,
databaseSoftwareImageIncludedPatches,
databaseSoftwareImageOneOffPatches,
databaseVersion,
definedTags,
displayName,
freeformTags,
imageShapeFamily,
imageType,
includedPatchesSummary,
isUpgradeSupported,
lifecycleDetails,
lifecycleState,
lsInventory,
patchSet,
systemTags,
timeCreated
FROM oci.database.database_software_images
WHERE databaseSoftwareImageId = '{{ databaseSoftwareImageId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Gets a list of the database software images in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
databaseSoftwareImageIncludedPatches,
databaseSoftwareImageOneOffPatches,
databaseVersion,
definedTags,
displayName,
freeformTags,
imageShapeFamily,
imageType,
includedPatchesSummary,
isUpgradeSupported,
lifecycleDetails,
lifecycleState,
lsInventory,
patchSet,
systemTags,
timeCreated
FROM oci.database.database_software_images
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
AND imageType = '{{ imageType }}'
AND imageShapeFamily = '{{ imageShapeFamily }}'
AND patchSetGreaterThanOrEqualTo = '{{ patchSetGreaterThanOrEqualTo }}'
AND isUpgradeSupported = '{{ isUpgradeSupported }}'
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

create database software image in the specified compartment.&lt;br /&gt;

```sql
INSERT INTO oci.database.database_software_images (
compartmentId,
databaseSoftwareImageOneOffPatches,
databaseVersion,
definedTags,
displayName,
freeformTags,
imageShapeFamily,
imageType,
lsInventory,
patchSet,
sourceDbHomeId,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ databaseSoftwareImageOneOffPatches }}',
'{{ databaseVersion }}',
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ freeformTags }}',
'{{ imageShapeFamily }}',
'{{ imageType }}',
'{{ lsInventory }}',
'{{ patchSet }}',
'{{ sourceDbHomeId }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
databaseSoftwareImageIncludedPatches,
databaseSoftwareImageOneOffPatches,
databaseVersion,
definedTags,
displayName,
freeformTags,
imageShapeFamily,
imageType,
includedPatchesSummary,
isUpgradeSupported,
lifecycleDetails,
lifecycleState,
lsInventory,
patchSet,
systemTags,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: database_software_images
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the database_software_images resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment the database software image  belongs in.
    - name: databaseSoftwareImageOneOffPatches
      value:
        - "{{ databaseSoftwareImageOneOffPatches }}"
      description: |
        List of one-off patches for Database Homes.
    - name: databaseVersion
      value: "{{ databaseVersion }}"
      description: |
        The database version with which the database software image is to be built.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the database software image. The name does not have to be unique.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: imageShapeFamily
      value: "{{ imageShapeFamily }}"
      description: |
        To what shape the image is meant for.
      valid_values: ['VM_BM_SHAPE', 'EXADATA_SHAPE', 'EXACC_SHAPE', 'EXADBXS_SHAPE']
      default: VM_BM_SHAPE
    - name: imageType
      value: "{{ imageType }}"
      description: |
        The type of software image. Can be grid or database.
      valid_values: ['GRID_IMAGE', 'DATABASE_IMAGE']
      default: DATABASE_IMAGE
    - name: lsInventory
      value: "{{ lsInventory }}"
      description: |
        The output from the OPatch lsInventory command, which is passed as a string.
    - name: patchSet
      value: "{{ patchSet }}"
      description: |
        The PSU or PBP or Release Updates. To get a list of supported versions, use the [ListDbVersions](#/en/database/latest/DbVersionSummary/ListDbVersions) operation.
    - name: sourceDbHomeId
      value: "{{ sourceDbHomeId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the Database Home.
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

Updates the properties of a Database Software Image, like Display Nmae

```sql
UPDATE oci.database.database_software_images
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}'
WHERE 
databaseSoftwareImageId = '{{ databaseSoftwareImageId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
databaseSoftwareImageIncludedPatches,
databaseSoftwareImageOneOffPatches,
databaseVersion,
definedTags,
displayName,
freeformTags,
imageShapeFamily,
imageType,
includedPatchesSummary,
isUpgradeSupported,
lifecycleDetails,
lifecycleState,
lsInventory,
patchSet,
systemTags,
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

Delete a database software image

```sql
DELETE FROM oci.database.database_software_images
WHERE databaseSoftwareImageId = '{{ databaseSoftwareImageId }}' --required
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

Move the Database Software Image and its dependent resources to the specified compartment.&lt;br /&gt;For more information about moving Databse Software Images, see&lt;br /&gt;&#91;Moving Database Resources to a Different Compartment&#93;(/Content/Database/Concepts/databaseoverview.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.database.database_software_images.change_compartment 
@databaseSoftwareImageId='{{ databaseSoftwareImageId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
</Tabs>
