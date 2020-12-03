const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [ 'file-loader' ]
			}
		]
	},
	mode: 'development'
};
