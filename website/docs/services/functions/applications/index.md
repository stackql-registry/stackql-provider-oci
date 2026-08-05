--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - functions
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.functions.applications" /></td></tr>
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

Succesfully retrieved application.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the application. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the application. </td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Application configuration for functions in this application (passed as environment variables). Can be overridden by function configuration. Keys must be ASCII strings consisting solely of letters, digits, and the '_' (underscore) character, and must not begin with a digit. Values should be limited to printable unicode characters.  Example: `&#123;"MY_FUNCTION_CONFIG": "ConfVal"&#125;`  The maximum size for all configuration keys and values is limited to 4KB. This is measured as the sum of octets necessary to represent each key and value in UTF-8. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the application. The display name is unique within the compartment containing the application. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="imagePolicyConfig" /></td>
    <td><code>object</code></td>
    <td>Define the image signature verification policy for an application. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the application.  (CREATING, ACTIVE, INACTIVE, UPDATING, DELETING, DELETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="logging" /></td>
    <td><code>object</code></td>
    <td>Set logging configuration for an application. This is only used if Service Logs for the application are enabled in the OCI Logging service. </td>
</tr>
<tr>
    <td><CopyableCode code="networkSecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)s of the Network Security Groups to add the application to. </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security attributes for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "enforce"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>Valid values are `GENERIC_X86`, `GENERIC_ARM` and `GENERIC_X86_ARM`. Default is `GENERIC_X86`. Setting this to `GENERIC_X86`, will run the functions in the application on X86 processor architecture. Setting this to `GENERIC_ARM`, will run the functions in the application on ARM processor architecture. When set to `GENERIC_X86_ARM`, functions in the application are run on either X86 or ARM processor architecture. Accepted values are: `GENERIC_X86`, `GENERIC_ARM`, `GENERIC_X86_ARM`  (GENERIC_X86, GENERIC_ARM, GENERIC_X86_ARM)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)s of the subnets in which to run functions in the application. </td>
</tr>
<tr>
    <td><CopyableCode code="syslogUrl" /></td>
    <td><code>string</code></td>
    <td>A syslog URL to which to send all function logs. Supports tcp, udp, and tcp+tls. The syslog URL must be reachable from all of the subnets configured for the application. Note: If you enable the OCI Logging service for this application, the syslogUrl value is ignored. Function logs are sent to the OCI Logging service, and not to the syslog URL.  Example: `tcp:​//logserver.myserver:1234` </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the application was created, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2018-09-12T22:47:12.613Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the application was updated, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2018-09-12T22:47:12.613Z` </td>
</tr>
<tr>
    <td><CopyableCode code="traceConfig" /></td>
    <td><code>object</code></td>
    <td>Define the tracing configuration for an application. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Summary of an application.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the application. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the application. </td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the application. The display name is unique within the compartment containing the application. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="imagePolicyConfig" /></td>
    <td><code>object</code></td>
    <td>Define the image signature verification policy for an application. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the application.  (x-obmcs-enumref: #/definitions/Application/lifecycleState)</td>
</tr>
<tr>
    <td><CopyableCode code="logging" /></td>
    <td><code>object</code></td>
    <td>Set logging configuration for an application. This is only used if Service Logs for the application are enabled in the OCI Logging service. </td>
</tr>
<tr>
    <td><CopyableCode code="networkSecurityGroupIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)s of the Network Security Groups to add the application to. </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security attributes for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "enforce"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>Valid values are `GENERIC_X86`, `GENERIC_ARM` and `GENERIC_X86_ARM`. Default is `GENERIC_X86`. Setting this to `GENERIC_X86`, will run the functions in the application on X86 processor architecture. Setting this to `GENERIC_ARM`, will run the functions in the application on ARM processor architecture. When set to `GENERIC_X86_ARM`, functions in the application are run on either X86 or ARM processor architecture. Accepted values are: `GENERIC_X86`, `GENERIC_ARM`, `GENERIC_X86_ARM`  (GENERIC_X86, GENERIC_ARM, GENERIC_X86_ARM)</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm)s of the subnets in which to run functions in the application. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the application was created, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2018-09-12T22:47:12.613Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the application was updated, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format. Example: `2018-09-12T22:47:12.613Z` </td>
</tr>
<tr>
    <td><CopyableCode code="traceConfig" /></td>
    <td><code>object</code></td>
    <td>Define the tracing configuration for an application. </td>
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
    <td><a href="#parameter-applicationId"><code>applicationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Retrieves an application.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a></td>
    <td>Lists applications for a compartment.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-subnetIds"><code>subnetIds</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a new application.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-applicationId"><code>applicationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Modifies an application</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-applicationId"><code>applicationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes an application.</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-applicationId"><code>applicationId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Moves an application into a different compartment within the same tenancy.&lt;br /&gt;For information about moving resources between compartments, see &#91;Moving Resources Between Compartments&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;</td>
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
<tr id="parameter-applicationId">
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of this application. </td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment to which this resource belongs. </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only applications with display names that match the display name string. Matching is exact. </td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A filter to return only applications with the specified OCID. </td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only applications that match the lifecycle state in this parameter. Example: `Creating` </td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return. 1 is the minimum, 50 is the maximum.  Default: 10 </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token for a list query returned by a previous operation </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>Specifies the attribute with which to sort the rules.  Default: `displayName`  * **timeCreated:** Sorts by timeCreated. * **displayName:** Sorts by displayName. * **id:** Sorts by id. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>Specifies sort order.  * **ASC:** Ascending sort order. * **DESC:** Descending sort order. </td>
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

Retrieves an application.

```sql
SELECT
id,
compartmentId,
config,
definedTags,
displayName,
freeformTags,
imagePolicyConfig,
lifecycleState,
logging,
networkSecurityGroupIds,
securityAttributes,
shape,
subnetIds,
syslogUrl,
timeCreated,
timeUpdated,
traceConfig
FROM oci.functions.applications
WHERE applicationId = '{{ applicationId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists applications for a compartment.

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
freeformTags,
imagePolicyConfig,
lifecycleState,
logging,
networkSecurityGroupIds,
securityAttributes,
shape,
subnetIds,
timeCreated,
timeUpdated,
traceConfig
FROM oci.functions.applications
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
AND lifecycleState = '{{ lifecycleState }}'
AND displayName = '{{ displayName }}'
AND id = '{{ id }}'
AND sortOrder = '{{ sortOrder }}'
AND sortBy = '{{ sortBy }}'
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

Creates a new application.

```sql
INSERT INTO oci.functions.applications (
compartmentId,
config,
definedTags,
displayName,
freeformTags,
imagePolicyConfig,
logging,
networkSecurityGroupIds,
securityAttributes,
shape,
subnetIds,
syslogUrl,
traceConfig,
region,
opc-request-id
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ config }}',
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ freeformTags }}',
'{{ imagePolicyConfig }}',
'{{ logging }}',
'{{ networkSecurityGroupIds }}',
'{{ securityAttributes }}',
'{{ shape }}',
'{{ subnetIds }}' /* required */,
'{{ syslogUrl }}',
'{{ traceConfig }}',
'{{ region }}',
'{{ opc-request-id }}'
RETURNING
id,
compartmentId,
config,
definedTags,
displayName,
freeformTags,
imagePolicyConfig,
lifecycleState,
logging,
networkSecurityGroupIds,
securityAttributes,
shape,
subnetIds,
syslogUrl,
timeCreated,
timeUpdated,
traceConfig
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment to create the application within.
    - name: config
      value: "{{ config }}"
      description: |
        Application configuration. These values are passed on to the function as environment variables, functions may override application configuration.
        Keys must be ASCII strings consisting solely of letters, digits, and the '_' (underscore) character, and must not begin with a digit. Values should be limited to printable unicode characters.
        Example: \`{"MY_FUNCTION_CONFIG": "ConfVal"}\`
        The maximum size for all configuration keys and values is limited to 4KB. This is measured as the sum of octets necessary to represent each key and value in UTF-8.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Operations": {"CostCenter": "42"}}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The display name of the application. The display name must be unique within the compartment containing the application. Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: imagePolicyConfig
      description: |
        Define the image signature verification policy for an application.
      value:
        isPolicyEnabled: {{ isPolicyEnabled }}
        keyDetails:
          - kmsKeyId: "{{ kmsKeyId }}"
    - name: logging
      description: |
        Set logging configuration for an application. This is only used if Service Logs for the application are enabled in the OCI Logging service.
      value:
        lineFormat: "{{ lineFormat }}"
    - name: networkSecurityGroupIds
      value:
        - "{{ networkSecurityGroupIds }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm)s of the Network Security Groups to add the application to.
    - name: securityAttributes
      value: "{{ securityAttributes }}"
      description: |
        Security attributes for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Oracle-ZPR": {"MaxEgressCount": {"value": "42", "mode": "enforce"}}}\`
    - name: shape
      value: "{{ shape }}"
      description: |
        Valid values are \`GENERIC_X86\`, \`GENERIC_ARM\` and \`GENERIC_X86_ARM\`. Default is \`GENERIC_X86\`. Setting this to \`GENERIC_X86\`, will run the functions in the application on X86 processor architecture.
        Setting this to \`GENERIC_ARM\`, will run the functions in the application on ARM processor architecture.
        When set to \`GENERIC_X86_ARM\`, functions in the application are run on either X86 or ARM processor architecture.
        Accepted values are:
        \`GENERIC_X86\`, \`GENERIC_ARM\`, \`GENERIC_X86_ARM\`
      valid_values: ['GENERIC_X86', 'GENERIC_ARM', 'GENERIC_X86_ARM']
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm)s of the subnets in which to run functions in the application.
    - name: syslogUrl
      value: "{{ syslogUrl }}"
      description: |
        A syslog URL to which to send all function logs. Supports tcp, udp, and tcp+tls.
        The syslog URL must be reachable from all of the subnets configured for the application.
        Note: If you enable the OCI Logging service for this application, the syslogUrl value is ignored. Function logs are sent to the OCI Logging service, and not to the syslog URL.
        Example: \`tcp://logserver.myserver:1234\`
    - name: traceConfig
      description: |
        Define the tracing configuration for an application.
      value:
        domainId: "{{ domainId }}"
        isEnabled: {{ isEnabled }}
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
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

Modifies an application

```sql
UPDATE oci.functions.applications
SET 
config = '{{ config }}',
definedTags = '{{ definedTags }}',
freeformTags = '{{ freeformTags }}',
imagePolicyConfig = '{{ imagePolicyConfig }}',
logging = '{{ logging }}',
networkSecurityGroupIds = '{{ networkSecurityGroupIds }}',
securityAttributes = '{{ securityAttributes }}',
syslogUrl = '{{ syslogUrl }}',
traceConfig = '{{ traceConfig }}'
WHERE 
applicationId = '{{ applicationId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
compartmentId,
config,
definedTags,
displayName,
freeformTags,
imagePolicyConfig,
lifecycleState,
logging,
networkSecurityGroupIds,
securityAttributes,
shape,
subnetIds,
syslogUrl,
timeCreated,
timeUpdated,
traceConfig;
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

Deletes an application.

```sql
DELETE FROM oci.functions.applications
WHERE applicationId = '{{ applicationId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
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

Moves an application into a different compartment within the same tenancy.&lt;br /&gt;For information about moving resources between compartments, see &#91;Moving Resources Between Compartments&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.functions.applications.change_compartment 
@applicationId='{{ applicationId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
</Tabs>
