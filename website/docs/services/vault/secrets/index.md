--- 
title: secrets
hide_title: false
hide_table_of_contents: false
keywords:
  - secrets
  - vault
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

Creates, updates, deletes, gets or lists a <code>secrets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="secrets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.vault.secrets" /></td></tr>
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

The specified secret object.

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
    <td>The OCID of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment where you want to create the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="currentVersionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the secret version that's currently in use.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the secret. Avoid entering confidential information.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isAutoGenerationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>The value of this flag determines whether or not secret content will be generated automatically. </td>
</tr>
<tr>
    <td><CopyableCode code="keyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the master encryption key that is used to encrypt the secret. You must specify a symmetric key to encrypt the secret during import to the vault. You cannot encrypt secrets with asymmetric keys. Furthermore, the key must exist in the vault that you specify. </td>
</tr>
<tr>
    <td><CopyableCode code="lastRotationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A property indicating when the secret was last rotated successfully, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2019-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the current lifecycle state of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the secret. (CREATING, ACTIVE, UPDATING, DELETING, DELETED, SCHEDULING_DELETION, PENDING_DELETION, CANCELLING_DELETION, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Additional metadata that you can use to provide context about how to use the secret or during rotation or other administrative tasks. For example, for a secret that you use to connect to a database, the additional metadata might specify the connection endpoint and the connection string. Provide additional metadata as key-value pairs. </td>
</tr>
<tr>
    <td><CopyableCode code="nextRotationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A property indicating when the secret is scheduled to be rotated, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2019-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="rotationConfig" /></td>
    <td><code>object</code></td>
    <td>Defines the frequency of the rotation and the information about the target system</td>
</tr>
<tr>
    <td><CopyableCode code="rotationStatus" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the secret rotation (IN_PROGRESS, SCHEDULED, NOT_ENABLED, CANCELLING)</td>
