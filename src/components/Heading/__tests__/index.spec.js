import Heading1 from '../index' // eslint-disable-line import/no-duplicates
import Heading2 from '../../Heading' // eslint-disable-line import/no-duplicates, import/no-useless-path-segments
import { Heading as Heading3 } from '../../../index'

it('imports correctly the Heading component', () => {
  expect(Heading1).toEqual(Heading2)
  expect(Heading2).toEqual(Heading3)
  expect(Heading1).toEqual(Heading3)
})
