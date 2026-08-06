--- 
title: zones
hide_title: false
hide_table_of_contents: false
keywords:
  - zones
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

Creates, updates, deletes, gets or lists a <code>zones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="zones" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.dns.zones" /></td></tr>
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

A response containing a single zone object.

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
    <td>The OCID of the zone.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the zone.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the zone.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).   **Example:** `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="dnssecConfig" /></td>
    <td><code>object</code></td>
    <td>DNSSEC configuration data.  A zone may have a maximum of 10 `DnssecKeyVersions`, regardless of signing key type. </td>
</tr>
<tr>
    <td><CopyableCode code="dnssecState" /></td>
    <td><code>string</code></td>
    <td>The state of DNSSEC on the zone.  For DNSSEC to function, every parent zone in the DNS tree up to the top-level domain (or an independent trust anchor) must also have DNSSEC correctly set up. After enabling DNSSEC, you must add a DS record to the zone's parent zone containing the `KskDnssecKeyVersion` data. You can find the DS data in the `dsData` attribute of the `KskDnssecKeyVersion`. Then, use the `PromoteZoneDnssecKeyVersion` operation to promote the `KskDnssecKeyVersion`.  New `KskDnssecKeyVersion`s are generated annually, a week before the existing `KskDnssecKeyVersion`'s expiration. To rollover a `KskDnssecKeyVersion`, you must replace the parent zone's DS record containing the old `KskDnssecKeyVersion` data with the data from the new `KskDnssecKeyVersion`.  To remove the old DS record without causing service disruption, wait until the old DS record's TTL has expired, and the new DS record has propagated. After the DS replacement has been completed, then the `PromoteZoneDnssecKeyVersion` operation must be called.  Metrics are emitted in the `oci_dns` namespace daily for each `KskDnssecKeyVersion` indicating how many days are left until expiration. We recommend that you set up alarms and notifications for KskDnssecKeyVersion expiration so that the necessary parent zone updates can be made and the `PromoteZoneDnssecKeyVersion` operation can be called.  Enabling DNSSEC results in additional records in DNS responses which increases their size and can cause higher response latency.  For more information, see &#91;DNSSEC&#93;(/iaas/Content/DNS/Concepts/dnssec.htm).  (ENABLED, DISABLED) (default: DISABLED, x-obmcs-top-level-enum: #/definitions/ZoneDnssecState)</td>
</tr>
<tr>
    <td><CopyableCode code="externalDownstreams" /></td>
    <td><code>array</code></td>
    <td>External secondary servers for the zone. This field is currently not supported when `zoneType` is `SECONDARY` or `scope` is `PRIVATE`. </td>
</tr>
<tr>
    <td><CopyableCode code="externalMasters" /></td>
    <td><code>array</code></td>
    <td>External master servers for the zone. `externalMasters` becomes a required parameter when the `zoneType` value is `SECONDARY`. </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).   **Example:** `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isProtected" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean flag indicating whether or not parts of the resource are unable to be explicitly managed. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the zone resource. (ACTIVE, CREATING, DELETED, DELETING, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="nameservers" /></td>
    <td><code>array</code></td>
    <td>The authoritative nameservers for the zone.</td>
</tr>
<tr>
    <td><CopyableCode code="resolutionMode" /></td>
    <td><code>string</code></td>
    <td>The resolution mode of a zone defines behavior related to how query responses can be handled. See &#91;Private DNS Zone Transparency&#93;(/Content/DNS/Tasks/privatedns.htm#use-cases__resolution) for more information.  (STATIC, TRANSPARENT, RTYPE_TRANSPARENT) (default: STATIC, x-obmcs-top-level-enum: #/definitions/ZoneResolutionMode)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The scope of the zone. (GLOBAL, PRIVATE) (x-obmcs-top-level-enum: #/definitions/Scope)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The canonical absolute URL of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="serial" /></td>
    <td><code>integer (int64)</code></td>
    <td>The current serial of the zone. As seen in the zone's SOA record. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created in "YYYY-MM-ddThh:mm:ssZ" format with a Z offset, as defined by RFC 3339.  **Example:** `2016-07-22T17:23:59:60Z` </td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version is the never-repeating, totally-orderable, version of the zone, from which the serial field of the zone's SOA record is derived. </td>
