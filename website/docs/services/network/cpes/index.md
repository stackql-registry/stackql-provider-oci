--- 
title: cpes
hide_title: false
hide_table_of_contents: false
keywords:
  - cpes
  - network
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

Creates, updates, deletes, gets or lists a <code>cpes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cpes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.cpes" /></td></tr>
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

The CPE was retrieved.

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
    <td>The CPE's Oracle ID (OCID).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the CPE.</td>
</tr>
<tr>
    <td><CopyableCode code="cpeDeviceShapeId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the CPE's device type. The Networking service maintains a general list of CPE device types (for example, Cisco ASA). For each type, Oracle provides CPE configuration content that can help a network engineer configure the CPE. The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) uniquely identifies the type of device. To get the OCIDs for the device types on the list, see &#91;ListCpeDeviceShapes&#93;(#/en/iaas/latest/CpeDeviceShapeSummary/ListCpeDeviceShapes).  For information about how to generate CPE configuration content for a CPE device type, see:    * &#91;GetCpeDeviceConfigContent&#93;(#/en/iaas/latest/Cpe/GetCpeDeviceConfigContent)   * &#91;GetIpsecCpeDeviceConfigContent&#93;(#/en/iaas/latest/IPSecConnection/GetIpsecCpeDeviceConfigContent)   * &#91;GetTunnelCpeDeviceConfigContent&#93;(#/en/iaas/latest/TunnelCpeDeviceConfig/GetTunnelCpeDeviceConfigContent)   * &#91;GetTunnelCpeDeviceConfig&#93;(#/en/iaas/latest/TunnelCpeDeviceConfig/GetTunnelCpeDeviceConfig) </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>The public IP address of the on-premises router.</td>
</tr>
<tr>
    <td><CopyableCode code="isPrivate" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this CPE is of type `private` or not. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the CPE was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An object you create when setting up a Site-to-Site VPN between your on-premises network&lt;br /&gt;and VCN. The `Cpe` is a virtual representation of your customer-premises equipment,&lt;br /&gt;which is the actual router on-premises at your site at your end of the Site-to-Site VPN IPSec connection.&lt;br /&gt;For more information,&lt;br /&gt;see &#91;Overview of the Networking Service&#93;(/iaas/Content/Network/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The CPE's Oracle ID (OCID).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the CPE.</td>
</tr>
<tr>
    <td><CopyableCode code="cpeDeviceShapeId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the CPE's device type. The Networking service maintains a general list of CPE device types (for example, Cisco ASA). For each type, Oracle provides CPE configuration content that can help a network engineer configure the CPE. The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) uniquely identifies the type of device. To get the OCIDs for the device types on the list, see &#91;ListCpeDeviceShapes&#93;(#/en/iaas/latest/CpeDeviceShapeSummary/ListCpeDeviceShapes).  For information about how to generate CPE configuration content for a CPE device type, see:    * &#91;GetCpeDeviceConfigContent&#93;(#/en/iaas/latest/Cpe/GetCpeDeviceConfigContent)   * &#91;GetIpsecCpeDeviceConfigContent&#93;(#/en/iaas/latest/IPSecConnection/GetIpsecCpeDeviceConfigContent)   * &#91;GetTunnelCpeDeviceConfigContent&#93;(#/en/iaas/latest/TunnelCpeDeviceConfig/GetTunnelCpeDeviceConfigContent)   * &#91;GetTunnelCpeDeviceConfig&#93;(#/en/iaas/latest/TunnelCpeDeviceConfig/GetTunnelCpeDeviceConfig) </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="ipAddress" /></td>
    <td><code>string</code></td>
    <td>The public IP address of the on-premises router.</td>
</tr>
<tr>
    <td><CopyableCode code="isPrivate" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this CPE is of type `private` or not. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the CPE was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-cpeId"><code>cpeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified CPE's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the customer-premises equipment objects (CPEs) in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-ipAddress"><code>ipAddress</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new virtual customer-premises equipment (CPE) object in the specified compartment. For&lt;br /&gt;more information, see &#91;Site-to-Site VPN Overview&#93;(/iaas/Content/Network/Tasks/overviewIPsec.htm).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want&lt;br /&gt;the CPE to reside. Notice that the CPE doesn't have to be in the same compartment as the IPSec&lt;br /&gt;connection or other Networking Service components. If you're not sure which compartment to&lt;br /&gt;use, put the CPE in the same compartment as the DRG. For more information about&lt;br /&gt;compartments and access control, see &#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;For information about OCIDs, see &#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You must provide the public IP address of your on-premises router. See&lt;br /&gt;&#91;CPE Configuration&#93;(/iaas/Content/Network/Tasks/configuringCPE.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the CPE, otherwise a default is provided. It does not have to&lt;br /&gt;be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cpeId"><code>cpeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified CPE's display name or tags.&lt;br /&gt;Avoid entering confidential information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cpeId"><code>cpeId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified CPE object. The CPE must not be connected to a DRG. This is an asynchronous&lt;br /&gt;operation. The CPE's `lifecycleState` will change to TERMINATING temporarily until the CPE is completely&lt;br /&gt;removed.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cpeId"><code>cpeId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a CPE object into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr id="parameter-cpeId">
    <td><CopyableCode code="cpeId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the CPE.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
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

