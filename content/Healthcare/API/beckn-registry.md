---
title: "Beckn Registry API"
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

[Find out more about Swagger](http://swagger.io)
### /update/app

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
    "timestamp": "2020-05-02T23:20:12.891Z"
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

### /register/provider

**HTTP method :** POST<br/>
**Request** :

  - **Header :**<br/>
  Refer to [HTTP Headers](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)<br/><br/>
  - **Body :**
```json
{
  "provider": {
    "registration": "string",
    "phone": "string",
    "email": "string",
    "address": {
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
    "documents": [
      "string"
    ],
    "supportedchannels": [
      null
    ],
    "apiendpoints": [
      {
        "api": "string",
        "endpoint": {
          "url": "string",
          "exp": "2020-05-02T23:20:31.978Z"
        }
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

### /update/provider

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
    "timestamp": "2020-05-02T23:20:46.484Z",
    "authtoken": "string",
    "signature": "string",
    "callbackurl": "string",
    "caller": {
      "type": "provider",
      "id": "string"
    }
  },
  "message": {
    "app": {
      "registration": "string",
      "phone": "string",
      "email": "string",
      "address": {
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
      "documents": [
        "string"
      ],
      "apiendpoints": [
        {
          "api": "string",
          "endpoint": {
            "url": "string",
            "exp": "2020-05-02T23:20:46.484Z"
          }
        }
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