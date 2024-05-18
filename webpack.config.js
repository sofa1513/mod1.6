

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/main.js',
  
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'app'),
        publicPath: './',
    },
    output: {
        path: path.resolve(__dirname, 'app'), 
        filename: 'bundle.js',
      },
    devServer: {
        historyApiFallback: true,
        static: path.join(__dirname, 'app'),
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
           
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'src/assets'), 
                to: path.resolve(__dirname, 'app/assets') }
            ]
        }),
    ],
    resolve: {
        fallback: {
          "crypto": false,
          "path": false,
        }
      },
    module: {
        rules: [
          
            {
                test: /\.html$/,
                use: [
                  {
                    loader: 'html-loader',
                    options: {
                      minimize: {
                        collapseWhitespace: isProd
                      }
                    }
                  }
                ]
              },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'postcss-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i, 
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                } 
                

            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                type: 'asset/inline' 
            },
        ]
    },
    
};