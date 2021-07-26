MessageForCancel
=======

>Describes a beckn message object for **Cancel** API call

### Schema Definition


|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|order_id| [Order/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/order) | Id of the order
|cancellation_reason_id| [Option/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/option) | Id of the cancellation reason
|descriptor| [Descriptor](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/descriptor) | Describes the description of a real-world object.
