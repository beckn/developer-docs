Location
===
>Describes the location of a runtime object. Extension not allowed

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|id|string|
|descriptor|[Descriptor](/Core/Latest/02_Schemas/descriptor)|Describes the description of a real-world object. Maintained by Beckn Foundation
|gps|[Gps](/Core/Latest/02_Schemas/gps)|Describes a gps coordinate
|address|[Address](/Core/Latest/02_Schemas/address)|Describes an address
|station_code|string|
|city|[City](/Core/Latest/02_Schemas/city)|Describes a city
|country|[Country](/Core/Latest/02_Schemas/country)|Describes a country.
|circle|[Circle](/Core/Latest/02_Schemas/circle)|Describes a circular area on the map
|polygon|string|
|3dspace|string|
|time|[Time](/Core/Latest/02_Schemas/time)|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations
