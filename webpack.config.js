const webpack = require("webpack");
const path = require("path");

const config = {
  entry: ["@babel/polyfill", "react-hot-loader/patch", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: {
      index: "index.html",
    },
    // proxy: {
    //   "/quotes": {
    //     target: "https://friends-quotes-api.herokuapp.com",
    //   },
    // },
  },
};

module.exports = config;
