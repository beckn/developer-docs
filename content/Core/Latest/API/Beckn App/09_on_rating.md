---
title: "On Rating"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

On Rating
===================

>   Provide feedback on a service

Overview
--------

>   The BPP will send the feecback object to the BAP.

Request
-------

### URL

>   /on_rating

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|
|---------|--------|
|context*|[ContextForOn_rating](/Core/Latest/02_Schemas/contextforon_rating)|
|message| [MessageForOn_rating](/Core/Latest/02_Schemas/messageforon_rating) |
|error| [Error](/Core/Latest/02_Schemas/error) |

### Request Body Example

```
{
    "context": {
        "domain": "local_retail",
        "country": "string",
        "city": "string",
        "action": "on_rating",
        "core_version": "string",
        "bap_id": "string",
        "bap_uri": "string",
        "bpp_id": "string",
        "bpp_uri": "string",
        "transaction_id": "string",
        "message_id": "string",
        "timestamp": "2021-06-29T10:52:01.620Z",
        "key": "string",
        "ttl": "string"
    },
    "message": {
        "feedback": {
            "id": "order_1",
            "descriptor": "https://feedback.mock_bpp.com/pooja-stores?id=order_1",
            "parent_id": "pooja-stores"
        }
    }
}
```

>   The feedback object is returned to the BAP

Response
--------

### Response Body Schema

|**Field**|**Type**|
|---------|--------|
|message*|{ [Ack](/Core/Latest/02_Schemas/ack) }|
|error| [Error](/Core/Latest/02_Schemas/error) |

### Response Body Example

```
{
  "message": {
    "ack": {
      "status": "ACK"
    }
  }
}
```

> Acknowldegement response

### Response Codes

| **Code**       | **Description** |
|----------------|-----------------|
| 200 | Acknowledgement of message received   |