---
title: "Search"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

Search
===================

>   Search for mobility services by intent

Overview
--------

>   The BAP will send the search intent to the BPP for services. 

Request
-------

### URL

>   /search

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|
|---------|--------|
|context*|[ContextForSearch](/Mobility/Schema%20Reference/contextforsearch)|
|message|  [MessageForSearch](/Mobility/Schema%20Reference/messageforsearch) |

### Request Body Example

```
{
    "context": {
        "domain": "mobility",
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
            "fulfillment": {
                "start" : {
                    "location" : {
                        "gps" : "12.9349377,77.6055586"
                    }
                },
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

>   The above search intent searches for mobility options from the start location GPS co-ordinates *12.9349377,77.6055586* to to the end location GPS co-ordinates *12.4535445,77.9283792*

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