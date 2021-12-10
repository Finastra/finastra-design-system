const nxPreset = require('@nrwl/jest/preset');
const babelModules = ['plotly.js'].join('|');

module.exports = {
  ...nxPreset,
  verbose: true,
  // resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
  transform: {
    '^.+\\.(ts|js|mjs|html)$': 'jest-preset-angular',
    [`(${babelModules}).+\\.js$`]: 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es/*)', '<rootDir>/node_modules/(?!.*\\.mjs$)'],
  reporters: ['default', ['jest-junit', { outputDirectory: './testresults/', outputName: `junit-${new Date().getTime()}.xml` }]],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: ['jest-preset-angular/build/InlineFilesTransformer', 'jest-preset-angular/build/StripStylesTransformer']
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
