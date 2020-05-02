---
title: "Beckn Provider API"
metaTitle: "Beckn for Developers"
metaDescription: "Beckn Mobility is a set of open API specifications that work as an open protocol for interoperable services."
---

# Health Services Stack
The health services stack will bring a common set of protocols and APIs to allow delivery of health services to happen seamlessly across any set of health applications (EUA) and healthcare service providers. The stack has two entities and will offer a set of common interfaces ( unified health interfaces ) and a gateway ( Health Gateway ), that implements minimal aggregate functions.

## Version: 0.5

### Terms of service
http://catch.io/terms/

**Contact information:**  
uti@catch.io  

### /search

**HTTP method :** POST<br/>
**Request** :

  - **Header :**<br/>
  Refer to [HTTP Headers](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)<br/><br/>
  - **Body :**
```json
{
  "context": {
    "domain": "MOBILITY",
    "action": "search",
    "version": "string",
    "transaction_id": "string",
    "message_id": "string",
    "timestamp": "2020-05-02T23:06:10.037Z",
    "authtoken": "string",
    "signature": "string",
    "callbackurl": "string",
    "caller": {
      "type": "provider",
      "id": "string"
    }
  },
  "message": {
    "intent": {
      "complaints": [
        null
      ],
      "speciality": "string",
      "time_range": {
        "min": 0,
        "max": 0,
        "unit": "string"
      },
      "location": {
        "type": "gps",
        "gps": {
          "lat": "string",
          "lon": "string"
        },
        "address": {
          "door": "string",
          "building": "string",
          "street": "string",
          "area": "string",
          "city": "string",
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
          "radius": {
            "value": 0,
            "unit": "string"
          }
        },
        "polygon": "string",
        "3dspace": "string"
      },
      "price_range": {
        "min": 0,
        "max": 0,
        "unit": "string"
      },
      "providers": [
        "string"
      ],
      "doctors": [
        "string"
      ],
      "rating_range": {
        "min": 0,
        "max": 0,
        "unit": "string"
      },
      "languages": [
        "string"
      ]
    }
  }
}
```
**Response** :<br/>
_200 :_<br/>

  - **Header :**<br/>
  Refer to [HTTP Headers](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)<br/><br/>
  - **Body :**

```json
{
  "context": {
    "domain": "MOBILITY",
    "action": "search",
    "version": "string",
    "transaction_id": "string",
    "message_id": "string",
    "timestamp": "2020-05-02T22:50:14.766Z"
  },
  "message": {
    "ack": {
      "status": "ACK",
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
  }
}
```

### /select

**HTTP method :** POST<br/>
**Request** :

  - **Header :**<br/>
  Refer to [HTTP Headers](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)<br/><br/>
  - **Body :**
```json
{
  "consultationservice": {
    "id": "string",
    "state": "OFFERED",
    "expires_at": "2020-05-02T23:06:10.044Z",
    "item": {
      "id": "string",
      "name": "string",
      "description": "string",
      "image": {
        "type": "url",
        "url": "2020-05-02T23:06:10.044Z",
        "data": "string"
      },
      "price": {
        "currency": "string",
        "estimated_value": 0,
        "computed_value": 0,
        "listed_value": 0,
        "offered_value": 0,
        "unit": "string",
        "discount": 0,
        "tax": {
          "computed": 0,
          "breakup": [
            {
              "line_item": "string",
              "amount": 0
            }
          ]
        }
      },
      "primary": true,
      "selected": true,
      "quantity": 0,
      "policy": {
        "id": "string",
        "type": "CONFIRMATION_POLICY",
        "parent_policy_id": "string",
        "heading": "string",
        "terms": [
          {
            "id": "string",
            "name": "string",
            "description": "string"
          }
        ]
      },
      "category_id": "string",
      "tags": [
        "string"
      ]
    },
    "speciality": "string",
    "clinicalnotes_url": "string",
    "consultations": [
      null
    ],
    "provider": "string"
  }
}
```
**Response** :<br/>
_200 :_<br/>

  - **Header :**<br/>
  Refer to [HTTP Headers](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)<br/><br/>
  - **Body :**

```json
{
  "context": {
    "domain": "MOBILITY",
    "action": "search",
    "version": "string",
    "transaction_id": "string",
    "message_id": "string",
    "timestamp": "2020-05-02T22:50:14.766Z"
  },
  "message": {
    "ack": {
      "status": "ACK",
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
  }
}
```

### /update

**HTTP method :** POST<br/>
**Request** :

  - **Header :**<br/>
  Refer to [HTTP Headers](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)<br/><br/>
  - **Body :**
