--- 
title: vaults
hide_title: false
hide_table_of_contents: false
keywords:
  - vaults
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

Creates, updates, deletes, gets or lists a <code>vaults</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vaults" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.kms.vaults" /></td></tr>
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

The specified vault.

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
    <td>The OCID of the vault.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains this vault.</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoEndpoint" /></td>
    <td><code>string</code></td>
    <td>The service endpoint to perform cryptographic operations against. Cryptographic operations include &#91;Encrypt&#93;(/api/#/en/key/latest/EncryptedData/Encrypt), &#91;Decrypt&#93;(/api/#/en/key/latest/DecryptedData/Decrypt), and &#91;GenerateDataEncryptionKey&#93;(/api/#/en/key/latest/GeneratedKey/GenerateDataEncryptionKey) operations. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the vault. It does not have to be unique, and it is changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="externalKeyManagerMetadataSummary" /></td>
    <td><code>object</code></td>
    <td>Summary about metadata of external key manager to be returned to the customer as a response.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isPrimary" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that indicates whether the Vault is primary Vault or replica Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The vault's current lifecycle state.  Example: `DELETED`  (CREATING, ACTIVE, DELETING, DELETED, PENDING_DELETION, SCHEDULING_DELETION, CANCELLING_DELETION, UPDATING, BACKUP_IN_PROGRESS, RESTORING)</td>
</tr>
<tr>
    <td><CopyableCode code="managementEndpoint" /></td>
    <td><code>string</code></td>
    <td>The service endpoint to perform management operations against. Management operations include "Create," "Update," "List," "Get," and "Delete" operations. </td>
</tr>
<tr>
    <td><CopyableCode code="replicaDetails" /></td>
    <td><code>object</code></td>
    <td>Vault replica details </td>
</tr>
<tr>
    <td><CopyableCode code="restoredFromVaultId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the vault from which this vault was restored, if it was restored from a backup file. If you restore a vault to the same region, the vault retains the same OCID that it had when you backed up the vault. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time this vault was created, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2018-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeOfDeletion" /></td>
    <td><code>string (date-time)</code></td>
    <td>An optional property to indicate when to delete the vault, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2018-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vaultType" /></td>
    <td><code>string</code></td>
    <td>The type of vault. Each type of vault stores the key with different degrees of isolation and has different options and pricing.  (VIRTUAL_PRIVATE, DEFAULT, EXTERNAL)</td>
</tr>
<tr>
    <td><CopyableCode code="wrappingkeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the vault's wrapping key.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The details of the Vault.

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
    <td>The OCID of a vault.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains a particular vault.</td>
</tr>
<tr>
    <td><CopyableCode code="cryptoEndpoint" /></td>
    <td><code>string</code></td>
    <td>The service endpoint to perform cryptographic operations against. Cryptographic operations include &#91;Encrypt&#93;(/api/#/en/key/latest/EncryptedData/Encrypt), &#91;Decrypt&#93;(/api/#/en/key/latest/DecryptedData/Decrypt), and &#91;GenerateDataEncryptionKey&#93;(/api/#/en/key/latest/GeneratedKey/GenerateDataEncryptionKey) operations. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for a vault. It does not have to be unique, and it is changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="externalKeyManagerMetadataSummary" /></td>
    <td><code>object</code></td>
    <td>Summary about metadata of external key manager to be returned to the customer as a response.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A vault's current lifecycle state.  Example: `ACTIVE`  (CREATING, ACTIVE, DELETING, DELETED, PENDING_DELETION, SCHEDULING_DELETION, CANCELLING_DELETION, UPDATING, BACKUP_IN_PROGRESS, RESTORING)</td>
