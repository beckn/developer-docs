---
title: "Search Trips"
---

Find Trips matching a specific intent

#### API Endpoint:

    /Trip/search

#### Request Structure :

The request structure of a search request consists of a **Header** and **Body**.

The request Header is an object of the [Header](/Resources/Header) class. The *Action* field of the Header object will be equal to *"Trip/search"*

The request Body is an object of the [JourneyIntent](/Resources/JourneyIntent) class.

##### Example Request:

```json
{
  "header": {
    "action": "Trip/search",
    "txn_id": "<transaction id>",
    "version": "1.0.0",
    "timestamp": "2019-09-13T14:31:54+05:30@UTC"
  },
  "body": {
    "origin": {
      "location": {
        "value": "(12.878742,77.999654)",
        "format": "geocode"
      },
      "departure_time": {
        "value": "2019-09-13T14:31:54",
        "format": "utc"
      }
    },
    "destination": {
      "location": {
        "value": "(12.982984,77.454322)",
        "format": "geocode"
      }
    }
  },
  "footer": {
    "token": "Xk0L2JF1wWeFWyF3fZrV",
    "signature": "lN5hPNLsBo06f5cyJbRD",
    "public_key": "Cxy55xAFE1tc52Srd41e"
  }
}
```

#### Response Structure

The response structure will consist of a **Header** and an optional **Body**

As the API is non-blocking, the Response to the above Request will be a simple **ACK** or a **NACK** response. The response Header is an object of the [Header](/Resources/Header) class. The ACK and NACK response Headers will have the action field equal to *"ACK"* and *"NACK"* respectively. The ACK response Body will be an **empty** JSON object.

The NACK response body may optionally contain an [Error](/Resources/Error) object.

##### Success

**Header :**

    {
      "action": "ACK",
      "message": "Success Message string"
    }

**Body :**

    {}

##### Failure :

**Header :**

    {
      "action": "NACK",
      "message": "Error message string"
    }

**Body :**

    {

    }
