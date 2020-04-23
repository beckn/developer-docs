# Beckn Gateway API
API Spec for Beckn Gateway

## Version: 0.3.1

### /search/fnb_service

#### POST
##### Description:

Search by intent

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /select/fnb_service

#### POST
##### Description:

Select the preferred service. This also allows selection of items from the catalog. Equivalent to selecting a service and adding items to cart.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /confirm/fnb_service

#### POST
##### Description:

Confirm a Service. Equivalent to checkout operation

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /track/fnb_service

#### POST
##### Description:

Track a service or and item

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /cancel/fnb_service

#### POST
##### Description:

Cancel a Service

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /complete/fnb_service

#### POST
##### Description:

Complete a service

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /add/fnb_item

#### POST
##### Description:

Add a runtime object to a collection within a service instance object

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /remove/fnb_item

#### POST
##### Description:

Add a runtime object to a collection within a service instance object

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /update/fnb_item

#### POST
##### Description:

Remove object

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_search/fnb_service

#### POST
##### Description:

Callback response to search

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_select/fnb_service

#### POST
##### Description:

Callback response to select/service

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_confirm/fnb_service

#### POST
##### Description:

Callback response to confirm/service

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_track/fnb_service

#### POST
##### Description:

Provide tracking info

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_cancel/fnb_service

#### POST
##### Description:

Response to cancel service

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_add/fnb_item

#### POST
##### Description:

Returns updated service with added runtime object

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_remove/fnb_item

#### POST
##### Description:

Returns updated service with removed runtime object

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_update/fnb_item

#### POST
##### Description:

Returns updated service with updated runtime object

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |