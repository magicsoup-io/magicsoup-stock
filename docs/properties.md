MagicSoup components use styled-system for responsive, theme-based style props. Each MagicSoup component extends the base Box component, which includes several general-purpose style props.

Read more about [styled-component property API](https://github.com/jxnblk/styled-system/blob/master/docs/api.md)

### Colors
All MagicSoup components use styled-system's color function to add the `color` and `bg` props. The `color` and `bg` props make using colors from the color palette simple to help promote design consistency.

The color values can be defined in the theme.colors object.

```js static
<Box color='white' bg='blue' p={4}>
  Background and text color!
</Box>
```

```js static
// Keys reference values in the color palette object
<Box color='green' />

// Background color can be set with the `bg` prop
<Card bg='green' />

// Values that do not map to a key in `theme.colors` can be used
<Button bg='waffle' />

// Arrays can be used to change colors responsively
<Text color={[ 'red', 'green' ]} />
```

### Margin & Padding
All MagicSoup components use the space utility from styled-system to handle responsive margin and padding props based on a global spacing scale (theme.space). The margin and padding props help promote consistency in layout without the need to add custom margin and padding declarations throughout an application. The margin and padding props use a shorthand syntax, similar to other OOCSS approaches and many CSS libraries.

- `m`: margin
- `mt`: margin-top
- `mr`: margin-right
- `mb`: margin-bottom
- `ml`: margin-left
- `mx`: margin-left and margin-right
- `my`: margin-top and margin-bottom
- `p `: padding
- `pt`: padding-top
- `pr`: padding-right
- `pb`: padding-bottom
- `pl`: padding-left
- `px`: padding-left and padding-right
- `py`: padding-top and padding-bottom

```js static
<Card
  p={4}
  mx={3}
  my={5}
  color='white'
  bg='red'>
  My Card
</Card>
```

### Font-Size
The fontSize prop can pick up values from a typographic scale defined in your theme as a `theme.fontSizes` array.

### Width
The width prop can set fixed or percentage-based widths on an element.

The width prop accepts number, string, or array values, where:

Numbers between 0 and 1 are converted to percentage based widths (e.g. 1/2 becomes 50%)
Numbers greater than 1 are converted to pixels
Strings can be used for other CSS values (e.g. 50vw or 30em)
Arrays can be used for responsive styles

### Responsive Styles
All MagicSoup props accept arrays as values to set mobile-first responsive styles. The first value is not scoped to a media query and applies to all breakpoints. Each value after the first corresponds to a media query derived from `theme.breakpoints`.

See the [styled-system](https://github.com/jxnblk/styled-system/blob/master/docs/responsive-styles.md) docs for more info.

```js static
<Flex flexWrap='wrap'>
  <Box
    width={[ 1, 1/2 ]}
    p={2}
    color='white'
    bg='red'>
    First
  </Box>
  <Box
    width={[ 1, 1/2 ]}
    p={2}
    color='white'
    bg='blue'>
    Second
  </Box>
</Flex>
```

### CSS prop

To enable handling of css prop with styled-components v4, please add the `babel-plugin-styled-components` plugin to your Babel configuration.

```js static
// example of using the `css` prop
const CheckoutButton = props =>
  <Button
    {...props}
    css={{
      transition: 'transform .25s ease-out',
      '&:hover': {
        transform: 'scale(1.2)'
      },
      '&:active': {
        transform: 'scale(1)'
      }
    }}
  />
```