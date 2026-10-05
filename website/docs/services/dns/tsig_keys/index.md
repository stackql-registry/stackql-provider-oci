--- 
title: tsig_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - tsig_keys
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

Creates, updates, deletes, gets or lists a <code>tsig_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tsig_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.dns.tsig_keys" /></td></tr>
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

A response containing a single TSIG key object.

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
    <td>The OCID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A globally unique domain name identifying the key for a given pair of hosts. (pattern: &lt;code&gt;^\.$|^(?=(&#91;^\\&#93;|\\(&#91;^0-9&#93;|&#91;0-9&#93;&#123;3&#125;))&#123;1,253&#125;\.?$)(?=.*&#91;^\\0-9.&#93;)(?=.*\.)((&#91;a-zA-Z0-9_-&#93;|\\(&#91;\x21-\x2F\x3A-\x7E&#93;|&#91;01&#93;&#91;0-9&#93;&#91;0-9&#93;|2&#91;0-4&#93;&#91;0-9&#93;|25&#91;0-5&#93;))&#123;1,63&#125;(\.|$))+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td>TSIG key algorithms are encoded as domain names, but most consist of only one non-empty label, which is not required to be explicitly absolute. Applicable algorithms include: hmac-sha1, hmac-sha224, hmac-sha256, hmac-sha512. For more information on these algorithms, see &#91;RFC 4635&#93;(https:​//tools.ietf.org/html/rfc4635#section-2).  (pattern: &lt;code&gt;^\.$|^(?=(&#91;^\\&#93;|\\(&#91;^0-9&#93;|&#91;0-9&#93;&#123;3&#125;))&#123;1,253&#125;\.?$)(?=.*&#91;^\\0-9.&#93;)((&#91;a-zA-Z0-9_-&#93;|\\(&#91;\x21-\x2F\x3A-\x7E&#93;|&#91;01&#93;&#91;0-9&#93;&#91;0-9&#93;|2&#91;0-4&#93;&#91;0-9&#93;|25&#91;0-5&#93;))&#123;1,63&#125;(\.|$))+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the TSIG key.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).   **Example:** `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).   **Example:** `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the resource. (ACTIVE, CREATING, DELETED, DELETING, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>string</code></td>
    <td>A base64 string encoding the binary shared secret. (pattern: &lt;code&gt;^((&#91;\x20\t\r\n\f&#93;*&#91;A-Za-z0-9+/&#93;)&#123;4&#125;)*((&#91;\x20\t\r\n\f&#93;*&#91;A-Za-z0-9+/&#93;)(&#91;\x20\t\r\n\f&#93;*&#91;AQgw&#93;)==|(&#91;\x20\t\r\n\f&#93;*&#91;A-Za-z0-9+/&#93;)&#123;2&#125;(&#91;\x20\t\r\n\f&#93;*&#91;AEIMQUYcgkosw048&#93;)=)?&#91;\x20\t\r\n\f&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The canonical absolute URL of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created, expressed in RFC 3339 timestamp format.  **Example:** `2016-07-22T17:23:59:60Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was last updated, expressed in RFC 3339 timestamp format.  **Example:** `2016-07-22T17:23:59:60Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A TSIG key.

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
    <td>The OCID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A globally unique domain name identifying the key for a given pair of hosts. (pattern: &lt;code&gt;^\.$|^(?=(&#91;^\\&#93;|\\(&#91;^0-9&#93;|&#91;0-9&#93;&#123;3&#125;))&#123;1,253&#125;\.?$)(?=.*&#91;^\\0-9.&#93;)(?=.*\.)((&#91;a-zA-Z0-9_-&#93;|\\(&#91;\x21-\x2F\x3A-\x7E&#93;|&#91;01&#93;&#91;0-9&#93;&#91;0-9&#93;|2&#91;0-4&#93;&#91;0-9&#93;|25&#91;0-5&#93;))&#123;1,63&#125;(\.|$))+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td>TSIG key algorithms are encoded as domain names, but most consist of only one non-empty label, which is not required to be explicitly absolute. Applicable algorithms include: hmac-sha1, hmac-sha224, hmac-sha256, hmac-sha512. For more information on these algorithms, see &#91;RFC 4635&#93;(https:​//tools.ietf.org/html/rfc4635#section-2).  (pattern: &lt;code&gt;^\.$|^(?=(&#91;^\\&#93;|\\(&#91;^0-9&#93;|&#91;0-9&#93;&#123;3&#125;))&#123;1,253&#125;\.?$)(?=.*&#91;^\\0-9.&#93;)((&#91;a-zA-Z0-9_-&#93;|\\(&#91;\x21-\x2F\x3A-\x7E&#93;|&#91;01&#93;&#91;0-9&#93;&#91;0-9&#93;|2&#91;0-4&#93;&#91;0-9&#93;|25&#91;0-5&#93;))&#123;1,63&#125;(\.|$))+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the TSIG key.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).   **Example:** `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).   **Example:** `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the resource. (ACTIVE, CREATING, DELETED, DELETING, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The canonical absolute URL of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created, expressed in RFC 3339 timestamp format.  **Example:** `2016-07-22T17:23:59:60Z` </td>
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
    <td><a href="#parameter-tsigKeyId"><code>tsigKeyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-If-Modified-Since"><code>If-Modified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Gets information about the specified TSIG key.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Gets a list of all TSIG keys in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-algorithm"><code>algorithm</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-secret"><code>secret</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Creates a new TSIG key in the specified compartment. There is no&lt;br /&gt;`opc-retry-token` header since TSIG key names must be globally unique.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-tsigKeyId"><code>tsigKeyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Updates the specified TSIG key.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-tsigKeyId"><code>tsigKeyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Deletes the specified TSIG key.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-tsigKeyId"><code>tsigKeyId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Moves a TSIG key into a different compartment.&lt;br /&gt;</td>
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
    <td>The OCID of the compartment the resource belongs to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-tsigKeyId">
    <td><CopyableCode code="tsigKeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the target TSIG key.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The OCID of a resource.</td>
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
    <td>The field by which to sort TSIG keys. If unspecified, defaults to `timeCreated`.</td>
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

Gets information about the specified TSIG key.&lt;br /&gt;

```sql
SELECT
id,
name,
algorithm,
compartmentId,
definedTags,
freeformTags,
lifecycleState,
secret,
self,
timeCreated,
timeUpdated
FROM oci.dns.tsig_keys
WHERE tsigKeyId = '{{ tsigKeyId }}' -- required
AND region = '{{ region }}' -- required
AND If-None-Match = '{{ If-None-Match }}'
AND If-Modified-Since = '{{ If-Modified-Since }}'
AND opc-request-id = '{{ opc-request-id }}'
AND scope = '{{ scope }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of all TSIG keys in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
name,
algorithm,
compartmentId,
definedTags,
freeformTags,
lifecycleState,
self,
timeCreated
FROM oci.dns.tsig_keys
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND id = '{{ id }}'
AND name = '{{ name }}'
AND lifecycleState = '{{ lifecycleState }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
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

Creates a new TSIG key in the specified compartment. There is no&lt;br /&gt;`opc-retry-token` header since TSIG key names must be globally unique.&lt;br /&gt;

```sql
INSERT INTO oci.dns.tsig_keys (
algorithm,
compartmentId,
definedTags,
freeformTags,
name,
secret,
region,
opc-request-id,
scope
)
SELECT 
'{{ algorithm }}' /* required */,
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ freeformTags }}',
'{{ name }}' /* required */,
'{{ secret }}' /* required */,
'{{ region }}',
'{{ opc-request-id }}',
'{{ scope }}'
RETURNING
id,
name,
algorithm,
compartmentId,
definedTags,
freeformTags,
lifecycleState,
secret,
self,
timeCreated,
timeUpdated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tsig_keys
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tsig_keys resource.
    - name: algorithm
      value: "{{ algorithm }}"
      description: |
        TSIG key algorithms are encoded as domain names, but most consist of only one
        non-empty label, which is not required to be explicitly absolute.
        Applicable algorithms include: hmac-sha1, hmac-sha224, hmac-sha256,
        hmac-sha512. For more information on these algorithms, see [RFC 4635](https://tools.ietf.org/html/rfc4635#section-2).
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment containing the TSIG key.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        **Example:** \`{"Operations": {"CostCenter": "42"}}\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        **Example:** \`{"Department": "Finance"}\`
    - name: name
      value: "{{ name }}"
      description: |
        A globally unique domain name identifying the key for a given pair of hosts.
    - name: secret
      value: "{{ secret }}"
      description: |
        A base64 string encoding the binary shared secret.
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

Updates the specified TSIG key.&lt;br /&gt;

```sql
UPDATE oci.dns.tsig_keys
SET 
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}'
WHERE 
tsigKeyId = '{{ tsigKeyId }}' --required
AND region = '{{ region }}' --required
AND If-Match = '{{ If-Match}}'
AND If-Unmodified-Since = '{{ If-Unmodified-Since}}'
AND opc-request-id = '{{ opc-request-id}}'
AND scope = '{{ scope}}'
RETURNING
id,
name,
algorithm,
compartmentId,
definedTags,
freeformTags,
lifecycleState,
secret,
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

Deletes the specified TSIG key.&lt;br /&gt;

```sql
DELETE FROM oci.dns.tsig_keys
WHERE tsigKeyId = '{{ tsigKeyId }}' --required
AND region = '{{ region }}' --required
AND If-Match = '{{ If-Match }}'
AND If-Unmodified-Since = '{{ If-Unmodified-Since }}'
AND opc-request-id = '{{ opc-request-id }}'
AND scope = '{{ scope }}'
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

Moves a TSIG key into a different compartment.&lt;br /&gt;

```sql
EXEC oci.dns.tsig_keys.change_compartment 
@tsigKeyId='{{ tsigKeyId }}' --required, 
@region='{{ region }}' --required, 
@If-Match='{{ If-Match }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@scope='{{ scope }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
</Tabs>
