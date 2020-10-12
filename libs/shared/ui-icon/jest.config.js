module.exports = {
  name: 'shared-ui-icon',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-icon',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
