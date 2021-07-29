---
title: "Select"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

Select
===================

>   Select mobility option from the catalog to get a draft quote

Overview
--------

>   The BAP will send item to the BPP

Request
-------

### URL

>   /select

### Method

>  *POST*

### Request Body Schema

|**Field**|**Type**|
|---------|--------|
|context*|[ContextForSelect](/Mobility/Schema%20Reference/contextforselect)|
|message|[MessageForSelect](/Mobility/Schema%20Reference/messageforselect)|

### Request Body Example

```
{
    "context": {
        "domain": "mobility",
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
                    "id": "sedan_spot",
                    "quantity": {
                        "count": 1
                    }
                }
            ]
        }
    }
}
```

>   The above select request selects sedan_spot item to get a draft quote.

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