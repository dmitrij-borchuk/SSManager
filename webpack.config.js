var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8083,
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },

      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  // // When importing a module whose path matches one of the following, just
  // // assume a corresponding global variable exists and use that instead.
  // // This is important because it allows us to avoid bundling all of our
  // // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // }
};
