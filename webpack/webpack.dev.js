const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const {
  VanillaExtractPlugin
} = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new VanillaExtractPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Damicode'),
    }),
  ],
}