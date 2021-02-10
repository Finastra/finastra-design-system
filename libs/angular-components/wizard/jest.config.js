const name = 'wizard';
const suiteName = 'WizardModule';

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],

  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/libs/components/wizard',
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
  displayName: 'wizard'
};
