function wcaApiDocRemover(markdown) {
  const regex = /(<!-- DOC.* -->)(.*)(<!-- \/DOC.* -->)/gms;
  return markdown.replace(regex, '');
};

function storybookButton(markdown) {
  const regex = /\[\!\[Storybook\](.*)/gm;
  return markdown.replace(regex, '');
};

function allSanitizers(markdown) {
  return markdown;
  return storybookButton(wcaApiDocRemover(markdown));
}

module.exports = {
  wcaApiDocRemover,
  storybookButton,
  allSanitizers
}