--- 
title: network_security_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - network_security_groups
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

Creates, updates, deletes, gets or lists a <code>network_security_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_security_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.network_security_groups" /></td></tr>
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

The network security group was retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the network security group.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment the network security group is in. </td>
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
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The network security group's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the network security group was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the network security group's VCN.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A *network security group* (NSG) provides virtual firewall rules for a specific set of&lt;br /&gt;&#91;VNICs&#93;(#/en/iaas/latest/Vnic/) in a VCN. Compare NSGs with &#91;SecurityLists&#93;(#/en/iaas/latest/SecurityList/),&lt;br /&gt;which provide virtual firewall rules to all the VNICs in a *subnet*.&lt;br /&gt;&lt;br /&gt;A network security group consists of two items:&lt;br /&gt;&lt;br /&gt;  * The set of &#91;VNICs&#93;(#/en/iaas/latest/Vnic/) that all have the same security rule needs (for&lt;br /&gt;    example, a group of Compute instances all running the same application)&lt;br /&gt;  * A set of NSG &#91;SecurityRules&#93;(#/en/iaas/latest/SecurityRule/) that apply to the VNICs in the group&lt;br /&gt;&lt;br /&gt;After creating an NSG, you can add VNICs and security rules to it. For example, when you create&lt;br /&gt;an instance, you can specify one or more NSGs to add the instance to (see&lt;br /&gt;&#91;CreateVnicDetails&#93;(#/en/iaas/latest/datatypes/CreateVnicDetails)). Or you can add an existing&lt;br /&gt;instance to an NSG with &#91;UpdateVnic&#93;(#/en/iaas/latest/Vnic/UpdateVnic).&lt;br /&gt;&lt;br /&gt;To add security rules to an NSG, see&lt;br /&gt;&#91;AddNetworkSecurityGroupSecurityRules&#93;(#/en/iaas/latest/SecurityRule/AddNetworkSecurityGroupSecurityRules).&lt;br /&gt;&lt;br /&gt;To list the VNICs in an NSG, see&lt;br /&gt;&#91;ListNetworkSecurityGroupVnics&#93;(#/en/iaas/latest/NetworkSecurityGroupVnic/ListNetworkSecurityGroupVnics).&lt;br /&gt;&lt;br /&gt;To list the security rules in an NSG, see&lt;br /&gt;&#91;ListNetworkSecurityGroupSecurityRules&#93;(#/en/iaas/latest/SecurityRule/ListNetworkSecurityGroupSecurityRules).&lt;br /&gt;&lt;br /&gt;For more information about network security groups, see&lt;br /&gt;&#91;Network Security Groups&#93;(/iaas/Content/Network/Concepts/networksecuritygroups.htm).&lt;br /&gt;&lt;br /&gt;**Important:** Oracle Cloud Infrastructure Compute service images automatically include firewall rules (for example,&lt;br /&gt;Linux iptables, Windows firewall). If there are issues with some type of access to an instance,&lt;br /&gt;make sure all of the following are set correctly:&lt;br /&gt;&lt;br /&gt;  * Any security rules in any NSGs the instance's VNIC belongs to&lt;br /&gt;  * Any &#91;SecurityLists&#93;(#/en/iaas/latest/SecurityList/) associated with the instance's subnet&lt;br /&gt;  * The instance's OS firewall rules&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the network security group.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment the network security group is in. </td>
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
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The network security group's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the network security group was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the network security group's VCN.</td>
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
    <td><a href="#parameter-networkSecurityGroupId"><code>networkSecurityGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified network security group's information.&lt;br /&gt;&lt;br /&gt;To list the VNICs in an NSG, see&lt;br /&gt;&#91;ListNetworkSecurityGroupVnics&#93;(#/en/iaas/latest/NetworkSecurityGroupVnic/ListNetworkSecurityGroupVnics).&lt;br /&gt;&lt;br /&gt;To list the security rules in an NSG, see&lt;br /&gt;&#91;ListNetworkSecurityGroupSecurityRules&#93;(#/en/iaas/latest/SecurityRule/ListNetworkSecurityGroupSecurityRules).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-vlanId"><code>vlanId</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists either the network security groups in the specified compartment, or those associated with the specified VLAN.&lt;br /&gt;You must specify either a `vlanId` or a `compartmentId`, but not both. If you specify a `vlanId`, all other parameters are ignored.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new network security group for the specified VCN.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-networkSecurityGroupId"><code>networkSecurityGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified network security group.&lt;br /&gt;&lt;br /&gt;To add or remove an existing VNIC from the group, use&lt;br /&gt;&#91;UpdateVnic&#93;(#/en/iaas/latest/Vnic/UpdateVnic).&lt;br /&gt;&lt;br /&gt;To add a VNIC to the group *when you create the VNIC*, specify the NSG's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) during creation.&lt;br /&gt;For example, see the `nsgIds` attribute in &#91;CreateVnicDetails&#93;(#/en/iaas/latest/datatypes/CreateVnicDetails).&lt;br /&gt;&lt;br /&gt;To add or remove security rules from the group, use&lt;br /&gt;&#91;AddNetworkSecurityGroupSecurityRules&#93;(#/en/iaas/latest/SecurityRule/AddNetworkSecurityGroupSecurityRules)&lt;br /&gt;or&lt;br /&gt;&#91;RemoveNetworkSecurityGroupSecurityRules&#93;(#/en/iaas/latest/SecurityRule/RemoveNetworkSecurityGroupSecurityRules).&lt;br /&gt;&lt;br /&gt;To edit the contents of existing security rules in the group, use&lt;br /&gt;&#91;UpdateNetworkSecurityGroupSecurityRules&#93;(#/en/iaas/latest/SecurityRule/UpdateNetworkSecurityGroupSecurityRules).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-networkSecurityGroupId"><code>networkSecurityGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified network security group. The group must not contain any VNICs.&lt;br /&gt;&lt;br /&gt;To get a list of the VNICs in a network security group, use&lt;br /&gt;&#91;ListNetworkSecurityGroupVnics&#93;(#/en/iaas/latest/NetworkSecurityGroupVnic/ListNetworkSecurityGroupVnics).&lt;br /&gt;Each returned &#91;NetworkSecurityGroupVnic&#93;(#/en/iaas/latest/NetworkSecurityGroupVnic/) object&lt;br /&gt;contains both the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VNIC and the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VNIC's parent resource (for example,&lt;br /&gt;the Compute instance that the VNIC is attached to).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#add_network_security_group_security_rules"><CopyableCode code="add_network_security_group_security_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-networkSecurityGroupId"><code>networkSecurityGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds up to 25 security rules to the specified network security group. Adding more than 25 rules requires multiple operations.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-networkSecurityGroupId"><code>networkSecurityGroupId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a network security group into a different compartment within the same tenancy. For&lt;br /&gt;information about moving resources between compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#remove_network_security_group_security_rules"><CopyableCode code="remove_network_security_group_security_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-networkSecurityGroupId"><code>networkSecurityGroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes one or more security rules from the specified network security group.&lt;br /&gt;</td>
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
<tr id="parameter-networkSecurityGroupId">
    <td><CopyableCode code="networkSecurityGroupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the network security group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given display name exactly. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource. The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the specified lifecycle state. The value is case insensitive. </td>
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
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by. You can provide one sort order (`sortOrder`). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** In general, some "List" operations (for example, `ListInstances`) let you optionally filter by availability domain if the scope of the resource type is within a single availability domain. If you call one of these "List" operations without specifying an availability domain, the resources are grouped by availability domain, then sorted. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`). The DISPLAYNAME sort order is case sensitive. </td>
</tr>
<tr id="parameter-vcnId">
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN.</td>
</tr>
<tr id="parameter-vlanId">
    <td><CopyableCode code="vlanId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VLAN.</td>
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

Gets the specified network security group's information.&lt;br /&gt;&lt;br /&gt;To list the VNICs in an NSG, see&lt;br /&gt;&#91;ListNetworkSecurityGroupVnics&#93;(#/en/iaas/latest/NetworkSecurityGroupVnic/ListNetworkSecurityGroupVnics).&lt;br /&gt;&lt;br /&gt;To list the security rules in an NSG, see&lt;br /&gt;&#91;ListNetworkSecurityGroupSecurityRules&#93;(#/en/iaas/latest/SecurityRule/ListNetworkSecurityGroupSecurityRules).&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
timeCreated,
vcnId
FROM oci.network.network_security_groups
WHERE networkSecurityGroupId = '{{ networkSecurityGroupId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists either the network security groups in the specified compartment, or those associated with the specified VLAN.&lt;br /&gt;You must specify either a `vlanId` or a `compartmentId`, but not both. If you specify a `vlanId`, all other parameters are ignored.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
timeCreated,
vcnId
FROM oci.network.network_security_groups
WHERE region = '{{ region }}' -- required
AND compartmentId = '{{ compartmentId }}'
AND vlanId = '{{ vlanId }}'
AND vcnId = '{{ vcnId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND displayName = '{{ displayName }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
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

Creates a new network security group for the specified VCN.&lt;br /&gt;

```sql
INSERT INTO oci.network.network_security_groups (
compartmentId,
definedTags,
displayName,
freeformTags,
vcnId,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ freeformTags }}',
'{{ vcnId }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
timeCreated,
vcnId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: network_security_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the network_security_groups resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the
        network security group.
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
    - name: vcnId
      value: "{{ vcnId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the VCN to create the network
        security group in.
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

