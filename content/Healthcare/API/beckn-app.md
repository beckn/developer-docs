---
title: "Beckn App API"
metaTitle: "Beckn for Developers"
metaDescription: "Beckn Mobility is a set of open API specifications that work as an open protocol for interoperable services."
---

# Health Services Stack - Beckn App API
The health services stack will bring a common set of protocols and APIs to allow delivery of health services to happen seamlessly across any set of health applications (EUA) and healthcare service providers. The stack has two entities and will offer a set of common interfaces ( unified health interfaces ) and a gateway ( Health Gateway ), that implements minimal aggregate functions.

## Version: 0.5

### Terms of service
http://catch.io/terms/

**Contact information:**  
uti@catch.io  

### /on_search

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
    "timestamp": "2020-05-02T23:17:25.875Z",
    "authtoken": "string",
    "signature": "string",
    "callbackurl": "string",
    "caller": {
      "type": "provider",
      "id": "string"
    }
  },
  "message": {
    "services": [
      {
        "id": "string",
        "state": "OFFERED",
        "expires_at": "2020-05-02T23:17:25.875Z",
        "item": {
          "id": "string",
          "name": "string",
          "description": "string",
          "image": {
            "type": "url",
            "url": "2020-05-02T23:17:25.875Z",
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

### /on_select

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
    "timestamp": "2020-05-02T23:18:02.873Z",
    "authtoken": "string",
    "signature": "string",
    "callbackurl": "string",
    "caller": {
      "type": "provider",
      "id": "string"
    }
  },
  "message": {
    "consultation_service": [
      {
        "id": "string",
        "state": "OFFERED",
        "expires_at": "2020-05-02T23:18:02.873Z",
        "item": {
          "id": "string",
          "name": "string",
          "description": "string",
          "image": {
            "type": "url",
            "url": "2020-05-02T23:18:02.873Z",
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
### /on_confirm

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
    "timestamp": "2020-05-02T23:18:19.079Z",
    "authtoken": "string",
    "signature": "string",
    "callbackurl": "string",
    "caller": {
      "type": "provider",
      "id": "string"
    }
  },
  "message": {
    "consultation_service": [
      {
        "id": "string",
        "state": "OFFERED",
        "expires_at": "2020-05-02T23:18:19.079Z",
        "item": {
          "id": "string",
          "name": "string",
          "description": "string",
          "image": {
            "type": "url",
            "url": "2020-05-02T23:18:19.079Z",
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

### /on_add/clinicalnotes

**HTTP method :** POST<br/>
**Request** :

  - **Header :**<br/>
  Refer to [HTTP Headers](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)<br/><br/>
  - **Body :**
```json
{
  "header": {
    "authtoken": "string",
    "signature": "string",
    "callbackurl": "string",
    "caller": {
      "type": "provider",
      "id": "string"
    }
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

### /on_update/service

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
    "timestamp": "2020-05-02T23:18:51.350Z",
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
        "expires_at": "2020-05-02T23:18:51.351Z",
        "item": {
          "id": "string",
          "name": "string",
          "description": "string",
          "image": {
            "type": "url",
            "url": "2020-05-02T23:18:51.351Z",
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