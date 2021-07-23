---
title: "Select"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

Select
===================

>   Select items from the catalog and build your order

Overview
--------

>   The BAP will send items to the BPP to build the order

Request
-------

### URL

>   /select

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|
|---------|--------|
|context*|[ContextForSelect](/Core/Latest/02_Schemas/contextforselect)|
|message|[MessageForSelect](/Core/Latest/02_Schemas/messageforselect)|

### Request Body Example

```
{
    "context": {
        "domain": "nic2004:52110",
        "country": "IND",
        "city": "std:080",
        "action": "select",
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
        "order": {
            "items":[
                {
                    "id": "item_1",
                    "quantity": {
                        "count": 2
                    }
                },
                {
                    "id": "item_2",
                    "quantity": {
                        "count": 1
                    }
                }
            ]
        }
    }
}
```

>   The above select request adds 2 items to the cart.

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