---
title: "Beckn Gateway Registration API"
metaTitle: "Developer Documentation"
metaDescription: "Beckn Mobility is a set of open specifications and protocols to create a Digital Infrastructure for public good. It enables any application to connect to Mobility Service Providers (like Cab, Bus and Metro Services, EV Charging Stations, Parking Services, Tolls etc) through a network of Gateways."
---

## Overview

This API is for onboarding Mobility Service Providers otherwise known as **Beckn Providers** or **BPs** on to the Beckn Ecosystem. Examples of Beckn Providers are Cab Services, Metro Services, Bus Services, Vehicle Rental Services and so on. Basically if you are a Provider of Mobility Services with a Beckn Provider API, you can sign up and register your platform with any of the known **Beckn Gateways** or **BGs**. This procss is analogous to registering your domain name with a DNS provider. This endpoint will be cloned across all the BGs within the **Region of Policy Coverage** or **ROPC**, applicable to the Beckn Provider. For example, a Bus Service operating within a particular city will be cloned across all Beckn Gateways registered in that city. Any updation in the Policy will be cloned across all the respective BGs periodically. The **Policy Updation Frequency** or **PUF** can be configured by the city authorities. It is recommended that the PUF should not be less than 24 hours but it is left to the policy makers.

## API Reference

### 1. Register a Beckn Service Provider

#### API Endpoint:

    /Provider/signup

#### Description:

Register a Beckn Provider with a Beckn Gateway for the first time.

#### Request Structure :

> **Header :**

    {
      "Action": "Provider/signup",
      "Token": "string",
      "Timestamp": "2019-09-13T14:31:54"
    }

> **Body :**

    {
      "info": {
        "name": "string",
        "phone": "string",
        "email": "string",
        "company_id": "string"
      },
      "documents": [
        {
          "name" : "string",
          "data" : "W3dWhrYWtp68jWsa21v490XqxOy2zVkuD"
        }
      ],
      "api": {
        "endpoint_url": "string"
      }
    }

#### Table of Definitions

| Key | Data Type | Definition | Format | Example |
| --- | --------- | ----------- | ------- | ------- |
| info | Object | Company information | JSON Object | - |
| info.name | string | Name of the Organization providing the mobility service as registered with the city transport authorities | Plain text with UTF-8 encoding | Delhi Metro Rail Corporation |
| info.phone | string | Phone number of the organization | +{country code}-{phone number}-{extension} | +91-8023329991 |
| info.email | string | Official email address of the organization | Valid email address format | info@example.com |
| info.company_id | string | Identification number of the Registered Company as per applicable Policy | Plain text with UTF-8 encoding | U72900KA201 |
| documents | Array |  Documents required as per city policy | JSON Array | - |
| documents[].name | string | Name of the document | Any document format extension | Compliance Certificate |
| documents[].data | string | Documents required as per city policy | pdf, jpeg, jpg | W3dWhrYWtp68j  |

#### Responses

##### Success

**Header :**

    {
      "action": "ACK",
      "message": "Success Message string"
    }

**Body :**

    {
      "registration": {
        "id" : "string",
        "status" : "string"
      },
      "auth": {
        "token": "string",
        "exp": "string"
      },
      "info": {
        "name": "string",
        "phone": "string",
        "email": "string",
        "company_id": "string"
      },
      "documents": [
        {
          "name" : "string",
          "data" : "W3dWhrYWtp68jWsa21v490XqxOy2zVkuD",
          "status" : "PENDING-VERIFICATION"
        }
      ],
      "api": {
        "endpoint_url": "string",
        "status": "PENDING-VERIFICATION"
      }
    }

##### Failure :

**Header :**

    {
      "action": "NACK",
      "message": "Error message string"
    }

**Body :**

    {
      "info": {
        "name": "field specific error message",
        "phone": "field specific error message",
        "email": "field specific error message",
        "company_id": "field specific error message"
      },
      "documents": [
        {
          "name" : "field specific error message",
          "data" : "field specific error message"
        }
      ],
      "api": {
        "endpoint_url": "field specific error message"
      }
    }

### 2. Get Registration Details of a BP

#### API Endpoint:

    /Provider/get

#### Description:

Get registration details of a Beckn Provider.

#### Request Structure :

> **Header :**

    {
      "Action": "Provider/get",
      "Token": "string",
      "Timestamp": "2019-09-13T14:31:54"
    }

> **Body :**

    {
      "registration": {
        "id" : "string"
      }
    }

#### Table of Definitions

| Key | Data Type | Definition | Format | Example |
| --- | --------- | ----------- | ------- | ------- |
| registration | Object | registration details | JSON Object | - |
| registration.id | string | Registration ID generated during signup | Plain text with UTF-8 encoding | - |

#### Responses

##### Success

**Header :**

    {
      "action": "ACK",
      "message": "Success Message string"
    }

