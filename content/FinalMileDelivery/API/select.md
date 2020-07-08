---
title: "Select"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn Final Mile Delivery ecosystem"
---

Select the preferred service. This also allows selection of items from the catalog. Equivalent to selecting a service and adding items to cart.

## Request:

### Context:
See [Context](https://github.com/beckn/protocol-specifications/blob/master/core/schema/0.8.0/context.json)

### Example:
```json
{
  "context": {
    "domain": "FINAL-MILE-DELIVERY",
    "action": "string",
    "version": "string",
    "transaction_id": "string",
    "session_id": "string",
    "timestamp": "2020-07-08T07:48:53.592Z",
    "token": "string",
    "status": "string"
  },
  "message": {
    "domain_level_attrs": {},
    "service_level_attrs": {
      "delivery": {
        "package": {
          "id": "string",
          "parent_package_id": "string",
          "descriptor": {
            "id": "string",
            "name": "string",
            "code": "string",
            "sym": "string",
            "short_desc": "string",
            "long_desc": "string",
            "images": [
              {
                "type": "url",
                "label": "string",
                "url": "2020-07-08T07:48:53.592Z",
                "data": "string"
              }
            ],
            "audio": "string",
            "3d_render": "string"
          },
          "category": {
            "id": "string"
          },
          "contents": [
            {
              "id": "string",
              "parent_item_id": "string",
              "descriptor": {
                "id": "string",
                "name": "string",
                "code": "string",
                "sym": "string",
                "short_desc": "string",
                "long_desc": "string",
                "images": [
                  {
                    "type": "url",
                    "label": "string",
                    "url": "2020-07-08T07:48:53.592Z",
                    "data": "string"
                  }
                ],
                "audio": "string",
                "3d_render": "string"
              },
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
              "model_id": "string",
              "category_id": "string",
              "brand_id": "string",
              "promotional": true,
              "ttl": "string",
              "tags": [
                {
                  "key": "string",
                  "value": "string"
                }
              ],
              "quantity": 0,
              "fragile": true
            }
          ],
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
          "weight": {
            "type": "CONSTANT",
            "value": 0,
            "estimated_value": 0,
            "computed_value": 0,
            "unit": "string"
          },
          "dimensions": {
            "length": {
              "type": "CONSTANT",
              "value": 0,
              "estimated_value": 0,
              "computed_value": 0,
              "unit": "string"
            },
            "breadth": {
              "type": "CONSTANT",
              "value": 0,
              "estimated_value": 0,
              "computed_value": 0,
              "unit": "string"
            },
            "height": {
              "type": "CONSTANT",
              "value": 0,
              "estimated_value": 0,
              "computed_value": 0,
              "unit": "string"
            }
          }
        }
      }
    },
    "catalog_level_attrs": {
      "offer_id": "string"
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
