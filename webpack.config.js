const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // The `injectType`  option can be avoided because it is default behaviour
          { loader: "style-loader", options: { injectType: "styleTag" } },
          "css-loader",
        ],
      },
    ],
  },
  mode: 'development',
  entry: {
    index: './src/index.js',
    createProduct: './src/createProduct.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
  },
  plugins: [
  new HtmlWebpackPlugin({  // Also generate a test.html
    chunks: ['index'],
    filename: 'index.html',
    template: './src/index.html'
  }),
  new HtmlWebpackPlugin({  // Also generate a test.html
    chunks: ['createProduct'],
    filename: 'createProduct.html',
    template: './src/createProduct.html'
  })
],
};