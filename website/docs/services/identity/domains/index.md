--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.domains" /></td></tr>
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

The identity domain was retrieved.

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
    <td>The OCID of the identity domain.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the identity domain.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The identity domain description. You can have an empty description.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The mutable display name of the identity domain.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="homeRegion" /></td>
    <td><code>string</code></td>
    <td>The home region for the identity domain. See &#91;Regions and Availability Domains&#93;(/Content/General/Concepts/regions.htm) for the full list of supported region names.  Example: `us-phoenix-1` </td>
</tr>
<tr>
    <td><CopyableCode code="homeRegionUrl" /></td>
    <td><code>string</code></td>
    <td>Region-specific identity domain URL.</td>
</tr>
<tr>
    <td><CopyableCode code="isHiddenOnLogin" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the identity domain is hidden on the sign-in screen or not. </td>
</tr>
<tr>
    <td><CopyableCode code="licenseType" /></td>
    <td><code>string</code></td>
    <td>The license type of the identity domain.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Any additional details about the current state of the identity domain.  (DEACTIVATING, ACTIVATING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state.  (CREATING, ACTIVE, DELETING, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="replicaRegions" /></td>
    <td><code>array</code></td>
    <td>The regions where replicas of the identity domain exist.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the identity domain was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the domain.  (DEFAULT, SECONDARY)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Region-agnostic identity domain URL.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

(For tenancies that support identity domains) As the name suggests, a `DomainSummary` object contains information about a `Domain`.&lt;br /&gt;

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
    <td>The OCID of the identity domain.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the identity domain.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The identity domain description. You can have an empty description.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The mutable display name of the identity domain.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="homeRegion" /></td>
    <td><code>string</code></td>
    <td>The home region for the identity domain.</td>
</tr>
<tr>
    <td><CopyableCode code="homeRegionUrl" /></td>
    <td><code>string</code></td>
    <td>Region-specific identity domain URL.</td>
</tr>
<tr>
    <td><CopyableCode code="isHiddenOnLogin" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the identity domain is hidden on the sign-in screen or not. </td>
</tr>
<tr>
    <td><CopyableCode code="licenseType" /></td>
    <td><code>string</code></td>
    <td>The license type of the identity domain.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Any additional details about the current state of the identity domain.  (DEACTIVATING, ACTIVATING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state.  (CREATING, ACTIVE, DELETING, INACTIVE) (x-obmcs-enumref: #/definitions/Domain/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="replicaRegions" /></td>
    <td><code>array</code></td>
    <td>The regions where replicas of the identity domain exist.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the identity domain was created, in the format defined by RFC3339.  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the identity domain.  (DEFAULT, SECONDARY) (x-obmcs-enumref: #/definitions/Domain/type)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Region-agnostic identity domain URL.</td>
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
    <td><a href="#parameter-domainId"><code>domainId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>(For tenancies that support identity domains) Gets the specified identity domain's information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-url"><code>url</code></a>, <a href="#parameter-homeRegionUrl"><code>homeRegionUrl</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-licenseType"><code>licenseType</code></a>, <a href="#parameter-isHiddenOnLogin"><code>isHiddenOnLogin</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>(For tenancies that support identity domains) Lists all identity domains within a tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-homeRegion"><code>homeRegion</code></a>, <a href="#parameter-licenseType"><code>licenseType</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>(For tenancies that support identity domains) Creates a new identity domain in the tenancy with the identity domain home in `homeRegion`.&lt;br /&gt;After you send your request, the temporary `lifecycleState` of this identity domain is set to CREATING and `lifecycleDetails` to UPDATING.&lt;br /&gt;When creation of the identity domain completes, this identity domain's `lifecycleState` is set to ACTIVE and `lifecycleDetails` to null.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;&lt;br /&gt;After creating an `identity domain`, first make sure its `lifecycleState` changes from CREATING to ACTIVE before you use it.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domainId"><code>domainId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>(For tenancies that support identity domains) Updates identity domain information and the associated Identity Cloud Service (IDCS) stripe.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domainId"><code>domainId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>(For tenancies that support identity domains) Deletes an identity domain. The identity domain must have no active apps present in&lt;br /&gt;the underlying IDCS stripe. You must also deactivate the identity domain, rendering the `lifecycleState` of the identity domain INACTIVE.&lt;br /&gt;Furthermore, as the authenticated user performing the operation, you cannot be a member of the identity domain you are deleting.&lt;br /&gt;Lastly, you cannot delete the default identity domain. A tenancy must always have at least the default identity domain.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#activate_domain"><CopyableCode code="activate_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainId"><code>domainId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>(For tenancies that support identity domains) Activates a deactivated identity domain. You can only activate identity domains that your user account is not a part of.&lt;br /&gt;&lt;br /&gt;After you send the request, the `lifecycleDetails` of the identity domain is set to ACTIVATING. When the operation completes, the&lt;br /&gt;`lifecycleDetails` is set to null and the `lifecycleState` of the identity domain is set to ACTIVE.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainId"><code>domainId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>(For tenancies that support identity domains) Moves the identity domain to a different compartment in the tenancy.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_domain_license_type"><CopyableCode code="change_domain_license_type" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainId"><code>domainId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>(For tenancies that support identity domains) Changes the license type of the given identity domain. The identity domain's&lt;br /&gt;`lifecycleState` must be set to ACTIVE and the requested `licenseType` must be allowed. To retrieve the allowed `licenseType` for&lt;br /&gt;the identity domain, use &#91;ListAllowedDomainLicenseTypes&#93;(#/en/identity/20160918/Domain/ListAllowedDomainLicenseTypes).&lt;br /&gt;&lt;br /&gt;After you send your request, the `lifecycleDetails` of this identity domain is set to UPDATING. When the update of the identity&lt;br /&gt;domain completes, then the `lifecycleDetails` is set to null.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#deactivate_domain"><CopyableCode code="deactivate_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainId"><code>domainId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-isForceDeactivate"><code>isForceDeactivate</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>(For tenancies that support identity domains) Deactivates the specified identity domain. Identity domains must be in an ACTIVE&lt;br /&gt;`lifecycleState` and have no active apps present in the domain or underlying Identity Cloud Service stripe. You cannot deactivate&lt;br /&gt;the default identity domain.&lt;br /&gt;&lt;br /&gt;After you send your request, the `lifecycleDetails` of this identity domain is set to DEACTIVATING. When the operation completes,&lt;br /&gt;then the `lifecycleDetails` is set to null and the `lifecycleState` is set to INACTIVE.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#enable_replication_to_region"><CopyableCode code="enable_replication_to_region" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainId"><code>domainId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>(For tenancies that support identity domains) Replicates the identity domain to a new region (provided that the region is the&lt;br /&gt;tenancy home region or other region that the tenancy subscribes to). You can only replicate identity domains that are in an ACTIVE&lt;br /&gt;`lifecycleState` and not currently updating or already replicating. You also can only trigger the replication of secondary identity domains.&lt;br /&gt;The default identity domain is automatically replicated to all regions that the tenancy subscribes to.&lt;br /&gt;&lt;br /&gt;After you send the request, the `state` of the identity domain in the replica region is set to ENABLING_REPLICATION. When the operation&lt;br /&gt;completes, the `state` is set to REPLICATION_ENABLED.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;</td>
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
<tr id="parameter-domainId">
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the identity domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The mutable display name of the identity domain.</td>
</tr>
<tr id="parameter-homeRegionUrl">
    <td><CopyableCode code="homeRegionUrl" /></td>
    <td><code>string</code></td>
    <td>The region-specific identity domain URL.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-isForceDeactivate">
    <td><CopyableCode code="isForceDeactivate" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether domain can be forcefully deactivated even when there are Active Apps present</td>
</tr>
<tr id="parameter-isHiddenOnLogin">
    <td><CopyableCode code="isHiddenOnLogin" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether or not the identity domain is visible at the sign-in screen.</td>
</tr>
<tr id="parameter-licenseType">
    <td><CopyableCode code="licenseType" /></td>
    <td><code>string</code></td>
    <td>The license type of the identity domain.</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to only return resources that match the given lifecycle state. The state value is case-insensitive. </td>
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
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
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
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The identity domain type.</td>
</tr>
<tr id="parameter-url">
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The region-agnostic identity domain URL.</td>
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

(For tenancies that support identity domains) Gets the specified identity domain's information.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
description,
displayName,
freeformTags,
homeRegion,
homeRegionUrl,
isHiddenOnLogin,
licenseType,
lifecycleDetails,
lifecycleState,
replicaRegions,
timeCreated,
type,
url
FROM oci.identity.domains
WHERE domainId = '{{ domainId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

(For tenancies that support identity domains) Lists all identity domains within a tenancy.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
description,
displayName,
freeformTags,
homeRegion,
homeRegionUrl,
isHiddenOnLogin,
licenseType,
lifecycleDetails,
lifecycleState,
replicaRegions,
timeCreated,
type,
url
FROM oci.identity.domains
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND displayName = '{{ displayName }}'
AND url = '{{ url }}'
AND homeRegionUrl = '{{ homeRegionUrl }}'
AND type = '{{ type }}'
AND licenseType = '{{ licenseType }}'
AND isHiddenOnLogin = '{{ isHiddenOnLogin }}'
AND page = '{{ page }}'
AND limit = '{{ limit }}'
AND name = '{{ name }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND opc-request-id = '{{ opc-request-id }}'
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

(For tenancies that support identity domains) Creates a new identity domain in the tenancy with the identity domain home in `homeRegion`.&lt;br /&gt;After you send your request, the temporary `lifecycleState` of this identity domain is set to CREATING and `lifecycleDetails` to UPDATING.&lt;br /&gt;When creation of the identity domain completes, this identity domain's `lifecycleState` is set to ACTIVE and `lifecycleDetails` to null.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;&lt;br /&gt;After creating an `identity domain`, first make sure its `lifecycleState` changes from CREATING to ACTIVE before you use it.&lt;br /&gt;

```sql
INSERT INTO oci.identity.domains (
adminEmail,
adminFirstName,
adminLastName,
adminUserName,
compartmentId,
definedTags,
description,
displayName,
freeformTags,
homeRegion,
isHiddenOnLogin,
isNotificationBypassed,
isPrimaryEmailRequired,
licenseType,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ adminEmail }}',
'{{ adminFirstName }}',
'{{ adminLastName }}',
'{{ adminUserName }}',
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ description }}' /* required */,
'{{ displayName }}' /* required */,
'{{ freeformTags }}',
'{{ homeRegion }}' /* required */,
{{ isHiddenOnLogin }},
{{ isNotificationBypassed }},
{{ isPrimaryEmailRequired }},
'{{ licenseType }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domains
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domains resource.
    - name: adminEmail
      value: "{{ adminEmail }}"
      description: |
        The administrator's email address.
    - name: adminFirstName
      value: "{{ adminFirstName }}"
      description: |
        The administrator's first name.
    - name: adminLastName
      value: "{{ adminLastName }}"
      description: |
        The administrator's last name.
    - name: adminUserName
      value: "{{ adminUserName }}"
      description: |
        The administrator's user name.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment where the identity domain is created.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        The identity domain description. You can have an empty description.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The mutable display name of the identity domain.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: homeRegion
      value: "{{ homeRegion }}"
      description: |
        The region's name identifier. See [Regions and Availability Domains](/Content/General/Concepts/regions.htm)
        for the full list of supported region names.
        Example: \`us-phoenix-1\`
    - name: isHiddenOnLogin
      value: {{ isHiddenOnLogin }}
      description: |
        Indicates whether the identity domain is hidden on the sign-in screen or not.
    - name: isNotificationBypassed
      value: {{ isNotificationBypassed }}
      description: |
        Indicates whether or not the administrator user created in the IDCS stripe would like to receive notifications like a welcome email.
        This field is required only if admin information is provided. This field is otherwise optional.
    - name: isPrimaryEmailRequired
      value: {{ isPrimaryEmailRequired }}
      description: |
        Optional field to indicate whether users in the identity domain are required to have a primary email address or not. The default is true.
    - name: licenseType
      value: "{{ licenseType }}"
      description: |
        The license type of the identity domain.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
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

(For tenancies that support identity domains) Updates identity domain information and the associated Identity Cloud Service (IDCS) stripe.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;

```sql
UPDATE oci.identity.domains
SET 
definedTags = '{{ definedTags }}',
description = '{{ description }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
isHiddenOnLogin = {{ isHiddenOnLogin }}
WHERE 
domainId = '{{ domainId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}';
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

(For tenancies that support identity domains) Deletes an identity domain. The identity domain must have no active apps present in&lt;br /&gt;the underlying IDCS stripe. You must also deactivate the identity domain, rendering the `lifecycleState` of the identity domain INACTIVE.&lt;br /&gt;Furthermore, as the authenticated user performing the operation, you cannot be a member of the identity domain you are deleting.&lt;br /&gt;Lastly, you cannot delete the default identity domain. A tenancy must always have at least the default identity domain.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;

```sql
DELETE FROM oci.identity.domains
WHERE domainId = '{{ domainId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="activate_domain"
    values={[
        { label: 'activate_domain', value: 'activate_domain' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'change_domain_license_type', value: 'change_domain_license_type' },
        { label: 'deactivate_domain', value: 'deactivate_domain' },
        { label: 'enable_replication_to_region', value: 'enable_replication_to_region' }
    ]}
>
<TabItem value="activate_domain">

(For tenancies that support identity domains) Activates a deactivated identity domain. You can only activate identity domains that your user account is not a part of.&lt;br /&gt;&lt;br /&gt;After you send the request, the `lifecycleDetails` of the identity domain is set to ACTIVATING. When the operation completes, the&lt;br /&gt;`lifecycleDetails` is set to null and the `lifecycleState` of the identity domain is set to ACTIVE.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;

```sql
EXEC oci.identity.domains.activate_domain 
@domainId='{{ domainId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="change_compartment">

(For tenancies that support identity domains) Moves the identity domain to a different compartment in the tenancy.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;

```sql
EXEC oci.identity.domains.change_compartment 
@domainId='{{ domainId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
<TabItem value="change_domain_license_type">

(For tenancies that support identity domains) Changes the license type of the given identity domain. The identity domain's&lt;br /&gt;`lifecycleState` must be set to ACTIVE and the requested `licenseType` must be allowed. To retrieve the allowed `licenseType` for&lt;br /&gt;the identity domain, use &#91;ListAllowedDomainLicenseTypes&#93;(#/en/identity/20160918/Domain/ListAllowedDomainLicenseTypes).&lt;br /&gt;&lt;br /&gt;After you send your request, the `lifecycleDetails` of this identity domain is set to UPDATING. When the update of the identity&lt;br /&gt;domain completes, then the `lifecycleDetails` is set to null.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;

```sql
EXEC oci.identity.domains.change_domain_license_type 
@domainId='{{ domainId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"licenseType": "{{ licenseType }}"
}'
;
```
</TabItem>
<TabItem value="deactivate_domain">

(For tenancies that support identity domains) Deactivates the specified identity domain. Identity domains must be in an ACTIVE&lt;br /&gt;`lifecycleState` and have no active apps present in the domain or underlying Identity Cloud Service stripe. You cannot deactivate&lt;br /&gt;the default identity domain.&lt;br /&gt;&lt;br /&gt;After you send your request, the `lifecycleDetails` of this identity domain is set to DEACTIVATING. When the operation completes,&lt;br /&gt;then the `lifecycleDetails` is set to null and the `lifecycleState` is set to INACTIVE.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;

```sql
EXEC oci.identity.domains.deactivate_domain 
@domainId='{{ domainId }}' --required, 
@region='{{ region }}' --required, 
@isForceDeactivate={{ isForceDeactivate }}, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="enable_replication_to_region">

(For tenancies that support identity domains) Replicates the identity domain to a new region (provided that the region is the&lt;br /&gt;tenancy home region or other region that the tenancy subscribes to). You can only replicate identity domains that are in an ACTIVE&lt;br /&gt;`lifecycleState` and not currently updating or already replicating. You also can only trigger the replication of secondary identity domains.&lt;br /&gt;The default identity domain is automatically replicated to all regions that the tenancy subscribes to.&lt;br /&gt;&lt;br /&gt;After you send the request, the `state` of the identity domain in the replica region is set to ENABLING_REPLICATION. When the operation&lt;br /&gt;completes, the `state` is set to REPLICATION_ENABLED.&lt;br /&gt;&lt;br /&gt;To track the progress of the request, submitting an HTTP GET on the /iamWorkRequests/&#123;iamWorkRequestsId&#125; endpoint retrieves&lt;br /&gt;the operation's status.&lt;br /&gt;

```sql
EXEC oci.identity.domains.enable_replication_to_region 
@domainId='{{ domainId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"replicaRegion": "{{ replicaRegion }}"
}'
;
```
</TabItem>
</Tabs>
