module.exports = {
  stories: ['../../**/*.stories.@(ts|js|mdx)'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-docs',
    '@storybook/addon-notes/register',
  ],
  webpackFinal: async (config, { mode }) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules.slice(1),
        {
          test: /\.(mjs|jsx?|tsx?)$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: `.cache/storybook`,
                presets: [
                  [
                    '@babel/preset-env',
                    { shippedProposals: true, useBuiltIns: 'usage', corejs: 3 },
                  ],
                  '@babel/preset-typescript',
                  mode === 'PRODUCTION' && [
                    'babel-preset-minify',
                    { builtIns: false, mangle: false },
                  ],
                  '@babel/preset-react',
                ].filter(Boolean),
                plugins: [
                  ['@babel/plugin-proposal-decorators', { legacy: true }],
                  ['@babel/plugin-proposal-class-properties', { loose: true }],
                  ['@babel/plugin-proposal-private-methods', { loose: true }],
                  ['@babel/plugin-proposal-object-rest-spread'],
                  ['@babel/plugin-syntax-dynamic-import'],
                  ['babel-plugin-macros'],
                ],
              },
            },
          ],
          include: [
            /node_modules\/@react-leaflet|react-leaflet/,
            /node_modules\/@angular\/common/,
            /node_modules\/@angular\/compiler\/fesm2015/,
            /node_modules\/rxjs\/_esm5/,
          ],
          exclude: [/node_modules/, /dist/],
        },
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    { shippedProposals: true, useBuiltIns: 'usage', corejs: 3 },
                  ],
                ],
              },
            },
          ],
          include: [/node_modules\/graphql-/],
        },
      ],
    },
  }),
};
