--- 
title: private_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - private_endpoints
  - object_storage
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
<tr><td><b>Id</b></td><td><CopyableCode code="oci.object_storage.private_endpoints" /></td></tr>
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

A private endpoint representation for the requested private endpoint.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the PrivateEndpoint. </td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>This name associated with the endpoint. Valid characters are uppercase or lowercase letters, numbers, hyphens,  underscores, and periods. Example: my-new-private-endpoint1 </td>
</tr>
<tr>
    <td><CopyableCode code="accessTargets" /></td>
    <td><code>array</code></td>
    <td>A list of targets that can be accessed by the private endpoint. At least one or more access targets is required for a private endpoint. </td>
</tr>
<tr>
    <td><CopyableCode code="additionalPrefixes" /></td>
    <td><code>array</code></td>
    <td>A list of additional prefix that you can provide along with any other prefix. These resulting endpointFqdn's are added to the customer VCN's DNS record. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment which is associated with the Private Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the user who created the Private Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) for the Private Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="fqdns" /></td>
    <td><code>object</code></td>
    <td>The object representing FQDN details formed using prefix and additionalPrefixes. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The Private Endpoint's lifecycle state. (CREATING, ACTIVE, INACTIVE, UPDATING, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The Object Storage namespace associated with the private enpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>A list of the OCIDs of the network security groups (NSGs) to add the private endpoint's VNIC to. For more information about NSGs, see &#91;NetworkSecurityGroup&#93;(#/en/iaas/latest/NetworkSecurityGroup/). </td>
</tr>
<tr>
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>A prefix to use for the private endpoint. The customer VCN's DNS records are updated with this prefix. The prefix input from the customer will be the first sub-domain in the endpointFqdn. Example: If the prefix chosen is "abc", then the endpointFqdn will be 'abc.private.objectstorage.&lt;region&gt;.oraclecloud.com' </td>
</tr>
<tr>
    <td><CopyableCode code="privateEndpointIp" /></td>
    <td><code>string</code></td>
    <td>The private IP address to assign to this private endpoint. If you provide a value, it must be an available IP address in the customer's subnet. If it's not available, an error is returned.  If you do not provide a value, an available IP address in the subnet is automatically chosen. </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security attributes for Private Endpoint resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "enforce"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the customer's subnet where the private endpoint VNIC will reside. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Private Endpoint was created, as described in &#91;RFC 2616&#93;(https:​//tools.ietf.org/html/rfc2616#section-14.29).</td>
</tr>
<tr>
    <td><CopyableCode code="timeModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Private Endpoint was updated, as described in &#91;RFC 2616&#93;(https:​//tools.ietf.org/html/rfc2616#section-14.29).</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized,&lt;br /&gt;talk to an administrator. If you are an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name given to the Private Endpoint. Avoid entering confidential information. Example: my-new-pe1 </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment ID in which the Private Endpoint is authorized.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the user who created the Private Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="etag" /></td>
    <td><code>string</code></td>
    <td>The entity tag for the Private Endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="fqdns" /></td>
    <td><code>object</code></td>
    <td>The object representing FQDN details formed using prefix and additionalPrefixes. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The summaries of Private Endpoints' lifecycle state. (x-obmcs-enumref: #/definitions/PrivateEndpoint/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The Object Storage namespace with which the Private Endpoint is associated.</td>
