const path = require('path');

var resolvedBabelLoader = require.resolve('babel-loader', {
  paths: [require.resolve('@storybook/core')],
});
/**
 * Export a function. Accept the base config as the only param.
 * @param {Object} options
 * @param {Required<import('webpack').Configuration>} options.config
 * @param {'DEVELOPMENT' | 'PRODUCTION'} options.mode - change the build configuration. 'PRODUCTION' is used when building the static version of storybook.
 */
module.exports = async ({ config, mode }) => {
  // const entry = [
  //   ...[path.resolve('node_modules/core-js/stable', 'index.js')],
  //   ...config.entry,
  // ];
  // config.entry = entry;
  // const rules = [
  //   {
  //     // test: /[/\\]@angular[/\\]common[/\\].+\.(js|ts)$/,
  //     test: /\.(js|ts)$/,
  //     include: [
  //       /node_modules\/@angular\/common/,
  //       /node_modules\/@angular\/compiler\/fesm2015/,
  //     ],
  //     use: [
  //       {
  //         loader: resolvedBabelLoader,
  //         options: {
  //           presets: [
  //             [
  //               require.resolve('@babel/preset-env'),
  //               {
  //                 modules: 'commonjs',
  //               },
  //             ],
  //           ],
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     test: /\.(js|ts)$/,
  //     use: [
  //       {
  //         loader: resolvedBabelLoader,
  //         options: {
  //           presets: [
  //             [
  //               require.resolve('@babel/preset-env'),
  //               {
  //                 shippedProposals: true,
  //                 useBuiltIns: 'usage',
  //                 corejs: 3,
  //                 targets: {
  //                   // The % refers to the global coverage of users from browserslist
  //                   browsers: [
  //                     '> 0.5%',
  //                     'last 2 versions',
  //                     'Firefox ESR',
  //                     'not dead',
  //                     'not IE 9-10',
  //                     'IE 11',
  //                   ],
  //                 },
  //               },
  //             ],
  //           ],
  //         },
  //       },
  //     ],
  //     include: [/node_modules\/graphql-/],
  //   },
  //   // {
  //   //   test: /[/\\]@angular[/\\]compiler[/\\]fesm2015[/\\].+\.(js)$/,
  //   //   parser: { system: true },
  //   //   include: /node_modules\/@angular\/compiler\/fesm2015/,
  //   //   use: [
  //   //     {
  //   //       loader: resolvedBabelLoader,
  //   //       options: {
  //   //         presets: [
  //   //           [
  //   //             require.resolve('@babel/preset-env'),
  //   //             {
  //   //               modules: 'commonjs',
  //   //             },
  //   //           ],
  //   //         ],
  //   //       },
  //   //     },
  //   //   ],
  //   // },
  // ];
  // const newrules = [...config.module.rules, ...rules];
  // config.module.rules = newrules;
  // // console.log(config.entry);

  return config;
};
