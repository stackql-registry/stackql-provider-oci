--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
  - audit
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.audit.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

All the attributes of an audit event. For more information, see &#91;Viewing Audit Log Events&#93;(/iaas/Content/Audit/Tasks/viewinglogevents.htm).&lt;br /&gt;

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
    <td><CopyableCode code="cloudEventsVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the CloudEvents specification. The structure of the envelope follows the &#91;CloudEvents&#93;(https:​//github.com/cloudevents/spec) industry standard format hosted by the &#91;Cloud Native Computing Foundation ( CNCF)&#93;(https:​//www.cncf.io/).  Audit uses version 0.1 specification of the CloudEvents event envelope.  Example: `0.1` </td>
</tr>
<tr>
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The content type of the data contained in `data`.  Example: `application/json` </td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td>The payload of the event. Information within `data` comes from the resource emitting the event.  (x-example: &#123;&lt;br /&gt;  "eventGroupingId": null,&lt;br /&gt;  "eventName": "GetInstance",&lt;br /&gt;  "compartmentId": "ocid1.tenancy.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;",&lt;br /&gt;  "compartmentName": "compartmentA",&lt;br /&gt;  "resourceName": "my_instance",&lt;br /&gt;  "resourceId": "ocid1.instance.oc1.phx.&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;",&lt;br /&gt;  "availabilityDomain": "&lt;availability_domain&gt;",&lt;br /&gt;  "freeformTags": null,&lt;br /&gt;  "definedTags": null,&lt;br /&gt;  "identity": &#123;&lt;br /&gt;    "principalName": "ExampleName",&lt;br /&gt;    "principalId": "ocid1.user.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;",&lt;br /&gt;    "authType": "natv",&lt;br /&gt;    "callerName": null,&lt;br /&gt;    "callerId": null,&lt;br /&gt;    "tenantId": "ocid1.tenancy.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;",&lt;br /&gt;    "ipAddress": "172.24.80.88",&lt;br /&gt;    "credentials": null,&lt;br /&gt;    "userAgent": "Jersey/2.23 (HttpUrlConnection 1.8.0_212)",&lt;br /&gt;    "consoleSessionId": null&lt;br /&gt;  &#125;,&lt;br /&gt;  "request": &#123;&lt;br /&gt;    "id": "&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;",&lt;br /&gt;    "path": "/20160918/instances/ocid1.instance.oc1.phx.&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;",&lt;br /&gt;    "action": "GET",&lt;br /&gt;    "parameters": &#123;&#125;,&lt;br /&gt;    "headers": &#123;&lt;br /&gt;      "opc-principal": &#91;&lt;br /&gt;        "&#123;\"tenantId\":\"ocid1.tenancy.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;\",\"subjectId\":\"ocid1.user.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;\",\"claims\":&#91;&#123;\"key\":\"pstype\",\"value\":\"natv\",\"issuer\":\"authService.oracle.com\"&#125;,&#123;\"key\":\"h_host\",\"value\":\"iaas.r2.oracleiaas.com\",\"issuer\":\"h\"&#125;,&#123;\"key\":\"h_opc-request-id\",\"value\":\"&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;\",\"issuer\":\"h\"&#125;,&#123;\"key\":\"ptype\",\"value\":\"user\",\"issuer\":\"authService.oracle.com\"&#125;,&#123;\"key\":\"h_date\",\"value\":\"Wed, 18 Sep 2019 00:10:58 UTC\",\"issuer\":\"h\"&#125;,&#123;\"key\":\"h_accept\",\"value\":\"application/json\",\"issuer\":\"h\"&#125;,&#123;\"key\":\"authorization\",\"value\":\"Signature headers=\\\"date (request-target) host accept opc-request-id\\\",keyId=\\\"ocid1.tenancy.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;/ocid1.user.oc1..&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;/8c:b4:5f:18:e7:ec:db:08:b8:fa:d2:2a:7d:11:76:ac\\\",algorithm=\\\"rsa-pss-sha256\\\",signature=\\\"&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;\\\",version=\\\"1\\\"\",\"issuer\":\"h\"&#125;,&#123;\"key\":\"h_(request-target)\",\"value\":\"get /20160918/instances/ocid1.instance.oc1.phx.&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;\",\"issuer\":\"h\"&#125;&#93;&#125;"&lt;br /&gt;      &#93;,&lt;br /&gt;      "Accept": &#91;&lt;br /&gt;        "application/json"&lt;br /&gt;      &#93;,&lt;br /&gt;      "X-Oracle-Auth-Client-CN": &#91;&lt;br /&gt;        "splat-proxy-se-02302.node.ad2.r2"&lt;br /&gt;      &#93;,&lt;br /&gt;      "X-Forwarded-Host": &#91;&lt;br /&gt;        "compute-api.svc.ad1.r2"&lt;br /&gt;      &#93;,&lt;br /&gt;      "Connection": &#91;&lt;br /&gt;        "close"&lt;br /&gt;      &#93;,&lt;br /&gt;      "User-Agent": &#91;&lt;br /&gt;        "Jersey/2.23 (HttpUrlConnection 1.8.0_212)"&lt;br /&gt;      &#93;,&lt;br /&gt;      "X-Forwarded-For": &#91;&lt;br /&gt;        "172.24.80.88"&lt;br /&gt;      &#93;,&lt;br /&gt;      "X-Real-IP": &#91;&lt;br /&gt;        "172.24.80.88"&lt;br /&gt;      &#93;,&lt;br /&gt;      "oci-original-url": &#91;&lt;br /&gt;        "https:​//iaas.r2.oracleiaas.com/20160918/instances/ocid1.instance.oc1.phx.&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;"&lt;br /&gt;      &#93;,&lt;br /&gt;      "opc-request-id": &#91;&lt;br /&gt;        "&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;"&lt;br /&gt;      &#93;,&lt;br /&gt;      "Date": &#91;&lt;br /&gt;        "Wed, 18 Sep 2019 00:10:58 UTC"&lt;br /&gt;      &#93;&lt;br /&gt;    &#125;&lt;br /&gt;  &#125;,&lt;br /&gt;  "response": &#123;&lt;br /&gt;    "status": "200",&lt;br /&gt;    "responseTime": "2019-09-18T00:10:59.278Z",&lt;br /&gt;    "headers": &#123;&lt;br /&gt;      "ETag": &#91;&lt;br /&gt;        "&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;"&lt;br /&gt;      &#93;,&lt;br /&gt;      "Connection": &#91;&lt;br /&gt;        "close"&lt;br /&gt;      &#93;,&lt;br /&gt;      "Content-Length": &#91;&lt;br /&gt;        "1828"&lt;br /&gt;      &#93;,&lt;br /&gt;      "opc-request-id": &#91;&lt;br /&gt;        "&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;"&lt;br /&gt;      &#93;,&lt;br /&gt;      "Date": &#91;&lt;br /&gt;        "Wed, 18 Sep 2019 00:10:59 GMT"&lt;br /&gt;      &#93;,&lt;br /&gt;      "Content-Type": &#91;&lt;br /&gt;        "application/json"&lt;br /&gt;      &#93;&lt;br /&gt;    &#125;,&lt;br /&gt;    "payload": &#123;&lt;br /&gt;      "resourceName": "my_instance",&lt;br /&gt;      "id": "ocid1.instance.oc1.phx.&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;"&lt;br /&gt;    &#125;,&lt;br /&gt;    "message": null&lt;br /&gt;  &#125;,&lt;br /&gt;  "stateChange": &#123;&lt;br /&gt;    "previous": null,&lt;br /&gt;    "current": null&lt;br /&gt;  &#125;,&lt;br /&gt;  "additionalDetails": &#123;&lt;br /&gt;    "imageId": "ocid1.image.oc1.phx.&lt;var&gt;&lt;unique_ID&gt;&lt;/var&gt;",&lt;br /&gt;    "shape": "VM.Standard1.1",&lt;br /&gt;    "type": "CustomerVmi"&lt;br /&gt;  &#125;&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="eventId" /></td>
    <td><code>string</code></td>
    <td>The GUID of the event. </td>
</tr>
<tr>
    <td><CopyableCode code="eventTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the event occurred, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  Example: `2019-09-18T00:10:59.252Z` </td>
</tr>
<tr>
    <td><CopyableCode code="eventType" /></td>
    <td><code>string</code></td>
    <td>The type of event that happened.  The service that produces the event can also add, remove, or change the meaning of a field. A service implementing these type changes would publish a new version of an `eventType` and revise the `eventTypeVersion` field.  Example: `com.oraclecloud.ComputeApi.GetInstance` </td>
</tr>
<tr>
    <td><CopyableCode code="eventTypeVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the event type. This version applies to the payload of the event, not the envelope. Use `cloudEventsVersion` to determine the version of the envelope.  Example: `2.0` </td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source of the event.  Example: `ComputeApi` </td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-startTime"><code>startTime</code></a>, <a href="#parameter-endTime"><code>endTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Returns all the audit events processed for the specified compartment within the specified&lt;br /&gt;time range.&lt;br /&gt;</td>
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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr id="parameter-endTime">
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns events that were processed before this end date and time, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  For example, a start value of `2017-01-01T00:00:00Z` and an end value of `2017-01-02T00:00:00Z` will retrieve a list of all events processed on January 1, 2017. Similarly, a start value of `2017-01-01T00:00:00Z` and an end value of `2017-02-01T00:00:00Z` will result in a list of all events processed between January 1, 2017 and January 31, 2017. You can specify a value with granularity to the minute. Seconds (and milliseconds, if included) must be set to `0`. </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-startTime">
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns events that were processed at or after this start date and time, expressed in &#91;RFC 3339&#93;(https:​//tools.ietf.org/html/rfc3339) timestamp format.  For example, a start value of `2017-01-15T11:30:00Z` will retrieve a list of all events processed since 30 minutes after the 11th hour of January 15, 2017, in Coordinated Universal Time (UTC). You can specify a value with granularity to the minute. Seconds (and milliseconds, if included) must be set to `0`. </td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns all the audit events processed for the specified compartment within the specified&lt;br /&gt;time range.&lt;br /&gt;

```sql
SELECT
cloudEventsVersion,
contentType,
data,
eventId,
eventTime,
eventType,
eventTypeVersion,
source
FROM oci.audit.events
WHERE compartmentId = '{{ compartmentId }}' -- required
AND startTime = '{{ startTime }}' -- required
AND endTime = '{{ endTime }}' -- required
AND region = '{{ region }}' -- required
AND page = '{{ page }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
