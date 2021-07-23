Item
===
>Describes an item. Allows for domain extension.

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|id|string|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.
|parent_item_id|[Item/properties/id](/Core/Latest/02_Schemas/item)|This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.
|descriptor|[Descriptor](/Core/Latest/02_Schemas/descriptor)|Describes the description of a real-world object. Maintained by Beckn Foundation
|price|[Price](/Core/Latest/02_Schemas/price)|Describes the price of an item. Allows for domain extension.
|category_id|[Category/properties/id](/Core/Latest/02_Schemas/category)|Unique id of the category
|location_id|[Location/properties/id](/Core/Latest/02_Schemas/location)|
|time|[Time](/Core/Latest/02_Schemas/time)|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations
|matched|boolean|
|related|boolean|
|recommended|boolean|
|tags|[Tags](/Core/Latest/02_Schemas/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata
