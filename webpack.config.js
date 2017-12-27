const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');


const extractSass = new ExtractTextPlugin({
  filename: 'bundle.[hash].css',
  publicPath: '/',
});

module.exports = {
  entry: './src/index.js',

  output: {
    path: Path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.[hash].js',
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: process.env.NODE_ENV === 'PROD',
                sourceMap: true,
                importLoaders: 3,
                url: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => ([autoprefixer({ browsers: 'last 2 versions' })]),
                sourceMap: true,
              },
            },
            {
              loader: 'resolve-url-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: Path.join(__dirname, 'index.html'),
      filename: 'index.html',
    }),
    extractSass,
  ],
};
