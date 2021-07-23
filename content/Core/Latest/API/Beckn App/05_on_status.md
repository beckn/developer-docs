---
title: "On Status"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

On Status
===================

>   Fetch the status of the order

Overview
--------

>   The BPP will send the order object with current status to the BAP.

Request
-------

### URL

>   /on_status

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|
|---------|--------|
|context*|[ContextForOn_status](/Core/Latest/02_Schemas/contextforon_status)|
|message| [MessageForOn_status](/Core/Latest/02_Schemas/messageforon_status) |
|error| [Error](/Core/Latest/02_Schemas/error) |

### Request Body Example

```
{
    "context": {
        "domain": "nic2004:52110",
        "country": "IND",
        "city": "std:080",
        "action": "on_status",
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
            "id": "order_1",
            "state": "Picked from Store",
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
                },
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
                "type": "home-delivery",
                "tracking": false,
                "start": {
                    "location": {
                        "id": "koramangala-4th-block-location",
                        "descriptor": {
                            "name": "Pooja Stores"
                        },
                        "gps": "12.9349377,77.6055586"
                    },
                    "time": {
                        "range": {
                            "start": "2021-06-15T07:09:30.000Z",
                            "end": "2021-06-15T07:10:30.000Z"
                        }
                    },
                    "instructions": {
                        "name": "pick up instructions",
                        "short_desc": "Provide the order id"
                    },
                    "contact": {
                        "phone": "+919999999999",
                        "email": "info@poojastores.com"
                    }
                },
                "end": {
                    "location": {
                        "gps": "12.914028, 77.638698",
                        "address": {
                            "door": "21A",
                            "name": "ABC Appartments",
                            "locality": "HSR Layout",
                            "city": "Bengaluru",
                            "state": "Karnataka",
                            "country": "India",
                            "area_code": "560102"
                        }
                    },
                    "time": {
                        "range": {
                            "start": "2021-06-15T07:11:36.212Z",
                            "end": "2021-06-15T07:12:36.212Z"
                        }
                    },
                    "instructions": {
                        "name": "drop off instructions",
                        "short_desc": "Leave at door step"
                    },
                    "contact": {
                        "phone": "+919876543210",
                        "email": "user@example.com"
                    }
                }
            },
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
            },
            "payment": {
                "uri": "https://api.bpp.com/pay?amt=$640&mode=upi&vpa=bpp@upi",
                "tl_method": "http/get",
                "params": {
                    "transaction_id": "transaction_453",
                    "amount": "640",
                    "mode": "upi",
                    "vpa": "bpp@upi"
                },
                "type": "ON-FULFILMENT",
                "status": "PAID"
            }
        }
    }
}
```

>   The order object with the current status is returned.

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