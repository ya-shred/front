var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});
var autoprefix = '{browsers:["Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", "Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}';
var cssLoaders = ['css-loader', 'autoprefixer-loader?' + autoprefix];
var stylusLoaders = cssLoaders.slice(0);



stylusLoaders.push('stylus-loader?outputStyle=expanded&includePaths[]=');

module.exports = {

    entry: [
        './app/App',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server'
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin("[name].css",{
            allChunks: true
        }),
        devFlagPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.template.html',
            inject: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                //loaders: ['react-hot', 'babel'],
                loaders : [
                    'react-hot',
                    'babel?optional[]=runtime&stage=0',
                ],
                exclude: /node_modules/,
                include: path.join(__dirname, 'app')

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



