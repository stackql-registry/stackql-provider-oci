--- 
title: email_recipients_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - email_recipients_groups
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

Creates, updates, deletes, gets or lists an <code>email_recipients_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="email_recipients_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.usage.email_recipients_groups" /></td></tr>
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

The saved email recipients group.

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
    <td>The usage statement email recipients group OCID.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The customer tenancy OCID.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The email recipients group lifecycle state. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="recipientsList" /></td>
    <td><code>array</code></td>
    <td>The list of recipients that will receive usage statement emails.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The usage statement email recipients group list.

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
    <td>The usage statement email recipients group OCID.</td>
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
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only. See &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"bar-key": "value"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The email recipients group lifecycle state. (x-obmcs-enumref: #/definitions/EmailRecipientsGroup/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="recipientsList" /></td>
    <td><code>array</code></td>
    <td>The list of recipients that will receive usage statement emails.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. See &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
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
    <td><a href="#parameter-emailRecipientsGroupId"><code>emailRecipientsGroupId</code></a>, <a href="#parameter-subscriptionId"><code>subscriptionId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Returns the saved usage statement email recipients group.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-subscriptionId"><code>subscriptionId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Returns the saved usage statement email recipients group.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-subscriptionId"><code>subscriptionId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-recipientsList"><code>recipientsList</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a list of email recipients that can receive usage statements for the subscription.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-emailRecipientsGroupId"><code>emailRecipientsGroupId</code></a>, <a href="#parameter-subscriptionId"><code>subscriptionId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-recipientsList"><code>recipientsList</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates a saved email recipients group.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-emailRecipientsGroupId"><code>emailRecipientsGroupId</code></a>, <a href="#parameter-subscriptionId"><code>subscriptionId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the email recipients group for the usage statement subscription.&lt;br /&gt;</td>
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
<tr id="parameter-emailRecipientsGroupId">
    <td><CopyableCode code="emailRecipientsGroupId" /></td>
    <td><code>string</code></td>
    <td>The email recipients group OCID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-subscriptionId">
    <td><CopyableCode code="subscriptionId" /></td>
    <td><code>string</code></td>
    <td>The usage statement subscription unique OCID.</td>
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

Returns the saved usage statement email recipients group.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
lifecycleState,
recipientsList
FROM oci.usage.email_recipients_groups
WHERE emailRecipientsGroupId = '{{ emailRecipientsGroupId }}' -- required
AND subscriptionId = '{{ subscriptionId }}' -- required
AND compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Returns the saved usage statement email recipients group.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
freeformTags,
lifecycleState,
recipientsList,
systemTags
FROM oci.usage.email_recipients_groups
WHERE subscriptionId = '{{ subscriptionId }}' -- required
AND compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-retry-token = '{{ opc-retry-token }}'
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

Creates a list of email recipients that can receive usage statements for the subscription.&lt;br /&gt;

```sql
INSERT INTO oci.usage.email_recipients_groups (
compartmentId,
recipientsList,
subscriptionId,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ recipientsList }}' /* required */,
'{{ subscriptionId }}',
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
lifecycleState,
recipientsList
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: email_recipients_groups
  props:
    - name: subscriptionId
      value: "{{ subscriptionId }}"
      description: Required parameter for the email_recipients_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the email_recipients_groups resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The customer tenancy.
    - name: recipientsList
      description: |
        The list of recipients that will receive usage statement emails.
      value:
        - emailId: "{{ emailId }}"
          firstName: "{{ firstName }}"
          lastName: "{{ lastName }}"
          lifecycleState: "{{ lifecycleState }}"
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

Updates a saved email recipients group.&lt;br /&gt;

```sql
UPDATE oci.usage.email_recipients_groups
SET 
recipientsList = '{{ recipientsList }}'
WHERE 
emailRecipientsGroupId = '{{ emailRecipientsGroupId }}' --required
AND subscriptionId = '{{ subscriptionId }}' --required
AND compartmentId = '{{ compartmentId }}' --required
AND region = '{{ region }}' --required
AND recipientsList = '{{ recipientsList }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
lifecycleState,
recipientsList;
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

Deletes the email recipients group for the usage statement subscription.&lt;br /&gt;

```sql
DELETE FROM oci.usage.email_recipients_groups
WHERE emailRecipientsGroupId = '{{ emailRecipientsGroupId }}' --required
AND subscriptionId = '{{ subscriptionId }}' --required
AND compartmentId = '{{ compartmentId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
