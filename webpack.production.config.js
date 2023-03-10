
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

var autoprefixer = require('autoprefixer');
var lostGrid = require('lost');

//NODE_ENV=production node --max_old_space_size=4096 node_modules/webpack/bin/webpack --config webpack.production.config.js --progress --profile --colors

// global css
loaders.push({
	test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
	loaders: [
		'style?sourceMap',
		'css'
	]
});

// local scss modules
loaders.push({
	test: /\.scss$/,
	loaders: [
		'style?sourceMap',
		'css?sourceMap',
		'postcss?sourceMap',
		'sass?sourceMap'
	]
});

// // local css modules
// loaders.push({
// 	test: /[\/\\]src[\/\\].*\.css/,
// 	loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
// });

// // local scss modules
// loaders.push({
// 	test: /[\/\\]src[\/\\].*\.scss/,
// 	loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass')
// });
// // global css files
// loaders.push({
// 	test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
// 	loader: ExtractTextPlugin.extract('style', 'css')
// });

module.exports = {
	entry: [
		'./src/index.jsx'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: '[name].[hash].js',
		publicPath: 'http://www.redshiftdigital.com/holiday2016/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new ExtractTextPlugin('[contenthash].css', {
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			title: 'Redshift Winter 2016'
		}),
		new webpack.optimize.DedupePlugin()
	],

	postcss: () => ([
    autoprefixer({ browsers: ['> 1%', 'ie 9'] }),
    lostGrid
  ])
};
