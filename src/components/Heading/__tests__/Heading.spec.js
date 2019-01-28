import React from 'react'
import renderer from 'react-test-renderer'

import Heading from '../Heading'

it('renders <Heading /> without throwing', () => {
  const tree = renderer.create(<Heading> I am a Heading</Heading>).toJSON()
  expect(tree).toMatchSnapshot()
})
