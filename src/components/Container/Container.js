// styled-components based extension
import styled from 'styled-components'
import { maxWidth } from 'styled-system'
import Box from '../Box'

const themed = key => props => props.theme[key]

const Container = styled(Box)(
  themed('Container'),
  maxWidth,
)

Container.defaultProps = {
  mx: 'auto',
  px: 2,
  maxWidth: 1180,
}

/** @component */
export default Container
