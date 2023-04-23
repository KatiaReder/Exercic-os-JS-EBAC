const HtmlWebpack = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpack({
            //filename é onde ele vai estar depois de rodar e template é o local inicial dele
            filename: 'index.html',
            template: './src/index.html'
        })
    ]
}