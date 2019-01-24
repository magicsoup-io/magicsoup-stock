import styled from 'styled-components'
import {
  height,
  borderRadius,
} from 'styled-system'

import Box from '../Box'

const themed = key => props => props.theme[key]

const Image = styled(Box)`
  maxWidth: 100%;
  height: auto;
  ${height}
  ${borderRadius}
  ${themed('Image')}
`

/** @component */
export default Image

Image.propTypes = {
  ...height.propTypes,
  ...borderRadius.propTypes,
}

Image.defaultProps = {
  as: 'img',
  m: 0,
}
