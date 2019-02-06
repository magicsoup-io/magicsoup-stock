Use this component for all headlines

```jsx
<Heading as="h1" color="primary">Say hello</Heading>
```

Use theming to give your headlines styling without depending on the html-tag:

```jsx static
// in your theme.js
const fontSizes = [
  10, 12, 14, 18, 22, 30, 44, 60,
]
const space = [
  0, 4, 8, 16, 32, 64, 128, 256,
]

export default {
  ...fontSizes,
  ...space,
  colors: {
    red: '#cb2431',
    primary: 'purple',
  },
  headings: {
    hero: {
      fontSize: fontSizes[7],
    },
    h1: {
      fontSize: fontSizes[6],
    },
    h2: {
      fontSize: fontSizes[5],
    },
  },
}

```

Use the variant

```jsx
<Heading as="h1" variant="hero">
  Hero headline
</Heading>

<Heading as="h2" variant="h2">
  H2 headline
</Heading>

<Heading as="h1" variant="h2">
  H1 headline with H2 styling
</Heading>

```

Note: If you set value in your theme.js and you set it also as props on the element, the value from the theme comes first. Example:

```jsx static
  # theme.js
  headings: {
    red: {
      color: 'red',
      fontSize: 40,
    },
  },

```

```jsx
  <Heading 
    as='h1' 
    variant='red' 
    color='blue'>
    I can't get blue
  </Heading>
```

If something is not theme releated, a "design-exception", then define the headline completely by yourself.

```jsx
  <Heading 
    as='h1'
    fontSize={6}
    color='blue'>
    I can get blue
  </Heading>
```
