var webpack = require('webpack');
var path = require('path');

function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [__dirname].concat(args));
}

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: root('src'),
	output: {
		path: root('dist'),
		filename: '[name].bundle.js',
		pathinfo: true
	},
	entry: {
		main: root('src/app/main.js')
	},
	resolve: {
		root: root('src'),
		extensions: [ '', '.js' ],
		modulesDirectories: [ 'node_modules' ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			chunks: [ 'polyfills', 'main' ]
		})
	]
};
