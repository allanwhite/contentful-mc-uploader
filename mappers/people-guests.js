module.exports = function(file) {

    var keys = Object.keys(file.content.fields);

    //Replace 'Title' with 'title', 'SeoTitle' with 'seoTitle', etc.
    keys.forEach(function(key) {
        var field = file.content.fields[key];
        // var newKey = key.charAt(0).toLowerCase() + key.slice(1);
        var newKey = key.toLowerCase();
        delete file.content.fields[key];
        file.content.fields[newKey] = field;
        // console.log('new field name: ' + newKey);
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

    //Custom mappings

    // console.log(file.content.fields.tags);
    // var tagStr = file.content.fields.tags['en-US'];
    // var tagArray = tagStr.split(', ');
    // console.log('tagArray: ' + tagArray);

    // console.log(file);

    return file;
};
