import React from 'react'
import renderer from 'react-test-renderer'

import { Text } from '../../../index'

it('renders <Text /> without throwing', () => {
  const tree = renderer.create(<Text> I am a Text</Text>).toJSON()
  expect(tree).toMatchSnapshot()
})
