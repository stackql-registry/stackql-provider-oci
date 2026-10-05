--- 
title: idp_group_mappings
hide_title: false
hide_table_of_contents: false
keywords:
  - idp_group_mappings
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

Creates, updates, deletes, gets or lists an <code>idp_group_mappings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="idp_group_mappings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.idp_group_mappings" /></td></tr>
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

The mapping is being retrieved.

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
    <td>The OCID of the `IdpGroupMapping`.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tenancy containing the `IdentityProvider`.</td>
</tr>
<tr>
    <td><CopyableCode code="groupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the IAM Service group that is mapped to the IdP group.</td>
</tr>
<tr>
    <td><CopyableCode code="idpGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the IdP group that is mapped to the IAM Service group.</td>
</tr>
<tr>
    <td><CopyableCode code="idpId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the `IdentityProvider` this mapping belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="inactiveStatus" /></td>
    <td><code>integer (int64)</code></td>
    <td>The detailed status of INACTIVE lifecycleState.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The mapping's current state.  After creating a mapping object, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the mapping was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A mapping between a single group defined by the identity provider (IdP) you're federating with&lt;br /&gt;and a single IAM Service &#91;group&#93;(#/en/identity/20160918/Group/) in Oracle Cloud Infrastructure.&lt;br /&gt;For more information about group mappings and what they're for, see&lt;br /&gt;&#91;Identity Providers and Federation&#93;(/Content/Identity/Concepts/federation.htm).&lt;br /&gt;&lt;br /&gt;A given IdP group can be mapped to zero, one, or multiple IAM Service groups, and vice versa.&lt;br /&gt;But each `IdPGroupMapping` object is between only a single IdP group and IAM Service group.&lt;br /&gt;Each `IdPGroupMapping` object has its own OCID.&lt;br /&gt;&lt;br /&gt;**Note:** Any users who are in more than 50 IdP groups cannot be authenticated to use the Oracle&lt;br /&gt;Cloud Infrastructure Console.&lt;br /&gt;

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
    <td>The OCID of the `IdpGroupMapping`.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tenancy containing the `IdentityProvider`.</td>
</tr>
<tr>
    <td><CopyableCode code="groupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the IAM Service group that is mapped to the IdP group.</td>
</tr>
<tr>
    <td><CopyableCode code="idpGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the IdP group that is mapped to the IAM Service group.</td>
</tr>
<tr>
    <td><CopyableCode code="idpId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the `IdentityProvider` this mapping belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="inactiveStatus" /></td>
    <td><code>integer (int64)</code></td>
    <td>The detailed status of INACTIVE lifecycleState.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The mapping's current state.  After creating a mapping object, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the mapping was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-identityProviderId"><code>identityProviderId</code></a>, <a href="#parameter-mappingId"><code>mappingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Gets the specified group mapping.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identityProviderId"><code>identityProviderId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td>**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Lists the group mappings for the specified identity provider.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-identityProviderId"><code>identityProviderId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-idpGroupName"><code>idpGroupName</code></a>, <a href="#parameter-groupId"><code>groupId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Creates a single mapping between an IdP group and an IAM Service&lt;br /&gt;&#91;group&#93;(#/en/identity/20160918/Group/).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identityProviderId"><code>identityProviderId</code></a>, <a href="#parameter-mappingId"><code>mappingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Updates the specified group mapping.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identityProviderId"><code>identityProviderId</code></a>, <a href="#parameter-mappingId"><code>mappingId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Deletes the specified group mapping.&lt;br /&gt;</td>
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
<tr id="parameter-identityProviderId">
    <td><CopyableCode code="identityProviderId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the identity provider.</td>
</tr>
<tr id="parameter-mappingId">
    <td><CopyableCode code="mappingId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the group mapping.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in a paginated "List" call. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The value of the `opc-next-page` response header from the previous "List" call. </td>
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

**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Gets the specified group mapping.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
groupId,
idpGroupName,
idpId,
inactiveStatus,
lifecycleState,
timeCreated
FROM oci.identity.idp_group_mappings
WHERE identityProviderId = '{{ identityProviderId }}' -- required
AND mappingId = '{{ mappingId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Lists the group mappings for the specified identity provider.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
groupId,
idpGroupName,
idpId,
inactiveStatus,
lifecycleState,
timeCreated
FROM oci.identity.idp_group_mappings
WHERE identityProviderId = '{{ identityProviderId }}' -- required
AND region = '{{ region }}' -- required
AND page = '{{ page }}'
AND limit = '{{ limit }}'
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

**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Creates a single mapping between an IdP group and an IAM Service&lt;br /&gt;&#91;group&#93;(#/en/identity/20160918/Group/).&lt;br /&gt;

```sql
INSERT INTO oci.identity.idp_group_mappings (
groupId,
idpGroupName,
identityProviderId,
region,
opc-retry-token
)
SELECT 
'{{ groupId }}' /* required */,
'{{ idpGroupName }}' /* required */,
'{{ identityProviderId }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
groupId,
idpGroupName,
idpId,
inactiveStatus,
lifecycleState,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: idp_group_mappings
  props:
    - name: identityProviderId
      value: "{{ identityProviderId }}"
      description: Required parameter for the idp_group_mappings resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the idp_group_mappings resource.
    - name: groupId
      value: "{{ groupId }}"
      description: |
        The OCID of the IAM Service [group](#/en/identity/20160918/Group/)
        you want to map to the IdP group.
    - name: idpGroupName
      value: "{{ idpGroupName }}"
      description: |
        The name of the IdP group you want to map.
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

**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Updates the specified group mapping.&lt;br /&gt;

```sql
UPDATE oci.identity.idp_group_mappings
SET 
groupId = '{{ groupId }}',
idpGroupName = '{{ idpGroupName }}'
WHERE 
identityProviderId = '{{ identityProviderId }}' --required
AND mappingId = '{{ mappingId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
groupId,
idpGroupName,
idpId,
inactiveStatus,
lifecycleState,
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

**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Deletes the specified group mapping.&lt;br /&gt;

```sql
DELETE FROM oci.identity.idp_group_mappings
WHERE identityProviderId = '{{ identityProviderId }}' --required
AND mappingId = '{{ mappingId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>
