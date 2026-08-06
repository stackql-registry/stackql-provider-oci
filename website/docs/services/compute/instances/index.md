--- 
title: instances
hide_title: false
hide_table_of_contents: false
keywords:
  - instances
  - compute
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

Creates, updates, deletes, gets or lists an <code>instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.compute.instances" /></td></tr>
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

The instance was retrieved.

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
    <td>The OCID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="agentConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration options for the Oracle Cloud Agent software running on the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityConfig" /></td>
    <td><code>object</code></td>
    <td>Options for defining the availabiity of a VM instance after a maintenance event that impacts the underlying hardware. </td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain the instance is running in.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="capacityReservationId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compute capacity reservation this instance is launched under. When this field contains an empty string or is null, the instance is not currently in a capacity reservation. For more information, see &#91;Capacity Reservations&#93;(/iaas/Content/Compute/Tasks/reserve-capacity.htm#default).  (x-default-description: The default reservation here refers to the reservation which is enabled by default for your tenancy.&lt;br /&gt;If the value of this field is empty that means you have opted out of the default reservation.&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterPlacementGroupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the cluster placement group of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="dedicatedVmHostId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the dedicated virtual machine host that the instance is placed on. </td>
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
    <td><CopyableCode code="extendedMetadata" /></td>
    <td><code>object</code></td>
    <td>Additional metadata key/value pairs that you provide. They serve the same purpose and functionality as fields in the `metadata` object.  They are distinguished from `metadata` fields in that these can be nested JSON objects (whereas `metadata` fields are string/string maps only). </td>
</tr>
<tr>
    <td><CopyableCode code="faultDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the fault domain the instance is running in.  A fault domain is a grouping of hardware and infrastructure within an availability domain. Each availability domain contains three fault domains. Fault domains let you distribute your instances so that they are not on the same physical hardware within a single availability domain. A hardware failure or Compute hardware maintenance that affects one fault domain does not affect instances in other fault domains.  If you do not specify the fault domain, the system selects one for you.  Example: `FAULT-DOMAIN-1` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="imageId" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Use `sourceDetails` instead. </td>
</tr>
<tr>
    <td><CopyableCode code="instanceConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Instance Configuration used to source launch details for this instance. Any other fields supplied in the instance launch request override the details stored in the Instance Configuration for this instance launch.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceOptions" /></td>
    <td><code>object</code></td>
    <td>Optional mutable instance options</td>
</tr>
<tr>
    <td><CopyableCode code="ipxeScript" /></td>
    <td><code>string</code></td>
    <td>When a bare metal or virtual machine instance boots, the iPXE firmware that runs on the instance is configured to run an iPXE script to continue the boot process.  If you want more control over the boot process, you can provide your own custom iPXE script that will run when the instance boots. Be aware that the same iPXE script will run every time an instance boots, not only after the initial LaunchInstance call.  The default iPXE script connects to the instance's local boot volume over iSCSI and performs a network boot. If you use a custom iPXE script and want to network-boot from the instance's local boot volume over iSCSI the same way as the default iPXE script, use the following iSCSI IP address: 169.254.0.2, and boot volume IQN: iqn.2015-02.oracle.boot.  If your instance boot volume attachment type is paravirtualized, the boot volume is attached to the instance through virtio-scsi and no iPXE script is used. If your instance boot volume attachment type is paravirtualized and you use custom iPXE to network boot into your instance, the primary boot volume is attached as a data volume through virtio-scsi drive.  For more information about the Bring Your Own Image feature of Oracle Cloud Infrastructure, see &#91;Bring Your Own Image&#93;(/iaas/Content/Compute/References/bringyourownimage.htm).  For more information about iPXE, see http:​//ipxe.org. </td>
</tr>
<tr>
    <td><CopyableCode code="isAIEnterpriseEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether AI enterprise is enabled on the instance. </td>
