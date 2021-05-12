var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  mode: "development",
  entry: __dirname + '/src/app/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(pdf|gif|png|jpg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'babel-loader'
          }, {
            loader: 'react-svg-loader'
          }]
      },
      {
         test: /\.mp4/,
         use: {
           loader: 'url-loader',
           options: {
             limit: 10000,
             mimtetype: 'video/mp4',
           }
         }
       },
       {
         test: /\.html$/,
         use: 'html-loader?attrs[]=video:src',
         loader: 'html?interpolate=require'          
       },
       {
          test:/\.css$/,
          use:['style-loader','css-loader']
       },
   ],

  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },

  plugins: [HTMLWebpackPluginConfig]
};
