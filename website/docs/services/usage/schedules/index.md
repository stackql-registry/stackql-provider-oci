--- 
title: schedules
hide_title: false
hide_table_of_contents: false
keywords:
  - schedules
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

Creates, updates, deletes, gets or lists a <code>schedules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schedules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.usage.schedules" /></td></tr>
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

The saved schedule.

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
    <td>The OCID representing a unique shedule.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string (x-obmcs-ascii-identifier)</code></td>
    <td>The unique name of the schedule created by the user.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The customer tenancy.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. See &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"foo-namespace": &#123;"bar-key": "value"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only. See &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"bar-key": "value"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The schedule lifecycle state. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="outputFileFormat" /></td>
    <td><code>string</code></td>
    <td>Specifies the supported output file format. (CSV, PDF) (default: CSV)</td>
</tr>
<tr>
    <td><CopyableCode code="queryProperties" /></td>
    <td><code>object</code></td>
    <td>The query properties.</td>
</tr>
<tr>
    <td><CopyableCode code="resultLocation" /></td>
    <td><code>object</code></td>
    <td>The location where usage or cost CSVs will be uploaded defined by `locationType`, which corresponds with type-specific characteristics. </td>
</tr>
<tr>
    <td><CopyableCode code="savedReportId" /></td>
    <td><code>string</code></td>
    <td>The saved report ID which can also be used to generate a query.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleRecurrences" /></td>
    <td><code>string (x-obmcs-recurring-time)</code></td>
    <td>Specifies the frequency according to when the schedule will be run, in the x-obmcs-recurring-time format described in &#91;RFC 5545 section 3.3.10&#93;(https:​//datatracker.ietf.org/doc/html/rfc5545#section-3.3.10). Supported values are : ONETIME, DAILY, WEEKLY and MONTHLY. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. See &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the schedule was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeNextRun" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the next job execution.</td>
</tr>
<tr>
    <td><CopyableCode code="timeScheduled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the first time job execution.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The saved schedule list.

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
    <td>The schedule OCID.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the user-created schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. See &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"foo-namespace": &#123;"bar-key": "value"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only. See &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"bar-key": "value"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The schedule summary lifecycle state. (x-obmcs-enumref: #/definitions/Schedule/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduleRecurrences" /></td>
    <td><code>string (x-obmcs-recurring-time)</code></td>
    <td>Specifies the frequency according to when the schedule will be run, in the x-obmcs-recurring-time format described in &#91;RFC 5545 section 3.3.10&#93;(https:​//datatracker.ietf.org/doc/html/rfc5545#section-3.3.10). Supported values are : ONETIME, DAILY, WEEKLY and MONTHLY. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. See &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeNextRun" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the next job execution.</td>
</tr>
<tr>
    <td><CopyableCode code="timeScheduled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the first time job execution.</td>
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
    <td><a href="#parameter-scheduleId"><code>scheduleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Returns the saved schedule.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>Returns the saved schedule list.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-resultLocation"><code>resultLocation</code></a>, <a href="#parameter-scheduleRecurrences"><code>scheduleRecurrences</code></a>, <a href="#parameter-timeScheduled"><code>timeScheduled</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Returns the created schedule.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-scheduleId"><code>scheduleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Update a saved schedule.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-scheduleId"><code>scheduleId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Delete a saved scheduled report by the OCID.&lt;br /&gt;</td>
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
<tr id="parameter-scheduleId">
    <td><CopyableCode code="scheduleId" /></td>
    <td><code>string</code></td>
    <td>The schedule unique OCID.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The query parameter for filtering by name. </td>
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
    <td>The field to sort by. If not specified, the default is timeCreated. </td>
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

Returns the saved schedule.&lt;br /&gt;

```sql
SELECT
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
lifecycleState,
outputFileFormat,
queryProperties,
resultLocation,
savedReportId,
scheduleRecurrences,
systemTags,
timeCreated,
timeNextRun,
timeScheduled
FROM oci.usage.schedules
WHERE scheduleId = '{{ scheduleId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Returns the saved schedule list.&lt;br /&gt;

```sql
SELECT
id,
name,
definedTags,
description,
freeformTags,
lifecycleState,
scheduleRecurrences,
systemTags,
timeNextRun,
timeScheduled
FROM oci.usage.schedules
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND name = '{{ name }}'
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

Returns the created schedule.&lt;br /&gt;

```sql
INSERT INTO oci.usage.schedules (
compartmentId,
definedTags,
description,
freeformTags,
name,
outputFileFormat,
queryProperties,
resultLocation,
savedReportId,
scheduleRecurrences,
timeScheduled,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ description }}',
'{{ freeformTags }}',
'{{ name }}' /* required */,
'{{ outputFileFormat }}',
'{{ queryProperties }}',
'{{ resultLocation }}' /* required */,
'{{ savedReportId }}',
'{{ scheduleRecurrences }}' /* required */,
'{{ timeScheduled }}' /* required */,
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
lifecycleState,
outputFileFormat,
queryProperties,
resultLocation,
savedReportId,
scheduleRecurrences,
systemTags,
timeCreated,
timeNextRun,
timeScheduled
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: schedules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the schedules resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The customer tenancy.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](/Content/General/Concepts/resourcetags.htm). Example: \`{"foo-namespace": {"bar-key": "value"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        The description of the schedule.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
        See [Resource Tags](/Content/General/Concepts/resourcetags.htm). Example: \`{"bar-key": "value"}\`
    - name: name
      value: "{{ name }}"
      description: |
        The unique name of the user-created schedule.
    - name: outputFileFormat
      value: "{{ outputFileFormat }}"
      description: |
        Specifies the supported output file format.
      valid_values: ['CSV', 'PDF']
      default: CSV
    - name: queryProperties
      description: |
        The query properties.
      value:
        compartmentDepth: {{ compartmentDepth }}
        dateRange:
          dateRangeType: "{{ dateRangeType }}"
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
        queryType: "{{ queryType }}"
    - name: resultLocation
      description: |
        The location where usage or cost CSVs will be uploaded defined by \`locationType\`,
        which corresponds with type-specific characteristics.
      value:
        locationType: "{{ locationType }}"
    - name: savedReportId
      value: "{{ savedReportId }}"
      description: |
        The saved report ID which can also be used to generate a query.
    - name: scheduleRecurrences
      value: "{{ scheduleRecurrences }}"
      description: |
        Specifies the frequency according to when the schedule will be run,
        in the x-obmcs-recurring-time format described in [RFC 5545 section 3.3.10](https://datatracker.ietf.org/doc/html/rfc5545#section-3.3.10).
        Supported values are : ONETIME, DAILY, WEEKLY and MONTHLY.
    - name: timeScheduled
      value: "{{ timeScheduled }}"
      description: |
        The date and time of the first time job execution.
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

Update a saved schedule.&lt;br /&gt;

```sql
UPDATE oci.usage.schedules
SET 
definedTags = '{{ definedTags }}',
description = '{{ description }}',
freeformTags = '{{ freeformTags }}',
outputFileFormat = '{{ outputFileFormat }}',
resultLocation = '{{ resultLocation }}'
WHERE 
scheduleId = '{{ scheduleId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
lifecycleState,
outputFileFormat,
queryProperties,
resultLocation,
savedReportId,
scheduleRecurrences,
systemTags,
timeCreated,
timeNextRun,
timeScheduled;
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

Delete a saved scheduled report by the OCID.&lt;br /&gt;

```sql
DELETE FROM oci.usage.schedules
WHERE scheduleId = '{{ scheduleId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
