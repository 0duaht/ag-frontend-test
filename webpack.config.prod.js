const Webpack = require('webpack');
const Merge = require('webpack-merge');

const CommonConfig = require('./webpack.config.js');


module.exports = Merge(CommonConfig, {
  devtool: 'source-map',

  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('PROD'),
      },
    }),
    new Webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
  ],
});
