import { Configuration } from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyHtmlPlugin from "copy-webpack-plugin";


const config: Configuration =
{
    mode: "development",
    devtool: "source-map",

    entry: "./src/index.ts",
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
            }
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyHtmlPlugin({
            patterns: [
                { from: "./src/appSettings.json", to: 'appSettings.json' }
            ]
        })
    ]
};

export default config;