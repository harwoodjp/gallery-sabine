const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "./public/js/index.js"),
  output: {
    path: path.join(__dirname, './public/'),
    publicPath: "/public",
    filename: 'dist/app.bundle.js',
  },

  // watch: true,

  watchOptions: {
    poll: true
  },

   performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  module: {
    rules: [

      { // babel, es6, react
        test: /\.js$/,
        exclude: /node_modules/, 
        use: [{
          loader: "babel-loader"
        }]
      },

      { // sass
        test: [/\.css$/, /\.scss$/, /\.sass$/],
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" }, 
          { loader: "sass-loader" }
        ]
      }

    ],
  },

  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 1776,
    historyApiFallback: true
  
  }
}
