module.exports = {
  name: 'components',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/angular-components',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
