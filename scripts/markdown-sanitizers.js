module.exports.wcaDocRemover = function (markdown) {
  const regex = /(<!-- DOC.* -->)(.*)(<!-- \/DOC.* -->)/gms;
  return markdown.replace(regex, '');
};
