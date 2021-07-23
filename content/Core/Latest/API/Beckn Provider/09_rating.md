---
title: "Rating"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

Rating
===================

>   Provide feedback on a service.

Overview
--------

>   The BAP will send the rating for a service to the BPP.

Request
-------

### URL

>   /rating

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|
|---------|--------|
|context*|[ContextForRating](/Core/Latest/02_Schemas/contextforrating)|
|message.id| string |
|message.value| integer  |

### Request Body Example

```
{
    "context": {
        "domain": "nic2004:52110",
        "country": "IND",
        "city": "std:080",
        "action": "rating",
        "core_version": "0.9.1",
        "bap_id": "https://mock_bap.com/",
        "bap_uri": "https://mock_bap.com/beckn/",
        "bpp_id": "https://mock_bpp.com/",
        "bpp_uri": "https://mock_bpp.com/beckn/",
        "transaction_id": "1209849124",
        "message_id": "12341242345",
        "timestamp": "2021-03-23T10:00:40.065Z"
    },
    "message": {
        "id": "order_1",
        "value": "4"
    }
}
```

>   Here the BAP sends a rating of 4 to the BPP for *order_1*. The value is an integer between 1 and 5.

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