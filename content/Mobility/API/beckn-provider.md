# Beckn Gateway API
API Spec for Beckn Gateway in Mobility Domain

## Version: 1.0

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