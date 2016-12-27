const failPlugin = require('webpack-fail-plugin');
const webpack = require('webpack'); 

module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' }
    ]
  },
  devtool: 'source-map',
  plugins: [
    failPlugin,
    new webpack.optimize.UglifyJsPlugin()
  ]
 };
