---
title: "Init"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

Init
===================

>   Initialize an order by providing billing and/or shipping details

Overview
--------

>   The BAP will send the billing and/or shipping details the BPP to initialize the order

Request
-------

### URL

>   /init

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|
|---------|--------|
|context*|[ContextForInit](/Mobility/Schema%20Reference/contextforinit)|
|message| [MessageForInit](/Mobility/Schema%20Reference/messageforinit)|

### Request Body Example

```
{
    "context": {
        "domain": "mobility",
        "country": "IND",
        "city": "std:080",
        "action": "init",
        "core_version": "0.9.1",
        "bap_id": "https://mock_bap.com/",
        "bap_uri": "https://mock_bap.com/beckn/",
        "bpp_id": "https://mock_bpp.com/",
        "bpp_uri": "https://mock_bpp.com/beckn/",
        "transaction_id": "1209849124",
        "message_id": "12341242344",
        "timestamp": "2021-03-23T10:00:40.065Z"
    },
    "message": {
        "order": {
            "items":[
                {
                    "id": "sedan_spot",
                    "quantity": {
                        "count": 1
                    }
                }
            ],
            "billing": {
                "name": "John Doe",
                "address": {
                    "door": "21A",
                    "name": "ABC Appartments",
                    "locality": "HSR Layout",
                    "city": "Bengaluru",
                    "state": "Karnataka",
                    "country": "India",
                    "area_code": "560102"
                },
                "email": "user@example.com",
                "phone": "+919876543210"
            },
            "fulfillment": {
                "tracking": true,
                "start": {
                    "location": {
                        "id": "user-location",
                        "descriptor": {
                            "name": "Current user location"
                        },
                        "gps": "12.9349377,77.6055586"
                    },
                    "instructions": {
                        "name": "pick up instructions",
                        "short_desc": "Ask doorman to ring 21A"
                    },
                    "time": {
                        "label": "ETA",
                        "duration": "P12M"
                    },
                    "contact": {
                        "phone": "+919999999999",
                        "email": "test@example.com"
                    }
                },
                "end": {
                    "location": {
                        "gps": "12.914028, 77.638698"
                    }
                }
            }
        }
    }
}
```

>   The above provides the billing details and fulfilment details to initialize an order.

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