Category
===
>Describes a category

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|id|string|Unique id of the category
|parent_category_id|[Category/properties/id](/Core/Latest/02_Schemas/category)|Unique id of the category
|descriptor|[Descriptor](/Core/Latest/02_Schemas/descriptor)|Describes the description of a real-world object. Maintained by Beckn Foundation
|time|[Time](/Core/Latest/02_Schemas/time)|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations
|tags|[Tags](/Core/Latest/02_Schemas/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata
