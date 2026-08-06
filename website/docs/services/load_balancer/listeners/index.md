--- 
title: listeners
hide_title: false
hide_table_of_contents: false
keywords:
  - listeners
  - load_balancer
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

Creates, updates, deletes, gets or lists a <code>listeners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="listeners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.load_balancer.listeners" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-defaultBackendSetName"><code>defaultBackendSetName</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-port"><code>port</code></a>, <a href="#parameter-protocol"><code>protocol</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Adds a listener to a load balancer.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-listenerName"><code>listenerName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-defaultBackendSetName"><code>defaultBackendSetName</code></a>, <a href="#parameter-port"><code>port</code></a>, <a href="#parameter-protocol"><code>protocol</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Updates a listener for a given load balancer.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-listenerName"><code>listenerName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes a listener from a load balancer.</td>
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
<tr id="parameter-listenerName">
    <td><CopyableCode code="listenerName" /></td>
    <td><code>string</code></td>
    <td>The name of the listener to delete.  Example: `example_listener` </td>
</tr>
<tr id="parameter-loadBalancerId">
    <td><CopyableCode code="loadBalancerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the load balancer associated with the listener to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
</tr>
<tr id="parameter-opc-retry-token">
    <td><CopyableCode code="opc-retry-token" /></td>
    <td><code>string</code></td>
    <td>A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). </td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Adds a listener to a load balancer.

```sql
INSERT INTO oci.load_balancer.listeners (
connectionConfiguration,
defaultBackendSetName,
hostnameNames,
name,
pathRouteSetName,
port,
protocol,
routingPolicyName,
ruleSetNames,
sslConfiguration,
loadBalancerId,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ connectionConfiguration }}',
'{{ defaultBackendSetName }}' /* required */,
'{{ hostnameNames }}',
'{{ name }}' /* required */,
'{{ pathRouteSetName }}',
{{ port }} /* required */,
'{{ protocol }}' /* required */,
'{{ routingPolicyName }}',
'{{ ruleSetNames }}',
'{{ sslConfiguration }}',
'{{ loadBalancerId }}',
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: listeners
  props:
    - name: loadBalancerId
      value: "{{ loadBalancerId }}"
      description: Required parameter for the listeners resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the listeners resource.
    - name: connectionConfiguration
      description: |
        Configuration details for the connection between the client and backend servers.
      value:
        backendTcpProxyProtocolOptions:
          - "{{ backendTcpProxyProtocolOptions }}"
        backendTcpProxyProtocolVersion: {{ backendTcpProxyProtocolVersion }}
        idleTimeout: {{ idleTimeout }}
    - name: defaultBackendSetName
      value: "{{ defaultBackendSetName }}"
      description: |
        The name of the associated backend set.
        Example: \`example_backend_set\`
    - name: hostnameNames
      value:
        - "{{ hostnameNames }}"
      description: |
        An array of hostname resource names.
    - name: name
      value: "{{ name }}"
      description: |
        A friendly name for the listener. It must be unique and it cannot be changed.
        Avoid entering confidential information.
        Example: \`example_listener\`
    - name: pathRouteSetName
      value: "{{ pathRouteSetName }}"
      description: |
        Deprecated. Please use \`routingPolicies\` instead.
        The name of the set of path-based routing rules, [PathRouteSet](#/en/loadbalancer/20170115/PathRouteSet/),
        applied to this listener's traffic.
        Example: \`example_path_route_set\`
    - name: port
      value: {{ port }}
      description: |
        The communication port for the listener.
        Example: \`80\`
    - name: protocol
      value: "{{ protocol }}"
      description: |
        The protocol on which the listener accepts connection requests.
        To get a list of valid protocols, use the [ListProtocols](#/en/loadbalancer/20170115/LoadBalancerProtocol/ListProtocols)
        operation.
        Example: \`HTTP\`
    - name: routingPolicyName
      value: "{{ routingPolicyName }}"
      description: |
        The name of the routing policy applied to this listener's traffic.
        Example: \`example_routing_policy\`
    - name: ruleSetNames
      value:
        - "{{ ruleSetNames }}"
      description: |
        The names of the [rule sets](#/en/loadbalancer/20170115/RuleSet/) to apply to the listener.
        Example: ["example_rule_set"]
    - name: sslConfiguration
      description: |
        The load balancer's SSL handling configuration details.
        **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
      value:
        certificateIds:
          - "{{ certificateIds }}"
        certificateName: "{{ certificateName }}"
        cipherSuiteName: "{{ cipherSuiteName }}"
        protocols:
          - "{{ protocols }}"
        serverOrderPreference: "{{ serverOrderPreference }}"
        trustedCertificateAuthorityIds:
          - "{{ trustedCertificateAuthorityIds }}"
        verifyDepth: {{ verifyDepth }}
        verifyPeerCertificate: {{ verifyPeerCertificate }}
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
    - name: opc-retry-token
      value: "{{ opc-retry-token }}"
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
      description: A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected). 
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

Updates a listener for a given load balancer.

```sql
UPDATE oci.load_balancer.listeners
SET 
connectionConfiguration = '{{ connectionConfiguration }}',
defaultBackendSetName = '{{ defaultBackendSetName }}',
hostnameNames = '{{ hostnameNames }}',
pathRouteSetName = '{{ pathRouteSetName }}',
port = {{ port }},
protocol = '{{ protocol }}',
routingPolicyName = '{{ routingPolicyName }}',
ruleSetNames = '{{ ruleSetNames }}',
sslConfiguration = '{{ sslConfiguration }}'
WHERE 
loadBalancerId = '{{ loadBalancerId }}' --required
AND listenerName = '{{ listenerName }}' --required
AND region = '{{ region }}' --required
AND defaultBackendSetName = '{{ defaultBackendSetName }}' --required
AND port = '{{ port }}' --required
AND protocol = '{{ protocol }}' --required
AND opc-request-id = '{{ opc-request-id}}'
AND opc-retry-token = '{{ opc-retry-token}}';
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

Deletes a listener from a load balancer.

```sql
DELETE FROM oci.load_balancer.listeners
WHERE loadBalancerId = '{{ loadBalancerId }}' --required
AND listenerName = '{{ listenerName }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
