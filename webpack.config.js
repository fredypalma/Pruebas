const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,'src/shopOnline/app/index.js'),
    output: {
        path: path.resolve(__dirname,'dist/shopOnline'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './dist',
    },
    resolve : {
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/i,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/shopOnline/app/template/index.html',
        }),
    ],
};