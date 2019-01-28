import React from 'react'
import renderer from 'react-test-renderer'

import Box from '../Box'

it('renders <Box /> without throwing', () => {
  const tree = renderer.create(<Box> I am a Box</Box>).toJSON()
  expect(tree).toMatchSnapshot()
})
