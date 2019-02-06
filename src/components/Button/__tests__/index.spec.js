import Button1 from '../index' // eslint-disable-line import/no-duplicates
import Button2 from '../../Button' // eslint-disable-line import/no-duplicates, import/no-useless-path-segments
import { Button as Button3 } from '../../../index'

it('imports correctly the Button component', () => {
  expect(Button1).toEqual(Button2)
  expect(Button2).toEqual(Button3)
  expect(Button1).toEqual(Button3)
})
