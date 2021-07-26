Category
===
>Describes a category

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|id|string|Unique id of the category
|parent_category_id|[Category/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/category)|Unique id of the category
|descriptor|[Descriptor](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/descriptor)|Describes the description of a real-world object. Maintained by Beckn Foundation
|time|[Time](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/time)|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations
|tags|[Tags](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata
