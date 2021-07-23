MessageForInit
=======

>Describes a beckn message object for **Init** API call

### Schema Definition


|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|order.items| [ { id: [Item/properties/id](/Core/Latest/02_Schemas/item), quantity: [ItemQuantity/properties/selected](/Core/Latest/02_Schemas/itemquantity) } ] | Item id and quantity selected
|order.add_ons| [ { id: [AddOn/properties/id](/Core/Latest/02_Schemas/addon) } ] | Id of the addon
|order.offers| [ { id: [Offer/properties/id](/Core/Latest/02_Schemas/offer) } ] | Id of the offer
|order.billing| [Billing](/Core/Latest/02_Schemas/billing) | Describes a billing event
|order.fulfillment| [Fulfillment](/Core/Latest/02_Schemas/fulfillment)| Describes how a single product/service will be rendered/fulfilled to the end customer