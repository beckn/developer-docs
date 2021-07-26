---
title: "On Select"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

On Select
===================

>   Send draft order object with quoted price for selected items

Overview
--------

>   The BPP will send the draft order with the quoted price to the BAP.

Request
-------

### URL

>   /on_select

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|
|---------|--------|
|context*|[ContextForOn_select](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/contextforon_select)|
|message| [MessageForOn_select](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/messageforon_select) |
|error| [Error](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/error) |

### Request Body Example

```
{
    "context": {
        "domain": "nic2004:52110",
        "country": "IND",
        "city": "std:080",
        "action": "on_select",
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
            "provider": {
                "id": "pooja-stores",
                "locations": [
                    {
                        "id": "koramangala-4th-block-location"
                    }
                ]
            },
            "items": [
                {
                    "id": "item_1",
                    "price" : {
                        "currency": "INR",
                        "value": "90"
                    },
                    "quantity": {
                        "selected": {
                            "count": 2
                        }
                    }
                },
                {
                    "id": "item_2",
                    "price" : {
                        "currency": "INR",
                        "value": "170"
                    },
                    "quantity": {
                        "selected": {
                            "count": 1
                        }
                    }
                }
            ],
            "quote": {
                "price": {
                    "currency": "INR",
                    "value": "370"
                },
                "breakup": [
                    {
                        "title": "Red Apples",
                        "price": {
                            "currency": "INR",
                            "value": "180"
                        }
                    },
                    {
                        "title": "Green Apples Organic",
                        "price": {
                            "currency": "INR",
                            "value": "170"
                        }
                    },
                    {
                        "title": "Delivery Charges",
                        "price": {
                            "currency": "INR",
                            "value": "20"
                        }
                    }
                ]
            }
        }
    }
}
```

>   The draft quote for the selected items are returned

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