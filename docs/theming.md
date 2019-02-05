To apply themes to MagicSoup components, add a ThemeProvider component to the root of your application and pass a theme object as a prop.

```js static
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
```

If you do not apply your own theme, or you don't include all the keys the theme object expects, MagicSoup will revert to the default values, which are inherited from styled-system.

An example theme could look like the following:

```js static
// example theme.js

export default {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [
    10, 12, 14, 18, 22, 30, 44, 60
  ],
  colors: {
    red: '#cb2431',
    lightgray: '#f6f6ff'
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  }
}
```

## Theme Object

MagicSoup and styled-system allow global font sizes, colors, spacing, button variants, and other values to be set with a theme object.

The following keys will be picked up by styled-system props:

|Key|Type|Description| 
|---|---|---|
|`breakpoints`|Array|Array of strings representing viewport widths to use for min-width media queries. |
|`fontSizes`|Array| Array of numbers to use as a typographic scale  |
|`colors`|Object| Color names that can be used in `color`, `bg`, and `borderColor` props  |
|`space`|Array|Array of numbers for use as margin and pixel values|
|`fonts`|Array or Object|Values for the `fontFamily` prop|
|`fontWeights`|Array or Object|Values for `fontWeight` prop|
|`lineHeights`|Array or Object|Values for `lineHeight` prop|
|`letterSpacings`|Array or Object|Values for `letterSpacing` prop|
|`shadows`|Array or Object|Values for `boxShadow` prop|
|`borders`|Array or Object|Values for `border` props|
|`radii`|Array or Object|Values for `borderRadius` props|
|`opacity`|Array or Object|Values for `opacity` props|

By default arrays of numbers are interpreted as `px`, other unit of measurements can be specified by using an array of strings instead, e.x. `['768px', '992px', '1200px']`.

## Button, Card Headings variants

The Button and Card components accept a variant prop to pick up predefined styles in the theme.

```js static
// example theme.js
const red = '#cb2431'

export default {
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: red,
    },
    outline: {
      color: red,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    }
  }
}
```

With the above buttons object, the Button component can apply styles based on the variant prop.

```js static
<Button variant='primary' />
<Button variant='outline' />
```

## Override the magicsoup base components in your theme

You can set styling for base components directly in your theme.

```js static
// example theme.js
export default {
  Box: {
    color: '#fff',
    backgroundColor: red,
  },
  Headline: {
    color: red,
  }
}
```