Updates the specified network security group.&lt;br /&gt;&lt;br /&gt;To add or remove an existing VNIC from the group, use&lt;br /&gt;&#91;UpdateVnic&#93;(#/en/iaas/latest/Vnic/UpdateVnic).&lt;br /&gt;&lt;br /&gt;To add a VNIC to the group *when you create the VNIC*, specify the NSG's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) during creation.&lt;br /&gt;For example, see the `nsgIds` attribute in &#91;CreateVnicDetails&#93;(#/en/iaas/latest/datatypes/CreateVnicDetails).&lt;br /&gt;&lt;br /&gt;To add or remove security rules from the group, use&lt;br /&gt;&#91;AddNetworkSecurityGroupSecurityRules&#93;(#/en/iaas/latest/SecurityRule/AddNetworkSecurityGroupSecurityRules)&lt;br /&gt;or&lt;br /&gt;&#91;RemoveNetworkSecurityGroupSecurityRules&#93;(#/en/iaas/latest/SecurityRule/RemoveNetworkSecurityGroupSecurityRules).&lt;br /&gt;&lt;br /&gt;To edit the contents of existing security rules in the group, use&lt;br /&gt;&#91;UpdateNetworkSecurityGroupSecurityRules&#93;(#/en/iaas/latest/SecurityRule/UpdateNetworkSecurityGroupSecurityRules).&lt;br /&gt;