</tr>
<tr>
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>A prefix to use for the private endpoint. The customer VCN's DNS records are updated with this prefix. The prefix input from the customer will be the first sub-domain in the endpointFqdn. Example: If the prefix chosen is "abc", then the endpointFqdn will be 'abc.private.objectstorage.&lt;region&gt;.oraclecloud.com' </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Private Endpoint was created, as described in &#91;RFC 2616&#93;(https:​//tools.ietf.org/html/rfc2616#section-14.29).</td>
</tr>
<tr>
    <td><CopyableCode code="timeModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Private Endpoint was updated, as described in &#91;RFC 2616&#93;(https:​//tools.ietf.org/html/rfc2616#section-14.29).</td>
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
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-peName"><code>peName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-if-none-match"><code>if-none-match</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Gets the current representation of the given Private Endpoint in the given Object Storage namespace.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-fields"><code>fields</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Gets a list of all PrivateEndpointSummary in a compartment associated with a namespace.&lt;br /&gt;To use this and other API operations, you must be authorized in an IAM policy. If you are not authorized,&lt;br /&gt;talk to an administrator. If you are an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-subnetId"><code>subnetId</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-accessTargets"><code>accessTargets</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Create a PrivateEndpoint.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-peName"><code>peName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Performs a partial or full update of a user-defined data associated with the Private Endpoint.&lt;br /&gt;&lt;br /&gt;Use UpdatePrivateEndpoint to move a Private Endpoint from one compartment to another within the same tenancy. Supply the compartmentID&lt;br /&gt;of the compartment that you want to move the Private Endpoint to. Or use it to update the name, subnetId, endpointFqdn or privateEndpointIp or accessTargets of the Private Endpoint.&lt;br /&gt;For more information about moving resources between compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;This API follows replace semantics (rather than merge semantics). That means if the body provides values for &lt;br /&gt;parameters and the resource has exisiting ones, this operation will replace those existing values.  &lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-namespaceName"><code>namespaceName</code></a>, <a href="#parameter-peName"><code>peName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-client-request-id"><code>opc-client-request-id</code></a></td>
    <td>Deletes a Private Endpoint if it exists in the given namespace.&lt;br /&gt;</td>
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
    <td>The ID of the compartment in which to list buckets.</td>
</tr>
<tr id="parameter-namespaceName">
    <td><CopyableCode code="namespaceName" /></td>
    <td><code>string</code></td>
    <td>The Object Storage namespace used for the request.</td>
</tr>
<tr id="parameter-peName">
    <td><CopyableCode code="peName" /></td>
    <td><code>string</code></td>
    <td>The name of the private endpoint. Avoid entering confidential information. Example: `my-new-pe-1` </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-fields">
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>PrivateEndpoint summary in list of PrivateEndpoints includes the 'namespace', 'name', 'compartmentId',  'createdBy', 'timeCreated', 'timeModified' and 'etag' fields.  This parameter can also include 'tags' (freeformTags and definedTags).  The only supported value of this parameter is 'tags' for now. Example 'tags'. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) to match with the ETag of an existing resource. If the specified ETag matches the ETag of the existing resource, GET and HEAD requests will return the resource and PUT and POST requests will upload the resource. </td>
</tr>
<tr id="parameter-if-none-match">
    <td><CopyableCode code="if-none-match" /></td>
    <td><code>string</code></td>
    <td>The entity tag (ETag) to avoid matching. Wildcards ('*') are not allowed. If the specified ETag does not match the ETag of the existing resource, the request returns the expected response. If the ETag matches the ETag of the existing resource, the request returns an HTTP 304 status without a response body. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The lifecycle state of the Private Endpoint</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-opc-client-request-id">
    <td><CopyableCode code="opc-client-request-id" /></td>
    <td><code>string</code></td>
    <td>The client request ID for tracing.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
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

Gets the current representation of the given Private Endpoint in the given Object Storage namespace.&lt;br /&gt;

```sql
SELECT
id,
name,
accessTargets,
additionalPrefixes,
compartmentId,
createdBy,
definedTags,
etag,
fqdns,
freeformTags,
lifecycleState,
namespace,
nsgIds,
prefix,
privateEndpointIp,
securityAttributes,
subnetId,
timeCreated,
timeModified
FROM oci.object_storage.private_endpoints
WHERE namespaceName = '{{ namespaceName }}' -- required
AND peName = '{{ peName }}' -- required
AND region = '{{ region }}' -- required
AND if-match = '{{ if-match }}'
AND if-none-match = '{{ if-none-match }}'
AND opc-client-request-id = '{{ opc-client-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of all PrivateEndpointSummary in a compartment associated with a namespace.&lt;br /&gt;To use this and other API operations, you must be authorized in an IAM policy. If you are not authorized,&lt;br /&gt;talk to an administrator. If you are an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

```sql
SELECT
name,
compartmentId,
createdBy,
etag,
fqdns,
lifecycleState,
namespace,
prefix,
timeCreated,
timeModified
FROM oci.object_storage.private_endpoints
WHERE namespaceName = '{{ namespaceName }}' -- required
AND compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND fields = '{{ fields }}'
AND opc-client-request-id = '{{ opc-client-request-id }}'
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

Create a PrivateEndpoint.&lt;br /&gt;

