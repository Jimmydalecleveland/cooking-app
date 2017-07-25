const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'stylus-loader'];
const cssProd = ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ["css-loader", "stylus-loader"]
                })
const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: ['./src/scripts/App.js', './src/styles/main.styl'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      { test: /\.(styl)$/, use: cssConfig },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  devServer: {
    hot: true, // HMR
    contentBase: path.resolve(__dirname, 'dist'),
    inline: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMR
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: !isProd,
      allChunks: true
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/',
    },
    { reload: false }
    )
  ]
};