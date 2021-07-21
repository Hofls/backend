#### Essence
* Goal is to find setup with the fastest development time.
* Start with a generic template. Finish when you have MVP (DB + Backend + Web API + Client)

#### Principles
* Avoid duplicate work
    * Manually add field `phone` to `customer` entity. 
    * This field should automatically appear in:
        * DB table (e.q. generate liquibase changeset with JPA Buddy)
        * Web API
        * Mapping (e.g. use MapStruct)
* Generate code
    * Humans should manually do only the stuff that computer is unable to do yet.
* Nothing excessive
    * Manually wrote line of code? Make sure it's necessary. Maybe app can survive without it?
* ??? Programming language with weak/dynamic typing
