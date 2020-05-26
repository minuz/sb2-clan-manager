module.exports = {
  name: 'clan-manager',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/clan-manager',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
