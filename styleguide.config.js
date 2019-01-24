const path = require('path')

module.exports = {
  components: 'src/components/**/[A-Z]*.js',
  defaultExample: true,
  title: 'Styleguidist Boilerplate',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'lib/styleguide/Wrapper'),
  },
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
