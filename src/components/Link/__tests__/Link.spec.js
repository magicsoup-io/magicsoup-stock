import React from 'react'
import renderer from 'react-test-renderer'

import { Link } from '../../../index'

it('renders <Link /> without throwing', () => {
  const tree = renderer.create(
    <Link href="https://www.google.com">A basic link element</Link>,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
