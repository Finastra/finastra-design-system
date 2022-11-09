const { readFileSync, writeFileSync } = require('fs');
const { join, posix } = require('path');
const globby = require('globby');
const READ_WRITE_OPTS = { encoding: 'utf-8' };
const START_TAG = '<!-- DOC -->';
const END_TAG = '<!-- /DOC -->';

async function main() {
  const paths = await getPaths('../libs/web-components/*/src/*.ts');
  paths.forEach((path) => {
    const md = getContent(path);
    const dir = path.replace('/stories/sb-generated/custom-element.md', '');
    const baseReadme = join(dir, `README.md`);
    injectInReadme(baseReadme, md);
  });
}

main();

async function getPaths(paths) {
  const eatThat = posix.join(__dirname, paths);
  const tsPaths = await globby(eatThat);
  const filteredPaths = tsPaths.filter((path) => !path.includes('.css.ts'));
  const rootFolders = filteredPaths.map((path) => path.split('/').slice(0, -2).join('/'));
  const uniqueFolders = [...new Set(rootFolders)];
  const customElementsPaths = uniqueFolders.map((path) => join(path, 'stories/sb-generated/custom-element.md'));
  return customElementsPaths;
}

function getContent(path) {
  const carriageReturn = '\n';
  const wcaOutput = readFileSync(path, READ_WRITE_OPTS);
  const [, ...rest] = wcaOutput.split(carriageReturn);
  return rest.join(carriageReturn);
}

function injectInReadme(path, content) {
  try {
    let README = readFileSync(path, READ_WRITE_OPTS);
    const startPosition = README.indexOf(START_TAG) + START_TAG.length;
    const endPosition = README.indexOf(END_TAG);
    if (README.indexOf(START_TAG) !== -1 && endPosition !== -1) {
        README = README.slice(0, startPosition) + sanitizeMd(content) + README.slice(endPosition);
        writeFileSync(path, README, READ_WRITE_OPTS);
    }
  } catch (err) {
    console.log(`Error injecting readme for path ${path}`);
  }
}

function sanitizeMd(content) {
  return content.replace(/##/g, '####');
}
