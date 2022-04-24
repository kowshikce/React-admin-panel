const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: path.join(__dirname, "index.tsx"),
    output: { path: path.join(__dirname, "build"), filename: "[name].[contenthash].bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                use: ["babel-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: "/node_modules/",
                use: ["ts-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader", 
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|png|mp3|svg)$/,
                use: ["file-loader"],
            }
        ]
    },
    devServer: {
        static: {
            directory: path.public
        },
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html")
        })
    ]

}