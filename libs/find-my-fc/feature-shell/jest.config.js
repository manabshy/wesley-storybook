module.exports = {
  name: 'find-my-fc-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/find-my-fc/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
