MessageForSelect
=======

>Describes a beckn message object for **Select** API call

### Schema Definition


|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|order.items| [ { id: [Item/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/item), quantity: [ItemQuantity/properties/selected](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/itemquantity) } ] | Item id and quantity selected
|order.add_ons| [ { id: [AddOn/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/addon) } ] | Id of the add-on
|order.offers| [ { id: [Offer/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/offer) } ] | Id of the offer