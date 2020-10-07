const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      Config: path.resolve(__dirname, 'src', 'config'),
      Components: path.resolve(__dirname, 'src', 'components'),
      Assets: path.resolve(__dirname, 'src', 'assets'),
      App: path.join(__dirname, 'src'),
      CSS: path.join(__dirname, 'src', 'assets', 'css'),
      SCSS: path.join(__dirname, 'src', 'assets', 'scss')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    contentBasePublicPath: path.resolve(__dirname, './public'),
    historyApiFallback: true
  },
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass'),
              sassOptions: {
                fiber: require('fibers')
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new ESLintPlugin()
  ]
};
