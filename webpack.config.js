const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|ico)$/, // for images
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin('style.css')
  ],
  mode: "production"
};