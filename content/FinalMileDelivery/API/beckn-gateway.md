# Beckn Gateway API
Beckn Gateway API spec for Final Mile Delivery Domain

## Version: 0.5.1

### /search/services

#### POST
##### Description:

Searches for Services

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /select/service

#### POST
##### Description:

Select the preferred service. This also allows selection of items from the catalog. Equivalent to selecting a service and adding items to cart.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /confirm/delivery

#### POST
##### Description:

Confirm a delivery. Equivalent to checkout operation

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /track/delivery

#### POST
##### Description:

Track a Delivery

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /cancel/delivery

#### POST
##### Description:

Cancel a Delivery Service

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /add/packages

#### POST
##### Description:

Add packages to the delivery

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /remove/packages

#### POST
##### Description:

Remove package from delivery

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /update/package

#### POST
##### Description:

Remove traveller from trip

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_search/services

#### POST
##### Description:

Callback response to search

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_select/service

#### POST
##### Description:

Callback response to select/service

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_confirm/service

#### POST
##### Description:

Callback response to confirm/service

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_track/delivery

#### POST
##### Description:

Provide tracking info

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_cancel/delivery

#### POST
##### Description:

Response to cancel trip

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_add/package

#### POST
##### Description:

Returns trip with added traveller

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_remove/package

#### POST
##### Description:

Remove traveller from trip

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_update/package

#### POST
##### Description:

Remove traveller from trip

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |