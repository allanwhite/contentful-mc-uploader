module.exports = function(file) {
    var authors = {
        'casey': '7aMAu7W6K4M8S0eCuIyCCM',
        'marcia': '6NxyE8vlfOqMOkkGsCSusA',
        'marko': '5dsPZqJr4Qu2uww6KgYO0G',
        'heath': '2jePzhmtig2QCaYwucYuuy',
        'mohan': '3VJKuWDfPak8w26k0g0Kw0',
        'travis': '1gpUmvd6yuOKUIUIY620i0'
    };

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
    file.content.fields.title = file.content.fields.fullname;
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

    // console.log(file.content.fields.tags);
    // var tagStr = file.content.fields.tags['en-US'];
    // var tagArray = tagStr.split(', ');
    // console.log('tagArray: ' + tagArray);

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

    // // injecting CTA ref, all entries in this pool have this as default.
    // file.content.fields.ctaRef = {
    //     'en-US': {
    //         'sys': {
    //             'type': 'Link',
    //             'linkType': 'Entry',
    //             'id': 'wWsIbfCLjasGCy6cKeO86'
    //         }
    //     }
    // }

    // console.log(file);

    return file;
};
