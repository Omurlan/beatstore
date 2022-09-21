const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";

const handleUseExtractOrLoader = (use = []) => {
  const arr = [isProd ? MiniCssExtractPlugin.loader : "style-loader", ...use];
  return arr;
};

const emitPostcss = () => {
  const conf = {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: ["postcss-preset-env"],
      },
    },
  };

  return conf;
};

const plugins = () => {
  const arr = [
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    isProd && new MiniCssExtractPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean);

  return arr;
};

module.exports = {
  mode: isProd ? "production" : "development",
  entry: path.resolve(__dirname, `src/index.tsx`),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
    clean: true,
  },
  devServer: {
    static: "build",
    port: 3000,
  },
  devtool: "inline-source-map",
  plugins: plugins(),
  resolve: {
    alias: {
      variables: path.resolve(__dirname, "src/utilities/_variables.scss"),
      assets: path.resolve(__dirname, "src/assets/"),
    },
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: handleUseExtractOrLoader(["css-loader", emitPostcss()]),
      },
      {
        test: /\.(s[ac])ss$/i,
        use: handleUseExtractOrLoader([
          "css-loader",
          emitPostcss(),
          "sass-loader",
        ]),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