</tr>
<tr>
    <td><CopyableCode code="managementEndpoint" /></td>
    <td><code>string</code></td>
    <td>The service endpoint to perform management operations against. Management operations include "Create," "Update," "List," "Get," and "Delete" operations. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time a vault was created, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2018-04-03T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vaultType" /></td>
    <td><code>string</code></td>
    <td>The type of vault. Each type of vault stores keys with different degrees of isolation and has different options and pricing.  (VIRTUAL_PRIVATE, EXTERNAL, DEFAULT)</td>
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
    <td><a href="#parameter-vaultId"><code>vaultId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified vault's configuration information.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning read operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;read operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a></td>
    <td>Lists the vaults in the specified compartment.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning read operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;read operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-vaultType"><code>vaultType</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new vault. The type of vault you create determines key placement, pricing, and&lt;br /&gt;available options. Options include storage isolation, a dedicated service endpoint instead&lt;br /&gt;of a shared service endpoint for API calls, and either a dedicated hardware security module&lt;br /&gt;(HSM) or a multitenant HSM.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-vaultId"><code>vaultId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates the properties of a vault. Specifically, you can update the&lt;br /&gt;`displayName`, `freeformTags`, and `definedTags` properties. Furthermore,&lt;br /&gt;the vault must be in an ACTIVE or CREATING state to be updated.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#restore_vault_from_file"><CopyableCode code="restore_vault_from_file" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-content-length"><code>content-length</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-content-md5"><code>content-md5</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Restores a vault from an encrypted backup file. If a vault&lt;br /&gt;with the same OCID already exists, this operation returns a response with a&lt;br /&gt;409 HTTP status error code.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#restore_vault_from_object_store"><CopyableCode code="restore_vault_from_object_store" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Restores a vault from an encrypted backup file stored in Oracle Cloud Infrastructure Object&lt;br /&gt;Storage. If a vault with the same OCID already exists, this operation returns&lt;br /&gt;a response with a 409 HTTP status error code.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#backup_vault"><CopyableCode code="backup_vault" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vaultId"><code>vaultId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Backs up an encrypted file that contains all the metadata of a vault so that you can restore the vault later.&lt;br /&gt;You can backup a vault whether or not it contains keys. This operation only backs up the&lt;br /&gt;metadata of the vault, and does not include key metadata.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#cancel_vault_deletion"><CopyableCode code="cancel_vault_deletion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vaultId"><code>vaultId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Cancels the scheduled deletion of the specified vault. Canceling a scheduled deletion&lt;br /&gt;restores the vault and all keys in it to their respective states from before their&lt;br /&gt;scheduled deletion. All keys that were scheduled for deletion prior to vault&lt;br /&gt;deletion retain their lifecycle state and time of deletion.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vaultId"><code>vaultId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a vault into a different compartment within the same tenancy. For information about&lt;br /&gt;moving resources between compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;When provided, if-match is checked against the ETag values of the resource.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete_vault_replica"><CopyableCode code="delete_vault_replica" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vaultId"><code>vaultId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-replicaRegion"><code>replicaRegion</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Deletes a vault replica&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#schedule_vault_deletion"><CopyableCode code="schedule_vault_deletion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-vaultId"><code>vaultId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Schedules the deletion of the specified vault. This sets the lifecycle state of the vault and all keys in it&lt;br /&gt;that are not already scheduled for deletion to `PENDING_DELETION` and then deletes them after the&lt;br /&gt;retention period ends. The lifecycle state and time of deletion for keys already scheduled for deletion won't&lt;br /&gt;change. If any keys in the vault are scheduled to be deleted after the specified time of&lt;br /&gt;deletion for the vault, the call is rejected with the error code 409.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;</td>
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
<tr id="parameter-content-length">
    <td><CopyableCode code="content-length" /></td>
    <td><code>integer (int64)</code></td>
    <td>The content length of the body.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-vaultId">
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the vault.</td>
</tr>
<tr id="parameter-content-md5">
    <td><CopyableCode code="content-md5" /></td>
    <td><code>string</code></td>
    <td>The base64-encoded MD5 hash value of the body, as described in &#91;RFC 2616&#93;(https:​//tools.ietf.org/rfc/rfc2616), section 14.15. If the Content-MD5 header is present, Key Management performs an integrity check on the body of the HTTP request by computing the MD5 hash for the body and comparing it to the MD5 hash supplied in the header. If the two hashes don't match, the object is rejected and a response with 400 Unmatched Content MD5 error is returned, along with the message: "The computed MD5 of the request body (ACTUAL_MD5) does not match the Content-MD5 header (HEADER_MD5)." </td>
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

