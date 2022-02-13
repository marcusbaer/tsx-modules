const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path')

const deps = require("./package.json").devDependencies;
module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  // mode: 'production',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: [/node_modules/, /\.web\.scss$/],
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.web\.scss$/,
        use: [
          {
            loader: 'raw-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "MyLibrary",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "Header": "./src/components/Header.tsx",
      },
      library: {
        type: "window",
        name: "MyLibrary"
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ]
}
