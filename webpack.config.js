var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var TextPlugin = require('extract-text-webpack-plugin');

var config = {

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
        new TextPlugin("index.css"),
        new webpack.NoErrorsPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            template: 'template/index.html',
            filename: 'index.html',
            inject: true
        }),

        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders : [
                    'react-hot',
                    'babel?optional[]=runtime&stage=0'
                ],
                exclude: /node_modules/,
                include: path.join(__dirname, 'app')

            },{
                test: /\.css$/,
                loader: TextPlugin.extract('style-loader','css-loader!minimize'),
                include: __dirname,
                exclude: /node_modules/
            },{
                test: /\.styl$/,
                loader: TextPlugin.extract('style-loader','css-loader!autoprefixer-loader?browsers=last 5 version!stylus-loader'),
                include: __dirname,
                exclude: /node_modules/
            },{
                test: /\.(png|woff|woff2|eot|ttf|svg)($|\?)/,
                loader: 'url-loader'
            }
        ]

    }

};

if (process.env.NODE_ENV === 'production') {
    config.entry = ['./app/App'];
    config.output.path = path.join(__dirname, 'build');
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));
}

module.exports = config;