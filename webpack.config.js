const path = require('path')

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8001,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
         
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}
const path = require('path');
const ghPages = require('gh-pages');

if (process.env.NODE_ENV === 'production') {
  ghPages.publish(path.join(__dirname, 'dist'), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Deployed to GitHub Pages');
    }
  });
}
