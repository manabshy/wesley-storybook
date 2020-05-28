module.exports = {
  name: 'wpisa-feature-isa-journey',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/wpisa/feature-isa-journey',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
