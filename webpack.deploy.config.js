var webpack = require('webpack');
var config = require('./webpack.config');

delete config.devtool;

module.exports = config;
