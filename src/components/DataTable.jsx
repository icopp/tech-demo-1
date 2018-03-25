import * as React from 'react'
import { connect } from 'react-redux'
import {
  branch,
  compose,
  renderNothing,
  setDisplayName,
  withPropsOnChange
} from 'recompose'
import styled from 'styled-components'

import chunk from '../utils/chunk'
import isEven from '../utils/is-even'
import range from '../utils/range'

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  td {
    border: 1px solid black;
    padding: 10px;
  }
`

const EmptyTd = styled.td`
  background-color: gray;
`

/**
 * @type {React.StatelessComponent<{
    tableData: {
      n: number,
      x: number,
      m: number,
      w: number,
      d: 'LTR-UP' | 'RTL-UP',
      hideBelowWidth?: number
    }
  }>}
 */
export const DataTableImpl = ({ tableData }) => {
  const rows = chunk(
    range(tableData.n, tableData.m + tableData.x, tableData.x),
    5
  )
    .map(
      row =>
        row.length === 5
          ? row
          : row.concat(range(0, 5 - row.length).map(() => undefined))
    )
    .map(
      (row, i) =>
        (tableData.d === 'LTR-UP' && isEven(i)) ||
        (tableData.d === 'RTL-UP' && !isEven(i))
          ? row
          : row.reverse()
    )
    .reverse()

  return (
    <Table>
      <tbody>
        {rows.map((cells, i) => (
          <tr key={`row-${i}`}>
            {cells.map(
              (val, i) =>
                typeof val !== 'undefined' ? (
                  <td key={`cell-${i}`}>{val}</td>
                ) : (
                  <EmptyTd key={`cell-${i}`} />
                )
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default compose(
  connect(state => ({
    tables: state.tables
  })),
  branch(
    ({ tables, tableKey }) => !tableKey || !tables[tableKey],
    renderNothing()
  ),
  withPropsOnChange(['tables', 'tableKey'], ({ tables, tableKey }) => ({
    tableData: tables[tableKey]
  })),
  setDisplayName('DataTable')
)(DataTableImpl)
