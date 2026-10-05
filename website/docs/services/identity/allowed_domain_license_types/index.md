--- 
title: allowed_domain_license_types
hide_title: false
hide_table_of_contents: false
keywords:
  - allowed_domain_license_types
  - identity
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

Creates, updates, deletes, gets or lists an <code>allowed_domain_license_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="allowed_domain_license_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.allowed_domain_license_types" /></td></tr>
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

(For tenancies that support identity domains) The 'AllowedDomainLicenseTypeSummary' object contains information about the license type of the identity domain.&lt;br /&gt;

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The license type name.  Example: "Oracle Apps Premium" </td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The license type description.</td>
</tr>
<tr>
    <td><CopyableCode code="licenseType" /></td>
    <td><code>string</code></td>
    <td>The license type identifier.  Example: "oracle-apps-premium" </td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-currentLicenseTypeName"><code>currentLicenseTypeName</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>(For tenancies that support identity domains) Lists the license types for identity domains supported by Oracle Cloud Infrastructure.&lt;br /&gt;(License types are also referred to as domain types.)&lt;br /&gt;&lt;br /&gt;If `currentLicenseTypeName` is provided, then the request returns license types that the identity domain with the specified license&lt;br /&gt;type name can change to. Otherwise, the request returns all valid license types currently supported.&lt;br /&gt;</td>
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
<tr id="parameter-currentLicenseTypeName">
    <td><CopyableCode code="currentLicenseTypeName" /></td>
    <td><code>string</code></td>
    <td>The license type of the identity domain.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
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

(For tenancies that support identity domains) Lists the license types for identity domains supported by Oracle Cloud Infrastructure.&lt;br /&gt;(License types are also referred to as domain types.)&lt;br /&gt;&lt;br /&gt;If `currentLicenseTypeName` is provided, then the request returns license types that the identity domain with the specified license&lt;br /&gt;type name can change to. Otherwise, the request returns all valid license types currently supported.&lt;br /&gt;

```sql
SELECT
name,
description,
licenseType
FROM oci.identity.allowed_domain_license_types
WHERE region = '{{ region }}' -- required
AND currentLicenseTypeName = '{{ currentLicenseTypeName }}'
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
