--- 
title: security_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - security_lists
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

Creates, updates, deletes, gets or lists a <code>security_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.security_lists" /></td></tr>
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

The security list was retrieved.

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
    <td>The security list's Oracle Cloud ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the security list.</td>
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
    <td><CopyableCode code="egressSecurityRules" /></td>
    <td><code>array</code></td>
    <td>Rules for allowing egress IP packets.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="ingressSecurityRules" /></td>
    <td><code>array</code></td>
    <td>Rules for allowing ingress IP packets.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The security list's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the security list was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN the security list belongs to.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A set of virtual firewall rules for your VCN. Security lists are configured at the subnet&lt;br /&gt;level, but the rules are applied to the ingress and egress traffic for the individual instances&lt;br /&gt;in the subnet. The rules can be stateful or stateless. For more information, see&lt;br /&gt;&#91;Security Lists&#93;(/iaas/Content/Network/Concepts/securitylists.htm).&lt;br /&gt;**Note:** Compare security lists to &#91;NetworkSecurityGroup&#93;(#/en/iaas/latest/NetworkSecurityGroup/)s,&lt;br /&gt;which let you apply a set of security rules to a *specific set of VNICs* instead of an entire&lt;br /&gt;subnet. Oracle recommends using network security groups instead of security lists, although you&lt;br /&gt;can use either or both together.&lt;br /&gt;&lt;br /&gt;**Important:** Oracle Cloud Infrastructure Compute service images automatically include firewall rules (for example,&lt;br /&gt;Linux iptables, Windows firewall). If there are issues with some type of access to an instance,&lt;br /&gt;make sure both the security lists associated with the instance's subnet and the instance's&lt;br /&gt;firewall rules are set correctly.&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;

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
    <td>The security list's Oracle Cloud ID (&#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)).</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the security list.</td>
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
    <td><CopyableCode code="egressSecurityRules" /></td>
    <td><code>array</code></td>
    <td>Rules for allowing egress IP packets.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="ingressSecurityRules" /></td>
    <td><code>array</code></td>
    <td>Rules for allowing ingress IP packets.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The security list's current state. (PROVISIONING, AVAILABLE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the security list was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="vcnId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the VCN the security list belongs to.</td>
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
    <td><a href="#parameter-securityListId"><code>securityListId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified security list's information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the security lists in the specified VCN and compartment.&lt;br /&gt;If the VCN ID is not provided, then the list includes the security lists from all VCNs in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-egressSecurityRules"><code>egressSecurityRules</code></a>, <a href="#parameter-ingressSecurityRules"><code>ingressSecurityRules</code></a>, <a href="#parameter-vcnId"><code>vcnId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new security list for the specified VCN. For more information&lt;br /&gt;about security lists, see &#91;Security Lists&#93;(/iaas/Content/Network/Concepts/securitylists.htm).&lt;br /&gt;For information on the number of rules you can have in a security list, see&lt;br /&gt;&#91;Service Limits&#93;(/iaas/Content/General/Concepts/servicelimits.htm).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want the security&lt;br /&gt;list to reside. Notice that the security list doesn't have to be in the same compartment as the VCN, subnets,&lt;br /&gt;or other Networking Service components. If you're not sure which compartment to use, put the security&lt;br /&gt;list in the same compartment as the VCN. For more information about compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm). For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the security list, otherwise a default is provided.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-securityListId"><code>securityListId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates the specified security list's display name or rules.&lt;br /&gt;Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;Note that the `egressSecurityRules` or `ingressSecurityRules` objects you provide replace the entire&lt;br /&gt;existing objects.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-securityListId"><code>securityListId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Deletes the specified security list, but only if it's not associated with a subnet. You can't delete&lt;br /&gt;a VCN's default security list.&lt;br /&gt;&lt;br /&gt;This is an asynchronous operation. The security list's `lifecycleState` will change to TERMINATING temporarily&lt;br /&gt;until the security list is completely removed.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-securityListId"><code>securityListId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves a security list into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-securityListId">
    <td><CopyableCode code="securityListId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the security list.</td>
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
    <td>A filter to only return resources that match the given lifecycle state. The state value is case-insensitive. </td>
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

Gets the specified security list's information.

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
egressSecurityRules,
freeformTags,
ingressSecurityRules,
lifecycleState,
timeCreated,
vcnId
FROM oci.network.security_lists
WHERE securityListId = '{{ securityListId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the security lists in the specified VCN and compartment.&lt;br /&gt;If the VCN ID is not provided, then the list includes the security lists from all VCNs in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
egressSecurityRules,
freeformTags,
ingressSecurityRules,
lifecycleState,
timeCreated,
vcnId
FROM oci.network.security_lists
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND vcnId = '{{ vcnId }}'
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

