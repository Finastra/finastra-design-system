const { matches } = require('lodash-es');

function wcaApiDocRemover(markdown) {
  const regex = /(<!-- DOC.* -->)(.*)(<!-- \/DOC.* -->)/gms;
  return markdown.replace(regex, '');
}

function storybookButton(markdown, replace) {
  const regex = /\[\!\[Storybook\](.*)/gm;
  return markdown.replace(regex, replace);
}

function githubReadme(link) {
  const GITHUB_BADGE = 'https://img.shields.io/badge/GitHub-README-000?style=for-the-badge&logo=github&logoColor=white';
  return `[![${GITHUB_BADGE}](${GITHUB_BADGE})](${link})`;
}

function getLinkToReadme(componentPath) {
  return `https://github.com/Finastra/finastra-design-system/blob/main/packages/fds-components-web/${componentPath}/README.md`;
}

function getPathToComponent(markdown) {
  let regex = /https:\/\/www\.npmjs\.com\/package\/@finastra\/(.*)\)/gm;
  const matches = regex.exec(markdown);
  return matches && matches.length > 0 ? matches[1] : '';
}

function allSanitizers(markdown) {
  return storybookButton(wcaApiDocRemover(markdown), githubReadme(getLinkToReadme(getPathToComponent(markdown))));
}

module.exports = {
  wcaApiDocRemover,
  storybookButton,
  allSanitizers
};
