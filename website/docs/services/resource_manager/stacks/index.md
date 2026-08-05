--- 
title: stacks
hide_title: false
hide_table_of_contents: false
keywords:
  - stacks
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

Creates, updates, deletes, gets or lists a <code>stacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.resource_manager.stacks" /></td></tr>
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

Returns the Stack object.

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
    <td>Unique identifier (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)) for the stack.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)) for the compartment where the stack is located.</td>
</tr>
<tr>
    <td><CopyableCode code="configSource" /></td>
    <td><code>object</code></td>
    <td>Information about the Terraform configuration.  (x-example: Sample 1: Zip file&lt;br /&gt;&lt;br /&gt;&#123;&lt;br /&gt;  "configSourceType": "ZIP_UPLOAD",&lt;br /&gt;  "zipFileBase64Encoded": "&lt;var&gt;&lt;zip_file_content_encoded_in_base64_format&gt;&lt;/var&gt;",&lt;br /&gt;  "workingDirectory": "&lt;var&gt;&lt;file_path_to_directory&gt;&lt;/var&gt;"&lt;br /&gt;&#125;&lt;br /&gt;&lt;br /&gt;Sample 2: GitHub&lt;br /&gt;&lt;br /&gt;&#123;&lt;br /&gt;  "configSourceType": "GIT_CONFIG_SOURCE",&lt;br /&gt;  "configurationSourceProviderId": "ocid1.ormconfigsourceprovider.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;",&lt;br /&gt;  "repositoryUrl": "https:​//github.com/user/repo.git",&lt;br /&gt;  "branchName": "MyBranch",&lt;br /&gt;  "workingDirectory": "&lt;var&gt;&lt;file_path_to_directory&gt;&lt;/var&gt;",&lt;br /&gt;&#125;&lt;br /&gt;&lt;br /&gt;Sample 3: Bucket&lt;br /&gt;&lt;br /&gt;&#123;&lt;br /&gt;  "configSourceType": "OBJECT_STORAGE_CONFIG_SOURCE",&lt;br /&gt;  "region": "us-phoenix-1",&lt;br /&gt;  "namespace": "&lt;var&gt;&lt;bucket_namespace&gt;&lt;/var&gt;",&lt;br /&gt;  "bucketName": "&lt;var&gt;&lt;bucket_name&gt;&lt;/var&gt;"&lt;br /&gt;&#125;&lt;br /&gt;&lt;br /&gt;Sample 4: Existing compartment (resource discovery)&lt;br /&gt;&lt;br /&gt;&#123;&lt;br /&gt;  "configSourceType": "COMPARTMENT_CONFIG_SOURCE",&lt;br /&gt;  "compartmentId": "ocid1.compartment.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;",&lt;br /&gt;  "region": "us-phoenix-1"&lt;br /&gt;&#125;&lt;br /&gt;&lt;br /&gt;Sample 5: DevOps repository&lt;br /&gt;&lt;br /&gt;&#123;&lt;br /&gt;  "configSourceType": "DEVOPS_CONFIG_SOURCE",&lt;br /&gt;  "projectId": "ocid1.devopsproject.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;",&lt;br /&gt;  "repositoryId": "ocid1.devopsrepository.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;",&lt;br /&gt;  "branchName": "MyBranch",&lt;br /&gt;  "workingDirectory": "&lt;var&gt;&lt;file_path_to_directory&gt;&lt;/var&gt;",&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="customTerraformProvider" /></td>
    <td><code>object</code></td>
    <td>Location information about custom Terraform providers for a stack. For more information, see &#91;Using Custom Providers with a Stack&#93;(/iaas/Content/ResourceManager/Tasks/update-stack-custom-providers.htm). Note: Older stacks must be explicitly updated to use Terraform Registry (`isThirdPartyProviderExperienceEnabled=true`). See &#91;UpdateStack&#93;(#/en/resourcemanager/latest/Stack/UpdateStack). For more information, see &#91;Using Terraform Registry with an Older Stack&#93;(/iaas/Content/ResourceManager/Tasks/update-stack-tf-reg.htm).  (x-example: &#123;&lt;br /&gt;  "region": "us-phoenix-1",&lt;br /&gt;  "namespace": "&lt;var&gt;&lt;bucket_namespace&gt;&lt;/var&gt;",&lt;br /&gt;  "bucketName": "&lt;var&gt;&lt;bucket_name&gt;&lt;/var&gt;"&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the stack.</td>
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
    <td><CopyableCode code="isThirdPartyProviderExperienceEnabled" /></td>
    <td><code>boolean</code></td>
    <td>When `true`, the stack sources third-party Terraform providers from &#91;Terraform Registry&#93;(https:​//registry.terraform.io/browse/providers) and allows &#91;custom providers&#93;(#/en/resourcemanager/latest/datatypes/CustomTerraformProvider). For more information about stack sourcing of third-party Terraform providers, see &#91;Third-party Provider Configuration&#93;(/iaas/Content/ResourceManager/Concepts/terraformconfigresourcemanager.htm#third-party-providers). </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the stack. For more information about stack lifecycle states in Resource Manager, see &#91;Key Concepts&#93;(/iaas/Content/ResourceManager/Concepts/resourcemanager.htm#concepts__StackStates).  (CREATING, ACTIVE, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="stackDriftStatus" /></td>
    <td><code>string</code></td>
    <td>Drift status of the stack. Drift refers to differences between the actual (current) state of the stack and the expected (defined) state of the stack.  (NOT_CHECKED, IN_SYNC, DRIFTED)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces. For more information, see &#91;Resource Tags&#93;(https:​//docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;orcl-cloud: &#123;free-tier-retain: true&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="terraformVersion" /></td>
    <td><code>string</code></td>
    <td>The version of Terraform specified for the stack. Example: `1.5.x` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the stack was created. Format is defined by RFC3339. Example: `2020-01-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeDriftLastChecked" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the drift detection was last executed. Format is defined by RFC3339. Example: `2020-01-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="variables" /></td>
    <td><code>object</code></td>
    <td>Terraform variables associated with this resource. Maximum number of variables supported is 250. The maximum size of each variable, including both name and value, is 8192 bytes. Example: `&#123;"CompartmentId": "compartment-id-value"&#125;` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Summary information for a stack.&lt;br /&gt;

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
    <td>Unique identifier of the specified stack.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the compartment in which the stack resides.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>General description of the stack.</td>
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
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the stack. For more information about stack lifecycle states in Resource Manager, see &#91;Key Concepts&#93;(/iaas/Content/ResourceManager/Concepts/resourcemanager.htm#concepts__StackStates).  (x-obmcs-enumref: #/definitions/Stack/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces. For more information, see &#91;Resource Tags&#93;(https:​//docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;orcl-cloud: &#123;free-tier-retain: true&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="terraformVersion" /></td>
    <td><code>string</code></td>
    <td>The version of Terraform specified for the stack. Example: `1.5.x` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the stack was created. Format is defined by RFC3339. Example: `2020-01-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-stackId"><code>stackId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified stack.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Getting a Stack's Details&#93;(/iaas/Content/ResourceManager/Tasks/get-stack.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists stacks according to the specified filter.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Stacks&#93;(/iaas/Content/ResourceManager/Tasks/list-stacks.htm).&lt;br /&gt;- If called using the compartment ID, returns all stacks in the specified compartment.&lt;br /&gt;- If called using the stack ID, returns the specified stack. (See also &#91;GetStack&#93;(#/en/resourcemanager/latest/Stack/GetStack).)&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-configSource"><code>configSource</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a stack in the specified compartment.&lt;br /&gt;You can create a stack from a Terraform configuration.&lt;br /&gt;The Terraform configuration can be directly uploaded or referenced from a source code control system.&lt;br /&gt;You can also create a stack from an existing compartment, which generates a Terraform configuration.&lt;br /&gt;You can also upload the Terraform configuration from an Object Storage bucket.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Creating a Stack&#93;(/iaas/Content/ResourceManager/Tasks/create-stack.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-stackId"><code>stackId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified stack.&lt;br /&gt;Use `UpdateStack` when you update your Terraform configuration&lt;br /&gt;and want your changes to be reflected in the execution plan.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Updating a Stack&#93;(/iaas/Content/ResourceManager/Tasks/update-stack.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-stackId"><code>stackId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified stack.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Deleting a Stack&#93;(/iaas/Content/ResourceManager/Tasks/delete-stack.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-stackId"><code>stackId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a stack (and its associated jobs) into a different compartment within the same tenancy.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Moving a Stack&#93;(/iaas/Content/ResourceManager/Tasks/change-compartment-stack.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#detect_stack_drift"><CopyableCode code="detect_stack_drift" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-stackId"><code>stackId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Checks drift status for the specified stack.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Detecting Drift&#93;(/iaas/Content/ResourceManager/Tasks/detect-drift.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list_stack_resource_drift_details"><CopyableCode code="list_stack_resource_drift_details" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-stackId"><code>stackId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-workRequestId"><code>workRequestId</code></a>, <a href="#parameter-resourceDriftStatus"><code>resourceDriftStatus</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists drift status details for each resource defined in the specified stack.&lt;br /&gt;The drift status details for a given resource indicate differences, if any, between the actual state&lt;br /&gt;and the expected (defined) state for that resource.&lt;br /&gt;The drift status details correspond to the specified work request (`workRequestId`).&lt;br /&gt;If no work request is specified, then the drift status details correspond to the latest completed work request for the stack.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Drift Status&#93;(/iaas/Content/ResourceManager/Tasks/list-drift.htm).&lt;br /&gt;</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-stackId">
    <td><CopyableCode code="stackId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the stack.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) on which to query for a stack. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the `PUT` or `DELETE` call for a resource, set the `if-match` parameter to the value of the etag from a previous `GET` or `POST` response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter that returns only those resources that match the specified lifecycle state. The state value is case-insensitive. For more information about stack lifecycle states, see &#91;Key Concepts&#93;(/iaas/Content/ResourceManager/Concepts/resourcemanager.htm#concepts__StackStates). </td>
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
<tr id="parameter-resourceDriftStatus">
    <td><CopyableCode code="resourceDriftStatus" /></td>
    <td><code>array</code></td>
    <td>A filter that returns only resources that match the given drift status. The value is case-insensitive. </td>
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
<tr id="parameter-workRequestId">
    <td><CopyableCode code="workRequestId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the work request.</td>
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

Gets the specified stack.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Getting a Stack's Details&#93;(/iaas/Content/ResourceManager/Tasks/get-stack.htm).&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
configSource,
customTerraformProvider,
definedTags,
description,
displayName,
freeformTags,
isThirdPartyProviderExperienceEnabled,
lifecycleState,
stackDriftStatus,
systemTags,
terraformVersion,
timeCreated,
timeDriftLastChecked,
variables
FROM oci.resource_manager.stacks
WHERE stackId = '{{ stackId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists stacks according to the specified filter.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Stacks&#93;(/iaas/Content/ResourceManager/Tasks/list-stacks.htm).&lt;br /&gt;- If called using the compartment ID, returns all stacks in the specified compartment.&lt;br /&gt;- If called using the stack ID, returns the specified stack. (See also &#91;GetStack&#93;(#/en/resourcemanager/latest/Stack/GetStack).)&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
description,
displayName,
freeformTags,
lifecycleState,
systemTags,
terraformVersion,
timeCreated
FROM oci.resource_manager.stacks
WHERE region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND compartmentId = '{{ compartmentId }}'
AND id = '{{ id }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
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

Creates a stack in the specified compartment.&lt;br /&gt;You can create a stack from a Terraform configuration.&lt;br /&gt;The Terraform configuration can be directly uploaded or referenced from a source code control system.&lt;br /&gt;You can also create a stack from an existing compartment, which generates a Terraform configuration.&lt;br /&gt;You can also upload the Terraform configuration from an Object Storage bucket.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Creating a Stack&#93;(/iaas/Content/ResourceManager/Tasks/create-stack.htm).&lt;br /&gt;

```sql
INSERT INTO oci.resource_manager.stacks (
compartmentId,
configSource,
customTerraformProvider,
definedTags,
description,
displayName,
freeformTags,
terraformVersion,
variables,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ configSource }}' /* required */,
'{{ customTerraformProvider }}',
'{{ definedTags }}',
'{{ description }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ terraformVersion }}',
'{{ variables }}',
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
configSource,
customTerraformProvider,
definedTags,
description,
displayName,
freeformTags,
isThirdPartyProviderExperienceEnabled,
lifecycleState,
stackDriftStatus,
systemTags,
terraformVersion,
timeCreated,
timeDriftLastChecked,
variables
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stacks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the stacks resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        Unique identifier ([OCID](/iaas/Content/General/Concepts/identifiers.htm)) of the compartment in which the stack resides.
    - name: configSource
      description: |
        Creation details for a configuration source used with the stack.
      value:
        configSourceType: "{{ configSourceType }}"
        workingDirectory: "{{ workingDirectory }}"
    - name: customTerraformProvider
      description: |
        Location information about custom Terraform providers for a stack.
        For more information, see [Using Custom Providers with a Stack](/iaas/Content/ResourceManager/Tasks/update-stack-custom-providers.htm).
        Note: Older stacks must be explicitly updated to use Terraform Registry (\`isThirdPartyProviderExperienceEnabled=true\`).
        See [UpdateStack](#/en/resourcemanager/latest/Stack/UpdateStack). For more information, see
        [Using Terraform Registry with an Older Stack](/iaas/Content/ResourceManager/Tasks/update-stack-tf-reg.htm).
      value:
        bucketName: "{{ bucketName }}"
        namespace: "{{ namespace }}"
        region: "{{ region }}"
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags associated with this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        Description of the stack.
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags associated with this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: terraformVersion
      value: "{{ terraformVersion }}"
      description: |
        The version of Terraform to use with the stack. Example: \`1.5.x\`
    - name: variables
      value: "{{ variables }}"
      description: |
        Terraform variables associated with this resource.
        Maximum number of variables supported is 250.
        The maximum size of each variable, including both name and value, is 8192 bytes.
        Example: \`{"CompartmentId": "compartment-id-value"}\`
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

Updates the specified stack.&lt;br /&gt;Use `UpdateStack` when you update your Terraform configuration&lt;br /&gt;and want your changes to be reflected in the execution plan.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Updating a Stack&#93;(/iaas/Content/ResourceManager/Tasks/update-stack.htm).&lt;br /&gt;

```sql
UPDATE oci.resource_manager.stacks
SET 
configSource = '{{ configSource }}',
customTerraformProvider = '{{ customTerraformProvider }}',
definedTags = '{{ definedTags }}',
description = '{{ description }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
isThirdPartyProviderExperienceEnabled = {{ isThirdPartyProviderExperienceEnabled }},
terraformVersion = '{{ terraformVersion }}',
variables = '{{ variables }}'
WHERE 
stackId = '{{ stackId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
configSource,
customTerraformProvider,
definedTags,
description,
displayName,
freeformTags,
isThirdPartyProviderExperienceEnabled,
lifecycleState,
stackDriftStatus,
systemTags,
terraformVersion,
timeCreated,
timeDriftLastChecked,
variables;
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

Deletes the specified stack.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Deleting a Stack&#93;(/iaas/Content/ResourceManager/Tasks/delete-stack.htm).&lt;br /&gt;

```sql
DELETE FROM oci.resource_manager.stacks
WHERE stackId = '{{ stackId }}' --required
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
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'detect_stack_drift', value: 'detect_stack_drift' },
        { label: 'list_stack_resource_drift_details', value: 'list_stack_resource_drift_details' }
    ]}
>
<TabItem value="change_compartment">

Moves a stack (and its associated jobs) into a different compartment within the same tenancy.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Moving a Stack&#93;(/iaas/Content/ResourceManager/Tasks/change-compartment-stack.htm).&lt;br /&gt;

```sql
EXEC oci.resource_manager.stacks.change_compartment 
@stackId='{{ stackId }}' --required, 
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
<TabItem value="detect_stack_drift">

Checks drift status for the specified stack.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Detecting Drift&#93;(/iaas/Content/ResourceManager/Tasks/detect-drift.htm).&lt;br /&gt;

```sql
EXEC oci.resource_manager.stacks.detect_stack_drift 
@stackId='{{ stackId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"isProviderUpgradeRequired": {{ isProviderUpgradeRequired }}, 
"resourceAddresses": "{{ resourceAddresses }}"
}'
;
```
</TabItem>
<TabItem value="list_stack_resource_drift_details">

Lists drift status details for each resource defined in the specified stack.&lt;br /&gt;The drift status details for a given resource indicate differences, if any, between the actual state&lt;br /&gt;and the expected (defined) state for that resource.&lt;br /&gt;The drift status details correspond to the specified work request (`workRequestId`).&lt;br /&gt;If no work request is specified, then the drift status details correspond to the latest completed work request for the stack.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Drift Status&#93;(/iaas/Content/ResourceManager/Tasks/list-drift.htm).&lt;br /&gt;

```sql
EXEC oci.resource_manager.stacks.list_stack_resource_drift_details 
@stackId='{{ stackId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@workRequestId='{{ workRequestId }}', 
@resourceDriftStatus='{{ resourceDriftStatus }}', 
@limit='{{ limit }}', 
@page='{{ page }}'
;
```
</TabItem>
</Tabs>
