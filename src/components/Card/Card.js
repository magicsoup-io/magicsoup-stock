import styled from 'styled-components'
import {
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant,
} from 'styled-system'

import Box from '../Box'

const themed = key => props => props.theme[key]

const cards = variant({ key: 'cards' })

const Card = styled(Box)`
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${backgroundImage}
  ${backgroundSize}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${opacity}
  ${cards}
  ${themed('Card')}
`
/** @component */
export default Card

Card.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...boxShadow.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundSize.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes,
  ...opacity.propTypes,
  ...cards.propTypes,
}
