--- 
title: autonomous_databases
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_databases
  - database
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

Creates, updates, deletes, gets or lists an <code>autonomous_databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.database.autonomous_databases" /></td></tr>
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

Get the details of the specified Autonomous AI Database.

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="accessTypes" /></td>
    <td><code>array</code></td>
    <td>List of access types for an Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="actualUsedDataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The current amount of storage in use for user and system data, in terabytes (TB). </td>
</tr>
<tr>
    <td><CopyableCode code="allocatedStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The amount of storage currently allocated for the database tables and billed for, rounded up. When auto-scaling is not enabled, this value is equal to the `dataStorageSizeInTBs` value. You can compare this value to the `actualUsedDataStorageSizeInTBs` value to determine if a manual shrink operation is appropriate for your allocated storage.  **Note:** Auto-scaling does not automatically decrease allocated storage when data is deleted from the database. </td>
</tr>
<tr>
    <td><CopyableCode code="apexDetails" /></td>
    <td><code>object</code></td>
    <td>Oracle APEX AI Application Development is a low-code development platform that enables you to build scalable, secure enterprise apps, with world-class features. Autonomous AI Database with the APEX workload type is optimized to support APEX development. </td>
</tr>
<tr>
    <td><CopyableCode code="arePrimaryWhitelistedIpsUsed" /></td>
    <td><code>boolean</code></td>
    <td>This field will be null if the Autonomous AI Database is not Data Guard enabled or Access Control is disabled. It's value would be `TRUE` if Autonomous AI Database is Data Guard enabled and Access Control is enabled and if the Autonomous AI Database uses primary IP access control list (ACL) for standby. It's value would be `FALSE` if Autonomous AI Database is Data Guard enabled and Access Control is enabled and if the Autonomous AI Database uses different IP access control list (ACL) for standby compared to primary. </td>
</tr>
<tr>
    <td><CopyableCode code="autoRefreshFrequencyInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The frequency a refreshable clone is refreshed after auto-refresh is enabled. The minimum is 1 hour. The maximum is 7 days. The date and time that auto-refresh is enabled is controlled by the `timeOfAutoRefreshStart` parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="autoRefreshPointLagInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The time, in seconds, the data of the refreshable clone lags the primary database at the point of refresh. The minimum is 0 minutes (0 mins means refresh to the latest available timestamp). The maximum is 7 days. The lag time increases after refreshing until the next data refresh happens.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousContainerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The Autonomous Container Database &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm). Used only by Autonomous AI Database on Dedicated Exadata Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousMaintenanceScheduleType" /></td>
    <td><code>string</code></td>
    <td>The maintenance schedule type of the Autonomous AI Database Serverless. An EARLY maintenance schedule follows a schedule applying patches prior to the REGULAR schedule. A REGULAR maintenance schedule follows the normal cycle  (EARLY, REGULAR)</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain where the Autonomous AI Database Serverless instance is located.</td>
</tr>
<tr>
    <td><CopyableCode code="availableUpgradeVersions" /></td>
    <td><code>array</code></td>
    <td>List of Oracle AI Database versions available for a database upgrade. If there are no version upgrades available, this list is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="backupConfig" /></td>
    <td><code>object</code></td>
    <td>Autonomous AI Database configuration details for storing &#91;manual backups&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/adbsa/backup-restore.html#GUID-9035DFB8-4702-4CEB-8281-C2A303820809) in the &#91;Object Storage&#93;(/Content/Object/Concepts/objectstorageoverview.htm) service. </td>
</tr>
<tr>
    <td><CopyableCode code="byolComputeCountLimit" /></td>
    <td><code>number (float)</code></td>
    <td>The maximum number of CPUs allowed with a Bring Your Own License (BYOL), including those used for auto-scaling, disaster recovery, tools, etc. Any CPU usage above this limit is considered as License Included and billed.</td>
</tr>
<tr>
    <td><CopyableCode code="characterSet" /></td>
    <td><code>string</code></td>
    <td>The character set for the Autonomous AI Database.  The default is AL32UTF8. Allowed values are:  AL32UTF8, AR8ADOS710, AR8ADOS720, AR8APTEC715, AR8ARABICMACS, AR8ASMO8X, AR8ISO8859P6, AR8MSWIN1256, AR8MUSSAD768, AR8NAFITHA711, AR8NAFITHA721, AR8SAKHR706, AR8SAKHR707, AZ8ISO8859P9E, BG8MSWIN, BG8PC437S, BLT8CP921, BLT8ISO8859P13, BLT8MSWIN1257, BLT8PC775, BN8BSCII, CDN8PC863, CEL8ISO8859P14, CL8ISO8859P5, CL8ISOIR111, CL8KOI8R, CL8KOI8U, CL8MACCYRILLICS, CL8MSWIN1251, EE8ISO8859P2, EE8MACCES, EE8MACCROATIANS, EE8MSWIN1250, EE8PC852, EL8DEC, EL8ISO8859P7, EL8MACGREEKS, EL8MSWIN1253, EL8PC437S, EL8PC851, EL8PC869, ET8MSWIN923, HU8ABMOD, HU8CWI2, IN8ISCII, IS8PC861, IW8ISO8859P8, IW8MACHEBREWS, IW8MSWIN1255, IW8PC1507, JA16EUC, JA16EUCTILDE, JA16SJIS, JA16SJISTILDE, JA16VMS, KO16KSC5601, KO16KSCCS, KO16MSWIN949, LA8ISO6937, LA8PASSPORT, LT8MSWIN921, LT8PC772, LT8PC774, LV8PC1117, LV8PC8LR, LV8RST104090, N8PC865, NE8ISO8859P10, NEE8ISO8859P4, RU8BESTA, RU8PC855, RU8PC866, SE8ISO8859P3, TH8MACTHAIS, TH8TISASCII, TR8DEC, TR8MACTURKISHS, TR8MSWIN1254, TR8PC857, US7ASCII, US8PC437, UTF8, VN8MSWIN1258, VN8VN3, WE8DEC, WE8DG, WE8ISO8859P1, WE8ISO8859P15, WE8ISO8859P9, WE8MACROMAN8S, WE8MSWIN1252, WE8NCR4970, WE8NEXTSTEP, WE8PC850, WE8PC858, WE8PC860, WE8ROMAN8, ZHS16CGB231280, ZHS16GBK, ZHT16BIG5, ZHT16CCDC, ZHT16DBT, ZHT16HKSCS, ZHT16MSWIN950, ZHT32EUC, ZHT32SOPS, ZHT32TRIS </td>
