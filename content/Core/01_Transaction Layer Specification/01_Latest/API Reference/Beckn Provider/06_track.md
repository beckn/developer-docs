---
title: "Track"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

Track
===================

>   Track an active order

Overview
--------

>   The BAP will send the order id to get the tracking details of the order

Request
-------

### URL

>   /track

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|
|---------|--------|
|context*|[ContextForTrack](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/contextfortrack)|
|message| [MessageForTrack](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/messagefortrack) |

### Request Body Example

```
{
    "context": {
        "domain": "nic2004:52110",
        "country": "IND",
        "city": "std:080",
        "action": "track",
        "core_version": "0.9.1",
        "bap_id": "https://mock_bap.com/",
        "bap_uri": "https://mock_bap.com/beckn/",
        "bpp_id": "https://mock_bpp.com/",
        "bpp_uri": "https://mock_bpp.com/beckn/",
        "transaction_id": "1209849124",
        "message_id": "12341242347",
        "timestamp": "2021-03-23T10:00:40.065Z"
    },
    "message": {
        "order_id": "order_1",
        "callback_url": "https://mock_bap.com/order_track?orderId=order_1"
    }
}
```

>   Here the BAP is sending the order id *order_1* and a callback url to the BPP to fetch the tracking details of the same.

Response
--------

### Response Body Schema

|**Field**|**Type**|
|---------|--------|
|message*|{ [Ack](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/ack) }|
|error| [Error](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/error) |

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