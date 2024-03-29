var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
      },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest', 'stage-3'],
                  },
              },
        ],
      },
    stats: {
        colors: true,
      },
    devtool: 'source-map',
  };
