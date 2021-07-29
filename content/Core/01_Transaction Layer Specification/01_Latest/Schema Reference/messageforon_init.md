MessageForOn_init
=======

>Describes a beckn message object for **On_init** API call

### Schema Definition


|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|order.items| [ { id: [Item/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/item), quantity: [ItemQuantity/properties/selected](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/itemquantity) } ] | Item id and quantity selected
|order.add_ons| [ { id: [AddOn/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/addon) } ] | Id of the addon
|order.offers| [ { id: [Offer/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/offer) } ] | Id of the offer
|order.billing| [Billing](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/billing) | Describes a billing event
|order.fulfillment| [Fulfillment](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/fulfillment)| Describes how a single product/service will be rendered/fulfilled to the end customer
|order.quote|[Quotation](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/quotation) |Describes a quote|
|order.payment|[Payment](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/payment)| Describes a payment