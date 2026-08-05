--- 
title: backend_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - backend_sets
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

Creates, updates, deletes, gets or lists a <code>backend_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backend_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.load_balancer.backend_sets" /></td></tr>
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

The backend set information is being retrieved.

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
    <td>A friendly name for the backend set. It must be unique and it cannot be changed.  Valid backend set names include only alphanumeric characters, dashes, and underscores. Backend set names cannot contain spaces. Avoid entering confidential information.  Example: `example_backend_set` </td>
</tr>
<tr>
    <td><CopyableCode code="backendMaxConnections" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of simultaneous connections the load balancer can make to any backend in the backend set unless the backend has its own maxConnections setting. If this is not set or set to 0 then the number of simultaneous connections the load balancer can make to any backend in the backend set unless the backend has its own maxConnections setting is unlimited.  Example: `300` </td>
</tr>
<tr>
    <td><CopyableCode code="backends" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="healthChecker" /></td>
    <td><code>object</code></td>
    <td>The health check policy configuration. For more information, see &#91;Editing Health Check Policies&#93;(/Content/Balance/Tasks/editinghealthcheck.htm).  (x-example: &#123;&lt;br /&gt;  "protocol": "HTTP",&lt;br /&gt;  "isForcePlainText": false,&lt;br /&gt;  "urlPath": "/healthcheck",&lt;br /&gt;  "port": 8080,&lt;br /&gt;  "returnCode": 200,&lt;br /&gt;  "retries": 3,&lt;br /&gt;  "timeoutInMillis": 3000,&lt;br /&gt;  "intervalInMillis": 10000,&lt;br /&gt;  "responseBodyRegex": "^((?!false).|\s)*$"&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The load balancer policy for the backend set. To get a list of available policies, use the &#91;ListPolicies&#93;(#/en/loadbalancer/20170115/LoadBalancerPolicy/ListPolicies) operation.  Example: `LEAST_CONNECTIONS` </td>
</tr>
<tr>
    <td><CopyableCode code="sessionPersistenceConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration details for implementing session persistence based on a user-specified cookie name (application cookie stickiness).  Session persistence enables the Load Balancing service to direct any number of requests that originate from a single logical client to a single backend web server. For more information, see &#91;Session Persistence&#93;(/Content/Balance/Reference/sessionpersistence.htm).  To disable application cookie stickiness on a running load balancer, use the &#91;UpdateBackendSet&#93;(#/en/loadbalancer/20170115/BackendSet/UpdateBackendSet) operation and specify `null` for the `SessionPersistenceConfigurationDetails` object.  Example: `SessionPersistenceConfigurationDetails: null`  **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.  (x-example: &#123;&lt;br /&gt;  "cookieName": "example_cookie",&lt;br /&gt;  "disableFallback": false&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sslConfiguration" /></td>
    <td><code>object</code></td>
    <td>A listener's SSL handling configuration.  To use SSL, a listener must be associated with a &#91;certificate bundle&#93;(#/en/loadbalancer/20170115/Certificate/).  **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.  (x-example: &#91;&lt;br /&gt;  &#123;&lt;br /&gt;    "protocols": &#91;"TLSv1.1", "TLSv1.2"&#93;,&lt;br /&gt;    "cipherSuiteName" : "example_cipher_suite",&lt;br /&gt;    "serverOrderPreference" : "ENABLED",&lt;br /&gt;    "certificateName": "example_certificate_bundle",&lt;br /&gt;    "verifyPeerCertificate": true&lt;br /&gt;    "verifyDepth": 3,&lt;br /&gt;  &#125;,&lt;br /&gt;  &#123;&lt;br /&gt;    "certificateIds": &#91; "example_certificate_id" &#93;,&lt;br /&gt;    "trustedCertificateAuthorityIds": &#91; "example_certificate_authority_id", "example_certificate_bundle_id"&#93;&lt;br /&gt;    "verifyPeerCertificate": true&lt;br /&gt;    "verifyDepth": 3,&lt;br /&gt;  &#125;&lt;br /&gt;&#93;&lt;br /&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The configuration of a load balancer backend set.&lt;br /&gt;For more information on backend set configuration, see&lt;br /&gt;&#91;Managing Backend Sets&#93;(/Content/Balance/Tasks/managingbackendsets.htm).&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;

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
    <td>A friendly name for the backend set. It must be unique and it cannot be changed.  Valid backend set names include only alphanumeric characters, dashes, and underscores. Backend set names cannot contain spaces. Avoid entering confidential information.  Example: `example_backend_set` </td>
</tr>
<tr>
    <td><CopyableCode code="backendMaxConnections" /></td>
    <td><code>integer (int32)</code></td>
    <td>The maximum number of simultaneous connections the load balancer can make to any backend in the backend set unless the backend has its own maxConnections setting. If this is not set or set to 0 then the number of simultaneous connections the load balancer can make to any backend in the backend set unless the backend has its own maxConnections setting is unlimited.  Example: `300` </td>
