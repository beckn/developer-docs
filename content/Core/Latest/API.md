---
title: "API"
metaTitle: "API"
metaDescription: "Documentation for developers of the Beckn ecosystem"
order: 1
---

# Authentication

* API Key (SubscriberAuth)
    - Parameter Name: **Authorization**, in: header. Signature of message body using BAP or BPP subscriber's signing public key.   Format:  <code>Authorization : Signature keyId="{subscriber_id}|{unique_key_id}|{algorithm}" algorithm="xed25519" created="1606970629" expires="1607030629" headers="(created) (expires) digest" signature="Base64(BLAKE-512(signing string))"</code>

* API Key (GatewaySubscriberAuth)
    - Parameter Name: **Proxy-Authorization**, in: header. Signature of message body + BAP/BPP's Authorization header using BG's signing public key. Format:  <code>Proxy-Authorization:Signature keyId="{subscriber_id}|{unique_key_id}|{algorithm}" algorithm="xed25519" created="1606970629" expires="1607030629" headers="(created) (expires) digest" signature="Base64(BLAKE-512(signing string))"</code>