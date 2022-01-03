const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = () => {
    const devServer = {
        historyApiFallback: true,
        proxy: {},
    };

    const module = {
        rules: [
            {
                exclude: /(node_modules|bower_components)/,
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.(gif|png|jpg|jpeg|woff|woff2|ttf|eot|svg)$/,
                issuer: {
                    exclude: /\.jsx?$/,
                },
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    };

    const plugins = [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new MiniCssExtractPlugin({}),
        new CopyPlugin([{ from: "./public/audio", to: "./audio" }]),
    ];

    const resolve = {
        extensions: [".js", ".jsx"],
        modules: ["node_modules", "src"],
    };

    return {
        devServer,
        entry: "./src/index.jsx",
        module,
        plugins,
        resolve,
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "index_bundle.js",
        },
    };
};
