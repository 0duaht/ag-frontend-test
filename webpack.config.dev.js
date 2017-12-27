const Webpack = require('webpack');
const Merge = require('webpack-merge');

const CommonConfig = require('./webpack.config.js');


module.exports = Merge(CommonConfig, {
  devtool: 'inline-source-map',

  devServer: {
    compress: true,
    historyApiFallback: true,
  },

  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('DEV'),
      },
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.NoEmitOnErrorsPlugin(),
  ],
});
