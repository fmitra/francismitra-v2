const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('styles/[name]-[contenthash].css');
const extractSASS = new ExtractTextPlugin('styles/[name]-[contenthash].css');
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
      'react-compat',
      'react-router-dom'
    ]
  },

  output: {
    path: dirs.dist,
    publicPath: '/',
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
      'config': dirs.config,
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
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
      loaders: extractSASS.extract([
        {
          loader: 'css-loader?minimize'
        },
        {
          loader: 'postcss-loader'
        },
        {
          loader: 'sass-loader'
        }
      ])
    }, {
      test: /\.css$/,
      loaders: extractCSS.extract(['css-loader?minimize', 'postcss-loader'])
    }, {
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

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,

      options: {
        postcss: [
          autoprefixer({
            browsers: [
              '> 1%',
              'ie >= 10'
            ]
          })
        ]
      }
    }),

    new CleanWebpackPlugin(['dist']),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    extractCSS,
    extractSASS,
    new AssetsPlugin(),

    new HtmlWebpackPlugin({
      template: 'index.ejs',
      favicon: '../assets/images/meta/favicon.png'
    })
  ]
};
