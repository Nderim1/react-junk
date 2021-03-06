"use strict";

const debug = process.env.NODE_ENV !== "production";

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: path.join(__dirname, 'src', 'js', 'client.js'),
  devServer: {
    inline: true,
    port: 3000,
    contentBase: "dist",
    historyApiFallback: {
      index: '/index-static.html'
    }
  },
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    publicPath: "/js/",
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: 'babel-cache',
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
      }
    }]
  },
  plugins: debug ? [] : [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    mangle: true,
    sourcemap: false,
    beautify: false,
    dead_code: true
  }),
  ]
};
// "use strict";
// const debug = process.env.NODE_ENV !== "production";

// const webpack = require('webpack');
// const path = require('path');

// module.exports = {
//   devtool: debug ? 'inline-sourcemap' : null,
//   entry: [
//   'webpack/hot/only-dev-server',
//   path.join(__dirname, 'src/js/client.js'),
//   'webpack-dev-server/client?localhost:8080'
//   ],
//   devServer: {
//     inline: true,
//     contentBase: "./dist/",
//     historyApiFallback: {
//       index: '/dist/index.html'
//     }
//   },
//   output: {
//     path: path.join(__dirname, 'dist/js'),
//     publicPath: "/js/",
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//     {
//       test: /\.jsx?$/,
//       exclude: /(node_modules|bower_components)/,
//       loader: 'babel-loader',
//       query: {
//         presets: ['react', 'es2015', 'stage-0'],
//         plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
//       }
//     }
//     ]
//   },
//   plugins: debug ? [] : [
//   new webpack.DefinePlugin({
//     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
//   }),
//   new webpack.optimize.DedupePlugin(),
//   new webpack.optimize.OccurenceOrderPlugin(),
//   new webpack.optimize.UglifyJsPlugin({
//     compress: { warnings: false },
//     mangle: true,
//     sourcemap: false,
//     beautify: false,
//     dead_code: true
//   }),
//   ]
// };
// var debug = process.env.NODE_ENV !== "production";
// var webpack = require('webpack');
// var path = require('path');

// module.exports = {
//   context: path.join(__dirname, "src"),
//   devtool: debug ? "inline-sourcemap" : null,
//   entry: "./js/client.js",
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015', 'stage-0'],
//           plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
//         }
//       }
//     ]
//   },
//   output: {
//     path: path.join(__dirname, "dist/js"),
//     filename: "bundle.js"
//   },
//   plugins: debug ? [] : [
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
//   ],
// };
