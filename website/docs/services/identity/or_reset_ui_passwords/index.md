--- 
title: or_reset_ui_passwords
hide_title: false
hide_table_of_contents: false
keywords:
  - or_reset_ui_passwords
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

Creates, updates, deletes, gets or lists an <code>or_reset_ui_passwords</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="or_reset_ui_passwords" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.or_reset_ui_passwords" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new Console one-time password for the specified user. For more information about user&lt;br /&gt;credentials, see &#91;User Credentials&#93;(/Content/Identity/usercred/usercredentials.htm).&lt;br /&gt;&lt;br /&gt;Use this operation after creating a new user, or if a user forgets their password. The new one-time&lt;br /&gt;password is returned to you in the response, and you must securely deliver it to the user. They'll&lt;br /&gt;be prompted to change this password the next time they sign in to the Console. If they don't change&lt;br /&gt;it within 7 days, the password will expire and you'll need to create a new one-time password for the&lt;br /&gt;user.&lt;br /&gt;&lt;br /&gt;(For tenancies that support identity domains) Resetting a user's password generates a reset password email&lt;br /&gt;with a link that the user must follow to reset their password. If the user does not reset their password before the&lt;br /&gt;link expires, you'll need to reset the user's password again.&lt;br /&gt;&lt;br /&gt;**Note:** The user's Console login is the unique name you specified when you created the user&lt;br /&gt;(see &#91;CreateUser&#93;(#/en/identity/20160918/User/CreateUser)).&lt;br /&gt;</td>
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
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the user.</td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new Console one-time password for the specified user. For more information about user&lt;br /&gt;credentials, see &#91;User Credentials&#93;(/Content/Identity/usercred/usercredentials.htm).&lt;br /&gt;&lt;br /&gt;Use this operation after creating a new user, or if a user forgets their password. The new one-time&lt;br /&gt;password is returned to you in the response, and you must securely deliver it to the user. They'll&lt;br /&gt;be prompted to change this password the next time they sign in to the Console. If they don't change&lt;br /&gt;it within 7 days, the password will expire and you'll need to create a new one-time password for the&lt;br /&gt;user.&lt;br /&gt;&lt;br /&gt;(For tenancies that support identity domains) Resetting a user's password generates a reset password email&lt;br /&gt;with a link that the user must follow to reset their password. If the user does not reset their password before the&lt;br /&gt;link expires, you'll need to reset the user's password again.&lt;br /&gt;&lt;br /&gt;**Note:** The user's Console login is the unique name you specified when you created the user&lt;br /&gt;(see &#91;CreateUser&#93;(#/en/identity/20160918/User/CreateUser)).&lt;br /&gt;

```sql
INSERT INTO oci.identity.or_reset_ui_passwords (
userId,
region,
opc-retry-token
)
SELECT 
'{{ userId }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
inactiveStatus,
lifecycleState,
password,
timeCreated,
userId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: or_reset_ui_passwords
  props:
    - name: userId
      value: "{{ userId }}"
      description: Required parameter for the or_reset_ui_passwords resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the or_reset_ui_passwords resource.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
`}</CodeBlock>

</TabItem>
</Tabs>
