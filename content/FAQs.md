# FAQs

## How is beckn protocol different from tcp/ip, http, smtp?

Beckn protocol is an application layer protocol that is compatible with any transport layer protocols like TCP/IP and UDP. Furthermore, it can be piggybacked on other application layer protocols like HTTP or SMTP communication to allow interoperability at the application layer as well.


|| **beckn** | **http / https** | **smtp** | **tcp/ip** |
| --- | --- | --- | --- | --- |
| **Methods** | SEARCH , SELECT , INIT , CONFIRM , STATUS , UPDATE , TRACK , CANCEL , RATING , SUPPORT | GET , POST , PUT , PATCH , DELETE , HEAD , OPTIONS | HELO, MAIL, RCPT, DATA | SYN, SYN-ACK, ACK, FIN |
| **Packet Schema** | Context, Message | Request Line, Headers, Body | From, To, Subject, Body | TCP Header, Data |
| **Information Schema** | Intent, Catalog, Fulfillment, Order etc | _None_ | _None_ | _None_ |
| **Format** | application/json, application/protobuf\* | application/json, application/protobuf, multipart/form-data, image/jpeg etc | text/plain, text/html, multipart/mixed | _None_ |
| **Encryption** | TLS / SSL | TLS / SSL | _None_ | _None_ |
| **Addressing** | IPv4, IPv6, DNS | IPv4, IPv6 | DNS | IPv4, IPv6 |
| **Routing** | Beckn Gateways, Network Registries | IP Gateways | IP Gateways | IP Gateways |
| **Trust** | Registry PKI, x509 Certificates\* | x509 Certificates | _None_ | _None_ |

## Is beckn protocol only for commerce?

No, beckn protocol is not _only_ for commerce. Beckn protocol specification simply specifies a set of interoperable APIs that allows discovery, engagement, fulfillment and post-fulfillment of services and goods. The services and products can be availed with or without commercial consideration. If required, beckn protocol allows commercial contracts to be established between two actors.

## What is the latest version of beckn protocol?

For the transaction layer

- The latest stable version is [0.9.2](https://github.com/beckn/protocol-specifications)
- The current patch version draft branch is [0.9.3-draft](https://github.com/beckn/protocol-specifications/tree/core-0.9.3-draft)

For the registry layer

- The latest stable version is [0.2.0](https://github.com/beckn/registry)
- The current minor version draft branch is [0.3.0-draft](https://github.com/beckn/registry/tree/0.3.0-draft)

## Is the same version used in all layers of beckn protocol and their respective release roadmaps?

No, beckn protocol has multiple loosely-coupled layers namely, transaction layer, registry layer, policy layer etc, that evolve independently. So, it is possible for implementations to have layers with different versions. Read the document[here](https://developers.becknprotocol.io/docs/introduction/introduction/)to learn more.

## If beckn protocol has to be implemented for a particular sector, what layers of beckn protocol must be implemented?

Adoption of beckn protocol requires implementation of the transaction, registry and policy layer of beckn protocol. The transaction layer consistsof APIs that allow discovery, order, fulfillment and post-fulfillment of services. The registry layer allows trusted contracts to be established by way of Digital Signatures. And the policy layer allows sector-specific policies to be layered as a middleware in the implementations.

## How is the evolution of beckn protocol managed and governed?

To understand the governance of beckn protocol, read the document published [here](https://github.com/beckn/protocol-specifications/blob/master/GOVERNANCE.md).

## If I find any issues in beckn protocol, how do I notify and correct it?

If you discover an issue in the specification, you can report it [here](http://github.com/beckn/issues). But before that, please read [this](https://github.com/beckn/protocol-specifications/blob/master/CONTRIBUTION.md) document.

## If I want to include new features into the specification, what should I do?

To understand how to propose features, enhancements and contribute to the evolution of beckn protocol, click [here](https://github.com/beckn/protocol-specifications/blob/master/CONTRIBUTION.md).

## Can I have multiple domains operate on a single network?

Yes, multiple domains can exist as different subnets inside a larger multi-domain network. _Domains_ here refer to different industry sectors (like Retail, Mobility, Logistics, etc). Many such_domain-s__pecific_ **S**** ubnets**_,_ each supporting a specific set of use cases can be connected to each other in different topologies. For example, a Retail network connected with a Logistics network is a very common multi-domain network configuration. To learn more about network topologies, click [here](https://developers.becknprotocol.io/docs/introduction/transactional-layer/#network-topologies).

## Can I have multiple versions operating on a single network?

Yes, each network can allow multiple versions of the protocol to be implemented. However, the interoperability between two versions must be handled by the implementers.

## How does a 3rd party n/w entity configure network-specific rules and configurations?

A third party network entity can layer network specific rules and configurations as policies. How to layer such policies is shown [here](https://github.com/beckn/protocol-specifications/blob/master/LAYERING-NETWORK-POLICY.md).

## What if beckn protocol governance / community ceases to exist? What happens to the adopters and implementers?

In an unlikely scenario where beckn protocol governance ceases to exist, the protocol specification will be made available with [Creative Commons - Attribution - Share Alike 4.0](https://creativecommons.org/licenses/by-sa/4.0/) (CC-BY-SA 4.0) license that will allow adopters / implementers to fork the specification and evolve from there without disrupting adoption.
