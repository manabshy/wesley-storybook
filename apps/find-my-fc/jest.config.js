module.exports = {
  name: 'find-my-fc',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/find-my-fc',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
