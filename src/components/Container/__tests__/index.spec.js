import Container1 from '../index' // eslint-disable-line import/no-duplicates
import Container2 from '../../Container' // eslint-disable-line import/no-duplicates, import/no-useless-path-segments
import { Container as Container3 } from '../../../index'

it('imports correctly the Container component', () => {
  expect(Container1).toEqual(Container2)
  expect(Container2).toEqual(Container3)
  expect(Container1).toEqual(Container3)
})
