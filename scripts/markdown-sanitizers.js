module.exports.wcaApiDocRemover = function (markdown) {
  const regex = /(<!-- DOC.* -->)(.*)(<!-- \/DOC.* -->)/gms;
  return markdown.replace(regex, '');
};

module.exports.storybookButton = function (markdown) {
  const regex = /\[\!\[Storybook\](.*)/gm;
  return markdown.replace(regex, '');
};

module.exports.allSanitizers = function(markdown) {
  return this.storybookButton(this.wcaApiDocRemover(markdown));
}