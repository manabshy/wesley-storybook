module.exports = {
  name: 'find-my-fc-feature-find-my-fc-journey',
  preset: '../../../jest.config.js',
  coverageDirectory:
    '../../../coverage/libs/find-my-fc/feature-find-my-fc-journey',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
