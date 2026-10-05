--- 
title: smtp_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - smtp_credentials
  - identity
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

Creates, updates, deletes, gets or lists a <code>smtp_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="smtp_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.smtp_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

As the name suggests, an `SmtpCredentialSummary` object contains information about an `SmtpCredential`.&lt;br /&gt;The SMTP credential is used for SMTP authentication with&lt;br /&gt;the &#91;Email Delivery Service&#93;(/Content/Email/Concepts/overview.htm).&lt;br /&gt;

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
    <td>The OCID of the SMTP credential.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the SMTP credential. Does not have to be unique, and it's changeable.  (For tenancies that support identity domains) You can have an empty description. </td>
</tr>
<tr>
    <td><CopyableCode code="inactiveStatus" /></td>
    <td><code>integer (int64)</code></td>
    <td>The detailed status of INACTIVE lifecycleState.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The credential's current state. After creating a SMTP credential, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the `SmtpCredential` object was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeExpires" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when this credential will expire, in the format defined by RFC3339. Null if it never expires.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the user the SMTP credential belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The SMTP user name. </td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the SMTP credentials for the specified user. The returned object contains the credential's OCID,&lt;br /&gt;the SMTP user name but not the SMTP password. The SMTP password is returned only upon creation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new SMTP credential for the specified user. An SMTP credential has an SMTP user name and an SMTP password.&lt;br /&gt;You must specify a *description* for the SMTP credential (although it can be an empty string). It does not&lt;br /&gt;have to be unique, and you can change it anytime with&lt;br /&gt;&#91;UpdateSmtpCredential&#93;(#/en/identity/20160918/SmtpCredentialSummary/UpdateSmtpCredential).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-smtpCredentialId"><code>smtpCredentialId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified SMTP credential's description.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-smtpCredentialId"><code>smtpCredentialId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified SMTP credential for the specified user.&lt;br /&gt;</td>
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
<tr id="parameter-smtpCredentialId">
    <td><CopyableCode code="smtpCredentialId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the SMTP credential.</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the user.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists the SMTP credentials for the specified user. The returned object contains the credential's OCID,&lt;br /&gt;the SMTP user name but not the SMTP password. The SMTP password is returned only upon creation.&lt;br /&gt;

```sql
SELECT
id,
description,
inactiveStatus,
lifecycleState,
timeCreated,
timeExpires,
userId,
username
FROM oci.identity.smtp_credentials
WHERE userId = '{{ userId }}' -- required
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

Creates a new SMTP credential for the specified user. An SMTP credential has an SMTP user name and an SMTP password.&lt;br /&gt;You must specify a *description* for the SMTP credential (although it can be an empty string). It does not&lt;br /&gt;have to be unique, and you can change it anytime with&lt;br /&gt;&#91;UpdateSmtpCredential&#93;(#/en/identity/20160918/SmtpCredentialSummary/UpdateSmtpCredential).&lt;br /&gt;

```sql
INSERT INTO oci.identity.smtp_credentials (
description,
userId,
region,
opc-retry-token
)
SELECT 
'{{ description }}' /* required */,
'{{ userId }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
description,
inactiveStatus,
lifecycleState,
password,
timeCreated,
timeExpires,
userId,
username
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: smtp_credentials
  props:
    - name: userId
      value: "{{ userId }}"
      description: Required parameter for the smtp_credentials resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the smtp_credentials resource.
    - name: description
      value: "{{ description }}"
      description: |
        The description you assign to the SMTP credentials during creation. Does not have to be unique, and it's changeable.
        (For tenancies that support identity domains) You can have an empty description.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
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

Updates the specified SMTP credential's description.&lt;br /&gt;

```sql
UPDATE oci.identity.smtp_credentials
SET 
description = '{{ description }}'
WHERE 
userId = '{{ userId }}' --required
AND smtpCredentialId = '{{ smtpCredentialId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
description,
inactiveStatus,
lifecycleState,
timeCreated,
timeExpires,
userId,
username;
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

Deletes the specified SMTP credential for the specified user.&lt;br /&gt;

```sql
DELETE FROM oci.identity.smtp_credentials
WHERE userId = '{{ userId }}' --required
AND smtpCredentialId = '{{ smtpCredentialId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
