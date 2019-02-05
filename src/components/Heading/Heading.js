import styled from 'styled-components'
import { variant } from 'styled-system'
import PropTypes from 'prop-types'

import Text from '../Text'

const themed = key => props => props.theme[key]

const headings = variant({ key: 'headings' })

const Heading = styled(Text)`
  ${headings}
  ${themed('Heading')}
`
/** @component */
export default Heading

Image.propTypes = {
  ...headings.propTypes,
  as: PropTypes.string,
}

Heading.defaultProps = {
  as: 'h2',
}
