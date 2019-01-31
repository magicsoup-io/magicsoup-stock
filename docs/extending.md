MagicSoup components are great to use as base components that can be extended for various purposes in your design system.

There are two primary ways to extend MagicSoup components:

```js static
// React-based extension
import React from 'react'
import { Box } from '@magicsoup.io/stock'

const Jumbotron = props =>
  <Box
    {...props}
    mx='auto'
    css={{
      maxWidth: '1024px'
    }}
  />
```

Using the css prop requires the use of `babel-plugin-styled-components`:

```js static
// styled-components based extension
import styled from 'styled-components'
import { Box } from '@magicsoup.io/stock'

const Jumbotron = styled(Box)({
  maxWidth: '1024px'
})

Jumbotron.defaultProps = {
  mx: 'auto'
}
```

See more [Examples](Examples.md).
