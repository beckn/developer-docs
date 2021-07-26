Gateway Signing
===

The BG will send its signature in the Proxy-Authorization header in the exact same format as shown below.

```Proxy-Authorization:Signature keyId="{subscriber_id}|{unique_key_id}|{algorithm}" algorithm="xed25519" created="1606970629" expires="1607030629" headers="(created) (expires) digest" signature="Base64(BLAKE-512(signing string))"```