</tr>
<tr>
    <td><CopyableCode code="viewId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the private view containing the zone. This value will be null for zones in the global DNS, which are publicly resolvable and not part of a private view. </td>
</tr>
<tr>
    <td><CopyableCode code="zoneTransferServers" /></td>
    <td><code>array</code></td>
    <td>The OCI nameservers that transfer the zone data with external nameservers. </td>
</tr>
<tr>
    <td><CopyableCode code="zoneType" /></td>
    <td><code>string</code></td>
    <td>The type of the zone. Must be either `PRIMARY` or `SECONDARY`. `SECONDARY` is only supported for GLOBAL zones.  (PRIMARY, SECONDARY)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A DNS zone.&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>The OCID of the zone.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the zone.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment containing the zone.</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).   **Example:** `&#123;"Operations": &#123;"CostCenter": "42"&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="dnssecConfig" /></td>
    <td><code>object</code></td>
    <td>DNSSEC configuration data.  A zone may have a maximum of 10 `DnssecKeyVersions`, regardless of signing key type. </td>
</tr>
<tr>
    <td><CopyableCode code="dnssecState" /></td>
    <td><code>string</code></td>
    <td>The state of DNSSEC on the zone.  For DNSSEC to function, every parent zone in the DNS tree up to the top-level domain (or an independent trust anchor) must also have DNSSEC correctly set up. After enabling DNSSEC, you must add a DS record to the zone's parent zone containing the `KskDnssecKeyVersion` data. You can find the DS data in the `dsData` attribute of the `KskDnssecKeyVersion`. Then, use the `PromoteZoneDnssecKeyVersion` operation to promote the `KskDnssecKeyVersion`.  New `KskDnssecKeyVersion`s are generated annually, a week before the existing `KskDnssecKeyVersion`'s expiration. To rollover a `KskDnssecKeyVersion`, you must replace the parent zone's DS record containing the old `KskDnssecKeyVersion` data with the data from the new `KskDnssecKeyVersion`.  To remove the old DS record without causing service disruption, wait until the old DS record's TTL has expired, and the new DS record has propagated. After the DS replacement has been completed, then the `PromoteZoneDnssecKeyVersion` operation must be called.  Metrics are emitted in the `oci_dns` namespace daily for each `KskDnssecKeyVersion` indicating how many days are left until expiration. We recommend that you set up alarms and notifications for KskDnssecKeyVersion expiration so that the necessary parent zone updates can be made and the `PromoteZoneDnssecKeyVersion` operation can be called.  Enabling DNSSEC results in additional records in DNS responses which increases their size and can cause higher response latency.  For more information, see &#91;DNSSEC&#93;(/iaas/Content/DNS/Concepts/dnssec.htm).  (ENABLED, DISABLED) (default: DISABLED, x-obmcs-top-level-enum: #/definitions/ZoneDnssecState)</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).   **Example:** `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="isProtected" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean flag indicating whether or not parts of the resource are unable to be explicitly managed. </td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the zone resource. (ACTIVE, CREATING, DELETED, DELETING, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="resolutionMode" /></td>
    <td><code>string</code></td>
    <td>The resolution mode of a zone defines behavior related to how query responses can be handled. See &#91;Private DNS Zone Transparency&#93;(/Content/DNS/Tasks/privatedns.htm#use-cases__resolution) for more information.  (STATIC, TRANSPARENT, RTYPE_TRANSPARENT) (default: STATIC, x-obmcs-top-level-enum: #/definitions/ZoneResolutionMode)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The scope of the zone. (GLOBAL, PRIVATE) (x-obmcs-top-level-enum: #/definitions/Scope)</td>
</tr>
<tr>
    <td><CopyableCode code="self" /></td>
    <td><code>string (url)</code></td>
    <td>The canonical absolute URL of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="serial" /></td>
    <td><code>integer (int64)</code></td>
    <td>The current serial of the zone. As seen in the zone's SOA record. </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created in "YYYY-MM-ddThh:mm:ssZ" format with a Z offset, as defined by RFC 3339.  **Example:** `2016-07-22T17:23:59:60Z` </td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version is the never-repeating, totally-orderable, version of the zone, from which the serial field of the zone's SOA record is derived. </td>
</tr>
<tr>
    <td><CopyableCode code="viewId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the private view containing the zone. This value will be null for zones in the global DNS, which are publicly resolvable and not part of a private view. </td>
</tr>
<tr>
    <td><CopyableCode code="zoneType" /></td>
    <td><code>string</code></td>
    <td>The type of the zone. Must be either `PRIMARY` or `SECONDARY`. `SECONDARY` is only supported for GLOBAL zones.  (PRIMARY, SECONDARY)</td>
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
    <td><a href="#parameter-zoneNameOrId"><code>zoneNameOrId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-None-Match"><code>If-None-Match</code></a>, <a href="#parameter-If-Modified-Since"><code>If-Modified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-viewId"><code>viewId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td>Gets information about the specified zone, including its creation date, zone type, and serial.&lt;br /&gt;&lt;br /&gt;When the zone name is provided as a path parameter and `PRIVATE` is used for the scope query&lt;br /&gt;parameter then the viewId query parameter is required.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-nameContains"><code>nameContains</code></a>, <a href="#parameter-zoneType"><code>zoneType</code></a>, <a href="#parameter-timeCreatedGreaterThanOrEqualTo"><code>timeCreatedGreaterThanOrEqualTo</code></a>, <a href="#parameter-timeCreatedLessThan"><code>timeCreatedLessThan</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-viewId"><code>viewId</code></a>, <a href="#parameter-tsigKeyId"><code>tsigKeyId</code></a>, <a href="#parameter-dnssecState"><code>dnssecState</code></a></td>
    <td>Gets a list of all zones in the specified compartment.&lt;br /&gt;&lt;br /&gt;The collection can be filtered by name, time created, scope, associated view, and zone type.&lt;br /&gt;Filtering by view is only supported for private zones.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-viewId"><code>viewId</code></a></td>
    <td>Creates a new zone in the specified compartment.&lt;br /&gt;&lt;br /&gt;Private zones must have a zone type of `PRIMARY`. Creating a private zone at or under `oraclevcn.com`&lt;br /&gt;within the default protected view of a VCN-dedicated resolver is not permitted.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-zoneNameOrId"><code>zoneNameOrId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-viewId"><code>viewId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td>Updates the zone with the specified information.&lt;br /&gt;&lt;br /&gt;Global secondary zones may have their external masters updated. For more information about secondary&lt;br /&gt;zones, see &#91;Manage DNS Service Zone&#93;(/iaas/Content/DNS/Tasks/managingdnszones.htm). When the zone name&lt;br /&gt;is provided as a path parameter and `PRIVATE` is used for the scope query parameter then the viewId&lt;br /&gt;query parameter is required.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-zoneNameOrId"><code>zoneNameOrId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-viewId"><code>viewId</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td>Deletes the specified zone and all its steering policy attachments.&lt;br /&gt;&lt;br /&gt;A `204` response indicates that the zone has been successfully deleted. Protected zones cannot be deleted.&lt;br /&gt;When the zone name is provided as a path parameter and `PRIVATE` is used for the scope query parameter&lt;br /&gt;then the viewId query parameter is required.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-zoneId"><code>zoneId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Moves a zone into a different compartment.&lt;br /&gt;&lt;br /&gt;Protected zones cannot have their compartment changed. When the zone name is provided as a path&lt;br /&gt;parameter and `PRIVATE` is used for the scope query parameter then the viewId query parameter is&lt;br /&gt;required.&lt;br /&gt;&lt;br /&gt;**Note:** All SteeringPolicyAttachment objects associated with this zone will also be moved into&lt;br /&gt;the provided compartment.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#promote_zone_dnssec_key_version"><CopyableCode code="promote_zone_dnssec_key_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-zoneId"><code>zoneId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-dnssecKeyVersionUuid"><code>dnssecKeyVersionUuid</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Promotes a specified `DnssecKeyVersion` on the zone.&lt;br /&gt;&lt;br /&gt;If the `DnssecKeyVersion` identified in the request body is a key signing key (KSK) that is replacing&lt;br /&gt;another `DnssecKeyVersion`, then the old `DnssecKeyVersion` is scheduled for removal from the zone.&lt;br /&gt;&lt;br /&gt;For key signing keys (KSKs), you must create the DS record with the new key information **before** promoting&lt;br /&gt;the new key to establish a chain of trust. To avoid a service disruption, remove the old DS record as soon&lt;br /&gt;as its TTL (time to live) expires.&lt;br /&gt;&lt;br /&gt;For more information, see &#91;DNSSEC&#93;(/iaas/Content/DNS/Concepts/dnssec.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#stage_zone_dnssec_key_version"><CopyableCode code="stage_zone_dnssec_key_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-zoneId"><code>zoneId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-predecessorDnssecKeyVersionUuid"><code>predecessorDnssecKeyVersionUuid</code></a></td>
    <td><a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-If-Unmodified-Since"><code>If-Unmodified-Since</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>Stages a new `DnssecKeyVersion` on the zone. Staging is a process that generates a new "successor" key version&lt;br /&gt;that replaces an existing "predecessor" key version.&lt;br /&gt;**Note:** A new key-signing key (KSK) version is inert until you update the parent zone DS records.&lt;br /&gt;&lt;br /&gt;For more information, see the &#91;DNSSEC&#93;(/iaas/Content/DNS/Concepts/dnssec.htm) documentation.&lt;br /&gt;</td>
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
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-zoneId">
    <td><CopyableCode code="zoneId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the target zone.</td>
</tr>
<tr id="parameter-zoneNameOrId">
    <td><CopyableCode code="zoneNameOrId" /></td>
    <td><code>string</code></td>
    <td>The name or OCID of the target zone.</td>
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
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment the zone belongs to.  This parameter is deprecated and should be omitted. </td>
</tr>
<tr id="parameter-dnssecState">
    <td><CopyableCode code="dnssecState" /></td>
    <td><code>string</code></td>
    <td>Search for zones that have the given `DnssecState`. </td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A case-sensitive filter for zone names. Will match any zone with a name that equals the provided value. </td>
</tr>
<tr id="parameter-nameContains">
    <td><CopyableCode code="nameContains" /></td>
    <td><code>string</code></td>
    <td>Search by zone name. Will match any zone whose name (case-insensitive) contains the provided value. </td>
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
    <td>The field by which to sort zones.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The order to sort the resources. </td>
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
<tr id="parameter-tsigKeyId">
    <td><CopyableCode code="tsigKeyId" /></td>
    <td><code>string</code></td>
    <td>Search for zones that are associated with a TSIG key. </td>
</tr>
<tr id="parameter-viewId">
    <td><CopyableCode code="viewId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the view the zone is associated with. Required when accessing a private zone by name.</td>
</tr>
<tr id="parameter-zoneType">
    <td><CopyableCode code="zoneType" /></td>
    <td><code>string</code></td>
    <td>Search by zone type, `PRIMARY` or `SECONDARY`. Will match any zone whose type equals the provided value. </td>
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

Gets information about the specified zone, including its creation date, zone type, and serial.&lt;br /&gt;&lt;br /&gt;When the zone name is provided as a path parameter and `PRIVATE` is used for the scope query&lt;br /&gt;parameter then the viewId query parameter is required.&lt;br /&gt;

```sql
SELECT
id,
name,
compartmentId,
definedTags,
dnssecConfig,
dnssecState,
externalDownstreams,
externalMasters,
freeformTags,
isProtected,
lifecycleState,
nameservers,
resolutionMode,
scope,
self,
serial,
timeCreated,
version,
viewId,
zoneTransferServers,
zoneType
FROM oci.dns.zones
WHERE zoneNameOrId = '{{ zoneNameOrId }}' -- required
AND region = '{{ region }}' -- required
AND If-None-Match = '{{ If-None-Match }}'
AND If-Modified-Since = '{{ If-Modified-Since }}'
AND opc-request-id = '{{ opc-request-id }}'
AND scope = '{{ scope }}'
AND viewId = '{{ viewId }}'
AND compartmentId = '{{ compartmentId }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of all zones in the specified compartment.&lt;br /&gt;&lt;br /&gt;The collection can be filtered by name, time created, scope, associated view, and zone type.&lt;br /&gt;Filtering by view is only supported for private zones.&lt;br /&gt;

```sql
SELECT
id,
name,
compartmentId,
definedTags,
dnssecConfig,
dnssecState,
freeformTags,
isProtected,
lifecycleState,
resolutionMode,
scope,
self,
serial,
timeCreated,
version,
viewId,
zoneType
FROM oci.dns.zones
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND name = '{{ name }}'
AND nameContains = '{{ nameContains }}'
AND zoneType = '{{ zoneType }}'
AND timeCreatedGreaterThanOrEqualTo = '{{ timeCreatedGreaterThanOrEqualTo }}'
AND timeCreatedLessThan = '{{ timeCreatedLessThan }}'
AND lifecycleState = '{{ lifecycleState }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND scope = '{{ scope }}'
AND viewId = '{{ viewId }}'
AND tsigKeyId = '{{ tsigKeyId }}'
AND dnssecState = '{{ dnssecState }}'
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

Creates a new zone in the specified compartment.&lt;br /&gt;&lt;br /&gt;Private zones must have a zone type of `PRIMARY`. Creating a private zone at or under `oraclevcn.com`&lt;br /&gt;within the default protected view of a VCN-dedicated resolver is not permitted.&lt;br /&gt;

```sql
INSERT INTO oci.dns.zones (
compartmentId,
definedTags,
freeformTags,
migrationSource,
name,
region,
opc-request-id,
opc-retry-token,
compartmentId,
scope,
viewId
)
SELECT 
'{{ compartmentId }}' /* required */,
'{{ definedTags }}',
'{{ freeformTags }}',
'{{ migrationSource }}',
'{{ name }}' /* required */,
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}',
'{{ compartmentId }}' /* required */,
'{{ scope }}',
'{{ viewId }}'
RETURNING
id,
name,
compartmentId,
definedTags,
dnssecConfig,
dnssecState,
externalDownstreams,
externalMasters,
freeformTags,
isProtected,
lifecycleState,
nameservers,
resolutionMode,
scope,
self,
serial,
timeCreated,
version,
viewId,
zoneTransferServers,
zoneType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: zones
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the zones resource.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment containing the zone.
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        **Example:** \`{"Operations": {"CostCenter": "42"}}\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        **Example:** \`{"Department": "Finance"}\`
    - name: migrationSource
      value: "{{ migrationSource }}"
      description: |
        Discriminator that is used to determine whether to create a new zone (NONE) or to migrate an existing DynECT zone (DYNECT).
      valid_values: ['NONE', 'DYNECT']
      default: NONE
    - name: name
      value: "{{ name }}"
      description: |
        The name of the zone.
        Global zone names must be unique across all other zones within the realm. Private zone names must be unique
        within their view.
        Unicode characters will be converted into punycode, see [RFC 3492](https://tools.ietf.org/html/rfc3492).
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: The OCID of the compartment the zone belongs to.  This parameter is deprecated and should be omitted. 
      description: The OCID of the compartment the zone belongs to.  This parameter is deprecated and should be omitted. 
    - name: scope
      value: "{{ scope }}"
      description: Specifies to operate only on resources that have a matching DNS scope. 
      description: Specifies to operate only on resources that have a matching DNS scope. 
    - name: viewId
      value: "{{ viewId }}"
      description: The OCID of the view the resource is associated with.
      description: The OCID of the view the resource is associated with.
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

Updates the zone with the specified information.&lt;br /&gt;&lt;br /&gt;Global secondary zones may have their external masters updated. For more information about secondary&lt;br /&gt;zones, see &#91;Manage DNS Service Zone&#93;(/iaas/Content/DNS/Tasks/managingdnszones.htm). When the zone name&lt;br /&gt;is provided as a path parameter and `PRIVATE` is used for the scope query parameter then the viewId&lt;br /&gt;query parameter is required.&lt;br /&gt;

```sql
UPDATE oci.dns.zones
SET 
definedTags = '{{ definedTags }}',
dnssecState = '{{ dnssecState }}',
externalDownstreams = '{{ externalDownstreams }}',
externalMasters = '{{ externalMasters }}',
freeformTags = '{{ freeformTags }}',
resolutionMode = '{{ resolutionMode }}'
WHERE 
zoneNameOrId = '{{ zoneNameOrId }}' --required
AND region = '{{ region }}' --required
AND If-Match = '{{ If-Match}}'
AND If-Unmodified-Since = '{{ If-Unmodified-Since}}'
AND opc-request-id = '{{ opc-request-id}}'
AND scope = '{{ scope}}'
AND viewId = '{{ viewId}}'
AND compartmentId = '{{ compartmentId}}'
RETURNING
id,
name,
compartmentId,
definedTags,
dnssecConfig,
dnssecState,
externalDownstreams,
externalMasters,
freeformTags,
isProtected,
lifecycleState,
nameservers,
resolutionMode,
scope,
self,
serial,
timeCreated,
version,
viewId,
zoneTransferServers,
zoneType;
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

Deletes the specified zone and all its steering policy attachments.&lt;br /&gt;&lt;br /&gt;A `204` response indicates that the zone has been successfully deleted. Protected zones cannot be deleted.&lt;br /&gt;When the zone name is provided as a path parameter and `PRIVATE` is used for the scope query parameter&lt;br /&gt;then the viewId query parameter is required.&lt;br /&gt;

```sql
DELETE FROM oci.dns.zones
WHERE zoneNameOrId = '{{ zoneNameOrId }}' --required
AND region = '{{ region }}' --required
AND If-Match = '{{ If-Match }}'
AND If-Unmodified-Since = '{{ If-Unmodified-Since }}'
AND opc-request-id = '{{ opc-request-id }}'
AND scope = '{{ scope }}'
AND viewId = '{{ viewId }}'
AND compartmentId = '{{ compartmentId }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="change_compartment"
    values={[
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'promote_zone_dnssec_key_version', value: 'promote_zone_dnssec_key_version' },
        { label: 'stage_zone_dnssec_key_version', value: 'stage_zone_dnssec_key_version' }
    ]}
>
<TabItem value="change_compartment">

Moves a zone into a different compartment.&lt;br /&gt;&lt;br /&gt;Protected zones cannot have their compartment changed. When the zone name is provided as a path&lt;br /&gt;parameter and `PRIVATE` is used for the scope query parameter then the viewId query parameter is&lt;br /&gt;required.&lt;br /&gt;&lt;br /&gt;**Note:** All SteeringPolicyAttachment objects associated with this zone will also be moved into&lt;br /&gt;the provided compartment.&lt;br /&gt;

```sql
EXEC oci.dns.zones.change_compartment 
@zoneId='{{ zoneId }}' --required, 
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
<TabItem value="promote_zone_dnssec_key_version">

Promotes a specified `DnssecKeyVersion` on the zone.&lt;br /&gt;&lt;br /&gt;If the `DnssecKeyVersion` identified in the request body is a key signing key (KSK) that is replacing&lt;br /&gt;another `DnssecKeyVersion`, then the old `DnssecKeyVersion` is scheduled for removal from the zone.&lt;br /&gt;&lt;br /&gt;For key signing keys (KSKs), you must create the DS record with the new key information **before** promoting&lt;br /&gt;the new key to establish a chain of trust. To avoid a service disruption, remove the old DS record as soon&lt;br /&gt;as its TTL (time to live) expires.&lt;br /&gt;&lt;br /&gt;For more information, see &#91;DNSSEC&#93;(/iaas/Content/DNS/Concepts/dnssec.htm).&lt;br /&gt;

```sql
EXEC oci.dns.zones.promote_zone_dnssec_key_version 
@zoneId='{{ zoneId }}' --required, 
@region='{{ region }}' --required, 
@If-Match='{{ If-Match }}', 
@If-Unmodified-Since='{{ If-Unmodified-Since }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@scope='{{ scope }}' 
@@json=
'{
"dnssecKeyVersionUuid": "{{ dnssecKeyVersionUuid }}"
}'
;
```
</TabItem>
<TabItem value="stage_zone_dnssec_key_version">

Stages a new `DnssecKeyVersion` on the zone. Staging is a process that generates a new "successor" key version&lt;br /&gt;that replaces an existing "predecessor" key version.&lt;br /&gt;**Note:** A new key-signing key (KSK) version is inert until you update the parent zone DS records.&lt;br /&gt;&lt;br /&gt;For more information, see the &#91;DNSSEC&#93;(/iaas/Content/DNS/Concepts/dnssec.htm) documentation.&lt;br /&gt;

```sql
EXEC oci.dns.zones.stage_zone_dnssec_key_version 
@zoneId='{{ zoneId }}' --required, 
@region='{{ region }}' --required, 
@If-Match='{{ If-Match }}', 
@If-Unmodified-Since='{{ If-Unmodified-Since }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@scope='{{ scope }}' 
@@json=
'{
"predecessorDnssecKeyVersionUuid": "{{ predecessorDnssecKeyVersionUuid }}"
}'
;
```
</TabItem>
</Tabs>
