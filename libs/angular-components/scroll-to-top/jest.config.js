module.exports = {
  name: 'scroll-to-top',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/angular-components/scroll-to-top',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
