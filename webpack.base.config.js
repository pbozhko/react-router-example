const HtmlWebPackPlugin = require("html-webpack-plugin")

const baseUrl = "/"

module.exports = {
    output: {
        filename: 'main.js',
        publicPath: baseUrl
    },
    devServer: {
        port: 9000,
        publicPath: baseUrl
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
    plugins: [
        new HtmlWebPackPlugin({
            baseUrl: baseUrl,
            template: './src/index.html',
            filename: './index.html',
            inject: "body"
        })
    ]
}
