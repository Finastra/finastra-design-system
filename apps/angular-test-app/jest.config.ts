/* eslint-disable */
const name = 'angular-test-app';
const suiteName = 'AppComponentModule';

export default {
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],

  preset: '../../jest.preset.js',
  coverageDirectory: `../../coverage/libs/${name}`,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './testresults/',
        outputName: `junit-${name}.xml`,
        suiteName,
        classNameTemplate: '{classname}',
        titleTemplate: `${suiteName} › {classname} › {title}`,
        ancestorSeparator: ' › '
      }
    ]
  ],
  displayName: 'test'
};
