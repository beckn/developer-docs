# Beckn Provider API
API Spec for Beckn Provider

## Version: 0.7.1

### /search

#### POST
##### Description:

Search by intent

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /select

#### POST
##### Description:

Select the preferred service. This also allows selection of items from the catalog. Equivalent to selecting a service and adding items to cart.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /confirm

#### POST
##### Description:

Confirm a Service. Equivalent to checkout operation

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /track

#### POST
##### Description:

Track a service or and item

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /cancel

#### POST
##### Description:

Cancel a Service

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /complete

#### POST
##### Description:

Complete a service

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /add

#### POST
##### Description:

Add a runtime object to a collection within a service instance object

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /remove

#### POST
##### Description:

Add a runtime object to a collection within a service instance object

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /update

#### POST
##### Description:

Remove object

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |