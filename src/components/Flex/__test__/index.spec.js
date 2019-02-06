import Flex1 from '../index' // eslint-disable-line import/no-duplicates
import Flex2 from '../../Flex' // eslint-disable-line import/no-duplicates, import/no-useless-path-segments
import { Flex as Flex3 } from '../../../index'

it('imports correctly the Flex component', () => {
  expect(Flex1).toEqual(Flex2)
  expect(Flex2).toEqual(Flex3)
  expect(Flex1).toEqual(Flex3)
})
