Signature Verification
==========

### BPP/BAP verifies BG signature

The BPP/BAP performs the following steps to authenticate the BAP/BPP and the BG and also ensure message integrity.

* Get keyId from the Proxy-Authorization header
* Split the keyID string using the delimiter `|`. 
* The keyID uses the format {subscriber id}|{unique_public_key_id}|{signing algorithm} . If the signing algorithm extracted from the keyId does not match the value of the algorithm field in the Proxy-Authorization header, then the BPP should return an error.
* The keyID also contains a unique_public_key_id which is used when the BG has uploaded multiple public keys to a registry OR when the same domain is being used for implementing multiple subscribers
* The BG will now look up the registry for the public key of the subscriber by sending the subscriber_id and the unique_key_id via the lookup API or by retrieving a cached copy of the subscriber's public key matching the subscriber_id and unique_key_id. If no valid key is found, the BPP must return
* BPP will use the BG's public key to verify the signature. If signature is verified, the BG is considered to be authenticated.
* If the signature is not verified, the BPP must return a NACK response with 401 Unauthorised response code with a Proxy-Authenticate header. For example, for an invalid BG signature, the BPP must return the following:



## BG verifies BAP/BPP signature

The BG performs the following steps to authenticate the BAP/BPP and also ensure message integrity.

* BG gets keyId from the Authorization header
* BG splits the keyId string into subscriber ID, Unique Key ID and algorithm using the delimiter "|".
* The keyId uses the format {subscriber id}|{unique_key_id}|{signing algorithm} . If the signing algorithm extracted from the keyId does not match the value of the algorithm parameter in the Authorization header, then the BG should return an 401 unauthorised error.
* The keyId also contains a unique_key_id which is used when the BAP has uploaded multiple public keys to a registry OR when the same domain is being used for implementing multiple types of subscribers
* The BG will now look up the registry for the public key of the subscriber by sending the subscriber_id and the unique_key_id via the lookup API or by retrieving a cached copy of the subscriber's public key matching the subscriber_id and unique_key_id
* BG will use the BAP's public key to verify the signature. If signature is verified, the BAP is considered to be authenticated. If not BG should return a 401 error
* If the signature is not verified, the BG must return a NACK response with 401 Unauthorised response code with a WWW-Authenticate header. For example, for an invalid signature, the BG must return the following:

Headers:

```
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Signature realm="example-bg.com",headers="(created) (expires) digest"
...
```

Request Body:

```
{
  "message": {
     "ack": {
	"status": "NACK"
    }
  }
}
```