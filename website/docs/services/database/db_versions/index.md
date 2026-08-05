--- 
title: db_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - db_versions
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

Creates, updates, deletes, gets or lists a <code>db_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.db_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

The Oracle Database software version.&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator. If you're an administrator who needs to write policies to give users access, see &#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td><CopyableCode code="isLatestForMajorVersion" /></td>
    <td><code>boolean</code></td>
    <td>True if this version of the Oracle Database software is the latest version for a release.</td>
</tr>
<tr>
    <td><CopyableCode code="isPreviewDbVersion" /></td>
    <td><code>boolean</code></td>
    <td>True if this version of the Oracle Database software is the preview version.</td>
</tr>
<tr>
    <td><CopyableCode code="isUpgradeSupported" /></td>
    <td><code>boolean</code></td>
    <td>True if this version of the Oracle Database software is supported for Upgrade.</td>
</tr>
<tr>
    <td><CopyableCode code="supportsPdb" /></td>
    <td><code>boolean</code></td>
    <td>True if this version of the Oracle Database software supports pluggable databases.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle Database version.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-dbSystemShape"><code>dbSystemShape</code></a>, <a href="#parameter-dbSystemId"><code>dbSystemId</code></a>, <a href="#parameter-storageManagement"><code>storageManagement</code></a>, <a href="#parameter-shapeAttribute"><code>shapeAttribute</code></a>, <a href="#parameter-isUpgradeSupported"><code>isUpgradeSupported</code></a>, <a href="#parameter-isDatabaseSoftwareImageSupported"><code>isDatabaseSoftwareImageSupported</code></a></td>
    <td>Gets a list of supported Oracle Database versions.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-dbSystemId">
    <td><CopyableCode code="dbSystemId" /></td>
    <td><code>string</code></td>
    <td>The DB system &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm). If provided, filters the results to the set of database versions which are supported for the DB system.</td>
</tr>
<tr id="parameter-dbSystemShape">
    <td><CopyableCode code="dbSystemShape" /></td>
    <td><code>string</code></td>
    <td>If provided, filters the results to the set of database versions which are supported for the given shape.</td>
</tr>
<tr id="parameter-isDatabaseSoftwareImageSupported">
    <td><CopyableCode code="isDatabaseSoftwareImageSupported" /></td>
    <td><code>boolean</code></td>
    <td>If true, filters the results to the set of Oracle Database versions that are supported for OCI database software images.</td>
</tr>
<tr id="parameter-isUpgradeSupported">
    <td><CopyableCode code="isUpgradeSupported" /></td>
    <td><code>boolean</code></td>
    <td>If provided, filters the results to the set of database versions which are supported for Upgrade.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return per page.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token to continue listing from.</td>
</tr>
<tr id="parameter-shapeAttribute">
    <td><CopyableCode code="shapeAttribute" /></td>
    <td><code>string</code></td>
    <td>If provided and applicable, return DB System shape parameters based on the shapeAttribute provided</td>
</tr>
<tr id="parameter-storageManagement">
    <td><CopyableCode code="storageManagement" /></td>
    <td><code>string</code></td>
    <td>The DB system storage management option. Used to list database versions available for that storage manager. Valid values are `ASM` and `LVM`. * ASM specifies Oracle Automatic Storage Management * LVM specifies logical volume manager, sometimes called logical disk manager. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Gets a list of supported Oracle Database versions.

```sql
SELECT
isLatestForMajorVersion,
isPreviewDbVersion,
isUpgradeSupported,
supportsPdb,
version
FROM oci.database.db_versions
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND dbSystemShape = '{{ dbSystemShape }}'
AND dbSystemId = '{{ dbSystemId }}'
AND storageManagement = '{{ storageManagement }}'
AND shapeAttribute = '{{ shapeAttribute }}'
AND isUpgradeSupported = '{{ isUpgradeSupported }}'
AND isDatabaseSoftwareImageSupported = '{{ isDatabaseSoftwareImageSupported }}'
;
```
</TabItem>
</Tabs>
