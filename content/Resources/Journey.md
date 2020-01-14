---
title: Journey
---

## Definition

| Property | Type/Class | Definition |
|----------| ---------- | ---------- |
| id | *string* | Unique identifier of the Journey |
| state | *string* | Journey state |
| origin | *object* [Stop](/Resources/Stop) | Origin of the Journey |
| destination | * object* [Stop](/Resources/Stop) | Destination of the Journey |
| travelers | *array* [Traveler](/Resources/Traveler) | All the travelers in the Journey |
| travel_group | *object* [TravelGroup](/Resources/TravelGroup) | Group of Travelers traveling as one unit |
| trips | *array* [Trip](/Resources/Trip) | Trips of the Journey |
| transfers | *array* [Transfer](/Resources/Transfer) | Transfers between Trips of Journey |
| refund | *object* [Refund](/Resources/Refund) | Details of Journey Refund |
