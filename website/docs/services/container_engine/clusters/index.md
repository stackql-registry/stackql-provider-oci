--- 
title: clusters
hide_title: false
hide_table_of_contents: false
keywords:
  - clusters
  - container_engine
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

Creates, updates, deletes, gets or lists a <code>clusters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clusters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.container_engine.clusters" /></td></tr>
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

The cluster details.

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
    <td>The OCID of the cluster. (example: ocid1.cluster.oc1.iad.aaaaaaaaga3tombrmq3wgyrvmi3gcn3bmfsdizjwgy4wgyldmy3dcmtcmmyw)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster. (example: My Cluster)</td>
</tr>
<tr>
    <td><CopyableCode code="availableKubernetesUpgrades" /></td>
    <td><code>array</code></td>
    <td>Available Kubernetes versions to which the clusters masters may be upgraded.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterPodNetworkOptions" /></td>
    <td><code>array</code></td>
    <td>Available CNIs and network options for existing and new node pools of the cluster (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment in which the cluster exists. (example: ocid1.compartment.oc1..aaaaaaaafqm2df7ckwmmbtdsl2bgxsw4fcpvkoojytxrqst24yww2tdmtqcq)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="endpointConfig" /></td>
    <td><code>object</code></td>
    <td>The properties that define the network configuration for the Cluster endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>object</code></td>
    <td>The properties that define endpoints for a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="imagePolicyConfig" /></td>
    <td><code>object</code></td>
    <td>The properties that define a image verification policy.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the KMS key to be used as the master encryption key for Kubernetes secret encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesVersion" /></td>
    <td><code>string</code></td>
    <td>The version of Kubernetes running on the cluster masters. (example: v1.9.4)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the state of the cluster masters. (example: waiting for node pools)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The state of the cluster masters. For more information, see &#91;Monitoring Clusters&#93;(/Content/ContEng/Tasks/contengmonitoringclusters.htm) (CREATING, ACTIVE, FAILED, DELETING, DELETED, UPDATING) (example: UPDATING, x-obmcs-top-level-enum: #/definitions/ClusterLifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The properties that define meta data for a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="openIdConnectDiscoveryEndpoint" /></td>
    <td><code>string</code></td>
    <td>The cluster-specific OpenID Connect Discovery endpoint  (example: https:​//objectstorage.us-ashburn-1.oci.customer-oci.com/n/id9y6mi8tcky/b/oidc/o/a1936058-8b1c-4527-b21c-6766527236f6/.well-known/openid-configuration)</td>
</tr>
<tr>
    <td><CopyableCode code="openIdConnectDiscoveryKey" /></td>
    <td><code>string</code></td>
    <td>The cluster-specific OpenID Connect Discovery Key to derive the DiscoveryEndpoint  (example: a1936058-8b1c-4527-b21c-6766527236f6)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>The properties that define extra options for a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of cluster (BASIC_CLUSTER, ENHANCED_CLUSTER) (example: ENHANCED_CLUSTER, x-obmcs-top-level-enum: #/definitions/ClusterType)</td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the virtual cloud network (VCN) in which the cluster exists. (example: ocid1.vcn.oc1.iad.aaaaaaaa5e3hn7hk6y63awlhbvlhsumkn5p3ficbjcevbnoylvptcpkxtsaa)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The properties that define a cluster summary.

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
    <td>The OCID of the cluster. (example: ocid1.cluster.oc1.iad.aaaaaaaaga3tombrmq3wgyrvmi3gcn3bmfsdizjwgy4wgyldmy3dcmtcmmyw)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster. (example: My Cluster Summary)</td>
</tr>
<tr>
    <td><CopyableCode code="availableKubernetesUpgrades" /></td>
    <td><code>array</code></td>
    <td>Available Kubernetes versions to which the clusters masters may be upgraded.</td>
</tr>
<tr>
    <td><CopyableCode code="clusterPodNetworkOptions" /></td>
    <td><code>array</code></td>
    <td>Available CNIs and network options for existing and new node pools of the cluster (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment in which the cluster exists. (example: ocid1.compartment.oc1..aaaaaaaafqm2df7ckwmmbtdsl2bgxsw4fcpvkoojytxrqst24yww2tdmtqcq)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="endpointConfig" /></td>
    <td><code>object</code></td>
    <td>The properties that define the network configuration for the Cluster endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>object</code></td>
    <td>The properties that define endpoints for a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="imagePolicyConfig" /></td>
    <td><code>object</code></td>
    <td>The properties that define a image verification policy.</td>
</tr>
<tr>
    <td><CopyableCode code="kubernetesVersion" /></td>
    <td><code>string</code></td>
    <td>The version of Kubernetes running on the cluster masters. (example: v1.9.4)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Details about the state of the cluster masters. (example: waiting for node pools)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The state of the cluster masters. For more information, see &#91;Monitoring Clusters&#93;(/Content/ContEng/Tasks/contengmonitoringclusters.htm) (CREATING, ACTIVE, FAILED, DELETING, DELETED, UPDATING) (example: UPDATING, x-obmcs-top-level-enum: #/definitions/ClusterLifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The properties that define meta data for a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>The properties that define extra options for a cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>Usage of system tag keys. These predefined keys are scoped to namespaces. Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of cluster. Values can be BASIC_CLUSTER or ENHANCED_CLUSTER. For more information, see &#91;Cluster Types&#93;(/Content/ContEng/Tasks/contengcomparingenhancedwithbasicclusters_topic.htm) (BASIC_CLUSTER, ENHANCED_CLUSTER) (example: ENHANCED_CLUSTER, x-obmcs-top-level-enum: #/definitions/ClusterType)</td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the virtual cloud network (VCN) in which the cluster exists (example: ocid1.vcn.oc1.iad.aaaaaaaa5e3hn7hk6y63awlhbvlhsumkn5p3ficbjcevbnoylvptcpkxtsaa)</td>
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
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-shouldIncludeOidcConfigFile"><code>shouldIncludeOidcConfigFile</code></a></td>
    <td>Get the details of a cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>List all the cluster objects in a compartment.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-kubernetesVersion"><code>kubernetesVersion</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Create a new cluster.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Update the details of a cluster.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Delete a cluster.</td>
</tr>
<tr>
    <td><a href="#complete_credential_rotation"><CopyableCode code="complete_credential_rotation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Complete cluster credential rotation. Retire old credentials from kubernetes components.</td>
</tr>
<tr>
    <td><a href="#extend_endpoint_decommission_rollback_deadline"><CopyableCode code="extend_endpoint_decommission_rollback_deadline" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-rollbackDeadlineDelay"><code>rollbackDeadlineDelay</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Extend the rollback deadline of public api endpoint decommission for a cluster.&lt;br /&gt;The operation can only be performed within decommission rollback deadline.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#cluster_migrate_to_native_vcn"><CopyableCode code="cluster_migrate_to_native_vcn" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-endpointConfig"><code>endpointConfig</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Initiates cluster migration to use native VCN.</td>
</tr>
<tr>
    <td><a href="#rollback_public_api_endpoint_decommission"><CopyableCode code="rollback_public_api_endpoint_decommission" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Rollback public api endpoint decommission for a cluster, legacy kubernetes endpoint will be brought back once the operation is completed. &lt;br /&gt;The operation can only be performed within decommission rollback deadline.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#start_credential_rotation"><CopyableCode code="start_credential_rotation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-autoCompletionDelayDuration"><code>autoCompletionDelayDuration</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Start cluster credential rotation by adding new credentials, old credentials will still work after this operation.</td>
</tr>
<tr>
    <td><a href="#start_public_api_endpoint_decommission"><CopyableCode code="start_public_api_endpoint_decommission" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Start public api endpoint decommission for a cluster, legacy kubernetes endpoint will no longer available after this operation.</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the cluster.</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment.</td>
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
    <td><code>array</code></td>
    <td>A cluster lifecycle state to filter on. Can have multiple parameters of this name. For more information, see &#91;Monitoring Clusters&#93;(/Content/ContEng/Tasks/contengmonitoringclusters.htm)</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. 1 is the minimum, 1000 is the maximum. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name to filter on.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token you supply to uniquely identify the request and provide idempotency if the request is retried. Idempotency tokens expire after 24 hours. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>For list pagination. The value of the `opc-next-page` response header from the previous "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine). </td>
</tr>
<tr id="parameter-shouldIncludeOidcConfigFile">
    <td><CopyableCode code="shouldIncludeOidcConfigFile" /></td>
    <td><code>boolean</code></td>
    <td>Boolean value to determine if the OpenIdConnectAuth configuration file should be displayed for the provided cluster. </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The optional field to sort the results by.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The optional order in which to sort the results.</td>
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

Get the details of a cluster.

```sql
SELECT
id,
name,
availableKubernetesUpgrades,
clusterPodNetworkOptions,
compartmentId,
definedTags,
endpointConfig,
endpoints,
freeformTags,
imagePolicyConfig,
kmsKeyId,
kubernetesVersion,
lifecycleDetails,
lifecycleState,
metadata,
openIdConnectDiscoveryEndpoint,
openIdConnectDiscoveryKey,
options,
systemTags,
type,
vcnId
FROM oci.container_engine.clusters
WHERE clusterId = '{{ clusterId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND shouldIncludeOidcConfigFile = '{{ shouldIncludeOidcConfigFile }}'
;
```
</TabItem>
<TabItem value="list">

List all the cluster objects in a compartment.

```sql
SELECT
id,
name,
availableKubernetesUpgrades,
clusterPodNetworkOptions,
compartmentId,
definedTags,
endpointConfig,
endpoints,
freeformTags,
imagePolicyConfig,
kubernetesVersion,
lifecycleDetails,
lifecycleState,
metadata,
options,
systemTags,
type,
vcnId
FROM oci.container_engine.clusters
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND lifecycleState = '{{ lifecycleState }}'
AND name = '{{ name }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
AND opc-request-id = '{{ opc-request-id }}'
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

Create a new cluster.

```sql
INSERT INTO oci.container_engine.clusters (
clusterPodNetworkOptions,
compartmentId,
definedTags,
endpointConfig,
freeformTags,
imagePolicyConfig,
kmsKeyId,
kubernetesVersion,
name,
options,
type,
vcnId,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ clusterPodNetworkOptions }}',
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ endpointConfig }}',
'{{ freeformTags }}',
'{{ imagePolicyConfig }}',
'{{ kmsKeyId }}',
'{{ kubernetesVersion }}' /* required */,
'{{ name }}' /* required */,
'{{ options }}',
'{{ type }}',
'{{ vcnId }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clusters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the clusters resource.
    - name: clusterPodNetworkOptions
      description: |
        Available CNIs and network options for existing and new node pools of the cluster
      value:
        - cniType: "{{ cniType }}"
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment in which to create the cluster.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: endpointConfig
      description: |
        The properties that define the network configuration for the Cluster endpoint.
      value:
        isPublicIpEnabled: {{ isPublicIpEnabled }}
        nsgIds:
          - "{{ nsgIds }}"
        securityAttributes: "{{ securityAttributes }}"
        subnetId: "{{ subnetId }}"
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: imagePolicyConfig
      description: |
        The properties that define a image verification policy.
      value:
        isPolicyEnabled: {{ isPolicyEnabled }}
        keyDetails:
          - kmsKeyId: "{{ kmsKeyId }}"
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        The OCID of the KMS key to be used as the master encryption key for Kubernetes secret encryption.
        When used, \`kubernetesVersion\` must be at least \`v1.13.0\`.
    - name: kubernetesVersion
      value: "{{ kubernetesVersion }}"
      description: |
        The version of Kubernetes to install into the cluster masters.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the cluster. Avoid entering confidential information.
    - name: options
      description: |
        The properties that define extra options for a cluster.
      value:
        addOns:
          isKubernetesDashboardEnabled: {{ isKubernetesDashboardEnabled }}
          isTillerEnabled: {{ isTillerEnabled }}
        admissionControllerOptions:
          isPodSecurityPolicyEnabled: {{ isPodSecurityPolicyEnabled }}
        ipFamilies:
          - "{{ ipFamilies }}"
        kubernetesNetworkConfig:
          podsCidr: "{{ podsCidr }}"
          servicesCidr: "{{ servicesCidr }}"
        openIdConnectDiscovery:
          isOpenIdConnectDiscoveryEnabled: {{ isOpenIdConnectDiscoveryEnabled }}
        openIdConnectTokenAuthenticationConfig:
          caCertificate: "{{ caCertificate }}"
          clientId: "{{ clientId }}"
          configurationFile: "{{ configurationFile }}"
          groupsClaim: "{{ groupsClaim }}"
          groupsPrefix: "{{ groupsPrefix }}"
          isOpenIdConnectAuthEnabled: {{ isOpenIdConnectAuthEnabled }}
          issuerUrl: "{{ issuerUrl }}"
          requiredClaims:
            - key: "{{ key }}"
              value: "{{ value }}"
          signingAlgorithms:
            - "{{ signingAlgorithms }}"
          usernameClaim: "{{ usernameClaim }}"
          usernamePrefix: "{{ usernamePrefix }}"
        persistentVolumeConfig:
          definedTags: "{{ definedTags }}"
          freeformTags: "{{ freeformTags }}"
        serviceLbConfig:
          backendNsgIds:
            - "{{ backendNsgIds }}"
          definedTags: "{{ definedTags }}"
          freeformTags: "{{ freeformTags }}"
        serviceLbSubnetIds:
          - "{{ serviceLbSubnetIds }}"
    - name: type
      value: "{{ type }}"
      description: |
        Type of cluster
      valid_values: ['BASIC_CLUSTER', 'ENHANCED_CLUSTER']
    - name: vcnId
      value: "{{ vcnId }}"
      description: |
        The OCID of the virtual cloud network (VCN) in which to create the cluster.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token you supply to uniquely identify the request and provide idempotency if the request is retried. Idempotency tokens expire after 24 hours. 
      description: A token you supply to uniquely identify the request and provide idempotency if the request is retried. Idempotency tokens expire after 24 hours. 
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

Update the details of a cluster.

```sql
UPDATE oci.container_engine.clusters
SET 
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}',
imagePolicyConfig = '{{ imagePolicyConfig }}',
kubernetesVersion = '{{ kubernetesVersion }}',
name = '{{ name }}',
options = '{{ options }}',
type = '{{ type }}'
WHERE 
clusterId = '{{ clusterId }}' --required
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

