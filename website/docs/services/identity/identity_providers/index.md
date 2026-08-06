--- 
title: identity_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_providers
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

Creates, updates, deletes, gets or lists an <code>identity_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.identity_providers" /></td></tr>
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

The user was found.

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
    <td>The OCID of the `IdentityProvider`.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name you assign to the `IdentityProvider` during creation. The name must be unique across all `IdentityProvider` objects in the tenancy and cannot be changed. This is the name federated users see when choosing which identity provider to use when signing in to the Oracle Cloud Infrastructure Console. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tenancy containing the `IdentityProvider`.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the `IdentityProvider` during creation. Does not have to be unique, and it's changeable. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="inactiveStatus" /></td>
    <td><code>integer (int64)</code></td>
    <td>The detailed status of INACTIVE lifecycleState.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state. After creating an `IdentityProvider`, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="productType" /></td>
    <td><code>string</code></td>
    <td>The identity provider service or product. Supported identity providers are Oracle Identity Cloud Service (IDCS) and Microsoft Active Directory Federation Services (ADFS).  Allowed values are: - `ADFS` - `IDCS`  Example: `IDCS` </td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol used for federation. Allowed value: `SAML2`.  Example: `SAML2` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the `IdentityProvider` was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The resulting base object when you add an identity provider to your tenancy. A&lt;br /&gt;&#91;Saml2IdentityProvider&#93;(#/en/identity/20160918/Saml2IdentityProvider/)&lt;br /&gt;is a specific type of `IdentityProvider` that supports the SAML 2.0 protocol. Each&lt;br /&gt;`IdentityProvider` object has its own OCID. For more information, see&lt;br /&gt;&#91;Identity Providers and Federation&#93;(/Content/Identity/Concepts/federation.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access,&lt;br /&gt;see &#91;Get Started with Policies&#93;(/Content/Identity/policiesgs/get-started-with-policies.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string&lt;br /&gt;values using the API.&lt;br /&gt;

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
    <td>The OCID of the `IdentityProvider`.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name you assign to the `IdentityProvider` during creation. The name must be unique across all `IdentityProvider` objects in the tenancy and cannot be changed. This is the name federated users see when choosing which identity provider to use when signing in to the Oracle Cloud Infrastructure Console. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tenancy containing the `IdentityProvider`.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description you assign to the `IdentityProvider` during creation. Does not have to be unique, and it's changeable. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="inactiveStatus" /></td>
    <td><code>integer (int64)</code></td>
    <td>The detailed status of INACTIVE lifecycleState.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state. After creating an `IdentityProvider`, make sure its `lifecycleState` changes from CREATING to ACTIVE before using it.  (CREATING, ACTIVE, INACTIVE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="productType" /></td>
    <td><code>string</code></td>
    <td>The identity provider service or product. Supported identity providers are Oracle Identity Cloud Service (IDCS) and Microsoft Active Directory Federation Services (ADFS).  Allowed values are: - `ADFS` - `IDCS`  Example: `IDCS` </td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol used for federation. Allowed value: `SAML2`.  Example: `SAML2` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the `IdentityProvider` was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-identityProviderId"><code>identityProviderId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Gets the specified identity provider's information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-protocol"><code>protocol</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Lists all the identity providers in your tenancy. You must specify the identity provider type (e.g., `SAML2` for&lt;br /&gt;identity providers using the SAML2.0 protocol). You must specify your tenancy's OCID as the value for the&lt;br /&gt;compartment ID (remember that the tenancy is simply the root compartment).&lt;br /&gt;See &#91;Where to Get the Tenancy's OCID and User's OCID&#93;(/Content/API/Concepts/apisigningkey.htm#five).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-productType"><code>productType</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-protocol"><code>protocol</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Creates a new identity provider in your tenancy. For more information, see&lt;br /&gt;&#91;Identity Providers and Federation&#93;(/Content/Identity/Concepts/federation.htm).&lt;br /&gt;&lt;br /&gt;You must specify your tenancy's OCID as the compartment ID in the request object.&lt;br /&gt;Remember that the tenancy is simply the root compartment. For information about&lt;br /&gt;OCIDs, see &#91;Resource Identifiers&#93;(/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You must also specify a *name* for the `IdentityProvider`, which must be unique&lt;br /&gt;across all `IdentityProvider` objects in your tenancy and cannot be changed.&lt;br /&gt;&lt;br /&gt;You must also specify a *description* for the `IdentityProvider` (although&lt;br /&gt;it can be an empty string). It does not have to be unique, and you can change&lt;br /&gt;it anytime with&lt;br /&gt;&#91;UpdateIdentityProvider&#93;(#/en/identity/20160918/IdentityProvider/UpdateIdentityProvider).&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's `lifecycleState` will temporarily&lt;br /&gt;be CREATING. Before using the object, first make sure its `lifecycleState` has&lt;br /&gt;changed to ACTIVE.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identityProviderId"><code>identityProviderId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-protocol"><code>protocol</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Updates the specified identity provider.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identityProviderId"><code>identityProviderId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Deletes the specified identity provider. The identity provider must not have&lt;br /&gt;any group mappings (see &#91;IdpGroupMapping&#93;(#/en/identity/20160918/IdpGroupMapping/)).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#reset_idp_scim_client"><CopyableCode code="reset_idp_scim_client" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-identityProviderId"><code>identityProviderId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Resets the OAuth2 client credentials for the SCIM client associated with this identity provider.&lt;br /&gt;</td>
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
    <td>The OCID of the compartment (remember that the tenancy is simply the root compartment). </td>
</tr>
<tr id="parameter-identityProviderId">
    <td><CopyableCode code="identityProviderId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the identity provider.</td>
</tr>
<tr id="parameter-protocol">
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>The protocol used for federation.</td>
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
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given lifecycle state.  The state value is case-insensitive. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in a paginated "List" call. </td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given name exactly. </td>
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
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for NAME is ascending. The NAME sort order is case sensitive.  **Note:** In general, some "List" operations (for example, `ListInstances`) let you optionally filter by Availability Domain if the scope of the resource type is within a single Availability Domain. If you call one of these "List" operations without specifying an Availability Domain, the resources are grouped by Availability Domain, then sorted. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). The NAME sort order is case sensitive. </td>
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

