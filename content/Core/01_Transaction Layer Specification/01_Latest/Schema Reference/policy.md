Policy
===
>Describes a policy. Allows for domain extension.

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|id|string|
|descriptor|[Descriptor](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/descriptor)|Describes the description of a real-world object. Maintained by Beckn Foundation
|parent_policy_id|[Policy/properties/id](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/policy)|
|time|[Time](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/time)|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations
