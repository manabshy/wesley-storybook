module.exports = {
  name: 'just-invest-calculator',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/just-invest-calculator',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
