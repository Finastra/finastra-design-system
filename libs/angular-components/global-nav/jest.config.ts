/* eslint-disable */
const name = 'global-nav';
const suiteName = 'GlobalNavModule';

export default {
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],

  preset: '../../../jest.preset.js',
  coverageDirectory: `../../../coverage/libs/${name}`,
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
  displayName: 'global-nav'
};
