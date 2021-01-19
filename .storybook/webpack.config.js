const path = require('path');
/**
 * Export a function. Accept the base config as the only param.
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode - change the build configuration. 'PRODUCTION' is used when building the static version of storybook.
 */
module.exports = async ({ config, mode }) => {
  const entry = [
    ...[
      path.resolve('node_modules/core-js/stable', 'index.js'),
      path.resolve('node_modules/regenerator-runtime', 'runtime.js'),
    ],
    ...config.entry,
  ];
  config.entry = entry;
  return config;
};