Delete a cluster.

```sql
DELETE FROM oci.container_engine.clusters
WHERE clusterId = '{{ clusterId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="complete_credential_rotation"
    values={[
        { label: 'complete_credential_rotation', value: 'complete_credential_rotation' },
        { label: 'extend_endpoint_decommission_rollback_deadline', value: 'extend_endpoint_decommission_rollback_deadline' },
        { label: 'cluster_migrate_to_native_vcn', value: 'cluster_migrate_to_native_vcn' },
        { label: 'rollback_public_api_endpoint_decommission', value: 'rollback_public_api_endpoint_decommission' },
        { label: 'start_credential_rotation', value: 'start_credential_rotation' },
        { label: 'start_public_api_endpoint_decommission', value: 'start_public_api_endpoint_decommission' }
    ]}
>
<TabItem value="complete_credential_rotation">

Complete cluster credential rotation. Retire old credentials from kubernetes components.

```sql
EXEC oci.container_engine.clusters.complete_credential_rotation 
@clusterId='{{ clusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="extend_endpoint_decommission_rollback_deadline">

Extend the rollback deadline of public api endpoint decommission for a cluster.&lt;br /&gt;The operation can only be performed within decommission rollback deadline.&lt;br /&gt;

```sql
EXEC oci.container_engine.clusters.extend_endpoint_decommission_rollback_deadline 
@clusterId='{{ clusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"rollbackDeadlineDelay": "{{ rollbackDeadlineDelay }}"
}'
;
```
</TabItem>
<TabItem value="cluster_migrate_to_native_vcn">

