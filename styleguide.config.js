const path = require('path')

module.exports = {
  components: 'src/components/**/[A-Z]*.js',
  defaultExample: true,
  title: 'MagicSoup.io - Stock',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'lib/styleguide/Wrapper'),
  },
  styleguideDir: 'docs',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
      ],
    },
  },
}
