--- 
title: steering_policy_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - steering_policy_attachments
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

Creates, updates, deletes, gets or lists a <code>steering_policy_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="steering_policy_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.dns.steering_policy_attachments" /></td></tr>
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

A response containing a single steering policy attachment object.

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
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the steering policy attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the steering policy attachment. Does not have to be unique and can be changed. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>The attached domain within the attached zone.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the resource. (CREATING, ACTIVE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="rtypes" /></td>
    <td><code>array</code></td>
    <td>The record types covered by the attachment at the domain. The set of record types is determined by aggregating the record types from the answers defined in the steering policy. </td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The canonical absolute URL of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="steeringPolicyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the attached steering policy.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created, expressed in RFC 3339 timestamp format.  **Example:** `2016-07-22T17:23:59:60Z` </td>
</tr>
<tr>
    <td><CopyableCode code="zoneId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the attached zone. Must be a public zone.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An attachment between a steering policy and a domain.

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
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the steering policy attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the steering policy attachment. Does not have to be unique and can be changed. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>The attached domain within the attached zone.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the resource. (CREATING, ACTIVE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="rtypes" /></td>
    <td><code>array</code></td>
    <td>The record types covered by the attachment at the domain. The set of record types is determined by aggregating the record types from the answers defined in the steering policy. </td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The canonical absolute URL of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="steeringPolicyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the attached steering policy.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created, expressed in RFC 3339 timestamp format.  **Example:** `2016-07-22T17:23:59:60Z` </td>
</tr>
<tr>
    <td><CopyableCode code="zoneId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the attached zone. Must be a public zone.</td>
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
    <td><a href="#parameter-steeringPolicyAttachmentId"><code>steeringPolicyAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-If-Modified-Since"><code>If-Modified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Gets information about the specified steering policy attachment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-steeringPolicyId"><code>steeringPolicyId</code></a>, <a href="#parameter-zoneId"><code>zoneId</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-domainContains"><code>domainContains</code></a>, <a href="#parameter-timeCreatedGreaterThanOrEqualTo"><code>timeCreatedGreaterThanOrEqualTo</code></a>, <a href="#parameter-timeCreatedLessThan"><code>timeCreatedLessThan</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Lists the steering policy attachments in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-steeringPolicyId"><code>steeringPolicyId</code></a>, <a href="#parameter-zoneId"><code>zoneId</code></a>, <a href="#parameter-domainName"><code>domainName</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Creates a new attachment between a steering policy and a domain, giving the&lt;br /&gt;policy permission to answer queries for the specified domain. A steering policy must&lt;br /&gt;be attached to a domain for the policy to answer DNS queries for that domain.&lt;br /&gt;&lt;br /&gt;For the purposes of access control, the attachment is automatically placed&lt;br /&gt;into the same compartment as the domain's zone.&lt;br /&gt;&lt;br /&gt;Attachments cannot be created for private zones.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-steeringPolicyAttachmentId"><code>steeringPolicyAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Updates the specified steering policy attachment with your new information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-steeringPolicyAttachmentId"><code>steeringPolicyAttachmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Deletes the specified steering policy attachment.&lt;br /&gt;A `204` response indicates that the delete has been successful.&lt;br /&gt;</td>
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
<tr id="parameter-steeringPolicyAttachmentId">
    <td><CopyableCode code="steeringPolicyAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the target steering policy attachment.</td>
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
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The displayName of a resource.</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Search by domain. Will match any record whose domain (case-insensitive) equals the provided value. </td>
</tr>
<tr id="parameter-domainContains">
    <td><CopyableCode code="domainContains" /></td>
    <td><code>string</code></td>
    <td>Search by domain. Will match any record whose domain (case-insensitive) contains the provided value. </td>
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
    <td>The field by which to sort steering policy attachments. If unspecified, defaults to `timeCreated`.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The order to sort the resources. </td>
</tr>
<tr id="parameter-steeringPolicyId">
    <td><CopyableCode code="steeringPolicyId" /></td>
    <td><code>string</code></td>
    <td>Search by steering policy OCID. Will match any resource whose steering policy ID matches the provided value. </td>
</tr>
<tr id="parameter-timeCreatedGreaterThanOrEqualTo">
    <td><CopyableCode code="timeCreatedGreaterThanOrEqualTo" /></td>
    <td><code>string (date-time)</code></td>
    <td>An &#91;RFC 3339&#93;(https:​//www.ietf.org/rfc/rfc3339.txt) timestamp that states all returned resources were created on or after the indicated time. </td>
</tr>
<tr id="parameter-timeCreatedLessThan">
    <td><CopyableCode code="timeCreatedLessThan" /></td>
    <td><code>string (date-time)</code></td>
    <td>An &#91;RFC 3339&#93;(https:​//www.ietf.org/rfc/rfc3339.txt) timestamp that states all returned resources were created before the indicated time. </td>
</tr>
<tr id="parameter-zoneId">
    <td><CopyableCode code="zoneId" /></td>
    <td><code>string</code></td>
    <td>Search by zone OCID. Will match any resource whose zone ID matches the provided value. </td>
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

Gets information about the specified steering policy attachment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
displayName,
domainName,
lifecycleState,
rtypes,
self,
steeringPolicyId,
timeCreated,
zoneId
FROM oci.dns.steering_policy_attachments
WHERE steeringPolicyAttachmentId = '{{ steeringPolicyAttachmentId }}' -- required
AND region = '{{ region }}' -- required
AND If-None-Match = '{{ If-None-Match }}'
AND If-Modified-Since = '{{ If-Modified-Since }}'
AND opc-request-id = '{{ opc-request-id }}'
AND scope = '{{ scope }}'
;
```
</TabItem>
<TabItem value="list">

Lists the steering policy attachments in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
displayName,
domainName,
lifecycleState,
rtypes,
self,
steeringPolicyId,
timeCreated,
zoneId
FROM oci.dns.steering_policy_attachments
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND id = '{{ id }}'
AND displayName = '{{ displayName }}'
AND steeringPolicyId = '{{ steeringPolicyId }}'
AND zoneId = '{{ zoneId }}'
AND domain = '{{ domain }}'
AND domainContains = '{{ domainContains }}'
AND timeCreatedGreaterThanOrEqualTo = '{{ timeCreatedGreaterThanOrEqualTo }}'
AND timeCreatedLessThan = '{{ timeCreatedLessThan }}'
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

Creates a new attachment between a steering policy and a domain, giving the&lt;br /&gt;policy permission to answer queries for the specified domain. A steering policy must&lt;br /&gt;be attached to a domain for the policy to answer DNS queries for that domain.&lt;br /&gt;&lt;br /&gt;For the purposes of access control, the attachment is automatically placed&lt;br /&gt;into the same compartment as the domain's zone.&lt;br /&gt;&lt;br /&gt;Attachments cannot be created for private zones.&lt;br /&gt;

```sql
INSERT INTO oci.dns.steering_policy_attachments (
displayName,
domainName,
steeringPolicyId,
zoneId,
region,
opc-retry-token,
opc-request-id,
scope
)
SELECT 
'{{ displayName }}',
'{{ domainName }}' /* required */,
'{{ steeringPolicyId }}' /* required */,
'{{ zoneId }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}',
'{{ scope }}'
RETURNING
id,
compartmentId,
displayName,
domainName,
lifecycleState,
rtypes,
self,
steeringPolicyId,
timeCreated,
zoneId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: steering_policy_attachments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the steering_policy_attachments resource.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name for the steering policy attachment.
        Does not have to be unique and can be changed.
        Avoid entering confidential information.
    - name: domainName
      value: "{{ domainName }}"
      description: |
        The attached domain within the attached zone.
    - name: steeringPolicyId
      value: "{{ steeringPolicyId }}"
      description: |
        The OCID of the attached steering policy.
    - name: zoneId
      value: "{{ zoneId }}"
      description: |
        The OCID of the attached zone. Must be a public zone.
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

Updates the specified steering policy attachment with your new information.&lt;br /&gt;

```sql
UPDATE oci.dns.steering_policy_attachments
SET 
displayName = '{{ displayName }}'
WHERE 
steeringPolicyAttachmentId = '{{ steeringPolicyAttachmentId }}' --required
AND region = '{{ region }}' --required
AND If-Match = '{{ If-Match}}'
AND If-Unmodified-Since = '{{ If-Unmodified-Since}}'
AND opc-request-id = '{{ opc-request-id}}'
AND scope = '{{ scope}}'
RETURNING
id,
compartmentId,
displayName,
domainName,
lifecycleState,
rtypes,
self,
steeringPolicyId,
timeCreated,
zoneId;
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

Deletes the specified steering policy attachment.&lt;br /&gt;A `204` response indicates that the delete has been successful.&lt;br /&gt;

```sql
DELETE FROM oci.dns.steering_policy_attachments
WHERE steeringPolicyAttachmentId = '{{ steeringPolicyAttachmentId }}' --required
AND region = '{{ region }}' --required
AND If-Match = '{{ If-Match }}'
AND If-Unmodified-Since = '{{ If-Unmodified-Since }}'
AND opc-request-id = '{{ opc-request-id }}'
AND scope = '{{ scope }}'
;
```
</TabItem>
</Tabs>
