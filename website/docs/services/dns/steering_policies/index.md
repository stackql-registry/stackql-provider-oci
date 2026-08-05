--- 
title: steering_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - steering_policies
  - dns
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

Creates, updates, deletes, gets or lists a <code>steering_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="steering_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.dns.steering_policies" /></td></tr>
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

A response containing a single steering policy object.

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
    <td>The OCID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="answers" /></td>
    <td><code>array</code></td>
    <td>The set of all answers that can potentially issue from the steering policy. </td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the steering policy.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).   **Example:** `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the steering policy. Does not have to be unique and can be changed. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).   **Example:** `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="healthCheckMonitorId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the health check monitor providing health data about the answers of the steering policy. A steering policy answer with `rdata` matching a monitored endpoint will use the health data of that endpoint. A steering policy answer with `rdata` not matching any monitored endpoint will be assumed healthy.   **Note:** To use the Health Check monitoring feature in a steering policy, a monitor must be created using the Health Checks service first. For more information on how to create a monitor, please see &#91;Managing Health Checks&#93;(/iaas/Content/HealthChecks/Tasks/managinghealthchecks.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the resource. (ACTIVE, CREATING, DELETED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>The series of rules that will be processed in sequence to reduce the pool of answers to a response for any given request.   The first rule receives a shuffled list of all answers, and every other rule receives the list of answers emitted by the one preceding it. The last rule populates the response. </td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The canonical absolute URL of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>string</code></td>
    <td>A set of predefined rules based on the desired purpose of the steering policy. Each template utilizes Traffic Management's rules in a different order to produce the desired results when answering DNS queries.   **Example:** The `FAILOVER` template determines answers by filtering the policy's answers using the `FILTER` rule first, then the following rules in succession: `HEALTH`, `PRIORITY`, and `LIMIT`. This gives the domain dynamic failover capability.   It is **strongly recommended** to use a template other than `CUSTOM` when creating a steering policy.   All templates require the rule order to begin with an unconditional `FILTER` rule that keeps answers contingent upon `answer.isDisabled != true`, except for `CUSTOM`. A defined `HEALTH` rule must follow the `FILTER` rule if the policy references a `healthCheckMonitorId`. The last rule of a template must must be a `LIMIT` rule. For more information about templates and code examples, see &#91;Traffic Management API Guide&#93;(/iaas/Content/TrafficManagement/Concepts/trafficmanagementapi.htm).  **Template Types**  * `FAILOVER` - Uses health check information on your endpoints to determine which DNS answers to serve. If an endpoint fails a health check, the answer for that endpoint will be removed from the list of available answers until the endpoint is detected as healthy.   * `LOAD_BALANCE` - Distributes web traffic to specified endpoints based on defined weights.   * `ROUTE_BY_GEO` - Answers DNS queries based on the query's geographic location. For a list of geographic locations to route by, see &#91;Traffic Management Geographic Locations&#93;(/iaas/Content/TrafficManagement/Reference/trafficmanagementgeo.htm).   * `ROUTE_BY_ASN` - Answers DNS queries based on the query's originating ASN.   * `ROUTE_BY_IP` - Answers DNS queries based on the query's IP address.   * `CUSTOM` - Allows a customized configuration of rules.  (FAILOVER, LOAD_BALANCE, ROUTE_BY_GEO, ROUTE_BY_ASN, ROUTE_BY_IP, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created, expressed in RFC 3339 timestamp format.  **Example:** `2016-07-22T17:23:59:60Z` </td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer (int32)</code></td>
    <td>The Time To Live (TTL) for responses from the steering policy, in seconds. If not specified during creation, a value of 30 seconds will be used. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A DNS steering policy.&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>The OCID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the steering policy.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).   **Example:** `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A user-friendly name for the steering policy. Does not have to be unique and can be changed. Avoid entering confidential information. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).   **Example:** `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="healthCheckMonitorId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the health check monitor providing health data about the answers of the steering policy. A steering policy answer with `rdata` matching a monitored endpoint will use the health data of that endpoint. A steering policy answer with `rdata` not matching any monitored endpoint will be assumed healthy.   **Note:** To use the Health Check monitoring feature in a steering policy, a monitor must be created using the Health Checks service first. For more information on how to create a monitor, please see &#91;Managing Health Checks&#93;(/iaas/Content/HealthChecks/Tasks/managinghealthchecks.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the resource. (ACTIVE, CREATING, DELETED, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The canonical absolute URL of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>string</code></td>
    <td>A set of predefined rules based on the desired purpose of the steering policy. Each template utilizes Traffic Management's rules in a different order to produce the desired results when answering DNS queries.   **Example:** The `FAILOVER` template determines answers by filtering the policy's answers using the `FILTER` rule first, then the following rules in succession: `HEALTH`, `PRIORITY`, and `LIMIT`. This gives the domain dynamic failover capability.   It is **strongly recommended** to use a template other than `CUSTOM` when creating a steering policy.   All templates require the rule order to begin with an unconditional `FILTER` rule that keeps answers contingent upon `answer.isDisabled != true`, except for `CUSTOM`. A defined `HEALTH` rule must follow the `FILTER` rule if the policy references a `healthCheckMonitorId`. The last rule of a template must must be a `LIMIT` rule. For more information about templates and code examples, see &#91;Traffic Management API Guide&#93;(/iaas/Content/TrafficManagement/Concepts/trafficmanagementapi.htm).  **Template Types**  * `FAILOVER` - Uses health check information on your endpoints to determine which DNS answers to serve. If an endpoint fails a health check, the answer for that endpoint will be removed from the list of available answers until the endpoint is detected as healthy.   * `LOAD_BALANCE` - Distributes web traffic to specified endpoints based on defined weights.   * `ROUTE_BY_GEO` - Answers DNS queries based on the query's geographic location. For a list of geographic locations to route by, see &#91;Traffic Management Geographic Locations&#93;(/iaas/Content/TrafficManagement/Reference/trafficmanagementgeo.htm).   * `ROUTE_BY_ASN` - Answers DNS queries based on the query's originating ASN.   * `ROUTE_BY_IP` - Answers DNS queries based on the query's IP address.   * `CUSTOM` - Allows a customized configuration of rules.  (FAILOVER, LOAD_BALANCE, ROUTE_BY_GEO, ROUTE_BY_ASN, ROUTE_BY_IP, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created, expressed in RFC 3339 timestamp format.  **Example:** `2016-07-22T17:23:59:60Z` </td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer (int32)</code></td>
    <td>The Time To Live (TTL) for responses from the steering policy, in seconds. If not specified during creation, a value of 30 seconds will be used. </td>
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
    <td><a href="#parameter-steeringPolicyId"><code>steeringPolicyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-If-Modified-Since"><code>If-Modified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Gets information about the specified steering policy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-displayNameContains"><code>displayNameContains</code></a>, <a href="#parameter-healthCheckMonitorId"><code>healthCheckMonitorId</code></a>, <a href="#parameter-timeCreatedGreaterThanOrEqualTo"><code>timeCreatedGreaterThanOrEqualTo</code></a>, <a href="#parameter-timeCreatedLessThan"><code>timeCreatedLessThan</code></a>, <a href="#parameter-template"><code>template</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Gets a list of all steering policies in the specified compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-template"><code>template</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Creates a new steering policy in the specified compartment. For more information on&lt;br /&gt;creating policies with templates, see &#91;Traffic Management API Guide&#93;(/iaas/Content/TrafficManagement/Concepts/trafficmanagementapi.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-steeringPolicyId"><code>steeringPolicyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Updates the configuration of the specified steering policy.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-steeringPolicyId"><code>steeringPolicyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Deletes the specified steering policy.&lt;br /&gt;&lt;br /&gt;A `204` response indicates that the delete has been successful.&lt;br /&gt;Deletion will fail if the policy is attached to any zones. To detach a&lt;br /&gt;policy from a zone, see `DeleteSteeringPolicyAttachment`.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-steeringPolicyId"><code>steeringPolicyId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Moves a steering policy into a different compartment.&lt;br /&gt;</td>
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
    <td>The OCID of the compartment the resource belongs to.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-steeringPolicyId">
    <td><CopyableCode code="steeringPolicyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the target steering policy.</td>
