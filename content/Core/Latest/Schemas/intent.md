Intent
===
>Intent of a user. Used for searching for services

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|provider|object|
|provider.id|[Provider/properties/id](/Core/Latest/02_Schemas/provider)|Id of the provider
|provider.descriptor|[Descriptor](/Core/Latest/02_Schemas/descriptor)|Details of the provider
|provider.category_id|[Provider/properties/category_id](/Core/Latest/02_Schemas/provider)|Category Id of the provider
|provider.locations|[ { [Location/properties/id](/Core/Latest/02_Schemas/location) } ]|List of location Ids of the provider
|fulfillment|object|
|fulfillment.id|[Fulfillment/properties/id](/Core/Latest/02_Schemas/fulfillment)|Unique reference ID to the fulfillment of an order
|fulfillment.start.location|[Location](/Core/Latest/02_Schemas/location)|Describes the location of a runtime object
|fulfillment.start.time|[Time](/Core/Latest/02_Schemas/time)|Describes time in its various forms.
|fulfillment.end.location|[Location](/Core/Latest/02_Schemas/location)|Describes the location of a runtime object
|fulfillment.end.time|[Time](/Core/Latest/02_Schemas/time)|Describes time in its various forms.
|fulfillment.tags|[Tags](/Core/Latest/02_Schemas/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata
|fulfillment.vehicle|[Vehicle](/Core/Latest/02_Schemas/vehicle)|Describes the properties of a vehicle used in a mobility service
|payment|[Payment](/Core/Latest/02_Schemas/payment)|Describes a payment
|category|[Category](/Core/Latest/02_Schemas/category)|Describes a category
|offer|[Offer](/Core/Latest/02_Schemas/offer)|Describes an offer
|item|[Item](/Core/Latest/02_Schemas/item)|Describes an item. Allows for domain extension.
|tags|[Tags](/Core/Latest/02_Schemas/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata
