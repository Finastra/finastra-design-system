const nxPreset = require('@nrwl/jest/preset');
const babelModules = ['lodash-es', 'plotly.js'].join('|');

module.exports = {
  ...nxPreset,
  verbose: true,
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  preset: 'jest-preset-angular',
  resolver: '@nrwl/jest/plugins/resolver',
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
    [`(${babelModules}).+\\.js$`]: 'babel-jest'
  },
  // testEnvironment: 'jest-environment-jsdom-fifteen',
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './testresults/', outputName: `junit-${new Date().getTime()}.xml` }]
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: {
        before: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer']
      }
    }
  },
  collectCoverage: true,
  coverageReporters: ['json', 'html']
};