</tr>
<tr>
    <td><CopyableCode code="cloneTableSpaceList" /></td>
    <td><code>array</code></td>
    <td>A list of the source Autonomous AI Database's table space number(s) used to create this partial clone from the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="cloneType" /></td>
    <td><code>string</code></td>
    <td>The Autonomous AI Database clone type. (FULL, METADATA, PARTIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterPlacementGroupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the cluster placement group of the Autonomous Serverless Database.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeCount" /></td>
    <td><code>number (float)</code></td>
    <td>The compute amount (CPUs) available to the database. Minimum and maximum values depend on the compute model and whether the database is an Autonomous AI Database Serverless instance or an Autonomous AI Database on Dedicated Exadata Infrastructure. The 'ECPU' compute model requires a minimum value of one, for databases in the elastic resource pool and minimum value of two, otherwise. Required when using the `computeModel` parameter. When using `cpuCoreCount` parameter, it is an error to specify computeCount to a non-null value. Providing `computeModel` and `computeCount` is the preferred method for both OCPU and ECPU.  (x-default-description: Null used when unspecified.)</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Base Database, Exadata Infrastructure, VM Cluster and Autonomous AI Database.  (ECPU, OCPU) (x-default-description: Null used when unspecified.)</td>
</tr>
<tr>
    <td><CopyableCode code="connectionStrings" /></td>
    <td><code>object</code></td>
    <td>Connection strings to connect to an Oracle Autonomous AI Database.  Example output for connection strings. See &#91;DatabaseConnectionStringProfile&#93;(#/en/database/latest/datatypes/DatabaseConnectionStringProfile) for additional details:        "connectionStrings": &#123;         "allConnectionStrings": &#123;           "HIGH": "adb.region.oraclecloud.com:1522/unique_id_databasename_high.adwc.oraclecloud.com",           "LOW": "adb.region.oraclecloud.com:1522/unique_id_databasename_low.adwc.oraclecloud.com",           "MEDIUM": "adb.region.oraclecloud.com:1522/unique_id_databasename_medium.adwc.oraclecloud.com"         &#125;,         "profiles": &#91;           &#123;             "displayName": "databasename_high",             "value": "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.region.oraclecloud.com))(connect_data=(service_name=unique_id_databasename_high.adwc.oraclecloud.com))(security=(ssl_server_cert_dn="CN=adwc.uscom-east-1.oraclecloud.com,OU=Oracle BMCS US,O=Oracle Corporation,L=Redwood City,ST=California,C=US")))",             "consumerGroup": "HIGH",             "protocol": "TCPS",             "tlsAuthentication": "MUTUAL",             "hostFormat": "FQDN",             "sessionMode": "DIRECT",             "syntaxFormat": "LONG"           &#125;,           &#123;             "displayName": "databasename_low",             "value": "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.region.oraclecloud.com))(connect_data=(service_name=unique_id_databasename_low.adwc.oraclecloud.com))(security=(ssl_server_cert_dn="CN=adwc.uscom-east-1.oraclecloud.com,OU=Oracle BMCS US,O=Oracle Corporation,L=Redwood City,ST=California,C=US")))",             "consumerGroup": "LOW",             "protocol": "TCPS",             "tlsAuthentication": "MUTUAL",             "hostFormat": "FQDN",             "sessionMode": "DIRECT",             "syntaxFormat": "LONG"           &#125;,           &#123;             "displayName": "databasename_medium",             "value": "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.region.oraclecloud.com))(connect_data=(service_name=unique_id_databasename_medium.adwc.oraclecloud.com))(security=(ssl_server_cert_dn="CN=adwc.uscom-east-1.oraclecloud.com,OU=Oracle BMCS US,O=Oracle Corporation,L=Redwood City,ST=California,C=US")))",             "consumerGroup": "MEDIUM",             "protocol": "TCPS",             "tlsAuthentication": "MUTUAL",             "hostFormat": "FQDN",             "sessionMode": "DIRECT",             "syntaxFormat": "LONG"           &#125;         &#93;,         "dedicated": null,         "high": "adb.region.oraclecloud.com:1522/unique_id_databasename_high.adwc.oraclecloud.com",         "low": "adb.region.oraclecloud.com:1522/unique_id_databasename_low.adwc.oraclecloud.com",         "medium": "adb.region.oraclecloud.com:1522/unique_id_databasename_medium.adwc.oraclecloud.com"       &#125; </td>
</tr>
<tr>
    <td><CopyableCode code="connectionUrls" /></td>
    <td><code>object</code></td>
    <td>The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance within your VCN or that has a direct connection to your VCN. Note that these URLs are provided by the console only for databases on &#91;dedicated Exadata infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html).  Example: `&#123;"sqlDevWebUrl": "https:​//&lt;hostname&gt;/ords...", "apexUrl", "https:​//&lt;hostname&gt;/ords..."&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores to be made available to the database. When the ECPU is selected, the value for cpuCoreCount is 0. For Autonomous AI Database on Dedicated Exadata infrastructure, the maximum number of cores is determined by the infrastructure shape. See &#91;Characteristics of Infrastructure Shapes&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbde/) for shape details.  **Note:** This parameter cannot be used with the `ocpuCount` parameter. </td>
</tr>
<tr>
    <td><CopyableCode code="customerContacts" /></td>
    <td><code>array</code></td>
    <td>Customer Contacts.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSafeStatus" /></td>
    <td><code>string</code></td>
    <td>Status of the Data Safe registration for this Autonomous AI Database. (REGISTERING, REGISTERED, DEREGISTERING, NOT_REGISTERED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The quantity of data in the database, in gigabytes.  For Autonomous AI Transaction Processing databases using ECPUs on Serverless Infrastructure, this value is always populated. In all the other cases, this value will be null and `dataStorageSizeInTBs` will be populated instead. </td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInTBs" /></td>
    <td><code>integer</code></td>
    <td>The quantity of data in the database, in terabytes.  The following points apply to Autonomous AI Databases on Serverless Infrastructure: - This is an integer field whose value remains null when the data size is in GBs and cannot be converted to TBs (by dividing the GB value by 1024) without rounding error. - To get the exact value of data storage size without rounding error, please see `dataStorageSizeInGBs` of Autonomous AI Database. </td>
</tr>
<tr>
    <td><CopyableCode code="databaseEdition" /></td>
    <td><code>string</code></td>
    <td>The Oracle AI Database Edition that applies to the Autonomous AI Databases.  (STANDARD_EDITION, ENTERPRISE_EDITION)</td>
</tr>
<tr>
    <td><CopyableCode code="databaseManagementStatus" /></td>
    <td><code>string</code></td>
    <td>Status of Database Management for this Autonomous AI Database. (ENABLING, ENABLED, DISABLING, NOT_ENABLED, FAILED_ENABLING, FAILED_DISABLING)</td>
</tr>
<tr>
    <td><CopyableCode code="dataguardRegionType" /></td>
    <td><code>string</code></td>
    <td>**Deprecated.** The Autonomous Data Guard region type of the Autonomous AI Database. For Autonomous AI Database Serverless, Autonomous Data Guard associations have designated primary and standby regions, and these region types do not change when the database changes roles. The standby regions in Autonomous Data Guard associations can be the same region designated as the primary region, or they can be remote regions. Certain database administrative operations may be available only in the primary region of the Autonomous Data Guard association, and cannot be performed when the database using the primary role is operating in a remote Autonomous Data Guard standby region.  (PRIMARY_DG_REGION, REMOTE_STANDBY_DG_REGION)</td>
</tr>
<tr>
    <td><CopyableCode code="dbName" /></td>
    <td><code>string</code></td>
    <td>The database name.</td>
</tr>
<tr>
    <td><CopyableCode code="dbToolsDetails" /></td>
    <td><code>array</code></td>
    <td>The list of database tools details.  This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, isLocalDataGuardEnabled, or isFreeTier.  (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="dbVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle AI Database version for Autonomous AI Database. When you specify 23ai for dbversion, the system will provision a 23ai database, but the UI will display it as 26ai. When you specify 26ai for dbversion, the system will provision and display a 26ai database as expected. For new databases, it is recommended to use either 19c or 26ai.  **Note** Starting December 2026, 23ai will not be supported as a valid value for this parameter. </td>
</tr>
<tr>
    <td><CopyableCode code="dbWorkload" /></td>
    <td><code>string</code></td>
    <td>The Autonomous AI Database workload type. The following values are valid: - OLTP - indicates an Autonomous AI Transaction Processing database - DW - indicates an Autonomous AI Lakehouse database - AJD - indicates an Autonomous AI JSON Database - APEX - indicates an Autonomous AI Database with the Oracle APEX AI Application Development workload type. - LH - indicates an Oracle Autonomous AI Lakehouse database  **Note** Starting December 2026, DW will not be supported as a valid value for this parameter. When creating an Autonomous AI Database, if this parameter is not specified, the default value is `OLTP`.   This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.  (OLTP, DW, AJD, APEX, LH)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="disasterRecoveryRegionType" /></td>
    <td><code>string</code></td>
    <td>**Deprecated.** The disaster recovery (DR) region type of the Autonomous AI Database. For Autonomous AI Database Serverless instances, DR associations have designated primary and standby regions. These region types do not change when the database changes roles. The standby region in DR associations can be the same region as the primary region, or they can be in a remote regions. Some database administration operations may be available only in the primary region of the DR association, and cannot be performed when the database using the primary role is operating in a remote region.  (PRIMARY, REMOTE)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Autonomous AI Database. The name does not have to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKey" /></td>
    <td><code>object</code></td>
    <td>Details of the Autonomous AI Database encryption key.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKeyHistoryEntry" /></td>
    <td><code>array</code></td>
    <td>Key History Entry.</td>
</tr>
<tr>
    <td><CopyableCode code="failedDataRecoveryInSeconds" /></td>
    <td><code>integer</code></td>
    <td>Indicates the number of seconds of data loss for a Data Guard failover.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="inMemoryAreaInGBs" /></td>
    <td><code>integer</code></td>
    <td>The area assigned to In-Memory tables in Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="inMemoryPercentage" /></td>
    <td><code>integer</code></td>
    <td>The percentage of the System Global Area(SGA) assigned to In-Memory tables in Autonomous AI Database. This property is applicable only to Autonomous AI Databases on the Exadata Cloud@Customer platform.</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructureType" /></td>
    <td><code>string</code></td>
    <td>The infrastructure type this resource belongs to.  (CLOUD, CLOUD_AT_CUSTOMER)</td>
</tr>
<tr>
    <td><CopyableCode code="isAccessControlEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the database-level access control is enabled. If disabled, database access is defined by the network security rules. If enabled, database access is restricted to the IP addresses defined by the rules specified with the `whitelistedIps` property. While specifying `whitelistedIps` rules is optional,  if database-level access control is enabled and no rules are specified, the database will become inaccessible. The rules can be added later using the `UpdateAutonomousDatabase` API operation or edit option in console. When creating a database clone, the desired access control setting should be specified. By default, database-level access control will be disabled for the clone.  This property is applicable only to Autonomous AI Databases on the Exadata Cloud@Customer platform. For Autonomous AI Database Serverless instances, `whitelistedIps` is used. </td>
</tr>
<tr>
    <td><CopyableCode code="isAutoScalingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if auto scaling is enabled for the Autonomous AI Database CPU core count. The default value is `TRUE`. </td>
</tr>
<tr>
    <td><CopyableCode code="isAutoScalingForStorageEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if auto scaling is enabled for the Autonomous AI Database storage. The default value is `FALSE`. </td>
</tr>
<tr>
    <td><CopyableCode code="isBackupRetentionLocked" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the Autonomous AI Database is backup retention locked.</td>
</tr>
<tr>
    <td><CopyableCode code="isDataGuardEnabled" /></td>
    <td><code>boolean</code></td>
    <td>**Deprecated.** Indicates whether the Autonomous AI Database has local (in-region) Data Guard enabled. Not applicable to cross-region Autonomous Data Guard associations, or to Autonomous AI Databases using dedicated Exadata infrastructure or Exadata Cloud@Customer infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="isDedicated" /></td>
    <td><code>boolean</code></td>
    <td>True if the database uses &#91;dedicated Exadata infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html). </td>
</tr>
<tr>
    <td><CopyableCode code="isDevTier" /></td>
    <td><code>boolean</code></td>
    <td>Autonomous AI Database for Developers are fixed-shape Autonomous AI Databases that developers can use to build and test new applications. On Serverless, these are low-cost and billed per instance, on Dedicated and Cloud@Customer there is no additional cost to create Developer databases. Developer databases come with limited resources and is not intended for large-scale testing and production deployments. When you need more compute or storage resources, you may upgrade to a full paid production database. </td>
</tr>
<tr>
    <td><CopyableCode code="isFreeTier" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if this is an Always Free resource. The default value is false. Note that Always Free Autonomous AI Databases have 1 CPU and 20GB of memory. For Always Free databases, memory and CPU cannot be scaled.  This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isLocalDataGuardEnabled </td>
</tr>
<tr>
    <td><CopyableCode code="isLocalDataGuardEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Autonomous AI Database has local (in-region) Data Guard enabled. Not applicable to cross-region Autonomous Data Guard associations, or to Autonomous AI Databases using dedicated Exadata infrastructure or Exadata Cloud@Customer infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="isMtlsConnectionRequired" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the Autonomous AI Database requires mTLS connections.  This may not be updated in parallel with any of the following: licenseModel, databaseEdition, cpuCoreCount, computeCount, dataStorageSizeInTBs, whitelistedIps, openMode, permissionLevel, db-workload, privateEndpointLabel, nsgIds, customerContacts, dbVersion, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.  Service Change: The default value of the isMTLSConnectionRequired attribute will change from true to false on July 1, 2023 in the following APIs: - CreateAutonomousDatabase - GetAutonomousDatabase - UpdateAutonomousDatabase Details: Prior to the July 1, 2023 change, the isMTLSConnectionRequired attribute default value was true. This applies to Autonomous AI Database Serverless. Does this impact me? If you use or maintain custom scripts or Terraform scripts referencing the CreateAutonomousDatabase, GetAutonomousDatabase, or UpdateAutonomousDatabase APIs, you want to check, and possibly modify, the scripts for the changed default value of the attribute. Should you choose not to leave your scripts unchanged, the API calls containing this attribute will continue to work, but the default value will switch from true to false. How do I make this change? Using either OCI SDKs or command line tools, update your custom scripts to explicitly set the isMTLSConnectionRequired attribute to true. </td>
</tr>
<tr>
    <td><CopyableCode code="isPreview" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the Autonomous AI Database version is a preview version.</td>
</tr>
<tr>
    <td><CopyableCode code="isReconnectCloneEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the refreshable clone can be reconnected to its source database.</td>
</tr>
<tr>
    <td><CopyableCode code="isRefreshableClone" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the Autonomous AI Database is a refreshable clone.  This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier. </td>
</tr>
<tr>
    <td><CopyableCode code="isRemoteDataGuardEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Autonomous AI Database has Cross Region Data Guard enabled. Not applicable to Autonomous AI Databases using dedicated Exadata infrastructure or Exadata Cloud@Customer infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="keyHistoryEntry" /></td>
    <td><code>array</code></td>
    <td>Key History Entry.</td>
</tr>
<tr>
    <td><CopyableCode code="keyStoreId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the key store of Oracle Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="keyStoreWalletName" /></td>
    <td><code>string</code></td>
    <td>The wallet name for Oracle Key Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyLifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>KMS key lifecycle details.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyVersionId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation. Autonomous AI Database Serverless does not use key versions, hence is not applicable for Autonomous AI Database Serverless instances. </td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the Oracle Autonomous AI Database. Bring your own license (BYOL) allows you to apply your current on-premises Oracle software licenses to equivalent, highly automated Oracle services in the cloud. License Included allows you to subscribe to new Oracle AI Database software licenses and the Oracle AI Database service. Note that when provisioning an &#91;Autonomous AI Database on dedicated Exadata infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html), this attribute must be null. It is already set at the Autonomous Exadata Infrastructure level. When provisioning an &#91;Autonomous AI Database Serverless&#93; (https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html) database, if a value is not specified, the system defaults the value to `BRING_YOUR_OWN_LICENSE`. Bring your own license (BYOL) also allows you to select the DB edition using the optional parameter.  This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, dataStorageSizeInTBs, adminPassword, isMTLSConnectionRequired, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Autonomous AI Database. (PROVISIONING, AVAILABLE, STOPPING, STOPPED, STARTING, TERMINATING, TERMINATED, UNAVAILABLE, RESTORE_IN_PROGRESS, RESTORE_FAILED, BACKUP_IN_PROGRESS, SCALE_IN_PROGRESS, AVAILABLE_NEEDS_ATTENTION, UPDATING, MAINTENANCE_IN_PROGRESS, RESTARTING, RECREATING, ROLE_CHANGE_IN_PROGRESS, UPGRADING, INACCESSIBLE, STANDBY, TRANSPORTING)</td>
</tr>
<tr>
    <td><CopyableCode code="localAdgAutoFailoverMaxDataLossLimit" /></td>
    <td><code>integer</code></td>
    <td>Parameter that allows users to select an acceptable maximum data loss limit in seconds, up to which Automatic Failover will be triggered when necessary for a Local Autonomous Data Guard</td>
</tr>
<tr>
    <td><CopyableCode code="localDisasterRecoveryType" /></td>
    <td><code>string</code></td>
    <td>Indicates the local disaster recovery (DR) type of the Autonomous AI Database Serverless instance. Autonomous Data Guard (ADG) DR type provides business critical DR with a faster recovery time objective (RTO) during failover or switchover. Backup-based DR type provides lower cost DR with a slower RTO during failover or switchover.  (x-obmcs-enumref: #/definitions/DisasterRecoveryConfiguration/disasterRecoveryType)</td>
</tr>
<tr>
    <td><CopyableCode code="localStandbyDb" /></td>
    <td><code>object</code></td>
    <td>Autonomous Data Guard standby database details. </td>
</tr>
<tr>
    <td><CopyableCode code="longTermBackupSchedule" /></td>
    <td><code>object</code></td>
    <td>Details for the long-term backup schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceTargetComponent" /></td>
    <td><code>string</code></td>
    <td>The component chosen for maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="memoryPerOracleComputeUnitInGBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory (in GBs) to be enabled per OCPU or ECPU. </td>
</tr>
<tr>
    <td><CopyableCode code="ncharacterSet" /></td>
    <td><code>string</code></td>
    <td>The national character set for the Autonomous AI Database.  The default is AL16UTF16. Allowed values are: AL16UTF16 or UTF8. </td>
</tr>
<tr>
    <td><CopyableCode code="netServicesArchitecture" /></td>
    <td><code>string</code></td>
    <td>Enabling SHARED server architecture enables a database server to allow many client processes to share very few server processes, thereby increasing the number of supported users.  (DEDICATED, SHARED)</td>
</tr>
<tr>
    <td><CopyableCode code="nextLongTermBackupTimeStamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the next long-term backup would be created.</td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="ocpuCount" /></td>
    <td><code>number (float)</code></td>
    <td>The number of OCPU cores to be made available to the database.  The following points apply: - For Autonomous AI Databases on Dedicated Exadata Infrastructure, to provision less than 1 core, enter a fractional value in an increment of 0.1. For example, you can provision 0.3 or 0.4 cores, but not 0.35 cores. (Note that fractional OCPU values are not supported for Autonomous AI Database Serverless instances.) - To provision cores, enter an integer between 1 and the maximum number of cores available for the infrastructure shape. For example, you can provision 2 cores or 3 cores, but not 2.5 cores. This applies to Autonomous AI Databases on both serverless and dedicated Exadata infrastructure. - For Autonomous AI Database Serverless instances, this parameter is not used.  For Autonomous AI Databases on Dedicated Exadata Infrastructure, the maximum number of cores is determined by the infrastructure shape. See &#91;Characteristics of Infrastructure Shapes&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbde/index.html) for shape details.  **Note:** This parameter cannot be used with the `cpuCoreCount` parameter. </td>
</tr>
<tr>
    <td><CopyableCode code="openMode" /></td>
    <td><code>string</code></td>
    <td>Indicates the Autonomous AI Database mode. The database can be opened in `READ_ONLY` or `READ_WRITE` mode.  This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.  (READ_ONLY, READ_WRITE) (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="operationsInsightsStatus" /></td>
    <td><code>string</code></td>
    <td>Status of Operations Insights for this Autonomous AI Database. (ENABLING, ENABLED, DISABLING, NOT_ENABLED, FAILED_ENABLING, FAILED_DISABLING)</td>
</tr>
<tr>
    <td><CopyableCode code="peerDbIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(https:​//docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of standby databases located in Autonomous Data Guard remote regions that are associated with the source database. Note that for Autonomous AI Database Serverless instances, standby databases located in the same region as the source primary database do not have OCIDs.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionLevel" /></td>
    <td><code>string</code></td>
    <td>The Autonomous AI Database permission level. Restricted mode allows access only by admin users.  This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.  (RESTRICTED, UNRESTRICTED) (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="privateEndpoint" /></td>
    <td><code>string</code></td>
    <td>The private endpoint for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="privateEndpointIp" /></td>
    <td><code>string</code></td>
    <td>The private endpoint Ip address for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="privateEndpointLabel" /></td>
    <td><code>string</code></td>
    <td>The resource's private endpoint label. - Setting the endpoint label to a non-empty string creates a private endpoint database. - Resetting the endpoint label to an empty string, after the creation of the private endpoint database, changes the private endpoint database to a public endpoint database. - Setting the endpoint label to a non-empty string value, updates to a new private endpoint database, when the database is disabled and re-enabled.  This setting cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, dbWorkload, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier. </td>
</tr>
<tr>
    <td><CopyableCode code="provisionableCpus" /></td>
    <td><code>array</code></td>
    <td>An array of CPU values that an Autonomous AI Database can be scaled to.</td>
</tr>
<tr>
    <td><CopyableCode code="publicConnectionUrls" /></td>
    <td><code>object</code></td>
    <td>The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance within your VCN or that has a direct connection to your VCN. Note that these URLs are provided by the console only for databases on &#91;dedicated Exadata infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html).  Example: `&#123;"sqlDevWebUrl": "https:​//&lt;hostname&gt;/ords...", "apexUrl", "https:​//&lt;hostname&gt;/ords..."&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="publicEndpoint" /></td>
    <td><code>string</code></td>
    <td>The public endpoint for the private endpoint enabled resource.</td>
</tr>
<tr>
    <td><CopyableCode code="refreshableMode" /></td>
    <td><code>string</code></td>
    <td>The refresh mode of the clone. AUTOMATIC indicates that the clone is automatically being refreshed with data from the source Autonomous AI Database. (AUTOMATIC, MANUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="refreshableStatus" /></td>
    <td><code>string</code></td>
    <td>The refresh status of the clone. REFRESHING indicates that the clone is currently being refreshed with data from the source Autonomous AI Database. (REFRESHING, NOT_REFRESHING) (x-default-description: This property is only valid for refreshable clones and is null for for databases that are not refreshable clones.)</td>
</tr>
<tr>
    <td><CopyableCode code="remoteDisasterRecoveryConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configurations of a Disaster Recovery.</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePoolLeaderId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for leader Autonomous AI Database OCID &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePoolSummary" /></td>
    <td><code>object</code></td>
    <td>The configuration details for resource pool</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The Data Guard role of the Autonomous Container Database or Autonomous AI Database, if Autonomous Data Guard is enabled.  (PRIMARY, STANDBY, DISABLED_STANDBY, BACKUP_COPY, SNAPSHOT_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledOperations" /></td>
    <td><code>array</code></td>
    <td>The list of scheduled operations. Consists of values such as dayOfWeek, scheduledStartTime, scheduledStopTime.  This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier. </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security Attributes for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="serviceConsoleUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of the Service Console for the Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the source Autonomous AI Database that was cloned to create the current Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="sqlWebDeveloperUrl" /></td>
    <td><code>string</code></td>
    <td>The SQL Web Developer URL for the Oracle Autonomous AI Database. The sqlWebDeveloperUrl is only returned if isSqlWebDeveloperEnabled boolean is set to TRUE.</td>
</tr>
<tr>
    <td><CopyableCode code="standbyDb" /></td>
    <td><code>object</code></td>
    <td>Autonomous Data Guard standby database details. </td>
</tr>
<tr>
    <td><CopyableCode code="standbyWhitelistedIps" /></td>
    <td><code>array</code></td>
    <td>The client IP access control list (ACL). This feature is available for &#91;Autonomous AI Database Serverless&#93; (https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html) and on Exadata Cloud@Customer. Only clients connecting from an IP address included in the ACL may access the Autonomous AI Database instance. If `arePrimaryWhitelistedIpsUsed` is 'TRUE' then Autonomous AI Database uses this primary's IP access control list (ACL) for the disaster recovery peer called `standbywhitelistedips`.  For Autonomous AI Database Serverless, this is an array of CIDR (classless inter-domain routing) notations for a subnet or VCN OCID (virtual cloud network Oracle Cloud ID). Multiple IPs and VCN OCIDs should be separate strings separated by commas, but if it’s other configurations that need multiple pieces of information then its each piece is connected with semicolon (;) as a delimiter. Example: `&#91;"1.1.1.1","1.1.1.0/24","ocid1.vcn.oc1.sea.&lt;unique_id&gt;","ocid1.vcn.oc1.sea.&lt;unique_id1&gt;;1.1.1.1","ocid1.vcn.oc1.sea.&lt;unique_id2&gt;;1.1.0.0/16"&#93;` For Exadata Cloud@Customer, this is an array of IP addresses or CIDR notations. Example: `&#91;"1.1.1.1","1.1.1.0/24","1.1.2.25"&#93;`  For an update operation, if you want to delete all the IPs in the ACL, use an array with a single empty string entry.  This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier. </td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the subnet the resource is associated with.  **Subnet Restrictions:** - For bare metal DB systems and for single node virtual machine DB systems, do not use a subnet that overlaps with 192.168.16.16/28. - For Exadata and virtual machine 2-node RAC systems, do not use a subnet that overlaps with 192.168.128.0/20. - For Autonomous AI Database, setting this will disable public secure access to the database.  These subnets are used by the Oracle Clusterware private interconnect on the database instance. Specifying an overlapping subnet will cause the private interconnect to malfunction. This restriction applies to both the client subnet and the backup subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the subscription with which resource needs to be associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedRegionsToCloneTo" /></td>
    <td><code>array</code></td>
    <td>The list of regions that support the creation of an Autonomous AI Database clone or an Autonomous Data Guard standby database. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Autonomous AI Database was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeDataGuardRoleChanged" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Autonomous Data Guard role was switched for the Autonomous AI Database. For databases that have standbys in both the primary Data Guard region and a remote Data Guard standby region, this is the latest timestamp of either the database using the "primary" role in the primary Data Guard region, or database located in the remote Data Guard standby region.</td>
</tr>
<tr>
    <td><CopyableCode code="timeDeletionOfFreeAutonomousDatabase" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Always Free database will be automatically deleted because of inactivity. If the database is in the STOPPED state and without activity until this time, it will be deleted. </td>
</tr>
<tr>
    <td><CopyableCode code="timeDisasterRecoveryRoleChanged" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Disaster Recovery role was switched for the standby Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="timeLocalDataGuardEnabled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that Autonomous Data Guard was enabled for an Autonomous AI Database where the standby was provisioned in the same region as the primary database.</td>
</tr>
<tr>
    <td><CopyableCode code="timeMaintenanceBegin" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when maintenance will begin.</td>
</tr>
<tr>
    <td><CopyableCode code="timeMaintenanceEnd" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when maintenance will end.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfAutoRefreshStart" /></td>
    <td><code>string (date-time)</code></td>
    <td>The the date and time that auto-refreshing will begin for an Autonomous AI Database refreshable clone. This value controls only the start time for the first refresh operation. Subsequent (ongoing) refresh operations have start times controlled by the value of the `autoRefreshFrequencyInSeconds` parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfJoiningResourcePool" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the member joined the resource pool.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfLastFailover" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last failover operation.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfLastRefresh" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when last refresh happened.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfLastRefreshPoint" /></td>
    <td><code>string (date-time)</code></td>
    <td>The refresh point timestamp (UTC). The refresh point is the time to which the database was most recently refreshed. Data created after the refresh point is not included in the refresh.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfLastSwitchover" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last switchover operation for the Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfNextRefresh" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of next refresh.</td>
</tr>
<tr>
    <td><CopyableCode code="timeReclamationOfFreeAutonomousDatabase" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Always Free database will be stopped because of inactivity. If this time is reached without any database activity, the database will automatically be put into the STOPPED state. </td>
</tr>
<tr>
    <td><CopyableCode code="timeUndeleted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Autonomous AI Database was most recently undeleted. </td>
</tr>
<tr>
    <td><CopyableCode code="timeUntilReconnectCloneEnabled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date as an RFC3339 formatted string, e.g., 2022-01-01T12:00:00.000Z, to set the limit for a refreshable clone to be reconnected to its source database.</td>
</tr>
<tr>
    <td><CopyableCode code="usedDataStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The storage space consumed by Autonomous AI Database in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="usedDataStorageSizeInTBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage that has been used for Autonomous AI Databases in dedicated infrastructure, in terabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure &#91;vault&#93;(/Content/KeyManagement/Concepts/keyoverview.htm#concepts). This parameter and `secretId` are required for Customer Managed Keys.</td>
</tr>
<tr>
    <td><CopyableCode code="whitelistedIps" /></td>
    <td><code>array</code></td>
    <td>The client IP access control list (ACL). This feature is available for &#91;Autonomous AI Database Serverless&#93; (https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html) and on Exadata Cloud@Customer. Only clients connecting from an IP address included in the ACL may access the Autonomous AI Database instance. If `arePrimaryWhitelistedIpsUsed` is 'TRUE' then Autonomous AI Database uses this primary's IP access control list (ACL) for the disaster recovery peer called `standbywhitelistedips`.  For Autonomous AI Database Serverless, this is an array of CIDR (classless inter-domain routing) notations for a subnet or VCN OCID (virtual cloud network Oracle Cloud ID). Multiple IPs and VCN OCIDs should be separate strings separated by commas, but if it’s other configurations that need multiple pieces of information then its each piece is connected with semicolon (;) as a delimiter. Example: `&#91;"1.1.1.1","1.1.1.0/24","ocid1.vcn.oc1.sea.&lt;unique_id&gt;","ocid1.vcn.oc1.sea.&lt;unique_id1&gt;;1.1.1.1","ocid1.vcn.oc1.sea.&lt;unique_id2&gt;;1.1.0.0/16"&#93;` For Exadata Cloud@Customer, this is an array of IP addresses or CIDR notations. Example: `&#91;"1.1.1.1","1.1.1.0/24","1.1.2.25"&#93;`  For an update operation, if you want to delete all the IPs in the ACL, use an array with a single empty string entry.  This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier. </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An Oracle Autonomous AI Database.&lt;br /&gt;    &lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="accessTypes" /></td>
    <td><code>array</code></td>
    <td>List of access types for an Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="actualUsedDataStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The current amount of storage in use for user and system data, in terabytes (TB). </td>
</tr>
<tr>
    <td><CopyableCode code="allocatedStorageSizeInTBs" /></td>
    <td><code>number (double)</code></td>
    <td>The amount of storage currently allocated for the database tables and billed for, rounded up. When auto-scaling is not enabled, this value is equal to the `dataStorageSizeInTBs` value. You can compare this value to the `actualUsedDataStorageSizeInTBs` value to determine if a manual shrink operation is appropriate for your allocated storage.  **Note:** Auto-scaling does not automatically decrease allocated storage when data is deleted from the database. </td>
</tr>
<tr>
    <td><CopyableCode code="apexDetails" /></td>
    <td><code>object</code></td>
    <td>Oracle APEX AI Application Development is a low-code development platform that enables you to build scalable, secure enterprise apps, with world-class features. Autonomous AI Database with the APEX workload type is optimized to support APEX development. </td>
</tr>
<tr>
    <td><CopyableCode code="arePrimaryWhitelistedIpsUsed" /></td>
    <td><code>boolean</code></td>
    <td>This field will be null if the Autonomous AI Database is not Data Guard enabled or Access Control is disabled. It's value would be `TRUE` if Autonomous AI Database is Data Guard enabled and Access Control is enabled and if the Autonomous AI Database uses primary IP access control list (ACL) for standby. It's value would be `FALSE` if Autonomous AI Database is Data Guard enabled and Access Control is enabled and if the Autonomous AI Database uses different IP access control list (ACL) for standby compared to primary. </td>
</tr>
<tr>
    <td><CopyableCode code="autoRefreshFrequencyInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The frequency a refreshable clone is refreshed after auto-refresh is enabled. The minimum is 1 hour. The maximum is 7 days. The date and time that auto-refresh is enabled is controlled by the `timeOfAutoRefreshStart` parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="autoRefreshPointLagInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The time, in seconds, the data of the refreshable clone lags the primary database at the point of refresh. The minimum is 0 minutes (0 mins means refresh to the latest available timestamp). The maximum is 7 days. The lag time increases after refreshing until the next data refresh happens.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousContainerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The Autonomous Container Database &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm). Used only by Autonomous AI Database on Dedicated Exadata Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="autonomousMaintenanceScheduleType" /></td>
    <td><code>string</code></td>
    <td>The maintenance schedule type of the Autonomous AI Database Serverless. An EARLY maintenance schedule follows a schedule applying patches prior to the REGULAR schedule. A REGULAR maintenance schedule follows the normal cycle  (EARLY, REGULAR)</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain where the Autonomous AI Database Serverless instance is located.</td>
</tr>
<tr>
    <td><CopyableCode code="availableUpgradeVersions" /></td>
    <td><code>array</code></td>
    <td>List of Oracle AI Database versions available for a database upgrade. If there are no version upgrades available, this list is empty.</td>
</tr>
<tr>
    <td><CopyableCode code="backupConfig" /></td>
    <td><code>object</code></td>
    <td>Autonomous AI Database configuration details for storing &#91;manual backups&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/adbsa/backup-restore.html#GUID-9035DFB8-4702-4CEB-8281-C2A303820809) in the &#91;Object Storage&#93;(/Content/Object/Concepts/objectstorageoverview.htm) service. </td>
</tr>
<tr>
    <td><CopyableCode code="byolComputeCountLimit" /></td>
    <td><code>number (float)</code></td>
    <td>The maximum number of CPUs allowed with a Bring Your Own License (BYOL), including those used for auto-scaling, disaster recovery, tools, etc. Any CPU usage above this limit is considered as License Included and billed.</td>
</tr>
<tr>
    <td><CopyableCode code="characterSet" /></td>
    <td><code>string</code></td>
    <td>The character set for the Autonomous AI Database.  The default is AL32UTF8. Allowed values are:  AL32UTF8, AR8ADOS710, AR8ADOS720, AR8APTEC715, AR8ARABICMACS, AR8ASMO8X, AR8ISO8859P6, AR8MSWIN1256, AR8MUSSAD768, AR8NAFITHA711, AR8NAFITHA721, AR8SAKHR706, AR8SAKHR707, AZ8ISO8859P9E, BG8MSWIN, BG8PC437S, BLT8CP921, BLT8ISO8859P13, BLT8MSWIN1257, BLT8PC775, BN8BSCII, CDN8PC863, CEL8ISO8859P14, CL8ISO8859P5, CL8ISOIR111, CL8KOI8R, CL8KOI8U, CL8MACCYRILLICS, CL8MSWIN1251, EE8ISO8859P2, EE8MACCES, EE8MACCROATIANS, EE8MSWIN1250, EE8PC852, EL8DEC, EL8ISO8859P7, EL8MACGREEKS, EL8MSWIN1253, EL8PC437S, EL8PC851, EL8PC869, ET8MSWIN923, HU8ABMOD, HU8CWI2, IN8ISCII, IS8PC861, IW8ISO8859P8, IW8MACHEBREWS, IW8MSWIN1255, IW8PC1507, JA16EUC, JA16EUCTILDE, JA16SJIS, JA16SJISTILDE, JA16VMS, KO16KSC5601, KO16KSCCS, KO16MSWIN949, LA8ISO6937, LA8PASSPORT, LT8MSWIN921, LT8PC772, LT8PC774, LV8PC1117, LV8PC8LR, LV8RST104090, N8PC865, NE8ISO8859P10, NEE8ISO8859P4, RU8BESTA, RU8PC855, RU8PC866, SE8ISO8859P3, TH8MACTHAIS, TH8TISASCII, TR8DEC, TR8MACTURKISHS, TR8MSWIN1254, TR8PC857, US7ASCII, US8PC437, UTF8, VN8MSWIN1258, VN8VN3, WE8DEC, WE8DG, WE8ISO8859P1, WE8ISO8859P15, WE8ISO8859P9, WE8MACROMAN8S, WE8MSWIN1252, WE8NCR4970, WE8NEXTSTEP, WE8PC850, WE8PC858, WE8PC860, WE8ROMAN8, ZHS16CGB231280, ZHS16GBK, ZHT16BIG5, ZHT16CCDC, ZHT16DBT, ZHT16HKSCS, ZHT16MSWIN950, ZHT32EUC, ZHT32SOPS, ZHT32TRIS </td>
</tr>
<tr>
    <td><CopyableCode code="cloneTableSpaceList" /></td>
    <td><code>array</code></td>
    <td>A list of the source Autonomous AI Database's table space number(s) used to create this partial clone from the backup.</td>
</tr>
<tr>
    <td><CopyableCode code="cloneType" /></td>
    <td><code>string</code></td>
    <td>The Autonomous AI Database clone type. (FULL, METADATA, PARTIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterPlacementGroupId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the cluster placement group of the Autonomous Serverless Database.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr>
    <td><CopyableCode code="computeCount" /></td>
    <td><code>number (float)</code></td>
    <td>The compute amount (CPUs) available to the database. Minimum and maximum values depend on the compute model and whether the database is an Autonomous AI Database Serverless instance or an Autonomous AI Database on Dedicated Exadata Infrastructure. The 'ECPU' compute model requires a minimum value of one, for databases in the elastic resource pool and minimum value of two, otherwise. Required when using the `computeModel` parameter. When using `cpuCoreCount` parameter, it is an error to specify computeCount to a non-null value. Providing `computeModel` and `computeCount` is the preferred method for both OCPU and ECPU.  (x-default-description: Null used when unspecified.)</td>
</tr>
<tr>
    <td><CopyableCode code="computeModel" /></td>
    <td><code>string</code></td>
    <td>The compute model of the Base Database, Exadata Infrastructure, VM Cluster and Autonomous AI Database.  (ECPU, OCPU) (x-default-description: Null used when unspecified.)</td>
</tr>
<tr>
    <td><CopyableCode code="connectionStrings" /></td>
    <td><code>object</code></td>
    <td>Connection strings to connect to an Oracle Autonomous AI Database.  Example output for connection strings. See &#91;DatabaseConnectionStringProfile&#93;(#/en/database/latest/datatypes/DatabaseConnectionStringProfile) for additional details:        "connectionStrings": &#123;         "allConnectionStrings": &#123;           "HIGH": "adb.region.oraclecloud.com:1522/unique_id_databasename_high.adwc.oraclecloud.com",           "LOW": "adb.region.oraclecloud.com:1522/unique_id_databasename_low.adwc.oraclecloud.com",           "MEDIUM": "adb.region.oraclecloud.com:1522/unique_id_databasename_medium.adwc.oraclecloud.com"         &#125;,         "profiles": &#91;           &#123;             "displayName": "databasename_high",             "value": "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.region.oraclecloud.com))(connect_data=(service_name=unique_id_databasename_high.adwc.oraclecloud.com))(security=(ssl_server_cert_dn="CN=adwc.uscom-east-1.oraclecloud.com,OU=Oracle BMCS US,O=Oracle Corporation,L=Redwood City,ST=California,C=US")))",             "consumerGroup": "HIGH",             "protocol": "TCPS",             "tlsAuthentication": "MUTUAL",             "hostFormat": "FQDN",             "sessionMode": "DIRECT",             "syntaxFormat": "LONG"           &#125;,           &#123;             "displayName": "databasename_low",             "value": "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.region.oraclecloud.com))(connect_data=(service_name=unique_id_databasename_low.adwc.oraclecloud.com))(security=(ssl_server_cert_dn="CN=adwc.uscom-east-1.oraclecloud.com,OU=Oracle BMCS US,O=Oracle Corporation,L=Redwood City,ST=California,C=US")))",             "consumerGroup": "LOW",             "protocol": "TCPS",             "tlsAuthentication": "MUTUAL",             "hostFormat": "FQDN",             "sessionMode": "DIRECT",             "syntaxFormat": "LONG"           &#125;,           &#123;             "displayName": "databasename_medium",             "value": "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.region.oraclecloud.com))(connect_data=(service_name=unique_id_databasename_medium.adwc.oraclecloud.com))(security=(ssl_server_cert_dn="CN=adwc.uscom-east-1.oraclecloud.com,OU=Oracle BMCS US,O=Oracle Corporation,L=Redwood City,ST=California,C=US")))",             "consumerGroup": "MEDIUM",             "protocol": "TCPS",             "tlsAuthentication": "MUTUAL",             "hostFormat": "FQDN",             "sessionMode": "DIRECT",             "syntaxFormat": "LONG"           &#125;         &#93;,         "dedicated": null,         "high": "adb.region.oraclecloud.com:1522/unique_id_databasename_high.adwc.oraclecloud.com",         "low": "adb.region.oraclecloud.com:1522/unique_id_databasename_low.adwc.oraclecloud.com",         "medium": "adb.region.oraclecloud.com:1522/unique_id_databasename_medium.adwc.oraclecloud.com"       &#125; </td>
</tr>
<tr>
    <td><CopyableCode code="connectionUrls" /></td>
    <td><code>object</code></td>
    <td>The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance within your VCN or that has a direct connection to your VCN. Note that these URLs are provided by the console only for databases on &#91;dedicated Exadata infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html).  Example: `&#123;"sqlDevWebUrl": "https:​//&lt;hostname&gt;/ords...", "apexUrl", "https:​//&lt;hostname&gt;/ords..."&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="cpuCoreCount" /></td>
    <td><code>integer</code></td>
    <td>The number of CPU cores to be made available to the database. When the ECPU is selected, the value for cpuCoreCount is 0. For Autonomous AI Database on Dedicated Exadata infrastructure, the maximum number of cores is determined by the infrastructure shape. See &#91;Characteristics of Infrastructure Shapes&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbde/) for shape details.  **Note:** This parameter cannot be used with the `ocpuCount` parameter. </td>
</tr>
<tr>
    <td><CopyableCode code="customerContacts" /></td>
    <td><code>array</code></td>
    <td>Customer Contacts.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSafeStatus" /></td>
    <td><code>string</code></td>
    <td>Status of the Data Safe registration for this Autonomous AI Database. (REGISTERING, REGISTERED, DEREGISTERING, NOT_REGISTERED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The quantity of data in the database, in gigabytes.  For Autonomous AI Transaction Processing databases using ECPUs on Serverless Infrastructure, this value is always populated. In all the other cases, this value will be null and `dataStorageSizeInTBs` will be populated instead. </td>
</tr>
<tr>
    <td><CopyableCode code="dataStorageSizeInTBs" /></td>
    <td><code>integer</code></td>
    <td>The quantity of data in the database, in terabytes.  The following points apply to Autonomous AI Databases on Serverless Infrastructure: - This is an integer field whose value remains null when the data size is in GBs and cannot be converted to TBs (by dividing the GB value by 1024) without rounding error. - To get the exact value of data storage size without rounding error, please see `dataStorageSizeInGBs` of Autonomous AI Database. </td>
</tr>
<tr>
    <td><CopyableCode code="databaseEdition" /></td>
    <td><code>string</code></td>
    <td>The Oracle AI Database Edition that applies to the Autonomous AI Databases.  (STANDARD_EDITION, ENTERPRISE_EDITION)</td>
</tr>
<tr>
    <td><CopyableCode code="databaseManagementStatus" /></td>
    <td><code>string</code></td>
    <td>Status of Database Management for this Autonomous AI Database. (ENABLING, ENABLED, DISABLING, NOT_ENABLED, FAILED_ENABLING, FAILED_DISABLING)</td>
</tr>
<tr>
    <td><CopyableCode code="dataguardRegionType" /></td>
    <td><code>string</code></td>
    <td>**Deprecated.** The Autonomous Data Guard region type of the Autonomous AI Database. For Autonomous AI Database Serverless, Autonomous Data Guard associations have designated primary and standby regions, and these region types do not change when the database changes roles. The standby regions in Autonomous Data Guard associations can be the same region designated as the primary region, or they can be remote regions. Certain database administrative operations may be available only in the primary region of the Autonomous Data Guard association, and cannot be performed when the database using the primary role is operating in a remote Autonomous Data Guard standby region.  (PRIMARY_DG_REGION, REMOTE_STANDBY_DG_REGION)</td>
</tr>
<tr>
    <td><CopyableCode code="dbName" /></td>
    <td><code>string</code></td>
    <td>The database name.</td>
</tr>
<tr>
    <td><CopyableCode code="dbToolsDetails" /></td>
    <td><code>array</code></td>
    <td>The list of database tools details.  This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, isLocalDataGuardEnabled, or isFreeTier.  (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="dbVersion" /></td>
    <td><code>string</code></td>
    <td>A valid Oracle AI Database version for Autonomous AI Database. When you specify 23ai for dbversion, the system will provision a 23ai database, but the UI will display it as 26ai. When you specify 26ai for dbversion, the system will provision and display a 26ai database as expected. For new databases, it is recommended to use either 19c or 26ai.  **Note** Starting December 2026, 23ai will not be supported as a valid value for this parameter. </td>
</tr>
<tr>
    <td><CopyableCode code="dbWorkload" /></td>
    <td><code>string</code></td>
    <td>The Autonomous AI Database workload type. The following values are valid: - OLTP - indicates an Autonomous AI Transaction Processing database - DW - indicates an Autonomous AI Lakehouse database - AJD - indicates an Autonomous AI JSON Database - APEX - indicates an Autonomous AI Database with the Oracle APEX AI Application Development workload type. - LH - indicates an Oracle Autonomous AI Lakehouse database  **Note** Starting December 2026, DW will not be supported as a valid value for this parameter. When creating an Autonomous AI Database, if this parameter is not specified, the default value is `OLTP`.   This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.  (OLTP, DW, AJD, APEX, LH)</td>
</tr>
<tr>
    <td><CopyableCode code="definedTags" /></td>
    <td><code>object</code></td>
    <td>Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="disasterRecoveryRegionType" /></td>
    <td><code>string</code></td>
    <td>**Deprecated.** The disaster recovery (DR) region type of the Autonomous AI Database. For Autonomous AI Database Serverless instances, DR associations have designated primary and standby regions. These region types do not change when the database changes roles. The standby region in DR associations can be the same region as the primary region, or they can be in a remote regions. Some database administration operations may be available only in the primary region of the DR association, and cannot be performed when the database using the primary role is operating in a remote region.  (PRIMARY, REMOTE)</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The user-friendly name for the Autonomous AI Database. The name does not have to be unique.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKey" /></td>
    <td><code>object</code></td>
    <td>Details of the Autonomous AI Database encryption key.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionKeyHistoryEntry" /></td>
    <td><code>array</code></td>
    <td>Key History Entry.</td>
</tr>
<tr>
    <td><CopyableCode code="failedDataRecoveryInSeconds" /></td>
    <td><code>integer</code></td>
    <td>Indicates the number of seconds of data loss for a Data Guard failover.</td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="inMemoryAreaInGBs" /></td>
    <td><code>integer</code></td>
    <td>The area assigned to In-Memory tables in Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="inMemoryPercentage" /></td>
    <td><code>integer</code></td>
    <td>The percentage of the System Global Area(SGA) assigned to In-Memory tables in Autonomous AI Database. This property is applicable only to Autonomous AI Databases on the Exadata Cloud@Customer platform.</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructureType" /></td>
    <td><code>string</code></td>
    <td>The infrastructure type this resource belongs to.  (CLOUD, CLOUD_AT_CUSTOMER)</td>
</tr>
<tr>
    <td><CopyableCode code="isAccessControlEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the database-level access control is enabled. If disabled, database access is defined by the network security rules. If enabled, database access is restricted to the IP addresses defined by the rules specified with the `whitelistedIps` property. While specifying `whitelistedIps` rules is optional,  if database-level access control is enabled and no rules are specified, the database will become inaccessible. The rules can be added later using the `UpdateAutonomousDatabase` API operation or edit option in console. When creating a database clone, the desired access control setting should be specified. By default, database-level access control will be disabled for the clone.  This property is applicable only to Autonomous AI Databases on the Exadata Cloud@Customer platform. For Autonomous AI Database Serverless instances, `whitelistedIps` is used. </td>
</tr>
<tr>
    <td><CopyableCode code="isAutoScalingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if auto scaling is enabled for the Autonomous AI Database CPU core count. The default value is `TRUE`. </td>
</tr>
<tr>
    <td><CopyableCode code="isAutoScalingForStorageEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if auto scaling is enabled for the Autonomous AI Database storage. The default value is `FALSE`. </td>
</tr>
<tr>
    <td><CopyableCode code="isBackupRetentionLocked" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the Autonomous AI Database is backup retention locked.</td>
</tr>
<tr>
    <td><CopyableCode code="isDataGuardEnabled" /></td>
    <td><code>boolean</code></td>
    <td>**Deprecated.** Indicates whether the Autonomous AI Database has local (in-region) Data Guard enabled. Not applicable to cross-region Autonomous Data Guard associations, or to Autonomous AI Databases using dedicated Exadata infrastructure or Exadata Cloud@Customer infrastructure. </td>
</tr>
<tr>
    <td><CopyableCode code="isDedicated" /></td>
    <td><code>boolean</code></td>
    <td>True if the database uses &#91;dedicated Exadata infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html). </td>
</tr>
<tr>
    <td><CopyableCode code="isDevTier" /></td>
    <td><code>boolean</code></td>
    <td>Autonomous AI Database for Developers are fixed-shape Autonomous AI Databases that developers can use to build and test new applications. On Serverless, these are low-cost and billed per instance, on Dedicated and Cloud@Customer there is no additional cost to create Developer databases. Developer databases come with limited resources and is not intended for large-scale testing and production deployments. When you need more compute or storage resources, you may upgrade to a full paid production database. </td>
</tr>
<tr>
    <td><CopyableCode code="isFreeTier" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if this is an Always Free resource. The default value is false. Note that Always Free Autonomous AI Databases have 1 CPU and 20GB of memory. For Always Free databases, memory and CPU cannot be scaled.  This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isLocalDataGuardEnabled </td>
</tr>
<tr>
    <td><CopyableCode code="isLocalDataGuardEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Autonomous AI Database has local (in-region) Data Guard enabled. Not applicable to cross-region Autonomous Data Guard associations, or to Autonomous AI Databases using dedicated Exadata infrastructure or Exadata Cloud@Customer infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="isMtlsConnectionRequired" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the Autonomous AI Database requires mTLS connections.  This may not be updated in parallel with any of the following: licenseModel, databaseEdition, cpuCoreCount, computeCount, dataStorageSizeInTBs, whitelistedIps, openMode, permissionLevel, db-workload, privateEndpointLabel, nsgIds, customerContacts, dbVersion, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.  Service Change: The default value of the isMTLSConnectionRequired attribute will change from true to false on July 1, 2023 in the following APIs: - CreateAutonomousDatabase - GetAutonomousDatabase - UpdateAutonomousDatabase Details: Prior to the July 1, 2023 change, the isMTLSConnectionRequired attribute default value was true. This applies to Autonomous AI Database Serverless. Does this impact me? If you use or maintain custom scripts or Terraform scripts referencing the CreateAutonomousDatabase, GetAutonomousDatabase, or UpdateAutonomousDatabase APIs, you want to check, and possibly modify, the scripts for the changed default value of the attribute. Should you choose not to leave your scripts unchanged, the API calls containing this attribute will continue to work, but the default value will switch from true to false. How do I make this change? Using either OCI SDKs or command line tools, update your custom scripts to explicitly set the isMTLSConnectionRequired attribute to true. </td>
</tr>
<tr>
    <td><CopyableCode code="isPreview" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the Autonomous AI Database version is a preview version.</td>
</tr>
<tr>
    <td><CopyableCode code="isReconnectCloneEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the refreshable clone can be reconnected to its source database.</td>
</tr>
<tr>
    <td><CopyableCode code="isRefreshableClone" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the Autonomous AI Database is a refreshable clone.  This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier. </td>
</tr>
<tr>
    <td><CopyableCode code="isRemoteDataGuardEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Autonomous AI Database has Cross Region Data Guard enabled. Not applicable to Autonomous AI Databases using dedicated Exadata infrastructure or Exadata Cloud@Customer infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="keyHistoryEntry" /></td>
    <td><code>array</code></td>
    <td>Key History Entry.</td>
</tr>
<tr>
    <td><CopyableCode code="keyStoreId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the key store of Oracle Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="keyStoreWalletName" /></td>
    <td><code>string</code></td>
    <td>The wallet name for Oracle Key Vault.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyLifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>KMS key lifecycle details.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyVersionId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation. Autonomous AI Database Serverless does not use key versions, hence is not applicable for Autonomous AI Database Serverless instances. </td>
</tr>
<tr>
    <td><CopyableCode code="licenseModel" /></td>
    <td><code>string</code></td>
    <td>The Oracle license model that applies to the Oracle Autonomous AI Database. Bring your own license (BYOL) allows you to apply your current on-premises Oracle software licenses to equivalent, highly automated Oracle services in the cloud. License Included allows you to subscribe to new Oracle AI Database software licenses and the Oracle AI Database service. Note that when provisioning an &#91;Autonomous AI Database on dedicated Exadata infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html), this attribute must be null. It is already set at the Autonomous Exadata Infrastructure level. When provisioning an &#91;Autonomous AI Database Serverless&#93; (https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html) database, if a value is not specified, the system defaults the value to `BRING_YOUR_OWN_LICENSE`. Bring your own license (BYOL) also allows you to select the DB edition using the optional parameter.  This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, dataStorageSizeInTBs, adminPassword, isMTLSConnectionRequired, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.  (LICENSE_INCLUDED, BRING_YOUR_OWN_LICENSE)</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleDetails" /></td>
    <td><code>string</code></td>
    <td>Information about the current lifecycle state.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the Autonomous AI Database. (PROVISIONING, AVAILABLE, STOPPING, STOPPED, STARTING, TERMINATING, TERMINATED, UNAVAILABLE, RESTORE_IN_PROGRESS, RESTORE_FAILED, BACKUP_IN_PROGRESS, SCALE_IN_PROGRESS, AVAILABLE_NEEDS_ATTENTION, UPDATING, MAINTENANCE_IN_PROGRESS, RESTARTING, RECREATING, ROLE_CHANGE_IN_PROGRESS, UPGRADING, INACCESSIBLE, STANDBY, TRANSPORTING)</td>
</tr>
<tr>
    <td><CopyableCode code="localAdgAutoFailoverMaxDataLossLimit" /></td>
    <td><code>integer</code></td>
    <td>Parameter that allows users to select an acceptable maximum data loss limit in seconds, up to which Automatic Failover will be triggered when necessary for a Local Autonomous Data Guard</td>
</tr>
<tr>
    <td><CopyableCode code="localDisasterRecoveryType" /></td>
    <td><code>string</code></td>
    <td>Indicates the local disaster recovery (DR) type of the Autonomous AI Database Serverless instance. Autonomous Data Guard (ADG) DR type provides business critical DR with a faster recovery time objective (RTO) during failover or switchover. Backup-based DR type provides lower cost DR with a slower RTO during failover or switchover.  (x-obmcs-enumref: #/definitions/DisasterRecoveryConfiguration/disasterRecoveryType)</td>
</tr>
<tr>
    <td><CopyableCode code="localStandbyDb" /></td>
    <td><code>object</code></td>
    <td>Autonomous Data Guard standby database details. </td>
</tr>
<tr>
    <td><CopyableCode code="longTermBackupSchedule" /></td>
    <td><code>object</code></td>
    <td>Details for the long-term backup schedule.</td>
</tr>
<tr>
    <td><CopyableCode code="maintenanceTargetComponent" /></td>
    <td><code>string</code></td>
    <td>The component chosen for maintenance.</td>
</tr>
<tr>
    <td><CopyableCode code="memoryPerOracleComputeUnitInGBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of memory (in GBs) to be enabled per OCPU or ECPU. </td>
</tr>
<tr>
    <td><CopyableCode code="ncharacterSet" /></td>
    <td><code>string</code></td>
    <td>The national character set for the Autonomous AI Database.  The default is AL16UTF16. Allowed values are: AL16UTF16 or UTF8. </td>
</tr>
<tr>
    <td><CopyableCode code="netServicesArchitecture" /></td>
    <td><code>string</code></td>
    <td>Enabling SHARED server architecture enables a database server to allow many client processes to share very few server processes, thereby increasing the number of supported users.  (DEDICATED, SHARED)</td>
</tr>
<tr>
    <td><CopyableCode code="nextLongTermBackupTimeStamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the next long-term backup would be created.</td>
</tr>
<tr>
    <td><CopyableCode code="nsgIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see &#91;Security Rules&#93;(/Content/Network/Concepts/securityrules.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="ocpuCount" /></td>
    <td><code>number (float)</code></td>
    <td>The number of OCPU cores to be made available to the database.  The following points apply: - For Autonomous AI Databases on Dedicated Exadata Infrastructure, to provision less than 1 core, enter a fractional value in an increment of 0.1. For example, you can provision 0.3 or 0.4 cores, but not 0.35 cores. (Note that fractional OCPU values are not supported for Autonomous AI Database Serverless instances.) - To provision cores, enter an integer between 1 and the maximum number of cores available for the infrastructure shape. For example, you can provision 2 cores or 3 cores, but not 2.5 cores. This applies to Autonomous AI Databases on both serverless and dedicated Exadata infrastructure. - For Autonomous AI Database Serverless instances, this parameter is not used.  For Autonomous AI Databases on Dedicated Exadata Infrastructure, the maximum number of cores is determined by the infrastructure shape. See &#91;Characteristics of Infrastructure Shapes&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbde/index.html) for shape details.  **Note:** This parameter cannot be used with the `cpuCoreCount` parameter. </td>
</tr>
<tr>
    <td><CopyableCode code="openMode" /></td>
    <td><code>string</code></td>
    <td>Indicates the Autonomous AI Database mode. The database can be opened in `READ_ONLY` or `READ_WRITE` mode.  This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.  (READ_ONLY, READ_WRITE) (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="operationsInsightsStatus" /></td>
    <td><code>string</code></td>
    <td>Status of Operations Insights for this Autonomous AI Database. (ENABLING, ENABLED, DISABLING, NOT_ENABLED, FAILED_ENABLING, FAILED_DISABLING)</td>
</tr>
<tr>
    <td><CopyableCode code="peerDbIds" /></td>
    <td><code>array</code></td>
    <td>The list of &#91;OCIDs&#93;(https:​//docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of standby databases located in Autonomous Data Guard remote regions that are associated with the source database. Note that for Autonomous AI Database Serverless instances, standby databases located in the same region as the source primary database do not have OCIDs.</td>
</tr>
<tr>
    <td><CopyableCode code="permissionLevel" /></td>
    <td><code>string</code></td>
    <td>The Autonomous AI Database permission level. Restricted mode allows access only by admin users.  This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.  (RESTRICTED, UNRESTRICTED) (x-default-description: null)</td>
</tr>
<tr>
    <td><CopyableCode code="privateEndpoint" /></td>
    <td><code>string</code></td>
    <td>The private endpoint for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="privateEndpointIp" /></td>
    <td><code>string</code></td>
    <td>The private endpoint Ip address for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="privateEndpointLabel" /></td>
    <td><code>string</code></td>
    <td>The resource's private endpoint label. - Setting the endpoint label to a non-empty string creates a private endpoint database. - Resetting the endpoint label to an empty string, after the creation of the private endpoint database, changes the private endpoint database to a public endpoint database. - Setting the endpoint label to a non-empty string value, updates to a new private endpoint database, when the database is disabled and re-enabled.  This setting cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, dbWorkload, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier. </td>
</tr>
<tr>
    <td><CopyableCode code="provisionableCpus" /></td>
    <td><code>array</code></td>
    <td>An array of CPU values that an Autonomous AI Database can be scaled to.</td>
</tr>
<tr>
    <td><CopyableCode code="publicConnectionUrls" /></td>
    <td><code>object</code></td>
    <td>The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance within your VCN or that has a direct connection to your VCN. Note that these URLs are provided by the console only for databases on &#91;dedicated Exadata infrastructure&#93;(https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html).  Example: `&#123;"sqlDevWebUrl": "https:​//&lt;hostname&gt;/ords...", "apexUrl", "https:​//&lt;hostname&gt;/ords..."&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="publicEndpoint" /></td>
    <td><code>string</code></td>
    <td>The public endpoint for the private endpoint enabled resource.</td>
</tr>
<tr>
    <td><CopyableCode code="refreshableMode" /></td>
    <td><code>string</code></td>
    <td>The refresh mode of the clone. AUTOMATIC indicates that the clone is automatically being refreshed with data from the source Autonomous AI Database. (AUTOMATIC, MANUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="refreshableStatus" /></td>
    <td><code>string</code></td>
    <td>The refresh status of the clone. REFRESHING indicates that the clone is currently being refreshed with data from the source Autonomous AI Database. (REFRESHING, NOT_REFRESHING) (x-default-description: This property is only valid for refreshable clones and is null for for databases that are not refreshable clones.)</td>
</tr>
<tr>
    <td><CopyableCode code="remoteDisasterRecoveryConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configurations of a Disaster Recovery.</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePoolLeaderId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for leader Autonomous AI Database OCID &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr>
    <td><CopyableCode code="resourcePoolSummary" /></td>
    <td><code>object</code></td>
    <td>The configuration details for resource pool</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The Data Guard role of the Autonomous Container Database or Autonomous AI Database, if Autonomous Data Guard is enabled.  (PRIMARY, STANDBY, DISABLED_STANDBY, BACKUP_COPY, SNAPSHOT_STANDBY)</td>
</tr>
<tr>
    <td><CopyableCode code="scheduledOperations" /></td>
    <td><code>array</code></td>
    <td>The list of scheduled operations. Consists of values such as dayOfWeek, scheduledStartTime, scheduledStopTime.  This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier. </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>Security Attributes for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm). Example: `&#123;"Oracle-ZPR": &#123;"MaxEgressCount": &#123;"value": "42", "mode": "audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="serviceConsoleUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of the Service Console for the Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="sourceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the source Autonomous AI Database that was cloned to create the current Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="sqlWebDeveloperUrl" /></td>
    <td><code>string</code></td>
    <td>The SQL Web Developer URL for the Oracle Autonomous AI Database. The sqlWebDeveloperUrl is only returned if isSqlWebDeveloperEnabled boolean is set to TRUE.</td>
</tr>
<tr>
    <td><CopyableCode code="standbyDb" /></td>
    <td><code>object</code></td>
    <td>Autonomous Data Guard standby database details. </td>
</tr>
<tr>
    <td><CopyableCode code="standbyWhitelistedIps" /></td>
    <td><code>array</code></td>
    <td>The client IP access control list (ACL). This feature is available for &#91;Autonomous AI Database Serverless&#93; (https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html) and on Exadata Cloud@Customer. Only clients connecting from an IP address included in the ACL may access the Autonomous AI Database instance. If `arePrimaryWhitelistedIpsUsed` is 'TRUE' then Autonomous AI Database uses this primary's IP access control list (ACL) for the disaster recovery peer called `standbywhitelistedips`.  For Autonomous AI Database Serverless, this is an array of CIDR (classless inter-domain routing) notations for a subnet or VCN OCID (virtual cloud network Oracle Cloud ID). Multiple IPs and VCN OCIDs should be separate strings separated by commas, but if it’s other configurations that need multiple pieces of information then its each piece is connected with semicolon (;) as a delimiter. Example: `&#91;"1.1.1.1","1.1.1.0/24","ocid1.vcn.oc1.sea.&lt;unique_id&gt;","ocid1.vcn.oc1.sea.&lt;unique_id1&gt;;1.1.1.1","ocid1.vcn.oc1.sea.&lt;unique_id2&gt;;1.1.0.0/16"&#93;` For Exadata Cloud@Customer, this is an array of IP addresses or CIDR notations. Example: `&#91;"1.1.1.1","1.1.1.0/24","1.1.2.25"&#93;`  For an update operation, if you want to delete all the IPs in the ACL, use an array with a single empty string entry.  This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier. </td>
</tr>
<tr>
    <td><CopyableCode code="subnetId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the subnet the resource is associated with.  **Subnet Restrictions:** - For bare metal DB systems and for single node virtual machine DB systems, do not use a subnet that overlaps with 192.168.16.16/28. - For Exadata and virtual machine 2-node RAC systems, do not use a subnet that overlaps with 192.168.128.0/20. - For Autonomous AI Database, setting this will disable public secure access to the database.  These subnets are used by the Oracle Clusterware private interconnect on the database instance. Specifying an overlapping subnet will cause the private interconnect to malfunction. This restriction applies to both the client subnet and the backup subnet. </td>
</tr>
<tr>
    <td><CopyableCode code="subscriptionId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the subscription with which resource needs to be associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedRegionsToCloneTo" /></td>
    <td><code>array</code></td>
    <td>The list of regions that support the creation of an Autonomous AI Database clone or an Autonomous Data Guard standby database. </td>
</tr>
<tr>
    <td><CopyableCode code="systemTags" /></td>
    <td><code>object</code></td>
    <td>System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see &#91;Resource Tags&#93;(/Content/General/Concepts/resourcetags.htm). </td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Autonomous AI Database was created.</td>
</tr>
<tr>
    <td><CopyableCode code="timeDataGuardRoleChanged" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Autonomous Data Guard role was switched for the Autonomous AI Database. For databases that have standbys in both the primary Data Guard region and a remote Data Guard standby region, this is the latest timestamp of either the database using the "primary" role in the primary Data Guard region, or database located in the remote Data Guard standby region.</td>
</tr>
<tr>
    <td><CopyableCode code="timeDeletionOfFreeAutonomousDatabase" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Always Free database will be automatically deleted because of inactivity. If the database is in the STOPPED state and without activity until this time, it will be deleted. </td>
</tr>
<tr>
    <td><CopyableCode code="timeDisasterRecoveryRoleChanged" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Disaster Recovery role was switched for the standby Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="timeLocalDataGuardEnabled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that Autonomous Data Guard was enabled for an Autonomous AI Database where the standby was provisioned in the same region as the primary database.</td>
</tr>
<tr>
    <td><CopyableCode code="timeMaintenanceBegin" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when maintenance will begin.</td>
</tr>
<tr>
    <td><CopyableCode code="timeMaintenanceEnd" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when maintenance will end.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfAutoRefreshStart" /></td>
    <td><code>string (date-time)</code></td>
    <td>The the date and time that auto-refreshing will begin for an Autonomous AI Database refreshable clone. This value controls only the start time for the first refresh operation. Subsequent (ongoing) refresh operations have start times controlled by the value of the `autoRefreshFrequencyInSeconds` parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfJoiningResourcePool" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the member joined the resource pool.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfLastFailover" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last failover operation.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfLastRefresh" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when last refresh happened.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfLastRefreshPoint" /></td>
    <td><code>string (date-time)</code></td>
    <td>The refresh point timestamp (UTC). The refresh point is the time to which the database was most recently refreshed. Data created after the refresh point is not included in the refresh.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfLastSwitchover" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last switchover operation for the Autonomous AI Database.</td>
</tr>
<tr>
    <td><CopyableCode code="timeOfNextRefresh" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of next refresh.</td>
</tr>
<tr>
    <td><CopyableCode code="timeReclamationOfFreeAutonomousDatabase" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Always Free database will be stopped because of inactivity. If this time is reached without any database activity, the database will automatically be put into the STOPPED state. </td>
</tr>
<tr>
    <td><CopyableCode code="timeUndeleted" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the Autonomous AI Database was most recently undeleted. </td>
</tr>
<tr>
    <td><CopyableCode code="timeUntilReconnectCloneEnabled" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date as an RFC3339 formatted string, e.g., 2022-01-01T12:00:00.000Z, to set the limit for a refreshable clone to be reconnected to its source database.</td>
</tr>
<tr>
    <td><CopyableCode code="usedDataStorageSizeInGBs" /></td>
    <td><code>integer</code></td>
    <td>The storage space consumed by Autonomous AI Database in GBs.</td>
</tr>
<tr>
    <td><CopyableCode code="usedDataStorageSizeInTBs" /></td>
    <td><code>integer</code></td>
    <td>The amount of storage that has been used for Autonomous AI Databases in dedicated infrastructure, in terabytes.</td>
</tr>
<tr>
    <td><CopyableCode code="vaultId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure &#91;vault&#93;(/Content/KeyManagement/Concepts/keyoverview.htm#concepts). This parameter and `secretId` are required for Customer Managed Keys.</td>
</tr>
<tr>
    <td><CopyableCode code="whitelistedIps" /></td>
    <td><code>array</code></td>
    <td>The client IP access control list (ACL). This feature is available for &#91;Autonomous AI Database Serverless&#93; (https:​//docs.oracle.com/en/cloud/paas/autonomous-database/index.html) and on Exadata Cloud@Customer. Only clients connecting from an IP address included in the ACL may access the Autonomous AI Database instance. If `arePrimaryWhitelistedIpsUsed` is 'TRUE' then Autonomous AI Database uses this primary's IP access control list (ACL) for the disaster recovery peer called `standbywhitelistedips`.  For Autonomous AI Database Serverless, this is an array of CIDR (classless inter-domain routing) notations for a subnet or VCN OCID (virtual cloud network Oracle Cloud ID). Multiple IPs and VCN OCIDs should be separate strings separated by commas, but if it’s other configurations that need multiple pieces of information then its each piece is connected with semicolon (;) as a delimiter. Example: `&#91;"1.1.1.1","1.1.1.0/24","ocid1.vcn.oc1.sea.&lt;unique_id&gt;","ocid1.vcn.oc1.sea.&lt;unique_id1&gt;;1.1.1.1","ocid1.vcn.oc1.sea.&lt;unique_id2&gt;;1.1.0.0/16"&#93;` For Exadata Cloud@Customer, this is an array of IP addresses or CIDR notations. Example: `&#91;"1.1.1.1","1.1.1.0/24","1.1.2.25"&#93;`  For an update operation, if you want to delete all the IPs in the ACL, use an array with a single empty string entry.  This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier. </td>
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
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the details of the specified Autonomous AI Database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-autonomousContainerDatabaseId"><code>autonomousContainerDatabaseId</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-infrastructureType"><code>infrastructureType</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a>, <a href="#parameter-lifecycleStateNotEqualTo"><code>lifecycleStateNotEqualTo</code></a>, <a href="#parameter-dbWorkload"><code>dbWorkload</code></a>, <a href="#parameter-dbVersion"><code>dbVersion</code></a>, <a href="#parameter-isFreeTier"><code>isFreeTier</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-isRefreshableClone"><code>isRefreshableClone</code></a>, <a href="#parameter-isDataGuardEnabled"><code>isDataGuardEnabled</code></a>, <a href="#parameter-isResourcePoolLeader"><code>isResourcePoolLeader</code></a>, <a href="#parameter-resourcePoolLeaderId"><code>resourcePoolLeaderId</code></a></td>
    <td>Gets a list of Autonomous AI Databases based on the query parameters specified.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Creates a new Autonomous AI Database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Updates one or more attributes of the specified Autonomous AI Database. See the UpdateAutonomousDatabaseDetails resource for a full list of attributes that can be updated.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-mustDeleteAssociatedLongTermBackups"><code>mustDeleteAssociatedLongTermBackups</code></a></td>
    <td>Deletes the specified Autonomous AI Database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#resource_pool_shapes"><CopyableCode code="resource_pool_shapes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists available resource pools shapes.</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Move the Autonomous AI Database and its dependent resources to the specified compartment.&lt;br /&gt;For more information about moving Autonomous AI Databases, see&lt;br /&gt;&#91;Moving Database Resources to a Different Compartment&#93;(/Content/Database/Concepts/databaseoverview.htm#moveRes).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#change_disaster_recovery_configuration"><CopyableCode code="change_disaster_recovery_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>This operation updates the cross-region disaster recovery (DR) details of the standby Autonomous AI Database Serverless database, and must be run on the standby side.</td>
</tr>
<tr>
    <td><a href="#change_autonomous_database_subscription"><CopyableCode code="change_autonomous_database_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Associate an Autonomous AI Database with a different subscription.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#configure_autonomous_database_vault_key"><CopyableCode code="configure_autonomous_database_vault_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Configures the Autonomous AI Database Vault service &#91;key&#93;(/Content/KeyManagement/Concepts/keyoverview.htm#concepts).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#configure_saas_admin_user"><CopyableCode code="configure_saas_admin_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>This operation updates SaaS administrative user configuration of the Autonomous AI Database.</td>
</tr>
<tr>
    <td><a href="#deregister_autonomous_database_data_safe"><CopyableCode code="deregister_autonomous_database_data_safe" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pdbAdminPassword"><code>pdbAdminPassword</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Asynchronously deregisters this Autonomous AI Database with Data Safe.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#disable_autonomous_database_management"><CopyableCode code="disable_autonomous_database_management" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Disables Database Management for the Autonomous AI Database resource.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#disable_autonomous_database_operations_insights"><CopyableCode code="disable_autonomous_database_operations_insights" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Disables Operations Insights for the Autonomous AI Database resource.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#enable_autonomous_database_management"><CopyableCode code="enable_autonomous_database_management" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Enables Database Management for Autonomous AI Database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#enable_autonomous_database_operations_insights"><CopyableCode code="enable_autonomous_database_operations_insights" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Enables the specified Autonomous AI Database with Operations Insights.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#fail_over_autonomous_database"><CopyableCode code="fail_over_autonomous_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-peerDbId"><code>peerDbId</code></a></td>
    <td>Initiates a failover of the specified Autonomous AI Database to the associated peer database. Applicable only to databases with Disaster Recovery enabled.&lt;br /&gt;This API should be called in the remote region where the peer database resides.&lt;br /&gt;Below parameter is optional:&lt;br /&gt;  - `peerDbId`&lt;br /&gt;    Use this parameter to specify the database OCID of the Disaster Recovery peer, which is located in a different (remote) region from the current peer database.&lt;br /&gt;    If this parameter is not provided, the failover will happen in the same region.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#generate_autonomous_database_wallet"><CopyableCode code="generate_autonomous_database_wallet" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates and downloads a wallet for the specified Autonomous AI Database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#saas_admin_user_status"><CopyableCode code="saas_admin_user_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>This operation gets SaaS administrative user status of the Autonomous AI Database.</td>
</tr>
<tr>
    <td><a href="#import_transportable_tablespace"><CopyableCode code="import_transportable_tablespace" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ttsBundleUrl"><code>ttsBundleUrl</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Imports transportable tablespace for the specified Autonomous AI Database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#autonomous_database_manual_refresh"><CopyableCode code="autonomous_database_manual_refresh" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Initiates a data refresh for an Autonomous AI Database refreshable clone. Data is refreshed from the source database to the point of a specified timestamp.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#register_autonomous_database_data_safe"><CopyableCode code="register_autonomous_database_data_safe" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pdbAdminPassword"><code>pdbAdminPassword</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Asynchronously registers this Autonomous AI Database with Data Safe.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#restart_autonomous_database"><CopyableCode code="restart_autonomous_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-isOnlineRestart"><code>isOnlineRestart</code></a></td>
    <td>Restarts the specified Autonomous AI Database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#restore_autonomous_database"><CopyableCode code="restore_autonomous_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Restores an Autonomous AI Database based on the provided request parameters.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#rotate_autonomous_database_encryption_key"><CopyableCode code="rotate_autonomous_database_encryption_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Rotate existing AutonomousDatabase &#91;Vault service&#93;(/iaas/Content/KeyManagement/Concepts/keyoverview.htm) key.</td>
</tr>
<tr>
    <td><a href="#shrink_autonomous_database"><CopyableCode code="shrink_autonomous_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>This operation shrinks the current allocated storage down to the current actual used data storage (actualUsedDataStorageSizeInTBs). The if the base storage value for the database (dataStorageSizeInTBs) is larger than the actualUsedDataStorageSizeInTBs value, you are billed for the base storage value.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#start_autonomous_database"><CopyableCode code="start_autonomous_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Starts the specified Autonomous AI Database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#stop_autonomous_database"><CopyableCode code="stop_autonomous_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Stops the specified Autonomous AI Database.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#switchover_autonomous_database"><CopyableCode code="switchover_autonomous_database" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-autonomousDatabaseId"><code>autonomousDatabaseId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-peerDbId"><code>peerDbId</code></a></td>
    <td>Initiates a switchover of the specified Autonomous AI Database to the associated peer database. Applicable only to databases with Disaster Recovery enabled.&lt;br /&gt;This API should be called in the remote region where the peer database resides.&lt;br /&gt;Below parameter is optional:&lt;br /&gt;  - `peerDbId`&lt;br /&gt;    Use this parameter to specify the database OCID of the Disaster Recovery peer, which is located in a different (remote) region from the current peer database.&lt;br /&gt;    If this parameter is not provided, the switchover will happen in the same region.&lt;br /&gt;</td>
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
<tr id="parameter-autonomousDatabaseId">
    <td><CopyableCode code="autonomousDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The database &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The compartment &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
</tr>
<tr id="parameter-autonomousContainerDatabaseId">
    <td><CopyableCode code="autonomousContainerDatabaseId" /></td>
    <td><code>string</code></td>
    <td>The Autonomous Container Database &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm).</td>
</tr>
<tr id="parameter-dbVersion">
    <td><CopyableCode code="dbVersion" /></td>
    <td><code>string</code></td>
    <td>A filter to return only Autonomous AI Database resources that match the specified dbVersion.</td>
</tr>
<tr id="parameter-dbWorkload">
    <td><CopyableCode code="dbWorkload" /></td>
    <td><code>string</code></td>
    <td>A filter to return only Autonomous AI Database resources that match the specified workload type.</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the entire display name given. The match is not case sensitive.</td>
</tr>
<tr id="parameter-if-match">
    <td><CopyableCode code="if-match" /></td>
    <td><code>string</code></td>
    <td>For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match` parameter to the value of the etag from a previous GET or POST response for that resource.  The resource will be updated or deleted only if the etag you provide matches the resource's current etag value. </td>
</tr>
<tr id="parameter-infrastructureType">
    <td><CopyableCode code="infrastructureType" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given Infrastructure Type.</td>
</tr>
<tr id="parameter-isDataGuardEnabled">
    <td><CopyableCode code="isDataGuardEnabled" /></td>
    <td><code>boolean</code></td>
    <td>A filter to return only resources that have Data Guard enabled.</td>
</tr>
<tr id="parameter-isFreeTier">
    <td><CopyableCode code="isFreeTier" /></td>
    <td><code>boolean</code></td>
    <td>Filter on the value of the resource's 'isFreeTier' property. A value of `true` returns only Always Free resources. A value of `false` excludes Always Free resources from the returned results. Omitting this parameter returns both Always Free and paid resources. </td>
</tr>
<tr id="parameter-isOnlineRestart">
    <td><CopyableCode code="isOnlineRestart" /></td>
    <td><code>boolean</code></td>
    <td>If provided, an online restart will be triggered.</td>
</tr>
<tr id="parameter-isRefreshableClone">
    <td><CopyableCode code="isRefreshableClone" /></td>
    <td><code>boolean</code></td>
    <td>Filter on the value of the resource's 'isRefreshableClone' property. A value of `true` returns only refreshable clones. A value of `false` excludes refreshable clones from the returned results. Omitting this parameter returns both refreshable clones and databases that are not refreshable clones. </td>
</tr>
<tr id="parameter-isResourcePoolLeader">
    <td><CopyableCode code="isResourcePoolLeader" /></td>
    <td><code>boolean</code></td>
    <td>Filter if the resource is the resource pool leader. A value of `true` returns only resource pool leader. </td>
</tr>
<tr id="parameter-lifecycleState">
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that match the given lifecycle state exactly.</td>
</tr>
<tr id="parameter-lifecycleStateNotEqualTo">
    <td><CopyableCode code="lifecycleStateNotEqualTo" /></td>
    <td><code>string</code></td>
    <td>A filter to return only resources that not match the given lifecycle state.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return per page.</td>
</tr>
<tr id="parameter-mustDeleteAssociatedLongTermBackups">
    <td><CopyableCode code="mustDeleteAssociatedLongTermBackups" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, terminating the Autonomous AI Database also deletes its associated long-term backups if the retention lock is not enabled.</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the request. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The pagination token to continue listing from.</td>
</tr>
<tr id="parameter-peerDbId">
    <td><CopyableCode code="peerDbId" /></td>
    <td><code>string</code></td>
    <td>The database OCID(/Content/General/Concepts/identifiers.htm) of the Disaster Recovery peer (source Primary) database, which is located in a different (remote) region from the current peer database.</td>
</tr>
<tr id="parameter-resourcePoolLeaderId">
    <td><CopyableCode code="resourcePoolLeaderId" /></td>
    <td><code>string</code></td>
    <td>The database &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the resourcepool Leader Autonomous AI Database.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is descending.  Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** If you do not include the availability domain filter, the resources are grouped by availability domain, then sorted. </td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order to use, either ascending (`ASC`) or descending (`DESC`).</td>
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

Gets the details of the specified Autonomous AI Database.&lt;br /&gt;

```sql
SELECT
id,
accessTypes,
actualUsedDataStorageSizeInTBs,
allocatedStorageSizeInTBs,
apexDetails,
arePrimaryWhitelistedIpsUsed,
autoRefreshFrequencyInSeconds,
autoRefreshPointLagInSeconds,
autonomousContainerDatabaseId,
autonomousMaintenanceScheduleType,
availabilityDomain,
availableUpgradeVersions,
backupConfig,
byolComputeCountLimit,
characterSet,
cloneTableSpaceList,
cloneType,
clusterPlacementGroupId,
compartmentId,
computeCount,
computeModel,
connectionStrings,
connectionUrls,
cpuCoreCount,
customerContacts,
dataSafeStatus,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
databaseEdition,
databaseManagementStatus,
dataguardRegionType,
dbName,
dbToolsDetails,
dbVersion,
dbWorkload,
definedTags,
disasterRecoveryRegionType,
displayName,
encryptionKey,
encryptionKeyHistoryEntry,
failedDataRecoveryInSeconds,
freeformTags,
inMemoryAreaInGBs,
inMemoryPercentage,
infrastructureType,
isAccessControlEnabled,
isAutoScalingEnabled,
isAutoScalingForStorageEnabled,
isBackupRetentionLocked,
isDataGuardEnabled,
isDedicated,
isDevTier,
isFreeTier,
isLocalDataGuardEnabled,
isMtlsConnectionRequired,
isPreview,
isReconnectCloneEnabled,
isRefreshableClone,
isRemoteDataGuardEnabled,
keyHistoryEntry,
keyStoreId,
keyStoreWalletName,
kmsKeyId,
kmsKeyLifecycleDetails,
kmsKeyVersionId,
licenseModel,
lifecycleDetails,
lifecycleState,
localAdgAutoFailoverMaxDataLossLimit,
localDisasterRecoveryType,
localStandbyDb,
longTermBackupSchedule,
maintenanceTargetComponent,
memoryPerOracleComputeUnitInGBs,
ncharacterSet,
netServicesArchitecture,
nextLongTermBackupTimeStamp,
nsgIds,
ocpuCount,
openMode,
operationsInsightsStatus,
peerDbIds,
permissionLevel,
privateEndpoint,
privateEndpointIp,
privateEndpointLabel,
provisionableCpus,
publicConnectionUrls,
publicEndpoint,
refreshableMode,
refreshableStatus,
remoteDisasterRecoveryConfiguration,
resourcePoolLeaderId,
resourcePoolSummary,
role,
scheduledOperations,
securityAttributes,
serviceConsoleUrl,
sourceId,
sqlWebDeveloperUrl,
standbyDb,
standbyWhitelistedIps,
subnetId,
subscriptionId,
supportedRegionsToCloneTo,
systemTags,
timeCreated,
timeDataGuardRoleChanged,
timeDeletionOfFreeAutonomousDatabase,
timeDisasterRecoveryRoleChanged,
timeLocalDataGuardEnabled,
timeMaintenanceBegin,
timeMaintenanceEnd,
timeOfAutoRefreshStart,
timeOfJoiningResourcePool,
timeOfLastFailover,
timeOfLastRefresh,
timeOfLastRefreshPoint,
timeOfLastSwitchover,
timeOfNextRefresh,
timeReclamationOfFreeAutonomousDatabase,
timeUndeleted,
timeUntilReconnectCloneEnabled,
usedDataStorageSizeInGBs,
usedDataStorageSizeInTBs,
vaultId,
whitelistedIps
FROM oci.database.autonomous_databases
WHERE autonomousDatabaseId = '{{ autonomousDatabaseId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Gets a list of Autonomous AI Databases based on the query parameters specified.&lt;br /&gt;

```sql
SELECT
id,
accessTypes,
actualUsedDataStorageSizeInTBs,
allocatedStorageSizeInTBs,
apexDetails,
arePrimaryWhitelistedIpsUsed,
autoRefreshFrequencyInSeconds,
autoRefreshPointLagInSeconds,
autonomousContainerDatabaseId,
autonomousMaintenanceScheduleType,
availabilityDomain,
availableUpgradeVersions,
backupConfig,
byolComputeCountLimit,
characterSet,
cloneTableSpaceList,
cloneType,
clusterPlacementGroupId,
compartmentId,
computeCount,
computeModel,
connectionStrings,
connectionUrls,
cpuCoreCount,
customerContacts,
dataSafeStatus,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
databaseEdition,
databaseManagementStatus,
dataguardRegionType,
dbName,
dbToolsDetails,
dbVersion,
dbWorkload,
definedTags,
disasterRecoveryRegionType,
displayName,
encryptionKey,
encryptionKeyHistoryEntry,
failedDataRecoveryInSeconds,
freeformTags,
inMemoryAreaInGBs,
inMemoryPercentage,
infrastructureType,
isAccessControlEnabled,
isAutoScalingEnabled,
isAutoScalingForStorageEnabled,
isBackupRetentionLocked,
isDataGuardEnabled,
isDedicated,
isDevTier,
isFreeTier,
isLocalDataGuardEnabled,
isMtlsConnectionRequired,
isPreview,
isReconnectCloneEnabled,
isRefreshableClone,
isRemoteDataGuardEnabled,
keyHistoryEntry,
keyStoreId,
keyStoreWalletName,
kmsKeyId,
kmsKeyLifecycleDetails,
kmsKeyVersionId,
licenseModel,
lifecycleDetails,
lifecycleState,
localAdgAutoFailoverMaxDataLossLimit,
localDisasterRecoveryType,
localStandbyDb,
longTermBackupSchedule,
maintenanceTargetComponent,
memoryPerOracleComputeUnitInGBs,
ncharacterSet,
netServicesArchitecture,
nextLongTermBackupTimeStamp,
nsgIds,
ocpuCount,
openMode,
operationsInsightsStatus,
peerDbIds,
permissionLevel,
privateEndpoint,
privateEndpointIp,
privateEndpointLabel,
provisionableCpus,
publicConnectionUrls,
publicEndpoint,
refreshableMode,
refreshableStatus,
remoteDisasterRecoveryConfiguration,
resourcePoolLeaderId,
resourcePoolSummary,
role,
scheduledOperations,
securityAttributes,
serviceConsoleUrl,
sourceId,
sqlWebDeveloperUrl,
standbyDb,
standbyWhitelistedIps,
subnetId,
subscriptionId,
supportedRegionsToCloneTo,
systemTags,
timeCreated,
timeDataGuardRoleChanged,
timeDeletionOfFreeAutonomousDatabase,
timeDisasterRecoveryRoleChanged,
timeLocalDataGuardEnabled,
timeMaintenanceBegin,
timeMaintenanceEnd,
timeOfAutoRefreshStart,
timeOfJoiningResourcePool,
timeOfLastFailover,
timeOfLastRefresh,
timeOfLastRefreshPoint,
timeOfLastSwitchover,
timeOfNextRefresh,
timeReclamationOfFreeAutonomousDatabase,
timeUndeleted,
timeUntilReconnectCloneEnabled,
usedDataStorageSizeInGBs,
usedDataStorageSizeInTBs,
vaultId,
whitelistedIps
FROM oci.database.autonomous_databases
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND autonomousContainerDatabaseId = '{{ autonomousContainerDatabaseId }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND infrastructureType = '{{ infrastructureType }}'
AND lifecycleState = '{{ lifecycleState }}'
AND lifecycleStateNotEqualTo = '{{ lifecycleStateNotEqualTo }}'
AND dbWorkload = '{{ dbWorkload }}'
AND dbVersion = '{{ dbVersion }}'
AND isFreeTier = '{{ isFreeTier }}'
AND displayName = '{{ displayName }}'
AND opc-request-id = '{{ opc-request-id }}'
AND isRefreshableClone = '{{ isRefreshableClone }}'
AND isDataGuardEnabled = '{{ isDataGuardEnabled }}'
AND isResourcePoolLeader = '{{ isResourcePoolLeader }}'
AND resourcePoolLeaderId = '{{ resourcePoolLeaderId }}'
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

Creates a new Autonomous AI Database.&lt;br /&gt;

```sql
INSERT INTO oci.database.autonomous_databases (
adminPassword,
arePrimaryWhitelistedIpsUsed,
autonomousContainerDatabaseId,
autonomousMaintenanceScheduleType,
byolComputeCountLimit,
characterSet,
compartmentId,
computeCount,
computeModel,
cpuCoreCount,
customerContacts,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
databaseEdition,
dbName,
dbToolsDetails,
dbVersion,
dbWorkload,
definedTags,
displayName,
encryptionKey,
freeformTags,
inMemoryPercentage,
isAccessControlEnabled,
isAutoScalingEnabled,
isAutoScalingForStorageEnabled,
isBackupRetentionLocked,
isDataGuardEnabled,
isDedicated,
isDevTier,
isFreeTier,
isLocalDataGuardEnabled,
isMtlsConnectionRequired,
isPreviewVersionWithServiceTermsAccepted,
kmsKeyId,
licenseModel,
ncharacterSet,
nsgIds,
ocpuCount,
privateEndpointIp,
privateEndpointLabel,
resourcePoolLeaderId,
resourcePoolSummary,
scheduledOperations,
secretId,
secretVersionNumber,
securityAttributes,
source,
standbyWhitelistedIps,
subnetId,
subscriptionId,
transportableTablespace,
vaultId,
whitelistedIps,
region,
opc-retry-token,
opc-request-id
)
SELECT 
'{{ adminPassword }}',
{{ arePrimaryWhitelistedIpsUsed }},
'{{ autonomousContainerDatabaseId }}',
'{{ autonomousMaintenanceScheduleType }}',
{{ byolComputeCountLimit }},
'{{ characterSet }}',
'{{ compartmentId }}' /* required */,
{{ computeCount }},
'{{ computeModel }}',
{{ cpuCoreCount }},
'{{ customerContacts }}',
{{ dataStorageSizeInGBs }},
{{ dataStorageSizeInTBs }},
'{{ databaseEdition }}',
'{{ dbName }}',
'{{ dbToolsDetails }}',
'{{ dbVersion }}',
'{{ dbWorkload }}',
'{{ definedTags }}',
'{{ displayName }}',
'{{ encryptionKey }}',
'{{ freeformTags }}',
{{ inMemoryPercentage }},
{{ isAccessControlEnabled }},
{{ isAutoScalingEnabled }},
{{ isAutoScalingForStorageEnabled }},
{{ isBackupRetentionLocked }},
{{ isDataGuardEnabled }},
{{ isDedicated }},
{{ isDevTier }},
{{ isFreeTier }},
{{ isLocalDataGuardEnabled }},
{{ isMtlsConnectionRequired }},
{{ isPreviewVersionWithServiceTermsAccepted }},
'{{ kmsKeyId }}',
'{{ licenseModel }}',
'{{ ncharacterSet }}',
'{{ nsgIds }}',
{{ ocpuCount }},
'{{ privateEndpointIp }}',
'{{ privateEndpointLabel }}',
'{{ resourcePoolLeaderId }}',
'{{ resourcePoolSummary }}',
'{{ scheduledOperations }}',
'{{ secretId }}',
{{ secretVersionNumber }},
'{{ securityAttributes }}',
'{{ source }}',
'{{ standbyWhitelistedIps }}',
'{{ subnetId }}',
'{{ subscriptionId }}',
'{{ transportableTablespace }}',
'{{ vaultId }}',
'{{ whitelistedIps }}',
'{{ region }}',
'{{ opc-retry-token }}',
'{{ opc-request-id }}'
RETURNING
id,
accessTypes,
actualUsedDataStorageSizeInTBs,
allocatedStorageSizeInTBs,
apexDetails,
arePrimaryWhitelistedIpsUsed,
autoRefreshFrequencyInSeconds,
autoRefreshPointLagInSeconds,
autonomousContainerDatabaseId,
autonomousMaintenanceScheduleType,
availabilityDomain,
availableUpgradeVersions,
backupConfig,
byolComputeCountLimit,
characterSet,
cloneTableSpaceList,
cloneType,
clusterPlacementGroupId,
compartmentId,
computeCount,
computeModel,
connectionStrings,
connectionUrls,
cpuCoreCount,
customerContacts,
dataSafeStatus,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
databaseEdition,
databaseManagementStatus,
dataguardRegionType,
dbName,
dbToolsDetails,
dbVersion,
dbWorkload,
definedTags,
disasterRecoveryRegionType,
displayName,
encryptionKey,
encryptionKeyHistoryEntry,
failedDataRecoveryInSeconds,
freeformTags,
inMemoryAreaInGBs,
inMemoryPercentage,
infrastructureType,
isAccessControlEnabled,
isAutoScalingEnabled,
isAutoScalingForStorageEnabled,
isBackupRetentionLocked,
isDataGuardEnabled,
isDedicated,
isDevTier,
isFreeTier,
isLocalDataGuardEnabled,
isMtlsConnectionRequired,
isPreview,
isReconnectCloneEnabled,
isRefreshableClone,
isRemoteDataGuardEnabled,
keyHistoryEntry,
keyStoreId,
keyStoreWalletName,
kmsKeyId,
kmsKeyLifecycleDetails,
kmsKeyVersionId,
licenseModel,
lifecycleDetails,
lifecycleState,
localAdgAutoFailoverMaxDataLossLimit,
localDisasterRecoveryType,
localStandbyDb,
longTermBackupSchedule,
maintenanceTargetComponent,
memoryPerOracleComputeUnitInGBs,
ncharacterSet,
netServicesArchitecture,
nextLongTermBackupTimeStamp,
nsgIds,
ocpuCount,
openMode,
operationsInsightsStatus,
peerDbIds,
permissionLevel,
privateEndpoint,
privateEndpointIp,
privateEndpointLabel,
provisionableCpus,
publicConnectionUrls,
publicEndpoint,
refreshableMode,
refreshableStatus,
remoteDisasterRecoveryConfiguration,
resourcePoolLeaderId,
resourcePoolSummary,
role,
scheduledOperations,
securityAttributes,
serviceConsoleUrl,
sourceId,
sqlWebDeveloperUrl,
standbyDb,
standbyWhitelistedIps,
subnetId,
subscriptionId,
supportedRegionsToCloneTo,
systemTags,
timeCreated,
timeDataGuardRoleChanged,
timeDeletionOfFreeAutonomousDatabase,
timeDisasterRecoveryRoleChanged,
timeLocalDataGuardEnabled,
timeMaintenanceBegin,
timeMaintenanceEnd,
timeOfAutoRefreshStart,
timeOfJoiningResourcePool,
timeOfLastFailover,
timeOfLastRefresh,
timeOfLastRefreshPoint,
timeOfLastSwitchover,
timeOfNextRefresh,
timeReclamationOfFreeAutonomousDatabase,
timeUndeleted,
timeUntilReconnectCloneEnabled,
usedDataStorageSizeInGBs,
usedDataStorageSizeInTBs,
vaultId,
whitelistedIps
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: autonomous_databases
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the autonomous_databases resource.
    - name: adminPassword
      value: "{{ adminPassword }}"
      description: |
        **Important** The \`adminPassword\` or \`secretId\` must be specified for all Autonomous AI Databases except for refreshable clones. The password must be between 12 and 30 characters long, and must contain at least 1 uppercase, 1 lowercase, and 1 numeric character. It cannot contain the double quote symbol (") or the username "admin", regardless of casing.
        This cannot be used in conjunction with with OCI vault secrets (secretId).
    - name: arePrimaryWhitelistedIpsUsed
      value: {{ arePrimaryWhitelistedIpsUsed }}
      description: |
        This field will be null if the Autonomous AI Database is not Data Guard enabled or Access Control is disabled.
        It's value would be \`TRUE\` if Autonomous AI Database is Data Guard enabled and Access Control is enabled and if the Autonomous AI Database uses primary IP access control list (ACL) for standby.
        It's value would be \`FALSE\` if Autonomous AI Database is Data Guard enabled and Access Control is enabled and if the Autonomous AI Database uses different IP access control list (ACL) for standby compared to primary.
    - name: autonomousContainerDatabaseId
      value: "{{ autonomousContainerDatabaseId }}"
      description: |
        The Autonomous Container Database [OCID](/Content/General/Concepts/identifiers.htm). Used only by Autonomous AI Database on Dedicated Exadata Infrastructure.
    - name: autonomousMaintenanceScheduleType
      value: "{{ autonomousMaintenanceScheduleType }}"
      description: |
        The maintenance schedule type of the Autonomous AI Database Serverless. An EARLY maintenance schedule
        follows a schedule applying patches prior to the REGULAR schedule. A REGULAR maintenance schedule follows the normal cycle
      valid_values: ['EARLY', 'REGULAR']
    - name: byolComputeCountLimit
      value: {{ byolComputeCountLimit }}
      description: |
        The maximum number of CPUs allowed with a Bring Your Own License (BYOL), including those used for auto-scaling, disaster recovery, tools, etc. Any CPU usage above this limit is considered as License Included and billed.
    - name: characterSet
      value: "{{ characterSet }}"
      description: |
        The character set for the Autonomous AI Database. The default is AL32UTF8. Allowed values for an Autonomous AI Database Serverless instance as as returned by [List Autonomous AI Database Character Sets](https://docs.oracle.com/iaas/autonomous-database-serverless/doc/autonomous-character-set-selection.html)
        For an Autonomous AI Database on dedicated infrastructure, the allowed values are:
        AL32UTF8, AR8ADOS710, AR8ADOS720, AR8APTEC715, AR8ARABICMACS, AR8ASMO8X, AR8ISO8859P6, AR8MSWIN1256, AR8MUSSAD768, AR8NAFITHA711, AR8NAFITHA721, AR8SAKHR706, AR8SAKHR707, AZ8ISO8859P9E, BG8MSWIN, BG8PC437S, BLT8CP921, BLT8ISO8859P13, BLT8MSWIN1257, BLT8PC775, BN8BSCII, CDN8PC863, CEL8ISO8859P14, CL8ISO8859P5, CL8ISOIR111, CL8KOI8R, CL8KOI8U, CL8MACCYRILLICS, CL8MSWIN1251, EE8ISO8859P2, EE8MACCES, EE8MACCROATIANS, EE8MSWIN1250, EE8PC852, EL8DEC, EL8ISO8859P7, EL8MACGREEKS, EL8MSWIN1253, EL8PC437S, EL8PC851, EL8PC869, ET8MSWIN923, HU8ABMOD, HU8CWI2, IN8ISCII, IS8PC861, IW8ISO8859P8, IW8MACHEBREWS, IW8MSWIN1255, IW8PC1507, JA16EUC, JA16EUCTILDE, JA16SJIS, JA16SJISTILDE, JA16VMS, KO16KSC5601, KO16KSCCS, KO16MSWIN949, LA8ISO6937, LA8PASSPORT, LT8MSWIN921, LT8PC772, LT8PC774, LV8PC1117, LV8PC8LR, LV8RST104090, N8PC865, NE8ISO8859P10, NEE8ISO8859P4, RU8BESTA, RU8PC855, RU8PC866, SE8ISO8859P3, TH8MACTHAIS, TH8TISASCII, TR8DEC, TR8MACTURKISHS, TR8MSWIN1254, TR8PC857, US7ASCII, US8PC437, UTF8, VN8MSWIN1258, VN8VN3, WE8DEC, WE8DG, WE8ISO8859P1, WE8ISO8859P15, WE8ISO8859P9, WE8MACROMAN8S, WE8MSWIN1252, WE8NCR4970, WE8NEXTSTEP, WE8PC850, WE8PC858, WE8PC860, WE8ROMAN8, ZHS16CGB231280, ZHS16GBK, ZHT16BIG5, ZHT16CCDC, ZHT16DBT, ZHT16HKSCS, ZHT16MSWIN950, ZHT32EUC, ZHT32SOPS, ZHT32TRIS
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the compartment of the Autonomous AI Database.
    - name: computeCount
      value: {{ computeCount }}
      description: |
        The compute amount (CPUs) available to the database. Minimum and maximum values depend on the compute model and whether the database is an Autonomous AI Database Serverless instance or an Autonomous AI Database on Dedicated Exadata Infrastructure.
        The 'ECPU' compute model requires a minimum value of one, for databases in the elastic resource pool and minimum value of two, otherwise. Required when using the \`computeModel\` parameter. When using \`cpuCoreCount\` parameter, it is an error to specify computeCount to a non-null value. Providing \`computeModel\` and \`computeCount\` is the preferred method for both OCPU and ECPU.
    - name: computeModel
      value: "{{ computeModel }}"
      description: |
        The compute model of the Base Database, Exadata Infrastructure, VM Cluster and Autonomous AI Database.
      valid_values: ['ECPU', 'OCPU']
    - name: cpuCoreCount
      value: {{ cpuCoreCount }}
      description: |
        The number of CPU cores to be made available to the database. For Autonomous AI Databases on dedicated Exadata infrastructure, the maximum number of cores is determined by the infrastructure shape. See [Characteristics of Infrastructure Shapes](https://docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbde/) for shape details.
        **Note:** This parameter cannot be used with the \`ocpuCount\` parameter.
    - name: customerContacts
      description: |
        Customer Contacts.
      value:
        - email: "{{ email }}"
    - name: dataStorageSizeInGBs
      value: {{ dataStorageSizeInGBs }}
      description: |
        The size, in gigabytes, of the data volume that will be created and attached to the database. This storage can later be scaled up if needed. The maximum storage value is determined by the infrastructure shape. See [Characteristics of Infrastructure Shapes](https://docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbde/) for shape details.
        **Notes**
        - This parameter is only supported for dedicated Exadata infrastructure.
        - This parameter cannot be used with the \`dataStorageSizeInTBs\` parameter.
    - name: dataStorageSizeInTBs
      value: {{ dataStorageSizeInTBs }}
      description: |
        The size, in terabytes, of the data volume that will be created and attached to the database. This storage can later be scaled up if needed. For Autonomous AI Databases on dedicated Exadata infrastructure, the maximum storage value is determined by the infrastructure shape. See [Characteristics of Infrastructure Shapes](https://docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbde/) for shape details.
        A full Exadata service is allocated when the Autonomous AI Database size is set to the upper limit (384 TB).
        **Note:** This parameter cannot be used with the \`dataStorageSizeInGBs\` parameter.
    - name: databaseEdition
      value: "{{ databaseEdition }}"
      description: |
        The Oracle AI Database Edition that applies to the Autonomous AI Databases. This parameter accepts options \`STANDARD_EDITION\` and \`ENTERPRISE_EDITION\`.
    - name: dbName
      value: "{{ dbName }}"
      description: |
        The database name. The name must begin with an alphabetic character and can contain a maximum of 30 alphanumeric characters. Special characters are not permitted. The database name must be unique in the tenancy. It is required in all cases except when creating a cross-region Autonomous Data Guard standby instance or a cross-region disaster recovery standby instance.
    - name: dbToolsDetails
      description: |
        The list of database tools details.
        This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, isLocalDataGuardEnabled, or isFreeTier.
      value:
        - isEnabled: {{ isEnabled }}
          name: "{{ name }}"
    - name: dbVersion
      value: "{{ dbVersion }}"
      description: |
        A valid Oracle AI Database version for Autonomous AI Database.
        When you specify 23ai for dbversion, the system will provision a 23ai database, but the UI will display it as 26ai.
        When you specify 26ai for dbversion, the system will provision and display a 26ai database as expected.
        For new databases, it is recommended to use either 19c or 26ai.
        **Note** Starting December 2026, 23ai will not be supported as a valid value for this parameter.
    - name: dbWorkload
      value: "{{ dbWorkload }}"
      description: |
        The Autonomous AI Database workload type. The following values are valid:
        - OLTP - indicates an Autonomous AI Transaction Processing database
        - DW - indicates an Autonomous AI Lakehouse database
        - AJD - indicates an Autonomous AI JSON Database
        - APEX - indicates an Autonomous AI Database with the Oracle APEX AI Application Development workload type.
        - LH - indicates an Oracle Autonomous AI Lakehouse database
        **Note** Starting December 2026, DW will not be supported as a valid value for this parameter.
        When creating an Autonomous AI Database, if this parameter is not specified, the default value is \`OLTP\`.
        This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.
      valid_values: ['OLTP', 'DW', 'AJD', 'APEX', 'LH']
    - name: definedTags
      value: "{{ definedTags }}"
      description: |
        Defined tags for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
    - name: displayName
      value: "{{ displayName }}"
      description: |
        The user-friendly name for the Autonomous AI Database. The name does not have to be unique.
    - name: encryptionKey
      description: |
        Details of the Autonomous AI Database encryption key.
      value:
        provider: "{{ provider }}"
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
        For more information, see [Resource Tags](/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: inMemoryPercentage
      value: {{ inMemoryPercentage }}
      description: |
        The percentage of the System Global Area(SGA) assigned to In-Memory tables in Autonomous AI Database. This property is applicable only to Autonomous AI Databases on the Exadata Cloud@Customer platform.
      default: 0
    - name: isAccessControlEnabled
      value: {{ isAccessControlEnabled }}
      description: |
        Indicates if the database-level access control is enabled.
        If disabled, database access is defined by the network security rules.
        If enabled, database access is restricted to the IP addresses defined by the rules specified with the \`whitelistedIps\` property. While specifying \`whitelistedIps\` rules is optional,
        if database-level access control is enabled and no rules are specified, the database will become inaccessible. The rules can be added later using the \`UpdateAutonomousDatabase\` API operation or edit option in console.
        When creating a database clone, the desired access control setting should be specified. By default, database-level access control will be disabled for the clone.
        This property is applicable only to Autonomous AI Databases on the Exadata Cloud@Customer platform. For Autonomous AI Database Serverless instances, \`whitelistedIps\` is used.
    - name: isAutoScalingEnabled
      value: {{ isAutoScalingEnabled }}
      description: |
        Indicates if auto scaling is enabled for the Autonomous AI Database CPU core count. The default value is \`TRUE\`.
      default: false
    - name: isAutoScalingForStorageEnabled
      value: {{ isAutoScalingForStorageEnabled }}
      description: |
        Indicates if auto scaling is enabled for the Autonomous AI Database storage. The default value is \`FALSE\`.
    - name: isBackupRetentionLocked
      value: {{ isBackupRetentionLocked }}
      description: |
        True if the Autonomous AI Database is backup retention locked.
    - name: isDataGuardEnabled
      value: {{ isDataGuardEnabled }}
      description: |
        **Deprecated.** Indicates whether the Autonomous AI Database has local (in-region) Data Guard enabled. Not applicable to cross-region Autonomous Data Guard associations, or to Autonomous AI Databases using dedicated Exadata infrastructure or Exadata Cloud@Customer infrastructure.
    - name: isDedicated
      value: {{ isDedicated }}
      description: |
        True if the database is on [dedicated Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html).
    - name: isDevTier
      value: {{ isDevTier }}
      description: |
        Autonomous AI Database for Developers are fixed-shape Autonomous AI Databases that developers can use to build and test new applications. On Serverless, these are low-cost and billed per instance, on Dedicated and Cloud@Customer there is no additional cost to create Developer databases. Developer databases come with limited resources and is not intended for large-scale testing and production deployments. When you need more compute or storage resources, you may upgrade to a full paid production database.
      default: false
    - name: isFreeTier
      value: {{ isFreeTier }}
      description: |
        Indicates if this is an Always Free resource. The default value is false. Note that Always Free Autonomous AI Databases have 1 CPU and 20GB of memory. For Always Free databases, memory and CPU cannot be scaled.
        This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isLocalDataGuardEnabled
      default: false
    - name: isLocalDataGuardEnabled
      value: {{ isLocalDataGuardEnabled }}
      description: |
        Indicates whether the Autonomous AI Database has local (in-region) Data Guard enabled. Not applicable to cross-region Autonomous Data Guard associations, or to Autonomous AI Databases using dedicated Exadata infrastructure or Exadata Cloud@Customer infrastructure.
    - name: isMtlsConnectionRequired
      value: {{ isMtlsConnectionRequired }}
      description: |
        Specifies if the Autonomous AI Database requires mTLS connections.
        This may not be updated in parallel with any of the following: licenseModel, databaseEdition, cpuCoreCount, computeCount, dataStorageSizeInTBs, whitelistedIps, openMode, permissionLevel, db-workload, privateEndpointLabel, nsgIds, customerContacts, dbVersion, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.
        Service Change: The default value of the isMTLSConnectionRequired attribute will change from true to false on July 1, 2023 in the following APIs:
        - CreateAutonomousDatabase
        - GetAutonomousDatabase
        - UpdateAutonomousDatabase
        Details: Prior to the July 1, 2023 change, the isMTLSConnectionRequired attribute default value was true. This applies to Autonomous AI Database Serverless.
        Does this impact me? If you use or maintain custom scripts or Terraform scripts referencing the CreateAutonomousDatabase, GetAutonomousDatabase, or UpdateAutonomousDatabase APIs, you want to check, and possibly modify, the scripts for the changed default value of the attribute. Should you choose not to leave your scripts unchanged, the API calls containing this attribute will continue to work, but the default value will switch from true to false.
        How do I make this change? Using either OCI SDKs or command line tools, update your custom scripts to explicitly set the isMTLSConnectionRequired attribute to true.
    - name: isPreviewVersionWithServiceTermsAccepted
      value: {{ isPreviewVersionWithServiceTermsAccepted }}
      description: |
        If set to \`TRUE\`, indicates that an Autonomous AI Database preview version is being provisioned, and that the preview version's terms of service have been accepted. Note that preview version software is only available for Autonomous AI Database Serverless instances (https://docs.oracle.com/en/cloud/paas/autonomous-database/serverless/).
      default: false
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
      description: |
        The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
    - name: licenseModel
      value: "{{ licenseModel }}"
      description: |
        The Oracle license model that applies to the Oracle Autonomous AI Database. Bring your own license (BYOL) allows you to apply your current on-premises Oracle software licenses to equivalent, highly automated Oracle services in the cloud.
        License Included allows you to subscribe to new Oracle AI Database software licenses and the Oracle AI Database service.
        Note that when provisioning an [Autonomous AI Database on dedicated Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html), this attribute must be null. It is already set at the
        Autonomous Exadata Infrastructure level. When provisioning an [Autonomous AI Database Serverless] (https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html) database, if a value is not specified, the system defaults the value to \`BRING_YOUR_OWN_LICENSE\`. Bring your own license (BYOL) also allows you to select the DB edition using the optional parameter.
        This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, dataStorageSizeInTBs, adminPassword, isMTLSConnectionRequired, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
      valid_values: ['LICENSE_INCLUDED', 'BRING_YOUR_OWN_LICENSE']
    - name: ncharacterSet
      value: "{{ ncharacterSet }}"
      description: |
        The character set for the Autonomous AI Database. The default is AL32UTF8. Use [List Autonomous AI Database Character Sets](https://docs.oracle.com/iaas/autonomous-database-serverless/doc/autonomous-character-set-selection.html) to list the allowed values for an Autonomous AI Database Serverless instance.
        For an Autonomous AI Database on dedicated Exadata infrastructure, the allowed values are:
        AL16UTF16 or UTF8.
    - name: nsgIds
      value:
        - "{{ nsgIds }}"
      description: |
        The list of [OCIDs](/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](/Content/Network/Concepts/securityrules.htm).
    - name: ocpuCount
      value: {{ ocpuCount }}
      description: |
        The number of OCPU cores to be made available to the database.
        The following points apply:
        - For Autonomous AI Databases on Dedicated Exadata infrastructure, to provision less than 1 core, enter a fractional value in an increment of 0.1. For example, you can provision 0.3 or 0.4 cores, but not 0.35 cores. (Note that fractional OCPU values are not supported for Autonomous AI Database Serverless instances.)
        - To provision 1 or more cores, you must enter an integer between 1 and the maximum number of cores available for the infrastructure shape. For example, you can provision 2 cores or 3 cores, but not 2.5 cores. This applies to an Autonomous AI Database Serverless instance or an Autonomous AI Database on Dedicated Exadata Infrastructure.
        - For Autonomous AI Database Serverless instances, this parameter is not used.
        For Autonomous AI Databases on Dedicated Exadata infrastructure, the maximum number of cores is determined by the infrastructure shape. See [Characteristics of Infrastructure Shapes](https://docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbde/) for shape details.
        **Note:** This parameter cannot be used with the \`cpuCoreCount\` parameter.
    - name: privateEndpointIp
      value: "{{ privateEndpointIp }}"
      description: |
        The private endpoint Ip address for the resource.
    - name: privateEndpointLabel
      value: "{{ privateEndpointLabel }}"
      description: |
        The resource's private endpoint label.
        - Setting the endpoint label to a non-empty string creates a private endpoint database.
        - Resetting the endpoint label to an empty string, after the creation of the private endpoint database, changes the private endpoint database to a public endpoint database.
        - Setting the endpoint label to a non-empty string value, updates to a new private endpoint database, when the database is disabled and re-enabled.
        This setting cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, whitelistedIps, isMTLSConnectionRequired, dbWorkload, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
    - name: resourcePoolLeaderId
      value: "{{ resourcePoolLeaderId }}"
      description: |
        The unique identifier for leader Autonomous AI Database OCID [OCID](/Content/General/Concepts/identifiers.htm).
    - name: resourcePoolSummary
      description: |
        The configuration details for resource pool
      value:
        availableComputeCapacity: {{ availableComputeCapacity }}
        isDisabled: {{ isDisabled }}
        poolSize: {{ poolSize }}
        totalComputeCapacity: {{ totalComputeCapacity }}
    - name: scheduledOperations
      description: |
        The list of scheduled operations. Consists of values such as dayOfWeek, scheduledStartTime, scheduledStopTime.
        This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, whitelistedIps, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, isRefreshable, dbName, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.
      value:
        - dayOfWeek:
            name: "{{ name }}"
          scheduledStartTime: "{{ scheduledStartTime }}"
          scheduledStopTime: "{{ scheduledStopTime }}"
    - name: secretId
      value: "{{ secretId }}"
      description: |
        The OCI vault secret [/Content/General/Concepts/identifiers.htm]OCID.
        This cannot be used in conjunction with adminPassword.
    - name: secretVersionNumber
      value: {{ secretVersionNumber }}
      description: |
        The version of the vault secret. If no version is specified, the latest version will be used.
    - name: securityAttributes
      value: "{{ securityAttributes }}"
      description: |
        Security Attributes for this resource. Each key is predefined and scoped to a namespace.
        For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Oracle-ZPR": {"MaxEgressCount": {"value": "42", "mode": "audit"}}}\`
    - name: source
      value: "{{ source }}"
      description: |
        The source of the database: Use \`NONE\` for creating a new Autonomous AI Database. Use \`DATABASE\` for creating a new Autonomous AI Database by cloning an existing Autonomous AI Database. Use \`CROSS_REGION_DATAGUARD\` to create a standby Data Guard database in another region.
        For [Autonomous AI Database Serverless instances](https://docs.oracle.com/en/cloud/paas/autonomous-database/serverless/), the following cloning options are available: Use \`BACKUP_FROM_ID\` for creating a new Autonomous AI Database from a specified backup. Use \`BACKUP_FROM_TIMESTAMP\` for creating a point-in-time Autonomous AI Database clone using backups. For more information, see [Cloning and Moving an Autonomous AI Database](https://docs.oracle.com/en/cloud/paas/autonomous-database/adbsa/clone-autonomous-database.html#GUID-D771796F-5081-4CFB-A7FF-0F893EABD7BC).
      valid_values: ['NONE', 'DATABASE', 'BACKUP_FROM_ID', 'BACKUP_FROM_TIMESTAMP', 'UNDELETE_ADB', 'CLONE_TO_REFRESHABLE', 'CROSS_REGION_DATAGUARD', 'CROSS_REGION_DISASTER_RECOVERY']
      default: NONE
    - name: standbyWhitelistedIps
      value:
        - "{{ standbyWhitelistedIps }}"
      description: |
        The client IP access control list (ACL). This feature is available for [Autonomous AI Database Serverless] (https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html) and on Exadata Cloud@Customer.
        Only clients connecting from an IP address included in the ACL may access the Autonomous AI Database instance.
        If \`arePrimaryWhitelistedIpsUsed\` is 'TRUE' then Autonomous AI Database uses this primary's IP access control list (ACL) for the disaster recovery peer called \`standbywhitelistedips\`.
        For Autonomous AI Database Serverless, this is an array of CIDR (classless inter-domain routing) notations for a subnet or VCN OCID (virtual cloud network Oracle Cloud ID).
        Multiple IPs and VCN OCIDs should be separate strings separated by commas, but if it’s other configurations that need multiple pieces of information then its each piece is connected with semicolon (;) as a delimiter.
        Example: \`["1.1.1.1","1.1.1.0/24","ocid1.vcn.oc1.sea.<unique_id>","ocid1.vcn.oc1.sea.<unique_id1>;1.1.1.1","ocid1.vcn.oc1.sea.<unique_id2>;1.1.0.0/16"]\`
        For Exadata Cloud@Customer, this is an array of IP addresses or CIDR notations.
        Example: \`["1.1.1.1","1.1.1.0/24","1.1.2.25"]\`
        For an update operation, if you want to delete all the IPs in the ACL, use an array with a single empty string entry.
        This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.
    - name: subnetId
      value: "{{ subnetId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the subnet the resource is associated with.
        **Subnet Restrictions:**
        - For bare metal DB systems and for single node virtual machine DB systems, do not use a subnet that overlaps with 192.168.16.16/28.
        - For Exadata and virtual machine 2-node RAC systems, do not use a subnet that overlaps with 192.168.128.0/20.
        - For Autonomous AI Database, setting this will disable public secure access to the database.
        These subnets are used by the Oracle Clusterware private interconnect on the database instance.
        Specifying an overlapping subnet will cause the private interconnect to malfunction.
        This restriction applies to both the client subnet and the backup subnet.
    - name: subscriptionId
      value: "{{ subscriptionId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the subscription with which resource needs to be associated with.
    - name: transportableTablespace
      description: |
        Details for importing transportable tablespace for an Autonomous AI Database.
      value:
        ttsBundleUrl: "{{ ttsBundleUrl }}"
    - name: vaultId
      value: "{{ vaultId }}"
      description: |
        The [OCID](/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure [vault](/Content/KeyManagement/Concepts/keyoverview.htm#concepts). This parameter and \`secretId\` are required for Customer Managed Keys.
    - name: whitelistedIps
      value:
        - "{{ whitelistedIps }}"
      description: |
        The client IP access control list (ACL). This feature is available for [Autonomous AI Database Serverless] (https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html) and on Exadata Cloud@Customer.
        Only clients connecting from an IP address included in the ACL may access the Autonomous AI Database instance.
        If \`arePrimaryWhitelistedIpsUsed\` is 'TRUE' then Autonomous AI Database uses this primary's IP access control list (ACL) for the disaster recovery peer called \`standbywhitelistedips\`.
        For Autonomous AI Database Serverless, this is an array of CIDR (classless inter-domain routing) notations for a subnet or VCN OCID (virtual cloud network Oracle Cloud ID).
        Multiple IPs and VCN OCIDs should be separate strings separated by commas, but if it’s other configurations that need multiple pieces of information then its each piece is connected with semicolon (;) as a delimiter.
        Example: \`["1.1.1.1","1.1.1.0/24","ocid1.vcn.oc1.sea.<unique_id>","ocid1.vcn.oc1.sea.<unique_id1>;1.1.1.1","ocid1.vcn.oc1.sea.<unique_id2>;1.1.0.0/16"]\`
        For Exadata Cloud@Customer, this is an array of IP addresses or CIDR notations.
        Example: \`["1.1.1.1","1.1.1.0/24","1.1.2.25"]\`
        For an update operation, if you want to delete all the IPs in the ACL, use an array with a single empty string entry.
        This cannot be updated in parallel with any of the following: licenseModel, dbEdition, cpuCoreCount, computeCount, computeModel, adminPassword, isMTLSConnectionRequired, openMode, permissionLevel, dbWorkload, dbVersion, isRefreshable, dbName, scheduledOperations, dbToolsDetails, isLocalDataGuardEnabled, or isFreeTier.
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (for example, if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique identifier for the request. 
      description: Unique identifier for the request. 
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

Updates one or more attributes of the specified Autonomous AI Database. See the UpdateAutonomousDatabaseDetails resource for a full list of attributes that can be updated.&lt;br /&gt;

```sql
UPDATE oci.database.autonomous_databases
SET 
adminPassword = '{{ adminPassword }}',
arePrimaryWhitelistedIpsUsed = {{ arePrimaryWhitelistedIpsUsed }},
autoRefreshFrequencyInSeconds = {{ autoRefreshFrequencyInSeconds }},
autoRefreshPointLagInSeconds = {{ autoRefreshPointLagInSeconds }},
autonomousMaintenanceScheduleType = '{{ autonomousMaintenanceScheduleType }}',
backupRetentionPeriodInDays = {{ backupRetentionPeriodInDays }},
byolComputeCountLimit = {{ byolComputeCountLimit }},
computeCount = {{ computeCount }},
computeModel = '{{ computeModel }}',
cpuCoreCount = {{ cpuCoreCount }},
customerContacts = '{{ customerContacts }}',
dataStorageSizeInGBs = {{ dataStorageSizeInGBs }},
dataStorageSizeInTBs = {{ dataStorageSizeInTBs }},
databaseEdition = '{{ databaseEdition }}',
dbName = '{{ dbName }}',
dbToolsDetails = '{{ dbToolsDetails }}',
dbVersion = '{{ dbVersion }}',
dbWorkload = '{{ dbWorkload }}',
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
encryptionKey = '{{ encryptionKey }}',
freeformTags = '{{ freeformTags }}',
inMemoryPercentage = {{ inMemoryPercentage }},
isAccessControlEnabled = {{ isAccessControlEnabled }},
isAutoScalingEnabled = {{ isAutoScalingEnabled }},
isAutoScalingForStorageEnabled = {{ isAutoScalingForStorageEnabled }},
isBackupRetentionLocked = {{ isBackupRetentionLocked }},
isDataGuardEnabled = {{ isDataGuardEnabled }},
isDevTier = {{ isDevTier }},
isDisconnectPeer = {{ isDisconnectPeer }},
isFreeTier = {{ isFreeTier }},
isLocalDataGuardEnabled = {{ isLocalDataGuardEnabled }},
isMtlsConnectionRequired = {{ isMtlsConnectionRequired }},
isRefreshableClone = {{ isRefreshableClone }},
isSqlWebDeveloperEnabled = {{ isSqlWebDeveloperEnabled }},
licenseModel = '{{ licenseModel }}',
localAdgAutoFailoverMaxDataLossLimit = {{ localAdgAutoFailoverMaxDataLossLimit }},
longTermBackupSchedule = '{{ longTermBackupSchedule }}',
nsgIds = '{{ nsgIds }}',
ocpuCount = {{ ocpuCount }},
openMode = '{{ openMode }}',
peerDbId = '{{ peerDbId }}',
permissionLevel = '{{ permissionLevel }}',
privateEndpointIp = '{{ privateEndpointIp }}',
privateEndpointLabel = '{{ privateEndpointLabel }}',
refreshableMode = '{{ refreshableMode }}',
resourcePoolLeaderId = '{{ resourcePoolLeaderId }}',
resourcePoolSummary = '{{ resourcePoolSummary }}',
scheduledOperations = '{{ scheduledOperations }}',
secretId = '{{ secretId }}',
secretVersionNumber = {{ secretVersionNumber }},
securityAttributes = '{{ securityAttributes }}',
standbyWhitelistedIps = '{{ standbyWhitelistedIps }}',
subnetId = '{{ subnetId }}',
timeOfAutoRefreshStart = '{{ timeOfAutoRefreshStart }}',
whitelistedIps = '{{ whitelistedIps }}'
WHERE 
autonomousDatabaseId = '{{ autonomousDatabaseId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match}}'
AND opc-request-id = '{{ opc-request-id}}'
RETURNING
id,
accessTypes,
actualUsedDataStorageSizeInTBs,
allocatedStorageSizeInTBs,
apexDetails,
arePrimaryWhitelistedIpsUsed,
autoRefreshFrequencyInSeconds,
autoRefreshPointLagInSeconds,
autonomousContainerDatabaseId,
autonomousMaintenanceScheduleType,
availabilityDomain,
availableUpgradeVersions,
backupConfig,
byolComputeCountLimit,
characterSet,
cloneTableSpaceList,
cloneType,
clusterPlacementGroupId,
compartmentId,
computeCount,
computeModel,
connectionStrings,
connectionUrls,
cpuCoreCount,
customerContacts,
dataSafeStatus,
dataStorageSizeInGBs,
dataStorageSizeInTBs,
databaseEdition,
databaseManagementStatus,
dataguardRegionType,
dbName,
dbToolsDetails,
dbVersion,
dbWorkload,
definedTags,
disasterRecoveryRegionType,
displayName,
encryptionKey,
encryptionKeyHistoryEntry,
failedDataRecoveryInSeconds,
freeformTags,
inMemoryAreaInGBs,
inMemoryPercentage,
infrastructureType,
isAccessControlEnabled,
isAutoScalingEnabled,
isAutoScalingForStorageEnabled,
isBackupRetentionLocked,
isDataGuardEnabled,
isDedicated,
isDevTier,
isFreeTier,
isLocalDataGuardEnabled,
isMtlsConnectionRequired,
isPreview,
isReconnectCloneEnabled,
isRefreshableClone,
isRemoteDataGuardEnabled,
keyHistoryEntry,
keyStoreId,
keyStoreWalletName,
kmsKeyId,
kmsKeyLifecycleDetails,
kmsKeyVersionId,
licenseModel,
lifecycleDetails,
lifecycleState,
localAdgAutoFailoverMaxDataLossLimit,
localDisasterRecoveryType,
localStandbyDb,
longTermBackupSchedule,
maintenanceTargetComponent,
memoryPerOracleComputeUnitInGBs,
ncharacterSet,
netServicesArchitecture,
nextLongTermBackupTimeStamp,
nsgIds,
ocpuCount,
openMode,
operationsInsightsStatus,
peerDbIds,
permissionLevel,
privateEndpoint,
privateEndpointIp,
privateEndpointLabel,
provisionableCpus,
publicConnectionUrls,
publicEndpoint,
refreshableMode,
refreshableStatus,
remoteDisasterRecoveryConfiguration,
resourcePoolLeaderId,
resourcePoolSummary,
role,
scheduledOperations,
securityAttributes,
serviceConsoleUrl,
sourceId,
sqlWebDeveloperUrl,
standbyDb,
standbyWhitelistedIps,
subnetId,
subscriptionId,
supportedRegionsToCloneTo,
systemTags,
timeCreated,
timeDataGuardRoleChanged,
timeDeletionOfFreeAutonomousDatabase,
timeDisasterRecoveryRoleChanged,
timeLocalDataGuardEnabled,
timeMaintenanceBegin,
timeMaintenanceEnd,
timeOfAutoRefreshStart,
timeOfJoiningResourcePool,
timeOfLastFailover,
timeOfLastRefresh,
timeOfLastRefreshPoint,
timeOfLastSwitchover,
timeOfNextRefresh,
timeReclamationOfFreeAutonomousDatabase,
timeUndeleted,
timeUntilReconnectCloneEnabled,
usedDataStorageSizeInGBs,
usedDataStorageSizeInTBs,
vaultId,
whitelistedIps;
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

Deletes the specified Autonomous AI Database.&lt;br /&gt;

```sql
DELETE FROM oci.database.autonomous_databases
WHERE autonomousDatabaseId = '{{ autonomousDatabaseId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND opc-request-id = '{{ opc-request-id }}'
AND mustDeleteAssociatedLongTermBackups = '{{ mustDeleteAssociatedLongTermBackups }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="resource_pool_shapes"
    values={[
        { label: 'resource_pool_shapes', value: 'resource_pool_shapes' },
        { label: 'change_compartment', value: 'change_compartment' },
        { label: 'change_disaster_recovery_configuration', value: 'change_disaster_recovery_configuration' },
        { label: 'change_autonomous_database_subscription', value: 'change_autonomous_database_subscription' },
        { label: 'configure_autonomous_database_vault_key', value: 'configure_autonomous_database_vault_key' },
        { label: 'configure_saas_admin_user', value: 'configure_saas_admin_user' },
        { label: 'deregister_autonomous_database_data_safe', value: 'deregister_autonomous_database_data_safe' },
        { label: 'disable_autonomous_database_management', value: 'disable_autonomous_database_management' },
        { label: 'disable_autonomous_database_operations_insights', value: 'disable_autonomous_database_operations_insights' },
        { label: 'enable_autonomous_database_management', value: 'enable_autonomous_database_management' },
        { label: 'enable_autonomous_database_operations_insights', value: 'enable_autonomous_database_operations_insights' },
        { label: 'fail_over_autonomous_database', value: 'fail_over_autonomous_database' },
        { label: 'generate_autonomous_database_wallet', value: 'generate_autonomous_database_wallet' },
        { label: 'saas_admin_user_status', value: 'saas_admin_user_status' },
        { label: 'import_transportable_tablespace', value: 'import_transportable_tablespace' },
        { label: 'autonomous_database_manual_refresh', value: 'autonomous_database_manual_refresh' },
        { label: 'register_autonomous_database_data_safe', value: 'register_autonomous_database_data_safe' },
        { label: 'restart_autonomous_database', value: 'restart_autonomous_database' },
        { label: 'restore_autonomous_database', value: 'restore_autonomous_database' },
        { label: 'rotate_autonomous_database_encryption_key', value: 'rotate_autonomous_database_encryption_key' },
        { label: 'shrink_autonomous_database', value: 'shrink_autonomous_database' },
        { label: 'start_autonomous_database', value: 'start_autonomous_database' },
        { label: 'stop_autonomous_database', value: 'stop_autonomous_database' },
        { label: 'switchover_autonomous_database', value: 'switchover_autonomous_database' }
    ]}
>
<TabItem value="resource_pool_shapes">

Lists available resource pools shapes.

```sql
EXEC oci.database.autonomous_databases.resource_pool_shapes 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@limit='{{ limit }}', 
@page='{{ page }}', 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="change_compartment">

Move the Autonomous AI Database and its dependent resources to the specified compartment.&lt;br /&gt;For more information about moving Autonomous AI Databases, see&lt;br /&gt;&#91;Moving Database Resources to a Different Compartment&#93;(/Content/Database/Concepts/databaseoverview.htm#moveRes).&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.change_compartment 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"compartmentId": "{{ compartmentId }}"
}'
;
```
</TabItem>
<TabItem value="change_disaster_recovery_configuration">

This operation updates the cross-region disaster recovery (DR) details of the standby Autonomous AI Database Serverless database, and must be run on the standby side.

```sql
EXEC oci.database.autonomous_databases.change_disaster_recovery_configuration 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"disasterRecoveryType": "{{ disasterRecoveryType }}", 
"isReplicateAutomaticBackups": {{ isReplicateAutomaticBackups }}, 
"isSnapshotStandby": {{ isSnapshotStandby }}, 
"timeSnapshotStandbyEnabledTill": "{{ timeSnapshotStandbyEnabledTill }}"
}'
;
```
</TabItem>
<TabItem value="change_autonomous_database_subscription">

Associate an Autonomous AI Database with a different subscription.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.change_autonomous_database_subscription 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}' 
@@json=
'{
"isDefault": {{ isDefault }}, 
"subscriptionId": "{{ subscriptionId }}"
}'
;
```
</TabItem>
<TabItem value="configure_autonomous_database_vault_key">

Configures the Autonomous AI Database Vault service &#91;key&#93;(/Content/KeyManagement/Concepts/keyoverview.htm#concepts).&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.configure_autonomous_database_vault_key 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"isUsingOracleManagedKeys": {{ isUsingOracleManagedKeys }}, 
"kmsKeyId": "{{ kmsKeyId }}", 
"vaultId": "{{ vaultId }}"
}'
;
```
</TabItem>
<TabItem value="configure_saas_admin_user">

This operation updates SaaS administrative user configuration of the Autonomous AI Database.

```sql
EXEC oci.database.autonomous_databases.configure_saas_admin_user 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"accessType": "{{ accessType }}", 
"isEnabled": {{ isEnabled }}, 
"timeSaasAdminUserEnabled": "{{ timeSaasAdminUserEnabled }}", 
"duration": {{ duration }}, 
"password": "{{ password }}", 
"secretId": "{{ secretId }}", 
"secretVersionNumber": {{ secretVersionNumber }}
}'
;
```
</TabItem>
<TabItem value="deregister_autonomous_database_data_safe">

Asynchronously deregisters this Autonomous AI Database with Data Safe.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.deregister_autonomous_database_data_safe 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"pdbAdminPassword": "{{ pdbAdminPassword }}"
}'
;
```
</TabItem>
<TabItem value="disable_autonomous_database_management">

Disables Database Management for the Autonomous AI Database resource.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.disable_autonomous_database_management 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="disable_autonomous_database_operations_insights">

Disables Operations Insights for the Autonomous AI Database resource.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.disable_autonomous_database_operations_insights 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="enable_autonomous_database_management">

Enables Database Management for Autonomous AI Database.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.enable_autonomous_database_management 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="enable_autonomous_database_operations_insights">

Enables the specified Autonomous AI Database with Operations Insights.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.enable_autonomous_database_operations_insights 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="fail_over_autonomous_database">

Initiates a failover of the specified Autonomous AI Database to the associated peer database. Applicable only to databases with Disaster Recovery enabled.&lt;br /&gt;This API should be called in the remote region where the peer database resides.&lt;br /&gt;Below parameter is optional:&lt;br /&gt;  - `peerDbId`&lt;br /&gt;    Use this parameter to specify the database OCID of the Disaster Recovery peer, which is located in a different (remote) region from the current peer database.&lt;br /&gt;    If this parameter is not provided, the failover will happen in the same region.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.fail_over_autonomous_database 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@peerDbId='{{ peerDbId }}'
;
```
</TabItem>
<TabItem value="generate_autonomous_database_wallet">

Creates and downloads a wallet for the specified Autonomous AI Database.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.generate_autonomous_database_wallet 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@opc-retry-token='{{ opc-retry-token }}' 
@@json=
'{
"generateType": "{{ generateType }}", 
"isRegional": {{ isRegional }}, 
"password": "{{ password }}"
}'
;
```
</TabItem>
<TabItem value="saas_admin_user_status">

This operation gets SaaS administrative user status of the Autonomous AI Database.

```sql
EXEC oci.database.autonomous_databases.saas_admin_user_status 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="import_transportable_tablespace">

Imports transportable tablespace for the specified Autonomous AI Database.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.import_transportable_tablespace 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"ttsBundleUrl": "{{ ttsBundleUrl }}"
}'
;
```
</TabItem>
<TabItem value="autonomous_database_manual_refresh">

Initiates a data refresh for an Autonomous AI Database refreshable clone. Data is refreshed from the source database to the point of a specified timestamp.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.autonomous_database_manual_refresh 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"timeRefreshCutoff": "{{ timeRefreshCutoff }}"
}'
;
```
</TabItem>
<TabItem value="register_autonomous_database_data_safe">

Asynchronously registers this Autonomous AI Database with Data Safe.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.register_autonomous_database_data_safe 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"pdbAdminPassword": "{{ pdbAdminPassword }}"
}'
;
```
</TabItem>
<TabItem value="restart_autonomous_database">

Restarts the specified Autonomous AI Database.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.restart_autonomous_database 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@isOnlineRestart={{ isOnlineRestart }} 
@@json=
'{
"isForceRestart": {{ isForceRestart }}
}'
;
```
</TabItem>
<TabItem value="restore_autonomous_database">

Restores an Autonomous AI Database based on the provided request parameters.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.restore_autonomous_database 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}' 
@@json=
'{
"databaseSCN": "{{ databaseSCN }}", 
"latest": {{ latest }}, 
"timestamp": "{{ timestamp }}"
}'
;
```
</TabItem>
<TabItem value="rotate_autonomous_database_encryption_key">

Rotate existing AutonomousDatabase [Vault service](/iaas/Content/KeyManagement/Concepts/keyoverview.htm) key.

```sql
EXEC oci.database.autonomous_databases.rotate_autonomous_database_encryption_key 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"keyVersionId": "{{ keyVersionId }}"
}'
;
```
</TabItem>
<TabItem value="shrink_autonomous_database">

This operation shrinks the current allocated storage down to the current actual used data storage (actualUsedDataStorageSizeInTBs). The if the base storage value for the database (dataStorageSizeInTBs) is larger than the actualUsedDataStorageSizeInTBs value, you are billed for the base storage value.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.shrink_autonomous_database 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="start_autonomous_database">

Starts the specified Autonomous AI Database.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.start_autonomous_database 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="stop_autonomous_database">

Stops the specified Autonomous AI Database.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.stop_autonomous_database 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-request-id='{{ opc-request-id }}' 
@@json=
'{
"isForceStop": {{ isForceStop }}
}'
;
```
</TabItem>
<TabItem value="switchover_autonomous_database">

Initiates a switchover of the specified Autonomous AI Database to the associated peer database. Applicable only to databases with Disaster Recovery enabled.&lt;br /&gt;This API should be called in the remote region where the peer database resides.&lt;br /&gt;Below parameter is optional:&lt;br /&gt;  - `peerDbId`&lt;br /&gt;    Use this parameter to specify the database OCID of the Disaster Recovery peer, which is located in a different (remote) region from the current peer database.&lt;br /&gt;    If this parameter is not provided, the switchover will happen in the same region.&lt;br /&gt;

```sql
EXEC oci.database.autonomous_databases.switchover_autonomous_database 
@autonomousDatabaseId='{{ autonomousDatabaseId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}', 
@opc-request-id='{{ opc-request-id }}', 
@peerDbId='{{ peerDbId }}'
;
```
</TabItem>
</Tabs>
