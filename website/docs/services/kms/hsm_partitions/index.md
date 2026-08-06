--- 
title: hsm_partitions
hide_title: false
hide_table_of_contents: false
keywords:
  - hsm_partitions
  - kms
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

Creates, updates, deletes, gets or lists a <code>hsm_partitions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hsm_partitions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.kms.hsm_partitions" /></td></tr>
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

The request is processed successfully. HSM information is returned as response.

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
    <td>The OCID of the HSM resource. Each HSM resource has a unique OCID as an identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains a particular HSM resource.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A HSMCluster resource's current lifecycle state.  Example: `ACTIVE`  (ACTIVE, INACTIVE, ACTIVATING, ACTIVATION_REQUIRED, SCHEDULING_DELETION, PENDING_DELETION, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="portInformation" /></td>
    <td><code>array</code></td>
    <td>Details of a single portInformation item include the PortNumber (an integer used as an identifier) and the PortType (refers to either an enum value of Managementutility,Clientutility, or null)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a HSMPartition was created, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2018-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a HSMPartition was updated, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2018-04-03T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

List of HSM summary is returned.

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
    <td>The OCID of the HSM resource. Each HSM resource will have a unique OCID identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains a particular HSM resource.</td>
</tr>
<tr>
    <td><CopyableCode code="hsmClusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the HSMCluster that contains a particular HSM resource.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A HSMCluster resource's current lifecycle state.  Example: `ACTIVE`  (x-obmcs-enumref: #/definitions/HsmPartition/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="portInformation" /></td>
    <td><code>array</code></td>
    <td>Details of a single portInformation item include the PortNumber (an integer used as an identifier) and the PortType (refers to either an enum value of Managementutility,Clientutility, or null)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time an HSM was created, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2018-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time an HSM was updated, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2018-04-03T21:10:29.600Z` </td>
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
    <td><a href="#parameter-hsmClusterId"><code>hsmClusterId</code></a>, <a href="#parameter-hsmPartitionId"><code>hsmPartitionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Retrieves HSM partition details for the specified HSM cluster.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-hsmClusterId"><code>hsmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists all HSM partitions within the specified HSM Cluster resource.&lt;br /&gt;</td>
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
<tr id="parameter-hsmClusterId">
    <td><CopyableCode code="hsmClusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the HSM Cluster. This is a unique identifier assigned to each hsmCluster.</td>
</tr>
<tr id="parameter-hsmPartitionId">
    <td><CopyableCode code="hsmPartitionId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the HSM Partition. This is a unique identifier which each hsmPartition will have.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter that returns only resources that match the specified lifecycle state. The state value is case-insensitive.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in a paginated "List" call. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If provided, the returned request ID will include this value. Otherwise, a random request ID will be generated by the service. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The value of the `opc-next-page` response header from the previous "List" call. </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can specify only one sort order. The default order for `TIMECREATED` is descending. The default order for `DISPLAYNAME` is ascending. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). </td>
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

Retrieves HSM partition details for the specified HSM cluster.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
lifecycleState,
portInformation,
timeCreated,
timeUpdated
FROM oci.kms.hsm_partitions
WHERE hsmClusterId = '{{ hsmClusterId }}' -- required
AND hsmPartitionId = '{{ hsmPartitionId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND opc-retry-token = '{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="list">

Lists all HSM partitions within the specified HSM Cluster resource.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
hsmClusterId,
lifecycleState,
portInformation,
timeCreated,
timeUpdated
FROM oci.kms.hsm_partitions
WHERE hsmClusterId = '{{ hsmClusterId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
;
```
</TabItem>
</Tabs>
