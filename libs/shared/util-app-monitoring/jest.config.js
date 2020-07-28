module.exports = {
  name: 'shared-util-app-monitoring',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/util-app-monitoring',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