</tr>
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The `If-Match` header field makes the request method conditional on the existence of at least one current representation of the target resource, when the field-value is `*`, or having a current representation of the target resource that has an entity-tag matching a member of the list of entity-tags provided in the field-value. </td>
</tr>
<tr id="parameter-If-Modified-Since">
    <td><CopyableCode code="If-Modified-Since" /></td>
    <td><code>string</code></td>
    <td>The `If-Modified-Since` header field makes a GET or HEAD request method conditional on the selected representation's modification date being more recent than the date provided in the field-value.  Transfer of the selected representation's data is avoided if that data has not changed. </td>
</tr>
<tr id="parameter-If-None-Match">
    <td><CopyableCode code="If-None-Match" /></td>
    <td><code>string</code></td>
    <td>The `If-None-Match` header field makes the request method conditional on the absence of any current representation of the target resource, when the field-value is `*`, or having a selected representation with an entity-tag that does not match any of those listed in the field-value. </td>
</tr>
<tr id="parameter-If-Unmodified-Since">
    <td><CopyableCode code="If-Unmodified-Since" /></td>
    <td><code>string</code></td>
    <td>The `If-Unmodified-Since` header field makes the request method conditional on the selected representation's last modification date being earlier than or equal to the date provided in the field-value.  This field accomplishes the same purpose as If-Match for cases where the user agent does not have an entity-tag for the representation. </td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The displayName of a resource.</td>
