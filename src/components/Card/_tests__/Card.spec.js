import React from 'react'
import renderer from 'react-test-renderer'

import { Card } from '../../../index'

it('renders <Card /> without throwing', () => {
  const tree = renderer.create(<Card> I am a Card</Card>).toJSON()
  expect(tree).toMatchSnapshot()
})
