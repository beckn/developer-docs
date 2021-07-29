---
title: "On Search"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

On Search
===================

>   Send catalog of available cabs

Overview
--------

>   The BPP will send the catalog of mobility services matching closest to the search intent to the BAP.

Request
-------

### URL

>   /on_search

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|
|---------|--------|
|context*|[ContextForOn_search](/Mobility/Schema%20Reference/contextforon_search)|
|message.catalog| { [Catalog](/Mobility/Schema%20Reference/catalog) }|
|error| [Error](/Mobility/Schema%20Reference/error) |

### Request Body Example

```
{
    "context": {
        "domain": "mobility",
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
                    "id": "yellow-cabs",
                    "descriptor" : {
                        "name": "Yellow Cabs"
                    },
                    "locations": [
                        {
                            "id": "closest-suv-spot",
                            "gps": "12.9349377,77.6055586"
                        },
                        {
                            "id": "closest-sedan-spot",
                            "gps": "12.9349377,77.6055586"
                        },
                        {
                            "id": "closest-sedan-outstation",
                            "gps": "12.9349377,77.6055586"
                        }
                    ],
                    "categories": [
                        {
                            "id": "spot_booking",
                            "descriptor": {
                                "name": "Spot booking"
                            }
                        },
                        {
                            "id": "outstation",
                            "descriptor": {
                                "name": "Outstation"
                            }
                        }
                    ],
                    "items": [
                        {
                            "id": "sedan_spot",
                            "descriptor" : {
                                "name" : "4 seater Sedan",
                                "images" : [
                                    "https://mock_bpp.com/images/sedan.jpg"
                                ]
                            },
                            "category_id": "spot_booking",
                            "location_id": "closest-sedan-spot",
                            "price" : {
                                "currency": "INR",
                                "value": "170"
                            },
                            "time": {
                                "label": "ETA",
                                "duration": "P14M"
                            }
                            "matched": true
                        },
                        {
                            "id": "suv_spot",
                            "descriptor" : {
                                "name" : "6 seater SUV ",
                                "images" : [
                                    "https://mock_bpp.com/images/suv.jpg"
                                ]
                            },
                            "category_id": "spot_booking",
                            "location_id": "closest-suv-spot",
                            "price" : {
                                "currency": "INR",
                                "value": "290"
                            },
                            "time": {
                                "label": "ETA",
                                "duration": "P12M"
                            }
                            "matched": true
                        },
                        {
                            "id": "sedan_outstation",
                            "descriptor" : {
                                "name" : "4 Seater Sedan",
                                "images" : [
                                    "https://mock_bpp.com/images/sedan-out.jpg"
                                ]
                            },
                            "category_id": "outstation",
                            "location_id": "closest-sedan-outstation",
                            "price" : {
                                "currency": "INR",
                                "value": "570"
                            },
                            "time": {
                                "label": "ETA",
                                "duration": "P17M"
                            }
                            "matched": true
                        },
                    ]
                },
                {
                    "id": "cabs-4-all",
                    "descriptor": {
                        "name": "Cabs 4 All"
                    },
                    "locations": [
                        {
                            "id": "closest-sedan",
                            "gps": "12.9349377,77.6055586"
                        }
                    ],
                    "categories": [
                        {
                            "id": "rental",
                            "descriptor": {
                                "name": "Rental"
                            }
                        }
                    ],
                    "items": [
                        {
                            "id": "sedan_rental",
                            "descriptor" : {
                                "name" : "Sedan 5 hours",
                                "images" : [
                                    "https://mock_bpp.com/images/sedan_rental.jpg"
                                ]
                            },
                            "category_id": "rental",
                            "location_id": "closest-sedan",
                            "price" : {
                                "currency": "INR",
                                "value": "200"
                            },
                            "time": {
                                "label": "ETA",
                                "duration": "P12M"
                            }
                            "matched": true
                        }
                    ]
                }
            ]
        }
    }
}
```

>   The provider catalogs with mobility options as items closest to the search location is returned by the BPP. 

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