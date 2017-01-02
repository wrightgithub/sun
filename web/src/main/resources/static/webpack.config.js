var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:8080',
    './js/app.js'
  ],
  output: {
    path: path.resolve("./build"),
    filename: 'bundle.js',
    // publicPath: '/static'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
      include: path.join(__dirname, '.')
    }]
  }
};
