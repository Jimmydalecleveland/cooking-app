const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'stylus-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'stylus-loader'],
});

const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: ['./src/scripts/index.jsx', './src/styles/main.styl'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      { test: /\.(styl)$/, use: cssConfig },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
      { test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 25000,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    hot: true, // HMR
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMR
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: !isProd,
      allChunks: true,
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/',
    },
    {
      reload: false,
    }),
  ],
};
