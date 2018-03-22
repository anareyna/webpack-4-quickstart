const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
          fallback: 'style-loader',
          allChunks: true,
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader?name=[name].[ext]',
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     mozjpeg: {
          //       progressive: true,
          //       quality: 65,
          //     },
          //     // optipng.enabled: false will disable optipng
          //     optipng: {
          //       enabled: false,
          //     },
          //     pngquant: {
          //       quality: '65-90',
          //       speed: 4,
          //     },
          //     gifsicle: {
          //       interlaced: false,
          //     },
          //   },
          // },
        ],
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          query: {}, // Can be empty
        },
      },
    ],
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
    },
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/markup/index.pug',
      filename: './index.html',
    }),
    new ExtractTextPlugin('[name].css'),
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      skipFirstNotification: true,
    }),
  ],
}
