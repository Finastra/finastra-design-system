const core = require('@actions/core');
const { join } = require('path');
const globby = require('globby');
const glob = require('glob');

async function main() {
  const paths = await getPaths('../packages/fds-components-web/*/src/*.ts');
  paths.forEach((path) => {
    const splitedPath = path.split('/');
    const wcName = splitedPath[splitedPath.length - 1];
    glob(`${path}/stories/*.stories.*`, {}, function (error, file) {
      if (error) {
        core.setFailed(`Compliance check error: ${error}`);
      } else {
        if (file.length) {
          console.log(`✅ ${wcName} [1/2] ${file}`);
        } else {
          console.log(`❌ ${wcName} [1/2] ${path}`);
          core.setFailed(`Compliance check failed! ${wcName} must have a story 📕!`);
        }
      }
    });
    glob(`${path}/test/*.test.*`, {}, function (error, file) {
      if (error) {
        core.setFailed(`Compliance check error ${error}`);
      } else {
        if (file.length) {
          console.log(`✅ ${wcName} [2/2] ${file}`);
        } else {
          console.log(`❌ ${wcName} [2/2] ${path}`);
          core.setFailed(`Compliance check failed! ${wcName} must have a test 🔬!`);
        }
      }
    });
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
