Subscriber Signing
====

The BAP and BPP subscriber is expected to send an Authorization header (as defined in [RFC 7235](https://tools.ietf.org/id/draft-cavage-http-signatures-12.html#RFC7235), [Section 4.1](https://datatracker.ietf.org/doc/html/rfc7235#section-2.1)) where the "auth-scheme" is "Signature" and the "auth-param" parameters meet the requirements listed in Section 2 of [this](https://tools.ietf.org/id/draft-cavage-http-signatures-12.html) document.

Below is the format of a BAP/BPP Authorization header in the typical HTTP Signature format:

```Authorization : Signature keyId="{subscriber_id}|{unique_key_id}|{algorithm}" algorithm="xed25519" created="1606970629" expires="1607030629" headers="(created) (expires) digest" signature="Base64(BLAKE-512(signing string))"```

## Hashing Algorithm

For computing the digest of the request body, the hashing function will use the BLAKE-512 hashing algorithm. BLAKE is a cryptographic hash function based on Dan Bernstein's ChaCha stream cipher. For more documentation on the BLAKE-512 algorithm, please go to [RFC7693](https://datatracker.ietf.org/doc/html/rfc7693).

## Signing Algorithm
To digitally sign the singing string, the subscribers should use the "XEdDSA" signature scheme (or "XEd25519" or "XEd448" for specific curves). For the first version of beckn networks, we'll be using the XEd25519 Signature Scheme.