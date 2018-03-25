import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'
import { ConfigureImpl, ConfigureInput, ConfigureSelect } from './Configure'

// Note that `dive` is necessary because of `styled-components`, as otherwise
// selectors won't match properly
const configure = shallow(
  <ConfigureImpl
    currentTableOptions={null}
    dispatch={() => {
      return
    }}
    tableData={{
      n: 8,
      x: 1,
      m: 29,
      w: 20,
      d: 'LTR-UP',
      hideBelowWidth: null
    }}
    tableKey="RED"
  />
).dive()

it('renders a div element', () => {
  expect(configure).toMatchSelector('div')
})

it('includes four input elements and one select element', () => {
  expect(configure.find(ConfigureInput)).toHaveLength(4)
  expect(configure.find(ConfigureSelect)).toHaveLength(1)
})

it('includes two button elements', () => {
  expect(configure.find(Button)).toHaveLength(2)
})
