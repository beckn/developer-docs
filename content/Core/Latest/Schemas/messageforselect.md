MessageForSelect
=======

>Describes a beckn message object for **Select** API call

### Schema Definition


|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|order.items| [ { id: [Item/properties/id](/Core/Latest/02_Schemas/item), quantity: [ItemQuantity/properties/selected](/Core/Latest/02_Schemas/itemquantity) } ] | Item id and quantity selected
|order.add_ons| [ { id: [AddOn/properties/id](/Core/Latest/02_Schemas/addon) } ] | Id of the add-on
|order.offers| [ { id: [Offer/properties/id](/Core/Latest/02_Schemas/offer) } ] | Id of the offer