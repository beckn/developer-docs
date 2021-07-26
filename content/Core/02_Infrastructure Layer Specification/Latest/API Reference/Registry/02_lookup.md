---
title: "Lookup"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

Lookup
===================

>   Look up subscriber(s) in a registry

Overview
--------

>   The network participant will trigger the subscribe call to the registry to register its public key.

Request
-------

### URL

>   /lookup

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|**description**|
|---------|--------|---------------|
|subscriber_id|string|A unique ID describing a subscriber on a network. |
|country| string | Country code as per ISO 3166-1 and ISO 3166-2 format
|city| string | City code
|domain| string | Industry domain of the subscriber |
|type| string | Type of subscriber (bg, bap or bpp) |

### Request Body Example

```
{
    "subscriber_id": "beckn.org", 
    "type": "bap", 
    "domain": "MOBILITY", 
    "country": "IND", 
    "city": "Pune"
}
```

>   Here we are looking up the details of the BAP with subscriber_id beckn.org in the MOBILITY domain in Pune, India.

Response
--------

### Response Body Schema

Array of the below schema will be returned.

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|subscriber_id|string|A unique ID describing a subscriber on a network. |
|country| string | Country code as per ISO 3166-1 and ISO 3166-2 format
|city| string | City code
|domain| string | Industry domain of the subscriber |
|signing_public_key| string | Public key used by the subscriber to sign every request it makes |
|encr_public_key| string | Encryption public key of the subscriber
|valid_from| string ($date-time) | Keys valid from |
|valid_until| string ($date-time) | Keys valid until |
|created| string ($date-time) | Created timestamp |
|updated| string ($date-time) | Updated timestamp |

### Response Body Example

```
[
    {
        "subscriber_id": "beckn.org",
        "subscriber_url": "http://172.30.151.104:8099/OnSubscribeCallBack", 
        "type": "BAP",
        "domain": "MOBILITY",
        "city": "Pune",
        "country": "IND",
        "signing_public_key": "PpdXzvg5kK4a5v7SDttxp6vbBK2EOniYqUtc04udWQs=",
        "encr_public_key": "lCI84I0Q0U0wQ/T+cxP25+a+9sK8sstBpulLa+4iqEY=", 
        "valid_from": "2021-04-29T09:19:48.072Z",
        "valid_until": "2021-05-01T09:19:48.072Z",
        "status": "SUBSCRIBED",
        "created": "2021-04-29T13:42:25.042Z",
        "updated": "2021-05-01T13:43:03.043Z" 
    }
]
```

> Sends back array of subscriber details.

### Response Codes

| **Code**       | **Description** |
|----------------|-----------------|
| 200 | Array of subscriber details returned   |