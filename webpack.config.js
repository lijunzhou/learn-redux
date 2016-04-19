/**
 * Created by zhoulijun on 2015/12/27.
 */
var webpack = require("webpack");
var path = require("path");

module .exports = {
    entry : {
        entry : [
            "webpack-dev-server/client?http://localhost:8080",
            "webpack/hot/only-dev-server",
            "./src/entry.js"
        ]
    },
    output : {
        filename : "dev/[name].js"
    },
    module : {
        loaders : [
            {test : /\.(js|scss)$/ , loader : "react-hot" ,exclude: /node_modules/, include : path.join(__dirname,"src")},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve : {
        extensions : ['','.js','.css'],
        alias : {
            model : __dirname + "/src/todos/model"
        }
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
    ]
};