Initiates cluster migration to use native VCN.

```sql
EXEC oci.container_engine.clusters.cluster_migrate_to_native_vcn 
@clusterId='{{ clusterId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"decommissionDelayDuration": "{{ decommissionDelayDuration }}", 
"endpointConfig": "{{ endpointConfig }}"
}'
;
```
</TabItem>
<TabItem value="rollback_public_api_endpoint_decommission">

Rollback public api endpoint decommission for a cluster, legacy kubernetes endpoint will be brought back once the operation is completed. &lt;br /&gt;The operation can only be performed within decommission rollback deadline.&lt;br /&gt;

```sql
EXEC oci.container_engine.clusters.rollback_public_api_endpoint_decommission 
@clusterId='{{ clusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="start_credential_rotation">

Start cluster credential rotation by adding new credentials, old credentials will still work after this operation.

```sql
EXEC oci.container_engine.clusters.start_credential_rotation 
@clusterId='{{ clusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"autoCompletionDelayDuration": "{{ autoCompletionDelayDuration }}"
}'
;
```
</TabItem>
<TabItem value="start_public_api_endpoint_decommission">

Start public api endpoint decommission for a cluster, legacy kubernetes endpoint will no longer available after this operation.

```sql
EXEC oci.container_engine.clusters.start_public_api_endpoint_decommission 
@clusterId='{{ clusterId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
</Tabs>
