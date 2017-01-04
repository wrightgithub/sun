var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:8080',
    'app': './js/app.js',
    'writeBlog': './js/admin/writeBlog.js',
  },
  output: {
    path: path.resolve("./build"),
    filename: '[name].bundle.js',
    // publicPath: '/static'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
      include: path.join(__dirname, '.')
    }]
  },
};
