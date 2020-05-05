const path = require("path");

module.exports = {
  entry: {
    "central": "./src/central.ts",
    "direct": "./src/direct.ts",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
}
