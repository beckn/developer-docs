---
title: "0.9.1"
metaTitle: "Beckn for Developers"
metaDescription: "Documentation for developers of the Beckn ecosystem"
---

## Beckn Core API specification (v0.9.1)


# Authentication

* API Key (SubscriberAuth)
    - Parameter Name: **Authorization**, in: header. Signature of message body using BAP or BPP subscriber's signing public key.   For example:  <code>Authorization : Signature keyId='bap-example.com', signature='Base64(EdDSA-SHA512(requestBody))'</code>

* API Key (GatewaySubscriberAuth)
    - Parameter Name: **Proxy-Authorization**, in: header. Signature of message body + BAP/BPP's Authorization header using BG's signing public key. For example:  <code>Proxy-Authorization : Signature keyId='bg-example.com' headers='Authorization',signature='Base64(EdDSA-SHA512(requestBody)'</code>

<h1 id="beckn-core-api-beckn-provider-platform-bpp-">Beckn Provider Platform (BPP)</h1>

## /search


`POST /search`

Search for services by intent

<h3 id="post__search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|BAP searches for services|
|» context|body|[Context](#schema/context)|true|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|true|none|
|»» intent|body|[Intent](#schema/intent)|false|Intent of a user. Used for searching for services|
|»»» query_string|body|string|false|none|
|»»» provider|body|object|false|none|
|»»»» id|body|[Provider/properties/id](#schema/provider/properties/id)|false|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»» name|body|string|false|none|
|»»»»» code|body|string|false|none|
|»»»»» symbol|body|string|false|none|
|»»»»» short_desc|body|string|false|none|
|»»»»» long_desc|body|string|false|none|
|»»»»» images|body|[[Image](#schema/image)]|false|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|»»»»» audio|body|string(uri)|false|none|
|»»»»» 3d_render|body|string(uri)|false|none|
|»»»» locations|body|[object]|false|none|
|»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»» fulfillment|body|object|false|none|
|»»»» id|body|[Fulfillment/properties/id](#schema/fulfillment/properties/id)|false|Unique reference ID to the fulfillment of an order|
|»»»» start|body|object|false|none|
|»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» gps|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»»»» door|body|string|false|Door / Shop number of the address|
|»»»»»»» name|body|string|false|Name of address if applicable. Example, shop name|
|»»»»»»» building|body|string|false|Name of the building or block|
|»»»»»»» street|body|string|false|Street name or number|
|»»»»»»» locality|body|string|false|Name of the locality, apartments|
|»»»»»»» ward|body|string|false|Name or number of the ward if applicable|
|»»»»»»» city|body|string|false|City name|
|»»»»»»» state|body|string|false|State name|
|»»»»»»» country|body|string|false|Country name|
|»»»»»»» area_code|body|string|false|Area code. This can be Pincode, ZIP code or any equivalent|
|»»»»»» station_code|body|string|false|none|
|»»»»»» city|body|[City](#schema/city)|false|Describes a city|
|»»»»»»» name|body|string|false|Name of the city|
|»»»»»»» code|body|[City/properties/code](#schema/city/properties/code)|false|City code|
|»»»»»» country|body|[Country](#schema/country)|false|Describes a country.|
|»»»»»»» name|body|string|false|Name of the country|
|»»»»»»» code|body|[Country/properties/code](#schema/country/properties/code)|false|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»»»»»» circle|body|any|false|Describes a circular area on the map|
|»»»»»»» *anonymous*|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»» *anonymous*|body|object|false|none|
|»»»»»»»» radius|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»»»»» type|body|string|false|none|
|»»»»»»»»» value|body|number|true|none|
|»»»»»»»»» estimated_value|body|number|false|none|
|»»»»»»»»» computed_value|body|number|false|none|
|»»»»»»»»» range|body|object|false|none|
|»»»»»»»»»» min|body|number|false|none|
|»»»»»»»»»» max|body|number|false|none|
|»»»»»»»»» unit|body|string|true|none|
|»»»»»» polygon|body|string|false|none|
|»»»»»» 3dspace|body|string|false|none|
|»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»»» label|body|string|false|none|
|»»»»»» timestamp|body|string(date-time)|false|none|
|»»»»»» duration|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»»»»» range|body|object|false|none|
|»»»»»»» start|body|string(date-time)|false|none|
|»»»»»»» end|body|string(date-time)|false|none|
|»»»»»» days|body|string|false|comma separated values representing days of the week|
|»»»» end|body|object|false|none|
|»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»» tags|body|object|false|Describes a tag. This is a simple key-value store which is used to contain extended metadata|
|»»»»» **additionalProperties**|body|string|false|none|
|»»» payment|body|[Payment](#schema/payment)|false|Describes a payment|
|»»»» uri|body|string(uri)|false|A payment uri to be called by the BAP. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234|
|»»»» tl_method|body|string|false|none|
|»»»» params|body|object|false|none|
|»»»»» **additionalProperties**|body|string|false|none|
|»»»»» transaction_id|body|string|false|This value will be placed in the the $transaction_id url param in case of http/get and in the requestBody http/post requests|
|»»»»» amount|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» type|body|string|false|none|
|»»»» status|body|string|false|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»» category|body|[Category](#schema/category)|false|Describes a category|
|»»»» id|body|[Category/properties/id](#schema/category/properties/id)|false|Unique id of the category|
|»»»» parent_category_id|body|[Category/properties/id](#schema/category/properties/id)|false|Unique id of the category|
|»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»» offer|body|object|false|none|
|»»»» id|body|[Offer/properties/id](#schema/offer/properties/id)|false|none|
|»»»» descriptor|body|object|false|none|
|»»»»» name|body|string|false|none|
|»»» item|body|object|false|none|
|»»»» id|body|[Category/properties/id](#schema/category/properties/id)|false|Unique id of the category|
|»»»» descriptor|body|object|false|none|
|»»»»» name|body|string|false|none|
|»»»»» tags|body|object|false|Describes a tag. This is a simple key-value store which is used to contain extended metadata|
|»»» purpose|body|string|false|none|
|»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|


<h3 id="post__search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|


<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth & GatewaySubscriberAuth
</aside>

## /select



`POST /select`

Select items from the catalog and build your order

<h3 id="post__select-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|true|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|true|none|
|»» selected|body|object|true|none|
|»»» provider|body|object|true|none|
|»»»» id|body|[Provider/properties/id](#schema/provider/properties/id)|true|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|»»»» locations|body|[object]|true|none|
|»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|true|none|
|»»» items|body|[object]|true|none|
|»»»» id|body|[Item/properties/id](#schema/item/properties/id)(#/components/schemas/Item/properties/id)|true|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|»»»» quantity|body|[ItemQuantity/properties/selected](#schema/itemquantity/properties/selected)|true|none|
|»»»»» count|body|integer|false|none|
|»»»»» measure|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» type|body|string|false|none|
|»»»»»» value|body|number|true|none|
|»»»»»» estimated_value|body|number|false|none|
|»»»»»» computed_value|body|number|false|none|
|»»»»»» range|body|object|false|none|
|»»»»»»» min|body|number|false|none|
|»»»»»»» max|body|number|false|none|
|»»»»»» unit|body|string|true|none|
|»»» add_ons|body|[object]|false|none|
|»»»» id|body|[AddOn/properties/id](#schema/addon/properties/id)|true|ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR|
|»»» offers|body|[object]|false|none|
|»»»» id|body|[Offer/properties/id](#schema/offer/properties/id)|true|none|


<h3 id="post__select-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__select-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /init

`POST /init`

Initialize an order by providing billing and/or shipping details

<h3 id="post__init-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|true|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|true|none|
|»» order|body|object|true|none|
|»»» provider|body|object|true|none|
|»»»» id|body|[Provider/properties/id](#schema/provider/properties/id)|true|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|»»»» locations|body|[object]|true|none|
|»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|true|none|
|»»» items|body|[object]|true|none|
|»»»» id|body|[Item/properties/id](#schema/item/properties/id)(#/components/schemas/Item/properties/id)|true|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|»»»» quantity|body|[ItemQuantity/properties/selected](#schema/itemquantity/properties/selected)|true|none|
|»»»»» count|body|integer|false|none|
|»»»»» measure|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» type|body|string|false|none|
|»»»»»» value|body|number|true|none|
|»»»»»» estimated_value|body|number|false|none|
|»»»»»» computed_value|body|number|false|none|
|»»»»»» range|body|object|false|none|
|»»»»»»» min|body|number|false|none|
|»»»»»»» max|body|number|false|none|
|»»»»»» unit|body|string|true|none|
|»»» add_ons|body|[object]|true|none|
|»»»» id|body|[AddOn/properties/id](#schema/addon/properties/id)|true|ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR|
|»»» offers|body|[object]|true|none|
|»»»» id|body|[Offer/properties/id](#schema/offer/properties/id)|true|none|
|»»» billing|body|[Billing](#schema/billing)|true|Describes a billing event|
|»»»» name|body|string|true|Personal details of the customer needed for billing.|
|»»»» organization|body|[Organization](#schema/organization)|false|Describes an organization|
|»»»»» name|body|string|false|none|
|»»»»» cred|body|string|false|none|
|»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»» door|body|string|false|Door / Shop number of the address|
|»»»»» name|body|string|false|Name of address if applicable. Example, shop name|
|»»»»» building|body|string|false|Name of the building or block|
|»»»»» street|body|string|false|Street name or number|
|»»»»» locality|body|string|false|Name of the locality, apartments|
|»»»»» ward|body|string|false|Name or number of the ward if applicable|
|»»»»» city|body|string|false|City name|
|»»»»» state|body|string|false|State name|
|»»»»» country|body|string|false|Country name|
|»»»»» area_code|body|string|false|Area code. This can be Pincode, ZIP code or any equivalent|
|»»»» email|body|string(email)|false|none|
|»»»» phone|body|string|true|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» label|body|string|false|none|
|»»»»» timestamp|body|string(date-time)|false|none|
|»»»»» duration|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»»»» range|body|object|false|none|
|»»»»»» start|body|string(date-time)|false|none|
|»»»»»» end|body|string(date-time)|false|none|
|»»»»» days|body|string|false|comma separated values representing days of the week|
|»»»» tax_number|body|string|false|none|
|»»»» created_at|body|string(date-time)|false|none|
|»»»» updated_at|body|string(date-time)|false|none|
|»»» fulfillment|body|[Fulfillment](#schema/fulfillment)|true|Describes how a single product/service will be rendered/fulfilled to the end customer|
|»»»» id|body|[Fulfillment/properties/id](#schema/fulfillment/properties/id)|false|Unique reference ID to the fulfillment of an order|
|»»»» type|body|string|false|This describes the type of fulfillment|
|»»»» state|body|[State](#schema/state)|false|Describes a state|
|»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» name|body|string|false|none|
|»»»»»» code|body|string|false|none|
|»»»»»» symbol|body|string|false|none|
|»»»»»» short_desc|body|string|false|none|
|»»»»»» long_desc|body|string|false|none|
|»»»»»» images|body|[[Image](#schema/image)]|false|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|»»»»»» audio|body|string(uri)|false|none|
|»»»»»» 3d_render|body|string(uri)|false|none|
|»»»»» updated_at|body|string(date-time)|false|none|
|»»»»» updated_by|body|string|false|ID of entity which changed the state|
|»»»» tracking|body|boolean|false|Indicates whether the fulfillment allows tracking|
|»»»» agent|body|any|false|The person who fulfills the order|
|»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»» name|body|[Name](#schema/name)|false|Describes the name of a person|
|»»»»»»» full|body|string|false|Format: ./{honorific prefix}/{given_name}/{family_name}/{additional_name}/{call_sign}/{honorific_suffix}|
|»»»»»»» additional_name|body|string|false|An additional name for a Person, can be used for a middle name.|
|»»»»»»» family_name|body|string|false|Family name. In India, it is the last name of an Person. This can be used along with givenName instead of the name property.|
|»»»»»»» given_name|body|string|false|Given name. In India, it is the first name of a Person. This can be used along with familyName instead of the name property.|
|»»»»»»» call_sign|body|string|false|A callsign, as used in broadcasting and radio communications to identify people|
|»»»»»»» honorific_prefix|body|string|false|An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.|
|»»»»»»» honorific_suffix|body|string|false|An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.|
|»»»»»» image|body|[Image](#schema/image)|false|Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```|
|»»»»»» dob|body|string(date)|false|none|
|»»»»»» gender|body|string|false|Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender|
|»»»»»» cred|body|string|false|none|
|»»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»»»»» **additionalProperties**|body|string|false|none|
|»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»» phone|body|string|false|none|
|»»»»»» email|body|string|false|none|
|»»»»»» tags|body|object|false|Describes a tag. This is a simple key-value store which is used to contain extended metadata|
|»»»» vehicle|body|[Vehicle](#schema/vehicle)|false|Describes the properties of a vehicle used in a mobility service|
|»»»»» category|body|string|false|none|
|»»»»» capacity|body|integer|false|none|
|»»»»» make|body|string|false|none|
|»»»»» model|body|string|false|none|
|»»»»» size|body|string|false|none|
|»»»»» variant|body|string|false|none|
|»»»»» color|body|string|false|none|
|»»»»» energy_type|body|string|false|none|
|»»»»» registration|body|string|false|none|
|»»»» start|body|object|false|Details on the start of fulfillment|
|»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» gps|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»»» station_code|body|string|false|none|
|»»»»»» city|body|[City](#schema/city)|false|Describes a city|
|»»»»»»» name|body|string|false|Name of the city|
|»»»»»»» code|body|[City/properties/code](#schema/city/properties/code)|false|City code|
|»»»»»» country|body|[Country](#schema/country)|false|Describes a country.|
|»»»»»»» name|body|string|false|Name of the country|
|»»»»»»» code|body|[Country/properties/code](#schema/country/properties/code)|false|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»»»»»» circle|body|any|false|Describes a circular area on the map|
|»»»»»»» *anonymous*|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»» *anonymous*|body|object|false|none|
|»»»»»»»» radius|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» polygon|body|string|false|none|
|»»»»»» 3dspace|body|string|false|none|
|»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»» end|body|object|false|Details on the end of fulfillment|
|»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»» purpose|body|string|false|none|
|»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|

<h3 id="post__init-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__init-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|


<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /confirm

`POST /confirm`

Initialize an order by providing billing and/or shipping details

<h3 id="post__confirm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|true|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|true|none|
|»» order|body|[Order](#schema/order)|true|Describes the details of an order|
|»»» id|body|[Order/properties/id](#schema/order/properties/id)|false|Hash of order object without id|
|»»» state|body|string|false|none|
|»»» provider|body|object|true|none|
|»»»» id|body|[Provider/properties/id](#schema/provider/properties/id)|true|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|»»»» locations|body|[object]|true|none|
|»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|true|none|
|»»» items|body|[object]|true|none|
|»»»» id|body|[Item/properties/id](#schema/item/properties/id)(#/components/schemas/Item/properties/id)|true|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|»»»» quantity|body|[ItemQuantity/properties/selected](#schema/itemquantity/properties/selected)|true|none|
|»»»»» count|body|integer|false|none|
|»»»»» measure|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» type|body|string|false|none|
|»»»»»» value|body|number|true|none|
|»»»»»» estimated_value|body|number|false|none|
|»»»»»» computed_value|body|number|false|none|
|»»»»»» range|body|object|false|none|
|»»»»»»» min|body|number|false|none|
|»»»»»»» max|body|number|false|none|
|»»»»»» unit|body|string|true|none|
|»»» add_ons|body|[object]|true|none|
|»»»» id|body|[AddOn/properties/id](#schema/addon/properties/id)|true|ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR|
|»»» offers|body|[object]|true|none|
|»»»» id|body|[Offer/properties/id](#schema/offer/properties/id)|true|none|
|»»» billing|body|[Billing](#schema/billing)|true|Describes a billing event|
|»»»» name|body|string|true|Personal details of the customer needed for billing.|
|»»»» organization|body|[Organization](#schema/organization)|false|Describes an organization|
|»»»»» name|body|string|false|none|
|»»»»» cred|body|string|false|none|
|»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»» door|body|string|false|Door / Shop number of the address|
|»»»»» name|body|string|false|Name of address if applicable. Example, shop name|
|»»»»» building|body|string|false|Name of the building or block|
|»»»»» street|body|string|false|Street name or number|
|»»»»» locality|body|string|false|Name of the locality, apartments|
|»»»»» ward|body|string|false|Name or number of the ward if applicable|
|»»»»» city|body|string|false|City name|
|»»»»» state|body|string|false|State name|
|»»»»» country|body|string|false|Country name|
|»»»»» area_code|body|string|false|Area code. This can be Pincode, ZIP code or any equivalent|
|»»»» email|body|string(email)|false|none|
|»»»» phone|body|string|true|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» label|body|string|false|none|
|»»»»» timestamp|body|string(date-time)|false|none|
|»»»»» duration|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»»»» range|body|object|false|none|
|»»»»»» start|body|string(date-time)|false|none|
|»»»»»» end|body|string(date-time)|false|none|
|»»»»» days|body|string|false|comma separated values representing days of the week|
|»»»» tax_number|body|string|false|none|
|»»»» created_at|body|string(date-time)|false|none|
|»»»» updated_at|body|string(date-time)|false|none|
|»»» fulfillment|body|any|true|none|
|»»»» *anonymous*|body|[Fulfillment](#schema/fulfillment)|false|Describes how a single product/service will be rendered/fulfilled to the end customer|
|»»»»» id|body|[Fulfillment/properties/id](#schema/fulfillment/properties/id)|false|Unique reference ID to the fulfillment of an order|
|»»»»» type|body|string|false|This describes the type of fulfillment|
|»»»»» state|body|[State](#schema/state)|false|Describes a state|
|»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»»» name|body|string|false|none|
|»»»»»»» code|body|string|false|none|
|»»»»»»» symbol|body|string|false|none|
|»»»»»»» short_desc|body|string|false|none|
|»»»»»»» long_desc|body|string|false|none|
|»»»»»»» images|body|[[Image](#schema/image)]|false|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|»»»»»»» audio|body|string(uri)|false|none|
|»»»»»»» 3d_render|body|string(uri)|false|none|
|»»»»»» updated_at|body|string(date-time)|false|none|
|»»»»»» updated_by|body|string|false|ID of entity which changed the state|
|»»»»» tracking|body|boolean|false|Indicates whether the fulfillment allows tracking|
|»»»»» agent|body|any|false|The person who fulfills the order|
|»»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»»» name|body|[Name](#schema/name)|false|Describes the name of a person|
|»»»»»»»» full|body|string|false|Format: ./{honorific prefix}/{given_name}/{family_name}/{additional_name}/{call_sign}/{honorific_suffix}|
|»»»»»»»» additional_name|body|string|false|An additional name for a Person, can be used for a middle name.|
|»»»»»»»» family_name|body|string|false|Family name. In India, it is the last name of an Person. This can be used along with givenName instead of the name property.|
|»»»»»»»» given_name|body|string|false|Given name. In India, it is the first name of a Person. This can be used along with familyName instead of the name property.|
|»»»»»»»» call_sign|body|string|false|A callsign, as used in broadcasting and radio communications to identify people|
|»»»»»»»» honorific_prefix|body|string|false|An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.|
|»»»»»»»» honorific_suffix|body|string|false|An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.|
|»»»»»»» image|body|[Image](#schema/image)|false|Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```|
|»»»»»»» dob|body|string(date)|false|none|
|»»»»»»» gender|body|string|false|Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender|
|»»»»»»» cred|body|string|false|none|
|»»»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»»»»»» **additionalProperties**|body|string|false|none|
|»»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»»» phone|body|string|false|none|
|»»»»»»» email|body|string|false|none|
|»»»»»»» tags|body|object|false|Describes a tag. This is a simple key-value store which is used to contain extended metadata|
|»»»»» vehicle|body|[Vehicle](#schema/vehicle)|false|Describes the properties of a vehicle used in a mobility service|
|»»»»»» category|body|string|false|none|
|»»»»»» capacity|body|integer|false|none|
|»»»»»» make|body|string|false|none|
|»»»»»» model|body|string|false|none|
|»»»»»» size|body|string|false|none|
|»»»»»» variant|body|string|false|none|
|»»»»»» color|body|string|false|none|
|»»»»»» energy_type|body|string|false|none|
|»»»»»» registration|body|string|false|none|
|»»»»» start|body|object|false|Details on the start of fulfillment|
|»»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»»» gps|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»»»» station_code|body|string|false|none|
|»»»»»»» city|body|[City](#schema/city)|false|Describes a city|
|»»»»»»»» name|body|string|false|Name of the city|
|»»»»»»»» code|body|[City/properties/code](#schema/city/properties/code)|false|City code|
|»»»»»»» country|body|[Country](#schema/country)|false|Describes a country.|
|»»»»»»»» name|body|string|false|Name of the country|
|»»»»»»»» code|body|[Country/properties/code](#schema/country/properties/code)|false|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»»»»»»» circle|body|any|false|Describes a circular area on the map|
|»»»»»»»» *anonymous*|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»»» *anonymous*|body|object|false|none|
|»»»»»»»»» radius|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»»» polygon|body|string|false|none|
|»»»»»»» 3dspace|body|string|false|none|
|»»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»»» end|body|object|false|Details on the end of fulfillment|
|»»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»»» purpose|body|string|false|none|
|»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»» *anonymous*|body|object|false|none|
|»»»»» customer|body|any|true|none|
|»»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»» *anonymous*|body|object|false|none|
|»»» quote|body|[Quotation](#schema/quotation)|true|Describes a quote|
|»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»»» *anonymous*|body|[MonetaryValue](#schema/monetaryvalue)|false|Describes a monetary value used for exchange|
|»»»»»» currency|body|string|false|none|
|»»»»»» value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»» *anonymous*|body|object|false|none|
|»»»»»» estimated_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» computed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» listed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» offered_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» minimum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» maximum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» breakup|body|[object]|false|none|
|»»»»» type|body|string|false|none|
|»»»»» ref_id|body|string|false|none|
|»»»»» title|body|string|false|none|
|»»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»» payment|body|[Payment](#schema/payment)|true|Describes a payment|
|»»»» uri|body|string(uri)|false|A payment uri to be called by the BAP. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234|
|»»»» tl_method|body|string|false|none|
|»»»» params|body|object|false|none|
|»»»»» **additionalProperties**|body|string|false|none|
|»»»»» transaction_id|body|string|false|This value will be placed in the the $transaction_id url param in case of http/get and in the requestBody http/post requests|
|»»»»» amount|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» type|body|string|false|none|
|»»»» status|body|string|false|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»» created_at|body|string(date-time)|false|none|
|»»» updated_at|body|string(date-time)|false|none|


<h3 id="post__confirm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__confirm-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|


<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /status



`POST /status`

Fetch the latest order object

<h3 id="post__status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|true|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|true|none|
|»» order_id|body|[Order/properties/id](#schema/order/properties/id)|true|Hash of order object without id|


<h3 id="post__status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|


<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /track



`POST /track`

Track an active order

<h3 id="post__track-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|true|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|true|none|
|»» order_id|body|[Order/properties/id](#schema/order/properties/id)|true|Hash of order object without id|
|»» callback_url|body|string(uri)|false|none|


<h3 id="post__track-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__track-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|


<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /cancel

`POST /cancel`

Cancel an order

<h3 id="post__cancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|true|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|true|none|
|»» order_id|body|[Order/properties/id](#schema/order/properties/id)|true|Hash of order object without id|
|»» cancellation_reason_id|body|[Option/properties/id](#schema/option/properties/id)|true|none|
|»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»» name|body|string|false|none|
|»»» code|body|string|false|none|
|»»» symbol|body|string|false|none|
|»»» short_desc|body|string|false|none|
|»»» long_desc|body|string|false|none|
|»»» images|body|[[Image](#schema/image)]|false|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|»»» audio|body|string(uri)|false|none|
|»»» 3d_render|body|string(uri)|false|none|


<h3 id="post__cancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__cancel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|


<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /update

`POST /update`

Remove object

<h3 id="post__update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|true|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|true|none|
|»» update_target|body|string|true|Comma separated values of order objects being updated. For example: ```"update_target":"item,billing,fulfillment"```|
|»» order|body|[Order](#schema/order)|true|Describes the details of an order|
|»»» id|body|[Order/properties/id](#schema/order/properties/id)|false|Hash of order object without id|
|»»» state|body|string|false|none|
|»»» provider|body|object|true|none|
|»»»» id|body|[Provider/properties/id](#schema/provider/properties/id)|true|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|»»»» locations|body|[object]|true|none|
|»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|true|none|
|»»» items|body|[object]|true|none|
|»»»» id|body|[Item/properties/id](#schema/item/properties/id)(#/components/schemas/Item/properties/id)|true|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|»»»» quantity|body|[ItemQuantity/properties/selected](#schema/itemquantity/properties/selected)|true|none|
|»»»»» count|body|integer|false|none|
|»»»»» measure|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» type|body|string|false|none|
|»»»»»» value|body|number|true|none|
|»»»»»» estimated_value|body|number|false|none|
|»»»»»» computed_value|body|number|false|none|
|»»»»»» range|body|object|false|none|
|»»»»»»» min|body|number|false|none|
|»»»»»»» max|body|number|false|none|
|»»»»»» unit|body|string|true|none|
|»»» add_ons|body|[object]|true|none|
|»»»» id|body|[AddOn/properties/id](#schema/addon/properties/id)|true|ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR|
|»»» offers|body|[object]|true|none|
|»»»» id|body|[Offer/properties/id](#schema/offer/properties/id)|true|none|
|»»» billing|body|[Billing](#schema/billing)|true|Describes a billing event|
|»»»» name|body|string|true|Personal details of the customer needed for billing.|
|»»»» organization|body|[Organization](#schema/organization)|false|Describes an organization|
|»»»»» name|body|string|false|none|
|»»»»» cred|body|string|false|none|
|»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»» door|body|string|false|Door / Shop number of the address|
|»»»»» name|body|string|false|Name of address if applicable. Example, shop name|
|»»»»» building|body|string|false|Name of the building or block|
|»»»»» street|body|string|false|Street name or number|
|»»»»» locality|body|string|false|Name of the locality, apartments|
|»»»»» ward|body|string|false|Name or number of the ward if applicable|
|»»»»» city|body|string|false|City name|
|»»»»» state|body|string|false|State name|
|»»»»» country|body|string|false|Country name|
|»»»»» area_code|body|string|false|Area code. This can be Pincode, ZIP code or any equivalent|
|»»»» email|body|string(email)|false|none|
|»»»» phone|body|string|true|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» label|body|string|false|none|
|»»»»» timestamp|body|string(date-time)|false|none|
|»»»»» duration|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»»»» range|body|object|false|none|
|»»»»»» start|body|string(date-time)|false|none|
|»»»»»» end|body|string(date-time)|false|none|
|»»»»» days|body|string|false|comma separated values representing days of the week|
|»»»» tax_number|body|string|false|none|
|»»»» created_at|body|string(date-time)|false|none|
|»»»» updated_at|body|string(date-time)|false|none|
|»»» fulfillment|body|any|true|none|
|»»»» *anonymous*|body|[Fulfillment](#schema/fulfillment)|false|Describes how a single product/service will be rendered/fulfilled to the end customer|
|»»»»» id|body|[Fulfillment/properties/id](#schema/fulfillment/properties/id)|false|Unique reference ID to the fulfillment of an order|
|»»»»» type|body|string|false|This describes the type of fulfillment|
|»»»»» state|body|[State](#schema/state)|false|Describes a state|
|»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»»» name|body|string|false|none|
|»»»»»»» code|body|string|false|none|
|»»»»»»» symbol|body|string|false|none|
|»»»»»»» short_desc|body|string|false|none|
|»»»»»»» long_desc|body|string|false|none|
|»»»»»»» images|body|[[Image](#schema/image)]|false|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|»»»»»»» audio|body|string(uri)|false|none|
|»»»»»»» 3d_render|body|string(uri)|false|none|
|»»»»»» updated_at|body|string(date-time)|false|none|
|»»»»»» updated_by|body|string|false|ID of entity which changed the state|
|»»»»» tracking|body|boolean|false|Indicates whether the fulfillment allows tracking|
|»»»»» agent|body|any|false|The person who fulfills the order|
|»»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»»» name|body|[Name](#schema/name)|false|Describes the name of a person|
|»»»»»»»» full|body|string|false|Format: ./{honorific prefix}/{given_name}/{family_name}/{additional_name}/{call_sign}/{honorific_suffix}|
|»»»»»»»» additional_name|body|string|false|An additional name for a Person, can be used for a middle name.|
|»»»»»»»» family_name|body|string|false|Family name. In India, it is the last name of an Person. This can be used along with givenName instead of the name property.|
|»»»»»»»» given_name|body|string|false|Given name. In India, it is the first name of a Person. This can be used along with familyName instead of the name property.|
|»»»»»»»» call_sign|body|string|false|A callsign, as used in broadcasting and radio communications to identify people|
|»»»»»»»» honorific_prefix|body|string|false|An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.|
|»»»»»»»» honorific_suffix|body|string|false|An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.|
|»»»»»»» image|body|[Image](#schema/image)|false|Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```|
|»»»»»»» dob|body|string(date)|false|none|
|»»»»»»» gender|body|string|false|Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender|
|»»»»»»» cred|body|string|false|none|
|»»»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»»»»»» **additionalProperties**|body|string|false|none|
|»»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»»» phone|body|string|false|none|
|»»»»»»» email|body|string|false|none|
|»»»»»»» tags|body|object|false|Describes a tag. This is a simple key-value store which is used to contain extended metadata|
|»»»»» vehicle|body|[Vehicle](#schema/vehicle)|false|Describes the properties of a vehicle used in a mobility service|
|»»»»»» category|body|string|false|none|
|»»»»»» capacity|body|integer|false|none|
|»»»»»» make|body|string|false|none|
|»»»»»» model|body|string|false|none|
|»»»»»» size|body|string|false|none|
|»»»»»» variant|body|string|false|none|
|»»»»»» color|body|string|false|none|
|»»»»»» energy_type|body|string|false|none|
|»»»»»» registration|body|string|false|none|
|»»»»» start|body|object|false|Details on the start of fulfillment|
|»»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»»» gps|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»»»» station_code|body|string|false|none|
|»»»»»»» city|body|[City](#schema/city)|false|Describes a city|
|»»»»»»»» name|body|string|false|Name of the city|
|»»»»»»»» code|body|[City/properties/code](#schema/city/properties/code)|false|City code|
|»»»»»»» country|body|[Country](#schema/country)|false|Describes a country.|
|»»»»»»»» name|body|string|false|Name of the country|
|»»»»»»»» code|body|[Country/properties/code](#schema/country/properties/code)|false|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»»»»»»» circle|body|any|false|Describes a circular area on the map|
|»»»»»»»» *anonymous*|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»»» *anonymous*|body|object|false|none|
|»»»»»»»»» radius|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»»» polygon|body|string|false|none|
|»»»»»»» 3dspace|body|string|false|none|
|»»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»»» end|body|object|false|Details on the end of fulfillment|
|»»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»»» purpose|body|string|false|none|
|»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»» *anonymous*|body|object|false|none|
|»»»»» customer|body|any|true|none|
|»»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»» *anonymous*|body|object|false|none|
|»»» quote|body|[Quotation](#schema/quotation)|true|Describes a quote|
|»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»»» *anonymous*|body|[MonetaryValue](#schema/monetaryvalue)|false|Describes a monetary value used for exchange|
|»»»»»» currency|body|string|false|none|
|»»»»»» value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»» *anonymous*|body|object|false|none|
|»»»»»» estimated_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» computed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» listed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» offered_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» minimum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» maximum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» breakup|body|[object]|false|none|
|»»»»» type|body|string|false|none|
|»»»»» ref_id|body|string|false|none|
|»»»»» title|body|string|false|none|
|»»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»» payment|body|[Payment](#schema/payment)|true|Describes a payment|
|»»»» uri|body|string(uri)|false|A payment uri to be called by the BAP. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234|
|»»»» tl_method|body|string|false|none|
|»»»» params|body|object|false|none|
|»»»»» **additionalProperties**|body|string|false|none|
|»»»»» transaction_id|body|string|false|This value will be placed in the the $transaction_id url param in case of http/get and in the requestBody http/post requests|
|»»»»» amount|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» type|body|string|false|none|
|»»»» status|body|string|false|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»» created_at|body|string(date-time)|false|none|
|»»» updated_at|body|string(date-time)|false|none|


<h3 id="post__update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__update-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|


<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /rating

`POST /rating`

Provide feedback on a service

<h3 id="post__rating-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|true|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|true|none|
|»» id|body|string|true|ID of the item to be rated|
|»» value|body|integer|true|none|


<h3 id="post__rating-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__rating-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /support

`POST /support`

Contact support

<h3 id="post__support-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Signature|header|string|true|This contains the digital signature of the request body signed using the signing private key of the Subscriber|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|true|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|true|none|
|»» ref_id|body|string|false|ID of the element for which support is needed|

<h3 id="post__support-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__support-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

<h1 id="beckn-core-api-beckn-app-platform-bap-">Beckn App Platform (BAP)</h1>

## /on_search



`POST /on_search`

Send catalog

<h3 id="post__on_search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|false|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|false|none|
|»» catalog|body|[Catalog](#schema/catalog)|false|Describes a BPP catalog|
|»»» bpp|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»» name|body|string|false|none|
|»»»» code|body|string|false|none|
|»»»» symbol|body|string|false|none|
|»»»» short_desc|body|string|false|none|
|»»»» long_desc|body|string|false|none|
|»»»» images|body|[[Image](#schema/image)]|false|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|»»»» audio|body|string(uri)|false|none|
|»»»» 3d_render|body|string(uri)|false|none|
|»»» bpp|body|[[Category](#schema/category)]|false|[Describes a category]|
|»»»» id|body|[Category/properties/id](#schema/category/properties/id)|false|Unique id of the category|
|»»»» parent_category_id|body|[Category/properties/id](#schema/category/properties/id)|false|Unique id of the category|
|»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» label|body|string|false|none|
|»»»»» timestamp|body|string(date-time)|false|none|
|»»»»» duration|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»»»» range|body|object|false|none|
|»»»»»» start|body|string(date-time)|false|none|
|»»»»»» end|body|string(date-time)|false|none|
|»»»»» days|body|string|false|comma separated values representing days of the week|
|»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»»» **additionalProperties**|body|string|false|none|
|»»» bpp|body|[[Fulfillment](#schema/fulfillment)]|false|[Describes how a single product/service will be rendered/fulfilled to the end customer]|
|»»»» id|body|[Fulfillment/properties/id](#schema/fulfillment/properties/id)|false|Unique reference ID to the fulfillment of an order|
|»»»» type|body|string|false|This describes the type of fulfillment|
|»»»» state|body|[State](#schema/state)|false|Describes a state|
|»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»» updated_at|body|string(date-time)|false|none|
|»»»»» updated_by|body|string|false|ID of entity which changed the state|
|»»»» tracking|body|boolean|false|Indicates whether the fulfillment allows tracking|
|»»»» agent|body|any|false|The person who fulfills the order|
|»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»» name|body|[Name](#schema/name)|false|Describes the name of a person|
|»»»»»»» full|body|string|false|Format: ./{honorific prefix}/{given_name}/{family_name}/{additional_name}/{call_sign}/{honorific_suffix}|
|»»»»»»» additional_name|body|string|false|An additional name for a Person, can be used for a middle name.|
|»»»»»»» family_name|body|string|false|Family name. In India, it is the last name of an Person. This can be used along with givenName instead of the name property.|
|»»»»»»» given_name|body|string|false|Given name. In India, it is the first name of a Person. This can be used along with familyName instead of the name property.|
|»»»»»»» call_sign|body|string|false|A callsign, as used in broadcasting and radio communications to identify people|
|»»»»»»» honorific_prefix|body|string|false|An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.|
|»»»»»»» honorific_suffix|body|string|false|An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.|
|»»»»»» image|body|[Image](#schema/image)|false|Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```|
|»»»»»» dob|body|string(date)|false|none|
|»»»»»» gender|body|string|false|Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender|
|»»»»»» cred|body|string|false|none|
|»»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»» phone|body|string|false|none|
|»»»»»» email|body|string|false|none|
|»»»»»» tags|body|object|false|Describes a tag. This is a simple key-value store which is used to contain extended metadata|
|»»»» vehicle|body|[Vehicle](#schema/vehicle)|false|Describes the properties of a vehicle used in a mobility service|
|»»»»» category|body|string|false|none|
|»»»»» capacity|body|integer|false|none|
|»»»»» make|body|string|false|none|
|»»»»» model|body|string|false|none|
|»»»»» size|body|string|false|none|
|»»»»» variant|body|string|false|none|
|»»»»» color|body|string|false|none|
|»»»»» energy_type|body|string|false|none|
|»»»»» registration|body|string|false|none|
|»»»» start|body|object|false|Details on the start of fulfillment|
|»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» gps|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»»»» door|body|string|false|Door / Shop number of the address|
|»»»»»»» name|body|string|false|Name of address if applicable. Example, shop name|
|»»»»»»» building|body|string|false|Name of the building or block|
|»»»»»»» street|body|string|false|Street name or number|
|»»»»»»» locality|body|string|false|Name of the locality, apartments|
|»»»»»»» ward|body|string|false|Name or number of the ward if applicable|
|»»»»»»» city|body|string|false|City name|
|»»»»»»» state|body|string|false|State name|
|»»»»»»» country|body|string|false|Country name|
|»»»»»»» area_code|body|string|false|Area code. This can be Pincode, ZIP code or any equivalent|
|»»»»»» station_code|body|string|false|none|
|»»»»»» city|body|[City](#schema/city)|false|Describes a city|
|»»»»»»» name|body|string|false|Name of the city|
|»»»»»»» code|body|[City/properties/code](#schema/city/properties/code)|false|City code|
|»»»»»» country|body|[Country](#schema/country)|false|Describes a country.|
|»»»»»»» name|body|string|false|Name of the country|
|»»»»»»» code|body|[Country/properties/code](#schema/country/properties/code)|false|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»»»»»» circle|body|any|false|Describes a circular area on the map|
|»»»»»»» *anonymous*|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»» *anonymous*|body|object|false|none|
|»»»»»»»» radius|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»»»»» type|body|string|false|none|
|»»»»»»»»» value|body|number|true|none|
|»»»»»»»»» estimated_value|body|number|false|none|
|»»»»»»»»» computed_value|body|number|false|none|
|»»»»»»»»» range|body|object|false|none|
|»»»»»»»»»» min|body|number|false|none|
|»»»»»»»»»» max|body|number|false|none|
|»»»»»»»»» unit|body|string|true|none|
|»»»»»» polygon|body|string|false|none|
|»»»»»» 3dspace|body|string|false|none|
|»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»» end|body|object|false|Details on the end of fulfillment|
|»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»» purpose|body|string|false|none|
|»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»» bpp|body|[[Payment](#schema/payment)]|false|[Describes a payment]|
|»»»» uri|body|string(uri)|false|A payment uri to be called by the BAP. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234|
|»»»» tl_method|body|string|false|none|
|»»»» params|body|object|false|none|
|»»»»» **additionalProperties**|body|string|false|none|
|»»»»» transaction_id|body|string|false|This value will be placed in the the $transaction_id url param in case of http/get and in the requestBody http/post requests|
|»»»»» amount|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» type|body|string|false|none|
|»»»» status|body|string|false|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»» bpp|body|[[Offer](#schema/offer)]|false|[Describes an offer]|
|»»»» id|body|[Offer/properties/id](#schema/offer/properties/id)|false|none|
|»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»» location_ids|body|[[Location/properties/id](#schema/location/properties/id)]|false|none|
|»»»» category_ids|body|[[Category/properties/id](#schema/category/properties/id)]|false|[Unique id of the category]|
|»»»» item_ids|body|[[Item/properties/id](#schema/item/properties/id)]|false|[This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.]|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»» bpp|body|[allOf]|false|none|
|»»»» *anonymous*|body|[Provider](#schema/provider)|false|Describes a service provider. This can be a restaurant, a hospital, a Store etc|
|»»»»» id|body|[Provider/properties/id](#schema/provider/properties/id)|false|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» locations|body|[[Location](#schema/location)]|false|[Describes the location of a runtime object. Extension not allowed]|
|»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»» *anonymous*|body|[ProviderCatalog](#schema/providercatalog)|false|Describes a provider catalog|
|»»»»» categories|body|[[Category](#schema/category)]|false|[Describes a category]|
|»»»»» fulfillments|body|[[Fulfillment](#schema/fulfillment)]|false|[Describes how a single product/service will be rendered/fulfilled to the end customer]|
|»»»»» payments|body|[[Payment](#schema/payment)]|false|[Describes a payment]|
|»»»»» locations|body|[allOf]|false|none|
|»»»»»» *anonymous*|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»» *anonymous*|body|object|false|none|
|»»»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» offers|body|[[Offer](#schema/offer)]|false|[Describes an offer]|
|»»»»» items|body|[[Item](#schema/item)]|false|[Describes an item. Allows for domain extension.]|
|»»»»»» id|body|[Item/properties/id](#schema/item/properties/id)(#/components/schemas/Item/properties/id)|false|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|»»»»»» parent_item_id|body|[Item/properties/id](#schema/item/properties/id)(#/components/schemas/Item/properties/id)|false|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»»»»» *anonymous*|body|[MonetaryValue](#schema/monetaryvalue)|false|Describes a monetary value used for exchange|
|»»»»»»»» currency|body|string|false|none|
|»»»»»»»» value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»»» *anonymous*|body|object|false|none|
|»»»»»»»» estimated_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»»»» computed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»»»» listed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»»»» offered_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»»»» minimum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»»»» maximum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» category_id|body|[Category/properties/id](#schema/category/properties/id)|false|Unique id of the category|
|»»»»»» location_id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»»» matched|body|boolean|false|none|
|»»»»»» related|body|boolean|false|none|
|»»»»»» recommended|body|boolean|false|none|
|»»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»»» exp|body|string(date-time)|false|Time after which catalog has to be refreshed|
|»»» exp|body|string(date-time)|false|Time after which catalog has to be refreshed|
|» error|body|[Error](#schema/error)|false|Describes an error object|
|»» type|body|string|true|none|
|»» code|body|string|true|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|body|string|false|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|body|string|false|Human readable message descirbing the error|

<h3 id="post__on_search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__on_search-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|


<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth, GatewaySubscriberAuth
</aside>

## /on_select

`POST /on_select`

Send draft order object with quoted price for selected items

<h3 id="post__on_select-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|false|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|false|none|
|»» selected|body|object|false|none|
|»»» provider|body|[Provider](#schema/provider)|false|Describes a service provider. This can be a restaurant, a hospital, a Store etc|
|»»»» id|body|[Provider/properties/id](#schema/provider/properties/id)|false|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»» name|body|string|false|none|
|»»»»» code|body|string|false|none|
|»»»»» symbol|body|string|false|none|
|»»»»» short_desc|body|string|false|none|
|»»»»» long_desc|body|string|false|none|
|»»»»» images|body|[[Image](#schema/image)]|false|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|»»»»» audio|body|string(uri)|false|none|
|»»»»» 3d_render|body|string(uri)|false|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» label|body|string|false|none|
|»»»»» timestamp|body|string(date-time)|false|none|
|»»»»» duration|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»»»» range|body|object|false|none|
|»»»»»» start|body|string(date-time)|false|none|
|»»»»»» end|body|string(date-time)|false|none|
|»»»»» days|body|string|false|comma separated values representing days of the week|
|»»»» locations|body|[[Location](#schema/location)]|false|[Describes the location of a runtime object. Extension not allowed]|
|»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»» gps|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»»» door|body|string|false|Door / Shop number of the address|
|»»»»»» name|body|string|false|Name of address if applicable. Example, shop name|
|»»»»»» building|body|string|false|Name of the building or block|
|»»»»»» street|body|string|false|Street name or number|
|»»»»»» locality|body|string|false|Name of the locality, apartments|
|»»»»»» ward|body|string|false|Name or number of the ward if applicable|
|»»»»»» city|body|string|false|City name|
|»»»»»» state|body|string|false|State name|
|»»»»»» country|body|string|false|Country name|
|»»»»»» area_code|body|string|false|Area code. This can be Pincode, ZIP code or any equivalent|
|»»»»» station_code|body|string|false|none|
|»»»»» city|body|[City](#schema/city)|false|Describes a city|
|»»»»»» name|body|string|false|Name of the city|
|»»»»»» code|body|[City/properties/code](#schema/city/properties/code)|false|City code|
|»»»»» country|body|[Country](#schema/country)|false|Describes a country.|
|»»»»»» name|body|string|false|Name of the country|
|»»»»»» code|body|[Country/properties/code](#schema/country/properties/code)|false|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»»»»» circle|body|any|false|Describes a circular area on the map|
|»»»»»» *anonymous*|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»» *anonymous*|body|object|false|none|
|»»»»»»» radius|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»»»» type|body|string|false|none|
|»»»»»»»» value|body|number|true|none|
|»»»»»»»» estimated_value|body|number|false|none|
|»»»»»»»» computed_value|body|number|false|none|
|»»»»»»»» range|body|object|false|none|
|»»»»»»»»» min|body|number|false|none|
|»»»»»»»»» max|body|number|false|none|
|»»»»»»»» unit|body|string|true|none|
|»»»»» polygon|body|string|false|none|
|»»»»» 3dspace|body|string|false|none|
|»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»»» **additionalProperties**|body|string|false|none|
|»»» provider_location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»» items|body|[allOf]|false|none|
|»»»» *anonymous*|body|[Item](#schema/item)|false|Describes an item. Allows for domain extension.|
|»»»»» id|body|[Item/properties/id](#schema/item/properties/id)(#/components/schemas/Item/properties/id)|false|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|»»»»» parent_item_id|body|[Item/properties/id](#schema/item/properties/id)(#/components/schemas/Item/properties/id)|false|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»»»» *anonymous*|body|[MonetaryValue](#schema/monetaryvalue)|false|Describes a monetary value used for exchange|
|»»»»»»» currency|body|string|false|none|
|»»»»»»» value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» *anonymous*|body|object|false|none|
|»»»»»»» estimated_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»»» computed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»»» listed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»»» offered_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»»» minimum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»»» maximum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»» category_id|body|[Category/properties/id](#schema/category/properties/id)|false|Unique id of the category|
|»»»»» location_id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» matched|body|boolean|false|none|
|»»»»» related|body|boolean|false|none|
|»»»»» recommended|body|boolean|false|none|
|»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»» *anonymous*|body|object|false|none|
|»»»»» quantity|body|[ItemQuantity](#schema/itemquantity)|false|Describes count or amount of an item|
|»»»»»» allocated|body|object|false|none|
|»»»»»»» count|body|integer|false|none|
|»»»»»»» measure|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» available|body|object|false|none|
|»»»»»»» count|body|integer|false|none|
|»»»»»»» measure|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» maximum|body|object|false|none|
|»»»»»»» count|body|integer|false|none|
|»»»»»»» measure|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» minimum|body|object|false|none|
|»»»»»»» count|body|integer|false|none|
|»»»»»»» measure|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» selected|body|[ItemQuantity/properties/selected](#schema/itemquantity/properties/selected)|false|none|
|»»»»»»» count|body|integer|false|none|
|»»»»»»» measure|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»» add_ons|body|[[AddOn](#schema/addon)]|false|[Describes an add-on]|
|»»»» id|body|[AddOn/properties/id](#schema/addon/properties/id)|false|ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR|
|»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»» offers|body|[[Offer](#schema/offer)]|false|[Describes an offer]|
|»»»» id|body|[Offer/properties/id](#schema/offer/properties/id)|false|none|
|»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»» location_ids|body|[[Location/properties/id](#schema/location/properties/id)]|false|none|
|»»»» category_ids|body|[[Category/properties/id](#schema/category/properties/id)]|false|[Unique id of the category]|
|»»»» item_ids|body|[[Item/properties/id](#schema/item/properties/id)]|false|[This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.]|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»» quote|body|[Quotation](#schema/quotation)|false|Describes a quote|
|»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»» breakup|body|[object]|false|none|
|»»»»» type|body|string|false|none|
|»»»»» ref_id|body|string|false|none|
|»»»»» title|body|string|false|none|
|»»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» error|body|[Error](#schema/error)|false|Describes an error object|
|»» type|body|string|true|none|
|»» code|body|string|true|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|body|string|false|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|body|string|false|Human readable message descirbing the error|


<h3 id="post__on_select-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__on_select-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /on_init

`POST /on_init`

Send order object with payment details updated

<h3 id="post__on_init-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Proxy-Authorization|header|string|false|none|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|false|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|false|none|
|»» initialized|body|object|false|none|
|»»» provider|body|object|false|none|
|»»»» id|body|[Provider/properties/id](#schema/provider/properties/id)|false|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|»»» provider_location|body|object|false|none|
|»»»» id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»» items|body|[object]|false|none|
|»»»» id|body|[Item/properties/id](#schema/item/properties/id)(#/components/schemas/Item/properties/id)|false|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|»»»» quantity|body|[ItemQuantity/properties/selected](#schema/itemquantity/properties/selected)|false|none|
|»»»»» count|body|integer|false|none|
|»»»»» measure|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» type|body|string|false|none|
|»»»»»» value|body|number|true|none|
|»»»»»» estimated_value|body|number|false|none|
|»»»»»» computed_value|body|number|false|none|
|»»»»»» range|body|object|false|none|
|»»»»»»» min|body|number|false|none|
|»»»»»»» max|body|number|false|none|
|»»»»»» unit|body|string|true|none|
|»»» add_ons|body|[object]|false|none|
|»»»» id|body|[AddOn/properties/id](#schema/addon/properties/id)|false|ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR|
|»»» offers|body|[object]|false|none|
|»»»» id|body|[Offer/properties/id](#schema/offer/properties/id)|false|none|
|»»» billing|body|[Billing](#schema/billing)|false|Describes a billing event|
|»»»» name|body|string|true|Personal details of the customer needed for billing.|
|»»»» organization|body|[Organization](#schema/organization)|false|Describes an organization|
|»»»»» name|body|string|false|none|
|»»»»» cred|body|string|false|none|
|»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»» door|body|string|false|Door / Shop number of the address|
|»»»»» name|body|string|false|Name of address if applicable. Example, shop name|
|»»»»» building|body|string|false|Name of the building or block|
|»»»»» street|body|string|false|Street name or number|
|»»»»» locality|body|string|false|Name of the locality, apartments|
|»»»»» ward|body|string|false|Name or number of the ward if applicable|
|»»»»» city|body|string|false|City name|
|»»»»» state|body|string|false|State name|
|»»»»» country|body|string|false|Country name|
|»»»»» area_code|body|string|false|Area code. This can be Pincode, ZIP code or any equivalent|
|»»»» email|body|string(email)|false|none|
|»»»» phone|body|string|true|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» label|body|string|false|none|
|»»»»» timestamp|body|string(date-time)|false|none|
|»»»»» duration|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»»»» range|body|object|false|none|
|»»»»»» start|body|string(date-time)|false|none|
|»»»»»» end|body|string(date-time)|false|none|
|»»»»» days|body|string|false|comma separated values representing days of the week|
|»»»» tax_number|body|string|false|none|
|»»»» created_at|body|string(date-time)|false|none|
|»»»» updated_at|body|string(date-time)|false|none|
|»»» fulfillment|body|[Fulfillment](#schema/fulfillment)|false|Describes how a single product/service will be rendered/fulfilled to the end customer|
|»»»» id|body|[Fulfillment/properties/id](#schema/fulfillment/properties/id)|false|Unique reference ID to the fulfillment of an order|
|»»»» type|body|string|false|This describes the type of fulfillment|
|»»»» state|body|[State](#schema/state)|false|Describes a state|
|»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» name|body|string|false|none|
|»»»»»» code|body|string|false|none|
|»»»»»» symbol|body|string|false|none|
|»»»»»» short_desc|body|string|false|none|
|»»»»»» long_desc|body|string|false|none|
|»»»»»» images|body|[[Image](#schema/image)]|false|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|»»»»»» audio|body|string(uri)|false|none|
|»»»»»» 3d_render|body|string(uri)|false|none|
|»»»»» updated_at|body|string(date-time)|false|none|
|»»»»» updated_by|body|string|false|ID of entity which changed the state|
|»»»» tracking|body|boolean|false|Indicates whether the fulfillment allows tracking|
|»»»» agent|body|any|false|The person who fulfills the order|
|»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»» name|body|[Name](#schema/name)|false|Describes the name of a person|
|»»»»»»» full|body|string|false|Format: ./{honorific prefix}/{given_name}/{family_name}/{additional_name}/{call_sign}/{honorific_suffix}|
|»»»»»»» additional_name|body|string|false|An additional name for a Person, can be used for a middle name.|
|»»»»»»» family_name|body|string|false|Family name. In India, it is the last name of an Person. This can be used along with givenName instead of the name property.|
|»»»»»»» given_name|body|string|false|Given name. In India, it is the first name of a Person. This can be used along with familyName instead of the name property.|
|»»»»»»» call_sign|body|string|false|A callsign, as used in broadcasting and radio communications to identify people|
|»»»»»»» honorific_prefix|body|string|false|An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.|
|»»»»»»» honorific_suffix|body|string|false|An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.|
|»»»»»» image|body|[Image](#schema/image)|false|Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```|
|»»»»»» dob|body|string(date)|false|none|
|»»»»»» gender|body|string|false|Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender|
|»»»»»» cred|body|string|false|none|
|»»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»»»»» **additionalProperties**|body|string|false|none|
|»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»» phone|body|string|false|none|
|»»»»»» email|body|string|false|none|
|»»»»»» tags|body|object|false|Describes a tag. This is a simple key-value store which is used to contain extended metadata|
|»»»» vehicle|body|[Vehicle](#schema/vehicle)|false|Describes the properties of a vehicle used in a mobility service|
|»»»»» category|body|string|false|none|
|»»»»» capacity|body|integer|false|none|
|»»»»» make|body|string|false|none|
|»»»»» model|body|string|false|none|
|»»»»» size|body|string|false|none|
|»»»»» variant|body|string|false|none|
|»»»»» color|body|string|false|none|
|»»»»» energy_type|body|string|false|none|
|»»»»» registration|body|string|false|none|
|»»»» start|body|object|false|Details on the start of fulfillment|
|»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» gps|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»»» station_code|body|string|false|none|
|»»»»»» city|body|[City](#schema/city)|false|Describes a city|
|»»»»»»» name|body|string|false|Name of the city|
|»»»»»»» code|body|[City/properties/code](#schema/city/properties/code)|false|City code|
|»»»»»» country|body|[Country](#schema/country)|false|Describes a country.|
|»»»»»»» name|body|string|false|Name of the country|
|»»»»»»» code|body|[Country/properties/code](#schema/country/properties/code)|false|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»»»»»» circle|body|any|false|Describes a circular area on the map|
|»»»»»»» *anonymous*|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»» *anonymous*|body|object|false|none|
|»»»»»»»» radius|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» polygon|body|string|false|none|
|»»»»»» 3dspace|body|string|false|none|
|»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»» end|body|object|false|Details on the end of fulfillment|
|»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»» purpose|body|string|false|none|
|»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»» quote|body|[Quotation](#schema/quotation)|false|Describes a quote|
|»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»»» *anonymous*|body|[MonetaryValue](#schema/monetaryvalue)|false|Describes a monetary value used for exchange|
|»»»»»» currency|body|string|false|none|
|»»»»»» value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»» *anonymous*|body|object|false|none|
|»»»»»» estimated_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» computed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» listed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» offered_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» minimum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» maximum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» breakup|body|[object]|false|none|
|»»»»» type|body|string|false|none|
|»»»»» ref_id|body|string|false|none|
|»»»»» title|body|string|false|none|
|»»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»» payment|body|[Payment](#schema/payment)|false|Describes a payment|
|»»»» uri|body|string(uri)|false|A payment uri to be called by the BAP. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234|
|»»»» tl_method|body|string|false|none|
|»»»» params|body|object|false|none|
|»»»»» **additionalProperties**|body|string|false|none|
|»»»»» transaction_id|body|string|false|This value will be placed in the the $transaction_id url param in case of http/get and in the requestBody http/post requests|
|»»»»» amount|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» type|body|string|false|none|
|»»»» status|body|string|false|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|» error|body|[Error](#schema/error)|false|Describes an error object|
|»» type|body|string|true|none|
|»» code|body|string|true|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|body|string|false|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|body|string|false|Human readable message descirbing the error|

<h3 id="post__on_init-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__on_init-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|


<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /on_confirm

`POST /on_confirm`

Send active order object

<h3 id="post__on_confirm-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|false|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|false|none|
|»» order|body|[Order](#schema/order)|false|Describes the details of an order|
|»»» id|body|[Order/properties/id](#schema/order/properties/id)|false|Hash of order object without id|
|»»» state|body|string|false|none|
|»»» provider|body|object|true|none|
|»»»» id|body|[Provider/properties/id](#schema/provider/properties/id)|true|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|»»»» locations|body|[object]|true|none|
|»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|true|none|
|»»» items|body|[object]|true|none|
|»»»» id|body|[Item/properties/id](#schema/item/properties/id)(#/components/schemas/Item/properties/id)|true|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|»»»» quantity|body|[ItemQuantity/properties/selected](#schema/itemquantity/properties/selected)|true|none|
|»»»»» count|body|integer|false|none|
|»»»»» measure|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» type|body|string|false|none|
|»»»»»» value|body|number|true|none|
|»»»»»» estimated_value|body|number|false|none|
|»»»»»» computed_value|body|number|false|none|
|»»»»»» range|body|object|false|none|
|»»»»»»» min|body|number|false|none|
|»»»»»»» max|body|number|false|none|
|»»»»»» unit|body|string|true|none|
|»»» add_ons|body|[object]|true|none|
|»»»» id|body|[AddOn/properties/id](#schema/addon/properties/id)|true|ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR|
|»»» offers|body|[object]|true|none|
|»»»» id|body|[Offer/properties/id](#schema/offer/properties/id)|true|none|
|»»» billing|body|[Billing](#schema/billing)|true|Describes a billing event|
|»»»» name|body|string|true|Personal details of the customer needed for billing.|
|»»»» organization|body|[Organization](#schema/organization)|false|Describes an organization|
|»»»»» name|body|string|false|none|
|»»»»» cred|body|string|false|none|
|»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»» door|body|string|false|Door / Shop number of the address|
|»»»»» name|body|string|false|Name of address if applicable. Example, shop name|
|»»»»» building|body|string|false|Name of the building or block|
|»»»»» street|body|string|false|Street name or number|
|»»»»» locality|body|string|false|Name of the locality, apartments|
|»»»»» ward|body|string|false|Name or number of the ward if applicable|
|»»»»» city|body|string|false|City name|
|»»»»» state|body|string|false|State name|
|»»»»» country|body|string|false|Country name|
|»»»»» area_code|body|string|false|Area code. This can be Pincode, ZIP code or any equivalent|
|»»»» email|body|string(email)|false|none|
|»»»» phone|body|string|true|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» label|body|string|false|none|
|»»»»» timestamp|body|string(date-time)|false|none|
|»»»»» duration|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»»»» range|body|object|false|none|
|»»»»»» start|body|string(date-time)|false|none|
|»»»»»» end|body|string(date-time)|false|none|
|»»»»» days|body|string|false|comma separated values representing days of the week|
|»»»» tax_number|body|string|false|none|
|»»»» created_at|body|string(date-time)|false|none|
|»»»» updated_at|body|string(date-time)|false|none|
|»»» fulfillment|body|any|true|none|
|»»»» *anonymous*|body|[Fulfillment](#schema/fulfillment)|false|Describes how a single product/service will be rendered/fulfilled to the end customer|
|»»»»» id|body|[Fulfillment/properties/id](#schema/fulfillment/properties/id)|false|Unique reference ID to the fulfillment of an order|
|»»»»» type|body|string|false|This describes the type of fulfillment|
|»»»»» state|body|[State](#schema/state)|false|Describes a state|
|»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»»» name|body|string|false|none|
|»»»»»»» code|body|string|false|none|
|»»»»»»» symbol|body|string|false|none|
|»»»»»»» short_desc|body|string|false|none|
|»»»»»»» long_desc|body|string|false|none|
|»»»»»»» images|body|[[Image](#schema/image)]|false|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|»»»»»»» audio|body|string(uri)|false|none|
|»»»»»»» 3d_render|body|string(uri)|false|none|
|»»»»»» updated_at|body|string(date-time)|false|none|
|»»»»»» updated_by|body|string|false|ID of entity which changed the state|
|»»»»» tracking|body|boolean|false|Indicates whether the fulfillment allows tracking|
|»»»»» agent|body|any|false|The person who fulfills the order|
|»»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»»» name|body|[Name](#schema/name)|false|Describes the name of a person|
|»»»»»»»» full|body|string|false|Format: ./{honorific prefix}/{given_name}/{family_name}/{additional_name}/{call_sign}/{honorific_suffix}|
|»»»»»»»» additional_name|body|string|false|An additional name for a Person, can be used for a middle name.|
|»»»»»»»» family_name|body|string|false|Family name. In India, it is the last name of an Person. This can be used along with givenName instead of the name property.|
|»»»»»»»» given_name|body|string|false|Given name. In India, it is the first name of a Person. This can be used along with familyName instead of the name property.|
|»»»»»»»» call_sign|body|string|false|A callsign, as used in broadcasting and radio communications to identify people|
|»»»»»»»» honorific_prefix|body|string|false|An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.|
|»»»»»»»» honorific_suffix|body|string|false|An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.|
|»»»»»»» image|body|[Image](#schema/image)|false|Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```|
|»»»»»»» dob|body|string(date)|false|none|
|»»»»»»» gender|body|string|false|Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender|
|»»»»»»» cred|body|string|false|none|
|»»»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»»»»»» **additionalProperties**|body|string|false|none|
|»»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»»» phone|body|string|false|none|
|»»»»»»» email|body|string|false|none|
|»»»»»»» tags|body|object|false|Describes a tag. This is a simple key-value store which is used to contain extended metadata|
|»»»»» vehicle|body|[Vehicle](#schema/vehicle)|false|Describes the properties of a vehicle used in a mobility service|
|»»»»»» category|body|string|false|none|
|»»»»»» capacity|body|integer|false|none|
|»»»»»» make|body|string|false|none|
|»»»»»» model|body|string|false|none|
|»»»»»» size|body|string|false|none|
|»»»»»» variant|body|string|false|none|
|»»»»»» color|body|string|false|none|
|»»»»»» energy_type|body|string|false|none|
|»»»»»» registration|body|string|false|none|
|»»»»» start|body|object|false|Details on the start of fulfillment|
|»»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»»» gps|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»»»» station_code|body|string|false|none|
|»»»»»»» city|body|[City](#schema/city)|false|Describes a city|
|»»»»»»»» name|body|string|false|Name of the city|
|»»»»»»»» code|body|[City/properties/code](#schema/city/properties/code)|false|City code|
|»»»»»»» country|body|[Country](#schema/country)|false|Describes a country.|
|»»»»»»»» name|body|string|false|Name of the country|
|»»»»»»»» code|body|[Country/properties/code](#schema/country/properties/code)|false|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»»»»»»» circle|body|any|false|Describes a circular area on the map|
|»»»»»»»» *anonymous*|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»»» *anonymous*|body|object|false|none|
|»»»»»»»»» radius|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»»» polygon|body|string|false|none|
|»»»»»»» 3dspace|body|string|false|none|
|»»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»»» end|body|object|false|Details on the end of fulfillment|
|»»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»»» purpose|body|string|false|none|
|»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»» *anonymous*|body|object|false|none|
|»»»»» customer|body|any|true|none|
|»»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»» *anonymous*|body|object|false|none|
|»»» quote|body|[Quotation](#schema/quotation)|true|Describes a quote|
|»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»»» *anonymous*|body|[MonetaryValue](#schema/monetaryvalue)|false|Describes a monetary value used for exchange|
|»»»»»» currency|body|string|false|none|
|»»»»»» value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»» *anonymous*|body|object|false|none|
|»»»»»» estimated_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» computed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» listed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» offered_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» minimum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» maximum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» breakup|body|[object]|false|none|
|»»»»» type|body|string|false|none|
|»»»»» ref_id|body|string|false|none|
|»»»»» title|body|string|false|none|
|»»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»» payment|body|[Payment](#schema/payment)|true|Describes a payment|
|»»»» uri|body|string(uri)|false|A payment uri to be called by the BAP. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234|
|»»»» tl_method|body|string|false|none|
|»»»» params|body|object|false|none|
|»»»»» **additionalProperties**|body|string|false|none|
|»»»»» transaction_id|body|string|false|This value will be placed in the the $transaction_id url param in case of http/get and in the requestBody http/post requests|
|»»»»» amount|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» type|body|string|false|none|
|»»»» status|body|string|false|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»» created_at|body|string(date-time)|false|none|
|»»» updated_at|body|string(date-time)|false|none|
|» error|body|[Error](#schema/error)|false|Describes an error object|
|»» type|body|string|true|none|
|»» code|body|string|true|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|body|string|false|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|body|string|false|Human readable message descirbing the error|

<h3 id="post__on_confirm-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__on_confirm-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|


<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /on_track

`POST /on_track`

Send tracking details of an active order

<h3 id="post__on_track-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|false|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|false|none|
|»» tracking|body|[Tracking](#schema/tracking)|false|Describes the tracking info of an object|
|»»» tl_method|body|string|false|none|
|»»» url|body|string(uri)|false|none|
|»»» status|body|string|false|none|
|» error|body|[Error](#schema/error)|false|Describes an error object|
|»» type|body|string|true|none|
|»» code|body|string|true|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|body|string|false|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|body|string|false|Human readable message descirbing the error|

<h3 id="post__on_track-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__on_track-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|


## /on_cancel

`POST /on_cancel`

Send cancellation request_id with reasons list in case of cancellation request. Else send cancelled order object

<h3 id="post__on_cancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|false|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|false|none|
|»» order|body|[Order](#schema/order)|false|Describes the details of an order|
|»»» id|body|[Order/properties/id](#schema/order/properties/id)|false|Hash of order object without id|
|»»» state|body|string|false|none|
|»»» provider|body|object|true|none|
|»»»» id|body|[Provider/properties/id](#schema/provider/properties/id)|true|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|»»»» locations|body|[object]|true|none|
|»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|true|none|
|»»» items|body|[object]|true|none|
|»»»» id|body|[Item/properties/id](#schema/item/properties/id)(#/components/schemas/Item/properties/id)|true|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|»»»» quantity|body|[ItemQuantity/properties/selected](#schema/itemquantity/properties/selected)|true|none|
|»»»»» count|body|integer|false|none|
|»»»»» measure|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» type|body|string|false|none|
|»»»»»» value|body|number|true|none|
|»»»»»» estimated_value|body|number|false|none|
|»»»»»» computed_value|body|number|false|none|
|»»»»»» range|body|object|false|none|
|»»»»»»» min|body|number|false|none|
|»»»»»»» max|body|number|false|none|
|»»»»»» unit|body|string|true|none|
|»»» add_ons|body|[object]|true|none|
|»»»» id|body|[AddOn/properties/id](#schema/addon/properties/id)|true|ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR|
|»»» offers|body|[object]|true|none|
|»»»» id|body|[Offer/properties/id](#schema/offer/properties/id)|true|none|
|»»» billing|body|[Billing](#schema/billing)|true|Describes a billing event|
|»»»» name|body|string|true|Personal details of the customer needed for billing.|
|»»»» organization|body|[Organization](#schema/organization)|false|Describes an organization|
|»»»»» name|body|string|false|none|
|»»»»» cred|body|string|false|none|
|»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»» door|body|string|false|Door / Shop number of the address|
|»»»»» name|body|string|false|Name of address if applicable. Example, shop name|
|»»»»» building|body|string|false|Name of the building or block|
|»»»»» street|body|string|false|Street name or number|
|»»»»» locality|body|string|false|Name of the locality, apartments|
|»»»»» ward|body|string|false|Name or number of the ward if applicable|
|»»»»» city|body|string|false|City name|
|»»»»» state|body|string|false|State name|
|»»»»» country|body|string|false|Country name|
|»»»»» area_code|body|string|false|Area code. This can be Pincode, ZIP code or any equivalent|
|»»»» email|body|string(email)|false|none|
|»»»» phone|body|string|true|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» label|body|string|false|none|
|»»»»» timestamp|body|string(date-time)|false|none|
|»»»»» duration|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»»»» range|body|object|false|none|
|»»»»»» start|body|string(date-time)|false|none|
|»»»»»» end|body|string(date-time)|false|none|
|»»»»» days|body|string|false|comma separated values representing days of the week|
|»»»» tax_number|body|string|false|none|
|»»»» created_at|body|string(date-time)|false|none|
|»»»» updated_at|body|string(date-time)|false|none|
|»»» fulfillment|body|any|true|none|
|»»»» *anonymous*|body|[Fulfillment](#schema/fulfillment)|false|Describes how a single product/service will be rendered/fulfilled to the end customer|
|»»»»» id|body|[Fulfillment/properties/id](#schema/fulfillment/properties/id)|false|Unique reference ID to the fulfillment of an order|
|»»»»» type|body|string|false|This describes the type of fulfillment|
|»»»»» state|body|[State](#schema/state)|false|Describes a state|
|»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»»» name|body|string|false|none|
|»»»»»»» code|body|string|false|none|
|»»»»»»» symbol|body|string|false|none|
|»»»»»»» short_desc|body|string|false|none|
|»»»»»»» long_desc|body|string|false|none|
|»»»»»»» images|body|[[Image](#schema/image)]|false|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|»»»»»»» audio|body|string(uri)|false|none|
|»»»»»»» 3d_render|body|string(uri)|false|none|
|»»»»»» updated_at|body|string(date-time)|false|none|
|»»»»»» updated_by|body|string|false|ID of entity which changed the state|
|»»»»» tracking|body|boolean|false|Indicates whether the fulfillment allows tracking|
|»»»»» agent|body|any|false|The person who fulfills the order|
|»»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»»» name|body|[Name](#schema/name)|false|Describes the name of a person|
|»»»»»»»» full|body|string|false|Format: ./{honorific prefix}/{given_name}/{family_name}/{additional_name}/{call_sign}/{honorific_suffix}|
|»»»»»»»» additional_name|body|string|false|An additional name for a Person, can be used for a middle name.|
|»»»»»»»» family_name|body|string|false|Family name. In India, it is the last name of an Person. This can be used along with givenName instead of the name property.|
|»»»»»»»» given_name|body|string|false|Given name. In India, it is the first name of a Person. This can be used along with familyName instead of the name property.|
|»»»»»»»» call_sign|body|string|false|A callsign, as used in broadcasting and radio communications to identify people|
|»»»»»»»» honorific_prefix|body|string|false|An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.|
|»»»»»»»» honorific_suffix|body|string|false|An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.|
|»»»»»»» image|body|[Image](#schema/image)|false|Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```|
|»»»»»»» dob|body|string(date)|false|none|
|»»»»»»» gender|body|string|false|Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender|
|»»»»»»» cred|body|string|false|none|
|»»»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»»»»»» **additionalProperties**|body|string|false|none|
|»»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»»» phone|body|string|false|none|
|»»»»»»» email|body|string|false|none|
|»»»»»»» tags|body|object|false|Describes a tag. This is a simple key-value store which is used to contain extended metadata|
|»»»»» vehicle|body|[Vehicle](#schema/vehicle)|false|Describes the properties of a vehicle used in a mobility service|
|»»»»»» category|body|string|false|none|
|»»»»»» capacity|body|integer|false|none|
|»»»»»» make|body|string|false|none|
|»»»»»» model|body|string|false|none|
|»»»»»» size|body|string|false|none|
|»»»»»» variant|body|string|false|none|
|»»»»»» color|body|string|false|none|
|»»»»»» energy_type|body|string|false|none|
|»»»»»» registration|body|string|false|none|
|»»»»» start|body|object|false|Details on the start of fulfillment|
|»»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»»» gps|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»»»» station_code|body|string|false|none|
|»»»»»»» city|body|[City](#schema/city)|false|Describes a city|
|»»»»»»»» name|body|string|false|Name of the city|
|»»»»»»»» code|body|[City/properties/code](#schema/city/properties/code)|false|City code|
|»»»»»»» country|body|[Country](#schema/country)|false|Describes a country.|
|»»»»»»»» name|body|string|false|Name of the country|
|»»»»»»»» code|body|[Country/properties/code](#schema/country/properties/code)|false|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»»»»»»» circle|body|any|false|Describes a circular area on the map|
|»»»»»»»» *anonymous*|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»»» *anonymous*|body|object|false|none|
|»»»»»»»»» radius|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»»» polygon|body|string|false|none|
|»»»»»»» 3dspace|body|string|false|none|
|»»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»»» end|body|object|false|Details on the end of fulfillment|
|»»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»»» purpose|body|string|false|none|
|»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»» *anonymous*|body|object|false|none|
|»»»»» customer|body|any|true|none|
|»»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»» *anonymous*|body|object|false|none|
|»»» quote|body|[Quotation](#schema/quotation)|true|Describes a quote|
|»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»»» *anonymous*|body|[MonetaryValue](#schema/monetaryvalue)|false|Describes a monetary value used for exchange|
|»»»»»» currency|body|string|false|none|
|»»»»»» value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»» *anonymous*|body|object|false|none|
|»»»»»» estimated_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» computed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» listed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» offered_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» minimum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» maximum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» breakup|body|[object]|false|none|
|»»»»» type|body|string|false|none|
|»»»»» ref_id|body|string|false|none|
|»»»»» title|body|string|false|none|
|»»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»» payment|body|[Payment](#schema/payment)|true|Describes a payment|
|»»»» uri|body|string(uri)|false|A payment uri to be called by the BAP. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234|
|»»»» tl_method|body|string|false|none|
|»»»» params|body|object|false|none|
|»»»»» **additionalProperties**|body|string|false|none|
|»»»»» transaction_id|body|string|false|This value will be placed in the the $transaction_id url param in case of http/get and in the requestBody http/post requests|
|»»»»» amount|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» type|body|string|false|none|
|»»»» status|body|string|false|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»» created_at|body|string(date-time)|false|none|
|»»» updated_at|body|string(date-time)|false|none|
|» error|body|[Error](#schema/error)|false|Describes an error object|
|»» type|body|string|true|none|
|»» code|body|string|true|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|body|string|false|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|body|string|false|Human readable message descirbing the error|


<h3 id="post__on_cancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__on_cancel-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|


<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /on_update

`POST /on_update`

Returns updated service with updated runtime object

<h3 id="post__on_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|false|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|false|none|
|»» order|body|[Order](#schema/order)|false|Describes the details of an order|
|»»» id|body|[Order/properties/id](#schema/order/properties/id)|false|Hash of order object without id|
|»»» state|body|string|false|none|
|»»» provider|body|object|true|none|
|»»»» id|body|[Provider/properties/id](#schema/provider/properties/id)|true|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|»»»» locations|body|[object]|true|none|
|»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|true|none|
|»»» items|body|[object]|true|none|
|»»»» id|body|[Item/properties/id](#schema/item/properties/id)(#/components/schemas/Item/properties/id)|true|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|»»»» quantity|body|[ItemQuantity/properties/selected](#schema/itemquantity/properties/selected)|true|none|
|»»»»» count|body|integer|false|none|
|»»»»» measure|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» type|body|string|false|none|
|»»»»»» value|body|number|true|none|
|»»»»»» estimated_value|body|number|false|none|
|»»»»»» computed_value|body|number|false|none|
|»»»»»» range|body|object|false|none|
|»»»»»»» min|body|number|false|none|
|»»»»»»» max|body|number|false|none|
|»»»»»» unit|body|string|true|none|
|»»» add_ons|body|[object]|true|none|
|»»»» id|body|[AddOn/properties/id](#schema/addon/properties/id)|true|ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR|
|»»» offers|body|[object]|true|none|
|»»»» id|body|[Offer/properties/id](#schema/offer/properties/id)|true|none|
|»»» billing|body|[Billing](#schema/billing)|true|Describes a billing event|
|»»»» name|body|string|true|Personal details of the customer needed for billing.|
|»»»» organization|body|[Organization](#schema/organization)|false|Describes an organization|
|»»»»» name|body|string|false|none|
|»»»»» cred|body|string|false|none|
|»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»» door|body|string|false|Door / Shop number of the address|
|»»»»» name|body|string|false|Name of address if applicable. Example, shop name|
|»»»»» building|body|string|false|Name of the building or block|
|»»»»» street|body|string|false|Street name or number|
|»»»»» locality|body|string|false|Name of the locality, apartments|
|»»»»» ward|body|string|false|Name or number of the ward if applicable|
|»»»»» city|body|string|false|City name|
|»»»»» state|body|string|false|State name|
|»»»»» country|body|string|false|Country name|
|»»»»» area_code|body|string|false|Area code. This can be Pincode, ZIP code or any equivalent|
|»»»» email|body|string(email)|false|none|
|»»»» phone|body|string|true|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» label|body|string|false|none|
|»»»»» timestamp|body|string(date-time)|false|none|
|»»»»» duration|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»»»» range|body|object|false|none|
|»»»»»» start|body|string(date-time)|false|none|
|»»»»»» end|body|string(date-time)|false|none|
|»»»»» days|body|string|false|comma separated values representing days of the week|
|»»»» tax_number|body|string|false|none|
|»»»» created_at|body|string(date-time)|false|none|
|»»»» updated_at|body|string(date-time)|false|none|
|»»» fulfillment|body|any|true|none|
|»»»» *anonymous*|body|[Fulfillment](#schema/fulfillment)|false|Describes how a single product/service will be rendered/fulfilled to the end customer|
|»»»»» id|body|[Fulfillment/properties/id](#schema/fulfillment/properties/id)|false|Unique reference ID to the fulfillment of an order|
|»»»»» type|body|string|false|This describes the type of fulfillment|
|»»»»» state|body|[State](#schema/state)|false|Describes a state|
|»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»»» name|body|string|false|none|
|»»»»»»» code|body|string|false|none|
|»»»»»»» symbol|body|string|false|none|
|»»»»»»» short_desc|body|string|false|none|
|»»»»»»» long_desc|body|string|false|none|
|»»»»»»» images|body|[[Image](#schema/image)]|false|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|»»»»»»» audio|body|string(uri)|false|none|
|»»»»»»» 3d_render|body|string(uri)|false|none|
|»»»»»» updated_at|body|string(date-time)|false|none|
|»»»»»» updated_by|body|string|false|ID of entity which changed the state|
|»»»»» tracking|body|boolean|false|Indicates whether the fulfillment allows tracking|
|»»»»» agent|body|any|false|The person who fulfills the order|
|»»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»»» name|body|[Name](#schema/name)|false|Describes the name of a person|
|»»»»»»»» full|body|string|false|Format: ./{honorific prefix}/{given_name}/{family_name}/{additional_name}/{call_sign}/{honorific_suffix}|
|»»»»»»»» additional_name|body|string|false|An additional name for a Person, can be used for a middle name.|
|»»»»»»»» family_name|body|string|false|Family name. In India, it is the last name of an Person. This can be used along with givenName instead of the name property.|
|»»»»»»»» given_name|body|string|false|Given name. In India, it is the first name of a Person. This can be used along with familyName instead of the name property.|
|»»»»»»»» call_sign|body|string|false|A callsign, as used in broadcasting and radio communications to identify people|
|»»»»»»»» honorific_prefix|body|string|false|An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.|
|»»»»»»»» honorific_suffix|body|string|false|An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.|
|»»»»»»» image|body|[Image](#schema/image)|false|Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```|
|»»»»»»» dob|body|string(date)|false|none|
|»»»»»»» gender|body|string|false|Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender|
|»»»»»»» cred|body|string|false|none|
|»»»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»»»»»» **additionalProperties**|body|string|false|none|
|»»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»»» phone|body|string|false|none|
|»»»»»»» email|body|string|false|none|
|»»»»»»» tags|body|object|false|Describes a tag. This is a simple key-value store which is used to contain extended metadata|
|»»»»» vehicle|body|[Vehicle](#schema/vehicle)|false|Describes the properties of a vehicle used in a mobility service|
|»»»»»» category|body|string|false|none|
|»»»»»» capacity|body|integer|false|none|
|»»»»»» make|body|string|false|none|
|»»»»»» model|body|string|false|none|
|»»»»»» size|body|string|false|none|
|»»»»»» variant|body|string|false|none|
|»»»»»» color|body|string|false|none|
|»»»»»» energy_type|body|string|false|none|
|»»»»»» registration|body|string|false|none|
|»»»»» start|body|object|false|Details on the start of fulfillment|
|»»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»»» gps|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»»»» station_code|body|string|false|none|
|»»»»»»» city|body|[City](#schema/city)|false|Describes a city|
|»»»»»»»» name|body|string|false|Name of the city|
|»»»»»»»» code|body|[City/properties/code](#schema/city/properties/code)|false|City code|
|»»»»»»» country|body|[Country](#schema/country)|false|Describes a country.|
|»»»»»»»» name|body|string|false|Name of the country|
|»»»»»»»» code|body|[Country/properties/code](#schema/country/properties/code)|false|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»»»»»»» circle|body|any|false|Describes a circular area on the map|
|»»»»»»»» *anonymous*|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»»» *anonymous*|body|object|false|none|
|»»»»»»»»» radius|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»»» polygon|body|string|false|none|
|»»»»»»» 3dspace|body|string|false|none|
|»»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»»» end|body|object|false|Details on the end of fulfillment|
|»»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»»» purpose|body|string|false|none|
|»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»» *anonymous*|body|object|false|none|
|»»»»» customer|body|any|true|none|
|»»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»» *anonymous*|body|object|false|none|
|»»» quote|body|[Quotation](#schema/quotation)|true|Describes a quote|
|»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»»» *anonymous*|body|[MonetaryValue](#schema/monetaryvalue)|false|Describes a monetary value used for exchange|
|»»»»»» currency|body|string|false|none|
|»»»»»» value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»» *anonymous*|body|object|false|none|
|»»»»»» estimated_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» computed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» listed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» offered_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» minimum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» maximum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» breakup|body|[object]|false|none|
|»»»»» type|body|string|false|none|
|»»»»» ref_id|body|string|false|none|
|»»»»» title|body|string|false|none|
|»»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»» payment|body|[Payment](#schema/payment)|true|Describes a payment|
|»»»» uri|body|string(uri)|false|A payment uri to be called by the BAP. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234|
|»»»» tl_method|body|string|false|none|
|»»»» params|body|object|false|none|
|»»»»» **additionalProperties**|body|string|false|none|
|»»»»» transaction_id|body|string|false|This value will be placed in the the $transaction_id url param in case of http/get and in the requestBody http/post requests|
|»»»»» amount|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» type|body|string|false|none|
|»»»» status|body|string|false|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»» created_at|body|string(date-time)|false|none|
|»»» updated_at|body|string(date-time)|false|none|
|» error|body|[Error](#schema/error)|false|Describes an error object|
|»» type|body|string|true|none|
|»» code|body|string|true|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|body|string|false|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|body|string|false|Human readable message descirbing the error|

<h3 id="post__on_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__on_update-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /on_status

`POST /on_status`

Fetch the status of a Service

<h3 id="post__on_status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|false|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|false|none|
|»» order|body|[Order](#schema/order)|false|Describes the details of an order|
|»»» id|body|[Order/properties/id](#schema/order/properties/id)|false|Hash of order object without id|
|»»» state|body|string|false|none|
|»»» provider|body|object|true|none|
|»»»» id|body|[Provider/properties/id](#schema/provider/properties/id)|true|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|»»»» locations|body|[object]|true|none|
|»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|true|none|
|»»» items|body|[object]|true|none|
|»»»» id|body|[Item/properties/id](#schema/item/properties/id)(#/components/schemas/Item/properties/id)|true|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|»»»» quantity|body|[ItemQuantity/properties/selected](#schema/itemquantity/properties/selected)|true|none|
|»»»»» count|body|integer|false|none|
|»»»»» measure|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»» type|body|string|false|none|
|»»»»»» value|body|number|true|none|
|»»»»»» estimated_value|body|number|false|none|
|»»»»»» computed_value|body|number|false|none|
|»»»»»» range|body|object|false|none|
|»»»»»»» min|body|number|false|none|
|»»»»»»» max|body|number|false|none|
|»»»»»» unit|body|string|true|none|
|»»» add_ons|body|[object]|true|none|
|»»»» id|body|[AddOn/properties/id](#schema/addon/properties/id)|true|ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR|
|»»» offers|body|[object]|true|none|
|»»»» id|body|[Offer/properties/id](#schema/offer/properties/id)|true|none|
|»»» billing|body|[Billing](#schema/billing)|true|Describes a billing event|
|»»»» name|body|string|true|Personal details of the customer needed for billing.|
|»»»» organization|body|[Organization](#schema/organization)|false|Describes an organization|
|»»»»» name|body|string|false|none|
|»»»»» cred|body|string|false|none|
|»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»» door|body|string|false|Door / Shop number of the address|
|»»»»» name|body|string|false|Name of address if applicable. Example, shop name|
|»»»»» building|body|string|false|Name of the building or block|
|»»»»» street|body|string|false|Street name or number|
|»»»»» locality|body|string|false|Name of the locality, apartments|
|»»»»» ward|body|string|false|Name or number of the ward if applicable|
|»»»»» city|body|string|false|City name|
|»»»»» state|body|string|false|State name|
|»»»»» country|body|string|false|Country name|
|»»»»» area_code|body|string|false|Area code. This can be Pincode, ZIP code or any equivalent|
|»»»» email|body|string(email)|false|none|
|»»»» phone|body|string|true|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»» label|body|string|false|none|
|»»»»» timestamp|body|string(date-time)|false|none|
|»»»»» duration|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»»»» range|body|object|false|none|
|»»»»»» start|body|string(date-time)|false|none|
|»»»»»» end|body|string(date-time)|false|none|
|»»»»» days|body|string|false|comma separated values representing days of the week|
|»»»» tax_number|body|string|false|none|
|»»»» created_at|body|string(date-time)|false|none|
|»»»» updated_at|body|string(date-time)|false|none|
|»»» fulfillment|body|any|true|none|
|»»»» *anonymous*|body|[Fulfillment](#schema/fulfillment)|false|Describes how a single product/service will be rendered/fulfilled to the end customer|
|»»»»» id|body|[Fulfillment/properties/id](#schema/fulfillment/properties/id)|false|Unique reference ID to the fulfillment of an order|
|»»»»» type|body|string|false|This describes the type of fulfillment|
|»»»»» state|body|[State](#schema/state)|false|Describes a state|
|»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»»» name|body|string|false|none|
|»»»»»»» code|body|string|false|none|
|»»»»»»» symbol|body|string|false|none|
|»»»»»»» short_desc|body|string|false|none|
|»»»»»»» long_desc|body|string|false|none|
|»»»»»»» images|body|[[Image](#schema/image)]|false|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|»»»»»»» audio|body|string(uri)|false|none|
|»»»»»»» 3d_render|body|string(uri)|false|none|
|»»»»»» updated_at|body|string(date-time)|false|none|
|»»»»»» updated_by|body|string|false|ID of entity which changed the state|
|»»»»» tracking|body|boolean|false|Indicates whether the fulfillment allows tracking|
|»»»»» agent|body|any|false|The person who fulfills the order|
|»»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»»» name|body|[Name](#schema/name)|false|Describes the name of a person|
|»»»»»»»» full|body|string|false|Format: ./{honorific prefix}/{given_name}/{family_name}/{additional_name}/{call_sign}/{honorific_suffix}|
|»»»»»»»» additional_name|body|string|false|An additional name for a Person, can be used for a middle name.|
|»»»»»»»» family_name|body|string|false|Family name. In India, it is the last name of an Person. This can be used along with givenName instead of the name property.|
|»»»»»»»» given_name|body|string|false|Given name. In India, it is the first name of a Person. This can be used along with familyName instead of the name property.|
|»»»»»»»» call_sign|body|string|false|A callsign, as used in broadcasting and radio communications to identify people|
|»»»»»»»» honorific_prefix|body|string|false|An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.|
|»»»»»»»» honorific_suffix|body|string|false|An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.|
|»»»»»»» image|body|[Image](#schema/image)|false|Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```|
|»»»»»»» dob|body|string(date)|false|none|
|»»»»»»» gender|body|string|false|Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender|
|»»»»»»» cred|body|string|false|none|
|»»»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»»»»»» **additionalProperties**|body|string|false|none|
|»»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»»» phone|body|string|false|none|
|»»»»»»» email|body|string|false|none|
|»»»»»»» tags|body|object|false|Describes a tag. This is a simple key-value store which is used to contain extended metadata|
|»»»»» vehicle|body|[Vehicle](#schema/vehicle)|false|Describes the properties of a vehicle used in a mobility service|
|»»»»»» category|body|string|false|none|
|»»»»»» capacity|body|integer|false|none|
|»»»»»» make|body|string|false|none|
|»»»»»» model|body|string|false|none|
|»»»»»» size|body|string|false|none|
|»»»»»» variant|body|string|false|none|
|»»»»»» color|body|string|false|none|
|»»»»»» energy_type|body|string|false|none|
|»»»»»» registration|body|string|false|none|
|»»»»» start|body|object|false|Details on the start of fulfillment|
|»»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»»» id|body|[Location/properties/id](#schema/location/properties/id)|false|none|
|»»»»»»» descriptor|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»»» gps|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»» address|body|[Address](#schema/address)|false|Describes an address|
|»»»»»»» station_code|body|string|false|none|
|»»»»»»» city|body|[City](#schema/city)|false|Describes a city|
|»»»»»»»» name|body|string|false|Name of the city|
|»»»»»»»» code|body|[City/properties/code](#schema/city/properties/code)|false|City code|
|»»»»»»» country|body|[Country](#schema/country)|false|Describes a country.|
|»»»»»»»» name|body|string|false|Name of the country|
|»»»»»»»» code|body|[Country/properties/code](#schema/country/properties/code)|false|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»»»»»»» circle|body|any|false|Describes a circular area on the map|
|»»»»»»»» *anonymous*|body|[Location/properties/gps](#schema/location/properties/gps)|false|Describes a gps coordinate|
|»»»»»»»» *anonymous*|body|object|false|none|
|»»»»»»»»» radius|body|[Scalar](#schema/scalar)|false|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|»»»»»»» polygon|body|string|false|none|
|»»»»»»» 3dspace|body|string|false|none|
|»»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»»» end|body|object|false|Details on the end of fulfillment|
|»»»»»» location|body|[Location](#schema/location)|false|Describes the location of a runtime object. Extension not allowed|
|»»»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»»»»» instructions|body|[Descriptor](#schema/descriptor)|false|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»»»»»» contact|body|[Contact](#schema/contact)|false|none|
|»»»»» purpose|body|string|false|none|
|»»»»» tags|body|[[Tags](#schema/tags)]|false|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|
|»»»» *anonymous*|body|object|false|none|
|»»»»» customer|body|any|true|none|
|»»»»»» *anonymous*|body|[Person](#schema/person)|false|Describes a person. Extension not allowed|
|»»»»»» *anonymous*|body|[Contact](#schema/contact)|false|none|
|»»»»»» *anonymous*|body|object|false|none|
|»»» quote|body|[Quotation](#schema/quotation)|true|Describes a quote|
|»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»»» *anonymous*|body|[MonetaryValue](#schema/monetaryvalue)|false|Describes a monetary value used for exchange|
|»»»»»» currency|body|string|false|none|
|»»»»»» value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»» *anonymous*|body|object|false|none|
|»»»»»» estimated_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» computed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» listed_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» offered_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» minimum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»»»» maximum_value|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» breakup|body|[object]|false|none|
|»»»»» type|body|string|false|none|
|»»»»» ref_id|body|string|false|none|
|»»»»» title|body|string|false|none|
|»»»»» price|body|any|false|Describes the price of an item. Allows for domain extension.|
|»»»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|»»» payment|body|[Payment](#schema/payment)|true|Describes a payment|
|»»»» uri|body|string(uri)|false|A payment uri to be called by the BAP. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234|
|»»»» tl_method|body|string|false|none|
|»»»» params|body|object|false|none|
|»»»»» **additionalProperties**|body|string|false|none|
|»»»»» transaction_id|body|string|false|This value will be placed in the the $transaction_id url param in case of http/get and in the requestBody http/post requests|
|»»»»» amount|body|[DecimalValue](#schema/decimalvalue)|false|Describes a decimal value|
|»»»» type|body|string|false|none|
|»»»» status|body|string|false|none|
|»»»» time|body|[Time](#schema/time)|false|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|»»» created_at|body|string(date-time)|false|none|
|»»» updated_at|body|string(date-time)|false|none|


<h3 id="post__on_status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__on_status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|


<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /on_rating

`POST /on_rating`

Provide feedback on a service

<h3 id="post__on_rating-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|false|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|false|none|
|»» feedback|body|[Feedback](#schema/feedback)|false|Feedback for a service|
|»»» id|body|string|false|none|
|»»» descriptor|body|string|false|none|
|»»» parent_id|body|string|false|none|
|» error|body|[Error](#schema/error)|false|Describes an error object|
|»» type|body|string|true|none|
|»» code|body|string|true|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|body|string|false|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|body|string|false|Human readable message descirbing the error|

<h3 id="post__on_rating-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__on_rating-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /on_support

`POST /on_support`

Contact Support

<h3 id="post__on_support-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|TODO|
|» context|body|[Context](#schema/context)|false|Describes a beckn message context|
|»» domain|body|[Domain](#schema/domain)|true|Describes the domain of an object|
|»» country|body|[Country/properties/code](#schema/country/properties/code)|true|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|body|[City/properties/code](#schema/city/properties/code)|true|City code|
|»» action|body|string|true|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|body|string|true|Version of Beckn core API specification being used|
|»» bap_id|body|string(uri)|true|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|body|string(uri)|true|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|body|string(uri)|false|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|body|string(uri)|false|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|body|string|true|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|body|string|true|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|body|string(date-time)|true|Time of request generation in RFC3339 format|
|»» key|body|string|false|The encryption public key of the sender|
|»» ttl|body|[Duration](#schema/duration)|false|Describes duration as per ISO8601 format|
|» message|body|object|false|none|
|»» phone|body|string(phone)|false|none|
|»» email|body|string(email)|false|none|
|»» uri|body|string(uri)|false|none|
|» error|body|[Error](#schema/error)|false|Describes an error object|
|»» type|body|string|true|none|
|»» code|body|string|true|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|body|string|false|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|body|string|false|Human readable message descirbing the error|


<h3 id="post__on_support-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Acknowledgement of message received|Inline|

<h3 id="post__on_support-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» context|[Context](#schema/context)|false|none|Describes a beckn message context|
|»» domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|»» country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|»» city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|»» action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|»» core_version|string|true|none|Version of Beckn core API specification being used|
|»» bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|»» bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|»» bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|»» bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|»» transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|»» message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|»» timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|»» key|string|false|none|The encryption public key of the sender|
|»» ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|» message|object|false|none|none|
|»» ack|[Ack](#schema/ack)|false|none|Describes the ACK response|
|»»» status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|
|» error|[Error](#schema/error)|false|none|Describes an error object|
|»» type|string|true|none|none|
|»» code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|»» path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|»» message|string|false|none|Human readable message descirbing the error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

<h1 id="beckn-core-api-bpp-meta-apis">BPP Meta APIs</h1>

## /get_cancellation_reasons



`POST /get_cancellation_reasons`

Look up subscriber(s) in a registry

<h3 id="post__get_cancellation_reasons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Signature|header|string|true|This contains the digital signature of the request body signed using the signing private key of the Subscriber|
|body|body|[Context](#schema/context)|false|TODO|

<h3 id="post__get_cancellation_reasons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of cancellation reasons|Inline|

<h3 id="post__get_cancellation_reasons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Option](#schema/option)]|false|none|[Describes a selectable option]|
|» id|[Option/properties/id](#schema/option/properties/id)|false|none|none|
|» descriptor|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»» name|string|false|none|none|
|»» code|string|false|none|none|
|»» symbol|string|false|none|none|
|»» short_desc|string|false|none|none|
|»» long_desc|string|false|none|none|
|»» images|[[Image](#schema/image)]|false|none|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|»» audio|string(uri)|false|none|none|
|»» 3d_render|string(uri)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /get_return_reasons

`POST /get_return_reasons`

Look up subscriber(s) in a registry

<h3 id="post__get_return_reasons-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Signature|header|string|true|This contains the digital signature of the request body signed using the signing private key of the Subscriber|
|body|body|[Context](#schema/context)|false|TODO|

<h3 id="post__get_return_reasons-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List of return reasons|Inline|

<h3 id="post__get_return_reasons-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Option](#schema/option)]|false|none|[Describes a selectable option]|
|» id|[Option/properties/id](#schema/option/properties/id)|false|none|none|
|» descriptor|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|»» name|string|false|none|none|
|»» code|string|false|none|none|
|»» symbol|string|false|none|none|
|»» short_desc|string|false|none|none|
|»» long_desc|string|false|none|none|
|»» images|[[Image](#schema/image)]|false|none|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|»» audio|string(uri)|false|none|none|
|»» 3d_render|string(uri)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

## /get_rating_categories

`POST /get_rating_categories`

Get a list of feedback forms based on rating inputs

<h3 id="post__get_rating_categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Signature|header|string|true|This contains the digital signature of the request body signed using the signing private key of the Subscriber|
|body|body|[Context](#schema/context)|false|TODO|
<h3 id="post__get_rating_categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Feedback forms|Inline|

<h3 id="post__get_rating_categories-responseschema">Response Schema</h3>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
SubscriberAuth
</aside>

# Schemas

<h2 id="tocS_Ack">Ack</h2>

<a id="schemaack"></a>
<a id="schema_Ack"></a>
<a id="tocSack"></a>
<a id="tocsack"></a>

```json
{
  "status": "ACK"
}

```

Describes the ACK response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACK|
|status|NACK|

<h2 id="tocS_AddOn">AddOn</h2>

<a id="schemaaddon"></a>
<a id="schema_AddOn"></a>
<a id="tocSaddon"></a>
<a id="tocsaddon"></a>

```json
{
  "id": "string",
  "descriptor": {
    "name": "string",
    "code": "string",
    "symbol": "string",
    "short_desc": "string",
    "long_desc": "string",
    "images": [
      "string"
    ],
    "audio": "http://example.com",
    "3d_render": "http://example.com"
  },
  "price": {
    "currency": "string",
    "value": "string",
    "estimated_value": "string",
    "computed_value": "string",
    "listed_value": "string",
    "offered_value": "string",
    "minimum_value": "string",
    "maximum_value": "string"
  }
}

```

Describes an add-on

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR|
|descriptor|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|price|[Price](#schema/price)|false|none|Describes the price of an item. Allows for domain extension.|

<h2 id="tocS_Address">Address</h2>

<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "door": "string",
  "name": "string",
  "building": "string",
  "street": "string",
  "locality": "string",
  "ward": "string",
  "city": "string",
  "state": "string",
  "country": "string",
  "area_code": "string"
}

```

Describes an address

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|door|string|false|none|Door / Shop number of the address|
|name|string|false|none|Name of address if applicable. Example, shop name|
|building|string|false|none|Name of the building or block|
|street|string|false|none|Street name or number|
|locality|string|false|none|Name of the locality, apartments|
|ward|string|false|none|Name or number of the ward if applicable|
|city|string|false|none|City name|
|state|string|false|none|State name|
|country|string|false|none|Country name|
|area_code|string|false|none|Area code. This can be Pincode, ZIP code or any equivalent|

<h2 id="tocS_Billing">Billing</h2>

<a id="schemabilling"></a>
<a id="schema_Billing"></a>
<a id="tocSbilling"></a>
<a id="tocsbilling"></a>

```json
{
  "name": "string",
  "organization": {
    "name": "string",
    "cred": "string"
  },
  "address": {
    "door": "string",
    "name": "string",
    "building": "string",
    "street": "string",
    "locality": "string",
    "ward": "string",
    "city": "string",
    "state": "string",
    "country": "string",
    "area_code": "string"
  },
  "email": "user@example.com",
  "phone": "string",
  "time": {
    "label": "string",
    "timestamp": "2019-08-24T14:15:22Z",
    "duration": "string",
    "range": {
      "start": "2019-08-24T14:15:22Z",
      "end": "2019-08-24T14:15:22Z"
    },
    "days": "string"
  },
  "tax_number": "string",
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z"
}

```

Describes a billing event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Personal details of the customer needed for billing.|
|organization|[Organization](#schema/organization)|false|none|Describes an organization|
|address|[Address](#schema/address)|false|none|Describes an address|
|email|string(email)|false|none|none|
|phone|string|true|none|none|
|time|[Time](#schema/time)|false|none|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|tax_number|string|false|none|none|
|created_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|none|none|

<h2 id="tocS_Cancellation">Cancellation</h2>

<a id="schemacancellation"></a>
<a id="schema_Cancellation"></a>
<a id="tocScancellation"></a>
<a id="tocscancellation"></a>

```json
{
  "type": "full",
  "ref_id": "string",
  "policies": [
    {
      "id": "string",
      "descriptor": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
        "audio": "http://example.com",
        "3d_render": "http://example.com"
      },
      "parent_policy_id": "string",
      "time": {
        "label": "string",
        "timestamp": "2019-08-24T14:15:22Z",
        "duration": "string",
        "range": {
          "start": "2019-08-24T14:15:22Z",
          "end": "2019-08-24T14:15:22Z"
        },
        "days": "string"
      }
    }
  ],
  "time": "2019-08-24T14:15:22Z",
  "cancelled_by": "string",
  "reasons": {
    "id": "string",
    "descriptor": {
      "name": "string",
      "code": "string",
      "symbol": "string",
      "short_desc": "string",
      "long_desc": "string",
      "images": [
        "string"
      ],
      "audio": "http://example.com",
      "3d_render": "http://example.com"
    }
  },
  "selected_reason": {
    "id": "string"
  },
  "additional_description": {
    "name": "string",
    "code": "string",
    "symbol": "string",
    "short_desc": "string",
    "long_desc": "string",
    "images": [
      "string"
    ],
    "audio": "http://example.com",
    "3d_render": "http://example.com"
  }
}

```

Describes the ACK response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|ref_id|string|false|none|none|
|policies|[[Policy](#schema/policy)]|false|none|[Describes a policy. Allows for domain extension.]|
|time|string(date-time)|false|none|none|
|cancelled_by|string|false|none|none|
|reasons|[Option](#schema/option)|false|none|Describes a selectable option|
|selected_reason|object|false|none|none|
|» id|[Option/properties/id](#schema/option/properties/id)|false|none|none|
|additional_description|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|

#### Enumerated Values

|Property|Value|
|---|---|
|type|full|
|type|partial|

<h2 id="tocS_Catalog">Catalog</h2>

<a id="schemacatalog"></a>
<a id="schema_Catalog"></a>
<a id="tocScatalog"></a>
<a id="tocscatalog"></a>

```json
{
  "bpp/descriptor": {
    "name": "string",
    "code": "string",
    "symbol": "string",
    "short_desc": "string",
    "long_desc": "string",
    "images": [
      "string"
    ],
    "audio": "http://example.com",
    "3d_render": "http://example.com"
  },
  "bpp/categories": [
    {
      "id": "string",
      "parent_category_id": "string",
      "descriptor": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
        "audio": "http://example.com",
        "3d_render": "http://example.com"
      },
      "time": {
        "label": "string",
        "timestamp": "2019-08-24T14:15:22Z",
        "duration": "string",
        "range": {
          "start": "2019-08-24T14:15:22Z",
          "end": "2019-08-24T14:15:22Z"
        },
        "days": "string"
      },
      "tags": [
        {
          "property1": "string",
          "property2": "string"
        }
      ]
    }
  ],
  "bpp/fulfillments": [
    {
      "id": "string",
      "type": "string",
      "state": {
        "descriptor": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          "audio": "http://example.com",
          "3d_render": "http://example.com"
        },
        "updated_at": "2019-08-24T14:15:22Z",
        "updated_by": "string"
      },
      "tracking": false,
      "agent": {
        "name": {
          "full": "string",
          "additional_name": "string",
          "family_name": "string",
          "given_name": "string",
          "call_sign": "string",
          "honorific_prefix": "string",
          "honorific_suffix": "string"
        },
        "image": "string",
        "dob": "2019-08-24",
        "gender": "string",
        "cred": "string",
        "tags": {
          "0": {
            "property1": "string",
            "property2": "string"
          },
          "property1": "string",
          "property2": "string"
        },
        "phone": "string",
        "email": "string"
      },
      "vehicle": {
        "category": "string",
        "capacity": 0,
        "make": "string",
        "model": "string",
        "size": "string",
        "variant": "string",
        "color": "string",
        "energy_type": "string",
        "registration": "string"
      },
      "start": {
        "location": {
          "id": "string",
          "descriptor": {
            "name": "string",
            "code": "string",
            "symbol": "string",
            "short_desc": "string",
            "long_desc": "string",
            "images": [
              "string"
            ],
            "audio": "http://example.com",
            "3d_render": "http://example.com"
          },
          "gps": "string",
          "address": {
            "door": "string",
            "name": "string",
            "building": "string",
            "street": "string",
            "locality": "string",
            "ward": "string",
            "city": "string",
            "state": "string",
            "country": "string",
            "area_code": "string"
          },
          "station_code": "string",
          "city": {
            "name": "string",
            "code": "string"
          },
          "country": {
            "name": "string",
            "code": "string"
          },
          "circle": "string",
          "polygon": "string",
          "3dspace": "string"
        },
        "time": {
          "label": "string",
          "timestamp": "2019-08-24T14:15:22Z",
          "duration": "string",
          "range": {
            "start": "2019-08-24T14:15:22Z",
            "end": "2019-08-24T14:15:22Z"
          },
          "days": "string"
        },
        "instructions": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          "audio": "http://example.com",
          "3d_render": "http://example.com"
        },
        "contact": {
          "phone": "string",
          "email": "string",
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "end": {
        "location": {
          "id": "string",
          "descriptor": {
            "name": "string",
            "code": "string",
            "symbol": "string",
            "short_desc": "string",
            "long_desc": "string",
            "images": [
              "string"
            ],
            "audio": "http://example.com",
            "3d_render": "http://example.com"
          },
          "gps": "string",
          "address": {
            "door": "string",
            "name": "string",
            "building": "string",
            "street": "string",
            "locality": "string",
            "ward": "string",
            "city": "string",
            "state": "string",
            "country": "string",
            "area_code": "string"
          },
          "station_code": "string",
          "city": {
            "name": "string",
            "code": "string"
          },
          "country": {
            "name": "string",
            "code": "string"
          },
          "circle": "string",
          "polygon": "string",
          "3dspace": "string"
        },
        "time": {
          "label": "string",
          "timestamp": "2019-08-24T14:15:22Z",
          "duration": "string",
          "range": {
            "start": "2019-08-24T14:15:22Z",
            "end": "2019-08-24T14:15:22Z"
          },
          "days": "string"
        },
        "instructions": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          "audio": "http://example.com",
          "3d_render": "http://example.com"
        },
        "contact": {
          "phone": "string",
          "email": "string",
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "purpose": "string",
      "tags": [
        {
          "property1": "string",
          "property2": "string"
        }
      ]
    }
  ],
  "bpp/payments": [
    {
      "uri": "http://example.com",
      "tl_method": "http/get",
      "params": {
        "transaction_id": "string",
        "amount": "string",
        "property1": "string",
        "property2": "string"
      },
      "type": "ON-ORDER",
      "status": "PAID",
      "time": {
        "label": "string",
        "timestamp": "2019-08-24T14:15:22Z",
        "duration": "string",
        "range": {
          "start": "2019-08-24T14:15:22Z",
          "end": "2019-08-24T14:15:22Z"
        },
        "days": "string"
      }
    }
  ],
  "bpp/offers": [
    {
      "id": "string",
      "descriptor": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
        "audio": "http://example.com",
        "3d_render": "http://example.com"
      },
      "location_ids": [
        "string"
      ],
      "category_ids": [
        "string"
      ],
      "item_ids": [
        "string"
      ],
      "time": {
        "label": "string",
        "timestamp": "2019-08-24T14:15:22Z",
        "duration": "string",
        "range": {
          "start": "2019-08-24T14:15:22Z",
          "end": "2019-08-24T14:15:22Z"
        },
        "days": "string"
      }
    }
  ],
  "bpp/providers": [
    {
      "id": "string",
      "descriptor": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
        "audio": "http://example.com",
        "3d_render": "http://example.com"
      },
      "time": {
        "label": "string",
        "timestamp": "2019-08-24T14:15:22Z",
        "duration": "string",
        "range": {
          "start": "2019-08-24T14:15:22Z",
          "end": "2019-08-24T14:15:22Z"
        },
        "days": "string"
      },
      "locations": [
        {
          "id": "string",
          "descriptor": {
            "name": "string",
            "code": "string",
            "symbol": "string",
            "short_desc": "string",
            "long_desc": "string",
            "images": [
              "string"
            ],
            "audio": "http://example.com",
            "3d_render": "http://example.com"
          },
          "gps": "string",
          "address": {
            "door": "string",
            "name": "string",
            "building": "string",
            "street": "string",
            "locality": "string",
            "ward": "string",
            "city": "string",
            "state": "string",
            "country": "string",
            "area_code": "string"
          },
          "station_code": "string",
          "city": {
            "name": "string",
            "code": "string"
          },
          "country": {
            "name": "string",
            "code": "string"
          },
          "circle": "string",
          "polygon": "string",
          "3dspace": "string",
          "time": {
            "label": "string",
            "timestamp": "2019-08-24T14:15:22Z",
            "duration": "string",
            "range": {
              "start": "2019-08-24T14:15:22Z",
              "end": "2019-08-24T14:15:22Z"
            },
            "days": "string"
          }
        }
      ],
      "tags": [
        {
          "property1": "string",
          "property2": "string"
        }
      ],
      "categories": [
        {
          "id": "string",
          "parent_category_id": "string",
          "descriptor": {
            "name": "string",
            "code": "string",
            "symbol": "string",
            "short_desc": "string",
            "long_desc": "string",
            "images": [
              "string"
            ],
            "audio": "http://example.com",
            "3d_render": "http://example.com"
          },
          "time": {
            "label": "string",
            "timestamp": "2019-08-24T14:15:22Z",
            "duration": "string",
            "range": {
              "start": "2019-08-24T14:15:22Z",
              "end": "2019-08-24T14:15:22Z"
            },
            "days": "string"
          },
          "tags": [
            {
              "property1": "string",
              "property2": "string"
            }
          ]
        }
      ],
      "fulfillments": [
        {
          "id": "string",
          "type": "string",
          "state": {
            "descriptor": {
              "name": "string",
              "code": "string",
              "symbol": "string",
              "short_desc": "string",
              "long_desc": "string",
              "images": [
                "string"
              ],
              "audio": "http://example.com",
              "3d_render": "http://example.com"
            },
            "updated_at": "2019-08-24T14:15:22Z",
            "updated_by": "string"
          },
          "tracking": false,
          "agent": {
            "name": {
              "full": "string",
              "additional_name": "string",
              "family_name": "string",
              "given_name": "string",
              "call_sign": "string",
              "honorific_prefix": "string",
              "honorific_suffix": "string"
            },
            "image": "string",
            "dob": "2019-08-24",
            "gender": "string",
            "cred": "string",
            "tags": {
              "0": {
                "property1": "string",
                "property2": "string"
              },
              "property1": "string",
              "property2": "string"
            },
            "phone": "string",
            "email": "string"
          },
          "vehicle": {
            "category": "string",
            "capacity": 0,
            "make": "string",
            "model": "string",
            "size": "string",
            "variant": "string",
            "color": "string",
            "energy_type": "string",
            "registration": "string"
          },
          "start": {
            "location": {
              "id": "string",
              "descriptor": {
                "name": "string",
                "code": "string",
                "symbol": "string",
                "short_desc": "string",
                "long_desc": "string",
                "images": [
                  "string"
                ],
                "audio": "http://example.com",
                "3d_render": "http://example.com"
              },
              "gps": "string",
              "address": {
                "door": "string",
                "name": "string",
                "building": "string",
                "street": "string",
                "locality": "string",
                "ward": "string",
                "city": "string",
                "state": "string",
                "country": "string",
                "area_code": "string"
              },
              "station_code": "string",
              "city": {
                "name": "string",
                "code": "string"
              },
              "country": {
                "name": "string",
                "code": "string"
              },
              "circle": "string",
              "polygon": "string",
              "3dspace": "string"
            },
            "time": {
              "label": "string",
              "timestamp": "2019-08-24T14:15:22Z",
              "duration": "string",
              "range": {
                "start": "2019-08-24T14:15:22Z",
                "end": "2019-08-24T14:15:22Z"
              },
              "days": "string"
            },
            "instructions": {
              "name": "string",
              "code": "string",
              "symbol": "string",
              "short_desc": "string",
              "long_desc": "string",
              "images": [
                "string"
              ],
              "audio": "http://example.com",
              "3d_render": "http://example.com"
            },
            "contact": {
              "phone": "string",
              "email": "string",
              "tags": {
                "property1": "string",
                "property2": "string"
              }
            }
          },
          "end": {
            "location": {
              "id": "string",
              "descriptor": {
                "name": "string",
                "code": "string",
                "symbol": "string",
                "short_desc": "string",
                "long_desc": "string",
                "images": [
                  "string"
                ],
                "audio": "http://example.com",
                "3d_render": "http://example.com"
              },
              "gps": "string",
              "address": {
                "door": "string",
                "name": "string",
                "building": "string",
                "street": "string",
                "locality": "string",
                "ward": "string",
                "city": "string",
                "state": "string",
                "country": "string",
                "area_code": "string"
              },
              "station_code": "string",
              "city": {
                "name": "string",
                "code": "string"
              },
              "country": {
                "name": "string",
                "code": "string"
              },
              "circle": "string",
              "polygon": "string",
              "3dspace": "string"
            },
            "time": {
              "label": "string",
              "timestamp": "2019-08-24T14:15:22Z",
              "duration": "string",
              "range": {
                "start": "2019-08-24T14:15:22Z",
                "end": "2019-08-24T14:15:22Z"
              },
              "days": "string"
            },
            "instructions": {
              "name": "string",
              "code": "string",
              "symbol": "string",
              "short_desc": "string",
              "long_desc": "string",
              "images": [
                "string"
              ],
              "audio": "http://example.com",
              "3d_render": "http://example.com"
            },
            "contact": {
              "phone": "string",
              "email": "string",
              "tags": {
                "property1": "string",
                "property2": "string"
              }
            }
          },
          "purpose": "string",
          "tags": [
            {
              "property1": "string",
              "property2": "string"
            }
          ]
        }
      ],
      "payments": [
        {
          "uri": "http://example.com",
          "tl_method": "http/get",
          "params": {
            "transaction_id": "string",
            "amount": "string",
            "property1": "string",
            "property2": "string"
          },
          "type": "ON-ORDER",
          "status": "PAID",
          "time": {
            "label": "string",
            "timestamp": "2019-08-24T14:15:22Z",
            "duration": "string",
            "range": {
              "start": "2019-08-24T14:15:22Z",
              "end": "2019-08-24T14:15:22Z"
            },
            "days": "string"
          }
        }
      ],
      "offers": [
        {
          "id": "string",
          "descriptor": {
            "name": "string",
            "code": "string",
            "symbol": "string",
            "short_desc": "string",
            "long_desc": "string",
            "images": [
              "string"
            ],
            "audio": "http://example.com",
            "3d_render": "http://example.com"
          },
          "location_ids": [
            "string"
          ],
          "category_ids": [
            "string"
          ],
          "item_ids": [
            "string"
          ],
          "time": {
            "label": "string",
            "timestamp": "2019-08-24T14:15:22Z",
            "duration": "string",
            "range": {
              "start": "2019-08-24T14:15:22Z",
              "end": "2019-08-24T14:15:22Z"
            },
            "days": "string"
          }
        }
      ],
      "items": [
        {
          "id": "string",
          "parent_item_id": "string",
          "descriptor": {
            "name": "string",
            "code": "string",
            "symbol": "string",
            "short_desc": "string",
            "long_desc": "string",
            "images": [
              "string"
            ],
            "audio": "http://example.com",
            "3d_render": "http://example.com"
          },
          "price": {
            "currency": "string",
            "value": "string",
            "estimated_value": "string",
            "computed_value": "string",
            "listed_value": "string",
            "offered_value": "string",
            "minimum_value": "string",
            "maximum_value": "string"
          },
          "category_id": "string",
          "location_id": "string",
          "time": {
            "label": "string",
            "timestamp": "2019-08-24T14:15:22Z",
            "duration": "string",
            "range": {
              "start": "2019-08-24T14:15:22Z",
              "end": "2019-08-24T14:15:22Z"
            },
            "days": "string"
          },
          "matched": true,
          "related": true,
          "recommended": true,
          "tags": [
            {
              "property1": "string",
              "property2": "string"
            }
          ]
        }
      ],
      "exp": "2019-08-24T14:15:22Z"
    }
  ],
  "exp": "2019-08-24T14:15:22Z"
}

```

Describes a BPP catalog

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bpp|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|bpp|[[Category](#schema/category)]|false|none|[Describes a category]|
|bpp|[[Fulfillment](#schema/fulfillment)]|false|none|[Describes how a single product/service will be rendered/fulfilled to the end customer]|
|bpp|[[Payment](#schema/payment)]|false|none|[Describes a payment]|
|bpp|[[Offer](#schema/offer)]|false|none|[Describes an offer]|
|bpp|[allOf]|false|none|none|

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[Provider](#schema/provider)|false|none|Describes a service provider. This can be a restaurant, a hospital, a Store etc|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[ProviderCatalog](#schema/providercatalog)|false|none|Describes a provider catalog|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exp|string(date-time)|false|none|Time after which catalog has to be refreshed|

<h2 id="tocS_Category">Category</h2>

<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "id": "string",
  "parent_category_id": "string",
  "descriptor": {
    "name": "string",
    "code": "string",
    "symbol": "string",
    "short_desc": "string",
    "long_desc": "string",
    "images": [
      "string"
    ],
    "audio": "http://example.com",
    "3d_render": "http://example.com"
  },
  "time": {
    "label": "string",
    "timestamp": "2019-08-24T14:15:22Z",
    "duration": "string",
    "range": {
      "start": "2019-08-24T14:15:22Z",
      "end": "2019-08-24T14:15:22Z"
    },
    "days": "string"
  },
  "tags": [
    {
      "property1": "string",
      "property2": "string"
    }
  ]
}

```

Describes a category

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique id of the category|
|parent_category_id|[Category/properties/id](#schema/category/properties/id)|false|none|Unique id of the category|
|descriptor|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|time|[Time](#schema/time)|false|none|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|tags|[[Tags](#schema/tags)]|false|none|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|

<h2 id="tocS_Circle">Circle</h2>

<a id="schemacircle"></a>
<a id="schema_Circle"></a>
<a id="tocScircle"></a>
<a id="tocscircle"></a>

```json
"string"

```

Describes a circular area on the map

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[Gps](#schema/gps)|false|none|Describes a gps coordinate|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» radius|[Scalar](#schema/scalar)|false|none|An object representing a scalar quantity. Extension allowed only to the limit of vector|

<h2 id="tocS_City">City</h2>

<a id="schemacity"></a>
<a id="schema_City"></a>
<a id="tocScity"></a>
<a id="tocscity"></a>

```json
{
  "name": "string",
  "code": "string"
}

```

Describes a city

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the city|
|code|string|false|none|City code|

<h2 id="tocS_Contact">Contact</h2>

<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "phone": "string",
  "email": "string",
  "tags": {
    "property1": "string",
    "property2": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone|string|false|none|none|
|email|string|false|none|none|
|tags|[Tags](#schema/tags)|false|none|Describes a tag. This is a simple key-value store which is used to contain extended metadata|

<h2 id="tocS_Context">Context</h2>

<a id="schemacontext"></a>
<a id="schema_Context"></a>
<a id="tocScontext"></a>
<a id="tocscontext"></a>

```json
{
  "domain": "string",
  "country": "string",
  "city": "string",
  "action": "search",
  "core_version": "string",
  "bap_id": "http://example.com",
  "bap_uri": "http://example.com",
  "bpp_id": "http://example.com",
  "bpp_uri": "http://example.com",
  "transaction_id": "string",
  "message_id": "string",
  "timestamp": "2019-08-24T14:15:22Z",
  "key": "string",
  "ttl": "string"
}

```

Describes a beckn message context

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|[Domain](#schema/domain)|true|none|Describes the domain of an object|
|country|[Country/properties/code](#schema/country/properties/code)|true|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|city|[City/properties/code](#schema/city/properties/code)|true|none|City code|
|action|string|true|none|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol|
|core_version|string|true|none|Version of Beckn core API specification being used|
|bap_id|string(uri)|true|none|This is registered domain name of the BAP. Must be an HTTPS domain in open networks|
|bap_uri|string(uri)|true|none|URI of the BAP. Must have the same domain name as the bap_id|
|bpp_id|string(uri)|false|none|This is registered domain name of the BPP. Must be an HTTPS domain in open networks|
|bpp_uri|string(uri)|false|none|URI of the BPP. Must have the same domain name as the bap_id|
|transaction_id|string|true|none|This is a unique value which persists across all API calls from search through confirm. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback transaction_id with the request transaction_id|
|message_id|string|true|none|This is a unique value which persists during a request / callback cycle. The format for transaction id is an ecrypted value of the following string. '{bap_id}/{action}/{timestamp}/{ttl}/{random nonce}' using a key known only to the BAP. The BAP will decrypt this value to compare the callback message_id with the request message_id|
|timestamp|string(date-time)|true|none|Time of request generation in RFC3339 format|
|key|string|false|none|The encryption public key of the sender|
|ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|

#### Enumerated Values

|Property|Value|
|---|---|
|action|search|
|action|select|
|action|init|
|action|confirm|
|action|update|
|action|status|
|action|track|
|action|cancel|
|action|feedback|
|action|support|
|action|on_search|
|action|on_select|
|action|on_init|
|action|on_confirm|
|action|on_update|
|action|on_status|
|action|on_track|
|action|on_cancel|
|action|on_feedback|
|action|on_support|
|action|ack|

<h2 id="tocS_Country">Country</h2>

<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "name": "string",
  "code": "string"
}

```

Describes a country.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Name of the country|
|code|string|false|none|Country code as per ISO 3166-1 and ISO 3166-2 format|

<h2 id="tocS_Customer">Customer</h2>

<a id="schemacustomer"></a>
<a id="schema_Customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>

```json
{
  "type": "SINGLE",
  "individual": {
    "info": {
      "name": {
        "full": "string",
        "additional_name": "string",
        "family_name": "string",
        "given_name": "string",
        "call_sign": "string",
        "honorific_prefix": "string",
        "honorific_suffix": "string"
      },
      "image": "string",
      "dob": "2019-08-24",
      "gender": "string",
      "cred": "string",
      "tags": [
        {
          "property1": "string",
          "property2": "string"
        }
      ]
    }
  },
  "group": {
    "primary": {
      "name": {
        "full": "string",
        "additional_name": "string",
        "family_name": "string",
        "given_name": "string",
        "call_sign": "string",
        "honorific_prefix": "string",
        "honorific_suffix": "string"
      },
      "image": "string",
      "dob": "2019-08-24",
      "gender": "string",
      "cred": "string",
      "tags": [
        {
          "property1": "string",
          "property2": "string"
        }
      ]
    },
    "count": 1
  }
}

```

Describes the customer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|individual|object|false|none|none|
|» info|[Person](#schema/person)|false|none|Describes a person. Extension not allowed|
|group|object|false|none|none|
|» primary|[Person](#schema/person)|false|none|Describes a person. Extension not allowed|
|» count|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SINGLE|
|type|GROUP|

<h2 id="tocS_DecimalValue">DecimalValue</h2>

<a id="schemadecimalvalue"></a>
<a id="schema_DecimalValue"></a>
<a id="tocSdecimalvalue"></a>
<a id="tocsdecimalvalue"></a>

```json
"string"

```

Describes a decimal value

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Describes a decimal value|

<h2 id="tocS_Descriptor">Descriptor</h2>

<a id="schemadescriptor"></a>
<a id="schema_Descriptor"></a>
<a id="tocSdescriptor"></a>
<a id="tocsdescriptor"></a>

```json
{
  "name": "string",
  "code": "string",
  "symbol": "string",
  "short_desc": "string",
  "long_desc": "string",
  "images": [
    "string"
  ],
  "audio": "http://example.com",
  "3d_render": "http://example.com"
}

```

Describes the description of a real-world object. Maintained by Beckn Foundation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|code|string|false|none|none|
|symbol|string|false|none|none|
|short_desc|string|false|none|none|
|long_desc|string|false|none|none|
|images|[[Image](#schema/image)]|false|none|[Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```]|
|audio|string(uri)|false|none|none|
|3d_render|string(uri)|false|none|none|

<h2 id="tocS_Dimensions">Dimensions</h2>

<a id="schemadimensions"></a>
<a id="schema_Dimensions"></a>
<a id="tocSdimensions"></a>
<a id="tocsdimensions"></a>

```json
{
  "length": {
    "type": "CONSTANT",
    "value": 0,
    "estimated_value": 0,
    "computed_value": 0,
    "range": {
      "min": 0,
      "max": 0
    },
    "unit": "string"
  },
  "breadth": {
    "type": "CONSTANT",
    "value": 0,
    "estimated_value": 0,
    "computed_value": 0,
    "range": {
      "min": 0,
      "max": 0
    },
    "unit": "string"
  },
  "height": {
    "type": "CONSTANT",
    "value": 0,
    "estimated_value": 0,
    "computed_value": 0,
    "range": {
      "min": 0,
      "max": 0
    },
    "unit": "string"
  }
}

```

Describes the dimensions of a real-world object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|length|[Scalar](#schema/scalar)|false|none|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|breadth|[Scalar](#schema/scalar)|false|none|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|height|[Scalar](#schema/scalar)|false|none|An object representing a scalar quantity. Extension allowed only to the limit of vector|

<h2 id="tocS_Domain">Domain</h2>

<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
"string"

```

Describes the domain of an object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Describes the domain of an object|

<h2 id="tocS_Duration">Duration</h2>

<a id="schemaduration"></a>
<a id="schema_Duration"></a>
<a id="tocSduration"></a>
<a id="tocsduration"></a>

```json
"string"

```

Describes duration as per ISO8601 format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Describes duration as per ISO8601 format|

<h2 id="tocS_Error">Error</h2>

<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "type": "CONTEXT-ERROR",
  "code": "string",
  "path": "string",
  "message": "string"
}

```

Describes an error object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|code|string|true|none|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo|
|path|string|false|none|Path to json schema generating the error. Used only during json schema validation errors|
|message|string|false|none|Human readable message descirbing the error|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CONTEXT-ERROR|
|type|CORE-ERROR|
|type|DOMAIN-ERROR|
|type|POLICY-ERROR|
|type|JSON-SCHEMA-ERROR|

<h2 id="tocS_Feedback">Feedback</h2>

<a id="schemafeedback"></a>
<a id="schema_Feedback"></a>
<a id="tocSfeedback"></a>
<a id="tocsfeedback"></a>

```json
{
  "id": "string",
  "descriptor": "string",
  "parent_id": "string"
}

```

Feedback for a service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|descriptor|string|false|none|none|
|parent_id|string|false|none|none|

<h2 id="tocS_Fulfillment">Fulfillment</h2>

<a id="schemafulfillment"></a>
<a id="schema_Fulfillment"></a>
<a id="tocSfulfillment"></a>
<a id="tocsfulfillment"></a>

```json
{
  "id": "string",
  "type": "string",
  "state": {
    "descriptor": {
      "name": "string",
      "code": "string",
      "symbol": "string",
      "short_desc": "string",
      "long_desc": "string",
      "images": [
        "string"
      ],
      "audio": "http://example.com",
      "3d_render": "http://example.com"
    },
    "updated_at": "2019-08-24T14:15:22Z",
    "updated_by": "string"
  },
  "tracking": false,
  "agent": {
    "name": {
      "full": "string",
      "additional_name": "string",
      "family_name": "string",
      "given_name": "string",
      "call_sign": "string",
      "honorific_prefix": "string",
      "honorific_suffix": "string"
    },
    "image": "string",
    "dob": "2019-08-24",
    "gender": "string",
    "cred": "string",
    "tags": {
      "0": {
        "property1": "string",
        "property2": "string"
      },
      "property1": "string",
      "property2": "string"
    },
    "phone": "string",
    "email": "string"
  },
  "vehicle": {
    "category": "string",
    "capacity": 0,
    "make": "string",
    "model": "string",
    "size": "string",
    "variant": "string",
    "color": "string",
    "energy_type": "string",
    "registration": "string"
  },
  "start": {
    "location": {
      "id": "string",
      "descriptor": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
        "audio": "http://example.com",
        "3d_render": "http://example.com"
      },
      "gps": "string",
      "address": {
        "door": "string",
        "name": "string",
        "building": "string",
        "street": "string",
        "locality": "string",
        "ward": "string",
        "city": "string",
        "state": "string",
        "country": "string",
        "area_code": "string"
      },
      "station_code": "string",
      "city": {
        "name": "string",
        "code": "string"
      },
      "country": {
        "name": "string",
        "code": "string"
      },
      "circle": "string",
      "polygon": "string",
      "3dspace": "string"
    },
    "time": {
      "label": "string",
      "timestamp": "2019-08-24T14:15:22Z",
      "duration": "string",
      "range": {
        "start": "2019-08-24T14:15:22Z",
        "end": "2019-08-24T14:15:22Z"
      },
      "days": "string"
    },
    "instructions": {
      "name": "string",
      "code": "string",
      "symbol": "string",
      "short_desc": "string",
      "long_desc": "string",
      "images": [
        "string"
      ],
      "audio": "http://example.com",
      "3d_render": "http://example.com"
    },
    "contact": {
      "phone": "string",
      "email": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "end": {
    "location": {
      "id": "string",
      "descriptor": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
        "audio": "http://example.com",
        "3d_render": "http://example.com"
      },
      "gps": "string",
      "address": {
        "door": "string",
        "name": "string",
        "building": "string",
        "street": "string",
        "locality": "string",
        "ward": "string",
        "city": "string",
        "state": "string",
        "country": "string",
        "area_code": "string"
      },
      "station_code": "string",
      "city": {
        "name": "string",
        "code": "string"
      },
      "country": {
        "name": "string",
        "code": "string"
      },
      "circle": "string",
      "polygon": "string",
      "3dspace": "string"
    },
    "time": {
      "label": "string",
      "timestamp": "2019-08-24T14:15:22Z",
      "duration": "string",
      "range": {
        "start": "2019-08-24T14:15:22Z",
        "end": "2019-08-24T14:15:22Z"
      },
      "days": "string"
    },
    "instructions": {
      "name": "string",
      "code": "string",
      "symbol": "string",
      "short_desc": "string",
      "long_desc": "string",
      "images": [
        "string"
      ],
      "audio": "http://example.com",
      "3d_render": "http://example.com"
    },
    "contact": {
      "phone": "string",
      "email": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "purpose": "string",
  "tags": [
    {
      "property1": "string",
      "property2": "string"
    }
  ]
}

```

Describes how a single product/service will be rendered/fulfilled to the end customer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Unique reference ID to the fulfillment of an order|
|type|string|false|none|This describes the type of fulfillment|
|state|[State](#schema/state)|false|none|Describes a state|
|tracking|boolean|false|none|Indicates whether the fulfillment allows tracking|
|agent|any|false|none|The person who fulfills the order|

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[Person](#schema/person)|false|none|Describes a person. Extension not allowed|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[Contact](#schema/contact)|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vehicle|[Vehicle](#schema/vehicle)|false|none|Describes the properties of a vehicle used in a mobility service|
|start|object|false|none|Details on the start of fulfillment|
|» location|[Location](#schema/location)|false|none|Describes the location of a runtime object. Extension not allowed|
|» time|[Time](#schema/time)|false|none|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|» instructions|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|» contact|[Contact](#schema/contact)|false|none|none|
|end|object|false|none|Details on the end of fulfillment|
|» location|[Location](#schema/location)|false|none|Describes the location of a runtime object. Extension not allowed|
|» time|[Time](#schema/time)|false|none|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|» instructions|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|» contact|[Contact](#schema/contact)|false|none|none|
|purpose|string|false|none|none|
|tags|[[Tags](#schema/tags)]|false|none|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|

<h2 id="tocS_Gps">Gps</h2>

<a id="schemagps"></a>
<a id="schema_Gps"></a>
<a id="tocSgps"></a>
<a id="tocsgps"></a>

```json
"string"

```

Describes a gps coordinate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Describes a gps coordinate|

<h2 id="tocS_Image">Image</h2>

<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
"string"

```

Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```|

<h2 id="tocS_Intent">Intent</h2>

<a id="schemaintent"></a>
<a id="schema_Intent"></a>
<a id="tocSintent"></a>
<a id="tocsintent"></a>

```json
{
  "query_string": "string",
  "provider": {
    "id": "string",
    "descriptor": {
      "name": "string",
      "code": "string",
      "symbol": "string",
      "short_desc": "string",
      "long_desc": "string",
      "images": [
        "string"
      ],
      "audio": "http://example.com",
      "3d_render": "http://example.com"
    },
    "locations": [
      {
        "id": "string"
      }
    ]
  },
  "fulfillment": {
    "id": "string",
    "start": {
      "location": {
        "id": "string",
        "descriptor": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          "audio": "http://example.com",
          "3d_render": "http://example.com"
        },
        "gps": "string",
        "address": {
          "door": "string",
          "name": "string",
          "building": "string",
          "street": "string",
          "locality": "string",
          "ward": "string",
          "city": "string",
          "state": "string",
          "country": "string",
          "area_code": "string"
        },
        "station_code": "string",
        "city": {
          "name": "string",
          "code": "string"
        },
        "country": {
          "name": "string",
          "code": "string"
        },
        "circle": "string",
        "polygon": "string",
        "3dspace": "string"
      },
      "time": {
        "label": "string",
        "timestamp": "2019-08-24T14:15:22Z",
        "duration": "string",
        "range": {
          "start": "2019-08-24T14:15:22Z",
          "end": "2019-08-24T14:15:22Z"
        },
        "days": "string"
      }
    },
    "end": {
      "location": {
        "id": "string",
        "descriptor": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          "audio": "http://example.com",
          "3d_render": "http://example.com"
        },
        "gps": "string",
        "address": {
          "door": "string",
          "name": "string",
          "building": "string",
          "street": "string",
          "locality": "string",
          "ward": "string",
          "city": "string",
          "state": "string",
          "country": "string",
          "area_code": "string"
        },
        "station_code": "string",
        "city": {
          "name": "string",
          "code": "string"
        },
        "country": {
          "name": "string",
          "code": "string"
        },
        "circle": "string",
        "polygon": "string",
        "3dspace": "string"
      },
      "time": {
        "label": "string",
        "timestamp": "2019-08-24T14:15:22Z",
        "duration": "string",
        "range": {
          "start": "2019-08-24T14:15:22Z",
          "end": "2019-08-24T14:15:22Z"
        },
        "days": "string"
      }
    },
    "tags": {
      "property1": "string",
      "property2": "string"
    }
  },
  "payment": {
    "uri": "http://example.com",
    "tl_method": "http/get",
    "params": {
      "transaction_id": "string",
      "amount": "string",
      "property1": "string",
      "property2": "string"
    },
    "type": "ON-ORDER",
    "status": "PAID",
    "time": {
      "label": "string",
      "timestamp": "2019-08-24T14:15:22Z",
      "duration": "string",
      "range": {
        "start": "2019-08-24T14:15:22Z",
        "end": "2019-08-24T14:15:22Z"
      },
      "days": "string"
    }
  },
  "category": {
    "id": "string",
    "parent_category_id": "string",
    "descriptor": {
      "name": "string",
      "code": "string",
      "symbol": "string",
      "short_desc": "string",
      "long_desc": "string",
      "images": [
        "string"
      ],
      "audio": "http://example.com",
      "3d_render": "http://example.com"
    },
    "time": {
      "label": "string",
      "timestamp": "2019-08-24T14:15:22Z",
      "duration": "string",
      "range": {
        "start": "2019-08-24T14:15:22Z",
        "end": "2019-08-24T14:15:22Z"
      },
      "days": "string"
    },
    "tags": [
      {
        "property1": "string",
        "property2": "string"
      }
    ]
  },
  "offer": {
    "id": "string",
    "descriptor": {
      "name": "string"
    }
  },
  "item": {
    "id": "string",
    "descriptor": {
      "name": "string",
      "tags": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "purpose": "string",
  "tags": [
    {
      "property1": "string",
      "property2": "string"
    }
  ]
}

```

Intent of a user. Used for searching for services

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|query_string|string|false|none|none|
|provider|object|false|none|none|
|» id|[Provider/properties/id](#schema/provider/properties/id)|false|none|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|» descriptor|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|» locations|[object]|false|none|none|
|»» id|[Location/properties/id](#schema/location/properties/id)|false|none|none|
|fulfillment|object|false|none|none|
|» id|[Fulfillment/properties/id](#schema/fulfillment/properties/id)|false|none|Unique reference ID to the fulfillment of an order|
|» start|object|false|none|none|
|»» location|[Location](#schema/location)|false|none|Describes the location of a runtime object. Extension not allowed|
|»» time|[Time](#schema/time)|false|none|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|» end|object|false|none|none|
|»» location|[Location](#schema/location)|false|none|Describes the location of a runtime object. Extension not allowed|
|»» time|[Time](#schema/time)|false|none|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|» tags|[Tags](#schema/tags)|false|none|Describes a tag. This is a simple key-value store which is used to contain extended metadata|
|payment|[Payment](#schema/payment)|false|none|Describes a payment|
|category|[Category](#schema/category)|false|none|Describes a category|
|offer|object|false|none|none|
|» id|[Offer/properties/id](#schema/offer/properties/id)|false|none|none|
|» descriptor|object|false|none|none|
|»» name|string|false|none|none|
|item|object|false|none|none|
|» id|[Category/properties/id](#schema/category/properties/id)|false|none|Unique id of the category|
|» descriptor|object|false|none|none|
|»» name|string|false|none|none|
|»» tags|[Tags](#schema/tags)|false|none|Describes a tag. This is a simple key-value store which is used to contain extended metadata|
|purpose|string|false|none|none|
|tags|[[Tags](#schema/tags)]|false|none|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|

<h2 id="tocS_ItemQuantity">ItemQuantity</h2>

<a id="schemaitemquantity"></a>
<a id="schema_ItemQuantity"></a>
<a id="tocSitemquantity"></a>
<a id="tocsitemquantity"></a>

```json
{
  "allocated": {
    "count": 0,
    "measure": {
      "type": "CONSTANT",
      "value": 0,
      "estimated_value": 0,
      "computed_value": 0,
      "range": {
        "min": 0,
        "max": 0
      },
      "unit": "string"
    }
  },
  "available": {
    "count": 0,
    "measure": {
      "type": "CONSTANT",
      "value": 0,
      "estimated_value": 0,
      "computed_value": 0,
      "range": {
        "min": 0,
        "max": 0
      },
      "unit": "string"
    }
  },
  "maximum": {
    "count": 1,
    "measure": {
      "type": "CONSTANT",
      "value": 0,
      "estimated_value": 0,
      "computed_value": 0,
      "range": {
        "min": 0,
        "max": 0
      },
      "unit": "string"
    }
  },
  "minimum": {
    "count": 0,
    "measure": {
      "type": "CONSTANT",
      "value": 0,
      "estimated_value": 0,
      "computed_value": 0,
      "range": {
        "min": 0,
        "max": 0
      },
      "unit": "string"
    }
  },
  "selected": {
    "count": 0,
    "measure": {
      "type": "CONSTANT",
      "value": 0,
      "estimated_value": 0,
      "computed_value": 0,
      "range": {
        "min": 0,
        "max": 0
      },
      "unit": "string"
    }
  }
}

```

Describes count or amount of an item

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocated|object|false|none|none|
|» count|integer|false|none|none|
|» measure|[Scalar](#schema/scalar)|false|none|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|available|object|false|none|none|
|» count|integer|false|none|none|
|» measure|[Scalar](#schema/scalar)|false|none|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|maximum|object|false|none|none|
|» count|integer|false|none|none|
|» measure|[Scalar](#schema/scalar)|false|none|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|minimum|object|false|none|none|
|» count|integer|false|none|none|
|» measure|[Scalar](#schema/scalar)|false|none|An object representing a scalar quantity. Extension allowed only to the limit of vector|
|selected|object|false|none|none|
|» count|integer|false|none|none|
|» measure|[Scalar](#schema/scalar)|false|none|An object representing a scalar quantity. Extension allowed only to the limit of vector|

<h2 id="tocS_Item">Item</h2>

<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "id": "string",
  "parent_item_id": "string",
  "descriptor": {
    "name": "string",
    "code": "string",
    "symbol": "string",
    "short_desc": "string",
    "long_desc": "string",
    "images": [
      "string"
    ],
    "audio": "http://example.com",
    "3d_render": "http://example.com"
  },
  "price": {
    "currency": "string",
    "value": "string",
    "estimated_value": "string",
    "computed_value": "string",
    "listed_value": "string",
    "offered_value": "string",
    "minimum_value": "string",
    "maximum_value": "string"
  },
  "category_id": "string",
  "location_id": "string",
  "time": {
    "label": "string",
    "timestamp": "2019-08-24T14:15:22Z",
    "duration": "string",
    "range": {
      "start": "2019-08-24T14:15:22Z",
      "end": "2019-08-24T14:15:22Z"
    },
    "days": "string"
  },
  "matched": true,
  "related": true,
  "recommended": true,
  "tags": [
    {
      "property1": "string",
      "property2": "string"
    }
  ]
}

```

Describes an item. Allows for domain extension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(#/components/schemas/Item/properties/id)|false|none|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|parent_item_id|[Item/properties/id](#schema/item/properties/id)|false|none|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|descriptor|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|price|[Price](#schema/price)|false|none|Describes the price of an item. Allows for domain extension.|
|category_id|[Category/properties/id](#schema/category/properties/id)|false|none|Unique id of the category|
|location_id|[Location/properties/id](#schema/location/properties/id)|false|none|none|
|time|[Time](#schema/time)|false|none|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|matched|boolean|false|none|none|
|related|boolean|false|none|none|
|recommended|boolean|false|none|none|
|tags|[[Tags](#schema/tags)]|false|none|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|

<h2 id="tocS_Language">Language</h2>

<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
{
  "code": "string"
}

```

indicates language code. Beckn supports country codes as per ISO 639.2 standard

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|

<h2 id="tocS_Location">Location</h2>

<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "id": "string",
  "descriptor": {
    "name": "string",
    "code": "string",
    "symbol": "string",
    "short_desc": "string",
    "long_desc": "string",
    "images": [
      "string"
    ],
    "audio": "http://example.com",
    "3d_render": "http://example.com"
  },
  "gps": "string",
  "address": {
    "door": "string",
    "name": "string",
    "building": "string",
    "street": "string",
    "locality": "string",
    "ward": "string",
    "city": "string",
    "state": "string",
    "country": "string",
    "area_code": "string"
  },
  "station_code": "string",
  "city": {
    "name": "string",
    "code": "string"
  },
  "country": {
    "name": "string",
    "code": "string"
  },
  "circle": "string",
  "polygon": "string",
  "3dspace": "string"
}

```

Describes the location of a runtime object. Extension not allowed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|descriptor|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|gps|[Gps](#schema/gps)|false|none|Describes a gps coordinate|
|address|[Address](#schema/address)|false|none|Describes an address|
|station_code|string|false|none|none|
|city|[City](#schema/city)|false|none|Describes a city|
|country|[Country](#schema/country)|false|none|Describes a country.|
|circle|[Circle](#schema/circle)|false|none|Describes a circular area on the map|
|polygon|string|false|none|none|
|3dspace|string|false|none|none|

<h2 id="tocS_MonetaryValue">MonetaryValue</h2>

<a id="schemamonetaryvalue"></a>
<a id="schema_MonetaryValue"></a>
<a id="tocSmonetaryvalue"></a>
<a id="tocsmonetaryvalue"></a>

```json
{
  "currency": "string",
  "value": "string"
}

```

Describes a monetary value used for exchange

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|none|
|value|[DecimalValue](#schema/decimalvalue)|false|none|Describes a decimal value|

<h2 id="tocS_Name">Name</h2>

<a id="schemaname"></a>
<a id="schema_Name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "full": "string",
  "additional_name": "string",
  "family_name": "string",
  "given_name": "string",
  "call_sign": "string",
  "honorific_prefix": "string",
  "honorific_suffix": "string"
}

```

Describes the name of a person

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|full|string|false|none|Format: ./{honorific prefix}/{given_name}/{family_name}/{additional_name}/{call_sign}/{honorific_suffix}|
|additional_name|string|false|none|An additional name for a Person, can be used for a middle name.|
|family_name|string|false|none|Family name. In India, it is the last name of an Person. This can be used along with givenName instead of the name property.|
|given_name|string|false|none|Given name. In India, it is the first name of a Person. This can be used along with familyName instead of the name property.|
|call_sign|string|false|none|A callsign, as used in broadcasting and radio communications to identify people|
|honorific_prefix|string|false|none|An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.|
|honorific_suffix|string|false|none|An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.|

<h2 id="tocS_Offer">Offer</h2>

<a id="schemaoffer"></a>
<a id="schema_Offer"></a>
<a id="tocSoffer"></a>
<a id="tocsoffer"></a>

```json
{
  "id": "string",
  "descriptor": {
    "name": "string",
    "code": "string",
    "symbol": "string",
    "short_desc": "string",
    "long_desc": "string",
    "images": [
      "string"
    ],
    "audio": "http://example.com",
    "3d_render": "http://example.com"
  },
  "location_ids": [
    "string"
  ],
  "category_ids": [
    "string"
  ],
  "item_ids": [
    "string"
  ],
  "time": {
    "label": "string",
    "timestamp": "2019-08-24T14:15:22Z",
    "duration": "string",
    "range": {
      "start": "2019-08-24T14:15:22Z",
      "end": "2019-08-24T14:15:22Z"
    },
    "days": "string"
  }
}

```

Describes an offer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|descriptor|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|location_ids|[[Location/properties/id](#schema/location/properties/id)]|false|none|none|
|category_ids|[[Category/properties/id](#schema/category/properties/id)]|false|none|[Unique id of the category]|
|item_ids|[[Item/properties/id](#schema/item/properties/id)]|false|none|[This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.]|
|time|[Time](#schema/time)|false|none|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|

<h2 id="tocS_Operator">Operator</h2>

<a id="schemaoperator"></a>
<a id="schema_Operator"></a>
<a id="tocSoperator"></a>
<a id="tocsoperator"></a>

```json
{
  "id": "string",
  "descriptor": {
    "name": "string",
    "code": "string",
    "symbol": "string",
    "short_desc": "string",
    "long_desc": "string",
    "images": [
      "string"
    ],
    "audio": "http://example.com",
    "3d_render": "http://example.com"
  },
  "location_ids": [
    "string"
  ],
  "category_ids": [
    "string"
  ],
  "item_ids": [
    "string"
  ],
  "time": {
    "label": "string",
    "timestamp": "2019-08-24T14:15:22Z",
    "duration": "string",
    "range": {
      "start": "2019-08-24T14:15:22Z",
      "end": "2019-08-24T14:15:22Z"
    },
    "days": "string"
  }
}

```

Describes an offer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|descriptor|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|location_ids|[[Location/properties/id](#schema/location/properties/id)]|false|none|none|
|category_ids|[[Category/properties/id](#schema/category/properties/id)]|false|none|[Unique id of the category]|
|item_ids|[[Item/properties/id](#schema/item/properties/id)]|false|none|[This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.]|
|time|[Time](#schema/time)|false|none|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|

<h2 id="tocS_Option">Option</h2>

<a id="schemaoption"></a>
<a id="schema_Option"></a>
<a id="tocSoption"></a>
<a id="tocsoption"></a>

```json
{
  "id": "string",
  "descriptor": {
    "name": "string",
    "code": "string",
    "symbol": "string",
    "short_desc": "string",
    "long_desc": "string",
    "images": [
      "string"
    ],
    "audio": "http://example.com",
    "3d_render": "http://example.com"
  }
}

```

Describes a selectable option

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|descriptor|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|

<h2 id="tocS_Order">Order</h2>

<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "id": "string",
  "state": "string",
  "provider": {
    "id": "string",
    "locations": [
      {
        "id": "string"
      }
    ]
  },
  "items": [
    {
      "id": "string",
      "quantity": {
        "count": 0,
        "measure": {
          "type": "CONSTANT",
          "value": 0,
          "estimated_value": 0,
          "computed_value": 0,
          "range": {
            "min": 0,
            "max": 0
          },
          "unit": "string"
        }
      }
    }
  ],
  "add_ons": [
    {
      "id": "string"
    }
  ],
  "offers": [
    {
      "id": "string"
    }
  ],
  "billing": {
    "name": "string",
    "organization": {
      "name": "string",
      "cred": "string"
    },
    "address": {
      "door": "string",
      "name": "string",
      "building": "string",
      "street": "string",
      "locality": "string",
      "ward": "string",
      "city": "string",
      "state": "string",
      "country": "string",
      "area_code": "string"
    },
    "email": "user@example.com",
    "phone": "string",
    "time": {
      "label": "string",
      "timestamp": "2019-08-24T14:15:22Z",
      "duration": "string",
      "range": {
        "start": "2019-08-24T14:15:22Z",
        "end": "2019-08-24T14:15:22Z"
      },
      "days": "string"
    },
    "tax_number": "string",
    "created_at": "2019-08-24T14:15:22Z",
    "updated_at": "2019-08-24T14:15:22Z"
  },
  "fulfillment": {
    "id": "string",
    "type": "string",
    "state": {
      "descriptor": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
        "audio": "http://example.com",
        "3d_render": "http://example.com"
      },
      "updated_at": "2019-08-24T14:15:22Z",
      "updated_by": "string"
    },
    "tracking": false,
    "agent": {
      "name": {
        "full": "string",
        "additional_name": "string",
        "family_name": "string",
        "given_name": "string",
        "call_sign": "string",
        "honorific_prefix": "string",
        "honorific_suffix": "string"
      },
      "image": "string",
      "dob": "2019-08-24",
      "gender": "string",
      "cred": "string",
      "tags": {
        "0": {
          "property1": "string",
          "property2": "string"
        },
        "property1": "string",
        "property2": "string"
      },
      "phone": "string",
      "email": "string"
    },
    "vehicle": {
      "category": "string",
      "capacity": 0,
      "make": "string",
      "model": "string",
      "size": "string",
      "variant": "string",
      "color": "string",
      "energy_type": "string",
      "registration": "string"
    },
    "start": {
      "location": {
        "id": "string",
        "descriptor": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          "audio": "http://example.com",
          "3d_render": "http://example.com"
        },
        "gps": "string",
        "address": {
          "door": "string",
          "name": "string",
          "building": "string",
          "street": "string",
          "locality": "string",
          "ward": "string",
          "city": "string",
          "state": "string",
          "country": "string",
          "area_code": "string"
        },
        "station_code": "string",
        "city": {
          "name": "string",
          "code": "string"
        },
        "country": {
          "name": "string",
          "code": "string"
        },
        "circle": "string",
        "polygon": "string",
        "3dspace": "string"
      },
      "time": {
        "label": "string",
        "timestamp": "2019-08-24T14:15:22Z",
        "duration": "string",
        "range": {
          "start": "2019-08-24T14:15:22Z",
          "end": "2019-08-24T14:15:22Z"
        },
        "days": "string"
      },
      "instructions": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
        "audio": "http://example.com",
        "3d_render": "http://example.com"
      },
      "contact": {
        "phone": "string",
        "email": "string",
        "tags": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "end": {
      "location": {
        "id": "string",
        "descriptor": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          "audio": "http://example.com",
          "3d_render": "http://example.com"
        },
        "gps": "string",
        "address": {
          "door": "string",
          "name": "string",
          "building": "string",
          "street": "string",
          "locality": "string",
          "ward": "string",
          "city": "string",
          "state": "string",
          "country": "string",
          "area_code": "string"
        },
        "station_code": "string",
        "city": {
          "name": "string",
          "code": "string"
        },
        "country": {
          "name": "string",
          "code": "string"
        },
        "circle": "string",
        "polygon": "string",
        "3dspace": "string"
      },
      "time": {
        "label": "string",
        "timestamp": "2019-08-24T14:15:22Z",
        "duration": "string",
        "range": {
          "start": "2019-08-24T14:15:22Z",
          "end": "2019-08-24T14:15:22Z"
        },
        "days": "string"
      },
      "instructions": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
        "audio": "http://example.com",
        "3d_render": "http://example.com"
      },
      "contact": {
        "phone": "string",
        "email": "string",
        "tags": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "purpose": "string",
    "tags": [
      {
        "property1": "string",
        "property2": "string"
      }
    ],
    "customer": {
      "name": {
        "full": "string",
        "additional_name": "string",
        "family_name": "string",
        "given_name": "string",
        "call_sign": "string",
        "honorific_prefix": "string",
        "honorific_suffix": "string"
      },
      "image": "string",
      "dob": "2019-08-24",
      "gender": "string",
      "cred": "string",
      "tags": {
        "0": {
          "property1": "string",
          "property2": "string"
        },
        "property1": "string",
        "property2": "string"
      },
      "phone": "string",
      "email": "string"
    }
  },
  "quote": {
    "price": {
      "currency": "string",
      "value": "string",
      "estimated_value": "string",
      "computed_value": "string",
      "listed_value": "string",
      "offered_value": "string",
      "minimum_value": "string",
      "maximum_value": "string"
    },
    "breakup": [
      {
        "type": "item",
        "ref_id": "string",
        "title": "string",
        "price": {
          "currency": "string",
          "value": "string",
          "estimated_value": "string",
          "computed_value": "string",
          "listed_value": "string",
          "offered_value": "string",
          "minimum_value": "string",
          "maximum_value": "string"
        }
      }
    ],
    "ttl": "string"
  },
  "payment": {
    "uri": "http://example.com",
    "tl_method": "http/get",
    "params": {
      "transaction_id": "string",
      "amount": "string",
      "property1": "string",
      "property2": "string"
    },
    "type": "ON-ORDER",
    "status": "PAID",
    "time": {
      "label": "string",
      "timestamp": "2019-08-24T14:15:22Z",
      "duration": "string",
      "range": {
        "start": "2019-08-24T14:15:22Z",
        "end": "2019-08-24T14:15:22Z"
      },
      "days": "string"
    }
  },
  "created_at": "2019-08-24T14:15:22Z",
  "updated_at": "2019-08-24T14:15:22Z"
}

```

Describes the details of an order

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Hash of order object without id|
|state|string|false|none|none|
|provider|object|true|none|none|
|» id|[Provider/properties/id](#schema/provider/properties/id)|true|none|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|» locations|[object]|true|none|none|
|»» id|[Location/properties/id](#schema/location/properties/id)|true|none|none|
|items|[object]|true|none|none|
|» id|[Item/properties/id](#schema/item/properties/id)|true|none|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.|
|» quantity|[ItemQuantity/properties/selected](#schema/itemquantity/properties/selected)|true|none|none|
|add_ons|[object]|true|none|none|
|» id|[AddOn/properties/id](#schema/addon/properties/id)|true|none|ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR|
|offers|[object]|true|none|none|
|» id|[Offer/properties/id](#schema/offer/properties/id)|true|none|none|
|billing|[Billing](#schema/billing)|true|none|Describes a billing event|
|fulfillment|any|true|none|none|

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[Fulfillment](#schema/fulfillment)|false|none|Describes how a single product/service will be rendered/fulfilled to the end customer|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|none|
|»» customer|any|true|none|none|

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|[Person](#schema/person)|false|none|Describes a person. Extension not allowed|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|[Contact](#schema/contact)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|object|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quote|[Quotation](#schema/quotation)|true|none|Describes a quote|
|payment|[Payment](#schema/payment)|true|none|Describes a payment|
|created_at|string(date-time)|false|none|none|
|updated_at|string(date-time)|false|none|none|

<h2 id="tocS_Organization">Organization</h2>

<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "name": "string",
  "cred": "string"
}

```

Describes an organization

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|cred|string|false|none|none|

<h2 id="tocS_Page">Page</h2>

<a id="schemapage"></a>
<a id="schema_Page"></a>
<a id="tocSpage"></a>
<a id="tocspage"></a>

```json
{
  "id": "string",
  "next_id": "string"
}

```

Describes a page in a search result

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|next_id|string|false|none|none|

<h2 id="tocS_Payment">Payment</h2>

<a id="schemapayment"></a>
<a id="schema_Payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "uri": "http://example.com",
  "tl_method": "http/get",
  "params": {
    "transaction_id": "string",
    "amount": "string",
    "property1": "string",
    "property2": "string"
  },
  "type": "ON-ORDER",
  "status": "PAID",
  "time": {
    "label": "string",
    "timestamp": "2019-08-24T14:15:22Z",
    "duration": "string",
    "range": {
      "start": "2019-08-24T14:15:22Z",
      "end": "2019-08-24T14:15:22Z"
    },
    "days": "string"
  }
}

```

Describes a payment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string(uri)|false|none|A payment uri to be called by the BAP. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234|
|tl_method|string|false|none|none|
|params|object|false|none|none|
|» **additionalProperties**|string|false|none|none|
|» transaction_id|string|false|none|This value will be placed in the the $transaction_id url param in case of http/get and in the requestBody http/post requests|
|» amount|[MonetaryValue/properties/value](#schema/monetaryvalue/properties/value)|false|none|Describes a decimal value|
|type|string|false|none|none|
|status|string|false|none|none|
|time|[Time](#schema/time)|false|none|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|

#### Enumerated Values

|Property|Value|
|---|---|
|tl_method|http/get|
|tl_method|http/post|
|type|ON-ORDER|
|type|PRE-FULFILLMENT|
|type|ON-FULFILLMENT|
|type|POST-FULFILLMENT|
|status|PAID|
|status|NOT-PATD|

<h2 id="tocS_Person">Person</h2>

<a id="schemaperson"></a>
<a id="schema_Person"></a>
<a id="tocSperson"></a>
<a id="tocsperson"></a>

```json
{
  "name": {
    "full": "string",
    "additional_name": "string",
    "family_name": "string",
    "given_name": "string",
    "call_sign": "string",
    "honorific_prefix": "string",
    "honorific_suffix": "string"
  },
  "image": "string",
  "dob": "2019-08-24",
  "gender": "string",
  "cred": "string",
  "tags": [
    {
      "property1": "string",
      "property2": "string"
    }
  ]
}

```

Describes a person. Extension not allowed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[Name](#schema/name)|false|none|Describes the name of a person|
|image|[Image](#schema/image)|false|none|Image of an object.    A url based image will look like   ```uri:http://path/to/image```    An image can also be sent as a data string. For example :    ```data:js87y34ilhriuho84r3i4```|
|dob|string(date)|false|none|none|
|gender|string|false|none|Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender|
|cred|string|false|none|none|
|tags|[[Tags](#schema/tags)]|false|none|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|

<h2 id="tocS_Policy">Policy</h2>

<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "id": "string",
  "descriptor": {
    "name": "string",
    "code": "string",
    "symbol": "string",
    "short_desc": "string",
    "long_desc": "string",
    "images": [
      "string"
    ],
    "audio": "http://example.com",
    "3d_render": "http://example.com"
  },
  "parent_policy_id": "string",
  "time": {
    "label": "string",
    "timestamp": "2019-08-24T14:15:22Z",
    "duration": "string",
    "range": {
      "start": "2019-08-24T14:15:22Z",
      "end": "2019-08-24T14:15:22Z"
    },
    "days": "string"
  }
}

```

Describes a policy. Allows for domain extension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|descriptor|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|parent_policy_id|[Policy/properties/id](#schema/policy/properties/id)|false|none|none|
|time|[Time](#schema/time)|false|none|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|

<h2 id="tocS_Price">Price</h2>

<a id="schemaprice"></a>
<a id="schema_Price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
{
  "currency": "string",
  "value": "string",
  "estimated_value": "string",
  "computed_value": "string",
  "listed_value": "string",
  "offered_value": "string",
  "minimum_value": "string",
  "maximum_value": "string"
}

```

Describes the price of an item. Allows for domain extension.

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[MonetaryValue](#schema/monetaryvalue)|false|none|Describes a monetary value used for exchange|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» estimated_value|[DecimalValue](#schema/decimalvalue)|false|none|Describes a decimal value|
|» computed_value|[DecimalValue](#schema/decimalvalue)|false|none|Describes a decimal value|
|» listed_value|[DecimalValue](#schema/decimalvalue)|false|none|Describes a decimal value|
|» offered_value|[DecimalValue](#schema/decimalvalue)|false|none|Describes a decimal value|
|» minimum_value|[DecimalValue](#schema/decimalvalue)|false|none|Describes a decimal value|
|» maximum_value|[DecimalValue](#schema/decimalvalue)|false|none|Describes a decimal value|

<h2 id="tocS_ProviderCatalog">ProviderCatalog</h2>

<a id="schemaprovidercatalog"></a>
<a id="schema_ProviderCatalog"></a>
<a id="tocSprovidercatalog"></a>
<a id="tocsprovidercatalog"></a>

```json
{
  "categories": [
    {
      "id": "string",
      "parent_category_id": "string",
      "descriptor": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
        "audio": "http://example.com",
        "3d_render": "http://example.com"
      },
      "time": {
        "label": "string",
        "timestamp": "2019-08-24T14:15:22Z",
        "duration": "string",
        "range": {
          "start": "2019-08-24T14:15:22Z",
          "end": "2019-08-24T14:15:22Z"
        },
        "days": "string"
      },
      "tags": [
        {
          "property1": "string",
          "property2": "string"
        }
      ]
    }
  ],
  "fulfillments": [
    {
      "id": "string",
      "type": "string",
      "state": {
        "descriptor": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          "audio": "http://example.com",
          "3d_render": "http://example.com"
        },
        "updated_at": "2019-08-24T14:15:22Z",
        "updated_by": "string"
      },
      "tracking": false,
      "agent": {
        "name": {
          "full": "string",
          "additional_name": "string",
          "family_name": "string",
          "given_name": "string",
          "call_sign": "string",
          "honorific_prefix": "string",
          "honorific_suffix": "string"
        },
        "image": "string",
        "dob": "2019-08-24",
        "gender": "string",
        "cred": "string",
        "tags": {
          "0": {
            "property1": "string",
            "property2": "string"
          },
          "property1": "string",
          "property2": "string"
        },
        "phone": "string",
        "email": "string"
      },
      "vehicle": {
        "category": "string",
        "capacity": 0,
        "make": "string",
        "model": "string",
        "size": "string",
        "variant": "string",
        "color": "string",
        "energy_type": "string",
        "registration": "string"
      },
      "start": {
        "location": {
          "id": "string",
          "descriptor": {
            "name": "string",
            "code": "string",
            "symbol": "string",
            "short_desc": "string",
            "long_desc": "string",
            "images": [
              "string"
            ],
            "audio": "http://example.com",
            "3d_render": "http://example.com"
          },
          "gps": "string",
          "address": {
            "door": "string",
            "name": "string",
            "building": "string",
            "street": "string",
            "locality": "string",
            "ward": "string",
            "city": "string",
            "state": "string",
            "country": "string",
            "area_code": "string"
          },
          "station_code": "string",
          "city": {
            "name": "string",
            "code": "string"
          },
          "country": {
            "name": "string",
            "code": "string"
          },
          "circle": "string",
          "polygon": "string",
          "3dspace": "string"
        },
        "time": {
          "label": "string",
          "timestamp": "2019-08-24T14:15:22Z",
          "duration": "string",
          "range": {
            "start": "2019-08-24T14:15:22Z",
            "end": "2019-08-24T14:15:22Z"
          },
          "days": "string"
        },
        "instructions": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          "audio": "http://example.com",
          "3d_render": "http://example.com"
        },
        "contact": {
          "phone": "string",
          "email": "string",
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "end": {
        "location": {
          "id": "string",
          "descriptor": {
            "name": "string",
            "code": "string",
            "symbol": "string",
            "short_desc": "string",
            "long_desc": "string",
            "images": [
              "string"
            ],
            "audio": "http://example.com",
            "3d_render": "http://example.com"
          },
          "gps": "string",
          "address": {
            "door": "string",
            "name": "string",
            "building": "string",
            "street": "string",
            "locality": "string",
            "ward": "string",
            "city": "string",
            "state": "string",
            "country": "string",
            "area_code": "string"
          },
          "station_code": "string",
          "city": {
            "name": "string",
            "code": "string"
          },
          "country": {
            "name": "string",
            "code": "string"
          },
          "circle": "string",
          "polygon": "string",
          "3dspace": "string"
        },
        "time": {
          "label": "string",
          "timestamp": "2019-08-24T14:15:22Z",
          "duration": "string",
          "range": {
            "start": "2019-08-24T14:15:22Z",
            "end": "2019-08-24T14:15:22Z"
          },
          "days": "string"
        },
        "instructions": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          "audio": "http://example.com",
          "3d_render": "http://example.com"
        },
        "contact": {
          "phone": "string",
          "email": "string",
          "tags": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "purpose": "string",
      "tags": [
        {
          "property1": "string",
          "property2": "string"
        }
      ]
    }
  ],
  "payments": [
    {
      "uri": "http://example.com",
      "tl_method": "http/get",
      "params": {
        "transaction_id": "string",
        "amount": "string",
        "property1": "string",
        "property2": "string"
      },
      "type": "ON-ORDER",
      "status": "PAID",
      "time": {
        "label": "string",
        "timestamp": "2019-08-24T14:15:22Z",
        "duration": "string",
        "range": {
          "start": "2019-08-24T14:15:22Z",
          "end": "2019-08-24T14:15:22Z"
        },
        "days": "string"
      }
    }
  ],
  "locations": [
    {
      "id": "string",
      "descriptor": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
        "audio": "http://example.com",
        "3d_render": "http://example.com"
      },
      "gps": "string",
      "address": {
        "door": "string",
        "name": "string",
        "building": "string",
        "street": "string",
        "locality": "string",
        "ward": "string",
        "city": "string",
        "state": "string",
        "country": "string",
        "area_code": "string"
      },
      "station_code": "string",
      "city": {
        "name": "string",
        "code": "string"
      },
      "country": {
        "name": "string",
        "code": "string"
      },
      "circle": "string",
      "polygon": "string",
      "3dspace": "string",
      "time": {
        "label": "string",
        "timestamp": "2019-08-24T14:15:22Z",
        "duration": "string",
        "range": {
          "start": "2019-08-24T14:15:22Z",
          "end": "2019-08-24T14:15:22Z"
        },
        "days": "string"
      }
    }
  ],
  "offers": [
    {
      "id": "string",
      "descriptor": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
        "audio": "http://example.com",
        "3d_render": "http://example.com"
      },
      "location_ids": [
        "string"
      ],
      "category_ids": [
        "string"
      ],
      "item_ids": [
        "string"
      ],
      "time": {
        "label": "string",
        "timestamp": "2019-08-24T14:15:22Z",
        "duration": "string",
        "range": {
          "start": "2019-08-24T14:15:22Z",
          "end": "2019-08-24T14:15:22Z"
        },
        "days": "string"
      }
    }
  ],
  "items": [
    {
      "id": "string",
      "parent_item_id": "string",
      "descriptor": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
        "audio": "http://example.com",
        "3d_render": "http://example.com"
      },
      "price": {
        "currency": "string",
        "value": "string",
        "estimated_value": "string",
        "computed_value": "string",
        "listed_value": "string",
        "offered_value": "string",
        "minimum_value": "string",
        "maximum_value": "string"
      },
      "category_id": "string",
      "location_id": "string",
      "time": {
        "label": "string",
        "timestamp": "2019-08-24T14:15:22Z",
        "duration": "string",
        "range": {
          "start": "2019-08-24T14:15:22Z",
          "end": "2019-08-24T14:15:22Z"
        },
        "days": "string"
      },
      "matched": true,
      "related": true,
      "recommended": true,
      "tags": [
        {
          "property1": "string",
          "property2": "string"
        }
      ]
    }
  ],
  "exp": "2019-08-24T14:15:22Z"
}

```

Describes a provider catalog

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[Category](#schema/category)]|false|none|[Describes a category]|
|fulfillments|[[Fulfillment](#schema/fulfillment)]|false|none|[Describes how a single product/service will be rendered/fulfilled to the end customer]|
|payments|[[Payment](#schema/payment)]|false|none|[Describes a payment]|
|locations|[allOf]|false|none|none|

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[Location](#schema/location)|false|none|Describes the location of a runtime object. Extension not allowed|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|none|
|»» time|[Time](#schema/time)|false|none|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offers|[[Offer](#schema/offer)]|false|none|[Describes an offer]|
|items|[[Item](#schema/item)]|false|none|[Describes an item. Allows for domain extension.]|
|exp|string(date-time)|false|none|Time after which catalog has to be refreshed|

<h2 id="tocS_Provider">Provider</h2>

<a id="schemaprovider"></a>
<a id="schema_Provider"></a>
<a id="tocSprovider"></a>
<a id="tocsprovider"></a>

```json
{
  "id": "string",
  "descriptor": {
    "name": "string",
    "code": "string",
    "symbol": "string",
    "short_desc": "string",
    "long_desc": "string",
    "images": [
      "string"
    ],
    "audio": "http://example.com",
    "3d_render": "http://example.com"
  },
  "time": {
    "label": "string",
    "timestamp": "2019-08-24T14:15:22Z",
    "duration": "string",
    "range": {
      "start": "2019-08-24T14:15:22Z",
      "end": "2019-08-24T14:15:22Z"
    },
    "days": "string"
  },
  "locations": [
    {
      "id": "string",
      "descriptor": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
        "audio": "http://example.com",
        "3d_render": "http://example.com"
      },
      "gps": "string",
      "address": {
        "door": "string",
        "name": "string",
        "building": "string",
        "street": "string",
        "locality": "string",
        "ward": "string",
        "city": "string",
        "state": "string",
        "country": "string",
        "area_code": "string"
      },
      "station_code": "string",
      "city": {
        "name": "string",
        "code": "string"
      },
      "country": {
        "name": "string",
        "code": "string"
      },
      "circle": "string",
      "polygon": "string",
      "3dspace": "string"
    }
  ],
  "tags": [
    {
      "property1": "string",
      "property2": "string"
    }
  ]
}

```

Describes a service provider. This can be a restaurant, a hospital, a Store etc

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Id of the provider. The syntax of the ID is {unique provider identifier. If the provider name has an @, it has to be escaped}@{bpp_id}|
|descriptor|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|time|[Time](#schema/time)|false|none|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations|
|locations|[[Location](#schema/location)]|false|none|[Describes the location of a runtime object. Extension not allowed]|
|tags|[[Tags](#schema/tags)]|false|none|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|

<h2 id="tocS_Quotation">Quotation</h2>

<a id="schemaquotation"></a>
<a id="schema_Quotation"></a>
<a id="tocSquotation"></a>
<a id="tocsquotation"></a>

```json
{
  "price": {
    "currency": "string",
    "value": "string",
    "estimated_value": "string",
    "computed_value": "string",
    "listed_value": "string",
    "offered_value": "string",
    "minimum_value": "string",
    "maximum_value": "string"
  },
  "breakup": [
    {
      "type": "item",
      "ref_id": "string",
      "title": "string",
      "price": {
        "currency": "string",
        "value": "string",
        "estimated_value": "string",
        "computed_value": "string",
        "listed_value": "string",
        "offered_value": "string",
        "minimum_value": "string",
        "maximum_value": "string"
      }
    }
  ],
  "ttl": "string"
}

```

Describes a quote

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|price|[Price](#schema/price)|false|none|Describes the price of an item. Allows for domain extension.|
|breakup|[object]|false|none|none|
|» type|string|false|none|none|
|» ref_id|string|false|none|none|
|» title|string|false|none|none|
|» price|[Price](#schema/price)|false|none|Describes the price of an item. Allows for domain extension.|
|ttl|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|

#### Enumerated Values

|Property|Value|
|---|---|
|type|item|
|type|offer|
|type|add-on|
|type|fulfillment|

<h2 id="tocS_Rating">Rating</h2>

<a id="schemarating"></a>
<a id="schema_Rating"></a>
<a id="tocSrating"></a>
<a id="tocsrating"></a>

```json
{
  "value": 0,
  "unit": "U+2B50",
  "max_value": 5,
  "direction": "UP"
}

```

Describes the rating of a person or an object. Extension not allowed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number|false|none|none|
|unit|string|false|none|Follows the unicode 13.0 format for emojis : https://unicode.org/emoji/charts/full-emoji-list.html|
|max_value|number|false|none|none|
|direction|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|UP|
|direction|DOWN|

<h2 id="tocS_Scalar">Scalar</h2>

<a id="schemascalar"></a>
<a id="schema_Scalar"></a>
<a id="tocSscalar"></a>
<a id="tocsscalar"></a>

```json
{
  "type": "CONSTANT",
  "value": 0,
  "estimated_value": 0,
  "computed_value": 0,
  "range": {
    "min": 0,
    "max": 0
  },
  "unit": "string"
}

```

An object representing a scalar quantity. Extension allowed only to the limit of vector

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|value|number|true|none|none|
|estimated_value|number|false|none|none|
|computed_value|number|false|none|none|
|range|object|false|none|none|
|» min|number|false|none|none|
|» max|number|false|none|none|
|unit|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CONSTANT|
|type|VARIABLE|

<h2 id="tocS_Schedule">Schedule</h2>

<a id="schemaschedule"></a>
<a id="schema_Schedule"></a>
<a id="tocSschedule"></a>
<a id="tocsschedule"></a>

```json
{
  "frequency": "string",
  "holidays": [
    "2019-08-24T14:15:22Z"
  ],
  "times": [
    "2019-08-24T14:15:22Z"
  ]
}

```

Describes a schedule

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|frequency|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|holidays|[string]|false|none|none|
|times|[string]|false|none|none|

<h2 id="tocS_State">State</h2>

<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
{
  "descriptor": {
    "name": "string",
    "code": "string",
    "symbol": "string",
    "short_desc": "string",
    "long_desc": "string",
    "images": [
      "string"
    ],
    "audio": "http://example.com",
    "3d_render": "http://example.com"
  },
  "updated_at": "2019-08-24T14:15:22Z",
  "updated_by": "string"
}

```

Describes a state

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descriptor|[Descriptor](#schema/descriptor)|false|none|Describes the description of a real-world object. Maintained by Beckn Foundation|
|updated_at|string(date-time)|false|none|none|
|updated_by|string|false|none|ID of entity which changed the state|

<h2 id="tocS_Subscriber">Subscriber</h2>

<a id="schemasubscriber"></a>
<a id="schema_Subscriber"></a>
<a id="tocSsubscriber"></a>
<a id="tocssubscriber"></a>

```json
{
  "subscriber_id": "string",
  "type": "bap",
  "cb_url": "string",
  "domain": "string",
  "city": "string",
  "country": "string",
  "signing_public_key": "string",
  "encryption_public_key": "string",
  "status": "INITIATED",
  "created": "2019-08-24T14:15:22Z",
  "updated": "2019-08-24T14:15:22Z",
  "expires": "2019-08-24T14:15:22Z"
}

```

Any entity which wants to authenticate itself on a network. This can be a BAP, BPP, BG, BPPR or a BGR.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscriber_id|string|false|none|Registered domain name of the subscriber. Must have a valid SSL certificate issued by a Certificate Authority of the operating region|
|type|string|false|none|none|
|cb_url|string|false|none|Callback URL of the subscriber. The Registry will call this URL's on_subscribe API to validate the subscriber\'s credentials|
|domain|[Domain](#schema/domain)|false|none|Describes the domain of an object|
|city|[City/properties/code](#schema/city/properties/code)|false|none|City code|
|country|[Country/properties/code](#schema/country/properties/code)|false|none|Country code as per ISO 3166-1 and ISO 3166-2 format|
|signing_public_key|string|false|none|Signing Public key of the subscriber.   Any subscriber platform (BAP, BPP, BG) who wants to transact on the network must digitally sign the ```requestBody``` using the corresponding private key of this public key and send it in the transport layer header. In case of ```HTTP``` it is the ```Authorization``` header.   The ```Authorization``` will be used to validate the signature of a BAP or BPP.  Furthermore, if an API call is being proxied or multicast by a Beckn Gateway, the BG must use it\'s signing key to digitally sign the ```requestBody``` using the corresponding private key of this public key and send it in the ```Proxy-Authorization``` header.|
|encryption_public_key|string|false|none|Encryption public key of the BAP subscriber. Any BPP must encrypt the ```requestBody.message``` value of the ```on_search``` API using this public key.|
|status|string|false|none|none|
|created|string(date-time)|false|none|Timestamp when a subscriber was added to the registry with status = INITIATED|
|updated|string(date-time)|false|none|none|
|expires|string(date-time)|false|none|Expiry timestamp in UTC derived from the ```lease_time``` of the subscriber|

#### Enumerated Values

|Property|Value|
|---|---|
|type|bap|
|type|bpp|
|type|bg|
|type|bppr|
|type|bgr|
|status|INITIATED|
|status|UNDER_SUBSCRIPTION|
|status|SUBSCRIBED|
|status|INVALID_SSL|
|status|UNSUBSCRIBED|

<h2 id="tocS_Support">Support</h2>

<a id="schemasupport"></a>
<a id="schema_Support"></a>
<a id="tocSsupport"></a>
<a id="tocssupport"></a>

```json
{
  "type": "order",
  "ref_id": "string",
  "channels": [
    {
      "property1": "string",
      "property2": "string"
    }
  ]
}

```

Customer support

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|ref_id|string|false|none|none|
|channels|[[Tags](#schema/tags)]|false|none|[Describes a tag. This is a simple key-value store which is used to contain extended metadata]|

#### Enumerated Values

|Property|Value|
|---|---|
|type|order|
|type|billing|
|type|fulfillment|

<h2 id="tocS_Tags">Tags</h2>

<a id="schematags"></a>
<a id="schema_Tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
{
  "property1": "string",
  "property2": "string"
}

```

Describes a tag. This is a simple key-value store which is used to contain extended metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|string|false|none|none|

<h2 id="tocS_Time">Time</h2>

<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
{
  "label": "string",
  "timestamp": "2019-08-24T14:15:22Z",
  "duration": "string",
  "range": {
    "start": "2019-08-24T14:15:22Z",
    "end": "2019-08-24T14:15:22Z"
  },
  "days": "string"
}

```

Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|false|none|none|
|timestamp|string(date-time)|false|none|none|
|duration|[Duration](#schema/duration)|false|none|Describes duration as per ISO8601 format|
|range|object|false|none|none|
|» start|string(date-time)|false|none|none|
|» end|string(date-time)|false|none|none|
|days|string|false|none|comma separated values representing days of the week|

<h2 id="tocS_TrackingData">TrackingData</h2>

<a id="schematrackingdata"></a>
<a id="schema_TrackingData"></a>
<a id="tocStrackingdata"></a>
<a id="tocstrackingdata"></a>

```json
"string"

```

Describes tracking data object during live tracking of an order

### Properties

*None*

<h2 id="tocS_Tracking">Tracking</h2>

<a id="schematracking"></a>
<a id="schema_Tracking"></a>
<a id="tocStracking"></a>
<a id="tocstracking"></a>

```json
{
  "tl_method": "http/get",
  "url": "http://example.com",
  "status": "active"
}

```

Describes the tracking info of an object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tl_method|string|false|none|none|
|url|string(uri)|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|tl_method|http/get|
|tl_method|ws|
|status|active|
|status|inactive|

<h2 id="tocS_Vehicle">Vehicle</h2>

<a id="schemavehicle"></a>
<a id="schema_Vehicle"></a>
<a id="tocSvehicle"></a>
<a id="tocsvehicle"></a>

```json
{
  "category": "string",
  "capacity": 0,
  "make": "string",
  "model": "string",
  "size": "string",
  "variant": "string",
  "color": "string",
  "energy_type": "string",
  "registration": "string"
}

```

Describes the properties of a vehicle used in a mobility service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|capacity|integer|false|none|none|
|make|string|false|none|none|
|model|string|false|none|none|
|size|string|false|none|none|
|variant|string|false|none|none|
|color|string|false|none|none|
|energy_type|string|false|none|none|
|registration|string|false|none|none|