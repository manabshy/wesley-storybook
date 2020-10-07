module.exports = {
  name: 'set-a-target-calculator',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/set-a-target-calculator',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
