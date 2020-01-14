---
title: "Init Journey - Callback"
---

Callback response to Journey/init. This contains a list of Journeys serviceable by the Beckn Providers.

#### API Endpoint

    Journey/cb_init

#### Request Structure :

The request structure of a search request consists of a **Header** and **Body**.

The request Header is an object of the [Header](/Resources/Header) class. The *Action* field of the Header object will be equal to *"Journey/cb_search"*

The request Body is a [Journey](/Resources/Journey) object with the updaed fields.

##### Example Request:

**Header :**

```json
{
  "Action": "Journey/cb_init",
  "Token": "string",
  "transaction_id" : "string",
  "Timestamp": "2019-09-13T14:31:54"
}
```
**Body :**

```json
{
  "id" : "< Unique Journey ID >",
  "state": "INIT",
  "intent" : {
    "origin": {
      "location": {
        "value": "(12.878742,77.999654)",
        "format": "geocode"
      },
      "departure_time": {
        "value": "2019-09-13T14:31:54+05:30",
        "format": "utc"
      }
    },
    "destination": {
      "location": {
        "value": "(12.454612,77.876287)",
        "format": "geocode"
      }
    }
  },
  "trips": [
    {
      "id": "< Unique Trip ID >",
      "state": "INIT",
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
          }
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
    },
    {
      "id": "< Unique Trip ID >",
      "state": "INIT",
      "service": {
        "id": "Dl9jAJzRlCZirt8IJYwA",
        "name": "New York Subway",
        "provision_type": "FIXED",
        "reservability": {
          "is_reservable": false
        },
        "capacity_type": {
          "carrier_reservable": false,
          "seat_reservable": false
        },
        "mobility_form": {
          "carrier": {
            "category": "METRO"
          },
          "medium": "RAILWAYS"
        }
      },
      "route": {
        "flexibilty": "FIXED CORRIDOR",
        "medium": "RAILWAYS",
        "stops": [
          {
            "location": {
              "value": "42nd Street",
              "format": "train-station"
            },
            "arrival_time": "2019-09-13T14:31:54+05:30",
            "buffer_time": "60 s",
            "departure_time": "2019-09-13T14:31:54+05:30"
          },
          {
            "location": {
              "value": "World Trade Center",
              "format": "geocode"
            },
            "arrival_time": "2019-09-13T14:31:54+05:30"
          }
        ],
        "edges": [
          {
            "travel_time": "12 min",
            "path": "polyline:(12.878742,77.999654),(12.878742,77.999654),(12.878742,77.999654)"
          }
        ]
      }
    }
  ],
  "transfers": [
    {
      "origin": {
        "value": "(12.878742,77.999654)",
        "format": "geocode"
      },
      "destination": {
        "value": "(12.878742,77.999654)",
        "format": "geocode"
      },
      "medium": "ROADWAYS",
      "mode": "WALK",
      "time": "5 min"
    }
  ]
}
```

#### Response Structure

The response structure will consist of a **Header** and an optional **Body**

As the API is non-blocking, the Response to the above Request will be a **ACK** or a **NACK** response. The response Header is an object of the [Header](/Resources/Header) class. The ACK and NACK response Headers will have the action field equal to *"ACK"* and *"NACK"* respectively. The ACK response Body will be an **empty** JSON object.

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
``` json
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
