--- 
title: jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs
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

Creates, updates, deletes, gets or lists a <code>jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.resource_manager.jobs" /></td></tr>
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

A job object.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="applyJobPlanResolution" /></td>
    <td><code>object</code></td>
    <td>Deprecated. Use the property `executionPlanStrategy` in `jobOperationDetails` instead. </td>
</tr>
<tr>
    <td><CopyableCode code="cancellationDetails" /></td>
    <td><code>object</code></td>
    <td>Cancellation details for a job. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment in which the job's associated stack resides.</td>
</tr>
<tr>
    <td><CopyableCode code="configSource" /></td>
    <td><code>object</code></td>
    <td>Information about the Terraform configuration.  (x-example: Sample 1: Local Terraform configuration (zip file)&lt;br /&gt;&lt;br /&gt;&#123;&lt;br /&gt;  "configSourceRecordType": "ZIP_UPLOAD"&lt;br /&gt;&#125;&lt;br /&gt;&lt;br /&gt;Sample 2: Remote Terraform configuration (Git)&lt;br /&gt;&lt;br /&gt;&#123;&lt;br /&gt;  "configSourceType": "GIT_CONFIG_SOURCE",&lt;br /&gt;  "workingDirectory": "&lt;var&gt;&lt;file_path_to_directory&gt;&lt;/var&gt;",&lt;br /&gt;  "configurationSourceProviderId": "ocid1.ormconfigsourceprovider.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;",&lt;br /&gt;  "repositoryUrl": "https:​//github.com/user/repo.git",&lt;br /&gt;  "branchName": "MyBranch",&lt;br /&gt;  "commitId": "2dc979a95e86abb211eda8515e1655dfa4275a00"&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="failureDetails" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags associated with the resource. Each tag is a key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isProviderUpgradeRequired" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether or not to upgrade provider versions. Within the version constraints of your Terraform configuration, use the latest versions available from the source of Terraform providers. For more information about this option, see &#91;Dependency Lock File (terraform.io)&#93;(https:​//www.terraform.io/language/files/dependency-lock). </td>
</tr>
<tr>
    <td><CopyableCode code="isThirdPartyProviderExperienceEnabled" /></td>
    <td><code>boolean</code></td>
    <td>When `true`, the stack sources third-party Terraform providers from &#91;Terraform Registry&#93;(https:​//registry.terraform.io/browse/providers) and allows &#91;custom providers&#93;(#/en/resourcemanager/latest/datatypes/CustomTerraformProvider). For more information about stack sourcing of third-party Terraform providers, see &#91;Third-party Provider Configuration&#93;(/iaas/Content/ResourceManager/Concepts/terraformconfigresourcemanager.htm#third-party-providers). </td>
</tr>
<tr>
    <td><CopyableCode code="jobOperationDetails" /></td>
    <td><code>object</code></td>
    <td>Job details that are specific to the operation type. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>Current state of the specified job. For more information about job lifecycle states in Resource Manager, see &#91;Key Concepts&#93;(/iaas/Content/ResourceManager/Concepts/resourcemanager.htm#concepts__JobStates).  (ACCEPTED, IN_PROGRESS, FAILED, SUCCEEDED, CANCELING, CANCELED)</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The type of job executing. (PLAN, APPLY, DESTROY, IMPORT_TF_STATE, PLAN_ROLLBACK, APPLY_ROLLBACK)</td>
</tr>
<tr>
    <td><CopyableCode code="resolvedPlanJobId" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Use the property `executionPlanJobId` in `jobOperationDetails` instead. The plan job &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) that was used (if this was an apply job and was not auto-approved). </td>
