module.exports = {
  name: 'filter-tree',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/angular-components/filter-tree',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
