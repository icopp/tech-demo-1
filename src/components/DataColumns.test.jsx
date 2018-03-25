import React from 'react'
import { shallow } from 'enzyme'

import { DataColumnsImpl } from './DataColumns'

// Note that `dive` is necessary because of `styled-components`, as otherwise
// selectors won't match properly
const dataColumns = shallow(
  <DataColumnsImpl
    tables={{
      RED: {
        n: 8,
        x: 1,
        m: 29,
        w: 20,
        d: 'LTR-UP',
        hideBelowWidth: null
      },
      GREEN: {
        n: 231,
        x: 1,
        m: 247,
        w: 30,
        d: 'LTR-UP',
        hideBelowWidth: null
      },
      BLUE: {
        n: 47,
        x: 2,
        m: 81,
        w: 40,
        d: 'RTL-UP',
        hideBelowWidth: 60
      }
    }}
  />
).dive()

it('renders a div element', () => {
  expect(dataColumns).toMatchSelector('div')
})

it('has three columns', () => {
  expect(dataColumns.children()).toHaveLength(3)
})
