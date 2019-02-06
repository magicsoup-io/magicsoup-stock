import React from 'react'
import renderer from 'react-test-renderer'

import { Flex } from '../../../index'

it('renders <Flex /> without throwing', () => {
  const tree = renderer.create(<Flex> I am a Flex</Flex>).toJSON()
  expect(tree).toMatchSnapshot()
})
