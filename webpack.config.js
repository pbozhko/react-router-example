const HtmlWebPackPlugin = require("html-webpack-plugin");

const baseUrl = "/"

const htmlPlugin = new HtmlWebPackPlugin({
    baseUrl: baseUrl,
    template: "./index.html",
    filename: "./index.html"
});

module.exports = {
    output: {
        filename: 'main.js',
        publicPath: baseUrl
    },
    devServer: {
        port: 9000,
        publicPath: baseUrl,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [htmlPlugin]
};