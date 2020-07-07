module.exports = {
  name: 'shared-ui-form-select',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-form-select',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