</tr>
<tr>
    <td><CopyableCode code="secretGenerationContext" /></td>
    <td><code>object</code></td>
    <td>Captures a configurable set of secret generation rules such as length, base characters, additional characters, and so on. (x-example: &#123;&lt;br /&gt;  "generationType": "SSH_KEY",&lt;br /&gt;  "generationTemplate": "RSA_3072"&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="secretName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name of the secret. Avoid entering confidential information.</td>
</tr>
<tr>
    <td><CopyableCode code="secretRules" /></td>
    <td><code>array</code></td>
    <td>A list of rules that control how the secret is used and managed.</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>A property indicating when the secret was created, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2019-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeOfCurrentVersionExpiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>An optional property indicating when the current secret version will expire, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2019-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeOfDeletion" /></td>
    <td><code>string (date-time)</code></td>
    <td>An optional property indicating when to delete the secret, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2019-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the vault where the secret exists.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The details of the secret, excluding the contents of the secret.

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
    <td>The OCID of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isAutoGenerationEnabled" /></td>
    <td><code>boolean</code></td>
    <td>The value of this flag determines whether or not secret content will be generated automatically. </td>
</tr>
<tr>
    <td><CopyableCode code="keyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the master encryption key that is used to encrypt the secret. You must specify a symmetric key to encrypt the secret during import to the vault. You cannot encrypt secrets with asymmetric keys. Furthermore, the key must exist in the vault that you specify. </td>
</tr>
<tr>
    <td><CopyableCode code="lastRotationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A property indicating when the secret was last rotated successfully, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2019-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Additional information about the secret's current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current lifecycle state of the secret. (CREATING, ACTIVE, UPDATING, DELETING, DELETED, SCHEDULING_DELETION, PENDING_DELETION, CANCELLING_DELETION, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="nextRotationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>A property indicating when the secret is scheduled to be rotated, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2019-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="rotationConfig" /></td>
    <td><code>object</code></td>
    <td>Defines the frequency of the rotation and the information about the target system</td>
</tr>
<tr>
    <td><CopyableCode code="rotationStatus" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the secret rotation (x-obmcs-enumref: #/definitions/Secret/rotationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="secretGenerationContext" /></td>
    <td><code>object</code></td>
    <td>Captures a configurable set of secret generation rules such as length, base characters, additional characters, and so on. (x-example: &#123;&lt;br /&gt;  "generationType": "SSH_KEY",&lt;br /&gt;  "generationTemplate": "RSA_3072"&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="secretName" /></td>
    <td><code>string</code></td>
    <td>The name of the secret.</td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace.  Example: `&#123;"orcl-cloud": &#123;"free-tier-retained": "true"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>A property indicating when the secret was created, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2019-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeOfCurrentVersionExpiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>An optional property indicating when the current secret version will expire, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2019-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeOfDeletion" /></td>
    <td><code>string (date-time)</code></td>
    <td>An optional property indicating when to delete the secret, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2019-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Vault in which the secret exists</td>
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
    <td><a href="#parameter-secretId"><code>secretId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets information about the specified secret.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-vaultId"><code>vaultId</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists all secrets in the specified vault and compartment.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vaultId"><code>vaultId</code></a>, <a href="#parameter-secretName"><code>secretName</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-keyId"><code>keyId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new secret according to the details of the request.&lt;br /&gt;&lt;br /&gt;This operation is not supported by the Oracle Cloud Infrastructure Terraform Provider.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-secretId"><code>secretId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the properties of a secret. Specifically, you can update the version number of the secret to make&lt;br /&gt;that version number the current version. You can also update a secret's description, its free-form or defined tags, rules&lt;br /&gt;and the secret contents. Updating the secret content automatically creates a new secret version. You cannot, however, update the current secret version number, secret contents, and secret rules at the&lt;br /&gt;same time. Furthermore, the secret must in an `ACTIVE` lifecycle state to be updated.&lt;br /&gt;&lt;br /&gt;This operation is not supported by the Oracle Cloud Infrastructure Terraform Provider.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#cancel_secret_deletion"><CopyableCode code="cancel_secret_deletion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-secretId"><code>secretId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Cancels the pending deletion of the specified secret. Canceling&lt;br /&gt;a scheduled deletion restores the secret's lifecycle state to what&lt;br /&gt;it was before you scheduled the secret for deletion.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#cancel_secret_rotation"><CopyableCode code="cancel_secret_rotation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-secretId"><code>secretId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Cancels the ongoing secret rotation. The cancellation is contingent on how&lt;br /&gt;far the rotation process has progressed. Upon cancelling a rotation, all &lt;br /&gt;future rotations are also disabled.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-secretId"><code>secretId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a secret into a different compartment within the same tenancy. For information about&lt;br /&gt;moving resources between compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;When provided, if-match is checked against the ETag values of the secret.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#rotate_secret"><CopyableCode code="rotate_secret" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-secretId"><code>secretId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>API to force rotation of an existing secret in Vault and the specified target system; expects secret to have a valid Target System Details object&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#schedule_secret_deletion"><CopyableCode code="schedule_secret_deletion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-secretId"><code>secretId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Schedules the deletion of the specified secret. This sets the lifecycle state of the secret&lt;br /&gt;to `PENDING_DELETION` and then deletes it after the specified retention period ends.&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-secretId">
    <td><CopyableCode code="secretId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the secret.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter that returns only resources that match the specified lifecycle state. The state value is case-insensitive. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in a paginated "List" call. </td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The secret name.</td>
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
    <td>The field to sort by. You can specify only one sort order. The default order for `TIMECREATED` is descending. The default order for `NAME` is ascending. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). </td>
</tr>
<tr id="parameter-vaultId">
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the vault.</td>
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

Gets information about the specified secret.

```sql
SELECT
id,
compartmentId,
currentVersionNumber,
definedTags,
description,
freeformTags,
isAutoGenerationEnabled,
keyId,
lastRotationTime,
lifecycleDetails,
lifecycleState,
metadata,
nextRotationTime,
rotationConfig,
rotationStatus,
secretGenerationContext,
secretName,
secretRules,
timeCreated,
timeOfCurrentVersionExpiry,
timeOfDeletion,
vaultId
FROM oci.vault.secrets
WHERE secretId = '{{ secretId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists all secrets in the specified vault and compartment.

```sql
SELECT
id,
compartmentId,
definedTags,
description,
freeformTags,
isAutoGenerationEnabled,
keyId,
lastRotationTime,
lifecycleDetails,
lifecycleState,
nextRotationTime,
rotationConfig,
rotationStatus,
secretGenerationContext,
secretName,
systemTags,
timeCreated,
timeOfCurrentVersionExpiry,
timeOfDeletion,
vaultId
FROM oci.vault.secrets
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND name = '{{ name }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND vaultId = '{{ vaultId }}'
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

Creates a new secret according to the details of the request.&lt;br /&gt;&lt;br /&gt;This operation is not supported by the Oracle Cloud Infrastructure Terraform Provider.&lt;br /&gt;

```sql
INSERT INTO oci.vault.secrets (
compartmentId,
definedTags,
description,
enableAutoGeneration,
freeformTags,
keyId,
metadata,
rotationConfig,
secretContent,
secretGenerationContext,
secretName,
secretRules,
vaultId,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ description }}',
{{ enableAutoGeneration }},
'{{ freeformTags }}',
'{{ keyId }}' /* required */,
'{{ metadata }}',
'{{ rotationConfig }}',
'{{ secretContent }}',
'{{ secretGenerationContext }}',
'{{ secretName }}' /* required */,
'{{ secretRules }}',
'{{ vaultId }}' /* required */,
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
currentVersionNumber,
definedTags,
description,
freeformTags,
isAutoGenerationEnabled,
keyId,
lastRotationTime,
lifecycleDetails,
lifecycleState,
metadata,
nextRotationTime,
rotationConfig,
rotationStatus,
secretGenerationContext,
secretName,
secretRules,
timeCreated,
timeOfCurrentVersionExpiry,
timeOfDeletion,
vaultId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: secrets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the secrets resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment where you want to create the secret.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: description
      value: "{{ description }}"
      description: |
        A brief description of the secret. Avoid entering confidential information.
    - name: enableAutoGeneration
      value: {{ enableAutoGeneration }}
      description: |
        The value of this flag determines whether or not secret content will be generated automatically. If not set, it defaults to false.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: keyId
      value: "{{ keyId }}"
      description: |
        The OCID of the master encryption key that is used to encrypt the secret. You must specify a symmetric key to encrypt the secret during import to the vault. You cannot encrypt secrets with asymmetric keys. Furthermore, the key must exist in the vault that you specify.
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Additional metadata that you can use to provide context about how to use the secret during rotation or
        other administrative tasks. For example, for a secret that you use to connect to a database, the additional
        metadata might specify the connection endpoint and the connection string. Provide additional metadata as key-value pairs.
    - name: rotationConfig
      description: |
        Defines the frequency of the rotation and the information about the target system
      value:
        isScheduledRotationEnabled: {{ isScheduledRotationEnabled }}
        rotationInterval: "{{ rotationInterval }}"
        targetSystemDetails:
          targetSystemType: "{{ targetSystemType }}"
    - name: secretContent
      description: |
        The content of the secret and metadata to help identify it.
      value:
        contentType: "{{ contentType }}"
        name: "{{ name }}"
        stage: "{{ stage }}"
    - name: secretGenerationContext
      description: |
        Captures a configurable set of secret generation rules such as length, base characters, additional characters, and so on.
      value:
        generationType: "{{ generationType }}"
        secretTemplate: "{{ secretTemplate }}"
    - name: secretName
      value: "{{ secretName }}"
      description: |
        A user-friendly name for the secret. Secret names should be unique within a vault. Avoid entering confidential information. Valid characters are uppercase or lowercase letters, numbers, hyphens, underscores, and periods.
    - name: secretRules
      description: |
        A list of rules to control how the secret is used and managed.
      value:
        - ruleType: "{{ ruleType }}"
    - name: vaultId
      value: "{{ vaultId }}"
      description: |
        The OCID of the vault where you want to create the secret.
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

Updates the properties of a secret. Specifically, you can update the version number of the secret to make&lt;br /&gt;that version number the current version. You can also update a secret's description, its free-form or defined tags, rules&lt;br /&gt;and the secret contents. Updating the secret content automatically creates a new secret version. You cannot, however, update the current secret version number, secret contents, and secret rules at the&lt;br /&gt;same time. Furthermore, the secret must in an `ACTIVE` lifecycle state to be updated.&lt;br /&gt;&lt;br /&gt;This operation is not supported by the Oracle Cloud Infrastructure Terraform Provider.&lt;br /&gt;

```sql
UPDATE oci.vault.secrets
SET 
currentVersionNumber = {{ currentVersionNumber }},
definedTags = '{{ definedTags }}',
description = '{{ description }}',
enableAutoGeneration = {{ enableAutoGeneration }},
freeformTags = '{{ freeformTags }}',
metadata = '{{ metadata }}',
rotationConfig = '{{ rotationConfig }}',
secretContent = '{{ secretContent }}',
secretGenerationContext = '{{ secretGenerationContext }}',
secretRules = '{{ secretRules }}'
WHERE 
secretId = '{{ secretId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
compartmentId,
currentVersionNumber,
definedTags,
description,
freeformTags,
isAutoGenerationEnabled,
keyId,
lastRotationTime,
lifecycleDetails,
lifecycleState,
metadata,
nextRotationTime,
rotationConfig,
rotationStatus,
secretGenerationContext,
secretName,
secretRules,
timeCreated,
timeOfCurrentVersionExpiry,
timeOfDeletion,
vaultId;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_secret_deletion"
    values={[
        { label: 'cancel_secret_deletion', value: 'cancel_secret_deletion' },
        { label: 'cancel_secret_rotation', value: 'cancel_secret_rotation' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'rotate_secret', value: 'rotate_secret' },
        { label: 'schedule_secret_deletion', value: 'schedule_secret_deletion' }
    ]}
>
<TabItem value="cancel_secret_deletion">

Cancels the pending deletion of the specified secret. Canceling&lt;br /&gt;a scheduled deletion restores the secret's lifecycle state to what&lt;br /&gt;it was before you scheduled the secret for deletion.&lt;br /&gt;

```sql
EXEC oci.vault.secrets.cancel_secret_deletion 
@secretId='{{ secretId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="cancel_secret_rotation">

Cancels the ongoing secret rotation. The cancellation is contingent on how&lt;br /&gt;far the rotation process has progressed. Upon cancelling a rotation, all &lt;br /&gt;future rotations are also disabled.&lt;br /&gt;

```sql
EXEC oci.vault.secrets.cancel_secret_rotation 
@secretId='{{ secretId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="change_compartment">

Moves a secret into a different compartment within the same tenancy. For information about&lt;br /&gt;moving resources between compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;When provided, if-match is checked against the ETag values of the secret.&lt;br /&gt;

```sql
EXEC oci.vault.secrets.change_compartment 
@secretId='{{ secretId }}' --required, 
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
<TabItem value="rotate_secret">

API to force rotation of an existing secret in Vault and the specified target system; expects secret to have a valid Target System Details object&lt;br /&gt;

```sql
EXEC oci.vault.secrets.rotate_secret 
@secretId='{{ secretId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="schedule_secret_deletion">

Schedules the deletion of the specified secret. This sets the lifecycle state of the secret&lt;br /&gt;to `PENDING_DELETION` and then deletes it after the specified retention period ends.&lt;br /&gt;

```sql
EXEC oci.vault.secrets.schedule_secret_deletion 
@secretId='{{ secretId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"timeOfDeletion": "{{ timeOfDeletion }}"
}'
;
```
</TabItem>
</Tabs>
