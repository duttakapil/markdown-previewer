const { truncate } = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : "./src/index.js",
    mode : "development",
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : /(node_modules|bower_components)/,
                loader : "babel-loader",
                options : {presets : ["@babel/env"]}
            },
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"]
            }
        ]
    },
    resolve : {extensions : ["*", ".js", ".jsx"]},
    output : {
        path : path.resolve(__dirname, "build/"),
        filename : "bundle.js"
    },
    devServer : {
        contentBase : "./build",
        port : 3002,
        hotOnly : true
    },
    plugins : [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
        template: "./public/index.html"
    })]
}