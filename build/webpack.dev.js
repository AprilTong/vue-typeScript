const merge = require('webpack-merge')
const common = require('./webpack.base.js')
const path = require('path')
const open = require('opn') //打开浏览器
const chalk = require('chalk')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist',
        overlay: true,
        after() {
            open('http://localhost:' + this.port)
                .then(() => {
                    console.log(chalk.cyan('成功打开链接： http://localhost:' + this.port))
                })
                .catch((err) => {
                    console.log(chalk.red(err))
                })
        },
        proxy: [
            {
                context: ['/'],
                // 所要请求的域名
                target: 'http://XXXX/',
                changeOrigin: true,
            },
        ],
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.(less)|(css)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            name: 'imgs/[name]_[hash:8].[ext]',
                            // publicPath: '../'
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new FriendlyErrorsWebpackPlugin()],
    mode: 'development',
})