**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Gets the specified identity provider's information.&lt;br /&gt;

```sql
SELECT
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
inactiveStatus,
lifecycleState,
productType,
protocol,
timeCreated
FROM oci.identity.identity_providers
WHERE identityProviderId = '{{ identityProviderId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Lists all the identity providers in your tenancy. You must specify the identity provider type (e.g., `SAML2` for&lt;br /&gt;identity providers using the SAML2.0 protocol). You must specify your tenancy's OCID as the value for the&lt;br /&gt;compartment ID (remember that the tenancy is simply the root compartment).&lt;br /&gt;See &#91;Where to Get the Tenancy's OCID and User's OCID&#93;(/Content/API/Concepts/apisigningkey.htm#five).&lt;br /&gt;

```sql
SELECT
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
inactiveStatus,
lifecycleState,
productType,
protocol,
timeCreated
FROM oci.identity.identity_providers
WHERE protocol = '{{ protocol }}' -- required
AND compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND name = '{{ name }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
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

**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Creates a new identity provider in your tenancy. For more information, see&lt;br /&gt;&#91;Identity Providers and Federation&#93;(/Content/Identity/Concepts/federation.htm).&lt;br /&gt;&lt;br /&gt;You must specify your tenancy's OCID as the compartment ID in the request object.&lt;br /&gt;Remember that the tenancy is simply the root compartment. For information about&lt;br /&gt;OCIDs, see &#91;Resource Identifiers&#93;(/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You must also specify a *name* for the `IdentityProvider`, which must be unique&lt;br /&gt;across all `IdentityProvider` objects in your tenancy and cannot be changed.&lt;br /&gt;&lt;br /&gt;You must also specify a *description* for the `IdentityProvider` (although&lt;br /&gt;it can be an empty string). It does not have to be unique, and you can change&lt;br /&gt;it anytime with&lt;br /&gt;&#91;UpdateIdentityProvider&#93;(#/en/identity/20160918/IdentityProvider/UpdateIdentityProvider).&lt;br /&gt;&lt;br /&gt;After you send your request, the new object's `lifecycleState` will temporarily&lt;br /&gt;be CREATING. Before using the object, first make sure its `lifecycleState` has&lt;br /&gt;changed to ACTIVE.&lt;br /&gt;

```sql
INSERT INTO oci.identity.identity_providers (
compartmentId,
definedTags,
description,
freeformTags,
name,
productType,
protocol,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ description }}' /* required */,
'{{ freeformTags }}',
'{{ name }}' /* required */,
'{{ productType }}' /* required */,
'{{ protocol }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
inactiveStatus,
lifecycleState,
productType,
protocol,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: identity_providers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the identity_providers resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of your tenancy.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        The description you assign to the \`IdentityProvider\` during creation.
        Does not have to be unique, and it's changeable.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: name
      value: "{{ name }}"
      description: |
        The name you assign to the \`IdentityProvider\` during creation.
        The name must be unique across all \`IdentityProvider\` objects in the
        tenancy and cannot be changed.
    - name: productType
      value: "{{ productType }}"
      description: |
        The identity provider service or product.
        Supported identity providers are Oracle Identity Cloud Service (IDCS) and Microsoft
        Active Directory Federation Services (ADFS).
        Example: \`IDCS\`
      valid_values: ['IDCS', 'ADFS']
    - name: protocol
      value: "{{ protocol }}"
      description: |
        The protocol used for federation.
        Example: \`SAML2\`
      valid_values: ['SAML2', 'ADFS']
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

**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Updates the specified identity provider.&lt;br /&gt;

```sql
UPDATE oci.identity.identity_providers
SET 
definedTags = '{{ definedTags }}',
description = '{{ description }}',
freeformTags = '{{ freeformTags }}',
protocol = '{{ protocol }}'
WHERE 
identityProviderId = '{{ identityProviderId }}' --required
AND region = '{{ region }}' --required
AND protocol = '{{ protocol }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
name,
compartmentId,
definedTags,
description,
freeformTags,
inactiveStatus,
lifecycleState,
productType,
protocol,
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

**Deprecated.** For more information, see &#91;Deprecated IAM Service APIs&#93;(/Content/Identity/Reference/deprecatediamapis.htm).&lt;br /&gt;&lt;br /&gt;Deletes the specified identity provider. The identity provider must not have&lt;br /&gt;any group mappings (see &#91;IdpGroupMapping&#93;(#/en/identity/20160918/IdpGroupMapping/)).&lt;br /&gt;

```sql
DELETE FROM oci.identity.identity_providers
WHERE identityProviderId = '{{ identityProviderId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_idp_scim_client"
    values={[
        { label: 'reset_idp_scim_client', value: 'reset_idp_scim_client' }
    ]}
>
<TabItem value="reset_idp_scim_client">

Resets the OAuth2 client credentials for the SCIM client associated with this identity provider.&lt;br /&gt;

```sql
EXEC oci.identity.identity_providers.reset_idp_scim_client 
@identityProviderId='{{ identityProviderId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
