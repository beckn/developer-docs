# Beckn Gateway API
API Spec for Beckn Gateway in Mobility Domain

## Version: 0.7.1

### /search/services

#### POST
##### Description:

Searches for Services

##### Request

```json
{
    "post": {
        "tags": [
            "Beckn App Facing API"
        ],
        "description": "Searches for Services",
        "requestBody": {
            "description": "Beckn App searches for the Resource using an Intent.",
            "content": {
                "application/json": {
                    "schema": {
                        "type" : "object",
                        "properties" : {
                            "context" : {
                                "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                            },
                            "message" : {
                                "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/mobility_intent.json"
                            }
                        }
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "Acknowledgement of message received",
                "content": {
                    "application/json": {
                        "schema": {
                            "type" : "object",
                            "properties" : {
                                "context" : {
                                    "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                },
                                "message" : {
                                    "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```

### /select/service

#### POST
##### Description:

Select the preferred service. This also allows selection of items from the catalog. Equivalent to selecting a service and adding items to cart.

##### Request

```json
{
    "post": {
        "tags": [
            "Beckn App Facing API"
        ],
        "description": "Select the preferred service. This also allows selection of items from the catalog. Equivalent to selecting a service and adding items to cart.",
        "requestBody": {
            "description": "TODO",
            "content": {
                "application/json": {
                    "schema": {
                        "type" : "object",
                        "properties" : {
                            "context" : {
                                "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                            },
                            "message" : {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/mobility_service/properties/id"
                                    },
                                    "catalog" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/mobility_service/properties/catalog"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "Acknowledgement of message received",
                "content": {
                    "application/json": {
                        "schema": {
                            "type" : "object",
                            "properties" : {
                                "context" : {
                                    "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                },
                                "message" : {
                                    "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```

### /confirm/service

#### POST
##### Description:

Confirm a Service. Equivalent to checkout operation

##### Request

```json
{
    "post": {
        "tags": [
            "Beckn App Facing API"
        ],
        "description": "Confirm a Service. Equivalent to checkout operation",
        "requestBody": {
            "description": "TODO",
            "content": {
                "application/json": {
                    "schema": {
                        "type" : "object",
                        "properties" : {
                            "context" : {
                                "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                            },
                            "message" : {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/mobility_service/properties/id"
                                    },
                                    "catalog" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/mobility_service/properties/catalog"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "Acknowledgement of message received",
                "content": {
                    "application/json": {
                        "schema": {
                            "type" : "object",
                            "properties" : {
                                "context" : {
                                    "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                },
                                "message" : {
                                    "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```

### /track/trip

#### POST
##### Description:

Track a Trip

##### Request

