import styled from 'styled-components'

import Box from '../Box'

const themed = key => props => props.theme[key]

const Link = styled(Box)`
  cursor: pointer;
  ${themed('Link')}
`
/** @component */
export default Link

Link.defaultProps = {
  as: 'a',
  color: 'blue',
}
