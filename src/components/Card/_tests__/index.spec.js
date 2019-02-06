import Card1 from '../index' // eslint-disable-line import/no-duplicates
import Card2 from '../../Card' // eslint-disable-line import/no-duplicates, import/no-useless-path-segments
import { Card as Card3 } from '../../../index'

it('imports correctly the Card component', () => {
  expect(Card1).toEqual(Card2)
  expect(Card2).toEqual(Card3)
  expect(Card1).toEqual(Card3)
})
