---
title: "Healthcare"
metaTitle: "Developer Documentation"
metaDescription: "Documentation for developers of the Beckn Ecosystem"
---

# Introduction

This document is a set of Open API and schema specifications to create an interoperable health services network and activate various services such as Telemedicine, lab testing, consolations, etc. among the network players. This document and specifications are created by the healthcare community in collaboration with beckn open protocol team. 

# Contributors

## Version 0.5.0 (Latest)

### Release Date : May 12th, 2020

| Name                | Organization                                       | Email                      |
|---------------------|----------------------------------------------------|----------------------------|
| Ajit Narayanan      | [mfine](https://www.mfine.co/)                     | ajit@mfine.co              |
| Shamik Sharma       | [CureFit](https://www.cure.fit/)                   | shamik@curefit.com         |
| Gaurav Agarwal      | [1mg](https://www.1mg.com/)                        | gaurava@1mg.com            |
| Abhinav Lal         | [Practo](https://www.practo.com/)                  | abhinav@practo.com         |
| Siddharth Shetty    | [iSPIRT](https://ispirt.in/)                       | siddharth.shetty@ispirt.in |
| Ravi Prakash        | [Beckn Foundation](https://beckn.org/)             | ravi@beckn.org             |
| Pramod Varma        | [Beckn Foundation](https://beckn.org/)             | pramod@beckn.org           |


## Version 0.1.2

### Release Date : May 2nd, 2020

| Name                | Organization                                       | Email                      |
|---------------------|----------------------------------------------------|----------------------------|
| Ajit Narayanan      | [mfine](https://www.mfine.co/)                     | ajit@mfine.co              |
| Shamik Sharma       | [CureFit](https://www.cure.fit/)                   | shamik@curefit.com         |
| Gaurav Agarwal      | [1mg](https://www.1mg.com/)                        | gaurava@1mg.com            |
| Abhinav Lal         | [Practo](https://www.practo.com/)                  | abhinav@practo.com         |
| Siddharth Shetty    | [iSPIRT](https://ispirt.in/)                       | siddharth.shetty@ispirt.in |
| Ravi Prakash        | [Beckn Foundation](https://beckn.org/)             | ravi@beckn.org             |
| Pramod Varma        | [Beckn Foundation](https://beckn.org/)             | pramod@beckn.org           |

## Version 0.1.0 : May 2nd, 2020

| Name                | Organization                                       | Email                  |
|---------------------|----------------------------------------------------|------------------------|
| Ajit Narayanan      | [mfine](https://www.mfine.co/)                     | ajit@mfine.co          |
| Shamik Sharma       | [CureFit](https://www.cure.fit/)                   | shamik@curefit.com     |
| Gaurav Agarwal      | [1mg](https://www.1mg.com/)                        | gaurava@1mg.com        |
| Abhinav Lal         | [Practo](https://www.practo.com/)                  | abhinav@practo.com     |
| Pramod Varma        | [Beckn Foundation](https://beckn.org/)             | pramod@beckn.org       |

## Background

India’s Telehealth market today has a few healthcare providers and non-profits providing remote consultations and advice to patients and is in a very early phase of usage and maturity. Market is nascent and has a huge potential to grow to cater to few 100 million users in the coming decade. However, the national scale of the COVID health crisis and the resulting lockdown/social distancing requirements have vastly increased the demand for telemedicine services. In addition, when testing kits are available across the country and offered by public and private players, it is critical that consumers have a common way to discover and book such services.

Via creation of interoperable *Open Health Services Network* along with ability by market players to join the network and creation of an open interoperable network to massively expand the Telehealth and related health provider ecosystem, the current ecosystem will not to scale to meet the demand of the country.

The unified health services network will bring a common set of protocols and APIs to allow health services to be delivered seamlessly across any set of health applications (EUA) and Doctors / Healthcare providers. The stack has two entities and will offer a set of common interfaces ( unified Health interface ) and a gateway ( Health Gateway ), that implements minimal aggregate functions

## Architecture

We propose that an interoperable architecture and open APIs be developed by the community. This document and specifications are created by the community to address this need. These open specifications help unbundle the current end-to-end health services offerings including Telehealth (but not limited to) and expand both sides of the value chain (consumer and provider) of the market akin to BHIM-UPI in the payment space. Proposed architecture in this document allows creation of an interoperable **"Open Health Services Network (OHSN)"** as a common digital infrastructure (a set of open API specifications with a gateway/registry at the center) to allow market players to compete to offer specific sub-services critical to the value chain as per their expertise and focus. 

Open APIs and specifications proposed here allows discovery, search, appointment, modifications, and fulfillment of various health services including Telehealth across the market players on a unified network. This architecture allows OHSN players to seamlessly integrate with both National health Stack as well as India Stack. All players participating in OHSN can also benefit from other critical digital health infrastructure being designed as part of the National Health Stack, such as a public registry of healthcare providers. 

Customers and patients benefit by being able to quickly discover, connect, and use any health provider on the network using their preferred application. They will also benefit with greater availability, lower costs, and higher quality of service across the industry as the sector gets more competitive.

The core technology building block integrates demand-side health services (Telehealth, lab tests, physical consultations, wellness services, etc.) requests with the supply-side health services responses through a set of common APIs proposed here. This is exactly how World Wide Web works today (decoupling of clients with servers using HTTP/HTML). It is enabled through a set of lightweight distributed nodes that simply act as ‘routing gateways' for the search and response flows. 

When a consumer requests for Telehealth consultation services through their consumer interface (henceforth referred to as “Apps”), the Telehealth gateway relays the search request to health care provider platforms (hereafter referred to as “Provider Platforms”). Provider Platforms respond with their intent of servicing that request and other parameters (price, rating, specialization, etc.) offered by various Health Providers within their platform. The Gateway then relay the responses back to the Apps. Gateway also takes care of end point registries, key management, tokenization, etc. Once connected via Search, Apps can connect directly with the Provider Platform without having to go through the gateway.

This specifications address discovery, search, booking, and confirmation of various health services. The architecture proposed here adhere to the following design principles: 

* Distributing the ability to solve across the ecosystem 
* A consumer/patient centric mindset to provide best choice for the user
* Incentive alignment of all actors in the ecosystem for sustainability
* Distributed architecture but unified via interoperable APIs
* Privacy and security by design to ensure end to end security, use of federated consumer identity, and not having a central system recording all transactions. 
* Technology & form agnostic architecture to allow users with smartphones, with feature phones, and with no phones to still take advantage via appropriate channels.

### What this architecture is 

* A set of specifications including a gateway and registry to implement OHSN.
* A way to enable various health services through many consumer apps as well as provider platforms all connected via the open architecture.
* A minimalistic gateway(s) (notice there can be multiple gateways in future) implementation in the middle allowing end point registries, tokenization, etc.
* A way for the Government and market to create a common narrative to expand the use and market

### What this architecture is not 
* A central portal or solution by itself or a way to force adoption
* A software codebase for one central platform or an application interface
* A proprietary or vendor specific solution


## Component 1 : Unified Health Interface

1. These are the set of interfaces that need to be implemented by either a EUA App or by the HSP. 
  - Health App APIs
  - Registration of Apps
  - Discover a list of doctors offering teleconsult services 
  - Request for a tele consultation at a specified time and channel of choice 
  - Post a prescription
2. Health Provider APIs
  Registration of Providers
  - Publish availability of doctors
  - Accept a teleconsult intent
  - Submission of clinical summaries 
  - Complete a consultation

All of these APIs have two ends, One on the App or provider Side and the other on the gateway side as depicted below. This is designed in such a way to allow for asynchronous communication using callbacks.

![](/Images/UTH-Arch.png)

## Component 2 : Health Gateway 

- Discovery ( federated ) of all doctors 
- Aggregate and forward responses from HSPs to Teleconsult Apps
- Registration of Apps and Providers



## Services in the Health Services Network 
- Consultations
- Diagnostics
- Pharmacy

## Consultation Service - Basic Principles:

- Overall architecture and design is based on the beckn whitepaper and Open API Specifications.
- A Telehealth is not to be confused with a “Mobile App”. This could also be a “Web Application”. In the context of the document, app means the backend of this application.
- All API contracts will exchange a basic header with transaction ID, call back url , authentication token and a signature 
- The Flow of consultation can be imagined to split into 
  - A Preconsult flow ( Triaging, Detailed Investigation ) - Optional : Run by the EUA ( optional )
  - An actual consultation ( Stream ) between the patient and the doctor : Run by the HSP ( mandatory )
- There are two distinct documents of exchange between the EUA and HSP Apps
  - Post Preconsult : A clinical summary of the triaging and examination generated by the EUA
  - Post Consultation :  A prescription generated by the HSP

- For the actual stream of consultation, the channel of communication has to be the same ( same pipe ) between the doctor and the patient. This means neither the gateway nor the HSP/EU apps are meant to do any protocol conversions. For example : If the doctor can communicate only on Phone, then the patient has to use the phone. Similarly if the doctor can come only on whatsapp, then the patient has to use whatsapp. Hence, Doctors channel choices override. This means the end-end pipe is a decision of the doctor. If the doctor uses HSP App1 , then the EU APP has to redirect / host the HSP interface to that app to allow the full pipe to be established. In the first version, the HSP apps must support a web based channel for both chat and video and this needs to be hosted/ launched by the EU App.
- All calls route through the UHG except an availability Lookup and a submission of clinical notes. This is done so that the gateway itself can keep track of the total transactions in the system. The UHG is supposed to just pass the call through like a proxy without altering any payload content

## Not in current scope
- Payments 
- Listing of all consults by patient ( beyond the ones done by the EUA ). This will be handled via the consent manager flows 

## Fundamental blocks
### Models
1. App : The application used either by the End user or the Health service provider / Health service Provider Gateway. A Telehealth app ( EUA + HSP ) offers end - end functionalities like 
  - Teleconsultation 
  - TelePharmacy : Delivery of medicines
  - TeleDiagnostics : Home or at centre collection and testing of samples / functions
2. ConsultationType : Indicates if the Consultation is either “TELE” ( online ) or “PHYSICAL” ( face-face) and a subtype indicating if the visit is either a first, followup , second opinion or referral
3. Channel  : Consultation Channel indicating the communication mode between the patient and doctor. These channels are imagined. Physical, Chat, Telephone (PSTN), Audio (VOIP) and Video
4. Taxonomy : When using medical terms, EUA and HSP has to declare which taxonomy is being used for the term. This is like declaring the language the application is speaking when communicating the medical terms. Example : ICD-10 is a taxonomy
5. TaxonomyItem ( term ) : The actual medical term being used. The word “term” is not used not to confuse with “terms” which may collide in the payments namespace. Example :  J00 is a diagnosis term , referring to taxonomy of ICD-10. 
6. Location : A GPS point, Polygon, Circle, address, city , country of any entity. 
7. Time : A date time structure 
8. TimeSlot : A window of time ( scalar range ). 
9. ObjectMap : A simple key value system to carry additional information beyond what is defined in the specification 

## Error Codes , Tracking codes and ACK specification

### Tracking codes 
A tracking URL is provided by the HSP for all consultations. Tracking codes, and error codes are comprised of SERVICECODE_TRACKINGCODE

| Tracking Code | Text                   |
|---------------|------------------------|
| T01_0001      | SCHEDULED              |
| T01_0002      | PRECONSULT_IN_PROGRESS |
| T01_0003      | PRECONSULT_COMPLETED   |
| T01_0004      | CONSULT_IN_PROGRESS    |
| T01_0005      | CONSULT_COMPLETED      |
| T01_0006      | CONSULT_CLOSED         |

## Teleconsultation - Booking a consultation

### Basic Flow 
1. EUA calls the UHG with a ConsultationIntent. The intent object describes what the end user is looking for , which includes 
  - Basic Patient information 
  - Location of the patient ( GPS and /or  Address ) 
  - Complaints ( in form of a collection of symptoms ) 
  - Speciality 
  - Time of consult ( range )
  - Providers ( if there are specific providers only needed ) 
  - Rating range
  - Channels on which the consultation is expected
  - Languages
  - Price range
2. HSPs that have a search result respond via the on_search callbacks to the UHG with a ConsultationService. The consultation service has 
  - A protocol of consult
    - Who needs to do user verification 
    - Who will do the pre-consult
  - An item from the catalog corresponding to the doctor ( early or late binding ) 
    - Other Availability slots of the doctor / promise that can work 
  - A consult / Pre consult structure with
  - A time of consultation, and a duration that is promised
  - Channels that are available for the consultation 
  - Preferred channel for the doctor 
  - A consultation URL ( this is expected to be a Web hostable link ) . This is the HSP app link that will be hosted by the EUA 
  - A clinical notes call back URL (for the EUA to submit the completed clinical notes prior to the consultation ) 
  - Doctor details
3. EUA can “select” the service, this is equivalent to an add to cart 
4. Further, the EUA confirms one off the consultation Service by calling a /Confirm on a consultation service on the UHG. If the call fails, the EUA is expected to make another attempt to confirm or look for another ConsultationService
5. Until the time of the consultation, the EUA has to perform the following 
  - Validity of the User request. It may do so prior to the consult confirmation or prior to actual consultation. This is left to the EUA to decide.
    - Verify the user intent is real 
    - Verify if the number of the user is reachable 
    - Ascertain if the transaction is fraudulent
  - If the protocol negotiation establishes the EUA to do the pre-consult, Basic information regarding the consultation is summarized and submitted in the ClinicalNotes . Submission of the clinical notes are mandatory. Failing to do so, can result in a HSP canceling the consultation by calling /cancel/ announcing the reason for cancellation.
6. If the protocol defines the HSP as the owner of pre-consult, then the EUA is supposed to notify the user at the time of the pre-consult and host the HSP pre-consult url 
7. Once consultation completes, the HSP calls the /complete/ , by passing a ConsultationSummary. This has the prescription URL as generated by the HSP and also the prescription metadata. The digital format is recommended to be produced by all HSPs. For the first version of the stack, this is kept optional.
    - Chief complaints
    - Diagnoses 
    - Medication 
    - Diagnostic Tests
    - General Advice 
    - Followup requirement 
    - Refer to
    - Doctor details 

![](/Images/BaasicFlowTeleConsult.png)


## Teleconsultation : Reschedule 
Either a HSP or a patient can request a reschedule of an appointment. This can happen if either the patient or the doctor is unavailable and wants to announce to the other party for a change in time. A reschedule is NOT allowed in these circumstances:
- If a COMPLETE has happened on the consultation
- If a consultation has progressed between the patient and doctor ( start time has elapsed )

Basic Flow 
### HSP Requesting a reschedule
1. HSP finds alternative slots for the previously confirmed consultation service. Only with this information, is it allowed for a HSP to trigger a reschedule.
  - HSP has to maintain the same intent criteria as the previous consultation service.
  - HSP needs to transfer all clinical notes if a preconsult has already taken place 

2. Calls the /update operation on the consultation service with a change request “reschedule” , provides a reason for the update and offers 
  - The changed consultation service content
  - The original service
  - New offers 
3. EUA ACKs the call, can retrieve 
  - Changed consultation service to confirm the change with the user 
4. EUA needs to confirm the new consultation service within a TTL defined by the HSP
  - Failing to do so, the HSP is allowed to call a cancellation of the service 
  - EUA can offer a refund or offer to schedule another by using the flow for the “booking a consultation” flow

### User requesting a reschedule 

1. EUA offers the user the flexibility to pick a new slot by issuing a new ConsultationIntent for the same doctor 
2. Calls the /update operation with the change request of “reschedule” and offers
  - Changed consultation service 
  - Original consultation service 
4. HSP ACKs the call and confirms the new consultation service 
5. HSP calls back the on_reschedule with the confirmed service. Alternatively, I can send back new offers as a part of the callback payload.

## Teleconsultation : Cancellation 
Either the user or the doctor can cancel the service with an adequate notice. The users may change their mind about needing a consultation service. It may also be the case that a HSP cannot fulfil the service request, based on either non availability of a specific doctor. A cancellation however is not allowed when :

1. The consult service has already started (either pre-consult or consult ) . This decision is left to the discretion of the HSP. If the preconsult is done with a “human” doctor, then it may disallow a cancellation.
2. The consult service has completed 

Based on the state of the consultation service the EUA may trigger the refund policy applicable or offer an alternative consult service to the user.

### Basic Flow
1. End user requesting a cancellation
  - EUA calls the UHG ( through to HSP )  on the /update end point with the service change request ‘Cancel’ 
  - The HSP checks if the service is cancellable, and then removes the consultation service and calls back on the /on_update
    - In case the service is not cancellable then the on_update will mention it via callback

2. HSP requesting a cancellation ( discouraged, only to be used in exceptions )
  - In most cases, the expectation is that either 
    - Update with a doctor who can do the consultation or 
    - Reschedule with a different offer of service is done Instead of a cancel 
  - HSP calls the UHG ( through to EUA ) with a /update , with a service change of “cancel” 
    - EUA may refund the user or offer an alternative
    - EUA may consider this as a “Strike” against the HSP/ doctor and store this information.


## Teleconsultation :  Missing a service 
Is triggered by either party when either of them has missed their promise of fulfilment of the service, ie. Either the user has not turned up for the pre-consult or consultation or the doctor has not turned up for the consultation. Missing a service on either side can be considered as a “strike” against the good standing of either the user or the doctor. EUA or HSP may use this information to deny services to and from either party. 

### Basic Flow

1. HSP (doctor) announcing missing a consultation service 
  - HSP calls the /update with parameters of “Missed” , also includes other offers for a new time from the same doctor / new doctor maintaining the same intent level agreement as before 
  - EUA / user needs to confirm the offer in a specified TTL 
  - Failure to respond can result in HSP canceling the service 
2. EUA ( user ) announcing a missed service
  - If a user does not show up in time for a consultation, it calls the UHG with an update : missed 
  - The HSP responds can either 
    - Cancel the consultation ( ? payment / refund ) 
    - Or Provide new offers as an alternative and expect a confirmation on those offers, until a TTL, post which it can cancel the service


## Teleconsultation :  Followup 
It is possible that at the end of a consultation service that either the information from the patient is insufficient or if there needs to be a further check up to see the progress of the treatment plan. In either case, a follow up can be triggered. The follow up information is carried as a part of the consultation summary ( in prescription ) and in the payload of the /update call 

### Basic Flow 
1. HSP calls the UHG with the /update , with parameters of “complete” and the updated consult service. 
2. In addition, it is allowed to attach an additional consult service Offers with its own pricing for the followup
3. EUA / user can confirm the offer if it chooses to, else it expires in the TTL specified

## Appendix and References

See docs on [Swaggerhub](https://app.swaggerhub.com/apis/mfi95/unified-teleconsult_interface/0.1.3#trial)

# Licensing

See: [Creative Commons BY-ND](https://github.com/beckn/protocol-specifications/blob/master/LICENSE.md)
