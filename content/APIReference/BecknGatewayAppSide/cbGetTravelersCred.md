---
title: "Get Travelers Cred - Callback"
---
BA sends traveler credentials to BG for a Trip as callback

#### API Endpoint:

    /Travelers/Cred/cb_get

#### Request Structure :

The request structure of a search request consists of a **Header** and **Body**.

The request Header is an object of the [Header](/Resources/Header) class. The *Action* field of the Header object will be equal to *"/Travelers/Cred/cb_get"*

The request Body is an array of [Traveler](/Resources/Traveler) objects with updated credentials.

##### Example Request:

**Header :**
```json
{
  "Action": "/Travelers/Cred/cb_get",
  "Token": "string",
  "transaction_id" : "string",
  "Timestamp": "2019-09-13T14:31:54"
}
```

**Body :**
```json
[
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
  },
  {
    "profile" : {
      "first_name" : "Jane",
      "last_name" : "Doe",
      "phone" : "+91-8899889988",
      "email" : "jane.doe@example.com"
    },
    "cred" : {
      "type" : "aadhaar",
      "format" : "jpeg",
      "encoding" : "base64",
      "data" : "51o2POfNqXeZ..."
    }
  },
]
```

#### Response Structure

The response structure will consist of a **Header** and an optional **Body**

As the API is non-blocking, the Response to the above Request will be a simple **ACK** or a **NACK** response. The response Header is an object of the [Header](/Resources/Header) class. The ACK and NACK response Headers will have the action field equal to *"ACK"* and *"NACK"* respectively. The ACK response Body will be an **empty** JSON object.

The NACK response body may optionally contain an [Error](/Resources/Error) object.

##### Example ACK Response

**Header :**

    {
      "action": "ACK",
      "message": "Success Message string"
    }

**Body :**

    {}

##### Example NACK Response :

**Header :**

    {
      "action": "NACK",
      "message": "Error message string"
    }

**Body :**

    {}

See [\_cb/Journey/Traveler/add](callback) for the callback response
