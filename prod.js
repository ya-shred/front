var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.prod.config.js');

var compiler = webpack(config);

console.log('start building');
compiler.run(function() {
    console.log('building completed');
    var app = express();

    var port = process.env.PORT || 3000;

    app.use(express.static(path.join(__dirname, 'build')));

    //app.get('/', function(request, response) {
    //    response.send('ok');
    //});

    app.listen(port);
    console.log('server listening at ', port);
});