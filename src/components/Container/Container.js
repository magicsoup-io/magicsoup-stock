import styled from 'styled-components'
import { maxWidth } from 'styled-system'
import Box from '../Box'

const themed = key => props => props.theme[key]

const Container = styled(Box)`
  ${maxWidth}
  ${themed('Container')}
`

/** @component */
export default Container

Container.propTypes = {
  ...maxWidth.propTypes,
}

Container.defaultProps = {
  mx: 'auto',
  px: 2,
  maxWidth: 1180,
}
