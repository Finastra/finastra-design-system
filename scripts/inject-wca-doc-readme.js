const { readFileSync, writeFileSync } = require('fs');
const { join, posix } = require('path');
const globby = require('globby');
const READ_WRITE_OPTS = { encoding: 'utf-8' };

async function main() {
  const paths = await getPaths('../packages/fds-components-web/*/src/*.ts');
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
  const wcaOutput = readFileSync(path, READ_WRITE_OPTS);
  const parts = wcaOutput.split(/^#(?!#)\s(.*)\n/gm);
  parts.shift();
  const contents = new Map();
  parts.forEach((part, index) => {
    if (index % 2 === 0) {
      contents.set(part, '');
    } else {
      contents.set(parts[index - 1], part);
    }
  });
  return contents;
}

function injectInReadme(path, content) {
  try {
    let README = readFileSync(path, READ_WRITE_OPTS);
    if (content.size === 1) {
      README = injectAtPosition(README, content.entries().next().value[1]);
    } else {
      content.forEach((item, key) => {
        README = injectAtPosition(README, item, key);
      });
    }
    writeFileSync(path, README, READ_WRITE_OPTS);
  } catch (err) {
    console.log(`Error injecting readme for path ${path}`);
    console.log(err);
  }
}

function injectAtPosition(README, content, key) {
  const startPosition = README.indexOf(tag(false, key)) + tag(false, key).length;
  const endPosition = README.indexOf(tag(true, key));
  if (README.indexOf(tag(false, key)) !== -1 && endPosition !== -1) {
    README = README.slice(0, startPosition) + sanitizeMd(content) + README.slice(endPosition);
  }
  return README;
}

function sanitizeMd(content) {
  return content.replace(/##/g, '####');
}

function tag(end, key) {
  const variant = key ? `:${key}` : '';
  return `<!-- ${end ? '/' : ''}DOC${variant} -->`;
}
