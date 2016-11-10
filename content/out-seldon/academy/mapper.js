// example from readme
module.exports = function(file) {
  file.content.fields.slug = {
    'en-US': file.path.replace('.md', '')
  };
  return file;
};
