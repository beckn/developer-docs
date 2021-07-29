Agent
===
>Describes an order executor

### Schema Definition


|**Field**|**Type**|**Description**|
|---------|--------|---------------|
|name|[Name](/Mobility/Schema%20Reference/name)|Describes the name of a person in format: ./{given_name}/{honorific_prefix}/{first_name}/{middle_name}/{last_name}/{honorific_suffix}
|image|[Image](/Mobility/Schema%20Reference/image)|Image of an object. <br/><br/> A url based image will look like <br/><br/>```uri:http://path/to/image``` <br/><br/> An image can also be sent as a data string. For example : <br/><br/> ```data:js87y34ilhriuho84r3i4```
|dob|string|
|gender|string|Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender
|cred|string|
|phone|string|
|email|string|
|tags|[Tags](/Mobility/Schema%20Reference/tags)|Describes a tag. This is a simple key-value store which is used to contain extended metadata