**Body :**

    {
      "registration": {
        "id" : "string",
        "status" : "string"
      },
      "info": {
        "name": "string",
        "phone": "string",
        "email": "string",
        "company_id": "string"
      },
      "documents": [
        {
          "name" : "string",
          "data" : "W3dWhrYWtp68jWsa21v490XqxOy2zVkuD"
        }
      ],
      "api": {
        "endpoint_url": "string"
      }
    }

##### Failure :

**Header :**

    {
      "action": "NACK",
      "message": "Error message string"
    }

**Body :**

    {
      "registration": {
        "id": "field specific error message"
      }
    }


### 3. Update Beckn Provider info

#### API Endpoint:

    /Provider/info/update

#### Description:

Update registration details of a Beckn Provider.

#### Request Structure :

> **Header :**

    {
      "Action": "Provider/info/update",
      "Token": "string",
      "Timestamp": "2019-09-13T14:31:54"
    }

> **Body :**

    {
      "registration": {
        "id" : "string"
      },
      "info": {
        "name": "string",
        "phone": "string",
        "email": "string",
        "company_id": "string"
      }
    }

#### Table of Definitions

| Key | Data Type | Definition | Format | Example |
| --- | --------- | ----------- | ------- | ------- |
| registration | Object | registration details | JSON Object | - |
| registration.id | string | Registration ID generated during signup | Plain text with UTF-8 encoding | - |
| info | Object | Company information | JSON Object | - |
| info.name | string | Name of the Organization providing the mobility service as registered with the city transport authorities | Plain text with UTF-8 encoding | Delhi Metro Rail Corporation |
| info.phone | string | Phone number of the organization | +{country code}-{phone number}-{extension} | +91-8023329991 |
| info.email | string | Official email address of the organization | Valid email address format | info@example.com |
| info.company_id | string | Identification number of the Registered Company as per applicable Policy | Plain text with UTF-8 encoding | U72900KA201 |


#### Responses

##### Success

**Header :**

    {
      "action": "ACK",
      "message": "Success Message string"
    }

**Body :**

    {
      "registration": {
        "id" : "string",
        "status" : "UPDATE-PENDING"
      },
      "info": {
        "name": "string",
        "phone": "string",
        "email": "string",
        "company_id": "string"
      },
      "documents": [
        {
          "name" : "string",
          "data" : "W3dWhrYWtp68jWsa21v490XqxOy2zVkuD",
          "status" : "VERIFIED"
        }
      ],
      "api": {
        "endpoint_url": "string"
      }
    }

##### Failure :

**Header :**

    {
      "action": "NACK",
      "message": "Error message string"
    }

**Body :**

    {
      "registration": {
        "id" : "field specific error message",
        "status" : "UPDATE-FAIL"
      },
      "info": {
        "name": "field specific error message",
        "phone": "field specific error message",
        "email": "field specific error message",
        "company_id": "field specific error message"
      },
    }


### 4. Add documents for verification

#### API Endpoint:

    /Provider/documents/add

#### Description:

Add documents to BP registration account

#### Request Structure :

> **Header :**

    {
      "Action": "Provider/documents/add",
      "Token": "string",
      "Timestamp": "2019-09-13T14:31:54"
    }

> **Body :**

    {
      "registration": {
        "id" : "string"
      },
      "documents": [
        {
          "name" : "string",
          "data" : "W3dWhrYWtp68jWsa21v490XqxOy2zVkuD",
        }
      ]
    }

#### Table of Definitions

| Key | Data Type | Definition | Format | Example |
| --- | --------- | ----------- | ------- | ------- |
| registration | Object | registration details | JSON Object | - |
| registration.id | string | Registration ID generated during signup | Plain text with UTF-8 encoding | - |
| documents | Array |  Documents required as per city policy | JSON Array | - |
| documents[].name | string | Name of the document | Any document format extension | Compliance Certificate |
| documents[].data | string | Documents required as per city policy | pdf, jpeg, jpg | W3dWhrYWtp68j  |

#### Responses

##### Success

**Header :**

    {
      "action": "ACK",
      "message": "Success Message string"
    }

**Body :**

    {
      "registration": {
        "id" : "string",
        "status" : "UPDATE-PENDING"
      },
      "info": {
        "name": "string",
        "phone": "string",
        "email": "string",
        "company_id": "string"
      },
      "documents": [
        {
          "id" : "string",
          "name" : "string",
          "data" : "W3dWhrYWtp68jWsa21v490XqxOy2zVkuD",
          "status" : "VERIFIED"
        },
        {
          "id" : "string",
          "name" : "string",
          "data" : "W3dWhrYWtp68jWsa21v490XqxOy2zVkuD",
          "status" : "PENDING-VERIFICATION"
        }
      ],
      "api": {
        "endpoint_url": "string"
      }
    }

##### Failure :

**Header :**

    {
      "action": "NACK",
      "message": "Error message string"
    }

**Body :**

    {
      "documents": [
        {
          "name" : "field specific error message",
          "data" : "field specific error message"
        }
      ],
    }
