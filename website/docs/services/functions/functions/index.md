--- 
title: functions
hide_title: false
hide_table_of_contents: false
keywords:
  - functions
  - functions
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

Creates, updates, deletes, gets or lists a <code>functions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="functions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.functions.functions" /></td></tr>
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

Succesfully retrieved function.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the function. </td>
</tr>
<tr>
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the application the function belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the function. </td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Function configuration. Overrides application configuration. Keys must be ASCII strings consisting solely of letters, digits, and the '_' (underscore) character, and must not begin with a digit. Values should be limited to printable unicode characters.  Example: `&#123;"MY_FUNCTION_CONFIG": "ConfVal"&#125;`  The maximum size for all configuration keys and values is limited to 4KB. This is measured as the sum of octets necessary to represent each key and value in UTF-8. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="detachedModeTimeoutInSeconds" /></td>
    <td><code>integer (int32)</code></td>
    <td>Timeout for detached function invocations. Value in seconds.  Example: `&#123;"detachedModeTimeoutInSeconds": 900&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the function. The display name is unique within the application containing the function. </td>
</tr>
<tr>
    <td><CopyableCode code="failureDestination" /></td>
    <td><code>object</code></td>
    <td>An object that represents the destination to which Oracle Functions will send an invocation record with the details of the error of the failed detached function invocation. A notification is an example of a failure destination.  Example: `&#123;"kind": "NOTIFICATION", "topicId": "topic_OCID"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>string</code></td>
    <td>The qualified name of the Docker image to use in the function, including the image tag. The image should be in the OCI Registry that is in the same region as the function itself. Example: `phx.ocir.io/ten/functions/function:0.0.1` </td>
</tr>
<tr>
    <td><CopyableCode code="imageDigest" /></td>
    <td><code>string</code></td>
    <td>The image digest for the version of the image that will be pulled when invoking this function. If no value is specified, the digest currently associated with the image in the OCI Registry will be used. Example: `sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7` </td>
