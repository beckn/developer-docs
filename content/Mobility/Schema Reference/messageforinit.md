MessageForInit
=======

>Describes a beckn message object for **Init** API call

### Schema Definition


|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|order.items| [ { id: [Item/properties/id](/Mobility/Schema%20Reference/item), quantity: [ItemQuantity/properties/selected](/Mobility/Schema%20Reference/itemquantity) } ] | Item id and quantity selected
|order.add_ons| [ { id: [AddOn/properties/id](/Mobility/Schema%20Reference/addon) } ] | Id of the addon
|order.offers| [ { id: [Offer/properties/id](/Mobility/Schema%20Reference/offer) } ] | Id of the offer
|order.billing| [Billing](/Mobility/Schema%20Reference/billing) | Describes a billing event
|order.fulfillment| [Fulfillment](/Mobility/Schema%20Reference/fulfillment)| Describes how a single product/service will be rendered/fulfilled to the end customer