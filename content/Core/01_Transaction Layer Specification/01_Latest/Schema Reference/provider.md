Provider
===
>Describes a service provider. This can be a restaurant, a hospital, a Store etc

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|id|string|Id of the provider
|descriptor|[Descriptor](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/descriptor)|Describes the description of a real-world object. Maintained by Beckn Foundation
|category_id|string|Category Id of the provider
|time|[Time](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/time)|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations
|categories|[ [Category](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/category) ]|
|fulfillments|[ [Fulfilment](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/fulfilment) ]|
|payments|[ [Payment](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/payment) ]|
|locations|[ [Location](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/location) ]|
|offers|[ [Offer](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/offer) ]|
|items|[ [Item](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/item) ]|
|exp|string|Time after which catalog has to be refreshed
|tags|[Tags](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata
