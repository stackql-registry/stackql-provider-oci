--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.services" /></td></tr>
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

The `Service` is being retrieved.

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
    <td>The `Service` object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the `Service` object. This name can change and is not guaranteed to be unique.  Example: `OCI PHX Object Storage` </td>
</tr>
<tr>
    <td><CopyableCode code="cidrBlock" /></td>
    <td><code>string</code></td>
    <td>A string that represents the regional public IP address ranges for the Oracle service or services covered by this `Service` object. Also known as the `Service` object's *service CIDR label*.  When you set up a route rule to route traffic to the service gateway, use this value as the rule's destination. See &#91;Route Table&#93;(#/en/iaas/latest/RouteTable/). Also, when you set up a security list rule to cover traffic with the service gateway, use the `cidrBlock` value as the rule's destination (for an egress rule) or the source (for an ingress rule). See &#91;Security List&#93;(#/en/iaas/latest/SecurityList/).  Example: `oci-phx-objectstorage` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Oracle service or services covered by this `Service` object.  Example: `OCI PHX Object Storage` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An object that represents one or multiple Oracle services that you can enable for a&lt;br /&gt;&#91;ServiceGateway&#93;(#/en/iaas/latest/ServiceGateway/). In the User Guide topic&lt;br /&gt;&#91;Access to Oracle Services: Service Gateway&#93;(/iaas/Content/Network/Tasks/servicegateway.htm), the&lt;br /&gt;term *service CIDR label* is used to refer to the string that represents the regional public&lt;br /&gt;IP address ranges of the Oracle service or services covered by a given `Service` object. That&lt;br /&gt;unique string is the value of the `Service` object's `cidrBlock` attribute.&lt;br /&gt;

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
    <td>The `Service` object's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the `Service` object. This name can change and is not guaranteed to be unique.  Example: `OCI PHX Object Storage` </td>
</tr>
<tr>
    <td><CopyableCode code="cidrBlock" /></td>
    <td><code>string</code></td>
    <td>A string that represents the regional public IP address ranges for the Oracle service or services covered by this `Service` object. Also known as the `Service` object's *service CIDR label*.  When you set up a route rule to route traffic to the service gateway, use this value as the rule's destination. See &#91;Route Table&#93;(#/en/iaas/latest/RouteTable/). Also, when you set up a security list rule to cover traffic with the service gateway, use the `cidrBlock` value as the rule's destination (for an egress rule) or the source (for an ingress rule). See &#91;Security List&#93;(#/en/iaas/latest/SecurityList/).  Example: `oci-phx-objectstorage` </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Oracle service or services covered by this `Service` object.  Example: `OCI PHX Object Storage` </td>
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
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified &#91;Service&#93;(#/en/iaas/latest/Service/) object.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the available &#91;Service&#93;(#/en/iaas/latest/Service/) objects that you can enable for a&lt;br /&gt;service gateway in this region.&lt;br /&gt;</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
    <td><code>string</code></td>
    <td>The service's &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>For list pagination. The maximum number of results per page, or items to return in a paginated "List" call. For important details about how pagination works, see &#91;List Pagination&#93;(/iaas/Content/API/Concepts/usingapi.htm#nine).  Example: `50` </td>
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

Gets the specified &#91;Service&#93;(#/en/iaas/latest/Service/) object.&lt;br /&gt;

```sql
SELECT
id,
name,
cidrBlock,
description
FROM oci.network.services
WHERE serviceId = '{{ serviceId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the available &#91;Service&#93;(#/en/iaas/latest/Service/) objects that you can enable for a&lt;br /&gt;service gateway in this region.&lt;br /&gt;

```sql
SELECT
id,
name,
cidrBlock,
description
FROM oci.network.services
WHERE region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
