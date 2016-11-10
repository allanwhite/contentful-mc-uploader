// example from readme
module.exports = function(file) {
    file.content.fields.slug = {
        'en-US': file.path.replace('.md', '')
    };
    // Blog mappings, AFAIK:
    // parent folder name => filename.md && slug
    // 'Title':    => title
    // 'Seotitle': => seoTitle
    // 'Author':   => (this should be an array, or we hook it up later)
    // 'Fullname': => author.fullname
    // 'Date':     => pubDate (it's ok if we just port the day. ex. !ruby/object:DateTime 2016-10-03 17:00:00.000000000 -07:00)
    return file;
};
