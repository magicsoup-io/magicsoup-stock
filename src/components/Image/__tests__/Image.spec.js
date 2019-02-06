import React from 'react'
import renderer from 'react-test-renderer'

import { Image } from '../../../index'

it('renders <Image /> without throwing', () => {
  const tree = renderer.create(
    <Image src="https://source.unsplash.com/random/1280x720" />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
