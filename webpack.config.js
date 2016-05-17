var path = require('path')
var webpack = require('webpack')
/**
 * ExtractTextPlugin
 * It would generate split css files
 * doc: http://webpack.github.io/docs/stylesheets.html
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: [
    //'webpack-hot-middleware/client',
    './index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/bundle/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([
      { from: './lib/*', to: './dist/' }
    ])
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    },
    {
      test: /\.scss/,
      loader: ["style", "css", "sass?config=otherSassLoaderConfig"]
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'url?limit=25000'
    }]
  }
}
