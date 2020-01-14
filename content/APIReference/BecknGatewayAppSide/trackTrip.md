---
title: "Track Trip"
---

Tracks a Trip using a specific communication channel

#### API Endpoint:

    /Trip/track

#### Request Structure :

The request structure of a search request consists of a **Header** and **Body**.

The request Header is an object of the [Header](/Resources/Header) class. The *Action* field of the Header object will be equal to *"Trip/track"*

The request Body is equal to the [Track](/Resources/Track) object.

##### Example Request:

**Header :**
``` json
{
  "Action": "Trip/track",
  "Token": "string",
  "transaction_id" : "string",
  "Timestamp": "2019-09-13T14:31:54"
}
```

**Body :**
``` json
{
  "id": "< Unique Trip ID >",
  "track": {
    "method": "pull",
    "tracking_url" : ""
  },
}

```

#### Response Structure

The response structure will consist of a **Header** and an optional **Body**

As the API is non-blocking, the Response to the above Request will be a simple **ACK** or a **NACK** response. The response Header is an object of the [Header](/Resources/Header) class. The ACK and NACK response Headers will have the action field equal to *"ACK"* and *"NACK"* respectively. The ACK response Body will be an **empty** JSON object.

The NACK response body may optionally contain an [Error](/Resources/Error) object.

##### Example ACK Response

**Header :**

``` json
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
``` json
{
  "action": "NACK",
  "message": "Error message string"
}
```
**Body :**

``` json
{}
```
##### Example NACK Response :

**Header :**
``` json
{
  "action": "NACK",
  "message": "Error message string"
}
```

**Body :**
``` json
{}
```
