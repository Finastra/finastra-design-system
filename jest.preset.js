const nxPreset = require('@nrwl/jest/preset');
const babelModules = ['plotly.js'].join('|');

module.exports = {
  ...nxPreset,
  verbose: true,
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular',
    [`(${babelModules}).+\\.js$`]: 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!lodash-es/*)'],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './testresults/', outputName: `junit-${new Date().getTime()}.xml` }]
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: {
        before: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer']
      }
    }
  },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment'
  ],
  collectCoverage: true,
  coverageReporters: ['json', 'html']
};
