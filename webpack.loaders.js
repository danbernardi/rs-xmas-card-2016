module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components|public)/,
		loaders: ['react-hot']
	},
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components|public)/,
		loader: 'babel',
		query: {
		  presets: ['es2015', 'react'],
		  plugins: ['transform-runtime',
                'transform-decorators-legacy',
                'transform-class-properties']
		}
	},
  {
    test: /flickity/,
    loader: 'imports?define=>false&this=>window'
  },
	{
		test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		loader: "url-loader?limit=10000&minetype=application/font-woff"
	},
  {
  	test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  	loader: "file-loader"
  },
	{
		test: /\.gif/,
		exclude: /(node_modules|bower_components)/,
		loader: "url-loader?limit=10000&mimetype=image/gif"
	},
	{
		test: /\.jpg/,
		exclude: /(node_modules|bower_components)/,
		loader: "url-loader?limit=10000&mimetype=image/jpg"
	},
	// {
	// 	test: /\.png/,
	// 	exclude: /(node_modules|bower_components)/,
	// 	loader: "url-loader?limit=10000&mimetype=image/png"
	// },
  // {
  //   test: /\.mp3/,
  //   exclude: /(node_modules|bower_components)/,
  //   loader: "url-loader?mimetype=audio/mpeg"
  // }
];
