import styled from 'styled-components'
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system'

import Box from '../Box'

const themed = key => props => props.theme[key]

const Text = styled(Box)`
  ${fontFamily}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${letterSpacing}
  ${themed('Text')}
`

/** @component */
export default Text

Text.propTypes = {
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
}
