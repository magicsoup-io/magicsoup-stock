import styled from 'styled-components'

import {
  space,
  color,
  width,
  maxWidth,
  flex,
  order,
  alignSelf,
  fontSize,
} from 'styled-system'

const Box = styled('div')`
  box-sizing: border-box;
  ${space}
  ${width}
  ${maxWidth}
  ${fontSize}
  ${color}
  ${flex}
  ${order}
  ${alignSelf}
`
/** @component */
export default Box

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...maxWidth.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
}
