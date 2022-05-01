var path = require('path');

module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              "presets": [
                ["@babel/preset-react", {
                  "runtime": "automatic"
                }]
              ]
            }
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        } 
      ]
    },
    resolve: {
      extensions: ['*', 'js', '.jsx', '.ts', '.tsx'],
      alias: {
        routes: path.resolve(__dirname, './src/routes'),
        components: path.resolve(__dirname, './src/components'),
        store: path.resolve(__dirname, './src/store'),
      },
      preferRelative: true,
    },
    devtool: "source-map",
  };