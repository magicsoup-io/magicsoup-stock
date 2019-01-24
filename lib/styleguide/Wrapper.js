import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PropTypes } from 'prop-types'
import theme from '../theme'

const Wrapper = (props) => {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default Wrapper

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
}
