--- 
title: db_connection_bundles
hide_title: false
hide_table_of_contents: false
keywords:
  - db_connection_bundles
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

Creates, updates, deletes, gets or lists a <code>db_connection_bundles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_connection_bundles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.db_connection_bundles" /></td></tr>
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

The specified database connection bundle object.

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
    <td>The OCID of the database connection bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedResourceDetails" /></td>
    <td><code>array</code></td>
    <td>Details about the resources associated with the connection bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the database connection bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="dbConnectionBundleType" /></td>
    <td><code>string</code></td>
    <td>The type of the database connection bundle. (TLS, MTLS)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(https:​//docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name for the connection bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(https:​//docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="isProtected" /></td>
    <td><code>boolean</code></td>
    <td>True for the default, service-created Database Connection Bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the database connection bundle. (CREATING, ACTIVE, INACTIVE, UPDATING, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(https:​//docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the database connection bundle was created. An RFC3339 formatted datetime string.</td>
</tr>
<tr>
    <td><CopyableCode code="timeLastRefreshed" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the database connection bundle was last refreshed. An RFC3339 formatted datetime string.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the database connection bundle was updated. An RFC3339 formatted datetime string.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Summary of a database connection bundle.

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
    <td>The OCID of the database connection bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedResourceDetails" /></td>
    <td><code>array</code></td>
    <td>Details about the resources associated with the connection bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the database connection bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="dbConnectionBundleType" /></td>
    <td><code>string</code></td>
    <td>The type of the database connection bundle. (TLS, MTLS)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(https:​//docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>Display name for the connection bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(https:​//docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="isProtected" /></td>
    <td><code>boolean</code></td>
    <td>True for the default, service-created Database Connection Bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the database connection bundle. (CREATING, ACTIVE, INACTIVE, UPDATING, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(https:​//docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the database connection bundle was created. An RFC3339 formatted datetime string.</td>
</tr>
<tr>
    <td><CopyableCode code="timeLastRefreshed" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the database connection bundle was last refreshed. An RFC3339 formatted datetime string.</td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the database connection bundle was updated. An RFC3339 formatted datetime string.</td>
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
    <td><a href="#parameter-dbConnectionBundleId"><code>dbConnectionBundleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified database connection bundle.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-dbConnectionBundleType"><code>dbConnectionBundleType</code></a>, <a href="#parameter-associatedResourceId"><code>associatedResourceId</code></a></td>
    <td>Lists all database connection bundles that match the query parameters.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#download_db_connection_bundle"><CopyableCode code="download_db_connection_bundle" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-dbConnectionBundleId"><code>dbConnectionBundleId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Downloads the specified database connection bundle content.&lt;br /&gt;The bundle is returned as a binary file containing the connection details.&lt;br /&gt;</td>
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
<tr id="parameter-dbConnectionBundleId">
    <td><CopyableCode code="dbConnectionBundleId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the database connection bundle.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-associatedResourceId">
    <td><CopyableCode code="associatedResourceId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the VM cluster associated with the connection bundle. If the parameter is set to null, all bundles are returned.</td>
</tr>
<tr id="parameter-dbConnectionBundleType">
    <td><CopyableCode code="dbConnectionBundleType" /></td>
    <td><code>string</code></td>
    <td>A filter that returns only resources that match the specified database connection bundle type.</td>
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
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter that returns only resources that match the given lifecycle state. The state value is case-insensitive.</td>
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
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can specify only one sort order. The default order for `TIMECREATED` is descending. The default order for `TIMEREFRESHED`  is descending. </td>
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

Gets information about the specified database connection bundle.

```sql
SELECT
id,
associatedResourceDetails,
compartmentId,
dbConnectionBundleType,
definedTags,
displayName,
freeformTags,
isProtected,
lifecycleState,
systemTags,
timeCreated,
timeLastRefreshed,
timeUpdated
FROM oci.database.db_connection_bundles
WHERE dbConnectionBundleId = '{{ dbConnectionBundleId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists all database connection bundles that match the query parameters.&lt;br /&gt;

```sql
SELECT
id,
associatedResourceDetails,
compartmentId,
dbConnectionBundleType,
definedTags,
displayName,
freeformTags,
isProtected,
lifecycleState,
systemTags,
timeCreated,
timeLastRefreshed,
timeUpdated
FROM oci.database.db_connection_bundles
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
AND lifecycleState = '{{ lifecycleState }}'
AND opc-request-id = '{{ opc-request-id }}'
AND displayName = '{{ displayName }}'
AND dbConnectionBundleType = '{{ dbConnectionBundleType }}'
AND associatedResourceId = '{{ associatedResourceId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="download_db_connection_bundle"
    values={[
        { label: 'download_db_connection_bundle', value: 'download_db_connection_bundle' }
    ]}
>
<TabItem value="download_db_connection_bundle">

Downloads the specified database connection bundle content.&lt;br /&gt;The bundle is returned as a binary file containing the connection details.&lt;br /&gt;

```sql
EXEC oci.database.db_connection_bundles.download_db_connection_bundle 
@dbConnectionBundleId='{{ dbConnectionBundleId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
</Tabs>
