ContextForOn_track
=======

>Describes a beckn message context for **On_track** API call

### Schema Definition


|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|domain|string|Describes the domain of an object|
|country|[Country/properties/code](/Core/Latest/02_Schemas/country)|Country code as per ISO 3166-1 and ISO 3166-2 format
|city|[City/properties/code](/Core/Latest/02_Schemas/city)|City code
|action|string|Defines the Beckn API call. Any actions other than the ennumerated actions are not supported by Beckn Protocol . Allowed values : on_track
|core_version|string|Version of Beckn core API specification being used
|bap_id|string|Unique id of the BAP. By default it is the fully qualified domain name of the BAP
bap_uri|string|URI of the BAP for accepting callbacks. Must have the same domain name as the bap_id
|bpp_id|string|Unique id of the BPP. By default it is the fully qualified domain name of the BPP
|bpp_uri|string|URI of the BPP. Must have the same domain name as the bap_id
|transaction_id|string|This is a unique value which persists across all API calls from search through confirm
|message_id|string|This is a unique value which persists during a request / callback cycle
|timestamp|string|Time of request generation in RFC3339 format
|key|string|The encryption public key of the sender
|ttl|string|The duration in ISO8601 format after timestamp for which this message holds valid