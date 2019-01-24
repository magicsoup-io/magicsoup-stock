import styled from 'styled-components'

import Text from '../Text'

const themed = key => props => props.theme[key]

const Heading = styled(Text)`
  ${themed('Heading')}
`
/** @component */
export default Heading

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: 4,
  fontWeight: 'bold',
}