</tr>
<tr>
    <td><CopyableCode code="backends" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="healthChecker" /></td>
    <td><code>object</code></td>
    <td>The health check policy configuration. For more information, see &#91;Editing Health Check Policies&#93;(/Content/Balance/Tasks/editinghealthcheck.htm).  (x-example: &#123;&lt;br /&gt;  "protocol": "HTTP",&lt;br /&gt;  "isForcePlainText": false,&lt;br /&gt;  "urlPath": "/healthcheck",&lt;br /&gt;  "port": 8080,&lt;br /&gt;  "returnCode": 200,&lt;br /&gt;  "retries": 3,&lt;br /&gt;  "timeoutInMillis": 3000,&lt;br /&gt;  "intervalInMillis": 10000,&lt;br /&gt;  "responseBodyRegex": "^((?!false).|\s)*$"&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The load balancer policy for the backend set. To get a list of available policies, use the &#91;ListPolicies&#93;(#/en/loadbalancer/20170115/LoadBalancerPolicy/ListPolicies) operation.  Example: `LEAST_CONNECTIONS` </td>
</tr>
<tr>
    <td><CopyableCode code="sessionPersistenceConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration details for implementing session persistence based on a user-specified cookie name (application cookie stickiness).  Session persistence enables the Load Balancing service to direct any number of requests that originate from a single logical client to a single backend web server. For more information, see &#91;Session Persistence&#93;(/Content/Balance/Reference/sessionpersistence.htm).  To disable application cookie stickiness on a running load balancer, use the &#91;UpdateBackendSet&#93;(#/en/loadbalancer/20170115/BackendSet/UpdateBackendSet) operation and specify `null` for the `SessionPersistenceConfigurationDetails` object.  Example: `SessionPersistenceConfigurationDetails: null`  **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.  (x-example: &#123;&lt;br /&gt;  "cookieName": "example_cookie",&lt;br /&gt;  "disableFallback": false&lt;br /&gt;&#125;&lt;br /&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sslConfiguration" /></td>
    <td><code>object</code></td>
    <td>A listener's SSL handling configuration.  To use SSL, a listener must be associated with a &#91;certificate bundle&#93;(#/en/loadbalancer/20170115/Certificate/).  **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.  (x-example: &#91;&lt;br /&gt;  &#123;&lt;br /&gt;    "protocols": &#91;"TLSv1.1", "TLSv1.2"&#93;,&lt;br /&gt;    "cipherSuiteName" : "example_cipher_suite",&lt;br /&gt;    "serverOrderPreference" : "ENABLED",&lt;br /&gt;    "certificateName": "example_certificate_bundle",&lt;br /&gt;    "verifyPeerCertificate": true&lt;br /&gt;    "verifyDepth": 3,&lt;br /&gt;  &#125;,&lt;br /&gt;  &#123;&lt;br /&gt;    "certificateIds": &#91; "example_certificate_id" &#93;,&lt;br /&gt;    "trustedCertificateAuthorityIds": &#91; "example_certificate_authority_id", "example_certificate_bundle_id"&#93;&lt;br /&gt;    "verifyPeerCertificate": true&lt;br /&gt;    "verifyDepth": 3,&lt;br /&gt;  &#125;&lt;br /&gt;&#93;&lt;br /&gt;)</td>
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
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-backendSetName"><code>backendSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified backend set's configuration information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists all backend sets associated with a given load balancer.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-healthChecker"><code>healthChecker</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Adds a backend set to a load balancer.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-backendSetName"><code>backendSetName</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policy"><code>policy</code></a>, <a href="#parameter-backends"><code>backends</code></a>, <a href="#parameter-healthChecker"><code>healthChecker</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Updates a backend set.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-backendSetName"><code>backendSetName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes the specified backend set. Note that deleting a backend set removes its backend servers from the load balancer.&lt;br /&gt;&lt;br /&gt;Before you can delete a backend set, you must remove it from any active listeners.&lt;br /&gt;</td>
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
<tr id="parameter-backendSetName">
    <td><CopyableCode code="backendSetName" /></td>
    <td><code>string</code></td>
    <td>The name of the backend set to delete.  Example: `example_backend_set` </td>
</tr>
<tr id="parameter-loadBalancerId">
    <td><CopyableCode code="loadBalancerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the load balancer associated with the backend set.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_CLI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_CLI_REGION)</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets the specified backend set's configuration information.

