--- 
title: hsm_clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - hsm_clusters
  - kms
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

Creates, updates, deletes, gets or lists a <code>hsm_clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hsm_clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.kms.hsm_clusters" /></td></tr>
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

The specified HSM Cluster resource.

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
    <td>The OCID of the HSMCluster resource.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains this HSMCluster resource.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly display name for the HSMCluster resource. It does not have to be unique, and it is changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="dnsName" /></td>
    <td><code>string</code></td>
    <td>DNS name for the HSM Cluster -- this will contain information about the region as well.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The HSMCluster's current state.  Example: `ACTIVE`  (CREATING, INITIALIZATION_REQUIRED, INITIALIZING, ACTIVATION_REQUIRED, ACTIVATING, ACTIVE, DELETING, DELETED, PENDING_DELETION, SCHEDULING_DELETION, CANCELLING_DELETION)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time this HSM resource was created, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2023-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeOfDeletion" /></td>
    <td><code>string (date-time)</code></td>
    <td>An optional property indicating when to delete the key, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2019-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time this HSM resource was updated, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2023-04-03T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A list of HsmCluster resources.

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
    <td>The OCID of a HSMCluster resource.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains a particular HSMCluster resource.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for a HSMCluster resource. It does not have to be unique, and it is changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="dnsName" /></td>
    <td><code>string</code></td>
    <td>DNS name for the HSMCluster -- this will contain information about the region as well.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A HSMCluster resource's current lifecycle state.  Example: `ACTIVE`  (x-obmcs-enumref: #/definitions/HsmCluster/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a dedicated KMS resource was created, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2023-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeOfDeletion" /></td>
    <td><code>string (date-time)</code></td>
    <td>An optional property indicating when to delete the resource, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2019-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a dedicated KMS resource was updated, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2023-04-03T21:10:29.600Z` </td>
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
    <td><a href="#parameter-hsmClusterId"><code>hsmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Retrieves configuration details for the specified HSM Cluster resource.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning read operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;read operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Lists all HSM cluster resources contained within the specified compartment.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning read operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;read operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new HSM cluster resource.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-hsmClusterId"><code>hsmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Modifies properties of an HSM cluster resource, including `displayName`, `freeformTags` and `definedTags`.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#cancel_hsm_cluster_deletion"><CopyableCode code="cancel_hsm_cluster_deletion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-hsmClusterId"><code>hsmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Cancels deletion of specified HSM Cluster, restores it and associated HSM partitions to pre-deletion states.</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-hsmClusterId"><code>hsmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a HSM Cluster resource to a different compartment within the same tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#download_certificate_signing_request"><CopyableCode code="download_certificate_signing_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-hsmClusterId"><code>hsmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Retrieves the certificate signing request for the designated HSM Cluster resource.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#schedule_hsm_cluster_deletion"><CopyableCode code="schedule_hsm_cluster_deletion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-hsmClusterId"><code>hsmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Schedules HSM cluster for deletion, update its lifecycle state to 'PENDING_DELETION' &lt;br /&gt;and deletes it after the retention period.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#upload_partition_certificates"><CopyableCode code="upload_partition_certificates" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-hsmClusterId"><code>hsmClusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-partitionCertificate"><code>partitionCertificate</code></a>, <a href="#parameter-partitionOwnerCertificate"><code>partitionOwnerCertificate</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Uploads the partition owner certificates to the HSM Cluster resource.&lt;br /&gt;</td>
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
    <td>The OCID of the compartment.</td>
</tr>
<tr id="parameter-hsmClusterId">
    <td><CopyableCode code="hsmClusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the HSM Cluster. This is a unique identifier assigned to each hsmCluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in a paginated "List" call. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If provided, the returned request ID will include this value. Otherwise, a random request ID will be generated by the service. </td>
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
    <td>The field to sort by. You can specify only one sort order. The default order for `TIMECREATED` is descending. The default order for `DISPLAYNAME` is ascending. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). </td>
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

Retrieves configuration details for the specified HSM Cluster resource.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning read operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;read operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
dnsName,
freeformTags,
lifecycleState,
timeCreated,
timeOfDeletion,
timeUpdated
FROM oci.kms.hsm_clusters
WHERE hsmClusterId = '{{ hsmClusterId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists all HSM cluster resources contained within the specified compartment.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning read operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;read operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
dnsName,
freeformTags,
lifecycleState,
timeCreated,
timeOfDeletion,
timeUpdated
FROM oci.kms.hsm_clusters
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
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

Creates a new HSM cluster resource.&lt;br /&gt;

```sql
INSERT INTO oci.kms.hsm_clusters (
compartmentId,
definedTags,
displayName,
freeformTags,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ freeformTags }}',
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
dnsName,
freeformTags,
lifecycleState,
timeCreated,
timeOfDeletion,
timeUpdated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hsm_clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the hsm_clusters resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment where you want to create this HSM cluster resource.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly display name for the HSM cluster resource. It does not have to be unique, and it is changeable.
        Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique identifier for the request. If provided, the returned request ID will include this value. Otherwise, a random request ID will be generated by the service. 
      description: Unique identifier for the request. If provided, the returned request ID will include this value. Otherwise, a random request ID will be generated by the service. 
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

