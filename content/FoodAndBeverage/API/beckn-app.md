# Beckn Gateway API
API Spec for Beckn Gateway

## Version: 0.3.1

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