```sql
SELECT
name,
backendMaxConnections,
backends,
healthChecker,
policy,
sessionPersistenceConfiguration,
sslConfiguration
FROM oci.load_balancer.backend_sets
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
AND backendSetName = '{{ backendSetName }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists all backend sets associated with a given load balancer.

```sql
SELECT
name,
backendMaxConnections,
backends,
healthChecker,
policy,
sessionPersistenceConfiguration,
sslConfiguration
FROM oci.load_balancer.backend_sets
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
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

Adds a backend set to a load balancer.

```sql
INSERT INTO oci.load_balancer.backend_sets (
backendMaxConnections,
backends,
healthChecker,
name,
policy,
sessionPersistenceConfiguration,
sslConfiguration,
loadBalancerId,
region,
opc-request-id,
opc-retry-token
)
SELECT 
{{ backendMaxConnections }},
'{{ backends }}',
'{{ healthChecker }}' /* required */,
'{{ name }}' /* required */,
'{{ policy }}' /* required */,
'{{ sessionPersistenceConfiguration }}',
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
- name: backend_sets
  props:
    - name: loadBalancerId
      value: "{{ loadBalancerId }}"
      description: Required parameter for the backend_sets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backend_sets resource.
    - name: backendMaxConnections
      value: {{ backendMaxConnections }}
      description: |
        The maximum number of simultaneous connections the load balancer can make to any backend
        in the backend set unless the backend has its own maxConnections setting. If this is not
        set or set to 0 then the number of simultaneous connections the load balancer can make
        to any backend in the backend set unless the backend has its own maxConnections setting
        is unlimited.
        If setting backendMaxConnections to some value other than 0 then that value must be greater
        or equal to 256.
        Example: \`300\`
    - name: backends
      value:
        - backup: {{ backup }}
          drain: {{ drain }}
          ipAddress: "{{ ipAddress }}"
          maxConnections: {{ maxConnections }}
          offline: {{ offline }}
          port: {{ port }}
          weight: {{ weight }}
    - name: healthChecker
      description: |
        The health check policy's configuration details.
      value:
        intervalInMillis: {{ intervalInMillis }}
        isForcePlainText: {{ isForcePlainText }}
        port: {{ port }}
        protocol: "{{ protocol }}"
        responseBodyRegex: "{{ responseBodyRegex }}"
        retries: {{ retries }}
        returnCode: {{ returnCode }}
        timeoutInMillis: {{ timeoutInMillis }}
        urlPath: "{{ urlPath }}"
    - name: name
      value: "{{ name }}"
      description: |
        A friendly name for the backend set. It must be unique and it cannot be changed.
        Valid backend set names include only alphanumeric characters, dashes, and underscores. Backend set names cannot
        contain spaces. Avoid entering confidential information.
        Example: \`example_backend_set\`
    - name: policy
      value: "{{ policy }}"
      description: |
        The load balancer policy for the backend set. To get a list of available policies, use the
        [ListPolicies](#/en/loadbalancer/20170115/LoadBalancerPolicy/ListPolicies) operation.
        Example: \`LEAST_CONNECTIONS\`
    - name: sessionPersistenceConfiguration
      description: |
        The configuration details for implementing session persistence based on a user-specified cookie name (application
        cookie stickiness).
        Session persistence enables the Load Balancing service to direct any number of requests that originate from a single
        logical client to a single backend web server. For more information, see
        [Session Persistence](/Content/Balance/Reference/sessionpersistence.htm).
        To disable application cookie stickiness on a running load balancer, use the
        [UpdateBackendSet](#/en/loadbalancer/20170115/BackendSet/UpdateBackendSet) operation and specify \`null\` for the
        \`SessionPersistenceConfigurationDetails\` object.
        Example: \`SessionPersistenceConfigurationDetails: null\`
        **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
      value:
        cookieName: "{{ cookieName }}"
        disableFallback: {{ disableFallback }}
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

Updates a backend set.

```sql
UPDATE oci.load_balancer.backend_sets
SET 
backendMaxConnections = {{ backendMaxConnections }},
backends = '{{ backends }}',
healthChecker = '{{ healthChecker }}',
policy = '{{ policy }}',
sessionPersistenceConfiguration = '{{ sessionPersistenceConfiguration }}',
sslConfiguration = '{{ sslConfiguration }}'
WHERE 
loadBalancerId = '{{ loadBalancerId }}' --required
AND backendSetName = '{{ backendSetName }}' --required
AND region = '{{ region }}' --required
AND policy = '{{ policy }}' --required
AND backends = '{{ backends }}' --required
AND healthChecker = '{{ healthChecker }}' --required
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

Deletes the specified backend set. Note that deleting a backend set removes its backend servers from the load balancer.&lt;br /&gt;&lt;br /&gt;Before you can delete a backend set, you must remove it from any active listeners.&lt;br /&gt;

```sql
DELETE FROM oci.load_balancer.backend_sets
WHERE loadBalancerId = '{{ loadBalancerId }}' --required
AND backendSetName = '{{ backendSetName }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
