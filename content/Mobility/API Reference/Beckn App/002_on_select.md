---
title: "On Select"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

On Select
===================

>   Send draft order object with quoted price for selected item

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
|context*|[ContextForOn_select](/Mobility/Schema%20Reference/contextforon_select)|
|message| [MessageForOn_select](/Mobility/Schema%20Reference/messageforon_select) |
|error| [Error](/Mobility/Schema%20Reference/error) |

### Request Body Example

```
{
    "context": {
        "domain": "mobility",
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
                "id": "yellow-cabs",
                "locations": [
                    {
                        "id": "closest-sedan-spot",
                        "gps": "12.9349377,77.6055586"
                    }
                ]
            },
            "items": [
                {
                    "id": "sedan_spot",
                    "price" : {
                        "currency": "INR",
                        "value": "170"
                    },
                    "time": {
                        "label": "ETA",
                        "duration": "P13M"
                    },
                    "location_id": "closest-sedan-spot",
                    "quantity": {
                        "selected": {
                            "count": 1
                        },
                        "available": {
                            "count": 4
                        }
                    }
                }
            ],
            "quote": {
                "price": {
                    "currency": "INR",
                    "value": "180"
                },
                "breakup": [
                    {
                        "title": "Sedan Spot Booking",
                        "price": {
                            "currency": "INR",
                            "value": "170"
                        }
                    },
                    {
                        "title": "Service Charge",
                        "price": {
                            "currency": "INR",
                            "value": "10"
                        }
                    }
                ]
            }
        }
    }
}
```

>   The draft quote for the selected service is returned

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