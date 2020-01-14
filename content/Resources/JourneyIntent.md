---
title: JourneyIntent
---

#### Fields

| Key | Type / Class | Definition |
| --- | ----------------- | ---------- |
| origin | *object* [Stop](/Resources/Stop)  | Intended origin of the journey |
| destination | *object* [Stop](/Resources/Stop)  | Intended destination of journey |
| fare | *object* [Fare](/Resources/Fare) | Intended fare of the Journey |
| transfers | *integer* | Short transfers between trips |
| route | *object* [Route](/Resources/Route) | Intended Route of the Journey |
| mobility_form | *object* [MobilityForm](/Resources/MobilityForm) | Preferred form of travel  |
| medium | *string* | Medium of Travel |
| mobility_service | *object* [MobilityService](/Resources/MobilityService) | Intended mobility service to avail |
