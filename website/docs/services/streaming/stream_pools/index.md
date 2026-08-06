--- 
title: stream_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - stream_pools
  - streaming
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

Creates, updates, deletes, gets or lists a <code>stream_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stream_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.streaming.stream_pools" /></td></tr>
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
    <td>The OCID of the stream pool. (example: ocid1.streampool.realm.region.mnopqr789)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the stream pool. (example: MyStreamPool)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>Compartment OCID that the pool belongs to. (example: ocid1.compartment.oc1..aaaaaaaa2byuam5ewxzrcs2iqzh7okx84jae6j4uhkih5wdbrkkwuxv3qgpa)</td>
</tr>
<tr>
    <td><CopyableCode code="customEncryptionKey" /></td>
    <td><code>object</code></td>
    <td>Custom Encryption Key which will be used for encryption by all the streams in the pool.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;' </td>
</tr>
<tr>
    <td><CopyableCode code="endpointFqdn" /></td>
    <td><code>string</code></td>
    <td>The FQDN used to access the streams inside the stream pool (same FQDN as the messagesEndpoint attribute of a &#91;Stream&#93;(#/en/streaming/20180418/Stream) object). If the stream pool is private, the FQDN is customized and can only be accessed from inside the associated subnetId, otherwise the FQDN is publicly resolvable. Depending on which protocol you attempt to use, you need to either prepend https or append the Kafka port. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. Exists for cross-compatibility only. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isPrivate" /></td>
    <td><code>boolean</code></td>
    <td>True if the stream pool is private, false otherwise. If the stream pool is private, the streams inside the stream pool can only be accessed from inside the associated subnetId. </td>
</tr>
<tr>
    <td><CopyableCode code="kafkaSettings" /></td>
    <td><code>object</code></td>
    <td>Settings for the Kafka compatibility layer.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the stream pool. (CREATING, ACTIVE, DELETING, DELETED, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleStateDetails" /></td>
    <td><code>string</code></td>
    <td>Any additional details about the current state of the stream.</td>
</tr>
<tr>
    <td><CopyableCode code="privateEndpointSettings" /></td>
    <td><code>object</code></td>
    <td>Optional settings if the stream pool is private.</td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security attributes for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "enforce"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the stream pool was created, expressed in in &#91;RFC 3339&#93;(https:​//tools.ietf.org/rfc/rfc3339) timestamp format.  Example: `2018-04-20T00:00:07.405Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The summary representation of a stream pool.

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
    <td>The OCID of the stream pool. (example: ocid1.streampool.realm.region.mnopqr789)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the stream pool. (example: MyStreamPool)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>Compartment OCID that the pool belongs to. (example: ocid1.compartment.oc1..aaaaaaaa2byuam5ewxzrcs2iqzh7okx84jae6j4uhkih5wdbrkkwuxv3qgpa)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair that is applied with no predefined name, type, or namespace. Exists for cross-compatibility only. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isPrivate" /></td>
    <td><code>boolean</code></td>
    <td>True if the stream pool is private, false otherwise. The associated endpoint and subnetId of a private stream pool can be retrieved through the &#91;GetStreamPool&#93;(#/en/streaming/20180418/StreamPool/GetStreamPool) API. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the stream pool. (CREATING, ACTIVE, DELETING, DELETED, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security attributes for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "enforce"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the stream pool was created, expressed in in &#91;RFC 3339&#93;(https:​//tools.ietf.org/rfc/rfc3339) timestamp format.  Example: `2018-04-20T00:00:07.405Z` </td>
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
    <td><a href="#parameter-streamPoolId"><code>streamPoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets detailed information about the stream pool, such as Kafka settings.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>List the stream pools for a given compartment ID.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Starts the provisioning of a new stream pool.&lt;br /&gt;To track the progress of the provisioning, you can periodically call GetStreamPool.&lt;br /&gt;In the response, the `lifecycleState` parameter of the object tells you its current state.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-streamPoolId"><code>streamPoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified stream pool.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-streamPoolId"><code>streamPoolId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes a stream pool. All containing streams will also be deleted.&lt;br /&gt;The default stream pool of a compartment cannot be deleted.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-streamPoolId"><code>streamPoolId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Moves a resource into a different compartment. When provided, If-Match is checked against ETag values of the resource.</td>
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
    <td>The OCID of the compartment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-streamPoolId">
    <td><CopyableCode code="streamPoolId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the stream pool. </td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given ID exactly. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value.</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given lifecycle state. The state value is case-insensitive. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return. The value must be between 1 and 50. The default is 10.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given name exactly. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected).</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The page at which to start retrieving results.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide no more than one sort order. By default, `TIMECREATED` sorts results in descending order and `NAME` sorts results in ascending order. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either 'asc' or 'desc'. </td>
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

Gets detailed information about the stream pool, such as Kafka settings.

```sql
SELECT
id,
name,
compartmentId,
customEncryptionKey,
definedTags,
endpointFqdn,
freeformTags,
isPrivate,
kafkaSettings,
lifecycleState,
lifecycleStateDetails,
privateEndpointSettings,
securityAttributes,
timeCreated
FROM oci.streaming.stream_pools
WHERE streamPoolId = '{{ streamPoolId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

List the stream pools for a given compartment ID.

```sql
SELECT
id,
name,
compartmentId,
definedTags,
freeformTags,
isPrivate,
lifecycleState,
securityAttributes,
timeCreated
FROM oci.streaming.stream_pools
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND id = '{{ id }}'
AND name = '{{ name }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
AND opc-request-id = '{{ opc-request-id }}'
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

Starts the provisioning of a new stream pool.&lt;br /&gt;To track the progress of the provisioning, you can periodically call GetStreamPool.&lt;br /&gt;In the response, the `lifecycleState` parameter of the object tells you its current state.&lt;br /&gt;

```sql
INSERT INTO oci.streaming.stream_pools (
compartmentId,
customEncryptionKeyDetails,
definedTags,
freeformTags,
kafkaSettings,
name,
privateEndpointDetails,
securityAttributes,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ customEncryptionKeyDetails }}',
'{{ definedTags }}',
'{{ freeformTags }}',
'{{ kafkaSettings }}',
'{{ name }}' /* required */,
'{{ privateEndpointDetails }}',
'{{ securityAttributes }}',
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
name,
compartmentId,
customEncryptionKey,
definedTags,
endpointFqdn,
freeformTags,
isPrivate,
kafkaSettings,
lifecycleState,
lifecycleStateDetails,
privateEndpointSettings,
securityAttributes,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stream_pools
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stream_pools resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment that contains the stream.
    - name: customEncryptionKeyDetails
      description: |
        The OCID of the custom encryption key to be used or deleted if currently being used.
      value:
        kmsKeyId: "{{ kmsKeyId }}"
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair that is applied with no predefined name, type, or namespace. Exists for cross-compatibility only.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: kafkaSettings
      description: |
        Settings for the Kafka compatibility layer.
      value:
        autoCreateTopicsEnable: {{ autoCreateTopicsEnable }}
        bootstrapServers: "{{ bootstrapServers }}"
        logRetentionHours: {{ logRetentionHours }}
        numPartitions: {{ numPartitions }}
    - name: name
      value: "{{ name }}"
      description: |
        The name of the stream pool. Avoid entering confidential information.
        Example: \`MyStreamPool\`
    - name: privateEndpointDetails
      description: |
        Optional parameters if a private stream pool is requested.
      value:
        nsgIds:
          - "{{ nsgIds }}"
        privateEndpointIp: "{{ privateEndpointIp }}"
        subnetId: "{{ subnetId }}"
    - name: securityAttributes
      value: "{{ securityAttributes }}"
      description: |
        Security attributes for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Oracle-ZPR": {"MaxEgressCount": {"value": "42", "mode": "enforce"}}}\`
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
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

Updates the specified stream pool.&lt;br /&gt;

```sql
UPDATE oci.streaming.stream_pools
SET 
customEncryptionKeyDetails = '{{ customEncryptionKeyDetails }}',
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}',
kafkaSettings = '{{ kafkaSettings }}',
name = '{{ name }}',
securityAttributes = '{{ securityAttributes }}'
WHERE 
streamPoolId = '{{ streamPoolId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
name,
compartmentId,
customEncryptionKey,
definedTags,
endpointFqdn,
freeformTags,
isPrivate,
kafkaSettings,
lifecycleState,
lifecycleStateDetails,
privateEndpointSettings,
securityAttributes,
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

Deletes a stream pool. All containing streams will also be deleted.&lt;br /&gt;The default stream pool of a compartment cannot be deleted.&lt;br /&gt;

```sql
DELETE FROM oci.streaming.stream_pools
WHERE streamPoolId = '{{ streamPoolId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
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

Moves a resource into a different compartment. When provided, If-Match is checked against ETag values of the resource.

```sql
EXEC oci.streaming.stream_pools.change_compartment 
@streamPoolId='{{ streamPoolId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
</Tabs>
