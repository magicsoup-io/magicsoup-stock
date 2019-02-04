const path = require('path')

module.exports = {
  sections: [
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Getting started',
          content: 'docs/getting-started.md',
        },
        {
          name: 'Properties',
          content: 'docs/properties.md',
          description: 'Learn the basic API for MAgicSoup components',
        },
        {
          name: 'Extending',
          content: 'docs/extending.md',
        },
        {
          name: 'Theming',
          content: 'docs/theming.md',
        },
        {
          name: 'Grid',
          content: 'docs/grid.md',
        },
      ],
    },
    {
      name: 'Components',
      content: 'docs/components.md',
      components: 'src/components/**/[A-Z]*.js',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Examples',
      content: 'docs/examples.md',
    },
    {
      name: 'Created by zauberware',
      href: 'https://www.zauberware.com',
    },
  ],
  defaultExample: true,
  title: 'MagicSoup.io',
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
