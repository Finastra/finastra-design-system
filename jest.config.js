const babelModules = ['lodash-es'].join('|');

module.exports = {
  verbose: true,
  testMatch: ['**/+(*.)+(spec|test).+ts'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  preset: 'jest-preset-angular',
  resolver: '@nrwl/jest/plugins/resolver',
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
    [`(${babelModules}).+\\.js$`]: 'babel-jest'
  },
  testEnvironment: 'jest-environment-jsdom-thirteen',
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './testresults/', outputName: `junit-${new Date().getTime()}.xml` }]
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json'
    }
  },
  // Coverage
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  coverageThreshold: {
    // global: {
    //   branches: 60,
    //   functions: 80,
    //   lines: 80,
    //   statements: 80
    // }
  }
};
