---
title: "Subscribe"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

Subscribe
===================

>   Subscribe to a network

Overview
--------

>   The network participant will trigger the subscribe call to the registry to register its public key.

Request
-------

### URL

>   /subscribe

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|**description**|
|---------|--------|---------------|
|subscriber_id|string|A unique ID describing a subscriber on a network. |
|country| string | Country code as per ISO 3166-1 and ISO 3166-2 format
|city| string | City code
|domain| string | Industry domain of the subscriber |
|signing_public_key| string | Public key used by the subscriber to sign every request it makes |
|encr_public_key| string | Encryption public key of the subscriber
|valid_from| string ($date-time) | Keys valid from |
|valid_until| string ($date-time) | Keys valid until |
|nonce| string | Random nonce. Must be unique to every request |

### Request Body Example

```
{
    "subscriber_id": "beckn.org",
    "country": "IND",
    "city": "Pune",
    "domain": "MOBILITY",
    "signing_public_key": "eyAeqGFtAuksKGxyt2N+sg0Fs3hDDZrGB+m3LBYkx8g=", 
    "encr_public_key": "lCI84I0Q0U0wQ/T+cxP25+a+9sK8sstBpulLa+4iqEY=", 
    "valid_from": "2021-04-29T09:19:48.072Z",
    "valid_until": "2021-05-01T09:19:48.072Z",
    "nonce": "test-random-nounce"
}
```

>   The request contains the signing and encryption public key of the subscriber.

Response
--------

### Response Body Schema

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|status*|string| Possible values : INITIATED, UNDER_SUBSCRIPTION, SUBSCRIBED, INVALID_SSL, UNSUBSCRIBED

### Response Body Example

```
{
  "status": "INITIATED"
}
```

> Sends back the registration status.

### Response Codes

| **Code**       | **Description** |
|----------------|-----------------|
| 200 | Registration status returned   |