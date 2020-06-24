module.exports = {
  name: 'shared-ui-progress-spinner',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-progress-spinner',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
