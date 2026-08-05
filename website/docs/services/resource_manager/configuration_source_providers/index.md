--- 
title: configuration_source_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_source_providers
  - resource_manager
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

Creates, updates, deletes, gets or lists a <code>configuration_source_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_source_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.resource_manager.configuration_source_providers" /></td></tr>
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

The request was accepted for processing.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the configuration source provider.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where the configuration source provider is located.</td>
</tr>
<tr>
    <td><CopyableCode code="configSourceProviderType" /></td>
    <td><code>string</code></td>
    <td>The type of configuration source provider. The `BITBUCKET_CLOUD_ACCESS_TOKEN` type corresponds to Bitbucket Cloud. The `BITBUCKET_SERVER_ACCESS_TOKEN` type corresponds to Bitbucket Server. The `GITLAB_ACCESS_TOKEN` type corresponds to GitLab. The `GITHUB_ACCESS_TOKEN` type corresponds to GitHub.  (BITBUCKET_CLOUD_ACCESS_TOKEN, BITBUCKET_SERVER_ACCESS_TOKEN, GITLAB_ACCESS_TOKEN, GITHUB_ACCESS_TOKEN)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the configuration source provider.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Atlassian account email used for Bitbucket Cloud API token authentication.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags associated with the resource. Each tag is a key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isMigrationRequired" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this configuration source provider uses legacy Bitbucket Cloud username/app-password credentials and must be migrated. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the configuration source provider. For more information about configuration source provider lifecycle states in Resource Manager, see &#91;Key Concepts&#93;(/iaas/Content/ResourceManager/Concepts/resourcemanager.htm#concepts__CSPStates).  (ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="privateServerConfigDetails" /></td>
    <td><code>object</code></td>
    <td>Details about a private endpoint associated with the configuration source provider.  (x-example: &#123;&lt;br /&gt;  "privateEndpointId": "ocid1.ormprivateendpoint.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;",&lt;br /&gt;  "sslCertificateId": "ocid1.certificate.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;"&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="secretId" /></td>
    <td><code>string</code></td>
    <td>Secret ocid which is used to authorize the user.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces. For more information, see &#91;Resource Tags&#93;(https:​//docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;orcl-cloud: &#123;free-tier-retain: true&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the configuration source provider was created. Format is defined by RFC3339. Example: `2020-01-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>Username which is used to authorize the user.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The request was accepted for processing.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the configuration source provider.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where the configuration source provider is located.</td>
</tr>
<tr>
    <td><CopyableCode code="configSourceProviderType" /></td>
    <td><code>string</code></td>
    <td>The type of configuration source provider. The `BITBUCKET_CLOUD_ACCESS_TOKEN` type corresponds to Bitbucket Cloud. The `BITBUCKET_SERVER_ACCESS_TOKEN` type corresponds to Bitbucket Server. The `GITLAB_ACCESS_TOKEN` type corresponds to GitLab. The `GITHUB_ACCESS_TOKEN` type corresponds to GitHub.  (x-obmcs-enumref: #/definitions/ConfigurationSourceProvider/configSourceProviderType)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>General description of the configuration source provider.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags associated with the resource. Each tag is a key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isMigrationRequired" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this configuration source provider uses legacy Bitbucket Cloud username/app-password credentials and must be migrated. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>Current state of the specified configuration source provider. For more information about configuration source provider lifecycle states in Resource Manager, see &#91;Key Concepts&#93;(/iaas/Content/ResourceManager/Concepts/resourcemanager.htm#concepts__CSPStates).  (x-obmcs-enumref: #/definitions/ConfigurationSourceProvider/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="privateServerConfigDetails" /></td>
    <td><code>object</code></td>
    <td>Details about a private endpoint associated with the configuration source provider.  (x-example: &#123;&lt;br /&gt;  "privateEndpointId": "ocid1.ormprivateendpoint.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;",&lt;br /&gt;  "sslCertificateId": "ocid1.certificate.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;"&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces. For more information, see &#91;Resource Tags&#93;(https:​//docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;orcl-cloud: &#123;free-tier-retain: true&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the configuration source provider was created. Format is defined by RFC3339. Example: `2020-01-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-configurationSourceProviderId"><code>configurationSourceProviderId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the properties of the specified configuration source provider.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Getting a Configuration Source Provider's Details&#93;(/iaas/Content/ResourceManager/Tasks/get-csp.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-configurationSourceProviderId"><code>configurationSourceProviderId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-configSourceProviderType"><code>configSourceProviderType</code></a></td>
    <td>Lists configuration source providers according to the specified filter.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Configuration Source Providers&#93;(/iaas/Content/ResourceManager/Tasks/list-csp.htm).&lt;br /&gt;- For `compartmentId`, lists all configuration source providers in the matching compartment.&lt;br /&gt;- For `configurationSourceProviderId`, lists the matching configuration source provider.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-configSourceProviderType"><code>configSourceProviderType</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a configuration source provider in the specified compartment.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Creating a Configuration Source Provider&#93;(/iaas/Content/ResourceManager/Tasks/create-csp.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-configurationSourceProviderId"><code>configurationSourceProviderId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the properties of the specified configuration source provider.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Updating a Configuration Source Provider&#93;(/iaas/Content/ResourceManager/Tasks/update-csp.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-configurationSourceProviderId"><code>configurationSourceProviderId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified configuration source provider.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Deleting a Configuration Source Provider&#93;(/iaas/Content/ResourceManager/Tasks/delete-csp.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-configurationSourceProviderId"><code>configurationSourceProviderId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a configuration source provider into a different compartment within the same tenancy.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Moving a Configuration Source Provider&#93;(/iaas/Content/ResourceManager/Tasks/change-compartment-csp.htm).&lt;br /&gt;</td>
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
<tr id="parameter-configurationSourceProviderId">
    <td><CopyableCode code="configurationSourceProviderId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the configuration source provider. </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that exist in the compartment, identified by &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). </td>
</tr>
<tr id="parameter-configSourceProviderType">
    <td><CopyableCode code="configSourceProviderType" /></td>
    <td><code>string</code></td>
    <td>A filter to return only configuration source providers of the specified type (GitHub or GitLab). </td>
</tr>
<tr id="parameter-configurationSourceProviderId">
    <td><CopyableCode code="configurationSourceProviderId" /></td>
    <td><code>string</code></td>
    <td>A filter to return only configuration source providers that match the provided &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). </td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given display name exactly. Use this filter to list a resource by name. Requires `sortBy` set to `DISPLAYNAME`. Alternatively, when you know the resource OCID, use the related Get operation. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the `PUT` or `DELETE` call for a resource, set the `if-match` parameter to the value of the etag from a previous `GET` or `POST` response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The number of items returned in a paginated `List` call. For information about pagination, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of retrying the same action. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations. For example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The value of the `opc-next-page` response header from the preceding `List` call. For information about pagination, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to use when sorting returned resources. By default, `TIMECREATED` is ordered descending. By default, `DISPLAYNAME` is ordered ascending. Note that you can sort only on one field. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use when sorting returned resources. Ascending (`ASC`) or descending (`DESC`). </td>
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

Gets the properties of the specified configuration source provider.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Getting a Configuration Source Provider's Details&#93;(/iaas/Content/ResourceManager/Tasks/get-csp.htm).&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
configSourceProviderType,
definedTags,
description,
displayName,
email,
freeformTags,
isMigrationRequired,
lifecycleState,
privateServerConfigDetails,
secretId,
systemTags,
timeCreated,
username
FROM oci.resource_manager.configuration_source_providers
WHERE configurationSourceProviderId = '{{ configurationSourceProviderId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists configuration source providers according to the specified filter.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Configuration Source Providers&#93;(/iaas/Content/ResourceManager/Tasks/list-csp.htm).&lt;br /&gt;- For `compartmentId`, lists all configuration source providers in the matching compartment.&lt;br /&gt;- For `configurationSourceProviderId`, lists the matching configuration source provider.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
configSourceProviderType,
definedTags,
description,
displayName,
freeformTags,
isMigrationRequired,
lifecycleState,
privateServerConfigDetails,
systemTags,
timeCreated
FROM oci.resource_manager.configuration_source_providers
WHERE region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND compartmentId = '{{ compartmentId }}'
AND configurationSourceProviderId = '{{ configurationSourceProviderId }}'
AND displayName = '{{ displayName }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND configSourceProviderType = '{{ configSourceProviderType }}'
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

Creates a configuration source provider in the specified compartment.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Creating a Configuration Source Provider&#93;(/iaas/Content/ResourceManager/Tasks/create-csp.htm).&lt;br /&gt;

```sql
INSERT INTO oci.resource_manager.configuration_source_providers (
compartmentId,
configSourceProviderType,
definedTags,
description,
displayName,
freeformTags,
privateServerConfigDetails,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ compartmentId }}',
'{{ configSourceProviderType }}' /* required */,
'{{ definedTags }}',
'{{ description }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ privateServerConfigDetails }}',
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
configSourceProviderType,
definedTags,
description,
displayName,
email,
freeformTags,
isMigrationRequired,
lifecycleState,
privateServerConfigDetails,
secretId,
systemTags,
timeCreated,
username
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configuration_source_providers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configuration_source_providers resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment where
        you want to create the configuration source provider.
    - name: configSourceProviderType
      value: "{{ configSourceProviderType }}"
      description: |
        The type of configuration source provider.
        The \`GITLAB_ACCESS_TOKEN\` type corresponds to GitLab.
        The \`GITHUB_ACCESS_TOKEN\` type corresponds to GitHub.
        The \`BITBUCKET_CLOUD_ACCESS_TOKEN\` type corresponds to Bitbucket Cloud.
        For Bitbucket Cloud, create requests must provide Atlassian account \`email\` and \`secretId\` containing an API token.
        The \`BITBUCKET_SERVER_ACCESS_TOKEN\` type corresponds to Bitbucket Server.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        Description of the configuration source provider. Avoid entering confidential information.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags associated with the resource. Each tag is a key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: privateServerConfigDetails
      description: |
        Details about a private endpoint associated with the configuration source provider.
      value:
        certificateId: "{{ certificateId }}"
        privateEndpointId: "{{ privateEndpointId }}"
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of retrying the same action. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations. For example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected. 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of retrying the same action. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations. For example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected. 
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

Updates the properties of the specified configuration source provider.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Updating a Configuration Source Provider&#93;(/iaas/Content/ResourceManager/Tasks/update-csp.htm).&lt;br /&gt;

```sql
UPDATE oci.resource_manager.configuration_source_providers
SET 
configSourceProviderType = '{{ configSourceProviderType }}',
definedTags = '{{ definedTags }}',
description = '{{ description }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
privateServerConfigDetails = '{{ privateServerConfigDetails }}'
WHERE 
configurationSourceProviderId = '{{ configurationSourceProviderId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
configSourceProviderType,
definedTags,
description,
displayName,
email,
freeformTags,
isMigrationRequired,
lifecycleState,
privateServerConfigDetails,
secretId,
systemTags,
timeCreated,
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

Deletes the specified configuration source provider.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Deleting a Configuration Source Provider&#93;(/iaas/Content/ResourceManager/Tasks/delete-csp.htm).&lt;br /&gt;

```sql
DELETE FROM oci.resource_manager.configuration_source_providers
WHERE configurationSourceProviderId = '{{ configurationSourceProviderId }}' --required
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

Moves a configuration source provider into a different compartment within the same tenancy.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Moving a Configuration Source Provider&#93;(/iaas/Content/ResourceManager/Tasks/change-compartment-csp.htm).&lt;br /&gt;

```sql
EXEC oci.resource_manager.configuration_source_providers.change_compartment 
@configurationSourceProviderId='{{ configurationSourceProviderId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
</Tabs>
