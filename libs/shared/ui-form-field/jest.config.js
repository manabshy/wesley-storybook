module.exports = {
  name: 'shared-ui-form-field',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-form-field',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