Gets the specified CPE's information.

```sql
SELECT
id,
compartmentId,
cpeDeviceShapeId,
definedTags,
displayName,
freeformTags,
ipAddress,
isPrivate,
timeCreated
FROM oci.network.cpes
WHERE cpeId = '{{ cpeId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the customer-premises equipment objects (CPEs) in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
cpeDeviceShapeId,
definedTags,
displayName,
freeformTags,
ipAddress,
isPrivate,
timeCreated
FROM oci.network.cpes
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
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

Creates a new virtual customer-premises equipment (CPE) object in the specified compartment. For&lt;br /&gt;more information, see &#91;Site-to-Site VPN Overview&#93;(/iaas/Content/Network/Tasks/overviewIPsec.htm).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want&lt;br /&gt;the CPE to reside. Notice that the CPE doesn't have to be in the same compartment as the IPSec&lt;br /&gt;connection or other Networking Service components. If you're not sure which compartment to&lt;br /&gt;use, put the CPE in the same compartment as the DRG. For more information about&lt;br /&gt;compartments and access control, see &#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;For information about OCIDs, see &#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You must provide the public IP address of your on-premises router. See&lt;br /&gt;&#91;CPE Configuration&#93;(/iaas/Content/Network/Tasks/configuringCPE.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the CPE, otherwise a default is provided. It does not have to&lt;br /&gt;be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;

```sql
INSERT INTO oci.network.cpes (
compartmentId,
cpeDeviceShapeId,
definedTags,
displayName,
freeformTags,
ipAddress,
isPrivate,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ cpeDeviceShapeId }}',
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ ipAddress }}' /* required */,
{{ isPrivate }},
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
cpeDeviceShapeId,
definedTags,
displayName,
freeformTags,
ipAddress,
isPrivate,
timeCreated
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cpes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the cpes resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the CPE.
    - name: cpeDeviceShapeId
      value: "{{ cpeDeviceShapeId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the CPE device type. You can provide
        a value if you want to later generate CPE device configuration content for IPSec connections
        that use this CPE. You can also call [UpdateCpe](#/en/iaas/latest/Cpe/UpdateCpe) later to
        provide a value. For a list of possible values, see
        [ListCpeDeviceShapes](#/en/iaas/latest/CpeDeviceShapeSummary/ListCpeDeviceShapes).
        For more information about generating CPE device configuration content, see:
        * [GetCpeDeviceConfigContent](#/en/iaas/latest/Cpe/GetCpeDeviceConfigContent)
        * [GetIpsecCpeDeviceConfigContent](#/en/iaas/latest/IPSecConnection/GetIpsecCpeDeviceConfigContent)
        * [GetTunnelCpeDeviceConfigContent](#/en/iaas/latest/TunnelCpeDeviceConfig/GetTunnelCpeDeviceConfigContent)
        * [GetTunnelCpeDeviceConfig](#/en/iaas/latest/TunnelCpeDeviceConfig/GetTunnelCpeDeviceConfig)
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a
        namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name. Does not have to be unique, and it's changeable.
        Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: ipAddress
      value: "{{ ipAddress }}"
      description: |
        The public IP address of the on-premises router.
        Example: \`203.0.113.2\`
    - name: isPrivate
      value: {{ isPrivate }}
      description: |
        Indicates whether this CPE is of type \`private\` or not.
      default: false
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
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

Updates the specified CPE's display name or tags.&lt;br /&gt;Avoid entering confidential information.&lt;br /&gt;

```sql
UPDATE oci.network.cpes
SET 
cpeDeviceShapeId = '{{ cpeDeviceShapeId }}',
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}'
WHERE 
cpeId = '{{ cpeId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
cpeDeviceShapeId,
definedTags,
displayName,
freeformTags,
ipAddress,
isPrivate,
timeCreated;
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

Deletes the specified CPE object. The CPE must not be connected to a DRG. This is an asynchronous&lt;br /&gt;operation. The CPE's `lifecycleState` will change to TERMINATING temporarily until the CPE is completely&lt;br /&gt;removed.&lt;br /&gt;

```sql
DELETE FROM oci.network.cpes
WHERE cpeId = '{{ cpeId }}' --required
AND region = '{{ region }}' --required
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

Moves a CPE object into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.network.cpes.change_compartment 
@cpeId='{{ cpeId }}' --required, 
@region='{{ region }}' --required, 
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
