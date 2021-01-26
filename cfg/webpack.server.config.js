const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { DefinePlugin } = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const COMMON_PLUGINS = [ new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}` }) ];

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  target: 'node',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server/'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.scss','.css']
  },
  externals: [
    nodeExternals(),
  ],
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                exportOnlyLocals: true,
              },
            }
          },
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: { outputPath: 'img' }
      },
    ],
  },
  plugins: COMMON_PLUGINS,
};
