const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development', // or 'production'
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new Dotenv()
  ]
};
