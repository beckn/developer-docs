Order
===
>Describes the details of an order

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|id|string|Hash of order object without id
|state|string|
|items|[[Item/properties/id](/Core/Latest/02_Schemas/[item)]| Array of item ids
|add_ons|[[AddOn/properties/id](/Core/Latest/02_Schemas/[addon)]| Array of add on ids
|offers|[[Offer/properties/id](/Core/Latest/02_Schemas/[offer)]| Array of offer ids
|billing|[Billing](/Core/Latest/02_Schemas/billing)|Describes a billing event
|fulfillment|[Fulfillment](/Core/Latest/02_Schemas/fulfillment)|Describes how a single product/service will be rendered/fulfilled to the end customer
|quote|[Quotation](/Core/Latest/02_Schemas/quotation)|Describes a quote
|payment|[Payment](/Core/Latest/02_Schemas/payment)|Describes a payment
|created_at|string|
|updated_at|string|
