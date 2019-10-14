module.exports = {
  name: 'global-search',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/angular-components/global-search',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