</tr>
<tr id="parameter-displayNameContains">
    <td><CopyableCode code="displayNameContains" /></td>
    <td><code>string</code></td>
    <td>The partial displayName of a resource. Will match any resource whose name (case-insensitive) contains the provided value. </td>
</tr>
<tr id="parameter-healthCheckMonitorId">
    <td><CopyableCode code="healthCheckMonitorId" /></td>
    <td><code>string</code></td>
    <td>Search by health check monitor OCID. Will match any resource whose health check monitor ID matches the provided value. </td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The OCID of a resource.</td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The state of a resource.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum number of items to return in a page of the collection. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The value of the `opc-next-page` response header from the previous "List" call. </td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Specifies to operate only on resources that have a matching DNS scope. </td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field by which to sort steering policies. If unspecified, defaults to `timeCreated`.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The order to sort the resources. </td>
</tr>
<tr id="parameter-template">
    <td><CopyableCode code="template" /></td>
    <td><code>string</code></td>
    <td>Search by steering template type. Will match any resource whose template type matches the provided value. </td>
</tr>
<tr id="parameter-timeCreatedGreaterThanOrEqualTo">
    <td><CopyableCode code="timeCreatedGreaterThanOrEqualTo" /></td>
    <td><code>string (date-time)</code></td>
    <td>An &#91;RFC 3339&#93;(https:​//www.ietf.org/rfc/rfc3339.txt) timestamp that states all returned resources were created on or after the indicated time. </td>
</tr>
<tr id="parameter-timeCreatedLessThan">
    <td><CopyableCode code="timeCreatedLessThan" /></td>
    <td><code>string (date-time)</code></td>
    <td>An &#91;RFC 3339&#93;(https:​//www.ietf.org/rfc/rfc3339.txt) timestamp that states all returned resources were created before the indicated time. </td>
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

Gets information about the specified steering policy.&lt;br /&gt;

