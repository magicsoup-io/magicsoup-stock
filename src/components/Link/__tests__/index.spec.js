import Link1 from '../index' // eslint-disable-line import/no-duplicates
import Link2 from '../../Link' // eslint-disable-line import/no-duplicates, import/no-useless-path-segments
import { Link as Link3 } from '../../../index'

it('imports correctly the Link component', () => {
  expect(Link1).toEqual(Link2)
  expect(Link2).toEqual(Link3)
  expect(Link1).toEqual(Link3)
})
