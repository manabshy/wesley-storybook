module.exports = {
  name: 'shared-ui-site-footer',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-site-footer',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
