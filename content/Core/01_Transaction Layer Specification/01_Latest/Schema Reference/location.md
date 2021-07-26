Location
===
>Describes the location of a runtime object. Extension not allowed

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|id|string|
|descriptor|[Descriptor](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/descriptor)|Describes the description of a real-world object. Maintained by Beckn Foundation
|gps|[Gps](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/gps)|Describes a gps coordinate
|address|[Address](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/address)|Describes an address
|station_code|string|
|city|[City](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/city)|Describes a city
|country|[Country](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/country)|Describes a country.
|circle|[Circle](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/circle)|Describes a circular area on the map
|polygon|string|
|3dspace|string|
|time|[Time](/Core/01_Transaction%20Layer%20Specification/Latest/Schema%20Reference/time)|Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations
