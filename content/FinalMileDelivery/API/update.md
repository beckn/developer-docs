---
title: "Update"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn Final Mile Delivery ecosystem"
---

Update an active order.

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
    "timestamp": "2020-07-08T07:54:31.268Z",
    "token": "string",
    "status": "string"
  },
  "message": {
    "action": "update_task_location",
    "order": {
      "id": "string",
      "state": "string",
      "billing": {
        "person": {
          "title": "Mr",
          "first_name": "string",
          "middle_name": "string",
          "last_name": "string",
          "full_name": "string",
          "image": {
            "format": "url",
            "data": "string"
          },
          "dob": "2020-07-08",
          "gender": "male",
          "contact": {
            "email": "user@example.com",
            "mobile": {
              "country_code": "string",
              "number": "string"
            },
            "landline": {
              "country_code": "string",
              "std_code": "string",
              "number": "string",
              "extension": "string"
            }
          }
        },
        "location": {
          "type": "gps",
          "gps": {
            "lat": "string",
            "lon": "string",
            "format": "string"
          },
          "address": {
            "door": "string",
            "building": "string",
            "street": "string",
            "locality": "string",
            "ward": "string",
            "city": "string",
            "state": "string",
            "country": "string",
            "area_code": "string"
          },
          "station_code": "string",
          "area_code": "string",
          "city": {
            "name": "string",
            "code": "string"
          },
          "country": {
            "name": "string",
            "code": "string"
          },
          "circle": {
            "lat": "string",
            "lon": "string",
            "format": "string",
            "radius": {
              "type": "CONSTANT",
              "value": 0,
              "estimated_value": 0,
              "computed_value": 0,
              "unit": "string"
            }
          },
          "polygon": "string",
          "3dspace": "string"
        },
        "form": "string"
      },
      "fulfillment": {
        "person": {
          "title": "Mr",
          "first_name": "string",
          "middle_name": "string",
          "last_name": "string",
          "full_name": "string",
          "image": {
            "format": "url",
            "data": "string"
          },
          "dob": "2020-07-08",
          "gender": "male",
          "contact": {
            "email": "user@example.com",
            "mobile": {
              "country_code": "string",
              "number": "string"
            },
            "landline": {
              "country_code": "string",
              "std_code": "string",
              "number": "string",
              "extension": "string"
            }
          }
        },
        "location": {
          "type": "gps",
          "gps": {
            "lat": "string",
            "lon": "string",
            "format": "string"
          },
          "address": {
            "door": "string",
            "building": "string",
            "street": "string",
            "locality": "string",
            "ward": "string",
            "city": "string",
            "state": "string",
            "country": "string",
            "area_code": "string"
          },
          "station_code": "string",
          "area_code": "string",
          "city": {
            "name": "string",
            "code": "string"
          },
          "country": {
            "name": "string",
            "code": "string"
          },
          "circle": {
            "lat": "string",
            "lon": "string",
            "format": "string",
            "radius": {
              "type": "CONSTANT",
              "value": 0,
              "estimated_value": 0,
              "computed_value": 0,
              "unit": "string"
            }
          },
          "polygon": "string",
          "3dspace": "string"
        },
        "type": "string"
      },
      "created_at": "2020-07-08T07:54:31.268Z",
      "updated_at": "2020-07-08T07:54:31.268Z"
    }
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
