const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

    entry: path.join(__dirname, "src", "index.tsx"),
    output: { path: path.join(__dirname, "build"), filename: "[name].bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js", "jsx"],
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
                    MiniCssExtractPlugin.loader, 
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
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
            template: path.join(__dirname,"src", "index.html")
        }),
        new MiniCssExtractPlugin()
    ]

}