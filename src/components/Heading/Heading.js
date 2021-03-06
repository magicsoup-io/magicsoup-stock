import styled from 'styled-components'
import { variant } from 'styled-system'
import PropTypes from 'prop-types'

import Text from '../Text'

const headings = variant({ key: 'headings' })
const themed = key => props => props.theme[key]

const Heading = styled(Text)(
  headings,
  themed('Heading'),
)

/** @component */
export default Heading

Heading.propTypes = {
  ...headings.propTypes,
  as: PropTypes.string,
}

Heading.defaultProps = {
  as: 'h2',
}
