---
title: "Beckn Gateway Provider Side API"
metaTitle: "Developer Documentation"
metaDescription: "Beckn Mobility is a set of open specifications and protocols to create a Digital Infrastructure for public good. It enables any application to connect to Mobility Service Providers (like Cab, Bus and Metro Services, EV Charging Stations, Parking Services, Tolls etc) through a network of Gateways."
---
## Introduction

This API is for connecting **Beckn Gateways** to **Beckn Providers**. The BG will implement the following endpoints:

- [Trip/cb_search](/APIReference/BecknGatewayProviderSide/cbSearchTrips)
- [Trip/cb_init](/APIReference/BecknGatewayProviderSide/cbInitTrip)
- [Trip/cb_confirm](/APIReference/BecknGatewayProviderSide/cbConfirmTrip)
- [Trip/cb_add](/APIReference/BecknGatewayProviderSide/cbAddTrip)
- [Trip/cb_remove](/APIReference/BecknGatewayProviderSide/cbRemoveTrip)
- [Trip/cb_track](/APIReference/BecknGatewayProviderSide/cbTrackTrip)
- [Trip/FareProducts/cb_get](/APIReference/BecknGatewayProviderSide/cbGetFareProducts)
- [Trip/Stop/cb_add](/APIReference/BecknGatewayProviderSide/cbAddStop)
- [Trip/Stop/cb_remove](/APIReference/BecknGatewayProviderSide/cbRemoveStop)
- [Trip/State/cb_update](/APIReference/BecknGatewayProviderSide/cbUpdateTripState)
- [Trip/Traveler/cb_add](/APIReference/BecknGatewayProviderSide/cdAddTravelers)
- [Traveler/Cred/get](/APIReference/BecknGatewayProviderSide/cbGetTravelersCred)
