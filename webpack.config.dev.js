const path = require('path');

const dirs = {
  sources: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  styles: path.resolve(__dirname, 'src/styles'),
  assets: path.resolve(__dirname, 'assets'),
  components: path.resolve(__dirname, 'src/components')
};

module.exports = {
  context: dirs.sources,
  entry: './app.js',

  output: {
    path: dirs.dist,
    publicPath: '/',
    filename: 'app.js'
  },

  devtool: 'cheap-module-eval-source-map',
  target: 'web',

  devServer: {
    contentBase: 'src',
    compress: true,
    port: 4000
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'src': dirs.sources,
      'styles': dirs.styles,
      'assets': dirs.assets,
      'components': dirs.components
    }
  },

  module: {
    rules: [{
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
      test: /\.(woff2?|ttf|otf|eot)$/,
      loader: 'file-loader',
      exclude: /node_modules/,
      options: {
        name: '[path][name].[ext]'
      }
    }, {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }
      ]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(?:png|jpg|gif|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 8192
      }
    }]
  }
};
