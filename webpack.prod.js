const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const BASE_PATH = "/reideng/";

module.exports = {
    mode: "production",

    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: BASE_PATH,
        clean: true,
    },

    devtool: "eval-source-map",

    devServer: {
        port: 8000,
        historyApiFallback: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),

        new webpack.DefinePlugin({
            BASE_PATH: JSON.stringify(BASE_PATH),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};
