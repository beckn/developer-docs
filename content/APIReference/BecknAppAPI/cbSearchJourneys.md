---
title: "Search Journey - Callback"
---

Callback response to Journey/search. This contains a list of Journeys serviceable by the Beckn Providers.

#### API Endpoint

    Journey/cb_search

#### Request Structure :

The request structure of a search request consists of a **Header** and **Body**.

The request Header is an object of the [Header](/Resources/Header) class. The *Action* field of the Header object will be equal to *"Journey/cb_search"*

The request Body is an array of [Journey](/Resources/Journey) objects.

##### Example Request:

**Header :**

```json
{
  "Action": "Journey/cb_search",
  "Token": "string",
  "transaction_id" : "string",
  "Timestamp": "2019-09-13T14:31:54"
}
```

**Body :**

```json
[
  {
    "id" : "< Unique Journey ID >",
    "state": "PLAN",
    "trips": [
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
              "id" : "",
              "type": "BUS-STOP",
              "name" : "STOP-1",
              "code" : "STOP-CODE-1",
              "location": {
                "value": "(12.878742,77.999654)",
                "format": "geocode"
              },
              "arrival_time": "2019-09-13T14:31:54+05:30",
              "buffer_time": "60 s",
              "departure_time": "2019-09-13T14:31:54+05:30"
            },
            {
              "id" : "",
              "type": "BUS-STOP",
              "name" : "STOP-2",
              "code" : "STOP-CODE-1",
              "location": {
                "value": "(12.878742,77.999654)",
                "format": "geocode"
              },
              "arrival_time": "2019-09-13T14:31:54+05:30",
              "buffer_time": "60 s",
              "departure_time": "2019-09-13T14:31:54+05:30"
            },
            {
              "id" : "",
              "type": "BUS-STOP",
              "name" : "STOP-1",
              "code" : "STOP-CODE-1",
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
            },
            {
              "travel_time": "4 min",
              "path": "polyline:(12.878742,77.999654),(12.878742,77.999654),(12.878742,77.999654)"
            }
          ]
        }
      },
      {
        "id": "< Unique Trip ID >",
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
]

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
