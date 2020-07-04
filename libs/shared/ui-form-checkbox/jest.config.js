module.exports = {
  name: 'shared-ui-form-checkbox',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-form-checkbox',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
