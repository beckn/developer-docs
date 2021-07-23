Fulfillment
===
>Describes how a single product/service will be rendered/fulfilled to the end customer

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|id|string|Unique reference ID to the fulfillment of an order
|type|string|This describes the type of fulfillment
|provider_id|[Provider/properties/id](/Core/Latest/02_Schemas/provider)|Id of the provider
|state|[State](/Core/Latest/02_Schemas/state)|Describes a state
|tracking|boolean|Indicates whether the fulfillment allows tracking
|customer|object|
|agent|[Agent](/Core/Latest/02_Schemas/agent)|Describes an order executor
|vehicle|[Vehicle](/Core/Latest/02_Schemas/vehicle)|Describes the properties of a vehicle used in a mobility service
|start|object|Details on the start of fulfillment
|start.location|[Location](/Core/Latest/02_Schemas/location)|Describes the location of a runtime object
|start.time|[Time](/Core/Latest/02_Schemas/time)|Describes time in its various forms.
|start.instructions|[Descriptor](/Core/Latest/02_Schemas/descriptor)|Describes pick up instructions
|start.contact|[Contact](/Core/Latest/02_Schemas/contact)|Contact information for pickup
|start.person|[Person](/Core/Latest/02_Schemas/person)|Person information for pickup
|end|object|Details on the end of fulfillment
|end.location|[Location](/Core/Latest/02_Schemas/location)|Describes the location of a runtime object
|end.time|[Time](/Core/Latest/02_Schemas/time)|Describes time in its various forms.
|end.instructions|[Descriptor](/Core/Latest/02_Schemas/descriptor)|Describes pick up instructions
|end.contact|[Contact](/Core/Latest/02_Schemas/contact)|Contact information for pickup
|end.person|[Person](/Core/Latest/02_Schemas/person)|Person information for pickup
|tags|[Tags](/Core/Latest/02_Schemas/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata
