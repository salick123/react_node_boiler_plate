const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = [{
    target: "node",
    entry: './server/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    externals: [nodeExternals({modulesFromFile:true})],
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: true,
        __dirname: true
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: 'server.css',
        }),
      ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
				exclude: ['/node_modules', '/dist'],
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/,
				exclude: ['/node_modules', '/dist'],
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    }
},
{
    target: "node",
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/client'),
        filename: 'client.js'
    },
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: true,
        __dirname: true
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: 'client.css',
        }),
      ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
				exclude: ['/node_modules', '/dist'],
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    }
}];