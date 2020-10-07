module.exports = {
  name: 'dashboard-help-and-support',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dashboard-help-and-support',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
