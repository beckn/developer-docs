---
title: "Confirm Journey"
---

This is the API where the user has entered all the details (along with Fare Products and Value Added Services etc) and is ready to start the Journey. The MGP splits the Journey into the respective Trips and forwards the confirmation to the MSPs using the confirmTrip API. This is the API where the user has entered all the required details for the upcoming Journey. For all sense and purposes, this can also be called <b>Booking</b> the Journey

#### API Endpoint:

    /Journey/confirm

#### Request Structure :

The request structure of a search request consists of a **Header** and **Body**.

The request Header is an object of the [Header](/Resources/Header) class. The *Action* field of the Header object will be equal to *"Journeys/confirm"*

The request Body is an object of the [Journey](/Resources/Journey) class.

**Header :**
``` json
    {
      "Action": "Journey/confirm",
      "Token": "string",
      "transaction_id" : "string",
      "Timestamp": "2019-09-13T14:31:54"
    }
```

**Body :**

``` json
    {
      "id" : "< Unique Journey ID >",
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
      },
      "travelers" : [
        {
          "person_type" : "string",
          "profile" : {
              "first_name": "",
              "last_name": "",
              "phone": "",
              "email": ""
          },
          "cred" : "",
        }
      ],
      "state": "CONFIRM",
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
            },
            "fare_products" : [
              {
                "name": "Fare Product Name",
                "fare_media": {
                  "id" : "Fare Media ID"
                }
              }
            ]
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
        },
        {
          "id": "< Unique Trip ID >",
          "service": {
            "id": "Dl9jAJzRlCZirt8IJYwA",
            "name": "New York Subway",
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
                "category": "TRAIN"
              },
              "medium": "RAILWAYS"
            }
          },
          "route": {
            "flexibilty": "FIXED CORRIDOR",
            "medium": "RAILWAYS",
            "stops": [
              {
                "location": "station:33rd Street, World Trade Center@name",
                "arrival_time": "2019-09-13T14:31:54+05:30",
                "buffer_time": "60 s",
                "departure_time": "2019-09-13T14:31:54+05:30"
              },
              {
                "location": "station:34th Street, Pennsylavania Station@name",
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
          "origin": "geocode:(12.878742,77.999654)@coord.(DD.DDDDDD);Fulton Street@name",
          "destination": "station:33rd Street, World Trade Center@name",
          "medium": "ROADWAYS",
          "mode": "WALK",
          "time": "5 min"
        }
      ]
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

See [\_cb/Journey/confirm](callback) for the callback response
