--- 
title: ssl_cipher_suites
hide_title: false
hide_table_of_contents: false
keywords:
  - ssl_cipher_suites
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

Creates, updates, deletes, gets or lists a <code>ssl_cipher_suites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ssl_cipher_suites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="oci.load_balancer.ssl_cipher_suites" /></td></tr>
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

The SSL cipher suite's configuration information is being retrieved.

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
    <td>A friendly name for the SSL cipher suite. It must be unique and it cannot be changed.  **Note:** The name of your user-defined cipher suite must not be the same as any of Oracle's predefined or           reserved SSL cipher suite names:  * oci-default-ssl-cipher-suite-v1 * oci-modern-ssl-cipher-suite-v1 * oci-compatible-ssl-cipher-suite-v1 * oci-wider-compatible-ssl-cipher-suite-v1 * oci-customized-ssl-cipher-suite * oci-default-http2-ssl-cipher-suite-v1 * oci-default-http2-tls-13-ssl-cipher-suite-v1 * oci-default-http2-tls-12-13-ssl-cipher-suite-v1 * oci-tls-13-recommended-ssl-cipher-suite-v1 * oci-tls-12-13-wider-ssl-cipher-suite-v1 * oci-tls-11-12-13-wider-ssl-cipher-suite-v1  example: `example_cipher_suite`  (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ciphers" /></td>
    <td><code>array</code></td>
    <td>A list of SSL ciphers the load balancer must support for HTTPS or SSL connections.  The following ciphers are valid values for this property:  *  __TLSv1.3 ciphers__          "TLS_AES_128_GCM_SHA256"         "TLS_AES_256_GCM_SHA384"         "TLS_CHACHA20_POLY1305_SHA256"         "TLS_AES_128_CCM_SHA256"         "TLS_AES_128_CCM_8_SHA256"  *  __TLSv1.2 ciphers__          "AES128-GCM-SHA256"         "AES128-SHA256"         "AES256-GCM-SHA384"         "AES256-SHA256"         "DH-DSS-AES128-GCM-SHA256"         "DH-DSS-AES128-SHA256"         "DH-DSS-AES256-GCM-SHA384"         "DH-DSS-AES256-SHA256"         "DH-RSA-AES128-GCM-SHA256"         "DH-RSA-AES128-SHA256"         "DH-RSA-AES256-GCM-SHA384"         "DH-RSA-AES256-SHA256"         "DHE-DSS-AES128-GCM-SHA256"         "DHE-DSS-AES128-SHA256"         "DHE-DSS-AES256-GCM-SHA384"         "DHE-DSS-AES256-SHA256"         "DHE-RSA-AES128-GCM-SHA256"         "DHE-RSA-AES128-SHA256"         "DHE-RSA-AES256-GCM-SHA384"         "DHE-RSA-AES256-SHA256"         "ECDH-ECDSA-AES128-GCM-SHA256"         "ECDH-ECDSA-AES128-SHA256"         "ECDH-ECDSA-AES256-GCM-SHA384"         "ECDH-ECDSA-AES256-SHA384"         "ECDH-RSA-AES128-GCM-SHA256"         "ECDH-RSA-AES128-SHA256"         "ECDH-RSA-AES256-GCM-SHA384"         "ECDH-RSA-AES256-SHA384"         "ECDHE-ECDSA-AES128-GCM-SHA256"         "ECDHE-ECDSA-AES128-SHA256"         "ECDHE-ECDSA-AES256-GCM-SHA384"         "ECDHE-ECDSA-AES256-SHA384"         "ECDHE-RSA-AES128-GCM-SHA256"         "ECDHE-RSA-AES128-SHA256"         "ECDHE-RSA-AES256-GCM-SHA384"         "ECDHE-RSA-AES256-SHA384"  *  __TLSv1 ciphers also supported by TLSv1.2__          "AES128-SHA"         "AES256-SHA"         "CAMELLIA128-SHA"         "CAMELLIA256-SHA"         "DES-CBC3-SHA"         "DH-DSS-AES128-SHA"         "DH-DSS-AES256-SHA"         "DH-DSS-CAMELLIA128-SHA"         "DH-DSS-CAMELLIA256-SHA"         "DH-DSS-DES-CBC3-SHAv"         "DH-DSS-SEED-SHA"         "DH-RSA-AES128-SHA"         "DH-RSA-AES256-SHA"         "DH-RSA-CAMELLIA128-SHA"         "DH-RSA-CAMELLIA256-SHA"         "DH-RSA-DES-CBC3-SHA"         "DH-RSA-SEED-SHA"         "DHE-DSS-AES128-SHA"         "DHE-DSS-AES256-SHA"         "DHE-DSS-CAMELLIA128-SHA"         "DHE-DSS-CAMELLIA256-SHA"         "DHE-DSS-DES-CBC3-SHA"         "DHE-DSS-SEED-SHA"         "DHE-RSA-AES128-SHA"         "DHE-RSA-AES256-SHA"         "DHE-RSA-CAMELLIA128-SHA"         "DHE-RSA-CAMELLIA256-SHA"         "DHE-RSA-DES-CBC3-SHA"         "DHE-RSA-SEED-SHA"         "ECDH-ECDSA-AES128-SHA"         "ECDH-ECDSA-AES256-SHA"         "ECDH-ECDSA-DES-CBC3-SHA"         "ECDH-ECDSA-RC4-SHA"         "ECDH-RSA-AES128-SHA"         "ECDH-RSA-AES256-SHA"         "ECDH-RSA-DES-CBC3-SHA"         "ECDH-RSA-RC4-SHA"         "ECDHE-ECDSA-AES128-SHA"         "ECDHE-ECDSA-AES256-SHA"         "ECDHE-ECDSA-DES-CBC3-SHA"         "ECDHE-ECDSA-RC4-SHA"         "ECDHE-RSA-AES128-SHA"         "ECDHE-RSA-AES256-SHA"         "ECDHE-RSA-DES-CBC3-SHA"         "ECDHE-RSA-RC4-SHA"         "IDEA-CBC-SHA"         "KRB5-DES-CBC3-MD5"         "KRB5-DES-CBC3-SHA"         "KRB5-IDEA-CBC-MD5"         "KRB5-IDEA-CBC-SHA"         "KRB5-RC4-MD5"         "KRB5-RC4-SHA"         "PSK-3DES-EDE-CBC-SHA"         "PSK-AES128-CBC-SHA"         "PSK-AES256-CBC-SHA"         "PSK-RC4-SHA"         "RC4-MD5"         "RC4-SHA"         "SEED-SHA"  example: `&#91;"ECDHE-RSA-AES256-GCM-SHA384","ECDHE-ECDSA-AES256-GCM-SHA384","ECDHE-RSA-AES128-GCM-SHA256"&#93;` </td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

