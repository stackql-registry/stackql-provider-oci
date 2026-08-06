--- 
title: resolver_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - resolver_endpoints
  - dns
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

Creates, updates, deletes, gets or lists a <code>resolver_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resolver_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.dns.resolver_endpoints" /></td></tr>
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

A Response containing a single resolver endpoint object.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resolver endpoint. Must be unique, case-insensitive, within the resolver.  (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the owning compartment. This will match the resolver that the resolver endpoint is under and will be updated if the resolver's compartment is changed. </td>
</tr>
<tr>
    <td><CopyableCode code="endpointType" /></td>
    <td><code>string</code></td>
    <td>The type of resolver endpoint. VNIC is currently the only supported type.  (VNIC) (default: VNIC)</td>
</tr>
<tr>
    <td><CopyableCode code="forwardingAddress" /></td>
    <td><code>string</code></td>
    <td>An IP address from which forwarded queries may be sent. For VNIC endpoints, this IP address must be part of the subnet and will be assigned by the system if unspecified when isForwarding is true. </td>
</tr>
<tr>
    <td><CopyableCode code="isForwarding" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean flag indicating whether or not the resolver endpoint is for forwarding. </td>
</tr>
<tr>
    <td><CopyableCode code="isListening" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean flag indicating whether or not the resolver endpoint is for listening. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the resource. (ACTIVE, CREATING, DELETED, DELETING, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="listeningAddress" /></td>
    <td><code>string</code></td>
    <td>An IP address to listen to queries on. For VNIC endpoints this IP address must be part of the subnet and will be assigned by the system if unspecified when isListening is true. </td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The canonical absolute URL of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created in "YYYY-MM-ddThh:mm:ssZ" format with a Z offset, as defined by RFC 3339.  **Example:** `2016-07-22T17:23:59:60Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was last updated in "YYYY-MM-ddThh:mm:ssZ" format with a Z offset, as defined by RFC 3339.  **Example:** `2016-07-22T17:23:59:60Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An OCI DNS resolver endpoint.&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the resolver endpoint. Must be unique, case-insensitive, within the resolver.  (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the owning compartment. This will match the resolver that the resolver endpoint is under and will be updated if the resolver's compartment is changed. </td>
</tr>
<tr>
    <td><CopyableCode code="endpointType" /></td>
    <td><code>string</code></td>
    <td>The type of resolver endpoint. VNIC is currently the only supported type.  (VNIC) (default: VNIC)</td>
</tr>
<tr>
    <td><CopyableCode code="forwardingAddress" /></td>
    <td><code>string</code></td>
    <td>An IP address from which forwarded queries may be sent. For VNIC endpoints, this IP address must be part of the subnet and will be assigned by the system if unspecified when isForwarding is true. </td>
</tr>
<tr>
    <td><CopyableCode code="isForwarding" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean flag indicating whether or not the resolver endpoint is for forwarding. </td>
</tr>
<tr>
    <td><CopyableCode code="isListening" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean flag indicating whether or not the resolver endpoint is for listening. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the resource. (ACTIVE, CREATING, DELETED, DELETING, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="listeningAddress" /></td>
    <td><code>string</code></td>
    <td>An IP address to listen to queries on. For VNIC endpoints this IP address must be part of the subnet and will be assigned by the system if unspecified when isListening is true. </td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The canonical absolute URL of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created in "YYYY-MM-ddThh:mm:ssZ" format with a Z offset, as defined by RFC 3339.  **Example:** `2016-07-22T17:23:59:60Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was last updated in "YYYY-MM-ddThh:mm:ssZ" format with a Z offset, as defined by RFC 3339.  **Example:** `2016-07-22T17:23:59:60Z` </td>
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
    <td><a href="#parameter-resolverId"><code>resolverId</code></a>, <a href="#parameter-resolverEndpointName"><code>resolverEndpointName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Modified-Since"><code>If-Modified-Since</code></a>, <a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Gets information about a specific resolver endpoint.&lt;br /&gt;&lt;br /&gt;Note that attempting to get a resolver endpoint in the DELETED lifecycle state will result&lt;br /&gt;in a `404` response to be consistent with other operations of the API.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resolverId"><code>resolverId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Gets a list of all endpoints within a resolver. The collection can be filtered by name or lifecycle state.&lt;br /&gt;It can be sorted on creation time or name both in ASC or DESC order. Note that when no lifecycleState&lt;br /&gt;query parameter is provided, the collection does not include resolver endpoints in the DELETED&lt;br /&gt;lifecycle state to be consistent with other operations of the API.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-resolverId"><code>resolverId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-isForwarding"><code>isForwarding</code></a>, <a href="#parameter-isListening"><code>isListening</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Creates a new resolver endpoint in the same compartment as the resolver.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resolverId"><code>resolverId</code></a>, <a href="#parameter-resolverEndpointName"><code>resolverEndpointName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Updates the specified resolver endpoint with your new information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-resolverId"><code>resolverId</code></a>, <a href="#parameter-resolverEndpointName"><code>resolverEndpointName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Deletes the specified resolver endpoint.&lt;br /&gt;&lt;br /&gt;Note that attempting to delete a resolver endpoint in the DELETED lifecycle state will result in&lt;br /&gt;a `404` response to be consistent with other operations of the API. Resolver endpoints may not&lt;br /&gt;be deleted if they are referenced by a resolver rule.&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-resolverEndpointName">
    <td><CopyableCode code="resolverEndpointName" /></td>
    <td><code>string</code></td>
    <td>The name of the target resolver endpoint.</td>
</tr>
<tr id="parameter-resolverId">
    <td><CopyableCode code="resolverId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the target resolver.</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The `If-Match` header field makes the request method conditional on the existence of at least one current representation of the target resource, when the field-value is `*`, or having a current representation of the target resource that has an entity-tag matching a member of the list of entity-tags provided in the field-value. </td>
</tr>
<tr id="parameter-If-Modified-Since">
    <td><CopyableCode code="If-Modified-Since" /></td>
    <td><code>string</code></td>
    <td>The `If-Modified-Since` header field makes a GET or HEAD request method conditional on the selected representation's modification date being more recent than the date provided in the field-value.  Transfer of the selected representation's data is avoided if that data has not changed. </td>
</tr>
<tr id="parameter-If-None-Match">
    <td><CopyableCode code="If-None-Match" /></td>
    <td><code>string</code></td>
    <td>The `If-None-Match` header field makes the request method conditional on the absence of any current representation of the target resource, when the field-value is `*`, or having a selected representation with an entity-tag that does not match any of those listed in the field-value. </td>
</tr>
<tr id="parameter-If-Unmodified-Since">
    <td><CopyableCode code="If-Unmodified-Since" /></td>
    <td><code>string</code></td>
    <td>The `If-Unmodified-Since` header field makes the request method conditional on the selected representation's last modification date being earlier than or equal to the date provided in the field-value.  This field accomplishes the same purpose as If-Match for cases where the user agent does not have an entity-tag for the representation. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The state of a resource.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum number of items to return in a page of the collection. </td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a resource.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The value of the `opc-next-page` response header from the previous "List" call. </td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Specifies to operate only on resources that have a matching DNS scope. </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field by which to sort resolver endpoints.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The order to sort the resources. </td>
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

Gets information about a specific resolver endpoint.&lt;br /&gt;&lt;br /&gt;Note that attempting to get a resolver endpoint in the DELETED lifecycle state will result&lt;br /&gt;in a `404` response to be consistent with other operations of the API.&lt;br /&gt;

```sql
SELECT
name,
compartmentId,
endpointType,
forwardingAddress,
isForwarding,
isListening,
lifecycleState,
listeningAddress,
self,
timeCreated,
timeUpdated
FROM oci.dns.resolver_endpoints
WHERE resolverId = '{{ resolverId }}' -- required
AND resolverEndpointName = '{{ resolverEndpointName }}' -- required
AND region = '{{ region }}' -- required
AND If-Modified-Since = '{{ If-Modified-Since }}'
AND If-None-Match = '{{ If-None-Match }}'
AND opc-request-id = '{{ opc-request-id }}'
AND scope = '{{ scope }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of all endpoints within a resolver. The collection can be filtered by name or lifecycle state.&lt;br /&gt;It can be sorted on creation time or name both in ASC or DESC order. Note that when no lifecycleState&lt;br /&gt;query parameter is provided, the collection does not include resolver endpoints in the DELETED&lt;br /&gt;lifecycle state to be consistent with other operations of the API.&lt;br /&gt;

```sql
SELECT
name,
compartmentId,
endpointType,
forwardingAddress,
isForwarding,
isListening,
lifecycleState,
listeningAddress,
self,
timeCreated,
timeUpdated
FROM oci.dns.resolver_endpoints
WHERE resolverId = '{{ resolverId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND name = '{{ name }}'
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
AND lifecycleState = '{{ lifecycleState }}'
AND scope = '{{ scope }}'
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

Creates a new resolver endpoint in the same compartment as the resolver.&lt;br /&gt;

```sql
INSERT INTO oci.dns.resolver_endpoints (
endpointType,
forwardingAddress,
isForwarding,
isListening,
listeningAddress,
name,
resolverId,
region,
opc-retry-token,
opc-request-id,
scope
)
SELECT 
'{{ endpointType }}',
'{{ forwardingAddress }}',
{{ isForwarding }} /* required */,
{{ isListening }} /* required */,
'{{ listeningAddress }}',
'{{ name }}' /* required */,
'{{ resolverId }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}',
'{{ scope }}'
RETURNING
name,
compartmentId,
endpointType,
forwardingAddress,
isForwarding,
isListening,
lifecycleState,
listeningAddress,
self,
timeCreated,
timeUpdated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resolver_endpoints
  props:
    - name: resolverId
      value: "{{ resolverId }}"
      description: Required parameter for the resolver_endpoints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the resolver_endpoints resource.
    - name: endpointType
      value: "{{ endpointType }}"
      description: |
        The type of resolver endpoint. VNIC is currently the only supported type.
      valid_values: ['VNIC']
      default: VNIC
    - name: forwardingAddress
      value: "{{ forwardingAddress }}"
      description: |
        An IP address from which forwarded queries may be sent. For VNIC endpoints, this IP address must be part
        of the subnet and will be assigned by the system if unspecified when isForwarding is true.
    - name: isForwarding
      value: {{ isForwarding }}
      description: |
        A Boolean flag indicating whether or not the resolver endpoint is for forwarding.
    - name: isListening
      value: {{ isListening }}
      description: |
        A Boolean flag indicating whether or not the resolver endpoint is for listening.
    - name: listeningAddress
      value: "{{ listeningAddress }}"
      description: |
        An IP address to listen to queries on. For VNIC endpoints this IP address must be part of the
        subnet and will be assigned by the system if unspecified when isListening is true.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the resolver endpoint. Must be unique, case-insensitive, within the resolver.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
    - name: scope
      value: "{{ scope }}"
      description: Specifies to operate only on resources that have a matching DNS scope. 
      description: Specifies to operate only on resources that have a matching DNS scope. 
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

Updates the specified resolver endpoint with your new information.&lt;br /&gt;

```sql
UPDATE oci.dns.resolver_endpoints
SET 
endpointType = '{{ endpointType }}'
WHERE 
resolverId = '{{ resolverId }}' --required
AND resolverEndpointName = '{{ resolverEndpointName }}' --required
AND region = '{{ region }}' --required
AND If-Match = '{{ If-Match}}'
AND If-Unmodified-Since = '{{ If-Unmodified-Since}}'
AND opc-request-id = '{{ opc-request-id}}'
AND scope = '{{ scope}}'
RETURNING
name,
compartmentId,
endpointType,
forwardingAddress,
isForwarding,
isListening,
lifecycleState,
listeningAddress,
self,
timeCreated,
timeUpdated;
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

Deletes the specified resolver endpoint.&lt;br /&gt;&lt;br /&gt;Note that attempting to delete a resolver endpoint in the DELETED lifecycle state will result in&lt;br /&gt;a `404` response to be consistent with other operations of the API. Resolver endpoints may not&lt;br /&gt;be deleted if they are referenced by a resolver rule.&lt;br /&gt;

```sql
DELETE FROM oci.dns.resolver_endpoints
WHERE resolverId = '{{ resolverId }}' --required
AND resolverEndpointName = '{{ resolverEndpointName }}' --required
AND region = '{{ region }}' --required
AND If-Match = '{{ If-Match }}'
AND If-Unmodified-Since = '{{ If-Unmodified-Since }}'
AND opc-request-id = '{{ opc-request-id }}'
AND scope = '{{ scope }}'
;
```
</TabItem>
</Tabs>
