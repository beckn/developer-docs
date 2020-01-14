---
title: Stop
---

#### Fields

| Key | Type / Class | Definition |
| --- | ----------------- | ---------- |
| id | *string* | Unique identifier of the stop if any. Multiple routes my contain the same stop |
| type | *string* | Type of stop. This can be a PLATFORM, STATION, ENTRY-POINT, EXIT-POINT, GENERIC, BOARDING-POINT |
| code | *string* | Short code for the stop |
| name | *string* | Name of the stop |
| description | *string* | Description of the stop |
| location | *object* [Location](/Resources/Location)  | Location of the Stop |
| arrival_time | *string* | Time of arrival of the vehicle at the Stop |
| departure_time | *string* | Time  of departure from the Stop |
| buffer_time | *string* | Duration between arrival time and departure time |
