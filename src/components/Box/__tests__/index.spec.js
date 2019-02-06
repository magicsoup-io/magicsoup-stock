import Box1 from '../index' // eslint-disable-line import/no-duplicates
import Box2 from '../../Box' // eslint-disable-line import/no-duplicates, import/no-useless-path-segments
import { Box as Box3 } from '../../../index'

it('imports correctly the Box component', () => {
  expect(Box1).toEqual(Box2)
  expect(Box2).toEqual(Box3)
  expect(Box1).toEqual(Box3)
})
