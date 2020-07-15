module.exports = {
  name: 'wpisa-feature-inactivity-timeout',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/wpisa/feature-inactivity-timeout',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
