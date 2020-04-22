```json
{
    "$id": "http://schema.beckn.org/core/schema/0.7.1/token.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "version" : "0.7.1",
    "description": "Defines a token for authentication or validation",
    "type": "object",
    "properties": {
        "id" : {
            "type" : "string"
        },
        "name" : {
            "type" : "string",
            "default" : null
        },
        "policy" : {
            "$ref" : "http://schema.beckn.org/core/schema/0.7.1/policy.json"
        }
    }
}
```