</tr>
<tr>
    <td><CopyableCode code="stackId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the stack that is associated with the job.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces. For more information, see &#91;Resource Tags&#93;(https:​//docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;orcl-cloud: &#123;free-tier-retain: true&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job was created. Format is defined by RFC3339. Example: `2020-01-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeFinished" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the job stopped running, irrespective of whether the job ran successfully. Format is defined by RFC3339. Example: `2020-01-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="variables" /></td>
    <td><code>object</code></td>
    <td>Terraform variables associated with this resource. Maximum number of variables supported is 250. The maximum size of each variable, including both name and value, is 8192 bytes. Example: `&#123;"CompartmentId": "compartment-id-value"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="workingDirectory" /></td>
    <td><code>string</code></td>
    <td>File path to the directory to use for running Terraform. If not specified, the root directory is used. Required when using a zip Terraform configuration (`configSourceType` value of `ZIP_UPLOAD`) that contains folders. Ignored for the `configSourceType` value of `COMPARTMENT_CONFIG_SOURCE`. For more information about required and recommended file structure, see &#91;File Structure (Terraform Configurations for Resource Manager)&#93;(/iaas/Content/ResourceManager/Concepts/terraformconfigresourcemanager.htm#filestructure). </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Summary information for a job.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="applyJobPlanResolution" /></td>
    <td><code>object</code></td>
    <td>Deprecated. Use the property `executionPlanStrategy` in `jobOperationDetails` instead. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where the stack of the associated job resides.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
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
    <td><CopyableCode code="jobOperationDetails" /></td>
    <td><code>object</code></td>
    <td>A summary of job details that is specific to the operation type. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>Current state of the specified job. For more information about job lifecycle states in Resource Manager, see &#91;Key Concepts&#93;(/iaas/Content/ResourceManager/Concepts/resourcemanager.htm#concepts__JobStates).  (x-obmcs-enumref: #/definitions/Job/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The type of job executing (x-obmcs-enumref: #/definitions/Job/operation)</td>
</tr>
<tr>
    <td><CopyableCode code="resolvedPlanJobId" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Use the property `executionPlanJobId` in `jobOperationDetails` instead. The plan job &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) that was used (if this was an apply job and was not auto-approved). </td>
</tr>
<tr>
    <td><CopyableCode code="stackId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the stack that is associated with the specified job.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces. For more information, see &#91;Resource Tags&#93;(https:​//docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;orcl-cloud: &#123;free-tier-retain: true&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the job was created. Format is defined by RFC3339. Example: `2020-01-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeFinished" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the job succeeded or failed. Format is defined by RFC3339. Example: `2020-01-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the properties of the specified job.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Getting a Job's Details&#93;(/iaas/Content/ResourceManager/Tasks/get-job.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-stackId"><code>stackId</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists jobs according to the specified filter. By default, the list is ordered by time created.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Jobs&#93;(/iaas/Content/ResourceManager/Tasks/list-jobs.htm).&lt;br /&gt;&lt;br /&gt;- To list all jobs in a stack, provide the stack &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;- To list all jobs in a compartment, provide the compartment &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;- To return a specific job, provide the job &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). (Equivalent to &#91;GetStack&#93;(#/en/resourcemanager/latest/Stack/GetStack).)&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-stackId"><code>stackId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a job.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Creating a Job&#93;(/iaas/Content/ResourceManager/Tasks/create-job.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified job.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Updating a Job&#93;(/iaas/Content/ResourceManager/Tasks/update-job.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#cancel_job"><CopyableCode code="cancel_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-isForced"><code>isForced</code></a></td>
    <td>Indicates the intention to cancel the specified job.&lt;br /&gt;Cancellation of the job is not immediate, and may be delayed,&lt;br /&gt;or may not happen at all.&lt;br /&gt;You can optionally choose forced cancellation by setting `isForced` to true.&lt;br /&gt;A forced cancellation can result in an incorrect state file.&lt;br /&gt;For example, the state file might not reflect the exact state of the provisioned resources.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Canceling a Job&#93;(/iaas/Content/ResourceManager/Tasks/cancel-job.htm).&lt;br /&gt;</td>
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
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the job.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) on which to query for jobs. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the `PUT` or `DELETE` call for a resource, set the `if-match` parameter to the value of the etag from a previous `GET` or `POST` response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-isForced">
    <td><CopyableCode code="isForced" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a forced cancellation is requested for the job while it was running. A forced cancellation can result in an incorrect state file. For example, the state file might not reflect the exact state of the provisioned resources. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter that returns all resources that match the specified lifecycle state. The state value is case-insensitive. </td>
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
<tr id="parameter-stackId">
    <td><CopyableCode code="stackId" /></td>
    <td><code>string</code></td>
    <td>The stack &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) on which to filter. </td>
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

Gets the properties of the specified job.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Getting a Job's Details&#93;(/iaas/Content/ResourceManager/Tasks/get-job.htm).&lt;br /&gt;

```sql
SELECT
id,
applyJobPlanResolution,
cancellationDetails,
compartmentId,
configSource,
definedTags,
displayName,
failureDetails,
freeformTags,
isProviderUpgradeRequired,
isThirdPartyProviderExperienceEnabled,
jobOperationDetails,
lifecycleState,
operation,
resolvedPlanJobId,
stackId,
systemTags,
timeCreated,
timeFinished,
variables,
workingDirectory
FROM oci.resource_manager.jobs
WHERE jobId = '{{ jobId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists jobs according to the specified filter. By default, the list is ordered by time created.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Listing Jobs&#93;(/iaas/Content/ResourceManager/Tasks/list-jobs.htm).&lt;br /&gt;&lt;br /&gt;- To list all jobs in a stack, provide the stack &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;- To list all jobs in a compartment, provide the compartment &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;- To return a specific job, provide the job &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm). (Equivalent to &#91;GetStack&#93;(#/en/resourcemanager/latest/Stack/GetStack).)&lt;br /&gt;

