Payment
===
>Describes a payment

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|uri|string|A payment uri to be called by the BAP. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : ```https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234```
|tl_method|string|Allowed values:http/get, http/post
|params|object|Object containg the parameters of payment.
|type|string| Allowed values:ON-ORDER, PRE-FULFILLMENT, ON-FULFILLMENT, POST-FULFILLMENT
|status|string|Allowed values:PAID, NOT-PATD
|time|[Time](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/time)|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations
