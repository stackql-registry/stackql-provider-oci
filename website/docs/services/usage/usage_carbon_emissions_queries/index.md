--- 
title: usage_carbon_emissions_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_carbon_emissions_queries
  - usage
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

Creates, updates, deletes, gets or lists a <code>usage_carbon_emissions_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_carbon_emissions_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.usage.usage_carbon_emissions_queries" /></td></tr>
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

The carbon emissions usage saved query.

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
    <td>The query OCID.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment OCID.</td>
</tr>
<tr>
    <td><CopyableCode code="queryDefinition" /></td>
    <td><code>object</code></td>
    <td>The common fields for queries.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The carbon emissions usage saved queries list.

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
    <td>The query OCID.</td>
</tr>
<tr>
    <td><CopyableCode code="queryDefinition" /></td>
    <td><code>object</code></td>
    <td>The common fields for queries.</td>
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
    <td><a href="#parameter-usageCarbonEmissionsQueryId"><code>usageCarbonEmissionsQueryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Returns the carbon emissions usage saved query.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Returns the carbon emissions usage saved query list.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-queryDefinition"><code>queryDefinition</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Returns the created carbon emissions usage query.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-usageCarbonEmissionsQueryId"><code>usageCarbonEmissionsQueryId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queryDefinition"><code>queryDefinition</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Update a carbon emissions usage saved query by the OCID.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-usageCarbonEmissionsQueryId"><code>usageCarbonEmissionsQueryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Delete a carbon emissions usage saved query by the OCID.&lt;br /&gt;</td>
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
    <td>The compartment ID in which to list resources.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-usageCarbonEmissionsQueryId">
    <td><CopyableCode code="usageCarbonEmissionsQueryId" /></td>
    <td><code>string</code></td>
    <td>The query unique OCID.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted, only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error, without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations. For example, if a resource has been deleted and purged from the system, then a retry of the original creation request might be rejected. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call. </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. If not specified, the default is displayName. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, whether 'asc' or 'desc'.</td>
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

Returns the carbon emissions usage saved query.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
queryDefinition
FROM oci.usage.usage_carbon_emissions_queries
WHERE usageCarbonEmissionsQueryId = '{{ usageCarbonEmissionsQueryId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Returns the carbon emissions usage saved query list.&lt;br /&gt;

```sql
SELECT
id,
queryDefinition
FROM oci.usage.usage_carbon_emissions_queries
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
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

Returns the created carbon emissions usage query.&lt;br /&gt;

```sql
INSERT INTO oci.usage.usage_carbon_emissions_queries (
compartmentId,
queryDefinition,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ queryDefinition }}' /* required */,
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
queryDefinition
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: usage_carbon_emissions_queries
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the usage_carbon_emissions_queries resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The compartment OCID.
    - name: queryDefinition
      description: |
        The common fields for queries.
      value:
        costAnalysisUI:
          graph: "{{ graph }}"
          isCumulativeGraph: {{ isCumulativeGraph }}
        displayName: "{{ displayName }}"
        reportQuery:
          compartmentDepth: {{ compartmentDepth }}
          dateRangeName: "{{ dateRangeName }}"
          emissionCalculationMethod: "{{ emissionCalculationMethod }}"
          emissionType: "{{ emissionType }}"
          filter:
            dimensions:
              - key: "{{ key }}"
                value: "{{ value }}"
            filters:
              - dimensions: "{{ dimensions }}"
                filters: "{{ filters }}"
                operator: "{{ operator }}"
                tags: "{{ tags }}"
            operator: "{{ operator }}"
            tags:
              - key: "{{ key }}"
                namespace: "{{ namespace }}"
                value: "{{ value }}"
          granularity: "{{ granularity }}"
          groupBy:
            - "{{ groupBy }}"
          groupByTag:
            - key: "{{ key }}"
              namespace: "{{ namespace }}"
              value: "{{ value }}"
          isAggregateByTime: {{ isAggregateByTime }}
          tenantId: "{{ tenantId }}"
          timeUsageEnded: "{{ timeUsageEnded }}"
          timeUsageStarted: "{{ timeUsageStarted }}"
        version: {{ version }}
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error, without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations. For example, if a resource has been deleted and purged from the system, then a retry of the original creation request might be rejected. 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error, without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations. For example, if a resource has been deleted and purged from the system, then a retry of the original creation request might be rejected. 
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

Update a carbon emissions usage saved query by the OCID.&lt;br /&gt;

```sql
UPDATE oci.usage.usage_carbon_emissions_queries
SET 
queryDefinition = '{{ queryDefinition }}'
WHERE 
usageCarbonEmissionsQueryId = '{{ usageCarbonEmissionsQueryId }}' --required
AND region = '{{ region }}' --required
AND queryDefinition = '{{ queryDefinition }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
queryDefinition;
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

Delete a carbon emissions usage saved query by the OCID.&lt;br /&gt;

```sql
DELETE FROM oci.usage.usage_carbon_emissions_queries
WHERE usageCarbonEmissionsQueryId = '{{ usageCarbonEmissionsQueryId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
