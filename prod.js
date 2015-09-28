var webpack = require('webpack');
var config = require('./webpack.prod.config.js');

var compiler = webpack(config);

compiler.run(function() {
    console.log(arguments);
});