The `<Container>` is general layouting component which every website needs. It centers the content with a `max-width`. The default value is 1180px. You can change this value in your `theme.js`. The Container also has a small padding left and right.

```jsx
<Container bg='yellow'>
  <Box 
    bg='purple' 
    color='white'
    p={4}> 
    Content in a box
  </Box>
</Container>
```

Change the maxWidth in theme.js:

```jsx static

  Container: {
    maxWidth: 1200,
  },

```

Or change the `max-width` your layout needs on the fly:

```jsx
<Container maxWidth={400}>
  <Box bg='purple' color='white' p={4}> 
    Content in a box
  </Box>
</Container>
```
