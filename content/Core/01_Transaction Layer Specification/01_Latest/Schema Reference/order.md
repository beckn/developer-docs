Order
===
>Describes the details of an order

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|id|string|Hash of order object without id
|state|string|
|items|[ { id: [Item/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/item), quantity: [ItemQuantity/properties/selected](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/itemquantity) } ] | Item id and quantity selected
|add_ons|[[AddOn/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/[addon)]| Array of add on ids
|offers|[[Offer/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/[offer)]| Array of offer ids
|billing|[Billing](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/billing)|Describes a billing event
|fulfillment|[Fulfillment](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/fulfillment)|Describes how a single product/service will be rendered/fulfilled to the end customer
|quote|[Quotation](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/quotation)|Describes a quote
|payment|[Payment](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/payment)|Describes a payment
|created_at|string|
|updated_at|string|
