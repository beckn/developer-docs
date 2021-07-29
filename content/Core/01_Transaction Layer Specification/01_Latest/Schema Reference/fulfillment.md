Fulfillment
===
>Describes how a single product/service will be rendered/fulfilled to the end customer

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|id|string|Unique reference ID to the fulfillment of an order
|type|string|This describes the type of fulfillment
|provider_id|[Provider/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/provider)|Id of the provider
|state|[State](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/state)|Describes a state
|tracking|boolean|Indicates whether the fulfillment allows tracking
|customer|object|
|agent|[Agent](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/agent)|Describes an order executor
|vehicle|[Vehicle](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/vehicle)|Describes the properties of a vehicle used in a mobility service
|start|object|Details on the start of fulfillment
|start.location|[Location](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/location)|Describes the location of a runtime object
|start.time|[Time](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/time)|Describes time in its various forms.
|start.instructions|[Descriptor](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/descriptor)|Describes pick up instructions
|start.contact|[Contact](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/contact)|Contact information for pickup
|start.person|[Person](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/person)|Person information for pickup
|end|object|Details on the end of fulfillment
|end.location|[Location](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/location)|Describes the location of a runtime object
|end.time|[Time](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/time)|Describes time in its various forms.
|end.instructions|[Descriptor](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/descriptor)|Describes pick up instructions
|end.contact|[Contact](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/contact)|Contact information for pickup
|end.person|[Person](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/person)|Person information for pickup
|tags|[Tags](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata
