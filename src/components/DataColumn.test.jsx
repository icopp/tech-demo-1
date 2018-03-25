import React from 'react'
import { shallow } from 'enzyme'

import { DataColumnImpl } from './DataColumn'
import DataTable from './DataTable'

// Note that `dive` is necessary because of `styled-components`, as otherwise
// selectors won't match properly
const dataColumn = shallow(
  <DataColumnImpl
    configureShownFor={null}
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
  expect(dataColumn).toMatchSelector('div')
})

it('includes a DataTable as a child', () => {
  expect(
    dataColumn
      .childAt(0)
      .childAt(0)
      .is(DataTable)
  ).toBe(true)
})
