# Beckn Gateway API
API Spec for Beckn Gateway

## Version: 0.7.1

### /on_search

#### POST
##### Description:

Callback response to search

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_select

#### POST
##### Description:

Callback response to select/service

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_confirm

#### POST
##### Description:

Callback response to confirm/service

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_track

#### POST
##### Description:

Provide tracking info

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_cancel

#### POST
##### Description:

Response to cancel service

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_add

#### POST
##### Description:

Returns updated service with added runtime object

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_remove

#### POST
##### Description:

Returns updated service with removed runtime object

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |

### /on_update

#### POST
##### Description:

Returns updated service with updated runtime object

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Acknowledgement of message received |