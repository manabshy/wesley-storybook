module.exports = {
  name: 'dashboard-help-and-support-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory:
    '../../../coverage/libs/dashboard-help-and-support/data-access',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
