module.exports = {
  name: 'angular-elements',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-elements',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
