var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var autoprefix = '{browsers:["Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", "Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}';
var cssLoaders = ['css-loader', 'autoprefixer-loader?' + autoprefix];
var stylusLoaders = cssLoaders.slice(0);
stylusLoaders.push('stylus-loader?outputStyle=expanded&includePaths[]=' + (path.resolve(__dirname, './node_modules/bootstrap-sass')));

module.exports = {

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app/App'
    ],

    resolve: [

    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/,
                include: __dirname

            },{
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('style-loader', stylusLoaders.join('!')),
                exclude: /node_modules/,
                include: __dirname
            },{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', cssLoaders.join('!')),
                include: __dirname,
                exclude: /node_modules/
            },{
                test: /\.(png|woff|woff2|eot|ttf|svg)($|\?)/,
                loader: 'url-loader'
            }
        ]
    }
};



