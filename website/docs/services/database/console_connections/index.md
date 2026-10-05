--- 
title: console_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - console_connections
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

Creates, updates, deletes, gets or lists a <code>console_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="console_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.console_connections" /></td></tr>
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

The console connection information was retrieved.

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
    <td>The OCID of the console connection.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment to contain the console connection.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionString" /></td>
    <td><code>string</code></td>
    <td>The SSH connection string for the console connection.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the database node.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>The SSH public key fingerprint for the console connection.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the console connection. (ACTIVE, CREATING, DELETED, DELETING, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The `InstanceConsoleConnection` API provides you with console access to dbnode&lt;br /&gt;enabling you to troubleshoot malfunctioning dbnode.&lt;br /&gt;

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
    <td>The OCID of the console connection.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment to contain the console connection.</td>
</tr>
<tr>
    <td><CopyableCode code="connectionString" /></td>
    <td><code>string</code></td>
    <td>The SSH connection string for the console connection.</td>
</tr>
<tr>
    <td><CopyableCode code="dbNodeId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the database node.</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>The SSH public key fingerprint for the console connection.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the console connection. (ACTIVE, CREATING, DELETED, DELETING, FAILED)</td>
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
    <td><a href="#parameter-dbNodeId"><code>dbNodeId</code></a>, <a href="#parameter-consoleConnectionId"><code>consoleConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified database node console connection's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dbNodeId"><code>dbNodeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the console connections for the specified database node.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-dbNodeId"><code>dbNodeId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-publicKey"><code>publicKey</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new console connection to the specified database node.&lt;br /&gt;After the console connection has been created and is available,&lt;br /&gt;you connect to the console using SSH.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dbNodeId"><code>dbNodeId</code></a>, <a href="#parameter-consoleConnectionId"><code>consoleConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified database node console connection.</td>
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
<tr id="parameter-consoleConnectionId">
    <td><CopyableCode code="consoleConnectionId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the console connection.</td>
</tr>
<tr id="parameter-dbNodeId">
    <td><CopyableCode code="dbNodeId" /></td>
    <td><code>string</code></td>
    <td>The database node &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
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

Gets the specified database node console connection's information.

```sql
SELECT
id,
compartmentId,
connectionString,
dbNodeId,
fingerprint,
lifecycleState
FROM oci.database.console_connections
WHERE dbNodeId = '{{ dbNodeId }}' -- required
AND consoleConnectionId = '{{ consoleConnectionId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the console connections for the specified database node.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
connectionString,
dbNodeId,
fingerprint,
lifecycleState
FROM oci.database.console_connections
WHERE dbNodeId = '{{ dbNodeId }}' -- required
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

Creates a new console connection to the specified database node.&lt;br /&gt;After the console connection has been created and is available,&lt;br /&gt;you connect to the console using SSH.&lt;br /&gt;

```sql
INSERT INTO oci.database.console_connections (
publicKey,
dbNodeId,
region,
opc-retry-token
)
SELECT 
'{{ publicKey }}' /* required */,
'{{ dbNodeId }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
connectionString,
dbNodeId,
fingerprint,
lifecycleState
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: console_connections
  props:
    - name: dbNodeId
      value: "{{ dbNodeId }}"
      description: Required parameter for the console_connections resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the console_connections resource.
    - name: publicKey
      value: "{{ publicKey }}"
      description: |
        The SSH public key used to authenticate the console connection.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
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

Deletes the specified database node console connection.

```sql
DELETE FROM oci.database.console_connections
WHERE dbNodeId = '{{ dbNodeId }}' --required
AND consoleConnectionId = '{{ consoleConnectionId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
