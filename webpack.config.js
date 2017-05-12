import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const isDist = process.env.NODE_ENV === 'dist';
const isDev = process.env.NODE_ENV === 'dev';

const distConfig = {
  devtool: false,
  entry:   './src/index.js',
  output:  {
    path:          `${__dirname}/dist/`,
    filename:      'swipeable.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test:    /\.jsx?$/,
        loader:  'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        options: {
          presets: [
            'react',
            'stage-2',
          ],
        },
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin({
      comments: false,
    }),
  ],
  externals: [
    'react',
    'lodash',
    'core-decorators',
    'classnames',
  ],
};

const devConfig = {
  output: {
    path:       `${__dirname}/demo`,
    filename:   'main.js',
    publicPath: '/assets/',
  },

  entry: ['babel-polyfill', './demo/app.js'],

  module: {
    rules: [
      {
        test:    /\.jsx?$/,
        loader:  'babel-loader',
        include: [
          path.resolve(__dirname, 'demo'),
          path.resolve(__dirname, 'src'),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        options: {
          presets: [
            'react',
            'stage-2',
          ],
        },
      },
      {
        test: /\.scss/,
        use:  [
          'style-loader',
          {loader:  'css-loader',
            options: {
              modules:        true,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg/,
        use:  [
          'url-loader',
        ],
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'demo'),
    port:        9000,
  },
};

const config = {
  ...isDist ? distConfig : [],
  ...isDev ? devConfig : [],
};


export default config;