Gets the specified vault's configuration information.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning read operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;read operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
cryptoEndpoint,
definedTags,
displayName,
externalKeyManagerMetadataSummary,
freeformTags,
isPrimary,
lifecycleState,
managementEndpoint,
replicaDetails,
restoredFromVaultId,
timeCreated,
timeOfDeletion,
vaultType,
wrappingkeyId
FROM oci.kms.vaults
WHERE vaultId = '{{ vaultId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists the vaults in the specified compartment.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning read operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;read operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
cryptoEndpoint,
definedTags,
displayName,
externalKeyManagerMetadataSummary,
freeformTags,
lifecycleState,
managementEndpoint,
timeCreated,
vaultType
FROM oci.kms.vaults
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

Creates a new vault. The type of vault you create determines key placement, pricing, and&lt;br /&gt;available options. Options include storage isolation, a dedicated service endpoint instead&lt;br /&gt;of a shared service endpoint for API calls, and either a dedicated hardware security module&lt;br /&gt;(HSM) or a multitenant HSM.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;

```sql
INSERT INTO oci.kms.vaults (
compartmentId,
definedTags,
displayName,
externalKeyManagerMetadata,
freeformTags,
vaultType,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ externalKeyManagerMetadata }}',
'{{ freeformTags }}',
'{{ vaultType }}' /* required */,
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
cryptoEndpoint,
definedTags,
displayName,
externalKeyManagerMetadataSummary,
freeformTags,
isPrimary,
lifecycleState,
managementEndpoint,
replicaDetails,
restoredFromVaultId,
timeCreated,
timeOfDeletion,
vaultType,
wrappingkeyId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vaults
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vaults resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment where you want to create this vault.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name for the vault. It does not have to be unique, and it is changeable.
        Avoid entering confidential information.
    - name: externalKeyManagerMetadata
      description: |
        Metadata required for accessing External Key manager
      value:
        externalVaultEndpointUrl: "{{ externalVaultEndpointUrl }}"
        oauthMetadata:
          clientAppId: "{{ clientAppId }}"
          clientAppSecret: "{{ clientAppSecret }}"
          idcsAccountNameUrl: "{{ idcsAccountNameUrl }}"
        privateEndpointId: "{{ privateEndpointId }}"
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: vaultType
      value: "{{ vaultType }}"
      description: |
        The type of vault to create. Each type of vault stores the key with different degrees of isolation and has different options and pricing.
      valid_values: ['VIRTUAL_PRIVATE', 'DEFAULT', 'EXTERNAL']
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

Updates the properties of a vault. Specifically, you can update the&lt;br /&gt;`displayName`, `freeformTags`, and `definedTags` properties. Furthermore,&lt;br /&gt;the vault must be in an ACTIVE or CREATING state to be updated.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;

```sql
UPDATE oci.kms.vaults
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}'
WHERE 
vaultId = '{{ vaultId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
compartmentId,
cryptoEndpoint,
definedTags,
displayName,
externalKeyManagerMetadataSummary,
freeformTags,
isPrimary,
lifecycleState,
managementEndpoint,
replicaDetails,
restoredFromVaultId,
timeCreated,
timeOfDeletion,
vaultType,
wrappingkeyId;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore_vault_from_file"
    values={[
        { label: 'restore_vault_from_file', value: 'restore_vault_from_file' },
        { label: 'restore_vault_from_object_store', value: 'restore_vault_from_object_store' },
        { label: 'backup_vault', value: 'backup_vault' },
        { label: 'cancel_vault_deletion', value: 'cancel_vault_deletion' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'delete_vault_replica', value: 'delete_vault_replica' },
        { label: 'schedule_vault_deletion', value: 'schedule_vault_deletion' }
    ]}
