Intent
===
>Intent of a user. Used for searching for services

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|provider|object|
|provider.id|[Provider/properties/id](/Mobility/Schema%20Reference/provider)|Id of the provider
|provider.descriptor|[Descriptor](/Mobility/Schema%20Reference/descriptor)|Details of the provider
|provider.category_id|[Provider/properties/category_id](/Mobility/Schema%20Reference/provider)|Category Id of the provider
|provider.locations|[ { [Location/properties/id](/Mobility/Schema%20Reference/location) } ]|List of location Ids of the provider
|fulfillment|object|
|fulfillment.id|[Fulfillment/properties/id](/Mobility/Schema%20Reference/fulfillment)|Unique reference ID to the fulfillment of an order
|fulfillment.start.location*|[Location](/Mobility/Schema%20Reference/location)|Describes the pickup location. Mandatory as search intent in mobility.
|fulfillment.start.time|[Time](/Mobility/Schema%20Reference/time)|Describes time in its various forms.
|fulfillment.end.location|[Location](/Mobility/Schema%20Reference/location)|Describes the location of a runtime object
|fulfillment.end.time|[Time](/Mobility/Schema%20Reference/time)|Describes time in its various forms.
|fulfillment.tags|[Tags](/Mobility/Schema%20Reference/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata
|fulfillment.vehicle|[Vehicle](/Mobility/Schema%20Reference/vehicle)|Describes the properties of a vehicle used in a mobility service
|payment|[Payment](/Mobility/Schema%20Reference/payment)|Describes a payment
|category|[Category](/Mobility/Schema%20Reference/category)|Describes a category
|offer|[Offer](/Mobility/Schema%20Reference/offer)|Describes an offer
|item|[Item](/Mobility/Schema%20Reference/item)|Describes an item. Allows for domain extension.
|tags|[Tags](/Mobility/Schema%20Reference/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata
