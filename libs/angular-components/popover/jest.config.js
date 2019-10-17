module.exports = {
  name: 'popover',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/angular-components/popover',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