The configuration details of an SSL cipher suite.&lt;br /&gt;&lt;br /&gt;The algorithms that compose a cipher suite help you secure Transport Layer Security (TLS) or Secure Socket Layer&lt;br /&gt;(SSL) network connections. A cipher suite defines the list of security algorithms your load balancer uses to&lt;br /&gt;negotiate with peers while sending and receiving information. The cipher suites you use affect the security&lt;br /&gt;level, performance, and compatibility of your data traffic.&lt;br /&gt;&lt;br /&gt;**Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.&lt;br /&gt;&lt;br /&gt;Oracle created the following predefined cipher suites that you can specify when you define a resource's&lt;br /&gt;&#91;SSL configuration&#93;(/api/#/en/loadbalancer/20170115/datatypes/SSLConfigurationDetails). You can &#91;create custom&lt;br /&gt;cipher suites&#93;(/api/#/en/loadbalancer/20170115/SSLCipherSuite/CreateSSLCipherSuite) if the predefined cipher&lt;br /&gt;suites do not meet your requirements.&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;*  __oci-default-ssl-cipher-suite-v1__&lt;br /&gt;&lt;br /&gt;        "DHE-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "DHE-RSA-AES128-SHA256"&lt;br /&gt;        "DHE-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "DHE-RSA-AES256-SHA256"&lt;br /&gt;        "ECDHE-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDHE-RSA-AES128-SHA256"&lt;br /&gt;        "ECDHE-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-RSA-AES256-SHA384"&lt;br /&gt;&lt;br /&gt;*  __oci-modern-ssl-cipher-suite-v1__&lt;br /&gt;&lt;br /&gt;        "AES128-GCM-SHA256"&lt;br /&gt;        "AES128-SHA256"&lt;br /&gt;        "AES256-GCM-SHA384"&lt;br /&gt;        "AES256-SHA256"&lt;br /&gt;        "DHE-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "DHE-RSA-AES128-SHA256"&lt;br /&gt;        "DHE-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "DHE-RSA-AES256-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES128-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-ECDSA-AES256-SHA384"&lt;br /&gt;        "ECDHE-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDHE-RSA-AES128-SHA256"&lt;br /&gt;        "ECDHE-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-RSA-AES256-SHA384"&lt;br /&gt;&lt;br /&gt;*  __oci-compatible-ssl-cipher-suite-v1__&lt;br /&gt;&lt;br /&gt;        "AES128-GCM-SHA256"&lt;br /&gt;        "AES128-SHA"&lt;br /&gt;        "AES128-SHA256"&lt;br /&gt;        "AES256-GCM-SHA384"&lt;br /&gt;        "AES256-SHA"&lt;br /&gt;        "AES256-SHA256"&lt;br /&gt;        "DHE-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "DHE-RSA-AES128-SHA256"&lt;br /&gt;        "DHE-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "DHE-RSA-AES256-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES128-SHA"&lt;br /&gt;        "ECDHE-ECDSA-AES128-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-ECDSA-AES256-SHA"&lt;br /&gt;        "ECDHE-ECDSA-AES256-SHA384"&lt;br /&gt;        "ECDHE-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDHE-RSA-AES128-SHA"&lt;br /&gt;        "ECDHE-RSA-AES128-SHA256"&lt;br /&gt;        "ECDHE-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-RSA-AES256-SHA"&lt;br /&gt;        "ECDHE-RSA-AES256-SHA384"&lt;br /&gt;&lt;br /&gt;*  __oci-wider-compatible-ssl-cipher-suite-v1__&lt;br /&gt;&lt;br /&gt;        "AES128-GCM-SHA256"&lt;br /&gt;        "AES128-SHA"&lt;br /&gt;        "AES128-SHA256"&lt;br /&gt;        "AES256-GCM-SHA384"&lt;br /&gt;        "AES256-SHA"&lt;br /&gt;        "AES256-SHA256"&lt;br /&gt;        "CAMELLIA128-SHA"&lt;br /&gt;        "CAMELLIA256-SHA"&lt;br /&gt;        "DES-CBC3-SHA"&lt;br /&gt;        "DH-DSS-AES128-GCM-SHA256"&lt;br /&gt;        "DH-DSS-AES128-SHA"&lt;br /&gt;        "DH-DSS-AES128-SHA256"&lt;br /&gt;        "DH-DSS-AES256-GCM-SHA384"&lt;br /&gt;        "DH-DSS-AES256-SHA"&lt;br /&gt;        "DH-DSS-AES256-SHA256"&lt;br /&gt;        "DH-DSS-CAMELLIA128-SHA"&lt;br /&gt;        "DH-DSS-CAMELLIA256-SHA"&lt;br /&gt;        "DH-DSS-DES-CBC3-SHAv"&lt;br /&gt;        "DH-DSS-SEED-SHA"&lt;br /&gt;        "DH-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "DH-RSA-AES128-SHA"&lt;br /&gt;        "DH-RSA-AES128-SHA256"&lt;br /&gt;        "DH-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "DH-RSA-AES256-SHA"&lt;br /&gt;        "DH-RSA-AES256-SHA256"&lt;br /&gt;        "DH-RSA-CAMELLIA128-SHA"&lt;br /&gt;        "DH-RSA-CAMELLIA256-SHA"&lt;br /&gt;        "DH-RSA-DES-CBC3-SHA"&lt;br /&gt;        "DH-RSA-SEED-SHA"&lt;br /&gt;        "DHE-DSS-AES128-GCM-SHA256"&lt;br /&gt;        "DHE-DSS-AES128-SHA"&lt;br /&gt;        "DHE-DSS-AES128-SHA256"&lt;br /&gt;        "DHE-DSS-AES256-GCM-SHA384"&lt;br /&gt;        "DHE-DSS-AES256-SHA"&lt;br /&gt;        "DHE-DSS-AES256-SHA256"&lt;br /&gt;        "DHE-DSS-CAMELLIA128-SHA"&lt;br /&gt;        "DHE-DSS-CAMELLIA256-SHA"&lt;br /&gt;        "DHE-DSS-DES-CBC3-SHA"&lt;br /&gt;        "DHE-DSS-SEED-SHA"&lt;br /&gt;        "DHE-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "DHE-RSA-AES128-SHA"&lt;br /&gt;        "DHE-RSA-AES128-SHA256"&lt;br /&gt;        "DHE-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "DHE-RSA-AES256-SHA"&lt;br /&gt;        "DHE-RSA-AES256-SHA256"&lt;br /&gt;        "DHE-RSA-CAMELLIA128-SHA"&lt;br /&gt;        "DHE-RSA-CAMELLIA256-SHA"&lt;br /&gt;        "DHE-RSA-DES-CBC3-SHA"&lt;br /&gt;        "DHE-RSA-SEED-SHA"&lt;br /&gt;        "ECDH-ECDSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDH-ECDSA-AES128-SHA"&lt;br /&gt;        "ECDH-ECDSA-AES128-SHA256"&lt;br /&gt;        "ECDH-ECDSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDH-ECDSA-AES256-SHA"&lt;br /&gt;        "ECDH-ECDSA-AES256-SHA384"&lt;br /&gt;        "ECDH-ECDSA-DES-CBC3-SHA"&lt;br /&gt;        "ECDH-ECDSA-RC4-SHA"&lt;br /&gt;        "ECDH-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDH-RSA-AES128-SHA"&lt;br /&gt;        "ECDH-RSA-AES128-SHA256"&lt;br /&gt;        "ECDH-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDH-RSA-AES256-SHA"&lt;br /&gt;        "ECDH-RSA-AES256-SHA384"&lt;br /&gt;        "ECDH-RSA-DES-CBC3-SHA"&lt;br /&gt;        "ECDH-RSA-RC4-SHA"&lt;br /&gt;        "ECDHE-ECDSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES128-SHA"&lt;br /&gt;        "ECDHE-ECDSA-AES128-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-ECDSA-AES256-SHA"&lt;br /&gt;        "ECDHE-ECDSA-AES256-SHA384"&lt;br /&gt;        "ECDHE-ECDSA-DES-CBC3-SHA"&lt;br /&gt;        "ECDHE-ECDSA-RC4-SHA"&lt;br /&gt;        "ECDHE-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDHE-RSA-AES128-SHA"&lt;br /&gt;        "ECDHE-RSA-AES128-SHA256"&lt;br /&gt;        "ECDHE-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-RSA-AES256-SHA"&lt;br /&gt;        "ECDHE-RSA-AES256-SHA384"&lt;br /&gt;        "ECDHE-RSA-DES-CBC3-SHA"&lt;br /&gt;        "ECDHE-RSA-RC4-SHA"&lt;br /&gt;        "IDEA-CBC-SHA"&lt;br /&gt;        "KRB5-DES-CBC3-MD5"&lt;br /&gt;        "KRB5-DES-CBC3-SHA"&lt;br /&gt;        "KRB5-IDEA-CBC-MD5"&lt;br /&gt;        "KRB5-IDEA-CBC-SHA"&lt;br /&gt;        "KRB5-RC4-MD5"&lt;br /&gt;        "KRB5-RC4-SHA"&lt;br /&gt;        "PSK-3DES-EDE-CBC-SHA"&lt;br /&gt;        "PSK-AES128-CBC-SHA"&lt;br /&gt;        "PSK-AES256-CBC-SHA"&lt;br /&gt;        "PSK-RC4-SHA"&lt;br /&gt;        "RC4-MD5"&lt;br /&gt;        "RC4-SHA"&lt;br /&gt;        "SEED-SHA"&lt;br /&gt;&lt;br /&gt;*  __oci-default-http2-ssl-cipher-suite-v1__&lt;br /&gt;&lt;br /&gt;        "ECDHE-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-ECDSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES128-GCM-SHA256"&lt;br /&gt;        "DHE-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "DHE-RSA-AES128-GCM-SHA256"&lt;br /&gt;&lt;br /&gt;*  __oci-default-http2-tls-13-ssl-cipher-suite-v1__&lt;br /&gt;&lt;br /&gt;        "TLS_AES_128_GCM_SHA256"&lt;br /&gt;        "TLS_AES_256_GCM_SHA384"&lt;br /&gt;        "TLS_CHACHA20_POLY1305_SHA256"&lt;br /&gt;&lt;br /&gt;*  __oci-default-http2-tls-12-13-ssl-cipher-suite-v1__&lt;br /&gt;&lt;br /&gt;        "ECDHE-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-ECDSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES128-GCM-SHA256"&lt;br /&gt;        "DHE-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "DHE-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "TLS_AES_128_GCM_SHA256"&lt;br /&gt;        "TLS_AES_256_GCM_SHA384"&lt;br /&gt;        "TLS_CHACHA20_POLY1305_SHA256"&lt;br /&gt;&lt;br /&gt;*  __oci-tls-13-recommended-ssl-cipher-suite-v1__&lt;br /&gt;&lt;br /&gt;        "TLS_AES_128_GCM_SHA256"&lt;br /&gt;        "TLS_AES_256_GCM_SHA384"&lt;br /&gt;        "TLS_CHACHA20_POLY1305_SHA256"&lt;br /&gt;&lt;br /&gt;*  __oci-tls-12-13-wider-ssl-cipher-suite-v1__&lt;br /&gt;&lt;br /&gt;        "TLS_AES_128_GCM_SHA256"&lt;br /&gt;        "TLS_AES_256_GCM_SHA384"&lt;br /&gt;        "TLS_CHACHA20_POLY1305_SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDHE-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES128-SHA256"&lt;br /&gt;        "ECDHE-RSA-AES128-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-ECDSA-AES256-SHA384"&lt;br /&gt;        "ECDHE-RSA-AES256-SHA384"&lt;br /&gt;        "AES128-GCM-SHA256"&lt;br /&gt;        "AES128-SHA256"&lt;br /&gt;        "AES256-GCM-SHA384"&lt;br /&gt;        "AES256-SHA256"&lt;br /&gt;&lt;br /&gt;  *  __oci-tls-11-12-13-wider-ssl-cipher-suite-v1__&lt;br /&gt;        "TLS_AES_128_GCM_SHA256"&lt;br /&gt;        "TLS_AES_256_GCM_SHA384"&lt;br /&gt;        "TLS_CHACHA20_POLY1305_SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDHE-RSA-AES128-GCM-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES128-SHA256"&lt;br /&gt;        "ECDHE-RSA-AES128-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-RSA-AES256-GCM-SHA384"&lt;br /&gt;        "ECDHE-ECDSA-AES256-SHA384"&lt;br /&gt;        "ECDHE-RSA-AES256-SHA384"&lt;br /&gt;        "AES128-GCM-SHA256"&lt;br /&gt;        "AES128-SHA256"&lt;br /&gt;        "AES256-GCM-SHA384"&lt;br /&gt;        "AES256-SHA256"&lt;br /&gt;        "ECDHE-ECDSA-AES128-SHA"&lt;br /&gt;        "ECDHE-RSA-AES128-SHA"&lt;br /&gt;        "ECDHE-RSA-AES256-SHA"&lt;br /&gt;        "ECDHE-ECDSA-AES256-SHA"&lt;br /&gt;        "AES128-SHA"&lt;br /&gt;        "AES256-SHA"&lt;br /&gt;

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
    <td>A friendly name for the SSL cipher suite. It must be unique and it cannot be changed.  **Note:** The name of your user-defined cipher suite must not be the same as any of Oracle's predefined or           reserved SSL cipher suite names:  * oci-default-ssl-cipher-suite-v1 * oci-modern-ssl-cipher-suite-v1 * oci-compatible-ssl-cipher-suite-v1 * oci-wider-compatible-ssl-cipher-suite-v1 * oci-customized-ssl-cipher-suite * oci-default-http2-ssl-cipher-suite-v1 * oci-default-http2-tls-13-ssl-cipher-suite-v1 * oci-default-http2-tls-12-13-ssl-cipher-suite-v1 * oci-tls-13-recommended-ssl-cipher-suite-v1 * oci-tls-12-13-wider-ssl-cipher-suite-v1 * oci-tls-11-12-13-wider-ssl-cipher-suite-v1  example: `example_cipher_suite`  (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ciphers" /></td>
    <td><code>array</code></td>
    <td>A list of SSL ciphers the load balancer must support for HTTPS or SSL connections.  The following ciphers are valid values for this property:  *  __TLSv1.3 ciphers__          "TLS_AES_128_GCM_SHA256"         "TLS_AES_256_GCM_SHA384"         "TLS_CHACHA20_POLY1305_SHA256"         "TLS_AES_128_CCM_SHA256"         "TLS_AES_128_CCM_8_SHA256"  *  __TLSv1.2 ciphers__          "AES128-GCM-SHA256"         "AES128-SHA256"         "AES256-GCM-SHA384"         "AES256-SHA256"         "DH-DSS-AES128-GCM-SHA256"         "DH-DSS-AES128-SHA256"         "DH-DSS-AES256-GCM-SHA384"         "DH-DSS-AES256-SHA256"         "DH-RSA-AES128-GCM-SHA256"         "DH-RSA-AES128-SHA256"         "DH-RSA-AES256-GCM-SHA384"         "DH-RSA-AES256-SHA256"         "DHE-DSS-AES128-GCM-SHA256"         "DHE-DSS-AES128-SHA256"         "DHE-DSS-AES256-GCM-SHA384"         "DHE-DSS-AES256-SHA256"         "DHE-RSA-AES128-GCM-SHA256"         "DHE-RSA-AES128-SHA256"         "DHE-RSA-AES256-GCM-SHA384"         "DHE-RSA-AES256-SHA256"         "ECDH-ECDSA-AES128-GCM-SHA256"         "ECDH-ECDSA-AES128-SHA256"         "ECDH-ECDSA-AES256-GCM-SHA384"         "ECDH-ECDSA-AES256-SHA384"         "ECDH-RSA-AES128-GCM-SHA256"         "ECDH-RSA-AES128-SHA256"         "ECDH-RSA-AES256-GCM-SHA384"         "ECDH-RSA-AES256-SHA384"         "ECDHE-ECDSA-AES128-GCM-SHA256"         "ECDHE-ECDSA-AES128-SHA256"         "ECDHE-ECDSA-AES256-GCM-SHA384"         "ECDHE-ECDSA-AES256-SHA384"         "ECDHE-RSA-AES128-GCM-SHA256"         "ECDHE-RSA-AES128-SHA256"         "ECDHE-RSA-AES256-GCM-SHA384"         "ECDHE-RSA-AES256-SHA384"  *  __TLSv1 ciphers also supported by TLSv1.2__          "AES128-SHA"         "AES256-SHA"         "CAMELLIA128-SHA"         "CAMELLIA256-SHA"         "DES-CBC3-SHA"         "DH-DSS-AES128-SHA"         "DH-DSS-AES256-SHA"         "DH-DSS-CAMELLIA128-SHA"         "DH-DSS-CAMELLIA256-SHA"         "DH-DSS-DES-CBC3-SHAv"         "DH-DSS-SEED-SHA"         "DH-RSA-AES128-SHA"         "DH-RSA-AES256-SHA"         "DH-RSA-CAMELLIA128-SHA"         "DH-RSA-CAMELLIA256-SHA"         "DH-RSA-DES-CBC3-SHA"         "DH-RSA-SEED-SHA"         "DHE-DSS-AES128-SHA"         "DHE-DSS-AES256-SHA"         "DHE-DSS-CAMELLIA128-SHA"         "DHE-DSS-CAMELLIA256-SHA"         "DHE-DSS-DES-CBC3-SHA"         "DHE-DSS-SEED-SHA"         "DHE-RSA-AES128-SHA"         "DHE-RSA-AES256-SHA"         "DHE-RSA-CAMELLIA128-SHA"         "DHE-RSA-CAMELLIA256-SHA"         "DHE-RSA-DES-CBC3-SHA"         "DHE-RSA-SEED-SHA"         "ECDH-ECDSA-AES128-SHA"         "ECDH-ECDSA-AES256-SHA"         "ECDH-ECDSA-DES-CBC3-SHA"         "ECDH-ECDSA-RC4-SHA"         "ECDH-RSA-AES128-SHA"         "ECDH-RSA-AES256-SHA"         "ECDH-RSA-DES-CBC3-SHA"         "ECDH-RSA-RC4-SHA"         "ECDHE-ECDSA-AES128-SHA"         "ECDHE-ECDSA-AES256-SHA"         "ECDHE-ECDSA-DES-CBC3-SHA"         "ECDHE-ECDSA-RC4-SHA"         "ECDHE-RSA-AES128-SHA"         "ECDHE-RSA-AES256-SHA"         "ECDHE-RSA-DES-CBC3-SHA"         "ECDHE-RSA-RC4-SHA"         "IDEA-CBC-SHA"         "KRB5-DES-CBC3-MD5"         "KRB5-DES-CBC3-SHA"         "KRB5-IDEA-CBC-MD5"         "KRB5-IDEA-CBC-SHA"         "KRB5-RC4-MD5"         "KRB5-RC4-SHA"         "PSK-3DES-EDE-CBC-SHA"         "PSK-AES128-CBC-SHA"         "PSK-AES256-CBC-SHA"         "PSK-RC4-SHA"         "RC4-MD5"         "RC4-SHA"         "SEED-SHA"  example: `&#91;"ECDHE-RSA-AES256-GCM-SHA384","ECDHE-ECDSA-AES256-GCM-SHA384","ECDHE-RSA-AES128-GCM-SHA256"&#93;` </td>
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
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Gets the specified SSL cipher suite's configuration information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Lists all SSL cipher suites associated with the specified load balancer.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-ciphers"><code>ciphers</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Creates a custom SSL cipher suite.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ciphers"><code>ciphers</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a>, <a href="#parameter-opc-retry-token"><code>opc-retry-token</code></a></td>
    <td>Updates an existing SSL cipher suite for the specified load balancer.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-loadBalancerId"><code>loadBalancerId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-opc-request-id"><code>opc-request-id</code></a></td>
    <td>Deletes an SSL cipher suite from a load balancer.</td>
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
<tr id="parameter-loadBalancerId">
    <td><CopyableCode code="loadBalancerId" /></td>
    <td><code>string</code></td>
    <td>The &#91;OCID&#93;(/Content/General/Concepts/identifiers.htm) of the associated load balancer. </td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the SSL cipher suite to delete.  example: `example_cipher_suite` </td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>OCI region identifier (e.g. us-ashburn-1, ap-sydney-1); resolves from OCI_REGION when not supplied in the query. (default: us-ashburn-1, x-stackQL-envVar: OCI_REGION)</td>
