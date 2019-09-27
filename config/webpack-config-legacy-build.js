const path = require('path');
module.exports = {
  entry: './build/index.js',
  devtool: 'source-map',
  mode: 'production',  //development
  output: {
    path: path.resolve('./build/legacy'),
    filename: 'ol.js',
    library: 'ol',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
};