```sql
UPDATE oci.network.network_security_groups
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}'
WHERE 
networkSecurityGroupId = '{{ networkSecurityGroupId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
freeformTags,
lifecycleState,
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

Deletes the specified network security group. The group must not contain any VNICs.&lt;br /&gt;&lt;br /&gt;To get a list of the VNICs in a network security group, use&lt;br /&gt;&#91;ListNetworkSecurityGroupVnics&#93;(#/en/iaas/latest/NetworkSecurityGroupVnic/ListNetworkSecurityGroupVnics).&lt;br /&gt;Each returned &#91;NetworkSecurityGroupVnic&#93;(#/en/iaas/latest/NetworkSecurityGroupVnic/) object&lt;br /&gt;contains both the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VNIC and the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VNIC's parent resource (for example,&lt;br /&gt;the Compute instance that the VNIC is attached to).&lt;br /&gt;

```sql
DELETE FROM oci.network.network_security_groups
WHERE networkSecurityGroupId = '{{ networkSecurityGroupId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add_network_security_group_security_rules"
    values={[
        { label: 'add_network_security_group_security_rules', value: 'add_network_security_group_security_rules' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'remove_network_security_group_security_rules', value: 'remove_network_security_group_security_rules' }
    ]}
>
<TabItem value="add_network_security_group_security_rules">

Adds up to 25 security rules to the specified network security group. Adding more than 25 rules requires multiple operations.&lt;br /&gt;

```sql
EXEC oci.network.network_security_groups.add_network_security_group_security_rules 
@networkSecurityGroupId='{{ networkSecurityGroupId }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"securityRules": "{{ securityRules }}"
}'
;
```
</TabItem>
<TabItem value="change_compartment">

Moves a network security group into a different compartment within the same tenancy. For&lt;br /&gt;information about moving resources between compartments, see &#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.network.network_security_groups.change_compartment 
@networkSecurityGroupId='{{ networkSecurityGroupId }}' --required, 
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
<TabItem value="remove_network_security_group_security_rules">

Removes one or more security rules from the specified network security group.&lt;br /&gt;

```sql
EXEC oci.network.network_security_groups.remove_network_security_group_security_rules 
@networkSecurityGroupId='{{ networkSecurityGroupId }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"securityRuleIds": "{{ securityRuleIds }}"
}'
;
```
</TabItem>
</Tabs>
