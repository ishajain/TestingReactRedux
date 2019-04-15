const path = require('path')
const miniCSSExtractPlugin = require("mini-css-extract-plugin")
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {

    entry : './src/index.js',
    output: {
        filename : "bundle.js",
        path: path.resolve(__dirname,"dist/"),
        publicPath: "/"
        
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
              },
              {
                test: /\.css$/,
                use: [miniCSSExtractPlugin.loader, "css-loader"]
              },
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    plugins:[
        new miniCSSExtractPlugin({
            filename: "styles.css"
        }),
        new htmlWebPackPlugin({
            template: "./src/html/index.html",
            filename: "./index.html",
        })
    ]

}