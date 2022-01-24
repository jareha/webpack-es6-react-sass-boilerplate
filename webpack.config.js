const path = require("path");
const webpack = require("webpack");

const root = path.resolve(__dirname);

const paths = {
  assets: `${root}/assets`,
  components: `${root}/components`,
  layouts: `${root}/layouts`,
  output: `${root}/build`,
  public: "/build/",
  styles: `${root}/styles`,
  utilities: `${root}/utilities`,
};

const regex = {
  javascript: /\.(js|jsx)$/,
  images: /\.(jpg|png|svg)$/i,
  nodeModules: /(node_modules)/,
  sass: /\.sass$/,
};

module.exports = {
  devServer: {
    hot: "only",
    port: 8080,
  },
  entry: {
    index: paths.layouts,
  },
  module: {
    rules: [
      {
        exclude: regex.nodeModules,
        test: regex.javascript,
        type: "javascript/auto",
        use: [
          {
            loader: "react-hot-loader/webpack",
          },
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/env",
              ],
            },
          },
        ],
      },
      {
        test: regex.images,
        type: "asset/resource",
      },
      {
        test: regex.sass,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer",
                ],
              },
            },
          },
          {
            loader: "sass-loader",
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                `${paths.styles}/index.sass`,
              ],
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "app.js",
    path: paths.output,
    publicPath: paths.public,
  },
  resolve: {
    alias: {
      assets: paths.assets,
      components: paths.components,
      styles: paths.styles,
      utilities: paths.utilities,
    },
    extensions: [
      "*",
      ".js",
      ".jsx",
      ".sass",
    ],
  },
};
