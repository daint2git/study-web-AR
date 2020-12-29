const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/template.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json'],
  },
  devServer: {
    port: 6969,
    host: 'localhost',
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
};
