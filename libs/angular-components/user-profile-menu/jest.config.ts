/* eslint-disable */
const name = 'user-profile-menu';
const suiteName = 'UxgUserProfileMenuModule';

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
  displayName: 'user-profile-menu'
};
