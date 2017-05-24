var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/private/polyfills.ts',

        'app': './src/private/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js', '.png', '.scss']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            },
            {
                test: /\.scss$/,
                exclude: /node-modules/,
                use: [{
                        loader: 'raw-loader'
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./src/private'), // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/private/index.html'
        }),
        new CopyWebpackPlugin([
            { from: helpers.root('src/private/assets/images'), to: 'assets/images' }
        ])
    ]
};