Modifies properties of an HSM cluster resource, including `displayName`, `freeformTags` and `definedTags`.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;

```sql
UPDATE oci.kms.hsm_clusters
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}'
WHERE 
hsmClusterId = '{{ hsmClusterId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
dnsName,
freeformTags,
lifecycleState,
timeCreated,
timeOfDeletion,
timeUpdated;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_hsm_cluster_deletion"
    values={[
        { label: 'cancel_hsm_cluster_deletion', value: 'cancel_hsm_cluster_deletion' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'download_certificate_signing_request', value: 'download_certificate_signing_request' },
        { label: 'schedule_hsm_cluster_deletion', value: 'schedule_hsm_cluster_deletion' },
        { label: 'upload_partition_certificates', value: 'upload_partition_certificates' }
    ]}
>
<TabItem value="cancel_hsm_cluster_deletion">

Cancels deletion of specified HSM Cluster, restores it and associated HSM partitions to pre-deletion states.

```sql
EXEC oci.kms.hsm_clusters.cancel_hsm_cluster_deletion 
@hsmClusterId='{{ hsmClusterId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="change_compartment">

Moves a HSM Cluster resource to a different compartment within the same tenancy.&lt;br /&gt;

```sql
EXEC oci.kms.hsm_clusters.change_compartment 
@hsmClusterId='{{ hsmClusterId }}' --required, 
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
<TabItem value="download_certificate_signing_request">

Retrieves the certificate signing request for the designated HSM Cluster resource.&lt;br /&gt;

```sql
EXEC oci.kms.hsm_clusters.download_certificate_signing_request 
@hsmClusterId='{{ hsmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="schedule_hsm_cluster_deletion">

Schedules HSM cluster for deletion, update its lifecycle state to 'PENDING_DELETION' &lt;br /&gt;and deletes it after the retention period.&lt;br /&gt;

```sql
EXEC oci.kms.hsm_clusters.schedule_hsm_cluster_deletion 
@hsmClusterId='{{ hsmClusterId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"timeOfDeletion": "{{ timeOfDeletion }}"
}'
;
```
</TabItem>
<TabItem value="upload_partition_certificates">

Uploads the partition owner certificates to the HSM Cluster resource.&lt;br /&gt;

```sql
EXEC oci.kms.hsm_clusters.upload_partition_certificates 
@hsmClusterId='{{ hsmClusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"partitionCertificate": "{{ partitionCertificate }}", 
"partitionOwnerCertificate": "{{ partitionOwnerCertificate }}"
}'
;
```
</TabItem>
</Tabs>
