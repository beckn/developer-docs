---
title: "Cancel"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

Cancel
===================

>   Cancel an order

Overview
--------

>   The BAP will send the order id to cancel the order

Request
-------

### URL

>   /cancel

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|
|---------|--------|
|context*|[ContextForCancel](/Mobility/Schema%20Reference/contextforcancel)|
|message| [MessageForCancel](/Mobility/Schema%20Reference/messageforcancel) |

### Request Body Example

```
{
    "context": {
        "domain": "mobility",
        "country": "IND",
        "city": "std:080",
        "action": "cancel",
        "core_version": "0.9.1",
        "bap_id": "https://mock_bap.com/",
        "bap_uri": "https://mock_bap.com/beckn/",
        "bpp_id": "https://mock_bpp.com/",
        "bpp_uri": "https://mock_bpp.com/beckn/",
        "transaction_id": "1209849124",
        "message_id": "1234124234237",
        "timestamp": "2021-03-23T10:00:40.065Z"
    },
    "message": {
        "order_id": "trip_1",
        "cancellation_reason_id": "reason_3"
    }
}
```

>   Here the BAP is sending the order id *trip_1* and a cancellation_reason_id *reason_3* to the BPP to cancel the order.

Response
--------

### Response Body Schema

|**Field**|**Type**|
|---------|--------|
|message*|{ [Ack](/Mobility/Schema%20Reference/ack) }|
|error| [Error](/Mobility/Schema%20Reference/error) |

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