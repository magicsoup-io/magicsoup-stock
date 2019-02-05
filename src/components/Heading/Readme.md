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