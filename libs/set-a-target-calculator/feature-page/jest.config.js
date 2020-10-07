module.exports = {
  name: 'set-a-target-calculator-feature-page',
  preset: '../../../jest.config.js',
  coverageDirectory:
    '../../../coverage/libs/set-a-target-calculator/feature-page',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
