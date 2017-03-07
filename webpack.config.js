const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
//	'react-hot-loader/patch',
	bundle:'./src/app.js',
	vendor:['react','semantic-ui-react','react-dom','react-router']
	},
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
    	new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        sourceMap: true,//这里的soucemap 不能少，可以在线上生成soucemap文件，便于调试
        mangle: true
   	 }),
       new webpack.optimize.CommonsChunkPlugin({name:'vendor',  filename:'./static/js/vendor.js'}),
       new webpack.NamedModulesPlugin(),
    //         // prints more readable module names in the browser console on HMR updates
       ],
}
