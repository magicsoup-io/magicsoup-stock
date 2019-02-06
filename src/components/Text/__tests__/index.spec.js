import Text1 from '../index' // eslint-disable-line import/no-duplicates
import Text2 from '../../Text' // eslint-disable-line import/no-duplicates, import/no-useless-path-segments
import { Text as Text3 } from '../../../index'

it('imports correctly the Text component', () => {
  expect(Text1).toEqual(Text2)
  expect(Text2).toEqual(Text3)
  expect(Text1).toEqual(Text3)
})
