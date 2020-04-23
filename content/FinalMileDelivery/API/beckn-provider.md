# Beckn Provider API
Beckn Provider API spec for Final Mile Delivery domain

## Version: 0.5.1

### /search/services

#### POST
##### Description:

Searches for Services

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | TODO |

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

### /track/delivery

#### POST
##### Description:

Track a delivery

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /cancel/delivery

#### POST
##### Description:

Cancel a delivery

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /add/package

#### POST
##### Description:

Add package to a delivery

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /remove/package

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

Update package details

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |