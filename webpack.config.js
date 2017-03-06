const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
//	'react-hot-loader/patch',
	'./src/app.js'
	],
  output: {
    filename: './static/js/bundle.js'
  },
	module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    //
       new webpack.NamedModulesPlugin(),
    //         // prints more readable module names in the browser console on HMR updates
       ],
}
