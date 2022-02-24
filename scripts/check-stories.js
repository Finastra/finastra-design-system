const core = require('@actions/core');
const { join } = require('path');
const globby = require('globby');
const glob = require("glob");

async function main() {
  const paths = await getPaths('../libs/web-components/*/src/*.ts');
  paths.forEach((path) => {
    glob(`${path}/stories/*.stories.*`, {}, function (error, file) {
      if (error) {
        core.setFailed(`Check Stories Action failed with error: ${error}`);
      } else {
        if (file.length) {
          console.log(`✅ ${file}`);
        } else {
          console.log(`❌ ${path}`);
          core.setFailed('You must create a Storie for each components 📕!');
        }
      }
    })
  });
}

main();

async function getPaths(paths) {
  const eatThat = join(__dirname, paths);
  const tsPaths = await globby(eatThat);
  const filteredPaths = tsPaths.filter((path) => !path.includes('.css.ts'));
  const rootFolders = filteredPaths.map((path) => path.split('/').slice(0, -2).join('/'));
  const uniqueFolders = [...new Set(rootFolders)];
  const customElementsPaths = uniqueFolders.map((path) => path);
  return customElementsPaths;
}
