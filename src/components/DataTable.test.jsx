import React from 'react'
import { shallow } from 'enzyme'

import { DataTableImpl } from './DataTable'

// Note that `dive` is necessary because of `styled-components`, as otherwise
// selectors won't match properly
const dataTable = shallow(
  <DataTableImpl
    tableData={{
      n: 8,
      x: 1,
      m: 29,
      w: 20,
      d: 'LTR-UP',
      hideBelowWidth: null
    }}
  />
).dive()

it('renders a table element', () => {
  expect(dataTable).toMatchSelector('table')
})

it('has five rows of five cells each', () => {
  expect(dataTable.find('tbody').children()).toHaveLength(5)
  expect(
    dataTable
      .find('tbody')
      .childAt(0)
      .children()
  ).toHaveLength(5)
  expect(
    dataTable
      .find('tbody')
      .childAt(1)
      .children()
  ).toHaveLength(5)
  expect(
    dataTable
      .find('tbody')
      .childAt(2)
      .children()
  ).toHaveLength(5)
  expect(
    dataTable
      .find('tbody')
      .childAt(3)
      .children()
  ).toHaveLength(5)
  expect(
    dataTable
      .find('tbody')
      .childAt(4)
      .children()
  ).toHaveLength(5)
})

it('has cell contents that match the expected data', () => {
  const tbody = dataTable.find('tbody')
  const firstRow = tbody.childAt(0)
  const secondRow = tbody.childAt(1)
  const thirdRow = tbody.childAt(2)
  const fourthRow = tbody.childAt(3)
  const fifthRow = tbody.childAt(4)

  expect(firstRow.childAt(0).text()).toBe('28')
  expect(firstRow.childAt(1).text()).toBe('29')
  expect(firstRow.childAt(2).text()).toBe('<styled.td />')
  expect(firstRow.childAt(3).text()).toBe('<styled.td />')
  expect(firstRow.childAt(4).text()).toBe('<styled.td />')

  expect(secondRow.childAt(0).text()).toBe('27')
  expect(secondRow.childAt(1).text()).toBe('26')
  expect(secondRow.childAt(2).text()).toBe('25')
  expect(secondRow.childAt(3).text()).toBe('24')
  expect(secondRow.childAt(4).text()).toBe('23')

  expect(thirdRow.childAt(0).text()).toBe('18')
  expect(thirdRow.childAt(1).text()).toBe('19')
  expect(thirdRow.childAt(2).text()).toBe('20')
  expect(thirdRow.childAt(3).text()).toBe('21')
  expect(thirdRow.childAt(4).text()).toBe('22')

  expect(fourthRow.childAt(0).text()).toBe('17')
  expect(fourthRow.childAt(1).text()).toBe('16')
  expect(fourthRow.childAt(2).text()).toBe('15')
  expect(fourthRow.childAt(3).text()).toBe('14')
  expect(fourthRow.childAt(4).text()).toBe('13')

  expect(fifthRow.childAt(0).text()).toBe('8')
  expect(fifthRow.childAt(1).text()).toBe('9')
  expect(fifthRow.childAt(2).text()).toBe('10')
  expect(fifthRow.childAt(3).text()).toBe('11')
  expect(fifthRow.childAt(4).text()).toBe('12')
})