>
<TabItem value="restore_vault_from_file">

Restores a vault from an encrypted backup file. If a vault&lt;br /&gt;with the same OCID already exists, this operation returns a response with a&lt;br /&gt;409 HTTP status error code.&lt;br /&gt;

```sql
EXEC oci.kms.vaults.restore_vault_from_file 
@compartmentId='{{ compartmentId }}' --required, 
@content-length='{{ content-length }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@content-md5='{{ content-md5 }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="restore_vault_from_object_store">

Restores a vault from an encrypted backup file stored in Oracle Cloud Infrastructure Object&lt;br /&gt;Storage. If a vault with the same OCID already exists, this operation returns&lt;br /&gt;a response with a 409 HTTP status error code.&lt;br /&gt;

```sql
EXEC oci.kms.vaults.restore_vault_from_object_store 
@compartmentId='{{ compartmentId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"backupLocation": "{{ backupLocation }}"
}'
;
```
</TabItem>
<TabItem value="backup_vault">

Backs up an encrypted file that contains all the metadata of a vault so that you can restore the vault later.&lt;br /&gt;You can backup a vault whether or not it contains keys. This operation only backs up the&lt;br /&gt;metadata of the vault, and does not include key metadata.&lt;br /&gt;

```sql
EXEC oci.kms.vaults.backup_vault 
@vaultId='{{ vaultId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"backupLocation": "{{ backupLocation }}", 
"isIncludeKeys": {{ isIncludeKeys }}
}'
;
```
</TabItem>
<TabItem value="cancel_vault_deletion">

Cancels the scheduled deletion of the specified vault. Canceling a scheduled deletion&lt;br /&gt;restores the vault and all keys in it to their respective states from before their&lt;br /&gt;scheduled deletion. All keys that were scheduled for deletion prior to vault&lt;br /&gt;deletion retain their lifecycle state and time of deletion.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;

```sql
EXEC oci.kms.vaults.cancel_vault_deletion 
@vaultId='{{ vaultId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="change_compartment">

Moves a vault into a different compartment within the same tenancy. For information about&lt;br /&gt;moving resources between compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;When provided, if-match is checked against the ETag values of the resource.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;

```sql
EXEC oci.kms.vaults.change_compartment 
@vaultId='{{ vaultId }}' --required, 
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
<TabItem value="delete_vault_replica">

Deletes a vault replica&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;

```sql
EXEC oci.kms.vaults.delete_vault_replica 
@vaultId='{{ vaultId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"replicaRegion": "{{ replicaRegion }}"
}'
;
```
</TabItem>
<TabItem value="schedule_vault_deletion">

Schedules the deletion of the specified vault. This sets the lifecycle state of the vault and all keys in it&lt;br /&gt;that are not already scheduled for deletion to `PENDING_DELETION` and then deletes them after the&lt;br /&gt;retention period ends. The lifecycle state and time of deletion for keys already scheduled for deletion won't&lt;br /&gt;change. If any keys in the vault are scheduled to be deleted after the specified time of&lt;br /&gt;deletion for the vault, the call is rejected with the error code 409.&lt;br /&gt;&lt;br /&gt;As a provisioning operation, this call is subject to a Key Management limit that applies to&lt;br /&gt;the total number of requests across all provisioning write operations. Key Management might&lt;br /&gt;throttle this call to reject an otherwise valid request when the total rate of provisioning&lt;br /&gt;write operations exceeds 10 requests per second for a given tenancy.&lt;br /&gt;

```sql
EXEC oci.kms.vaults.schedule_vault_deletion 
@vaultId='{{ vaultId }}' --required, 
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
</Tabs>
