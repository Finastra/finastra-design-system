module.exports = {
  name: 'angular-components-expandable-table',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/angular-components/expandable-table',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
