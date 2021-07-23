---
title: "Search"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

Search
===================

>   Search for services by intent

Overview
--------

>   The BAP will send the search intent to the BPP for services 

Request
-------

### URL

>   /search

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|
|---------|--------|
|context*|[ContextForSearch](/Core/Latest/02_Schemas/contextforsearch)|
|message|  [MessageForSearch](/Core/Latest/02_Schemas/messageforsearch) |

### Request Body Example

```
{
    "context": {
        "domain": "nic2004:52110",
        "country": "IND",
        "city": "std:080",
        "action": "search",
        "core_version": "0.9.1",
        "bap_id": "https://mock_bap.com/",
        "bap_uri": "https://mock_bap.com/beckn/",
        "transaction_id": "1209849124",
        "message_id": "12341242342",
        "timestamp": "2021-03-23T10:00:40.065Z"
    },
    "message": {
        "intent" : {
            "item": {
                "descriptor" : {
                    "name" : "Green apple"
                }
            },
            "fulfillment": {
                "end" : {
                    "location" : {
                        "gps" : "12.4535445,77.9283792"
                    }
                }
            }
        }
    }
}
```

>   The above search intent searches for *Green apples* to be delivered to the location specified by the GPS co-ordinates *12.4535445,77.9283792*

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