</tr>
<tr>
    <td><CopyableCode code="launchMode" /></td>
    <td><code>string</code></td>
    <td>Specifies the configuration mode for launching virtual machine (VM) instances. The configuration modes are: * `NATIVE` - VM instances launch with iSCSI boot and VFIO devices. The default value for platform images. * `EMULATED` - VM instances launch with emulated devices, such as the E1000 network driver and emulated SCSI disk controller. * `PARAVIRTUALIZED` - VM instances launch with paravirtualized devices using VirtIO drivers. * `ACCELERATEDPV` - VM instances launch with accelerated paravirtualized networking type. * `CUSTOM` - VM instances launch with custom configuration settings specified in the `LaunchOptions` parameter.  (NATIVE, EMULATED, PARAVIRTUALIZED, ACCELERATEDPV, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="launchOptions" /></td>
    <td><code>object</code></td>
    <td>Options for tuning the compatibility and performance of VM shapes. The values that you specify override any default values. </td>
</tr>
<tr>
    <td><CopyableCode code="licensingConfigs" /></td>
    <td><code>array</code></td>
    <td>List of licensing configurations associated with the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the instance. (MOVING, PROVISIONING, RUNNING, STARTING, STOPPING, STOPPED, CREATING_IMAGE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Custom metadata that you provide.</td>
</tr>
<tr>
    <td><CopyableCode code="placementConstraintDetails" /></td>
    <td><code>object</code></td>
    <td>The details for providing placement constraints. </td>
</tr>
<tr>
    <td><CopyableCode code="platformConfig" /></td>
    <td><code>object</code></td>
    <td>The platform configuration for the instance. </td>
</tr>
<tr>
    <td><CopyableCode code="preemptibleInstanceConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration options for preemptible instances. </td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region that contains the availability domain the instance is running in.  For the us-phoenix-1 and us-ashburn-1 regions, `phx` and `iad` are returned, respectively. For all other regions, the full region name is returned.  Examples: `phx`, `eu-frankfurt-1` </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>&#91;Security attributes&#93;(/iaas/Content/zero-trust-packet-routing/zpr-artifacts.htm#security-attributes) are labels for a resource that can be referenced in a &#91;Zero Trust Packet Routing&#93;(/iaas/Content/zero-trust-packet-routing/overview.htm) (ZPR) policy to control access to ZPR-supported resources.  Example: `&#123;"Oracle-DataSecurity-ZPR": &#123;"MaxEgressCount": &#123;"value":"42","mode":"audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributesState" /></td>
    <td><code>string</code></td>
    <td>The lifecycle state of the `securityAttributes` (STABLE, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the instance. The shape determines the number of CPUs and the amount of memory allocated to the instance. You can enumerate all available shapes by calling &#91;ListShapes&#93;(#/en/iaas/latest/Shape/ListShapes). </td>
</tr>
<tr>
    <td><CopyableCode code="shapeConfig" /></td>
    <td><code>object</code></td>
    <td>The shape configuration for an instance. The shape configuration determines the resources allocated to an instance. </td>
</tr>
<tr>
    <td><CopyableCode code="sourceDetails" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the instance was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeMaintenanceRebootDue" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the instance is expected to be stopped / started,  in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). After that time if instance hasn't been rebooted, Oracle will reboot the instance within 24 hours of the due time. Regardless of how the instance was stopped, the flag will be reset to empty as soon as instance reaches Stopped state. Example: `2018-05-25T21:10:29.600Z` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A compute host. The image used to launch the instance determines its operating system and other&lt;br /&gt;software. The shape specified during the launch process determines the number of CPUs and memory&lt;br /&gt;allocated to the instance.&lt;br /&gt;&lt;br /&gt;When you launch an instance, it is automatically attached to a virtual&lt;br /&gt;network interface card (VNIC), called the *primary VNIC*. The VNIC&lt;br /&gt;has a private IP address from the subnet's CIDR. You can either assign a&lt;br /&gt;private IP address of your choice or let Oracle automatically assign one.&lt;br /&gt;You can choose whether the instance has a public IP address. To retrieve the&lt;br /&gt;addresses, use the &#91;ListVnicAttachments&#93;(#/en/iaas/latest/VnicAttachment/ListVnicAttachments)&lt;br /&gt;operation to get the VNIC ID for the instance, and then call&lt;br /&gt;&#91;GetVnic&#93;(#/en/iaas/latest/Vnic/GetVnic) with the VNIC ID.&lt;br /&gt;&lt;br /&gt;For more information, see&lt;br /&gt;&#91;Overview of the Compute Service&#93;(/iaas/Content/Compute/Concepts/computeoverview.htm).&lt;br /&gt;&lt;br /&gt;To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,&lt;br /&gt;talk to an administrator. If you're an administrator who needs to write policies to give users access, see&lt;br /&gt;&#91;Getting Started with Policies&#93;(/iaas/Content/Identity/Concepts/policygetstarted.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you&lt;br /&gt;supply string values using the API.&lt;br /&gt;

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
    <td>The OCID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="agentConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration options for the Oracle Cloud Agent software running on the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="availabilityConfig" /></td>
    <td><code>object</code></td>
    <td>Options for defining the availabiity of a VM instance after a maintenance event that impacts the underlying hardware. </td>
</tr>
<tr>
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The availability domain the instance is running in.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr>
    <td><CopyableCode code="capacityReservationId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compute capacity reservation this instance is launched under. When this field contains an empty string or is null, the instance is not currently in a capacity reservation. For more information, see &#91;Capacity Reservations&#93;(/iaas/Content/Compute/Tasks/reserve-capacity.htm#default).  (x-default-description: The default reservation here refers to the reservation which is enabled by default for your tenancy.&lt;br /&gt;If the value of this field is empty that means you have opted out of the default reservation.&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="clusterPlacementGroupId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the cluster placement group of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compartment that contains the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="dedicatedVmHostId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the dedicated virtual machine host that the instance is placed on. </td>
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
    <td><CopyableCode code="extendedMetadata" /></td>
    <td><code>object</code></td>
    <td>Additional metadata key/value pairs that you provide. They serve the same purpose and functionality as fields in the `metadata` object.  They are distinguished from `metadata` fields in that these can be nested JSON objects (whereas `metadata` fields are string/string maps only). </td>
</tr>
<tr>
    <td><CopyableCode code="faultDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the fault domain the instance is running in.  A fault domain is a grouping of hardware and infrastructure within an availability domain. Each availability domain contains three fault domains. Fault domains let you distribute your instances so that they are not on the same physical hardware within a single availability domain. A hardware failure or Compute hardware maintenance that affects one fault domain does not affect instances in other fault domains.  If you do not specify the fault domain, the system selects one for you.  Example: `FAULT-DOMAIN-1` </td>
</tr>
<tr>
    <td><CopyableCode code="freeformTags" /></td>
    <td><code>object</code></td>
    <td>Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see &#91;Resource Tags&#93;(/iaas/Content/General/Concepts/resourcetags.htm).  Example: `&#123;"Department": "Finance"&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="imageId" /></td>
    <td><code>string</code></td>
    <td>Deprecated. Use `sourceDetails` instead. </td>
</tr>
<tr>
    <td><CopyableCode code="instanceConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the Instance Configuration used to source launch details for this instance. Any other fields supplied in the instance launch request override the details stored in the Instance Configuration for this instance launch.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceOptions" /></td>
    <td><code>object</code></td>
    <td>Optional mutable instance options</td>
</tr>
<tr>
    <td><CopyableCode code="ipxeScript" /></td>
    <td><code>string</code></td>
    <td>When a bare metal or virtual machine instance boots, the iPXE firmware that runs on the instance is configured to run an iPXE script to continue the boot process.  If you want more control over the boot process, you can provide your own custom iPXE script that will run when the instance boots. Be aware that the same iPXE script will run every time an instance boots, not only after the initial LaunchInstance call.  The default iPXE script connects to the instance's local boot volume over iSCSI and performs a network boot. If you use a custom iPXE script and want to network-boot from the instance's local boot volume over iSCSI the same way as the default iPXE script, use the following iSCSI IP address: 169.254.0.2, and boot volume IQN: iqn.2015-02.oracle.boot.  If your instance boot volume attachment type is paravirtualized, the boot volume is attached to the instance through virtio-scsi and no iPXE script is used. If your instance boot volume attachment type is paravirtualized and you use custom iPXE to network boot into your instance, the primary boot volume is attached as a data volume through virtio-scsi drive.  For more information about the Bring Your Own Image feature of Oracle Cloud Infrastructure, see &#91;Bring Your Own Image&#93;(/iaas/Content/Compute/References/bringyourownimage.htm).  For more information about iPXE, see http:​//ipxe.org. </td>
</tr>
<tr>
    <td><CopyableCode code="isAIEnterpriseEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether AI enterprise is enabled on the instance. </td>
</tr>
<tr>
    <td><CopyableCode code="launchMode" /></td>
    <td><code>string</code></td>
    <td>Specifies the configuration mode for launching virtual machine (VM) instances. The configuration modes are: * `NATIVE` - VM instances launch with iSCSI boot and VFIO devices. The default value for platform images. * `EMULATED` - VM instances launch with emulated devices, such as the E1000 network driver and emulated SCSI disk controller. * `PARAVIRTUALIZED` - VM instances launch with paravirtualized devices using VirtIO drivers. * `ACCELERATEDPV` - VM instances launch with accelerated paravirtualized networking type. * `CUSTOM` - VM instances launch with custom configuration settings specified in the `LaunchOptions` parameter.  (NATIVE, EMULATED, PARAVIRTUALIZED, ACCELERATEDPV, CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="launchOptions" /></td>
    <td><code>object</code></td>
    <td>Options for tuning the compatibility and performance of VM shapes. The values that you specify override any default values. </td>
</tr>
<tr>
    <td><CopyableCode code="licensingConfigs" /></td>
    <td><code>array</code></td>
    <td>List of licensing configurations associated with the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycleState" /></td>
    <td><code>string</code></td>
    <td>The current state of the instance. (MOVING, PROVISIONING, RUNNING, STARTING, STOPPING, STOPPED, CREATING_IMAGE, TERMINATING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Custom metadata that you provide.</td>
</tr>
<tr>
    <td><CopyableCode code="placementConstraintDetails" /></td>
    <td><code>object</code></td>
    <td>The details for providing placement constraints. </td>
</tr>
<tr>
    <td><CopyableCode code="platformConfig" /></td>
    <td><code>object</code></td>
    <td>The platform configuration for the instance. </td>
</tr>
<tr>
    <td><CopyableCode code="preemptibleInstanceConfig" /></td>
    <td><code>object</code></td>
    <td>Configuration options for preemptible instances. </td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The region that contains the availability domain the instance is running in.  For the us-phoenix-1 and us-ashburn-1 regions, `phx` and `iad` are returned, respectively. For all other regions, the full region name is returned.  Examples: `phx`, `eu-frankfurt-1` </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributes" /></td>
    <td><code>object</code></td>
    <td>&#91;Security attributes&#93;(/iaas/Content/zero-trust-packet-routing/zpr-artifacts.htm#security-attributes) are labels for a resource that can be referenced in a &#91;Zero Trust Packet Routing&#93;(/iaas/Content/zero-trust-packet-routing/overview.htm) (ZPR) policy to control access to ZPR-supported resources.  Example: `&#123;"Oracle-DataSecurity-ZPR": &#123;"MaxEgressCount": &#123;"value":"42","mode":"audit"&#125;&#125;&#125;` </td>
</tr>
<tr>
    <td><CopyableCode code="securityAttributesState" /></td>
    <td><code>string</code></td>
    <td>The lifecycle state of the `securityAttributes` (STABLE, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="shape" /></td>
    <td><code>string</code></td>
    <td>The shape of the instance. The shape determines the number of CPUs and the amount of memory allocated to the instance. You can enumerate all available shapes by calling &#91;ListShapes&#93;(#/en/iaas/latest/Shape/ListShapes). </td>
</tr>
<tr>
    <td><CopyableCode code="shapeConfig" /></td>
    <td><code>object</code></td>
    <td>The shape configuration for an instance. The shape configuration determines the resources allocated to an instance. </td>
</tr>
<tr>
    <td><CopyableCode code="sourceDetails" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="timeCreated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the instance was created, in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339).  Example: `2016-08-25T21:10:29.600Z` </td>
</tr>
<tr>
    <td><CopyableCode code="timeMaintenanceRebootDue" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the instance is expected to be stopped / started,  in the format defined by &#91;RFC3339&#93;(https:​//tools.ietf.org/html/rfc3339). After that time if instance hasn't been rebooted, Oracle will reboot the instance within 24 hours of the due time. Regardless of how the instance was stopped, the flag will be reset to empty as soon as instance reaches Stopped state. Example: `2018-05-25T21:10:29.600Z` </td>
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
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified instance.&lt;br /&gt;&lt;br /&gt;**Note:** To retrieve public and private IP addresses for an instance, use the &#91;ListVnicAttachments&#93;(#/en/iaas/latest/VnicAttachment/ListVnicAttachments)&lt;br /&gt;operation to get the VNIC ID for the instance, and then call &#91;GetVnic&#93;(#/en/iaas/latest/Vnic/GetVnic) with the VNIC ID.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a>, <a href="#parameter-capacityReservationId"><code>capacityReservationId</code></a>, <a href="#parameter-computeClusterId"><code>computeClusterId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-lifecycleState"><code>lifecycleState</code></a></td>
    <td>Lists the instances in the specified compartment and the specified availability domain.&lt;br /&gt;You can filter the results by specifying an instance name (the list will include all the identically-named&lt;br /&gt;instances in the compartment).&lt;br /&gt;&lt;br /&gt;**Note:** To retrieve public and private IP addresses for an instance, use the &#91;ListVnicAttachments&#93;(#/en/iaas/latest/VnicAttachment/ListVnicAttachments)&lt;br /&gt;operation to get the VNIC ID for the instance, and then call &#91;GetVnic&#93;(#/en/iaas/latest/Vnic/GetVnic) with the VNIC ID.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#attach"><CopyableCode code="attach" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instancePoolId"><code>instancePoolId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Attaches an instance to an instance pool. For information about the prerequisites&lt;br /&gt;that an instance must meet before you can attach it to a pool, see&lt;br /&gt;&#91;Attaching an Instance to an Instance Pool&#93;(/iaas/Content/Compute/Tasks/updatinginstancepool.htm#attach-instance).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#launch"><CopyableCode code="launch" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a>, <a href="#parameter-availabilityDomain"><code>availabilityDomain</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a new instance in the specified compartment and the specified availability domain.&lt;br /&gt;For general information about instances, see&lt;br /&gt;&#91;Overview of the Compute Service&#93;(/iaas/Content/Compute/Concepts/computeoverview.htm).&lt;br /&gt;&lt;br /&gt;For information about access control and compartments, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;For information about availability domains, see&lt;br /&gt;&#91;Regions and Availability Domains&#93;(/iaas/Content/General/Concepts/regions.htm).&lt;br /&gt;To get a list of availability domains, use the `ListAvailabilityDomains` operation&lt;br /&gt;in the Identity and Access Management Service API.&lt;br /&gt;&lt;br /&gt;All Oracle Cloud Infrastructure resources, including instances, get an Oracle-assigned,&lt;br /&gt;unique ID called an Oracle Cloud Identifier (OCID).&lt;br /&gt;When you create a resource, you can find its OCID in the response. You can&lt;br /&gt;also retrieve a resource's OCID by using a List API operation&lt;br /&gt;on that resource type, or by viewing the resource in the Console.&lt;br /&gt;&lt;br /&gt;To launch an instance using an image or a boot volume use the `sourceDetails` parameter in &#91;LaunchInstanceDetails&#93;(#/en/iaas/latest/LaunchInstanceDetails).&lt;br /&gt;&lt;br /&gt;When you launch an instance, it is automatically attached to a virtual&lt;br /&gt;network interface card (VNIC), called the *primary VNIC*. The VNIC&lt;br /&gt;has a private IP address from the subnet's CIDR. You can either assign a&lt;br /&gt;private IP address of your choice or let Oracle automatically assign one.&lt;br /&gt;You can choose whether the instance has a public IP address. To retrieve the&lt;br /&gt;addresses, use the &#91;ListVnicAttachments&#93;(#/en/iaas/latest/VnicAttachment/ListVnicAttachments)&lt;br /&gt;operation to get the VNIC ID for the instance, and then call&lt;br /&gt;&#91;GetVnic&#93;(#/en/iaas/latest/Vnic/GetVnic) with the VNIC ID.&lt;br /&gt;&lt;br /&gt;You can later add secondary VNICs to an instance. For more information, see&lt;br /&gt;&#91;Virtual Network Interface Cards (VNICs)&#93;(/iaas/Content/Network/Tasks/managingVNICs.htm).&lt;br /&gt;&lt;br /&gt;To launch an instance from a Marketplace image listing, you must provide the image ID of the&lt;br /&gt;listing resource version that you want, but you also must subscribe to the listing before you try&lt;br /&gt;to launch the instance. To subscribe to the listing, use the &#91;GetAppCatalogListingAgreements&#93;(#/en/iaas/latest/AppCatalogListingResourceVersionAgreements/GetAppCatalogListingAgreements)&lt;br /&gt;operation to get the signature for the terms of use agreement for the desired listing resource version.&lt;br /&gt;Then, call &#91;CreateAppCatalogSubscription&#93;(#/en/iaas/latest/AppCatalogSubscription/CreateAppCatalogSubscription)&lt;br /&gt;with the signature. To get the image ID for the LaunchInstance operation, call&lt;br /&gt;&#91;GetAppCatalogListingResourceVersion&#93;(#/en/iaas/latest/AppCatalogListingResourceVersion/GetAppCatalogListingResourceVersion).&lt;br /&gt;&lt;br /&gt;When launching an instance, you may provide the `securityAttributes` parameter in&lt;br /&gt;&#91;LaunchInstanceDetails&#93;(#/en/iaas/latest/LaunchInstanceDetails) to manage security attributes via the instance, &lt;br /&gt;or in the embedded &#91;CreateVnicDetails&#93;(#/en/iaas/latest/CreateVnicDetails/) to manage security attributes&lt;br /&gt;via the VNIC directly, but not both.  Providing `securityAttributes` in both locations will return a&lt;br /&gt;400 Bad Request response.&lt;br /&gt;&lt;br /&gt;To determine whether capacity is available for a specific shape before you create an instance,&lt;br /&gt;use the &#91;CreateComputeCapacityReport&#93;(#/en/iaas/latest/ComputeCapacityReport/CreateComputeCapacityReport)&lt;br /&gt;operation.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Updates certain fields on the specified instance. Fields that are not provided in the&lt;br /&gt;request will not be updated. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;Changes to metadata fields will be reflected in the instance metadata service (this may take&lt;br /&gt;up to a minute).&lt;br /&gt;&lt;br /&gt;The OCID of the instance remains the same.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-preserveBootVolume"><code>preserveBootVolume</code></a>, <a href="#parameter-preserveDataVolumesCreatedAtLaunch"><code>preserveDataVolumesCreatedAtLaunch</code></a>, <a href="#parameter-recycleLevel"><code>recycleLevel</code></a></td>
    <td>Permanently terminates (deletes) the specified instance. Any attached VNICs and volumes are automatically detached&lt;br /&gt;when the instance terminates.&lt;br /&gt;&lt;br /&gt;To preserve the boot volume associated with the instance, specify `true` for `PreserveBootVolumeQueryParam`.&lt;br /&gt;To delete the boot volume when the instance is deleted, specify `false` or do not specify a value for `PreserveBootVolumeQueryParam`.&lt;br /&gt;&lt;br /&gt;To preserve data volumes created with the instance, specify `true` or do not specify a value for `PreserveDataVolumesQueryParam`.&lt;br /&gt;To delete the data volumes when the instance itself is deleted, specify `false` for `PreserveDataVolumesQueryParam`.&lt;br /&gt;&lt;br /&gt;This is an asynchronous operation. The instance's `lifecycleState` changes to TERMINATING temporarily&lt;br /&gt;until the instance is completely deleted. After the instance is deleted, the record remains visible in the list of instances&lt;br /&gt;with the state TERMINATED for at least 12 hours, but no further action is needed.&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#instance_action"><CopyableCode code="instance_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a>, <a href="#parameter-if-match"><code>if-match</code></a></td>
    <td>Performs one of the following power actions on the specified instance:&lt;br /&gt;&lt;br /&gt;- **START** - Powers on the instance.&lt;br /&gt;&lt;br /&gt;- **STOP** - Powers off the instance.&lt;br /&gt;&lt;br /&gt;- **RESET** - Powers off the instance and then powers it back on.&lt;br /&gt;&lt;br /&gt;- **SOFTSTOP** - Gracefully shuts down the instance by sending a shutdown command to the operating system.&lt;br /&gt;After waiting 15 minutes for the OS to shut down, the instance is powered off.&lt;br /&gt;If the applications that run on the instance take more than 15 minutes to shut down, they could be improperly stopped, resulting&lt;br /&gt;in data corruption. To avoid this, manually shut down the instance using the commands available in the OS before you softstop the&lt;br /&gt;instance.&lt;br /&gt;&lt;br /&gt;- **SOFTRESET** - Gracefully reboots the instance by sending a shutdown command to the operating system.&lt;br /&gt;After waiting 15 minutes for the OS to shut down, the instance is powered off and&lt;br /&gt;then powered back on.&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;- **SENDDIAGNOSTICINTERRUPT** - For advanced users. **Caution: Sending a diagnostic interrupt to a live system can&lt;br /&gt;cause data corruption or system failure.** Sends a diagnostic interrupt that causes the instance's&lt;br /&gt;OS to crash and then reboot. Before you send a diagnostic interrupt, you must configure the instance to generate a&lt;br /&gt;crash dump file when it crashes. The crash dump captures information about the state of the OS at the time of&lt;br /&gt;the crash. After the OS restarts, you can analyze the crash dump to diagnose the issue. For more information, see&lt;br /&gt;&#91;Sending a Diagnostic Interrupt&#93;(/iaas/Content/Compute/Tasks/sendingdiagnosticinterrupt.htm).&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;- **DIAGNOSTICREBOOT** - Powers off the instance, rebuilds it, and then powers it back on.&lt;br /&gt;Before you send a diagnostic reboot, restart the instance's OS, confirm that the instance and networking settings are configured&lt;br /&gt;correctly, and try other &#91;troubleshooting steps&#93;(/iaas/Content/Compute/References/troubleshooting-compute-instances.htm).&lt;br /&gt;Use diagnostic reboot as a final attempt to troubleshoot an unreachable instance. For virtual machine (VM) instances only.&lt;br /&gt;For more information, see &#91;Performing a Diagnostic Reboot&#93;(/iaas/Content/Compute/Tasks/diagnostic-reboot.htm).&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;- **REBOOTMIGRATE** - Powers off the instance, moves it to new hardware, and then powers it back on. For more information, see&lt;br /&gt;&#91;Infrastructure Maintenance&#93;(/iaas/Content/Compute/References/infrastructure-maintenance.htm).&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;For more information about managing instance lifecycle states, see&lt;br /&gt;&#91;Stopping and Starting an Instance&#93;(/iaas/Content/Compute/Tasks/restartinginstance.htm).&lt;br /&gt;</td>
</tr>
<tr>
    <td><a href="#accept_shielded_integrity_policy"><CopyableCode code="accept_shielded_integrity_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Accept the changes to the PCR values in the measured boot report.</td>
</tr>
<tr>
    <td><a href="#change_compartment"><CopyableCode code="change_compartment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instanceId"><code>instanceId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-compartmentId"><code>compartmentId</code></a></td>
    <td><a href="#parameter-if-match"><code>if-match</code></a>, <a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Moves an instance into a different compartment within the same tenancy. For information about&lt;br /&gt;moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;When you move an instance to a different compartment, associated resources such as boot volumes and VNICs&lt;br /&gt;are not moved.&lt;br /&gt;</td>
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
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action to perform on the instance.</td>
</tr>
<tr id="parameter-compartmentId">
    <td><CopyableCode code="compartmentId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compartment.</td>
</tr>
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the instance.</td>
</tr>
<tr id="parameter-instancePoolId">
    <td><CopyableCode code="instancePoolId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the instance pool.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-availabilityDomain">
    <td><CopyableCode code="availabilityDomain" /></td>
    <td><code>string</code></td>
    <td>The name of the availability domain.  Example: `Uocm:PHX-AD-1` </td>
</tr>
<tr id="parameter-capacityReservationId">
    <td><CopyableCode code="capacityReservationId" /></td>
    <td><code>string</code></td>
    <td>The OCID of the compute capacity reservation.</td>
</tr>
<tr id="parameter-computeClusterId">
    <td><CopyableCode code="computeClusterId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/iaas/Content/General/Concepts/identifiers.htm) of the compute cluster. A &#91;compute cluster&#93;(/iaas/Content/Compute/Tasks/compute-clusters.htm) is a remote direct memory access (RDMA) network group. </td>
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
<tr id="parameter-preserveBootVolume">
    <td><CopyableCode code="preserveBootVolume" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to delete or preserve the boot volume when terminating an instance. When set to `true`, the boot volume is preserved. The default value is `false`. </td>
</tr>
<tr id="parameter-preserveDataVolumesCreatedAtLaunch">
    <td><CopyableCode code="preserveDataVolumesCreatedAtLaunch" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to delete or preserve the data volumes created during launch when terminating an instance. When set to `true`, the data volumes are preserved. The  default value is `true`. </td>
</tr>
<tr id="parameter-recycleLevel">
    <td><CopyableCode code="recycleLevel" /></td>
    <td><code>string</code></td>
    <td>This optional parameter overrides recycle level for hosts. The parameter can be used when hosts are associated with a Capacity Reservation. * `FULL_RECYCLE` - Does not skip host wipe. This is the default behavior. </td>
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

Gets information about the specified instance.&lt;br /&gt;&lt;br /&gt;**Note:** To retrieve public and private IP addresses for an instance, use the &#91;ListVnicAttachments&#93;(#/en/iaas/latest/VnicAttachment/ListVnicAttachments)&lt;br /&gt;operation to get the VNIC ID for the instance, and then call &#91;GetVnic&#93;(#/en/iaas/latest/Vnic/GetVnic) with the VNIC ID.&lt;br /&gt;

```sql
SELECT
id,
agentConfig,
availabilityConfig,
availabilityDomain,
capacityReservationId,
clusterPlacementGroupId,
compartmentId,
dedicatedVmHostId,
definedTags,
displayName,
extendedMetadata,
faultDomain,
freeformTags,
imageId,
instanceConfigurationId,
instanceOptions,
ipxeScript,
isAIEnterpriseEnabled,
launchMode,
launchOptions,
licensingConfigs,
lifecycleState,
metadata,
placementConstraintDetails,
platformConfig,
preemptibleInstanceConfig,
region,
securityAttributes,
securityAttributesState,
shape,
shapeConfig,
sourceDetails,
timeCreated,
timeMaintenanceRebootDue
FROM oci.compute.instances
WHERE instanceId = '{{ instanceId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the instances in the specified compartment and the specified availability domain.&lt;br /&gt;You can filter the results by specifying an instance name (the list will include all the identically-named&lt;br /&gt;instances in the compartment).&lt;br /&gt;&lt;br /&gt;**Note:** To retrieve public and private IP addresses for an instance, use the &#91;ListVnicAttachments&#93;(#/en/iaas/latest/VnicAttachment/ListVnicAttachments)&lt;br /&gt;operation to get the VNIC ID for the instance, and then call &#91;GetVnic&#93;(#/en/iaas/latest/Vnic/GetVnic) with the VNIC ID.&lt;br /&gt;

```sql
SELECT
id,
agentConfig,
availabilityConfig,
availabilityDomain,
capacityReservationId,
clusterPlacementGroupId,
compartmentId,
dedicatedVmHostId,
definedTags,
displayName,
extendedMetadata,
faultDomain,
freeformTags,
imageId,
instanceConfigurationId,
instanceOptions,
ipxeScript,
isAIEnterpriseEnabled,
launchMode,
launchOptions,
licensingConfigs,
lifecycleState,
metadata,
placementConstraintDetails,
platformConfig,
preemptibleInstanceConfig,
region,
securityAttributes,
securityAttributesState,
shape,
shapeConfig,
sourceDetails,
timeCreated,
timeMaintenanceRebootDue
FROM oci.compute.instances
WHERE compartmentId = '{{ compartmentId }}' -- required
AND region = '{{ region }}' -- required
AND availabilityDomain = '{{ availabilityDomain }}'
AND capacityReservationId = '{{ capacityReservationId }}'
AND computeClusterId = '{{ computeClusterId }}'
AND displayName = '{{ displayName }}'
AND limit = '{{ limit }}'
AND page = '{{ page }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND lifecycleState = '{{ lifecycleState }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="attach"
    values={[
        { label: 'attach', value: 'attach' },
        { label: 'launch', value: 'launch' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="attach">

Attaches an instance to an instance pool. For information about the prerequisites&lt;br /&gt;that an instance must meet before you can attach it to a pool, see&lt;br /&gt;&#91;Attaching an Instance to an Instance Pool&#93;(/iaas/Content/Compute/Tasks/updatinginstancepool.htm#attach-instance).&lt;br /&gt;

```sql
INSERT INTO oci.compute.instances (
instanceId,
instancePoolId,
region,
opc-retry-token
)
SELECT 
'{{ instanceId }}' /* required */,
'{{ instancePoolId }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
availabilityDomain,
compartmentId,
displayName,
faultDomain,
instanceConfigurationId,
instancePoolId,
lifecycleState,
loadBalancerBackends,
region,
shape,
state,
timeCreated
;
```
</TabItem>
<TabItem value="launch">

Creates a new instance in the specified compartment and the specified availability domain.&lt;br /&gt;For general information about instances, see&lt;br /&gt;&#91;Overview of the Compute Service&#93;(/iaas/Content/Compute/Concepts/computeoverview.htm).&lt;br /&gt;&lt;br /&gt;For information about access control and compartments, see&lt;br /&gt;&#91;Overview of the IAM Service&#93;(/iaas/Content/Identity/Concepts/overview.htm).&lt;br /&gt;&lt;br /&gt;For information about availability domains, see&lt;br /&gt;&#91;Regions and Availability Domains&#93;(/iaas/Content/General/Concepts/regions.htm).&lt;br /&gt;To get a list of availability domains, use the `ListAvailabilityDomains` operation&lt;br /&gt;in the Identity and Access Management Service API.&lt;br /&gt;&lt;br /&gt;All Oracle Cloud Infrastructure resources, including instances, get an Oracle-assigned,&lt;br /&gt;unique ID called an Oracle Cloud Identifier (OCID).&lt;br /&gt;When you create a resource, you can find its OCID in the response. You can&lt;br /&gt;also retrieve a resource's OCID by using a List API operation&lt;br /&gt;on that resource type, or by viewing the resource in the Console.&lt;br /&gt;&lt;br /&gt;To launch an instance using an image or a boot volume use the `sourceDetails` parameter in &#91;LaunchInstanceDetails&#93;(#/en/iaas/latest/LaunchInstanceDetails).&lt;br /&gt;&lt;br /&gt;When you launch an instance, it is automatically attached to a virtual&lt;br /&gt;network interface card (VNIC), called the *primary VNIC*. The VNIC&lt;br /&gt;has a private IP address from the subnet's CIDR. You can either assign a&lt;br /&gt;private IP address of your choice or let Oracle automatically assign one.&lt;br /&gt;You can choose whether the instance has a public IP address. To retrieve the&lt;br /&gt;addresses, use the &#91;ListVnicAttachments&#93;(#/en/iaas/latest/VnicAttachment/ListVnicAttachments)&lt;br /&gt;operation to get the VNIC ID for the instance, and then call&lt;br /&gt;&#91;GetVnic&#93;(#/en/iaas/latest/Vnic/GetVnic) with the VNIC ID.&lt;br /&gt;&lt;br /&gt;You can later add secondary VNICs to an instance. For more information, see&lt;br /&gt;&#91;Virtual Network Interface Cards (VNICs)&#93;(/iaas/Content/Network/Tasks/managingVNICs.htm).&lt;br /&gt;&lt;br /&gt;To launch an instance from a Marketplace image listing, you must provide the image ID of the&lt;br /&gt;listing resource version that you want, but you also must subscribe to the listing before you try&lt;br /&gt;to launch the instance. To subscribe to the listing, use the &#91;GetAppCatalogListingAgreements&#93;(#/en/iaas/latest/AppCatalogListingResourceVersionAgreements/GetAppCatalogListingAgreements)&lt;br /&gt;operation to get the signature for the terms of use agreement for the desired listing resource version.&lt;br /&gt;Then, call &#91;CreateAppCatalogSubscription&#93;(#/en/iaas/latest/AppCatalogSubscription/CreateAppCatalogSubscription)&lt;br /&gt;with the signature. To get the image ID for the LaunchInstance operation, call&lt;br /&gt;&#91;GetAppCatalogListingResourceVersion&#93;(#/en/iaas/latest/AppCatalogListingResourceVersion/GetAppCatalogListingResourceVersion).&lt;br /&gt;&lt;br /&gt;When launching an instance, you may provide the `securityAttributes` parameter in&lt;br /&gt;&#91;LaunchInstanceDetails&#93;(#/en/iaas/latest/LaunchInstanceDetails) to manage security attributes via the instance, &lt;br /&gt;or in the embedded &#91;CreateVnicDetails&#93;(#/en/iaas/latest/CreateVnicDetails/) to manage security attributes&lt;br /&gt;via the VNIC directly, but not both.  Providing `securityAttributes` in both locations will return a&lt;br /&gt;400 Bad Request response.&lt;br /&gt;&lt;br /&gt;To determine whether capacity is available for a specific shape before you create an instance,&lt;br /&gt;use the &#91;CreateComputeCapacityReport&#93;(#/en/iaas/latest/ComputeCapacityReport/CreateComputeCapacityReport)&lt;br /&gt;operation.&lt;br /&gt;

```sql
INSERT INTO oci.compute.instances (
agentConfig,
availabilityConfig,
availabilityDomain,
capacityReservationId,
clusterPlacementGroupId,
compartmentId,
computeClusterId,
createVnicDetails,
dedicatedVmHostId,
definedTags,
displayName,
extendedMetadata,
faultDomain,
freeformTags,
hostnameLabel,
imageId,
instanceConfigurationId,
instanceOptions,
ipxeScript,
isAIEnterpriseEnabled,
isPvEncryptionInTransitEnabled,
launchMode,
launchOptions,
launchVolumeAttachments,
licensingConfigs,
metadata,
placementConstraintDetails,
platformConfig,
preemptibleInstanceConfig,
securityAttributes,
shape,
shapeConfig,
sourceDetails,
subnetId,
region,
opc-retry-token
)
SELECT 
'{{ agentConfig }}',
'{{ availabilityConfig }}',
'{{ availabilityDomain }}' /* required */,
'{{ capacityReservationId }}',
'{{ clusterPlacementGroupId }}',
'{{ compartmentId }}' /* required */,
'{{ computeClusterId }}',
'{{ createVnicDetails }}',
'{{ dedicatedVmHostId }}',
'{{ definedTags }}',
'{{ displayName }}',
'{{ extendedMetadata }}',
'{{ faultDomain }}',
'{{ freeformTags }}',
'{{ hostnameLabel }}',
'{{ imageId }}',
'{{ instanceConfigurationId }}',
'{{ instanceOptions }}',
'{{ ipxeScript }}',
{{ isAIEnterpriseEnabled }},
{{ isPvEncryptionInTransitEnabled }},
'{{ launchMode }}',
'{{ launchOptions }}',
'{{ launchVolumeAttachments }}',
'{{ licensingConfigs }}',
'{{ metadata }}',
'{{ placementConstraintDetails }}',
'{{ platformConfig }}',
'{{ preemptibleInstanceConfig }}',
'{{ securityAttributes }}',
'{{ shape }}',
'{{ shapeConfig }}',
'{{ sourceDetails }}',
'{{ subnetId }}',
'{{ region }}',
'{{ opc-retry-token }}'
RETURNING
id,
agentConfig,
availabilityConfig,
availabilityDomain,
capacityReservationId,
clusterPlacementGroupId,
compartmentId,
dedicatedVmHostId,
definedTags,
displayName,
extendedMetadata,
faultDomain,
freeformTags,
imageId,
instanceConfigurationId,
instanceOptions,
ipxeScript,
isAIEnterpriseEnabled,
launchMode,
launchOptions,
licensingConfigs,
lifecycleState,
metadata,
placementConstraintDetails,
platformConfig,
preemptibleInstanceConfig,
region,
securityAttributes,
securityAttributesState,
shape,
shapeConfig,
sourceDetails,
timeCreated,
timeMaintenanceRebootDue
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instances
  props:
    - name: instancePoolId
      value: "{{ instancePoolId }}"
      description: Required parameter for the instances resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instances resource.
    - name: instanceId
      value: "{{ instanceId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the instance.
    - name: agentConfig
      description: |
        Configuration options for the Oracle Cloud Agent software running on the instance.
      value:
        areAllPluginsDisabled: {{ areAllPluginsDisabled }}
        isManagementDisabled: {{ isManagementDisabled }}
        isMonitoringDisabled: {{ isMonitoringDisabled }}
        pluginsConfig:
          - desiredState: "{{ desiredState }}"
            name: "{{ name }}"
    - name: availabilityConfig
      description: |
        Options for VM migration during infrastructure maintenance events and for defining
        the availability of a VM instance after a maintenance event that impacts the underlying hardware.
      value:
        isLiveMigrationPreferred: {{ isLiveMigrationPreferred }}
        recoveryAction: "{{ recoveryAction }}"
    - name: availabilityDomain
      value: "{{ availabilityDomain }}"
      description: |
        The availability domain of the instance.
        Example: \`Uocm:PHX-AD-1\`
    - name: capacityReservationId
      value: "{{ capacityReservationId }}"
      description: |
        The OCID of the compute capacity reservation this instance is launched under.
        You can opt out of all default reservations by specifying an empty string as input for this field.
        For more information, see [Capacity Reservations](/iaas/Content/Compute/Tasks/reserve-capacity.htm#default).
    - name: clusterPlacementGroupId
      value: "{{ clusterPlacementGroupId }}"
      description: |
        The OCID of the cluster placement group of the instance.
    - name: compartmentId
      value: "{{ compartmentId }}"
      description: |
        The OCID of the compartment.
    - name: computeClusterId
      value: "{{ computeClusterId }}"
      description: |
        The [OCID](/iaas/Content/General/Concepts/identifiers.htm) of the
        [compute cluster](/iaas/Content/Compute/Tasks/compute-clusters.htm) that the instance will be created in.
    - name: createVnicDetails
      description: |
        Contains properties for a VNIC. You use this object when creating the
        primary VNIC during instance launch or when creating a secondary VNIC.
        For more information about VNICs, see
        [Virtual Network Interface Cards (VNICs)](/iaas/Content/Network/Tasks/managingVNICs.htm).
      value:
        assignIpv6Ip: {{ assignIpv6Ip }}
        assignPrivateDnsRecord: {{ assignPrivateDnsRecord }}
        assignPublicIp: {{ assignPublicIp }}
        definedTags: "{{ definedTags }}"
        displayName: "{{ displayName }}"
        freeformTags: "{{ freeformTags }}"
        hostnameLabel: "{{ hostnameLabel }}"
        ipv6AddressIpv6SubnetCidrPairDetails:
          - ipv6Address: "{{ ipv6Address }}"
            ipv6Id: "{{ ipv6Id }}"
            ipv6SubnetCidr: "{{ ipv6SubnetCidr }}"
        nsgIds:
          - "{{ nsgIds }}"
        privateIp: "{{ privateIp }}"
        privateIpId: "{{ privateIpId }}"
        securityAttributes: "{{ securityAttributes }}"
        skipSourceDestCheck: {{ skipSourceDestCheck }}
        subnetCidr: "{{ subnetCidr }}"
        subnetId: "{{ subnetId }}"
        vlanId: "{{ vlanId }}"
    - name: dedicatedVmHostId
      value: "{{ dedicatedVmHostId }}"
      description: |
        The OCID of the dedicated virtual machine host to place the instance on.
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
    - name: extendedMetadata
      value: "{{ extendedMetadata }}"
      description: |
        Additional metadata key/value pairs that you provide. They serve the same purpose and
        functionality as fields in the \`metadata\` object.
        They are distinguished from \`metadata\` fields in that these can be nested JSON objects
        (whereas \`metadata\` fields are string/string maps only).
        The combined size of the \`metadata\` and \`extendedMetadata\` objects can be a maximum of
        32,000 bytes.
    - name: faultDomain
      value: "{{ faultDomain }}"
      description: |
        A fault domain is a grouping of hardware and infrastructure within an availability domain.
        Each availability domain contains three fault domains. Fault domains let you distribute your
        instances so that they are not on the same physical hardware within a single availability domain.
        A hardware failure or Compute hardware maintenance that affects one fault domain does not affect
        instances in other fault domains.
        If you do not specify the fault domain, the system selects one for you.
        To get a list of fault domains, use the
        [ListFaultDomains](#/en/identity/20160918/FaultDomain/ListFaultDomains) operation in the
        Identity and Access Management Service API.
        Example: \`FAULT-DOMAIN-1\`
    - name: freeformTags
      value: "{{ freeformTags }}"
      description: |
        Free-form tags for this resource. Each tag is a simple key-value pair with no
        predefined name, type, or namespace. For more information, see [Resource Tags](/iaas/Content/General/Concepts/resourcetags.htm).
        Example: \`{"Department": "Finance"}\`
    - name: hostnameLabel
      value: "{{ hostnameLabel }}"
      description: |
        Deprecated. Instead use \`hostnameLabel\` in
        [CreateVnicDetails](#/en/iaas/latest/CreateVnicDetails/).
        If you provide both, the values must match.
    - name: imageId
      value: "{{ imageId }}"
      description: |
        Deprecated. Use \`sourceDetails\` with [InstanceSourceViaImageDetails](#/en/iaas/latest/requests/InstanceSourceViaImageDetails)
        source type instead. If you specify values for both, the values must match.
    - name: instanceConfigurationId
      value: "{{ instanceConfigurationId }}"
      description: |
        The OCID of the Instance Configuration containing instance launch details. Any other fields supplied in this instance launch request will override the details stored in the Instance Configuration for this instance launch.
    - name: instanceOptions
      description: |
        Optional mutable instance options
      value:
        areLegacyImdsEndpointsDisabled: {{ areLegacyImdsEndpointsDisabled }}
    - name: ipxeScript
      value: "{{ ipxeScript }}"
      description: |
        This is an advanced option.
        When a bare metal or virtual machine
        instance boots, the iPXE firmware that runs on the instance is
        configured to run an iPXE script to continue the boot process.
        If you want more control over the boot process, you can provide
        your own custom iPXE script that will run when the instance boots.
        Be aware that the same iPXE script will run
        every time an instance boots, not only after the initial
        LaunchInstance call.
        The default iPXE script connects to the instance's local boot
        volume over iSCSI and performs a network boot. If you use a custom iPXE
        script and want to network-boot from the instance's local boot volume
        over iSCSI the same way as the default iPXE script, use the
        following iSCSI IP address: 169.254.0.2, and boot volume IQN:
        iqn.2015-02.oracle.boot.
        If your instance boot volume attachment type is paravirtualized,
        the boot volume is attached to the instance through virtio-scsi and no iPXE script is used.
        If your instance boot volume attachment type is paravirtualized
        and you use custom iPXE to network boot into your instance,
        the primary boot volume is attached as a data volume through virtio-scsi drive.
        For more information about the Bring Your Own Image feature of
        Oracle Cloud Infrastructure, see
        [Bring Your Own Image](/iaas/Content/Compute/References/bringyourownimage.htm).
        For more information about iPXE, see http://ipxe.org.
    - name: isAIEnterpriseEnabled
      value: {{ isAIEnterpriseEnabled }}
      description: |
        Whether to enable AI enterprise on the instance.
      default: false
    - name: isPvEncryptionInTransitEnabled
      value: {{ isPvEncryptionInTransitEnabled }}
      description: |
        Whether to enable in-transit encryption for the data volume's paravirtualized attachment. This field applies to both block volumes and boot volumes. The default value is false.
    - name: launchMode
      value: "{{ launchMode }}"
      description: |
        Specifies the configuration mode for launching virtual machine (VM) instances. The configuration modes are:
        * \`NATIVE\` - VM instances launch with iSCSI boot and VFIO devices. The default value for platform images.
        * \`EMULATED\` - VM instances launch with emulated devices, such as the E1000 network driver and emulated SCSI disk controller.
        * \`PARAVIRTUALIZED\` - VM instances launch with paravirtualized devices using VirtIO drivers.
        * \`ACCELERATEDPV\` - VM instances launch with accelerated paravirtualized networking type.
        * \`CUSTOM\` - VM instances launch with custom configuration settings specified in the \`LaunchOptions\` parameter.
      valid_values: ['NATIVE', 'EMULATED', 'PARAVIRTUALIZED', 'ACCELERATEDPV', 'CUSTOM']
    - name: launchOptions
      description: |
        Options for tuning the compatibility and performance of VM shapes. The values that you specify override any
        default values.
      value:
        bootVolumeType: "{{ bootVolumeType }}"
        firmware: "{{ firmware }}"
        isConsistentVolumeNamingEnabled: {{ isConsistentVolumeNamingEnabled }}
        isPvEncryptionInTransitEnabled: {{ isPvEncryptionInTransitEnabled }}
        networkType: "{{ networkType }}"
        remoteDataVolumeType: "{{ remoteDataVolumeType }}"
    - name: launchVolumeAttachments
      description: |
        Volume attachments to create as part of the launch instance operation.
      value:
        - device: "{{ device }}"
          displayName: "{{ displayName }}"
          isReadOnly: {{ isReadOnly }}
          isShareable: {{ isShareable }}
          launchCreateVolumeDetails:
            volumeCreationType: "{{ volumeCreationType }}"
          type: "{{ type }}"
          volumeId: "{{ volumeId }}"
    - name: licensingConfigs
      description: |
        List of licensing configurations associated with target launch values.
      value:
        - licenseType: "{{ licenseType }}"
          type: "{{ type }}"
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Custom metadata key/value pairs that you provide, such as the SSH public key
        required to connect to the instance.
        A metadata service runs on every launched instance. The service is an HTTP
        endpoint listening on 169.254.169.254. You can use the service to:
        * Provide information to [Cloud-Init](https://cloudinit.readthedocs.org/en/latest/)
        to be used for various system initialization tasks.
        * Get information about the instance, including the custom metadata that you
        provide when you launch the instance.
        **Providing Cloud-Init Metadata**
        You can use the following metadata key names to provide information to
        Cloud-Init:
        **"ssh_authorized_keys"** - Provide one or more public SSH keys to be
        included in the \`~/.ssh/authorized_keys\` file for the default user on the
        instance. Use a newline character to separate multiple keys. The SSH
        keys must be in the format necessary for the \`authorized_keys\` file, as shown
        in the example below.
        **"user_data"** - Provide your own base64-encoded data to be used by
        Cloud-Init to run custom scripts or provide custom Cloud-Init configuration. For
        information about how to take advantage of user data, see the
        [Cloud-Init Documentation](http://cloudinit.readthedocs.org/en/latest/topics/format.html).
        **Metadata Example**
        "metadata" : {
        "quake_bot_level" : "Severe",
        "ssh_authorized_keys" : "ssh-rsa <your_public_SSH_key>== rsa-key-20160227",
        "user_data" : "<your_public_SSH_key>=="
        }
        **Getting Metadata on the Instance**
        To get information about your instance, connect to the instance using SSH and issue any of the
        following GET requests:
        curl -H "Authorization: Bearer Oracle" http://169.254.169.254/opc/v2/instance/
        curl -H "Authorization: Bearer Oracle" http://169.254.169.254/opc/v2/instance/metadata/
        curl -H "Authorization: Bearer Oracle" http://169.254.169.254/opc/v2/instance/metadata/<any-key-name>
        You'll get back a response that includes all the instance information; only the metadata information; or
        the metadata information for the specified key name, respectively.
        The combined size of the \`metadata\` and \`extendedMetadata\` objects can be a maximum of 32,000 bytes.
    - name: placementConstraintDetails
      description: |
        The details for providing placement constraints.
      value:
        type: "{{ type }}"
    - name: platformConfig
      description: |
        The platform configuration requested for the instance.
        If you provide the parameter, the instance is created with the platform configuration that you specify.
        For any values that you omit, the instance uses the default configuration values for the \`shape\` that you
        specify. If you don't provide the parameter, the default values for the \`shape\` are used.
        Each shape only supports certain configurable values. If the values that you provide are not valid for the
        specified \`shape\`, an error is returned.
        For more information about shielded instances, see
        [Shielded Instances](/iaas/Content/Compute/References/shielded-instances.htm).
        For more information about BIOS settings for bare metal instances, see
        [BIOS Settings for Bare Metal Instances](/iaas/Content/Compute/References/bios-settings.htm).
      value:
        isMeasuredBootEnabled: {{ isMeasuredBootEnabled }}
        isMemoryEncryptionEnabled: {{ isMemoryEncryptionEnabled }}
        isSecureBootEnabled: {{ isSecureBootEnabled }}
        isTrustedPlatformModuleEnabled: {{ isTrustedPlatformModuleEnabled }}
        type: "{{ type }}"
    - name: preemptibleInstanceConfig
      description: |
        Configuration options for preemptible instances.
      value:
        preemptionAction:
          type: "{{ type }}"
    - name: securityAttributes
      value: "{{ securityAttributes }}"
      description: |
        [Security attributes](/iaas/Content/zero-trust-packet-routing/zpr-artifacts.htm#security-attributes) are labels
        for a resource that can be referenced in a [Zero Trust Packet Routing](/iaas/Content/zero-trust-packet-routing/overview.htm)
        (ZPR) policy to control access to ZPR-supported resources.
        Example: \`{"Oracle-DataSecurity-ZPR": {"MaxEgressCount": {"value":"42","mode":"audit"}}}\`
    - name: shape
      value: "{{ shape }}"
      description: |
        The shape of an instance. The shape determines the number of CPUs, amount of memory,
        and other resources allocated to the instance.
        You can enumerate all available shapes by calling [ListShapes](#/en/iaas/latest/Shape/ListShapes).
    - name: shapeConfig
      description: |
        The shape configuration requested for the instance.
        If the parameter is provided, the instance is created with the resources that you specify. If some
        properties are missing or the entire parameter is not provided, the instance is created
        with the default configuration values for the \`shape\` that you specify.
        Each shape only supports certain configurable values. If the values that you provide are not valid for the
        specified \`shape\`, an error is returned.
      value:
        baselineOcpuUtilization: "{{ baselineOcpuUtilization }}"
        memoryInGBs: {{ memoryInGBs }}
        nvmes: {{ nvmes }}
        ocpus: {{ ocpus }}
        resourceManagement: "{{ resourceManagement }}"
        vcpus: {{ vcpus }}
    - name: sourceDetails
      value:
        sourceType: "{{ sourceType }}"
    - name: subnetId
      value: "{{ subnetId }}"
      description: |
        Deprecated. Instead use \`subnetId\` in
        [CreateVnicDetails](#/en/iaas/latest/CreateVnicDetails/).
        At least one of them is required; if you provide both, the values must match.
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

Updates certain fields on the specified instance. Fields that are not provided in the&lt;br /&gt;request will not be updated. Avoid entering confidential information.&lt;br /&gt;&lt;br /&gt;Changes to metadata fields will be reflected in the instance metadata service (this may take&lt;br /&gt;up to a minute).&lt;br /&gt;&lt;br /&gt;The OCID of the instance remains the same.&lt;br /&gt;

```sql
UPDATE oci.compute.instances
SET 
agentConfig = '{{ agentConfig }}',
availabilityConfig = '{{ availabilityConfig }}',
capacityReservationId = '{{ capacityReservationId }}',
dedicatedVmHostId = '{{ dedicatedVmHostId }}',
definedTags = '{{ definedTags }}',
displayName = '{{ displayName }}',
extendedMetadata = '{{ extendedMetadata }}',
faultDomain = '{{ faultDomain }}',
freeformTags = '{{ freeformTags }}',
instanceOptions = '{{ instanceOptions }}',
isAIEnterpriseEnabled = {{ isAIEnterpriseEnabled }},
launchOptions = '{{ launchOptions }}',
metadata = '{{ metadata }}',
securityAttributes = '{{ securityAttributes }}',
shape = '{{ shape }}',
shapeConfig = '{{ shapeConfig }}',
sourceDetails = '{{ sourceDetails }}',
timeMaintenanceRebootDue = '{{ timeMaintenanceRebootDue }}',
updateOperationConstraint = '{{ updateOperationConstraint }}'
WHERE 
instanceId = '{{ instanceId }}' --required
AND region = '{{ region }}' --required
AND opc-retry-token = '{{ opc-retry-token}}'
AND if-match = '{{ if-match}}'
RETURNING
id,
agentConfig,
availabilityConfig,
availabilityDomain,
capacityReservationId,
clusterPlacementGroupId,
compartmentId,
dedicatedVmHostId,
definedTags,
displayName,
extendedMetadata,
faultDomain,
freeformTags,
imageId,
instanceConfigurationId,
instanceOptions,
ipxeScript,
isAIEnterpriseEnabled,
launchMode,
launchOptions,
licensingConfigs,
lifecycleState,
metadata,
placementConstraintDetails,
platformConfig,
preemptibleInstanceConfig,
region,
securityAttributes,
securityAttributesState,
shape,
shapeConfig,
sourceDetails,
timeCreated,
timeMaintenanceRebootDue;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="terminate"
    values={[
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="terminate">

Permanently terminates (deletes) the specified instance. Any attached VNICs and volumes are automatically detached&lt;br /&gt;when the instance terminates.&lt;br /&gt;&lt;br /&gt;To preserve the boot volume associated with the instance, specify `true` for `PreserveBootVolumeQueryParam`.&lt;br /&gt;To delete the boot volume when the instance is deleted, specify `false` or do not specify a value for `PreserveBootVolumeQueryParam`.&lt;br /&gt;&lt;br /&gt;To preserve data volumes created with the instance, specify `true` or do not specify a value for `PreserveDataVolumesQueryParam`.&lt;br /&gt;To delete the data volumes when the instance itself is deleted, specify `false` for `PreserveDataVolumesQueryParam`.&lt;br /&gt;&lt;br /&gt;This is an asynchronous operation. The instance's `lifecycleState` changes to TERMINATING temporarily&lt;br /&gt;until the instance is completely deleted. After the instance is deleted, the record remains visible in the list of instances&lt;br /&gt;with the state TERMINATED for at least 12 hours, but no further action is needed.&lt;br /&gt;

```sql
DELETE FROM oci.compute.instances
WHERE instanceId = '{{ instanceId }}' --required
AND region = '{{ region }}' --required
AND if-match = '{{ if-match }}'
AND preserveBootVolume = '{{ preserveBootVolume }}'
AND preserveDataVolumesCreatedAtLaunch = '{{ preserveDataVolumesCreatedAtLaunch }}'
AND recycleLevel = '{{ recycleLevel }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="instance_action"
    values={[
        { label: 'instance_action', value: 'instance_action' },
        { label: 'accept_shielded_integrity_policy', value: 'accept_shielded_integrity_policy' },
        { label: 'change_compartment', value: 'change_compartment' }
    ]}
>
<TabItem value="instance_action">

Performs one of the following power actions on the specified instance:&lt;br /&gt;&lt;br /&gt;- **START** - Powers on the instance.&lt;br /&gt;&lt;br /&gt;- **STOP** - Powers off the instance.&lt;br /&gt;&lt;br /&gt;- **RESET** - Powers off the instance and then powers it back on.&lt;br /&gt;&lt;br /&gt;- **SOFTSTOP** - Gracefully shuts down the instance by sending a shutdown command to the operating system.&lt;br /&gt;After waiting 15 minutes for the OS to shut down, the instance is powered off.&lt;br /&gt;If the applications that run on the instance take more than 15 minutes to shut down, they could be improperly stopped, resulting&lt;br /&gt;in data corruption. To avoid this, manually shut down the instance using the commands available in the OS before you softstop the&lt;br /&gt;instance.&lt;br /&gt;&lt;br /&gt;- **SOFTRESET** - Gracefully reboots the instance by sending a shutdown command to the operating system.&lt;br /&gt;After waiting 15 minutes for the OS to shut down, the instance is powered off and&lt;br /&gt;then powered back on.&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;- **SENDDIAGNOSTICINTERRUPT** - For advanced users. **Caution: Sending a diagnostic interrupt to a live system can&lt;br /&gt;cause data corruption or system failure.** Sends a diagnostic interrupt that causes the instance's&lt;br /&gt;OS to crash and then reboot. Before you send a diagnostic interrupt, you must configure the instance to generate a&lt;br /&gt;crash dump file when it crashes. The crash dump captures information about the state of the OS at the time of&lt;br /&gt;the crash. After the OS restarts, you can analyze the crash dump to diagnose the issue. For more information, see&lt;br /&gt;&#91;Sending a Diagnostic Interrupt&#93;(/iaas/Content/Compute/Tasks/sendingdiagnosticinterrupt.htm).&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;- **DIAGNOSTICREBOOT** - Powers off the instance, rebuilds it, and then powers it back on.&lt;br /&gt;Before you send a diagnostic reboot, restart the instance's OS, confirm that the instance and networking settings are configured&lt;br /&gt;correctly, and try other &#91;troubleshooting steps&#93;(/iaas/Content/Compute/References/troubleshooting-compute-instances.htm).&lt;br /&gt;Use diagnostic reboot as a final attempt to troubleshoot an unreachable instance. For virtual machine (VM) instances only.&lt;br /&gt;For more information, see &#91;Performing a Diagnostic Reboot&#93;(/iaas/Content/Compute/Tasks/diagnostic-reboot.htm).&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;- **REBOOTMIGRATE** - Powers off the instance, moves it to new hardware, and then powers it back on. For more information, see&lt;br /&gt;&#91;Infrastructure Maintenance&#93;(/iaas/Content/Compute/References/infrastructure-maintenance.htm).&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;For more information about managing instance lifecycle states, see&lt;br /&gt;&#91;Stopping and Starting an Instance&#93;(/iaas/Content/Compute/Tasks/restartinginstance.htm).&lt;br /&gt;

```sql
EXEC oci.compute.instances.instance_action 
@instanceId='{{ instanceId }}' --required, 
@action='{{ action }}' --required, 
@region='{{ region }}' --required, 
@opc-retry-token='{{ opc-retry-token }}', 
@if-match='{{ if-match }}'
;
```
</TabItem>
<TabItem value="accept_shielded_integrity_policy">

Accept the changes to the PCR values in the measured boot report.

```sql
EXEC oci.compute.instances.accept_shielded_integrity_policy 
@instanceId='{{ instanceId }}' --required, 
@region='{{ region }}' --required, 
@opc-request-id='{{ opc-request-id }}', 
@if-match='{{ if-match }}', 
@opc-retry-token='{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="change_compartment">

Moves an instance into a different compartment within the same tenancy. For information about&lt;br /&gt;moving resources between compartments, see&lt;br /&gt;&#91;Moving Resources to a Different Compartment&#93;(/iaas/Content/Identity/Tasks/managingcompartments.htm#moveRes).&lt;br /&gt;&lt;br /&gt;When you move an instance to a different compartment, associated resources such as boot volumes and VNICs&lt;br /&gt;are not moved.&lt;br /&gt;

```sql
EXEC oci.compute.instances.change_compartment 
@instanceId='{{ instanceId }}' --required, 
@region='{{ region }}' --required, 
@if-match='{{ if-match }}', 
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