</tr>
<tr>
    <td><CopyableCode code="invokeEndpoint" /></td>
    <td><code>string</code></td>
    <td>The base https invoke URL to set on a client in order to invoke a function. This URL will never change over the lifetime of the function and can be cached. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the function.  (CREATING, ACTIVE, INACTIVE, UPDATING, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="memoryInMBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum usable memory for the function (MiB).</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedConcurrencyConfig" /></td>
    <td><code>object</code></td>
    <td>Define the strategy for provisioned concurrency for the function. </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The processor shape (`GENERIC_X86`/`GENERIC_ARM`) on which to run functions in the application, extracted from the image manifest.  (GENERIC_X86, GENERIC_ARM, GENERIC_X86_ARM)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDetails" /></td>
    <td><code>object</code></td>
    <td>The source details for the Function. The function can be created from various sources. </td>
</tr>
<tr>
    <td><CopyableCode code="successDestination" /></td>
    <td><code>object</code></td>
    <td>An object that represents the destination to which Oracle Functions will send an invocation record with the details of the successful detached function invocation. A stream is an example of a success destination.  Example: `&#123;"kind": "STREAM", "streamId": "stream_OCID"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the function was created, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2018-09-12T22:47:12.613Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the function was updated, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2018-09-12T22:47:12.613Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeoutInSeconds" /></td>
    <td><code>integer (int32)</code></td>
    <td>Timeout for executions of the function. Value in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="traceConfig" /></td>
    <td><code>object</code></td>
    <td>Define the tracing configuration for a function. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Summary of a function.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the function. </td>
</tr>
<tr>
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the application the function belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the function. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="detachedModeTimeoutInSeconds" /></td>
    <td><code>integer (int32)</code></td>
    <td>Timeout for detached function invocations. Value in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the function. The display name is unique within the application containing the function. </td>
</tr>
<tr>
    <td><CopyableCode code="failureDestination" /></td>
    <td><code>object</code></td>
    <td>An object that represents the destination to which Oracle Functions will send an invocation record with the details of the error of the failed detached function invocation. A notification is an example of a failure destination.  Example: `&#123;"kind": "NOTIFICATION", "topicId": "topic_OCID"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="image" /></td>
    <td><code>string</code></td>
    <td>The qualified name of the Docker image to use in the function, including the image tag. The image should be in the OCI Registry that is in the same region as the function itself. Example: `phx.ocir.io/ten/functions/function:0.0.1` </td>
</tr>
<tr>
    <td><CopyableCode code="imageDigest" /></td>
    <td><code>string</code></td>
    <td>The image digest for the version of the image that will be pulled when invoking this function. If no value is specified, the digest currently associated with the image in the OCI Registry will be used. Example: `sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7` </td>
</tr>
<tr>
    <td><CopyableCode code="invokeEndpoint" /></td>
    <td><code>string</code></td>
    <td>The base https invoke URL to set on a client in order to invoke a function. This URL will never change over the lifetime of the function and can be cached. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the function.  (x-obmcs-enumref: #/definitions/Function/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="memoryInMBs" /></td>
    <td><code>integer (int64)</code></td>
    <td>Maximum usable memory for the function (MiB).</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedConcurrencyConfig" /></td>
    <td><code>object</code></td>
    <td>Define the strategy for provisioned concurrency for the function. </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The processor shape (`GENERIC_X86`/`GENERIC_ARM`) on which to run functions in the application, extracted from the image manifest.  (GENERIC_X86, GENERIC_ARM, GENERIC_X86_ARM)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceDetails" /></td>
    <td><code>object</code></td>
    <td>The source details for the Function. The function can be created from various sources. </td>
</tr>
<tr>
    <td><CopyableCode code="successDestination" /></td>
    <td><code>object</code></td>
    <td>An object that represents the destination to which Oracle Functions will send an invocation record with the details of the successful detached function invocation. A stream is an example of a success destination.  Example: `&#123;"kind": "STREAM", "streamId": "stream_OCID"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the function was created, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2018-09-12T22:47:12.613Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the function was updated, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2018-09-12T22:47:12.613Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeoutInSeconds" /></td>
    <td><code>integer (int32)</code></td>
    <td>Timeout for executions of the function. Value in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="traceConfig" /></td>
    <td><code>object</code></td>
    <td>Define the tracing configuration for a function. </td>
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
    <td><a href="#parameter-functionId"><code>functionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Retrieves a function.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-applicationId"><code>applicationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a></td>
    <td>Lists functions for an application.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-applicationId"><code>applicationId</code></a>, <a href="#parameter-memoryInMBs"><code>memoryInMBs</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a new function.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-functionId"><code>functionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Modifies a function</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-functionId"><code>functionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes a function.</td>
</tr>
<tr>
    <td><a href="#invoke_function"><CopyableCode code="invoke_function" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-functionId"><code>functionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-fn-intent"><code>fn-intent</code></a>, <a href="#parameter-fn-invoke-type"><code>fn-invoke-type</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-is-dry-run"><code>is-dry-run</code></a></td>
    <td>Invokes a function</td>
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
<tr id="parameter-applicationId">
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the application to which this function belongs. </td>
</tr>
<tr id="parameter-functionId">
    <td><CopyableCode code="functionId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of this function. </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only functions with display names that match the display name string. Matching is exact. </td>
</tr>
<tr id="parameter-fn-intent">
    <td><CopyableCode code="fn-intent" /></td>
    <td><code>string</code></td>
    <td>An optional intent header that indicates to the FDK the way the event should be interpreted. E.g. 'httprequest', 'cloudevent'. </td>
</tr>
<tr id="parameter-fn-invoke-type">
    <td><CopyableCode code="fn-invoke-type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether Oracle Functions should execute the request and return the result ('sync') of the execution,  or whether Oracle Functions should return as soon as processing has begun ('detached') and leave result handling to the function. </td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A filter to return only functions with the specified OCID. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-is-dry-run">
    <td><CopyableCode code="is-dry-run" /></td>
    <td><code>boolean</code></td>
    <td>Indicates that the request is a dry run, if set to "true". A dry run request does not execute the function. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only functions that match the lifecycle state in this parameter. Example: `Creating` </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return. 1 is the minimum, 50 is the maximum.  Default: 10 </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token for a list query returned by a previous operation </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>Specifies the attribute with which to sort the rules.  Default: `displayName`  * **timeCreated:** Sorts by timeCreated. * **displayName:** Sorts by displayName. * **id:** Sorts by id. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies sort order.  * **ASC:** Ascending sort order. * **DESC:** Descending sort order. </td>
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

Retrieves a function.

```sql
SELECT
id,
applicationId,
compartmentId,
config,
definedTags,
detachedModeTimeoutInSeconds,
displayName,
failureDestination,
freeformTags,
image,
imageDigest,
invokeEndpoint,
lifecycleState,
memoryInMBs,
provisionedConcurrencyConfig,
shape,
sourceDetails,
successDestination,
timeCreated,
timeUpdated,
timeoutInSeconds,
traceConfig
FROM oci.functions.functions
WHERE functionId = '{{ functionId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists functions for an application.

```sql
SELECT
id,
applicationId,
compartmentId,
definedTags,
detachedModeTimeoutInSeconds,
displayName,
failureDestination,
freeformTags,
image,
imageDigest,
invokeEndpoint,
lifecycleState,
memoryInMBs,
provisionedConcurrencyConfig,
shape,
sourceDetails,
successDestination,
timeCreated,
timeUpdated,
timeoutInSeconds,
traceConfig
FROM oci.functions.functions
WHERE applicationId = '{{ applicationId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
AND id = '{{ id }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
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

Creates a new function.

```sql
INSERT INTO oci.functions.functions (
applicationId,
config,
definedTags,
detachedModeTimeoutInSeconds,
displayName,
failureDestination,
freeformTags,
image,
imageDigest,
memoryInMBs,
provisionedConcurrencyConfig,
sourceDetails,
successDestination,
timeoutInSeconds,
traceConfig,
region,
opc-request-id
)
SELECT 
'{{ applicationId }}' /* required */,
'{{ config }}',
'{{ definedTags }}',
{{ detachedModeTimeoutInSeconds }},
'{{ displayName }}' /* required */,
'{{ failureDestination }}',
'{{ freeformTags }}',
'{{ image }}',
'{{ imageDigest }}',
{{ memoryInMBs }} /* required */,
'{{ provisionedConcurrencyConfig }}',
'{{ sourceDetails }}',
'{{ successDestination }}',
{{ timeoutInSeconds }},
'{{ traceConfig }}',
'{{ region }}',
'{{ opc-request-id }}'
RETURNING
id,
applicationId,
compartmentId,
config,
definedTags,
detachedModeTimeoutInSeconds,
displayName,
failureDestination,
freeformTags,
image,
imageDigest,
invokeEndpoint,
lifecycleState,
memoryInMBs,
provisionedConcurrencyConfig,
shape,
sourceDetails,
successDestination,
timeCreated,
timeUpdated,
timeoutInSeconds,
traceConfig
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: functions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the functions resource.
    - name: applicationId
      value: "{{ applicationId }}"
      description: |
        The OCID of the application this function belongs to.
    - name: config
      value: "{{ config }}"
      description: |
        Function configuration. These values are passed on to the function as environment variables, this overrides application configuration values.
        Keys must be ASCII strings consisting solely of letters, digits, and the '_' (underscore) character, and must not begin with a digit. Values should be limited to printable unicode characters.
        Example: \`{"MY_FUNCTION_CONFIG": "ConfVal"}\`
        The maximum size for all configuration keys and values is limited to 4KB. This is measured as the sum of octets necessary to represent each key and value in UTF-8.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: detachedModeTimeoutInSeconds
      value: {{ detachedModeTimeoutInSeconds }}
      description: |
        Timeout for detached function invocations. Value in seconds.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The display name of the function. The display name must be unique within the application containing the function. Avoid entering confidential information.
    - name: failureDestination
      description: |
        An object that represents the destination to which Oracle Functions will send an invocation record with the details of the error of the failed detached function invocation.
        A notification is an example of a failure destination.
        Example: \`{"kind": "NOTIFICATION", "topicId": "topic_OCID"}\`
      value:
        kind: "{{ kind }}"
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: image
      value: "{{ image }}"
      description: |
        The qualified name of the Docker image to use in the function, including the image tag.
        The image should be in the OCI Registry that is in the same region as the function itself.
        Example: \`phx.ocir.io/ten/functions/function:0.0.1\`
    - name: imageDigest
      value: "{{ imageDigest }}"
      description: |
        The image digest for the version of the image that will be pulled when invoking this function.
        If no value is specified, the digest currently associated with the image in the OCI Registry will be used.
        Example: \`sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7\`
    - name: memoryInMBs
      value: {{ memoryInMBs }}
      description: |
        Maximum usable memory for the function (MiB).
    - name: provisionedConcurrencyConfig
      description: |
        Define the strategy for provisioned concurrency for the function.
      value:
        strategy: "{{ strategy }}"
    - name: sourceDetails
      description: |
        The source details for the Function. The function can be created from various sources.
      value:
        sourceType: "{{ sourceType }}"
    - name: successDestination
      description: |
        An object that represents the destination to which Oracle Functions will send an invocation record with the details of the successful detached function invocation.
        A stream is an example of a success destination.
        Example: \`{"kind": "STREAM", "streamId": "stream_OCID"}\`
      value:
        kind: "{{ kind }}"
    - name: timeoutInSeconds
      value: {{ timeoutInSeconds }}
      description: |
        Timeout for executions of the function. Value in seconds.
      default: 30
    - name: traceConfig
      description: |
        Define the tracing configuration for a function.
      value:
        isEnabled: {{ isEnabled }}
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
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

Modifies a function

```sql
UPDATE oci.functions.functions
SET 
config = '{{ config }}',
definedTags = '{{ definedTags }}',
detachedModeTimeoutInSeconds = {{ detachedModeTimeoutInSeconds }},
failureDestination = '{{ failureDestination }}',
freeformTags = '{{ freeformTags }}',
image = '{{ image }}',
imageDigest = '{{ imageDigest }}',
memoryInMBs = {{ memoryInMBs }},
provisionedConcurrencyConfig = '{{ provisionedConcurrencyConfig }}',
successDestination = '{{ successDestination }}',
timeoutInSeconds = {{ timeoutInSeconds }},
traceConfig = '{{ traceConfig }}'
WHERE 
functionId = '{{ functionId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
applicationId,
compartmentId,
config,
definedTags,
detachedModeTimeoutInSeconds,
displayName,
failureDestination,
freeformTags,
image,
imageDigest,
invokeEndpoint,
lifecycleState,
memoryInMBs,
provisionedConcurrencyConfig,
shape,
sourceDetails,
successDestination,
timeCreated,
timeUpdated,
timeoutInSeconds,
traceConfig;
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

Deletes a function.

```sql
DELETE FROM oci.functions.functions
WHERE functionId = '{{ functionId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="invoke_function"
    values={[
        { label: 'invoke_function', value: 'invoke_function' }
    ]}
>
<TabItem value="invoke_function">

Invokes a function

```sql
EXEC oci.functions.functions.invoke_function 
@functionId='{{ functionId }}' --required, 
@region='{{ region }}' --required, 
@fn-intent='{{ fn-intent }}', 
@fn-invoke-type='{{ fn-invoke-type }}', 
@opc-request-id='{{ opc-request-id }}', 
@is-dry-run={{ is-dry-run }}
;
```
</TabItem>
</Tabs>
