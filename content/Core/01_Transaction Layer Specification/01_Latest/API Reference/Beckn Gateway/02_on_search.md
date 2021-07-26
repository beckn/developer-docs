---
title: "On Search"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

On Search
===================

>   Send catalog

Overview
--------

>   The BPP will send the catalog of items/services matching the search intent to the BAP.

Request
-------

### URL

>   /on_search

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|
|---------|--------|
|context*|[ContextForOn_search](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/contextforon_search)|
|message.catalog| { [Catalog](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/catalog) }|
|error| [Error](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/error) |

### Request Body Example

```
{
    "context": {
        "domain": "nic2004:52110",
        "country": "IND",
        "city": "std:080",
        "action": "on_search",
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
        "catalog": {
            "bpp/descriptor": {
                "name": "Mock BPP"
            },
            "bpp/providers": [
                {
                    "id": "pooja-stores",
                    "descriptor" : {
                        "name": "Pooja Stores"
                    },
                    "locations": [
                        {
                            "id": "koramangala-4th-block-location",
                            "gps": "12.9349377,77.6055586"
                        }
                    ],
                    "categories": [
                        {
                            "id": "fresh_fruits",
                            "descriptor": {
                                "name": "Fresh Fruits"
                            }
                        },
                        {
                            "id": "beverages",
                            "descriptor": {
                                "name": "Beverages"
                            }
                        },
                    ],
                    "items": [
                        {
                            "id": "item_2",
                            "descriptor" : {
                                "name" : "Green Apples Organic",
                                "images" : [
                                    "https://mock_bpp.com/images/item_2.jpg"
                                ]
                            },
                            "category_id": "fresh_fruits",
                            "location_id": "koramangala-4th-block-location",
                            "price" : {
                                "currency": "INR",
                                "value": "170"
                            },
                            "matched": true
                        },
                        {
                            "id": "item_1",
                            "descriptor" : {
                                "name" : "Red Apples",
                                "images" : [
                                    "https://mock_bpp.com/images/item_1.jpg"
                                ]
                            },
                            "category_id": "fresh_fruits",
                            "location_id": "koramangala-4th-block-location",
                            "price" : {
                                "currency": "INR",
                                "value": "90"
                            },
                            "related": true
                        },
                        {
                            "id": "item_7",
                            "descriptor" : {
                                "name" : "Green Apple Juice",
                                "images" : [
                                    "https://mock_bpp.com/images/item_7.jpg"
                                ]
                            },
                            "category_id": "beverages",
                            "location_id": "koramangala-4th-block-location",
                            "price" : {
                                "currency": "INR",
                                "value": "70"
                            },
                            "matched": true
                        },
                    ]
                },
                {
                    "id": "food-mall",
                    "descriptor": {
                        "name": "Food Mall"
                    },
                    "locations": [
                        {
                            "id": "food-mall-location",
                            "gps": "12.9349377,77.6055586"
                        }
                    ],
                    "categories": [
                        {
                            "id": "fresh-food": {
                                "name": "Fresh food"
                            }
                        }
                    ],
                    "items": [
                        {
                            "id": "item_1_1",
                            "descriptor" : {
                                "name" : "Green Apple Salad",
                                "images" : [
                                    "https://mock_bpp.com/images/item_1_1.jpg"
                                ]
                            },
                            "category_id": "fresh-food",
                            "location_id": "food-mall-location",
                            "price" : {
                                "currency": "INR",
                                "value": "200"
                            },
                            "matched": true
                        }
                    ]
                }
            ],
            "bpp/fulfillments": [
                {
                    "type": "home-delivery"
                }
            ]
        }
    }
}
```

>   The provider catalogs with objects according to the search intent are returned

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