```json
{
    "post": {
        "tags": [
            "Beckn App Facing API"
        ],
        "description": "Track a Trip",
        "requestBody": {
            "description": "TODO",
            "content": {
                "application/json": {
                    "schema": {
                        "type" : "object",
                        "properties" : {
                            "context" : {
                                "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                            },
                            "message" : {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/trip/properties/id"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "Acknowledgement of message received",
                "content": {
                    "application/json": {
                        "schema": {
                            "type" : "object",
                            "properties" : {
                                "context" : {
                                    "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                },
                                "message" : {
                                    "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /cancel/Trip

#### POST
##### Description:

Cancel a Trip

##### Request

```json
{
    "post": {
        "tags": [
            "Beckn App Facing API"
        ],
        "description": "Cancel a Trip",
        "requestBody": {
            "description": "TODO",
            "content": {
                "application/json": {
                    "schema": {
                        "type" : "object",
                        "properties" : {
                            "context" : {
                                "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                            },
                            "message" : {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/trip/properties/id"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "Acknowledgement of message received",
                "content": {
                    "application/json": {
                        "schema": {
                            "type" : "object",
                            "properties" : {
                                "context" : {
                                    "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                },
                                "message" : {
                                    "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```


### /add/traveller

#### POST
##### Description:

Select a Service and add items from the service catalog

##### Request

```json
{
    "post": {
        "tags": [
            "Beckn App Facing API"
        ],
        "description": "Select a Service and add items from the service catalog",
        "requestBody": {
            "description": "TODO",
            "content": {
                "application/json": {
                    "schema": {
                        "type" : "object",
                        "properties" : {
                            "context" : {
                                "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                            },
                            "message" : {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/trip/properties/id"
                                    },
                                    "traveller" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/traveller.json"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "Acknowledgement of message received",
                "content": {
                    "application/json": {
                        "schema": {
                            "type" : "object",
                            "properties" : {
                                "context" : {
                                    "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                },
                                "message" : {
                                    "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```

### /remove/traveller

#### POST
##### Description:

Remove traveller from trip

##### Request

```json
{
    "post": {
        "tags": [
            "Beckn App Facing API"
        ],
        "description": "Remove traveller from trip",
        "requestBody": {
            "description": "TODO",
            "content": {
                "application/json": {
                    "schema": {
                        "type" : "object",
                        "properties" : {
                            "context" : {
                                "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                            },
                            "message" : {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/trip/properties/id"
                                    },
                                    "traveller" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/traveller.json"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "Acknowledgement of message received",
                "content": {
                    "application/json": {
                        "schema": {
                            "type" : "object",
                            "properties" : {
                                "context" : {
                                    "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                },
                                "message" : {
                                    "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```

### /update/traveller

#### POST
##### Description:

Remove traveller from trip

##### Request

```json
{
    "post": {
        "tags": [
            "Beckn App Facing API"
        ],
        "description": "Remove traveller from trip",
        "requestBody": {
            "description": "TODO",
            "content": {
                "application/json": {
                    "schema": {
                        "type" : "object",
                        "properties" : {
                            "context" : {
                                "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                            },
                            "message" : {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/trip/properties/id"
                                    },
                                    "traveller" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/traveller.json"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "Acknowledgement of message received",
                "content": {
                    "application/json": {
                        "schema": {
                            "type" : "object",
                            "properties" : {
                                "context" : {
                                    "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                },
                                "message" : {
                                    "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /add/stop

#### POST
##### Description:

Adds a stop to a trip

##### Request

```json
{
    "post": {
        "tags": [
            "Beckn App Facing API"
        ],
        "description": "Adds a stop to a trip",
        "requestBody": {
            "description": "TODO",
            "content": {
                "application/json": {
                    "schema": {
                        "type" : "object",
                        "properties" : {
                            "context" : {
                                "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                            },
                            "message" : {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/mobility_service/properties/id"
                                    },
                                    "stop" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/stop.json"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "Acknowledgement of message received",
                "content": {
                    "application/json": {
                        "schema": {
                            "type" : "object",
                            "properties" : {
                                "context" : {
                                    "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                },
                                "message" : {
                                    "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /remove/stop

#### POST
##### Description:

Remove a stop from a trip

##### Request

```json
{
    "post": {
        "tags": [
            "Beckn App Facing API"
        ],
        "description": "Remove a stop from a trip",
        "requestBody": {
            "description": "TODO",
            "content": {
                "application/json": {
                    "schema": {
                        "type" : "object",
                        "properties" : {
                            "context" : {
                                "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                            },
                            "message" : {
                                "type" : "object",
                                "properties" : {
                                    "id": {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/mobility_service/properties/id"
                                    },
                                    "stop" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/stop.json"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "responses": {
            "200": {
                "description": "Acknowledgement of message received",
                "content": {
                    "application/json": {
                        "schema": {
                            "type" : "object",
                            "properties" : {
                                "context" : {
                                    "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                },
                                "message" : {
                                    "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_search/services

#### POST
##### Description:

Callback response to search

##### Request

```json
{
            "post": {
                "tags": [
                    "Beckn Provider Facing API"
                ],
                "description": "Callback response to search",
                "requestBody": {
                    "description": "TODO",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type" : "object",
                                "properties" : {
                                    "context" : {
                                        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                    },
                                    "message" : {
                                        "type" : "array",
                                        "items" : {
                                            "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/mobility_service.json"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Acknowledgement of message received",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type" : "object",
                                    "properties" : {
                                        "context" : {
                                            "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                        },
                                        "message" : {
                                            "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_select/service

#### POST
##### Description:

Callback response to select/service

##### Request

```json
{
            "post": {
                "tags": [
                    "Beckn Provider Facing API"
                ],
                "description": "Callback response to select/service",
                "requestBody": {
                    "description": "TODO",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type" : "object",
                                "properties" : {
                                    "context" : {
                                        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                    },
                                    "message" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/mobility_service.json"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Acknowledgement of message received",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type" : "object",
                                    "properties" : {
                                        "context" : {
                                            "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                        },
                                        "message" : {
                                            "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_confirm/service

#### POST
##### Description:

Callback response to confirm/service

##### Request

```json
{
            "post": {
                "tags": [
                    "Beckn Provider Facing API"
                ],
                "description": "Callback response to confirm/service",
                "requestBody": {
                    "description": "TODO",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type" : "object",
                                "properties" : {
                                    "context" : {
                                        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                    },
                                    "message" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/mobility_service.json"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Acknowledgement of message received",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type" : "object",
                                    "properties" : {
                                        "context" : {
                                            "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                        },
                                        "message" : {
                                            "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_track/trip

#### POST
##### Description:

Provide tracking info

```json
{
            "post": {
                "tags": [
                   "Beckn Provider Facing API"
                ],
                "description": "Provide tracking info",
                "requestBody": {
                    "description": "TODO",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type" : "object",
                                "properties" : {
                                    "context" : {
                                        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                    },
                                    "message" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/tracking.json"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Acknowledgement of message received",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type" : "object",
                                    "properties" : {
                                        "context" : {
                                            "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                        },
                                        "message" : {
                                            "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_cancel/Trip

#### POST
##### Description:

Response to cancel trip

##### Request

```json
{
            "post": {
                "tags": [
                   "Beckn Provider Facing API"
                ],
                "description": "Response to cancel trip",
                "requestBody": {
                    "description": "TODO",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type" : "object",
                                "properties" : {
                                    "context" : {
                                        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                    },
                                    "message" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/trip.json"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Acknowledgement of message received",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type" : "object",
                                    "properties" : {
                                        "context" : {
                                            "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                        },
                                        "message" : {
                                            "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_add/traveller

#### POST
##### Description:

Returns trip with added traveller

##### Request

```json
{
            "post": {
                "tags": [
                   "Beckn Provider Facing API"
                ],
                "description": "Returns trip with added traveller",
                "requestBody": {
                    "description": "TODO",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type" : "object",
                                "properties" : {
                                    "context" : {
                                        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                    },
                                    "message" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/trip.json"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Acknowledgement of message received",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type" : "object",
                                    "properties" : {
                                        "context" : {
                                            "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                        },
                                        "message" : {
                                            "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_remove/traveller

#### POST
##### Description:

Remove traveller from trip

##### Request

```json
{
            "post": {
                "tags": [
                   "Beckn Provider Facing API"
                ],
                "description": "Remove traveller from trip",
                "requestBody": {
                    "description": "TODO",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type" : "object",
                                "properties" : {
                                    "context" : {
                                        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                    },
                                    "message" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/trip.json"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Acknowledgement of message received",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type" : "object",
                                    "properties" : {
                                        "context" : {
                                            "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                        },
                                        "message" : {
                                            "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_update/traveller

#### POST
##### Description:

Remove traveller from trip

##### Request

```json
{
            "post": {
                "tags": [
                   "Beckn Provider Facing API"
                ],
                "description": "Remove traveller from trip",
                "requestBody": {
                    "description": "TODO",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type" : "object",
                                "properties" : {
                                    "context" : {
                                        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                    },
                                    "message" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/trip.json"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Acknowledgement of message received",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type" : "object",
                                    "properties" : {
                                        "context" : {
                                            "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                        },
                                        "message" : {
                                            "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_add/stop

#### POST
##### Description:

Updated trip with new stop

##### Request

```json
{
            "post": {
                "tags": [
                   "Beckn Provider Facing API"
                ],
                "description": "Updated trip with new stop",
                "requestBody": {
                    "description": "TODO",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type" : "object",
                                "properties" : {
                                    "context" : {
                                        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                    },
                                    "message" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/trip.json"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Acknowledgement of message received",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type" : "object",
                                    "properties" : {
                                        "context" : {
                                            "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                        },
                                        "message" : {
                                            "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_remove/stop

#### POST
##### Description:

Updated trip with removed stop

##### Request

```json
{
            "post": {
                "tags": [
                   "Beckn Provider Facing API"
                ],
                "description": "Updated trip with removed stop",
                "requestBody": {
                    "description": "TODO",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type" : "object",
                                "properties" : {
                                    "context" : {
                                        "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                    },
                                    "message" : {
                                        "$ref": "http://schema.beckn.org/mobility/schema/0.7.1/trip.json"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Acknowledgement of message received",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type" : "object",
                                    "properties" : {
                                        "context" : {
                                            "$ref" : "http://schema.beckn.org/core/schema/0.7.1/context.json"
                                        },
                                        "message" : {
                                            "$ref": "http://schema.beckn.org/core/schema/0.7.1/ack.json"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
```

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |
