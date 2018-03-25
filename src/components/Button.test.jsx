import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

const button = shallow(<Button />)

it('renders a button element', () => {
  expect(button).toMatchSelector('button')
})
