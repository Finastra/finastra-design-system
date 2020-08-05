/* eslint-disable import/no-extraneous-dependencies */
/**
 * https://github.com/facebook/jest/issues/2418#issuecomment-423806659
 */
const path = require('path');
const globby = require('globby');

const rootPath = path.resolve(process.cwd(), 'coverage');
const libCoverage = require('istanbul-lib-coverage');
const { createReporter } = require('istanbul-api');

const map = libCoverage.createCoverageMap();

const normalizeJestCoverage = (obj) => {
  const result = obj;
  Object.entries(result).forEach(([k, v]) => {
    if (v.data) result[k] = v.data;
  });
  return result;
};

globby([`${rootPath}`, '!**/node_modules'], { expandDirectories: { files: ['coverage-final.json'] } }).then((paths) => {
  paths.forEach((path) => {
    const coverage = require(path);
    map.merge(normalizeJestCoverage(coverage));
  });

  const reporter = createReporter();
  reporter.addAll(['cobertura', 'lcov', 'text']);
  reporter.write(map);
});
