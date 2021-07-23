Provider
===
>Describes a service provider. This can be a restaurant, a hospital, a Store etc

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|id|string|Id of the provider
|descriptor|[Descriptor](/Core/Latest/02_Schemas/descriptor)|Describes the description of a real-world object. Maintained by Beckn Foundation
|category_id|string|Category Id of the provider
|time|[Time](/Core/Latest/02_Schemas/time)|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations
|categories|[ [Category](/Core/Latest/02_Schemas/category) ]|
|fulfillments|[ [Fulfilment](/Core/Latest/02_Schemas/fulfilment) ]|
|payments|[ [Payment](/Core/Latest/02_Schemas/payment) ]|
|locations|[ [Location](/Core/Latest/02_Schemas/location) ]|
|offers|[ [Offer](/Core/Latest/02_Schemas/offer) ]|
|items|[ [Item](/Core/Latest/02_Schemas/item) ]|
|exp|string|Time after which catalog has to be refreshed
|tags|[Tags](/Core/Latest/02_Schemas/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata
