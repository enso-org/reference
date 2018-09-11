const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// assets.js
const Npm = ["marked/marked.min.js",
             "luna-logo/index.js",
             "jquery/dist/jquery.min.js",
             "less/dist/less.min.js",
            ];

const Less = ["style.less"];

const Data = ["doc.json"];

const Glob = ["favicon.ico", "index.html"];


module.exports = {
    entry: {
        jsonToHtml: "./src/JsonToHtml.js",
        treeHelpers: "./src/TreeHelpers.js"
    },
    output: {
        path: __dirname + "/dist/js/",
        filename: "[name].bundle.js"
    },
    plugins: [
      new CopyWebpackPlugin(
        Npm.map(asset => {
          return {
            from: path.resolve(__dirname, `./node_modules/${asset}`),
            to: path.resolve(__dirname, './dist/js/npm')
          };
        }).concat(Less.map(asset => {
          return {
            from: path.resolve(__dirname, `./styles/${asset}`),
            to: path.resolve(__dirname, './dist/styles')
          };
        })).concat(Data.map(asset => {
          return {
            from: path.resolve(__dirname, `./data/${asset}`),
            to: path.resolve(__dirname, './dist/data')
          };
        })).concat(Glob.map(asset => {
          return {
            from: path.resolve(__dirname, `./${asset}`),
            to: path.resolve(__dirname, './dist')
          };
        }))
      )
    ]
};
