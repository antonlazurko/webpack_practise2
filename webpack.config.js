const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


// const { Template } = require('webpack');


module.exports = {
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'my-first-webpack.bundle.js'
    },
    module: {
      rules:[{
        test: /\.css$/i,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
                  }
      },{
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },]
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
            new CleanWebpackPlugin(),
]
,
    devServer: {
    port: 4444,
    open: true,
    stats: 'errors-only',
  },
};