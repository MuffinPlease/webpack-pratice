const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            //Html
            {
                test: /\.m?js$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader'
                }
            },
            //Css
            {
                test: /\.css$/i,
                use:[MiniCssExtractPlugin.loader, 
                'css-loader'],
            },
            //Copy
            {
                test: /\.png/,
                type: "asset/resource"
            },
        ]
    },
    plugins: [
        //Html
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        //Css
        new MiniCssExtractPlugin(),
        //Copy
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname,"src","assets/images"),
                    to: "assets/images"
                }
            ]
        }),
    ],
}