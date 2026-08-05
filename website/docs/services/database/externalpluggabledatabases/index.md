--- 
title: externalpluggabledatabases
hide_title: false
hide_table_of_contents: false
keywords:
  - externalpluggabledatabases
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

Creates, updates, deletes, gets or lists an <code>externalpluggabledatabases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="externalpluggabledatabases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.externalpluggabledatabases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#disable_external_pluggable_database_database_management"><CopyableCode code="disable_external_pluggable_database_database_management" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-externalPluggableDatabaseId"><code>externalPluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Disable Database Management Service for the external pluggable database.&lt;br /&gt;For more information about the Database Management Service, see&lt;br /&gt;&#91;Database Management Service&#93;(/Content/ExternalDatabase/Concepts/databasemanagementservice.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#disable_external_pluggable_database_operations_insights"><CopyableCode code="disable_external_pluggable_database_operations_insights" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-externalPluggableDatabaseId"><code>externalPluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Disable Operations Insights for the external pluggable database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#disable_external_pluggable_database_stack_monitoring"><CopyableCode code="disable_external_pluggable_database_stack_monitoring" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-externalPluggableDatabaseId"><code>externalPluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Disable Stack Monitoring for the external pluggable database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#enable_external_pluggable_database_database_management"><CopyableCode code="enable_external_pluggable_database_database_management" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-externalPluggableDatabaseId"><code>externalPluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-externalDatabaseConnectorId"><code>externalDatabaseConnectorId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Enable Database Management Service for the external pluggable database.&lt;br /&gt;For more information about the Database Management Service, see&lt;br /&gt;&#91;Database Management Service&#93;(/Content/ExternalDatabase/Concepts/databasemanagementservice.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#enable_external_pluggable_database_operations_insights"><CopyableCode code="enable_external_pluggable_database_operations_insights" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-externalPluggableDatabaseId"><code>externalPluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-externalDatabaseConnectorId"><code>externalDatabaseConnectorId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Enable Operations Insights for the external pluggable database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#enable_external_pluggable_database_stack_monitoring"><CopyableCode code="enable_external_pluggable_database_stack_monitoring" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-externalPluggableDatabaseId"><code>externalPluggableDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-externalDatabaseConnectorId"><code>externalDatabaseConnectorId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Enable Stack Monitoring for the external pluggable database.&lt;br /&gt;</td>
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
<tr id="parameter-externalPluggableDatabaseId">
    <td><CopyableCode code="externalPluggableDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The ExternalPluggableDatabaseId &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="disable_external_pluggable_database_database_management"
    values={[
        { label: 'disable_external_pluggable_database_database_management', value: 'disable_external_pluggable_database_database_management' },
        { label: 'disable_external_pluggable_database_operations_insights', value: 'disable_external_pluggable_database_operations_insights' },
        { label: 'disable_external_pluggable_database_stack_monitoring', value: 'disable_external_pluggable_database_stack_monitoring' },
        { label: 'enable_external_pluggable_database_database_management', value: 'enable_external_pluggable_database_database_management' },
        { label: 'enable_external_pluggable_database_operations_insights', value: 'enable_external_pluggable_database_operations_insights' },
        { label: 'enable_external_pluggable_database_stack_monitoring', value: 'enable_external_pluggable_database_stack_monitoring' }
    ]}
>
<TabItem value="disable_external_pluggable_database_database_management">

Disable Database Management Service for the external pluggable database.&lt;br /&gt;For more information about the Database Management Service, see&lt;br /&gt;&#91;Database Management Service&#93;(/Content/ExternalDatabase/Concepts/databasemanagementservice.htm).&lt;br /&gt;

```sql
EXEC oci.database.externalpluggabledatabases.disable_external_pluggable_database_database_management 
@externalPluggableDatabaseId='{{ externalPluggableDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="disable_external_pluggable_database_operations_insights">

Disable Operations Insights for the external pluggable database.&lt;br /&gt;

```sql
EXEC oci.database.externalpluggabledatabases.disable_external_pluggable_database_operations_insights 
@externalPluggableDatabaseId='{{ externalPluggableDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="disable_external_pluggable_database_stack_monitoring">

Disable Stack Monitoring for the external pluggable database.&lt;br /&gt;

```sql
EXEC oci.database.externalpluggabledatabases.disable_external_pluggable_database_stack_monitoring 
@externalPluggableDatabaseId='{{ externalPluggableDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="enable_external_pluggable_database_database_management">

Enable Database Management Service for the external pluggable database.&lt;br /&gt;For more information about the Database Management Service, see&lt;br /&gt;&#91;Database Management Service&#93;(/Content/ExternalDatabase/Concepts/databasemanagementservice.htm).&lt;br /&gt;

```sql
EXEC oci.database.externalpluggabledatabases.enable_external_pluggable_database_database_management 
@externalPluggableDatabaseId='{{ externalPluggableDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"externalDatabaseConnectorId": "{{ externalDatabaseConnectorId }}"
}'
;
```
</TabItem>
<TabItem value="enable_external_pluggable_database_operations_insights">

Enable Operations Insights for the external pluggable database.&lt;br /&gt;

```sql
EXEC oci.database.externalpluggabledatabases.enable_external_pluggable_database_operations_insights 
@externalPluggableDatabaseId='{{ externalPluggableDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"externalDatabaseConnectorId": "{{ externalDatabaseConnectorId }}"
}'
;
```
</TabItem>
<TabItem value="enable_external_pluggable_database_stack_monitoring">

Enable Stack Monitoring for the external pluggable database.&lt;br /&gt;

```sql
EXEC oci.database.externalpluggabledatabases.enable_external_pluggable_database_stack_monitoring 
@externalPluggableDatabaseId='{{ externalPluggableDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"externalDatabaseConnectorId": "{{ externalDatabaseConnectorId }}"
}'
;
```
</TabItem>
</Tabs>