```sql
SELECT
id,
applyJobPlanResolution,
compartmentId,
definedTags,
displayName,
freeformTags,
jobOperationDetails,
lifecycleState,
operation,
resolvedPlanJobId,
stackId,
systemTags,
timeCreated,
timeFinished
FROM oci.resource_manager.jobs
WHERE region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND compartmentId = '{{ compartmentId }}'
AND stackId = '{{ stackId }}'
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

Creates a job.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Creating a Job&#93;(/iaas/Content/ResourceManager/Tasks/create-job.htm).&lt;br /&gt;

```sql
INSERT INTO oci.resource_manager.jobs (
applyJobPlanResolution,
definedTags,
displayName,
freeformTags,
jobOperationDetails,
operation,
stackId,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ applyJobPlanResolution }}',
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ jobOperationDetails }}',
'{{ operation }}',
'{{ stackId }}' /* required */,
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
applyJobPlanResolution,
cancellationDetails,
compartmentId,
configSource,
definedTags,
displayName,
failureDetails,
freeformTags,
isProviderUpgradeRequired,
isThirdPartyProviderExperienceEnabled,
jobOperationDetails,
lifecycleState,
operation,
resolvedPlanJobId,
stackId,
systemTags,
timeCreated,
timeFinished,
variables,
workingDirectory
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the jobs resource.
    - name: applyJobPlanResolution
      description: |
        Deprecated. Use the property \`executionPlanStrategy\` in \`jobOperationDetails\` instead.
      value:
        isAutoApproved: {{ isAutoApproved }}
        isUseLatestJobId: {{ isUseLatestJobId }}
        planJobId: "{{ planJobId }}"
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags associated with this resource. Each tag is a key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: jobOperationDetails
      description: |
        Job details that are specific to the operation type.
      value:
        isProviderUpgradeRequired: {{ isProviderUpgradeRequired }}
        operation: "{{ operation }}"
    - name: operation
      value: "{{ operation }}"
      description: |
        Terraform-specific operation to execute.
    - name: stackId
      value: "{{ stackId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the stack that is associated with the current job.
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

Updates the specified job.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Updating a Job&#93;(/iaas/Content/ResourceManager/Tasks/update-job.htm).&lt;br /&gt;

```sql
UPDATE oci.resource_manager.jobs
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}'
WHERE 
jobId = '{{ jobId }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
applyJobPlanResolution,
cancellationDetails,
compartmentId,
configSource,
definedTags,
displayName,
failureDetails,
freeformTags,
isProviderUpgradeRequired,
isThirdPartyProviderExperienceEnabled,
jobOperationDetails,
lifecycleState,
operation,
resolvedPlanJobId,
stackId,
systemTags,
timeCreated,
timeFinished,
variables,
workingDirectory;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_job"
    values={[
        { label: 'cancel_job', value: 'cancel_job' }
    ]}
>
<TabItem value="cancel_job">

Indicates the intention to cancel the specified job.&lt;br /&gt;Cancellation of the job is not immediate, and may be delayed,&lt;br /&gt;or may not happen at all.&lt;br /&gt;You can optionally choose forced cancellation by setting `isForced` to true.&lt;br /&gt;A forced cancellation can result in an incorrect state file.&lt;br /&gt;For example, the state file might not reflect the exact state of the provisioned resources.&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Canceling a Job&#93;(/iaas/Content/ResourceManager/Tasks/cancel-job.htm).&lt;br /&gt;

```sql
EXEC oci.resource_manager.jobs.cancel_job 
@jobId='{{ jobId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}', 
@isForced={{ isForced }}
;
```
</TabItem>
</Tabs>
