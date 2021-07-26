Intent
===
>Intent of a user. Used for searching for services

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|provider|object|
|provider.id|[Provider/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/provider)|Id of the provider
|provider.descriptor|[Descriptor](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/descriptor)|Details of the provider
|provider.category_id|[Provider/properties/category_id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/provider)|Category Id of the provider
|provider.locations|[ { [Location/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/location) } ]|List of location Ids of the provider
|fulfillment|object|
|fulfillment.id|[Fulfillment/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/fulfillment)|Unique reference ID to the fulfillment of an order
|fulfillment.start.location|[Location](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/location)|Describes the location of a runtime object
|fulfillment.start.time|[Time](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/time)|Describes time in its various forms.
|fulfillment.end.location|[Location](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/location)|Describes the location of a runtime object
|fulfillment.end.time|[Time](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/time)|Describes time in its various forms.
|fulfillment.tags|[Tags](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata
|fulfillment.vehicle|[Vehicle](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/vehicle)|Describes the properties of a vehicle used in a mobility service
|payment|[Payment](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/payment)|Describes a payment
|category|[Category](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/category)|Describes a category
|offer|[Offer](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/offer)|Describes an offer
|item|[Item](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/item)|Describes an item. Allows for domain extension.
|tags|[Tags](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata
