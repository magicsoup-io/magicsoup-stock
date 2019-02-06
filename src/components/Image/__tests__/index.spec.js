import Image1 from '../index' // eslint-disable-line import/no-duplicates
import Image2 from '../../Image' // eslint-disable-line import/no-duplicates, import/no-useless-path-segments
import { Image as Image3 } from '../../../index'

it('imports correctly the Image component', () => {
  expect(Image1).toEqual(Image2)
  expect(Image2).toEqual(Image3)
  expect(Image1).toEqual(Image3)
})
