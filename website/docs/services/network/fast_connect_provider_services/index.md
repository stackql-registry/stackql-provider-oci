--- 
title: fast_connect_provider_services
hide_title: false
hide_table_of_contents: false
keywords:
  - fast_connect_provider_services
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

Creates, updates, deletes, gets or lists a <code>fast_connect_provider_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fast_connect_provider_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.network.fast_connect_provider_services" /></td></tr>
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

The provider service is being retrieved.

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the service offered by the provider. </td>
</tr>
<tr>
    <td><CopyableCode code="bandwithShapeManagement" /></td>
    <td><code>string</code></td>
    <td>Who is responsible for managing the virtual circuit bandwidth.  (CUSTOMER_MANAGED, PROVIDER_MANAGED, ORACLE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="customerAsnManagement" /></td>
    <td><code>string</code></td>
    <td>Who is responsible for managing the ASN information for the network at the other end of the connection from Oracle.  (CUSTOMER_MANAGED, PROVIDER_MANAGED, ORACLE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The location of the provider's website or portal. This portal is where you can get information about the provider service, create a virtual circuit connection from the provider to Oracle Cloud Infrastructure, and retrieve your provider service key for that virtual circuit connection.  Example: `https:​//example.com` </td>
</tr>
<tr>
    <td><CopyableCode code="privatePeeringBgpManagement" /></td>
    <td><code>string</code></td>
    <td>Who is responsible for managing the private peering BGP information.  (CUSTOMER_MANAGED, PROVIDER_MANAGED, ORACLE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="providerName" /></td>
    <td><code>string</code></td>
    <td>The name of the provider. </td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceKeyManagement" /></td>
    <td><code>string</code></td>
    <td>Who is responsible for managing the provider service key.  (CUSTOMER_MANAGED, PROVIDER_MANAGED, ORACLE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceName" /></td>
    <td><code>string</code></td>
    <td>The name of the service offered by the provider. </td>
</tr>
<tr>
    <td><CopyableCode code="publicPeeringBgpManagement" /></td>
    <td><code>string</code></td>
    <td>Who is responsible for managing the public peering BGP information.  (CUSTOMER_MANAGED, PROVIDER_MANAGED, ORACLE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="requiredTotalCrossConnects" /></td>
    <td><code>integer</code></td>
    <td>Total number of cross-connect or cross-connect groups required for the virtual circuit. </td>
</tr>
<tr>
    <td><CopyableCode code="supportedVirtualCircuitTypes" /></td>
    <td><code>array</code></td>
    <td>An array of virtual circuit types supported by this service. </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Provider service type.  (LAYER2, LAYER3)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A service offering from a supported provider. For more information,&lt;br /&gt;see &#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the service offered by the provider. </td>
</tr>
<tr>
    <td><CopyableCode code="bandwithShapeManagement" /></td>
    <td><code>string</code></td>
    <td>Who is responsible for managing the virtual circuit bandwidth.  (CUSTOMER_MANAGED, PROVIDER_MANAGED, ORACLE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="customerAsnManagement" /></td>
    <td><code>string</code></td>
    <td>Who is responsible for managing the ASN information for the network at the other end of the connection from Oracle.  (CUSTOMER_MANAGED, PROVIDER_MANAGED, ORACLE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The location of the provider's website or portal. This portal is where you can get information about the provider service, create a virtual circuit connection from the provider to Oracle Cloud Infrastructure, and retrieve your provider service key for that virtual circuit connection.  Example: `https:​//example.com` </td>
</tr>
<tr>
    <td><CopyableCode code="privatePeeringBgpManagement" /></td>
    <td><code>string</code></td>
    <td>Who is responsible for managing the private peering BGP information.  (CUSTOMER_MANAGED, PROVIDER_MANAGED, ORACLE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="providerName" /></td>
    <td><code>string</code></td>
    <td>The name of the provider. </td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceKeyManagement" /></td>
    <td><code>string</code></td>
    <td>Who is responsible for managing the provider service key.  (CUSTOMER_MANAGED, PROVIDER_MANAGED, ORACLE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="providerServiceName" /></td>
    <td><code>string</code></td>
    <td>The name of the service offered by the provider. </td>
</tr>
<tr>
    <td><CopyableCode code="publicPeeringBgpManagement" /></td>
    <td><code>string</code></td>
    <td>Who is responsible for managing the public peering BGP information.  (CUSTOMER_MANAGED, PROVIDER_MANAGED, ORACLE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="requiredTotalCrossConnects" /></td>
    <td><code>integer</code></td>
    <td>Total number of cross-connect or cross-connect groups required for the virtual circuit. </td>
</tr>
<tr>
    <td><CopyableCode code="supportedVirtualCircuitTypes" /></td>
    <td><code>array</code></td>
    <td>An array of virtual circuit types supported by this service. </td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Provider service type.  (LAYER2, LAYER3)</td>
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
    <td><a href="#parameter-providerServiceId"><code>providerServiceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the specified provider service.&lt;br /&gt;For more information, see &#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the service offerings from supported providers. You need this&lt;br /&gt;information so you can specify your desired provider and service&lt;br /&gt;offering when you create a virtual circuit.&lt;br /&gt;&lt;br /&gt;For the compartment ID, provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of your tenancy (the root compartment).&lt;br /&gt;&lt;br /&gt;For more information, see &#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;</td>
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
<tr id="parameter-providerServiceId">
    <td><CopyableCode code="providerServiceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the provider service.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
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

Gets the specified provider service.&lt;br /&gt;For more information, see &#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;

```sql
SELECT
id,
bandwithShapeManagement,
customerAsnManagement,
description,
privatePeeringBgpManagement,
providerName,
providerServiceKeyManagement,
providerServiceName,
publicPeeringBgpManagement,
requiredTotalCrossConnects,
supportedVirtualCircuitTypes,
type
FROM oci.network.fast_connect_provider_services
WHERE providerServiceId = '{{ providerServiceId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the service offerings from supported providers. You need this&lt;br /&gt;information so you can specify your desired provider and service&lt;br /&gt;offering when you create a virtual circuit.&lt;br /&gt;&lt;br /&gt;For the compartment ID, provide the &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of your tenancy (the root compartment).&lt;br /&gt;&lt;br /&gt;For more information, see &#91;FastConnect Overview&#93;(/iaas/Content/Network/Concepts/fastconnect.htm).&lt;br /&gt;

```sql
SELECT
id,
bandwithShapeManagement,
customerAsnManagement,
description,
privatePeeringBgpManagement,
providerName,
providerServiceKeyManagement,
providerServiceName,
publicPeeringBgpManagement,
requiredTotalCrossConnects,
supportedVirtualCircuitTypes,
type
FROM oci.network.fast_connect_provider_services
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
