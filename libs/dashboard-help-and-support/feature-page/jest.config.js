module.exports = {
  name: 'dashboard-help-and-support-feature-page',
  preset: '../../../jest.config.js',
  coverageDirectory:
    '../../../coverage/libs/dashboard-help-and-support/feature-page',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
