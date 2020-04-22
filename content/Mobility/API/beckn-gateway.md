# Beckn Gateway API
API Spec for Beckn Gateway in Mobility Domain

## Version: 0.7.1

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

### /confirm/service

#### POST
##### Description:

Confirm a Service. Equivalent to checkout operation

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /track/trip

#### POST
##### Description:

Track a Trip

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /cancel/Trip

#### POST
##### Description:

Cancel a Trip

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /add/traveller

#### POST
##### Description:

Select a Service and add items from the service catalog

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /remove/traveller

#### POST
##### Description:

Remove traveller from trip

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /update/traveller

#### POST
##### Description:

Remove traveller from trip

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /add/stop

#### POST
##### Description:

Adds a stop to a trip

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /remove/stop

#### POST
##### Description:

Remove a stop from a trip

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

### /on_track/trip

#### POST
##### Description:

Provide tracking info

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_cancel/Trip

#### POST
##### Description:

Response to cancel trip

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_add/traveller

#### POST
##### Description:

Returns trip with added traveller

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_remove/traveller

#### POST
##### Description:

Remove traveller from trip

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_update/traveller

#### POST
##### Description:

Remove traveller from trip

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_add/stop

#### POST
##### Description:

Updated trip with new stop

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_remove/stop

#### POST
##### Description:

Updated trip with removed stop

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |
