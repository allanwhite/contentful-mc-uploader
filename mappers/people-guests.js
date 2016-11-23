module.exports = function(file) {

    var keys = Object.keys(file.content.fields);

    //Replace 'Title' with 'title', 'SeoTitle' with 'seoTitle', etc.
    keys.forEach(function(key) {
        var field = file.content.fields[key];
        console.log('field name: ' + field);
        // var newKey = key.charAt(0).toLowerCase() + key.slice(1);
        var newKey = key.toLowerCase();
        delete file.content.fields[key];
        file.content.fields[key] = field;
        // console.log('new field name: ' + newKey);
    });

    //For errors like so: Error: validation against content type failed - invalid field 'seotitle'
    //  Contentful is not expecting to get the field name, so we can remove it, or rename it
    //  To remove it:
    //delete file.content.fields.seotitle;
    //  To rename it (renaming to 'seoTitle' in this example):
    // file.content.fields.Bio = file.content.fields.bio;
    // delete file.content.fields.bio;

    // file.content.fields.bioShort = file.content.fields.bioshort;
    // delete file.content.fields.bioshort;
    //Field removal
    // file.content.fields.Title = file.content.fields.fullname;
    delete file.content.fields.Title;

    delete file.content.fields.body;
    delete file.content.fields.GuestAvatar;

    // file.content.fields.personType = file.content.fields.persontype;
    // delete file.content.fields.persontype;

    //Field renaming
    // file.content.fields.tagString = file.content.fields.tags;
    // delete file.content.fields.tags;

    //Custom mappings

    // console.log(file.content.fields.tags);
    // var tagStr = file.content.fields.tags['en-US'];
    // var tagArray = tagStr.split(', ');
    // console.log('tagArray: ' + tagArray);
    var pathParts = file.path.split('/');
    var slugParts = pathParts[pathParts.length-2].split('-');
    var slug = slugParts.slice(1).join('-');
    file.content.fields.slug = {
        'en-US': slug
    };
    console.log(file);

    return file;
};
