module.exports = function(file) {
    var authors = {
        'casey': '7aMAu7W6K4M8S0eCuIyCCM',
        'marcia': '6NxyE8vlfOqMOkkGsCSusA',
        'marko': '5dsPZqJr4Qu2uww6KgYO0G',
        'heath': '2jePzhmtig2QCaYwucYuuy',
        'mohan': '3VJKuWDfPak8w26k0g0Kw0',
        'travis': '1gpUmvd6yuOKUIUIY620i0'
    };
    // tags map to linked entries; using the tag 'slug' field as key
    var tags = {
        'compliance': '1wY9bJEWnCwCyqcE2kCiuy',
        'telemedicine': '2ExI7snXjysKOqWqmwQwwU',
        'hipaa': '3ebX0zrnVuYEQOuo2QSSuU',
        'design': '3kOhUwDRkkc0qAuKYIoIIW',
        'baas': '3NDyJqRTJYMwiU0SSwqagm',
        'engagement': '3rO97bU0piC0CI0eOg6ksI',
        'podcast': '4ABMNMPZaU68iucWYcEcIe',
        'interoperability': '4HqJmCMdiwwiQuC8uUcCqo',
        'fhir': '4WpqU1En6MsqmCEWweeCmO',
        'security': '5Y8Z8rlBw4Ucuu8su4oCgC',
        'resources': '6uZHqvyHMkO4eky0OwiWki',
        'ehr': '6vv9sUZuiAs8yQ4cQqm86e',
        'integration': '6wXXHIJfUsMg62Cuwquoa2',
        'tutorials': '7FkInYPmxiG4QsiM60COos',
        'hitrust': '9hLuri8gRGWUksIiIQg8y',
        'api': '34a2ITeysg6eYauG028usg',
        'medicare': 'hb3JCbHoOcImGmEMasYEC',
        'healthcare-costs': 'muuTw36MCccawe428I8Oa'
    }
    // Start mapping calls-to-action. These are static, per-section for now.
    // var ctas = {
    //     'blog': 'wWsIbfCLjasGCy6cKeO86'
    // };

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
    // file.content.fields.tagString = file.content.fields.tags;
    // delete file.content.fields.tags;

    file.content.fields.seoTitle = file.content.fields.seotitle;
    delete file.content.fields.seotitle;

    file.content.fields.blogLead = file.content.fields.lead;
    delete file.content.fields.lead;

    file.content.fields.post = file.content.fields.body;
    delete file.content.fields.body;

    file.content.fields.categoriesBlog = file.content.fields.category;
    delete file.content.fields.category;

    //Custom mappings

    console.log(file.content.fields.tags);
    var tagStr = file.content.fields.tags['en-US'];
    var tagArray = tagStr.split(', ');
    console.log('tagArray: ' + tagArray);

    function tagMapElements(value, key, map) {
        // Need to iterate over tagArray.length, do an "if" check, and insert the mapped value. Else, tag = 'resources' ID (fallback)
        // console.log("tag." + key + " = id: " + value);

    }
    new Map([
        ['compliance', '1wY9bJEWnCwCyqcE2kCiuy'],
        ['telemedicine', '2ExI7snXjysKOqWqmwQwwU'],
        ['hipaa', '3ebX0zrnVuYEQOuo2QSSuU'],
        ['design', '3kOhUwDRkkc0qAuKYIoIIW'],
        ['baas', '3NDyJqRTJYMwiU0SSwqagm'],
        ['engagement', '3rO97bU0piC0CI0eOg6ksI'],
        ['podcast', '4ABMNMPZaU68iucWYcEcIe'],
        ['interoperability', '4HqJmCMdiwwiQuC8uUcCqo'],
        ['fhir', '4WpqU1En6MsqmCEWweeCmO'],
        ['security', '5Y8Z8rlBw4Ucuu8su4oCgC'],
        ['resources', '6uZHqvyHMkO4eky0OwiWki'],
        ['ehr', '6vv9sUZuiAs8yQ4cQqm86e'],
        ['integration', '6wXXHIJfUsMg62Cuwquoa2'],
        ['tutorials', '7FkInYPmxiG4QsiM60COos'],
        ['hitrust', '9hLuri8gRGWUksIiIQg8y'],
        ['api', '34a2ITeysg6eYauG028usg'],
        ['medicare', 'hb3JCbHoOcImGmEMasYEC'],
        ['healthcare-costs', 'muuTw36MCccawe428I8Oa']
    ]).forEach(tagMapElements);

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

    var authorId = authors[file.content.fields.author['en-US']];
    if(authorId) {
        file.content.fields.author = {
            'en-US': {
                'sys': {
                    'type': 'Link',
                    'linkType': 'Entry',
                    'id': authorId
                }
            }
            // 'en-US': authorId
        }
    }

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

    // console.log(file);

    return file;
};
