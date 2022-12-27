import { Configuration } from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyHtmlPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


const config: Configuration =
{
    mode: "development",
    devtool: "source-map",

    entry: "./src/index.ts",
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: '[contenthash].js',
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
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
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
        }),
        new MiniCssExtractPlugin({
            
        })
    ],

    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
};

export default config;