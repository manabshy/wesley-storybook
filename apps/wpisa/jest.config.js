module.exports = {
  name: 'wpisa',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/wpisa',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