```sql
SELECT
id,
answers,
compartmentId,
definedTags,
displayName,
freeformTags,
healthCheckMonitorId,
lifecycleState,
rules,
self,
template,
timeCreated,
ttl
FROM oci.dns.steering_policies
WHERE steeringPolicyId = '{{ steeringPolicyId }}' -- required
AND region = '{{ region }}' -- required
AND If-None-Match = '{{ If-None-Match }}'
AND If-Modified-Since = '{{ If-Modified-Since }}'
AND opc-request-id = '{{ opc-request-id }}'
AND scope = '{{ scope }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of all steering policies in the specified compartment.&lt;br /&gt;

```sql
SELECT
id,
compartmentId,
definedTags,
displayName,
freeformTags,
healthCheckMonitorId,
lifecycleState,
self,
template,
timeCreated,
ttl
FROM oci.dns.steering_policies
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND id = '{{ id }}'
AND displayName = '{{ displayName }}'
AND displayNameContains = '{{ displayNameContains }}'
AND healthCheckMonitorId = '{{ healthCheckMonitorId }}'
AND timeCreatedGreaterThanOrEqualTo = '{{ timeCreatedGreaterThanOrEqualTo }}'
AND timeCreatedLessThan = '{{ timeCreatedLessThan }}'
AND template = '{{ template }}'
AND lifecycleState = '{{ lifecycleState }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND scope = '{{ scope }}'
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

Creates a new steering policy in the specified compartment. For more information on&lt;br /&gt;creating policies with templates, see &#91;Traffic Management API Guide&#93;(/iaas/Content/TrafficManagement/Concepts/trafficmanagementapi.htm).&lt;br /&gt;

