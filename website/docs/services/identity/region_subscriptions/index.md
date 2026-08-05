--- 
title: region_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - region_subscriptions
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

Creates, updates, deletes, gets or lists a <code>region_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.identity.region_subscriptions" /></td></tr>
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

An object that represents your tenancy's access to a particular region (i.e., a subscription), the status of that&lt;br /&gt;access, and whether that region is the home region. For more information, see &#91;Managing Regions&#93;(/Content/Identity/regions/managingregions.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access,&lt;br /&gt;see &#91;Get Started with Policies&#93;(/Content/Identity/policiesgs/get-started-with-policies.htm).&lt;br /&gt;

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
    <td><CopyableCode code="isHomeRegion" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the region is the home region or not.</td>
</tr>
<tr>
    <td><CopyableCode code="regionKey" /></td>
    <td><code>string</code></td>
    <td>The region's key. See &#91;Regions and Availability Domains&#93;(/Content/General/Concepts/regions.htm) for the full list of supported 3-letter region codes.  Example: `PHX` </td>
</tr>
<tr>
    <td><CopyableCode code="regionName" /></td>
    <td><code>string</code></td>
    <td>The region's name. See &#91;Regions and Availability Domains&#93;(/Content/General/Concepts/regions.htm) for the full list of supported region names.  Example: `us-phoenix-1` </td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The region subscription status. (READY, IN_PROGRESS)</td>
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
    <td><a href="#parameter-tenancyId"><code>tenancyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the region subscriptions for the specified tenancy.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-tenancyId"><code>tenancyId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-regionKey"><code>regionKey</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a subscription to a region for a tenancy.&lt;br /&gt;</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-tenancyId">
    <td><CopyableCode code="tenancyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the tenancy.</td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
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

Lists the region subscriptions for the specified tenancy.

```sql
SELECT
isHomeRegion,
regionKey,
regionName,
status
FROM oci.identity.region_subscriptions
WHERE tenancyId = '{{ tenancyId }}' -- required
AND region = '{{ region }}' -- required
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

Creates a subscription to a region for a tenancy.&lt;br /&gt;

```sql
INSERT INTO oci.identity.region_subscriptions (
regionKey,
tenancyId,
region,
opc-retry-token
)
SELECT 
'{{ regionKey }}' /* required */,
'{{ tenancyId }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
isHomeRegion,
regionKey,
regionName,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_subscriptions
  props:
    - name: tenancyId
      value: "{{ tenancyId }}"
      description: Required parameter for the region_subscriptions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the region_subscriptions resource.
    - name: regionKey
      value: "{{ regionKey }}"
      description: |
        The regions's key. See [Regions and Availability Domains](/Content/General/Concepts/regions.htm) for
        the full list of supported 3-letter region codes.
        Example: \`PHX\`
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
`}</CodeBlock>

</TabItem>
</Tabs>
