---
title: Trip
---

## Definition

| Property | Type/Class | Definition |
|----------| ---------- | ---------- |
| id | *string* | Unique identifier of the Trip |
| type | *enum* | The type of Trip. Can be ON-DEMAND or FIXED-CORRIDOR |
| state | *enum* | State of the Trip lifecycle |
| route | * object* [Route](#) | Route of the Trip. (Contains details on Origin,Destination and Path of the Trip) |
| mobility_service | *object* [MobilityService](#) | All the travelers in the Journey |
| fare | *object* [Fare](#) | Fare details of the Trip |
| refund | *array* [Transfer](#) | Transfers between Trips of Journey |
| tracking | *object* [Tracking](#) | Tracking Details of the Trip |