```sql
INSERT INTO oci.dns.steering_policies (
answers,
compartmentId,
definedTags,
displayName,
freeformTags,
healthCheckMonitorId,
rules,
template,
ttl,
region,
opc-retry-token,
opc-request-id,
scope
)
SELECT 
'{{ answers }}',
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ displayName }}' /* required */,
'{{ freeformTags }}',
'{{ healthCheckMonitorId }}',
'{{ rules }}',
'{{ template }}' /* required */,
{{ ttl }},
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}',
'{{ scope }}'
RETURNING
id,
answers,
compartmentId,
definedTags,
displayName,
freeformTags,
healthCheckMonitorId,
lifecycleState,
rules,
self,
template,
timeCreated,
ttl
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: steering_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the steering_policies resource.
    - name: answers
      description: |
        The set of all answers that can potentially issue from the steering policy.
      value:
        - isDisabled: {{ isDisabled }}
          name: "{{ name }}"
          pool: "{{ pool }}"
          rdata: "{{ rdata }}"
          rtype: "{{ rtype }}"
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment containing the steering policy.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        **Example:** \`{"Operations": {"CostCenter": "42"}}\`
    - name: displayName
      value: "{{ displayName }}"
      description: |
        A user-friendly name for the steering policy. Does not have to be unique and can be changed.
        Avoid entering confidential information.
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        **Example:** \`{"Department": "Finance"}\`
    - name: healthCheckMonitorId
      value: "{{ healthCheckMonitorId }}"
      description: |
        The OCID of the health check monitor providing health data about the answers of the
        steering policy. A steering policy answer with \`rdata\` matching a monitored endpoint
        will use the health data of that endpoint. A steering policy answer with \`rdata\` not
        matching any monitored endpoint will be assumed healthy.
        **Note:** To use the Health Check monitoring feature in a steering policy, a monitor
        must be created using the Health Checks service first. For more information on how to
        create a monitor, please see [Managing Health Checks](/iaas/Content/HealthChecks/Tasks/managinghealthchecks.htm).
    - name: rules
      description: |
        The series of rules that will be processed in sequence to reduce the pool of answers
        to a response for any given request.
        The first rule receives a shuffled list of all answers, and every other rule receives
        the list of answers emitted by the one preceding it. The last rule populates the
        response.
      value:
        - description: "{{ description }}"
          ruleType: "{{ ruleType }}"
    - name: template
      value: "{{ template }}"
      description: |
        A set of predefined rules based on the desired purpose of the steering policy. Each
        template utilizes Traffic Management's rules in a different order to produce the desired
        results when answering DNS queries.
        **Example:** The \`FAILOVER\` template determines answers by filtering the policy's answers
        using the \`FILTER\` rule first, then the following rules in succession: \`HEALTH\`, \`PRIORITY\`,
        and \`LIMIT\`. This gives the domain dynamic failover capability.
        It is **strongly recommended** to use a template other than \`CUSTOM\` when creating
        a steering policy.
        All templates require the rule order to begin with an unconditional \`FILTER\` rule that keeps
        answers contingent upon \`answer.isDisabled != true\`, except for \`CUSTOM\`. A defined
        \`HEALTH\` rule must follow the \`FILTER\` rule if the policy references a \`healthCheckMonitorId\`.
        The last rule of a template must must be a \`LIMIT\` rule. For more information about templates
        and code examples, see [Traffic Management API Guide](/iaas/Content/TrafficManagement/Concepts/trafficmanagementapi.htm).
        **Template Types**
        * \`FAILOVER\` - Uses health check information on your endpoints to determine which DNS answers
        to serve. If an endpoint fails a health check, the answer for that endpoint will be removed
        from the list of available answers until the endpoint is detected as healthy.
        * \`LOAD_BALANCE\` - Distributes web traffic to specified endpoints based on defined weights.
        * \`ROUTE_BY_GEO\` - Answers DNS queries based on the query's geographic location. For a list of geographic
        locations to route by, see [Traffic Management Geographic Locations](/iaas/Content/TrafficManagement/Reference/trafficmanagementgeo.htm).
        * \`ROUTE_BY_ASN\` - Answers DNS queries based on the query's originating ASN.
        * \`ROUTE_BY_IP\` - Answers DNS queries based on the query's IP address.
        * \`CUSTOM\` - Allows a customized configuration of rules.
      valid_values: ['FAILOVER', 'LOAD_BALANCE', 'ROUTE_BY_GEO', 'ROUTE_BY_ASN', 'ROUTE_BY_IP', 'CUSTOM']
    - name: ttl
      value: {{ ttl }}
      description: |
        The Time To Live (TTL) for responses from the steering policy, in seconds.
        If not specified during creation, a value of 30 seconds will be used.
      default: 30
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
    - name: scope
      value: "{{ scope }}"
      description: Specifies to operate only on resources that have a matching DNS scope. 
      description: Specifies to operate only on resources that have a matching DNS scope. 
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

Updates the configuration of the specified steering policy.&lt;br /&gt;

```sql
UPDATE oci.dns.steering_policies
SET 
answers = '{{ answers }}',
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
freeformTags = '{{ freeformTags }}',
healthCheckMonitorId = '{{ healthCheckMonitorId }}',
rules = '{{ rules }}',
template = '{{ template }}',
ttl = {{ ttl }}
WHERE 
steeringPolicyId = '{{ steeringPolicyId }}' --required
AND region = '{{ region }}' --required
AND If-Match = '{{ If-Match}}'
AND If-Unmodified-Since = '{{ If-Unmodified-Since}}'
AND opc-request-id = '{{ opc-request-id}}'
AND scope = '{{ scope}}'
RETURNING
id,
answers,
compartmentId,
definedTags,
displayName,
freeformTags,
healthCheckMonitorId,
lifecycleState,
rules,
self,
template,
timeCreated,
ttl;
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

Deletes the specified steering policy.&lt;br /&gt;&lt;br /&gt;A `204` response indicates that the delete has been successful.&lt;br /&gt;Deletion will fail if the policy is attached to any zones. To detach a&lt;br /&gt;policy from a zone, see `DeleteSteeringPolicyAttachment`.&lt;br /&gt;

```sql
DELETE FROM oci.dns.steering_policies
WHERE steeringPolicyId = '{{ steeringPolicyId }}' --required
AND region = '{{ region }}' --required
AND If-Match = '{{ If-Match }}'
AND If-Unmodified-Since = '{{ If-Unmodified-Since }}'
AND opc-request-id = '{{ opc-request-id }}'
AND scope = '{{ scope }}'
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

Moves a steering policy into a different compartment.&lt;br /&gt;

```sql
EXEC oci.dns.steering_policies.change_compartment 
@steeringPolicyId='{{ steeringPolicyId }}' --required, 
@region='{{ region }}' --required, 
@If-Match='{{ If-Match }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@scope='{{ scope }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
</Tabs>