```json
{
  "context": {
    "domain": "MOBILITY",
    "action": "search",
    "version": "string",
    "transaction_id": "string",
    "message_id": "string",
    "timestamp": "2020-05-02T23:12:04.101Z",
    "authtoken": "string",
    "signature": "string",
    "callbackurl": "string",
    "caller": {
      "type": "provider",
      "id": "string"
    }
  },
  "message": {
    "consultationservice": [
      {
        "id": "string",
        "state": "OFFERED",
        "expires_at": "2020-05-02T23:12:04.101Z",
        "item": {
          "id": "string",
          "name": "string",
          "description": "string",
          "image": {
            "type": "url",
            "url": "2020-05-02T23:12:04.101Z",
            "data": "string"
          },
          "price": {
            "currency": "string",
            "estimated_value": 0,
            "computed_value": 0,
            "listed_value": 0,
            "offered_value": 0,
            "unit": "string",
            "discount": 0,
            "tax": {
              "computed": 0,
              "breakup": [
                {
                  "line_item": "string",
                  "amount": 0
                }
              ]
            }
          },
          "primary": true,
          "selected": true,
          "quantity": 0,
          "policy": {
            "id": "string",
            "type": "CONFIRMATION_POLICY",
            "parent_policy_id": "string",
            "heading": "string",
            "terms": [
              {
                "id": "string",
                "name": "string",
                "description": "string"
              }
            ]
          },
          "category_id": "string",
          "tags": [
            "string"
          ]
        },
        "speciality": "string",
        "clinicalnotes_url": "string",
        "consultations": [
          null
        ],
        "provider": "string"
      }
    ],
    "change": {
      "change_type": "reschedule",
      "change_reason": {
        "reason": "string",
        "additional_info": "string"
      },
      "changed_properties": [
        "string"
      ]
    }
  }
}

```
**Response** :<br/>
_200 :_<br/>

  - **Header :**<br/>
  Refer to [HTTP Headers](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)<br/><br/>
  - **Body :**
```json
{
  "context": {
    "domain": "MOBILITY",
    "action": "search",
    "version": "string",
    "transaction_id": "string",
    "message_id": "string",
    "timestamp": "2020-05-02T22:50:14.766Z"
  },
  "message": {
    "ack": {
      "status": "ACK",
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
  }
}
```

### /confirm

**HTTP method :** POST<br/>
**Request** :

  - **Header :**<br/>
  Refer to [HTTP Headers](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)<br/><br/>
  - **Body :**
```json
{
  "context": {
    "domain": "MOBILITY",
    "action": "search",
    "version": "string",
    "transaction_id": "string",
    "message_id": "string",
    "timestamp": "2020-05-02T23:12:22.045Z",
    "authtoken": "string",
    "signature": "string",
    "callbackurl": "string",
    "caller": {
      "type": "provider",
      "id": "string"
    }
  },
  "message": {
    "consultationservice": [
      {
        "id": "string",
        "state": "OFFERED",
        "expires_at": "2020-05-02T23:12:22.046Z",
        "item": {
          "id": "string",
          "name": "string",
          "description": "string",
          "image": {
            "type": "url",
            "url": "2020-05-02T23:12:22.046Z",
            "data": "string"
          },
          "price": {
            "currency": "string",
            "estimated_value": 0,
            "computed_value": 0,
            "listed_value": 0,
            "offered_value": 0,
            "unit": "string",
            "discount": 0,
            "tax": {
              "computed": 0,
              "breakup": [
                {
                  "line_item": "string",
                  "amount": 0
                }
              ]
            }
          },
          "primary": true,
          "selected": true,
          "quantity": 0,
          "policy": {
            "id": "string",
            "type": "CONFIRMATION_POLICY",
            "parent_policy_id": "string",
            "heading": "string",
            "terms": [
              {
                "id": "string",
                "name": "string",
                "description": "string"
              }
            ]
          },
          "category_id": "string",
          "tags": [
            "string"
          ]
        },
        "speciality": "string",
        "clinicalnotes_url": "string",
        "consultations": [
          null
        ],
        "provider": "string"
      }
    ]
  }
}
```
**Response** :<br/>
_200 :_<br/>

  - **Header :**<br/>
  Refer to [HTTP Headers](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)<br/><br/>
  - **Body :**
```json
{
  "context": {
    "domain": "MOBILITY",
    "action": "search",
    "version": "string",
    "transaction_id": "string",
    "message_id": "string",
    "timestamp": "2020-05-02T22:50:14.766Z"
  },
  "message": {
    "ack": {
      "status": "ACK",
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
  }
}
```

### /add/clinicalnotes

**HTTP method :** POST<br/>
**Request** :

  - **Header :**<br/>
  Refer to [HTTP Headers](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)<br/><br/>
  - **Body :**
```json
{
  "context": {
    "domain": "MOBILITY",
    "action": "search",
    "version": "string",
    "transaction_id": "string",
    "message_id": "string",
    "timestamp": "2020-05-02T23:12:48.501Z",
    "authtoken": "string",
    "signature": "string",
    "callbackurl": "string",
    "caller": {
      "type": "provider",
      "id": "string"
    }
  },
  "message": {}
}
```
**Response** :<br/>
_200 :_<br/>

  - **Header :**<br/>
  Refer to [HTTP Headers](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)<br/><br/>
  - **Body :**
```json
{
  "context": {
    "domain": "MOBILITY",
    "action": "search",
    "version": "string",
    "transaction_id": "string",
    "message_id": "string",
    "timestamp": "2020-05-02T22:50:14.766Z"
  },
  "message": {
    "ack": {
      "status": "ACK",
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
  }
}
```