module.exports = {
  name: 'filter-tags',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/angular-components/filter-tags',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
