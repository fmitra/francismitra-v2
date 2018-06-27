const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const dirs = {
  sources: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  styles: path.resolve(__dirname, 'src/styles'),
  components: path.resolve(__dirname, 'src/components'),
  assets: path.resolve(__dirname, 'assets'),
  config: path.resolve(__dirname, 'config')
};

module.exports = {
  context: dirs.sources,
  entry: {
    app: './app.js',

    vendor: [
      'preact',
      'preact-router',
    ]
  },

  output: {
    path: dirs.dist,
    publicPath: '',
    filename: '[name]-[chunkhash].js',
    sourceMapFilename: '[file].map'
  },

  target: 'web',

  resolve: {
    extensions: ['.js', '.jsx'],

    alias: {
      'components': dirs.components,
      'src': dirs.sources,
      'styles': dirs.styles,
      'assets': dirs.assets,
      'config': dirs.config
    }
  },

  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(?:js|jsx)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,

      options: {
        failOnError: true
      }
    }, {
      test: /\.(?:js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,

      options: {
        presets: ['react', 'env', 'stage-2'],
        plugins: [
          ['transform-react-jsx', { 'pragma': 'h' }]
        ]
      }
    }, {
      test: /\.scss$/,
      use: [
        ExtractTextPlugin.loader,
        'css-loader?minimize',
        // TODO Update this to pass ocnfig
        // and remove extra file
        'postcss-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.hbs$/,
      loader: 'ejs-loader'
    }, {
      test: /\.(?:png|jpg|gif|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 8192,
        name: 'assets/images/[name]-[hash].[ext]'
      }
    }]
  },

  optimization: {
    minimize: true
    //    splitChunks: {
    //      chunks: 'async',
    //      minChunks: 1,
    //      name: true,
    //      cacheGroups: {
    //        vendors: {
    //          test: /[\\/]node_modules[\\/]/,
    //          priority: -10
    //        }
    //      }
    //    }
  },

  plugins: [
    //    new webpack.LoaderOptionsPlugin({
    //      minimize: true,
    //      debug: false,
    //
    //      options: {
    //        postcss: [
    //          autoprefixer({
    //            browsers: [
    //              '> 1%',
    //              'ie >= 10'
    //            ]
    //          })
    //        ]
    //      }
    //    }),

    new CleanWebpackPlugin(['dist']),

    new ExtractTextPlugin({
      filename: '[name]-[contenthash].css',
      chunkFilename: '[id].css'
    }),

    //    new webpack.DefinePlugin({
    //      'process.env': {
    //        NODE_ENV: JSON.stringify('production')
    //      }
    //    }),

    //    new AssetsPlugin(),

    new HtmlWebpackPlugin({
      template: 'index.ejs',
      favicon: '../assets/images/meta/favicon.png'
    })
  ]
};
