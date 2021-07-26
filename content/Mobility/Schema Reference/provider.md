Provider
===
>Describes a service provider. This can be a restaurant, a hospital, a Store etc

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|id|string|Id of the provider
|descriptor|[Descriptor](/Mobility/Schema%20Reference/descriptor)|Describes the description of a real-world object. Maintained by Beckn Foundation
|category_id|string|Category Id of the provider
|time|[Time](/Mobility/Schema%20Reference/time)|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations
|categories|[ [Category](/Mobility/Schema%20Reference/category) ]|
|fulfillments|[ [Fulfilment](/Mobility/Schema%20Reference/fulfilment) ]|
|payments|[ [Payment](/Mobility/Schema%20Reference/payment) ]|
|locations|[ [Location](/Mobility/Schema%20Reference/location) ]|
|offers|[ [Offer](/Mobility/Schema%20Reference/offer) ]|
|items|[ [Item](/Mobility/Schema%20Reference/item) ]|
|exp|string|Time after which catalog has to be refreshed
|tags|[Tags](/Mobility/Schema%20Reference/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata
