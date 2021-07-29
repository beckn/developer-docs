---
title: "On Subscribe"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

On Subscribe
===================

>   Validates a subscriber

Overview
--------

>   In this API the Registry generates a random string, encrypts it with the subscriber's encryption public key and sends it to the subscriber's callback URL. The subscriber then decrypts the string using it's encryption private key and sends back the decypted value to the registry. If the decrypted value is the same as the sent value, the subscriber gets added to the registry with a ```status = "SUBSCRIBED"```'

Request
-------

### URL

>   /on_subscribe

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|**description**|
|---------|--------|---------------|
|subscriber_id|string|A unique ID describing a subscriber on a network. |
|challenge| string | String encrypted using the subscriber's encryption public key |

### Request Body Example

```
{
  "challenge": "encrypted_challange_string",
  "subscriber_id": "beckn.org"
}
```

>   Here the registry sends an encrypted string to the subscriber.

Response
--------

### Response Body Schema

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|answer*|string| Decrypted value

### Response Body Example

```
{
  "answer": "decrypted_challange_string"
}
```

> Sends back the decrypted challenge string using its private key.

### Response Codes

| **Code**       | **Description** |
|----------------|-----------------|
| 200 | Successful subscription  |