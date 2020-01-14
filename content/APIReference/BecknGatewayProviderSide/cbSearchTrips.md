---
title: "Search Trip - Callback"
---

Callback response to Search Trip

#### API Endpoint:

    /Trip/cb_search

#### Request Structure :

The request structure of a search request consists of a **Header** and **Body**.

The request Header is an object of the [Header](/Resources/Header) class. The *Action* field of the Header object will be equal to *"Journeys/search"*

The request Body is an array of [Trip](/Resources/Trip) objects.

##### Example Request:



**Header :**
```json
{
  "Action": "Trip/cb_search",
  "Token": "string",
  "transaction_id" : "string",
  "Timestamp": "2019-09-13T14:31:54"
}
```
**Body :**
```json
[
  {
    "id": "< Unique Trip ID >",
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
          "location": "geocode:(12.878742,77.999654)@coord.(DD.DDDDDD);Vesey Street@name",
          "arrival_time": "2019-09-13T14:31:54+05:30",
          "buffer_time": "60 s",
          "departure_time": "2019-09-13T14:31:54+05:30"
        },
        {
          "location": "geocode:(12.878742,77.999654)@coord.(DD.DDDDDD);Fulton Street@name",
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
]
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

See [\_cb/Journey/init](callback) for the callback response
