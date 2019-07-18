module.exports = {
  name: 'test',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/test',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
