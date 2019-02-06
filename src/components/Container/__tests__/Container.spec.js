import React from 'react'
import renderer from 'react-test-renderer'

import { Container } from '../../../index'

it('renders <Container /> without throwing', () => {
  const tree = renderer.create(<Container> I am a Container</Container>).toJSON()
  expect(tree).toMatchSnapshot()
})
