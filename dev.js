var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config.js');

new WebpackDevServer(webpack(config), {
  hot: true, // перезагружает только при изменении js файлов, если поменяли стили не перезагрузит автоматом
  noInfo: true
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});