</tr>
<tr id="parameter-opc-request-id">
    <td><CopyableCode code="opc-request-id" /></td>
    <td><code>string</code></td>
    <td>Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. </td>
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

Gets the specified SSL cipher suite's configuration information.

```sql
SELECT
name,
ciphers
FROM oci.load_balancer.ssl_cipher_suites
WHERE loadBalancerId = '{{ loadBalancerId }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
<TabItem value="list">

Lists all SSL cipher suites associated with the specified load balancer.

```sql
SELECT
name,
ciphers
FROM oci.load_balancer.ssl_cipher_suites
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

Creates a custom SSL cipher suite.

```sql
INSERT INTO oci.load_balancer.ssl_cipher_suites (
ciphers,
name,
loadBalancerId,
region,
opc-request-id,
opc-retry-token
)
SELECT 
'{{ ciphers }}' /* required */,
'{{ name }}' /* required */,
'{{ loadBalancerId }}',
'{{ region }}',
'{{ opc-request-id }}',
'{{ opc-retry-token }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ssl_cipher_suites
  props:
    - name: loadBalancerId
      value: "{{ loadBalancerId }}"
      description: Required parameter for the ssl_cipher_suites resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ssl_cipher_suites resource.
    - name: ciphers
      value:
        - "{{ ciphers }}"
      description: |
        A list of SSL ciphers the load balancer must support for HTTPS or SSL connections.
        The following ciphers are valid values for this property:
        *  __TLSv1.3 ciphers__
        "TLS_AES_128_GCM_SHA256"
        "TLS_AES_256_GCM_SHA384"
        "TLS_CHACHA20_POLY1305_SHA256"
        "TLS_AES_128_CCM_SHA256"
        "TLS_AES_128_CCM_8_SHA256"
        *  __TLSv1.2 ciphers__
        "AES128-GCM-SHA256"
        "AES128-SHA256"
        "AES256-GCM-SHA384"
        "AES256-SHA256"
        "DH-DSS-AES128-GCM-SHA256"
        "DH-DSS-AES128-SHA256"
        "DH-DSS-AES256-GCM-SHA384"
        "DH-DSS-AES256-SHA256"
        "DH-RSA-AES128-GCM-SHA256"
        "DH-RSA-AES128-SHA256"
        "DH-RSA-AES256-GCM-SHA384"
        "DH-RSA-AES256-SHA256"
        "DHE-DSS-AES128-GCM-SHA256"
        "DHE-DSS-AES128-SHA256"
        "DHE-DSS-AES256-GCM-SHA384"
        "DHE-DSS-AES256-SHA256"
        "DHE-RSA-AES128-GCM-SHA256"
        "DHE-RSA-AES128-SHA256"
        "DHE-RSA-AES256-GCM-SHA384"
        "DHE-RSA-AES256-SHA256"
        "ECDH-ECDSA-AES128-GCM-SHA256"
        "ECDH-ECDSA-AES128-SHA256"
        "ECDH-ECDSA-AES256-GCM-SHA384"
        "ECDH-ECDSA-AES256-SHA384"
        "ECDH-RSA-AES128-GCM-SHA256"
        "ECDH-RSA-AES128-SHA256"
        "ECDH-RSA-AES256-GCM-SHA384"
        "ECDH-RSA-AES256-SHA384"
        "ECDHE-ECDSA-AES128-GCM-SHA256"
        "ECDHE-ECDSA-AES128-SHA256"
        "ECDHE-ECDSA-AES256-GCM-SHA384"
        "ECDHE-ECDSA-AES256-SHA384"
        "ECDHE-RSA-AES128-GCM-SHA256"
        "ECDHE-RSA-AES128-SHA256"
        "ECDHE-RSA-AES256-GCM-SHA384"
        "ECDHE-RSA-AES256-SHA384"
        *  __TLSv1 ciphers also supported by TLSv1.2__
        "AES128-SHA"
        "AES256-SHA"
        "CAMELLIA128-SHA"
        "CAMELLIA256-SHA"
        "DES-CBC3-SHA"
        "DH-DSS-AES128-SHA"
        "DH-DSS-AES256-SHA"
        "DH-DSS-CAMELLIA128-SHA"
        "DH-DSS-CAMELLIA256-SHA"
        "DH-DSS-DES-CBC3-SHAv"
        "DH-DSS-SEED-SHA"
        "DH-RSA-AES128-SHA"
        "DH-RSA-AES256-SHA"
        "DH-RSA-CAMELLIA128-SHA"
        "DH-RSA-CAMELLIA256-SHA"
        "DH-RSA-DES-CBC3-SHA"
        "DH-RSA-SEED-SHA"
        "DHE-DSS-AES128-SHA"
        "DHE-DSS-AES256-SHA"
        "DHE-DSS-CAMELLIA128-SHA"
        "DHE-DSS-CAMELLIA256-SHA"
        "DHE-DSS-DES-CBC3-SHA"
        "DHE-DSS-SEED-SHA"
        "DHE-RSA-AES128-SHA"
        "DHE-RSA-AES256-SHA"
        "DHE-RSA-CAMELLIA128-SHA"
        "DHE-RSA-CAMELLIA256-SHA"
        "DHE-RSA-DES-CBC3-SHA"
        "DHE-RSA-SEED-SHA"
        "ECDH-ECDSA-AES128-SHA"
        "ECDH-ECDSA-AES256-SHA"
        "ECDH-ECDSA-DES-CBC3-SHA"
        "ECDH-ECDSA-RC4-SHA"
        "ECDH-RSA-AES128-SHA"
        "ECDH-RSA-AES256-SHA"
        "ECDH-RSA-DES-CBC3-SHA"
        "ECDH-RSA-RC4-SHA"
        "ECDHE-ECDSA-AES128-SHA"
        "ECDHE-ECDSA-AES256-SHA"
        "ECDHE-ECDSA-DES-CBC3-SHA"
        "ECDHE-ECDSA-RC4-SHA"
        "ECDHE-RSA-AES128-SHA"
        "ECDHE-RSA-AES256-SHA"
        "ECDHE-RSA-DES-CBC3-SHA"
        "ECDHE-RSA-RC4-SHA"
        "IDEA-CBC-SHA"
        "KRB5-DES-CBC3-MD5"
        "KRB5-DES-CBC3-SHA"
        "KRB5-IDEA-CBC-MD5"
        "KRB5-IDEA-CBC-SHA"
        "KRB5-RC4-MD5"
        "KRB5-RC4-SHA"
        "PSK-3DES-EDE-CBC-SHA"
        "PSK-AES128-CBC-SHA"
        "PSK-AES256-CBC-SHA"
        "PSK-RC4-SHA"
        "RC4-MD5"
        "RC4-SHA"
        "SEED-SHA"
        example: \`["ECDHE-RSA-AES256-GCM-SHA384","ECDHE-ECDSA-AES256-GCM-SHA384","ECDHE-RSA-AES128-GCM-SHA256"]\`
    - name: name
      value: "{{ name }}"
      description: |
        A friendly name for the SSL cipher suite. It must be unique and it cannot be changed.
        **Note:** The name of your user-defined cipher suite must not be the same as any of Oracle's predefined or
        reserved SSL cipher suite names:
        * oci-default-ssl-cipher-suite-v1
        * oci-modern-ssl-cipher-suite-v1
        * oci-compatible-ssl-cipher-suite-v1
        * oci-wider-compatible-ssl-cipher-suite-v1
        * oci-customized-ssl-cipher-suite
        * oci-default-http2-ssl-cipher-suite-v1
        * oci-default-http2-tls-13-ssl-cipher-suite-v1
        * oci-default-http2-tls-12-13-ssl-cipher-suite-v1
        * oci-tls-13-recommended-ssl-cipher-suite-v1
        * oci-tls-12-13-wider-ssl-cipher-suite-v1
        * oci-tls-11-12-13-wider-ssl-cipher-suite-v1
        example: \`example_cipher_suite\`
    - name: opc-request-id
      value: "{{ opc-request-id }}"
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
      description: Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID. 
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

Updates an existing SSL cipher suite for the specified load balancer.

```sql
UPDATE oci.load_balancer.ssl_cipher_suites
SET 
ciphers = '{{ ciphers }}'
WHERE 
loadBalancerId = '{{ loadBalancerId }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND ciphers = '{{ ciphers }}' --required
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

Deletes an SSL cipher suite from a load balancer.

```sql
DELETE FROM oci.load_balancer.ssl_cipher_suites
WHERE loadBalancerId = '{{ loadBalancerId }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND opc-request-id = '{{ opc-request-id }}'
;
```
</TabItem>
</Tabs>
