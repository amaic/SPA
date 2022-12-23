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
        filename: '[name].[hash].js',
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },

    resolve: {
        extensions: ['.ts', '.js'],
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