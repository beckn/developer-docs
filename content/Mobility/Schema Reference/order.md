Order
===
>Describes the details of an order

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|id|string|Hash of order object without id
|state|string|
|items|[[Item/properties/id](/Mobility/Schema%20Reference/[item)]| Array of item ids
|add_ons|[[AddOn/properties/id](/Mobility/Schema%20Reference/[addon)]| Array of add on ids
|offers|[[Offer/properties/id](/Mobility/Schema%20Reference/[offer)]| Array of offer ids
|billing|[Billing](/Mobility/Schema%20Reference/billing)|Describes a billing event
|fulfillment|[Fulfillment](/Mobility/Schema%20Reference/fulfillment)|Describes how a single product/service will be rendered/fulfilled to the end customer
|quote|[Quotation](/Mobility/Schema%20Reference/quotation)|Describes a quote
|payment|[Payment](/Mobility/Schema%20Reference/payment)|Describes a payment
|created_at|string|
|updated_at|string|
