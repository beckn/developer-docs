```json
{
    "$id": "https://schema.beckn.org/fnb/schema/0.7.1/fnb_intent.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "version" : "0.7.1",
    "description": "Describes the F&B search intent",
    "type": "object",
    "properties": {
        "cuisines": {
            "type" : "array",
            "items" : {
                "$ref": "https://schema.beckn.org/fnb/schema/0.7.1/cuisine.json"
            }
        },
        "fnb_items": {
            "type" : "array",
            "items" : {
                "$ref": "https://schema.beckn.org/fnb/schema/0.7.1/fnb_item.json"
            }
        },
        "restaurant": {
            "type" : "array",
            "items" : {
                "$ref": "https://schema.beckn.org/fnb/schema/0.7.1/provider.json"
            }
        },
        "location": {
            "$ref": "https://schema.beckn.org/core/schema/0.7.1/location.json"
        },
        "time" : {
            "$ref": "https://schema.beckn.org/core/schema/0.7.1/time.json"
        },
        "customer_attrs" : {
            "type" : "object",
            "properties" : {
                "count": {
                    "type" : "integer",
                    "minimum" : 1
                },
                "min_age" : {
                    "type" : "integer"
                }
            } 
        },
        "diet_restrictions" : {
            "type" : "array",
            "items" : {
                "type": "string"
            }
        },
        "tags": {
            "$ref" : "https://schema.beckn.org/core/schema/0.7.1/tags.json"
        }
    }
}
```
