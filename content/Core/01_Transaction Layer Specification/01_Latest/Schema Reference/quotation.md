Quotation
===
>Describes a quote

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|price|[Price](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/price)|Describes the price of an item. Allows for domain extension.
|breakup|[title: string, price:[Price](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/price)]| Describes the breakup of the quote
|ttl|[Duration](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/duration)|Describes duration as per ISO8601 format
