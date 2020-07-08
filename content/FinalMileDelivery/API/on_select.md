---
title: "On Select "
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn Final Mile Delivery ecosystem"
---

Callback response to select. Here BPP sends updated quote based on items, offers, add-ons etc selected by the BAP

## Request:

### Context:
See [Context](https://github.com/beckn/protocol-specifications/blob/master/core/schema/0.8.0/context.json)

### Message:

### Example:
```json
{
  "context": {
    "domain": "FINAL-MILE-DELIVERY",
    "action": "string",
    "version": "string",
    "transaction_id": "string",
    "session_id": "string",
    "timestamp": "2020-07-08T08:16:58.152Z",
    "token": "string",
    "status": "string"
  },
  "message": {
    "quote": {
      "id": "string",
      "price": {
        "currency": "string",
        "estimated_value": {
          "integral": "string",
          "fractional": "string"
        },
        "computed_value": {
          "integral": "string",
          "fractional": "string"
        },
        "listed_value": {
          "integral": "string",
          "fractional": "string"
        },
        "offered_value": {
          "integral": "string",
          "fractional": "string"
        },
        "breakup": [
          {
            "title": "string",
            "amount": {
              "integral": "string",
              "fractional": "string"
            }
          }
        ]
      },
      "ttl": "string"
    }
  },
  "error": {
    "t_error": {
      "t_protocol": "string",
      "t_version": "string",
      "t_code": "string"
    },
    "r_error": {
      "rcode": "string",
      "rmessage": "string"
    },
    "f_error": [
      {
        "fpath": "string",
        "fcode": "string",
        "fmessage": "string"
      }
    ],
    "d_error": {}
  }
}
```

## Response:

### Context:
See [Context](https://github.com/beckn/protocol-specifications/blob/master/core/schema/0.8.0/context.json)

### Message:
| Property       | Type   |
|----------------|--------|
| ack         | [Ack](https://github.com/beckn/protocol-specifications/blob/master/core/schema/0.8.0/ack.json) |

### Error:
See [Error](https://github.com/beckn/protocol-specifications/blob/master/core/schema/0.8.0/error.json)

### Example:
```json
{
  "context": {
    "domain": "FINAL-MILE-DELIVERY",
    "action": "string",
    "version": "string",
    "transaction_id": "string",
    "session_id": "string",
    "timestamp": "2020-07-08T07:06:34.257Z",
    "token": "string",
    "status": "string"
  },
  "message": {
    "status": "ACK"
  },
  "error": {
    "t_error": {
      "t_protocol": "string",
      "t_version": "string",
      "t_code": "string"
    },
    "r_error": {
      "rcode": "string",
      "rmessage": "string"
    },
    "f_error": [
      {
        "fpath": "string",
        "fcode": "string",
        "fmessage": "string"
      }
    ],
    "d_error": {}
  }
}
```