Creates a new security list for the specified VCN. For more information&lt;br /&gt;about security lists, see &#91;Security Lists&#93;(/iaas/Content/Network/Concepts/securitylists.htm).&lt;br /&gt;For information on the number of rules you can have in a security list, see&lt;br /&gt;&#91;Service Limits&#93;(/iaas/Content/General/Concepts/servicelimits.htm).&lt;br /&gt;&lt;br /&gt;For the purposes of access control, you must provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want the security&lt;br /&gt;list to reside. Notice that the security list doesn't have to be in the same compartment as the VCN, subnets,&lt;br /&gt;or other Networking Service components. If you're not sure which compartment to use, put the security&lt;br /&gt;list in the same compartment as the VCN. For more information about compartments and access control, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm). For information about OCIDs, see&lt;br /&gt;&#91;Resource Identifiers&#93;(/iaas/Content/General/Concepts/identifiers.htm).&lt;br /&gt;&lt;br /&gt;You may optionally specify a *display name* for the security list, otherwise a default is provided.&lt;br /&gt;It does not have to be unique, and you can change it. Avoid entering confidential information.&lt;br /&gt;

```sql
INSERT INTO oci.network.security_lists (
compartmentId,
definedTags,
displayName,
egressSecurityRules,
freeformTags,
ingressSecurityRules,
vcnId,
region,
opc-retry-token
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}',
'{{ egressSecurityRules }}' /* required */,
'{{ freeformTags }}',
'{{ ingressSecurityRules }}' /* required */,
'{{ vcnId }}' /* required */,
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
egressSecurityRules,
freeformTags,
ingressSecurityRules,
lifecycleState,
timeCreated,
vcnId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: security_lists
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the security_lists resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the security list.
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
    - name: egressSecurityRules
      description: |
        Rules for allowing egress IP packets.
      value:
        - description: "{{ description }}"
          destination: "{{ destination }}"
          destinationType: "{{ destinationType }}"
          icmpOptions:
            code: {{ code }}
            type: {{ type }}
          isStateless: {{ isStateless }}
          protocol: "{{ protocol }}"
          tcpOptions:
            destinationPortRange:
              max: {{ max }}
              min: {{ min }}
            sourcePortRange:
              max: {{ max }}
              min: {{ min }}
          udpOptions:
            destinationPortRange:
              max: {{ max }}
              min: {{ min }}
            sourcePortRange:
              max: {{ max }}
              min: {{ min }}
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: ingressSecurityRules
      description: |
        Rules for allowing ingress IP packets.
      value:
        - description: "{{ description }}"
          icmpOptions:
            code: {{ code }}
            type: {{ type }}
          isStateless: {{ isStateless }}
          protocol: "{{ protocol }}"
          source: "{{ source }}"
          sourceType: "{{ sourceType }}"
          tcpOptions:
            destinationPortRange:
              max: {{ max }}
              min: {{ min }}
            sourcePortRange:
              max: {{ max }}
              min: {{ min }}
          udpOptions:
            destinationPortRange:
              max: {{ max }}
              min: {{ min }}
            sourcePortRange:
              max: {{ max }}
              min: {{ min }}
    - name: vcnId
      value: "{{ vcnId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the VCN the security list belongs to.
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

Updates the specified security list's display name or rules.&lt;br /&gt;Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;Note that the `egressSecurityRules` or `ingressSecurityRules` objects you provide replace the entire&lt;br /&gt;existing objects.&lt;br /&gt;

```sql
UPDATE oci.network.security_lists
SET 
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
egressSecurityRules = '{{ egressSecurityRules }}',
freeformTags = '{{ freeformTags }}',
ingressSecurityRules = '{{ ingressSecurityRules }}'
WHERE 
securityListId = '{{ securityListId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
RETURNING
id,
compartmentId,
definedTags,
displayName,
egressSecurityRules,
freeformTags,
ingressSecurityRules,
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

Deletes the specified security list, but only if it's not associated with a subnet. You can't delete&lt;br /&gt;a VCN's default security list.&lt;br /&gt;&lt;br /&gt;This is an asynchronous operation. The security list's `lifecycleState` will change to TERMINATING temporarily&lt;br /&gt;until the security list is completely removed.&lt;br /&gt;

```sql
DELETE FROM oci.network.security_lists
WHERE securityListId = '{{ securityListId }}' --required
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

Moves a security list into a different compartment within the same tenancy. For information&lt;br /&gt;about moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.network.security_lists.change_compartment 
@securityListId='{{ securityListId }}' --required, 
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
