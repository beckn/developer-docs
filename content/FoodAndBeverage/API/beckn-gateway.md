# Beckn Gateway API
API Spec for Beckn Gateway

## Version: 0.3.1

### /search/fnb_service

#### POST
##### Description:

Search by intent

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "$ref": "https://developers.beckn.org/food-and-beverage/schema/0.7.1/fnb_intent.json",
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /select/fnb_service

#### POST
##### Description:

Select the preferred service. This also allows selection of items from the catalog. Equivalent to selecting a service and adding items to cart.

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "$ref": "https://developers.beckn.org/food-and-beverage/schema/0.7.1/fnb_service.json",
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /confirm/fnb_service

#### POST
##### Description:

Confirm a Service. Equivalent to checkout operation

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "$ref": "https://developers.beckn.org/food-and-beverage/schema/0.7.1/fnb_service.json",
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /track/fnb_service

#### POST
##### Description:

Track a service or and item

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "$ref": "https://developers.beckn.org/food-and-beverage/schema/0.7.1/fnb_service.json",
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /cancel/fnb_service

#### POST
##### Description:

Cancel a Service

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "$ref": "https://developers.beckn.org/food-and-beverage/schema/0.7.1/fnb_service.json",
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /complete/fnb_service

#### POST
##### Description:

Complete a service

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "$ref": "https://developers.beckn.org/food-and-beverage/schema/0.7.1/fnb_service.json",
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /add/fnb_item

#### POST
##### Description:

Add a runtime object to a collection within a service instance object

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "type" : "object",
        "service_id" : {
            "$ref": "https://developers.beckn.org/core/schema/0.7.1/service.json#/properties/id",
        },
        "item_id" : {
            "$ref" : "http://schema.beckn.org/core/schema/0.7.1/item.json#/properties/id"
        }
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /remove/fnb_item

#### POST
##### Description:

Remove a runtime object to a collection within a service instance object

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "type" : "object",
        "service_id" : {
            "$ref": "https://developers.beckn.org/core/schema/0.7.1/service.json#/properties/id",
        },
        "item_ids" : {
            "type" : "array",
            "items" : {
                "$ref" : "http://schema.beckn.org/core/schema/0.7.1/item.json#/properties/id"
            }
        }
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /update/fnb_item

#### POST
##### Description:

Update item

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "type" : "object",
        "service_id" : {
            "$ref": "https://developers.beckn.org/core/schema/0.7.1/service.json#/properties/id",
        },
        "item_ids" : {
            "type" : "array",
            "items" : {
                "$ref" : "http://schema.beckn.org/core/schema/0.7.1/item.json#/properties/id"
            }
        }
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_search/fnb_service

#### POST
##### Description:

Callback response to search

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "type" : "array",
        "items" : {
            "$ref": "https://developers.beckn.org/core/schema/0.7.1/service.json",
        }
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_select/fnb_service

#### POST
##### Description:

Callback response to select/service

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "$ref": "https://developers.beckn.org/core/schema/0.7.1/service.json",
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_confirm/fnb_service

#### POST
##### Description:

Callback response to confirm/service

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "$ref": "https://developers.beckn.org/core/schema/0.7.1/service.json",
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_track/fnb_service

#### POST
##### Description:

Provide tracking info

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {}
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_cancel/fnb_service

#### POST
##### Description:

Response to cancel service

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "$ref": "https://developers.beckn.org/core/schema/0.7.1/service.json",
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_add/fnb_item

#### POST
##### Description:

Returns updated service with added runtime object

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "$ref": "https://developers.beckn.org/core/schema/0.7.1/service.json",
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_remove/fnb_item

#### POST
##### Description:

Returns updated service with removed runtime object

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "$ref": "https://developers.beckn.org/core/schema/0.7.1/service.json",
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_update/fnb_item

#### POST
##### Description:

Returns updated service with updated runtime object

#### Body
```json
{
    "context" : {
        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
    },
    "message" : {
        "$ref": "https://developers.beckn.org/core/schema/0.7.1/service.json",
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |