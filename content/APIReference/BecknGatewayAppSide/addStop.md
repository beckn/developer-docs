---
title: "Add Stop"
---

Adds a stop to a Trip

#### API Endpoint:

    Trip/Stop/add

#### Request Structure :

The request structure of a search request consists of a **Header** and **Body**.

The request Header is an object of the [Header](/Resources/Header) class. The *Action* field of the Header object will be equal to *"Trip/Stop/add"*

The request Body is an object of the [Trip](/Resources/Journey) class with the [Stop](/Resources/Stop) object inserted into the **route.stops** Array. Please note that modifying any of the other fields, should return an error response.

Addition of Stop to the Trip will not trigger any state changes.

##### Example Request:

**Header :**
```json
    {
      "Action": "Trip/Stop/add",
      "Token": "string",
      "transaction_id" : "string",
      "Timestamp": "2019-09-13T14:31:54"
    }
```

**Body :**
```json

{
  "id": "< Unique Trip ID >",
  "travelers" : [
    {
      "profile" : {
        "first_name" : "John",
        "last_name" : "Doe",
        "phone" : "+91-8899889988",
        "email" : "john.doe@example.com"
      },
      "cred" : {
        "type" : "aadhaar",
        "format" : "jpeg",
        "encoding" : "base64",
        "data" : "51o2POfNqXeZ..."
      }
    }
  ],
  "MobilityService": {
    "id": "h3nM51o2POfNqXeZJXu6",
    "name": "Port Authority Bus Service",
    "provision_type": "FIXED",
    "reservability": {
      "is_reservable": true
    },
    "capacity_type": {
      "carrier_reservable": false,
      "seat_reservable": false
    },
    "mobility_form": {
      "carrier": {
        "category": "BUS"
      },
      "medium": "ROADWAYS"
    }
  },
  "route": {
    "flexibilty": "FIXED CORRIDOR",
    "medium": "ROADWAYS",
    "stops": [
      {
        "location": {
          "value": "(12.878742,77.999654)",
          "format": "geocode"
        },
        "arrival_time": "2019-09-13T14:31:54+05:30",
        "buffer_time": "60 s",
        "departure_time": "2019-09-13T14:31:54+05:30"
      },
      {
        "location": {
          "value": "(12.878742,77.999654)",
          "format": "geocode"
        },
        "buffer_time": "60 s",
        "departure_time": "2019-09-13T14:31:54+05:30"
      },
      {
        "location": {
          "value": "(12.878742,77.999654)",
          "format": "geocode"
        },
        "arrival_time": "2019-09-13T14:31:54+05:30"
      }
    ],
    "edges": [
      {
        "travel_time": "2 min",
        "path": "polyline:(12.878742,77.999654),(12.878742,77.999654),(12.878742,77.999654)"
      }
    ]
  }
}

```

#### Response Structure

The response structure will consist of a **Header** and an optional **Body**

As the API is non-blocking, the Response to the above Request will be a simple **ACK** or a **NACK** response. The response Header is an object of the [Header](/Resources/Header) class. The ACK and NACK response Headers will have the action field equal to *"ACK"* and *"NACK"* respectively. The ACK response Body will be an **empty** JSON object.

The NACK response body may optionally contain an [Error](/Resources/Error) object.

##### Example ACK Response

**Header :**
```json
{
  "action": "ACK",
  "message": "Success Message string"
}
```
**Body :**
```json
{}
```
##### Example NACK Response :

**Header :**
```json
{
  "action": "NACK",
  "message": "Error message string"
}
```
**Body :**
```json
{}
```
See [\_cb/Journey/Traveler/add](callback) for the callback response
