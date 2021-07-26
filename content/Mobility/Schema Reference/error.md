Error
===
>Describes an error object

### Schema Definition

|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|type|string|Type of error.. Allowed values:CONTEXT-ERROR, CORE-ERROR, DOMAIN-ERROR, POLICY-ERROR, JSON-SCHEMA-ERROR
|code|string|Beckn specific error code. For full list of error codes, refer to error_codes.md in the root folder of this repo
|path|string|Path to json schema generating the error. Used only during json schema validation errors
|message|string|Human readable message descirbing the error
