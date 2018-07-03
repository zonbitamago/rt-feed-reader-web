const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: { app: "./src/react/init.js" },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "public")
  },
  optimization: {
    splitChunks: {
      name: "common",
      chunks: "initial"
    }
  },
  devServer: {
    contentBase: "./public",
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // target: "node",
  node: {
    console: true,
    fs: "empty",
    net: "empty",
    tls: "empty"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015", "react", "stage-0"],
              plugins: ["transform-decorators-legacy"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", { loader: "css-loader", options: { url: false } }]
      }
    ]
  }
};
