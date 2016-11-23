module.exports = function(file) {
    var authors = {
        "casey": "7aMAu7W6K4M8S0eCuIyCCM",
        "heath": "2jePzhmtig2QCaYwucYuuy",
        "marcia": "6NxyE8vlfOqMOkkGsCSusA",
        "marko": "5dsPZqJr4Qu2uww6KgYO0G",
        "mohan": "3VJKuWDfPak8w26k0g0Kw0",
        "travis": "1gpUmvd6yuOKUIUIY620i0"
    };
    // tags map to linked entries; using the tag "slug" field as key
    var tags = {
        "api": "34a2ITeysg6eYauG028usg",
        "baas": "3NDyJqRTJYMwiU0SSwqagm",
        "company": "7befKoeN9uMUqUGYiKOaeO",
        "compliance": "1wY9bJEWnCwCyqcE2kCiuy",
        "design": "3kOhUwDRkkc0qAuKYIoIIW",
        "ehr": "6vv9sUZuiAs8yQ4cQqm86e",
        "engagement": "3rO97bU0piC0CI0eOg6ksI",
        "fhir": "4WpqU1En6MsqmCEWweeCmO",
        "healthcare-costs": "muuTw36MCccawe428I8Oa",
        "hipaa": "3ebX0zrnVuYEQOuo2QSSuU",
        "hitrust": "9hLuri8gRGWUksIiIQg8y",
        "integration": "6wXXHIJfUsMg62Cuwquoa2",
        "interoperability": "4HqJmCMdiwwiQuC8uUcCqo",
        "medicare": "hb3JCbHoOcImGmEMasYEC",
        "mhealth": "4TyZlvypiw6yMeuGG8W4mu",
        "podcast": "4ABMNMPZaU68iucWYcEcIe",
        "resources": "6uZHqvyHMkO4eky0OwiWki",
        "security": "5Y8Z8rlBw4Ucuu8su4oCgC",
        "telemedicine": "2ExI7snXjysKOqWqmwQwwU",
        "tutorials": "7FkInYPmxiG4QsiM60COos"
    };

    var keys = Object.keys(file.content.fields);

    //Replace "Title" with "title", "SeoTitle" with "seoTitle", etc.
    keys.forEach(function(key) {
        var field = file.content.fields[key];
        // var newKey = key.charAt(0).toLowerCase() + key.slice(1);
        var newKey = key.toLowerCase();
        delete file.content.fields[key];
        file.content.fields[newKey] = field;
        console.log("new field name: " + newKey);
    });

    //For errors like so: Error: validation against content type failed - invalid field "seotitle"
    //  Contentful is not expecting to get the field name, so we can remove it, or rename it
    //  To remove it:
    //delete file.content.fields.seotitle;
    //  To rename it (renaming to "seoTitle" in this example):
    //file.content.fields.seoTitle = file.content.fields.seotitle;
    //delete file.content.fields.seotitle;

    //Field removal
    delete file.content.fields.fullname;

    //Field renaming
    // file.content.fields.origString = file.content.fields.newString;
    // delete file.content.fields.newString;

    file.content.fields.seoTitle = file.content.fields.seotitle;
    delete file.content.fields.seotitle;

    // file.content.fields.blogLead = file.content.fields.lead;
    // delete file.content.fields.lead;

    // file.content.fields.post = file.content.fields.body;
    // delete file.content.fields.body;

    // file.content.fields.categoriesBlog = file.content.fields.category;
    // delete file.content.fields.category;

    file.content.fields.Postmedia = file.content.fields.soundcloudEmbed;
    delete file.content.fields.soundcloudEmbed;

    //Custom mappings

    console.log(file.content.fields.tags);
    var tagStr = file.content.fields.tags["en-US"];
    var tagArray = tagStr.split(", ");
    console.log("tagArray: " + tagArray);

    var cfTagArray = [];

    //hacky gross thing but works for this
    var addedCompliance = false;

    for(var i=0; i<tagArray.length; i++) {
        if(tags[tagArray[i]]) {
            cfTagArray.push({
                "sys": {
                    "type": "Link",
                    "linkType": "Entry",
                    "id": tags[tagArray[i]]
                }
            });
        } else {
            // if there is no match in existing tag list above
            if(addedCompliance === false) {
                cfTagArray.push({
                    "sys": {
                        "type": "Link",
                        "linkType": "Entry",
                        "id": "7befKoeN9uMUqUGYiKOaeO" //TODO put actual id here if "compliance" isn"t default tag
                    }
                });
                addedCompliance = true;
            }
        }
    }

    // array of tag matches, or a default tag
    file.content.fields.tags = {
        "en-US": cfTagArray
    };

    var dateArray = file.content.fields.date["en-US"].split("/");
    var isoDate = dateArray[2]+"-"+dateArray[0]+"-"+dateArray[1];
    file.content.fields.pubDate = {
        "en-US": isoDate
    };
    delete file.content.fields.date;

    var pathParts = file.path.split("/");
    var slugParts = pathParts[pathParts.length-2].split("-");
    var slug = slugParts.slice(1).join("-");
    file.content.fields.slug = {
        "en-US": slug
    };

    var authorId = authors[file.content.fields.author["en-US"]];
    if(authorId) {
        file.content.fields.author = {
            "en-US": {
                "sys": {
                    "type": "Link",
                    "linkType": "Entry",
                    "id": authorId
                }
            }
            // "en-US": authorId
        };
    }

    // injecting CTA ref, all entries in this pool have this as default.
    file.content.fields.ctaRef = {
        "en-US": {
            "sys": {
                "type": "Link",
                "linkType": "Entry",
                "id": "wWsIbfCLjasGCy6cKeO86"
            }
        }
    };

    console.log(file);
    return file;
};
