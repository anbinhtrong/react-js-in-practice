var webpack = require('webpack');
var path = require('path');
//folder contains compiled files
var BUILD_DIR = pathresolve(__dirname, 'src/client/public');
//folder contains files in the project
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
	entry: APP_DIR + 'index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bunlde.js'
	}
}

module.exports = config;