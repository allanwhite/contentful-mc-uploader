module.exports = function(file) {
    var authors = {
        'alex': '3RQyxLuTkQko4ouGewqUU6',
        'casey': '7aMAu7W6K4M8S0eCuIyCCM',
        'catalyze': '3riALtpuXYeIaIGuaq8M4w',
        'josh': 'VbpTTGURUqoKc0K4oeYU',
        'kris': '3azwOe9v3O4YSuyU0gsuo6',
        'kenny': '3azwOe9v3O4YSuyU0gsuo6',
        'marcia': '6NxyE8vlfOqMOkkGsCSusA',
        'marko': '5dsPZqJr4Qu2uww6KgYO0G',
        'ben': '5dsPZqJr4Qu2uww6KgYO0G',
        'heath': '2jePzhmtig2QCaYwucYuuy',
        'mohan': '3VJKuWDfPak8w26k0g0Kw0',
        'ryan': '2B98PdoITGQAYwcWk2muY4',
        'travis': '1gpUmvd6yuOKUIUIY620i0'
    };
    // tags map to linked entries; using the tag 'slug' field as key
    var tags = {
        'api': '34a2ITeysg6eYauG028usg',
        'apps': '2gE9oPn2yUGEQEoGKEASUQ',
        'baas': '3NDyJqRTJYMwiU0SSwqagm',
        'company': '7befKoeN9uMUqUGYiKOaeO',
        'compliance': '1wY9bJEWnCwCyqcE2kCiuy',
        'customers': '4GBG5tfx8k4yqy2C2y2MaS',
        'design': '3kOhUwDRkkc0qAuKYIoIIW',
        'ehr': '6vv9sUZuiAs8yQ4cQqm86e',
        'engagement': '3rO97bU0piC0CI0eOg6ksI',
        'patient engagement': '3rO97bU0piC0CI0eOg6ksI',
        'fhir': '4WpqU1En6MsqmCEWweeCmO',
        'healthcare-costs': 'muuTw36MCccawe428I8Oa',
        'healthcare-news': '6AZpnMPG2k8mk8gk2acYUI',
        'hipaa': '3ebX0zrnVuYEQOuo2QSSuU',
        'hitrust': '9hLuri8gRGWUksIiIQg8y',
        'hl7': '659zjsWqC4CqqmMgASc46a',
        'innovation': '7lK2BzqJKoygAwAkQG2omW',
        'integration': '6wXXHIJfUsMg62Cuwquoa2',
        'interoperability': '4HqJmCMdiwwiQuC8uUcCqo',
        'leadership': '2fj1jK1yC0CQuAUIQYIaeo',
        'medicare': 'hb3JCbHoOcImGmEMasYEC',
        'mhealth': '4TyZlvypiw6yMeuGG8W4mu',
        'open-source': '1rsUh5OdtWEgi24qakiGO0',
        'podcast': '4ABMNMPZaU68iucWYcEcIe',
        'resources': '6uZHqvyHMkO4eky0OwiWki',
        'security': '5Y8Z8rlBw4Ucuu8su4oCgC',
        'telemedicine': '2ExI7snXjysKOqWqmwQwwU',
        'tutorials': '7FkInYPmxiG4QsiM60COos'
    }
    var keys = Object.keys(file.content.fields);

    //Replace 'Title' with 'title', 'SeoTitle' with 'seoTitle', etc.
    keys.forEach(function(key) {
        var field = file.content.fields[key];
        // var newKey = key.charAt(0).toLowerCase() + key.slice(1);
        var newKey = key.toLowerCase();
        delete file.content.fields[key];
        file.content.fields[newKey] = field;
        console.log('new field name: ' + newKey);
    });

    //For errors like so: Error: validation against content type failed - invalid field 'seotitle'
    //  Contentful is not expecting to get the field name, so we can remove it, or rename it
    //  To remove it:
    //delete file.content.fields.seotitle;
    //  To rename it (renaming to 'seoTitle' in this example):
    //file.content.fields.seoTitle = file.content.fields.seotitle;
    //delete file.content.fields.seotitle;

    //Field removal
    delete file.content.fields.fullname;

    //Field renaming
    // file.content.fields.origString = file.content.fields.newString;
    // delete file.content.fields.newString;

    // file.content.fields.Title = file.content.fields.Title;
    // delete file.content.fields.title;

    file.content.fields.seoTitle = file.content.fields.seotitle;
    delete file.content.fields.seotitle;

    // file.content.fields.blogLead = file.content.fields.Description;
    // delete file.content.fields.lead;

    file.content.fields.post = file.content.fields.body;
    delete file.content.fields.body;

    // file.content.fields.categoriesBlog = file.content.fields.category;
    // delete file.content.fields.category;

    //Custom mappings

    console.log(file.content.fields.tags);
    var tagStr = file.content.fields.tags['en-US'];
    var tagArray = tagStr.split(', ');
    console.log('tagArray: ' + tagArray);

    var cfTagArray = [];

    //hacky gross thing but works for this
    var addedCompliance = false;

    for(var i=0; i<tagArray.length; i++) {
        if(tags[tagArray[i]]) {
            cfTagArray.push({
                'sys': {
                    'type': 'Link',
                    'linkType': 'Entry',
                    'id': tags[tagArray[i]]
                }
            });
        } else {
            // if there is no match in existing tag list above
            if(addedCompliance === false) {
                cfTagArray.push({
                    'sys': {
                        'type': 'Link',
                        'linkType': 'Entry',
                        'id': '7befKoeN9uMUqUGYiKOaeO' //TODO put actual id here if 'compliance' isn't default tag
                    }
                });
                addedCompliance = true;
            }
        }
    }

    // array of tag matches, or a default tag
    file.content.fields.tags = {
        'en-US': cfTagArray
    }

    var dateArray = file.content.fields.date['en-US'].split('/');
    var isoDate = dateArray[2]+'-'+dateArray[0]+'-'+dateArray[1];
    file.content.fields.pubDate = {
        'en-US': isoDate
    };
    delete file.content.fields.date;

    var pathParts = file.path.split('/');
    var slugParts = pathParts[pathParts.length-2].split('-');
    var slug = slugParts.slice(1).join('-');
    file.content.fields.slug = {
        'en-US': slug
    };
    file.content.fields.author = {
        'en-US': {
            'sys': {
                'type': 'Link',
                'linkType': 'Entry',
                'id': '6NxyE8vlfOqMOkkGsCSusA'
            }
        }
    }
    // var authorId = authors[file.content.fields.author['en-US']];
    // if(authorId) {
    //     file.content.fields.author = {
    //         'en-US': {
    //             'sys': {
    //                 'type': 'Link',
    //                 'linkType': 'Entry',
    //                 'id': authorId
    //             }
    //         }
    //         // 'en-US': authorId
    //     }
    // } else {
    //     // Marcia
    //     file.content.fields.author = {
    //         'en-US': {
    //             'sys': {
    //                 'type': 'Link',
    //                 'linkType': 'Entry',
    //                 'id': '6NxyE8vlfOqMOkkGsCSusA'
    //             }
    //         }
    //     }
    // }

    // injecting CTA ref, all entries in this pool have this as default.
    file.content.fields.ctaRef = {
        'en-US': {
            'sys': {
                'type': 'Link',
                'linkType': 'Entry',
                'id': 'wWsIbfCLjasGCy6cKeO86'
            }
        }
    }

    console.log(file);
    return file;
};