```sql
INSERT INTO oci.object_storage.private_endpoints (
accessTargets,
additionalPrefixes,
compartmentId,
definedTags,
freeformTags,
name,
nsgIds,
prefix,
privateEndpointIp,
securityAttributes,
subnetId,
namespaceName,
region,
opc-client-request-id
)
SELECT 
'{{ accessTargets }}' /* required */,
'{{ additionalPrefixes }}',
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ freeformTags }}',
'{{ name }}' /* required */,
'{{ nsgIds }}',
'{{ prefix }}' /* required */,
'{{ privateEndpointIp }}',
'{{ securityAttributes }}',
'{{ subnetId }}' /* required */,
'{{ namespaceName }}',
'{{ region }}',
'{{ opc-client-request-id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: private_endpoints
  props:
    - name: namespaceName
      value: "{{ namespaceName }}"
      description: Required parameter for the private_endpoints resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the private_endpoints resource.
    - name: accessTargets
      description: |
        A list of targets that can be accessed by the private endpoint.
      value:
        - bucket: "{{ bucket }}"
          compartmentId: "{{ compartmentId }}"
          namespace: "{{ namespace }}"
    - name: additionalPrefixes
      value:
        - "{{ additionalPrefixes }}"
      description: |
        A list of additional prefix that you can provide along with any other prefix. These resulting endpointFqdn's are added to the
        customer VCN's DNS record.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The ID of the compartment in which to create the Private Endpoint.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: name
      value: "{{ name }}"
      description: |
        This name associated with the endpoint. Valid characters are uppercase or lowercase letters, numbers, hyphens,
        underscores, and periods.
        Example: my-new-private-endpoint1
    - name: nsgIds
      value:
        - "{{ nsgIds }}"
      description: |
        A list of the OCIDs of the network security groups (NSGs) to add the private endpoint's VNIC to.
        For more information about NSGs, see
        [NetworkSecurityGroup](#/en/iaas/latest/NetworkSecurityGroup/).
    - name: prefix
      value: "{{ prefix }}"
      description: |
        A prefix to use for the private endpoint. The customer VCN's DNS records are
        updated with this prefix. The prefix input from the customer will be the first sub-domain in the endpointFqdn.
        Example: If the prefix chosen is "abc", then the endpointFqdn will be 'abc.private.objectstorage.<region>.oraclecloud.com'
    - name: privateEndpointIp
      value: "{{ privateEndpointIp }}"
      description: |
        The private IP address to assign to this private endpoint. If you provide a value,
        it must be an available IP address in the customer's subnet. If it's not available, an error
        is returned.
        If you do not provide a value, an available IP address in the subnet is automatically chosen.
    - name: securityAttributes
      value: "{{ securityAttributes }}"
      description: |
        Security attributes for Private Endpoint resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Oracle-ZPR": {"MaxEgressCount": {"value": "42", "mode": "enforce"}}}\`
    - name: subnetId
      value: "{{ subnetId }}"
      description: |
        The OCID of the customer's subnet where the private endpoint VNIC will reside.
    - name: opc-client-request-id
      value: "{{ opc-client-request-id }}"
      description: The client request ID for tracing.
      description: The client request ID for tracing.
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

Performs a partial or full update of a user-defined data associated with the Private Endpoint.&lt;br /&gt;&lt;br /&gt;Use UpdatePrivateEndpoint to move a Private Endpoint from one compartment to another within the same tenancy. Supply the compartmentID&lt;br /&gt;of the compartment that you want to move the Private Endpoint to. Or use it to update the name, subnetId, endpointFqdn or privateEndpointIp or accessTargets of the Private Endpoint.&lt;br /&gt;For more information about moving resources between compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;This API follows replace semantics (rather than merge semantics). That means if the body provides values for &lt;br /&gt;parameters and the resource has exisiting ones, this operation will replace those existing values.  &lt;br /&gt;

```sql
UPDATE oci.object_storage.private_endpoints
SET 
accessTargets = '{{ accessTargets }}',
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}',
name = '{{ name }}',
namespace = '{{ namespace }}',
securityAttributes = '{{ securityAttributes }}'
WHERE 
namespaceName = '{{ namespaceName }}' --required
AND peName = '{{ peName }}' --required
AND region = '{{ region }}' --required
AND opc-client-request-id = '{{ opc-client-request-id}}'
AND if-match = '{{ if-match}}';
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

Deletes a Private Endpoint if it exists in the given namespace.&lt;br /&gt;

```sql
DELETE FROM oci.object_storage.private_endpoints
WHERE namespaceName = '{{ namespaceName }}' --required
AND peName = '{{ peName }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-client-request-id = '{{ opc-client-request-id }}'
;
```
</TabItem>
</Tabs>
