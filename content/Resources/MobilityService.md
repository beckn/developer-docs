---
title: MobilityService
---

## Definition

| Property | Type/Class | Definition |
|----------| ---------- | ---------- |
| id | *string* | Unique identifier of the Mobility service |
| name | *string* | name of the service |
| provision_type | *string* enum | Service provision type |
| reservability | * object* [Reservability](/Resources/Reservability) | Resrvability of the service |
| capacity_type | *object* [CapacityType](/Resources/CapactyType) | Capacity Reservability |
| mobility_form | *object* [MobilityForm](/Resources/MobilityForm) | Fare details of the Trip |
| fare_products | *array* [FareProduct](/Resources/FareProduct) | Fare products offered by the service |
