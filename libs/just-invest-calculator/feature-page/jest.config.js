module.exports = {
  name: 'just-invest-calculator-feature-page',
  preset: '../../../jest.config.js',
  coverageDirectory:
    '../../../coverage/libs/just-invest-calculator/feature-page',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
