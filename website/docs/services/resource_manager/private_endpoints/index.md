--- 
title: private_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - private_endpoints
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

Creates, updates, deletes, gets or lists a <code>private_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="private_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.resource_manager.private_endpoints" /></td></tr>
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

Successfully retrieved the private endpoint.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the private endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing this private endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the private endpoint. Avoid entering confidential information.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="dnsZones" /></td>
    <td><code>array</code></td>
    <td>DNS zones to use for accessing private Git servers. For private Git server instructions, see &#91;Private Git Server&#93;(/iaas/Content/ResourceManager/Tasks/private-endpoints.htm#private-git). Specify DNS fully qualified domain names (FQDNs); DNS Proxy forwards related DNS FQDN queries to the consumer DNS resolver. For DNS FQDNs not specified, queries go to service provider VCN resolver. Example: `abc.oraclevcn.com` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags associated with the resource. Each tag is a key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isUsedWithConfigurationSourceProvider" /></td>
    <td><code>boolean</code></td>
    <td>When `true`, allows the private endpoint to be used with a configuration source provider.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the private endpoint.  (ACTIVE, CREATING, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="nsgIdList" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCIDs&#93;(/iaas/Content/General/Concepts/identifiers.htm) of &#91;network security groups (NSGs)&#93;(/iaas/Content/Network/Concepts/networksecuritygroups.htm) for the private endpoint. Order does not matter. </td>
</tr>
<tr>
    <td><CopyableCode code="sourceIps" /></td>
    <td><code>array</code></td>
    <td>The source IP addresses that Resource Manager uses to connect to your network. Automatically assigned by Resource Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the subnet within the VCN for the private endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces. For more information, see &#91;Resource Tags&#93;(https:​//docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;orcl-cloud: &#123;free-tier-retain: true&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the private endpoint was created. Format is defined by RFC3339. Example: `2020-11-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN for the private endpoint.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Successfully retrieved the list of private endpoints.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the private endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing this private endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the private endpoint. Avoid entering confidential information.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="dnsZones" /></td>
    <td><code>array</code></td>
    <td>DNS zones to use for accessing private Git servers. For private Git server instructions, see &#91;Private Git Server&#93;(/iaas/Content/ResourceManager/Tasks/private-endpoints.htm#private-git). DNS Proxy forwards any DNS FQDN queries over into the consumer DNS resolver if the DNS FQDN is included in the dns zones list otherwise it goes to service provider VCN resolver. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags associated with the resource. Each tag is a key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isUsedWithConfigurationSourceProvider" /></td>
    <td><code>boolean</code></td>
    <td>When `true`, allows the private endpoint to be used with a configuration source provider.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the private endpoint.  (x-obmcs-enumref: #/definitions/PrivateEndpoint/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces. For more information, see &#91;Resource Tags&#93;(https:​//docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;orcl-cloud: &#123;free-tier-retain: true&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the private endpoint was created. Format is defined by RFC3339. Example: `2020-01-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN for the private endpoint.</td>
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
    <td><a href="#parameter-privateEndpointId"><code>privateEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified private endpoint.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Getting a Private Endpoint's Details&#93;(/iaas/Content/ResourceManager/Tasks/get-private-endpoints.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-privateEndpointId"><code>privateEndpointId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists private endpoints according to the specified filter.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Private Endpoints&#93;(/iaas/Content/ResourceManager/Tasks/list-private-endpoints.htm).&lt;br /&gt;- For `compartmentId`, lists all private endpoints in the matching compartment.&lt;br /&gt;- For `privateEndpointId`, lists the matching private endpoint.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-subnetId"><code>subnetId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a private endpoint in the specified compartment.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Creating a Private Endpoint&#93;(/iaas/Content/ResourceManager/Tasks/create-private-endpoints.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-privateEndpointId"><code>privateEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified private endpoint.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Updating a Private Endpoint&#93;(/iaas/Content/ResourceManager/Tasks/update-private-endpoints.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-privateEndpointId"><code>privateEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified private endpoint.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Deleting a Private Endpoint&#93;(/iaas/Content/ResourceManager/Tasks/delete-private-endpoints.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-privateEndpointId"><code>privateEndpointId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a private endpoint to a different compartment within the same tenancy.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Moving a Private Endpoint&#93;(/iaas/Content/ResourceManager/Tasks/move-private-endpoints.htm).&lt;br /&gt;</td>
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
<tr id="parameter-privateEndpointId">
    <td><CopyableCode code="privateEndpointId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the private endpoint.</td>
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
<tr id="parameter-privateEndpointId">
    <td><CopyableCode code="privateEndpointId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the private endpoint. </td>
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
<tr id="parameter-vcnId">
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN.</td>
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

Gets the specified private endpoint.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Getting a Private Endpoint's Details&#93;(/iaas/Content/ResourceManager/Tasks/get-private-endpoints.htm).&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
description,
displayName,
dnsZones,
freeformTags,
isUsedWithConfigurationSourceProvider,
lifecycleState,
nsgIdList,
sourceIps,
subnetId,
systemTags,
timeCreated,
vcnId
FROM oci.resource_manager.private_endpoints
WHERE privateEndpointId = '{{ privateEndpointId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists private endpoints according to the specified filter.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Private Endpoints&#93;(/iaas/Content/ResourceManager/Tasks/list-private-endpoints.htm).&lt;br /&gt;- For `compartmentId`, lists all private endpoints in the matching compartment.&lt;br /&gt;- For `privateEndpointId`, lists the matching private endpoint.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
description,
displayName,
dnsZones,
freeformTags,
isUsedWithConfigurationSourceProvider,
lifecycleState,
systemTags,
timeCreated,
vcnId
FROM oci.resource_manager.private_endpoints
WHERE region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND compartmentId = '{{ compartmentId }}'
AND privateEndpointId = '{{ privateEndpointId }}'
AND displayName = '{{ displayName }}'
AND vcnId = '{{ vcnId }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
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

Creates a private endpoint in the specified compartment.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Creating a Private Endpoint&#93;(/iaas/Content/ResourceManager/Tasks/create-private-endpoints.htm).&lt;br /&gt;

```sql
INSERT INTO oci.resource_manager.private_endpoints (
compartmentId,
definedTags,
description,
displayName,
dnsZones,
freeformTags,
isUsedWithConfigurationSourceProvider,
nsgIdList,
subnetId,
vcnId,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ description }}',
'{{ displayName }}' /* required */,
'{{ dnsZones }}',
'{{ freeformTags }}',
{{ isUsedWithConfigurationSourceProvider }},
'{{ nsgIdList }}',
'{{ subnetId }}' /* required */,
'{{ vcnId }}' /* required */,
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
definedTags,
description,
displayName,
dnsZones,
freeformTags,
isUsedWithConfigurationSourceProvider,
lifecycleState,
nsgIdList,
sourceIps,
subnetId,
systemTags,
timeCreated,
vcnId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: private_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the private_endpoints resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing this private endpoint.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        Description of the private endpoint. Avoid entering confidential information.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
    - name: dnsZones
      value:
        - "{{ dnsZones }}"
      description: |
        DNS Proxy forwards any DNS FQDN queries over into the consumer DNS resolver if the DNS FQDN is included in the dns zones list otherwise it goes to service provider VCN resolver.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags associated with the resource. Each tag is a key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: isUsedWithConfigurationSourceProvider
      value: {{ isUsedWithConfigurationSourceProvider }}
      description: |
        When \`true\`, allows the private endpoint to be used with a configuration source provider.
    - name: nsgIdList
      value:
        - "{{ nsgIdList }}"
      description: |
        The [OCIDs](/iaas/Content/General/Concepts/identifiers.htm) of
        [network security groups (NSGs)](/iaas/Content/Network/Concepts/networksecuritygroups.htm)
        for the private endpoint.
        Order does not matter.
    - name: subnetId
      value: "{{ subnetId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the subnet within the VCN for the private endpoint.
    - name: vcnId
      value: "{{ vcnId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the VCN for the private endpoint.
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

Updates the specified private endpoint.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Updating a Private Endpoint&#93;(/iaas/Content/ResourceManager/Tasks/update-private-endpoints.htm).&lt;br /&gt;

```sql
UPDATE oci.resource_manager.private_endpoints
SET 
definedTags = '{{ definedTags }}',
description = '{{ description }}',
displayName = '{{ displayName }}',
dnsZones = '{{ dnsZones }}',
freeformTags = '{{ freeformTags }}',
isUsedWithConfigurationSourceProvider = {{ isUsedWithConfigurationSourceProvider }},
nsgIdList = '{{ nsgIdList }}',
subnetId = '{{ subnetId }}',
vcnId = '{{ vcnId }}'
WHERE 
privateEndpointId = '{{ privateEndpointId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
definedTags,
description,
displayName,
dnsZones,
freeformTags,
isUsedWithConfigurationSourceProvider,
lifecycleState,
nsgIdList,
sourceIps,
subnetId,
systemTags,
timeCreated,
vcnId;
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

Deletes the specified private endpoint.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Deleting a Private Endpoint&#93;(/iaas/Content/ResourceManager/Tasks/delete-private-endpoints.htm).&lt;br /&gt;

```sql
DELETE FROM oci.resource_manager.private_endpoints
WHERE privateEndpointId = '{{ privateEndpointId }}' --required
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

Moves a private endpoint to a different compartment within the same tenancy.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Moving a Private Endpoint&#93;(/iaas/Content/ResourceManager/Tasks/move-private-endpoints.htm).&lt;br /&gt;

```sql
EXEC oci.resource_manager.private_endpoints.change_compartment 
@privateEndpointId='{{ privateEndpointId }}' --required, 
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
