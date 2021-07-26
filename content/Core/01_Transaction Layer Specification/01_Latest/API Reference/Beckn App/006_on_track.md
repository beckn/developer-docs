---
title: "On Track"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

On Track
===================

>   Send tracking details of an active order

Overview
--------

>   The BPP will send the tracking details of an active order object to the BAP.

Request
-------

### URL

>   /on_track

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|
|---------|--------|
|context*|[ContextForOn_track](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/contextforon_track)|
|message| [MessageForOn_track](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/messageforon_track) |
|error| [Error](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/error) |

### Request Body Example

```
{
    "context": {
        "domain": "nic2004:52110",
        "country": "IND",
        "city": "std:080",
        "action": "on_track",
        "core_version": "0.9.1",
        "bap_id": "https://mock_bap.com/",
        "bap_uri": "https://mock_bap.com/beckn/",
        "bpp_id": "https://mock_bpp.com/",
        "bpp_uri": "https://mock_bpp.com/beckn/",
        "transaction_id": "1209849124",
        "message_id": "12341242343",
        "timestamp": "2021-03-23T10:00:40.065Z"
    },
    "message": {
        "tracking": {
            "tl_method": "http/get",
            "url": "https://track.mock_bpp.com?order_id=order_1",
            "status": "active"
        }
    }
}
```

>   The tracking information of the order is returned

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