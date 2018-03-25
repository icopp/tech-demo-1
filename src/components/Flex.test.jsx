import React from 'react'
import { shallow } from 'enzyme'

import Flex from './Flex'

const flex = shallow(<Flex />)

it('renders a div element', () => {
  expect(flex).toMatchSelector('div')
})
