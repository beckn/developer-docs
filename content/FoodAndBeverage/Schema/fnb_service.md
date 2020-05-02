```json
{
    "$id": "https://schema.beckn.org/fnb/schema/0.7.1/fnb_service.json",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "version" : "0.7.1",
    "description": "Describes the F&B service of a restaurant",
    "type": "object",
    "properties": {
        "id" : {
            "type" : "string"
        },
        "menu" : {
            "$ref" : "https://schema.beckn.org/core/schema/0.7.1/catalog.json"
        },
        "provider" : {
            "$ref" : "https://schema.beckn.org/core/schema/0.7.1/provider.json"
        },
        "schedule" : {
            "$ref" : "http://schema.beckn.org/core/schema/0.7.1/schedule.json"
        },
        "selected_items" : {
            "type" : "array",
            "items" : {
                "$ref" : "https://schema.beckn.org/core/schema/0.7.1/item.json#properties/id"
            }
        },
        "matched_items" : {
            "type" : "array",
            "items" : {
                "$ref" : "https://schema.beckn.org/core/schema/0.7.1/item.json#properties/id"
            }
        },
        "order" : {
            "type" : "array",
            "items" : {
                "type" : "object",
                "properties" : {
                    "item_id" : {
                        "$ref" : "https://schema.beckn.org/fnb/schema/0.7.1/item.json#properties/id"
                    }
                }
            } 
        },
        "offers" : {
            "type" : "array",
            "items" : {
                "type" : "object",
                "properties" : {
                    "offer" : {
                        "$ref" : "https://schema.beckn.org/core/schema/0.7.1/offer.json"
                    },
                    "item_ids" : {
                        "type" : "array",
                        "items" : {
                            "$ref" : "https://schema.beckn.org/core/schema/0.7.1/item.json#properties/id"
                        }
                    },
                    "ttl" : {
                        "$ref" : "https://schema.beckn.org/core/schema/0.7.1/ttl.json"
                    }
                }
                
            }
        }
    }
}
```