"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var lostGrid = require('lost');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

const inProduction = process.env.NODE_ENV === 'production';

//NODE_ENV=production node --max_old_space_size=4096 node_modules/webpack/bin/webpack -p --config webpack.config.js --progress --profile --colors

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

const entry = [];
const plugins = [];

if (!inProduction) {
  // local css modules
  loaders.push({
	  test: /[\/\\]src[\/\\].*\.css/,
	  loaders: [
		  'style?sourceMap',
		  'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
	  ]
  });


  var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  });

  [ new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/template.html',
      title: 'Redshift Winter 2016'
		}),
		devFlagPlugin
	].map(plugin => plugins.push(plugin));

  [
		`webpack-dev-server/client?http://${HOST}:${PORT}`,
		`webpack/hot/only-dev-server`,
	].map(entrypoint => entry.push(entrypoint));
}

entry.push(`./src/index.jsx`); // Your appʼs entry point

module.exports = {
	entry,
	devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: `http://localhost:${PORT}/`
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	devServer: {
		contentBase: "./public",
		// do not print bundle build stats
		noInfo: true,
		// enable HMR
		hot: true,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		host: HOST
	},
	plugins: plugins,

	postcss: () => ([
    autoprefixer({ browsers: ['> 1%', 'ie 9'] }),
    lostGrid
  ])
};
